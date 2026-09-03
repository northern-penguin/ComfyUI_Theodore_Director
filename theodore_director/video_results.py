"""生成视频的阶段元数据与后处理二采请求校验。"""

from __future__ import annotations

from dataclasses import asdict, dataclass
from datetime import datetime, timezone
import json
from pathlib import Path
from typing import Any, Literal

from .manifest import atomic_write_json
from .paths import build_output_paths_from_values, find_generated_videos
from .schema import Plan, SecondSamplingMode, load_plan
from .selection import ShotSelection, select_shot_for_postprocess

VideoStage = Literal["first_pass", "second_pass", "upscaled", "legacy_unknown"]
PostprocessMode = Literal["super_resolution_second_pass", "latent_upscale_second_pass", "super_resolution_only"]


@dataclass(frozen=True)
class VideoResultMetadata:
    schema_version: int
    stage: VideoStage
    shot_id: str
    plan_hash: str
    source_path: str
    completed_at: str
    processing_mode: str = ""


@dataclass(frozen=True)
class SecondPassRequest:
    plan: Plan
    shot: ShotSelection
    source_path: Path
    source_relative: str
    output_prefix: str
    request_id: str
    processing_mode: PostprocessMode


def metadata_path(video_path: Path) -> Path:
    """元数据与视频并排保存，但使用独立扩展名避免播放器误识别。"""
    return video_path.with_name(f"{video_path.name}.theodore.json")


def write_video_result_metadata(
    video_path: Path,
    *,
    stage: VideoStage,
    shot_id: str,
    plan_hash: str,
    source_path: str = "",
    processing_mode: str = "",
) -> VideoResultMetadata:
    result = VideoResultMetadata(
        schema_version=2,
        stage=stage,
        shot_id=shot_id,
        plan_hash=plan_hash,
        source_path=source_path,
        completed_at=datetime.now(timezone.utc).isoformat(),
        processing_mode=processing_mode,
    )
    atomic_write_json(metadata_path(video_path), asdict(result))
    return result


def read_video_result_metadata(video_path: Path) -> VideoResultMetadata | None:
    try:
        data = json.loads(metadata_path(video_path).read_text(encoding="utf-8"))
        stage = str(data.get("stage", ""))
        if stage not in {"first_pass", "second_pass", "upscaled", "legacy_unknown"}:
            return None
        return VideoResultMetadata(
            schema_version=int(data.get("schema_version", data.get("schemaVersion", 1))),
            stage=stage,  # type: ignore[arg-type]
            shot_id=str(data.get("shot_id", data.get("shotId", ""))),
            plan_hash=str(data.get("plan_hash", data.get("planHash", ""))),
            source_path=str(data.get("source_path", data.get("sourcePath", ""))),
            completed_at=str(data.get("completed_at", data.get("completedAt", ""))),
            # V7.2 的旧 second_pass 都是 RTX 超分二采，可安全补齐具体模式。
            processing_mode=str(data.get("processing_mode", data.get("processingMode", "")))
            or (SecondSamplingMode.SUPER_RESOLUTION_SECOND_PASS.value if stage == "second_pass" else ""),
        )
    except (FileNotFoundError, json.JSONDecodeError, OSError, TypeError, ValueError):
        return None


def video_result_payload(root: Path, video_path: Path) -> dict[str, Any]:
    metadata = read_video_result_metadata(video_path)
    return {
        "stage": metadata.stage if metadata else "legacy_unknown",
        "sourcePath": metadata.source_path if metadata else "",
        "completedAt": metadata.completed_at if metadata else "",
        "processingMode": metadata.processing_mode if metadata else "",
    }


def postprocess_rejection_reason(metadata: VideoResultMetadata | None, processing_mode: str) -> str:
    """按源结果阶段与目标模式判断是否允许继续后处理。"""
    if metadata is None or metadata.stage in {"first_pass", "legacy_unknown"}:
        return ""
    if metadata.stage == "second_pass":
        if processing_mode == SecondSamplingMode.SUPER_RESOLUTION_ONLY.value:
            return ""
        return "二采结果只能继续执行只超分，不能再次进行扩散采样"
    if metadata.stage == "upscaled":
        return "只超分结果不能再次处理"
    return "当前结果阶段不能继续处理"


def parse_second_pass_request(root: Path, value: str | dict[str, Any]) -> SecondPassRequest:
    """校验前端请求，只允许当前运行目录中属于该镜头的一采或旧结果。"""
    try:
        data = json.loads(value) if isinstance(value, str) else dict(value)
    except (json.JSONDecodeError, TypeError, ValueError) as error:
        raise ValueError(f"单独二采请求 JSON 无法解析: {error}") from error
    plan = load_plan(data.get("plan", {}))
    shot_id = str(data.get("shotId", "")).strip()
    source_value = str(data.get("sourcePath", "")).strip().replace("\\", "/")
    request_id = str(data.get("requestId", "")).strip()
    processing_mode = str(data.get("processingMode", "")).strip()
    allowed_modes = {
        SecondSamplingMode.SUPER_RESOLUTION_SECOND_PASS.value,
        SecondSamplingMode.LATENT_UPSCALE_SECOND_PASS.value,
        SecondSamplingMode.SUPER_RESOLUTION_ONLY.value,
    }
    if not shot_id or not source_value or not request_id or processing_mode not in allowed_modes:
        raise ValueError("后处理请求缺少 shotId、sourcePath、requestId 或包含无效处理模式")

    output_root = root.resolve()
    candidate = (output_root / source_value).resolve(strict=False)
    try:
        candidate.relative_to(output_root)
    except ValueError as error:
        raise ValueError(f"拒绝读取 ComfyUI output 目录之外的文件: {candidate}") from error
    available = find_generated_videos(output_root, plan.project_name, plan.run_id, shot_id, -1)
    if candidate not in available:
        raise ValueError(f"选择的视频不属于镜头 {shot_id} 的生成结果: {source_value}")
    metadata = read_video_result_metadata(candidate)
    rejection_reason = postprocess_rejection_reason(metadata, processing_mode)
    if rejection_reason:
        raise ValueError(rejection_reason)

    shot = select_shot_for_postprocess(plan, shot_id)
    paths = build_output_paths_from_values(plan.project_name, plan.run_id, shot_id, max(0, shot.active_index))
    return SecondPassRequest(
        plan=plan,
        shot=shot,
        source_path=candidate,
        source_relative=candidate.relative_to(output_root).as_posix(),
        output_prefix=f"{paths.video_prefix}_{_postprocess_suffix(processing_mode)}",
        request_id=request_id,
        processing_mode=processing_mode,  # type: ignore[arg-type]
    )


def _postprocess_suffix(processing_mode: str) -> str:
    """让不同后处理结果在文件名中可直接辨认。"""
    return {
        SecondSamplingMode.SUPER_RESOLUTION_SECOND_PASS.value: "2nd_sr",
        SecondSamplingMode.LATENT_UPSCALE_SECOND_PASS.value: "2nd_latent",
        SecondSamplingMode.SUPER_RESOLUTION_ONLY.value: "upscaled",
    }[processing_mode]
