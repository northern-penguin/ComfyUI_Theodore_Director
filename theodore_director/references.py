"""H3 当前镜头素材选择、容量校验与标签编译。"""

from __future__ import annotations

from dataclasses import dataclass
import json
import re
from typing import Iterable

from .errors import ReferenceResolutionError
from .schema import Asset, AssetKind, Plan, Shot

REFERENCE_TOKEN = re.compile(r"\{\{ref:([^{}]+)}}")
RAW_LABEL = re.compile(r"<(Picture|Video|Audio)\s+(\d+)>")


@dataclass(frozen=True)
class ReferenceSlot:
    label: str
    alias: str
    asset_id: str
    path: str
    kind: str


@dataclass(frozen=True)
class ReferenceMap:
    compiled_prompt: str
    pictures: tuple[Asset, ...]
    videos: tuple[Asset, ...]
    paired_audio: tuple[Asset, ...]
    standalone_audio: tuple[Asset, ...]
    slots: tuple[ReferenceSlot, ...]
    mixed_file_count: int

    def to_json(self) -> str:
        return json.dumps(
            {
                "compiledPrompt": self.compiled_prompt,
                "mixedFileCount": self.mixed_file_count,
                "slots": [slot.__dict__ for slot in self.slots],
            },
            ensure_ascii=False,
            indent=2,
        )


def _ordered_unique(items: Iterable[Asset]) -> list[Asset]:
    result: list[Asset] = []
    seen: set[str] = set()
    for item in items:
        if item.id not in seen:
            seen.add(item.id)
            result.append(item)
    return result


def _validate_duration(asset: Asset, duration: float | None, label: str) -> float:
    if duration is None:
        raise ReferenceResolutionError(f"素材 {asset.alias} 缺少 {label} 时长元数据")
    if not 2 <= duration <= 15:
        raise ReferenceResolutionError(f"素材 {asset.alias} 的{label}时长 {duration:g}s 不在 2–15s 范围")
    return duration


def resolve_references(plan: Plan, shot: Shot) -> ReferenceMap:
    prompt = "\n".join(part for part in (plan.prompt_prefix, shot.prompt, plan.prompt_suffix) if part)
    catalog = {
        asset.alias: asset
        for asset in plan.assets
        if asset.enabled and asset.applies_to(shot.id) and asset.id not in shot.disabled_asset_ids
    }

    fixed = sorted((asset for asset in catalog.values() if asset.fixed), key=lambda item: (item.fixed_order, item.alias))
    referenced: list[Asset] = []
    referenced_aliases: list[str] = []
    for match in REFERENCE_TOKEN.finditer(prompt):
        token_alias = match.group(1).strip()
        base_alias = token_alias[:-6] if token_alias.endswith(".audio") else token_alias
        asset = catalog.get(base_alias)
        if asset is None:
            raise ReferenceResolutionError(f"提示词引用了不存在或在本镜头禁用的素材: {token_alias}")
        if token_alias.endswith(".audio"):
            if asset.kind is not AssetKind.VIDEO:
                raise ReferenceResolutionError(f"只有视频素材可以使用 .audio: {token_alias}")
            if not asset.include_video_audio:
                raise ReferenceResolutionError(f"视频 {base_alias} 未启用同步音轨参考")
        referenced.append(asset)
        referenced_aliases.append(token_alias)

    active = _ordered_unique([*fixed, *referenced])
    pictures = tuple(asset for asset in active if asset.kind is AssetKind.IMAGE)
    videos = tuple(asset for asset in active if asset.kind is AssetKind.VIDEO)
    standalone = tuple(asset for asset in active if asset.kind is AssetKind.AUDIO)
    paired = tuple(asset for asset in videos if asset.include_video_audio)

    if len(pictures) > 9:
        raise ReferenceResolutionError(f"当前镜头激活了 {len(pictures)} 张图片，H3 最多允许 9 张: {[a.alias for a in pictures]}")
    if len(videos) > 3:
        raise ReferenceResolutionError(f"当前镜头激活了 {len(videos)} 个视频，H3 最多允许 3 个: {[a.alias for a in videos]}")
    audio_count = len(paired) + len(standalone)
    if audio_count > 3:
        aliases = [f"{a.alias}.audio" for a in paired] + [a.alias for a in standalone]
        raise ReferenceResolutionError(f"当前镜头激活了 {audio_count} 路有效音频，H3 官方上限为 3 路: {aliases}")

    mixed_file_count = len(pictures) + len(videos) + len(standalone)
    if mixed_file_count > 12:
        raise ReferenceResolutionError(f"当前镜头混合输入共 {mixed_file_count} 个文件，H3 官方上限为 12")
    if audio_count and not (pictures or videos):
        raise ReferenceResolutionError("H3 音频参考不能单独使用，至少需要一张图片或一个视频")

    video_total = sum(_validate_duration(asset, asset.duration_seconds, "视频") for asset in videos)
    if video_total > 15:
        raise ReferenceResolutionError(f"当前镜头参考视频总时长 {video_total:g}s，H3 官方上限为 15s")
    audio_durations = [
        _validate_duration(asset, asset.audio_duration_seconds or asset.duration_seconds, "视频伴音") for asset in paired
    ] + [_validate_duration(asset, asset.duration_seconds, "音频") for asset in standalone]
    audio_total = sum(audio_durations)
    if audio_total > 15:
        raise ReferenceResolutionError(f"当前镜头有效音频总时长 {audio_total:g}s，H3 官方上限为 15s")

    picture_labels = {asset.alias: f"<Picture {index}>" for index, asset in enumerate(pictures, 1)}
    video_labels = {asset.alias: f"<Video {index}>" for index, asset in enumerate(videos, 1)}
    audio_labels: dict[str, str] = {}
    audio_index = 1
    for asset in paired:
        audio_labels[f"{asset.alias}.audio"] = f"<Audio {audio_index}>"
        audio_index += 1
    for asset in standalone:
        audio_labels[asset.alias] = f"<Audio {audio_index}>"
        audio_index += 1

    def replace_token(match: re.Match[str]) -> str:
        alias = match.group(1).strip()
        if alias in audio_labels:
            return audio_labels[alias]
        if alias in picture_labels:
            return picture_labels[alias]
        if alias in video_labels:
            return video_labels[alias]
        # 视频启用伴音时，基础别名仍然表示 Video，而不是 Audio。
        raise ReferenceResolutionError(f"无法编译素材别名: {alias}")

    compiled = REFERENCE_TOKEN.sub(replace_token, prompt)
    limits = {"Picture": len(pictures), "Video": len(videos), "Audio": audio_count}
    for kind, number_text in RAW_LABEL.findall(compiled):
        number = int(number_text)
        if number < 1 or number > limits[kind]:
            raise ReferenceResolutionError(f"原生标签 <{kind} {number}> 超过本轮实际激活数量 {limits[kind]}")

    slots: list[ReferenceSlot] = []
    for alias, label in picture_labels.items():
        asset = catalog[alias]
        slots.append(ReferenceSlot(label, alias, asset.id, asset.path, "image"))
    for alias, label in video_labels.items():
        asset = catalog[alias]
        slots.append(ReferenceSlot(label, alias, asset.id, asset.path, "video"))
    for alias, label in audio_labels.items():
        base = alias[:-6] if alias.endswith(".audio") else alias
        asset = catalog[base]
        slots.append(ReferenceSlot(label, alias, asset.id, asset.path, "video_audio" if alias.endswith(".audio") else "audio"))

    return ReferenceMap(compiled, pictures, videos, paired, standalone, tuple(slots), mixed_file_count)

