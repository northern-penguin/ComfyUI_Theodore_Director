import json
from pathlib import Path

from theodore_director.schema import load_plan


COPYRIGHT_NOTICE = "### 本工作流由抖音博主Theodore（抖音号:q1503623946）以及 b站up主 南极来の企鹅制作。"
WORKFLOW_NAME = "V7.3导播台.json"
REQUIRED_DIRECTOR_NODES = {
    "TheodoreDirector_Project",
    "TheodoreDirector_SelectShot",
    "TheodoreDirector_H3Adapter",
    "TheodoreDirector_OutputPaths",
    "TheodoreDirector_CommitResult",
    "TheodoreDirector_PostprocessSecondPassSource",
    "TheodoreDirector_SaveSecondPass",
}


def load_distributed_workflow():
    path = Path(__file__).parents[1] / "workflows" / WORKFLOW_NAME
    return json.loads(path.read_text(encoding="utf-8"))


def test_distributed_workflow_is_structurally_valid():
    data = load_distributed_workflow()
    nodes = data["nodes"]
    nodes_by_id = {item["id"]: item for item in nodes}
    node_ids = set(nodes_by_id)
    assert len(node_ids) == len(nodes)
    # ComfyUI 链接格式为：link id、源节点、源槽位、目标节点、目标槽位、类型。
    assert all(link[1] in node_ids and link[3] in node_ids for link in data["links"])
    for link_id, origin, origin_slot, destination, destination_slot, _kind in data["links"]:
        # 除端点外也校验 LiteGraph 在节点槽位中缓存的链接，避免 JSON 能解析但画布断线。
        assert link_id in (nodes_by_id[origin]["outputs"][origin_slot].get("links") or [])
        assert nodes_by_id[destination]["inputs"][destination_slot].get("link") == link_id
    assert REQUIRED_DIRECTOR_NODES <= {item["type"] for item in nodes}

    project = next(item for item in nodes if item["type"] == "TheodoreDirector_Project")
    plan = load_plan(project["widgets_values"][0])
    assert len(plan.active_shots) >= 1
    assert plan.schema_version == 5
    assert data["extra"]["theodoreDirector"]["workflowVersion"] == "7.3"
    assert data["extra"]["theodoreDirector"]["variant"] == "multi_processing"


def test_v73_multi_processing_topology_is_preserved():
    data = load_distributed_workflow()
    types = [item["type"] for item in data["nodes"]]
    # 一采、两种内联二采，以及两种后处理二采各有独立采样器。
    assert types.count("SamplerCustomAdvanced") == 5
    assert types.count("RTXVideoSuperResolution") == 2
    assert types.count("MinimaxH3LatentUpscaler3D") == 2
    assert types.count("MiniMaxH3ConditioningUpscale") == 2
    assert types.count("MiniMaxH3AddNoise") == 4
    assert types.count("ImpactConditionalBranch") >= 7

    selector = next(item for item in data["nodes"] if item["type"] == "TheodoreDirector_SelectShot")
    assert [item["name"] for item in selector["outputs"][-4:]] == [
        "processing mode",
        "super-res 2nd pass",
        "latent upscale 2nd pass",
        "super-res only",
    ]
    links_by_id = {item[0]: item for item in data["links"]}
    nodes_by_id = {item["id"]: item for item in data["nodes"]}
    # 三个精确模式信号都必须进入惰性条件节点；旧 BOOL 不再参与四路选择。
    assert selector["outputs"][15].get("links") is None
    for output in selector["outputs"][17:20]:
        assert len(output["links"]) == 1
        target_id = links_by_id[output["links"][0]][3]
        assert nodes_by_id[target_id]["type"] == "ImpactConditionalBranch"

    first_sampler = next(item for item in data["nodes"] if item["id"] == 125)
    latent_saver = next(item for item in data["nodes"] if item["type"] == "MiniMaxH3MotionContextSaveLatent")
    latent_link = links_by_id[latent_saver["inputs"][0]["link"]]
    assert (latent_link[1], latent_link[2]) == (first_sampler["id"], 0)
    main_latent_split = next(item for item in data["nodes"] if item["id"] == 417)
    denoised_link = links_by_id[main_latent_split["inputs"][0]["link"]]
    assert (denoised_link[1], denoised_link[2]) == (first_sampler["id"], 1)


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
    assert "MinimaxH3LatentUpscaler3D" in ancestor_types
    assert "MiniMaxH3AddNoise" in ancestor_types
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
