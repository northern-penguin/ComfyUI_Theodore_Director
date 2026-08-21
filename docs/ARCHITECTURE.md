# Theodore Director Architecture

## 分层原则

核心协议不认识 MiniMax、Impact 或具体采样器。它只保存稳定、可迁移的生产意图：项目、素材目录、分镜、提示词、最终时长、seed 和连续性策略。`Plan` 与 `ShotSelection` 使用冻结数据类，节点执行期间不能原地修改。

H3 适配器是一个编译边界：输入通用 `PLAN + SHOT`，输出 H3 的提示词、合法生成帧数、9 个图片槽、3 个视频槽、3 个视频伴音槽和 3 个独立音频槽。虽然物理端口分开，适配器仍执行官方“有效音频总数 3”约束。

Impact Pack 只负责队列：

- `PrimitiveInt(314)` 保存当前索引；
- `ImpactExecutionOrderController` 让计划先解析，再把索引交给 SelectShot；
- `CommitResult` 成功后，`ImpactSetWidgetValue` 写入 next index；
- `has_next` 控制 `ImpactQueueTrigger`，最后一段不会额外排队。

## 计划协议 v1

```json
{
  "schemaVersion": 1,
  "project": { "id": "demo", "name": "Demo", "runId": "run_001" },
  "defaults": { "fps": 24, "baseSeed": 123456790 },
  "promptPrefix": "",
  "promptSuffix": "",
  "continuity": {
    "mode": "h3_av_latent",
    "videoContextFrames": 22,
    "audioContextFrames": 24,
    "durationMode": "final_output"
  },
  "assets": [],
  "shots": []
}
```

计划采用规范 JSON 哈希。每个分镜另有 shot hash，包含该分镜、适用素材、全局前后缀和连续性设置。续跑判断同时验证 plan hash、shot hash、结果状态以及视频、尾帧、latent 文件存在性。

## 时长语义

`final_output` 表示用户填写的是裁切后的最终分镜时长。首段无需补偿；后续段会先将 Motion Context 要裁去的上下文帧加回目标帧数，再吸附到 H3 的 `17n+5` 网格。适配器同时输出生成帧数和预计交付帧数。

`legacy_generation_duration` 只用于迁移旧脚本：填写值被解释为生成段时长，不补偿后续裁切，因此最终可见时长会略短。

## 文件与事务边界

工作流不再用“某个尾帧文件是否存在”作为唯一完成标志。`CommitResult` 依赖保存视频、保存 AV latent、保存尾帧三条链路；只有三者都能解析为真实文件时才原子替换分镜结果 JSON 和项目 manifest。崩溃时最多留下未提交文件，不会产生假的 completed 记录。

## 安全边界

- 浏览器上传只接受白名单扩展名，并将项目、文件名清洗后写入 `input/theodore_director`。
- 同名文件不会覆盖，自动附加随机后缀。
- 默认媒体读取只允许 ComfyUI 标注路径。
- 绝对路径读取必须显式设置 `THEODORE_DIRECTOR_ALLOW_EXTERNAL_PATHS=1`，适合可信的单用户环境；不建议在共享服务开启。
- 计划 JSON 永远由 Python 后端在执行前再次校验，浏览器预检不是安全边界。

## 扩展其他模型

新的模型适配器应保持 Project、SelectShot、OutputPaths 和 CommitResult 不变，只实现：

1. 模型自己的素材容量与时长校验；
2. 别名到模型原生提示标签的稳定编译；
3. 当前分镜素材的惰性加载；
4. 用户时长到模型合法帧数的映射；
5. 固定、版本化的 ComfyUI 输出端口。

不要把队列触发放进模型适配器；否则适配器会与 Impact、循环节点或未来其他调度器产生不必要耦合。
