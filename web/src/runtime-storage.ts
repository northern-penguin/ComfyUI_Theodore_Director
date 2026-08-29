/** API Key 仅保存在当前浏览器站点存储中，绝不进入导播台计划。 */
export const RUNNINGHUB_API_KEY_STORAGE_KEY = "theodore-director.runninghub-api-key";

type StorageLike = Pick<Storage, "getItem" | "setItem" | "removeItem">;

function browserStorage(): StorageLike | null {
  try {
    return typeof window === "undefined" ? null : window.localStorage;
  } catch {
    // 隐私模式或平台沙箱可能禁止 localStorage，调用方仍可继续使用会话内存。
    return null;
  }
}

export function readSavedRunningHubApiKey(storage: StorageLike | null = browserStorage()): string | null {
  try {
    const value = storage?.getItem(RUNNINGHUB_API_KEY_STORAGE_KEY)?.trim();
    return value || null;
  } catch {
    return null;
  }
}

export function saveRunningHubApiKey(apiKey: string, storage: StorageLike | null = browserStorage()): boolean {
  const value = apiKey.trim();
  if (!value || !storage) return false;
  try {
    storage.setItem(RUNNINGHUB_API_KEY_STORAGE_KEY, value);
    return true;
  } catch {
    return false;
  }
}

export function clearSavedRunningHubApiKey(storage: StorageLike | null = browserStorage()): boolean {
  if (!storage) return false;
  try {
    storage.removeItem(RUNNINGHUB_API_KEY_STORAGE_KEY);
    return true;
  } catch {
    return false;
  }
}
