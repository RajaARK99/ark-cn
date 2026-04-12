# ark-cn

Private app and documentation site built with **TanStack Start** (Vite), **React 19**, **Tailwind CSS v4**, and **Ark UI** primitives. UI primitives follow **shadcn-style ownership**: components live in the repo (not a separate design-system package), styled with **Tailwind**, **`class-variance-authority`**, and the **`cn`** helper.

## Agent conventions

For editing `src/components/ui`, composing Ark primitives, or reviewing accessibility and UI state patterns, use the project skill:

**[`.cursor/skills/ark-cn-ui/SKILL.md`](.cursor/skills/ark-cn-ui/SKILL.md)**

## Stack

| Area | Choice |
| ---- | ------ |
| Runtime | Bun (lockfile: `bun.lock`) |
| Framework | TanStack Router / TanStack Start, Vite |
| UI | `@ark-ui/react`, Lucide icons |
| Styling | Tailwind v4 (`@tailwindcss/vite`), `tw-animate-css` |
| Variants | `class-variance-authority` |
| Class merge | `clsx` + `tailwind-merge` → `cn()` in [`src/lib/utils.ts`](src/lib/utils.ts) |
| Lint / format | Biome (`biome.json`) |
| Content | Content Collections (`content-collections.ts`, `content/`) |

## Path aliases

- `@/*` → [`src/*`](src/) (see [`tsconfig.json`](tsconfig.json))
- `content-collections` → generated types under `.content-collections/generated`

## Scripts

```bash
bun run dev          # Vite dev server (port 3000)
bun run build        # Production build
bun run preview      # Preview production build
bun run test         # Vitest
bun run type:check   # TypeScript --noEmit
bun run format       # Biome format --write
bun run lint         # Biome lint --write
bun run check        # Biome check --write
```

## Repository layout

| Path | Role |
| ---- | ---- |
| [`src/components/ui/`](src/components/ui/) | Ark-based primitives (shadcn-style): buttons, overlays, forms, etc. |
| [`src/components/docs/`](src/components/docs/) | Docs chrome (sidebar, TOC, page shell) |
| [`src/routes/`](src/routes/) | TanStack Router file routes (`__root.tsx`, `index`, `docs/`) |
| [`content/docs/`](content/docs/) | MDX documentation sources |
| [`content/ui/`](content/ui/) | Component MDX (e.g. button docs) |
| [`src/styles.css`](src/styles.css) | Global CSS, theme tokens, Tailwind entry |

## UI component philosophy

- **Ark UI** supplies behavior and accessibility; this repo owns markup and Tailwind classes.
- **Not every file must share one template**: thin `ark.*` wrappers, compound roots with `Portal`, and generic collection components (e.g. typed `Select`) are all valid pattern families. Prefer matching the dominant style in the file you touch.
- **Composition layer** (routes, docs pages, forms) should own loading, error, and empty states where user-visible; primitives expose props and data attributes (e.g. `data-slot`, `data-loading`) for styling and behavior hooks.

## Quality gates before merge

- `bun run type:check` and `bun run check` clean.
- For user-facing UI reviews, agents may use [Web Interface Guidelines](https://raw.githubusercontent.com/vercel-labs/web-interface-guidelines/main/command.md) as a checklist source.
