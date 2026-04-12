"use client";

import { TerminalIcon } from "lucide-react";
import { useState } from "react";
import {
  ClipboardIndicator,
  ClipboardRoot,
  ClipboardTrigger,
} from "@/components/ui/clipboard";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { cn } from "@/lib/utils";
import { ComponentPreviewHighlightedCode } from "./component-preview";
import { buttonVariants } from "./ui/button";

type PackageManager = "pnpm" | "npm" | "yarn" | "bun";

const MANAGERS: PackageManager[] = ["npm", "pnpm", "yarn", "bun"];

function installLine(pm: PackageManager, pkg: string, dev: boolean): string {
  if (dev) {
    switch (pm) {
      case "pnpm":
        return `pnpm add -D ${pkg}`;
      case "npm":
        return `npm install --save-dev ${pkg}`;
      case "yarn":
        return `yarn add -D ${pkg}`;
      case "bun":
        return `bun add -d ${pkg}`;
    }
  }
  switch (pm) {
    case "pnpm":
      return `pnpm add ${pkg}`;
    case "npm":
      return `npm install ${pkg}`;
    case "yarn":
      return `yarn add ${pkg}`;
    case "bun":
      return `bun add ${pkg}`;
  }
}

export type PackageInstallProps = {
  /** Package spec to install (e.g. `@ark-ui/react`). */
  pkg: string;
  /** Install as dev dependency. */
  dev?: boolean;
  className?: string;
};

const PackageInstall = ({
  pkg,
  dev = false,
  className,
}: PackageInstallProps) => {
  const [pm, setPm] = useState<PackageManager>("npm");
  const trimmed = pkg.trim();
  const line = installLine(pm, trimmed, dev);

  return (
    <div
      className={cn(
        "not-prose my-6 overflow-x-auto rounded-xl border border-border bg-muted/30 shadow-sm",
        className,
      )}
      data-slot="package-install"
    >
      <Tabs
        className="gap-0"
        onValueChange={(details) => {
          const v = details.value;
          if (MANAGERS.includes(v as PackageManager)) {
            setPm(v as PackageManager);
          }
        }}
        value={pm}
      >
        <div className="flex min-h-11 items-center gap-2 border-border border-b px-2 py-2 sm:px-3">
          <TerminalIcon
            aria-hidden
            className="size-4 shrink-0 self-center text-muted-foreground"
          />
          <TabsList
            className={cn(
              "min-h-9 w-full min-w-0 flex-1 flex-nowrap items-stretch justify-start gap-0.5 overflow-x-auto overscroll-x-contain group-data-[variant=default]:px-1 group-data-[variant=default]:py-0",
              "group-data-[variant=default]:bg-transparent group-data-[variant=default]:shadow-none",
            )}
          >
            {MANAGERS.map((id) => (
              <TabsTrigger
                key={id}
                className="shrink-0 self-center px-2.5 text-xs sm:px-3 sm:text-sm"
                value={id}
              >
                {id}
              </TabsTrigger>
            ))}
          </TabsList>
          <ClipboardRoot value={line} className="w-min max-w-min">
            <ClipboardTrigger
              aria-label="Copy install command"
              className={buttonVariants({
                variant: "ghost",
                size: "icon",
                className: "shrink-0 self-center text-muted-foreground",
              })}
            >
              <ClipboardIndicator />
            </ClipboardTrigger>
          </ClipboardRoot>
        </div>
        <ComponentPreviewHighlightedCode
          source={line}
          lang={"bash"}
          className="[&_pre.shiki]:p-4! bg-muted"
        />
      </Tabs>
    </div>
  );
};

export default PackageInstall;
