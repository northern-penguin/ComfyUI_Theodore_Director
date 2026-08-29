import { localRuntimeAdapter } from "./runtime-local";
import { runningHubRuntimeAdapter } from "./runtime-runninghub";
import type { RuntimeAdapter, RuntimeAdapterContext, RuntimeAdapterId, RuntimeSettings } from "./runtime-adapter";

export type { RuntimeAdapter, RuntimeAdapterContext, RuntimeAdapterId, RuntimeAdapterSettingsProps, RuntimeCapability, RuntimeMode, RuntimeSettings } from "./runtime-adapter";
export { assignWorkflowResults, parseRunningHubTaskMappings, runningHubApiUrl } from "./runtime-runninghub";

/** 云平台放在本地回退之前；未来平台只需新增适配器并加入此注册表。 */
export const runtimeAdapters: readonly RuntimeAdapter[] = [runningHubRuntimeAdapter, localRuntimeAdapter];

export function resolveRuntimeAdapter(settings: Pick<RuntimeSettings, "mode">, hostname = typeof window === "undefined" ? "localhost" : window.location.hostname): RuntimeAdapter {
  if (settings.mode !== "auto") return getRuntimeAdapterById(settings.mode);
  return runtimeAdapters.find((adapter) => adapter.id !== "local" && adapter.matchesHostname(hostname)) ?? localRuntimeAdapter;
}

export function getRuntimeAdapterById(id: RuntimeAdapterId): RuntimeAdapter {
  return runtimeAdapters.find((adapter) => adapter.id === id) ?? localRuntimeAdapter;
}

/** 兼容已有测试和调用方；新组件应直接使用 resolveRuntimeAdapter。 */
export function resolveRuntimeMode(settings: Pick<RuntimeSettings, "mode">, hostname = typeof window === "undefined" ? "localhost" : window.location.hostname): RuntimeAdapterId {
  return resolveRuntimeAdapter(settings, hostname).id;
}

export function runtimeContext(settings: RuntimeSettings, queues: Pick<RuntimeAdapterContext, "queueMerge" | "queueSecondPass"> = {}): RuntimeAdapterContext {
  return { settings, ...queues };
}
