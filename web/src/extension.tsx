import { openEditor } from "./editor";
import type { DirectorPlan } from "./types";

interface Widget { name: string; value: unknown; type?: string; computeSize?: () => [number, number] }
interface ComfyNode { widgets?: Widget[]; addWidget: (type: string, name: string, value: unknown, callback: () => void) => Widget; setDirtyCanvas: (foreground: boolean, background: boolean) => void; size?: [number, number] }
interface NodeType { prototype: { onNodeCreated?: () => void } }

// ComfyUI 在浏览器运行时提供此模块，使用动态导入可让前端独立构建与测试。
const comfyAppUrl = "/scripts/app.js";
void import(/* @vite-ignore */ comfyAppUrl).then(({ app }: { app: { registerExtension: (extension: unknown) => void; graph?: { setDirtyCanvas?: (foreground: boolean, background: boolean) => void } } }) => {
  app.registerExtension({
    name: "Theodore.Director.UI",
    beforeRegisterNodeDef(nodeType: NodeType, nodeData: { name: string }) {
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
            openEditor(initial, (plan) => {
              dataWidget.value = JSON.stringify(plan, null, 2);
              this.setDirtyCanvas(true, true);
              app.graph?.setDirtyCanvas?.(true, true);
            });
          } catch (error) {
            window.alert(`Theodore Director: ${error instanceof Error ? error.message : String(error)}`);
          }
        });
        this.size = [Math.max(this.size?.[0] ?? 300, 360), 110];
      };
    },
  });
});
