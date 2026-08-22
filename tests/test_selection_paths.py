import copy
import os

import pytest

from theodore_director.paths import build_output_paths, find_generated_video, resolve_output_file
from theodore_director.schema import DEFAULT_PLAN, load_plan
from theodore_director.selection import select_shot


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


def test_output_paths_are_relative_and_sanitized():
    plan = load_plan(DEFAULT_PLAN)
    paths = build_output_paths(plan, plan.active_shots[0], 0)
    assert paths.run_prefix == "TheodoreDirector/Theodore_Project_run_001"
    assert paths.video_prefix.endswith("/001_shot_001_video")
    assert paths.latent_prefix.endswith("/latent_context")
    assert paths.latent_save_prefix.endswith("/latent_context/clip")
    assert paths.tail_prefix.endswith("/tail_frames/001_shot_001_tail")
    assert paths.shot_result_path.endswith("/001_shot_001_result.json")
    # 视频仍平铺在项目目录；latent 和尾帧只允许各自增加一层目录。
    assert len(paths.video_prefix.split("/")) == 3
    assert len(paths.latent_save_prefix.split("/")) == 4
    assert len(paths.tail_prefix.split("/")) == 4
    assert ".." not in paths.video_prefix


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
    newer = run_dir / "001_shot_001_video_00002.webm"
    older.write_bytes(b"old")
    newer.write_bytes(b"new")
    # Windows 上连续写入可能得到相同时间戳，显式制造稳定的先后顺序。
    os.utime(older, ns=(1_000_000_000, 1_000_000_000))
    os.utime(newer, ns=(2_000_000_000, 2_000_000_000))

    found = find_generated_video(tmp_path, "Demo", "run_001", "shot_001", 0)

    assert found == newer.resolve()
    assert find_generated_video(tmp_path, "Demo", "run_001", "shot_002", 1) is None


def test_out_of_range_queue_index_fails():
    plan = load_plan(DEFAULT_PLAN)
    with pytest.raises(IndexError):
        select_shot(plan, 1)
