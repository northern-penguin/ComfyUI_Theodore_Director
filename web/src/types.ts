export type AssetKind = "image" | "video" | "audio";

export interface DirectorAsset {
  id: string;
  alias: string;
  kind: AssetKind;
  path: string;
  enabled: boolean;
  fixed: boolean;
  fixedOrder: number;
  shotIds: string[];
  includeVideoAudio: boolean;
  durationSeconds: number | null;
  audioDurationSeconds: number | null;
  fingerprint: string;
}

export interface DirectorShot {
  id: string;
  title: string;
  prompt: string;
  negativePrompt: string;
  durationSeconds: number;
  enabled: boolean;
  latentRelay: boolean;
  secondSampling: boolean;
  seed: number | null;
  disabledAssetIds: string[];
}

export interface DirectorPlan {
  schemaVersion: 4;
  project: { id: string; name: string; runId: string };
  defaults: { fps: number; baseSeed: number };
  promptPrefix: string;
  promptSuffix: string;
  continuity: {
    mode: string;
    videoContextFrames: number;
    audioContextFrames: number;
    durationMode: string;
  };
  assets: DirectorAsset[];
  shots: DirectorShot[];
}

export interface ResolvedPreview {
  compiledPrompt: string;
  errors: string[];
  slots: Array<{ label: string; alias: string; kind: string }>;
  mixedFiles: number;
  audioCount: number;
}

export interface SecondPassQueueRequest {
  plan: DirectorPlan;
  shotId: string;
  sourcePath: string;
  requestId: string;
}

export type QueueSecondPass = (request: SecondPassQueueRequest) => Promise<void>;

export interface MergeQueueRequest {
  projectName: string;
  runId: string;
  selections: Array<{ shotId: string; activeIndex: number; path: string }>;
  requestId: string;
}

export type QueueMerge = (request: MergeQueueRequest) => Promise<import("./generated-results").GeneratedVideoItem | undefined>;
