import json
from pathlib import Path

from theodore_director.schema import load_plan


COPYRIGHT_NOTICE = "### 本工作流由抖音博主Theodore（抖音号:q1503623946）以及 b站up主 南极来の企鹅制作。"
WORKFLOW_NAME = "V7.2导播台.json"
REQUIRED_DIRECTOR_NODES = {
    "TheodoreDirector_Project",
    "TheodoreDirector_SelectShot",
    "TheodoreDirector_H3Adapter",
    "TheodoreDirector_OutputPaths",
    "TheodoreDirector_CommitResult",
    "TheodoreDirector_PostprocessSecondPassSource",
    "TheodoreDirector_SaveSecondPass",
    "TheodoreDirector_MergeVideos",
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
    # 主流程的一采、内联二采，以及后处理独立二采各有一个采样器。
    assert types.count("SamplerCustomAdvanced") == 3
    assert types.count("RTXVideoSuperResolution") == 2
    assert types.count("ImpactConditionalBranch") >= 1


def test_v7_contains_isolated_postprocess_second_pass_branch():
    data = load_distributed_workflow()
    nodes = {item["id"]: item for item in data["nodes"]}
    source = next(item for item in data["nodes"] if item["type"] == "TheodoreDirector_PostprocessSecondPassSource")
    target = next(item for item in data["nodes"] if item["type"] == "TheodoreDirector_SaveSecondPass")
    assert source["mode"] == 4
    assert target["mode"] == 4

    incoming = {}
    for _link_id, origin, _origin_slot, destination, _destination_slot, _kind in data["links"]:
        incoming.setdefault(destination, set()).add(origin)
    ancestors = set()
    pending = [target["id"]]
    while pending:
        current = pending.pop()
        for origin in incoming.get(current, set()):
            if origin not in ancestors:
                ancestors.add(origin)
                pending.append(origin)

    ancestor_types = {nodes[node_id]["type"] for node_id in ancestors}
    assert source["id"] in ancestors
    assert "RTXVideoSuperResolution" in ancestor_types
    assert "VAEEncodeAudio" in ancestor_types
    assert "SamplerCustomAdvanced" in ancestor_types
    # 局部二采只读取落盘成片，不得重新进入一采、Impact 或连续性支流。
    assert "TheodoreDirector_CommitResult" not in ancestor_types
    assert "ImpactQueueTrigger" not in ancestor_types
    assert "MiniMaxH3MotionContext" not in ancestor_types
    assert "MiniMaxH3MotionContextTrim" not in ancestor_types


def test_distributed_workflow_contains_copyright_notice():
    """确保更新示例工作流时不会丢失作者署名。"""
    data = load_distributed_workflow()
    notes = [item for item in data["nodes"] if item.get("type") == "MarkdownNote"]
    assert any(COPYRIGHT_NOTICE in item["widgets_values"][0] for item in notes)


def test_v72_contains_runninghub_compatible_merge_target():
    data = load_distributed_workflow()
    merge = next(item for item in data["nodes"] if item["type"] == "TheodoreDirector_MergeVideos")
    assert merge["mode"] == 4
    assert merge["widgets_values"] == ["{}"]
    assert merge["properties"]["theodoreDirectorPostprocessRole"] == "merge-target"
    assert data["extra"]["theodoreDirector"]["runningHubMerge"] is True
