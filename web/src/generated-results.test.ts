import { describe, expect, it } from "vitest";
import { generatedResultNumber, normalizeGeneratedResults } from "./generated-results";

describe("generated video results", () => {
  it("sorts the new result list from newest to oldest", () => {
    const results = normalizeGeneratedResults({
      found: true,
      results: [
        { path: "older.mp4", modifiedAt: 10 },
        { path: "newer.mp4", modifiedAt: 20 },
      ],
    });
    expect(results.map((item) => item.path)).toEqual(["newer.mp4", "older.mp4"]);
  });

  it("accepts a legacy single-result response", () => {
    expect(normalizeGeneratedResults({ found: true, path: "one.mp4", bytes: 12 })).toEqual([
      { path: "one.mp4", bytes: 12, modifiedAt: undefined },
    ]);
  });

  it("extracts the saved video sequence number", () => {
    expect(generatedResultNumber("001_shot_video_00012_.mp4", 1)).toBe(12);
    expect(generatedResultNumber("custom.mp4", 7)).toBe(7);
  });
});
