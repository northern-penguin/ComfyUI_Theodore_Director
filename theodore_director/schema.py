"""版本化的导播台计划协议。

核心层只使用 Python 标准库，保证单元测试不依赖 ComfyUI 或 GPU。
"""

from __future__ import annotations

from dataclasses import dataclass, field
from enum import Enum
import hashlib
import json
import re
from typing import Any

from .errors import PlanValidationError

SCHEMA_VERSION = 4
_ALIAS_INVALID = re.compile(r"[\s{}]")


class AssetKind(str, Enum):
    IMAGE = "image"
    VIDEO = "video"
    AUDIO = "audio"


@dataclass(frozen=True)
class Asset:
    id: str
    alias: str
    kind: AssetKind
    path: str
    enabled: bool = True
    fixed: bool = False
    fixed_order: int = 0
    shot_ids: tuple[str, ...] = ()
    include_video_audio: bool = False
    duration_seconds: float | None = None
    audio_duration_seconds: float | None = None
    fingerprint: str = ""

    @classmethod
    def from_dict(cls, data: dict[str, Any]) -> "Asset":
        try:
            kind = AssetKind(str(data["kind"]))
            alias = str(data["alias"]).strip()
            asset_id = str(data.get("id") or alias).strip()
            path = str(data.get("path", "")).strip()
        except (KeyError, ValueError, TypeError) as exc:
            raise PlanValidationError(f"素材字段无效: {data!r}") from exc
        if not alias or _ALIAS_INVALID.search(alias):
            raise PlanValidationError(f"素材别名不能留空或包含空白、花括号: {alias!r}")
        if alias.endswith(".audio"):
            raise PlanValidationError(f"素材别名不能以保留后缀 .audio 结尾: {alias}")
        if not asset_id:
            raise PlanValidationError("素材 id 不能为空")
        return cls(
            id=asset_id,
            alias=alias,
            kind=kind,
            path=path,
            enabled=bool(data.get("enabled", True)),
            fixed=bool(data.get("fixed", False)),
            fixed_order=int(data.get("fixedOrder", 0)),
            shot_ids=tuple(str(item) for item in data.get("shotIds", []) if str(item)),
            include_video_audio=bool(data.get("includeVideoAudio", False)),
            duration_seconds=_optional_float(data.get("durationSeconds")),
            audio_duration_seconds=_optional_float(data.get("audioDurationSeconds")),
            fingerprint=str(data.get("fingerprint", "")),
        )

    def applies_to(self, shot_id: str) -> bool:
        """无镜头范围表示全局素材，否则只应用到指定镜头。"""
        return not self.shot_ids or shot_id in self.shot_ids


@dataclass(frozen=True)
class Shot:
    id: str
    title: str
    prompt: str
    duration_seconds: float
    enabled: bool = True
    latent_relay: bool = True
    second_sampling: bool = True
    negative_prompt: str = ""
    seed: int | None = None
    disabled_asset_ids: tuple[str, ...] = ()

    @classmethod
    def from_dict(cls, data: dict[str, Any], index: int) -> "Shot":
        shot_id = str(data.get("id") or f"shot_{index + 1:03d}").strip()
        if not shot_id:
            raise PlanValidationError(f"第 {index + 1} 个镜头 id 不能为空")
        duration = float(data.get("durationSeconds", 5.0))
        if duration <= 0:
            raise PlanValidationError(f"镜头 {shot_id} 的时长必须大于 0")
        seed_value = data.get("seed")
        return cls(
            id=shot_id,
            title=str(data.get("title") or shot_id),
            prompt=str(data.get("prompt", "")),
            duration_seconds=duration,
            enabled=bool(data.get("enabled", True)),
            # 旧计划默认开启，保持 V6 原有的逐段 latent 接力行为。
            latent_relay=bool(data.get("latentRelay", True)),
            # 旧双采工作流始终执行第二采，缺省开启才能无损迁移。
            second_sampling=bool(data.get("secondSampling", True)),
            negative_prompt=str(data.get("negativePrompt", "")),
            seed=None if seed_value is None else int(seed_value),
            disabled_asset_ids=tuple(str(item) for item in data.get("disabledAssetIds", []) if str(item)),
        )


@dataclass(frozen=True)
class Continuity:
    mode: str = "h3_av_latent"
    video_context_frames: int = 22
    audio_context_frames: int = 24
    duration_mode: str = "final_output"


@dataclass(frozen=True)
class Plan:
    schema_version: int
    project_id: str
    project_name: str
    run_id: str
    prompt_prefix: str
    prompt_suffix: str
    fps: int
    base_seed: int
    continuity: Continuity
    assets: tuple[Asset, ...] = field(default_factory=tuple)
    shots: tuple[Shot, ...] = field(default_factory=tuple)

    @property
    def active_shots(self) -> tuple[Shot, ...]:
        return tuple(shot for shot in self.shots if shot.enabled)

    @property
    def canonical_json(self) -> str:
        return json.dumps(self.to_dict(), ensure_ascii=False, sort_keys=True, separators=(",", ":"))

    @property
    def generation_json(self) -> str:
        """只序列化会影响生成或结果归属的字段，内部 Project ID 不参与续跑 hash。"""
        data = self.to_dict()
        data["project"] = dict(data["project"])
        data["project"].pop("id", None)
        return json.dumps(data, ensure_ascii=False, sort_keys=True, separators=(",", ":"))

    @property
    def plan_hash(self) -> str:
        return hashlib.sha256(self.generation_json.encode("utf-8")).hexdigest()

    def to_dict(self) -> dict[str, Any]:
        return {
            "schemaVersion": self.schema_version,
            "project": {"id": self.project_id, "name": self.project_name, "runId": self.run_id},
            "defaults": {"fps": self.fps, "baseSeed": self.base_seed},
            "promptPrefix": self.prompt_prefix,
            "promptSuffix": self.prompt_suffix,
            "continuity": {
                "mode": self.continuity.mode,
                "videoContextFrames": self.continuity.video_context_frames,
                "audioContextFrames": self.continuity.audio_context_frames,
                "durationMode": self.continuity.duration_mode,
            },
            "assets": [
                {
                    "id": asset.id,
                    "alias": asset.alias,
                    "kind": asset.kind.value,
                    "path": asset.path,
                    "enabled": asset.enabled,
                    "fixed": asset.fixed,
                    "fixedOrder": asset.fixed_order,
                    "shotIds": list(asset.shot_ids),
                    "includeVideoAudio": asset.include_video_audio,
                    "durationSeconds": asset.duration_seconds,
                    "audioDurationSeconds": asset.audio_duration_seconds,
                    "fingerprint": asset.fingerprint,
                }
                for asset in self.assets
            ],
            "shots": [
                {
                    "id": shot.id,
                    "title": shot.title,
                    "prompt": shot.prompt,
                    "negativePrompt": shot.negative_prompt,
                    "durationSeconds": shot.duration_seconds,
                    "enabled": shot.enabled,
                    "latentRelay": shot.latent_relay,
                    "secondSampling": shot.second_sampling,
                    "seed": shot.seed,
                    "disabledAssetIds": list(shot.disabled_asset_ids),
                }
                for shot in self.shots
            ],
        }


def _optional_float(value: Any) -> float | None:
    if value is None or value == "":
        return None
    return float(value)


def migrate_plan(data: dict[str, Any]) -> dict[str, Any]:
    """将历史协议逐级迁移；v4 增加逐镜头二次采样开关。"""
    version = int(data.get("schemaVersion", 1))
    if version > SCHEMA_VERSION:
        raise PlanValidationError(f"计划版本 {version} 高于当前支持版本 {SCHEMA_VERSION}")
    migrated = dict(data)
    project = dict(migrated.get("project") or {})
    if not str(project.get("id") or "").strip():
        # 对缺少旧 ID 的计划生成确定性内部 ID，重复加载不会发生漂移。
        project_name = str(project.get("name") or "Theodore Project")
        project["id"] = f"td_{hashlib.sha256(project_name.encode('utf-8')).hexdigest()[:12]}"
    migrated["project"] = project
    shots = []
    for item in migrated.get("shots", []):
        shot = dict(item)
        # v1/v2 只有全局接力流程，缺省值必须为开才能无损迁移。
        shot.setdefault("latentRelay", True)
        shot.setdefault("secondSampling", True)
        shots.append(shot)
    migrated["shots"] = shots
    migrated["schemaVersion"] = SCHEMA_VERSION
    return migrated


def load_plan(value: str | dict[str, Any]) -> Plan:
    try:
        raw = json.loads(value) if isinstance(value, str) else dict(value)
    except (json.JSONDecodeError, TypeError, ValueError) as exc:
        raise PlanValidationError(f"计划 JSON 无法解析: {exc}") from exc
    data = migrate_plan(raw)
    project = data.get("project") or {}
    defaults = data.get("defaults") or {}
    continuity_data = data.get("continuity") or {}
    assets = tuple(Asset.from_dict(item) for item in data.get("assets", []))
    shots = tuple(Shot.from_dict(item, index) for index, item in enumerate(data.get("shots", [])))

    aliases: dict[str, str] = {}
    ids: set[str] = set()
    for asset in assets:
        normalized = asset.alias.casefold()
        if normalized in aliases:
            raise PlanValidationError(f"素材别名重复: {aliases[normalized]} / {asset.alias}")
        aliases[normalized] = asset.alias
        if asset.id in ids:
            raise PlanValidationError(f"素材 id 重复: {asset.id}")
        ids.add(asset.id)

    shot_ids: set[str] = set()
    for shot in shots:
        if shot.id in shot_ids:
            raise PlanValidationError(f"镜头 id 重复: {shot.id}")
        shot_ids.add(shot.id)

    plan = Plan(
        schema_version=SCHEMA_VERSION,
        project_id=str(project.get("id") or "theodore_project"),
        project_name=str(project.get("name") or "Theodore Project"),
        run_id=str(project.get("runId") or "run_001"),
        prompt_prefix=str(data.get("promptPrefix", "")),
        prompt_suffix=str(data.get("promptSuffix", "")),
        fps=int(defaults.get("fps", 24)),
        base_seed=int(defaults.get("baseSeed", 0)),
        continuity=Continuity(
            mode=str(continuity_data.get("mode", "h3_av_latent")),
            video_context_frames=int(continuity_data.get("videoContextFrames", 22)),
            audio_context_frames=int(continuity_data.get("audioContextFrames", 24)),
            duration_mode=str(continuity_data.get("durationMode", "final_output")),
        ),
        assets=assets,
        shots=shots,
    )
    if plan.fps <= 0:
        raise PlanValidationError("fps 必须大于 0")
    if plan.continuity.video_context_frames not in (5, 22, 39, 56):
        raise PlanValidationError("H3 视频上下文帧数必须为 5、22、39 或 56")
    if not plan.active_shots:
        raise PlanValidationError("计划至少需要一个启用镜头")
    return plan


DEFAULT_PLAN = {
    "schemaVersion": 4,
    "project": {"id": "", "name": "Theodore Project", "runId": "run_001"},
    "defaults": {"fps": 24, "baseSeed": 123456790},
    "promptPrefix": "",
    "promptSuffix": "",
    "continuity": {
        "mode": "h3_av_latent",
        "videoContextFrames": 22,
        "audioContextFrames": 24,
        "durationMode": "final_output",
    },
    "assets": [],
    "shots": [
        {
            "id": "shot_001",
            "title": "Shot 1",
            "prompt": "Describe the first shot.",
            "durationSeconds": 5,
            "enabled": True,
            "latentRelay": True,
            "secondSampling": True,
        }
    ],
}

DEFAULT_PLAN_JSON = json.dumps(DEFAULT_PLAN, ensure_ascii=False, indent=2)
