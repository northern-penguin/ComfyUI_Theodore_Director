import { useEffect, useMemo, useRef, useState } from "preact/hooks";
import type { Language } from "./i18n";
import {
  candidateIsStale,
  fetchOllamaModels,
  optimizePrompt,
  promptSourceKey,
  unloadOllamaModel,
  type OllamaModel,
  type PromptCandidate,
} from "./prompt-optimizer";
import type { DirectorPlan, DirectorShot } from "./types";

interface Props {
  plan: DirectorPlan;
  currentShotId: string;
  language: Language;
  onSelectShot: (shotId: string) => void;
  onApplyPrompts: (updates: Record<string, string>) => void;
}

const STORAGE_PORT = "theodore-director.ollama-port";
const STORAGE_HOST = "theodore-director.ollama-host";
const STORAGE_MODEL = "theodore-director.ollama-model";

function storedValue(key: string, fallback: string): string {
  try { return window.localStorage.getItem(key) || fallback; } catch { return fallback; }
}

function statusLabel(candidate: PromptCandidate, stale: boolean, language: Language): string {
  if (stale) return language === "zh" ? "已过期" : "Stale";
  const labels = language === "zh"
    ? { pending: "等待中", running: "优化中", ready: "可应用", failed: "失败", applied: "已写回" }
    : { pending: "Pending", running: "Running", ready: "Ready", failed: "Failed", applied: "Applied" };
  return labels[candidate.status];
}

export function PromptOptimizerPanel({ plan, currentShotId, language, onSelectShot, onApplyPrompts }: Props) {
  const [open, setOpen] = useState(false);
  const [host, setHost] = useState<"127.0.0.1" | "localhost">(() => storedValue(STORAGE_HOST, "127.0.0.1") === "localhost" ? "localhost" : "127.0.0.1");
  const [portText, setPortText] = useState(() => storedValue(STORAGE_PORT, "11434"));
  const [model, setModel] = useState(() => storedValue(STORAGE_MODEL, ""));
  const [models, setModels] = useState<OllamaModel[]>([]);
  const [runningModels, setRunningModels] = useState<OllamaModel[]>([]);
  const [connectionError, setConnectionError] = useState("");
  const [loadingModels, setLoadingModels] = useState(false);
  const [candidates, setCandidates] = useState<Record<string, PromptCandidate>>({});
  const [viewShotId, setViewShotId] = useState(currentShotId);
  const [busy, setBusy] = useState(false);
  const [batchRunning, setBatchRunning] = useState(false);
  const [unloading, setUnloading] = useState(false);
  const abortRef = useRef<AbortController | null>(null);
  const stopRef = useRef(false);

  const port = Number(portText);
  const validPort = Number.isInteger(port) && port >= 1 && port <= 65535;
  const currentShot = plan.shots.find((shot) => shot.id === currentShotId);
  const viewShot = plan.shots.find((shot) => shot.id === viewShotId) ?? currentShot;
  const viewed = viewShot ? candidates[viewShot.id] : undefined;
  const viewedStale = Boolean(viewed && viewShot && candidateIsStale(viewed, plan, viewShot));
  const selectedRunning = runningModels.some((item) => item.name === model || item.model === model);

  const applicable = useMemo(() => plan.shots.filter((shot) => {
    const candidate = candidates[shot.id];
    return candidate?.status === "ready" && candidate.validation.valid && !candidateIsStale(candidate, plan, shot);
  }), [candidates, plan]);

  const refreshModels = async () => {
    if (!validPort) { setConnectionError(language === "zh" ? "端口必须在 1–65535 之间" : "Port must be between 1 and 65535"); return; }
    setLoadingModels(true);
    setConnectionError("");
    try {
      const [installed, running] = await Promise.all([fetchOllamaModels(host, port), fetchOllamaModels(host, port, true)]);
      setModels(installed);
      setRunningModels(running);
      setModel((current) => installed.some((item) => item.name === current) ? current : (installed[0]?.name ?? ""));
    } catch (error) {
      setModels([]);
      setRunningModels([]);
      setConnectionError(String(error));
    } finally {
      setLoadingModels(false);
    }
  };

  useEffect(() => {
    // 面板首次挂载时尝试发现模型；Ollama 未启动只显示错误，不影响导播台其他功能。
    void refreshModels();
    return () => abortRef.current?.abort();
  }, []);
  useEffect(() => { setViewShotId(currentShotId); }, [currentShotId]);
  useEffect(() => { try { window.localStorage.setItem(STORAGE_HOST, host); } catch { /* 嵌入浏览器可能禁用本地存储。 */ } }, [host]);
  useEffect(() => { try { window.localStorage.setItem(STORAGE_PORT, portText); } catch { /* 嵌入浏览器可能禁用本地存储。 */ } }, [portText]);
  useEffect(() => { try { if (model) window.localStorage.setItem(STORAGE_MODEL, model); } catch { /* 同上。 */ } }, [model]);

  const runOne = async (shot: DirectorShot, sourcePlan = plan): Promise<void> => {
    const sourceKey = promptSourceKey(sourcePlan, shot);
    const sourcePrompt = shot.prompt;
    setCandidates((current) => ({ ...current, [shot.id]: {
      shotId: shot.id, sourcePrompt, sourceKey, status: "running", optimizedPrompt: "", notes: [],
      validation: { mode: "base", valid: false, errors: [], warnings: [] }, repaired: false, attempts: 0,
    } }));
    setViewShotId(shot.id);
    const controller = new AbortController();
    abortRef.current = controller;
    try {
      const result = await optimizePrompt(sourcePlan, shot.id, host, port, model, controller.signal);
      setCandidates((current) => ({ ...current, [shot.id]: { ...result, shotId: shot.id, sourcePrompt, sourceKey, status: "ready" } }));
    } catch (error) {
      const message = error instanceof DOMException && error.name === "AbortError"
        ? (language === "zh" ? "用户已取消" : "Cancelled by user")
        : String(error);
      setCandidates((current) => ({ ...current, [shot.id]: {
        shotId: shot.id, sourcePrompt, sourceKey, status: "failed", optimizedPrompt: "", notes: [], error: message,
        validation: { mode: "base", valid: false, errors: [], warnings: [] }, repaired: false, attempts: 0,
      } }));
    } finally {
      if (abortRef.current === controller) abortRef.current = null;
    }
  };

  const optimizeCurrent = async () => {
    if (!currentShot || !validPort || !model || busy) return;
    setBusy(true);
    try { await runOne(currentShot); } finally { setBusy(false); }
  };

  const optimizeBatch = async () => {
    if (!validPort || !model || busy) return;
    const snapshot = structuredClone(plan);
    const shots = snapshot.shots.filter((shot) => shot.enabled);
    stopRef.current = false;
    setBusy(true);
    setBatchRunning(true);
    setCandidates((current) => {
      const next = { ...current };
      for (const shot of shots) next[shot.id] = {
        shotId: shot.id, sourcePrompt: shot.prompt, sourceKey: promptSourceKey(snapshot, shot), status: "pending",
        optimizedPrompt: "", notes: [], validation: { mode: "base", valid: false, errors: [], warnings: [] }, repaired: false, attempts: 0,
      };
      return next;
    });
    try {
      for (const shot of shots) {
        if (stopRef.current) break;
        await runOne(shot, snapshot);
      }
    } finally {
      setBatchRunning(false);
      setBusy(false);
    }
  };

  const stopBatch = () => {
    stopRef.current = true;
    abortRef.current?.abort();
  };

  const applyCandidate = (shot: DirectorShot, candidate: PromptCandidate) => {
    if (candidate.status !== "ready" || !candidate.validation.valid || candidateIsStale(candidate, plan, shot)) return;
    onApplyPrompts({ [shot.id]: candidate.optimizedPrompt });
    setCandidates((current) => ({ ...current, [shot.id]: { ...candidate, status: "applied" } }));
  };

  const applyAll = () => {
    const updates: Record<string, string> = {};
    for (const shot of applicable) updates[shot.id] = candidates[shot.id].optimizedPrompt;
    if (!Object.keys(updates).length) return;
    onApplyPrompts(updates);
    setCandidates((current) => {
      const next = { ...current };
      for (const shotId of Object.keys(updates)) next[shotId] = { ...next[shotId], status: "applied" };
      return next;
    });
  };

  const undoCandidate = (shot: DirectorShot, candidate: PromptCandidate) => {
    if (candidate.status !== "applied" || shot.prompt !== candidate.optimizedPrompt) return;
    onApplyPrompts({ [shot.id]: candidate.sourcePrompt });
    setCandidates((current) => ({ ...current, [shot.id]: { ...candidate, status: "ready" } }));
  };

  const releaseModel = async () => {
    if (!validPort || !model || unloading) return;
    setUnloading(true);
    setConnectionError("");
    try {
      await unloadOllamaModel(host, port, model);
      setRunningModels((current) => current.filter((item) => item.name !== model && item.model !== model));
    } catch (error) {
      setConnectionError(String(error));
    } finally {
      setUnloading(false);
    }
  };

  return <details open={open} onToggle={(event) => setOpen(event.currentTarget.open)} class="td-ai-panel">
    <summary><strong>{language === "zh" ? "AI 提示词优化" : "AI prompt optimizer"}</strong><span class={`td-result-state ${applicable.length ? "found" : ""}`}>{busy ? (language === "zh" ? "处理中" : "Running") : applicable.length ? `${applicable.length} ${language === "zh" ? "项可应用" : "ready"}` : (language === "zh" ? "Ollama" : "Ollama")}</span></summary>
    <div class="td-preview-body td-ai-body">
      <div class="td-ai-settings">
        <label><span>{language === "zh" ? "本机地址" : "Local host"}</span><select value={host} onChange={(event) => setHost(event.currentTarget.value === "localhost" ? "localhost" : "127.0.0.1")}><option value="127.0.0.1">127.0.0.1</option><option value="localhost">localhost</option></select></label>
        <label><span>{language === "zh" ? "本机端口" : "Local port"}</span><input type="number" min="1" max="65535" value={portText} onInput={(event) => setPortText(event.currentTarget.value)}/></label>
        <label><span>{language === "zh" ? "模型" : "Model"}</span><select value={model} onChange={(event) => setModel(event.currentTarget.value)}><option value="">{language === "zh" ? "请选择模型" : "Select a model"}</option>{models.map((item) => <option value={item.name}>{item.name}</option>)}</select></label>
        <button disabled={loadingModels || busy} onClick={() => void refreshModels()}>{loadingModels ? "…" : "↻"} {language === "zh" ? "刷新模型" : "Refresh"}</button>
        <button disabled={!model || unloading || busy} onClick={() => void releaseModel()}>{unloading ? "…" : "◌"} {language === "zh" ? "释放当前模型" : "Unload model"}</button>
      </div>
      <div class="td-ai-model-state">{model ? <span class={selectedRunning ? "running" : ""}>{selectedRunning ? (language === "zh" ? "模型正在驻留" : "Model is loaded") : (language === "zh" ? "模型未驻留；首次优化时加载" : "Not loaded; loads on first run")}</span> : null}{connectionError && <span class="errors">{connectionError}</span>}</div>
      <div class="td-ai-actions">
        <button class="primary" disabled={!currentShot || !model || !validPort || busy} onClick={() => void optimizeCurrent()}>{language === "zh" ? "优化当前镜头" : "Optimize current shot"}</button>
        <button disabled={!model || !validPort || busy} onClick={() => void optimizeBatch()}>{language === "zh" ? "批量优化全部启用镜头" : "Optimize all enabled shots"}</button>
        {batchRunning && <button class="danger" onClick={stopBatch}>{language === "zh" ? "停止批量任务" : "Stop batch"}</button>}
        <button disabled={!applicable.length || busy} onClick={applyAll}>{language === "zh" ? `应用全部通过项（${applicable.length}）` : `Apply all valid (${applicable.length})`}</button>
      </div>

      {Object.keys(candidates).length > 0 && <div class="td-ai-candidate-list">{plan.shots.filter((item) => candidates[item.id]).map((item) => {
        const candidate = candidates[item.id];
        const stale = candidateIsStale(candidate, plan, item);
        return <button class={item.id === viewShot?.id ? "selected" : ""} onClick={() => { setViewShotId(item.id); onSelectShot(item.id); }}><span>{item.title}</span><em class={`${candidate.status} ${stale ? "stale" : ""}`}>{statusLabel(candidate, stale, language)}</em></button>;
      })}</div>}

      {viewed && viewShot && <div class="td-ai-result">
        <div class="td-ai-result-head"><strong>{viewShot.title}</strong><span>{viewed.repaired ? (language === "zh" ? "已自动修复一次" : "Auto-repaired once") : viewed.attempts ? (language === "zh" ? "初次结果" : "First result") : ""}</span></div>
        {viewed.error && <div class="errors">{viewed.error}</div>}
        {viewedStale && <div class="td-post-warning">{language === "zh" ? "提示词或相关上下文已变化，此候选已过期，请重新优化。" : "The prompt context changed. Re-run optimization before applying."}</div>}
        {viewed.validation.errors.length > 0 && <ul class="errors">{viewed.validation.errors.map((error) => <li>{error}</li>)}</ul>}
        {viewed.validation.warnings.length > 0 && <ul class="td-ai-warnings">{viewed.validation.warnings.map((warning) => <li>{warning}</li>)}</ul>}
        {viewed.notes.length > 0 && <ul class="td-ai-notes">{viewed.notes.map((note) => <li>{note}</li>)}</ul>}
        {(viewed.sourcePrompt || viewed.optimizedPrompt) && <div class="td-ai-compare"><label><span>{language === "zh" ? "原提示词" : "Original"}</span><textarea readOnly rows={12} value={viewed.sourcePrompt}/></label><label><span>{language === "zh" ? "优化结果" : "Optimized"}</span><textarea readOnly rows={12} value={viewed.optimizedPrompt}/></label></div>}
        <div class="td-ai-result-actions">
          {viewed.status === "failed" && <button disabled={busy || !model} onClick={async () => { setBusy(true); try { await runOne(viewShot); } finally { setBusy(false); } }}>{language === "zh" ? "重试" : "Retry"}</button>}
          <button class="primary" disabled={viewed.status !== "ready" || !viewed.validation.valid || viewedStale} onClick={() => applyCandidate(viewShot, viewed)}>{language === "zh" ? "确认写回当前分镜" : "Apply to shot"}</button>
          <button disabled={viewed.status !== "applied" || viewShot.prompt !== viewed.optimizedPrompt} onClick={() => undoCandidate(viewShot, viewed)}>{language === "zh" ? "撤销本次写回" : "Undo apply"}</button>
          <button onClick={() => setCandidates((current) => { const next = { ...current }; delete next[viewShot.id]; return next; })}>{language === "zh" ? "放弃结果" : "Discard"}</button>
        </div>
      </div>}
      {!viewed && <div class="td-result-empty">{language === "zh" ? "选择模型后，可优化当前镜头或批量处理全部启用镜头。" : "Select a model, then optimize the current shot or all enabled shots."}</div>}
    </div>
  </details>;
}
