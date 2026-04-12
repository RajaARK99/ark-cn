"use client";

import { Toggle as TogglePrimitive } from "@ark-ui/react/toggle";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const toggleVariants = cva(
  "inline-flex shrink-0 cursor-pointer items-center justify-center gap-2 whitespace-nowrap rounded-lg border font-medium text-sm outline-none transition-colors disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
  {
    defaultVariants: {
      size: "default",
      variant: "default",
    },
    variants: {
      size: {
        default: "h-9 px-3 sm:h-8",
        lg: "h-10 px-3.5 sm:h-9",
        sm: "h-8 px-2.5 sm:h-7",
      },
      variant: {
        default:
          "border-transparent bg-transparent text-foreground hover:bg-accent data-[state=on]:bg-primary/12 data-[state=on]:text-primary",
        outline:
          "border-input bg-popover text-foreground shadow-xs/5 hover:bg-accent/50 data-[state=on]:border-primary/30 data-[state=on]:bg-primary/12 data-[state=on]:text-primary",
      },
    },
  },
);

export type ToggleProps = TogglePrimitive.RootProps &
  VariantProps<typeof toggleVariants>;

export const Toggle = ({ className, size, variant, ...props }: ToggleProps) => (
  <TogglePrimitive.Root
    data-slot="toggle"
    className={cn(toggleVariants({ className, size, variant }))}
    {...props}
  />
);

export type ToggleIndicatorProps = TogglePrimitive.IndicatorProps;

export const ToggleIndicator = ({
  className,
  ...props
}: ToggleIndicatorProps) => (
  <TogglePrimitive.Indicator
    data-slot="toggle-indicator"
    className={cn("inline-flex items-center justify-center", className)}
    {...props}
  />
);

export const ToggleContext = TogglePrimitive.Context;

export type { UseToggleProps, UseToggleReturn } from "@ark-ui/react/toggle";
export { useToggle, useToggleContext } from "@ark-ui/react/toggle";
