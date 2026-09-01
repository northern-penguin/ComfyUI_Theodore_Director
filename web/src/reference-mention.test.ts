import { describe, expect, it } from "vitest";

import { filterReferenceMentionAssets, findReferenceMention, insertReferenceMention } from "./reference-mention";
import type { DirectorAsset } from "./types";

const asset = (id: string, alias: string, path: string): DirectorAsset => ({
  id,
  alias,
  path,
  kind: path.endsWith(".png") ? "image" : "video",
  enabled: true,
  fixed: false,
  fixedOrder: 0,
  shotIds: [],
  includeVideoAudio: false,
  durationSeconds: null,
  audioDurationSeconds: null,
  fingerprint: "",
});

describe("reference mention parsing", () => {
  it("recognizes an empty, Latin, and Chinese query at the caret", () => {
    expect(findReferenceMention("镜头 @", 4)).toEqual({ start: 3, end: 4, query: "" });
    expect(findReferenceMention("use @hero", 9)).toEqual({ start: 4, end: 9, query: "hero" });
    expect(findReferenceMention("使用@主角", 5)).toEqual({ start: 2, end: 5, query: "主角" });
  });

  it("does not trigger for email text, whitespace, braces, or a non-collapsed equivalent range", () => {
    expect(findReferenceMention("mail@example.com", 16)).toBeNull();
    expect(findReferenceMention("@hero next", 10)).toBeNull();
    expect(findReferenceMention("{{ref:@hero}}", 12)).toBeNull();
    expect(findReferenceMention("before @hero after", 18)).toBeNull();
  });

  it("finds an older mention when the caret moves back into it", () => {
    expect(findReferenceMention("first @hero then @place", 11)).toEqual({ start: 6, end: 11, query: "hero" });
  });
});

describe("reference mention candidates and insertion", () => {
  const assets = [
    asset("1", "hero", "people/lead.png"),
    asset("2", "location_night", "scenes/hero_square.png"),
    asset("3", "walk", "moves/walk.mp4"),
  ];

  it("prioritizes alias matches and preserves source order inside each group", () => {
    expect(filterReferenceMentionAssets(assets, "hero").map((item) => item.id)).toEqual(["1", "2"]);
    expect(filterReferenceMentionAssets(assets, "WALK").map((item) => item.id)).toEqual(["3"]);
    expect(filterReferenceMentionAssets(assets, "")).toEqual(assets);
  });

  it("replaces exactly the active query and returns the final caret", () => {
    const mention = findReferenceMention("角色 @he 在门前", 6);
    expect(mention).not.toBeNull();
    const result = insertReferenceMention("角色 @he 在门前", mention!, "hero");
    expect(result.value).toBe("角色 {{ref:hero}} 在门前");
    expect(result.caret).toBe("角色 {{ref:hero}}".length);
  });
});
