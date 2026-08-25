# ComfyUI Theodore Director

一个面向分段视频生产的开源 ComfyUI 导播台。核心层只描述“项目、素材、分镜、时长与连续性”，模型差异由适配器承担；首个适配器面向 MiniMax H3，并附带已经融合好的 Impact V6 单采、双采工作流。

Theodore Director is an open-source, model-agnostic storyboard director for ComfyUI. Model-specific limits live in adapters; the first adapter targets MiniMax H3. Ready-to-import Impact V6 single- and dual-sampling workflows are included.

## 版权说明

### 本工作流由抖音博主Theodore（抖音号:q1503623946）以及 b站up主 南极来の企鹅制作。

## 它解决什么问题

- 一个项目可以管理超过 9 张图片、3 个视频或 3 路音频；每个分镜只按别名激活本轮所需素材。
- 提示词写 `{{ref:角色正面}}`，执行时才稳定编译成 `<Picture 1>`、`<Video 1>` 或 `<Audio 1>`。
- 每个分镜独立设置最终成片时长；H3 适配器负责 `17n+5` 帧网格与跨段上下文补偿。
- 视频、尾帧和必要的 AV latent 全部存在并写入结果清单后，才允许 Impact 推进队列。
- 计划直接嵌入工作流，同时支持 JSON 导入导出；换机时不会丢失导播配置。

规划与 JSON 校验只带来毫秒级 CPU 开销，不介入采样器。实际新增开销来自本轮被激活的参考视频/音频解码；未被当前分镜引用的素材不会加载。Impact Pack 仍是唯一的队列调度器。

## 安装

要求 ComfyUI `0.31.x` 或兼容 `comfy_api.v0_0_2` 的版本，Python 3.10+。

```bash
cd ComfyUI/custom_nodes
git clone https://github.com/northern-penguin/ComfyUI_Theodore_Director.git
```

重启 ComfyUI。仓库已提交构建后的 `web/dist`，普通用户不需要安装 Node.js 或运行前端构建。

“后处理 → 合并视频”需要 FFmpeg。程序依次查找 `THEODORE_DIRECTOR_FFMPEG` 环境变量、系统 `PATH` 和可选的 `imageio-ffmpeg` 内置程序；整合包若未提供 FFmpeg，请自行安装并加入 `PATH`。合并使用无损流复制，不重新编码，也不占用 ComfyUI 生成队列或 GPU。

然后任选一个成品工作流导入：

- [Impact V6 单采 Theodore Director](workflows/Impact_V6_Single_Theodore_Director.json)
- [Impact V6 双采 Theodore Director](workflows/Impact_V6_Dual_Theodore_Director.json)

工作流本身还需要下表中的第三方节点。模型文件名和放置位置沿用原 V6 工作流。

| 依赖 | 单采 | 双采 | 用途 |
|---|---:|---:|---|
| ComfyUI Impact Pack | ✓ | ✓ | 队列触发与控件写回 |
| ComfyUI MiniMax H3 Turbo | ✓ | ✓ | H3 Turbo 采样/LoRA |
| ComfyUI H3 Motion Context | ✓ | ✓ | 跨分镜 AV latent 连续性 |
| ComfyUI-KJNodes | ✓ | ✓ | 加速与尾帧保存 |
| ComfyUI-Easy-Use | ✓ | ✓ | 尾帧索引 |
| NVIDIA RTX Video Nodes | — | ✓ | 双采工作流的中间增强 |

## 快速使用

1. 双击绿色区域内的 `Theodore Director Project`，点击“打开 Theodore 导播台”。
2. 在“素材库”添加参考图、参考视频或音频。可以直接上传，文件会复制到 `ComfyUI/input/theodore_director/<project-id>/`；也可以填写 input 目录相对路径。
3. 给素材设置唯一别名，例如 `hero_front`、`location_night`、`walk_cycle`。
4. 在分镜提示词中使用 `{{ref:hero_front}}`。若视频启用了伴音，可用 `{{ref:walk_cycle.audio}}` 单独指代其音轨。
5. 设置每个分镜的时长和启用状态，保存到工作流，然后正常 Queue。
6. 全部分镜生成后进入“后处理”，逐镜头选择一个结果并点击“合并所选视频”。

固定引用先按 `fixedOrder` 排序；其余引用按提示词第一次出现的顺序排列。图片、视频和音频分别独立编号。素材库可以很大，但每个分镜必须通过 H3 限制预检。

## H3 严格限制

本项目依据 [MiniMax H3 官方仓库文档](https://modelscope.cn/models/MiniMax/MiniMax-H3/files) 采用保守且可预测的执行规则：

| 类型 | 单分镜上限 | 时长规则 |
|---|---:|---|
| 参考图 | 9 | — |
| 参考视频 | 3 | 每个 2–15 秒，总计不超过 15 秒 |
| 有效音频 | 3 路总计 | 每路 2–15 秒，总计不超过 15 秒 |
| 混合输入文件 | 12 | 视频伴音不重复计文件 |

“有效音频 3 路”包含显式启用的视频伴音和独立音频两者之和。独立音频不能作为唯一参考，必须同时有图片或视频。视频文件只有在“启用视频伴音”被勾选时才占用 Audio 槽位。

详细规则见 [H3 适配与别名规范](docs/H3_ADAPTER.zh-CN.md)。

## 执行流程

```text
可视化导播计划
  → Project：冻结并哈希计划
  → Impact 当前索引
  → SelectShot：跳过禁用分镜、续跑检查、计算 seed，输出当前 latentRelay / secondSampling BOOL
  → H3Adapter：解析别名、校验上限、只加载当前素材、编译标签与时长
  → 原 V6 H3 条件编码与单采/双采核心
  → Motion Context 分支：latentRelay=true 载入并裁切上一段 AV latent，false 直通
  → 双采画面分支：secondSampling=true 选二采画面，false 选一采画面
  → SaveVideo + SaveLatent + SaveTail
  → CommitResult：原子写入结果和总清单
  → ImpactSetWidgetValue + ImpactQueueTrigger（有下一段时）
```

续跑模式会从当前 Impact 索引向后检查结果清单。只有计划哈希、分镜哈希和实际文件全部匹配，才视为已完成；修改提示词、素材、latentRelay、secondSampling 或连续性配置会令对应旧结果失效。latentRelay 只控制是否消费上一段 latent；每段的 AV latent 仍会照常保存和校验。双采图中 secondSampling=false 会惰性跳过整条二采计算链。

输出默认位于：

```text
ComfyUI/output/TheodoreDirector/<project>_<run>/
  <shot-id>_video_*.mp4
  latent_context/
    clip_00001.safetensors
  tail_frames/
    <shot-id>_tail_*.png
  shot_results/
    <shot-id>_result.json
  merged_video_00001_.mp4
  manifest.json
```

项目名与 Run ID 被拼成一个目录名；AV latent、尾帧和分镜结果清单分别集中在一层 `latent_context/`、`tail_frames/` 与 `shot_results/` 目录，分镜视频、合并视频和项目级 `manifest.json` 位于项目目录。视频、尾帧和结果清单使用稳定 `shot ID` 命名，不受镜头禁用、启用或排序导致的 Impact 索引变化影响；旧版带数字执行序号前缀的文件仍可查询和用于续跑。升级前平铺在项目目录的旧结果清单也继续兼容，但新结果只写入 `shot_results/`。保存节点即使只返回纯文件名，`CommitResult` 也会按 `OutputPaths` 给出的实际保存目录回读，不会错误回退到 `ComfyUI/output/` 根目录。

## 节点分层

- `TheodoreDirector_Project`：通用计划入口及可视化编辑器。
- `TheodoreDirector_SelectShot`：Impact 队列索引、禁用分镜、seed 与续跑策略。
- `TheodoreDirector_H3Adapter`：H3 独有的媒体上限、槽位和提示词编译。
- `TheodoreDirector_OutputPaths`：稳定的运行目录与文件前缀。
- `TheodoreDirector_CommitResult`：完成态事务边界，之后才触发下一队列项。
- `TheodoreDirector_LegacyImport`：导入旧版 `===` 分段、`& 时长 &` 脚本。

更多文档：

- [节点参数讲解（中文）](docs/节点参数讲解.md) / [Node Parameter Reference (English)](docs/节点参数讲解.en.md)
- [导播台使用说明（中文）](docs/导播台说明.md) / [Director UI Guide (English)](docs/导播台说明.en.md)
- [架构与协议](docs/ARCHITECTURE.md)

## 开发与验证

Python 核心不依赖 GPU；在安装有 ComfyUI 的 Python 环境中运行：

```bash
python -m pytest -q
npm install
npm run check
npm test
npm run build
```

成品工作流由 [build_v6_workflows.py](tools/build_v6_workflows.py) 从原始 V6 机械转换，并接受链接完整性、关键来源、节点 Schema 及单/双采拓扑测试。项目当前只做静态工作流验收；模型实际推理由用户在自己的显存、模型和自定义节点组合上执行。

## License

代码与本仓库工作流采用 [Apache License 2.0](LICENSE)。模型、ComfyUI 与第三方自定义节点仍遵循各自许可证，详见 [THIRD_PARTY_NOTICES.md](THIRD_PARTY_NOTICES.md)。
