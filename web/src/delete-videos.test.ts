import { describe, expect, it } from "vitest";
import { buildDeleteVideoRequest, withoutResult } from "./delete-videos";

describe("delete video helpers", () => {
  it("removes only the confirmed result from the local response", () => {
    const updated = withoutResult({
      found: true,
      results: [
        { path: "TheodoreDirector/Demo_1/shot_001_video_00002_.mp4", modifiedAt: 2 },
        { path: "TheodoreDirector/Demo_1/shot_001_video_00001_.mp4", modifiedAt: 1 },
      ],
    }, "TheodoreDirector/Demo_1/shot_001_video_00002_.mp4");

    expect(updated.found).toBe(true);
    expect(updated.count).toBe(1);
    expect(updated.results?.map((item) => item.path)).toEqual(["TheodoreDirector/Demo_1/shot_001_video_00001_.mp4"]);
  });

  it("builds scoped requests for shot and merged videos", () => {
    const plan = { project: { id: "legacy", name: "Demo", runId: "1" } };
    expect(buildDeleteVideoRequest(plan, "shot", "shot.mp4", "shot_001")).toEqual({
      projectName: "Demo", runId: "1", kind: "shot", shotId: "shot_001", path: "shot.mp4",
    });
    expect(buildDeleteVideoRequest(plan, "merged", "merged.mp4")).toEqual({
      projectName: "Demo", runId: "1", kind: "merged", shotId: "", path: "merged.mp4",
    });
  });
});
