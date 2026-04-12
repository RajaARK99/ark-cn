"use client";

import {
  FloatingPanel as FloatingPanelPrimitive,
  useFloatingPanelContext,
} from "@ark-ui/react/floating-panel";

import { Portal } from "@ark-ui/react/portal";
import { cn } from "@/lib/utils";

export type FloatingPanelProps = FloatingPanelPrimitive.RootProps;

const RESIZE_AXES = ["n", "e", "w", "s", "ne", "se", "sw", "nw"] as const;

export const FloatingPanelResizeEdges = ({
  className,
}: {
  className?: string;
}) => (
  <>
    {RESIZE_AXES.map((axis) => (
      <FloatingPanelResizeTrigger
        axis={axis}
        className={className}
        key={axis}
      />
    ))}
  </>
);

export const FloatingPanel = (props: FloatingPanelProps) => (
  <FloatingPanelPrimitive.Root data-slot="floating-panel" {...props} />
);

export type FloatingPanelPopupProps = FloatingPanelPrimitive.ContentProps & {
  disablePortal?: boolean;
  positionerClassName?: string;
};

export const FloatingPanelPopup = ({
  className,
  disablePortal,
  positionerClassName,
  children,
  ...contentProps
}: FloatingPanelPopupProps) => {
  const inner = (
    <FloatingPanelPrimitive.Positioner
      className={cn(!disablePortal && "z-50", positionerClassName)}
      data-slot="floating-panel-positioner"
    >
      <FloatingPanelPrimitive.Content
        className={cn(
          "relative flex w-full min-w-48 flex-col overflow-hidden rounded-xl border border-border/80 bg-popover text-popover-foreground shadow-md outline-none ring-1 ring-border/20 data-behind:opacity-40 data-maximized:rounded-none data-topmost:z-999999",
          className,
        )}
        data-slot="floating-panel-content"
        {...contentProps}
      >
        {children}
        <FloatingPanelResizeEdges />
      </FloatingPanelPrimitive.Content>
    </FloatingPanelPrimitive.Positioner>
  );
  return disablePortal ? inner : <Portal>{inner}</Portal>;
};

export const FloatingPanelTrigger = ({
  className,
  ...props
}: FloatingPanelPrimitive.TriggerProps) => (
  <FloatingPanelPrimitive.Trigger
    className={cn(
      "inline-flex h-9 cursor-pointer items-center justify-center rounded-lg border border-input bg-background px-3 font-medium text-foreground text-sm shadow-xs/5 outline-none transition-colors hover:bg-accent/50 focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-1 focus-visible:ring-offset-background disabled:pointer-events-none disabled:opacity-64 sm:h-8",
      className,
    )}
    data-slot="floating-panel-trigger"
    {...props}
  />
);

export const FloatingPanelDragTrigger = ({
  className,
  ...props
}: FloatingPanelPrimitive.DragTriggerProps) => (
  <FloatingPanelPrimitive.DragTrigger
    className={cn("flex min-h-0 min-w-0 shrink-0 flex-col", className)}
    data-slot="floating-panel-drag-trigger"
    {...props}
  />
);

export const FloatingPanelHeader = ({
  className,
  ...props
}: FloatingPanelPrimitive.HeaderProps) => (
  <FloatingPanelPrimitive.Header
    className={cn(
      "flex shrink-0 items-center gap-2 border-border border-b bg-muted/30 px-3 py-2.5 data-dragging:cursor-grabbing data-dragging:select-none sm:gap-3",
      className,
    )}
    data-slot="floating-panel-header"
    {...props}
  />
);

export const FloatingPanelTitle = ({
  className,
  ...props
}: FloatingPanelPrimitive.TitleProps) => (
  <FloatingPanelPrimitive.Title
    className={cn(
      "flex min-w-0 flex-1 items-center gap-2 truncate font-semibold text-foreground text-sm leading-tight",
      className,
    )}
    data-slot="floating-panel-title"
    {...props}
  />
);

export const FloatingPanelControl = ({
  className,
  ...props
}: FloatingPanelPrimitive.ControlProps) => (
  <FloatingPanelPrimitive.Control
    className={cn("flex shrink-0 items-center gap-1", className)}
    data-no-drag=""
    data-slot="floating-panel-control"
    {...props}
  />
);

export const FloatingPanelStageTrigger = ({
  ...props
}: FloatingPanelPrimitive.StageTriggerProps) => (
  <FloatingPanelPrimitive.StageTrigger
    data-slot="floating-panel-stage-trigger"
    {...props}
  />
);

export const FloatingPanelCloseTrigger = ({
  ...props
}: FloatingPanelPrimitive.CloseTriggerProps) => (
  <FloatingPanelPrimitive.CloseTrigger
    data-slot="floating-panel-close-trigger"
    {...props}
  />
);

export const FloatingPanelBody = ({
  className,
  ...props
}: FloatingPanelPrimitive.BodyProps) => (
  <FloatingPanelPrimitive.Body
    className={cn(
      "min-h-0 flex-1 overflow-auto px-4 py-4 text-muted-foreground text-sm leading-relaxed",
      className,
    )}
    data-slot="floating-panel-body"
    {...props}
  />
);

/**
 * Resize hit areas only — no Button chrome. Cursor comes from the machine inline styles.
 * Slight hover tint on edges for discoverability.
 */

export const FloatingPanelResizeTrigger = ({
  className,
  ...props
}: FloatingPanelPrimitive.ResizeTriggerProps) => (
  <FloatingPanelPrimitive.ResizeTrigger
    className={cn(
      "z-20 border-0 bg-transparent p-0 shadow-none ring-0 outline-none",
      "transition-colors duration-150",
      "hover:bg-foreground/6 active:bg-foreground/8",
      "data-disabled:pointer-events-none data-disabled:opacity-0",
      "data-[axis=n]:h-2 data-[axis=n]:max-w-[calc(100%-1rem)]",
      "data-[axis=s]:h-2 data-[axis=s]:max-w-[calc(100%-1rem)]",
      "data-[axis=e]:w-2 data-[axis=e]:max-h-[calc(100%-1rem)]",
      "data-[axis=w]:w-2 data-[axis=w]:max-h-[calc(100%-1rem)]",
      "data-[axis=ne]:size-3 data-[axis=nw]:size-3 data-[axis=se]:size-3 data-[axis=sw]:size-3",
      className,
    )}
    data-slot="floating-panel-resize-trigger"
    {...props}
  />
);

export const FloatingPanelContext = FloatingPanelPrimitive.Context;

export const FloatingPanelRootProvider = (
  props: FloatingPanelPrimitive.RootProviderProps,
) => <FloatingPanelPrimitive.RootProvider {...props} />;

export { useFloatingPanelContext };

export const FloatingPanelPositioner = ({
  className,
  ...props
}: FloatingPanelPrimitive.PositionerProps) => (
  <FloatingPanelPrimitive.Positioner
    className={cn(className)}
    data-slot="floating-panel-positioner-raw"
    {...props}
  />
);

export const FloatingPanelContent = ({
  className,
  ...props
}: FloatingPanelPrimitive.ContentProps) => (
  <FloatingPanelPrimitive.Content
    className={cn(className)}
    data-slot="floating-panel-content-raw"
    {...props}
  />
);
