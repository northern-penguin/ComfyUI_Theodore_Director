import { useRef, useState } from "preact/hooks";
import { createBatchDrafts, detectAssetKind, importedAssetFromDraft, validateBatchAlias, type BatchAssetDraft } from "./batch-assets";
import type { Language } from "./i18n";
import { readMediaDuration } from "./media-metadata";
import type { AssetKind, DirectorAsset } from "./types";

interface BatchAssetImportProps {
  language: Language;
  assets: DirectorAsset[];
  projectName: string;
  onClose: () => void;
  onImported: (assets: DirectorAsset[]) => void;
  uploadFile: (projectName: string, kind: AssetKind, file: File) => Promise<string>;
}

const batchUid = () => `asset_${Date.now().toString(36)}_${Math.random().toString(36).slice(2, 8)}`;
const kindLabel = (kind: AssetKind, language: Language) => language === "zh" ? ({ image: "图片", video: "视频", audio: "音频" }[kind]) : kind;

export function BatchAssetImport({ language, assets, projectName, onClose, onImported, uploadFile }: BatchAssetImportProps) {
  const [drafts, setDrafts] = useState<BatchAssetDraft[]>([]);
  const [rejected, setRejected] = useState<string[]>([]);
  const [dragging, setDragging] = useState(false);
  const [importing, setImporting] = useState(false);
  const draftsRef = useRef<BatchAssetDraft[]>([]);
  draftsRef.current = drafts;
  const existingAliases = assets.map((asset) => asset.alias);

  const updateDraft = (id: string, update: Partial<BatchAssetDraft>) => setDrafts((current) => current.map((item) => item.id === id ? { ...item, ...update } : item));

  const addFiles = (incoming: File[]) => {
    if (!incoming.length || importing) return;
    const occupied = [...existingAliases, ...draftsRef.current.map((item) => item.alias)];
    const prepared = createBatchDrafts(incoming, occupied, batchUid);
    if (prepared.rejected.length) setRejected((current) => [...current, ...prepared.rejected]);
    if (!prepared.drafts.length) return;
    setDrafts((current) => [...current, ...prepared.drafts]);
    // 元数据读取与文件上传分离，用户可以在真正写盘前检查和修改内容。
    prepared.drafts.forEach((draft) => {
      void readMediaDuration(draft.file, draft.kind).then((duration) => {
        if (duration == null) return;
        setDrafts((current) => current.map((item) => {
          // 用户已经手动修改时长或类型后，不用迟到的元数据结果覆盖其输入。
          return item.id === draft.id && item.kind === draft.kind && item.durationSeconds === 2 ? { ...item, durationSeconds: duration } : item;
        }));
      });
    });
  };

  const editableDrafts = drafts.filter((item) => item.status !== "imported");
  const editableAliases = editableDrafts.map((item) => item.alias);
  const validationError = (draft: BatchAssetDraft): string | null => {
    if (draft.status === "imported") return null;
    const aliasError = validateBatchAlias(draft.alias, existingAliases, editableAliases);
    if (aliasError === "invalid") return language === "zh" ? "别名为空、包含空白/花括号，或使用了保留后缀 .audio" : "Alias is empty, contains whitespace/braces, or uses reserved .audio";
    if (aliasError === "duplicate") return language === "zh" ? "别名与素材库或本批次其他素材重复" : "Alias duplicates an existing or staged asset";
    if (detectAssetKind(draft.file) !== draft.kind) return language === "zh" ? "文件扩展名与所选类型不匹配" : "The extension does not match the selected kind";
    if (draft.kind !== "image" && (draft.durationSeconds == null || draft.durationSeconds <= 0)) return language === "zh" ? "视频或音频时长必须大于 0" : "Video/audio duration must be greater than 0";
    return null;
  };

  const startImport = async () => {
    const snapshot = draftsRef.current;
    const queue = snapshot.filter((item) => item.status === "pending" || item.status === "error");
    if (!queue.length) return;
    if (queue.some(validationError)) {
      window.alert(language === "zh" ? "请先修正列表中标红的项目。" : "Fix the highlighted rows before importing.");
      return;
    }
    setImporting(true);
    const firstOrder = Math.max(0, ...assets.map((item) => item.fixedOrder)) + 1;
    let cursor = 0;
    const worker = async () => {
      while (cursor < queue.length) {
        const queueIndex = cursor++;
        const draft = queue[queueIndex];
        updateDraft(draft.id, { status: "uploading", error: "" });
        try {
          const path = await uploadFile(projectName, draft.kind, draft.file);
          onImported([importedAssetFromDraft(draft, path, firstOrder + queueIndex)]);
          updateDraft(draft.id, { status: "imported", error: "" });
        } catch (error) {
          updateDraft(draft.id, { status: "error", error: String(error) });
        }
      }
    };
    // 限制为两个并发请求，避免大量视频同时占用浏览器连接与磁盘写入。
    await Promise.all(Array.from({ length: Math.min(2, queue.length) }, worker));
    setImporting(false);
  };

  const importedCount = drafts.filter((item) => item.status === "imported").length;
  const errorCount = drafts.filter((item) => item.status === "error").length;
  const pendingCount = drafts.length - importedCount;

  return <div class="td-batch-overlay" role="presentation"><section class="td-asset-batch-panel" role="dialog" aria-modal="true" aria-label={language === "zh" ? "批量导入素材" : "Batch import assets"}>
    <header class="td-batch-header"><div><h2>{language === "zh" ? "批量导入素材" : "Batch import assets"}</h2><p>{language === "zh" ? "可混合选择图片、视频和音频；确认列表后再写入素材库。" : "Select images, videos, and audio together; review before uploading."}</p></div><button disabled={importing} aria-label={language === "zh" ? "关闭" : "Close"} onClick={onClose}>×</button></header>
    <label class={`td-asset-dropzone ${dragging ? "dragging" : ""}`} onDragEnter={(event) => { event.preventDefault(); setDragging(true); }} onDragOver={(event) => event.preventDefault()} onDragLeave={(event) => { if (event.currentTarget === event.target) setDragging(false); }} onDrop={(event) => { event.preventDefault(); setDragging(false); addFiles(Array.from(event.dataTransfer?.files ?? [])); }}>
      <strong>{language === "zh" ? "拖拽素材到这里，或点击选择多个文件" : "Drop media here, or click to select multiple files"}</strong>
      <span>{language === "zh" ? "支持图片、视频、音频混合导入" : "Mixed image, video, and audio selection is supported"}</span>
      <input type="file" multiple accept="image/*,video/*,audio/*" disabled={importing} onChange={(event) => { addFiles(Array.from(event.currentTarget.files ?? [])); event.currentTarget.value = ""; }}/>
    </label>
    {rejected.length > 0 && <div class="td-asset-batch-warning"><span>{language === "zh" ? `已跳过 ${rejected.length} 个不支持的文件：${rejected.join("、")}` : `Skipped ${rejected.length} unsupported files: ${rejected.join(", ")}`}</span><button onClick={() => setRejected([])}>×</button></div>}
    <div class="td-asset-batch-summary"><span>{language === "zh" ? `共 ${drafts.length} 项 · 已导入 ${importedCount} · 待处理 ${pendingCount}${errorCount ? ` · 失败 ${errorCount}` : ""}` : `${drafts.length} items · ${importedCount} imported · ${pendingCount} pending${errorCount ? ` · ${errorCount} failed` : ""}`}</span><button disabled={importing || !drafts.length} onClick={() => setDrafts([])}>{language === "zh" ? "清空列表" : "Clear list"}</button></div>
    <div class="td-asset-batch-list">
      <div class="td-asset-batch-row td-asset-batch-head"><span>{language === "zh" ? "状态 / 文件" : "Status / File"}</span><span>{language === "zh" ? "别名" : "Alias"}</span><span>{language === "zh" ? "类型" : "Kind"}</span><span>{language === "zh" ? "时长" : "Duration"}</span><span>{language === "zh" ? "视频伴音" : "Video audio"}</span><span>{language === "zh" ? "操作" : "Action"}</span></div>
      {!drafts.length && <div class="td-asset-batch-empty">{language === "zh" ? "尚未选择素材" : "No media selected"}</div>}
      {drafts.map((draft) => { const rowError = validationError(draft); const locked = importing || draft.status === "imported" || draft.status === "uploading"; return <div class={`td-asset-batch-row ${rowError || draft.status === "error" ? "invalid" : ""} ${draft.status === "imported" ? "imported" : ""}`} key={draft.id}>
        <div class="td-asset-batch-file"><strong title={draft.file.name}>{draft.file.name}</strong><small>{(draft.file.size / 1024 / 1024).toFixed(1)} MB · {draft.status === "pending" ? (language === "zh" ? "待导入" : "Pending") : draft.status === "uploading" ? (language === "zh" ? "上传中" : "Uploading") : draft.status === "imported" ? (language === "zh" ? "已完成" : "Imported") : (language === "zh" ? "失败" : "Failed")}</small>{(rowError || draft.error) && <em title={rowError || draft.error}>{rowError || draft.error}</em>}</div>
        <input disabled={locked} value={draft.alias} onInput={(event) => updateDraft(draft.id, { alias: event.currentTarget.value, status: "pending", error: "" })}/>
        <select disabled={locked} value={draft.kind} onChange={(event) => { const kind = event.currentTarget.value as AssetKind; updateDraft(draft.id, { kind, durationSeconds: kind === "image" ? null : (draft.durationSeconds ?? 2), includeVideoAudio: kind === "video" && draft.includeVideoAudio, status: "pending", error: "" }); }}><option value="image">{kindLabel("image", language)}</option><option value="video">{kindLabel("video", language)}</option><option value="audio">{kindLabel("audio", language)}</option></select>
        <label class="td-asset-batch-duration"><input type="number" min="0.1" step="0.1" disabled={locked || draft.kind === "image"} value={draft.durationSeconds ?? ""} onInput={(event) => updateDraft(draft.id, { durationSeconds: event.currentTarget.value ? Number(event.currentTarget.value) : null, status: "pending", error: "" })}/><span>{draft.kind === "image" ? "—" : (language === "zh" ? "秒" : "sec")}</span></label>
        <label class="td-asset-batch-audio"><input type="checkbox" disabled={locked || draft.kind !== "video"} checked={draft.kind === "video" && draft.includeVideoAudio} onChange={(event) => updateDraft(draft.id, { includeVideoAudio: event.currentTarget.checked })}/><span>{draft.kind === "video" ? (draft.includeVideoAudio ? (language === "zh" ? "开" : "ON") : (language === "zh" ? "关" : "OFF")) : "—"}</span></label>
        <button class="danger" disabled={locked} onClick={() => setDrafts((current) => current.filter((item) => item.id !== draft.id))}>{language === "zh" ? "移除" : "Remove"}</button>
      </div>; })}
    </div>
    <footer><button disabled={importing} onClick={onClose}>{language === "zh" ? "关闭" : "Close"}</button><button class="primary" disabled={importing || !drafts.some((item) => item.status === "pending" || item.status === "error")} onClick={() => void startImport()}>{importing ? (language === "zh" ? "正在导入…" : "Importing…") : errorCount ? (language === "zh" ? "重试失败项" : "Retry failed") : (language === "zh" ? "开始导入" : "Start import")}</button></footer>
  </section></div>;
}
