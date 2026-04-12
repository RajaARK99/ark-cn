"use client";

import {
  FieldsetContext,
  Fieldset as FieldsetPrimitive,
  FieldsetRootProvider,
  useFieldset,
  useFieldsetContext,
} from "@ark-ui/react/fieldset";
import { cn } from "@/lib/utils";

export const Fieldset = ({
  className,
  ...props
}: FieldsetPrimitive.RootProps) => (
  <FieldsetPrimitive.Root
    className={cn(
      "flex w-full min-w-0 flex-col gap-3 border-0 p-0 text-foreground",
      className,
    )}
    data-slot="fieldset"
    {...props}
  />
);

export const FieldsetLegend = (props: FieldsetPrimitive.LegendProps) => {
  const { className, ...rest } = props;
  return (
    <FieldsetPrimitive.Legend
      data-slot="fieldset-legend"
      className={cn(
        "mb-1 p-0 font-semibold text-base text-foreground leading-normal",
        "data-disabled:pointer-events-none data-disabled:opacity-50",
        className,
      )}
      {...rest}
    />
  );
};

export const FieldsetDescription = ({
  className,
  ...props
}: FieldsetPrimitive.HelperTextProps) => (
  <FieldsetPrimitive.HelperText
    data-slot="fieldset-description"
    className={cn(
      "text-muted-foreground text-xs",
      "data-disabled:pointer-events-none data-disabled:opacity-50",
      className,
    )}
    {...props}
  />
);

export const FieldsetError = ({
  className,
  ...props
}: FieldsetPrimitive.ErrorTextProps) => (
  <FieldsetPrimitive.ErrorText
    data-slot="fieldset-error"
    className={cn(
      "text-destructive text-xs",
      "data-disabled:pointer-events-none data-disabled:opacity-50",
      className,
    )}
    {...props}
  />
);

export type {
  FieldsetRootProviderProps,
  UseFieldsetProps,
  UseFieldsetReturn,
} from "@ark-ui/react/fieldset";
export {
  FieldsetContext,
  FieldsetRootProvider,
  useFieldset,
  useFieldsetContext,
};
