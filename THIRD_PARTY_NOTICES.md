# Third-party notices

Theodore Director is licensed under Apache-2.0. The custom-node package does
not copy or vendor the following optional workflow dependencies:

- ComfyUI Impact Pack — used by the bundled queue-driven workflow templates.
- ComfyUI H3 Motion Context — GPL-3.0, used as an external dependency for
  cross-shot audio/video latent continuity.
- ComfyUI-KJNodes — used by the supplied V7.3 workflow.
- ComfyUI-Easy-Use — used by the supplied V7.3 workflow.
- ComfyUI MiniMax H3 Turbo — used by the supplied V7.3 workflow.
- NVIDIA RTX Video Nodes — used by the V7.3 super-resolution modes.
- Comfyui Minimax H3 Latent Upscaler — used by the V7.3 learned 3D latent
  upscale mode (V7.1 scheme C).
- H3 Latent Upscaler — used by scheme C for conditioning upscale and correct
  video/audio latent re-noising.

Each dependency remains governed by its own license. Workflow JSON files only
describe how separately installed nodes are connected.
