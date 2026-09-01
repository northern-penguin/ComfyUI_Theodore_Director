import { describe, expect, it } from "vitest";
import { availableReferenceAssets, previewReferences, referenceTokenIsAvailable, referenceTokenIsGloballyAvailable, validatePlan } from "./reference";
import type { DirectorPlan } from "./types";

const plan: DirectorPlan = {
  schemaVersion: 4, project: { id: "p", name: "P", runId: "r" }, defaults: { fps: 24, baseSeed: 1 }, promptPrefix: "", promptSuffix: "",
  continuity: { mode: "h3_av_latent", videoContextFrames: 22, audioContextFrames: 24, durationMode: "final_output" },
  assets: [
    { id: "hero", alias: "hero", kind: "image", path: "hero.png", enabled: true, fixed: false, fixedOrder: 0, shotIds: [], includeVideoAudio: false, durationSeconds: null, audioDurationSeconds: null, fingerprint: "" },
    { id: "walk", alias: "walk", kind: "video", path: "walk.mp4", enabled: true, fixed: false, fixedOrder: 0, shotIds: [], includeVideoAudio: true, durationSeconds: 3, audioDurationSeconds: 3, fingerprint: "" },
  ],
  shots: [{ id: "s1", title: "S1", prompt: "{{ref:hero}} follows {{ref:walk}} with {{ref:walk.audio}}", negativePrompt: "", durationSeconds: 5, enabled: true, latentRelay: true, secondSampling: true, seed: null, disabledAssetIds: [] }],
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

  it("classifies references using current-shot availability", () => {
    expect(referenceTokenIsAvailable(plan, plan.shots[0], "hero")).toBe(true);
    expect(referenceTokenIsAvailable(plan, plan.shots[0], "walk.audio")).toBe(true);
    expect(referenceTokenIsAvailable(plan, plan.shots[0], "missing")).toBe(false);
    expect(referenceTokenIsAvailable(plan, plan.shots[0], "hero.audio")).toBe(false);

    const mutedVideo = structuredClone(plan);
    mutedVideo.assets[1].includeVideoAudio = false;
    expect(referenceTokenIsAvailable(mutedVideo, mutedVideo.shots[0], "walk.audio")).toBe(false);

    const unavailable = structuredClone(plan);
    unavailable.assets[0].enabled = false;
    unavailable.assets[1].path = "";
    expect(referenceTokenIsAvailable(unavailable, unavailable.shots[0], "hero")).toBe(false);
    expect(referenceTokenIsAvailable(unavailable, unavailable.shots[0], "walk")).toBe(false);
  });

  it("respects shot restrictions and per-shot disabled media", () => {
    const restricted = structuredClone(plan);
    restricted.shots.push({ ...structuredClone(restricted.shots[0]), id: "s2", title: "S2", disabledAssetIds: ["walk"] });
    restricted.assets[0].shotIds = ["s1"];
    expect(referenceTokenIsAvailable(restricted, restricted.shots[1], "hero")).toBe(false);
    expect(referenceTokenIsAvailable(restricted, restricted.shots[1], "walk")).toBe(false);
    expect(availableReferenceAssets(restricted, restricted.shots[1])).toEqual([]);
  });

  it("keeps legacy plans without per-shot arrays usable in the editor", () => {
    const legacy = structuredClone(plan) as DirectorPlan;
    delete (legacy.shots[0] as Partial<typeof legacy.shots[0]>).disabledAssetIds;
    delete (legacy.assets[0] as Partial<typeof legacy.assets[0]>).shotIds;
    expect(availableReferenceAssets(legacy, legacy.shots[0]).map((item) => item.id)).toEqual(["hero", "walk"]);
  });

  it("requires global references to work in every enabled shot", () => {
    const global = structuredClone(plan);
    global.shots.push({ ...structuredClone(global.shots[0]), id: "s2", title: "S2", disabledAssetIds: ["hero"] });
    expect(referenceTokenIsGloballyAvailable(global, "hero")).toBe(false);
    global.shots[1].enabled = false;
    expect(referenceTokenIsGloballyAvailable(global, "hero")).toBe(true);
  });
});
