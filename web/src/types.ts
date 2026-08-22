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
  seed: number | null;
  disabledAssetIds: string[];
}

export interface DirectorPlan {
  schemaVersion: 3;
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
