import type { Options as RehypePrettyCodeOptions } from "rehype-pretty-code";

/** Bundled Shiki theme ids shared by MDX (rehype-pretty-code) and live `ComponentPreview`. */
export const DOCS_CODE_THEMES = {
  light: "github-light-high-contrast",
  dark: "github-dark-dimmed",
} as const;

/** `rehype-pretty-code` `theme` option — keep in sync with `content-collections.ts` options. */
export const rehypePrettyCodeTheme = {
  dark: DOCS_CODE_THEMES.dark,
  light: DOCS_CODE_THEMES.light,
} satisfies NonNullable<RehypePrettyCodeOptions["theme"]>;
