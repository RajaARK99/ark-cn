import { useMemo, useState } from "react";
import { DocsShikiCode } from "@/components/docs/docs-shiki-code";
import {
  ClipboardIndicator,
  ClipboardRoot,
  ClipboardTrigger,
} from "@/components/ui/clipboard";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  exampleComponentModules,
  exampleRawModules,
  resolveExamplePaths,
} from "@/lib/component-example-modules";
import { cn } from "@/lib/utils";
import { buttonVariants } from "./ui/button";

const previewPanelBase =
  "flex h-80 w-full overflow-y-auto border border-border rounded-lg p-5 max-sm:px-6 justify-center items-center";

const codePanelClass =
  "flex h-80 w-full flex-col overflow-y-auto border border-border rounded-lg p-4 bg-muted relative";

const ComponentPreviewHighlightedCode = ({
  source,
  lang = "tsx",
  className,
}: {
  source: string;
  lang?: string;
  className?: string;
}) => (
  <DocsShikiCode
    source={source}
    lang={lang}
    className={cn("component-preview-code min-h-0 flex-1", className)}
  />
);

export type ComponentPreviewProps = {
  /** Basename of `src/components/example/<name>.tsx` (no extension), e.g. `"accordion"`. */
  name: string;
  className?: string;
  /** Live demo; defaults to the file’s default export from `example/`. */
  preview?: React.ReactNode;
  /** Raw TSX source; defaults to the same file read as text (Vite `?raw`). */
  code?: string;
  /** When true, only the Preview panel is shown (no Code tab). */
  hideCode?: boolean;
  previewClassName?: string;
  codeClassName?: string;
};

const ComponentPreview = ({
  name,
  className,
  preview,
  code,
  hideCode = false,
  previewClassName,
  codeClassName,
}: ComponentPreviewProps) => {
  const [tab, setTab] = useState("preview");

  const resolved = useMemo(() => resolveExamplePaths(name), [name]);
  const Demo = resolved
    ? exampleComponentModules[resolved.componentPath]?.default
    : undefined;
  const rawFromFile = resolved
    ? exampleRawModules[resolved.rawPath]
    : undefined;
  const raw = code ?? rawFromFile ?? "";
  const live = preview ?? (Demo ? <Demo /> : null);

  const missingFile = !resolved;
  const missingLive = !preview && !Demo;
  const missingSource = !raw.trim();

  if (missingFile || missingLive || missingSource) {
    const message = missingFile ? (
      <>
        No example file for{" "}
        <span className="font-mono text-foreground">{name}</span>. Add{" "}
        <span className="font-mono text-foreground">
          src/components/example/{name}.tsx
        </span>
        .
      </>
    ) : missingLive ? (
      <>
        Example <span className="font-mono text-foreground">{name}</span> has no
        default export. Export a demo component as default, or pass{" "}
        <span className="font-mono">preview</span>.
      </>
    ) : (
      <>
        Example <span className="font-mono text-foreground">{name}</span> is
        empty. Add source to the file, or pass{" "}
        <span className="font-mono">code</span>.
      </>
    );
    return (
      <div
        className={cn(
          "rounded-xl border border-dashed border-border px-4 py-6 text-center text-muted-foreground text-sm",
          className,
        )}
      >
        {message}
      </div>
    );
  }

  if (hideCode) {
    return (
      <figure
        className={cn("not-prose my-8 w-full", className)}
        data-slot="component-preview"
      >
        <div
          className={cn(previewPanelBase, "bg-muted/20", previewClassName)}
          data-slot="component-preview-live"
        >
          {live}
        </div>
      </figure>
    );
  }

  return (
    <figure
      className={cn("not-prose my-8 w-full", className)}
      data-slot="component-preview"
    >
      <Tabs onValueChange={(details) => setTab(details.value)} value={tab}>
        <TabsList className="group-data-[variant=default]:bg-transparent">
          <TabsTrigger className="rounded-lg" value="preview">
            Preview
          </TabsTrigger>
          <TabsTrigger className="rounded-lg" value="code">
            Code
          </TabsTrigger>
        </TabsList>
        <TabsContent
          value="preview"
          className={cn(previewPanelBase, "bg-muted/20", previewClassName)}
        >
          {live}
        </TabsContent>
        <TabsContent value="code" className={cn(codePanelClass, codeClassName)}>
          <ClipboardRoot value={raw}>
            <ClipboardTrigger
              className={buttonVariants({
                variant: "ghost",
                size: "icon",
                className: "absolute inset-e-2 top-2 z-10",
              })}
            >
              <ClipboardIndicator />
            </ClipboardTrigger>
          </ClipboardRoot>
          <ComponentPreviewHighlightedCode source={raw} />
        </TabsContent>
      </Tabs>
    </figure>
  );
};

export default ComponentPreview;
export { ComponentPreviewHighlightedCode };
