"""镜头选择、哈希和队列游标计算。"""

from __future__ import annotations

from dataclasses import dataclass
import hashlib
import json

from .schema import Plan, SecondSamplingMode, Shot


@dataclass(frozen=True)
class ShotSelection:
    shot: Shot
    active_index: int
    source_index: int
    active_count: int
    is_first: bool
    is_last: bool
    latent_relay: bool
    second_sampling: bool
    second_sampling_mode: str
    super_resolution_second_pass: bool
    latent_upscale_second_pass: bool
    super_resolution_only: bool
    next_index: int
    has_next: bool
    seed: int
    shot_hash: str


def shot_hash(plan: Plan, shot: Shot) -> str:
    value = {
        "shot": shot.__dict__,
        "assets": [asset.__dict__ for asset in plan.assets if asset.applies_to(shot.id)],
        "prefix": plan.prompt_prefix,
        "suffix": plan.prompt_suffix,
        "continuity": plan.continuity.__dict__,
    }
    return hashlib.sha256(json.dumps(value, default=str, ensure_ascii=False, sort_keys=True).encode("utf-8")).hexdigest()


def select_shot(plan: Plan, queue_index: int, base_seed: int | None = None) -> ShotSelection:
    active = plan.active_shots
    if queue_index < 0 or queue_index >= len(active):
        raise IndexError(f"Impact 当前索引 {queue_index} 超出启用镜头范围 0..{len(active) - 1}")
    shot = active[queue_index]
    source_index = next(index for index, item in enumerate(plan.shots) if item.id == shot.id)
    has_next = queue_index + 1 < len(active)
    # 首个启用镜头没有上一段可供读取；全局非 latent 模式也必须直通。
    latent_relay = queue_index > 0 and shot.latent_relay and plan.continuity.mode == "h3_av_latent"
    seed_base = plan.base_seed if base_seed is None else int(base_seed)
    return ShotSelection(
        shot=shot,
        active_index=queue_index,
        source_index=source_index,
        active_count=len(active),
        is_first=queue_index == 0,
        is_last=not has_next,
        latent_relay=latent_relay,
        second_sampling=shot.second_sampling,
        second_sampling_mode=shot.second_sampling_mode.value,
        super_resolution_second_pass=shot.second_sampling_mode is SecondSamplingMode.SUPER_RESOLUTION_SECOND_PASS,
        latent_upscale_second_pass=shot.second_sampling_mode is SecondSamplingMode.LATENT_UPSCALE_SECOND_PASS,
        super_resolution_only=shot.second_sampling_mode is SecondSamplingMode.SUPER_RESOLUTION_ONLY,
        next_index=queue_index + 1 if has_next else 0,
        has_next=has_next,
        seed=shot.seed if shot.seed is not None else seed_base + queue_index,
        shot_hash=shot_hash(plan, shot),
    )


def select_shot_for_postprocess(plan: Plan, shot_id: str) -> ShotSelection:
    """按稳定 ID 选择后处理镜头，并强制按独立片段处理。"""
    try:
        source_index, shot = next(
            (index, item) for index, item in enumerate(plan.shots) if item.id == shot_id
        )
    except StopIteration as error:
        raise ValueError(f"计划中不存在镜头: {shot_id}") from error

    active_ids = [item.id for item in plan.active_shots]
    active_index = active_ids.index(shot.id) if shot.id in active_ids else source_index
    # 已保存的一采视频已经裁掉接力上下文；后处理不得再次增加或裁掉上下文帧。
    return ShotSelection(
        shot=shot,
        active_index=active_index,
        source_index=source_index,
        active_count=len(active_ids),
        is_first=True,
        is_last=True,
        latent_relay=False,
        second_sampling=True,
        second_sampling_mode=SecondSamplingMode.SUPER_RESOLUTION_SECOND_PASS.value,
        super_resolution_second_pass=True,
        latent_upscale_second_pass=False,
        super_resolution_only=False,
        next_index=0,
        has_next=False,
        seed=shot.seed if shot.seed is not None else plan.base_seed + source_index,
        shot_hash=shot_hash(plan, shot),
    )
