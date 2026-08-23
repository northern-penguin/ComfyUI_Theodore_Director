import { useEffect, useRef, useState } from "preact/hooks";

interface LazyVideoThumbnailProps {
  src: string;
  alt: string;
}

export function LazyVideoThumbnail({ src, alt }: LazyVideoThumbnailProps) {
  const hostRef = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(false);

  useEffect(() => {
    const host = hostRef.current;
    if (!host) return;
    if (!("IntersectionObserver" in window)) {
      setActive(true);
      return;
    }
    // 只为可视区域附近的结果保留媒体元素；滚远后卸载 src 和解码上下文。
    const observer = new IntersectionObserver((entries) => {
      setActive(entries.some((entry) => entry.isIntersecting));
    }, { rootMargin: "160px" });
    observer.observe(host);
    return () => observer.disconnect();
  }, []);

  return <div class="td-result-thumb" ref={hostRef}>
    {active ? <video src={src} aria-label={alt} muted playsInline preload="metadata" onLoadedMetadata={(event) => { const video = event.currentTarget; if (Number.isFinite(video.duration) && video.duration > 0.02) video.currentTime = Math.min(0.25, Math.max(0, video.duration - 0.05)); }}/> : <span>…</span>}
  </div>;
}
