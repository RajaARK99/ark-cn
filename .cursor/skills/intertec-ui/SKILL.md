---
name: ark-cn
description: >-
  Conventions for ark-cn: Ark UI primitives in src/components/ui with shadcn-style
  ownership, Tailwind v4, cva/cn, TypeScript, React 19, accessibility, and composed
  UI state patterns. Use when editing src/components/ui, wiring Ark primitives,
  styling variants, or reviewing a11y and loading/error/empty behavior in docs or app shells.
---

# Ark CN UI components

## When this skill applies

- Adding or changing files under `src/components/ui/`.
- Composing Ark UI `Root` / part components, `Portal`, `ark` factory elements, or collection APIs.
- Extending props with `ComponentProps`, `VariantProps`, or generics tied to Ark context.
- Building or reviewing **pages and flows** that consume primitives (loading, errors, empty states, async actions).

## Architecture (shadcn-style + Ark)

- **Ownership**: Primitives live in-repo under `src/components/ui/`—same philosophy as shadcn/ui, but **Ark UI** replaces Radix as the behavior layer.
- **Imports**: Use `@/` for `src/*` (see `tsconfig.json`). Import Ark from scoped entry points, e.g. `@ark-ui/react/dialog`, `@ark-ui/react/factory`, `@ark-ui/react/portal`.
- **Styling**: Tailwind utility classes merged with `cn()` from `src/lib/utils.ts`. Variants use `cva()` from `class-variance-authority`; export `*Variants` when consumers need to reuse class maps (e.g. `buttonVariants`).
- **`data-slot`**: Use consistent `data-slot="…"` values for styling hooks and parent selectors where the codebase already does so; align with neighboring components when editing.

## Pattern families (do not force one template)

Pick the shape that fits the primitive; mirror the strongest local precedent in the file or its siblings.

1. **Thin wrappers**  
   Simple presentation or static structure: `ark.div` / `ark.span` + `cn` + optional `data-slot`. Minimal or no internal state.  
   Examples: `button.tsx`, `badge.tsx`, `spinner.tsx`

2. **Stateful primitives**  
   Ark `*Primitive.Root` with named part exports (`Trigger`, `Content`, `Backdrop`, etc.), optional `Portal`, `cva` for layout/size variants.  
   Examples: `dialog.tsx`, `sheet.tsx`, `popover.tsx`

3. **Generic / collection-driven components**  
   When Ark exposes collections or context APIs, use TypeScript generics and `ComponentProps` so item types flow through. Stabilize collection keys with `useMemo` to avoid infinite loops when callers pass new array literals each render.  
   Examples: `select.tsx`, `listbox.tsx`, `combobox.tsx`

### Naming conventions

**Do not enforce one naming scheme project-wide.** Let the Ark primitive's API shape guide your exports:

- **Thin wrappers**: Export the main component directly (`Button`, not `ButtonRoot`). Optionally export variants (`buttonVariants`).
- **Stateful primitives**: Export root + parts. May use either pattern:
  - Root-implicit: `Dialog`, `DialogTrigger`, `DialogContent` (root is implied by the namespace)
  - Root-explicit: `DialogRoot`, `DialogTrigger`, `DialogContent` (mirror Ark's `.Root`, `.Trigger` etc.)
- **Collection components**: Export factory function + hooks. Export collection helpers (`createListCollection`, `useSelect`, etc.).

**Guideline**: When adding a new component, look at its neighbors. Match the dominant style in the same area.

## React

- **Derived state**: Compute during render; avoid `useEffect` to mirror props into state.
- **Expensive work**: `useMemo` for heavy derived lists or stable keys—not for every trivial value.
- **Effects**: Only for synchronizing with **external** systems (browser APIs, third-party widgets, Ark collection sync). Always include cleanup for subscriptions, timers, and listeners.
- **Callbacks in effects**: Stabilize dependencies; prefer updater-form `setState` or scoped logic inside the effect to avoid stale closures and dependency explosions.
- **Refs**: Use for values that must not re-render (timeouts, mounted flags for async); never read/write `ref.current` during render for UI-affecting data.

## UI states (composed features)

Primitives may only expose `loading`, `disabled`, or visual indicators (e.g. `data-loading`, `aria-disabled` on `button`).

For **routes, forms, and docs demos**:

- Show loading UI **only when there is no data yet**; avoid replacing cached content with a spinner on background refetch.
- **Surface errors** (inline, banner, toast, or full-page—match severity); never swallow errors in `catch` without user feedback.
- Provide **empty states** for lists and search-no-results.
- For async actions: **disable** triggers while pending; show inline loading on buttons where appropriate.

## TypeScript

- Extend Ark part props with `ComponentProps<typeof ArkPartOrPrimitive>` where possible.
- Reuse `VariantProps<typeof someVariants>` for `variant` / `size` props instead of duplicating string unions.
- Avoid `any`; use `unknown` + narrowing at boundaries.
- Prefer **discriminated unions** for mutually exclusive prop groups when it prevents invalid combinations at compile time.

## Accessibility and reviews

- Preserve Ark’s roles and keyboard behavior; do not strip ARIA or focus management from parts unless you replace it deliberately.
- Overlays: ensure focus trap / restore and visible close affordances; icon-only controls need accessible names.
- Decorative motion: respect `prefers-reduced-motion` when adding nonessential animation.
- For structured UI audits, fetch current rules from the [Web Interface Guidelines command.md](https://raw.githubusercontent.com/vercel-labs/web-interface-guidelines/main/command.md) and report in the format that document specifies.

## Marketing / docs visual design

- **Distinctive layout and typography** belong at the **page and showcase** level (`src/routes`, docs MDX, marketing components)—not forced onto every low-level primitive.
- Primitives should stay **theme-token-driven** and visually neutral so apps can brand above them.

## Consistency (optional, when touching a file)

- Most interactive UI modules use `"use client"` at the top; align when a file uses hooks or client-only Ark APIs and you are already editing it.
- All components use `data-slot="…"` attributes for styling hooks (e.g., `data-slot="dialog-header"`, `data-slot="select-item"`). Use snake-case; include the component name prefix where helpful for scoping.
- **Tailwind class strings**: When a single `cn()` call exceeds ~120 characters or becomes hard to scan, split across multiple lines grouped by concern (layout, sizing, colors, states, responsive variants) rather than one long string.
- **Type exports**: Export types for Root props and major parts (`*RootProps`, `*TriggerProps`, etc.) to enable consumers to extend or override. Export custom composite types (e.g., `DialogPopupProps`, `SelectTriggerFieldProps`) when they represent a stable API surface.
- Run `bun run type:check` and `bun run check` after substantive edits.

## Project orientation

See root **[`PROJECT.md`](../../../PROJECT.md)** for stack, scripts, and folder map.
