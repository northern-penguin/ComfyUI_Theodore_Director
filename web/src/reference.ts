import type { DirectorAsset, DirectorPlan, DirectorShot, ResolvedPreview } from "./types";

const TOKEN = /\{\{ref:([^{}]+)}}/g;

// 浏览器端只负责即时预检；Python 后端始终是执行前校验的最终权威。
export function previewReferences(plan: DirectorPlan, shot: DirectorShot): ResolvedPreview {
  const errors: string[] = [];
  const catalog = new Map<string, DirectorAsset>();
  for (const asset of plan.assets) {
    if (asset.enabled && (!asset.shotIds.length || asset.shotIds.includes(shot.id)) && !shot.disabledAssetIds.includes(asset.id)) {
      catalog.set(asset.alias, asset);
    }
  }
  const prompt = [plan.promptPrefix, shot.prompt, plan.promptSuffix].filter(Boolean).join("\n");
  const tokens = [...prompt.matchAll(TOKEN)].map((match) => match[1].trim());
  const ordered: DirectorAsset[] = [];
  const seen = new Set<string>();
  const add = (asset: DirectorAsset) => {
    if (!seen.has(asset.id)) { seen.add(asset.id); ordered.push(asset); }
  };
  [...catalog.values()].filter((asset) => asset.fixed).sort((a, b) => a.fixedOrder - b.fixedOrder || a.alias.localeCompare(b.alias)).forEach(add);
  for (const token of tokens) {
    const base = token.endsWith(".audio") ? token.slice(0, -6) : token;
    const asset = catalog.get(base);
    if (!asset) { errors.push(`未找到或已禁用素材：${token}`); continue; }
    if (token.endsWith(".audio") && (asset.kind !== "video" || !asset.includeVideoAudio)) errors.push(`视频伴音未启用：${token}`);
    add(asset);
  }
  const pictures = ordered.filter((asset) => asset.kind === "image");
  const videos = ordered.filter((asset) => asset.kind === "video");
  const paired = videos.filter((asset) => asset.includeVideoAudio);
  const audios = ordered.filter((asset) => asset.kind === "audio");
  const audioCount = paired.length + audios.length;
  const mixedFiles = pictures.length + videos.length + audios.length;
  if (pictures.length > 9) errors.push(`参考图 ${pictures.length}/9，超出 H3 上限`);
  if (videos.length > 3) errors.push(`参考视频 ${videos.length}/3，超出 H3 上限`);
  if (audioCount > 3) errors.push(`有效音频 ${audioCount}/3，超出 H3 总上限`);
  if (mixedFiles > 12) errors.push(`混合文件 ${mixedFiles}/12，超出 H3 上限`);
  if (audioCount && !pictures.length && !videos.length) errors.push("音频参考不能单独使用");

  const labels = new Map<string, string>();
  pictures.forEach((asset, index) => labels.set(asset.alias, `<Picture ${index + 1}>`));
  videos.forEach((asset, index) => labels.set(asset.alias, `<Video ${index + 1}>`));
  paired.forEach((asset, index) => labels.set(`${asset.alias}.audio`, `<Audio ${index + 1}>`));
  audios.forEach((asset, index) => labels.set(asset.alias, `<Audio ${paired.length + index + 1}>`));
  const compiledPrompt = prompt.replace(TOKEN, (whole, alias: string) => labels.get(alias.trim()) ?? whole);
  const slots = [...labels.entries()].map(([alias, label]) => ({ label, alias, kind: label.slice(1).split(" ")[0].toLowerCase() }));
  return { compiledPrompt, errors, slots, mixedFiles, audioCount };
}
