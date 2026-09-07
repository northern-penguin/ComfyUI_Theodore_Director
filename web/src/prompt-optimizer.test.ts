import { describe, expect, it } from "vitest";
import { candidateIsStale, promptSourceKey, type PromptCandidate } from "./prompt-optimizer";
import type { DirectorPlan } from "./types";

const plan: DirectorPlan = {
  schemaVersion: 5, project: { id: "p", name: "P", runId: "1" }, defaults: { fps: 24, baseSeed: 1 },
  promptPrefix: "", promptSuffix: "", continuity: { mode: "h3_av_latent", videoContextFrames: 22, audioContextFrames: 24, durationMode: "final_output" },
  assets: [], shots: [{ id: "s1", title: "S1", prompt: "old", negativePrompt: "", durationSeconds: 5, enabled: true, latentRelay: true, secondSamplingMode: "off", seed: null, disabledAssetIds: [] }],
};

function candidate(sourceKey: string): PromptCandidate {
  return { shotId: "s1", sourcePrompt: "old", sourceKey, status: "ready", optimizedPrompt: "new", notes: [], validation: { mode: "base", valid: true, errors: [], warnings: [] }, repaired: false, attempts: 1 };
}

describe("prompt optimizer candidate freshness", () => {
  it("accepts an unchanged context", () => {
    expect(candidateIsStale(candidate(promptSourceKey(plan, plan.shots[0])), plan, plan.shots[0])).toBe(false);
  });

  it("expires after prompt, duration, global prompt, or media context changes", () => {
    const item = candidate(promptSourceKey(plan, plan.shots[0]));
    const changed = structuredClone(plan);
    changed.shots[0].durationSeconds = 6;
    expect(candidateIsStale(item, changed, changed.shots[0])).toBe(true);
  });

  it("keeps an applied result marked as applied", () => {
    const item = { ...candidate("old"), status: "applied" as const };
    expect(candidateIsStale(item, plan, plan.shots[0])).toBe(false);
  });
});
