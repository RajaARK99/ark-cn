const fs = require("fs");
const path = require("path");

const root = "d:/Projects/ark-cn/src/components/example";
const files = fs.readdirSync(root).filter((f) => f.endsWith(".tsx"));

const RULES = [
  {
    module: "react",
    types: new Set(["ReactNode", "ComponentProps"]),
  },
  {
    module: "@/components/ui/floating-panel",
    types: new Set(["FloatingPanelProps"]),
  },
];

const splitSpecifiers = (raw) =>
  raw
    .split(",")
    .map((s) => s.trim())
    .filter(Boolean);

let changed = 0;

for (const file of files) {
  const abs = path.join(root, file);
  let text = fs.readFileSync(abs, "utf8");
  let fileChanged = false;

  for (const rule of RULES) {
    const mod = rule.module.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
    const re = new RegExp(
      `import\\s*\\{([\\s\\S]*?)\\}\\s*from\\s*\"${mod}\";`,
      "g",
    );

    text = text.replace(re, (full, group) => {
      const specs = splitSpecifiers(group);
      const typeSpecs = [];
      const valueSpecs = [];

      for (const spec of specs) {
        const base = spec
          .replace(/^type\s+/, "")
          .split(/\s+as\s+/i)[0]
          .trim();
        if (rule.types.has(base)) {
          typeSpecs.push(spec.replace(/^type\s+/, "").trim());
        } else {
          valueSpecs.push(spec.replace(/^type\s+/, "").trim());
        }
      }

      if (typeSpecs.length === 0) return full;
      fileChanged = true;

      if (valueSpecs.length === 0) {
        return `import type { ${typeSpecs.join(", ")} } from "${rule.module}";`;
      }

      return `import { ${valueSpecs.join(", ")} } from "${rule.module}";\nimport type { ${typeSpecs.join(", ")} } from "${rule.module}";`;
    });
  }

  if (fileChanged) {
    fs.writeFileSync(abs, text, "utf8");
    changed += 1;
  }
}

console.log(`Fixed type imports in ${changed} files.`);
