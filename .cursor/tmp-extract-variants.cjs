const fs = require("fs");
const path = require("path");
const ts = require("typescript");

const root = "d:/Projects/ark-cn";
const uiDir = path.join(root, "src/components/ui");
const exDir = path.join(root, "src/components/example");
const docsDir = path.join(root, "content/docs/component");

const showcaseFiles = [
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
const kebabFromCamel = (s) =>
  s
    .replace(/([a-z0-9])([A-Z])/g, "$1-$2")
    .replace(/([A-Z])([A-Z][a-z])/g, "$1-$2")
    .toLowerCase();
const titleFromVariant = (v) =>
  v
    .split("-")
    .map((p) => p.charAt(0).toUpperCase() + p.slice(1))
    .join(" ");

const getShowcaseData = (relPath) => {
  const full = path.join(root, relPath);
  const text = fs.readFileSync(full, "utf8");
  const sf = ts.createSourceFile(
    relPath,
    text,
    ts.ScriptTarget.Latest,
    true,
    ts.ScriptKind.TSX,
  );
  const demos = [];
  sf.forEachChild((node) => {
    if (
      ts.isVariableStatement(node) &&
      node.declarationList.flags & ts.NodeFlags.Const
    ) {
      for (const d of node.declarationList.declarations) {
        if (!ts.isIdentifier(d.name)) continue;
        const name = d.name.text;
        if (!name.endsWith("Demo")) continue;
        const init = d.initializer;
        if (!init) continue;
        if (!(ts.isArrowFunction(init) || ts.isFunctionExpression(init)))
          continue;
        demos.push(name);
      }
    }
  });
  return { relPath, full, text, demos };
};

const showcases = showcaseFiles.map(getShowcaseData);
const allDemos = showcases.flatMap((s) =>
  s.demos.map((name) => ({ name, file: s.relPath })),
);

const uiSlugs = fs
  .readdirSync(uiDir)
  .filter((f) => f.endsWith(".tsx"))
  .map((f) => f.replace(/\.tsx$/i, ""))
  .sort();

const slugToDemoMatches = new Map();
for (const slug of uiSlugs) {
  const p = pascal(slug);
  const matches = allDemos.filter((d) => d.name.includes(p));
  slugToDemoMatches.set(slug, matches);
}

const usedByFile = new Map(showcaseFiles.map((f) => [f, new Set()]));

for (const slug of uiSlugs) {
  const p = pascal(slug);
  const matches = slugToDemoMatches.get(slug) || [];
  let candidates = matches.filter(
    (m) => m.name.startsWith(p) && m.name.endsWith("Demo"),
  );
  if (!candidates.length) candidates = matches;

  const ranked = candidates
    .map((m) => {
      const rawVariant = m.name
        .replace(new RegExp(`^${p}`), "")
        .replace(/Demo$/, "");
      const variant = rawVariant ? kebabFromCamel(rawVariant) : "demo";
      let score = 0;
      if (variant === "basic" || variant === "default" || variant === "demo")
        score += 20;
      if (variant.includes("controlled")) score += 10;
      if (variant.includes("root-provider")) score += 7;
      if (variant.includes("form")) score += 5;
      if (variant.includes("context")) score += 2;
      if (variant.includes("nested")) score -= 1;
      return { ...m, variant, score };
    })
    .sort(
      (a, b) =>
        b.score - a.score ||
        a.variant.length - b.variant.length ||
        a.name.localeCompare(b.name),
    );

  const chosen = [];
  const seen = new Set();
  for (const r of ranked) {
    if (seen.has(r.variant)) continue;
    seen.add(r.variant);
    chosen.push(r);
    if (chosen.length >= 5) break;
  }

  if (!chosen.length) continue;

  for (const c of chosen) {
    const variant = c.variant === "demo" ? "demo" : c.variant;
    const fileName = `${slug}-${variant}.tsx`;
    const localName = `${pascal(slug)}${variant === "demo" ? "Demo" : pascal(variant)}Example`;
    const importPath = c.file
      .replace("src/components/", "@/components/")
      .replace(/\.tsx$/, "");
    const content = `"use client";\n\nimport { ${c.name} } from "${importPath}";\n\nconst ${localName} = () => <${c.name} />;\n\nexport default ${localName};\n`;
    fs.writeFileSync(path.join(exDir, fileName), content, "utf8");
    usedByFile.get(c.file).add(c.name);
  }
}

// hand-authored keep list
const keepAuthored = [
  "accordion-demo.tsx",
  "accordion-single.tsx",
  "accordion-multiple.tsx",
  "accordion-controlled.tsx",
  "accordion-horizontal.tsx",
  "accordion-lazy.tsx",
  "accordion-custom-indicator.tsx",
  "alert-demo.tsx",
  "alert-dialog-demo.tsx",
  "angle-slider-demo.tsx",
  "badge-demo.tsx",
  "breadcrumb-demo.tsx",
  "carousel-demo.tsx",
  "clipboard-demo.tsx",
  "date-picker-demo.tsx",
  "input-group-demo.tsx",
  "password-input-demo.tsx",
  "pin-input-demo.tsx",
  "progress-circular-demo.tsx",
  "progress-linear-demo.tsx",
  "qr-code-demo.tsx",
  "radio-group-demo.tsx",
  "rating-group-demo.tsx",
  "scroll-area-demo.tsx",
  "segment-group-demo.tsx",
  "select-demo.tsx",
  "separator-demo.tsx",
  "sheet-demo.tsx",
  "signature-pad-demo.tsx",
  "spinner-demo.tsx",
  "swap-demo.tsx",
  "tree-view-demo.tsx",
];
for (const f of keepAuthored) {
  const full = path.join(exDir, f);
  if (!fs.existsSync(full)) continue;
  const txt = fs.readFileSync(full, "utf8");
  const m = txt.match(
    /import\s*\{\s*([A-Za-z0-9_]+)\s*\}\s*from\s*"(@\/components\/ark-ui-showcase(?:-[123])?)"/,
  );
  if (m) {
    const demoName = m[1];
    const src = m[2].replace("@/components/", "src/components/") + ".tsx";
    if (usedByFile.has(src)) usedByFile.get(src).add(demoName);
  }
}

const start = "// AUTO-EXPORT-START: docs-example-demos";
const end = "// AUTO-EXPORT-END: docs-example-demos";
for (const s of showcases) {
  let text = fs.readFileSync(s.full, "utf8");
  text = text.replace(new RegExp(`${start}[\\s\\S]*?${end}\\n?`, "m"), "");
  const names = [...usedByFile.get(s.relPath)].sort();
  if (names.length) {
    const block = `${start}\nexport {\n${names.map((n) => `  ${n},`).join("\n")}\n};\n${end}\n`;
    text = text.trimEnd() + "\n\n" + block;
  }
  fs.writeFileSync(s.full, text, "utf8");
}

// update docs examples + api no-arkcn-props cleanup (except accordion)
const docFiles = fs.readdirSync(docsDir).filter((f) => f.endsWith(".mdx"));
for (const file of docFiles) {
  const slug = file.replace(/\.mdx$/i, "");
  const full = path.join(docsDir, file);
  let text = fs.readFileSync(full, "utf8");

  if (slug !== "accordion") {
    const exFiles = fs
      .readdirSync(exDir)
      .filter((f) => f.startsWith(`${slug}-`) && f.endsWith(".tsx"))
      .sort();
    const variants = exFiles.map((f) =>
      f.replace(`${slug}-`, "").replace(/\.tsx$/, ""),
    );
    const blocks = [];
    for (const v of variants) {
      const label = titleFromVariant(v);
      if (v === "demo") {
        blocks.push(`<ComponentPreview name="${slug}-${v}" />`);
      } else {
        blocks.push(`### ${label}\n\n<ComponentPreview name="${slug}-${v}" />`);
      }
    }
    const examplesSection = `## Examples\n\n${blocks.join("\n\n")}`;
    text = text.replace(
      /## Examples[\s\S]*?## API reference/m,
      `${examplesSection}\n\n## API reference`,
    );

    text = text.replace(
      /### Props in ARK CN\s*\n\s*No additional props are added by ARK CN for this component\.\s*\n\s*/m,
      "",
    );
    text = text.replace(
      /### Props in ARK CN\s*\n\s*No additional props are added by ARK CN for this component\.\s*\n\s*See the \[ARK UI documentation\]\(([^)]+)\) for the full API\./m,
      "See the [ARK UI documentation]($1) for the full API.",
    );
  }

  fs.writeFileSync(full, text, "utf8");
}

console.log(
  "Updated examples, showcase exports, and docs examples/api wording.",
);
