import { defineConfig } from "vite";
import preact from "@preact/preset-vite";

export default defineConfig({
  plugins: [preact()],
  build: {
    emptyOutDir: true,
    outDir: "web/dist",
    lib: {
      entry: "web/src/extension.tsx",
      formats: ["es"],
      fileName: () => "theodore-director.js",
    },
    rollupOptions: {
      // 保留 ComfyUI 运行时模块的静态导入，供本地 ComfyUI 或 RunningHub 自行解析。
      external: ["../../scripts/app.js", "../../scripts/api.js"],
      output: { assetFileNames: "theodore-director.[ext]" },
    },
  },
});
