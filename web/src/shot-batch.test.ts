import { describe, expect, it } from "vitest";
import { appendShots, createShot } from "./shot-batch";

describe("shot batch helpers", () => {
  it("appends requested shots with a shared duration", () => {
    const result = appendShots([createShot(1)], 3, 7.5);
    expect(result.map((shot) => shot.id)).toEqual(["shot_001", "shot_002", "shot_003", "shot_004"]);
    expect(result.slice(1).every((shot) => shot.durationSeconds === 7.5)).toBe(true);
    expect(result.slice(1).every((shot) => shot.latentRelay)).toBe(true);
    expect(result.slice(1).every((shot) => shot.secondSamplingMode === "super_resolution_second_pass")).toBe(true);
  });

  it("continues after the largest existing shot id", () => {
    const first = createShot(1);
    const later = createShot(8);
    const result = appendShots([first, later], 1, 5);
    expect(result.at(-1)?.id).toBe("shot_009");
  });
});
