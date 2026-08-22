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
  const videosWithDuration = videos.filter((asset) => typeof asset.durationSeconds === "number");
  for (const asset of videos) if (asset.durationSeconds == null || asset.durationSeconds < 2 || asset.durationSeconds > 15) errors.push(`视频 ${asset.alias} 的时长必须为 2–15 秒`);
  if (videosWithDuration.reduce((sum, asset) => sum + (asset.durationSeconds ?? 0), 0) > 15) errors.push("参考视频总时长超过 15 秒");
  const audioDurations = [...paired.map((asset) => asset.audioDurationSeconds ?? asset.durationSeconds), ...audios.map((asset) => asset.durationSeconds)];
  if (audioDurations.some((duration) => duration == null || duration < 2 || duration > 15)) errors.push("每路有效音频时长必须为 2–15 秒");
  if (audioDurations.reduce<number>((sum, duration) => sum + (duration ?? 0), 0) > 15) errors.push("有效音频总时长超过 15 秒");

  const labels = new Map<string, string>();
  pictures.forEach((asset, index) => labels.set(asset.alias, `<Picture ${index + 1}>`));
  videos.forEach((asset, index) => labels.set(asset.alias, `<Video ${index + 1}>`));
  paired.forEach((asset, index) => labels.set(`${asset.alias}.audio`, `<Audio ${index + 1}>`));
  audios.forEach((asset, index) => labels.set(asset.alias, `<Audio ${paired.length + index + 1}>`));
  const compiledPrompt = prompt.replace(TOKEN, (whole, alias: string) => labels.get(alias.trim()) ?? whole);
  const slots = [...labels.entries()].map(([alias, label]) => ({ label, alias, kind: label.slice(1).split(" ")[0].toLowerCase() }));
  return { compiledPrompt, errors, slots, mixedFiles, audioCount };
}

export function validatePlan(plan: DirectorPlan): string[] {
  const errors: string[] = [];
  if (!plan.project?.name?.trim()) errors.push("Project name 不能为空");
  if (!plan.project?.runId?.trim()) errors.push("Run ID 不能为空");
  if (!Array.isArray(plan.shots) || !plan.shots.some((shot) => shot.enabled)) errors.push("至少需要一个启用分镜");
  const shotIds = new Set<string>();
  for (const shot of plan.shots ?? []) {
    if (!shot.id?.trim() || shotIds.has(shot.id)) errors.push(`分镜 ID 为空或重复：${shot.id || "(空)"}`);
    shotIds.add(shot.id);
    if (!(shot.durationSeconds > 0)) errors.push(`分镜 ${shot.id} 的时长必须大于 0`);
  }
  const aliases = new Set<string>();
  for (const asset of plan.assets ?? []) {
    const normalized = asset.alias?.toLocaleLowerCase();
    if (!asset.alias || /[\s{}]/.test(asset.alias) || asset.alias.endsWith(".audio") || aliases.has(normalized)) errors.push(`素材别名无效或重复：${asset.alias || "(空)"}`);
    aliases.add(normalized);
    if (asset.enabled && !asset.path) errors.push(`素材 ${asset.alias} 尚未选择文件`);
  }
  for (const shot of plan.shots.filter((item) => item.enabled)) errors.push(...previewReferences(plan, shot).errors.map((error) => `${shot.title}: ${error}`));
  return [...new Set(errors)];
}
