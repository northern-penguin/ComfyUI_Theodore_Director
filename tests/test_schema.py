import json

import pytest

from theodore_director.errors import PlanValidationError
from theodore_director.schema import DEFAULT_PLAN_JSON, load_plan


def test_default_plan_loads_and_hash_is_stable():
    plan = load_plan(DEFAULT_PLAN_JSON)
    assert plan.active_shots[0].id == "shot_001"
    assert len(plan.plan_hash) == 64
    assert load_plan(plan.canonical_json).plan_hash == plan.plan_hash


def test_duplicate_aliases_are_case_insensitive():
    data = json.loads(DEFAULT_PLAN_JSON)
    data["assets"] = [
        {"id": "a", "alias": "Hero", "kind": "image", "path": "a.png"},
        {"id": "b", "alias": "hero", "kind": "image", "path": "b.png"},
    ]
    with pytest.raises(PlanValidationError, match="别名重复"):
        load_plan(data)


def test_reserved_audio_suffix_is_rejected():
    data = json.loads(DEFAULT_PLAN_JSON)
    data["assets"] = [{"id": "a", "alias": "walk.audio", "kind": "audio", "path": "a.wav"}]
    with pytest.raises(PlanValidationError, match="保留后缀"):
        load_plan(data)

