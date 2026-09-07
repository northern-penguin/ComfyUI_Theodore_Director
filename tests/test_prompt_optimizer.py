import asyncio

import pytest

import theodore_director.ollama as ollama
from theodore_director.ollama import ollama_base_url
from theodore_director.prompt_optimizer import determine_prompt_mode, parse_optimizer_response, validate_optimized_prompt
from theodore_director.schema import load_plan


def make_plan(prompt: str, duration: float = 5):
    return load_plan({
        "schemaVersion": 5,
        "project": {"id": "p", "name": "P", "runId": "1"},
        "defaults": {"fps": 24, "baseSeed": 1},
        "assets": [{
            "id": "hero", "alias": "hero", "kind": "image", "path": "hero.png", "enabled": True,
            "fixed": False, "fixedOrder": 0, "shotIds": [], "includeVideoAudio": False,
        }],
        "shots": [{"id": "s1", "title": "S1", "prompt": prompt, "durationSeconds": duration, "enabled": True}],
    })


def full_prompt(body: str = "[Shot 1] The camera holds on {{ref:hero}}.") -> str:
    return "\n\n".join([
        "subject_definitions:\n<Subject 1> is defined by {{ref:hero}}.",
        "summary:\n[reference generation] A portrait.",
        "retention_analysis:\n<Subject 1>: fully_preserved - identity remains.",
        f"detailed_description:\n{body}",
        "overall_soundscape:\nQuiet room tone.",
        "non_diegetic_music:\nN/A",
    ])


def test_mode_preserves_existing_structure_and_uses_references_for_unstructured_text():
    assert determine_prompt_mode("integrated_multimodal_description: x") == "base"
    assert determine_prompt_mode("summary: x") == "full_reference"
    assert determine_prompt_mode("Use {{ref:hero}}") == "full_reference"
    assert determine_prompt_mode("A plain shot") == "base"


def test_full_prompt_passes_strict_validation():
    source = "Use {{ref:hero}}"
    plan = make_plan(source)
    result = validate_optimized_prompt(plan, plan.shots[0], source, full_prompt())
    assert result.valid


def test_references_and_dialogue_must_remain_exact():
    source = "{{ref:hero}} says <d>[Chinese] 你好！</d>"
    plan = make_plan(source)
    candidate = full_prompt("[Shot 1] The camera holds. <d>[Chinese] 您好！</d>").replace("{{ref:hero}}", "the hero")
    result = validate_optimized_prompt(plan, plan.shots[0], source, candidate)
    assert not result.valid
    assert any("素材引用" in error for error in result.errors)
    assert any("对白" in error for error in result.errors)


def test_shot_timestamps_are_contiguous_and_within_duration():
    source = "Use {{ref:hero}}"
    plan = make_plan(source)
    candidate = full_prompt("[Shot 1] The camera holds. [Shot 3] At 00:05.000, it cuts.")
    result = validate_optimized_prompt(plan, plan.shots[0], source, candidate)
    assert any("连续递增" in error for error in result.errors)
    assert any("必须小于分镜时长" in error for error in result.errors)


def test_base_prompt_requires_three_fields():
    source = "A robot walks."
    plan = make_plan(source)
    candidate = "integrated_multimodal_description:\n[Shot 1] The camera tracks a robot."
    result = validate_optimized_prompt(plan, plan.shots[0], source, candidate)
    assert not result.valid
    assert any("overall_soundscape" in error for error in result.errors)


def test_candidate_cannot_mix_base_and_full_reference_fields():
    source = "A robot walks."
    plan = make_plan(source)
    candidate = "\n\n".join([
        "integrated_multimodal_description:\n[Shot 1] The camera tracks a robot.",
        "summary:\nAn unexpected extra H3 section.",
        "overall_soundscape:\nQuiet room tone.",
        "non_diegetic_music:\nN/A",
    ])
    result = validate_optimized_prompt(plan, plan.shots[0], source, candidate)
    assert not result.valid
    assert any("不允许的 H3 字段" in error for error in result.errors)


def test_response_json_and_local_port_guard():
    prompt, notes = parse_optimizer_response('{"optimizedPrompt":"x","notes":["n"]}')
    assert (prompt, notes) == ("x", ["n"])
    assert ollama_base_url("11434") == "http://127.0.0.1:11434"
    assert ollama_base_url(11434, "localhost") == "http://localhost:11434"
    with pytest.raises(ValueError):
        ollama_base_url("http://example.com")
    with pytest.raises(ValueError):
        ollama_base_url(70000)
    with pytest.raises(ValueError):
        ollama_base_url(11434, "example.com")


def test_ollama_chat_keeps_model_loaded_and_unload_is_explicit(monkeypatch):
    requests = []

    async def fake_request(method, url, payload=None):
        requests.append((method, url, payload))
        if url.endswith("/api/chat"):
            return {"message": {"content": '{"optimizedPrompt":"x","notes":[]}'}}
        return {"done": True}

    monkeypatch.setattr(ollama, "_request_json", fake_request)
    content = asyncio.run(ollama.chat(11434, "qwen", [{"role": "user", "content": "x"}], {"type": "object"}))
    asyncio.run(ollama.unload_model(11434, "qwen"))

    assert "optimizedPrompt" in content
    assert requests[0][2]["keep_alive"] == -1
    assert requests[1][1].endswith("/api/generate")
    assert requests[1][2]["keep_alive"] == 0
