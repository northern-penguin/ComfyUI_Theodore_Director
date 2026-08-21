"""在执行阶段将计划内的媒体路径转换为 ComfyUI 原生类型。"""

from __future__ import annotations

import os
from pathlib import Path
from typing import Any


def resolve_media_path(value: str) -> str:
    """默认只允许 ComfyUI 已标注路径；绝对外链需要显式开启。"""
    import folder_paths

    candidate = Path(value)
    if candidate.is_absolute():
        if os.getenv("THEODORE_DIRECTOR_ALLOW_EXTERNAL_PATHS", "0") != "1":
            raise ValueError("外部绝对路径默认禁用，请设置 THEODORE_DIRECTOR_ALLOW_EXTERNAL_PATHS=1 后重启 ComfyUI")
        if not candidate.is_file():
            raise FileNotFoundError(candidate)
        return str(candidate.resolve())
    resolved = folder_paths.get_annotated_filepath(value)
    if not os.path.isfile(resolved):
        raise FileNotFoundError(f"找不到 ComfyUI input 素材: {value}")
    return resolved


def load_image(value: str) -> Any:
    import nodes

    # 使用 ComfyUI 自己的加载器，保持色彩、方向和设备类型一致。
    return nodes.LoadImage().load_image(value)[0]


def _resample_video_frames(images: Any, source_fps: float, target_fps: float = 24.0) -> Any:
    if images.shape[0] <= 1 or source_fps <= 0 or abs(source_fps - target_fps) < 1e-6:
        return images
    import torch

    target_count = max(1, round(images.shape[0] * target_fps / source_fps))
    indices = torch.linspace(0, images.shape[0] - 1, target_count, device=images.device).round().long()
    return images.index_select(0, indices)


def load_video(value: str) -> tuple[Any, Any | None]:
    from comfy_api.v0_0_2 import InputImpl

    path = resolve_media_path(value)
    components = InputImpl.VideoFromFile(path).get_components()
    frames = _resample_video_frames(components.images, float(components.frame_rate), 24.0)
    return frames, components.audio


def load_audio(value: str) -> Any:
    from comfy_extras.nodes_audio import load

    path = resolve_media_path(value)
    waveform, sample_rate = load(path)
    return {"waveform": waveform.unsqueeze(0), "sample_rate": sample_rate}

