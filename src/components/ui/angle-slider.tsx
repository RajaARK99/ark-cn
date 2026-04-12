"use client";

import {
  AngleSliderControl,
  AngleSliderHiddenInput,
  AngleSliderLabel,
  AngleSliderMarker,
  AngleSliderMarkerGroup,
  AngleSliderRoot,
  AngleSliderThumb,
  AngleSliderValueText,
  useAngleSliderContext,
} from "@ark-ui/react/angle-slider";
import { cva, type VariantProps } from "class-variance-authority";
import type { ComponentProps, CSSProperties, ReactNode } from "react";

import { cn } from "@/lib/utils";

const MARKERS_45 = [0, 45, 90, 135, 180, 225, 270, 315] as const;

/** Default outer diameter (`size` prop) in px. */
const ANGLE_SLIDER_DEFAULT_SIZE = 200;

/** Smallest allowed `size` in px. */
const ANGLE_SLIDER_MIN_SIZE = 100;

/**
 * ViewBox 200×200. Stroke 14. Centerline radius 93 → outer stroke at 100 (flush with edge).
 */
const RING_VIEWBOX = 200;
const RING_STROKE = 14;
const RING_TRACK_CENTERLINE_R = RING_VIEWBOX / 2 - RING_STROKE / 2;

/** Distance from center to widget circle edge / outer stroke (half of square control). */
const EDGE_R_FR = 0.5;

const angleSliderVariants = cva(
  "relative flex flex-col items-center gap-2 outline-none data-disabled:pointer-events-none data-disabled:opacity-50",
  {
    defaultVariants: {
      variant: "ring",
    },
    variants: {
      variant: {
        labeled: "",
        ring: "",
        rotation: "",
        split: "",
        ticks: "",
      },
    },
  },
);

const controlVariants = cva(
  "relative box-border size-(--control-size) shrink-0 touch-none select-none rounded-full bg-card ring-1 ring-border data-disabled:pointer-events-none",
  {
    defaultVariants: {
      variant: "ring",
    },
    variants: {
      variant: {
        labeled:
          "shadow-[inset_0_1px_0_color-mix(in_oklab,var(--foreground)_6%,transparent)]",
        ring: "",
        rotation:
          "bg-muted/40 shadow-[inset_0_2px_12px_color-mix(in_oklab,var(--background)_55%,transparent)]",
        split: "",
        ticks: "",
      },
    },
  },
);

export type AngleSliderProps = Omit<
  ComponentProps<typeof AngleSliderRoot>,
  "style"
> &
  VariantProps<typeof angleSliderVariants> & {
    footer?: ReactNode;
    /** Outer width/height in px. Default {@link ANGLE_SLIDER_DEFAULT_SIZE}. Clamped to at least {@link ANGLE_SLIDER_MIN_SIZE}. */
    size?: number;
    style?: ComponentProps<typeof AngleSliderRoot>["style"];
  };

const knobOffsetStyle = (thumbHalf: string): CSSProperties => ({
  transform: `translate(-50%, calc(-50% - (var(--control-size) * ${EDGE_R_FR} - ${thumbHalf})))`,
});

const RingArc = () => {
  const { value } = useAngleSliderContext();
  const c = 2 * Math.PI * RING_TRACK_CENTERLINE_R;
  const offset = c * (1 - value / 360);
  const cx = RING_VIEWBOX / 2;
  return (
    <svg
      aria-hidden
      className="pointer-events-none absolute inset-0 size-full"
      viewBox={`0 0 ${RING_VIEWBOX} ${RING_VIEWBOX}`}
    >
      <circle
        className="text-muted"
        cx={cx}
        cy={cx}
        fill="none"
        r={RING_TRACK_CENTERLINE_R}
        stroke="currentColor"
        strokeWidth={RING_STROKE}
      />
      <circle
        className="text-primary"
        cx={cx}
        cy={cx}
        fill="none"
        opacity={0.92}
        r={RING_TRACK_CENTERLINE_R}
        stroke="currentColor"
        strokeDasharray={c}
        strokeDashoffset={offset}
        strokeLinecap="round"
        strokeWidth={RING_STROKE}
        style={{ transform: "rotate(-90deg)", transformOrigin: "50% 50%" }}
      />
    </svg>
  );
};

const RadialIndicatorLine = ({
  emphasis,
}: {
  emphasis: "primary" | "ring";
}) => (
  <div
    aria-hidden
    className={cn(
      "pointer-events-none absolute top-1/2 left-1/2 w-px origin-bottom -translate-x-1/2 -translate-y-full",
      emphasis === "primary" &&
        "bg-linear-to-t from-muted-foreground via-muted-foreground to-primary",
      emphasis === "ring" && "bg-linear-to-t from-ring/30 via-ring/80 to-ring",
    )}
    style={
      {
        height: `calc(var(--control-size) * ${EDGE_R_FR} - 0.125rem)`,
        rotate: "var(--angle)",
      } as CSSProperties
    }
  />
);

const DegreeLabels = () => (
  <div aria-hidden className="pointer-events-none absolute inset-0">
    {MARKERS_45.map((deg) => (
      <span
        className="absolute top-1/2 left-1/2 origin-center text-[0.65rem] font-medium text-foreground"
        key={deg}
        style={{
          transform: `rotate(${deg}deg) translateY(calc(var(--control-size) * -0.56)) rotate(${-deg}deg)`,
        }}
      >
        {deg}°
      </span>
    ))}
  </div>
);

const CenterDegreeReadout = ({
  valueClassName,
  labelClassName,
}: {
  labelClassName?: string;
  valueClassName?: string;
}) => {
  const { value } = useAngleSliderContext();
  return (
    <div className="pointer-events-none absolute inset-0 z-0 flex flex-col items-center justify-center gap-0.5">
      <span
        className={cn(
          "font-semibold text-[1.5rem] leading-none tabular-nums",
          valueClassName,
        )}
      >
        {value}°
      </span>
      <span
        className={cn("text-[0.7rem] text-muted-foreground", labelClassName)}
      >
        degrees
      </span>
    </div>
  );
};

const AngleSlider = ({
  className,
  variant = "ring",
  size = ANGLE_SLIDER_DEFAULT_SIZE,
  footer,
  style,
  ...props
}: AngleSliderProps) => {
  const v = variant ?? "ring";
  const outerPx = Math.max(ANGLE_SLIDER_MIN_SIZE, size);

  const cssVars = {
    "--control-size": `${outerPx}px`,
  } as CSSProperties;

  const thumbHalf = "0.375rem";

  return (
    <AngleSliderRoot
      className={cn(angleSliderVariants({ variant: v }), className)}
      style={{ ...cssVars, ...style }}
      {...props}
    >
      {v === "rotation" && (
        <AngleSliderLabel className="font-medium text-[0.65rem] text-muted-foreground tracking-[0.2em]">
          ROTATION
        </AngleSliderLabel>
      )}

      <AngleSliderControl className={controlVariants({ variant: v })}>
        {v === "ring" && <RingArc />}

        {v === "labeled" && <DegreeLabels />}

        {(v === "ticks" || v === "split" || v === "labeled") && (
          <AngleSliderMarkerGroup className="absolute inset-0 z-1">
            {MARKERS_45.map((m) => (
              <AngleSliderMarker
                className={cn(
                  "absolute inset-0 flex items-start justify-center pt-0 text-[length:0] before:block before:h-[calc(var(--control-size)*0.1)] before:w-px before:rounded-full before:bg-current",
                  "text-muted-foreground/40",
                  v !== "split" &&
                    "data-[state=at-value]:text-primary data-[state=at-value]:before:bg-primary data-[state=at-value]:before:shadow-[0_0_8px_color-mix(in_oklab,var(--primary)_45%,transparent)]",
                  v === "split" &&
                    "data-[state=at-value]:data-[value='0']:text-chart-1 data-[state=at-value]:data-[value='0']:before:bg-chart-1 data-[state=at-value]:not-data-[value='0']:text-primary data-[state=at-value]:not-data-[value='0']:before:bg-primary data-[state=at-value]:not-data-[value='0']:before:shadow-[0_0_8px_color-mix(in_oklab,var(--primary)_45%,transparent)] data-[value='0']:not-data-[state=at-value]:text-chart-1/80 data-[value='0']:not-data-[state=at-value]:before:bg-chart-1/80",
                )}
                key={m}
                value={m}
              />
            ))}
          </AngleSliderMarkerGroup>
        )}

        {v === "rotation" && (
          <>
            <AngleSliderMarkerGroup className="absolute inset-0 z-1 opacity-60">
              {MARKERS_45.map((m) => (
                <AngleSliderMarker
                  className="absolute inset-0 flex items-start justify-center pt-0 text-[length:0] before:block before:h-[calc(var(--control-size)*0.09)] before:w-px before:bg-muted-foreground/50"
                  key={m}
                  value={m}
                />
              ))}
            </AngleSliderMarkerGroup>
            <div
              aria-hidden
              className="pointer-events-none absolute top-1/2 left-1/2 z-1 size-1.5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-muted-foreground"
            />
            <RadialIndicatorLine emphasis="primary" />
          </>
        )}

        {(v === "labeled" || v === "ticks" || v === "split") && (
          <RadialIndicatorLine emphasis="ring" />
        )}

        {v === "ring" && (
          <CenterDegreeReadout valueClassName="text-[1.65rem] text-primary" />
        )}

        {(v === "ticks" || v === "split" || v === "labeled") && (
          <CenterDegreeReadout valueClassName="text-foreground" />
        )}

        <AngleSliderThumb
          className={cn(
            "absolute inset-0 z-10 outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background",
          )}
        >
          <span
            className={cn(
              "pointer-events-none absolute top-1/2 left-1/2 shrink-0 rounded-full shadow-sm ring-2 ring-ring/25",
              v === "ring" && "size-[1.05rem] bg-primary ring-primary/35",
              v === "rotation" && "size-3 bg-primary ring-primary/40",
              (v === "ticks" || v === "labeled" || v === "split") &&
                "size-3 bg-ring ring-ring/50",
            )}
            style={knobOffsetStyle(thumbHalf)}
          />
        </AngleSliderThumb>
      </AngleSliderControl>

      {v === "rotation" && (
        <AngleSliderValueText className="font-semibold text-foreground text-lg tabular-nums" />
      )}

      {footer}

      <AngleSliderHiddenInput />
    </AngleSliderRoot>
  );
};

export {
  ANGLE_SLIDER_DEFAULT_SIZE,
  ANGLE_SLIDER_MIN_SIZE,
  AngleSlider,
  AngleSliderControl,
  AngleSliderHiddenInput,
  AngleSliderLabel,
  AngleSliderMarker,
  AngleSliderMarkerGroup,
  AngleSliderRoot,
  AngleSliderThumb,
  AngleSliderValueText,
  angleSliderVariants,
  controlVariants,
  MARKERS_45,
  useAngleSliderContext,
};
