import { assetFileName } from "./media";
import type { DirectorAsset } from "./types";

export interface ReferenceMentionQuery {
  start: number;
  end: number;
  query: string;
}

/**
 * 解析光标前正在输入的 @ 查询。ASCII 单词中间的 @ 被视为邮箱等普通文本，避免误触发。
 */
export function findReferenceMention(value: string, caret: number): ReferenceMentionQuery | null {
  if (!Number.isInteger(caret) || caret < 0 || caret > value.length) return null;
  const prefix = value.slice(0, caret);
  const start = prefix.lastIndexOf("@");
  if (start < 0) return null;
  const previous = start > 0 ? value[start - 1] : "";
  if (previous && /[A-Za-z0-9_.+-]/.test(previous)) return null;
  const query = value.slice(start + 1, caret);
  if (/[\s{}@]/u.test(query)) return null;
  return { start, end: caret, query };
}

/** 别名命中优先，组内继续保持素材库顺序。 */
export function filterReferenceMentionAssets(assets: DirectorAsset[], query: string): DirectorAsset[] {
  const needle = query.trim().toLocaleLowerCase();
  if (!needle) return assets;
  const aliasMatches: DirectorAsset[] = [];
  const fileMatches: DirectorAsset[] = [];
  for (const asset of assets) {
    if (asset.alias.toLocaleLowerCase().includes(needle)) aliasMatches.push(asset);
    else if (assetFileName(asset.path).toLocaleLowerCase().includes(needle)) fileMatches.push(asset);
  }
  return [...aliasMatches, ...fileMatches];
}

export function insertReferenceMention(value: string, mention: ReferenceMentionQuery, alias: string): { value: string; caret: number } {
  const token = `{{ref:${alias}}}`;
  return {
    value: `${value.slice(0, mention.start)}${token}${value.slice(mention.end)}`,
    caret: mention.start + token.length,
  };
}
