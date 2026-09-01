import type { JSX } from "preact";
import { useEffect, useLayoutEffect, useMemo, useRef, useState } from "preact/hooks";

import { assetFileName, assetViewUrl } from "./media";
import { filterReferenceMentionAssets, findReferenceMention, insertReferenceMention, type ReferenceMentionQuery } from "./reference-mention";
import { REFERENCE_TOKEN_SOURCE } from "./reference";
import type { DirectorAsset } from "./types";

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

interface CaretPosition {
  left: number;
  top: number;
  bottom: number;
}

const CARET_STYLE_PROPERTIES = [
  "boxSizing", "borderTopWidth", "borderRightWidth", "borderBottomWidth", "borderLeftWidth",
  "paddingTop", "paddingRight", "paddingBottom", "paddingLeft", "fontFamily", "fontSize",
  "fontStyle", "fontVariant", "fontWeight", "fontStretch", "lineHeight", "letterSpacing",
  "textAlign", "textIndent", "textTransform", "tabSize", "wordSpacing", "overflowWrap", "wordBreak",
] as const;

/** 使用与 textarea 相同的排版参数测量光标在视口中的位置。 */
function measureCaretPosition(textarea: HTMLTextAreaElement, caret: number): CaretPosition {
  const computed = window.getComputedStyle(textarea);
  const bounds = textarea.getBoundingClientRect();
  const mirror = document.createElement("div");
  mirror.setAttribute("aria-hidden", "true");
  mirror.style.position = "fixed";
  mirror.style.visibility = "hidden";
  mirror.style.pointerEvents = "none";
  mirror.style.left = `${bounds.left}px`;
  mirror.style.top = `${bounds.top}px`;
  mirror.style.width = `${textarea.offsetWidth}px`;
  mirror.style.height = `${textarea.offsetHeight}px`;
  mirror.style.overflow = "hidden";
  mirror.style.whiteSpace = "pre-wrap";
  for (const property of CARET_STYLE_PROPERTIES) mirror.style[property] = computed[property];
  mirror.append(document.createTextNode(textarea.value.slice(0, caret)));
  const marker = document.createElement("span");
  marker.textContent = "\u200b";
  mirror.append(marker);
  document.body.append(mirror);
  mirror.scrollTop = textarea.scrollTop;
  mirror.scrollLeft = textarea.scrollLeft;
  const markerBounds = marker.getBoundingClientRect();
  const lineHeight = Number.parseFloat(computed.lineHeight) || Number.parseFloat(computed.fontSize) * 1.45 || 20;
  mirror.remove();
  return { left: markerBounds.left, top: markerBounds.top, bottom: markerBounds.top + lineHeight };
}

interface MentionMenuPosition {
  left: number;
  top: number;
  width: number;
  maxHeight: number;
}

interface MentionHistoryEntry {
  beforeValue: string;
  afterValue: string;
  beforeCaret: number;
  afterCaret: number;
}

interface HighlightedTextareaProps {
  value: string;
  rows?: number;
  onInput: JSX.GenericEventHandler<HTMLTextAreaElement>;
  isReferenceValid: (alias: string) => boolean;
  mentionAssets?: DirectorAsset[];
  mentionLanguage?: "zh" | "en";
}

const KIND_LABELS = {
  zh: { image: "图片", video: "视频", audio: "音频" },
  en: { image: "Image", video: "Video", audio: "Audio" },
} as const;

export function HighlightedTextarea({ value, rows, onInput, isReferenceValid, mentionAssets, mentionLanguage = "zh" }: HighlightedTextareaProps) {
  const root = useRef<HTMLSpanElement>(null);
  const backdrop = useRef<HTMLPreElement>(null);
  const textarea = useRef<HTMLTextAreaElement>(null);
  const menu = useRef<HTMLDivElement>(null);
  const composing = useRef(false);
  const applyingMentionHistory = useRef(false);
  const mentionUndoHistory = useRef<MentionHistoryEntry[]>([]);
  const mentionRedoHistory = useRef<MentionHistoryEntry[]>([]);
  const listboxId = useRef(`td-reference-mention-${Math.random().toString(36).slice(2)}`).current;
  const [mention, setMention] = useState<ReferenceMentionQuery | null>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [menuPosition, setMenuPosition] = useState<MentionMenuPosition | null>(null);
  const segments = splitHighlightedReferences(value, isReferenceValid);
  const options = useMemo(
    () => mention && mentionAssets ? filterReferenceMentionAssets(mentionAssets, mention.query) : [],
    [mention, mentionAssets],
  );

  const closeMention = () => {
    setMention(null);
    setMenuPosition(null);
    setActiveIndex(0);
  };

  const readMention = (target: HTMLTextAreaElement) => {
    if (!mentionAssets || target.selectionStart !== target.selectionEnd) {
      closeMention();
      return;
    }
    const next = findReferenceMention(target.value, target.selectionStart);
    if (!next) {
      closeMention();
      return;
    }
    setMention((current) => current
      && current.start === next.start && current.end === next.end && current.query === next.query
      ? current
      : next);
  };

  const updateMenuPosition = () => {
    if (!mention || !textarea.current) return;
    const caret = measureCaretPosition(textarea.current, mention.end);
    const viewportPadding = 8;
    const width = Math.min(390, Math.max(240, window.innerWidth - viewportPadding * 2));
    const maxHeight = Math.min(320, Math.max(150, window.innerHeight - viewportPadding * 2));
    const actualHeight = Math.min(menu.current?.offsetHeight || maxHeight, maxHeight);
    const left = Math.min(Math.max(caret.left, viewportPadding), window.innerWidth - width - viewportPadding);
    const opensAbove = caret.bottom + 6 + actualHeight > window.innerHeight - viewportPadding
      && caret.top - actualHeight - 6 >= viewportPadding;
    const top = opensAbove ? caret.top - actualHeight - 6 : Math.min(caret.bottom + 6, window.innerHeight - actualHeight - viewportPadding);
    setMenuPosition((current) => current
      && current.left === left && current.top === top && current.width === width && current.maxHeight === maxHeight
      ? current
      : { left, top, width, maxHeight });
  };

  // 菜单首次渲染后再用实际高度校正一次，靠近窗口底部时才能紧贴光标向上展开。
  useLayoutEffect(updateMenuPosition, [mention, options.length, Boolean(menuPosition)]);
  useEffect(() => {
    if (!mention) return;
    const reposition = () => updateMenuPosition();
    const closeWhenOutside = (event: MouseEvent) => {
      if (event.target instanceof Node && (root.current?.contains(event.target) || menu.current?.contains(event.target))) return;
      closeMention();
    };
    window.addEventListener("resize", reposition);
    document.addEventListener("scroll", reposition, true);
    document.addEventListener("mousedown", closeWhenOutside);
    return () => {
      window.removeEventListener("resize", reposition);
      document.removeEventListener("scroll", reposition, true);
      document.removeEventListener("mousedown", closeWhenOutside);
    };
  }, [mention]);
  useEffect(() => setActiveIndex(0), [mention?.query]);
  useEffect(() => {
    if (activeIndex >= options.length) setActiveIndex(Math.max(0, options.length - 1));
  }, [activeIndex, options.length]);
  useEffect(() => {
    // 键盘移动到可视区域外的候选时，仅滚动菜单列表，不影响提示词 textarea。
    menu.current?.querySelector<HTMLElement>('[aria-selected="true"]')?.scrollIntoView({ block: "nearest" });
  }, [activeIndex, options.length]);

  const syncScroll: JSX.GenericEventHandler<HTMLTextAreaElement> = (event) => {
    if (backdrop.current) {
      backdrop.current.scrollTop = event.currentTarget.scrollTop;
      backdrop.current.scrollLeft = event.currentTarget.scrollLeft;
    }
    if (mention) updateMenuPosition();
  };

  const applyHistoryValue = (nextValue: string, caret: number) => {
    if (!textarea.current) return;
    const target = textarea.current;
    applyingMentionHistory.current = true;
    target.value = nextValue;
    target.dispatchEvent(new Event("input", { bubbles: true }));
    applyingMentionHistory.current = false;
    closeMention();
    window.requestAnimationFrame(() => {
      target.focus({ preventScroll: true });
      target.setSelectionRange(caret, caret);
    });
  };

  const handleMentionHistoryShortcut = (event: JSX.TargetedKeyboardEvent<HTMLTextAreaElement>): boolean => {
    if (!(event.ctrlKey || event.metaKey) || event.altKey) return false;
    const key = event.key.toLocaleLowerCase();
    const redo = key === "y" || (key === "z" && event.shiftKey);
    const undo = key === "z" && !event.shiftKey;
    if (!undo && !redo) return false;
    const source = redo ? mentionRedoHistory.current : mentionUndoHistory.current;
    const entry = source[source.length - 1];
    const expectedValue = redo ? entry?.beforeValue : entry?.afterValue;
    if (!entry || event.currentTarget.value !== expectedValue) return false;
    event.preventDefault();
    source.pop();
    (redo ? mentionUndoHistory.current : mentionRedoHistory.current).push(entry);
    applyHistoryValue(redo ? entry.afterValue : entry.beforeValue, redo ? entry.afterCaret : entry.beforeCaret);
    return true;
  };

  const chooseAsset = (asset: DirectorAsset) => {
    if (!mention || !textarea.current) return;
    const target = textarea.current;
    const result = insertReferenceMention(target.value, mention, asset.alias);
    const token = `{{ref:${asset.alias}}}`;
    const historyEntry: MentionHistoryEntry = {
      beforeValue: target.value,
      afterValue: result.value,
      beforeCaret: mention.end,
      afterCaret: result.caret,
    };
    target.focus({ preventScroll: true });
    target.setSelectionRange(mention.start, mention.end);

    // 让浏览器把引用替换记录为一次原生编辑事务，Ctrl+Z 可以恢复原来的 @查询词。
    // execCommand 虽已停止扩展，但仍是 Chromium/WebView 中保留原生 textarea 撤销栈的兼容接口。
    let insertedWithNativeUndo = false;
    try {
      document.execCommand("insertText", false, token);
      insertedWithNativeUndo = target.value === result.value;
    } catch {
      // 旧版嵌入式浏览器可能不支持 insertText，下面回退到受控输入同步。
    }
    if (!insertedWithNativeUndo) {
      target.value = result.value;
      target.dispatchEvent(new Event("input", { bubbles: true }));
    }
    mentionUndoHistory.current.push(historyEntry);
    if (mentionUndoHistory.current.length > 100) mentionUndoHistory.current.shift();
    mentionRedoHistory.current = [];
    closeMention();
    // 受控组件更新后再恢复焦点，确保光标不会被 Preact 的 value 同步移走。
    window.requestAnimationFrame(() => {
      textarea.current?.focus({ preventScroll: true });
      textarea.current?.setSelectionRange(result.caret, result.caret);
    });
  };

  const handleKeyDown: JSX.KeyboardEventHandler<HTMLTextAreaElement> = (event) => {
    if (event.isComposing || composing.current) return;
    if (handleMentionHistoryShortcut(event)) return;
    if (!mention) return;
    if (event.key === "Escape") {
      event.preventDefault();
      closeMention();
      return;
    }
    if (!options.length) return;
    if (event.key === "ArrowDown" || event.key === "ArrowUp") {
      event.preventDefault();
      const direction = event.key === "ArrowDown" ? 1 : -1;
      setActiveIndex((current) => (current + direction + options.length) % options.length);
      return;
    }
    if (event.key === "Enter" || event.key === "Tab") {
      event.preventDefault();
      chooseAsset(options[activeIndex] ?? options[0]);
    }
  };

  return <span ref={root} class="td-highlight-textarea">
    <pre ref={backdrop} class="td-highlight-backdrop" aria-hidden="true">
      {segments.map((segment, index) => segment.reference
        ? <mark key={index} class={segment.valid ? "valid" : "invalid"}>{segment.text}</mark>
        : segment.text)}
      {value.endsWith("\n") && " "}
    </pre>
    <textarea
      ref={textarea}
      class="td-highlight-input"
      rows={rows}
      value={value}
      aria-autocomplete={mentionAssets ? "list" : undefined}
      aria-controls={mention ? listboxId : undefined}
      aria-expanded={mentionAssets ? Boolean(mention) : undefined}
      aria-activedescendant={mention && options[activeIndex] ? `${listboxId}-${options[activeIndex].id}` : undefined}
      onInput={(event) => {
        onInput(event);
        const inputType = event instanceof InputEvent ? event.inputType : "";
        if (!applyingMentionHistory.current && inputType !== "historyUndo" && inputType !== "historyRedo") {
          mentionRedoHistory.current = [];
        }
        if (!composing.current) readMention(event.currentTarget);
      }}
      onClick={(event) => readMention(event.currentTarget)}
      onSelect={(event) => { if (!composing.current) readMention(event.currentTarget); }}
      onKeyDown={handleKeyDown}
      onKeyUp={(event) => {
        if (!composing.current && !["ArrowDown", "ArrowUp", "Enter", "Tab", "Escape"].includes(event.key)) readMention(event.currentTarget);
      }}
      onCompositionStart={() => { composing.current = true; }}
      onCompositionEnd={(event) => {
        composing.current = false;
        readMention(event.currentTarget);
      }}
      onBlur={() => window.setTimeout(() => {
        if (document.activeElement !== textarea.current) closeMention();
      }, 0)}
      onScroll={syncScroll}
    />
    {mention && menuPosition && <div
      ref={menu}
      id={listboxId}
      class="td-reference-mention-menu"
      role="listbox"
      aria-label={mentionLanguage === "zh" ? "选择参考素材" : "Choose reference media"}
      style={{ left: menuPosition.left, top: menuPosition.top, width: menuPosition.width, maxHeight: menuPosition.maxHeight }}
      onMouseDown={(event) => event.preventDefault()}
    >
      <header><strong>{mentionLanguage === "zh" ? "@ 参考素材" : "@ Reference media"}</strong><span>{options.length}</span></header>
      {options.length ? <div class="td-reference-mention-options">
        {options.map((asset, index) => {
          const thumbnail = asset.kind === "image" ? assetViewUrl(asset.path) : null;
          const filename = assetFileName(asset.path);
          return <button
            id={`${listboxId}-${asset.id}`}
            key={asset.id}
            type="button"
            role="option"
            aria-selected={index === activeIndex}
            class={index === activeIndex ? "active" : ""}
            onMouseEnter={() => setActiveIndex(index)}
            onClick={() => chooseAsset(asset)}
          >
            <span class={`td-reference-mention-thumb ${asset.kind}`}>
              {thumbnail ? <img src={thumbnail} alt="" loading="lazy"/> : <span>{asset.kind === "image" ? "▧" : asset.kind === "video" ? "▶" : "♫"}</span>}
            </span>
            <span class="td-reference-mention-copy"><strong>{asset.alias}</strong><small>{filename || asset.path}</small></span>
            <em>{KIND_LABELS[mentionLanguage][asset.kind]}</em>
          </button>;
        })}
      </div> : <p class="td-reference-mention-empty">{mentionLanguage === "zh" ? "没有匹配的可用素材" : "No available media matches"}</p>}
    </div>}
  </span>;
}
