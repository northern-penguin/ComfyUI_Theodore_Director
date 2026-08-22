import { render } from "preact";
import { useMemo, useState } from "preact/hooks";
import { t, type Language } from "./i18n";
import { assetFileName, MediaPreview } from "./media";
import { previewReferences, validatePlan } from "./reference";
import type { AssetKind, DirectorAsset, DirectorPlan, DirectorShot } from "./types";

const uid = (prefix: string) => `${prefix}_${Date.now().toString(36)}_${Math.random().toString(36).slice(2, 7)}`;
const clone = <T,>(value: T): T => JSON.parse(JSON.stringify(value));

function newShot(index: number): DirectorShot {
  return { id: `shot_${String(index + 1).padStart(3, "0")}`, title: `Shot ${index + 1}`, prompt: "", negativePrompt: "", durationSeconds: 5, enabled: true, seed: null, disabledAssetIds: [] };
}

function newAsset(kind: AssetKind): DirectorAsset {
  const id = uid(kind);
  return { id, alias: id, kind, path: "", enabled: true, fixed: false, fixedOrder: 0, shotIds: [], includeVideoAudio: false, durationSeconds: kind === "image" ? null : 2, audioDurationSeconds: null, fingerprint: "" };
}

async function uploadAsset(projectId: string, kind: AssetKind, file: File): Promise<string> {
  const body = new FormData();
  body.append("projectId", projectId);
  body.append("kind", kind);
  body.append("file", file);
  const response = await fetch("/theodore-director/v1/assets", { method: "POST", body });
  const result = await response.json() as { path?: string; error?: string };
  if (!response.ok || !result.path) throw new Error(result.error || `HTTP ${response.status}`);
  return result.path;
}

interface EditorProps { initial: DirectorPlan; onSave: (plan: DirectorPlan) => void; onClose: () => void }

function Editor({ initial, onSave, onClose }: EditorProps) {
  const [plan, setPlan] = useState<DirectorPlan>(() => clone(initial));
  const [tab, setTab] = useState<"shots" | "assets" | "settings">("shots");
  const [selected, setSelected] = useState(0);
  const [language, setLanguage] = useState<Language>(() => navigator.language.startsWith("zh") ? "zh" : "en");
  const [uploadNames, setUploadNames] = useState<Record<string, string>>({});
  const shot = plan.shots[Math.min(selected, plan.shots.length - 1)];
  const preview = useMemo(() => shot ? previewReferences(plan, shot) : null, [plan, shot]);
  const mutate = (fn: (draft: DirectorPlan) => void) => setPlan((current) => { const draft = clone(current); fn(draft); return draft; });
  const moveShot = (from: number, direction: number) => mutate((draft) => { const to = from + direction; if (to < 0 || to >= draft.shots.length) return; [draft.shots[from], draft.shots[to]] = [draft.shots[to], draft.shots[from]]; setSelected(to); });
  const exportPlan = () => {
    const url = URL.createObjectURL(new Blob([JSON.stringify(plan, null, 2)], { type: "application/json" }));
    const link = document.createElement("a");
    link.href = url; link.download = `${plan.project.id || "theodore_project"}.director.json`; link.click();
    URL.revokeObjectURL(url);
  };
  const savePlan = () => {
    const errors = validatePlan(plan);
    if (errors.length) { window.alert(`计划未通过校验：\n\n${errors.join("\n")}`); return; }
    onSave(plan);
  };

  return <div class="td-shell">
    <header><h1>{t(language, "title")}</h1><div class="td-actions"><button onClick={exportPlan}>导出 / Export</button><label class="td-import">导入 / Import<input type="file" accept="application/json,.json" onChange={async (event) => { const file = event.currentTarget.files?.[0]; if (!file) return; try { const imported = JSON.parse(await file.text()) as Partial<DirectorPlan>; if (!imported.project || !Array.isArray(imported.shots) || !Array.isArray(imported.assets)) throw new Error("不是有效的 Theodore Director Plan"); setPlan(imported as DirectorPlan); setSelected(0); } catch (error) { window.alert(String(error)); } }}/></label><button onClick={() => setLanguage(language === "zh" ? "en" : "zh")}>{language === "zh" ? "EN" : "中文"}</button><button class="primary" onClick={savePlan}>{t(language, "save")}</button><button onClick={onClose}>{t(language, "close")}</button></div></header>
    <nav>{(["shots", "assets", "settings"] as const).map((name) => <button class={tab === name ? "active" : ""} onClick={() => setTab(name)}>{t(language, name)}</button>)}</nav>
    <main>
      {tab === "shots" && <div class="td-shots">
        <aside>{plan.shots.map((item, index) => <div class={`td-shot-card ${index === selected ? "selected" : ""}`} onClick={() => setSelected(index)}><strong>{index + 1}. {item.title}</strong><span>{item.durationSeconds}s · {item.enabled ? "ON" : "OFF"}</span><div><button onClick={(event) => { event.stopPropagation(); moveShot(index, -1); }}>↑</button><button onClick={(event) => { event.stopPropagation(); moveShot(index, 1); }}>↓</button></div></div>)}<button class="wide" onClick={() => mutate((draft) => { draft.shots.push(newShot(draft.shots.length)); setSelected(draft.shots.length - 1); })}>＋ {t(language, "addShot")}</button></aside>
        {shot && <section class="td-form"><label>ID<input value={shot.id} onInput={(event) => mutate((draft) => { draft.shots[selected].id = event.currentTarget.value; })}/></label><label>标题 / Title<input value={shot.title} onInput={(event) => mutate((draft) => { draft.shots[selected].title = event.currentTarget.value; })}/></label><label>时长 / Duration<input type="number" min="0.1" step="0.1" value={shot.durationSeconds} onInput={(event) => mutate((draft) => { draft.shots[selected].durationSeconds = Number(event.currentTarget.value); })}/></label><label class="check"><input type="checkbox" checked={shot.enabled} onChange={(event) => mutate((draft) => { draft.shots[selected].enabled = event.currentTarget.checked; })}/>启用 / Enabled</label><label>提示词（使用 <code>{"{{ref:别名}}"}</code>）<textarea rows={10} value={shot.prompt} onInput={(event) => mutate((draft) => { draft.shots[selected].prompt = event.currentTarget.value; })}/></label><label>负面提示词<textarea rows={3} value={shot.negativePrompt} onInput={(event) => mutate((draft) => { draft.shots[selected].negativePrompt = event.currentTarget.value; })}/></label><fieldset class="td-shot-media"><legend>本镜头素材 / Shot media</legend>{plan.assets.map((asset) => { const checked = !shot.disabledAssetIds.includes(asset.id); return <div class={`td-shot-media-card ${checked ? "" : "disabled"}`} key={asset.id}><MediaPreview asset={asset} compact/><label class="check"><input type="checkbox" checked={checked} onChange={(event) => mutate((draft) => { const disabled = draft.shots[selected].disabledAssetIds; draft.shots[selected].disabledAssetIds = event.currentTarget.checked ? disabled.filter((id) => id !== asset.id) : [...new Set([...disabled, asset.id])]; })}/><span title={asset.alias}><strong>{asset.alias}</strong><small>{asset.kind}</small></span></label></div>; })}</fieldset></section>}
        <aside class="td-preview"><h2>{t(language, "preview")}</h2><div class="td-counters">Picture {preview?.slots.filter((x) => x.kind === "picture").length ?? 0}/9 · Video {preview?.slots.filter((x) => x.kind === "video").length ?? 0}/3 · Audio {preview?.audioCount ?? 0}/3 · Files {preview?.mixedFiles ?? 0}/12</div>{preview?.errors.length ? <ul class="errors">{preview.errors.map((error) => <li>{error}</li>)}</ul> : <p class="ok">{t(language, "noErrors")}</p>}<ol>{preview?.slots.map((slot) => <li><code>{slot.label}</code> ← {slot.alias}</li>)}</ol><pre>{preview?.compiledPrompt}</pre></aside>
      </div>}
      {tab === "assets" && <div class="td-assets">
        <div class="td-toolbar">{(["image", "video", "audio"] as AssetKind[]).map((kind) => <button onClick={() => mutate((draft) => draft.assets.push(newAsset(kind)))}>＋ {kind}</button>)}</div>
        {plan.assets.map((asset, index) => <article key={asset.id}><div class="td-asset-layout"><div>
          <div class="td-grid"><label>别名 / Alias<input value={asset.alias} onInput={(event) => mutate((draft) => { draft.assets[index].alias = event.currentTarget.value; })}/></label><label>类型 / Kind<select value={asset.kind} onChange={(event) => mutate((draft) => { draft.assets[index].kind = event.currentTarget.value as AssetKind; })}><option>image</option><option>video</option><option>audio</option></select></label><label>输入目录相对路径 / Path<input value={asset.path} onInput={(event) => mutate((draft) => { draft.assets[index].path = event.currentTarget.value; })}/><span class="td-file-picker"><label class="td-file-button">选择文件 / Choose file<input type="file" accept={asset.kind === "image" ? "image/*" : asset.kind === "video" ? "video/*" : "audio/*"} onChange={async (event) => { const input = event.currentTarget; const file = input.files?.[0]; if (!file) return; setUploadNames((current) => ({ ...current, [asset.id]: file.name })); try { const path = await uploadAsset(plan.project.id, asset.kind, file); mutate((draft) => { const target = draft.assets.find((item) => item.id === asset.id); if (target) target.path = path; }); } catch (error) { window.alert(String(error)); } finally { setUploadNames((current) => { const next = { ...current }; delete next[asset.id]; return next; }); input.value = ""; } }}/></label><span class="td-file-name" title={uploadNames[asset.id] || asset.path}>{uploadNames[asset.id] ? `${language === "zh" ? "上传中" : "Uploading"}: ${uploadNames[asset.id]}` : assetFileName(asset.path) || (language === "zh" ? "未选择文件" : "No file selected")}</span></span></label><label>时长 / Duration<input type="number" min="0" step="0.1" value={asset.durationSeconds ?? ""} onInput={(event) => mutate((draft) => { draft.assets[index].durationSeconds = event.currentTarget.value ? Number(event.currentTarget.value) : null; })}/></label><label>固定顺序 / Fixed order<input type="number" value={asset.fixedOrder} onInput={(event) => mutate((draft) => { draft.assets[index].fixedOrder = Number(event.currentTarget.value); })}/></label><label>限定分镜 ID（逗号分隔）<input value={asset.shotIds.join(", ")} onInput={(event) => mutate((draft) => { draft.assets[index].shotIds = event.currentTarget.value.split(",").map((value) => value.trim()).filter(Boolean); })}/></label></div>
          <div class="td-flags"><label><input type="checkbox" checked={asset.enabled} onChange={(event) => mutate((draft) => { draft.assets[index].enabled = event.currentTarget.checked; })}/>启用</label><label><input type="checkbox" checked={asset.fixed} onChange={(event) => mutate((draft) => { draft.assets[index].fixed = event.currentTarget.checked; })}/>固定引用</label>{asset.kind === "video" && <label><input type="checkbox" checked={asset.includeVideoAudio} onChange={(event) => mutate((draft) => { draft.assets[index].includeVideoAudio = event.currentTarget.checked; })}/>启用视频伴音</label>}<button class="danger" onClick={() => mutate((draft) => { draft.assets.splice(index, 1); })}>删除</button></div>
        </div><MediaPreview asset={asset}/></div></article>)}
      </div>}
      {tab === "settings" && <section class="td-form settings"><label>Project ID<input value={plan.project.id} onInput={(event) => mutate((draft) => { draft.project.id = event.currentTarget.value; })}/></label><label>Project name<input value={plan.project.name} onInput={(event) => mutate((draft) => { draft.project.name = event.currentTarget.value; })}/></label><label>Run ID<input value={plan.project.runId} onInput={(event) => mutate((draft) => { draft.project.runId = event.currentTarget.value; })}/></label><label>FPS<input type="number" value={plan.defaults.fps} onInput={(event) => mutate((draft) => { draft.defaults.fps = Number(event.currentTarget.value); })}/></label><label>Base seed<input type="number" value={plan.defaults.baseSeed} onInput={(event) => mutate((draft) => { draft.defaults.baseSeed = Number(event.currentTarget.value); })}/></label><label>提示词前缀<textarea value={plan.promptPrefix} onInput={(event) => mutate((draft) => { draft.promptPrefix = event.currentTarget.value; })}/></label><label>提示词后缀<textarea value={plan.promptSuffix} onInput={(event) => mutate((draft) => { draft.promptSuffix = event.currentTarget.value; })}/></label></section>}
    </main>
  </div>;
}

export function openEditor(initial: DirectorPlan, onSave: (plan: DirectorPlan) => void): void {
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
  render(<Editor initial={initial} onSave={(plan) => { onSave(plan); close(); }} onClose={close}/>, host);
  host.focus();
}
