import type { RuntimeAdapterSettingsProps } from "./runtime-adapter";

export function RunningHubSettingsPanel({ language, settings, onChange, rememberSecret, onRememberSecretChange, onClearSavedSecret, onProjectSettingChange }: RuntimeAdapterSettingsProps) {
  return <>
    <label>RunningHub API Key<input type="password" autocomplete="off" value={settings.apiKey} placeholder={language === "zh" ? "默认仅保存在当前页面内存" : "Kept only in page memory by default"} onInput={(event) => onChange({ ...settings, apiKey: event.currentTarget.value })}/></label>
    <div class="td-runtime-key-controls">
      <label><input type="checkbox" checked={rememberSecret} onChange={(event) => onRememberSecretChange(event.currentTarget.checked)}/><span>{language === "zh" ? "在此设备记住 API Key" : "Remember API Key on this device"}</span></label>
      <button type="button" onClick={onClearSavedSecret}>{language === "zh" ? "清除已保存 Key" : "Clear saved Key"}</button>
      <small>{language === "zh" ? "默认不保存；公共电脑不建议启用。Key 仅写入当前浏览器站点存储，不进入工作流或导出文件。" : "Off by default; avoid on shared computers. The key is stored only in this browser and never enters the workflow or exports."}</small>
    </div>
    <label>{language === "zh" ? "任务映射（每行一项）" : "Task mappings (one per line)"}<textarea rows={5} value={settings.taskMappings} placeholder={"完整工作流 taskId\nshot_003=taskId\nmerged=taskId"} onInput={(event) => { const taskMappings = event.currentTarget.value; onChange({ ...settings, taskMappings }); onProjectSettingChange("runningHubTaskMappings", taskMappings); }}/><small>{language === "zh" ? "单独 taskId 按启用镜头顺序归属；也可显式指定镜头或合并任务。任务映射属于项目数据，会随工作流保存、导入和导出。" : "A bare taskId follows enabled-shot order; shot and merged tasks can be explicit. Task mappings are project data and follow workflow save, import, and export."}</small></label>
  </>;
}
