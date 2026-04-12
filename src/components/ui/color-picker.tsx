"use client";

import { ColorPicker as ColorPickerPrimitive } from "@ark-ui/react/color-picker";
import { Portal } from "@ark-ui/react/portal";
import { CheckIcon, PipetteIcon } from "lucide-react";
import type { ComponentProps, ReactNode } from "react";
import { cn } from "@/lib/utils";

export {
  parseColor,
  useColorPicker,
  useColorPickerContext,
} from "@ark-ui/react/color-picker";

/** Ring used on area thumb and channel slider thumbs */
const thumbRing =
  "shadow-[0_0_0_2px_white,0_0_0_3px_rgba(0,0,0,0.1),0_1px_3px_rgba(0,0,0,0.15)] outline-none -translate-x-1/2 -translate-y-1/2 focus-visible:shadow-[0_0_0_2px_white,0_0_0_4px_var(--color-ring),0_1px_3px_rgba(0,0,0,0.15)]";

const rootLayoutClass = "flex w-full max-w-64 flex-col gap-2";

export const ColorPicker = ({
  className,
  children,
  ...props
}: ColorPickerPrimitive.RootProps) => (
  <ColorPickerPrimitive.Root
    data-slot="color-picker"
    className={cn(rootLayoutClass, className)}
    {...props}
  >
    {children}
    <ColorPickerPrimitive.HiddenInput />
  </ColorPickerPrimitive.Root>
);

export const ColorPickerRootProvider = ({
  className,
  children,
  ...props
}: ColorPickerPrimitive.RootProviderProps) => (
  <ColorPickerPrimitive.RootProvider
    data-slot="color-picker"
    className={cn(rootLayoutClass, className)}
    {...props}
  >
    {children}
    <ColorPickerPrimitive.HiddenInput />
  </ColorPickerPrimitive.RootProvider>
);

export const ColorPickerLabel = ({
  className,
  ...props
}: ColorPickerPrimitive.LabelProps) => (
  <ColorPickerPrimitive.Label
    data-slot="color-picker-label"
    className={cn(
      "text-sm font-medium text-foreground select-none data-disabled:opacity-50",
      className,
    )}
    {...props}
  />
);

export const ColorPickerControl = ({
  className,
  ...props
}: ColorPickerPrimitive.ControlProps) => (
  <ColorPickerPrimitive.Control
    data-slot="color-picker-control"
    className={cn("flex items-center gap-2", className)}
    {...props}
  />
);

/** Stacked transparency grid + live color (default trigger face). */
export const ColorPickerTriggerSwatch = ({
  className,
  ...props
}: ComponentProps<"div">) => (
  <div
    data-slot="color-picker-trigger-swatch"
    className={cn("relative grid size-full place-items-center", className)}
    {...props}
  >
    <ColorPickerPrimitive.TransparencyGrid className="col-start-1 row-start-1 size-full rounded-[inherit]" />
    <ColorPickerPrimitive.ValueSwatch className="col-start-1 row-start-1 z-1 size-full rounded-[inherit]" />
  </div>
);

export const ColorPickerTrigger = ({
  className,
  children,
  ...props
}: ColorPickerPrimitive.TriggerProps) => (
  <ColorPickerPrimitive.Trigger
    data-slot="color-picker-trigger"
    className={cn(
      "grid size-9 shrink-0 cursor-pointer place-items-center overflow-hidden rounded-lg border border-input bg-popover p-0 outline-none shadow-xs/5 transition-colors focus-visible:ring-2 focus-visible:ring-ring data-disabled:cursor-not-allowed data-disabled:opacity-50 sm:size-8",
      className,
    )}
    {...props}
  >
    {children ?? <ColorPickerTriggerSwatch />}
  </ColorPickerPrimitive.Trigger>
);

export const ColorPickerPositioner = ({
  className,
  children,
  ...props
}: ColorPickerPrimitive.PositionerProps) => (
  <Portal>
    <ColorPickerPrimitive.Positioner
      data-slot="color-picker-positioner"
      className={cn(className)}
      {...props}
    >
      {children}
    </ColorPickerPrimitive.Positioner>
  </Portal>
);

export const ColorPickerContent = ({
  className,
  ...props
}: ColorPickerPrimitive.ContentProps) => (
  <ColorPickerPrimitive.Content
    data-slot="color-picker-content"
    className={cn(
      "flex z-50 w-64 flex-col gap-3 rounded-lg border border-border bg-popover p-4 shadow-md outline-none origin-(--transform-origin) data-[state=open]:animate-in data-[state=open]:fade-in data-[state=open]:zoom-in-95 data-[state=closed]:animate-out data-[state=closed]:fade-out data-[state=closed]:zoom-out-95",
      className,
    )}
    {...props}
  />
);

export const ColorPickerArea = ({
  className,
  ...props
}: ColorPickerPrimitive.AreaProps) => (
  <ColorPickerPrimitive.Area
    data-slot="color-picker-area"
    className={cn(
      "relative h-40 overflow-hidden rounded-md touch-none",
      className,
    )}
    {...props}
  >
    <ColorPickerPrimitive.AreaBackground className="size-full rounded-[inherit]" />
    <ColorPickerPrimitive.AreaThumb
      className={cn("size-3 rounded-full", thumbRing)}
    />
  </ColorPickerPrimitive.Area>
);

const channelSliderDefaultTrack = (channel: string) => (
  <>
    {channel === "alpha" && (
      <ColorPickerPrimitive.TransparencyGrid className="absolute inset-0 rounded-[inherit]" />
    )}
    <ColorPickerPrimitive.ChannelSliderTrack className="h-2.5 w-full rounded-[inherit]" />
    <ColorPickerPrimitive.ChannelSliderThumb
      className={cn("size-3 rounded-full", thumbRing)}
    />
  </>
);

/**
 * Channel slider root — provides context for `ChannelSliderLabel`, `ChannelSliderValueText`,
 * `ChannelSliderTrack`, and `ChannelSliderThumb`. Omit `children` for the default track + thumb.
 */
export const ColorPickerChannelSlider = ({
  className,
  channel,
  children,
  ...props
}: ColorPickerPrimitive.ChannelSliderProps) => {
  const customLayout = children != null;
  return (
    <ColorPickerPrimitive.ChannelSlider
      data-slot="color-picker-channel-slider"
      channel={channel}
      className={cn(
        !customLayout && "relative h-2.5 flex-1 rounded",
        className,
      )}
      {...props}
    >
      {customLayout ? children : channelSliderDefaultTrack(channel)}
    </ColorPickerPrimitive.ChannelSlider>
  );
};

export const ColorPickerChannelSliderLabel = ({
  className,
  ...props
}: ColorPickerPrimitive.ChannelSliderLabelProps) => (
  <ColorPickerPrimitive.ChannelSliderLabel
    data-slot="color-picker-channel-slider-label"
    className={cn("text-sm font-medium text-foreground", className)}
    {...props}
  />
);

export const ColorPickerChannelSliderValueText = ({
  className,
  ...props
}: ColorPickerPrimitive.ChannelSliderValueTextProps) => (
  <ColorPickerPrimitive.ChannelSliderValueText
    data-slot="color-picker-channel-slider-value-text"
    className={cn("text-sm text-muted-foreground tabular-nums", className)}
    {...props}
  />
);

export type ColorPickerChannelSliderRowProps = {
  channel: NonNullable<ColorPickerPrimitive.ChannelSliderProps["channel"]>;
  className?: string;
  labelClassName?: string;
  trackClassName?: string;
  valueTextClassName?: string;
  label?: ReactNode;
};

const isRgbChannel = (
  channel: ColorPickerChannelSliderRowProps["channel"],
): boolean => channel === "red" || channel === "green" || channel === "blue";

/**
 * Label + track + value text in one row. All channel parts are descendants of `ChannelSlider`
 * so Ark's channel context is valid (required for Label / ValueText).
 *
 * Red / green / blue sliders are wrapped in `View format="rgba"` so Zag evaluates channels on an
 * RGB color. Otherwise the slider uses `areaValue` (HSBA), which does not define RGB channels and
 * throws `Unknown color channel: red`.
 */
export const ColorPickerChannelSliderRow = ({
  channel,
  className,
  labelClassName,
  trackClassName,
  valueTextClassName,
  label,
}: ColorPickerChannelSliderRowProps) => {
  const row = (
    <ColorPickerPrimitive.ChannelSlider
      channel={channel}
      data-slot="color-picker-channel-slider"
      className={cn("flex w-full min-w-0 items-center gap-2", className)}
    >
      <ColorPickerChannelSliderLabel
        className={cn("w-8 shrink-0", labelClassName)}
      >
        {label ?? String(channel).slice(0, 1).toUpperCase()}
      </ColorPickerChannelSliderLabel>
      <div
        className={cn("relative h-2.5 min-w-0 flex-1 rounded", trackClassName)}
      >
        {channel === "alpha" && (
          <ColorPickerPrimitive.TransparencyGrid className="absolute inset-0 rounded-[inherit]" />
        )}
        <ColorPickerPrimitive.ChannelSliderTrack className="h-2.5 w-full rounded-[inherit]" />
        <ColorPickerPrimitive.ChannelSliderThumb
          className={cn("size-3 rounded-full", thumbRing)}
        />
      </div>
      <ColorPickerChannelSliderValueText
        className={cn(
          "w-10 shrink-0 text-end tabular-nums",
          valueTextClassName,
        )}
      />
    </ColorPickerPrimitive.ChannelSlider>
  );

  if (!isRgbChannel(channel)) {
    return row;
  }

  return (
    <ColorPickerPrimitive.View className="contents" format="rgba">
      {row}
    </ColorPickerPrimitive.View>
  );
};

export const ColorPickerChannelInput = ({
  className,
  channel,
  ...props
}: ColorPickerPrimitive.ChannelInputProps) => (
  <ColorPickerPrimitive.ChannelInput
    data-slot="color-picker-channel-input"
    channel={channel}
    className={cn(
      "h-9 min-w-0 flex-1 rounded-lg border border-input bg-transparent px-2 text-center text-sm tabular-nums shadow-xs/5 outline-none transition-colors [appearance:textfield] placeholder:text-muted-foreground focus-visible:border-ring focus-visible:ring-[3px] focus-visible:ring-ring/20 data-disabled:cursor-not-allowed data-disabled:opacity-50 sm:h-8 sm:text-xs [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none",
      channel === "alpha" && "w-16 min-w-[unset]",
      className,
    )}
    {...props}
  />
);

export const ColorPickerEyeDropperTrigger = ({
  className,
  children,
  ...props
}: ColorPickerPrimitive.EyeDropperTriggerProps) => (
  <ColorPickerPrimitive.EyeDropperTrigger
    data-slot="color-picker-eye-dropper-trigger"
    className={cn(
      "inline-flex size-10 shrink-0 cursor-pointer items-center justify-center rounded-lg border border-input bg-transparent text-foreground outline-none transition-colors hover:bg-accent/50 focus-visible:ring-2 focus-visible:ring-ring data-disabled:cursor-not-allowed data-disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
      className,
    )}
    {...props}
  >
    {children ?? <PipetteIcon />}
  </ColorPickerPrimitive.EyeDropperTrigger>
);

/** Eye dropper + hue + alpha sliders (common popover / inline row). */
export type ColorPickerHueAlphaSlidersProps = {
  className?: string;
  eyeDropperProps?: ComponentProps<typeof ColorPickerEyeDropperTrigger>;
  slidersClassName?: string;
};

export const ColorPickerHueAlphaSliders = ({
  className,
  eyeDropperProps,
  slidersClassName,
}: ColorPickerHueAlphaSlidersProps) => (
  <div className={cn("flex items-center gap-3", className)}>
    <ColorPickerEyeDropperTrigger {...eyeDropperProps} />
    <div className={cn("flex flex-1 flex-col gap-2.5", slidersClassName)}>
      <ColorPickerChannelSlider channel="hue" />
      <ColorPickerChannelSlider channel="alpha" />
    </div>
  </div>
);

export const ColorPickerSwatchGroup = ({
  className,
  ...props
}: ComponentProps<typeof ColorPickerPrimitive.SwatchGroup>) => (
  <ColorPickerPrimitive.SwatchGroup
    data-slot="color-picker-swatch-group"
    className={cn("flex flex-wrap gap-2", className)}
    {...props}
  />
);

export const ColorPickerSwatchTrigger = ({
  className,
  children,
  ...props
}: ComponentProps<typeof ColorPickerPrimitive.SwatchTrigger>) => (
  <ColorPickerPrimitive.SwatchTrigger
    data-slot="color-picker-swatch-trigger"
    className={cn(
      "cursor-pointer rounded border-none bg-transparent p-0 outline-none transition-transform focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background",
      className,
    )}
    {...props}
  >
    {children}
  </ColorPickerPrimitive.SwatchTrigger>
);

export const ColorPickerSwatch = ({
  className,
  children,
  ...props
}: ColorPickerPrimitive.SwatchProps) => (
  <ColorPickerPrimitive.Swatch
    data-slot="color-picker-swatch"
    className={cn(
      "relative grid size-8 shrink-0 place-items-center overflow-hidden rounded shadow-[0_0_0_1px_var(--color-border)]",
      className,
    )}
    {...props}
  >
    {children}
  </ColorPickerPrimitive.Swatch>
);

export const ColorPickerSwatchIndicator = ({
  className,
  children,
  ...props
}: ColorPickerPrimitive.SwatchIndicatorProps) => (
  <ColorPickerPrimitive.SwatchIndicator
    data-slot="color-picker-swatch-indicator"
    className={cn(
      "absolute inset-0 flex items-center justify-center text-white drop-shadow-[0_1px_2px_rgba(0,0,0,0.5)] [&_svg]:size-4",
      className,
    )}
    {...props}
  >
    {children ?? <CheckIcon />}
  </ColorPickerPrimitive.SwatchIndicator>
);

export const ColorPickerValueSwatch = ({
  className,
  ...props
}: ColorPickerPrimitive.ValueSwatchProps) => (
  <ColorPickerPrimitive.ValueSwatch
    data-slot="color-picker-value-swatch"
    className={cn("size-full rounded-[inherit]", className)}
    {...props}
  />
);

export const ColorPickerValueText = ({
  className,
  ...props
}: ColorPickerPrimitive.ValueTextProps) => (
  <ColorPickerPrimitive.ValueText
    data-slot="color-picker-value-text"
    className={cn("text-sm font-medium text-foreground", className)}
    {...props}
  />
);

export const ColorPickerTransparencyGrid = ({
  className,
  ...props
}: ColorPickerPrimitive.TransparencyGridProps) => (
  <ColorPickerPrimitive.TransparencyGrid
    data-slot="color-picker-transparency-grid"
    className={cn("size-full rounded-[inherit]", className)}
    {...props}
  />
);

export const ColorPickerView = ({
  className,
  ...props
}: ColorPickerPrimitive.ViewProps) => (
  <ColorPickerPrimitive.View
    data-slot="color-picker-view"
    className={cn("flex flex-col gap-2 [[hidden]]:hidden", className)}
    {...props}
  />
);

export const ColorPickerFormatTrigger = ({
  className,
  ...props
}: ColorPickerPrimitive.FormatTriggerProps) => (
  <ColorPickerPrimitive.FormatTrigger
    data-slot="color-picker-format-trigger"
    className={cn(
      "inline-flex h-8 cursor-pointer items-center justify-center gap-2 rounded-lg border border-input bg-transparent px-3 text-sm font-medium text-foreground outline-none transition-colors hover:bg-accent/50 focus-visible:ring-2 focus-visible:ring-ring",
      className,
    )}
    {...props}
  />
);

export const ColorPickerFormatSelect = ({
  className,
  ...props
}: ColorPickerPrimitive.FormatSelectProps) => (
  <ColorPickerPrimitive.FormatSelect
    data-slot="color-picker-format-select"
    className={cn(
      "h-8 cursor-pointer rounded-lg border border-input bg-transparent px-2 text-sm text-foreground outline-none transition-colors focus:border-ring focus:ring-2 focus:ring-ring/20",
      className,
    )}
    {...props}
  />
);

export type ColorPickerPresetSwatchesProps = {
  colors: readonly string[];
  className?: string;
  renderSwatch?: (color: string) => ReactNode;
};

/** Maps preset strings to swatch triggers with optional custom inner content. */
export const ColorPickerPresetSwatches = ({
  colors,
  className,
  renderSwatch,
}: ColorPickerPresetSwatchesProps) => (
  <ColorPickerSwatchGroup className={className}>
    {colors.map((color) => (
      <ColorPickerSwatchTrigger key={color} value={color}>
        {renderSwatch ? (
          renderSwatch(color)
        ) : (
          <ColorPickerSwatch value={color}>
            <ColorPickerSwatchIndicator />
          </ColorPickerSwatch>
        )}
      </ColorPickerSwatchTrigger>
    ))}
  </ColorPickerSwatchGroup>
);
