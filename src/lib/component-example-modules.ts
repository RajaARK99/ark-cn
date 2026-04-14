import type { ComponentType } from "react";

/**
 * Vite globs must live in a stable module; maps `src/components/example/*.tsx`.
 */
export const exampleComponentModules = import.meta.glob(
  "../components/example/*.tsx",
  {
    eager: true,
  },
) as Record<string, { default: ComponentType<Record<string, unknown>> }>;

export const exampleRawModules = import.meta.glob(
  "../components/example/*.tsx",
  {
    eager: true,
    query: "?raw",
    import: "default",
  },
) as Record<string, string>;

const slugFromPath = (path: string) => {
  const m = path.match(/\/([^/]+)\.tsx$/);
  return m?.[1]?.toLowerCase() ?? "";
};

export const resolveExamplePaths = (
  name: string,
): {
  componentPath: string;
  rawPath: string;
} | null => {
  const slug =
    name
      .replace(/\.tsx$/i, "")
      .split("/")
      .pop()
      ?.toLowerCase() ?? "";
  if (!slug) {
    return null;
  }
  const componentPath = Object.keys(exampleComponentModules).find(
    (p) => slugFromPath(p) === slug,
  );
  const rawPath = Object.keys(exampleRawModules).find(
    (p) => slugFromPath(p) === slug,
  );
  if (!(componentPath && rawPath)) {
    return null;
  }
  return { componentPath, rawPath };
};
