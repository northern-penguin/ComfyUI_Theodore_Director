import { describe, expect, it } from "vitest";
import { aliasFromFileName, createBatchDrafts, detectAssetKind, importedAssetFromDraft, uniqueAlias, validateBatchAlias } from "./batch-assets";

function fakeFile(name: string, type = ""): File {
  return { name, type } as File;
}

describe("批量素材导入", () => {
  it("识别混合媒体并拒绝未知扩展名", () => {
    expect(detectAssetKind(fakeFile("a.PNG"))).toBe("image");
    expect(detectAssetKind(fakeFile("clip", "video/mp4"))).toBe("video");
    expect(detectAssetKind(fakeFile("clip.bin", "video/mp4"))).toBeNull();
    expect(detectAssetKind(fakeFile("payload.exe"))).toBeNull();
  });

  it("从文件名生成适合引用的中英文别名", () => {
    expect(aliasFromFileName("01-maintenance-robot.png")).toBe("maintenance_robot");
    expect(aliasFromFileName("02 ruined city.jpg")).toBe("ruined_city");
    expect(aliasFromFileName("角色 参考图.png")).toBe("角色_参考图");
    expect(aliasFromFileName("walk.audio.mp4")).toBe("walk.audio_asset");
  });

  it("以大小写不敏感方式处理已有与批次内重名", () => {
    expect(uniqueAlias("robot", ["Robot", "robot_2"])).toBe("robot_3");
    let ordinal = 0;
    const result = createBatchDrafts([fakeFile("robot.png"), fakeFile("robot.jpg"), fakeFile("x.exe")], ["Robot"], () => `id_${++ordinal}`);
    expect(result.drafts.map((item) => item.alias)).toEqual(["robot_2", "robot_3"]);
    expect(result.rejected).toEqual(["x.exe"]);
  });

  it("校验非法和重复别名", () => {
    expect(validateBatchAlias("bad alias", [], ["bad alias"])).toBe("invalid");
    expect(validateBatchAlias("hero", ["Hero"], ["hero"])).toBe("duplicate");
    expect(validateBatchAlias("hero", [], ["hero", "HERO"])).toBe("duplicate");
    expect(validateBatchAlias("hero", [], ["hero"])).toBeNull();
  });

  it("创建素材时使用安全默认值且不自动开启视频伴音", () => {
    const [draft] = createBatchDrafts([fakeFile("clip.mp4")], [], () => "asset_1").drafts;
    const asset = importedAssetFromDraft(draft, "theodore_director/demo/clip.mp4", 8);
    expect(asset).toMatchObject({ id: "asset_1", alias: "clip", kind: "video", enabled: true, fixed: false, fixedOrder: 8, shotIds: [], includeVideoAudio: false });
  });
});
