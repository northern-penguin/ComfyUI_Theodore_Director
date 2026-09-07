import { describe, expect, it } from "vitest";
import { buildClearProjectRequest } from "./clear-project";

describe("clear project request", () => {
  it("只提交 Project name 与 Run ID，不接受前端路径", () => {
    expect(buildClearProjectRequest("Demo", "run_001")).toEqual({
      projectName: "Demo",
      runId: "run_001",
    });
  });
});
