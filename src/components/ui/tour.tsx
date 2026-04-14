"use client";

import { Portal } from "@ark-ui/react/portal";
import {
  Tour as TourPrimitive,
  useTour,
  waitForElement,
  waitForEvent,
} from "@ark-ui/react/tour";
import { PlayIcon, XIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export type TourProps = TourPrimitive.RootProps;

export const Tour = (props: TourProps) => (
  <TourPrimitive.Root data-slot="tour" {...props} />
);

export type TourPopupProps = TourPrimitive.ContentProps & {
  arrowClassName?: string;
  arrowTipClassName?: string;
  disablePortal?: boolean;
  positionerClassName?: string;
  showArrow?: boolean;
};

export const TourPopup = ({
  arrowClassName,
  arrowTipClassName,
  children,
  className,
  disablePortal,
  positionerClassName,
  showArrow = true,
  ...contentProps
}: TourPopupProps) => {
  const inner = (
    <TourPrimitive.Positioner
      className={cn(
        !disablePortal && "z-50",
        "data-[type=tooltip]:z-50",
        "data-[type=dialog]:fixed data-[type=dialog]:inset-0 data-[type=dialog]:flex data-[type=dialog]:items-center data-[type=dialog]:justify-center",
        "data-[type=floating]:fixed data-[type=floating]:z-50",
        "[&[data-type=floating][data-placement*=top]]:top-6",
        "[&[data-type=floating][data-placement*=bottom]]:bottom-6",
        "[&[data-type=floating][data-placement*=start]]:left-6",
        "[&[data-type=floating][data-placement*=end]]:right-6",
        positionerClassName,
      )}
      data-slot="tour-positioner"
    >
      <TourPrimitive.Content
        className={cn(
          "relative z-[calc(50+var(--layer-index,0))] w-[min(20rem,var(--available-width,20rem))] max-w-[min(20rem,var(--available-width,20rem))] rounded-xl border border-border/80 bg-popover p-4 text-popover-foreground shadow-md outline-none ring-1 ring-border/20",
          "origin-(--transform-origin) transition-opacity duration-150 data-[state=closed]:opacity-0 data-[state=open]:opacity-100",
          "data-[type=dialog]:w-[min(24rem,calc(100vw-2rem))]",
          "data-[type=floating]:w-[min(22rem,calc(100vw-2rem))]",
          className,
        )}
        data-slot="tour-content"
        {...contentProps}
      >
        {children}
        {showArrow ? (
          <TourPrimitive.Arrow
            className={cn(
              "[--arrow-background:var(--popover)] [--arrow-size:10px] [--arrow-shadow-color:var(--border)]",
              arrowClassName,
            )}
            data-slot="tour-arrow"
          >
            <TourPrimitive.ArrowTip
              className={cn(
                "border-border border-t border-l",
                arrowTipClassName,
              )}
              data-slot="tour-arrow-tip"
            />
          </TourPrimitive.Arrow>
        ) : null}
      </TourPrimitive.Content>
    </TourPrimitive.Positioner>
  );

  return disablePortal ? inner : <Portal>{inner}</Portal>;
};

export type TourBackdropProps = TourPrimitive.BackdropProps;

export const TourBackdrop = ({ className, ...props }: TourBackdropProps) => (
  <TourPrimitive.Backdrop
    className={cn(
      "fixed inset-0 z-50 bg-black/55 transition-opacity duration-150 data-[state=closed]:opacity-0 data-[state=open]:opacity-100",
      className,
    )}
    data-slot="tour-backdrop"
    {...props}
  />
);

export type TourSpotlightProps = TourPrimitive.SpotlightProps;

export const TourSpotlight = ({ className, ...props }: TourSpotlightProps) => (
  <TourPrimitive.Spotlight
    className={cn(
      "z-50 rounded-xl border border-white/20 shadow-[0_0_0_9999px_rgba(0,0,0,0.2)]",
      className,
    )}
    data-slot="tour-spotlight"
    {...props}
  />
);

export type TourActionTriggerProps = TourPrimitive.ActionTriggerProps;

export const TourActionTrigger = ({
  className,
  ...props
}: TourActionTriggerProps) => (
  <TourPrimitive.ActionTrigger
    className={cn(
      "inline-flex h-9 cursor-pointer items-center justify-center rounded-lg border border-input bg-background px-3 font-medium text-foreground text-sm shadow-xs/5 outline-none transition-colors hover:bg-accent/50 focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-1 focus-visible:ring-offset-background data-disabled:pointer-events-none data-disabled:opacity-64 sm:h-8",
      className,
    )}
    data-slot="tour-action-trigger"
    {...props}
  />
);

export type TourActionsProps = TourPrimitive.ActionsProps;

export const TourActions = (props: TourActionsProps) => (
  <TourPrimitive.Actions data-slot="tour-actions" {...props} />
);

export type TourCloseTriggerProps = TourPrimitive.CloseTriggerProps;

export const TourCloseTrigger = ({
  className,
  ...props
}: TourCloseTriggerProps) => (
  <TourPrimitive.CloseTrigger
    className={cn(
      "inline-flex size-8 cursor-pointer items-center justify-center rounded-md text-muted-foreground outline-none transition-colors hover:bg-accent hover:text-foreground focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-1 focus-visible:ring-offset-background data-disabled:pointer-events-none data-disabled:opacity-64",
      className,
    )}
    data-slot="tour-close-trigger"
    {...props}
  />
);

export type TourControlProps = TourPrimitive.ControlProps;

export const TourControl = ({ className, ...props }: TourControlProps) => (
  <TourPrimitive.Control
    className={cn(
      "mt-4 flex flex-wrap items-center justify-end gap-2",
      className,
    )}
    data-slot="tour-control"
    {...props}
  />
);

export type TourTitleProps = TourPrimitive.TitleProps;

export const TourTitle = ({ className, ...props }: TourTitleProps) => (
  <TourPrimitive.Title
    className={cn("font-semibold text-base text-foreground", className)}
    data-slot="tour-title"
    {...props}
  />
);

export type TourDescriptionProps = TourPrimitive.DescriptionProps;

export const TourDescription = ({
  className,
  ...props
}: TourDescriptionProps) => (
  <TourPrimitive.Description
    className={cn("text-muted-foreground text-sm leading-relaxed", className)}
    data-slot="tour-description"
    {...props}
  />
);

export type TourProgressTextProps = TourPrimitive.ProgressTextProps;

export const TourProgressText = ({
  className,
  ...props
}: TourProgressTextProps) => (
  <TourPrimitive.ProgressText
    className={cn("mb-2 text-muted-foreground text-xs", className)}
    data-slot="tour-progress-text"
    {...props}
  />
);

export type TourPositionerProps = TourPrimitive.PositionerProps;

export const TourPositioner = ({
  className,
  ...props
}: TourPositionerProps) => (
  <TourPrimitive.Positioner
    className={cn(className)}
    data-slot="tour-positioner-raw"
    {...props}
  />
);

export type TourContentProps = TourPrimitive.ContentProps;

export const TourContent = ({ className, ...props }: TourContentProps) => (
  <TourPrimitive.Content
    className={cn(className)}
    data-slot="tour-content-raw"
    {...props}
  />
);

export type TourArrowProps = TourPrimitive.ArrowProps;

export const TourArrow = ({ className, ...props }: TourArrowProps) => (
  <TourPrimitive.Arrow
    className={cn(className)}
    data-slot="tour-arrow-raw"
    {...props}
  />
);

export type TourArrowTipProps = TourPrimitive.ArrowTipProps;

export const TourArrowTip = ({ className, ...props }: TourArrowTipProps) => (
  <TourPrimitive.ArrowTip
    className={cn(className)}
    data-slot="tour-arrow-tip-raw"
    {...props}
  />
);

export const tourStageClass = "mx-auto flex w-full max-w-md flex-col gap-3";

export const tourTargetClass =
  "flex min-h-20 items-center justify-center rounded-xl border border-border/70 bg-muted/20 px-4 py-3 text-center font-medium text-foreground text-sm";

export type TourLaunchButtonProps = {
  label?: string;
  onClick: () => void;
};

export const TourLaunchButton = ({
  label = "Start tour",
  onClick,
}: TourLaunchButtonProps) => (
  <Button
    className="w-fit gap-2"
    onClick={onClick}
    type="button"
    variant="outline"
  >
    <PlayIcon className="size-4" />
    {label}
  </Button>
);

export const TourActionButtons = () => (
  <TourActions>
    {(actions) =>
      actions.map((action, index) => (
        <TourActionTrigger
          action={action}
          asChild
          key={`${action.label}-${index}`}
        >
          <Button
            size="sm"
            type="button"
            variant={
              action.action === "next" || action.action === "dismiss"
                ? "default"
                : "outline"
            }
          >
            {action.label}
          </Button>
        </TourActionTrigger>
      ))
    }
  </TourActions>
);

export type TourFrameProps = {
  showProgressBar?: boolean;
  tour: ReturnType<typeof useTour>;
};

export const TourFrame = ({
  tour,
  showProgressBar = false,
}: TourFrameProps) => (
  <Tour tour={tour}>
    <Portal>
      <TourBackdrop />
      <TourSpotlight />
    </Portal>
    <TourPopup className={cn("space-y-2", showProgressBar && "pb-6")}>
      <div className="flex items-start justify-between gap-3">
        <div className="min-w-0 flex-1 space-y-2">
          <TourProgressText />
          <TourTitle />
        </div>
        <TourCloseTrigger asChild>
          <Button
            aria-label="Close tour"
            size="icon-sm"
            type="button"
            variant="ghost"
          >
            <XIcon className="size-4" />
          </Button>
        </TourCloseTrigger>
      </div>
      <TourDescription />
      <TourControl>
        <TourActionButtons />
      </TourControl>
      {showProgressBar ? (
        <div className="absolute inset-x-0 bottom-0 h-1 overflow-hidden rounded-b-xl bg-muted">
          <div
            className="h-full bg-primary transition-[width] duration-200"
            style={{ width: `${tour.getProgressPercent()}%` }}
          />
        </div>
      ) : null}
    </TourPopup>
  </Tour>
);

export { useTour, waitForElement, waitForEvent };
