"use client";

import {
  Popover as PopoverPrimitive,
  usePopover,
  usePopoverContext,
} from "@ark-ui/react/popover";
import { Portal } from "@ark-ui/react/portal";

import { cn } from "@/lib/utils";

export type PopoverProps = PopoverPrimitive.RootProps;

export const Popover = ({ positioning, ...props }: PopoverProps) => (
  <PopoverPrimitive.Root
    data-slot="popover"
    positioning={{ sizeMiddleware: false, ...positioning }}
    {...props}
  />
);

export type PopoverPopupProps = PopoverPrimitive.ContentProps & {
  arrowClassName?: string;
  arrowTipClassName?: string;
  disablePortal?: boolean;
  positionerClassName?: string;
  showArrow?: boolean;
};

export const PopoverPopup = ({
  arrowClassName,
  arrowTipClassName,
  children,
  className,
  disablePortal,
  positionerClassName,
  showArrow = true,
  ...contentProps
}: PopoverPopupProps) => {
  const inner = (
    <PopoverPrimitive.Content
      className={cn(
        "relative z-[calc(50+var(--layer-index,0))] w-[min(20rem,var(--available-width,20rem))] max-w-[min(20rem,var(--available-width,20rem))] rounded-xl border border-border/80 bg-popover p-4 text-popover-foreground shadow-md outline-none ring-1 ring-border/20",
        "origin-(--transform-origin) transition-opacity duration-150 data-[state=closed]:opacity-0 data-[state=open]:opacity-100",
        className,
      )}
      data-slot="popover-content"
      {...contentProps}
    >
      {children}

      {showArrow ? (
        <PopoverPrimitive.Arrow
          className={cn(
            "[--arrow-background:var(--popover)] [--arrow-size:10px] [--arrow-shadow-color:var(--border)]",
            arrowClassName,
          )}
          data-slot="popover-arrow"
        >
          <PopoverPrimitive.ArrowTip
            className={cn("border-border border-t border-l", arrowTipClassName)}
            data-slot="popover-arrow-tip"
          />
        </PopoverPrimitive.Arrow>
      ) : null}
    </PopoverPrimitive.Content>
  );
  return disablePortal ? (
    inner
  ) : (
    <Portal>
      <PopoverPrimitive.Positioner
        className={cn(!disablePortal && "z-50", positionerClassName)}
        data-slot="popover-positioner"
      >
        {inner}
      </PopoverPrimitive.Positioner>
    </Portal>
  );
};

export type PopoverTriggerProps = PopoverPrimitive.TriggerProps;

export const PopoverTrigger = ({ ...props }: PopoverTriggerProps) => (
  <PopoverPrimitive.Trigger data-slot="popover-trigger" {...props} />
);

export type PopoverAnchorProps = PopoverPrimitive.AnchorProps;

export const PopoverAnchor = ({ className, ...props }: PopoverAnchorProps) => (
  <PopoverPrimitive.Anchor
    className={cn("inline-flex", className)}
    data-slot="popover-anchor"
    {...props}
  />
);

export type PopoverTitleProps = PopoverPrimitive.TitleProps;

export const PopoverTitle = ({ className, ...props }: PopoverTitleProps) => (
  <PopoverPrimitive.Title
    className={cn(
      "font-semibold text-foreground text-sm leading-none",
      className,
    )}
    data-slot="popover-title"
    {...props}
  />
);

export type PopoverDescriptionProps = PopoverPrimitive.DescriptionProps;

export const PopoverDescription = ({
  className,
  ...props
}: PopoverDescriptionProps) => (
  <PopoverPrimitive.Description
    className={cn("text-muted-foreground text-sm", className)}
    data-slot="popover-description"
    {...props}
  />
);

export type PopoverCloseTriggerProps = PopoverPrimitive.CloseTriggerProps;

export const PopoverCloseTrigger = ({
  className,
  ...props
}: PopoverCloseTriggerProps) => (
  <PopoverPrimitive.CloseTrigger
    className={cn(className)}
    data-slot="popover-close-trigger"
    {...props}
  />
);

export const PopoverClose = PopoverCloseTrigger;

export type PopoverArrowProps = PopoverPrimitive.ArrowProps;

export const PopoverArrow = ({ className, ...props }: PopoverArrowProps) => (
  <PopoverPrimitive.Arrow
    className={cn(className)}
    data-slot="popover-arrow-raw"
    {...props}
  />
);

export type PopoverArrowTipProps = PopoverPrimitive.ArrowTipProps;

export const PopoverArrowTip = ({
  className,
  ...props
}: PopoverArrowTipProps) => (
  <PopoverPrimitive.ArrowTip
    className={cn(className)}
    data-slot="popover-arrow-tip-raw"
    {...props}
  />
);

export type PopoverPositionerProps = PopoverPrimitive.PositionerProps;

export const PopoverPositioner = ({
  className,
  ...props
}: PopoverPositionerProps) => (
  <PopoverPrimitive.Positioner
    className={cn(className)}
    data-slot="popover-positioner-raw"
    {...props}
  />
);

export type PopoverContentProps = PopoverPrimitive.ContentProps;

export const PopoverContent = ({
  className,
  ...props
}: PopoverContentProps) => (
  <PopoverPrimitive.Content
    className={cn(className)}
    data-slot="popover-content-raw"
    {...props}
  />
);

export type PopoverIndicatorProps = PopoverPrimitive.IndicatorProps;

export const PopoverIndicator = ({
  className,
  ...props
}: PopoverIndicatorProps) => (
  <PopoverPrimitive.Indicator
    className={cn(className)}
    data-slot="popover-indicator"
    {...props}
  />
);

export const PopoverContext = PopoverPrimitive.Context;

export type PopoverRootProviderProps = PopoverPrimitive.RootProviderProps;

export const PopoverRootProvider = (props: PopoverRootProviderProps) => (
  <PopoverPrimitive.RootProvider data-slot="popover-root-provider" {...props} />
);

export { usePopover, usePopoverContext };
