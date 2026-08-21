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
      output: { assetFileNames: "theodore-director.[ext]" },
    },
  },
});
