import copy
import json

import pytest

from theodore_director.schema import DEFAULT_PLAN
from theodore_director.video_results import (
    parse_second_pass_request,
    read_video_result_metadata,
    video_result_payload,
    write_video_result_metadata,
)


def make_plan():
    plan = copy.deepcopy(DEFAULT_PLAN)
    plan["project"] = {"id": "demo", "name": "Demo", "runId": "run_001"}
    plan["shots"] = [
        {"id": "shot_001", "title": "One", "prompt": "one", "durationSeconds": 5, "enabled": True},
        {"id": "shot_002", "title": "Two", "prompt": "two", "durationSeconds": 5, "enabled": False},
    ]
    return plan


def create_video(root, shot_id="shot_001", name="00001"):
    path = root / "TheodoreDirector" / "Demo_run_001" / f"{shot_id}_video_{name}_.mp4"
    path.parent.mkdir(parents=True, exist_ok=True)
    path.write_bytes(b"video")
    return path


def request(plan, video, root, shot_id="shot_001", processing_mode="super_resolution_second_pass"):
    return {
        "plan": plan,
        "shotId": shot_id,
        "sourcePath": video.relative_to(root).as_posix(),
        "requestId": "request-1",
        "processingMode": processing_mode,
    }


def test_video_result_metadata_round_trips(tmp_path):
    video = create_video(tmp_path)
    stored = write_video_result_metadata(
        video,
        stage="first_pass",
        shot_id="shot_001",
        plan_hash="hash",
    )

    assert read_video_result_metadata(video) == stored
    assert video_result_payload(tmp_path, video)["stage"] == "first_pass"
    assert video_result_payload(tmp_path, create_video(tmp_path, name="00002"))["stage"] == "legacy_unknown"


def test_second_pass_request_accepts_first_pass_and_disabled_shot(tmp_path):
    plan = make_plan()
    first = create_video(tmp_path)
    disabled = create_video(tmp_path, shot_id="shot_002")
    write_video_result_metadata(first, stage="first_pass", shot_id="shot_001", plan_hash="hash")

    parsed = parse_second_pass_request(tmp_path, request(plan, first, tmp_path))
    parsed_disabled = parse_second_pass_request(tmp_path, request(plan, disabled, tmp_path, "shot_002"))

    assert parsed.shot.shot.id == "shot_001"
    assert parsed.shot.latent_relay is False
    assert parsed.output_prefix.endswith("/shot_001_video_2nd_sr")
    assert parsed.processing_mode == "super_resolution_second_pass"
    assert parsed_disabled.shot.shot.enabled is False


def test_second_pass_request_rejects_known_second_pass(tmp_path):
    plan = make_plan()
    video = create_video(tmp_path)
    write_video_result_metadata(video, stage="second_pass", shot_id="shot_001", plan_hash="hash")

    with pytest.raises(ValueError, match="不能再次"):
        parse_second_pass_request(tmp_path, request(plan, video, tmp_path))


@pytest.mark.parametrize(
    ("mode", "suffix"),
    [
        ("super_resolution_second_pass", "2nd_sr"),
        ("latent_upscale_second_pass", "2nd_latent"),
        ("super_resolution_only", "upscaled"),
    ],
)
def test_postprocess_modes_use_distinct_output_prefixes(tmp_path, mode, suffix):
    plan = make_plan()
    video = create_video(tmp_path)
    parsed = parse_second_pass_request(tmp_path, request(plan, video, tmp_path, processing_mode=mode))
    assert parsed.output_prefix.endswith(f"/shot_001_video_{suffix}")


def test_postprocess_rejects_off_mode(tmp_path):
    plan = make_plan()
    video = create_video(tmp_path)
    with pytest.raises(ValueError, match="无效处理模式"):
        parse_second_pass_request(tmp_path, request(plan, video, tmp_path, processing_mode="off"))


def test_second_pass_request_rejects_cross_shot_and_traversal(tmp_path):
    plan = make_plan()
    video = create_video(tmp_path, shot_id="shot_002")
    with pytest.raises(ValueError, match="不属于镜头"):
        parse_second_pass_request(tmp_path, request(plan, video, tmp_path, "shot_001"))

    invalid = request(plan, video, tmp_path, "shot_002")
    invalid["sourcePath"] = "../outside.mp4"
    with pytest.raises(ValueError, match="output 目录之外"):
        parse_second_pass_request(tmp_path, json.dumps(invalid, ensure_ascii=False))
