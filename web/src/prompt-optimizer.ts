import type { DirectorPlan, DirectorShot } from "./types";

export interface OllamaModel { name: string; model?: string; size?: number; size_vram?: number }
export interface PromptValidation { mode: "base" | "full_reference"; valid: boolean; errors: string[]; warnings: string[] }
export interface PromptOptimizationResponse {
  optimizedPrompt: string;
  notes: string[];
  validation: PromptValidation;
  repaired: boolean;
  attempts: number;
  error?: string;
}

export interface PromptCandidate extends PromptOptimizationResponse {
  shotId: string;
  sourcePrompt: string;
  sourceKey: string;
  status: "pending" | "running" | "ready" | "failed" | "applied";
  error?: string;
}

export function promptSourceKey(plan: DirectorPlan, shot: DirectorShot): string {
  // 候选只在所有会影响提示词语义的上下文保持不变时才能写回。
  const assets = plan.assets.map((asset) => ({
    id: asset.id, alias: asset.alias, kind: asset.kind, path: asset.path, enabled: asset.enabled,
    fixed: asset.fixed, fixedOrder: asset.fixedOrder, shotIds: asset.shotIds,
    includeVideoAudio: asset.includeVideoAudio, durationSeconds: asset.durationSeconds,
  }));
  return JSON.stringify({
    id: shot.id,
    prompt: shot.prompt,
    durationSeconds: shot.durationSeconds,
    disabledAssetIds: shot.disabledAssetIds,
    promptPrefix: plan.promptPrefix,
    promptSuffix: plan.promptSuffix,
    assets,
  });
}

export function candidateIsStale(candidate: PromptCandidate, plan: DirectorPlan, shot: DirectorShot): boolean {
  return candidate.status !== "applied" && candidate.sourceKey !== promptSourceKey(plan, shot);
}

async function responseJson<T>(response: Response): Promise<T> {
  const result = await response.json() as T & { error?: string };
  if (!response.ok) throw new Error(result.error || `HTTP ${response.status}`);
  return result;
}

export async function fetchOllamaModels(host: "127.0.0.1" | "localhost", port: number, running = false): Promise<OllamaModel[]> {
  const query = new URLSearchParams({ host, port: String(port) });
  const response = await fetch(`/theodore-director/v1/ollama/${running ? "running" : "models"}?${query}`);
  return (await responseJson<{ models: OllamaModel[] }>(response)).models;
}

export async function optimizePrompt(plan: DirectorPlan, shotId: string, host: "127.0.0.1" | "localhost", port: number, model: string, signal?: AbortSignal): Promise<PromptOptimizationResponse> {
  const response = await fetch("/theodore-director/v1/prompt/optimize", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ plan, shotId, host, port, model }),
    signal,
  });
  return responseJson<PromptOptimizationResponse>(response);
}

export async function unloadOllamaModel(host: "127.0.0.1" | "localhost", port: number, model: string): Promise<void> {
  const response = await fetch("/theodore-director/v1/ollama/unload", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ host, port, model }),
  });
  await responseJson<{ ok: boolean }>(response);
}
