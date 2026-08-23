"""Theodore Director 的受限素材上传 API。"""

from __future__ import annotations

import asyncio
from aiohttp import web
from pathlib import Path
import tempfile

from .theodore_director.paths import find_generated_videos
from .theodore_director.postprocess import (
    allocate_merged_video,
    build_ffmpeg_concat_args,
    ffmpeg_concat_line,
    find_ffmpeg_executable,
    find_merged_videos,
    validate_merge_selections,
)
from .theodore_director.uploads import allocate_upload_path

_ROUTES_REGISTERED = False
MAX_UPLOAD_BYTES = 2 * 1024 * 1024 * 1024
_MERGE_LOCKS: dict[str, asyncio.Lock] = {}


def _video_response(root: Path, videos: list[Path]) -> dict:
    """把 output 内视频转换为前端共用的结果列表结构。"""
    results = []
    for video in videos:
        stat = video.stat()
        results.append({
            "path": video.relative_to(root).as_posix(),
            "bytes": stat.st_size,
            "modifiedAt": stat.st_mtime,
        })
    response = {"found": bool(results), "count": len(results), "results": results}
    if results:
        # 保留旧版单结果字段，避免第三方前端在升级后立即失效。
        response.update(results[0])
    return response


def register_routes() -> None:
    global _ROUTES_REGISTERED
    if _ROUTES_REGISTERED:
        return

    import folder_paths
    from server import PromptServer

    routes = PromptServer.instance.routes

    @routes.get("/theodore-director/v1/health")
    async def health(_request):
        return web.json_response({"ok": True, "apiVersion": 1})

    @routes.get("/theodore-director/v1/generated-video")
    async def generated_video(request):
        """只在 Theodore 的预期输出前缀中查询当前分镜的全部视频。"""
        query = request.rel_url.query
        try:
            active_index = int(query.get("activeIndex", "0"))
            if active_index < 0 or active_index > 999_999:
                raise ValueError("activeIndex 超出范围")
            root = Path(folder_paths.get_output_directory()).resolve()
            videos = find_generated_videos(
                root=root,
                project_name=query.get("projectName", ""),
                run_id=query.get("runId", ""),
                shot_id=query.get("shotId", ""),
                active_index=active_index,
            )
            return web.json_response(_video_response(root, videos))
        except (OSError, ValueError) as exc:
            return web.json_response({"error": str(exc)}, status=400)

    @routes.get("/theodore-director/v1/postprocess/merged-videos")
    async def merged_videos(request):
        """查询当前项目和 Run 的全部合并结果。"""
        query = request.rel_url.query
        try:
            root = Path(folder_paths.get_output_directory()).resolve()
            videos = find_merged_videos(root, query.get("projectName", ""), query.get("runId", ""))
            return web.json_response(_video_response(root, videos))
        except (OSError, ValueError) as exc:
            return web.json_response({"error": str(exc)}, status=400)

    @routes.post("/theodore-director/v1/postprocess/merge")
    async def merge_videos(request):
        """按前端选择顺序使用 FFmpeg 无损合并分镜视频。"""
        try:
            payload = await request.json()
            project_name = str(payload.get("projectName", ""))
            run_id = str(payload.get("runId", ""))
            root = Path(folder_paths.get_output_directory()).resolve()
            selections = validate_merge_selections(
                root,
                project_name,
                run_id,
                payload.get("selections", []),
            )
            lock_key = f"{project_name}\0{run_id}"
            lock = _MERGE_LOCKS.setdefault(lock_key, asyncio.Lock())
            if lock.locked():
                return web.json_response({"error": "当前项目已有一个视频合并任务正在执行"}, status=409)

            async with lock:
                ffmpeg = find_ffmpeg_executable()
                output_path = allocate_merged_video(root, project_name, run_id)
                list_path: Path | None = None
                try:
                    # 临时清单与输出放在同一运行目录，结束后立即删除清单。
                    with tempfile.NamedTemporaryFile(
                        mode="w",
                        encoding="utf-8",
                        newline="\n",
                        prefix=".theodore_concat_",
                        suffix=".txt",
                        dir=output_path.parent,
                        delete=False,
                    ) as stream:
                        list_path = Path(stream.name)
                        for source in selections:
                            stream.write(ffmpeg_concat_line(source))
                    process = await asyncio.create_subprocess_exec(
                        *build_ffmpeg_concat_args(ffmpeg, list_path, output_path),
                        stdout=asyncio.subprocess.PIPE,
                        stderr=asyncio.subprocess.PIPE,
                    )
                    _stdout, stderr = await process.communicate()
                    if process.returncode != 0:
                        message = stderr.decode("utf-8", errors="replace").strip()
                        raise RuntimeError(message or f"FFmpeg 退出码为 {process.returncode}")
                    if not output_path.is_file() or output_path.stat().st_size <= 0:
                        raise RuntimeError("FFmpeg 未生成有效的合并视频")
                    return web.json_response({
                        "ok": True,
                        "sourceCount": len(selections),
                        "result": _video_response(root, [output_path])["results"][0],
                    })
                except Exception:
                    # 只清理由本次任务创建的不完整输出，不触碰已有用户文件。
                    output_path.unlink(missing_ok=True)
                    raise
                finally:
                    if list_path is not None:
                        list_path.unlink(missing_ok=True)
        except (OSError, RuntimeError, TypeError, ValueError, FileNotFoundError) as exc:
            return web.json_response({"error": str(exc)}, status=400)

    @routes.post("/theodore-director/v1/assets")
    async def upload_asset(request):
        reader = await request.multipart()
        project_name = "theodore_project"
        kind = ""
        upload = None
        while part := await reader.next():
            if part.name in {"projectName", "projectId"}:
                # projectId 仅用于兼容旧版前端，新版统一使用用户填写的 Project name。
                project_name = await part.text()
            elif part.name == "kind":
                kind = await part.text()
            elif part.name == "file":
                upload = part
                break
        if upload is None:
            return web.json_response({"error": "缺少 file 字段"}, status=400)
        try:
            target, relative = allocate_upload_path(
                input_root=Path(folder_paths.get_input_directory()),
                project_name=project_name,
                filename=upload.filename or kind,
                kind=kind,
            )
            written = 0
            # 分块落盘，避免把大型视频一次性读入内存。
            with target.open("xb") as handle:
                while chunk := await upload.read_chunk(size=1024 * 1024):
                    written += len(chunk)
                    if written > MAX_UPLOAD_BYTES:
                        raise ValueError("单个素材不得超过 2 GiB")
                    handle.write(chunk)
            return web.json_response({"path": relative, "bytes": written, "kind": kind})
        except (OSError, ValueError) as exc:
            if "target" in locals() and target.exists():
                # 这里只清理由本次请求新建且未完成的缓存副本，不触碰用户原文件。
                target.unlink(missing_ok=True)
            return web.json_response({"error": str(exc)}, status=400)

    _ROUTES_REGISTERED = True
