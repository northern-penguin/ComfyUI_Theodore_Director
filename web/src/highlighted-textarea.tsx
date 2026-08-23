import type { JSX } from "preact";
import { useRef } from "preact/hooks";

import { REFERENCE_TOKEN_SOURCE } from "./reference";

export interface HighlightSegment {
  text: string;
  reference: boolean;
  valid?: boolean;
}

export function splitHighlightedReferences(value: string, isReferenceValid: (alias: string) => boolean): HighlightSegment[] {
  const segments: HighlightSegment[] = [];
  const pattern = new RegExp(REFERENCE_TOKEN_SOURCE, "g");
  let cursor = 0;
  for (const match of value.matchAll(pattern)) {
    const start = match.index ?? 0;
    if (start > cursor) segments.push({ text: value.slice(cursor, start), reference: false });
    segments.push({ text: match[0], reference: true, valid: isReferenceValid(match[1]) });
    cursor = start + match[0].length;
  }
  if (cursor < value.length) segments.push({ text: value.slice(cursor), reference: false });
  return segments;
}

interface HighlightedTextareaProps {
  value: string;
  rows?: number;
  onInput: JSX.GenericEventHandler<HTMLTextAreaElement>;
  isReferenceValid: (alias: string) => boolean;
}

export function HighlightedTextarea({ value, rows, onInput, isReferenceValid }: HighlightedTextareaProps) {
  const backdrop = useRef<HTMLPreElement>(null);
  const segments = splitHighlightedReferences(value, isReferenceValid);

  const syncScroll: JSX.GenericEventHandler<HTMLTextAreaElement> = (event) => {
    if (!backdrop.current) return;
    backdrop.current.scrollTop = event.currentTarget.scrollTop;
    backdrop.current.scrollLeft = event.currentTarget.scrollLeft;
  };

  return <span class="td-highlight-textarea">
    <pre ref={backdrop} class="td-highlight-backdrop" aria-hidden="true">
      {segments.map((segment, index) => segment.reference
        ? <mark key={index} class={segment.valid ? "valid" : "invalid"}>{segment.text}</mark>
        : segment.text)}
      {value.endsWith("\n") && " "}
    </pre>
    <textarea class="td-highlight-input" rows={rows} value={value} onInput={onInput} onScroll={syncScroll}/>
  </span>;
}
