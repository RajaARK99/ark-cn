"use client";

import {
  RadioGroupContext,
  RadioGroup as RadioGroupPrimitive,
  useRadioGroup,
  useRadioGroupContext,
} from "@ark-ui/react/radio-group";
import { cn } from "@/lib/utils";

export type RadioGroupProps = RadioGroupPrimitive.RootProps;

export const RadioGroup = ({ className, ...props }: RadioGroupProps) => (
  <RadioGroupPrimitive.Root
    className={cn(
      "flex flex-col gap-2 text-foreground",
      "data-[orientation=horizontal]:flex-row data-[orientation=horizontal]:flex-wrap data-[orientation=horizontal]:gap-4",
      className,
    )}
    data-slot="radio-group"
    {...props}
  />
);

export type RadioGroupLabelProps = RadioGroupPrimitive.LabelProps;

export const RadioGroupLabel = ({
  className,
  ...props
}: RadioGroupLabelProps) => (
  <RadioGroupPrimitive.Label
    className={cn(
      "text-sm font-medium text-foreground leading-none select-none",
      "data-disabled:pointer-events-none data-disabled:opacity-50",
      className,
    )}
    data-slot="radio-group-label"
    {...props}
  />
);

export type RadioProps = RadioGroupPrimitive.ItemProps;

export const Radio = ({ className, children, ...props }: RadioProps) => (
  <RadioGroupPrimitive.Item
    className={cn(
      "flex cursor-pointer items-center gap-2 rounded-md outline-none",
      "data-disabled:cursor-not-allowed data-disabled:opacity-50",
      className,
    )}
    data-slot="radio-group-item"
    {...props}
  >
    <RadioGroupPrimitive.ItemHiddenInput />
    <RadioGroupPrimitive.ItemText
      className={cn(
        "inline-flex items-center gap-2 text-foreground text-sm",
        "data-disabled:opacity-50",
      )}
      data-slot="radio-group-item-text"
    >
      <RadioGroupPrimitive.ItemControl
        className={cn(
          "group/radio-control relative flex size-4 shrink-0 items-center justify-center rounded-full border border-input bg-background shadow-xs/5 outline-none transition-[color,box-shadow]",
          "focus-visible:border-ring focus-visible:ring-[3px] focus-visible:ring-ring/50",
          "data-focus-visible:border-ring data-focus-visible:ring-[3px] data-focus-visible:ring-ring/50",
          "data-disabled:cursor-not-allowed data-disabled:opacity-50",
          "data-invalid:border-destructive data-invalid:ring-destructive/20 dark:bg-input/30",
          "data-[state=checked]:border-primary",
        )}
        data-slot="radio-group-item-control"
      >
        <span
          aria-hidden
          className="size-2 scale-0 rounded-full bg-primary opacity-0 transition-all group-data-[state=checked]/radio-control:scale-100 group-data-[state=checked]/radio-control:opacity-100"
        />
      </RadioGroupPrimitive.ItemControl>
      {children}
    </RadioGroupPrimitive.ItemText>
  </RadioGroupPrimitive.Item>
);

export const RadioGroupItem = Radio;

export type RadioGroupRootProviderProps = RadioGroupPrimitive.RootProviderProps;

export const RadioGroupRootProvider = ({
  className,
  ...props
}: RadioGroupRootProviderProps) => (
  <RadioGroupPrimitive.RootProvider
    className={cn(
      "flex flex-col gap-2 text-foreground",
      "data-[orientation=horizontal]:flex-row data-[orientation=horizontal]:flex-wrap data-[orientation=horizontal]:gap-4",
      className,
    )}
    data-slot="radio-group"
    {...props}
  />
);

export type RadioGroupItemControlProps = RadioGroupPrimitive.ItemControlProps;

export const RadioGroupItemControl = ({
  className,
  ...props
}: RadioGroupItemControlProps) => (
  <RadioGroupPrimitive.ItemControl
    className={cn(className)}
    data-slot="radio-group-item-control-raw"
    {...props}
  />
);

export type RadioGroupItemTextProps = RadioGroupPrimitive.ItemTextProps;

export const RadioGroupItemText = ({
  className,
  ...props
}: RadioGroupItemTextProps) => (
  <RadioGroupPrimitive.ItemText
    className={cn(className)}
    data-slot="radio-group-item-text-raw"
    {...props}
  />
);

export type RadioGroupItemHiddenInputProps =
  RadioGroupPrimitive.ItemHiddenInputProps;

export const RadioGroupItemHiddenInput = (
  props: RadioGroupItemHiddenInputProps,
) => <RadioGroupPrimitive.ItemHiddenInput {...props} />;

export type RadioGroupItemPrimitiveProps = RadioGroupPrimitive.ItemProps;

export const RadioGroupItemPrimitive = ({
  className,
  ...props
}: RadioGroupItemPrimitiveProps) => (
  <RadioGroupPrimitive.Item
    className={cn(className)}
    data-slot="radio-group-item-raw"
    {...props}
  />
);

export type RadioGroupIndicatorProps = RadioGroupPrimitive.IndicatorProps;

export const RadioGroupIndicator = ({
  className,
  ...props
}: RadioGroupIndicatorProps) => (
  <RadioGroupPrimitive.Indicator
    className={cn(className)}
    data-slot="radio-group-indicator"
    {...props}
  />
);

export type {
  RadioGroupValueChangeDetails,
  UseRadioGroupProps,
  UseRadioGroupReturn,
} from "@ark-ui/react/radio-group";
export { RadioGroupContext, useRadioGroup, useRadioGroupContext };
