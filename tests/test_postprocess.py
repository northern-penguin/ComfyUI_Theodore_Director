import os
from pathlib import Path

import pytest

from theodore_director.postprocess import (
    allocate_merged_video,
    build_ffmpeg_concat_args,
    ffmpeg_concat_line,
    find_merged_videos,
    open_run_directory,
    resolve_deletable_video,
    trash_video_result,
    validate_merge_selections,
)
from theodore_director.video_results import metadata_path


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


def test_trash_shot_video_includes_only_video_and_sidecar(tmp_path):
    video = create_shot_video(tmp_path, 0, "shot_001", 1)
    sidecar = metadata_path(video)
    sidecar.write_text("{}", encoding="utf-8")
    latent = video.parent / "latent_context" / "clip.latent"
    tail = video.parent / "tail_frames" / "shot_001_tail.png"
    manifest = video.parent / "manifest.json"
    for path in (latent, tail, manifest):
        path.parent.mkdir(parents=True, exist_ok=True)
        path.write_bytes(b"keep")
    trashed: list[list[str]] = []

    candidate, targets = trash_video_result(
        tmp_path,
        "Demo",
        "run_001",
        "shot",
        video.relative_to(tmp_path).as_posix(),
        "shot_001",
        trash=trashed.append,
    )

    assert candidate == video.resolve()
    assert targets == [video.resolve(), sidecar.resolve()]
    assert trashed == [[str(video.resolve()), str(sidecar.resolve())]]
    assert latent.is_file() and tail.is_file() and manifest.is_file()


def test_trash_merged_video_is_supported(tmp_path):
    merged = allocate_merged_video(tmp_path, "Demo", "run_001")
    merged.parent.mkdir(parents=True, exist_ok=True)
    merged.write_bytes(b"merged")
    trashed: list[list[str]] = []

    candidate, targets = trash_video_result(
        tmp_path,
        "Demo",
        "run_001",
        "merged",
        merged.relative_to(tmp_path).as_posix(),
        trash=trashed.append,
    )

    assert candidate == merged.resolve()
    assert targets == [merged.resolve()]
    assert trashed == [[str(merged.resolve())]]


def test_resolve_deletable_video_rejects_wrong_scope_and_path(tmp_path):
    video = create_shot_video(tmp_path, 0, "shot_001", 1)
    relative = video.relative_to(tmp_path).as_posix()
    text_file = video.parent / "shot_001_video_notes.txt"
    text_file.write_text("not video", encoding="utf-8")

    with pytest.raises(ValueError, match="不属于"):
        resolve_deletable_video(tmp_path, "Demo", "run_001", "shot", relative, "shot_002")
    with pytest.raises(ValueError, match="运行目录之外"):
        resolve_deletable_video(tmp_path, "Other", "run_001", "shot", relative, "shot_001")
    with pytest.raises(ValueError, match="相对路径"):
        resolve_deletable_video(tmp_path, "Demo", "run_001", "shot", str(video.resolve()), "shot_001")
    with pytest.raises(ValueError, match="运行目录之外"):
        resolve_deletable_video(tmp_path, "Demo", "run_001", "shot", "../outside.mp4", "shot_001")
    with pytest.raises(ValueError, match="视频文件"):
        resolve_deletable_video(
            tmp_path, "Demo", "run_001", "shot", text_file.relative_to(tmp_path).as_posix(), "shot_001"
        )
    with pytest.raises(FileNotFoundError, match="不存在"):
        resolve_deletable_video(
            tmp_path,
            "Demo",
            "run_001",
            "shot",
            "TheodoreDirector/Demo_run_001/shot_001_video_missing.mp4",
            "shot_001",
        )
    with pytest.raises(ValueError, match="shot 或 merged"):
        resolve_deletable_video(tmp_path, "Demo", "run_001", "other", relative, "shot_001")


def test_trash_failure_never_falls_back_to_permanent_delete(tmp_path):
    video = create_shot_video(tmp_path, 0, "shot_001", 1)

    def fail_trash(_paths: list[str]) -> None:
        raise OSError("trash unavailable")

    with pytest.raises(OSError, match="trash unavailable"):
        trash_video_result(
            tmp_path,
            "Demo",
            "run_001",
            "shot",
            video.relative_to(tmp_path).as_posix(),
            "shot_001",
            trash=fail_trash,
        )
    assert video.is_file()


def test_resolve_deletable_video_rejects_symlink(tmp_path):
    outside = tmp_path / "outside.mp4"
    outside.write_bytes(b"outside")
    link = tmp_path / "TheodoreDirector" / "Demo_run_001" / "shot_001_video_00001_.mp4"
    link.parent.mkdir(parents=True, exist_ok=True)
    try:
        link.symlink_to(outside)
    except OSError:
        pytest.skip("当前系统未授权创建符号链接")

    with pytest.raises(ValueError, match="符号链接"):
        resolve_deletable_video(
            tmp_path,
            "Demo",
            "run_001",
            "shot",
            link.relative_to(tmp_path).as_posix(),
            "shot_001",
        )
