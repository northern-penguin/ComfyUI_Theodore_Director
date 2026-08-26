import json
from pathlib import Path

from theodore_director.schema import load_plan


COPYRIGHT_NOTICE = "### 本工作流由抖音博主Theodore（抖音号:q1503623946）以及 b站up主 南极来の企鹅制作。"
WORKFLOW_NAME = "V7导播台.json"
REQUIRED_DIRECTOR_NODES = {
    "TheodoreDirector_Project",
    "TheodoreDirector_SelectShot",
    "TheodoreDirector_H3Adapter",
    "TheodoreDirector_OutputPaths",
    "TheodoreDirector_CommitResult",
}


def load_distributed_workflow():
    path = Path(__file__).parents[1] / "workflows" / WORKFLOW_NAME
    return json.loads(path.read_text(encoding="utf-8"))


def test_distributed_workflow_is_structurally_valid():
    data = load_distributed_workflow()
    nodes = data["nodes"]
    node_ids = {item["id"] for item in nodes}
    assert len(node_ids) == len(nodes)
    # ComfyUI 链接格式为：link id、源节点、源槽位、目标节点、目标槽位、类型。
    assert all(link[1] in node_ids and link[3] in node_ids for link in data["links"])
    assert REQUIRED_DIRECTOR_NODES <= {item["type"] for item in nodes}

    project = next(item for item in nodes if item["type"] == "TheodoreDirector_Project")
    plan = load_plan(project["widgets_values"][0])
    assert len(plan.active_shots) >= 1


def test_v7_dual_sampling_topology_is_preserved():
    data = load_distributed_workflow()
    types = [item["type"] for item in data["nodes"]]
    assert types.count("SamplerCustomAdvanced") == 2
    assert types.count("RTXVideoSuperResolution") == 1
    assert types.count("ImpactConditionalBranch") >= 1


def test_distributed_workflow_contains_copyright_notice():
    """确保更新示例工作流时不会丢失作者署名。"""
    data = load_distributed_workflow()
    notes = [item for item in data["nodes"] if item.get("type") == "MarkdownNote"]
    assert any(COPYRIGHT_NOTICE in item["widgets_values"][0] for item in notes)
