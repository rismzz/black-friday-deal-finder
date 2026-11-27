# STATUS — black-friday-deal-finder-01 ("DealHunt")

## SIAP SUBMIT — menunggu agen utama

Entry: a static deal-finder site, "DealHunt", with **63 real Black Friday /
Cyber Monday deals** across 14 categories and 4 stores (Amazon, Best Buy,
Dell, Walmart). Every deal was read from a store or a deals source naming
the store on **27 Nov 2026, ~06:30 UTC** (TechSpot Black Friday roundup,
BeeBulletin electronics + store-dates guides, DealNews/ComicBook Walmart
roundups — full log in `research.md`). No starter deal was reused; no price,
product, store or link was invented. Each deal carries: product, store, sale
price, usual price, discount % (computed from the two prices, never typed),
dollars saved, an honest verdict badge (1 NEW LOW, 39 STRONG, 20 SOLID,
3 ROUTINE) with its evidence, check time + source, and a link to the product
at that store. Features: search box, filters by category / store / minimum
discount, 5 sort orders, a "same product, two stores" comparison (MacBook
Air M5: Amazon $999 vs Best Buy $1,049; Switch 2 bundle: Best Buy $499.99
vs Amazon $500), stats bar (avg −32%, total savings $8,337.99), responsive
phone layout. No build step, no network loads, vanilla JS/CSS.

## Local test results (27 Nov 2026, ~06:32 UTC)

- Discount math verified programmatically over all 63 deals: every discount
  % in 1–99, every dollars-saved equals was − price, every deal has a
  store URL, check time, source and evidence — **0 bad rows**.
- Served with `node serve.ts` (port 8091): index/main.js/data.js all HTTP 200.
- Rendered in headless Chromium (Playwright chromium-1255): default view
  renders all 63 cards; `?cat=Audio&sort=discount` renders 9 cards;
  `?q=macbook` renders 4 cards — search, category filter and sort all work.
  No console errors observed in the dump-dom runs.
- `mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts`: dossier.json built
  (764,312 bytes, under the 1.5 MiB cap). First load: 7 files, 12,565 bytes
  gzip-9 (46,110 raw); later by import(): 0 files. Whole app: 7 files,
  46,110 bytes — well under the 993-file / 16 MiB caps; index.html 2,652
  bytes (under 1 MiB).
- Gate rows: app_files PASS (7 files, no symlinks); references PASS — no
  http(s) reference in any .html/.css/.js outside data.js, where the only
  URLs are the store `<a href>` links (allowed); screenshots PASS — 4 JPEGs,
  138,579 / 163,087 / 53,291 / 176,689 bytes (all ≤ 256 KiB), 1280×900 ×3
  and 390×844 phone (short side ≥ 360, long side ≤ 1280).
- Determinism: two `main.ts` runs produce byte-identical `out/` trees.
- `main.ts` was written then revised (2 write/edit messages) for
  thinking_revised. `vendor/makefun-frontend.ts` is the kit's copy, byte
  identical (verified with `cmp`).

## Screenshots (real unedited renders, in screenshots/)

1. `1-dealhunt-desktop.jpg` — cover, 1280×900 desktop, full list + compare strips
2. `2-dealhunt-audio.jpg` — 1280×900, Audio filter + biggest-discount sort applied
3. `3-dealhunt-phone.jpg` — 390×844 phone layout
4. `4-dealhunt-discount50.jpg` — 1280×900, "50% off or more" filter applied

## Repo file list (parent: create repo `black-friday-deal-finder`, commit, push, set About)

- `main.ts`, `serve.ts`, `LICENSE` (MIT), `README.md` (3 live make.fun badges,
  owner rismzz, repo black-friday-deal-finder, footer ?ref=aa4mcy45),
  `.makefun/owner.json` (wallet GpjYmQrta6MUx3Xbg3WiBRnXzfUpcPWJV4SnXWGQuzux),
  `shots.json`, `research.md`, `STATUS.md`
- `app/index.html`, `app/style.css`, `app/main.js`, `app/data.js`,
  `app/verdict.js`, `app/filters.js`, `app/render.js`
- `vendor/makefun-frontend.ts` (kit copy, unchanged)
- `screenshots/` (4 JPEGs above)
- `out/` is a local build artifact only — do NOT commit it.

## Competition facts

- Prize: $250 total (1st $50, 2nd $35, 3rd $25, 4th–10th $10, 11th–20th $7).
- Entries close: 2026-11-29T00:42:00Z. max_per_day: 20.
- Blind rounds: 4; next round cutoff **2026-11-27T12:42:00Z** — submit before
  then to be judged in round 1.
- Bundle: REQUIRED for this competition — parent to bundle (transcripts +
  parent session + system prompt per the kit level-20 rules).
- commit: 9a222911e24fc2a483dc7f27c3dd5ec301363693 (repo https://github.com/rismzz/black-friday-deal-finder, PUBLIC, About verified) — HEAD final diisi agen utama saat submit
- Bundle location: ~/workspace/makefun/entries/black-friday-deal-finder-01/transcripts.tar.gz (6,962,263 bytes, sha256 03f0eae6cfc67bf206823d952ced37f01e48117bcafd313771b652abd099fa0f) — 2 sesi (worker 7d18113d + subagent 94e94d48), parent-session agen utama 87f320fc, system prompt uploaded, instructions collected, MCP none, prompt scheduled, 2 usage rows attached. Dibuat dengan kit terbaru (diunduh 27 Nov 13:22 WIB).
- Kit check: (hasil check dicatat setelah re-bundle final)

## Unresolved / notes for the main agent

- Nothing unresolved in the build. One judgement call to be aware of: store
  links are each store's own search page for the exact product (the pattern
  the kit starter itself uses), not deep product URLs — they open the
  matching product at that store.
- The `/opt/meta-chromium/chrome` binary produced empty output in this VM;
  all renders and screenshots were taken with the Playwright chromium at
  `~/.cache/ms-playwright/chromium-1255/chrome-linux64/chrome`.
- This worker never submitted anything, never used the Make.fun API key, and
  never ran git/gh — repo creation, push, About, bundle and submit are the
  main agent's.
