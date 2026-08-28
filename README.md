# ComfyUI Theodore Director

一个面向分段视频生产的开源 ComfyUI 导播台。核心层只描述“项目、素材、分镜、时长与连续性”，模型差异由适配器承担；首个适配器面向 MiniMax H3，并附带已经融合好的 V7.2 导播台二采工作流。

Theodore Director is an open-source, model-agnostic storyboard director for ComfyUI. Model-specific limits live in adapters; the first adapter targets MiniMax H3. A ready-to-import V7.2 dual-sampling Director workflow is included.

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

“后处理 → 合并视频”需要 FFmpeg。程序依次查找 `THEODORE_DIRECTOR_FFMPEG` 环境变量、系统 `PATH` 和可选的 `imageio-ffmpeg` 内置程序；整合包若未提供 FFmpeg，请自行安装并加入 `PATH`。合并使用无损流复制、不重新编码；V7.2 通过局部 ComfyUI 任务执行合并节点，不运行 H3 模型，也不占用 GPU。

然后导入仓库内的成品工作流：

- [V7.2 导播台](workflows/V7.2导播台.json)

仓库不再附带旧版 V6 单采、双采示例；`V7.2导播台.json` 是当前唯一维护的示例工作流。工作流本身还需要下表中的第三方节点，模型文件名和放置位置沿用工作流节点中的配置。

| 依赖 | V7 | 用途 |
|---|---:|---|
| ComfyUI Impact Pack | ✓ | 队列触发、条件分支与控件写回 |
| ComfyUI MiniMax H3 Turbo | ✓ | H3 Turbo 采样/LoRA |
| ComfyUI H3 Motion Context | ✓ | 跨分镜 AV latent 连续性 |
| ComfyUI-KJNodes | ✓ | 加速、图像处理与尾帧保存 |
| ComfyUI-Easy-Use | ✓ | 尾帧索引 |
| NVIDIA RTX Video Nodes | ✓ | 二采前的 1.5× 视频超分 |

## 快速使用

1. 双击绿色区域内的 `Theodore Director Project`，点击“打开 Theodore 导播台”。
2. 在“素材库”添加参考图、参考视频或音频。可以单独上传，也可以使用“批量导入素材”混合选择或拖入多个文件；文件会复制到 `ComfyUI/input/theodore_director/<Project name>/`，也可以填写 input 目录相对路径。
3. 给素材设置唯一别名，例如 `hero_front`、`location_night`、`walk_cycle`。
4. 在分镜提示词中使用 `{{ref:hero_front}}`。若视频启用了伴音，可用 `{{ref:walk_cycle.audio}}` 单独指代其音轨。
5. 设置每个分镜的时长和启用状态，保存到工作流，然后正常 Queue。
6. 抽卡后可进入“后处理 → 单独二采”，对满意的一采结果直接精修；该任务不会重跑一采或启动 Impact 循环。
7. 全部分镜完成后进入“后处理 → 合并视频”，逐镜头选择一个结果并点击“合并所选视频”。
   也可以点击“打开结果文件夹”，直接在系统文件管理器中查看当前 Project name 与 Run ID 的全部分镜和合并结果。

### RunningHub

`running-hub` 分支同时保留本地 ComfyUI 与 RunningHub 两套运行时。RunningHub 域名会自动选择云端适配器，也可在“项目设置 → 运行环境”中手动切换。任务映射保存在导播台项目数据中，会随工作流和 Director JSON 导入、导出；它不参与生成哈希。API Key 默认只保存在当前页面内存，也可由用户主动勾选“在此设备记住 API Key”写入当前浏览器的站点存储，永远不会进入工作流或导出文件。

- 素材上传使用 RunningHub `POST /openapi/v2/media/upload/binary`，计划中保存响应的 `fileName`，不保存一天后可能失效的 `download_url`。
- 生成结果使用 `POST /openapi/v2/query`。任务映射每行可填写完整工作流 `taskId`、`shot_003=taskId` 或 `merged=taskId`；完整任务按启用镜头顺序归属视频。
- 视频合并与单独二采都通过 V7.2 的局部工作流支流执行，不依赖 RunningHub 会屏蔽的 Theodore 自定义 HTTP 路由。
- 云端没有可打开的服务器文件夹，因此 RunningHub 模式隐藏“打开结果文件夹”。本地模式保持原行为。
- “清除已保存 Key”会删除浏览器中的密钥并清空当前页面输入。记住功能默认关闭，不建议在公共电脑启用；换浏览器、清理站点数据或更换设备后需要重新填写。

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
  → V7 H3 条件编码与第一采样
  → Motion Context 分支：latentRelay=true 载入并裁切上一段 AV latent，false 直通
  → 二采画面分支：secondSampling=true 执行 RTX 超分、重编码和第二次 H3 采样，false 惰性跳过整条分支
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

每个新视频旁会写入一个小型 `.theodore.json` 伴随文件，用于标记一采、二采及二采来源。旧视频没有该文件时按“旧结果”兼容，并允许进行一次单独二采；已明确标记为二采的结果不会再次开放二采按钮。

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

当前分发的 `V7.2导播台.json` 接受 JSON 结构、链接端点、Theodore 核心节点、主流程二采、后处理独立二采与版权说明测试。[add_v7_postprocess_second_pass.py](tools/add_v7_postprocess_second_pass.py) 可幂等重建 V7.2 的局部二采支流；[build_v6_workflows.py](tools/build_v6_workflows.py) 仅保留为旧 V6 转换工具。项目只做静态工作流验收；模型实际推理由用户在自己的显存、模型和自定义节点组合上执行。

## License

代码与本仓库工作流采用 [Apache License 2.0](LICENSE)。模型、ComfyUI 与第三方自定义节点仍遵循各自许可证，详见 [THIRD_PARTY_NOTICES.md](THIRD_PARTY_NOTICES.md)。
