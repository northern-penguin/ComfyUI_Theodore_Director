import { describe, expect, it } from "vitest";
import { previewReferences, validatePlan } from "./reference";
import type { DirectorPlan } from "./types";

const plan: DirectorPlan = {
  schemaVersion: 1, project: { id: "p", name: "P", runId: "r" }, defaults: { fps: 24, baseSeed: 1 }, promptPrefix: "", promptSuffix: "",
  continuity: { mode: "h3_av_latent", videoContextFrames: 22, audioContextFrames: 24, durationMode: "final_output" },
  assets: [
    { id: "hero", alias: "hero", kind: "image", path: "hero.png", enabled: true, fixed: false, fixedOrder: 0, shotIds: [], includeVideoAudio: false, durationSeconds: null, audioDurationSeconds: null, fingerprint: "" },
    { id: "walk", alias: "walk", kind: "video", path: "walk.mp4", enabled: true, fixed: false, fixedOrder: 0, shotIds: [], includeVideoAudio: true, durationSeconds: 3, audioDurationSeconds: 3, fingerprint: "" },
  ],
  shots: [{ id: "s1", title: "S1", prompt: "{{ref:hero}} follows {{ref:walk}} with {{ref:walk.audio}}", negativePrompt: "", durationSeconds: 5, enabled: true, seed: null, disabledAssetIds: [] }],
};

describe("H3 reference preview", () => {
  it("uses independent deterministic labels", () => {
    const result = previewReferences(plan, plan.shots[0]);
    expect(result.compiledPrompt).toBe("<Picture 1> follows <Video 1> with <Audio 1>");
    expect(result.errors).toEqual([]);
  });
  it("rejects duplicated aliases before saving", () => {
    const duplicated = structuredClone(plan);
    duplicated.assets[1].alias = "HERO";
    expect(validatePlan(duplicated).some((error) => error.includes("别名"))).toBe(true);
  });
});
