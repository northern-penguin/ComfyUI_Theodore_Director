import { openEditor } from "./editor";
import type { DirectorPlan } from "./types";
import type { QueueSecondPass, SecondPassQueueRequest } from "./types";
import directorStyles from "./style.css?inline";

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

// ComfyUI 在浏览器运行时提供此模块，使用动态导入可让前端独立构建与测试。
const comfyAppUrl = "/scripts/app.js";
const comfyApiUrl = "/scripts/api.js";
void Promise.all([
  import(/* @vite-ignore */ comfyAppUrl),
  import(/* @vite-ignore */ comfyApiUrl),
]).then(([{ app }, { api }]: [{ app: ComfyApp }, { api: ComfyApi }]) => {
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

  app.registerExtension({
    name: "Theodore.Director.UI",
    beforeRegisterNodeDef(nodeType: NodeType, nodeData: { name: string }) {
      if (nodeData.name === "TheodoreDirector_PostprocessSecondPassSource") {
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
        this.addWidget("button", "打开 Theodore 导播台 / Open Director", null, () => {
          try {
            const initial = JSON.parse(String(dataWidget.value)) as DirectorPlan;
            const workflowNodes = app.graph?._nodes ?? [];
            const supportsStandaloneSecondPass = workflowNodes.some((node) => node.type === "TheodoreDirector_PostprocessSecondPassSource")
              && workflowNodes.some((node) => node.type === "TheodoreDirector_SaveSecondPass");
            openEditor(initial, (plan) => {
              dataWidget.value = JSON.stringify(plan, null, 2);
              this.setDirtyCanvas(true, true);
              app.graph?.setDirtyCanvas?.(true, true);
            }, true, supportsStandaloneSecondPass ? queueStandaloneSecondPass : undefined);
          } catch (error) {
            window.alert(`Theodore Director: ${error instanceof Error ? error.message : String(error)}`);
          }
        });
        this.size = [Math.max(this.size?.[0] ?? 300, 360), 110];
      };
    },
  });
});
