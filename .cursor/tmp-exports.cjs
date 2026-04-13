const fs = require("fs");
const ts = require("typescript");
const root = "d:/Projects/ark-cn/src/components/ui";
const slugs = [
  "alert",
  "alert-dialog",
  "angle-slider",
  "badge",
  "breadcrumb",
  "carousel",
  "clipboard",
  "date-picker",
  "input-group",
  "password-input",
  "pin-input",
  "progress-circular",
  "progress-linear",
  "qr-code",
  "radio-group",
  "rating-group",
  "scroll-area",
  "segment-group",
  "select",
  "separator",
  "sheet",
  "signature-pad",
  "spinner",
  "swap",
  "tree-view",
];
for (const slug of slugs) {
  const p = `${root}/${slug}.tsx`;
  const txt = fs.readFileSync(p, "utf8");
  const sf = ts.createSourceFile(
    p,
    txt,
    ts.ScriptTarget.Latest,
    true,
    ts.ScriptKind.TSX,
  );
  const ex = [];
  sf.forEachChild((n) => {
    if ((ts.getCombinedModifierFlags(n) & ts.ModifierFlags.Export) !== 0) {
      if (ts.isVariableStatement(n)) {
        for (const d of n.declarationList.declarations) {
          if (ts.isIdentifier(d.name)) ex.push(d.name.text);
        }
      } else if (ts.isFunctionDeclaration(n) && n.name) {
        ex.push(n.name.text);
      }
    }
  });
  console.log("\n#", slug, ":", ex.join(", "));
}
