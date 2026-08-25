import { describe, expect, it } from "vitest";
import { buildMergeSelections, postprocessShotEntries, selectShotRange } from "./postprocess-selection";
import type { DirectorPlan } from "./types";

const plan = {
  shots: [
    { id: "one", title: "One", enabled: true },
    { id: "skip", title: "Skip", enabled: false },
    { id: "two", title: "Two", enabled: true },
  ],
} as DirectorPlan;

describe("postprocess selections", () => {
  it("keeps disabled shots visible without consuming an active index", () => {
    const entries = postprocessShotEntries(plan);
    expect(entries.map((entry) => entry.activeIndex)).toEqual([0, -1, 1]);
  });

  it("builds the merge list in storyboard order and excludes unchecked shots", () => {
    const entries = postprocessShotEntries(plan);
    const selected = { [entries[0].key]: true, [entries[2].key]: false };
    const paths = { [entries[0].key]: "one.mp4", [entries[2].key]: "two.mp4" };
    expect(buildMergeSelections(entries, selected, paths)).toEqual([
      { shotId: "one", activeIndex: 0, path: "one.mp4" },
    ]);
  });

  it("selects an inclusive storyboard range while leaving disabled shots unchecked", () => {
    const entries = postprocessShotEntries(plan);
    expect(selectShotRange(entries, 2, 3)).toEqual({
      [entries[0].key]: false,
      [entries[1].key]: false,
      [entries[2].key]: true,
    });
  });
});
