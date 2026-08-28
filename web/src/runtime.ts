import type { DirectorPlan, DirectorShot } from "./types";
import type { AssetKind } from "./types";
import type { GeneratedVideoItem, GeneratedVideoResponse } from "./generated-results";

export type RuntimeMode = "auto" | "local" | "runninghub";
export type ResolvedRuntimeMode = Exclude<RuntimeMode, "auto">;

export interface RuntimeSettings {
  mode: RuntimeMode;
  apiKey: string;
  taskMappings: string;
}

export interface RunningHubTaskMapping {
  taskId: string;
  target: "workflow" | "merged" | string;
}

interface RunningHubResult {
  url: string;
  outputType: string;
}

interface RunningHubQueryResponse {
  taskId?: string;
  status?: string;
  errorCode?: string;
  errorMessage?: string;
  results?: RunningHubResult[];
}

const VIDEO_TYPES = new Set(["mp4", "mov", "mkv", "webm", "avi"]);

/** RunningHub 域名内自动启用云端适配器，其他环境保持本地行为。 */
export function resolveRuntimeMode(settings: Pick<RuntimeSettings, "mode">, hostname = window.location.hostname): ResolvedRuntimeMode {
  if (settings.mode !== "auto") return settings.mode;
  const normalized = hostname.toLowerCase();
  return normalized === "runninghub.cn" || normalized.endsWith(".runninghub.cn") ? "runninghub" : "local";
}

/**
 * 每行支持三种形式：taskId、shot_001=taskId、merged=taskId。
 * taskId 单独一行表示一次完整工作流任务，结果按启用镜头顺序归属。
 */
export function parseRunningHubTaskMappings(value: string): RunningHubTaskMapping[] {
  const mappings: RunningHubTaskMapping[] = [];
  const seen = new Set<string>();
  value.split(/\r?\n|,/).map((line) => line.trim()).filter(Boolean).forEach((line) => {
    const separator = line.indexOf("=");
    const target = separator >= 0 ? line.slice(0, separator).trim() : "workflow";
    const taskId = (separator >= 0 ? line.slice(separator + 1) : line).trim();
    if (!taskId || !/^[A-Za-z0-9_-]+$/.test(taskId)) return;
    const normalizedTarget = target.toLowerCase() === "merged" ? "merged" : (target || "workflow");
    const key = `${normalizedTarget}\0${taskId}`;
    if (!seen.has(key)) {
      seen.add(key);
      mappings.push({ target: normalizedTarget, taskId });
    }
  });
  return mappings;
}

export function runningHubApiUrl(path: string, locationLike: Pick<Location, "origin" | "hostname"> = window.location): string {
  const hostname = locationLike.hostname.toLowerCase();
  const origin = hostname === "runninghub.cn" || hostname.endsWith(".runninghub.cn")
    ? locationLike.origin
    : "https://www.runninghub.cn";
  return new URL(path, origin).toString();
}

async function readJson<T>(response: Response): Promise<T> {
  const payload = await response.json() as T & { message?: string; error?: string };
  if (!response.ok) throw new Error(payload.error || payload.message || `HTTP ${response.status}`);
  return payload;
}

export async function uploadAssetForRuntime(
  settings: RuntimeSettings,
  projectName: string,
  kind: AssetKind,
  file: File,
): Promise<string> {
  if (resolveRuntimeMode(settings) === "local") {
    const body = new FormData();
    body.append("projectName", projectName);
    body.append("kind", kind);
    body.append("file", file);
    const response = await fetch("/theodore-director/v1/assets", { method: "POST", body });
    const result = await readJson<{ path?: string; error?: string }>(response);
    if (!result.path) throw new Error("上传响应缺少 path");
    return result.path;
  }

  const apiKey = settings.apiKey.trim();
  if (!apiKey) throw new Error("请先在项目设置中填写 RunningHub API Key（密钥只保存在当前页面）");
  const body = new FormData();
  body.append("file", file);
  const response = await fetch(runningHubApiUrl("/openapi/v2/media/upload/binary"), {
    method: "POST",
    headers: { Authorization: `Bearer ${apiKey}` },
    body,
  });
  const result = await readJson<{ code?: number; message?: string; data?: { fileName?: string } }>(response);
  if (result.code !== 0 || !result.data?.fileName) throw new Error(result.message || "RunningHub 上传响应缺少 fileName");
  return result.data.fileName;
}

async function queryRunningHubTask(apiKey: string, taskId: string): Promise<RunningHubQueryResponse> {
  const response = await fetch(runningHubApiUrl("/openapi/v2/query"), {
    method: "POST",
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ taskId }),
  });
  return readJson<RunningHubQueryResponse>(response);
}

function remoteItem(taskId: string, result: RunningHubResult): GeneratedVideoItem {
  return {
    path: result.url,
    url: result.url,
    provider: "runninghub",
    taskId,
    stage: "legacy_unknown",
  };
}

function videoResults(response: RunningHubQueryResponse): RunningHubResult[] {
  return (response.results ?? []).filter((item) => {
    const type = item.outputType.toLowerCase().replace(/^\./, "");
    return VIDEO_TYPES.has(type) && /^https:\/\//i.test(item.url);
  });
}

/** 将完整工作流任务中的视频按启用镜头顺序稳定分组。 */
export function assignWorkflowResults(
  results: RunningHubResult[],
  plan: DirectorPlan,
  shot: DirectorShot,
): RunningHubResult[] {
  const active = plan.shots.filter((item) => item.enabled);
  const activeIndex = active.findIndex((item) => item.id === shot.id);
  if (activeIndex < 0 || !active.length) return [];

  const byStableId = results.filter((item) => decodeURIComponent(item.url).includes(shot.id));
  if (byStableId.length) return byStableId;
  if (active.length === 1) return results;
  // 一个 RunningHub 任务可能包含多轮完整分镜；按每轮的稳定启用顺序归属。
  if (results.length >= active.length) return results.filter((_item, index) => index % active.length === activeIndex);
  return [];
}

async function fetchLocalShotResults(plan: DirectorPlan, shot: DirectorShot, activeIndex: number): Promise<GeneratedVideoResponse> {
  const query = new URLSearchParams({
    projectName: plan.project.name,
    runId: plan.project.runId,
    shotId: shot.id,
    activeIndex: String(activeIndex),
  });
  const response = await fetch(`/theodore-director/v1/generated-video?${query.toString()}`);
  return readJson<GeneratedVideoResponse>(response);
}

export async function fetchShotResultsForRuntime(
  settings: RuntimeSettings,
  plan: DirectorPlan,
  shot: DirectorShot,
  activeIndex: number,
): Promise<GeneratedVideoResponse> {
  if (resolveRuntimeMode(settings) === "local") return fetchLocalShotResults(plan, shot, activeIndex);
  const apiKey = settings.apiKey.trim();
  if (!apiKey) return { found: false, results: [], error: "请先填写 RunningHub API Key" };
  const mappings = parseRunningHubTaskMappings(settings.taskMappings)
    .filter((item) => item.target === "workflow" || item.target === shot.id);
  if (!mappings.length) return { found: false, results: [], error: `请添加工作流 taskId，或填写 ${shot.id}=taskId` };

  const collected: GeneratedVideoItem[] = [];
  const messages: string[] = [];
  for (const mapping of mappings) {
    const response = await queryRunningHubTask(apiKey, mapping.taskId);
    const status = String(response.status ?? "").toUpperCase();
    if (status && status !== "SUCCESS") {
      if (["FAILED", "ERROR", "CANCELED", "CANCELLED"].includes(status)) messages.push(response.errorMessage || `${mapping.taskId}: ${status}`);
      continue;
    }
    const videos = videoResults(response);
    const assigned = mapping.target === shot.id ? videos : assignWorkflowResults(videos, plan, shot);
    collected.push(...assigned.map((item) => remoteItem(mapping.taskId, item)));
  }
  const unique = [...new Map(collected.map((item) => [item.url || item.path, item])).values()];
  return { found: unique.length > 0, count: unique.length, results: unique, error: unique.length ? undefined : messages.join("；") || undefined };
}

export async function fetchMergedResultsForRuntime(settings: RuntimeSettings, plan: DirectorPlan): Promise<GeneratedVideoResponse> {
  if (resolveRuntimeMode(settings) === "local") {
    const query = new URLSearchParams({ projectName: plan.project.name, runId: plan.project.runId });
    const response = await fetch(`/theodore-director/v1/postprocess/merged-videos?${query.toString()}`);
    return readJson<GeneratedVideoResponse>(response);
  }
  const apiKey = settings.apiKey.trim();
  if (!apiKey) return { found: false, results: [], error: "请先填写 RunningHub API Key" };
  const mappings = parseRunningHubTaskMappings(settings.taskMappings).filter((item) => item.target === "merged");
  const collected: GeneratedVideoItem[] = [];
  for (const mapping of mappings) {
    const response = await queryRunningHubTask(apiKey, mapping.taskId);
    collected.push(...videoResults(response).map((item) => remoteItem(mapping.taskId, item)));
  }
  const unique = [...new Map(collected.map((item) => [item.url || item.path, item])).values()];
  return { found: unique.length > 0, count: unique.length, results: unique };
}
