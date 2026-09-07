"""H3 提示词严格校验与本机 Ollama 优化支持。"""

from __future__ import annotations

from dataclasses import dataclass, replace
import json
import re
from typing import Any

from .errors import ReferenceResolutionError
from .references import REFERENCE_TOKEN, resolve_references
from .schema import Plan, Shot

BASE_FIELDS = (
    "integrated_multimodal_description",
    "overall_soundscape",
    "non_diegetic_music",
)
FULL_FIELDS = (
    "subject_definitions",
    "summary",
    "retention_analysis",
    "detailed_description",
    "overall_soundscape",
    "non_diegetic_music",
)
FIELD_LINE = re.compile(r"(?m)^([a-z_]+)\s*:")
SHOT_MARKER = re.compile(r"\[Shot\s+(\d+)](?:\s+At\s+(\d{2}):(\d{2})\.(\d{3}),)?", re.IGNORECASE)
DIALOGUE = re.compile(r"<d>\[([^]\r\n]+)]([\s\S]*?)</d>", re.IGNORECASE)


@dataclass(frozen=True)
class PromptValidation:
    mode: str
    errors: tuple[str, ...]
    warnings: tuple[str, ...]

    @property
    def valid(self) -> bool:
        return not self.errors

    def to_dict(self) -> dict[str, Any]:
        return {
            "mode": self.mode,
            "valid": self.valid,
            "errors": list(self.errors),
            "warnings": list(self.warnings),
        }


def determine_prompt_mode(prompt: str) -> str:
    """优先保持已有结构；无结构时按是否存在引用选择模板。"""
    fields = [match.group(1) for match in FIELD_LINE.finditer(prompt)]
    if any(field in fields for field in FULL_FIELDS[:4]):
        return "full_reference"
    if any(field in fields for field in BASE_FIELDS):
        return "base"
    return "full_reference" if REFERENCE_TOKEN.search(prompt) else "base"


def _field_body(prompt: str, field: str) -> str:
    matches = list(FIELD_LINE.finditer(prompt))
    for index, match in enumerate(matches):
        if match.group(1) != field:
            continue
        end = matches[index + 1].start() if index + 1 < len(matches) else len(prompt)
        return prompt[match.end():end].strip()
    return ""


def _references(prompt: str) -> set[str]:
    return {match.group(1).strip() for match in REFERENCE_TOKEN.finditer(prompt)}


def _dialogues(prompt: str) -> list[tuple[str, str]]:
    return [(match.group(1), match.group(2)) for match in DIALOGUE.finditer(prompt)]


def validate_optimized_prompt(plan: Plan, shot: Shot, original_prompt: str, candidate: str) -> PromptValidation:
    """严格校验 AI 候选；不会改变普通用户提示词的保存规则。"""
    errors: list[str] = []
    warnings: list[str] = []
    mode = determine_prompt_mode(original_prompt)
    required = FULL_FIELDS if mode == "full_reference" else BASE_FIELDS
    actual_fields = [match.group(1) for match in FIELD_LINE.finditer(candidate)]
    known_fields = set(BASE_FIELDS) | set(FULL_FIELDS)
    actual_h3_fields = [field for field in actual_fields if field in known_fields]
    required_positions: list[int] = []

    if not candidate.strip():
        errors.append("优化结果不能为空")
    for field in required:
        count = actual_fields.count(field)
        if count != 1:
            errors.append(f"字段 {field}: 必须且只能出现一次，当前为 {count} 次")
        elif field in actual_fields:
            required_positions.append(actual_fields.index(field))
    if len(required_positions) == len(required) and required_positions != sorted(required_positions):
        errors.append("H3 字段顺序不正确")
    # 只约束 H3 协议字段；正文中的普通“key:”文本不应被误判为额外章节。
    unexpected_fields = [field for field in actual_h3_fields if field not in required]
    if unexpected_fields:
        errors.append(f"当前结构包含不允许的 H3 字段: {sorted(set(unexpected_fields))}")
    if all(actual_h3_fields.count(field) == 1 for field in required) and actual_h3_fields != list(required):
        errors.append(f"H3 字段必须严格按以下顺序出现: {list(required)}")

    source_refs = _references(original_prompt)
    candidate_refs = _references(candidate)
    if source_refs != candidate_refs:
        missing = sorted(source_refs - candidate_refs)
        added = sorted(candidate_refs - source_refs)
        if missing:
            errors.append(f"AI 删除或减少了素材引用: {missing}")
        if added:
            errors.append(f"AI 新增了素材引用: {added}")

    source_dialogues = _dialogues(original_prompt)
    candidate_dialogues = _dialogues(candidate)
    if source_dialogues != candidate_dialogues:
        errors.append("AI 改写、删除或新增了 <d>[Language] ...</d> 对白/歌词")
    if candidate.lower().count("<d>") != candidate.lower().count("</d>"):
        errors.append("对白标签 <d> 与 </d> 未正确闭合")
    if candidate.lower().count("<d>") != len(candidate_dialogues):
        errors.append("每个 <d> 标签都必须紧跟 [Language] 标记")

    body_field = "detailed_description" if mode == "full_reference" else "integrated_multimodal_description"
    body = _field_body(candidate, body_field)
    markers = list(SHOT_MARKER.finditer(body))
    if not markers:
        errors.append(f"{body_field} 至少需要一个 [Shot 1]")
    else:
        numbers = [int(match.group(1)) for match in markers]
        if numbers != list(range(1, len(numbers) + 1)):
            errors.append(f"镜头编号必须从 [Shot 1] 连续递增，当前为 {numbers}")
        previous = -1.0
        for index, match in enumerate(markers):
            has_time = match.group(2) is not None
            if index == 0 and has_time:
                errors.append("[Shot 1] 不能携带时间戳")
            if index > 0 and not has_time:
                errors.append(f"[Shot {numbers[index]}] 缺少 At MM:SS.mmm 时间戳")
            if has_time:
                timestamp = int(match.group(2)) * 60 + int(match.group(3)) + int(match.group(4)) / 1000
                if timestamp <= previous:
                    errors.append("后续镜头时间戳必须严格递增")
                if timestamp >= shot.duration_seconds:
                    errors.append(f"镜头时间戳 {timestamp:.3f}s 必须小于分镜时长 {shot.duration_seconds:g}s")
                previous = timestamp

    try:
        resolve_references(plan, replace(shot, prompt=candidate))
    except ReferenceResolutionError as exc:
        errors.append(str(exc))

    if body and not re.search(r"\bcamera\b|\bshot\b", body, re.IGNORECASE):
        warnings.append("主体描述中没有明确的镜头或摄影表达")
    if actual_fields.count("overall_soundscape") == 1 and _field_body(candidate, "overall_soundscape") == "":
        errors.append("overall_soundscape 不能为空；无声音时请明确写 N/A")
    if actual_fields.count("non_diegetic_music") == 1 and _field_body(candidate, "non_diegetic_music") == "":
        errors.append("non_diegetic_music 不能为空；无配乐时请明确写 N/A")

    return PromptValidation(mode, tuple(dict.fromkeys(errors)), tuple(dict.fromkeys(warnings)))


def optimization_context(plan: Plan, shot: Shot) -> dict[str, Any]:
    """只向 LLM 发送生成所需上下文，不泄露素材绝对路径。"""
    index = next((i for i, item in enumerate(plan.shots) if item.id == shot.id), -1)
    available = [
        {
            "alias": asset.alias,
            "kind": asset.kind.value,
            "fixed": asset.fixed,
            "includeVideoAudio": asset.include_video_audio,
        }
        for asset in plan.assets
        if asset.enabled and asset.path and asset.applies_to(shot.id) and asset.id not in shot.disabled_asset_ids
    ]
    adjacent = []
    for nearby in (index - 1, index + 1):
        if 0 <= nearby < len(plan.shots):
            item = plan.shots[nearby]
            adjacent.append({"id": item.id, "title": item.title, "durationSeconds": item.duration_seconds, "prompt": item.prompt})
    return {
        "mode": determine_prompt_mode(shot.prompt),
        "shot": {"id": shot.id, "title": shot.title, "durationSeconds": shot.duration_seconds, "prompt": shot.prompt},
        "promptPrefix": plan.prompt_prefix,
        "promptSuffix": plan.prompt_suffix,
        "availableAssets": available,
        "adjacentShots": adjacent,
    }


def optimizer_system_prompt(mode: str) -> str:
    fields = FULL_FIELDS if mode == "full_reference" else BASE_FIELDS
    return (
        "You are a MiniMax H3 audiovisual prompt editor. Preserve the user's plot intent, the complete set of "
        "{{ref:alias}} tokens, and every exact <d>[Language] ...</d> block. References may be repeated where the H3 "
        "structure needs them, but none may be added or removed. Never invent an asset. "
        "Write prompt fields in English except dialogue, lyrics, and visible source text. The target segment duration is "
        "authoritative. [Shot 1] has no timestamp; later shots use strictly increasing [Shot N] At MM:SS.mmm, markers. "
        f"Return exactly these fields in order: {', '.join(fields)}. Return JSON only with optimizedPrompt and notes."
    )


def repair_system_prompt(mode: str) -> str:
    return optimizer_system_prompt(mode) + " Fix only the listed validator errors and return the complete corrected prompt."


def ollama_response_schema() -> dict[str, Any]:
    return {
        "type": "object",
        "properties": {
            "optimizedPrompt": {"type": "string"},
            "notes": {"type": "array", "items": {"type": "string"}},
        },
        "required": ["optimizedPrompt", "notes"],
    }


def parse_optimizer_response(content: str) -> tuple[str, list[str]]:
    """兼容少量模型错误包裹的 Markdown 代码块，但仍要求主体为 JSON 对象。"""
    value = content.strip()
    if value.startswith("```"):
        value = re.sub(r"^```(?:json)?\s*|\s*```$", "", value, flags=re.IGNORECASE)
    try:
        data = json.loads(value)
    except json.JSONDecodeError as exc:
        raise ValueError(f"Ollama 返回的内容不是有效 JSON: {exc}") from exc
    prompt = data.get("optimizedPrompt")
    notes = data.get("notes", [])
    if not isinstance(prompt, str) or not isinstance(notes, list) or not all(isinstance(item, str) for item in notes):
        raise ValueError("Ollama 返回 JSON 缺少 optimizedPrompt 或 notes 字段")
    return prompt, notes
