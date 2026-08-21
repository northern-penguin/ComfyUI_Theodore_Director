import copy

import pytest

from theodore_director.paths import build_output_paths
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
    assert paths.video_prefix.startswith("TheodoreDirector/")
    assert paths.video_prefix.endswith("001_shot_001")
    assert ".." not in paths.video_prefix


def test_out_of_range_queue_index_fails():
    plan = load_plan(DEFAULT_PLAN)
    with pytest.raises(IndexError):
        select_shot(plan, 1)

