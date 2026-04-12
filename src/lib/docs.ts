import type { Element, Root } from "hast";
import type { Pluggable } from "unified";

export type DocsHeading = {
  depth: 2 | 3;
  id: string;
  title: string;
};

export const slugifyHeading = (value: string) => {
  return value
    .toLowerCase()
    .trim()
    .replace(/[`~!@#$%^&*()+={}[\]|\\:;"'<>,.?/_]/g, "")
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-");
};

export const getDocURl = <T extends string | undefined | null>(
  path: T,
): T extends string ? string : null => {
  if (!path) {
    return null as T extends string ? string : null;
  }

  return (path === "/" ? "/docs" : "/docs" + path) as T extends string
    ? string
    : null;
};

const createUniqueHeadingId = (
  title: string,
  counts: Map<string, number>,
): string => {
  const baseId = slugifyHeading(title) || "section";
  const count = counts.get(baseId) ?? 0;

  counts.set(baseId, count + 1);

  return count === 0 ? baseId : `${baseId}-${count}`;
};

export const extractHeadingsFromMarkdown = (content: string): DocsHeading[] => {
  const headings: DocsHeading[] = [];
  const counts = new Map<string, number>();
  const regex = /^(#{2,3})\s+(.+)$/gm;

  let match = regex.exec(content);
  while (match !== null) {
    const depth = match[1].length as 2 | 3;
    const title = match[2].trim();
    const id = createUniqueHeadingId(title, counts);
    headings.push({ depth, title, id });
    match = regex.exec(content);
  }

  return headings;
};

/**
 * Rehype plugin: set `id` on h2/h3 in the same order as {@link extractHeadingsFromMarkdown},
 * so compiled MDX matches the TOC / scroll-spy ids from the content-collections transform.
 */
export const rehypeAssignHeadingIds = (headings: DocsHeading[]): Pluggable => {
  return () => {
    return (tree: Root) => {
      let index = 0;
      const walk = (node: Element) => {
        if (node.tagName === "h2" || node.tagName === "h3") {
          const heading = headings[index];
          if (heading) {
            node.properties ??= {};
            node.properties.id = heading.id;
            index += 1;
          }
        }
        for (const child of node.children) {
          if (child.type === "element") {
            walk(child);
          }
        }
      };
      for (const child of tree.children) {
        if (child.type === "element") {
          walk(child);
        }
      }
    };
  };
};

export const collectDocsHeadings = (container: HTMLElement): DocsHeading[] => {
  const headingCounts = new Map<string, number>();
  const elements = Array.from(
    container.querySelectorAll<HTMLHeadingElement>("h2, h3"),
  );

  return elements.flatMap((element) => {
    const rawTitle = element.textContent?.trim() ?? "";

    if (!rawTitle) {
      return [];
    }

    const depth = Number(element.tagName[1]);

    if (depth !== 2 && depth !== 3) {
      return [];
    }

    const id = element.id || createUniqueHeadingId(rawTitle, headingCounts);

    element.id = id;

    return {
      id,
      title: rawTitle,
      depth,
    };
  });
};
