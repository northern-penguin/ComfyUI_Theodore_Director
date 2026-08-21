import json
from pathlib import Path

from theodore_director.manifest import commit_shot_result, is_shot_complete


def write_file(path: Path, content: bytes = b"ok"):
    path.parent.mkdir(parents=True, exist_ok=True)
    path.write_bytes(content)


def test_commit_requires_all_outputs_and_is_resumable(tmp_path):
    video = tmp_path / "segments" / "one.mp4"
    tail = tmp_path / "tails" / "one.png"
    latent = tmp_path / "latents" / "clip.safetensors"
    for path in (video, tail, latent):
        write_file(path)
    result_path = tmp_path / "results" / "one.json"
    manifest_path = tmp_path / "manifest.json"
    commit_shot_result(
        result_path=result_path,
        manifest_path=manifest_path,
        shot_id="one",
        shot_hash="shot-hash",
        plan_hash="plan-hash",
        video_path=video,
        tail_path=tail,
        latent_path=latent,
        latent_required=True,
    )
    assert is_shot_complete(result_path, shot_hash="shot-hash", plan_hash="plan-hash", latent_required=True)
    manifest = json.loads(manifest_path.read_text(encoding="utf-8"))
    assert manifest["shots"]["one"]["status"] == "completed"


def test_hash_change_invalidates_completion(tmp_path):
    video = tmp_path / "video.mp4"
    tail = tmp_path / "tail.png"
    write_file(video)
    write_file(tail)
    result_path = tmp_path / "result.json"
    commit_shot_result(
        result_path=result_path,
        manifest_path=tmp_path / "manifest.json",
        shot_id="one",
        shot_hash="old",
        plan_hash="plan",
        video_path=video,
        tail_path=tail,
        latent_path=None,
        latent_required=False,
    )
    assert not is_shot_complete(result_path, shot_hash="new", plan_hash="plan", latent_required=False)

