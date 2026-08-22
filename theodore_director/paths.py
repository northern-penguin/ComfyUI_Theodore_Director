"""稳定、安全的输出路径生成。"""

from __future__ import annotations

from dataclasses import dataclass
from pathlib import Path
import re

from .schema import Plan, Shot

_UNSAFE = re.compile(r"[^\w.-]+", re.UNICODE)


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


def build_output_paths(plan: Plan, shot: Shot, active_index: int) -> OutputPaths:
    project = slug(plan.project_name, "project")
    run_id = slug(plan.run_id, "run")
    shot_name = slug(shot.id, f"shot_{active_index + 1:03d}")
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
