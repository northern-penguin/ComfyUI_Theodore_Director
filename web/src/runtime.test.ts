import { describe, expect, it } from "vitest";
import { assignWorkflowResults, parseRunningHubTaskMappings, resolveRuntimeMode, runningHubApiUrl } from "./runtime";
import type { DirectorPlan } from "./types";

const plan = {
  shots: [
    { id: "shot_001", enabled: true },
    { id: "shot_002", enabled: false },
    { id: "shot_003", enabled: true },
  ],
} as DirectorPlan;

describe("RunningHub runtime", () => {
  it("detects RunningHub without changing explicit modes", () => {
    expect(resolveRuntimeMode({ mode: "auto" }, "www.runninghub.cn")).toBe("runninghub");
    expect(resolveRuntimeMode({ mode: "auto" }, "localhost")).toBe("local");
    expect(resolveRuntimeMode({ mode: "local" }, "www.runninghub.cn")).toBe("local");
  });

  it("parses workflow, shot and merged task mappings", () => {
    expect(parseRunningHubTaskMappings("100\nshot_003=200, merged=300\ninvalid=!"))
      .toEqual([
        { target: "workflow", taskId: "100" },
        { target: "shot_003", taskId: "200" },
        { target: "merged", taskId: "300" },
      ]);
  });

  it("groups complete workflow results by enabled shot order", () => {
    const results = ["a.mp4", "b.mp4", "c.mp4", "d.mp4"].map((url) => ({ url: `https://cdn.example/${url}`, outputType: "mp4" }));
    expect(assignWorkflowResults(results, plan, plan.shots[0]).map((item) => item.url)).toEqual([
      "https://cdn.example/a.mp4",
      "https://cdn.example/c.mp4",
    ]);
    expect(assignWorkflowResults(results, plan, plan.shots[2]).map((item) => item.url)).toEqual([
      "https://cdn.example/b.mp4",
      "https://cdn.example/d.mp4",
    ]);
  });

  it("uses the current RunningHub origin and the official fallback elsewhere", () => {
    expect(runningHubApiUrl("/openapi/v2/query", { origin: "https://www.runninghub.cn", hostname: "www.runninghub.cn" } as Location))
      .toBe("https://www.runninghub.cn/openapi/v2/query");
    expect(runningHubApiUrl("/openapi/v2/query", { origin: "http://localhost:8188", hostname: "localhost" } as Location))
      .toBe("https://www.runninghub.cn/openapi/v2/query");
  });
});
