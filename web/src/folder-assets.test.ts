import { describe, expect, it } from "vitest";
import { folderAssetFilesFromDrop, folderAssetFilesFromEntries, folderAssetFilesFromFileList, type BrowserFileEntry } from "./folder-assets";

function fakeFile(name: string, relativePath = ""): File {
  return { name, type: "", webkitRelativePath: relativePath } as File;
}

function fileEntry(path: string): BrowserFileEntry {
  const file = fakeFile(path.split("/").pop() || path);
  return { isFile: true, isDirectory: false, name: file.name, fullPath: path, file: (success: (value: File) => void) => success(file) } as BrowserFileEntry;
}

function directoryEntry(path: string, batches: BrowserFileEntry[][]): BrowserFileEntry {
  return {
    isFile: false,
    isDirectory: true,
    name: path.split("/").pop() || path,
    fullPath: path,
    createReader: () => ({ readEntries: (success: (items: BrowserFileEntry[]) => void) => success(batches.shift() ?? []) }),
  } as BrowserFileEntry;
}

describe("文件夹素材读取", () => {
  it("保留目录选择器提供的来源相对路径并稳定排序", () => {
    const files = folderAssetFilesFromFileList([
      fakeFile("b.png", "素材/子目录/b.png"),
      fakeFile("a.png", "素材/a.png"),
    ]);
    expect(files.map((item) => item.relativePath)).toEqual(["素材/a.png", "素材/子目录/b.png"]);
  });

  it("递归读取子目录且持续读取目录的多个批次", async () => {
    const nested = directoryEntry("/root/nested", [[fileEntry("/root/nested/02.mp4")], []]);
    const root = directoryEntry("/root", [[nested], [fileEntry("/root/01.png")], []]);
    const progress: number[] = [];
    const files = await folderAssetFilesFromEntries([root], (count) => progress.push(count));
    expect(files.map((item) => item.relativePath)).toEqual(["root/01.png", "root/nested/02.mp4"]);
    expect(progress).toEqual([1, 2]);
  });

  it("目录 API 不可用时回退到普通拖拽文件列表", async () => {
    const file = fakeFile("voice.wav");
    const transfer = { items: [{ kind: "file" }], files: [file] } as unknown as DataTransfer;
    const files = await folderAssetFilesFromDrop(transfer);
    expect(files).toEqual([{ file, relativePath: "voice.wav" }]);
  });

  it("取消扫描后不再读取尚未开始的目录项", async () => {
    let active = true;
    const first = fileEntry("/root/01.png");
    const second = fileEntry("/root/02.png");
    const root = directoryEntry("/root", [[first, second], []]);
    const files = await folderAssetFilesFromEntries([root], () => { active = false; }, () => active);
    expect(files.map((item) => item.relativePath)).toEqual(["root/01.png"]);
  });
});
