"""ComfyUI Theodore Director 扩展入口。"""

WEB_DIRECTORY = "./web/dist"


async def comfy_entrypoint():
    # 延迟导入使纯 Python 单元测试无需把完整 ComfyUI 放进 sys.path。
    from .nodes import TheodoreDirectorExtension

    return TheodoreDirectorExtension()


__all__ = ["WEB_DIRECTORY", "comfy_entrypoint"]
