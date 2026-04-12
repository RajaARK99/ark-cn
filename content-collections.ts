import { defineCollection, defineConfig } from "@content-collections/core";
import { compileMDX } from "@content-collections/mdx";
import rehypePrettyCode, {
  type Options as RehypePrettyCodeOptions,
} from "rehype-pretty-code";
import remarkGfm from "remark-gfm";
import { z } from "zod";
import {
  extractHeadingsFromMarkdown,
  rehypeAssignHeadingIds,
} from "./src/lib/docs";
import { rehypePrettyCodeTheme } from "./src/lib/docs-code-theme";

const rehypePrettyCodeOptions = {
  theme: rehypePrettyCodeTheme,
  keepBackground: true,
  defaultLang: "plaintext",
  bypassInlineCode: true,
} satisfies RehypePrettyCodeOptions;

const docs = defineCollection({
  name: "doc",
  directory: "content/docs/",
  include: "**/*.mdx",
  schema: z.object({
    id: z.number(),
    title: z.string(),
    description: z.string(),
    url: z.string(),
  }),
  transform: async (document, context) => {
    const headings = extractHeadingsFromMarkdown(document.content);
    const mdx = await compileMDX(context, document, {
      remarkPlugins: [remarkGfm],
      rehypePlugins: [
        [rehypePrettyCode, rehypePrettyCodeOptions],
        rehypeAssignHeadingIds(headings),
      ],
    });
    return {
      ...document,
      mdx,
      headings,
    };
  },
});

export default defineConfig({
  content: [docs],
});
