"""将已填写素材和分镜的 Theodore V6 工作流升级到当前逐镜头协议。"""

from __future__ import annotations

import argparse
import json
import os
from pathlib import Path
import tempfile
from typing import Any


def _one(nodes: list[dict[str, Any]], kind: str) -> dict[str, Any]:
    matches = [node for node in nodes if node.get("type") == kind]
    if len(matches) != 1:
        raise ValueError(f"节点 {kind} 数量应为 1，实际为 {len(matches)}")
    return matches[0]


def upgrade(data: dict[str, Any]) -> dict[str, Any]:
    """仅调整协议字段和两个已有分支，不改动用户其他节点或素材。"""
    nodes = data.get("nodes") or []
    by_id = {node["id"]: node for node in nodes}
    select = _one(nodes, "TheodoreDirector_SelectShot")
    h3 = _one(nodes, "MiniMaxH3ReferenceToVideo")
    context = _one(nodes, "MiniMaxH3MotionContext")
    project = _one(nodes, "TheodoreDirector_Project")

    branches = [node for node in nodes if node.get("type") == "ImpactConditionalBranch"]
    conditioning = next((node for node in branches if node.get("outputs", [{}])[0].get("type") == "CONDITIONING"), None)
    trim = next((node for node in branches if node.get("outputs", [{}])[0].get("type") == "INT"), None)
    if conditioning is None or trim is None:
        raise ValueError("找不到 Conditioning/INT 两个 ImpactConditionalBranch")

    links = [list(item) for item in data.get("links", [])]
    links_by_id = {item[0]: item for item in links}

    def input_origin(node: dict[str, Any], input_name: str) -> dict[str, Any]:
        input_item = next(item for item in node["inputs"] if item["name"] == input_name)
        link_id = input_item.get("link")
        if link_id is None or link_id not in links_by_id:
            raise ValueError(f"输入 {node['id']}.{input_name} 没有有效连线")
        return by_id[links_by_id[link_id][1]]

    # 旧接线中 INT 分支的一边必须是 0 裁切 PrimitiveInt；兼容已升级文件的反复执行。
    trim_origins = [input_origin(trim, "tt_value"), input_origin(trim, "ff_value")]
    zero = next((node for node in trim_origins if node.get("type") == "PrimitiveInt"), None)
    if zero is None:
        raise ValueError("裁切分支缺少 0 帧 PrimitiveInt")

    outputs = select.setdefault("outputs", [])
    if len(outputs) == 14:
        outputs.append({"name": "latent relay", "type": "BOOLEAN", "links": None})
    elif len(outputs) < 15:
        raise ValueError("SelectShot 输出端口数量异常")
    else:
        outputs[14]["name"] = "latent relay"
        outputs[14]["type"] = "BOOLEAN"
    if len(outputs) == 15:
        outputs.append({"name": "second sampling", "type": "BOOLEAN", "links": None})
    elif len(outputs) < 16:
        raise ValueError("SelectShot 二次采样输出端口数量异常")
    else:
        outputs[15]["name"] = "second sampling"
        outputs[15]["type"] = "BOOLEAN"

    next_link = max((item[0] for item in links), default=0) + 1

    def connect(origin: int, origin_slot: int, target: int, target_slot: int, kind: str) -> None:
        nonlocal next_link, links
        links = [item for item in links if not (item[3] == target and item[4] == target_slot)]
        links.append([next_link, origin, origin_slot, target, target_slot, kind])
        next_link += 1

    # BOOL=true 选择 Motion Context，false 选择原始 H3 条件和 0 裁切。
    connect(context["id"], 0, conditioning["id"], 0, "CONDITIONING")
    connect(h3["id"], 0, conditioning["id"], 1, "CONDITIONING")
    connect(select["id"], 14, conditioning["id"], 2, "BOOLEAN")
    connect(context["id"], 1, trim["id"], 0, "INT")
    connect(zero["id"], 0, trim["id"], 1, "INT")
    connect(select["id"], 14, trim["id"], 2, "BOOLEAN")

    # 重建节点端口的 link 索引，避免保留被替换的旧连线 ID。
    for node in nodes:
        for input_item in node.get("inputs", []):
            input_item["link"] = None
        for output in node.get("outputs", []):
            output["links"] = None
    for link_id, origin, origin_slot, target, target_slot, _kind in links:
        by_id[target]["inputs"][target_slot]["link"] = link_id
        current = by_id[origin]["outputs"][origin_slot].get("links") or []
        current.append(link_id)
        by_id[origin]["outputs"][origin_slot]["links"] = current

    plan = json.loads(project["widgets_values"][0])
    plan["schemaVersion"] = 4
    for shot in plan.get("shots", []):
        shot.setdefault("latentRelay", True)
        shot.setdefault("secondSampling", True)
    project["widgets_values"][0] = json.dumps(plan, ensure_ascii=False, indent=2)

    data["links"] = sorted(links, key=lambda item: item[0])
    data["last_link_id"] = max(item[0] for item in links)
    data.setdefault("extra", {}).setdefault("theodoreDirector", {})["schemaVersion"] = 4
    return data


def write_json_atomic(path: Path, data: dict[str, Any]) -> None:
    """在目标目录写临时文件后原子替换，避免工作流只写入一半。"""
    handle, temp_name = tempfile.mkstemp(prefix=f".{path.name}.", suffix=".tmp", dir=path.parent)
    try:
        with os.fdopen(handle, "w", encoding="utf-8", newline="\n") as stream:
            json.dump(data, stream, ensure_ascii=False, separators=(",", ":"))
        os.replace(temp_name, path)
    except Exception:
        try:
            os.unlink(temp_name)
        except FileNotFoundError:
            pass
        raise


def main() -> None:
    parser = argparse.ArgumentParser()
    parser.add_argument("source", type=Path)
    parser.add_argument("output", type=Path, nargs="?")
    args = parser.parse_args()
    output = args.output or args.source
    data = json.loads(args.source.read_text(encoding="utf-8"))
    upgraded = upgrade(data)
    output.parent.mkdir(parents=True, exist_ok=True)
    write_json_atomic(output, upgraded)
    print(f"Theodore protocol v4: {len(upgraded['nodes'])} nodes, {len(upgraded['links'])} links -> {output}")


if __name__ == "__main__":
    main()
