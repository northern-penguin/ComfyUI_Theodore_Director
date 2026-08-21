import json
from pathlib import Path

import pytest

from theodore_director.schema import load_plan
from tools.build_v6_workflows import validate_workflow


@pytest.mark.parametrize(
    "name",
    ["Impact_V6_Single_Theodore_Director.json", "Impact_V6_Dual_Theodore_Director.json"],
)
def test_distributed_workflow_is_structurally_valid(name: str):
    path = Path(__file__).parents[1] / "workflows" / name
    data = json.loads(path.read_text(encoding="utf-8"))
    validate_workflow(data)
    project = next(item for item in data["nodes"] if item["type"] == "TheodoreDirector_Project")
    plan = load_plan(project["widgets_values"][0])
    assert len(plan.active_shots) == 12


def test_single_and_dual_sampling_topologies_are_preserved():
    root = Path(__file__).parents[1] / "workflows"
    single = json.loads((root / "Impact_V6_Single_Theodore_Director.json").read_text(encoding="utf-8"))
    dual = json.loads((root / "Impact_V6_Dual_Theodore_Director.json").read_text(encoding="utf-8"))
    assert sum(item["type"] == "SamplerCustomAdvanced" for item in single["nodes"]) == 1
    assert sum(item["type"] == "SamplerCustomAdvanced" for item in dual["nodes"]) == 2
