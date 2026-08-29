import type { DirectorPlan, DirectorShot } from "./types";
import type { GeneratedVideoItem } from "./generated-results";
import type { RuntimeAdapter } from "./runtime-adapter";
import { readJson, unsupportedCapability } from "./runtime-adapter";
import { RunningHubSettingsPanel } from "./runninghub-settings";

export interface RunningHubTaskMapping { taskId: string; target: "workflow" | "merged" | string }
export interface RunningHubResult { url: string; outputType: string }
interface RunningHubQueryResponse { taskId?: string; status?: string; errorCode?: string; errorMessage?: string; results?: RunningHubResult[] }

const VIDEO_TYPES = new Set(["mp4", "mov", "mkv", "webm", "avi"]);

export function isRunningHubHostname(hostname: string): boolean {
  const normalized = hostname.toLowerCase();
  return normalized === "runninghub.cn" || normalized.endsWith(".runninghub.cn");
}

/** 每行支持 taskId、shot_001=taskId、merged=taskId 三种形式。 */
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
    if (!seen.has(key)) { seen.add(key); mappings.push({ target: normalizedTarget, taskId }); }
  });
  return mappings;
}

export function runningHubApiUrl(path: string, locationLike: Pick<Location, "origin" | "hostname"> = window.location): string {
  const origin = isRunningHubHostname(locationLike.hostname) ? locationLike.origin : "https://www.runninghub.cn";
  return new URL(path, origin).toString();
}

async function queryRunningHubTask(apiKey: string, taskId: string): Promise<RunningHubQueryResponse> {
  const response = await fetch(runningHubApiUrl("/openapi/v2/query"), {
    method: "POST",
    headers: { Authorization: `Bearer ${apiKey}`, "Content-Type": "application/json" },
    body: JSON.stringify({ taskId }),
  });
  return readJson<RunningHubQueryResponse>(response);
}

function remoteItem(taskId: string, result: RunningHubResult): GeneratedVideoItem {
  return { path: result.url, url: result.url, provider: "runninghub", taskId, stage: "legacy_unknown" };
}

function videoResults(response: RunningHubQueryResponse): RunningHubResult[] {
  return (response.results ?? []).filter((item) => {
    const type = item.outputType.toLowerCase().replace(/^\./, "");
    return VIDEO_TYPES.has(type) && /^https:\/\//i.test(item.url);
  });
}

/** 将完整工作流任务中的视频按稳定 shot ID 或启用镜头顺序分组。 */
export function assignWorkflowResults(results: RunningHubResult[], plan: DirectorPlan, shot: DirectorShot): RunningHubResult[] {
  const active = plan.shots.filter((item) => item.enabled);
  const activeIndex = active.findIndex((item) => item.id === shot.id);
  if (activeIndex < 0 || !active.length) return [];
  const byStableId = results.filter((item) => decodeURIComponent(item.url).includes(shot.id));
  if (byStableId.length) return byStableId;
  if (active.length === 1) return results;
  return results.length >= active.length ? results.filter((_item, index) => index % active.length === activeIndex) : [];
}

export const runningHubRuntimeAdapter: RuntimeAdapter = {
  id: "runninghub",
  label: "RunningHub",
  displayLabel: () => "RunningHub",
  matchesHostname: isRunningHubHostname,
  SettingsPanel: RunningHubSettingsPanel,
  assetBanner(context, language) {
    const reason = this.unavailableReason("uploadAsset", context);
    return {
      ready: !reason,
      message: reason ?? (language === "zh" ? "RunningHub 上传已启用；素材路径将保存官方 fileName。" : "RunningHub upload is ready; the official fileName will be stored."),
    };
  },
  capabilities: { uploadAsset: true, queryShotResults: true, queryMergedResults: true, mergeVideos: true, secondPass: true, openResultFolder: false },
  unavailableReason(capability, context) {
    if (!this.capabilities[capability]) return capability === "openResultFolder" ? "RunningHub 无法打开本地结果文件夹" : `RunningHub 不支持 ${capability}`;
    if (["uploadAsset", "queryShotResults", "queryMergedResults"].includes(capability) && !context.settings.apiKey.trim()) return "请先填写 RunningHub API Key";
    if (capability === "mergeVideos" && !context.queueMerge) return "当前工作流缺少 RunningHub 合并支流";
    if (capability === "secondPass" && !context.queueSecondPass) return "当前工作流缺少后处理单独二采支流";
    return null;
  },
  async uploadAsset(context, _projectName, _kind, file) {
    const reason = this.unavailableReason("uploadAsset", context);
    if (reason) throw new Error(reason);
    const body = new FormData();
    body.append("file", file);
    const response = await fetch(runningHubApiUrl("/openapi/v2/media/upload/binary"), { method: "POST", headers: { Authorization: `Bearer ${context.settings.apiKey.trim()}` }, body });
    const result = await readJson<{ code?: number; message?: string; data?: { fileName?: string } }>(response);
    if (result.code !== 0 || !result.data?.fileName) throw new Error(result.message || "RunningHub 上传响应缺少 fileName");
    return result.data.fileName;
  },
  async fetchShotResults(context, plan, shot) {
    const apiKey = context.settings.apiKey.trim();
    if (!apiKey) return { found: false, results: [], error: this.unavailableReason("queryShotResults", context) ?? undefined };
    const mappings = parseRunningHubTaskMappings(context.settings.taskMappings).filter((item) => item.target === "workflow" || item.target === shot.id);
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
  },
  async fetchMergedResults(context) {
    const apiKey = context.settings.apiKey.trim();
    if (!apiKey) return { found: false, results: [], error: this.unavailableReason("queryMergedResults", context) ?? undefined };
    const mappings = parseRunningHubTaskMappings(context.settings.taskMappings).filter((item) => item.target === "merged");
    if (!mappings.length) return { found: false, results: [], error: "请添加 merged=taskId 合并任务映射" };
    const collected: GeneratedVideoItem[] = [];
    for (const mapping of mappings) {
      const response = await queryRunningHubTask(apiKey, mapping.taskId);
      collected.push(...videoResults(response).map((item) => remoteItem(mapping.taskId, item)));
    }
    const unique = [...new Map(collected.map((item) => [item.url || item.path, item])).values()];
    return { found: unique.length > 0, count: unique.length, results: unique };
  },
  async mergeVideos(context, request) {
    const reason = this.unavailableReason("mergeVideos", context);
    if (reason) throw new Error(reason);
    return context.queueMerge!(request);
  },
  async runSecondPass(context, request) {
    const reason = this.unavailableReason("secondPass", context);
    if (reason) throw new Error(reason);
    await context.queueSecondPass!(request);
  },
  async openResultFolder() { throw unsupportedCapability("runninghub", "openResultFolder"); },
};
