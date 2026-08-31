import { openEditor } from "./editor";
import type { DirectorPlan } from "./types";
import type { MergeQueueRequest, QueueMerge, QueueSecondPass, SecondPassQueueRequest } from "./types";
import type { GeneratedVideoItem } from "./generated-results";
import directorStyles from "./style.css?inline";
import { app as comfyApp } from "../../scripts/app.js";
import { api as comfyApi } from "../../scripts/api.js";
import { THEODORE_VERSION_LABEL } from "./version";

const STYLE_ID = "theodore-director-styles";

function ensureDirectorStyles(): void {
  if (document.getElementById(STYLE_ID)) return;
  const style = document.createElement("style");
  style.id = STYLE_ID;
  style.textContent = directorStyles;
  document.head.append(style);
}

// ComfyUI 只自动加载 web 目录中的 JavaScript，样式必须由扩展主动注入。
ensureDirectorStyles();

// 控制台标记用于排查云平台 CDN 是否仍在提供旧的前端构建。
console.info(`[Theodore Director] frontend ${THEODORE_VERSION_LABEL}`);

interface Widget { name: string; value: unknown; type?: string; computeSize?: () => [number, number] }
interface ComfyNode { id?: number | string; mode?: number; widgets?: Widget[]; addWidget: (type: string, name: string, value: unknown, callback: () => void) => Widget; setDirtyCanvas: (foreground: boolean, background: boolean) => void; size?: [number, number]; type?: string; title?: string }
interface NodeType { prototype: { onNodeCreated?: () => void } }
interface GraphPrompt { output: Record<string, unknown>; workflow: unknown }
interface ComfyApp { registerExtension: (extension: unknown) => void; graph?: { _nodes?: ComfyNode[]; setDirtyCanvas?: (foreground: boolean, background: boolean) => void }; rootGraph?: unknown; graphToPrompt: (graph?: unknown) => Promise<GraphPrompt> }
interface ComfyApi {
  queuePrompt: (number: number, prompt: GraphPrompt, options?: { partialExecutionTargets?: string[] }) => Promise<{ prompt_id?: string }>;
  addEventListener: (name: string, listener: EventListener) => void;
  removeEventListener: (name: string, listener: EventListener) => void;
}

function savedResultFromExecuted(detail: Record<string, unknown>): GeneratedVideoItem | undefined {
  const output = (detail.output ?? {}) as Record<string, unknown>;
  const candidates = [output.gifs, output.videos, output.images]
    .find((value) => Array.isArray(value)) as Array<Record<string, unknown>> | undefined;
  const saved = candidates?.[0];
  const filename = String(saved?.filename ?? "").trim();
  if (!filename) return undefined;
  const subfolder = String(saved?.subfolder ?? "").trim().replace(/\\/g, "/").replace(/^\/+|\/+$/g, "");
  return {
    path: [subfolder, filename].filter(Boolean).join("/"),
    provider: "local",
    stage: "legacy_unknown",
  };
}

// 使用 ComfyUI 扩展约定的静态导入。RunningHub 会在部署时识别并重写这两个依赖，
// 本地 ComfyUI 则按扩展目录相对路径解析到自身的 scripts 模块。
function registerDirectorExtension(): void {
  const app = comfyApp as unknown as ComfyApp;
  const api = comfyApi as unknown as ComfyApi;
  const queueStandaloneSecondPass: QueueSecondPass = async (request: SecondPassQueueRequest) => {
    const nodes = app.graph?._nodes ?? [];
    const source = nodes.find((node) => node.type === "TheodoreDirector_PostprocessSecondPassSource");
    const target = nodes.find((node) => node.type === "TheodoreDirector_SaveSecondPass");
    const requestWidget = source?.widgets?.find((widget) => widget.name === "request_json");
    if (!source || !target || !requestWidget || target.id === undefined) {
      throw new Error("当前工作流缺少后处理单独二采支流，请重新载入仓库中的 V7 导播台示例工作流");
    }
    const previousValue = requestWidget.value;
    const previousSourceMode = source.mode;
    const previousTargetMode = target.mode;
    let prompt: GraphPrompt;
    try {
      // 支流平时保持 NEVER；这里只在序列化局部任务时临时启用，不污染用户工作流。
      requestWidget.value = JSON.stringify(request);
      source.mode = 0;
      target.mode = 0;
      prompt = await app.graphToPrompt(app.rootGraph);
    } finally {
      requestWidget.value = previousValue;
      source.mode = previousSourceMode;
      target.mode = previousTargetMode;
    }
    const queued = await api.queuePrompt(0, prompt, { partialExecutionTargets: [String(target.id)] });
    const promptId = queued.prompt_id;
    if (!promptId) throw new Error("ComfyUI 没有返回二采任务 ID");

    await new Promise<void>((resolve, reject) => {
      const cleanup = () => {
        api.removeEventListener("execution_success", onSuccess);
        api.removeEventListener("execution_error", onFailure);
        api.removeEventListener("execution_interrupted", onFailure);
      };
      const eventPromptId = (event: Event) => String((event as CustomEvent<Record<string, unknown>>).detail?.prompt_id ?? "");
      const onSuccess = (event: Event) => {
        if (eventPromptId(event) !== promptId) return;
        cleanup();
        resolve();
      };
      const onFailure = (event: Event) => {
        if (eventPromptId(event) !== promptId) return;
        const detail = (event as CustomEvent<Record<string, unknown>>).detail ?? {};
        cleanup();
        reject(new Error(String(detail.exception_message ?? detail.error ?? "单独二采任务执行失败")));
      };
      api.addEventListener("execution_success", onSuccess);
      api.addEventListener("execution_error", onFailure);
      api.addEventListener("execution_interrupted", onFailure);
    });
  };

  const queueMerge: QueueMerge = async (request: MergeQueueRequest) => {
    const nodes = app.graph?._nodes ?? [];
    const target = nodes.find((node) => node.type === "TheodoreDirector_MergeVideos");
    const requestWidget = target?.widgets?.find((widget) => widget.name === "request_json");
    if (!target || !requestWidget || target.id === undefined) {
      throw new Error("当前工作流缺少 Theodore 合并支流，请重新载入仓库中的 V7.2 示例工作流");
    }
    const previousValue = requestWidget.value;
    const previousMode = target.mode;
    let prompt: GraphPrompt;
    try {
      requestWidget.value = JSON.stringify(request);
      target.mode = 0;
      prompt = await app.graphToPrompt(app.rootGraph);
    } finally {
      requestWidget.value = previousValue;
      target.mode = previousMode;
    }
    const queued = await api.queuePrompt(0, prompt, { partialExecutionTargets: [String(target.id)] });
    const promptId = queued.prompt_id;
    if (!promptId) throw new Error("ComfyUI 没有返回合并任务 ID");

    return new Promise<GeneratedVideoItem | undefined>((resolve, reject) => {
      let saved: GeneratedVideoItem | undefined;
      const cleanup = () => {
        api.removeEventListener("executed", onExecuted);
        api.removeEventListener("execution_success", onSuccess);
        api.removeEventListener("execution_error", onFailure);
        api.removeEventListener("execution_interrupted", onFailure);
      };
      const detailOf = (event: Event) => (event as CustomEvent<Record<string, unknown>>).detail ?? {};
      const samePrompt = (detail: Record<string, unknown>) => String(detail.prompt_id ?? "") === promptId;
      const onExecuted = (event: Event) => {
        const detail = detailOf(event);
        if (!samePrompt(detail) || String(detail.node ?? "") !== String(target.id)) return;
        saved = savedResultFromExecuted(detail) ?? saved;
      };
      const onSuccess = (event: Event) => {
        const detail = detailOf(event);
        if (!samePrompt(detail)) return;
        cleanup();
        resolve(saved);
      };
      const onFailure = (event: Event) => {
        const detail = detailOf(event);
        if (!samePrompt(detail)) return;
        cleanup();
        reject(new Error(String(detail.exception_message ?? detail.error ?? "合并任务执行失败")));
      };
      api.addEventListener("executed", onExecuted);
      api.addEventListener("execution_success", onSuccess);
      api.addEventListener("execution_error", onFailure);
      api.addEventListener("execution_interrupted", onFailure);
    });
  };

  app.registerExtension({
    name: "Theodore.Director.UI",
    beforeRegisterNodeDef(nodeType: NodeType, nodeData: { name: string; display_name?: string }) {
      if (nodeData.name === "TheodoreDirector_PostprocessSecondPassSource" || nodeData.name === "TheodoreDirector_MergeVideos") {
        const originalSourceCreated = nodeType.prototype.onNodeCreated;
        nodeType.prototype.onNodeCreated = function (this: ComfyNode) {
          originalSourceCreated?.apply(this);
          const requestWidget = this.widgets?.find((widget) => widget.name === "request_json");
          if (requestWidget) {
            // 请求仅由导播台在局部排队瞬间写入，画布上不开放手工编辑。
            requestWidget.type = "hidden";
            requestWidget.computeSize = () => [0, -4];
          }
          this.size = [Math.max(this.size?.[0] ?? 300, 380), 80];
        };
        return;
      }
      if (nodeData.name !== "TheodoreDirector_Project") return;
      const original = nodeType.prototype.onNodeCreated;
      nodeType.prototype.onNodeCreated = function (this: ComfyNode) {
        original?.apply(this);
        const dataWidget = this.widgets?.find((widget) => widget.name === "plan_json");
        if (!dataWidget) return;
        // JSON 仍嵌入工作流，但收起原始文本控件，日常操作只通过可视化编辑器。
        dataWidget.type = "hidden";
        dataWidget.computeSize = () => [0, -4];
        this.addWidget("button", `打开 Theodore 导播台 / Open Director · ${THEODORE_VERSION_LABEL}`, null, () => {
          try {
            const initial = JSON.parse(String(dataWidget.value)) as DirectorPlan;
            const workflowNodes = app.graph?._nodes ?? [];
            const supportsStandaloneSecondPass = workflowNodes.some((node) => node.type === "TheodoreDirector_PostprocessSecondPassSource")
              && workflowNodes.some((node) => node.type === "TheodoreDirector_SaveSecondPass");
            const supportsMerge = workflowNodes.some((node) => node.type === "TheodoreDirector_MergeVideos");
            openEditor(initial, (plan) => {
              dataWidget.value = JSON.stringify(plan, null, 2);
              this.setDirtyCanvas(true, true);
              app.graph?.setDirtyCanvas?.(true, true);
            }, true, supportsStandaloneSecondPass ? queueStandaloneSecondPass : undefined, supportsMerge ? queueMerge : undefined, nodeData.display_name);
          } catch (error) {
            window.alert(`Theodore Director: ${error instanceof Error ? error.message : String(error)}`);
          }
        });
        this.size = [Math.max(this.size?.[0] ?? 300, 360), 110];
      };
    },
  });
}

registerDirectorExtension();
