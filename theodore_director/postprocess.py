"""Theodore Director 视频后处理的安全路径与 FFmpeg 参数。"""

from __future__ import annotations

import os
from pathlib import Path
import re
import shutil
from typing import Any

from .paths import VIDEO_EXTENSIONS, build_output_paths_from_values, find_generated_videos

_MERGED_VIDEO = re.compile(r"^merged_video_(\d+)_?\.mp4$", re.IGNORECASE)


def run_directory(root: Path, project_name: str, run_id: str) -> Path:
    """返回受 output 根目录约束的当前运行目录。"""
    output_root = root.resolve()
    paths = build_output_paths_from_values(project_name, run_id, "merged", 0)
    directory = (output_root / paths.run_prefix).resolve(strict=False)
    try:
        directory.relative_to(output_root)
    except ValueError as error:
        raise ValueError(f"拒绝访问 ComfyUI output 目录之外的文件: {directory}") from error
    return directory


def find_merged_videos(root: Path, project_name: str, run_id: str) -> list[Path]:
    """按修改时间从新到旧返回当前运行的全部合并结果。"""
    directory = run_directory(root, project_name, run_id)
    if not directory.is_dir():
        return []
    matches: list[tuple[int, Path]] = []
    for path in directory.glob("merged_video_*.mp4"):
        if path.is_file() and _MERGED_VIDEO.match(path.name):
            stat = path.stat()
            matches.append((stat.st_mtime_ns, path.resolve()))
    return [path for _modified, path in sorted(matches, key=lambda item: item[0], reverse=True)]


def allocate_merged_video(root: Path, project_name: str, run_id: str) -> Path:
    """分配不覆盖历史结果的下一个合并视频文件名。"""
    directory = run_directory(root, project_name, run_id)
    directory.mkdir(parents=True, exist_ok=True)
    largest = 0
    for path in directory.glob("merged_video_*.mp4"):
        match = _MERGED_VIDEO.match(path.name)
        if match:
            largest = max(largest, int(match.group(1)))
    return directory / f"merged_video_{largest + 1:05d}_.mp4"


def validate_merge_selections(
    root: Path,
    project_name: str,
    run_id: str,
    selections: list[dict[str, Any]],
) -> list[Path]:
    """确认每个选择都来自对应分镜的实际生成结果，并保留用户顺序。"""
    if not isinstance(selections, list):
        raise ValueError("selections 必须是列表")
    if not selections:
        raise ValueError("至少选择一个镜头才能合并")
    if len(selections) > 1_000:
        raise ValueError("单次最多合并 1000 个镜头")

    output_root = root.resolve()
    validated: list[Path] = []
    seen_indexes: set[int] = set()
    for position, item in enumerate(selections, start=1):
        if not isinstance(item, dict):
            raise ValueError(f"第 {position} 项必须是对象")
        try:
            active_index = int(item.get("activeIndex", -1))
        except (TypeError, ValueError) as error:
            raise ValueError(f"第 {position} 项的 activeIndex 无效") from error
        shot_id = str(item.get("shotId", "")).strip()
        requested = str(item.get("path", "")).strip().replace("\\", "/")
        if active_index < 0 or active_index > 999_999 or not shot_id or not requested:
            raise ValueError(f"第 {position} 项缺少有效的镜头或结果信息")
        if active_index in seen_indexes:
            raise ValueError(f"启用镜头序号 {active_index + 1} 被重复选择")
        seen_indexes.add(active_index)

        candidate = (output_root / requested).resolve(strict=False)
        try:
            candidate.relative_to(output_root)
        except ValueError as error:
            raise ValueError(f"拒绝读取 ComfyUI output 目录之外的文件: {candidate}") from error
        available = find_generated_videos(output_root, project_name, run_id, shot_id, active_index)
        if candidate not in available:
            raise ValueError(f"镜头 {shot_id} 选择的文件不属于其生成结果: {requested}")
        if candidate.suffix.lower() not in VIDEO_EXTENSIONS or candidate.stat().st_size <= 0:
            raise ValueError(f"镜头 {shot_id} 的视频为空或格式不受支持: {requested}")
        validated.append(candidate)
    return validated


def find_ffmpeg_executable() -> str:
    """优先使用用户配置和 PATH，最后兼容 imageio-ffmpeg 的内置程序。"""
    configured = os.environ.get("THEODORE_DIRECTOR_FFMPEG", "").strip()
    if configured:
        path = Path(configured).expanduser()
        if path.is_file():
            return str(path.resolve())
        raise FileNotFoundError(f"THEODORE_DIRECTOR_FFMPEG 指向的文件不存在: {configured}")

    discovered = shutil.which("ffmpeg")
    if discovered:
        return discovered
    try:
        import imageio_ffmpeg  # type: ignore[import-not-found]

        bundled = imageio_ffmpeg.get_ffmpeg_exe()
        if bundled and Path(bundled).is_file():
            return bundled
    except (ImportError, OSError):
        pass
    raise FileNotFoundError(
        "找不到 FFmpeg。请将 ffmpeg 加入 PATH，或设置 THEODORE_DIRECTOR_FFMPEG 为 ffmpeg 可执行文件路径。"
    )


def ffmpeg_concat_line(path: Path) -> str:
    """生成 concat demuxer 的安全单行文件声明。"""
    # FFmpeg concat 文件使用类似 shell 的单引号规则；Windows 下正斜杠更稳定。
    normalized = path.resolve().as_posix()
    if "\n" in normalized or "\r" in normalized:
        raise ValueError("视频路径不能包含换行符")
    escaped = normalized.replace("'", "'\\''")
    return f"file '{escaped}'\n"


def build_ffmpeg_concat_args(ffmpeg: str, list_path: Path, output_path: Path) -> list[str]:
    """构建不经过 shell 的无损拼接参数。"""
    return [
        ffmpeg,
        "-hide_banner",
        "-loglevel",
        "error",
        "-f",
        "concat",
        "-safe",
        "0",
        "-i",
        str(list_path),
        "-map",
        "0:v:0",
        "-map",
        "0:a?",
        "-c",
        "copy",
        "-movflags",
        "+faststart",
        str(output_path),
    ]
