import { describe, expect, it } from "vitest";
import { availableStandaloneProcessingModes, canRunStandaloneSecondPass, generatedResultNumber, normalizeGeneratedResults } from "./generated-results";

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

describe("standalone second-pass eligibility", () => {
  it("allows first-pass and legacy results to use every processing mode", () => {
    const modes = ["super_resolution_second_pass", "latent_upscale_second_pass", "super_resolution_only"] as const;
    for (const mode of modes) {
      expect(canRunStandaloneSecondPass({ path: "first.mp4", stage: "first_pass" }, mode)).toBe(true);
      expect(canRunStandaloneSecondPass({ path: "legacy.mp4", stage: "legacy_unknown" }, mode)).toBe(true);
      expect(canRunStandaloneSecondPass({ path: "old.mp4" }, mode)).toBe(true);
    }
  });

  it("allows second-pass results to use only super-resolution without diffusion", () => {
    expect(canRunStandaloneSecondPass({ path: "second.mp4", stage: "second_pass" }, "super_resolution_second_pass")).toBe(false);
    expect(canRunStandaloneSecondPass({ path: "second.mp4", stage: "second_pass" }, "latent_upscale_second_pass")).toBe(false);
    expect(canRunStandaloneSecondPass({ path: "second.mp4", stage: "second_pass" }, "super_resolution_only")).toBe(true);
  });

  it("treats an upscaled result as terminal", () => {
    const modes = ["super_resolution_second_pass", "latent_upscale_second_pass", "super_resolution_only"] as const;
    for (const mode of modes) expect(canRunStandaloneSecondPass({ path: "upscaled.mp4", stage: "upscaled" }, mode)).toBe(false);
  });

  it("lists processing modes independently for each result stage", () => {
    expect(availableStandaloneProcessingModes({ path: "first.mp4", stage: "first_pass" })).toEqual([
      "super_resolution_second_pass",
      "latent_upscale_second_pass",
      "super_resolution_only",
    ]);
    expect(availableStandaloneProcessingModes({ path: "second.mp4", stage: "second_pass" })).toEqual(["super_resolution_only"]);
    expect(availableStandaloneProcessingModes({ path: "upscaled.mp4", stage: "upscaled" })).toEqual([]);
  });
});
