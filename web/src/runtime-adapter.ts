import type { ComponentType } from "preact";
import type { Language } from "./i18n";
import type { GeneratedVideoItem, GeneratedVideoResponse } from "./generated-results";
import type { AssetKind, DirectorPlan, DirectorShot, MergeQueueRequest, QueueMerge, QueueSecondPass, SecondPassQueueRequest } from "./types";

export type RuntimeAdapterId = "local" | "runninghub";
export type RuntimeMode = "auto" | RuntimeAdapterId;

export interface RuntimeSettings {
  mode: RuntimeMode;
  apiKey: string;
  taskMappings: string;
}

export type RuntimeCapability = "uploadAsset" | "queryShotResults" | "queryMergedResults" | "mergeVideos" | "secondPass" | "openResultFolder";

export interface RuntimeAdapterContext {
  settings: RuntimeSettings;
  queueMerge?: QueueMerge;
  queueSecondPass?: QueueSecondPass;
}

export interface RuntimeAdapterSettingsProps {
  language: Language;
  settings: RuntimeSettings;
  onChange: (settings: RuntimeSettings) => void;
  rememberSecret: boolean;
  onRememberSecretChange: (remember: boolean) => void;
  onClearSavedSecret: () => void;
  onProjectSettingChange: (key: string, value: string) => void;
}

export interface RuntimeAdapter {
  id: RuntimeAdapterId;
  label: string;
  displayLabel: (language: Language) => string;
  /** 云平台适配器按注册顺序检测；本地适配器始终作为最终回退。 */
  matchesHostname: (hostname: string) => boolean;
  capabilities: Readonly<Record<RuntimeCapability, boolean>>;
  SettingsPanel?: ComponentType<RuntimeAdapterSettingsProps>;
  assetBanner: (context: RuntimeAdapterContext, language: Language) => { message: string; ready: boolean } | null;
  unavailableReason: (capability: RuntimeCapability, context: RuntimeAdapterContext) => string | null;
  uploadAsset: (context: RuntimeAdapterContext, projectName: string, kind: AssetKind, file: File) => Promise<string>;
  fetchShotResults: (context: RuntimeAdapterContext, plan: DirectorPlan, shot: DirectorShot, activeIndex: number) => Promise<GeneratedVideoResponse>;
  fetchMergedResults: (context: RuntimeAdapterContext, plan: DirectorPlan) => Promise<GeneratedVideoResponse>;
  mergeVideos: (context: RuntimeAdapterContext, request: MergeQueueRequest) => Promise<GeneratedVideoItem | undefined>;
  runSecondPass: (context: RuntimeAdapterContext, request: SecondPassQueueRequest) => Promise<void>;
  openResultFolder: (context: RuntimeAdapterContext, plan: DirectorPlan) => Promise<void>;
}

/** 统一解析 JSON 错误，避免各个平台重复实现 HTTP 错误处理。 */
export async function readJson<T>(response: Response): Promise<T> {
  const payload = await response.json() as T & { message?: string; error?: string };
  if (!response.ok) throw new Error(payload.error || payload.message || `HTTP ${response.status}`);
  return payload;
}

export function unsupportedCapability(adapter: RuntimeAdapterId, capability: RuntimeCapability): Error {
  return new Error(`${adapter} adapter does not support ${capability}`);
}
