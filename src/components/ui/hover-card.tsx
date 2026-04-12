"use client";

import {
  HoverCard as HoverCardPrimitive,
  useHoverCard,
  useHoverCardContext,
} from "@ark-ui/react/hover-card";
import { Portal } from "@ark-ui/react/portal";

import { cn } from "@/lib/utils";

export type HoverCardProps = HoverCardPrimitive.RootProps;

export const HoverCard = (props: HoverCardProps) => (
  <HoverCardPrimitive.Root data-slot="hover-card" {...props} />
);

export type HoverCardPopupProps = HoverCardPrimitive.ContentProps & {
  arrowClassName?: string;
  arrowTipClassName?: string;
  disablePortal?: boolean;
  positionerClassName?: string;
  showArrow?: boolean;
};

export const HoverCardPopup = ({
  arrowClassName,
  arrowTipClassName,
  children,
  className,
  disablePortal,
  positionerClassName,
  showArrow = true,
  ...contentProps
}: HoverCardPopupProps) => {
  const inner = (
    <HoverCardPrimitive.Positioner
      className={cn(!disablePortal && "z-50", positionerClassName)}
      data-slot="hover-card-positioner"
    >
      <HoverCardPrimitive.Content
        className={cn(
          "relative z-[calc(50+var(--layer-index,0))] w-[min(20rem,var(--available-width,20rem))] max-w-[min(20rem,var(--available-width,20rem))] rounded-xl border border-border/80 bg-popover p-4 text-popover-foreground shadow-md outline-none ring-1 ring-border/20",
          "origin-(--transform-origin) transition-[opacity,transform] duration-150 data-[state=closed]:scale-[0.98] data-[state=closed]:opacity-0 data-[state=open]:scale-100 data-[state=open]:opacity-100 data-has-nested:data-[state=open]:scale-[calc(1-var(--nested-layer-count,0)*0.05)]",
          className,
        )}
        data-slot="hover-card-content"
        {...contentProps}
      >
        {showArrow ? (
          <HoverCardPrimitive.Arrow
            className={cn(
              "[--arrow-background:var(--popover)] [--arrow-size:10px] [--arrow-shadow-color:var(--border)]",
              arrowClassName,
            )}
            data-slot="hover-card-arrow"
          >
            <HoverCardPrimitive.ArrowTip
              className={cn(
                "border-border border-t border-l",
                arrowTipClassName,
              )}
              data-slot="hover-card-arrow-tip"
            />
          </HoverCardPrimitive.Arrow>
        ) : null}
        {children}
      </HoverCardPrimitive.Content>
    </HoverCardPrimitive.Positioner>
  );
  return disablePortal ? inner : <Portal>{inner}</Portal>;
};

export const HoverCardTrigger = ({
  className,
  ...props
}: HoverCardPrimitive.TriggerProps) => (
  <HoverCardPrimitive.Trigger
    className={cn(className)}
    data-slot="hover-card-trigger"
    {...props}
  />
);

export const HoverCardArrow = ({
  className,
  ...props
}: HoverCardPrimitive.ArrowProps) => (
  <HoverCardPrimitive.Arrow
    className={cn(className)}
    data-slot="hover-card-arrow-raw"
    {...props}
  />
);

export const HoverCardArrowTip = ({
  className,
  ...props
}: HoverCardPrimitive.ArrowTipProps) => (
  <HoverCardPrimitive.ArrowTip
    className={cn(className)}
    data-slot="hover-card-arrow-tip-raw"
    {...props}
  />
);

export const HoverCardPositioner = ({
  className,
  ...props
}: HoverCardPrimitive.PositionerProps) => (
  <HoverCardPrimitive.Positioner
    className={cn(className)}
    data-slot="hover-card-positioner-raw"
    {...props}
  />
);

export const HoverCardContent = ({
  className,
  ...props
}: HoverCardPrimitive.ContentProps) => (
  <HoverCardPrimitive.Content
    className={cn(className)}
    data-slot="hover-card-content-raw"
    {...props}
  />
);

export const HoverCardContext = HoverCardPrimitive.Context;

export const HoverCardRootProvider = (
  props: HoverCardPrimitive.RootProviderProps,
) => <HoverCardPrimitive.RootProvider {...props} />;

export { useHoverCard, useHoverCardContext };
