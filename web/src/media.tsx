import type { DirectorAsset } from "./types";
import type { GeneratedVideoItem } from "./generated-results";

/**
 * 将 ComfyUI input 目录相对路径转换成内置 /view 地址。
 * 预览只读取 input 内文件，绝对路径继续交给后端执行阶段处理。
 */
export function comfyViewUrl(path: string, type: "input" | "output"): string | null {
  const normalized = path.trim().replace(/\\/g, "/").replace(/^\.\//, "");
  if (!normalized || normalized.startsWith("/") || /^[A-Za-z]:\//.test(normalized)) return null;
  const segments = normalized.split("/").filter(Boolean);
  const filename = segments.pop();
  if (!filename || segments.some((segment) => segment === "..")) return null;
  const query = new URLSearchParams({ filename, type });
  if (segments.length) query.set("subfolder", segments.join("/"));
  return `/view?${query.toString()}`;
}

export function assetViewUrl(path: string): string | null {
  return comfyViewUrl(path, "input");
}

/** 远程 RunningHub 结果直接使用签名 URL，本地结果继续走 ComfyUI /view。 */
export function generatedVideoUrl(item: GeneratedVideoItem | undefined): string | null {
  if (!item) return null;
  if (item.url && /^https:\/\//i.test(item.url)) return item.url;
  return comfyViewUrl(item.path, "output");
}

/** 返回适合显示在文件选择器旁的短文件名。 */
export function assetFileName(path: string): string {
  const name = path.trim().replace(/\\/g, "/").split("/").filter(Boolean).pop() ?? "";
  return name.split(/[?#]/, 1)[0];
}

interface MediaPreviewProps {
  asset: DirectorAsset;
  compact?: boolean;
}

/** 素材库与分镜面板共用的安全媒体预览。 */
export function MediaPreview({ asset, compact = false }: MediaPreviewProps) {
  const url = assetViewUrl(asset.path);
  const className = `td-media-preview ${compact ? "compact" : ""}`;
  if (!url) {
    return asset.path
      ? <div class={`${className} unavailable`}>该路径无法在浏览器中预览 / Preview unavailable</div>
      : <div class={`${className} empty`}>尚未选择素材 / No media selected</div>;
  }
  if (asset.kind === "image") {
    return <div class={className}><img src={url} alt={asset.alias} loading="lazy"/></div>;
  }
  if (asset.kind === "video") {
    return <div class={className}><video src={url} controls preload="metadata" playsInline/></div>;
  }
  return <div class={className}><audio src={url} controls preload="metadata"/></div>;
}
