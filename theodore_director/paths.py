"""稳定、安全的输出路径生成。"""

from __future__ import annotations

from dataclasses import dataclass
from pathlib import Path
import re

from .schema import Plan, Shot

_UNSAFE = re.compile(r"[^\w.-]+", re.UNICODE)
VIDEO_EXTENSIONS = (".mp4", ".webm", ".mov", ".mkv")


def slug(value: str, fallback: str) -> str:
    cleaned = _UNSAFE.sub("_", value.strip()).strip("._")
    return cleaned[:80] or fallback


@dataclass(frozen=True)
class OutputPaths:
    run_prefix: str
    video_prefix: str
    latent_prefix: str
    latent_save_prefix: str
    tail_prefix: str
    manifest_path: str
    shot_result_path: str


def build_output_paths_from_values(project_name: str, run_id_value: str, shot_id: str, active_index: int) -> OutputPaths:
    """用界面可提供的最小字段计算路径，保证预览查询与执行节点完全同源。"""
    if active_index < 0:
        raise ValueError("active_index 不得小于 0")
    project = slug(project_name, "project")
    run_id = slug(run_id_value, "run")
    shot_name = slug(shot_id, f"shot_{active_index + 1:03d}")
    # 项目名与 Run ID 合并成一层运行目录；只有需要集中回读的 latent 和
    # 尾帧各自使用一层专用目录，不再按分镜继续创建更深目录。
    base = f"TheodoreDirector/{project}_{run_id}"
    stem = f"{active_index + 1:03d}_{shot_name}"
    return OutputPaths(
        run_prefix=base,
        video_prefix=f"{base}/{stem}_video",
        latent_prefix=f"{base}/latent_context",
        latent_save_prefix=f"{base}/latent_context/clip",
        tail_prefix=f"{base}/tail_frames/{stem}_tail",
        manifest_path=f"{base}/manifest.json",
        shot_result_path=f"{base}/{stem}_result.json",
    )


def build_output_paths(plan: Plan, shot: Shot, active_index: int) -> OutputPaths:
    return build_output_paths_from_values(plan.project_name, plan.run_id, shot.id, active_index)


def find_generated_video(
    root: Path,
    project_name: str,
    run_id: str,
    shot_id: str,
    active_index: int,
) -> Path | None:
    """在预期分镜前缀下查找最新视频；找不到时返回 None。"""
    videos = find_generated_videos(root, project_name, run_id, shot_id, active_index)
    return videos[0] if videos else None


def find_generated_videos(
    root: Path,
    project_name: str,
    run_id: str,
    shot_id: str,
    active_index: int,
) -> list[Path]:
    """返回当前分镜的全部生成视频，并按修改时间从新到旧排列。"""
    paths = build_output_paths_from_values(project_name, run_id, shot_id, active_index)
    output_root = root.resolve()
    expected = (output_root / paths.video_prefix).resolve(strict=False)
    try:
        expected.relative_to(output_root)
    except ValueError as error:
        raise ValueError(f"拒绝读取 ComfyUI output 目录之外的文件: {expected}") from error
    if not expected.parent.is_dir():
        return []
    matches_with_stats = []
    for path in expected.parent.glob(f"{expected.name}*"):
        if not path.is_file() or path.suffix.lower() not in VIDEO_EXTENSIONS:
            continue
        # 排序阶段只 stat 一次，避免比较函数为大量历史结果重复访问磁盘。
        stat = path.stat()
        matches_with_stats.append((stat.st_mtime_ns, path.resolve()))
    return [
        path
        for _modified, path in sorted(
            matches_with_stats,
            key=lambda item: item[0],
            reverse=True,
        )
    ]


def resolve_output_file(
    root: Path,
    value: str,
    extensions: tuple[str, ...] = (),
    *,
    expected_prefix: str = "",
) -> Path:
    """把保存节点返回的绝对路径、相对路径或纯文件名解析为真实输出文件。"""
    output_root = root.resolve()
    expected = output_root / expected_prefix if expected_prefix else None
    raw = Path((value or "").strip().strip('"').strip("'")) if value else None
    candidates: list[Path] = []

    if raw is not None:
        candidates.append(raw if raw.is_absolute() else output_root / raw)
        # SaveImageKJ 只返回文件名；此时必须以导播台给它的保存目录为准。
        if expected is not None and raw.parent == Path("."):
            candidates.append(expected.parent / raw.name)
    if expected is not None:
        candidates.append(expected)

    checked: list[Path] = []
    for candidate in candidates:
        resolved = candidate.resolve(strict=False)
        try:
            resolved.relative_to(output_root)
        except ValueError as error:
            raise ValueError(f"拒绝读取 ComfyUI output 目录之外的文件: {resolved}") from error
        if resolved not in checked:
            checked.append(resolved)

    for candidate in checked:
        if candidate.is_file() and (not extensions or candidate.suffix.lower() in extensions):
            return candidate.resolve()

    for candidate in checked:
        parent = candidate.parent
        if not parent.is_dir():
            continue
        prefix = candidate.name
        matches = sorted(
            (
                path
                for path in parent.glob(f"{prefix}*")
                if path.is_file() and (not extensions or path.suffix.lower() in extensions)
            ),
            key=lambda path: path.stat().st_mtime_ns,
            reverse=True,
        )
        if matches:
            return matches[0].resolve()

    expected_text = expected.resolve(strict=False) if expected is not None else ""
    raise FileNotFoundError(f"找不到已保存输出: {value or expected_text}")
