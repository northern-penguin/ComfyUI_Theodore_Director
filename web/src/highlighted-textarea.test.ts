import { describe, expect, it } from "vitest";

import { splitHighlightedReferences } from "./highlighted-textarea";

describe("reference highlight segments", () => {
  it("splits multiline normal and audio references without changing text", () => {
    const source = "角色 {{ref:hero}}\n声音 {{ref:walk.audio}}，再次 {{ref:hero}}";
    const segments = splitHighlightedReferences(source, (alias) => alias.trim() !== "walk.audio");
    expect(segments.filter((segment) => segment.reference)).toEqual([
      { text: "{{ref:hero}}", reference: true, valid: true },
      { text: "{{ref:walk.audio}}", reference: true, valid: false },
      { text: "{{ref:hero}}", reference: true, valid: true },
    ]);
    expect(segments.map((segment) => segment.text).join("")).toBe(source);
  });

  it("keeps incomplete reference syntax as ordinary text", () => {
    const source = "开始 {{ref:hero 然后继续";
    expect(splitHighlightedReferences(source, () => true)).toEqual([
      { text: source, reference: false },
    ]);
  });
});
