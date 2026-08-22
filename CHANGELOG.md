# Changelog

## Unreleased

- 将每次运行收拢为 `output/TheodoreDirector/<project>_<run>/`，仅为 AV latent 和尾帧保留一层专用目录。
- 修复 `SaveImageKJ` 只返回文件名时，`CommitResult` 从 output 根目录错误回读尾帧的问题。
- 统一视频、尾帧、AV latent、结果清单和续跑校验所使用的保存路径。

## 0.1.0 - 2026-08-22

- 发布版本化通用 Director Plan v1。
- 发布 TypeScript + Preact 全屏导播台、JSON 导入导出和受限素材上传。
- 发布 MiniMax H3 别名解析、严格容量/时长校验及媒体惰性加载适配器。
- 发布最终时长补偿、禁用分镜、稳定 seed、续跑与原子结果清单。
- 发布 Impact V6 单采和双采融合工作流。
- 提供旧 `===` / `& 时长 &` 脚本迁移节点。
