import json

import pytest

from theodore_director.errors import PlanValidationError
from theodore_director.schema import DEFAULT_PLAN_JSON, SecondSamplingMode, load_plan


def test_default_plan_loads_and_hash_is_stable():
    assert json.loads(DEFAULT_PLAN_JSON)["schemaVersion"] == 5
    plan = load_plan(DEFAULT_PLAN_JSON)
    assert plan.active_shots[0].id == "shot_001"
    assert len(plan.plan_hash) == 64
    assert load_plan(plan.canonical_json).plan_hash == plan.plan_hash


def test_project_id_is_preserved_but_does_not_affect_generation_hash():
    first = json.loads(DEFAULT_PLAN_JSON)
    second = json.loads(DEFAULT_PLAN_JSON)
    first["project"]["id"] = "internal-a"
    second["project"]["id"] = "internal-b"

    first_plan = load_plan(first)
    second_plan = load_plan(second)

    assert first_plan.project_id == "internal-a"
    assert second_plan.project_id == "internal-b"
    assert first_plan.plan_hash == second_plan.plan_hash


def test_v1_plan_without_project_id_migrates_to_stable_v5_plan():
    legacy = json.loads(DEFAULT_PLAN_JSON)
    legacy["schemaVersion"] = 1
    legacy["project"].pop("id")

    first = load_plan(legacy)
    second = load_plan(legacy)

    assert first.schema_version == 5
    assert first.project_id.startswith("td_")
    assert first.project_id == second.project_id
    assert first.active_shots[0].latent_relay is True
    assert first.active_shots[0].second_sampling is True


def test_v2_plan_without_relay_switch_preserves_existing_continuity():
    legacy = json.loads(DEFAULT_PLAN_JSON)
    legacy["schemaVersion"] = 2
    legacy["shots"][0].pop("latentRelay")

    migrated = load_plan(legacy)

    assert migrated.schema_version == 5
    assert migrated.active_shots[0].latent_relay is True


def test_v4_second_sampling_bool_migrates_to_processing_mode():
    legacy = json.loads(DEFAULT_PLAN_JSON)
    legacy["schemaVersion"] = 4
    legacy["shots"][0].pop("secondSamplingMode")
    legacy["shots"][0]["secondSampling"] = True

    migrated = load_plan(legacy)

    assert migrated.schema_version == 5
    assert migrated.active_shots[0].second_sampling is True
    assert migrated.active_shots[0].second_sampling_mode is SecondSamplingMode.SUPER_RESOLUTION_SECOND_PASS

    legacy["shots"][0]["secondSampling"] = False
    assert load_plan(legacy).active_shots[0].second_sampling_mode is SecondSamplingMode.OFF


@pytest.mark.parametrize(
    ("mode", "legacy_second_sampling"),
    [
        ("off", False),
        ("super_resolution_second_pass", True),
        ("latent_upscale_second_pass", True),
        ("super_resolution_only", False),
    ],
)
def test_all_processing_modes_round_trip(mode, legacy_second_sampling):
    data = json.loads(DEFAULT_PLAN_JSON)
    data["shots"][0]["secondSamplingMode"] = mode

    plan = load_plan(data)

    assert plan.active_shots[0].second_sampling_mode.value == mode
    assert plan.active_shots[0].second_sampling is legacy_second_sampling
    assert json.loads(plan.canonical_json)["shots"][0]["secondSamplingMode"] == mode


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


def test_unknown_processing_mode_is_rejected():
    data = json.loads(DEFAULT_PLAN_JSON)
    data["shots"][0]["secondSamplingMode"] = "future_unknown_mode"
    with pytest.raises(PlanValidationError, match="高清处理模式无效"):
        load_plan(data)
