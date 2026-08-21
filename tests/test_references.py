import copy
import json

import pytest

from theodore_director.errors import ReferenceResolutionError
from theodore_director.references import resolve_references
from theodore_director.schema import DEFAULT_PLAN, load_plan


def make_plan(assets, prompt):
    data = copy.deepcopy(DEFAULT_PLAN)
    data["assets"] = assets
    data["shots"][0]["prompt"] = prompt
    return load_plan(data)


def image(alias, fixed=False, order=0):
    return {"id": alias, "alias": alias, "kind": "image", "path": f"{alias}.png", "fixed": fixed, "fixedOrder": order}


def video(alias, audio=False, duration=3):
    return {
        "id": alias,
        "alias": alias,
        "kind": "video",
        "path": f"{alias}.mp4",
        "includeVideoAudio": audio,
        "durationSeconds": duration,
        "audioDurationSeconds": duration if audio else None,
    }


def audio(alias, duration=3):
    return {"id": alias, "alias": alias, "kind": "audio", "path": f"{alias}.wav", "durationSeconds": duration}


def test_fixed_assets_precede_prompt_order_and_duplicates_are_deduplicated():
    plan = make_plan(
        [image("fixed", True, 0), image("second"), image("first")],
        "{{ref:first}} then {{ref:second}} and {{ref:first}}",
    )
    result = resolve_references(plan, plan.active_shots[0])
    assert [asset.alias for asset in result.pictures] == ["fixed", "first", "second"]
    assert result.compiled_prompt == "<Picture 2> then <Picture 3> and <Picture 2>"


def test_video_audio_and_standalone_audio_share_three_slot_limit():
    plan = make_plan(
        [image("hero", True), video("walk", True), video("rain", True), audio("voice")],
        "{{ref:walk}} {{ref:rain}} {{ref:voice}}",
    )
    result = resolve_references(plan, plan.active_shots[0])
    mapping = {slot.alias: slot.label for slot in result.slots}
    assert mapping["walk.audio"] == "<Audio 1>"
    assert mapping["rain.audio"] == "<Audio 2>"
    assert mapping["voice"] == "<Audio 3>"


def test_four_total_audio_references_fail():
    plan = make_plan(
        [image("hero", True), video("walk", True), video("rain", True), audio("voice"), audio("music")],
        "{{ref:walk}} {{ref:rain}} {{ref:voice}} {{ref:music}}",
    )
    with pytest.raises(ReferenceResolutionError, match="上限为 3"):
        resolve_references(plan, plan.active_shots[0])


def test_video_audio_does_not_add_mixed_file():
    plan = make_plan([image("hero"), video("walk", True)], "{{ref:hero}} {{ref:walk}}")
    result = resolve_references(plan, plan.active_shots[0])
    assert result.mixed_file_count == 2


def test_ten_pictures_fail_without_silent_truncation():
    assets = [image(f"p{i}") for i in range(10)]
    prompt = " ".join(f"{{{{ref:p{i}}}}}" for i in range(10))
    plan = make_plan(assets, prompt)
    with pytest.raises(ReferenceResolutionError, match="最多允许 9"):
        resolve_references(plan, plan.active_shots[0])


def test_audio_only_is_rejected():
    plan = make_plan([audio("voice")], "{{ref:voice}}")
    with pytest.raises(ReferenceResolutionError, match="不能单独使用"):
        resolve_references(plan, plan.active_shots[0])


def test_raw_label_must_exist_in_active_mapping():
    plan = make_plan([image("hero")], "{{ref:hero}} and <Picture 2>")
    with pytest.raises(ReferenceResolutionError, match="超过本轮"):
        resolve_references(plan, plan.active_shots[0])

