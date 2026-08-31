"""版本标记的一致性测试。"""

from __future__ import annotations

import json
from pathlib import Path
import re

from theodore_director.version import BUILD_ID, VERSION, VERSION_LABEL


ROOT = Path(__file__).resolve().parents[1]


def test_version_sources_are_consistent():
    version_info = json.loads((ROOT / "version.json").read_text(encoding="utf-8"))
    package = json.loads((ROOT / "package.json").read_text(encoding="utf-8"))
    pyproject_text = (ROOT / "pyproject.toml").read_text(encoding="utf-8")
    project_version = re.search(r'^version\s*=\s*"([^"]+)"', pyproject_text, re.MULTILINE)

    assert project_version is not None
    assert VERSION == version_info["version"] == package["version"] == project_version.group(1)
    assert BUILD_ID == version_info["build"]
    assert VERSION_LABEL == f"v{VERSION} · {BUILD_ID}"
