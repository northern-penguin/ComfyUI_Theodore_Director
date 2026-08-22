"""素材上传路径的无框架安全工具。"""

from __future__ import annotations

from pathlib import Path
import re
import uuid

_SAFE_SEGMENT = re.compile(r"[^A-Za-z0-9._-]+")
ALLOWED_EXTENSIONS = {
    "image": {".png", ".jpg", ".jpeg", ".webp", ".bmp"},
    "video": {".mp4", ".webm", ".mov", ".mkv"},
    "audio": {".wav", ".mp3", ".flac", ".ogg", ".m4a", ".aac"},
}


def safe_segment(value: str, fallback: str) -> str:
    """去除路径分隔符与保留字符，避免浏览器输入逃逸素材目录。"""
    cleaned = _SAFE_SEGMENT.sub("_", Path(value).name).strip("._")
    return cleaned[:96] or fallback


def allocate_upload_path(input_root: Path, project_name: str, filename: str, kind: str) -> tuple[Path, str]:
    if kind not in ALLOWED_EXTENSIONS:
        raise ValueError(f"未知素材类型: {kind}")
    project = safe_segment(project_name, "theodore_project")
    original = Path(filename)
    suffix = original.suffix.lower()
    if suffix not in ALLOWED_EXTENSIONS[kind]:
        raise ValueError(f"{kind} 不支持扩展名 {suffix or '(无)'}")
    stem = safe_segment(original.stem, kind)
    directory = (input_root.resolve() / "theodore_director" / project).resolve()
    if input_root.resolve() not in directory.parents:
        raise ValueError("上传目录越界")
    directory.mkdir(parents=True, exist_ok=True)
    target = directory / f"{stem}{suffix}"
    if target.exists():
        target = directory / f"{stem}_{uuid.uuid4().hex[:8]}{suffix}"
    relative = target.relative_to(input_root.resolve()).as_posix()
    return target, relative
