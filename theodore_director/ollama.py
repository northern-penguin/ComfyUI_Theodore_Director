"""只允许访问本机端口的 Ollama HTTP 客户端。"""

from __future__ import annotations

import asyncio
import json
from typing import Any

MAX_RESPONSE_BYTES = 8 * 1024 * 1024
REQUEST_TIMEOUT_SECONDS = 600


def ollama_base_url(port: Any, host: Any = "127.0.0.1") -> str:
    host_value = str(host).strip().lower()
    if host_value not in {"127.0.0.1", "localhost"}:
        raise ValueError("Ollama 地址只允许 127.0.0.1 或 localhost")
    try:
        value = int(port)
    except (TypeError, ValueError) as exc:
        raise ValueError("Ollama 端口必须是整数") from exc
    if value < 1 or value > 65535:
        raise ValueError("Ollama 端口必须在 1–65535 之间")
    # 固定回环地址，避免该 ComfyUI 路由被利用为任意网络代理。
    return f"http://{host_value}:{value}"


async def _request_json(method: str, url: str, payload: dict[str, Any] | None = None) -> dict[str, Any]:
    # aiohttp 由 ComfyUI 提供；延迟导入保证纯协议测试无需安装完整宿主依赖。
    from aiohttp import ClientError, ClientSession, ClientTimeout

    timeout = ClientTimeout(total=REQUEST_TIMEOUT_SECONDS)
    try:
        async with ClientSession(timeout=timeout) as session:
            async with session.request(method, url, json=payload) as response:
                # 分块读取并硬限制总量，不能假设一次 read() 会返回完整响应体。
                raw = bytearray()
                while True:
                    chunk = await response.content.read(min(64 * 1024, MAX_RESPONSE_BYTES + 1 - len(raw)))
                    if not chunk:
                        break
                    raw.extend(chunk)
                    if len(raw) > MAX_RESPONSE_BYTES:
                        raise RuntimeError("Ollama 响应超过 8 MiB 限制")
                text = bytes(raw).decode("utf-8", errors="replace")
                if response.status >= 400:
                    try:
                        message = str(json.loads(text).get("error") or text)
                    except json.JSONDecodeError:
                        message = text
                    raise RuntimeError(f"Ollama HTTP {response.status}: {message.strip()}")
                try:
                    data = json.loads(text)
                except json.JSONDecodeError as exc:
                    raise RuntimeError("Ollama 返回了无法解析的 JSON") from exc
                if not isinstance(data, dict):
                    raise RuntimeError("Ollama 返回格式无效")
                return data
    except asyncio.TimeoutError as exc:
        raise RuntimeError(f"Ollama 请求超过 {REQUEST_TIMEOUT_SECONDS} 秒，已超时") from exc
    except ClientError as exc:
        raise RuntimeError(f"无法连接本机 Ollama：{exc}") from exc


async def list_models(port: Any, host: Any = "127.0.0.1") -> list[dict[str, Any]]:
    data = await _request_json("GET", f"{ollama_base_url(port, host)}/api/tags")
    models = data.get("models", [])
    if not isinstance(models, list):
        raise RuntimeError("Ollama 模型列表格式无效")
    return [item for item in models if isinstance(item, dict) and isinstance(item.get("name"), str)]


async def list_running_models(port: Any, host: Any = "127.0.0.1") -> list[dict[str, Any]]:
    data = await _request_json("GET", f"{ollama_base_url(port, host)}/api/ps")
    models = data.get("models", [])
    if not isinstance(models, list):
        raise RuntimeError("Ollama 运行模型列表格式无效")
    return [item for item in models if isinstance(item, dict) and isinstance(item.get("name"), str)]


async def chat(
    port: Any,
    model: str,
    messages: list[dict[str, str]],
    response_format: dict[str, Any],
    host: Any = "127.0.0.1",
) -> str:
    if not model.strip():
        raise ValueError("请选择 Ollama 模型")
    data = await _request_json(
        "POST",
        f"{ollama_base_url(port, host)}/api/chat",
        {
            "model": model.strip(),
            "messages": messages,
            "stream": False,
            "format": response_format,
            "keep_alive": -1,
            "options": {"temperature": 0.2},
        },
    )
    message = data.get("message")
    content = message.get("content") if isinstance(message, dict) else None
    if not isinstance(content, str):
        raise RuntimeError("Ollama 响应缺少 message.content")
    return content


async def unload_model(port: Any, model: str, host: Any = "127.0.0.1") -> None:
    if not model.strip():
        raise ValueError("请选择需要释放的 Ollama 模型")
    await _request_json(
        "POST",
        f"{ollama_base_url(port, host)}/api/generate",
        {"model": model.strip(), "prompt": "", "stream": False, "keep_alive": 0},
    )
