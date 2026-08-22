from pathlib import Path

import pytest

from theodore_director.uploads import allocate_upload_path


def test_upload_path_is_scoped_to_sanitized_project_name(tmp_path: Path):
    target, relative = allocate_upload_path(tmp_path, "../Project One", "../hero.PNG", "image")
    assert target.parent == tmp_path / "theodore_director" / "Project_One"
    assert relative == "theodore_director/Project_One/hero.png"


def test_upload_rejects_mismatched_extension(tmp_path: Path):
    with pytest.raises(ValueError, match="不支持扩展名"):
        allocate_upload_path(tmp_path, "p", "payload.exe", "video")
