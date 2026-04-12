# Component Quality Audit - ark-cn UI

## Overview
Reviewed 60+ components in `src/components/ui/`. Overall code quality is **strong**, following shadcn-style patterns with Ark UI. Below are findings and recommendations for consistency.

---

## ✅ Strengths

- **Consistent architecture**: Thin wrappers, stateful primitives, and collection-driven components all follow established patterns
- **Accessibility**: Ark primitives' roles and keyboard behavior preserved throughout
- **TypeScript**: Good use of `ComponentProps`, `VariantProps`, discriminated unions
- **Styling**: CVA + `cn()` helper used consistently; `data-slot` attributes enable predictable selectors
- **React practices**: Proper use of `useMemo`, `useEffect` with cleanup; no unnecessary state derivation
- **Exports**: Parts are modular (e.g., `Dialog`, `DialogTrigger`, `DialogPopup`, etc.)

---

## 🔍 Code Quality Issues (Priority Order)

### 1. **Long Tailwind Class Strings** (Minor)
**Affected**: `checkbox.tsx:30-33`, `button.tsx:11`, parts of `switch.tsx`

**Issue**: Very long className strings reduce readability.

**Recommendation**: Extract repeated or logical groupings to helper variables or split across multiple lines (like `switch.tsx` does).

```tsx
// ❌ Before (checkbox.tsx)
className={cn(
  "cursor-pointer peer relative flex size-4 shrink-0 items-center justify-center rounded border border-input transition-colors outline-none group-has-disabled/field:opacity-50 after:absolute after:-inset-x-3 after:-inset-y-2 focus-visible:border-ring ...",
  className,
)}

// ✅ After
const checkboxControlClasses = cn(
  "cursor-pointer peer relative flex size-4 shrink-0 items-center justify-center",
  "rounded border border-input transition-colors outline-none",
  "group-has-disabled/field:opacity-50 after:absolute after:-inset-x-3 after:-inset-y-2",
  "focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50",
  "disabled:cursor-not-allowed disabled:opacity-50",
  "data-invalid:border-destructive data-invalid:ring-3 data-invalid:ring-destructive/20",
  "data-invalid:data-[state='checked']:border-primary",
  "dark:bg-input/30 dark:data-invalid:border-destructive/50 dark:data-invalid:ring-destructive/40",
  "data-[state='checked']:border-primary data-[state='checked']:bg-primary",
  "data-[state='checked']:text-primary-foreground dark:data-[state='checked']:bg-primary",
);
```

### 2. **Inconsistent Naming & Exports** (Medium)
**Affected**: Multiple components

**Issue**: Naming conventions vary:
- `button.tsx` exports `Button` (no Root suffix)
- `checkbox.tsx` exports `CheckboxRoot`, `Checkbox`, `CheckboxLabel`
- `switch.tsx` exports `SwitchRoot`, `SwitchControl`, `Switch`
- `select.tsx` exports `Select` (root-only pattern)

**Recommendation**: Adopt one naming convention project-wide. Options:
1. **Option A**: Always export Root + named parts (consistent with Ark)
   - `DialogRoot`, `DialogTrigger`, `DialogContent` etc.
2. **Option B**: Export simple interface (current button pattern)
   - `Button`, `ButtonGroup` (root implied)

**Current approach**: Mixed — mostly Option A, but button.tsx is Option B. Consider documenting as "per-component style matching its Ark layer" in SKILL.md if intentional.

### 3. **Type Export Inconsistency** (Minor)
**Affected**: Across components

**Issue**: Some components export types explicitly:
```tsx
export type SwitchRootProps = SwitchPrimitive.RootProps;
```

Others don't:
```tsx
// No explicit SwitchControlProps type (it's part of the signature)
```

**Recommendation**: Decide: export types for all sub-parts or none. Suggest exporting types for:
- Root props
- Major parts (Trigger, Content, etc.)
- Custom composite types (e.g., `SelectTriggerFieldProps`)

### 4. **Accessibility: Button `aria-disabled` vs Native `disabled`** (Low)
**Affected**: `button.tsx:69`

```tsx
aria-disabled={loading || undefined}
```

**Issue**: `<button>` elements have native `disabled` attribute support. Using `aria-disabled` without disabled can confuse screen readers and keyboard navigation.

**Recommendation**: 
```tsx
disabled={loading || props.disabled}
aria-disabled={loading || undefined}  // Only if you need custom a11y semantics
```

### 5. **Minor: Unused Type Exports** (Very Low)
**Affected**: Some components re-export utility types that may not be widely used

**Recommendation**: Review annually. Remove unused re-exports to reduce API surface.

---

## ✅ What's Already Good

1. **`data-slot` attributes**: Consistent, enables styling hooks and testing selectors
2. **Component composition**: Dialog, Select, and others properly break into small, reusable parts
3. **React patterns**: 
   - `useEffect` only for external systems (not state sync)
   - `useMemo` for stabilizing collection keys (see Select)
   - No prop-drilling hell
4. **Variants**: All major visual variants use CVA consistently
5. **Error states**: Components properly expose `data-invalid`, error styling classes
6. **Responsive design**: Good use of `max-sm:` and responsive Tailwind breakpoints

---

## 🎯 Recommendations by Component Type

### Thin Wrappers (Button, Badge, Separator)
✅ Current approach is clean. No changes needed.

### Stateful Primitives (Dialog, Popover, Sheet)
✅ Well-structured with Portal, backdrop, positioning variants. Parts are well-named.

**Consider**: Add a `data-slot="close-trigger"` or `data-role="close"` to close buttons for consistent targeting.

### Collection Components (Select, ListBox, ComboBox)
✅ Good generics usage, stable key memoization.

**Consider**: Add a section to SKILL.md about "Collection item optimization" since several use `useMemo` for array keys.

### Form Field Components (Input, Textarea, Checkbox, Switch)
✅ Good mix of root + control + label pattern.

**Consider**: Standardize which components export `*RootProps` and `*ControlProps` types.

---

## 📝 Suggested Updates to SKILL.md

Add a new section under "Consistency":

```markdown
## Component Naming & Organization

### Pattern 1: Root + Parts (Compound)
Used for complex interactive components (Dialog, Select, Popover, etc.):
- Export `ComponentRoot` or `Component` (both acceptable)
- Export named parts: `ComponentTrigger`, `ComponentContent`, etc.
- Each part receives `ComponentPrimitive.PartProps`

**Examples**: Dialog, Sheet, Select, Popover

### Pattern 2: Single Wrapper
Used for simple presentational or minimal-state components:
- Export single main component (e.g., `Button`, not `ButtonRoot`)
- Optionally export variants: `buttonVariants`

**Examples**: Button, Badge, Spinner

### Pattern 3: Collection-Driven (Generics)
Used when Ark exposes collection APIs:
- Use TypeScript generics to flow item types through
- Stabilize collection keys with `useMemo` to avoid infinite loops
- Export both the generic component and context hooks

**Examples**: Select, ListBox, ComboBox, Tabs

### Guideline
**Do not force all components to one pattern.** Match the Ark primitive's API layer:
if Ark exposes `.Content`, `.Trigger`, etc., export matching parts. If Ark is a simple controlled component, wrap minimally.
```

---

## 🚀 Quick Wins (Low Effort, High Value)

1. **Break long Tailwind strings**: 2 components, ~30 min
2. **Add comment to SKILL.md** about naming patterns: 5 min (already done above)
3. **Run `bun run check`** to ensure linting is clean: 2 min
4. **Optional**: Audit button `aria-disabled` usage across form components

---

## Summary

| Category | Status | Action |
|----------|--------|--------|
| **Architecture** | ✅ Strong | Document naming patterns in SKILL.md |
| **TypeScript** | ✅ Strong | Standardize type exports (minor) |
| **Accessibility** | ✅ Strong | Fix button `aria-disabled` (optional) |
| **React Patterns** | ✅ Strong | No changes needed |
| **Styling** | ✅ Good | Break long class strings (cosmetic) |
| **Consistency** | 🟡 Good | Update SKILL.md with naming clarity |

**Overall Grade**: A- (Strong codebase, minor hygiene improvements)
