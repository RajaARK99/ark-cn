const fs = require("fs");
const ts = require("typescript");
const root = "d:/Projects/ark-cn";
const files = [
  "src/components/ark-ui-showcase.tsx",
  "src/components/ark-ui-showcase-1.tsx",
  "src/components/ark-ui-showcase-2.tsx",
  "src/components/ark-ui-showcase-3.tsx",
];
for (const rel of files) {
  const text = fs.readFileSync(root + "/" + rel, "utf8");
  const sf = ts.createSourceFile(
    rel,
    text,
    ts.ScriptTarget.Latest,
    true,
    ts.ScriptKind.TSX,
  );
  const names = [];
  sf.forEachChild((n) => {
    if (
      ts.isVariableStatement(n) &&
      n.declarationList.flags & ts.NodeFlags.Const
    ) {
      for (const d of n.declarationList.declarations) {
        if (ts.isIdentifier(d.name)) {
          const name = d.name.text;
          if (name.endsWith("Demo")) names.push(name);
        }
      }
    }
  });
  console.log("###", rel);
  console.log(names.join("\n"));
}
