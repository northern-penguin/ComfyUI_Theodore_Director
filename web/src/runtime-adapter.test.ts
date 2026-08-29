import { afterEach, describe, expect, it, vi } from "vitest";
import { resolveRuntimeAdapter, runtimeContext } from "./runtime";
import type { DirectorPlan, MergeQueueRequest } from "./types";

const localSettings = { mode: "local", apiKey: "", taskMappings: "" } as const;
const runningHubSettings = { mode: "runninghub", apiKey: "secret", taskMappings: "merged=task_1" } as const;
const plan = { project: { name: "demo", runId: "1" }, shots: [{ id: "shot_001", enabled: true }] } as DirectorPlan;
const mergeRequest: MergeQueueRequest = {
  projectName: "demo",
  runId: "1",
  requestId: "merge_1",
  selections: [{ shotId: "shot_001", activeIndex: 0, path: "video.mp4" }],
};

function jsonResponse(value: unknown): Response {
  return new Response(JSON.stringify(value), { status: 200, headers: { "Content-Type": "application/json" } });
}

afterEach(() => vi.unstubAllGlobals());

describe("runtime adapter actions", () => {
  it("keeps local merge on the FFmpeg backend even when a workflow merge queue exists", async () => {
    const fetchMock = vi.fn().mockResolvedValue(jsonResponse({ path: "merged.mp4" }));
    const queueMerge = vi.fn();
    vi.stubGlobal("fetch", fetchMock);
    const adapter = resolveRuntimeAdapter(localSettings);

    await adapter.mergeVideos(runtimeContext(localSettings, { queueMerge }), mergeRequest);

    expect(queueMerge).not.toHaveBeenCalled();
    expect(fetchMock).toHaveBeenCalledWith("/theodore-director/v1/postprocess/merge", expect.objectContaining({ method: "POST" }));
  });

  it("uses the RunningHub workflow queue for merge without calling a local route", async () => {
    const fetchMock = vi.fn();
    const queueMerge = vi.fn().mockResolvedValue({ path: "https://cdn.example/merged.mp4", provider: "runninghub" });
    vi.stubGlobal("fetch", fetchMock);
    const adapter = resolveRuntimeAdapter(runningHubSettings);

    const result = await adapter.mergeVideos(runtimeContext(runningHubSettings, { queueMerge }), mergeRequest);

    expect(queueMerge).toHaveBeenCalledWith(mergeRequest);
    expect(fetchMock).not.toHaveBeenCalled();
    expect(result?.provider).toBe("runninghub");
  });

  it("keeps local upload, result queries and folder opening on Theodore routes", async () => {
    const fetchMock = vi.fn()
      .mockResolvedValueOnce(jsonResponse({ path: "theodore_director/demo/hero.png" }))
      .mockResolvedValueOnce(jsonResponse({ found: true, results: [{ path: "shot.mp4" }] }))
      .mockResolvedValueOnce(jsonResponse({ found: true, results: [{ path: "merged.mp4" }] }))
      .mockResolvedValueOnce(jsonResponse({ opened: true }));
    vi.stubGlobal("fetch", fetchMock);
    const adapter = resolveRuntimeAdapter(localSettings);
    const context = runtimeContext(localSettings);

    await adapter.uploadAsset(context, "demo", "image", new Blob(["image"]) as File);
    await adapter.fetchShotResults(context, plan, plan.shots[0], 0);
    await adapter.fetchMergedResults(context, plan);
    await adapter.openResultFolder(context, plan);

    expect(fetchMock.mock.calls.map(([url]) => String(url))).toEqual([
      "/theodore-director/v1/assets",
      expect.stringContaining("/theodore-director/v1/generated-video?"),
      expect.stringContaining("/theodore-director/v1/postprocess/merged-videos?"),
      "/theodore-director/v1/postprocess/open-folder",
    ]);
  });

  it("reports missing RunningHub workflow branches through capability availability", () => {
    const adapter = resolveRuntimeAdapter(runningHubSettings);
    const context = runtimeContext(runningHubSettings);
    expect(adapter.unavailableReason("mergeVideos", context)).toContain("合并支流");
    expect(adapter.unavailableReason("secondPass", context)).toContain("二采支流");
    expect(adapter.capabilities.openResultFolder).toBe(false);
  });

  it("reports a missing RunningHub merged task mapping without issuing a query", async () => {
    const fetchMock = vi.fn();
    vi.stubGlobal("fetch", fetchMock);
    const settings = { ...runningHubSettings, taskMappings: "task_1" };
    const adapter = resolveRuntimeAdapter(settings);

    const result = await adapter.fetchMergedResults(runtimeContext(settings), plan);

    expect(result.error).toContain("merged=taskId");
    expect(fetchMock).not.toHaveBeenCalled();
  });
});
