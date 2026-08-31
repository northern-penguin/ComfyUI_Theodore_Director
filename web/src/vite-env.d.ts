/// <reference types="vite/client" />

declare module "*.css?inline" {
  const content: string;
  export default content;
}

// ComfyUI 在运行时提供这些模块；通配声明让 TypeScript 保留静态导入而不要求本地源码存在。
declare module "*scripts/app.js" {
  export const app: unknown;
}

declare module "*scripts/api.js" {
  export const api: unknown;
}
