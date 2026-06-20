# SonderFi design-sync notes

This repo is a **Next.js app**, not a published component library. The sync treats
the `component/` directory as the design system (package shape, synth-entry).

## Build gotchas (read before re-syncing)

- **Hand-authored bundle entry.** The converter's synth-entry uses `export * from <file>`,
  which drops default exports — and 5 of 8 components are `export default`. The bundle is
  built from `.design-sync/entry.mjs` (explicit named re-exports). **Re-sync must pass
  `--entry ./.design-sync/entry.mjs`.** If a component is added/removed in `component/`,
  update `entry.mjs` AND `cfg.componentSrcMap`.
- **No dist `.d.ts`.** Props come from `cfg.dtsPropsFor` (hand-written from the source prop
  types). Changed/added props → update `dtsPropsFor`.
- **Tailwind CSS is generated separately.** `cfg.cssEntry` points at `.design-sync/styles/ds.css`,
  which is **gitignored and must be regenerated before every build** (a stale/empty file ships
  unstyled). Source is `.design-sync/styles/ds.input.css` (committed). Regenerate:
  `node .ds-sync/node_modules/@tailwindcss/cli/dist/index.mjs -i .design-sync/styles/ds.input.css -o .design-sync/styles/ds.css`
  The input `@source`s `component/`, `app/`, and `.design-sync/previews/` so any class used in a
  preview is compiled.
- **Render check uses system Chrome**, not downloaded Chromium. Set
  `DS_CHROMIUM_PATH="/Applications/Google Chrome.app/Contents/MacOS/Google Chrome"` for
  validate/capture. Playwright lib is installed in `.ds-sync` without a browser
  (`PLAYWRIGHT_SKIP_BROWSER_DOWNLOAD=1 npm i playwright`). `@tailwindcss/cli@4.3.1` (matched the
  repo's tailwind) is also installed in `.ds-sync`.
- **Dark brand, two surfaces.** Green hero (`bg-green-500` + `text-background`) and black section
  (`bg-background` + `text-foreground`). The `Logo` mark strokes with `var(--background)` (black),
  so it only shows on a light/green backdrop. Previews render on the correct surface.
- **Dead classes in source:** `font-open-sans` and `text-frame` reference undefined tokens — they
  render as browser defaults in the real app. Kept faithful (not revived); noted in the conventions header.

## Known render warns (expected — not new)

- `[FONT_REMOTE]` — Geist / Geist Mono / Playfair Display load via a Google Fonts `@import` (the
  app serves them through `next/font/google` at runtime; the standalone bundle pulls them remotely).

## Re-sync risks (what can silently go stale)

- **`ds.css` is gitignored + generated.** A re-sync that skips the Tailwind recompile builds against
  stale/empty CSS → unstyled cards. Always recompile from `ds.input.css` first.
- **Network fonts.** The render check fetches fonts from Google at capture time. Offline → serif/sans
  fallbacks, which would mis-grade typography.
- **Hand-authored entry + dtsPropsFor** are coupled to `component/`. Component changes that don't get
  mirrored into `entry.mjs` / `dtsPropsFor` ship a wrong API contract or a missing export.
- **Parallax preview is static.** Motion is scroll-only; the card can't verify drift behavior.
- **`auth-client` runs at load.** `SignInButton` → `lib/auth-client` calls `createAuthClient()` when the
  bundle loads. Harmless in a browser, but better-auth is bundled in as a runtime dep.
- **`.ds-sync/` tooling is gitignored.** A fresh clone must reinstall:
  `npm i esbuild ts-morph @types/react @tailwindcss/cli@4.3.1` and
  `PLAYWRIGHT_SKIP_BROWSER_DOWNLOAD=1 npm i playwright` inside `.ds-sync/`.
