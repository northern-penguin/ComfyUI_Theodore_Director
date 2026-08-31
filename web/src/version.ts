import versionInfo from "../../version.json";

// 前端版本直接读取仓库根目录的唯一版本文件，避免 Python 与界面标记不一致。
export const THEODORE_VERSION = String(versionInfo.version);
export const THEODORE_BUILD_ID = String(versionInfo.build);
export const THEODORE_VERSION_LABEL = `v${THEODORE_VERSION} · ${THEODORE_BUILD_ID}`;
