const basenameExtFromPath = (path: string) => {
  const m = path.match(/\/([^/]+)\.([a-z0-9]+)$/i);
  if (!m?.[1] || !m[2]) {
    return null;
  }
  return { slug: m[1].toLowerCase(), ext: m[2].toLowerCase() };
};

export const uiRawModules = import.meta.glob("../components/ui/*.tsx", {
  eager: true,
  query: "?raw",
  import: "default",
}) as Record<string, string>;

export const resolveUiSource = (
  name: string,
): { raw: string; basename: string; ext: string } | null => {
  const slug =
    name
      .replace(/\.tsx$/i, "")
      .split("/")
      .pop()
      ?.toLowerCase() ?? "";
  if (!slug) {
    return null;
  }
  const rawPath = Object.keys(uiRawModules).find(
    (p) => basenameExtFromPath(p)?.slug === slug,
  );
  if (!rawPath) {
    return null;
  }
  const parsed = basenameExtFromPath(rawPath);
  if (!parsed) {
    return null;
  }
  const raw = uiRawModules[rawPath];
  if (!raw?.trim()) {
    return null;
  }
  return { raw, basename: slug, ext: parsed.ext };
};
