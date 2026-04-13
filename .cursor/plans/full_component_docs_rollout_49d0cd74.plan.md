---
name: Full Component Docs Rollout
overview: Roll out a full docs pipeline for every `src/components/ui` component using manual curation from showcase demos, with per-component registry entries, examples, docs pages, and Ark-link-first API/a11y sections that only document ark-cn-specific props.
todos:
  - id: inventory-lock
    content: Freeze canonical slug inventory from src/components/ui and create a coverage checklist for docs/examples/registry.
    status: completed
  - id: wave1-complex
    content: Implement Wave 1 components end-to-end (examples, docs, registry, validation).
    status: completed
  - id: wave2-medium
    content: Implement Wave 2 components end-to-end and normalize naming/variant consistency.
    status: completed
  - id: wave3-simple
    content: Implement remaining simple components with concise docs and minimal curated examples.
    status: completed
  - id: registry-sync
    content: Keep registry.json + public/r/registry.json synchronized via bun run registry:build after each wave.
    status: completed
  - id: quality-gate
    content: Run check/typecheck/build and fix any issues; verify each component meets coverage gate.
    status: completed
isProject: false
---

# Full Component Docs Rollout

## Goal

Build and publish a complete pipeline for all UI primitives under [`d:/Projects/ark-cn/src/components/ui`](d:/Projects/ark-cn/src/components/ui):

- registry entry
- examples under [`d:/Projects/ark-cn/src/components/example`](d:/Projects/ark-cn/src/components/example)
- docs page under [`d:/Projects/ark-cn/content/docs/component`](d:/Projects/ark-cn/content/docs/component)
- concise API reference (ark-cn-only props only)
- short Accessibility section linking to Ark docs

## Current Baseline

- UI components: **64** files in [`d:/Projects/ark-cn/src/components/ui`](d:/Projects/ark-cn/src/components/ui)
- Fully covered today: **accordion only**
- Registry currently has one item in [`d:/Projects/ark-cn/registry.json`](d:/Projects/ark-cn/registry.json) and [`d:/Projects/ark-cn/public/r/registry.json`](d:/Projects/ark-cn/public/r/registry.json)
- Showcase source pool for manual extraction:
  - [`d:/Projects/ark-cn/src/components/ark-ui-showcase.tsx`](d:/Projects/ark-cn/src/components/ark-ui-showcase.tsx)
  - [`d:/Projects/ark-cn/src/components/ark-ui-showcase-1.tsx`](d:/Projects/ark-cn/src/components/ark-ui-showcase-1.tsx)
  - [`d:/Projects/ark-cn/src/components/ark-ui-showcase-2.tsx`](d:/Projects/ark-cn/src/components/ark-ui-showcase-2.tsx)
  - [`d:/Projects/ark-cn/src/components/ark-ui-showcase-3.tsx`](d:/Projects/ark-cn/src/components/ark-ui-showcase-3.tsx)

## Naming and Conventions

- Canonical slug: kebab-case from UI filename (e.g. `progress-linear`)
- Docs file: `content/docs/component/<slug>.mdx`
- Example files: `src/components/example/<slug>-<variant>.tsx`
- Registry item name: `<slug>` in both registry files
- API section rule: only ark-cn additions vs Ark primitive (e.g. `indicator`, `containerClassName`)
- Accessibility rule: short section with Ark accessibility URL (“See the ARK UI documentation for clarification.”)

## Manual Curation Workflow (Per Component)

1. Read wrapper exports in [`d:/Projects/ark-cn/src/components/ui/<slug>.tsx`](d:/Projects/ark-cn/src/components/ui).
2. Extract 4-8 high-signal variants from showcase file(s) into `src/components/example/<slug>-*.tsx`:
   - always include `-demo`
   - include `-controlled` when applicable
   - include 1-3 distinctive variants (horizontal/lazy/provider/with-field/etc.)
3. Add/update docs MDX page with sections in this order:
   - Intro
   - Main demo
   - Installation
   - Usage
   - Examples
   - API reference (ark-cn-only props table)
   - Accessibility (Ark link)
4. Add registry item to [`d:/Projects/ark-cn/registry.json`](d:/Projects/ark-cn/registry.json).
5. Run `bun run registry:build` to refresh `public/r/*.json`.
6. Validate with `bun run check`, `bun run type:check`, and docs build.

## Rollout Order (Risk-First)

### Wave 1: Complex, high-variance components

- `menu`, `select`, `listbox`, `tags-input`, `slider`, `toast`, `steps`, `tree-view`, `tour`, `file-upload`, `image-cropper`, `color-picker`, `sidebar`

### Wave 2: Medium complexity

- `tabs`, `combobox`, `number-input`, `editable`, `floating-panel`, `marquee`, `tooltip`, `splitter`, `switch`, `pagination`, `hover-card`, `dialog`, `popover`

### Wave 3: Simple/seed components

- remaining primitives (`avatar`, `badge`, `checkbox`, `input`, `separator`, `spinner`, etc.) with minimal curated examples

## Reusable Doc Components

Use existing docs components and presets:

- [`d:/Projects/ark-cn/src/components/component-preview.tsx`](d:/Projects/ark-cn/src/components/component-preview.tsx)
- [`d:/Projects/ark-cn/src/components/component-source.tsx`](d:/Projects/ark-cn/src/components/component-source.tsx)
- [`d:/Projects/ark-cn/src/components/docs/docs-props-table.tsx`](d:/Projects/ark-cn/src/components/docs/docs-props-table.tsx)
- [`d:/Projects/ark-cn/src/components/docs/presets`](d:/Projects/ark-cn/src/components/docs/presets)
- MDX registration in [`d:/Projects/ark-cn/src/components/docs/docs-page.tsx`](d:/Projects/ark-cn/src/components/docs/docs-page.tsx)

## Coverage Gate (Definition of Done)

For each UI slug in `src/components/ui`:

- docs page exists
- at least one example exists
- registry item exists
- `referenceLink` present in frontmatter
- API section includes only ark-cn-only props (if any)
- accessibility section links Ark docs

Then run full validation and ship.