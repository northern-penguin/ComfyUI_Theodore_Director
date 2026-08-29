"""RunningHub 远程结果的受限下载工具。"""

from __future__ import annotations

import hashlib
import os
from pathlib import Path
from urllib.parse import urljoin, urlparse
from urllib.request import HTTPRedirectHandler, Request, build_opener


DEFAULT_RESULT_HOST_SUFFIXES = (
    "runninghub.cn",
    "xiaoyaoyou.com",
    "myqcloud.com",
)
VIDEO_EXTENSIONS = {".mp4", ".mov", ".mkv", ".webm", ".avi"}


def runninghub_result_host_suffixes() -> tuple[str, ...]:
    """允许管理员通过环境变量补充 RunningHub 使用的新 CDN 域名。"""
    configured = tuple(
        item.strip().lower().lstrip(".")
        for item in os.getenv("THEODORE_DIRECTOR_RUNNINGHUB_RESULT_HOSTS", "").split(",")
        if item.strip()
    )
    return DEFAULT_RESULT_HOST_SUFFIXES + configured


def validate_runninghub_result_url(value: str) -> str:
    """只接受 RunningHub 官方响应可能返回的 HTTPS CDN 地址。"""
    parsed = urlparse(value.strip())
    if parsed.scheme.lower() != "https" or not parsed.hostname or parsed.username or parsed.password:
        raise ValueError("RunningHub 结果必须是无凭据的 HTTPS URL")
    hostname = parsed.hostname.lower().rstrip(".")
    if not any(hostname == suffix or hostname.endswith(f".{suffix}") for suffix in runninghub_result_host_suffixes()):
        raise ValueError(f"拒绝下载非 RunningHub 结果域名: {hostname}")
    extension = Path(parsed.path).suffix.lower()
    if extension and extension not in VIDEO_EXTENSIONS:
        raise ValueError(f"RunningHub 结果不是受支持的视频格式: {extension}")
    return value.strip()


class _SafeRedirectHandler(HTTPRedirectHandler):
    """每次重定向都重新验证目标，避免受信 CDN 跳转到内网。"""

    def redirect_request(self, request, fp, code, msg, headers, newurl):  # noqa: ANN001
        target = validate_runninghub_result_url(urljoin(request.full_url, newurl))
        return super().redirect_request(request, fp, code, msg, headers, target)


def download_runninghub_video(
    url: str,
    directory: Path,
    *,
    max_bytes: int = 4 * 1024 * 1024 * 1024,
    timeout_seconds: int = 60,
) -> Path:
    """分块下载一个受信视频，超限或失败时删除本次临时文件。"""
    source = validate_runninghub_result_url(url)
    parsed = urlparse(source)
    extension = Path(parsed.path).suffix.lower()
    if extension not in VIDEO_EXTENSIONS:
        extension = ".mp4"
    directory.mkdir(parents=True, exist_ok=True)
    target = directory / f"rh_{hashlib.sha256(source.encode('utf-8')).hexdigest()[:24]}{extension}"
    request = Request(source, headers={"User-Agent": "TheodoreDirector/RunningHub"})
    written = 0
    try:
        with build_opener(_SafeRedirectHandler()).open(request, timeout=timeout_seconds) as response, target.open("xb") as stream:
            content_length = response.headers.get("Content-Length")
            if content_length and int(content_length) > max_bytes:
                raise ValueError("RunningHub 单个视频超过下载上限")
            while chunk := response.read(1024 * 1024):
                written += len(chunk)
                if written > max_bytes:
                    raise ValueError("RunningHub 单个视频超过下载上限")
                stream.write(chunk)
        if written <= 0:
            raise ValueError("RunningHub 返回了空视频")
        return target
    except Exception:
        target.unlink(missing_ok=True)
        raise
