# SonderFi — building with this design system

SonderFi is a **dark-brand** fintech/marketing UI. Every component is plain React — **no provider or theme wrapper is needed**. Style with **Tailwind v4 utility classes** that resolve against the bundled `styles.css`; mount anything from `window.Sonderfi.*` and add brand utilities for surface and layout.

## Two brand surfaces — choose the right one per component
The system is built around two backdrops. The wrong one makes a component invisible:

- **Green hero** — `bg-green-500` with `text-background` (black ink). Use for `Logo`, `LogoFull`, `LogoWilcus`, `Navbar`, `NavbarItem`, and `SignInButton`. The `Logo` mark strokes with `var(--background)` (black), so it shows **only** on a light/green surface — never on black.
- **Black section** — `bg-background` (`#000`) with `text-foreground` (`#ededed`). Use for `FitText` headlines and `Parallax` content blocks.

`SignInButton` is self-contained: a black pill (`bg-background`) with a light label (`text-foreground`) — it reads on any light backdrop.

## Styling idiom — Tailwind v4 utilities
No CSS-in-JS and no style props. Compose with these utilities (all defined in `styles.css`):

| Concern | Classes |
|---|---|
| Surface | `bg-background` (#000), `bg-green-500`, `bg-black` |
| Text color | `text-foreground` (#ededed), `text-background` (#000), `text-white`, `text-gray-600` (muted) |
| Typeface | `font-playfair` (display serif — headings & nav), `font-sans` (Geist), `font-mono` |
| Weight | `font-thin`, `font-medium`, `font-bold` |
| Layout | `flex`, `flex-row`, `flex-col`, `items-center`, `justify-center`, `gap-2`, `z-50` |

Underlying tokens live in `:root` as `--background` / `--foreground`, surfaced through `bg-background` / `text-foreground`. Brand fonts (`var(--font-playfair)`, `var(--font-geist-sans)`) load remotely. **Heads-up:** `font-open-sans` and `text-frame` appear in component source but are **not** wired to any token — they fall back to defaults; don't rely on them.

## Where the truth lives
- `styles.css` → `_ds_bundle.css` — compiled Tailwind utilities, tokens, and the font import. Read it before inventing class names.
- `components/general/<Name>/<Name>.prompt.md` — per-component usage and variants.

## Idiomatic snippet
```jsx
const { Logo, SignInButton } = window.Sonderfi;
// hero band — black ink + the atom mark on the green surface
<div className="bg-green-500 text-background flex flex-col items-center gap-2 p-8">
  <Logo />
  <h1 className="font-playfair text-2xl">SonderFi</h1>
  <SignInButton icon={googleIcon} provider="google" />
</div>
```
