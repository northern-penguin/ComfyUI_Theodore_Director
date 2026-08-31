"""ComfyUI V3 节点定义。"""

from __future__ import annotations

import hashlib
import json
from pathlib import Path
import tempfile
from typing import Any

from comfy_api.v0_0_2 import ComfyExtension, InputImpl, Types, io, ui

from .theodore_director.duration import calculate_h3_frames
from .theodore_director.legacy import import_legacy_script
from .theodore_director.manifest import commit_shot_result
from .theodore_director.media import load_audio, load_image, load_video
from .theodore_director.paths import OutputPaths, build_output_paths, resolve_output_file, shot_result_candidates
from .theodore_director.postprocess import execute_merge_request
from .theodore_director.references import resolve_references
from .theodore_director.remote_media import download_runninghub_video
from .theodore_director.schema import DEFAULT_PLAN_JSON, Plan, load_plan
from .theodore_director.selection import ShotSelection, select_shot
from .theodore_director.video_results import (
    SecondPassRequest,
    parse_second_pass_request,
    write_video_result_metadata,
)
from .theodore_director.version import VERSION_LABEL

PlanType = io.Custom("THEODORE_DIRECTOR_PLAN")
ShotType = io.Custom("THEODORE_DIRECTOR_SHOT")
PathsType = io.Custom("THEODORE_DIRECTOR_PATHS")
SecondPassRequestType = io.Custom("THEODORE_DIRECTOR_SECOND_PASS_REQUEST")

CATEGORY = "Theodore Director"


class TheodoreDirectorProject(io.ComfyNode):
    @classmethod
    def define_schema(cls):
        return io.Schema(
            node_id="TheodoreDirector_Project",
            # 把后端实际部署版本放在节点标题中；即使前端入口加载失败也能直接确认版本。
            display_name=f"Theodore Director Project · {VERSION_LABEL}",
            category=CATEGORY,
            description="Open the full storyboard editor and emit an immutable project plan.",
            inputs=[
                io.String.Input(
                    "plan_json",
                    display_name="Project Data",
                    multiline=True,
                    default=DEFAULT_PLAN_JSON,
                    extra_dict={"theodoreDirectorProject": True},
                )
            ],
            outputs=[
                PlanType.Output("plan", display_name="PLAN"),
                io.String.Output("plan_hash", display_name="plan hash"),
                io.String.Output("project_name", display_name="project name"),
                io.Int.Output("active_shot_count", display_name="active shots"),
                # 只读输出位于末尾，不改变现有工作流的输出索引和连线。
                io.String.Output("version", display_name=f"version {VERSION_LABEL}"),
            ],
        )

    @classmethod
    def execute(cls, plan_json: str):
        plan = load_plan(plan_json)
        return io.NodeOutput(plan, plan.plan_hash, plan.project_name, len(plan.active_shots), VERSION_LABEL)

    @classmethod
    def fingerprint_inputs(cls, plan_json: str):
        return hashlib.sha256(plan_json.encode("utf-8")).hexdigest()


class TheodoreDirectorSelectShot(io.ComfyNode):
    @classmethod
    def define_schema(cls):
        return io.Schema(
            node_id="TheodoreDirector_SelectShot",
            display_name="Theodore Director - Current Shot",
            category=CATEGORY,
            inputs=[
                PlanType.Input("plan"),
                io.Int.Input("queue_index", default=0, min=0, max=100000),
                io.Int.Input("base_seed", default=123456790, min=0, max=0xFFFFFFFFFFFFFFFF),
                io.Combo.Input(
                    "resume_mode",
                    options=["fresh", "resume", "retry_failed", "overwrite_current"],
                    default="fresh",
                ),
            ],
            outputs=[
                ShotType.Output("shot", display_name="SHOT"),
                io.String.Output("prompt"),
                io.String.Output("negative_prompt"),
                io.Float.Output("duration_seconds"),
                io.Int.Output("seed"),
                io.String.Output("shot_id"),
                io.Int.Output("active_index"),
                io.Int.Output("source_index"),
                io.Int.Output("active_count"),
                io.Boolean.Output("is_first"),
                io.Boolean.Output("is_last"),
                io.Int.Output("next_index"),
                io.Boolean.Output("has_next"),
                io.String.Output("shot_hash"),
                io.Boolean.Output("latent_relay", display_name="latent relay"),
                io.Boolean.Output("second_sampling", display_name="second sampling"),
            ],
        )

    @classmethod
    def execute(cls, plan: Plan, queue_index: int, base_seed: int, resume_mode: str):
        resolved_index = queue_index
        if resume_mode in ("resume", "retry_failed"):
            import folder_paths

            from .theodore_director.manifest import is_shot_complete
            from .theodore_director.selection import shot_hash

            root = Path(folder_paths.get_output_directory()).resolve()
            while resolved_index < len(plan.active_shots):
                candidate = plan.active_shots[resolved_index]
                candidate_paths = build_output_paths(plan, candidate, resolved_index)
                # 新目录优先，旧的根层结果文件仅作为续跑兼容回退。
                complete = any(
                    is_shot_complete(
                        result_path,
                        shot_hash=shot_hash(plan, candidate),
                        plan_hash=plan.plan_hash,
                        latent_required=plan.continuity.mode == "h3_av_latent",
                    )
                    for result_path in shot_result_candidates(root, candidate_paths)
                )
                if not complete:
                    break
                resolved_index += 1
            if resolved_index >= len(plan.active_shots):
                raise ValueError("当前计划的所有启用镜头均已完成")
        selected = select_shot(plan, resolved_index, base_seed)
        shot = selected.shot
        return io.NodeOutput(
            selected,
            shot.prompt,
            shot.negative_prompt,
            shot.duration_seconds,
            selected.seed,
            shot.id,
            selected.active_index,
            selected.source_index,
            selected.active_count,
            selected.is_first,
            selected.is_last,
            selected.next_index,
            selected.has_next,
            selected.shot_hash,
            selected.latent_relay,
            selected.second_sampling,
        )


class TheodoreDirectorH3Adapter(io.ComfyNode):
    @classmethod
    def define_schema(cls):
        outputs: list[Any] = [
            io.String.Output("compiled_prompt", display_name="H3 prompt"),
            io.Int.Output("length", display_name="H3 frames"),
            io.Int.Output("expected_output_frames", display_name="delivery frames"),
            io.String.Output("reference_map", display_name="reference map"),
        ]
        outputs.extend(io.Image.Output(f"ref_image_{index}") for index in range(9))
        outputs.extend(io.Image.Output(f"ref_video_{index}") for index in range(3))
        outputs.extend(io.Audio.Output(f"ref_video_audio_{index}") for index in range(3))
        outputs.extend(io.Audio.Output(f"ref_audio_{index}") for index in range(3))
        return io.Schema(
            node_id="TheodoreDirector_H3Adapter",
            display_name="Theodore Director - MiniMax H3 Adapter",
            category=f"{CATEGORY}/Adapters",
            description="Resolve aliases, enforce official H3 limits, and load only the current shot media.",
            inputs=[PlanType.Input("plan"), ShotType.Input("shot")],
            outputs=outputs,
        )

    @classmethod
    def execute(cls, plan: Plan, shot: ShotSelection):
        reference_map = resolve_references(plan, shot.shot)
        generated, expected = calculate_h3_frames(
            shot.shot.duration_seconds,
            fps=plan.fps,
            # 未开启接力的镜头不会裁掉 Motion Context 帧，时长按独立镜头计算。
            is_first=not shot.latent_relay,
            context_frames=plan.continuity.video_context_frames,
            duration_mode=plan.continuity.duration_mode,
        )

        images = [load_image(asset.path) for asset in reference_map.pictures]
        videos: list[Any] = []
        paired_audio_by_id: dict[str, Any] = {}
        for asset in reference_map.videos:
            frames, audio = load_video(asset.path)
            videos.append(frames)
            if asset.include_video_audio:
                if audio is None:
                    raise ValueError(f"视频 {asset.alias} 已启用同步音轨，但文件中没有可用音轨")
                paired_audio_by_id[asset.id] = audio
        paired_audio = [paired_audio_by_id[asset.id] for asset in reference_map.paired_audio]
        standalone_audio = [load_audio(asset.path) for asset in reference_map.standalone_audio]

        values: list[Any] = [reference_map.compiled_prompt, generated, expected, reference_map.to_json()]
        values.extend(images + [None] * (9 - len(images)))
        values.extend(videos + [None] * (3 - len(videos)))

        # H3 的 ref_video_audio_N 必须与 ref_video_N 使用相同 N；没有伴音的视频保留 None。
        video_audio_slots = [paired_audio_by_id.get(asset.id) for asset in reference_map.videos]
        values.extend(video_audio_slots + [None] * (3 - len(video_audio_slots)))
        values.extend(standalone_audio + [None] * (3 - len(standalone_audio)))
        return io.NodeOutput(*values)


class TheodoreDirectorOutputPaths(io.ComfyNode):
    @classmethod
    def define_schema(cls):
        return io.Schema(
            node_id="TheodoreDirector_OutputPaths",
            display_name="Theodore Director - Output Paths",
            category=CATEGORY,
            inputs=[PlanType.Input("plan"), ShotType.Input("shot")],
            outputs=[
                PathsType.Output("paths", display_name="PATHS"),
                io.String.Output("video_prefix"),
                io.String.Output("latent_prefix", display_name="latent load directory"),
                io.String.Output("latent_save_prefix"),
                io.String.Output("tail_prefix"),
                io.String.Output("manifest_path"),
                io.String.Output("shot_result_path"),
            ],
        )

    @classmethod
    def execute(cls, plan: Plan, shot: ShotSelection):
        paths = build_output_paths(plan, shot.shot, shot.active_index)
        return io.NodeOutput(
            paths,
            paths.video_prefix,
            paths.latent_prefix,
            paths.latent_save_prefix,
            paths.tail_prefix,
            paths.manifest_path,
            paths.shot_result_path,
        )


class TheodoreDirectorCommitResult(io.ComfyNode):
    @classmethod
    def define_schema(cls):
        return io.Schema(
            node_id="TheodoreDirector_CommitResult",
            display_name="Theodore Director - Commit Result",
            category=CATEGORY,
            description="Commit a completed shot before Impact advances the queue.",
            inputs=[
                PlanType.Input("plan"),
                ShotType.Input("shot"),
                PathsType.Input("paths"),
                io.AnyType.Input("completion_signal"),
                io.String.Input("tail_path", force_input=True),
                io.String.Input("latent_path", optional=True, force_input=True),
                io.Boolean.Input("latent_required", default=True),
            ],
            outputs=[
                io.AnyType.Output("signal"),
                io.Int.Output("next_index"),
                io.Boolean.Output("has_next"),
                io.String.Output("result_json"),
            ],
        )

    @classmethod
    def execute(
        cls,
        plan: Plan,
        shot: ShotSelection,
        paths: OutputPaths,
        completion_signal: Any,
        tail_path: str,
        latent_required: bool,
        latent_path: str = "",
    ):
        import folder_paths

        root = Path(folder_paths.get_output_directory()).resolve()
        video = resolve_output_file(
            root,
            paths.video_prefix,
            (".mp4", ".webm", ".mov", ".mkv"),
            expected_prefix=paths.video_prefix,
        )
        tail = resolve_output_file(
            root,
            tail_path,
            (".png", ".jpg", ".jpeg", ".webp"),
            expected_prefix=paths.tail_prefix,
        )
        latent = (
            resolve_output_file(
                root,
                latent_path,
                (".safetensors",),
                expected_prefix=paths.latent_save_prefix,
            )
            if latent_required
            else None
        )
        # 为每个新结果记录一采/二采阶段；没有该伴随文件的旧视频仍按 legacy_unknown 兼容。
        write_video_result_metadata(
            video,
            stage="second_pass" if shot.second_sampling else "first_pass",
            shot_id=shot.shot.id,
            plan_hash=plan.plan_hash,
        )
        result = commit_shot_result(
            result_path=root / paths.shot_result_path,
            manifest_path=root / paths.manifest_path,
            shot_id=shot.shot.id,
            shot_hash=shot.shot_hash,
            plan_hash=plan.plan_hash,
            video_path=video,
            tail_path=tail,
            latent_path=latent,
            latent_required=latent_required,
        )
        return io.NodeOutput(completion_signal, shot.next_index, shot.has_next, json.dumps(result.__dict__, ensure_ascii=False))


class TheodoreDirectorPostprocessSecondPassSource(io.ComfyNode):
    @classmethod
    def define_schema(cls):
        return io.Schema(
            node_id="TheodoreDirector_PostprocessSecondPassSource",
            display_name="Theodore Director - Postprocess Second Pass Source",
            category=f"{CATEGORY}/Postprocess",
            description="Validate and load one saved first-pass result for the standalone second-pass branch.",
            inputs=[
                io.String.Input(
                    "request_json",
                    display_name="Second-pass request",
                    multiline=True,
                    default="{}",
                    extra_dict={"theodoreDirectorSecondPassRequest": True},
                )
            ],
            outputs=[
                PlanType.Output("plan", display_name="PLAN"),
                ShotType.Output("shot", display_name="SHOT"),
                SecondPassRequestType.Output("request", display_name="REQUEST"),
                io.Image.Output("images"),
                io.Audio.Output("audio"),
                io.Float.Output("fps"),
                io.Int.Output("seed"),
            ],
        )

    @classmethod
    def execute(cls, request_json: str):
        import folder_paths

        root = Path(folder_paths.get_output_directory()).resolve()
        request = parse_second_pass_request(root, request_json)
        if request.source_url:
            with tempfile.TemporaryDirectory(prefix="theodore_rh_second_pass_") as temporary:
                source = download_runninghub_video(request.source_url, Path(temporary))
                components = InputImpl.VideoFromFile(str(source)).get_components()
        elif request.source_path is not None:
            components = InputImpl.VideoFromFile(str(request.source_path)).get_components()
        else:
            raise ValueError("单独二采请求没有可读取的源视频")
        if components.audio is None:
            raise ValueError("单独二采要求源视频包含音轨，当前结果没有可用音频")
        return io.NodeOutput(
            request.plan,
            request.shot,
            request,
            components.images,
            components.audio,
            float(components.frame_rate),
            request.shot.seed,
        )

    @classmethod
    def fingerprint_inputs(cls, request_json: str):
        # requestId 每次点击都会变化，确保相同源视频也能按用户请求重新排队。
        return hashlib.sha256(request_json.encode("utf-8")).hexdigest()


class TheodoreDirectorSaveSecondPass(io.ComfyNode):
    @classmethod
    def define_schema(cls):
        return io.Schema(
            node_id="TheodoreDirector_SaveSecondPass",
            display_name="Theodore Director - Save Standalone Second Pass",
            category=f"{CATEGORY}/Postprocess",
            description="Save a standalone second-pass video without overwriting the selected first pass.",
            inputs=[
                io.Video.Input("video"),
                SecondPassRequestType.Input("request"),
            ],
            outputs=[
                io.Video.Output("video"),
                io.String.Output("path"),
            ],
            is_output_node=True,
        )

    @classmethod
    def execute(cls, video, request: SecondPassRequest):
        import folder_paths

        root = Path(folder_paths.get_output_directory()).resolve()
        width, height = video.get_dimensions()
        full_folder, filename, counter, subfolder, _prefix = folder_paths.get_save_image_path(
            request.output_prefix,
            str(root),
            width,
            height,
        )
        file_name = f"{filename}_{counter:05}_.mp4"
        output_path = (Path(full_folder) / file_name).resolve(strict=False)
        try:
            output_path.relative_to(root)
        except ValueError as error:
            raise ValueError(f"拒绝把二采结果写入 ComfyUI output 之外: {output_path}") from error

        video.save_to(str(output_path), format=Types.VideoContainer("mp4"), codec="auto")
        write_video_result_metadata(
            output_path,
            stage="second_pass",
            shot_id=request.shot.shot.id,
            plan_hash=request.plan.plan_hash,
            source_path=request.source_relative,
        )
        relative = output_path.relative_to(root).as_posix()
        return io.NodeOutput(
            video,
            relative,
            ui=ui.PreviewVideo([ui.SavedResult(file_name, subfolder, io.FolderType.output)]),
        )


class TheodoreDirectorMergeVideos(io.ComfyNode):
    @classmethod
    def define_schema(cls):
        return io.Schema(
            node_id="TheodoreDirector_MergeVideos",
            display_name="Theodore Director - Merge Videos",
            category=f"{CATEGORY}/Postprocess",
            description="Merge selected local or RunningHub shot results as a partial ComfyUI execution target.",
            inputs=[
                io.String.Input(
                    "request_json",
                    display_name="Merge request",
                    multiline=True,
                    default="{}",
                    extra_dict={"theodoreDirectorMergeRequest": True},
                )
            ],
            outputs=[io.String.Output("path")],
            is_output_node=True,
        )

    @classmethod
    def execute(cls, request_json: str):
        import folder_paths

        root = Path(folder_paths.get_output_directory()).resolve()
        output_path = execute_merge_request(root, request_json)
        relative = output_path.relative_to(root).as_posix()
        return io.NodeOutput(
            relative,
            ui=ui.PreviewVideo([
                ui.SavedResult(output_path.name, output_path.parent.relative_to(root).as_posix(), io.FolderType.output)
            ]),
        )

    @classmethod
    def fingerprint_inputs(cls, request_json: str):
        # requestId 由每次点击生成，允许用户使用相同素材重复输出不同合并版本。
        return hashlib.sha256(request_json.encode("utf-8")).hexdigest()


class TheodoreDirectorLegacyImport(io.ComfyNode):
    @classmethod
    def define_schema(cls):
        return io.Schema(
            node_id="TheodoreDirector_LegacyImport",
            display_name="Theodore Director - Import Legacy Script",
            category=f"{CATEGORY}/Migration",
            inputs=[
                io.String.Input("script", multiline=True, default="## Shot 1\n& 5 &\nWrite the prompt here."),
                io.String.Input("project_name", default="Imported Project"),
                io.Int.Input("base_seed", default=123456790, min=0, max=0xFFFFFFFFFFFFFFFF),
            ],
            outputs=[
                io.String.Output("plan_json", display_name="imported plan JSON"),
                PlanType.Output("plan", display_name="PLAN"),
            ],
        )

    @classmethod
    def execute(cls, script: str, project_name: str, base_seed: int):
        plan_json = import_legacy_script(script, project_name=project_name, base_seed=base_seed)
        return io.NodeOutput(plan_json, load_plan(plan_json))


class TheodoreDirectorExtension(ComfyExtension):
    async def on_load(self):
        # 路由延迟注册，保证纯 Python 测试不依赖正在运行的 PromptServer。
        from .server import register_routes

        register_routes()

    async def get_node_list(self):
        return [
            TheodoreDirectorProject,
            TheodoreDirectorSelectShot,
            TheodoreDirectorH3Adapter,
            TheodoreDirectorOutputPaths,
            TheodoreDirectorCommitResult,
            TheodoreDirectorPostprocessSecondPassSource,
            TheodoreDirectorSaveSecondPass,
            TheodoreDirectorMergeVideos,
            TheodoreDirectorLegacyImport,
        ]
