"use client";

import { Portal } from "@ark-ui/react/portal";
import {
  Tooltip as TooltipPrimitive,
  useTooltip,
  useTooltipContext,
} from "@ark-ui/react/tooltip";

import { cn } from "@/lib/utils";

export type TooltipProps = TooltipPrimitive.RootProps;

export const Tooltip = (props: TooltipProps) => (
  <TooltipPrimitive.Root data-slot="tooltip" {...props} />
);

export type TooltipPopupProps = TooltipPrimitive.ContentProps & {
  arrowClassName?: string;
  arrowTipClassName?: string;
  disablePortal?: boolean;
  positionerClassName?: string;
  showArrow?: boolean;
};

export const TooltipPopup = ({
  arrowClassName,
  arrowTipClassName,
  children,
  className,
  disablePortal,
  positionerClassName,
  showArrow = false,
  ...contentProps
}: TooltipPopupProps) => {
  const inner = (
    <TooltipPrimitive.Positioner
      className={cn(!disablePortal && "z-50", positionerClassName)}
      data-slot="tooltip-positioner"
    >
      <TooltipPrimitive.Content
        className={cn(
          "relative z-[calc(50+var(--layer-index,0))] w-fit max-w-[min(22rem,var(--available-width,22rem))] rounded-md border border-border/80 bg-popover px-2.5 py-1.5 text-popover-foreground text-xs shadow-md outline-none ring-1 ring-border/20",
          "origin-(--transform-origin) transition-opacity duration-150 data-[state=closed]:opacity-0 data-[state=open]:opacity-100",
          className,
        )}
        data-slot="tooltip-content"
        {...contentProps}
      >
        {showArrow ? (
          <TooltipPrimitive.Arrow
            className={cn(
              "[--arrow-background:var(--popover)] [--arrow-size:9px] [--arrow-shadow-color:var(--border)]",
              arrowClassName,
            )}
            data-slot="tooltip-arrow"
          >
            <TooltipPrimitive.ArrowTip
              className={cn(
                "border-border border-t border-l",
                arrowTipClassName,
              )}
              data-slot="tooltip-arrow-tip"
            />
          </TooltipPrimitive.Arrow>
        ) : null}
        {children}
      </TooltipPrimitive.Content>
    </TooltipPrimitive.Positioner>
  );

  return disablePortal ? inner : <Portal>{inner}</Portal>;
};

export type TooltipTriggerProps = TooltipPrimitive.TriggerProps;

export const TooltipTrigger = ({
  className,
  ...props
}: TooltipTriggerProps) => (
  <TooltipPrimitive.Trigger
    className={cn(className)}
    data-slot="tooltip-trigger"
    {...props}
  />
);

export type TooltipPositionerProps = TooltipPrimitive.PositionerProps;

export const TooltipPositioner = ({
  className,
  ...props
}: TooltipPositionerProps) => (
  <TooltipPrimitive.Positioner
    className={cn(className)}
    data-slot="tooltip-positioner-raw"
    {...props}
  />
);

export type TooltipContentProps = TooltipPrimitive.ContentProps;

export const TooltipContent = ({
  className,
  ...props
}: TooltipContentProps) => (
  <TooltipPrimitive.Content
    className={cn(className)}
    data-slot="tooltip-content-raw"
    {...props}
  />
);

export type TooltipArrowProps = TooltipPrimitive.ArrowProps;

export const TooltipArrow = ({ className, ...props }: TooltipArrowProps) => (
  <TooltipPrimitive.Arrow
    className={cn(className)}
    data-slot="tooltip-arrow-raw"
    {...props}
  />
);

export type TooltipArrowTipProps = TooltipPrimitive.ArrowTipProps;

export const TooltipArrowTip = ({
  className,
  ...props
}: TooltipArrowTipProps) => (
  <TooltipPrimitive.ArrowTip
    className={cn(className)}
    data-slot="tooltip-arrow-tip-raw"
    {...props}
  />
);

export const TooltipContext = TooltipPrimitive.Context;
export const TooltipProvider = TooltipPrimitive.RootProvider;

export type TooltipRootProviderProps = TooltipPrimitive.RootProviderProps;

export const TooltipRootProvider = (props: TooltipRootProviderProps) => (
  <TooltipPrimitive.RootProvider data-slot="tooltip-root-provider" {...props} />
);

export { useTooltip, useTooltipContext };
