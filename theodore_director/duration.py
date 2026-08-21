"""H3 时长与 17n+5 合法帧数换算。"""

from __future__ import annotations


def nearest_h3_frames(target_frames: float) -> int:
    """返回距离目标最近的 17n+5 帧数。"""
    n = max(0, round((target_frames - 5) / 17))
    return 17 * n + 5


def calculate_h3_frames(
    duration_seconds: float,
    *,
    fps: int = 24,
    is_first: bool,
    context_frames: int = 22,
    duration_mode: str = "final_output",
) -> tuple[int, int]:
    """返回生成帧数和裁切后的预计帧数。"""
    if duration_seconds <= 0 or fps <= 0:
        raise ValueError("时长和 fps 必须大于 0")
    trim = 0 if is_first else context_frames
    if duration_mode == "final_output":
        generated = nearest_h3_frames(duration_seconds * fps + trim)
    elif duration_mode == "legacy_generation_duration":
        raw = max(5, round(duration_seconds * fps))
        generated = raw + (5 - raw % 17) % 17
    else:
        raise ValueError(f"不支持的时长模式: {duration_mode}")
    return generated, max(0, generated - trim)

