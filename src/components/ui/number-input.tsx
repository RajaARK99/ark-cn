"use client";

import { NumberInput as NumberInputPrimitive } from "@ark-ui/react/number-input";

import { cn } from "@/lib/utils";

export type NumberInputRootProps = NumberInputPrimitive.RootProps;

export const NumberInputRoot = ({ ...props }: NumberInputRootProps) => (
  <NumberInputPrimitive.Root data-slot="number-input" {...props} />
);

export type NumberInputLabelProps = NumberInputPrimitive.LabelProps;

export const NumberInputLabel = ({
  className,
  ...props
}: NumberInputLabelProps) => (
  <NumberInputPrimitive.Label
    className={cn(
      "text-sm font-medium text-foreground leading-none select-none",
      className,
    )}
    data-slot="number-input-label"
    {...props}
  />
);

export type NumberInputControlProps = NumberInputPrimitive.ControlProps;

export const NumberInputControl = ({ ...props }: NumberInputControlProps) => (
  <NumberInputPrimitive.Control data-slot="number-input-control" {...props} />
);

export type NumberInputProps = NumberInputPrimitive.InputProps;

export const NumberInput = ({ ...props }: NumberInputProps) => {
  return (
    <NumberInputPrimitive.Input data-slot="number-input-input" {...props} />
  );
};

export type NumberInputIncrementTriggerProps =
  NumberInputPrimitive.IncrementTriggerProps;

export const NumberInputIncrementTrigger = ({
  ...props
}: NumberInputIncrementTriggerProps) => (
  <NumberInputPrimitive.IncrementTrigger
    data-slot="number-input-increment-trigger"
    {...props}
  />
);

export type NumberInputDecrementTriggerProps =
  NumberInputPrimitive.DecrementTriggerProps;

export const NumberInputDecrementTrigger = ({
  ...props
}: NumberInputDecrementTriggerProps) => (
  <NumberInputPrimitive.DecrementTrigger
    data-slot="number-input-decrement-trigger"
    {...props}
  />
);

export type NumberInputScrubberProps = NumberInputPrimitive.ScrubberProps;

export const NumberInputScrubber = ({ ...props }: NumberInputScrubberProps) => (
  <NumberInputPrimitive.Scrubber data-slot="number-input-scrubber" {...props} />
);

export type NumberInputValueTextProps = NumberInputPrimitive.ValueTextProps;

export const NumberInputValueText = ({
  className,
  ...props
}: NumberInputValueTextProps) => (
  <NumberInputPrimitive.ValueText
    className={cn(
      "font-variant-numeric text-foreground tabular-nums",
      className,
    )}
    data-slot="number-input-value-text"
    {...props}
  />
);

export type NumberInputContextProps = NumberInputPrimitive.ContextProps;

export const NumberInputContext = (props: NumberInputContextProps) => (
  <NumberInputPrimitive.Context {...props} />
);

export type NumberInputRootProviderProps =
  NumberInputPrimitive.RootProviderProps;

export const NumberInputRootProvider = (
  props: NumberInputRootProviderProps,
) => (
  <NumberInputPrimitive.RootProvider
    data-slot="number-input-root-provider"
    {...props}
  />
);

export {
  type NumberInputFocusChangeDetails,
  type NumberInputValueChangeDetails,
  type NumberInputValueInvalidDetails,
  type UseNumberInputProps,
  type UseNumberInputReturn,
  useNumberInput,
  useNumberInputContext,
} from "@ark-ui/react/number-input";
