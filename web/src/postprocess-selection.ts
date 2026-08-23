import type { DirectorPlan, DirectorShot } from "./types";

export interface PostprocessShotEntry {
  key: string;
  shot: DirectorShot;
  sourceIndex: number;
  activeIndex: number;
}

export interface MergeSelection {
  shotId: string;
  activeIndex: number;
  path: string;
}

export function postprocessShotEntries(plan: DirectorPlan): PostprocessShotEntry[] {
  let activeIndex = 0;
  return plan.shots.map((shot, sourceIndex) => {
    const entry = {
      key: `${sourceIndex}:${shot.id}`,
      shot,
      sourceIndex,
      activeIndex: shot.enabled ? activeIndex : -1,
    };
    if (shot.enabled) activeIndex += 1;
    return entry;
  });
}

export function buildMergeSelections(
  entries: PostprocessShotEntry[],
  selected: Record<string, boolean>,
  selectedPaths: Record<string, string>,
): MergeSelection[] {
  // 始终按当前分镜顺序输出，不能被用户点击结果的先后顺序打乱。
  return entries
    .filter((entry) => entry.shot.enabled && selected[entry.key])
    .map((entry) => ({
      shotId: entry.shot.id,
      activeIndex: entry.activeIndex,
      path: selectedPaths[entry.key] ?? "",
    }));
}
