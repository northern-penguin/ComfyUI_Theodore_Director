import { useEffect, useMemo, useState } from "preact/hooks";
import type { Language } from "./i18n";
import { normalizeGeneratedResults, type GeneratedVideoItem, type GeneratedVideoResponse } from "./generated-results";
import { LazyVideoThumbnail } from "./lazy-video-thumbnail";
import { assetFileName, comfyViewUrl } from "./media";
import { postprocessShotEntries } from "./postprocess-selection";
import type { DirectorPlan } from "./types";

interface Props { plan: DirectorPlan; language: Language }
interface ResultState { loading: boolean; response: GeneratedVideoResponse }
interface PreviewTarget { path: string; title: string }
type DeleteKind = "shot" | "merged";

export interface DeleteVideoRequest {
  projectName: string;
  runId: string;
  kind: DeleteKind;
  shotId: string;
  path: string;
}

function shotResultUrl(plan: DirectorPlan, shotId: string, activeIndex: number): string {
  const query = new URLSearchParams({ projectName: plan.project.name, runId: plan.project.runId, shotId, activeIndex: String(activeIndex) });
  return `/theodore-director/v1/generated-video?${query.toString()}`;
}

function mergedResultUrl(plan: DirectorPlan): string {
  const query = new URLSearchParams({ projectName: plan.project.name, runId: plan.project.runId });
  return `/theodore-director/v1/postprocess/merged-videos?${query.toString()}`;
}

async function fetchResults(url: string): Promise<GeneratedVideoResponse> {
  const response = await fetch(url);
  const result = await response.json() as GeneratedVideoResponse;
  if (!response.ok) throw new Error(result.error || `HTTP ${response.status}`);
  return result;
}

export function withoutResult(response: GeneratedVideoResponse, path: string): GeneratedVideoResponse {
  const results = normalizeGeneratedResults(response).filter((item) => item.path !== path);
  return { found: Boolean(results.length), count: results.length, results };
}

export function buildDeleteVideoRequest(plan: Pick<DirectorPlan, "project">, kind: DeleteKind, path: string, shotId = ""): DeleteVideoRequest {
  // 请求只携带身份字段；真实可删除路径必须由 Python 后端重新枚举确认。
  return { projectName: plan.project.name, runId: plan.project.runId, kind, shotId, path };
}

function stageLabel(item: GeneratedVideoItem, language: Language): string {
  if (item.processingMode === "latent_upscale_second_pass") return language === "zh" ? "Latent 放大二采" : "Latent upscale 2nd pass";
  if (item.processingMode === "super_resolution_second_pass" || item.stage === "second_pass") return language === "zh" ? "超分二采" : "Super-res 2nd pass";
  if (item.processingMode === "super_resolution_only" || item.stage === "upscaled") return language === "zh" ? "只超分" : "Super-res only";
  if (item.stage === "first_pass") return language === "zh" ? "一采" : "1st pass";
  return language === "zh" ? "旧结果" : "Legacy";
}

export function DeleteVideosPanel({ plan, language }: Props) {
  const entries = useMemo(() => postprocessShotEntries(plan), [plan]);
  const [shotStates, setShotStates] = useState<Record<string, ResultState>>({});
  const [mergedState, setMergedState] = useState<ResultState>({ loading: true, response: { found: false, results: [] } });
  const [deleting, setDeleting] = useState<Record<string, boolean>>({});
  const [preview, setPreview] = useState<PreviewTarget | null>(null);
  const [error, setError] = useState("");
  const [revision, setRevision] = useState(0);

  useEffect(() => {
    let cancelled = false;
    const loading: Record<string, ResultState> = {};
    entries.forEach((entry) => { loading[entry.key] = { loading: true, response: { found: false, results: [] } }; });
    setShotStates(loading);
    setError("");
    entries.forEach((entry) => {
      void fetchResults(shotResultUrl(plan, entry.shot.id, entry.activeIndex))
        .then((response) => { if (!cancelled) setShotStates((current) => ({ ...current, [entry.key]: { loading: false, response } })); })
        .catch((reason) => { if (!cancelled) setShotStates((current) => ({ ...current, [entry.key]: { loading: false, response: { found: false, results: [], error: String(reason) } } })); });
    });
    return () => { cancelled = true; };
  }, [plan.project.name, plan.project.runId, plan.shots.map((shot) => shot.id).join("|"), revision]);

  useEffect(() => {
    let cancelled = false;
    setMergedState({ loading: true, response: { found: false, results: [] } });
    void fetchResults(mergedResultUrl(plan))
      .then((response) => { if (!cancelled) setMergedState({ loading: false, response }); })
      .catch((reason) => { if (!cancelled) setMergedState({ loading: false, response: { found: false, results: [], error: String(reason) } }); });
    return () => { cancelled = true; };
  }, [plan.project.name, plan.project.runId, revision]);

  const deleteVideo = async (kind: DeleteKind, item: GeneratedVideoItem, shotId = "", entryKey = "") => {
    const filename = assetFileName(item.path);
    const confirmed = window.confirm(language === "zh"
      ? `确定将“${filename}”移入系统回收站吗？\n可从系统回收站恢复。`
      : `Move “${filename}” to the system trash?\nYou can restore it from the trash.`);
    if (!confirmed) return;

    // 先卸载该条目的媒体元素，避免 Windows 因浏览器持有文件句柄而拒绝移动。
    if (preview?.path === item.path) setPreview(null);
    setDeleting((current) => ({ ...current, [item.path]: true }));
    setError("");
    await new Promise<void>((resolve) => requestAnimationFrame(() => requestAnimationFrame(() => resolve())));
    try {
      const response = await fetch("/theodore-director/v1/postprocess/delete-video", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(buildDeleteVideoRequest(plan, kind, item.path, shotId)),
      });
      const result = await response.json() as { error?: string };
      if (!response.ok) throw new Error(result.error || `HTTP ${response.status}`);
      if (kind === "merged") {
        setMergedState((current) => ({ ...current, response: withoutResult(current.response, item.path) }));
      } else {
        setShotStates((current) => ({
          ...current,
          [entryKey]: { ...current[entryKey], response: withoutResult(current[entryKey]?.response ?? { found: false, results: [] }, item.path) },
        }));
      }
    } catch (reason) {
      setError(String(reason instanceof Error ? reason.message : reason));
    } finally {
      setDeleting((current) => { const next = { ...current }; delete next[item.path]; return next; });
    }
  };

  const renderResult = (item: GeneratedVideoItem, kind: DeleteKind, title: string, shotId = "", entryKey = "") => {
    const url = comfyViewUrl(item.path, "output");
    const pending = Boolean(deleting[item.path]);
    return <div class={`td-delete-result ${pending ? "deleting" : ""}`} key={item.path}>
      <button class="td-post-result-choice" disabled={pending || !url} onClick={() => url && setPreview({ path: item.path, title })}>
        {pending ? <div class="td-result-thumb">…</div> : url ? <LazyVideoThumbnail src={url} alt={filenameForAlt(item, language)}/> : <div class="td-result-thumb">×</div>}
        <span><strong>{kind === "merged" ? (language === "zh" ? "合并视频" : "Merged video") : stageLabel(item, language)}</strong><span title={item.path}>{assetFileName(item.path)}</span><small>{item.bytes ? `${(item.bytes / 1024 / 1024).toFixed(1)} MB` : ""}</small></span>
      </button>
      <button class="danger td-delete-video-button" disabled={pending} onClick={() => void deleteVideo(kind, item, shotId, entryKey)}>{pending ? (language === "zh" ? "正在移动…" : "Moving…") : (language === "zh" ? "移入回收站" : "Move to trash")}</button>
    </div>;
  };

  const mergedResults = normalizeGeneratedResults(mergedState.response);
  return <section class="td-postprocess td-delete-panel">
    <div class="td-post-header">
      <div><h2>{language === "zh" ? "删除视频" : "Delete videos"}</h2><p>{language === "zh" ? "逐条预览并将当前项目的视频移入系统回收站；不会删除素材、latent 或尾帧。" : "Preview videos and move them to the system trash one at a time. Assets, latent files, and tail frames are preserved."}</p></div>
      <div class="td-post-actions"><button onClick={() => setRevision((current) => current + 1)}>↻ {language === "zh" ? "刷新结果" : "Refresh"}</button></div>
    </div>
    {error && <div class="td-post-error">{language === "zh" ? "删除失败：" : "Delete failed: "}{error}</div>}
    <div class="td-post-shot-list">
      {entries.map((entry) => {
        const state = shotStates[entry.key];
        const results = normalizeGeneratedResults(state?.response ?? { found: false, results: [] });
        return <article class="td-post-shot" key={entry.key}>
          <header><span><strong>{entry.shot.id}</strong><em>{entry.shot.title}</em></span><span>{entry.shot.durationSeconds}s</span></header>
          {!entry.shot.enabled && <div class="td-post-shot-disabled-note">{language === "zh" ? "镜头已禁用，仍可管理其历史视频。" : "This shot is disabled; its historical videos can still be managed."}</div>}
          {state?.loading ? <div class="td-post-shot-empty">{language === "zh" ? "正在查询生成结果…" : "Loading results…"}</div>
            : state?.response.error ? <div class="td-post-shot-empty errors">{language === "zh" ? "查询失败" : "Unable to load results"}</div>
            : !results.length ? <div class="td-post-shot-empty">{language === "zh" ? "没有生成视频" : "No generated videos"}</div>
            : <div class="td-post-result-list">{results.map((item) => renderResult(item, "shot", `${entry.shot.id} · ${entry.shot.title}`, entry.shot.id, entry.key))}</div>}
        </article>;
      })}
    </div>
    <section class="td-post-merged td-delete-merged">
      <header><div><h2>{language === "zh" ? "合并视频" : "Merged videos"}</h2><span class={`td-result-state ${mergedResults.length ? "found" : ""}`}>{mergedState.loading ? (language === "zh" ? "查询中" : "Loading") : language === "zh" ? `${mergedResults.length} 个结果` : `${mergedResults.length} results`}</span></div></header>
      {mergedState.loading ? <div class="td-result-empty">{language === "zh" ? "正在查询合并视频…" : "Loading merged videos…"}</div>
        : mergedState.response.error ? <div class="td-result-empty errors">{language === "zh" ? "无法查询合并视频" : "Unable to load merged videos"}</div>
        : mergedResults.length ? <div class="td-delete-merged-list">{mergedResults.map((item) => renderResult(item, "merged", language === "zh" ? "合并视频" : "Merged video"))}</div>
        : <div class="td-result-empty">{language === "zh" ? "没有合并视频" : "No merged videos"}</div>}
    </section>
    {preview && comfyViewUrl(preview.path, "output") && <div class="td-post-preview-overlay" role="presentation" onClick={() => setPreview(null)}><section role="dialog" aria-modal="true" onClick={(event) => event.stopPropagation()}><header><strong>{preview.title}</strong><button aria-label={language === "zh" ? "关闭预览" : "Close preview"} onClick={() => setPreview(null)}>×</button></header><video src={comfyViewUrl(preview.path, "output") ?? ""} controls autoPlay preload="metadata" playsInline/><p title={preview.path}>{assetFileName(preview.path)}</p></section></div>}
  </section>;
}

function filenameForAlt(item: GeneratedVideoItem, language: Language): string {
  return `${language === "zh" ? "视频" : "Video"} ${assetFileName(item.path)}`;
}
