import type { RuntimeAdapter } from "./runtime-adapter";
import { readJson } from "./runtime-adapter";

export const localRuntimeAdapter: RuntimeAdapter = {
  id: "local",
  label: "Local ComfyUI",
  displayLabel: (language) => language === "zh" ? "本地 ComfyUI" : "Local ComfyUI",
  matchesHostname: () => false,
  assetBanner: () => null,
  capabilities: {
    uploadAsset: true,
    queryShotResults: true,
    queryMergedResults: true,
    mergeVideos: true,
    secondPass: true,
    openResultFolder: true,
  },
  unavailableReason(capability, context) {
    if (!this.capabilities[capability]) return `Local ComfyUI 不支持 ${capability}`;
    if (capability === "secondPass" && !context.queueSecondPass) return "当前工作流缺少后处理单独二采支流";
    return null;
  },
  async uploadAsset(_context, projectName, kind, file) {
    const body = new FormData();
    body.append("projectName", projectName);
    body.append("kind", kind);
    body.append("file", file);
    const response = await fetch("/theodore-director/v1/assets", { method: "POST", body });
    const result = await readJson<{ path?: string; error?: string }>(response);
    if (!result.path) throw new Error("上传响应缺少 path");
    return result.path;
  },
  async fetchShotResults(_context, plan, shot, activeIndex) {
    const query = new URLSearchParams({
      projectName: plan.project.name,
      runId: plan.project.runId,
      shotId: shot.id,
      activeIndex: String(activeIndex),
    });
    return readJson(await fetch(`/theodore-director/v1/generated-video?${query.toString()}`));
  },
  async fetchMergedResults(_context, plan) {
    const query = new URLSearchParams({ projectName: plan.project.name, runId: plan.project.runId });
    return readJson(await fetch(`/theodore-director/v1/postprocess/merged-videos?${query.toString()}`));
  },
  async mergeVideos(_context, request) {
    // 本地模式始终走 Theodore 后端 FFmpeg，不受工作流中是否存在合并节点影响。
    const response = await fetch("/theodore-director/v1/postprocess/merge", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(request),
    });
    await readJson<Record<string, unknown>>(response);
    return undefined;
  },
  async runSecondPass(context, request) {
    if (!context.queueSecondPass) throw new Error(this.unavailableReason("secondPass", context) ?? "单独二采不可用");
    await context.queueSecondPass(request);
  },
  async openResultFolder(_context, plan) {
    const response = await fetch("/theodore-director/v1/postprocess/open-folder", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ projectName: plan.project.name, runId: plan.project.runId }),
    });
    await readJson<Record<string, unknown>>(response);
  },
};
