export type AssetKind = "image" | "video" | "audio";
export type SecondSamplingMode = "off" | "super_resolution_second_pass" | "latent_upscale_second_pass" | "super_resolution_only";
export type PostprocessMode = Exclude<SecondSamplingMode, "off">;

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
  secondSamplingMode: SecondSamplingMode;
  seed: number | null;
  disabledAssetIds: string[];
}

export interface DirectorPlan {
  schemaVersion: 5;
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
  processingMode: PostprocessMode;
}

export type QueueSecondPass = (request: SecondPassQueueRequest) => Promise<void>;
