import { useEffect, useMemo, useState } from "preact/hooks";
import type { Language } from "./i18n";
import { generatedResultNumber, normalizeGeneratedResults, type GeneratedVideoItem, type GeneratedVideoResponse } from "./generated-results";
import { LazyVideoThumbnail } from "./lazy-video-thumbnail";
import { assetFileName, comfyViewUrl } from "./media";
import { buildMergeSelections, postprocessShotEntries, selectShotRange } from "./postprocess-selection";
import { StandaloneSecondPassPanel } from "./standalone-second-pass";
import type { DirectorPlan, QueueSecondPass } from "./types";

interface PostprocessProps {
  plan: DirectorPlan;
  language: Language;
  queueSecondPass?: QueueSecondPass;
}

interface ShotResultState {
  loading: boolean;
  response: GeneratedVideoResponse;
}

interface PreviewTarget {
  path: string;
  title: string;
}

async function fetchVideoResults(url: string): Promise<GeneratedVideoResponse> {
  const response = await fetch(url);
  const result = await response.json() as GeneratedVideoResponse;
  if (!response.ok) throw new Error(result.error || `HTTP ${response.status}`);
  return result;
}

function shotResultUrl(plan: DirectorPlan, shotId: string, activeIndex: number): string {
  const query = new URLSearchParams({
    projectName: plan.project.name,
    runId: plan.project.runId,
    shotId,
    activeIndex: String(activeIndex),
  });
  return `/theodore-director/v1/generated-video?${query.toString()}`;
}

function mergedResultUrl(plan: DirectorPlan): string {
  const query = new URLSearchParams({ projectName: plan.project.name, runId: plan.project.runId });
  return `/theodore-director/v1/postprocess/merged-videos?${query.toString()}`;
}

export function PostprocessPanel({ plan, language, queueSecondPass }: PostprocessProps) {
  const [mode, setMode] = useState<"merge" | "second-pass">("merge");
  return <section class="td-postprocess-shell">
    <div class="td-post-mode-tabs" role="tablist">
      <button class={mode === "merge" ? "active" : ""} role="tab" aria-selected={mode === "merge"} onClick={() => setMode("merge")}>{language === "zh" ? "合并视频" : "Merge videos"}</button>
      <button class={mode === "second-pass" ? "active" : ""} role="tab" aria-selected={mode === "second-pass"} onClick={() => setMode("second-pass")}>{language === "zh" ? "单独二采" : "Standalone second pass"}</button>
    </div>
    {mode === "merge" ? <MergePanel plan={plan} language={language}/> : <StandaloneSecondPassPanel plan={plan} language={language} queueSecondPass={queueSecondPass}/>}
  </section>;
}

function MergePanel({ plan, language }: PostprocessProps) {
  const entries = useMemo(() => postprocessShotEntries(plan), [plan]);
  const [shotResults, setShotResults] = useState<Record<string, ShotResultState>>({});
  const [selectedShots, setSelectedShots] = useState<Record<string, boolean>>({});
  const [selectedPaths, setSelectedPaths] = useState<Record<string, string>>({});
  const [previewTarget, setPreviewTarget] = useState<PreviewTarget | null>(null);
  const [merging, setMerging] = useState(false);
  const [mergeError, setMergeError] = useState("");
  const [folderError, setFolderError] = useState("");
  const [mergedResults, setMergedResults] = useState<GeneratedVideoResponse>({ found: false, results: [] });
  const [mergedLoading, setMergedLoading] = useState(false);
  const [openingFolder, setOpeningFolder] = useState(false);
  const [selectedMergedPath, setSelectedMergedPath] = useState("");
  const [revision, setRevision] = useState(0);
  const [rangeStart, setRangeStart] = useState("1");
  const [rangeEnd, setRangeEnd] = useState(String(entries.length || 1));

  const enabledEntries = entries.filter((entry) => entry.shot.enabled);
  const allSelected = enabledEntries.length > 0 && enabledEntries.every((entry) => selectedShots[entry.key]);
  const selections = buildMergeSelections(entries, selectedShots, selectedPaths);
  const missingSelections = selections.filter((selection) => !selection.path);
  const selectedResultsLoading = entries.some((entry) => selectedShots[entry.key] && shotResults[entry.key]?.loading);
  const totalDuration = entries.reduce(
    (sum, entry) => sum + (entry.shot.enabled && selectedShots[entry.key] ? entry.shot.durationSeconds : 0),
    0,
  );
  const normalizedMergedResults = useMemo(() => normalizeGeneratedResults(mergedResults), [mergedResults]);
  const selectedMerged = normalizedMergedResults.find((item) => item.path === selectedMergedPath) ?? normalizedMergedResults[0];

  useEffect(() => {
    let cancelled = false;
    const defaults: Record<string, boolean> = {};
    const loading: Record<string, ShotResultState> = {};
    entries.forEach((entry) => {
      defaults[entry.key] = entry.shot.enabled;
      loading[entry.key] = { loading: true, response: { found: false, results: [] } };
    });
    setSelectedShots((current) => {
      const updated: Record<string, boolean> = {};
      entries.forEach((entry) => {
        // 刷新结果和合并完成后保留用户选择；新出现的启用镜头仍默认勾选。
        updated[entry.key] = entry.shot.enabled ? (current[entry.key] ?? defaults[entry.key]) : false;
      });
      return updated;
    });
    setShotResults(loading);
    setMergeError("");

    // 禁用镜头也查询历史结果供预览，但仍保持不可勾选、不可参与合并。
    entries.forEach((entry) => {
      void fetchVideoResults(shotResultUrl(plan, entry.shot.id, entry.activeIndex))
        .then((response) => {
          if (cancelled) return;
          const results = normalizeGeneratedResults(response);
          setShotResults((current) => ({ ...current, [entry.key]: { loading: false, response } }));
          setSelectedPaths((current) => ({
            ...current,
            [entry.key]: results.some((item) => item.path === current[entry.key]) ? current[entry.key] : (results[0]?.path ?? ""),
          }));
        })
        .catch((error) => {
          if (cancelled) return;
          setShotResults((current) => ({
            ...current,
            [entry.key]: { loading: false, response: { found: false, results: [], error: String(error) } },
          }));
        });
    });
    return () => { cancelled = true; };
  }, [plan.project.name, plan.project.runId, plan.shots.map((shot) => `${shot.id}:${shot.enabled}`).join("|") , revision]);

  useEffect(() => {
    let cancelled = false;
    setMergedLoading(true);
    void fetchVideoResults(mergedResultUrl(plan))
      .then((response) => {
        if (cancelled) return;
        const results = normalizeGeneratedResults(response);
        setMergedResults(response);
        setSelectedMergedPath((current) => results.some((item) => item.path === current) ? current : (results[0]?.path ?? ""));
      })
      .catch((error) => {
        if (!cancelled) setMergedResults({ found: false, results: [], error: String(error) });
      })
      .finally(() => { if (!cancelled) setMergedLoading(false); });
    return () => { cancelled = true; };
  }, [plan.project.name, plan.project.runId, revision]);

  const toggleAll = () => {
    const next = !allSelected;
    setSelectedShots((current) => {
      const updated = { ...current };
      enabledEntries.forEach((entry) => { updated[entry.key] = next; });
      return updated;
    });
  };

  const confirmRange = () => {
    const start = Number(rangeStart);
    const end = Number(rangeEnd);
    if (!Number.isInteger(start) || !Number.isInteger(end) || start < 1 || end < start || end > entries.length) {
      window.alert(language === "zh"
        ? `请输入有效范围：1 ≤ m ≤ n ≤ ${entries.length}`
        : `Enter a valid range: 1 ≤ m ≤ n ≤ ${entries.length}`);
      return;
    }
    // 确认范围会替换当前勾选状态，避免范围外镜头意外进入合并列表。
    setSelectedShots(selectShotRange(entries, start, end));
  };

  const merge = async () => {
    if (!selections.length) {
      window.alert(language === "zh" ? "请至少选择一个镜头" : "Select at least one shot.");
      return;
    }
    if (missingSelections.length) {
      window.alert(language === "zh"
        ? `以下已选镜头没有可用结果：${missingSelections.map((item) => item.shotId).join("、")}`
        : `Selected shots without a result: ${missingSelections.map((item) => item.shotId).join(", ")}`);
      return;
    }
    setMerging(true);
    setMergeError("");
    try {
      const response = await fetch("/theodore-director/v1/postprocess/merge", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ projectName: plan.project.name, runId: plan.project.runId, selections }),
      });
      const result = await response.json() as { error?: string };
      if (!response.ok) throw new Error(result.error || `HTTP ${response.status}`);
      setRevision((current) => current + 1);
    } catch (error) {
      setMergeError(String(error instanceof Error ? error.message : error));
    } finally {
      setMerging(false);
    }
  };

  const openResultFolder = async () => {
    setOpeningFolder(true);
    setFolderError("");
    try {
      const response = await fetch("/theodore-director/v1/postprocess/open-folder", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ projectName: plan.project.name, runId: plan.project.runId }),
      });
      const result = await response.json() as { error?: string };
      if (!response.ok) throw new Error(result.error || `HTTP ${response.status}`);
    } catch (error) {
      setFolderError(String(error instanceof Error ? error.message : error));
    } finally {
      setOpeningFolder(false);
    }
  };

  const mergedUrl = selectedMerged?.path ? comfyViewUrl(selectedMerged.path, "output") : null;

  return <section class="td-postprocess">
    <div class="td-post-header">
      <div><h2>{language === "zh" ? "合并视频" : "Merge videos"}</h2><p>{language === "zh" ? "从每个镜头选择一个结果，按当前分镜顺序进行无损合并。" : "Choose one result per shot and merge them losslessly in storyboard order."}</p></div>
      <div class="td-post-actions"><button disabled={openingFolder} onClick={openResultFolder}>📁 {openingFolder ? (language === "zh" ? "正在打开…" : "Opening…") : (language === "zh" ? "打开结果文件夹" : "Open results folder")}</button><button onClick={() => setRevision((current) => current + 1)}>↻ {language === "zh" ? "刷新结果" : "Refresh"}</button><button onClick={toggleAll}>{allSelected ? (language === "zh" ? "全部取消" : "Clear all") : (language === "zh" ? "一键全选" : "Select all")}</button></div>
    </div>
    {folderError && <div class="td-post-error">{language === "zh" ? "打开结果文件夹失败：" : "Unable to open results folder: "}{folderError}</div>}
    <div class="td-post-summary">
      <span>{language === "zh" ? `已选择 ${selections.length}/${enabledEntries.length} 个启用镜头` : `${selections.length}/${enabledEntries.length} enabled shots selected`}</span>
      <span>{language === "zh" ? `预计时长 ${totalDuration.toFixed(1)} 秒` : `Estimated duration ${totalDuration.toFixed(1)} sec`}</span>
      <div class="td-post-range" role="group" aria-label={language === "zh" ? "合并视频范围" : "Merge video range"}>
        <span>{language === "zh" ? "范围" : "Range"}</span>
        <input type="number" min="1" max={entries.length} step="1" value={rangeStart} aria-label={language === "zh" ? "起始镜头 m" : "Start shot m"} onInput={(event) => setRangeStart(event.currentTarget.value)}/>
        <span>—</span>
        <input type="number" min="1" max={entries.length} step="1" value={rangeEnd} aria-label={language === "zh" ? "结束镜头 n" : "End shot n"} onInput={(event) => setRangeEnd(event.currentTarget.value)}/>
        <button disabled={!entries.length} onClick={confirmRange}>{language === "zh" ? "确认范围" : "Apply range"}</button>
      </div>
      <button class="primary" disabled={merging || selectedResultsLoading || !selections.length || Boolean(missingSelections.length)} onClick={merge}>{merging ? (language === "zh" ? "正在合并…" : "Merging…") : (language === "zh" ? "合并所选视频" : "Merge selected videos")}</button>
    </div>
    {mergeError && <div class="td-post-error">{language === "zh" ? "合并失败：" : "Merge failed: "}{mergeError}</div>}
    {missingSelections.length > 0 && <div class="td-post-warning">{language === "zh" ? "已选镜头中存在尚未生成视频的镜头。" : "Some selected shots do not have generated videos yet."}</div>}
    <div class="td-post-shot-list">
      {entries.map((entry) => {
        const state = shotResults[entry.key];
        const results = normalizeGeneratedResults(state?.response ?? { found: false, results: [] });
        const checked = Boolean(selectedShots[entry.key]);
        return <article class={`td-post-shot ${checked ? "selected" : ""} ${entry.shot.enabled ? "" : "disabled"}`} key={entry.key}>
          <header>
            <label><input type="checkbox" checked={checked} disabled={!entry.shot.enabled} onChange={(event) => setSelectedShots((current) => ({ ...current, [entry.key]: event.currentTarget.checked }))}/><span><strong>{entry.shot.id}</strong><em>{entry.shot.title}</em></span></label>
            <span>{entry.shot.durationSeconds}s</span>
          </header>
          {!entry.shot.enabled && <div class="td-post-shot-disabled-note">{language === "zh" ? "该镜头当前已禁用：历史结果可以预览，但不能参加合并。" : "This shot is disabled: historical results can be previewed but cannot be merged."}</div>}
          {state?.loading ? <div class="td-post-shot-empty">{language === "zh" ? "正在查询生成结果…" : "Loading generated results…"}</div>
            : state?.response.error ? <div class="td-post-shot-empty errors">{language === "zh" ? "查询失败，请重启 ComfyUI 后重试。" : "Query failed. Restart ComfyUI and retry."}</div>
            : !results.length ? <div class="td-post-shot-empty">{language === "zh" ? "未找到这个镜头的生成结果" : "No generated result found for this shot"}</div>
            : <div class="td-post-result-list">{results.map((item, index) => {
              const url = comfyViewUrl(item.path, "output");
              const selectedResult = selectedPaths[entry.key] === item.path;
              const number = generatedResultNumber(item.path, results.length - index);
              return <div class={`td-post-result ${selectedResult ? "selected" : ""}`} key={item.path}>
                <button class="td-post-result-choice" role="radio" aria-checked={selectedResult} onClick={() => setSelectedPaths((current) => ({ ...current, [entry.key]: item.path }))}>
                  {url ? <LazyVideoThumbnail src={url} alt={`${entry.shot.title} ${language === "zh" ? "结果" : "result"} ${number}`}/> : <div class="td-result-thumb">×</div>}
                  <span><strong>{language === "zh" ? `结果 ${number}` : `Result ${number}`}{index === 0 && <em>{language === "zh" ? "最新" : "Latest"}</em>}</strong><span title={item.path}>{assetFileName(item.path)}</span><small>{item.bytes ? `${(item.bytes / 1024 / 1024).toFixed(1)} MB` : ""}</small></span>
                </button>
                <button class="td-post-result-play" disabled={!url} title={language === "zh" ? "播放预览" : "Play preview"} onClick={() => url && setPreviewTarget({ path: item.path, title: `${entry.shot.id} · ${entry.shot.title}` })}>▶</button>
              </div>;
            })}</div>}
        </article>;
      })}
    </div>
    <section class="td-post-merged">
      <header><div><h2>{language === "zh" ? "合并结果" : "Merged results"}</h2><span class={`td-result-state ${normalizedMergedResults.length ? "found" : ""}`}>{mergedLoading ? (language === "zh" ? "查询中" : "Checking") : language === "zh" ? `${normalizedMergedResults.length} 个结果` : `${normalizedMergedResults.length} results`}</span></div></header>
      {mergedLoading ? <div class="td-result-empty">{language === "zh" ? "正在查询合并结果…" : "Loading merged results…"}</div>
        : mergedResults.error ? <div class="td-result-empty errors">{language === "zh" ? "无法查询合并结果" : "Unable to query merged results"}</div>
        : selectedMerged && mergedUrl ? <div class="td-generated-results"><div class="td-generated-video"><video key={selectedMerged.path} src={mergedUrl} controls preload="metadata" playsInline/><div class="td-generated-meta" title={selectedMerged.path}>{selectedMerged.path}</div></div><div class="td-result-list">{normalizedMergedResults.map((item, index) => { const url = comfyViewUrl(item.path, "output"); return <button class={`td-result-item ${item.path === selectedMerged.path ? "selected" : ""}`} key={item.path} onClick={() => setSelectedMergedPath(item.path)}>{url ? <LazyVideoThumbnail src={url} alt={`${language === "zh" ? "合并结果" : "Merged result"} ${normalizedMergedResults.length - index}`}/> : <div class="td-result-thumb">×</div>}<span class="td-result-item-copy"><strong>{language === "zh" ? `合并结果 ${normalizedMergedResults.length - index}` : `Merged result ${normalizedMergedResults.length - index}`}{index === 0 && <em>{language === "zh" ? "最新" : "Latest"}</em>}</strong><span>{assetFileName(item.path)}</span><small>{item.bytes ? `${(item.bytes / 1024 / 1024).toFixed(1)} MB` : ""}</small></span></button>; })}</div></div>
        : <div class="td-result-empty">{language === "zh" ? "还没有合并结果" : "No merged result yet"}</div>}
    </section>
    {previewTarget && comfyViewUrl(previewTarget.path, "output") && <div class="td-post-preview-overlay" role="presentation" onClick={() => setPreviewTarget(null)}><section role="dialog" aria-modal="true" onClick={(event) => event.stopPropagation()}><header><strong>{previewTarget.title}</strong><button aria-label={language === "zh" ? "关闭预览" : "Close preview"} onClick={() => setPreviewTarget(null)}>×</button></header><video src={comfyViewUrl(previewTarget.path, "output") ?? ""} controls autoPlay preload="metadata" playsInline/><p title={previewTarget.path}>{assetFileName(previewTarget.path)}</p></section></div>}
  </section>;
}
