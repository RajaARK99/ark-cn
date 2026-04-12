"use client";

import {
  Progress as ProgressPrimitive,
  useProgress,
  useProgressContext,
} from "@ark-ui/react/progress";
import type { ReactNode } from "react";

import { cn } from "@/lib/utils";

export { useProgress, useProgressContext };

export type ProgressLinearRootProps = ProgressPrimitive.RootProps;

export const ProgressLinearRoot = ({
  className,
  ...props
}: ProgressLinearRootProps) => (
  <ProgressPrimitive.Root
    className={cn(
      "group/progress-linear flex w-full flex-col gap-2",
      className,
    )}
    data-slot="progress-linear"
    {...props}
  />
);

export type ProgressLinearRootProviderProps =
  ProgressPrimitive.RootProviderProps;

export const ProgressLinearRootProvider = ({
  className,
  ...props
}: ProgressLinearRootProviderProps) => (
  <ProgressPrimitive.RootProvider
    className={cn(
      "group/progress-linear flex w-full flex-col gap-2",
      className,
    )}
    data-slot="progress-linear-root-provider"
    {...props}
  />
);

export type ProgressLinearLabelProps = ProgressPrimitive.LabelProps;

export const ProgressLinearLabel = ({
  className,
  ...props
}: ProgressLinearLabelProps) => (
  <ProgressPrimitive.Label
    className={cn(
      "font-medium text-foreground text-sm leading-none",
      className,
    )}
    data-slot="progress-linear-label"
    {...props}
  />
);

export type ProgressLinearValueTextProps = ProgressPrimitive.ValueTextProps;

export const ProgressLinearValueText = ({
  className,
  ...props
}: ProgressLinearValueTextProps) => (
  <ProgressPrimitive.ValueText
    className={cn("tabular-nums text-foreground text-sm", className)}
    data-slot="progress-linear-value-text"
    {...props}
  />
);

export type ProgressLinearTrackProps = ProgressPrimitive.TrackProps;

export const ProgressLinearTrack = ({
  className,
  ...props
}: ProgressLinearTrackProps) => (
  <ProgressPrimitive.Track
    className={cn(
      "relative w-full overflow-hidden rounded-full bg-muted",
      "data-[orientation=vertical]:h-44 data-[orientation=vertical]:w-2.5 data-[orientation=vertical]:shrink-0",
      className,
    )}
    data-slot="progress-linear-track"
    {...props}
  />
);

export type ProgressLinearRangeProps = ProgressPrimitive.RangeProps;

export const ProgressLinearRange = ({
  className,
  ...props
}: ProgressLinearRangeProps) => (
  <ProgressPrimitive.Range
    className={cn(
      "rounded-full bg-primary transition-[width,height] duration-300 ease-out",
      "data-[orientation=horizontal]:h-full",
      "data-[orientation=vertical]:w-full",
      "data-[state=indeterminate]:min-h-[30%] data-[state=indeterminate]:min-w-[30%] data-[state=indeterminate]:motion-safe:animate-pulse",
      className,
    )}
    data-slot="progress-linear-range"
    {...props}
  />
);

export type ProgressLinearViewProps = ProgressPrimitive.ViewProps;

export const ProgressLinearView = ({
  className,
  ...props
}: ProgressLinearViewProps) => (
  <ProgressPrimitive.View
    className={cn(className)}
    data-slot="progress-linear-view"
    {...props}
  />
);

export type ProgressLinearContextProps = ProgressPrimitive.ContextProps;

export const ProgressLinearContext = ({
  children,
}: ProgressLinearContextProps) => (
  <ProgressPrimitive.Context>{children}</ProgressPrimitive.Context>
);

const trackSizeClass = {
  lg: "h-3",
  md: "h-2",
  sm: "h-1",
} as const;

export type ProgressLinearProps = Omit<
  ProgressLinearRootProps,
  "children" | "className"
> & {
  children?: ReactNode;
  className?: string;
  label?: ReactNode;
  rangeClassName?: string;
  showValueText?: boolean;
  size?: keyof typeof trackSizeClass;
  trackClassName?: string;
  valueTextClassName?: string;
};

export const ProgressLinear = ({
  children,
  className,
  label,
  rangeClassName,
  showValueText = false,
  size = "md",
  trackClassName,
  valueTextClassName,
  orientation,
  ...rootProps
}: ProgressLinearProps) => {
  const trackSize =
    orientation === "vertical" ? undefined : trackSizeClass[size];

  return (
    <ProgressLinearRoot
      className={className}
      orientation={orientation}
      {...rootProps}
    >
      {children ?? (
        <>
          {label != null || showValueText ? (
            <div className="flex items-center justify-between gap-2">
              {label != null ? (
                <ProgressLinearLabel className="truncate">
                  {label}
                </ProgressLinearLabel>
              ) : (
                <span aria-hidden className="min-w-0 shrink" />
              )}
              {showValueText ? (
                <ProgressLinearValueText
                  className={cn(
                    "shrink-0 text-muted-foreground text-xs",
                    valueTextClassName,
                  )}
                />
              ) : null}
            </div>
          ) : null}
          <ProgressLinearTrack className={cn(trackSize, trackClassName)}>
            <ProgressLinearRange className={rangeClassName} />
          </ProgressLinearTrack>
        </>
      )}
    </ProgressLinearRoot>
  );
};
