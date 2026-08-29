import { describe, expect, it } from "vitest";
import { clearSavedRunningHubApiKey, readSavedRunningHubApiKey, RUNNINGHUB_API_KEY_STORAGE_KEY, saveRunningHubApiKey } from "./runtime-storage";

function memoryStorage() {
  const values = new Map<string, string>();
  return {
    getItem: (key: string) => values.get(key) ?? null,
    setItem: (key: string, value: string) => { values.set(key, value); },
    removeItem: (key: string) => { values.delete(key); },
  };
}

describe("RunningHub API Key browser storage", () => {
  it("saves, restores and clears a key without involving plan JSON", () => {
    const storage = memoryStorage();
    expect(saveRunningHubApiKey("  secret-key  ", storage)).toBe(true);
    expect(storage.getItem(RUNNINGHUB_API_KEY_STORAGE_KEY)).toBe("secret-key");
    expect(readSavedRunningHubApiKey(storage)).toBe("secret-key");
    expect(clearSavedRunningHubApiKey(storage)).toBe(true);
    expect(readSavedRunningHubApiKey(storage)).toBeNull();
  });

  it("fails closed when storage access is unavailable", () => {
    const blocked = {
      getItem: () => { throw new Error("blocked"); },
      setItem: () => { throw new Error("blocked"); },
      removeItem: () => { throw new Error("blocked"); },
    };
    expect(readSavedRunningHubApiKey(blocked)).toBeNull();
    expect(saveRunningHubApiKey("secret", blocked)).toBe(false);
    expect(clearSavedRunningHubApiKey(blocked)).toBe(false);
  });
});
