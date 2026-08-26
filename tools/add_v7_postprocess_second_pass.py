"""为发布版 V7 工作流安装可重复执行的后处理单独二采支流。"""

from __future__ import annotations

import copy
import json
from pathlib import Path


ROOT = Path(__file__).parents[1]
WORKFLOW = ROOT / "workflows" / "V7.2导播台.json"
BRANCH_IDS = set(range(402, 417))


def input_slot(name: str, kind: str, *, widget: bool = False):
    value = {"name": name, "type": kind, "link": None}
    if widget:
        value["widget"] = {"name": name}
    return value


def output_slot(name: str, kind: str):
    return {"name": name, "type": kind, "links": None}


def base_node(node_id: int, kind: str, title: str, pos: list[float], size: list[float]):
    return {
        "id": node_id,
        "type": kind,
        "pos": pos,
        "size": size,
        "flags": {},
        "order": 0,
        "mode": 0,
        "inputs": [],
        "outputs": [],
        "title": title,
        "properties": {"Node name for S&R": kind},
        "widgets_values": [],
    }


def transform(data: dict) -> dict:
    data = copy.deepcopy(data)
    data["nodes"] = [node for node in data["nodes"] if node["id"] not in BRANCH_IDS]
    data["links"] = [link for link in data["links"] if link[1] not in BRANCH_IDS and link[3] not in BRANCH_IDS]
    by_id = {node["id"]: node for node in data["nodes"]}

    source = base_node(402, "TheodoreDirector_PostprocessSecondPassSource", "后处理：读取选中的一采结果", [-1250, 2580], [420, 150])
    source["mode"] = 4
    source["inputs"] = [input_slot("request_json", "STRING", widget=True)]
    source["outputs"] = [
        output_slot("PLAN", "THEODORE_DIRECTOR_PLAN"),
        output_slot("SHOT", "THEODORE_DIRECTOR_SHOT"),
        output_slot("REQUEST", "THEODORE_DIRECTOR_SECOND_PASS_REQUEST"),
        output_slot("images", "IMAGE"),
        output_slot("audio", "AUDIO"),
        output_slot("fps", "FLOAT"),
        output_slot("seed", "INT"),
    ]
    source["widgets_values"] = ["{}"]
    source["properties"]["theodoreDirectorPostprocessRole"] = "second-pass-source"

    adapter = copy.deepcopy(by_id[398])
    adapter.update({"id": 403, "pos": [-760, 2580], "title": "后处理：H3 提示词与参考槽位", "order": 0, "mode": 0})
    for item in adapter["inputs"]:
        item["link"] = None
    for item in adapter["outputs"]:
        item["links"] = None

    rtx = copy.deepcopy(by_id[371])
    rtx.update({"id": 404, "pos": [-760, 2940], "title": "后处理二采 RTX 视频超分 1.5×", "order": 0, "mode": 0})
    vae_encode = copy.deepcopy(by_id[373])
    vae_encode.update({"id": 405, "pos": [-410, 2940], "title": "后处理二采画面 VAE Encode", "order": 0, "mode": 0})

    audio_encode = base_node(406, "VAEEncodeAudio", "后处理二采原音频 VAE Encode", [-410, 3070], [280, 60])
    audio_encode["inputs"] = [input_slot("audio", "AUDIO"), input_slot("vae", "VAE")]
    audio_encode["outputs"] = [output_slot("LATENT", "LATENT")]

    concat = copy.deepcopy(by_id[374])
    concat.update({"id": 407, "pos": [-60, 2970], "title": "合并超分画面与原视频音频 latent", "order": 0, "mode": 0})
    guider = copy.deepcopy(by_id[380])
    guider.update({"id": 408, "pos": [660, 2720], "title": "后处理二采 Guider", "order": 0, "mode": 0})
    scheduler = copy.deepcopy(by_id[382])
    scheduler.update({"id": 409, "pos": [660, 2840], "title": "后处理二采 Scheduler", "order": 0, "mode": 0})
    sampler_select = copy.deepcopy(by_id[381])
    sampler_select.update({"id": 410, "pos": [660, 3000], "title": "后处理二采 Sampler", "order": 0, "mode": 0})
    sampler = copy.deepcopy(by_id[383])
    sampler.update({"id": 411, "pos": [1060, 2800], "title": "后处理单独二采", "order": 0, "mode": 0})
    decode = copy.deepcopy(by_id[384])
    decode.update({"id": 412, "pos": [1360, 2800], "title": "后处理二采画面解码", "order": 0, "mode": 0})
    create_video = copy.deepcopy(by_id[130])
    create_video.update({"id": 413, "pos": [1660, 2800], "title": "保留一采原音轨封装二采视频", "order": 0, "mode": 0})

    save = base_node(414, "TheodoreDirector_SaveSecondPass", "后处理：保存独立二采结果（局部执行目标）", [2010, 2800], [430, 90])
    save["mode"] = 4
    save["inputs"] = [input_slot("video", "VIDEO"), input_slot("request", "THEODORE_DIRECTOR_SECOND_PASS_REQUEST")]
    save["outputs"] = [output_slot("video", "VIDEO"), output_slot("path", "STRING")]
    save["properties"]["theodoreDirectorPostprocessRole"] = "second-pass-target"

    h3 = copy.deepcopy(by_id[136])
    h3.update({"id": 415, "pos": [-260, 2460], "title": "后处理 H3 条件（不生成一采）", "order": 0, "mode": 0})
    random_noise = copy.deepcopy(by_id[129])
    random_noise.update({"id": 416, "pos": [660, 2580], "title": "后处理二采 Seed", "order": 0, "mode": 0})

    new_nodes = [source, adapter, h3, random_noise, rtx, vae_encode, audio_encode, concat, guider, scheduler, sampler_select, sampler, decode, create_video, save]
    for node in new_nodes:
        for item in node.get("inputs", []):
            item["link"] = None
        for item in node.get("outputs", []):
            item["links"] = None
    data["nodes"].extend(new_nodes)
    by_id.update({node["id"]: node for node in new_nodes})

    links = list(data["links"])
    next_link = max(link[0] for link in links) + 1

    def connect(origin: int, origin_slot: int, target: int, target_slot: int, kind: str):
        nonlocal next_link
        links.append([next_link, origin, origin_slot, target, target_slot, kind])
        next_link += 1

    connect(402, 0, 403, 0, "THEODORE_DIRECTOR_PLAN")
    connect(402, 1, 403, 1, "THEODORE_DIRECTOR_SHOT")
    connect(128, 0, 415, 0, "CLIP")
    connect(119, 0, 415, 1, "VAE")
    connect(120, 0, 415, 2, "VAE")
    for index in range(9):
        connect(403, 4 + index, 415, 3 + index, "IMAGE")
    for index in range(3):
        connect(403, 13 + index, 415, 12 + index, "IMAGE")
        connect(403, 16 + index, 415, 15 + index, "AUDIO")
        connect(403, 19 + index, 415, 18 + index, "AUDIO")
    connect(403, 0, 415, 21, "STRING")
    connect(115, 0, 415, 22, "INT")
    connect(115, 1, 415, 23, "INT")
    connect(403, 1, 415, 24, "INT")
    connect(402, 3, 404, 0, "IMAGE")
    connect(404, 0, 405, 0, "IMAGE")
    connect(119, 0, 405, 1, "VAE")
    connect(402, 4, 406, 0, "AUDIO")
    connect(120, 0, 406, 1, "VAE")
    connect(405, 0, 407, 0, "LATENT")
    connect(406, 0, 407, 1, "LATENT")
    connect(379, 0, 408, 0, "MODEL")
    connect(415, 0, 408, 1, "CONDITIONING")
    connect(379, 0, 409, 0, "MODEL")
    connect(402, 6, 416, 0, "INT")
    connect(416, 0, 411, 0, "NOISE")
    connect(408, 0, 411, 1, "GUIDER")
    connect(410, 0, 411, 2, "SAMPLER")
    connect(409, 0, 411, 3, "SIGMAS")
    connect(407, 0, 411, 4, "LATENT")
    connect(411, 0, 412, 0, "LATENT")
    connect(119, 0, 412, 1, "VAE")
    connect(412, 0, 413, 0, "IMAGE")
    connect(402, 4, 413, 1, "AUDIO")
    connect(402, 5, 413, 2, "FLOAT")
    connect(413, 0, 414, 0, "VIDEO")
    connect(402, 2, 414, 1, "THEODORE_DIRECTOR_SECOND_PASS_REQUEST")

    # 重新生成所有端口链接索引，避免一行 JSON 中残留旧链接。
    for node in data["nodes"]:
        for item in node.get("inputs", []):
            item["link"] = None
        for item in node.get("outputs", []):
            item["links"] = None
    for link_id, origin, origin_slot, target, target_slot, _kind in links:
        by_id[target]["inputs"][target_slot]["link"] = link_id
        output = by_id[origin]["outputs"][origin_slot]
        output["links"] = (output.get("links") or []) + [link_id]

    data["links"] = links
    data["last_node_id"] = max(by_id)
    data["last_link_id"] = max(link[0] for link in links)
    for order, node in enumerate(data["nodes"]):
        node["order"] = order
    group_title = "后处理：从一采成片单独执行二采（由导播台局部排队）"
    data["groups"] = [group for group in data.get("groups", []) if group.get("title") != group_title]
    data.setdefault("groups", []).append({
        "id": max([group.get("id", 0) for group in data.get("groups", [])] + [0]) + 1,
        "title": group_title,
        "bounding": [-1330, 2390, 3860, 850],
        "color": "#8c5b2f",
        "flags": {},
    })
    data.setdefault("extra", {}).setdefault("theodoreDirector", {})["postprocessSecondPass"] = True
    return data


def main() -> None:
    data = json.loads(WORKFLOW.read_text(encoding="utf-8"))
    result = transform(data)
    WORKFLOW.write_text(json.dumps(result, ensure_ascii=False, separators=(",", ":")), encoding="utf-8")
    print(f"V7 postprocess second pass: {len(result['nodes'])} nodes, {len(result['links'])} links")


if __name__ == "__main__":
    main()
