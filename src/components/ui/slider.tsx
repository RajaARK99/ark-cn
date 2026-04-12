"use client";

import {
  Slider as SliderPrimitive,
  useSlider,
  useSliderContext,
} from "@ark-ui/react/slider";
import type { ReactNode } from "react";

import { cn } from "@/lib/utils";

export type {
  SliderFocusChangeDetails,
  SliderValueChangeDetails,
} from "@ark-ui/react/slider";
export { useSlider, useSliderContext };

const normalizeValues = (
  v: number | number[] | undefined,
): number[] | undefined => {
  if (v === undefined) {
    return undefined;
  }
  return typeof v === "number" ? [v] : v;
};

export type SliderProps = Omit<
  SliderPrimitive.RootProps,
  "defaultValue" | "value"
> & {
  defaultValue?: number | number[];
  value?: number | number[];
};

export const Slider = ({
  className,
  defaultValue,
  value,
  ...props
}: SliderProps) => (
  <SliderPrimitive.Root
    className={cn(
      "group/slider flex w-full flex-col gap-2 text-foreground",
      "data-disabled:opacity-50",
      className,
    )}
    data-slot="slider"
    defaultValue={normalizeValues(defaultValue)}
    value={normalizeValues(value)}
    {...props}
  />
);

export type SliderRootProviderProps = SliderPrimitive.RootProviderProps;

export const SliderRootProvider = ({
  className,
  ...props
}: SliderRootProviderProps) => (
  <SliderPrimitive.RootProvider
    className={cn(
      "group/slider flex w-full flex-col gap-2 text-foreground",
      "data-disabled:opacity-50",
      className,
    )}
    data-slot="slider-root-provider"
    {...props}
  />
);

export type SliderLabelProps = SliderPrimitive.LabelProps;

export const SliderLabel = ({ className, ...props }: SliderLabelProps) => (
  <SliderPrimitive.Label
    className={cn(
      "font-medium text-foreground text-sm leading-none select-none",
      className,
    )}
    data-slot="slider-label"
    {...props}
  />
);

export type SliderValueTextProps = SliderPrimitive.ValueTextProps;

export const SliderValueText = ({
  className,
  ...props
}: SliderValueTextProps) => (
  <SliderPrimitive.ValueText
    className={cn(
      "font-variant-numeric text-foreground text-sm tabular-nums",
      className,
    )}
    data-slot="slider-value-text"
    {...props}
  />
);

export const SliderValue = SliderValueText;

export type SliderControlProps = SliderPrimitive.ControlProps;

export const SliderControl = ({ className, ...props }: SliderControlProps) => (
  <SliderPrimitive.Control
    className={cn(
      "relative flex w-full touch-none select-none items-center py-1.5",
      "data-[orientation=vertical]:h-44 data-[orientation=vertical]:w-auto data-[orientation=vertical]:flex-col data-[orientation=vertical]:py-0",
      className,
    )}
    data-slot="slider-control"
    {...props}
  />
);

export type SliderTrackProps = SliderPrimitive.TrackProps;

export const SliderTrack = ({ className, ...props }: SliderTrackProps) => (
  <SliderPrimitive.Track
    className={cn(
      "relative h-2 w-full grow overflow-hidden rounded-full bg-muted",
      "data-[orientation=vertical]:h-full data-[orientation=vertical]:w-2 data-[orientation=vertical]:shrink-0",
      className,
    )}
    data-slot="slider-track"
    {...props}
  />
);

export type SliderRangeProps = SliderPrimitive.RangeProps;

export const SliderRange = ({ className, ...props }: SliderRangeProps) => (
  <SliderPrimitive.Range
    className={cn(
      "absolute h-full rounded-full bg-primary",
      "data-[orientation=vertical]:w-full",
      className,
    )}
    data-slot="slider-range"
    {...props}
  />
);

export type SliderThumbProps = SliderPrimitive.ThumbProps;

export const SliderThumb = ({ className, ...props }: SliderThumbProps) => (
  <SliderPrimitive.Thumb
    className={cn(
      "relative block size-5 shrink-0 cursor-grab rounded-full border-2 border-primary bg-background shadow-sm outline-none",
      "focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background",
      "data-dragging:cursor-grabbing",
      "data-disabled:pointer-events-none data-disabled:opacity-50",
      className,
    )}
    data-slot="slider-thumb"
    {...props}
  />
);

export type SliderHiddenInputProps = SliderPrimitive.HiddenInputProps;

export const SliderHiddenInput = (props: SliderHiddenInputProps) => (
  <SliderPrimitive.HiddenInput data-slot="slider-hidden-input" {...props} />
);

export type SliderDraggingIndicatorProps =
  SliderPrimitive.DraggingIndicatorProps;

export const SliderDraggingIndicator = ({
  className,
  style,
  ...props
}: SliderDraggingIndicatorProps) => (
  <SliderPrimitive.DraggingIndicator
    className={cn(
      // Ark positions this element via `getDraggingIndicatorProps` (absolute + transform).
      // Only add visual styling + an extra offset via the `translate` property
      // (doesn't override `transform`).
      "pointer-events-none z-10 rounded-md bg-foreground px-2 py-1.5 font-medium text-background text-xs tabular-nums whitespace-nowrap shadow-sm",
      "data-[state=closed]:opacity-0",
      // Horizontal: above the thumb. Vertical: to the side of the thumb.
      "[translate:0_calc(-100%-8px)] data-[orientation=vertical]:[translate:calc(100%)_0]",
      className,
    )}
    data-slot="slider-dragging-indicator"
    style={style}
    {...props}
  />
);

export type SliderMarkerGroupProps = SliderPrimitive.MarkerGroupProps;

export const SliderMarkerGroup = ({
  className,
  ...props
}: SliderMarkerGroupProps) => (
  <SliderPrimitive.MarkerGroup
    className={cn(
      "mt-2 flex w-full justify-between px-0.5",
      "data-[orientation=vertical]:mt-0 data-[orientation=vertical]:h-full data-[orientation=vertical]:flex-col data-[orientation=vertical]:justify-between data-[orientation=vertical]:ps-3",
      className,
    )}
    data-slot="slider-marker-group"
    {...props}
  />
);

export type SliderMarkerProps = SliderPrimitive.MarkerProps;

export const SliderMarker = ({ className, ...props }: SliderMarkerProps) => (
  <SliderPrimitive.Marker
    className={cn(
      "relative text-center text-muted-foreground text-xs",
      "before:absolute before:-top-2.5 before:left-1/2 before:size-1 before:-translate-x-1/2 before:rounded-full before:bg-border",
      "data-[state=at-value]:before:bg-primary data-[state=under-value]:before:bg-primary",
      className,
    )}
    data-slot="slider-marker"
    {...props}
  />
);

export type SliderContextProps = SliderPrimitive.ContextProps;

export const SliderContext = (props: SliderContextProps) => (
  <SliderPrimitive.Context {...props} />
);

export type SliderFieldProps = Omit<SliderControlProps, "children"> & {
  trackProps?: SliderTrackProps;
  rangeProps?: SliderRangeProps;
  thumbsProps?: {
    children?: (index: number) => ReactNode;
  };
};

export const SliderField = ({
  className,
  trackProps,
  rangeProps,
  thumbsProps,
  ...controlProps
}: SliderFieldProps) => (
  <SliderControl className={className} {...controlProps}>
    <SliderTrack {...trackProps}>
      <SliderRange {...rangeProps} />
    </SliderTrack>
    <SliderThumbs>{thumbsProps?.children}</SliderThumbs>
  </SliderControl>
);

export const SliderThumbs = ({
  children,
}: {
  children?: (index: number) => ReactNode;
}) => (
  <SliderPrimitive.Context>
    {({ value }) =>
      value.map((_, index) => (
        <SliderThumb key={index} index={index}>
          {children?.(index)}
          <SliderHiddenInput />
        </SliderThumb>
      ))
    }
  </SliderPrimitive.Context>
);
