from theodore_director.legacy import import_legacy_script
from theodore_director.schema import load_plan


def test_legacy_script_imports_titles_durations_and_prompts():
    value = """## 第一段
& 5 &
第一段提示词
===
## 第二段
& 7.5 &
第二段提示词
"""
    plan = load_plan(import_legacy_script(value, project_name="测试", base_seed=42))
    assert plan.project_name == "测试"
    assert [shot.duration_seconds for shot in plan.shots] == [5, 7.5]
    assert plan.shots[1].prompt == "第二段提示词"
    assert plan.continuity.duration_mode == "legacy_generation_duration"

