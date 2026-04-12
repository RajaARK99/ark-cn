"use client";

import {
  Progress as ProgressPrimitive,
  useProgress,
  useProgressContext,
} from "@ark-ui/react/progress";
import { cva, type VariantProps } from "class-variance-authority";
import type { CSSProperties, ReactNode } from "react";

import { cn } from "@/lib/utils";

export { useProgress, useProgressContext };

export type ProgressCircularRootProps = ProgressPrimitive.RootProps;

export const ProgressCircularRoot = ({
  className,
  ...props
}: ProgressCircularRootProps) => (
  <ProgressPrimitive.Root
    className={cn(
      "group/progress-circular flex flex-col items-center gap-2",
      className,
    )}
    data-slot="progress-circular"
    {...props}
  />
);

export type ProgressCircularLabelProps = ProgressPrimitive.LabelProps;

export const ProgressCircularLabel = ({
  className,
  ...props
}: ProgressCircularLabelProps) => (
  <ProgressPrimitive.Label
    className={cn(
      "w-full text-start font-medium text-foreground text-sm leading-none",
      className,
    )}
    data-slot="progress-circular-label"
    {...props}
  />
);

export type ProgressCircularValueTextProps = ProgressPrimitive.ValueTextProps;

export const ProgressCircularValueText = ({
  className,
  ...props
}: ProgressCircularValueTextProps) => (
  <ProgressPrimitive.ValueText
    className={cn("tabular-nums text-foreground text-sm", className)}
    data-slot="progress-circular-value-text"
    {...props}
  />
);

export type ProgressCircularCircleProps = ProgressPrimitive.CircleProps;

export const ProgressCircularCircle = ({
  className,
  style,
  ...props
}: ProgressCircularCircleProps) => (
  <ProgressPrimitive.Circle
    className={cn(
      "text-primary",
      "group-data-[state=indeterminate]/progress-circular:animate-spin",
      className,
    )}
    data-slot="progress-circular-circle"
    style={style}
    {...props}
  />
);

export type ProgressCircularTrackProps = ProgressPrimitive.CircleTrackProps;

export const ProgressCircularTrack = ({
  className,
  ...props
}: ProgressCircularTrackProps) => (
  <ProgressPrimitive.CircleTrack
    className={cn("stroke-current text-muted", className)}
    data-slot="progress-circular-track"
    {...props}
  />
);

export type ProgressCircularRangeProps = ProgressPrimitive.CircleRangeProps;

export const ProgressCircularRange = ({
  className,
  ...props
}: ProgressCircularRangeProps) => (
  <ProgressPrimitive.CircleRange
    className={cn(
      "stroke-current text-primary [stroke-linecap:round]",
      "transition-[stroke-dashoffset] duration-300 ease-out",
      className,
    )}
    data-slot="progress-circular-range"
    {...props}
  />
);

export type ProgressCircularRootProviderProps =
  ProgressPrimitive.RootProviderProps;

export const ProgressCircularRootProvider = ({
  className,
  ...props
}: ProgressCircularRootProviderProps) => (
  <ProgressPrimitive.RootProvider
    className={cn(
      "group/progress-circular flex flex-col items-center gap-2",
      className,
    )}
    data-slot="progress-circular-root-provider"
    {...props}
  />
);

const progressCircularVariants = cva("flex items-center gap-2", {
  defaultVariants: {
    variant: "ring",
  },
  variants: {
    variant: {
      labeled: "flex-col",
      ring: "flex-col",
      row: "flex-row",
    },
  },
});

export type ProgressCircularProps = Omit<
  ProgressCircularRootProps,
  "children" | "className" | "style"
> &
  VariantProps<typeof progressCircularVariants> & {
    children?: ReactNode;
    className?: string;
    footer?: ReactNode;
    label?: ReactNode;
    showCenterValue?: boolean;
    showThumb?: boolean;
    size?: number;
    style?: ProgressCircularRootProps["style"];
    thickness?: number;
  };

export const ProgressCircularThumb = ({
  className,
}: {
  className?: string;
}) => {
  const api = useProgressContext();
  if (api.indeterminate) {
    return null;
  }
  const deg = api.percent * 3.6;
  return (
    <div aria-hidden className="pointer-events-none absolute inset-0">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
        <div
          className="origin-center"
          style={{ transform: `rotate(${deg}deg)` }}
        >
          <div
            className={cn(
              "absolute left-1/2 size-4 -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary shadow-sm ring-2 ring-primary/35",
              className,
            )}
            style={{
              top: "calc(var(--thickness) / 2 - var(--size) / 2)",
            }}
          />
        </div>
      </div>
    </div>
  );
};

export const ProgressCircular = ({
  children,
  className,
  footer,
  label,
  showCenterValue = false,
  showThumb = false,
  size = 120,
  style,
  thickness = 8,
  variant = "ring",
  ...rootProps
}: ProgressCircularProps) => {
  const v = variant ?? "ring";
  const cssVars = {
    "--size": `${size}px`,
    "--thickness": `${thickness}px`,
  } as CSSProperties;

  return (
    <ProgressCircularRoot
      className={cn(progressCircularVariants({ variant: v }), className)}
      style={{ ...cssVars, ...style }}
      {...rootProps}
    >
      {label != null ? (
        <ProgressCircularLabel className={cn(v === "row" && "w-auto shrink-0")}>
          {label}
        </ProgressCircularLabel>
      ) : null}

      <div className="relative inline-flex shrink-0" style={{ ...cssVars }}>
        <ProgressCircularCircle>
          <ProgressCircularTrack />
          <ProgressCircularRange />
        </ProgressCircularCircle>
        {showCenterValue ? (
          <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
            <ProgressCircularValueText className="font-semibold text-[0.95rem]" />
          </div>
        ) : null}
        {showThumb ? <ProgressCircularThumb /> : null}
      </div>

      {footer}
      {children}
    </ProgressCircularRoot>
  );
};

export { progressCircularVariants };
