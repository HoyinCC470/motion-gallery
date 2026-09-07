# Motion Gallery / 动效模板 Gallery

Chinese-first motion template catalog aggregating:
- hyperframes (HeyGen launches) — embeds upstream LFS preview MP4/GIF/PNG via media.githubusercontent.com
- shotcraft (video-shotcraft recipe cards) — embeds public gallery MP4s
- remocn (Remotion component registry) — docs links for now (no hosted MP4s)

No full git-clone of upstreams. Metadata from GitHub API/raw and public galleries. Preview media is embedded when a playable URL exists; we are not re-implementing every effect from scratch.

## Live URL

https://hoyincc470.github.io/motion-gallery/

## Run

cd /workspace/motion-gallery
npm install
npm run dev

Open http://localhost:3000

## Build

GITHUB_PAGES=true npm run build
npm run build

## Inline preview status

| Source | Inline video | Inline image | External-only | Notes |
| --- | ---:- | ---:- | ---:- | --- |
| hyperframes | 16 | 3 | 1 | LFS via media.githubusercontent.com; claude-paper-launch has no committed preview media |
| shotcraft | 157 | 0 | 0 | Public gallery MP4s |
| remocn | 0 | 0 | 57 (+3 remotion) | 3 in-page @remotion/player demos; 57 still docs-only (no hosted MP4) |
| total | 173 | 3 | 58 (+3 remotion inline) |  |

## Remaining work (Phase B)

- Remocn: started — 3 demos (fade-through, blur-out-up, bottom-up-letters) via @remotion/player; expand coverage for remaining 57.
- HyperFrames claude-paper-launch: still external until upstream publishes a render/snapshot.
- Some HyperFrames cards use representative asset clips / snapshots / GIF when the finished master is only on hyperframes.dev/viewer.

## Pages

/, /gallery, /gallery/[id], /about (licenses + Remotion license note)

## License

MIT for this site. Upstream rights remain with authors.
