export interface ClearProjectRequest {
  projectName: string;
  runId: string;
}

export function buildClearProjectRequest(projectName: string, runId: string): ClearProjectRequest {
  // 只向后端提交项目标识，不允许前端指定任何待删除的磁盘路径。
  return { projectName, runId };
}

export async function moveCurrentProjectToTrash(projectName: string, runId: string): Promise<string> {
  const response = await fetch("/theodore-director/v1/project/clear", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(buildClearProjectRequest(projectName, runId)),
  });
  const result = await response.json() as { ok?: boolean; path?: string; error?: string };
  if (!response.ok || !result.ok) throw new Error(result.error || `HTTP ${response.status}`);
  return result.path || "";
}
