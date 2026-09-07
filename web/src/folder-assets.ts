/** 浏览器目录拖拽接口尚未完全标准化，这里只声明实际使用的最小兼容表面。 */
export interface BrowserFileEntry {
  isFile: boolean;
  isDirectory: boolean;
  name: string;
  fullPath: string;
}

interface BrowserFileFileEntry extends BrowserFileEntry {
  file: (success: (file: File) => void, error?: (reason: DOMException) => void) => void;
}

interface BrowserFileDirectoryReader {
  readEntries: (success: (entries: BrowserFileEntry[]) => void, error?: (reason: DOMException) => void) => void;
}

interface BrowserFileDirectoryEntry extends BrowserFileEntry {
  createReader: () => BrowserFileDirectoryReader;
}

interface DirectoryDataTransferItem {
  kind: string;
  webkitGetAsEntry?: () => BrowserFileEntry | null;
}

export interface FolderAssetFile {
  file: File;
  relativePath: string;
}

const compareSourcePath = (left: FolderAssetFile, right: FolderAssetFile) => left.relativePath.localeCompare(right.relativePath, "en", { numeric: true, sensitivity: "base" });

function cleanRelativePath(value: string, fallback: string): string {
  const cleaned = value.replace(/\\/g, "/").replace(/^\/+/, "").replace(/\/{2,}/g, "/");
  return cleaned || fallback;
}

export function folderAssetFilesFromFileList(files: Iterable<File>): FolderAssetFile[] {
  return Array.from(files, (file) => ({
    file,
    // webkitRelativePath 由目录选择器提供；普通多文件选择回退到文件名。
    relativePath: cleanRelativePath(file.webkitRelativePath, file.name),
  })).sort(compareSourcePath);
}

function readFileEntry(entry: BrowserFileFileEntry): Promise<File> {
  return new Promise((resolve, reject) => entry.file(resolve, reject));
}

function readDirectoryBatch(reader: BrowserFileDirectoryReader): Promise<BrowserFileEntry[]> {
  return new Promise((resolve, reject) => reader.readEntries(resolve, reject));
}

async function readAllDirectoryEntries(entry: BrowserFileDirectoryEntry, isActive: () => boolean): Promise<BrowserFileEntry[]> {
  const reader = entry.createReader();
  const entries: BrowserFileEntry[] = [];
  // Chromium 每次最多返回一批目录项，必须读到空批次才算完成。
  while (isActive()) {
    const batch = await readDirectoryBatch(reader);
    if (!batch.length) return entries;
    entries.push(...batch);
  }
  return entries;
}

export async function folderAssetFilesFromEntries(
  entries: BrowserFileEntry[],
  onFound?: (count: number) => void,
  isActive: () => boolean = () => true,
): Promise<FolderAssetFile[]> {
  const files: FolderAssetFile[] = [];
  const visit = async (entry: BrowserFileEntry): Promise<void> => {
    if (!isActive()) return;
    if (entry.isFile) {
      const file = await readFileEntry(entry as BrowserFileFileEntry);
      if (!isActive()) return;
      files.push({ file, relativePath: cleanRelativePath(entry.fullPath, file.name) });
      onFound?.(files.length);
      return;
    }
    if (!entry.isDirectory) return;
    const children = await readAllDirectoryEntries(entry as BrowserFileDirectoryEntry, isActive);
    for (const child of children) await visit(child);
  };
  for (const entry of entries) {
    if (!isActive()) break;
    await visit(entry);
  }
  return files.sort(compareSourcePath);
}

export async function folderAssetFilesFromDrop(
  dataTransfer: DataTransfer,
  onFound?: (count: number) => void,
  isActive: () => boolean = () => true,
): Promise<FolderAssetFile[]> {
  const items = Array.from(dataTransfer.items ?? []) as unknown as DirectoryDataTransferItem[];
  const entryGetters = items.filter((item) => item.kind === "file" && typeof item.webkitGetAsEntry === "function");
  if (entryGetters.length) {
    const entries = entryGetters.map((item) => item.webkitGetAsEntry?.()).filter((entry): entry is BrowserFileEntry => Boolean(entry));
    if (entries.length) return folderAssetFilesFromEntries(entries, onFound, isActive);
  }
  // 不支持目录条目 API 的浏览器仍可沿用普通文件拖拽。
  const files = folderAssetFilesFromFileList(dataTransfer.files ?? []);
  if (isActive()) onFound?.(files.length);
  return files;
}
