const fs = require("fs");
const path = require("path");
const ts = require("typescript");

const root = "d:/Projects/ark-cn";
const uiDir = path.join(root, "src/components/ui");
const exDir = path.join(root, "src/components/example");
const showcases = [
  "src/components/ark-ui-showcase.tsx",
  "src/components/ark-ui-showcase-1.tsx",
  "src/components/ark-ui-showcase-2.tsx",
  "src/components/ark-ui-showcase-3.tsx",
];

const pascal = (slug) =>
  slug
    .split("-")
    .filter(Boolean)
    .map((p) => p[0].toUpperCase() + p.slice(1))
    .join("");

const read = (p) => fs.readFileSync(path.join(root, p), "utf8");

const collectTopLevelDemoNames = (relPath) => {
  const text = read(relPath);
  const sf = ts.createSourceFile(
    relPath,
    text,
    ts.ScriptTarget.Latest,
    true,
    ts.ScriptKind.TSX,
  );
  const names = [];
  sf.forEachChild((node) => {
    if (ts.isVariableStatement(node)) {
      const isConst = node.declarationList.flags & ts.NodeFlags.Const;
      if (!isConst) return;
      for (const d of node.declarationList.declarations) {
        if (!ts.isIdentifier(d.name)) continue;
        const n = d.name.text;
        if (!n.endsWith("Demo")) continue;
        const init = d.initializer;
        if (!init) continue;
        const ok = ts.isArrowFunction(init) || ts.isFunctionExpression(init);
        if (ok) names.push(n);
      }
    }
  });
  return { text, names, sf };
};

const showcaseData = showcases.map((p) => ({
  path: p,
  ...collectTopLevelDemoNames(p),
}));
const allDemos = showcaseData.flatMap((d) =>
  d.names.map((name) => ({ name, path: d.path })),
);

const pickDemo = (slug) => {
  const p = pascal(slug);
  const exact = `${p}Demo`;
  let candidates = allDemos.filter((d) => d.name === exact);
  if (!candidates.length) {
    candidates = allDemos.filter(
      (d) => d.name.startsWith(p) && d.name.endsWith("Demo"),
    );
  }
  if (!candidates.length) {
    candidates = allDemos.filter(
      (d) => d.name.includes(p) && d.name.endsWith("Demo"),
    );
  }
  if (!candidates.length) return null;
  candidates.sort(
    (a, b) => a.name.length - b.name.length || a.name.localeCompare(b.name),
  );
  return candidates[0];
};

const uiSlugs = fs
  .readdirSync(uiDir)
  .filter((f) => f.endsWith(".tsx"))
  .map((f) => f.replace(/\.tsx$/i, ""))
  .sort();

const usedByShowcase = new Map(showcases.map((s) => [s, new Set()]));
const missing = [];

for (const slug of uiSlugs) {
  if (slug === "accordion") continue;
  const picked = pickDemo(slug);
  if (!picked) {
    missing.push(slug);
    continue;
  }
  usedByShowcase.get(picked.path).add(picked.name);

  const localName = `${pascal(slug)}DemoExample`;
  const importPath = picked.path
    .replace("src/components/", "@/components/")
    .replace(/\.tsx$/i, "");
  const content = `"use client";\n\nimport { ${picked.name} } from "${importPath}";\n\nconst ${localName} = () => <${picked.name} />;\n\nexport default ${localName};\n`;
  fs.writeFileSync(path.join(exDir, `${slug}-demo.tsx`), content, "utf8");
}

const start = "// AUTO-EXPORT-START: docs-example-demos";
const end = "// AUTO-EXPORT-END: docs-example-demos";

for (const data of showcaseData) {
  const names = [...usedByShowcase.get(data.path)].sort();
  let text = data.text;
  const blockRegex = new RegExp(`${start}[\\s\\S]*?${end}\\n?`, "m");
  text = text.replace(blockRegex, "");
  if (names.length) {
    const exportBlock = `\n${start}\nexport {\n${names.map((n) => `  ${n},`).join("\n")}\n};\n${end}\n`;
    text = text.trimEnd() + "\n" + exportBlock;
  }
  fs.writeFileSync(path.join(root, data.path), text, "utf8");
}

console.log("Mapped demos:", uiSlugs.length - 1 - missing.length);
console.log("Missing:", missing.length, missing.join(", "));
