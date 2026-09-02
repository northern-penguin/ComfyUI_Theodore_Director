import copy
import os

import pytest

from theodore_director.paths import (
    build_output_paths,
    find_generated_video,
    find_generated_videos,
    resolve_output_file,
    shot_result_candidates,
)
from theodore_director.schema import DEFAULT_PLAN, SecondSamplingMode, load_plan
from theodore_director.selection import select_shot, select_shot_for_postprocess


def test_disabled_shots_do_not_consume_queue_index():
    data = copy.deepcopy(DEFAULT_PLAN)
    data["shots"] = [
        {"id": "disabled", "prompt": "x", "durationSeconds": 5, "enabled": False},
        {"id": "active", "prompt": "y", "durationSeconds": 5, "enabled": True},
    ]
    plan = load_plan(data)
    selected = select_shot(plan, 0)
    assert selected.shot.id == "active"
    assert selected.source_index == 1
    assert selected.next_index == 0
    assert not selected.has_next


def test_seed_override_and_sequence_seed():
    data = copy.deepcopy(DEFAULT_PLAN)
    data["shots"] = [
        {"id": "one", "prompt": "x", "durationSeconds": 5},
        {"id": "two", "prompt": "y", "durationSeconds": 5, "seed": 99},
    ]
    plan = load_plan(data)
    assert select_shot(plan, 0, 10).seed == 10
    assert select_shot(plan, 1, 10).seed == 99


def test_latent_relay_uses_current_active_shot_switch():
    data = copy.deepcopy(DEFAULT_PLAN)
    data["shots"] = [
        {"id": "one", "prompt": "x", "durationSeconds": 5, "latentRelay": True},
        {"id": "disabled", "prompt": "skip", "durationSeconds": 5, "enabled": False, "latentRelay": True},
        {"id": "two", "prompt": "y", "durationSeconds": 5, "latentRelay": False},
        {"id": "three", "prompt": "z", "durationSeconds": 5, "latentRelay": True},
    ]
    plan = load_plan(data)

    # 首个启用镜头无论配置为何都不读取上一段。
    assert select_shot(plan, 0).latent_relay is False
    assert select_shot(plan, 1).latent_relay is False
    assert select_shot(plan, 2).latent_relay is True


def test_processing_mode_uses_current_active_shot_switch():
    data = copy.deepcopy(DEFAULT_PLAN)
    data["shots"] = [
        {"id": "one", "prompt": "x", "durationSeconds": 5, "secondSamplingMode": "off"},
        {"id": "disabled", "prompt": "skip", "durationSeconds": 5, "enabled": False, "secondSamplingMode": "super_resolution_only"},
        {"id": "two", "prompt": "y", "durationSeconds": 5, "secondSamplingMode": "latent_upscale_second_pass"},
    ]
    plan = load_plan(data)

    assert select_shot(plan, 0).second_sampling is False
    # Impact 索引 1 直接对应第二个启用分镜，不会被禁用分镜错位。
    assert select_shot(plan, 1).second_sampling is True
    assert select_shot(plan, 1).second_sampling_mode == SecondSamplingMode.LATENT_UPSCALE_SECOND_PASS.value
    assert select_shot(plan, 1).latent_upscale_second_pass is True
    assert select_shot(plan, 1).super_resolution_second_pass is False
    assert select_shot(plan, 1).super_resolution_only is False


def test_postprocess_selection_accepts_disabled_shot_and_disables_relay():
    data = copy.deepcopy(DEFAULT_PLAN)
    data["shots"] = [
        {"id": "active", "prompt": "x", "durationSeconds": 5, "enabled": True},
        {"id": "disabled", "prompt": "y", "durationSeconds": 5, "enabled": False, "latentRelay": True},
    ]
    plan = load_plan(data)

    selected = select_shot_for_postprocess(plan, "disabled")

    assert selected.shot.id == "disabled"
    assert selected.latent_relay is False
    assert selected.second_sampling is True
    assert selected.super_resolution_second_pass is True
    assert selected.seed == plan.base_seed + 1


def test_output_paths_are_relative_and_sanitized():
    plan = load_plan(DEFAULT_PLAN)
    paths = build_output_paths(plan, plan.active_shots[0], 0)
    assert paths.run_prefix == "TheodoreDirector/Theodore_Project_run_001"
    assert paths.video_prefix.endswith("/shot_001_video")
    assert paths.latent_prefix.endswith("/latent_context")
    assert paths.latent_save_prefix.endswith("/latent_context/clip")
    assert paths.tail_prefix.endswith("/tail_frames/shot_001_tail")
    assert paths.shot_result_path.endswith("/shot_results/shot_001_result.json")
    # 视频仍平铺在项目目录；latent、尾帧和分镜结果各自只增加一层目录。
    assert len(paths.video_prefix.split("/")) == 3
    assert len(paths.latent_save_prefix.split("/")) == 4
    assert len(paths.tail_prefix.split("/")) == 4
    assert len(paths.shot_result_path.split("/")) == 4
    assert ".." not in paths.video_prefix


def test_output_paths_do_not_change_with_active_index():
    plan = load_plan(DEFAULT_PLAN)
    first = build_output_paths(plan, plan.active_shots[0], 0)
    shifted = build_output_paths(plan, plan.active_shots[0], 7)

    assert shifted.video_prefix == first.video_prefix
    assert shifted.tail_prefix == first.tail_prefix
    assert shifted.shot_result_path == first.shot_result_path


def test_shot_result_candidates_prefer_new_folder_and_keep_legacy_fallback(tmp_path):
    plan = load_plan(DEFAULT_PLAN)
    paths = build_output_paths(plan, plan.active_shots[0], 0)

    candidates = shot_result_candidates(tmp_path, paths)

    assert candidates[0] == (
        tmp_path / "TheodoreDirector" / "Theodore_Project_run_001" / "shot_results" / "shot_001_result.json"
    ).resolve()
    assert candidates[1] == (
        tmp_path / "TheodoreDirector" / "Theodore_Project_run_001" / "shot_001_result.json"
    ).resolve()


def test_shot_result_candidates_find_all_legacy_active_indexes(tmp_path):
    plan = load_plan(DEFAULT_PLAN)
    paths = build_output_paths(plan, plan.active_shots[0], 0)
    result_dir = tmp_path / "TheodoreDirector" / "Theodore_Project_run_001" / "shot_results"
    result_dir.mkdir(parents=True)
    old_result = result_dir / "004_shot_001_result.json"
    old_result.write_text("{}", encoding="utf-8")

    assert old_result.resolve() in shot_result_candidates(tmp_path, paths)


def test_resolve_output_file_uses_expected_folder_for_bare_save_name(tmp_path):
    expected_dir = tmp_path / "TheodoreDirector" / "Project_run_001" / "tail_frames"
    expected_dir.mkdir(parents=True)
    tail = expected_dir / "001_shot_001_tail_00001_.png"
    tail.write_bytes(b"png")

    resolved = resolve_output_file(
        tmp_path,
        tail.name,
        (".png",),
        expected_prefix="TheodoreDirector/Project_run_001/tail_frames/001_shot_001_tail",
    )

    assert resolved == tail.resolve()


def test_resolve_output_file_falls_back_to_expected_latent_prefix(tmp_path):
    expected_dir = tmp_path / "TheodoreDirector" / "Project_run_001" / "latent_context"
    expected_dir.mkdir(parents=True)
    latent = expected_dir / "clip_00003.safetensors"
    latent.write_bytes(b"latent")

    resolved = resolve_output_file(
        tmp_path,
        "",
        (".safetensors",),
        expected_prefix="TheodoreDirector/Project_run_001/latent_context/clip",
    )

    assert resolved == latent.resolve()


def test_find_generated_video_uses_the_same_expected_prefix(tmp_path):
    run_dir = tmp_path / "TheodoreDirector" / "Demo_run_001"
    run_dir.mkdir(parents=True)
    older = run_dir / "001_shot_001_video_00001.mp4"
    newer = run_dir / "shot_001_video_00002.webm"
    older.write_bytes(b"old")
    newer.write_bytes(b"new")
    # Windows 上连续写入可能得到相同时间戳，显式制造稳定的先后顺序。
    os.utime(older, ns=(1_000_000_000, 1_000_000_000))
    os.utime(newer, ns=(2_000_000_000, 2_000_000_000))

    found = find_generated_video(tmp_path, "Demo", "run_001", "shot_001", 0)

    assert found == newer.resolve()
    assert find_generated_videos(tmp_path, "Demo", "run_001", "shot_001", 0) == [
        newer.resolve(),
        older.resolve(),
    ]
    # active index 改变后仍按 shot ID 找到同一组历史结果。
    assert find_generated_videos(tmp_path, "Demo", "run_001", "shot_001", 8) == [
        newer.resolve(),
        older.resolve(),
    ]
    assert find_generated_video(tmp_path, "Demo", "run_001", "shot_002", 1) is None
    assert find_generated_videos(tmp_path, "Demo", "run_001", "shot_002", 1) == []


def test_out_of_range_queue_index_fails():
    plan = load_plan(DEFAULT_PLAN)
    with pytest.raises(IndexError):
        select_shot(plan, 1)
