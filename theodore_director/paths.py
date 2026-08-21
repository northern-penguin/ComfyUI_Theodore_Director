"""稳定、安全的输出路径生成。"""

from __future__ import annotations

from dataclasses import dataclass
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
    base = f"TheodoreDirector/{project}/{run_id}"
    stem = f"{active_index + 1:03d}_{shot_name}"
    return OutputPaths(
        run_prefix=base,
        video_prefix=f"{base}/segments/{stem}",
        latent_prefix=f"{base}/latent_context",
        latent_save_prefix=f"{base}/latent_context/clip",
        tail_prefix=f"{base}/tail_frames/{stem}/tail",
        manifest_path=f"{base}/manifest.json",
        shot_result_path=f"{base}/results/{stem}.json",
    )
