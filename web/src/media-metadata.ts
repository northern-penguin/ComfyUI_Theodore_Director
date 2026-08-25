import type { AssetKind } from "./types";

/** 只读取浏览器媒体元数据，不解码整段文件；完成后立即释放临时 URL。 */
export function readMediaDuration(file: File, kind: AssetKind): Promise<number | null> {
  if (kind === "image") return Promise.resolve(null);
  return new Promise((resolve) => {
    const element = document.createElement(kind === "video" ? "video" : "audio");
    const url = URL.createObjectURL(file);
    let completed = false;
    const finish = (duration: number | null) => {
      if (completed) return;
      completed = true;
      element.onloadedmetadata = null;
      element.onerror = null;
      element.removeAttribute("src");
      element.load();
      URL.revokeObjectURL(url);
      resolve(duration);
    };
    element.preload = "metadata";
    element.onloadedmetadata = () => finish(Number.isFinite(element.duration) && element.duration > 0 ? Math.round(element.duration * 10) / 10 : null);
    element.onerror = () => finish(null);
    element.src = url;
  });
}
