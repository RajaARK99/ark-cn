"use client";

import { Splitter as SplitterPrimitive } from "@ark-ui/react/splitter";
import { cn } from "@/lib/utils";

export type SplitterProps = SplitterPrimitive.RootProps;

export const Splitter = ({ className, ...props }: SplitterProps) => (
  <SplitterPrimitive.Root
    className={cn(
      "flex min-h-0 min-w-0 overflow-hidden rounded-xl border border-border bg-card text-card-foreground",
      "data-[orientation=horizontal]:flex-row data-[orientation=vertical]:flex-col",
      className,
    )}
    data-slot="splitter"
    {...props}
  />
);

export type SplitterPanelProps = SplitterPrimitive.PanelProps;

export const SplitterPanel = ({ className, ...props }: SplitterPanelProps) => (
  <SplitterPrimitive.Panel
    className={cn("min-h-0 min-w-0 overflow-auto", className)}
    data-slot="splitter-panel"
    {...props}
  />
);

export type SplitterResizeTriggerIndicatorProps =
  SplitterPrimitive.ResizeTriggerIndicatorProps;

export const SplitterResizeTriggerIndicator = ({
  className,
  ...props
}: SplitterResizeTriggerIndicatorProps) => (
  <SplitterPrimitive.ResizeTriggerIndicator
    className={cn(
      "rounded-full bg-muted-foreground/45",
      "data-[orientation=horizontal]:h-8 data-[orientation=horizontal]:w-1",
      "data-[orientation=vertical]:h-1 data-[orientation=vertical]:w-8",
      className,
    )}
    data-slot="splitter-handle-indicator"
    {...props}
  />
);

export type SplitterResizeTriggerProps =
  SplitterPrimitive.ResizeTriggerProps & {
    withHandle?: boolean;
    indicatorClassName?: string;
  };

export const SplitterResizeTrigger = ({
  className,
  withHandle,
  indicatorClassName,
  children,
  ...props
}: SplitterResizeTriggerProps) => (
  <SplitterPrimitive.ResizeTrigger
    className={cn(
      "group/resize relative shrink-0 bg-border/60 outline-none transition-colors",
      "hover:bg-border focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-1 focus-visible:ring-offset-background",
      "data-[orientation=horizontal]:w-px data-[orientation=vertical]:h-px",
      "data-[orientation=horizontal]:px-px data-[orientation=vertical]:py-px",
      "data-disabled:pointer-events-none data-disabled:opacity-64",
      className,
    )}
    data-slot="splitter-handle"
    {...props}
  >
    {withHandle ? (
      <span className="pointer-events-none absolute inset-0 group-data-[orientation=horizontal]/resize:-translate-x-1/2 group-data-[orientation=vertical]/resize:-translate-y-1/2  grid place-items-center">
        <SplitterResizeTriggerIndicator className={indicatorClassName} />
      </span>
    ) : null}
    {children}
  </SplitterPrimitive.ResizeTrigger>
);

export const SplitterContext = SplitterPrimitive.Context;

export type {
  UseSplitterProps,
  UseSplitterReturn,
} from "@ark-ui/react/splitter";
export {
  SplitterRootProvider,
  useSplitter,
  useSplitterContext,
} from "@ark-ui/react/splitter";
