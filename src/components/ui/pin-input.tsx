"use client";

import { ark } from "@ark-ui/react/factory";
import {
  PinInput as PinInputPrimitive,
  usePinInput,
  usePinInputContext,
} from "@ark-ui/react/pin-input";
import { type ComponentProps, Fragment } from "react";
import {
  ButtonGroup,
  ButtonGroupSeparator,
} from "@/components/ui/button-group";
import { cn } from "@/lib/utils";

export { usePinInput, usePinInputContext };

export const PinInputRoot = ({
  className,
  count = 6,
  children,
  ...props
}: PinInputPrimitive.RootProps) => (
  <PinInputPrimitive.Root
    className={cn("group/pin-input flex w-full flex-col gap-1.5", className)}
    count={count}
    data-slot="pin-input"
    {...props}
  >
    {children}
    <PinInputPrimitive.HiddenInput />
  </PinInputPrimitive.Root>
);

export type PinInputLabelComponentProps = PinInputPrimitive.LabelProps;

export const PinInputLabel = ({
  className,
  ...props
}: PinInputLabelComponentProps) => (
  <PinInputPrimitive.Label
    className={cn(
      "text-sm font-medium text-foreground leading-none select-none",
      "group-data-disabled/pin-input:pointer-events-none group-data-disabled/pin-input:opacity-64",
      "group-data-invalid/pin-input:text-destructive",
      "group-data-readonly/pin-input:text-muted-foreground",
      className,
    )}
    data-slot="pin-input-label"
    {...props}
  />
);

export const PinInputControl = ({
  ...props
}: PinInputPrimitive.ControlProps) => <PinInputPrimitive.Control {...props} />;

/** Shared focus / invalid / disabled / read-only (Ark sets data-* and aria-invalid on each cell). */
const pinInputStatesClassName = cn(
  "outline-none ring-ring/24 transition-[border-color,box-shadow,color,opacity]",
  "focus-visible:z-1 focus-visible:border-ring focus-visible:ring-3",
  "aria-invalid:border-destructive/36 aria-invalid:focus-visible:border-destructive aria-invalid:focus-visible:ring-3 aria-invalid:focus-visible:ring-destructive/20",
  "data-invalid:border-destructive/36 data-invalid:focus-visible:border-destructive data-invalid:focus-visible:ring-3 data-invalid:focus-visible:ring-destructive/20",
  "dark:aria-invalid:border-destructive/50 dark:aria-invalid:focus-visible:ring-destructive/40",
  "dark:data-invalid:border-destructive/50 dark:data-invalid:focus-visible:ring-destructive/40",
  "disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-64 disabled:focus-visible:ring-0 disabled:focus-visible:ring-offset-0",
  "data-disabled:pointer-events-none data-disabled:cursor-not-allowed data-disabled:opacity-64 data-disabled:focus-visible:ring-0 data-disabled:focus-visible:ring-offset-0",
  "read-only:cursor-default read-only:bg-muted/40 read-only:text-muted-foreground dark:read-only:bg-muted/25",
);

export const PinInput = ({
  className,
  ...props
}: PinInputPrimitive.InputProps) => (
  <PinInputPrimitive.Input
    className={cn(pinInputStatesClassName, className)}
    data-slot="pin-slot"
    {...props}
  />
);

export type PinInputRootProviderComponentProps =
  PinInputPrimitive.RootProviderProps;

export const PinInputRootProvider = (
  props: PinInputRootProviderComponentProps,
) => (
  <PinInputPrimitive.RootProvider
    data-slot="pin-input-root-provider"
    {...props}
  >
    {props.children}
    <PinInputPrimitive.HiddenInput />
  </PinInputPrimitive.RootProvider>
);

export type PinInputContextComponentProps = PinInputPrimitive.ContextProps;

export const PinInputContext = (props: PinInputContextComponentProps) => (
  <PinInputPrimitive.Context {...props} />
);

export type PinInputSeparatorProps = ComponentProps<typeof ark.span>;

export const PinInputSeparator = ({
  className,
  children,
  ...props
}: PinInputSeparatorProps) => (
  <ark.span
    aria-hidden
    className={cn(
      "select-none px-0.5 text-center font-medium text-muted-foreground text-sm",
      className,
    )}
    data-slot="pin-input-separator"
    {...props}
  >
    {children ?? "-"}
  </ark.span>
);

/**
 * Pin cells on the native input (not `Input` + asChild): `Input`’s wrapper is
 * `inline-flex w-full`, which inside `ButtonGroup` (`w-fit`) collapses intrinsic width.
 */
const pinCellClass = (variant: "grouped" | "separated") =>
  cn(
    "box-border h-8 w-8 min-h-8 min-w-8 max-h-8 max-w-8 shrink-0 grow-0 basis-8 px-0 text-center tabular-nums text-sm font-medium leading-8 text-foreground",
    "placeholder:text-muted-foreground/72",
    variant === "separated" &&
      "rounded-lg border border-input bg-background shadow-xs/5 not-dark:bg-clip-padding dark:bg-input/32",
    variant === "grouped" &&
      "rounded-lg border border-input bg-background not-dark:bg-clip-padding dark:bg-input/32",
  );

export const PinInputSlots = ({
  variant = "separated",
  separatorBetweenCount,
}: {
  variant: "grouped" | "separated";
  separatorBetweenCount?: number;
}) => {
  const { count } = usePinInputContext();

  const separatorCount = separatorBetweenCount
    ? Math.floor(count / separatorBetweenCount)
    : count;

  const cell = (index: number) => (
    <PinInput className={pinCellClass(variant)} index={index} key={index} />
  );

  if (variant === "grouped") {
    if (separatorBetweenCount && separatorBetweenCount > 0) {
      return (
        <PinInputControl className="flex w-max max-w-full flex-wrap items-center gap-2">
          {Array.from({ length: separatorCount }, (_, i) => (
            <Fragment key={`g-${i}`}>
              {i > 0 ? <PinInputSeparator /> : null}
              <ButtonGroup>
                {Array.from({ length: separatorBetweenCount }, (_, j) => {
                  const idx = j + i * separatorBetweenCount;
                  return (
                    <Fragment key={idx}>
                      {j > 0 ? <ButtonGroupSeparator /> : null}
                      {cell(idx)}
                    </Fragment>
                  );
                })}
              </ButtonGroup>
            </Fragment>
          ))}
        </PinInputControl>
      );
    }

    return (
      <PinInputControl asChild>
        <ButtonGroup>
          {Array.from({ length: count }, (_, i) => (
            <Fragment key={i}>
              {i > 0 ? <ButtonGroupSeparator /> : null}
              {cell(i)}
            </Fragment>
          ))}
        </ButtonGroup>
      </PinInputControl>
    );
  }

  return (
    <PinInputControl className="flex w-max max-w-full flex-wrap items-center gap-2">
      {separatorBetweenCount && separatorBetweenCount > 0
        ? Array.from({ length: separatorCount }, (_, i) => (
            <Fragment key={`s-${i}`}>
              {i > 0 ? <PinInputSeparator /> : null}
              {Array.from({ length: separatorBetweenCount }, (_, j) =>
                cell(j + i * separatorBetweenCount),
              )}
            </Fragment>
          ))
        : Array.from({ length: separatorCount }, (_, i) => cell(i))}
    </PinInputControl>
  );
};
