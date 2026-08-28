import os
from pathlib import Path

import pytest

from theodore_director.postprocess import (
    allocate_merged_video,
    build_ffmpeg_concat_args,
    ffmpeg_concat_line,
    find_merged_videos,
    open_run_directory,
    parse_merge_request,
    validate_merge_selections,
)


def create_shot_video(root: Path, index: int, shot_id: str, number: int, content: bytes = b"video") -> Path:
    run_dir = root / "TheodoreDirector" / "Demo_run_001"
    run_dir.mkdir(parents=True, exist_ok=True)
    # index 参数保留用于构造不同执行顺序，稳定文件名只使用 shot ID。
    _ = index
    path = run_dir / f"{shot_id}_video_{number:05d}_.mp4"
    path.write_bytes(content)
    return path


def test_validate_merge_selections_keeps_storyboard_order(tmp_path):
    first = create_shot_video(tmp_path, 0, "shot_001", 1)
    second = create_shot_video(tmp_path, 1, "shot_002", 2)

    selected = validate_merge_selections(tmp_path, "Demo", "run_001", [
        {"shotId": "shot_001", "activeIndex": 0, "path": first.relative_to(tmp_path).as_posix()},
        {"shotId": "shot_002", "activeIndex": 1, "path": second.relative_to(tmp_path).as_posix()},
    ])

    assert selected == [first.resolve(), second.resolve()]


def test_validate_merge_selections_rejects_unrelated_output(tmp_path):
    first = create_shot_video(tmp_path, 0, "shot_001", 1)
    unrelated = create_shot_video(tmp_path, 1, "shot_002", 1)

    with pytest.raises(ValueError, match="不属于"):
        validate_merge_selections(tmp_path, "Demo", "run_001", [{
            "shotId": "shot_001",
            "activeIndex": 0,
            "path": unrelated.relative_to(tmp_path).as_posix(),
        }])
    assert first.is_file()


def test_validate_merge_selections_rejects_malformed_payload(tmp_path):
    with pytest.raises(ValueError, match="必须是列表"):
        validate_merge_selections(tmp_path, "Demo", "run_001", {})  # type: ignore[arg-type]
    with pytest.raises(ValueError, match="必须是对象"):
        validate_merge_selections(tmp_path, "Demo", "run_001", ["bad"])  # type: ignore[list-item]


def test_merged_outputs_increment_without_overwriting(tmp_path):
    first = allocate_merged_video(tmp_path, "Demo", "run_001")
    assert first.name == "merged_video_00001_.mp4"
    first.write_bytes(b"one")
    os.utime(first, ns=(1_000_000_000, 1_000_000_000))
    second = allocate_merged_video(tmp_path, "Demo", "run_001")
    second.write_bytes(b"two")
    os.utime(second, ns=(2_000_000_000, 2_000_000_000))

    assert second.name == "merged_video_00002_.mp4"
    assert find_merged_videos(tmp_path, "Demo", "run_001") == [second.resolve(), first.resolve()]


def test_open_run_directory_creates_and_opens_only_expected_folder(tmp_path, monkeypatch):
    opened: list[str] = []
    # 测试中替换系统 Shell 调用，避免真的弹出文件管理器。
    monkeypatch.setattr(os, "startfile", opened.append, raising=False)
    monkeypatch.setattr(os, "name", "nt")

    directory = open_run_directory(tmp_path, "Demo Project", "run_001")

    expected = (tmp_path / "TheodoreDirector" / "Demo_Project_run_001").resolve()
    assert directory == expected
    assert directory.is_dir()
    assert opened == [str(expected)]


def test_ffmpeg_concat_arguments_do_not_use_a_shell(tmp_path):
    source = tmp_path / "a clip's result.mp4"
    line = ffmpeg_concat_line(source)
    args = build_ffmpeg_concat_args("ffmpeg", tmp_path / "list.txt", tmp_path / "merged.mp4")

    assert line.startswith("file '")
    assert "'\\''" in line
    assert args[0] == "ffmpeg"
    assert args[-3:] == ["-movflags", "+faststart", str(tmp_path / "merged.mp4")]
    assert "-c" in args and "copy" in args


def test_parse_merge_request_accepts_remote_results_and_keeps_order():
    parsed = parse_merge_request({
        "projectName": "Demo",
        "runId": "run_001",
        "requestId": "merge-1",
        "selections": [
            {"shotId": "shot_001", "activeIndex": 0, "path": "https://rh-images.xiaoyaoyou.com/a.mp4"},
            {"shotId": "shot_002", "activeIndex": 1, "path": "local/b.mp4"},
        ],
    })
    assert [item["shotId"] for item in parsed["selections"]] == ["shot_001", "shot_002"]


def test_parse_merge_request_rejects_duplicate_active_indexes():
    with pytest.raises(ValueError, match="重复"):
        parse_merge_request({
            "projectName": "Demo",
            "runId": "run_001",
            "requestId": "merge-1",
            "selections": [
                {"shotId": "shot_001", "activeIndex": 0, "path": "a.mp4"},
                {"shotId": "shot_002", "activeIndex": 0, "path": "b.mp4"},
            ],
        })
