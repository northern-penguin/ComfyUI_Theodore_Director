import type { DirectorShot } from "./types";

function nextShotOrdinal(shots: DirectorShot[]): number {
  // 优先沿用 shot_XXX 的最大编号，避免删除中间镜头后批量新增产生重复 ID。
  const maxOrdinal = shots.reduce((maximum, shot) => {
    const match = /^shot_(\d+)$/i.exec(shot.id.trim());
    return match ? Math.max(maximum, Number(match[1])) : maximum;
  }, 0);
  return Math.max(maxOrdinal, shots.length) + 1;
}

export function createShot(ordinal: number, durationSeconds = 5): DirectorShot {
  return {
    id: `shot_${String(ordinal).padStart(3, "0")}`,
    title: `Shot ${ordinal}`,
    prompt: "",
    negativePrompt: "",
    durationSeconds,
    enabled: true,
    latentRelay: true,
    secondSampling: true,
    seed: null,
    disabledAssetIds: [],
  };
}

export function appendShots(shots: DirectorShot[], count: number, durationSeconds: number): DirectorShot[] {
  const firstOrdinal = nextShotOrdinal(shots);
  // 返回新数组和全新的镜头对象，确保批量面板的临时数据不会修改原计划。
  const additions = Array.from({ length: count }, (_, index) => createShot(firstOrdinal + index, durationSeconds));
  return [...shots, ...additions];
}
