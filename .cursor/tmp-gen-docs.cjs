const fs = require("fs");
const path = require("path");

const root = "d:/Projects/ark-cn";
const uiDir = path.join(root, "src/components/ui");
const docsDir = path.join(root, "content/docs/component");
const exDir = path.join(root, "src/components/example");
const registryPath = path.join(root, "registry.json");

const toSlug = (f) => f.replace(/\.tsx$/i, "");
const toTitle = (slug) =>
  slug
    .split("-")
    .map((p) => p.charAt(0).toUpperCase() + p.slice(1))
    .join(" ");

const uiSlugs = fs
  .readdirSync(uiDir)
  .filter((f) => f.endsWith(".tsx"))
  .map(toSlug)
  .sort();

const existingDocFiles = fs
  .readdirSync(docsDir)
  .filter((f) => f.endsWith(".mdx"));
const existingDocSlugs = new Set(
  existingDocFiles.map((f) => f.replace(/\.mdx$/i, "")),
);
const existingExampleFiles = new Set(
  fs.readdirSync(exDir).filter((f) => f.endsWith(".tsx")),
);

const allDocsDir = path.join(root, "content/docs");
const docFiles = fs.readdirSync(allDocsDir).filter((f) => f.endsWith(".mdx"));
let maxId = 0;
for (const f of docFiles) {
  const text = fs.readFileSync(path.join(allDocsDir, f), "utf8");
  const m = text.match(/\nid:\s*(\d+)/);
  if (m) maxId = Math.max(maxId, Number(m[1]));
}
for (const f of existingDocFiles) {
  const text = fs.readFileSync(path.join(docsDir, f), "utf8");
  const m = text.match(/\nid:\s*(\d+)/);
  if (m) maxId = Math.max(maxId, Number(m[1]));
}

for (const slug of uiSlugs) {
  if (slug === "accordion") continue;

  const demoFile = `${slug}-demo.tsx`;
  const demoCompName =
    slug
      .split("-")
      .map((p) => p.charAt(0).toUpperCase() + p.slice(1))
      .join("") + "Demo";

  if (!existingExampleFiles.has(demoFile)) {
    const ex = `"use client";\n\nconst ${demoCompName} = () => {\n  return (\n    <div className="flex w-full max-w-md items-center justify-center rounded-lg border border-dashed border-border bg-muted/20 px-4 py-10 text-center">\n      <div className="space-y-2">\n        <p className="font-medium text-sm">${toTitle(slug)} demo</p>\n        <p className="text-muted-foreground text-xs">Example variants for this component are being curated from Ark showcase demos.</p>\n      </div>\n    </div>\n  );\n};\n\nexport default ${demoCompName};\n`;
    fs.writeFileSync(path.join(exDir, demoFile), ex, "utf8");
  }

  if (!existingDocSlugs.has(slug)) {
    maxId += 1;
    const title = toTitle(slug);
    const link = `https://ark-ui.com/docs/components/${slug}`;
    const mdx = `---\nid: ${maxId}\ntitle: "${title}"\ndescription: "A shadcn-style ${title.toLowerCase()} component built with Ark UI primitives."\nurl: "/component/${slug}"\nreferenceLink: "${link}"\n---\n\n${title} component docs for ARK CN.\n\n<ComponentPreview name="${slug}-demo" />\n\n## Installation\n\n<Tabs defaultValue="cli">\n  <TabsList>\n    <TabsTrigger value="cli">CLI</TabsTrigger>\n    <TabsTrigger value="manual">Manual</TabsTrigger>\n  </TabsList>\n  <TabsContent value="cli">\n    <PackageInstall pkg="@ark-cn/${slug}" shadcn />\n  </TabsContent>\n  <TabsContent value="manual">\n    <DocSteps>\n      <DocStep>\n        Install the dependency required by this primitive:\n        <PackageInstall pkg="@ark-ui/react" />\n      </DocStep>\n      <DocStep>\n        Copy the component source into your app:\n        <ComponentSource name="${slug}" title="components/ui/${slug}.tsx" />\n      </DocStep>\n      <DocStep>\n        Update import aliases to match your project setup.\n      </DocStep>\n    </DocSteps>\n  </TabsContent>\n</Tabs>\n\n## Usage\n\n\`\`\`tsx\nimport * as ${title.replace(/\s+/g, "")} from "@/components/ui/${slug}"\n\`\`\`\n\nRead exported parts in \`src/components/ui/${slug}.tsx\` and compose the primitive according to the Ark UI pattern for this component.\n\n## Examples\n\n<ComponentPreview name="${slug}-demo" />\n\n## API reference\n\nThis component mirrors the upstream Ark UI primitive.\n\n### Props in ARK CN\n\nNo additional props are added by ARK CN for this component.\n\nSee the [ARK UI documentation](${link}) for the full API.\n\n## Accessibility\n\nSee the [Ark UI documentation](${link}#accessibility) for clarification.\n`;
    fs.writeFileSync(path.join(docsDir, `${slug}.mdx`), mdx, "utf8");
  }
}

const registry = JSON.parse(fs.readFileSync(registryPath, "utf8"));
const existingNames = new Set((registry.items || []).map((i) => i.name));
for (const slug of uiSlugs) {
  if (existingNames.has(slug)) continue;
  registry.items.push({
    name: slug,
    type: "registry:ui",
    title: toTitle(slug),
    description: `A shadcn-style ${toTitle(slug).toLowerCase()} component built with Ark UI primitives.`,
    dependencies: ["@ark-ui/react"],
    files: [
      {
        path: `src/components/ui/${slug}.tsx`,
        type: "registry:ui",
        target: `src/components/ui/${slug}.tsx`,
      },
    ],
  });
}
registry.items.sort((a, b) => a.name.localeCompare(b.name));
fs.writeFileSync(
  registryPath,
  JSON.stringify(registry, null, 2) + "\n",
  "utf8",
);

console.log(`Processed ${uiSlugs.length} ui components.`);
