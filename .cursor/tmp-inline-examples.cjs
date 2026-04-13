const fs = require("fs");
const path = require("path");
const ts = require("typescript");

const root = "d:/Projects/ark-cn";
const exDir = path.join(root, "src/components/example");
const exFiles = fs.readdirSync(exDir).filter((f) => f.endsWith(".tsx"));

const cache = new Map();

const load = (abs) => {
  if (cache.has(abs)) return cache.get(abs);
  const text = fs.readFileSync(abs, "utf8");
  const sf = ts.createSourceFile(
    abs,
    text,
    ts.ScriptTarget.Latest,
    true,
    ts.ScriptKind.TSX,
  );

  const imports = [];
  const importBindings = new Map();
  const decls = new Map();

  sf.statements.forEach((st) => {
    if (ts.isImportDeclaration(st) && ts.isStringLiteral(st.moduleSpecifier)) {
      const mod = st.moduleSpecifier.text;
      const clause = st.importClause;
      imports.push({ module: mod, node: st });
      if (clause) {
        if (clause.name) {
          importBindings.set(clause.name.text, {
            kind: "default",
            node: st,
          });
        }
        if (clause.namedBindings) {
          if (ts.isNamespaceImport(clause.namedBindings)) {
            importBindings.set(clause.namedBindings.name.text, {
              kind: "namespace",
              node: st,
            });
          } else if (ts.isNamedImports(clause.namedBindings)) {
            clause.namedBindings.elements.forEach((el) => {
              importBindings.set(el.name.text, {
                imported: el.propertyName ? el.propertyName.text : el.name.text,
                isType: el.isTypeOnly,
                kind: "named",
                node: st,
              });
            });
          }
        }
      }
      return;
    }

    if (ts.isVariableStatement(st)) {
      st.declarationList.declarations.forEach((d) => {
        if (ts.isIdentifier(d.name)) decls.set(d.name.text, st);
      });
      return;
    }

    if (ts.isFunctionDeclaration(st) && st.name) {
      decls.set(st.name.text, st);
      return;
    }

    if (
      ts.isTypeAliasDeclaration(st) ||
      ts.isInterfaceDeclaration(st) ||
      ts.isEnumDeclaration(st) ||
      ts.isClassDeclaration(st)
    ) {
      if (st.name) decls.set(st.name.text, st);
    }
  });

  const data = { abs, decls, imports, importBindings, sf, text };
  cache.set(abs, data);
  return data;
};

const aliasToAbs = (fromAbs, mod) => {
  if (mod.startsWith("@/")) {
    return path.join(root, "src", mod.slice(2)) + ".tsx";
  }
  if (mod.startsWith("./") || mod.startsWith("../")) {
    const base = path.resolve(path.dirname(fromAbs), mod);
    if (fs.existsSync(base)) return base;
    if (fs.existsSync(`${base}.tsx`)) return `${base}.tsx`;
    if (fs.existsSync(`${base}.ts`)) return `${base}.ts`;
  }
  return null;
};

const collectIds = (node) => {
  const ids = new Set();
  const walk = (n) => {
    if (ts.isIdentifier(n)) ids.add(n.text);
    n.forEachChild(walk);
  };
  walk(node);
  return ids;
};

let changed = 0;
for (const file of exFiles) {
  const abs = path.join(exDir, file);
  const curr = load(abs);
  const targetImport = curr.imports.find(
    (i) =>
      i.module.startsWith("@/components/ark-ui-showcase") ||
      i.module.startsWith("@/components/example/"),
  );
  if (!targetImport) continue;

  const clause = targetImport.node.importClause;
  if (
    !clause ||
    !clause.namedBindings ||
    !ts.isNamedImports(clause.namedBindings) ||
    clause.namedBindings.elements.length !== 1
  ) {
    continue;
  }

  const importedLocal = clause.namedBindings.elements[0].name.text;
  const srcAbs = aliasToAbs(abs, targetImport.module);
  if (!srcAbs || !fs.existsSync(srcAbs)) continue;

  const src = load(srcAbs);
  if (!src.decls.has(importedLocal)) continue;

  const needed = new Set([importedLocal]);
  let grew = true;
  while (grew) {
    grew = false;
    for (const name of [...needed]) {
      const decl = src.decls.get(name);
      if (!decl) continue;
      const ids = collectIds(decl);
      for (const id of ids) {
        if (id === name) continue;
        if (src.decls.has(id) && !needed.has(id)) {
          needed.add(id);
          grew = true;
        }
      }
    }
  }

  const declNodes = [...needed]
    .map((name) => src.decls.get(name))
    .filter(Boolean)
    .sort((a, b) => a.pos - b.pos);

  const usedImports = new Map();
  for (const dn of declNodes) {
    const ids = collectIds(dn);
    for (const id of ids) {
      const binding = src.importBindings.get(id);
      if (binding) usedImports.set(id, binding);
    }
  }

  const importNodeToNames = new Map();
  const importNodeDefault = new Map();
  const importNodeNS = new Map();
  for (const [id, binding] of usedImports) {
    const key = `${binding.node.pos}-${binding.node.end}`;
    if (binding.kind === "named") {
      if (!importNodeToNames.has(key)) {
        importNodeToNames.set(key, { names: new Set(), node: binding.node });
      }
      importNodeToNames.get(key).names.add(id);
    } else if (binding.kind === "default") {
      importNodeDefault.set(key, { name: id, node: binding.node });
    } else if (binding.kind === "namespace") {
      importNodeNS.set(key, { name: id, node: binding.node });
    }
  }

  const importLines = [];
  for (const imp of src.imports) {
    const node = imp.node;
    const key = `${node.pos}-${node.end}`;
    const named = importNodeToNames.get(key);
    const def = importNodeDefault.get(key);
    const ns = importNodeNS.get(key);
    if (!named && !def && !ns) continue;

    const parts = [];
    if (def) parts.push(def.name);
    if (ns) parts.push(`* as ${ns.name}`);
    if (named) {
      const elems =
        node.importClause &&
        node.importClause.namedBindings &&
        ts.isNamedImports(node.importClause.namedBindings)
          ? node.importClause.namedBindings.elements
          : [];
      const names = [];
      elems.forEach((el) => {
        const local = el.name.text;
        if (named.names.has(local)) {
          names.push(
            el.propertyName ? `${el.propertyName.text} as ${local}` : local,
          );
        }
      });
      if (names.length > 0) {
        parts.push(`{ ${names.join(", ")} }`);
      }
    }

    if (parts.length > 0) {
      importLines.push(
        `import ${parts.join(", ")} from "${node.moduleSpecifier.text}";`,
      );
    }
  }

  const declTexts = declNodes
    .map((n) => src.text.slice(n.pos, n.end).trim())
    .join("\n\n");

  const out = `"use client";\n\n${importLines.join("\n")}\n\n${declTexts}\n\nexport default ${importedLocal};\n`;
  fs.writeFileSync(abs, out, "utf8");
  changed += 1;
}

console.log(`Converted files: ${changed}`);
