"""旧版整段脚本导入器。"""

from __future__ import annotations

import copy
import json
import re

from .errors import PlanValidationError
from .schema import DEFAULT_PLAN, load_plan


def import_legacy_script(script: str, *, project_name: str, base_seed: int) -> str:
    segments = [part.strip() for part in re.split(r"(?m)^\s*===\s*$", script) if part.strip()]
    if not segments:
        raise PlanValidationError("旧脚本没有可导入的分段")
    shots = []
    for index, segment in enumerate(segments):
        fields = segment.split("&", 2)
        if len(fields) != 3:
            raise PlanValidationError(f"第 {index + 1} 段缺少 '& 时长 &' 结构")
        header, duration_text, body = fields
        try:
            duration = float(duration_text.strip())
        except ValueError as exc:
            raise PlanValidationError(f"第 {index + 1} 段时长无法解析: {duration_text!r}") from exc
        title_lines = [line.strip().lstrip("#").strip() for line in header.splitlines() if line.strip()]
        shots.append(
            {
                "id": f"shot_{index + 1:03d}",
                "title": title_lines[-1] if title_lines else f"Shot {index + 1}",
                "prompt": body.strip(),
                "durationSeconds": duration,
                "enabled": True,
            }
        )
    data = copy.deepcopy(DEFAULT_PLAN)
    data["project"]["name"] = project_name.strip() or "Imported Project"
    data["defaults"]["baseSeed"] = int(base_seed)
    data["continuity"]["durationMode"] = "legacy_generation_duration"
    data["shots"] = shots
    return json.dumps(load_plan(data).to_dict(), ensure_ascii=False, indent=2)

