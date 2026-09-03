import type { PostprocessMode } from "./types";

export interface GeneratedVideoItem {
  path: string;
  bytes?: number;
  modifiedAt?: number;
  stage?: "first_pass" | "second_pass" | "upscaled" | "legacy_unknown";
  processingMode?: string;
  sourcePath?: string;
  completedAt?: string;
}

export interface GeneratedVideoResponse {
  found: boolean;
  count?: number;
  results?: GeneratedVideoItem[];
  path?: string;
  bytes?: number;
  modifiedAt?: number;
  stage?: "first_pass" | "second_pass" | "upscaled" | "legacy_unknown";
  processingMode?: string;
  sourcePath?: string;
  completedAt?: string;
  error?: string;
}

export function normalizeGeneratedResults(response: GeneratedVideoResponse): GeneratedVideoItem[] {
  // 优先读取新版列表；旧后端仍可通过顶层 path 自动退化为单结果。
  const candidates = Array.isArray(response.results) && response.results.length
    ? response.results
    : response.path ? [{ path: response.path, bytes: response.bytes, modifiedAt: response.modifiedAt, stage: response.stage, processingMode: response.processingMode, sourcePath: response.sourcePath, completedAt: response.completedAt }] : [];
  return candidates
    .filter((item) => typeof item.path === "string" && item.path.trim().length > 0)
    .sort((left, right) => (right.modifiedAt ?? 0) - (left.modifiedAt ?? 0));
}

export function generatedResultNumber(path: string, fallback: number): number {
  // SaveImageKJ 等保存节点通常把递增编号放在 video_ 后面。
  const match = /_video_(\d+)/i.exec(path.replace(/\\/g, "/"));
  return match ? Number(match[1]) : fallback;
}

export type StandaloneProcessingBlockReason = "second_pass_requires_upscale_only" | "upscaled_is_terminal";

export function standaloneProcessingBlockReason(item: GeneratedVideoItem, targetMode: PostprocessMode): StandaloneProcessingBlockReason | null {
  // 一采和无伴随元数据的旧结果仍兼容三种处理；二采结果只允许追加一次纯 RTX 超分。
  if (item.stage === "second_pass" && targetMode !== "super_resolution_only") return "second_pass_requires_upscale_only";
  if (item.stage === "upscaled") return "upscaled_is_terminal";
  return null;
}

export function canRunStandaloneSecondPass(item: GeneratedVideoItem, targetMode: PostprocessMode): boolean {
  return standaloneProcessingBlockReason(item, targetMode) === null;
}

export function availableStandaloneProcessingModes(item: GeneratedVideoItem): PostprocessMode[] {
  // 每条结果独立计算可用方式，避免顶部选择把本来可执行的操作错误隐藏或禁用。
  const modes: PostprocessMode[] = ["super_resolution_second_pass", "latent_upscale_second_pass", "super_resolution_only"];
  return modes.filter((mode) => canRunStandaloneSecondPass(item, mode));
}
