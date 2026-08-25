import type { AssetKind, DirectorAsset } from "./types";

const EXTENSION_KINDS: Record<string, AssetKind> = {
  png: "image", jpg: "image", jpeg: "image", webp: "image", bmp: "image",
  mp4: "video", webm: "video", mov: "video", mkv: "video",
  wav: "audio", mp3: "audio", flac: "audio", ogg: "audio", m4a: "audio", aac: "audio",
};

export interface BatchAssetDraft {
  id: string;
  file: File;
  alias: string;
  kind: AssetKind;
  durationSeconds: number | null;
  includeVideoAudio: boolean;
  status: "pending" | "uploading" | "imported" | "error";
  error: string;
}

export function detectAssetKind(file: Pick<File, "name" | "type">): AssetKind | null {
  const extension = file.name.split(".").pop()?.toLocaleLowerCase() ?? "";
  if (file.name.includes(".")) return EXTENSION_KINDS[extension] ?? null;
  const mimeKind = file.type.split("/", 1)[0];
  return mimeKind === "image" || mimeKind === "video" || mimeKind === "audio" ? mimeKind : null;
}

export function aliasFromFileName(fileName: string): string {
  const withoutExtension = fileName.replace(/\.[^.]+$/, "");
  const withoutOrdinal = withoutExtension.replace(/^\s*\d+\s*[-_. ]+/, "");
  const cleaned = withoutOrdinal
    .normalize("NFKC")
    .replace(/[\s-]+/g, "_")
    .replace(/[{}]/g, "")
    .replace(/_+/g, "_")
    .replace(/^[_\.]+|[_\.]+$/g, "")
    .slice(0, 96);
  const alias = cleaned || "asset";
  // `.audio` 是视频伴音引用的保留后缀，普通素材别名不能占用。
  return alias.toLocaleLowerCase().endsWith(".audio") ? `${alias}_asset` : alias;
}

export function uniqueAlias(preferred: string, occupiedAliases: Iterable<string>): string {
  const occupied = new Set(Array.from(occupiedAliases, (value) => value.toLocaleLowerCase()));
  if (!occupied.has(preferred.toLocaleLowerCase())) return preferred;
  let suffix = 2;
  while (occupied.has(`${preferred}_${suffix}`.toLocaleLowerCase())) suffix += 1;
  return `${preferred}_${suffix}`;
}

export function validateBatchAlias(alias: string, occupiedAliases: Iterable<string>, ownAliases: Iterable<string>): string | null {
  const normalized = alias.trim().toLocaleLowerCase();
  if (!alias.trim() || /[\s{}]/.test(alias) || normalized.endsWith(".audio")) return "invalid";
  if (Array.from(occupiedAliases, (value) => value.toLocaleLowerCase()).includes(normalized)) return "duplicate";
  const matches = Array.from(ownAliases, (value) => value.trim().toLocaleLowerCase()).filter((value) => value === normalized);
  return matches.length > 1 ? "duplicate" : null;
}

export function createBatchDrafts(files: File[], occupiedAliases: Iterable<string>, idFactory: () => string): { drafts: BatchAssetDraft[]; rejected: string[] } {
  const used = new Set(Array.from(occupiedAliases));
  const drafts: BatchAssetDraft[] = [];
  const rejected: string[] = [];
  for (const file of files) {
    const kind = detectAssetKind(file);
    if (!kind) {
      rejected.push(file.name);
      continue;
    }
    const alias = uniqueAlias(aliasFromFileName(file.name), used);
    used.add(alias);
    drafts.push({ id: idFactory(), file, alias, kind, durationSeconds: kind === "image" ? null : 2, includeVideoAudio: false, status: "pending", error: "" });
  }
  return { drafts, rejected };
}

export function importedAssetFromDraft(draft: BatchAssetDraft, path: string, fixedOrder: number): DirectorAsset {
  return {
    id: draft.id,
    alias: draft.alias.trim(),
    kind: draft.kind,
    path,
    enabled: true,
    fixed: false,
    fixedOrder,
    shotIds: [],
    includeVideoAudio: draft.kind === "video" && draft.includeVideoAudio,
    durationSeconds: draft.kind === "image" ? null : draft.durationSeconds,
    audioDurationSeconds: null,
    fingerprint: "",
  };
}
