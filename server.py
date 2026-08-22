"""Theodore Director 的受限素材上传 API。"""

from __future__ import annotations

from aiohttp import web
from pathlib import Path

from .theodore_director.paths import find_generated_video
from .theodore_director.uploads import allocate_upload_path

_ROUTES_REGISTERED = False
MAX_UPLOAD_BYTES = 2 * 1024 * 1024 * 1024


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
        """只在 Theodore 的预期输出前缀中查询当前分镜视频。"""
        query = request.rel_url.query
        try:
            active_index = int(query.get("activeIndex", "0"))
            if active_index < 0 or active_index > 999_999:
                raise ValueError("activeIndex 超出范围")
            root = Path(folder_paths.get_output_directory()).resolve()
            video = find_generated_video(
                root=root,
                project_name=query.get("projectName", ""),
                run_id=query.get("runId", ""),
                shot_id=query.get("shotId", ""),
                active_index=active_index,
            )
            if video is None:
                return web.json_response({"found": False})
            stat = video.stat()
            return web.json_response({
                "found": True,
                "path": video.relative_to(root).as_posix(),
                "bytes": stat.st_size,
                "modifiedAt": stat.st_mtime,
            })
        except (OSError, ValueError) as exc:
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
