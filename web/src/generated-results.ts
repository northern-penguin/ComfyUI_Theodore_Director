export interface GeneratedVideoItem {
  path: string;
  bytes?: number;
  modifiedAt?: number;
}

export interface GeneratedVideoResponse {
  found: boolean;
  count?: number;
  results?: GeneratedVideoItem[];
  path?: string;
  bytes?: number;
  modifiedAt?: number;
  error?: string;
}

export function normalizeGeneratedResults(response: GeneratedVideoResponse): GeneratedVideoItem[] {
  // 优先读取新版列表；旧后端仍可通过顶层 path 自动退化为单结果。
  const candidates = Array.isArray(response.results) && response.results.length
    ? response.results
    : response.path ? [{ path: response.path, bytes: response.bytes, modifiedAt: response.modifiedAt }] : [];
  return candidates
    .filter((item) => typeof item.path === "string" && item.path.trim().length > 0)
    .sort((left, right) => (right.modifiedAt ?? 0) - (left.modifiedAt ?? 0));
}

export function generatedResultNumber(path: string, fallback: number): number {
  // SaveImageKJ 等保存节点通常把递增编号放在 video_ 后面。
  const match = /_video_(\d+)/i.exec(path.replace(/\\/g, "/"));
  return match ? Number(match[1]) : fallback;
}
