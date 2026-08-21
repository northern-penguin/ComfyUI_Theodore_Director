"""把原始 Impact V6 单/双采工作流机械转换为 Theodore Director 版本。"""

from __future__ import annotations

import argparse
import copy
import json
from pathlib import Path
from typing import Any


REMOVE_IDS = {
    131, 200, 203, 252,
    261, 262, 263, 264, 265, 266, 267, 268, 309,
    280, 281, 282, 283, 315, 316, 319, 320, 324, 327, 363,
    386, 387, 396, 397, 398,
    399, 400, 401, 402, 403, 404, 405, 406, 407,
}


def default_plan(variant: str) -> dict[str, Any]:
    return {
        "schemaVersion": 1,
        "project": {
            "id": f"impact_v6_{variant}",
            "name": f"Impact V6 Theodore {variant.title()}",
            "runId": "run_001",
        },
        "defaults": {"fps": 24, "baseSeed": 123456790},
        "promptPrefix": "",
        "promptSuffix": "",
        "continuity": {
            "mode": "h3_av_latent",
            "videoContextFrames": 22,
            "audioContextFrames": 24,
            "durationMode": "final_output",
        },
        "assets": [],
        "shots": [
            {
                "id": f"shot_{index:03d}",
                "title": f"镜头 {index:02d}",
                "prompt": f"请在 Theodore 导播台中填写镜头 {index:02d} 的 H3 提示词。",
                "negativePrompt": "",
                "durationSeconds": 5,
                "enabled": True,
                "seed": None,
                "disabledAssetIds": [],
            }
            for index in range(1, 13)
        ],
    }


def socket(name: str, kind: str, *, widget: bool = False, optional: bool = False) -> dict[str, Any]:
    value: dict[str, Any] = {"name": name, "type": kind, "link": None}
    if widget:
        value["widget"] = {"name": name}
    if optional:
        value["shape"] = 7
    return value


def output(name: str, kind: str) -> dict[str, Any]:
    return {"name": name, "type": kind, "links": None}


def node(node_id: int, kind: str, pos: list[float], size: list[float], inputs, outputs, widgets, title: str):
    return {
        "id": node_id,
        "type": kind,
        "pos": pos,
        "size": size,
        "flags": {},
        "order": node_id,
        "mode": 0,
        "inputs": inputs,
        "outputs": outputs,
        "title": title,
        "properties": {"Node name for S&R": kind},
        "widgets_values": widgets,
    }


def director_nodes(first_id: int, variant: str) -> dict[str, dict[str, Any]]:
    ids = {name: first_id + index for index, name in enumerate(("project", "shot", "adapter", "paths", "commit"))}
    plan_json = json.dumps(default_plan(variant), ensure_ascii=False, indent=2)
    nodes = {
        "project": node(
            ids["project"], "TheodoreDirector_Project", [-3050, 650], [430, 110],
            [socket("plan_json", "STRING", widget=True)],
            [output("PLAN", "THEODORE_DIRECTOR_PLAN"), output("plan hash", "STRING"), output("project name", "STRING"), output("active shots", "INT")],
            [plan_json], "① Theodore 项目与可视化导播台",
        ),
        "shot": node(
            ids["shot"], "TheodoreDirector_SelectShot", [-520, -500], [390, 310],
            [socket("plan", "THEODORE_DIRECTOR_PLAN"), socket("queue_index", "INT", widget=True), socket("base_seed", "INT", widget=True), socket("resume_mode", "COMBO", widget=True)],
            [output("SHOT", "THEODORE_DIRECTOR_SHOT"), output("prompt", "STRING"), output("negative_prompt", "STRING"), output("duration_seconds", "FLOAT"), output("seed", "INT"), output("shot_id", "STRING"), output("active_index", "INT"), output("source_index", "INT"), output("active_count", "INT"), output("is_first", "BOOLEAN"), output("is_last", "BOOLEAN"), output("next_index", "INT"), output("has_next", "BOOLEAN"), output("shot_hash", "STRING")],
            [0, 123456790, "resume"], "② 当前分镜（支持续跑）",
        ),
        "adapter": node(
            ids["adapter"], "TheodoreDirector_H3Adapter", [-300, 500], [460, 620],
            [socket("plan", "THEODORE_DIRECTOR_PLAN"), socket("shot", "THEODORE_DIRECTOR_SHOT")],
            [output("H3 prompt", "STRING"), output("H3 frames", "INT"), output("delivery frames", "INT"), output("reference map", "STRING")]
            + [output(f"ref_image_{i}", "IMAGE") for i in range(9)]
            + [output(f"ref_video_{i}", "IMAGE") for i in range(3)]
            + [output(f"ref_video_audio_{i}", "AUDIO") for i in range(3)]
            + [output(f"ref_audio_{i}", "AUDIO") for i in range(3)],
            [], "③ H3 别名编译与媒体槽位适配",
        ),
        "paths": node(
            ids["paths"], "TheodoreDirector_OutputPaths", [2600, 620], [420, 260],
            [socket("plan", "THEODORE_DIRECTOR_PLAN"), socket("shot", "THEODORE_DIRECTOR_SHOT")],
            [output("PATHS", "THEODORE_DIRECTOR_PATHS"), output("video_prefix", "STRING"), output("latent load directory", "STRING"), output("latent_save_prefix", "STRING"), output("tail_prefix", "STRING"), output("manifest_path", "STRING"), output("shot_result_path", "STRING")],
            [], "④ 稳定输出路径",
        ),
        "commit": node(
            ids["commit"], "TheodoreDirector_CommitResult", [4250, 1050], [440, 310],
            [socket("plan", "THEODORE_DIRECTOR_PLAN"), socket("shot", "THEODORE_DIRECTOR_SHOT"), socket("paths", "THEODORE_DIRECTOR_PATHS"), socket("completion_signal", "*"), socket("tail_path", "STRING"), socket("latent_required", "BOOLEAN", widget=True), socket("latent_path", "STRING", optional=True)],
            [output("signal", "*"), output("next_index", "INT"), output("has_next", "BOOLEAN"), output("result_json", "STRING")],
            [True], "⑤ 完成清单提交后触发下一段",
        ),
    }
    return nodes


def transform(source: dict[str, Any], variant: str) -> dict[str, Any]:
    data = copy.deepcopy(source)
    data["nodes"] = [item for item in data["nodes"] if item["id"] not in REMOVE_IDS]
    by_id = {item["id"]: item for item in data["nodes"]}
    required = {92, 119, 120, 125, 129, 130, 136, 202, 271, 272, 314, 321, 325, 326, 328, 329, 388, 389, 390, 391, 392, 393, 394}
    missing = required - by_id.keys()
    if missing:
        raise ValueError(f"{variant} 源工作流缺少关键节点: {sorted(missing)}")

    created = director_nodes(max(by_id) + 1, variant)
    data["nodes"].extend(created.values())
    by_id.update({item["id"]: item for item in created.values()})
    ids = {name: value["id"] for name, value in created.items()}

    # 先保留两端都存在的原链接，然后按目标端口替换导播台接线。
    links = [item for item in data["links"] if item[1] in by_id and item[3] in by_id]
    next_link = max((item[0] for item in links), default=0) + 1

    def connect(origin: int, origin_slot: int, target: int, target_slot: int, kind: str):
        nonlocal next_link, links
        links = [item for item in links if not (item[3] == target and item[4] == target_slot)]
        links.append([next_link, origin, origin_slot, target, target_slot, kind])
        next_link += 1

    connect(ids["project"], 0, ids["shot"], 0, "THEODORE_DIRECTOR_PLAN")
    connect(ids["project"], 0, ids["adapter"], 0, "THEODORE_DIRECTOR_PLAN")
    connect(ids["project"], 0, ids["paths"], 0, "THEODORE_DIRECTOR_PLAN")
    connect(ids["project"], 0, ids["commit"], 0, "THEODORE_DIRECTOR_PLAN")
    connect(ids["project"], 3, 329, 0, "INT")
    connect(314, 0, 329, 1, "INT")
    connect(329, 1, ids["shot"], 1, "INT")
    connect(202, 0, ids["shot"], 2, "INT")
    connect(ids["shot"], 0, ids["adapter"], 1, "THEODORE_DIRECTOR_SHOT")
    connect(ids["shot"], 0, ids["paths"], 1, "THEODORE_DIRECTOR_SHOT")
    connect(ids["shot"], 0, ids["commit"], 1, "THEODORE_DIRECTOR_SHOT")
    connect(ids["shot"], 4, 129, 0, "INT")
    connect(ids["shot"], 9, 390, 2, "BOOLEAN")
    connect(ids["shot"], 9, 391, 2, "BOOLEAN")
    connect(ids["adapter"], 0, 136, 15, "STRING")
    connect(ids["adapter"], 1, 136, 18, "INT")
    for index in range(9):
        connect(ids["adapter"], 4 + index, 136, 3 + index, "IMAGE")
    for output_slot, input_slot in zip(range(13, 16), (12, 20, 21)):
        connect(ids["adapter"], output_slot, 136, input_slot, "IMAGE")
    for output_slot, input_slot in zip(range(16, 19), (13, 22, 23)):
        connect(ids["adapter"], output_slot, 136, input_slot, "AUDIO")
    for output_slot, input_slot in zip(range(19, 22), (14, 24, 25)):
        connect(ids["adapter"], output_slot, 136, input_slot, "AUDIO")
    connect(ids["paths"], 0, ids["commit"], 2, "THEODORE_DIRECTOR_PATHS")
    connect(ids["paths"], 1, 92, 1, "STRING")
    connect(ids["paths"], 2, 388, 0, "STRING")
    connect(ids["paths"], 3, 393, 1, "STRING")
    connect(ids["paths"], 4, 321, 2, "STRING")
    connect(329, 1, 388, 1, "INT")
    connect(ids["shot"], 11, 393, 2, "INT")
    connect(321, 0, ids["commit"], 3, "*")
    connect(321, 0, ids["commit"], 4, "STRING")
    connect(393, 0, ids["commit"], 6, "STRING")
    connect(ids["commit"], 0, 325, 0, "*")
    connect(ids["commit"], 1, 325, 2, "INT")
    connect(ids["commit"], 2, 326, 1, "BOOLEAN")

    # 完全重建端口上的链接索引，杜绝删除旧节点后遗留悬空 ID。
    for item in data["nodes"]:
        for input_item in item.get("inputs", []):
            input_item["link"] = None
        for output_item in item.get("outputs", []):
            output_item["links"] = None
    for link_id, origin, origin_slot, target, target_slot, _kind in links:
        by_id[target]["inputs"][target_slot]["link"] = link_id
        current = by_id[origin]["outputs"][origin_slot].get("links") or []
        current.append(link_id)
        by_id[origin]["outputs"][origin_slot]["links"] = current

    data["links"] = sorted(links, key=lambda item: item[0])
    data["last_node_id"] = max(by_id)
    data["last_link_id"] = max(item[0] for item in links)
    for item in data["nodes"]:
        item["order"] = data["nodes"].index(item)

    # 移除已被结果清单替代的防重复子图定义，并更新工作流说明。
    subgraphs = data.get("definitions", {}).get("subgraphs", [])
    data.get("definitions", {})["subgraphs"] = [item for item in subgraphs if item.get("id") != "06a4597e-85a3-445c-9d74-b3a3b8f5e97a"]
    data["groups"] = [group for group in data.get("groups", []) if group.get("id") not in {1, 12}]
    data["groups"].append({"id": max([group.get("id", 0) for group in data["groups"]] + [0]) + 1, "title": "01 Theodore 通用导播台 + H3 适配器", "bounding": [-3120, -570, 3310, 1780], "color": "#2f8f78", "flags": {}})
    for item in data["nodes"]:
        if item["id"] == 290 and item["type"] == "MarkdownNote":
            item["widgets_values"] = ["## Theodore Director 开源工作流\n\n由通用导播台、H3 适配器和 Impact Pack 队列组成。计划数据嵌入工作流；每段只有在视频、尾帧与 AV latent 清单全部提交后才进入下一段。\n\n工作流与 Theodore 节点按 Apache-2.0 发布；模型及第三方节点遵循各自许可证。"]
    data.setdefault("extra", {})["theodoreDirector"] = {"schemaVersion": 1, "variant": variant, "generated": True}
    return data


def validate_workflow(data: dict[str, Any]) -> None:
    nodes = {item["id"]: item for item in data["nodes"]}
    types = {item["type"] for item in data["nodes"]}
    expected = {"TheodoreDirector_Project", "TheodoreDirector_SelectShot", "TheodoreDirector_H3Adapter", "TheodoreDirector_OutputPaths", "TheodoreDirector_CommitResult", "ImpactSetWidgetValue", "ImpactQueueTrigger", "MiniMaxH3ReferenceToVideo"}
    if missing := expected - types:
        raise ValueError(f"缺少节点类型: {sorted(missing)}")
    link_ids = {item[0] for item in data["links"]}
    if len(link_ids) != len(data["links"]):
        raise ValueError("链接 ID 重复")
    for link_id, origin, origin_slot, target, target_slot, _kind in data["links"]:
        if origin not in nodes or target not in nodes:
            raise ValueError(f"链接 {link_id} 指向不存在的节点")
        if origin_slot >= len(nodes[origin].get("outputs", [])) or target_slot >= len(nodes[target].get("inputs", [])):
            raise ValueError(f"链接 {link_id} 端口越界")
        if nodes[target]["inputs"][target_slot].get("link") != link_id:
            raise ValueError(f"链接 {link_id} 未写入目标端口")
    for item in data["nodes"]:
        for output_item in item.get("outputs", []):
            if output_item.get("links") and not set(output_item["links"]).issubset(link_ids):
                raise ValueError(f"节点 {item['id']} 存在悬空输出链接")

    # 除“存在”之外，再验证融合边界的来源，防止端口数量正确但误接到旧逻辑。
    by_type = {kind: [item for item in data["nodes"] if item["type"] == kind] for kind in expected}
    for kind, items in by_type.items():
        if len(items) != 1:
            raise ValueError(f"关键节点 {kind} 数量应为 1，实际为 {len(items)}")
    links_by_id = {item[0]: item for item in data["links"]}

    def origin_type(target_type: str, input_name: str) -> str:
        target = by_type[target_type][0]
        target_input = next(item for item in target["inputs"] if item["name"] == input_name)
        if target_input.get("link") is None:
            raise ValueError(f"{target_type}.{input_name} 未连接")
        return nodes[links_by_id[target_input["link"]][1]]["type"]

    if origin_type("MiniMaxH3ReferenceToVideo", "prompt") != "TheodoreDirector_H3Adapter":
        raise ValueError("H3 prompt 未由 Theodore H3 适配器提供")
    if origin_type("MiniMaxH3ReferenceToVideo", "length") != "TheodoreDirector_H3Adapter":
        raise ValueError("H3 length 未由 Theodore H3 适配器提供")
    if origin_type("ImpactSetWidgetValue", "signal") != "TheodoreDirector_CommitResult":
        raise ValueError("Impact 游标在结果清单提交之前被触发")
    if origin_type("ImpactQueueTrigger", "mode") != "TheodoreDirector_CommitResult":
        raise ValueError("Impact 队列终止条件未使用 Theodore has_next")
    obsolete = {"TextSplitByDelimiter", "PrimitiveStringMultiline", "ImagePass", "easy isFileExist"}
    if present := obsolete & {item["type"] for item in data["nodes"]}:
        raise ValueError(f"仍含已替换的旧导播逻辑: {sorted(present)}")


def main() -> None:
    parser = argparse.ArgumentParser()
    parser.add_argument("source", type=Path)
    parser.add_argument("output", type=Path)
    parser.add_argument("--variant", choices=("single", "dual"), required=True)
    args = parser.parse_args()
    source = json.loads(args.source.read_text(encoding="utf-8"))
    result = transform(source, args.variant)
    validate_workflow(result)
    args.output.parent.mkdir(parents=True, exist_ok=True)
    args.output.write_text(json.dumps(result, ensure_ascii=False, separators=(",", ":")), encoding="utf-8")
    print(f"{args.variant}: {len(result['nodes'])} nodes, {len(result['links'])} links -> {args.output}")


if __name__ == "__main__":
    main()
