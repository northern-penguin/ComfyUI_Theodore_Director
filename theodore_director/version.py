"""Theodore Director 前后端共用的版本信息。"""

from __future__ import annotations

import json
from pathlib import Path


_VERSION_FILE = Path(__file__).resolve().parents[1] / "version.json"


def _load_version_info() -> tuple[str, str]:
    # 版本文件会随自定义节点一同发布，节点标题因此不依赖前端是否成功加载。
    data = json.loads(_VERSION_FILE.read_text(encoding="utf-8"))
    return str(data["version"]), str(data["build"])


VERSION, BUILD_ID = _load_version_info()
VERSION_LABEL = f"v{VERSION} · {BUILD_ID}"


__all__ = ["VERSION", "BUILD_ID", "VERSION_LABEL"]
