"""镜头选择、哈希和队列游标计算。"""

from __future__ import annotations

from dataclasses import dataclass
import hashlib
import json

from .schema import Plan, Shot


@dataclass(frozen=True)
class ShotSelection:
    shot: Shot
    active_index: int
    source_index: int
    active_count: int
    is_first: bool
    is_last: bool
    latent_relay: bool
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
        next_index=queue_index + 1 if has_next else 0,
        has_next=has_next,
        seed=shot.seed if shot.seed is not None else seed_base + queue_index,
        shot_hash=shot_hash(plan, shot),
    )
