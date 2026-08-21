# ComfyUI Theodore Director

Theodore Director is a model-agnostic storyboard and media-planning extension
for ComfyUI. It ships with a MiniMax H3 adapter and Impact-driven single- and
dual-sampling V6 workflow templates.

> Development status: pre-release. Public node IDs and the project schema are
> being implemented against ComfyUI 0.31.0 and `comfy_api.v0_0_2`.

## Design guarantees

- Impact Pack remains the only queue scheduler.
- Project media libraries may contain more assets than a model can consume.
- The H3 adapter activates assets by semantic aliases and compiles deterministic
  `<Picture N>`, `<Video N>`, and `<Audio N>` labels.
- H3 execution is limited to 9 pictures, 3 videos, 3 total active audio
  references, and 12 mixed input files.
- Plans are embedded in workflows and can also be imported/exported.
- Run manifests are committed only after video, tail frame, and required latent
  outputs are complete.

English and Chinese user documentation will be completed before the first
release.

