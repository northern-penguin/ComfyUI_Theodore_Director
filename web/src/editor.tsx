import { render } from "preact";
import { useEffect, useMemo, useState } from "preact/hooks";
import { HighlightedTextarea } from "./highlighted-textarea";
import { t, type Language } from "./i18n";
import { generatedResultNumber, normalizeGeneratedResults, type GeneratedVideoResponse } from "./generated-results";
import { LazyVideoThumbnail } from "./lazy-video-thumbnail";
import { assetFileName, comfyViewUrl, MediaPreview } from "./media";
import { PostprocessPanel } from "./postprocess";
import { previewReferences, referenceTokenIsAvailable, referenceTokenIsGloballyAvailable, validatePlan } from "./reference";
import { appendShots } from "./shot-batch";
import type { AssetKind, DirectorAsset, DirectorPlan, DirectorShot } from "./types";

const uid = (prefix: string) => `${prefix}_${Date.now().toString(36)}_${Math.random().toString(36).slice(2, 7)}`;
const clone = <T,>(value: T): T => JSON.parse(JSON.stringify(value));
const KIND_LABELS: Record<AssetKind, string> = { image: "图片", video: "视频", audio: "音频" };

function normalizePlan(value: DirectorPlan): DirectorPlan {
  const plan = clone(value);
  plan.schemaVersion = 4;
  // 内部 ID 只用于兼容协议，不展示给用户，也不参与生成 hash。
  if (!plan.project.id?.trim()) plan.project.id = uid("project");
  // v1/v2 工作流没有逐镜头开关，默认保持原有接力流程。
  plan.shots = plan.shots.map((shot) => ({
    ...shot,
    latentRelay: shot.latentRelay ?? true,
    secondSampling: shot.secondSampling ?? true,
  }));
  return plan;
}

function exportFileStem(value: string): string {
  // 保留中文项目名，只替换 Windows/macOS/Linux 文件名共同不安全的字符。
  return value.trim().replace(/[<>:"/\\|?*\u0000-\u001f]+/g, "_").replace(/[. ]+$/g, "").slice(0, 96) || "theodore_project";
}

function newAsset(kind: AssetKind): DirectorAsset {
  const id = uid(kind);
  return { id, alias: id, kind, path: "", enabled: true, fixed: false, fixedOrder: 0, shotIds: [], includeVideoAudio: false, durationSeconds: kind === "image" ? null : 2, audioDurationSeconds: null, fingerprint: "" };
}

async function uploadAsset(projectName: string, kind: AssetKind, file: File): Promise<string> {
  const body = new FormData();
  body.append("projectName", projectName);
  body.append("kind", kind);
  body.append("file", file);
  const response = await fetch("/theodore-director/v1/assets", { method: "POST", body });
  const result = await response.json() as { path?: string; error?: string };
  if (!response.ok || !result.path) throw new Error(result.error || `HTTP ${response.status}`);
  return result.path;
}

async function fetchGeneratedVideo(plan: DirectorPlan, shot: DirectorShot, activeIndex: number): Promise<GeneratedVideoResponse> {
  const query = new URLSearchParams({
    projectName: plan.project.name,
    runId: plan.project.runId,
    shotId: shot.id,
    activeIndex: String(activeIndex),
  });
  const response = await fetch(`/theodore-director/v1/generated-video?${query.toString()}`);
  const result = await response.json() as GeneratedVideoResponse;
  if (!response.ok) throw new Error(result.error || `HTTP ${response.status}`);
  return result;
}

async function writeClipboardText(value: string): Promise<void> {
  if (navigator.clipboard?.writeText) {
    try {
      await navigator.clipboard.writeText(value);
      return;
    } catch {
      // 某些嵌入式浏览器虽然暴露 API，却会拒绝权限，继续使用兼容方案。
    }
  }
  // 兼容未开放 Clipboard API 的本机浏览器环境。
  const textarea = document.createElement("textarea");
  textarea.value = value;
  textarea.style.position = "fixed";
  textarea.style.opacity = "0";
  document.body.append(textarea);
  textarea.select();
  const copied = document.execCommand("copy");
  textarea.remove();
  if (!copied) throw new Error("浏览器拒绝写入剪贴板");
}

interface EditorProps { initial: DirectorPlan; onSave: (plan: DirectorPlan) => void; onClose: () => void; supportsSecondSampling: boolean }

function Editor({ initial, onSave, onClose, supportsSecondSampling }: EditorProps) {
  const [plan, setPlan] = useState<DirectorPlan>(() => normalizePlan(initial));
  const [tab, setTab] = useState<"shots" | "assets" | "settings" | "postprocess">("shots");
  const [selected, setSelected] = useState(0);
  const [language, setLanguage] = useState<Language>(() => navigator.language.startsWith("zh") ? "zh" : "en");
  const [uploadNames, setUploadNames] = useState<Record<string, string>>({});
  const [previewOpen, setPreviewOpen] = useState(false);
  const [resultOpen, setResultOpen] = useState(true);
  const [resultRevision, setResultRevision] = useState(0);
  const [generatedVideo, setGeneratedVideo] = useState<GeneratedVideoResponse>({ found: false, results: [] });
  const [selectedGeneratedPath, setSelectedGeneratedPath] = useState("");
  const [generatedLoading, setGeneratedLoading] = useState(false);
  const [copiedAssetId, setCopiedAssetId] = useState("");
  const [batchOpen, setBatchOpen] = useState(false);
  const [batchShots, setBatchShots] = useState<DirectorShot[]>([]);
  const [uniformDuration, setUniformDuration] = useState("5");
  const [appendCount, setAppendCount] = useState("1");
  const [appendDuration, setAppendDuration] = useState("5");
  const shot = plan.shots[Math.min(selected, plan.shots.length - 1)];
  const preview = useMemo(() => shot ? previewReferences(plan, shot) : null, [plan, shot]);
  const activeIndex = shot?.enabled ? plan.shots.slice(0, selected).filter((item) => item.enabled).length : -1;
  const allSecondSampling = plan.shots.length > 0 && plan.shots.every((item) => item.secondSampling);
  const allBatchEnabled = batchShots.length > 0 && batchShots.every((item) => item.enabled);
  const generatedResults = useMemo(() => normalizeGeneratedResults(generatedVideo), [generatedVideo]);
  const selectedGenerated = generatedResults.find((item) => item.path === selectedGeneratedPath) ?? generatedResults[0];
  const generatedVideoUrl = selectedGenerated?.path ? comfyViewUrl(selectedGenerated.path, "output") : null;
  const mutate = (fn: (draft: DirectorPlan) => void) => setPlan((current) => { const draft = clone(current); fn(draft); return draft; });
  const moveShot = (from: number, direction: number) => mutate((draft) => { const to = from + direction; if (to < 0 || to >= draft.shots.length) return; [draft.shots[from], draft.shots[to]] = [draft.shots[to], draft.shots[from]]; setSelected(to); });
  const deleteShot = (index: number) => mutate((draft) => {
    // 至少保留一个分镜，避免产生无法通过计划校验的空项目。
    if (draft.shots.length <= 1) return;
    draft.shots.splice(index, 1);
    setSelected((current) => {
      if (current > index) return current - 1;
      if (current === index) return Math.min(index, draft.shots.length - 1);
      return current;
    });
  });
  const openBatchEditor = () => {
    // 批量编辑使用独立副本，用户取消面板时不改动当前导播台计划。
    setBatchShots(clone(plan.shots));
    setBatchOpen(true);
  };
  const applyUniformDuration = () => {
    const duration = Number(uniformDuration);
    if (!Number.isFinite(duration) || duration <= 0) {
      window.alert(language === "zh" ? "统一时长必须大于 0 秒" : "The shared duration must be greater than 0 seconds.");
      return;
    }
    setBatchShots((current) => current.map((item) => ({ ...item, durationSeconds: duration })));
  };
  const appendBatchShots = () => {
    const count = Number(appendCount);
    const duration = Number(appendDuration);
    if (!Number.isInteger(count) || count < 1 || count > 100) {
      window.alert(language === "zh" ? "新增镜头数量必须是 1–100 的整数" : "The shot count must be an integer from 1 to 100.");
      return;
    }
    if (!Number.isFinite(duration) || duration <= 0) {
      window.alert(language === "zh" ? "新增镜头时长必须大于 0 秒" : "The new-shot duration must be greater than 0 seconds.");
      return;
    }
    setBatchShots((current) => appendShots(current, count, duration));
  };
  const toggleAllBatchShots = () => {
    const enabled = !allBatchEnabled;
    // 只更新批量面板的临时副本，用户点击“应用更改”后才写入正式计划。
    setBatchShots((current) => current.map((item) => ({ ...item, enabled })));
  };
  const applyBatchChanges = () => {
    if (batchShots.some((item) => !Number.isFinite(item.durationSeconds) || item.durationSeconds <= 0)) {
      window.alert(language === "zh" ? "每个镜头的时长都必须大于 0 秒" : "Every shot duration must be greater than 0 seconds.");
      return;
    }
    mutate((draft) => { draft.shots = clone(batchShots); });
    setSelected((current) => Math.min(current, batchShots.length - 1));
    setBatchOpen(false);
  };
  const exportPlan = () => {
    const url = URL.createObjectURL(new Blob([JSON.stringify(plan, null, 2)], { type: "application/json" }));
    const link = document.createElement("a");
    link.href = url; link.download = `${exportFileStem(plan.project.name)}.director.json`; link.click();
    URL.revokeObjectURL(url);
  };
  const savePlan = () => {
    const errors = validatePlan(plan);
    if (errors.length) { window.alert(`计划未通过校验：\n\n${errors.join("\n")}`); return; }
    onSave(plan);
  };

  useEffect(() => {
    let cancelled = false;
    if (!shot) {
      setGeneratedVideo({ found: false, results: [] });
      setSelectedGeneratedPath("");
      setGeneratedLoading(false);
      return () => { cancelled = true; };
    }
    setGeneratedLoading(true);
    // 禁用镜头也按稳定 shot ID 查询历史结果；activeIndex=-1 只表达当前不参加执行。
    void fetchGeneratedVideo(plan, shot, activeIndex)
      .then((result) => {
        if (cancelled) return;
        const results = normalizeGeneratedResults(result);
        setGeneratedVideo(result);
        setSelectedGeneratedPath((current) => results.some((item) => item.path === current) ? current : (results[0]?.path ?? ""));
      })
      .catch((error) => { if (!cancelled) { setGeneratedVideo({ found: false, results: [], error: String(error) }); setSelectedGeneratedPath(""); } })
      .finally(() => { if (!cancelled) setGeneratedLoading(false); });
    return () => { cancelled = true; };
  }, [plan.project.name, plan.project.runId, shot?.id, shot?.enabled, activeIndex, resultRevision]);

  return <div class="td-shell">
    <header><h1>{t(language, "title")}</h1><div class="td-actions"><button onClick={exportPlan}>导出 / Export</button><label class="td-import">导入 / Import<input type="file" accept="application/json,.json" onChange={async (event) => { const file = event.currentTarget.files?.[0]; if (!file) return; try { const imported = JSON.parse(await file.text()) as Partial<DirectorPlan>; if (!imported.project || !Array.isArray(imported.shots) || !Array.isArray(imported.assets)) throw new Error("不是有效的 Theodore Director Plan"); setPlan(normalizePlan(imported as DirectorPlan)); setSelected(0); } catch (error) { window.alert(String(error)); } }}/></label><button onClick={() => setLanguage(language === "zh" ? "en" : "zh")}>{language === "zh" ? "EN" : "中文"}</button><button class="primary" onClick={savePlan}>{t(language, "save")}</button><button onClick={onClose}>{t(language, "close")}</button></div></header>
    <nav>{(["shots", "assets", "settings", "postprocess"] as const).map((name) => <button class={tab === name ? "active" : ""} onClick={() => setTab(name)}>{t(language, name)}</button>)}</nav>
    <main>
      {tab === "shots" && <div class="td-shots">
        <aside class="td-shot-sidebar">{supportsSecondSampling && <button class={`wide td-bulk-toggle ${allSecondSampling ? "active" : ""}`} onClick={() => mutate((draft) => { const enabled = !draft.shots.every((item) => item.secondSampling); draft.shots.forEach((item) => { item.secondSampling = enabled; }); })}>{language === "zh" ? `全部二次采样：${allSecondSampling ? "开" : "关"}` : `Second sampling for all: ${allSecondSampling ? "ON" : "OFF"}`}</button>}<div class="td-shot-list">{plan.shots.map((item, index) => <div key={item.id} class={`td-shot-card ${index === selected ? "selected" : ""}`} onClick={() => setSelected(index)}><div class="td-shot-delete-action"><button class="td-shot-delete" disabled={plan.shots.length <= 1} title={language === "zh" ? (plan.shots.length <= 1 ? "至少保留一个镜头" : "删除镜头") : (plan.shots.length <= 1 ? "Keep at least one shot" : "Delete shot")} aria-label={language === "zh" ? "删除镜头" : "Delete shot"} onClick={(event) => { event.stopPropagation(); deleteShot(index); }}>×</button></div><strong>{index + 1}. {item.title}</strong><span>{item.durationSeconds}s · {item.enabled ? "ON" : "OFF"}</span><div class="td-shot-move-actions"><button title={language === "zh" ? "上移镜头" : "Move shot up"} onClick={(event) => { event.stopPropagation(); moveShot(index, -1); }}>↑</button><button title={language === "zh" ? "下移镜头" : "Move shot down"} onClick={(event) => { event.stopPropagation(); moveShot(index, 1); }}>↓</button></div></div>)}</div><button class="wide" onClick={() => mutate((draft) => { const addedIndex = draft.shots.length; draft.shots = appendShots(draft.shots, 1, 5); setSelected(addedIndex); })}>＋ {t(language, "addShot")}</button><div class="td-shot-batch-entry"><button class="wide" onClick={openBatchEditor}>{language === "zh" ? "批量处理镜头" : "Batch edit shots"}</button></div></aside>
        {shot && <section class="td-form">
          <div class="td-shot-meta">
            <label>ID<input value={shot.id} onInput={(event) => mutate((draft) => { draft.shots[selected].id = event.currentTarget.value; })}/></label>
            <label>标题 / Title<input value={shot.title} onInput={(event) => mutate((draft) => { draft.shots[selected].title = event.currentTarget.value; })}/></label>
            <label>时长 / Duration<input type="number" min="0.1" step="0.1" value={shot.durationSeconds} onInput={(event) => mutate((draft) => { draft.shots[selected].durationSeconds = Number(event.currentTarget.value); })}/></label>
            <div class="td-shot-switches">
              <label class="td-shot-enabled"><input type="checkbox" checked={shot.enabled} onChange={(event) => mutate((draft) => { draft.shots[selected].enabled = event.currentTarget.checked; })}/><span>启用 / Enabled</span></label>
              <label class="td-shot-enabled" title={activeIndex === 0 ? "首个启用镜头没有上一段，执行时会自动忽略接力" : "开启后读取上一段 AV latent 作为 Motion Context"}><input type="checkbox" checked={shot.latentRelay} onChange={(event) => mutate((draft) => { draft.shots[selected].latentRelay = event.currentTarget.checked; })}/><span>latent接力 / Relay{activeIndex === 0 ? "（首段忽略）" : ""}</span></label>
              {supportsSecondSampling && <label class="td-shot-enabled" title="开启时执行 RTX 超分和第二次 H3 采样，关闭时直接使用第一采画面"><input type="checkbox" checked={shot.secondSampling} onChange={(event) => mutate((draft) => { draft.shots[selected].secondSampling = event.currentTarget.checked; })}/><span>二次采样 / 2nd pass</span></label>}
            </div>
          </div>
          <label><span class="td-field-label">提示词（使用 <code>{"{{ref:别名}}"}</code>）</span><HighlightedTextarea rows={10} value={shot.prompt} isReferenceValid={(alias) => referenceTokenIsAvailable(plan, shot, alias)} onInput={(event) => mutate((draft) => { draft.shots[selected].prompt = event.currentTarget.value; })}/></label>
          <label><span class="td-field-label">负面提示词 / Negative prompt</span><textarea rows={3} value={shot.negativePrompt} onInput={(event) => mutate((draft) => { draft.shots[selected].negativePrompt = event.currentTarget.value; })}/></label>
          <fieldset class="td-shot-media"><legend>本镜头素材 / Shot media</legend>{plan.assets.map((asset) => { const checked = !shot.disabledAssetIds.includes(asset.id); const filename = assetFileName(asset.path) || asset.alias; const reference = `{{ref:${asset.alias}}}`; return <div class={`td-shot-media-card ${checked ? "" : "disabled"}`} key={asset.id}><div class="td-shot-media-frame"><MediaPreview asset={asset} compact/><span class="td-shot-media-kind">{language === "zh" ? KIND_LABELS[asset.kind] : asset.kind}</span><label class="td-shot-media-toggle" title={checked ? "禁用此素材 / Disable" : "启用此素材 / Enable"}><input type="checkbox" checked={checked} onChange={(event) => mutate((draft) => { const disabled = draft.shots[selected].disabledAssetIds; draft.shots[selected].disabledAssetIds = event.currentTarget.checked ? disabled.filter((id) => id !== asset.id) : [...new Set([...disabled, asset.id])]; })}/></label></div><button class={`td-shot-media-name ${copiedAssetId === asset.id ? "copied" : ""}`} title={`${filename}\n${language === "zh" ? "点击复制" : "Click to copy"} ${reference}`} onClick={async () => { try { await writeClipboardText(reference); setCopiedAssetId(asset.id); window.setTimeout(() => setCopiedAssetId((current) => current === asset.id ? "" : current), 1400); } catch (error) { window.alert(`${language === "zh" ? "复制失败" : "Copy failed"}: ${String(error)}`); } }}><span>{filename}</span>{copiedAssetId === asset.id && <em>{language === "zh" ? "已复制" : "Copied"}</em>}</button></div>; })}</fieldset>
        </section>}
        <aside class="td-preview">
          <details open={previewOpen} onToggle={(event) => setPreviewOpen(event.currentTarget.open)}>
            <summary><strong>{t(language, "preview")}</strong><span class="td-summary-counts">Picture {preview?.slots.filter((x) => x.kind === "picture").length ?? 0}/9 · Video {preview?.slots.filter((x) => x.kind === "video").length ?? 0}/3 · Audio {preview?.audioCount ?? 0}/3 · Files {preview?.mixedFiles ?? 0}/12</span></summary>
            <div class="td-preview-body">{preview?.errors.length ? <ul class="errors">{preview.errors.map((error) => <li>{error}</li>)}</ul> : <p class="ok">{t(language, "noErrors")}</p>}<ol>{preview?.slots.map((slot) => <li><code>{slot.label}</code> ← {slot.alias}</li>)}</ol><pre>{preview?.compiledPrompt}</pre></div>
          </details>
          <details open={resultOpen} onToggle={(event) => setResultOpen(event.currentTarget.open)}>
            <summary><strong>{language === "zh" ? "生成结果" : "Generated result"}</strong><span class={`td-result-state ${generatedResults.length ? "found" : ""}`}>{generatedLoading ? (language === "zh" ? "查询中" : "Checking") : generatedResults.length ? (language === "zh" ? `${generatedResults.length} 个结果` : `${generatedResults.length} results`) : (language === "zh" ? "空" : "Empty")}</span></summary>
            <div class="td-preview-body td-result-body">
              <div class="td-result-actions"><button onClick={() => setResultRevision((value) => value + 1)}>↻ {language === "zh" ? "刷新结果" : "Refresh"}</button></div>
              {generatedLoading ? <div class="td-result-empty">{language === "zh" ? "正在检查预期输出路径…" : "Checking the expected output path…"}</div> : generatedVideo.error ? <div class="td-result-empty errors">{language === "zh" ? "暂时无法查询生成结果；重启 ComfyUI 后再试。" : "Unable to query results. Restart ComfyUI and try again."}</div> : selectedGenerated && generatedVideoUrl ? <div class="td-generated-results"><div class="td-generated-video"><video key={selectedGenerated.path} src={generatedVideoUrl} controls preload="metadata" playsInline/><div class="td-generated-meta" title={selectedGenerated.path}>{selectedGenerated.path}{selectedGenerated.bytes ? ` · ${(selectedGenerated.bytes / 1024 / 1024).toFixed(1)} MB` : ""}</div></div><div class="td-result-list" aria-label={language === "zh" ? "全部生成结果" : "All generated results"}>{generatedResults.map((item, index) => { const url = comfyViewUrl(item.path, "output"); const number = generatedResultNumber(item.path, generatedResults.length - index); const time = item.modifiedAt ? new Date(item.modifiedAt * 1000).toLocaleString(language === "zh" ? "zh-CN" : "en-US") : ""; return <button class={`td-result-item ${item.path === selectedGenerated.path ? "selected" : ""}`} key={item.path} onClick={() => setSelectedGeneratedPath(item.path)}>{url ? <LazyVideoThumbnail src={url} alt={`${language === "zh" ? "结果" : "Result"} ${number}`}/> : <div class="td-result-thumb"><span>×</span></div>}<span class="td-result-item-copy"><strong>{language === "zh" ? `结果 ${number}` : `Result ${number}`}{index === 0 && <em>{language === "zh" ? "最新" : "Latest"}</em>}</strong><span title={item.path}>{assetFileName(item.path)}</span><small>{[item.bytes ? `${(item.bytes / 1024 / 1024).toFixed(1)} MB` : "", time].filter(Boolean).join(" · ")}</small></span></button>; })}</div></div> : <div class="td-result-empty">{language === "zh" ? "未在预期路径找到本段视频" : "No video found at the expected path"}</div>}
            </div>
          </details>
        </aside>
      </div>}
      {tab === "assets" && <div class="td-assets">
        <div class="td-toolbar">{(["image", "video", "audio"] as AssetKind[]).map((kind) => <button onClick={() => mutate((draft) => draft.assets.push(newAsset(kind)))}>＋ {kind}</button>)}</div>
        {plan.assets.map((asset, index) => <article key={asset.id}><div class="td-asset-layout"><div>
          <div class="td-grid"><label>别名 / Alias<input value={asset.alias} onInput={(event) => mutate((draft) => { draft.assets[index].alias = event.currentTarget.value; })}/></label><label>类型 / Kind<select value={asset.kind} onChange={(event) => mutate((draft) => { draft.assets[index].kind = event.currentTarget.value as AssetKind; })}><option>image</option><option>video</option><option>audio</option></select></label><label>输入目录相对路径 / Path<input value={asset.path} onInput={(event) => mutate((draft) => { draft.assets[index].path = event.currentTarget.value; })}/><span class="td-file-picker"><label class="td-file-button">选择文件 / Choose file<input type="file" accept={asset.kind === "image" ? "image/*" : asset.kind === "video" ? "video/*" : "audio/*"} onChange={async (event) => { const input = event.currentTarget; const file = input.files?.[0]; if (!file) return; setUploadNames((current) => ({ ...current, [asset.id]: file.name })); try { const path = await uploadAsset(plan.project.name, asset.kind, file); mutate((draft) => { const target = draft.assets.find((item) => item.id === asset.id); if (target) target.path = path; }); } catch (error) { window.alert(String(error)); } finally { setUploadNames((current) => { const next = { ...current }; delete next[asset.id]; return next; }); input.value = ""; } }}/></label><span class="td-file-name" title={uploadNames[asset.id] || asset.path}>{uploadNames[asset.id] ? `${language === "zh" ? "上传中" : "Uploading"}: ${uploadNames[asset.id]}` : assetFileName(asset.path) || (language === "zh" ? "未选择文件" : "No file selected")}</span></span></label><label>时长 / Duration<input type="number" min="0" step="0.1" value={asset.durationSeconds ?? ""} onInput={(event) => mutate((draft) => { draft.assets[index].durationSeconds = event.currentTarget.value ? Number(event.currentTarget.value) : null; })}/></label><label>固定顺序 / Fixed order<input type="number" value={asset.fixedOrder} onInput={(event) => mutate((draft) => { draft.assets[index].fixedOrder = Number(event.currentTarget.value); })}/></label><label>限定分镜 ID（逗号分隔）<input value={asset.shotIds.join(", ")} onInput={(event) => mutate((draft) => { draft.assets[index].shotIds = event.currentTarget.value.split(",").map((value) => value.trim()).filter(Boolean); })}/></label></div>
          <div class="td-flags"><label><input type="checkbox" checked={asset.enabled} onChange={(event) => mutate((draft) => { draft.assets[index].enabled = event.currentTarget.checked; })}/>启用</label><label><input type="checkbox" checked={asset.fixed} onChange={(event) => mutate((draft) => { draft.assets[index].fixed = event.currentTarget.checked; })}/>固定引用</label>{asset.kind === "video" && <label><input type="checkbox" checked={asset.includeVideoAudio} onChange={(event) => mutate((draft) => { draft.assets[index].includeVideoAudio = event.currentTarget.checked; })}/>启用视频伴音</label>}<button class="danger" onClick={() => mutate((draft) => { draft.assets.splice(index, 1); })}>删除</button></div>
        </div><MediaPreview asset={asset}/></div></article>)}
      </div>}
      {tab === "settings" && <section class="td-form settings"><label>Project name<input value={plan.project.name} onInput={(event) => mutate((draft) => { draft.project.name = event.currentTarget.value; })}/></label><label>Run ID<input value={plan.project.runId} onInput={(event) => mutate((draft) => { draft.project.runId = event.currentTarget.value; })}/></label><label>FPS<input type="number" value={plan.defaults.fps} onInput={(event) => mutate((draft) => { draft.defaults.fps = Number(event.currentTarget.value); })}/></label><label>Base seed<input type="number" value={plan.defaults.baseSeed} onInput={(event) => mutate((draft) => { draft.defaults.baseSeed = Number(event.currentTarget.value); })}/></label><label>提示词前缀<HighlightedTextarea value={plan.promptPrefix} isReferenceValid={(alias) => referenceTokenIsGloballyAvailable(plan, alias)} onInput={(event) => mutate((draft) => { draft.promptPrefix = event.currentTarget.value; })}/></label><label>提示词后缀<HighlightedTextarea value={plan.promptSuffix} isReferenceValid={(alias) => referenceTokenIsGloballyAvailable(plan, alias)} onInput={(event) => mutate((draft) => { draft.promptSuffix = event.currentTarget.value; })}/></label></section>}
      {tab === "postprocess" && <PostprocessPanel plan={plan} language={language}/>}
    </main>
    {batchOpen && <div class="td-batch-overlay" role="presentation"><section class="td-batch-panel" role="dialog" aria-modal="true" aria-label={language === "zh" ? "批量处理镜头" : "Batch edit shots"}>
      <header class="td-batch-header"><div><h2>{language === "zh" ? "批量处理镜头" : "Batch edit shots"}</h2><p>{language === "zh" ? `当前共 ${batchShots.length} 个镜头` : `${batchShots.length} shots`}</p></div><button aria-label={language === "zh" ? "关闭" : "Close"} onClick={() => setBatchOpen(false)}>×</button></header>
      <div class="td-batch-tools">
        <div><label>{language === "zh" ? "所有镜头时长" : "Duration for all shots"}<span><input type="number" min="0.1" step="0.1" value={uniformDuration} onInput={(event) => setUniformDuration(event.currentTarget.value)}/><em>{language === "zh" ? "秒" : "sec"}</em></span></label><button onClick={applyUniformDuration}>{language === "zh" ? "一键设置所有时长" : "Set all durations"}</button></div>
        <div><label>{language === "zh" ? "新增镜头数量" : "New shot count"}<input type="number" min="1" max="100" step="1" value={appendCount} onInput={(event) => setAppendCount(event.currentTarget.value)}/></label><label>{language === "zh" ? "每个镜头时长" : "Duration per shot"}<span><input type="number" min="0.1" step="0.1" value={appendDuration} onInput={(event) => setAppendDuration(event.currentTarget.value)}/><em>{language === "zh" ? "秒" : "sec"}</em></span></label><button onClick={appendBatchShots}>{language === "zh" ? "批量新增镜头" : "Add shots"}</button></div>
      </div>
      <div class="td-batch-global-actions"><span>{language === "zh" ? `已启用 ${batchShots.filter((item) => item.enabled).length}/${batchShots.length} 个镜头` : `${batchShots.filter((item) => item.enabled).length}/${batchShots.length} shots enabled`}</span><button class={allBatchEnabled ? "active" : ""} onClick={toggleAllBatchShots}>{allBatchEnabled ? (language === "zh" ? "全部禁用" : "Disable all") : (language === "zh" ? "全部启用" : "Enable all")}</button></div>
      <div class="td-batch-table"><div class="td-batch-row td-batch-table-head"><span>#</span><span>{language === "zh" ? "镜头名" : "Shot name"}</span><span>{language === "zh" ? "启用" : "Enabled"}</span><span>{language === "zh" ? "具体时长" : "Duration"}</span><span>latent {language === "zh" ? "接力" : "relay"}</span></div>{batchShots.map((item, index) => <div class="td-batch-row" key={item.id}><span>{index + 1}</span><input value={item.title} aria-label={`${language === "zh" ? "镜头名" : "Shot name"} ${index + 1}`} onInput={(event) => setBatchShots((current) => current.map((shotItem, shotIndex) => shotIndex === index ? { ...shotItem, title: event.currentTarget.value } : shotItem))}/><label class="td-batch-enabled"><input type="checkbox" checked={item.enabled} onChange={(event) => setBatchShots((current) => current.map((shotItem, shotIndex) => shotIndex === index ? { ...shotItem, enabled: event.currentTarget.checked } : shotItem))}/><span>{item.enabled ? (language === "zh" ? "开" : "ON") : (language === "zh" ? "关" : "OFF")}</span></label><label class="td-batch-duration"><input type="number" min="0.1" step="0.1" value={item.durationSeconds} onInput={(event) => setBatchShots((current) => current.map((shotItem, shotIndex) => shotIndex === index ? { ...shotItem, durationSeconds: Number(event.currentTarget.value) } : shotItem))}/><span>{language === "zh" ? "秒" : "sec"}</span></label><label class="td-batch-relay"><input type="checkbox" checked={item.latentRelay} onChange={(event) => setBatchShots((current) => current.map((shotItem, shotIndex) => shotIndex === index ? { ...shotItem, latentRelay: event.currentTarget.checked } : shotItem))}/><span>{item.latentRelay ? (language === "zh" ? "开" : "ON") : (language === "zh" ? "关" : "OFF")}</span></label></div>)}</div>
      <footer><button onClick={() => setBatchOpen(false)}>{language === "zh" ? "取消" : "Cancel"}</button><button class="primary" onClick={applyBatchChanges}>{language === "zh" ? "应用更改" : "Apply changes"}</button></footer>
    </section></div>}
  </div>;
}

export function openEditor(initial: DirectorPlan, onSave: (plan: DirectorPlan) => void, supportsSecondSampling = false): void {
  const existing = document.getElementById("theodore-director-modal");
  if (existing) {
    // 防止快速重复点击在画布上叠加多个编辑器实例。
    existing.focus();
    return;
  }
  const host = document.createElement("div");
  host.id = "theodore-director-modal";
  host.className = "td-modal";
  host.tabIndex = -1;
  document.body.append(host);
  const onKeyDown = (event: KeyboardEvent) => { if (event.key === "Escape") close(); };
  const close = () => {
    document.removeEventListener("keydown", onKeyDown);
    render(null, host);
    host.remove();
  };
  document.addEventListener("keydown", onKeyDown);
  render(<Editor initial={initial} onSave={(plan) => { onSave(plan); close(); }} onClose={close} supportsSecondSampling={supportsSecondSampling}/>, host);
  host.focus();
}
