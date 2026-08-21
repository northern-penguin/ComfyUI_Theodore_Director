"""运行结果 Manifest 与断点恢复。"""

from __future__ import annotations

from dataclasses import asdict, dataclass
from datetime import datetime, timezone
import json
import os
from pathlib import Path
import tempfile
from typing import Any


@dataclass(frozen=True)
class ShotResult:
    shot_id: str
    shot_hash: str
    plan_hash: str
    status: str
    video_path: str
    tail_path: str
    latent_path: str
    completed_at: str


def atomic_write_json(path: Path, value: dict[str, Any]) -> None:
    """在同一目录写临时文件并原子替换，避免留下半份状态。"""
    path.parent.mkdir(parents=True, exist_ok=True)
    handle, temp_name = tempfile.mkstemp(prefix=f".{path.name}.", suffix=".tmp", dir=path.parent)
    try:
        with os.fdopen(handle, "w", encoding="utf-8", newline="\n") as stream:
            json.dump(value, stream, ensure_ascii=False, indent=2, sort_keys=True)
            stream.flush()
            os.fsync(stream.fileno())
        os.replace(temp_name, path)
    except Exception:
        try:
            os.unlink(temp_name)
        except FileNotFoundError:
            pass
        raise


def file_is_complete(path: Path) -> bool:
    return path.is_file() and path.stat().st_size > 0


def commit_shot_result(
    *,
    result_path: Path,
    manifest_path: Path,
    shot_id: str,
    shot_hash: str,
    plan_hash: str,
    video_path: Path,
    tail_path: Path,
    latent_path: Path | None,
    latent_required: bool,
) -> ShotResult:
    if not file_is_complete(video_path):
        raise ValueError(f"视频尚未完整写入: {video_path}")
    if not file_is_complete(tail_path):
        raise ValueError(f"尾帧尚未完整写入: {tail_path}")
    if latent_required and (latent_path is None or not file_is_complete(latent_path)):
        raise ValueError(f"连续模式所需 AV Latent 尚未完整写入: {latent_path}")

    result = ShotResult(
        shot_id=shot_id,
        shot_hash=shot_hash,
        plan_hash=plan_hash,
        status="completed",
        video_path=str(video_path),
        tail_path=str(tail_path),
        latent_path=str(latent_path) if latent_path else "",
        completed_at=datetime.now(timezone.utc).isoformat(),
    )
    atomic_write_json(result_path, asdict(result))

    manifest: dict[str, Any] = {"schemaVersion": 1, "planHash": plan_hash, "shots": {}}
    if manifest_path.is_file():
        try:
            current = json.loads(manifest_path.read_text(encoding="utf-8"))
            if current.get("planHash") == plan_hash:
                manifest = current
        except (json.JSONDecodeError, OSError):
            pass
    manifest.setdefault("shots", {})[shot_id] = asdict(result)
    manifest["updatedAt"] = result.completed_at
    atomic_write_json(manifest_path, manifest)
    return result


def is_shot_complete(result_path: Path, *, shot_hash: str, plan_hash: str, latent_required: bool) -> bool:
    try:
        data = json.loads(result_path.read_text(encoding="utf-8"))
    except (FileNotFoundError, json.JSONDecodeError, OSError):
        return False
    if data.get("status") != "completed":
        return False
    # 兼容 dataclass 的 snake_case 键，同时允许未来前端使用 camelCase。
    stored_shot_hash = data.get("shot_hash", data.get("shotHash"))
    stored_plan_hash = data.get("plan_hash", data.get("planHash"))
    if stored_shot_hash != shot_hash or stored_plan_hash != plan_hash:
        return False
    if not file_is_complete(Path(data.get("video_path", data.get("videoPath", "")))):
        return False
    if not file_is_complete(Path(data.get("tail_path", data.get("tailPath", "")))):
        return False
    latent_value = data.get("latent_path", data.get("latentPath", ""))
    return not latent_required or file_is_complete(Path(latent_value))
