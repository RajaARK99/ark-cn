"use client";

import { ark } from "@ark-ui/react/factory";
import { cva, type VariantProps } from "class-variance-authority";
import type { ComponentProps } from "react";
import { Separator } from "@/components/ui/separator";
import { cn } from "@/lib/utils";

export const groupVariants = cva(
  "flex w-fit *:focus-visible:z-1 has-[>[data-slot=group]]:gap-2 *:has-focus-visible:z-1 in-data-invalid:*:data-slot:not-data-[slot=separator]:border-destructive/36 in-data-invalid:*:data-slot:not-data-[slot=separator]:focus-visible:ring-[3px] in-data-invalid:*:data-slot:not-data-[slot=separator]:focus-visible:ring-destructive/20 dark:in-data-invalid:*:data-slot:not-data-[slot=separator]:border-destructive/50 dark:in-data-invalid:*:data-slot:not-data-[slot=separator]:focus-visible:ring-destructive/40 data-invalid:*:data-slot:not-data-[slot=separator]:border-destructive/36 data-invalid:*:data-slot:not-data-[slot=separator]:focus-visible:ring-[3px] data-invalid:*:data-slot:not-data-[slot=separator]:focus-visible:ring-destructive/20 dark:data-invalid:*:data-slot:not-data-[slot=separator]:border-destructive/50 dark:data-invalid:*:data-slot:not-data-[slot=separator]:focus-visible:ring-destructive/40 in-data-invalid:*:data-[slot=separator]:bg-destructive/30 in-data-invalid:*:data-[slot=separator]:before:bg-destructive/25 dark:in-data-invalid:*:data-[slot=separator]:bg-destructive/40 dark:in-data-invalid:*:data-[slot=separator]:before:bg-destructive/35 data-invalid:*:data-[slot=separator]:bg-destructive/30 data-invalid:*:data-[slot=separator]:before:bg-destructive/25 dark:data-invalid:*:data-[slot=separator]:bg-destructive/40 dark:data-invalid:*:data-[slot=separator]:before:bg-destructive/35 dark:*:[[data-slot=separator]:has(~button:hover):not(:has(~[data-slot=separator]~[data-slot]:hover)),[data-slot=separator]:has(~[data-slot][data-pressed]):not(:has(~[data-slot=separator]~[data-slot][data-pressed]))]:before:bg-input/64 dark:in-data-invalid:*:[[data-slot=separator]:has(~button:hover):not(:has(~[data-slot=separator]~[data-slot]:hover)),[data-slot=separator]:has(~[data-slot][data-pressed]):not(:has(~[data-slot=separator]~[data-slot][data-pressed]))]:before:bg-destructive/45 dark:data-invalid:*:[[data-slot=separator]:has(~button:hover):not(:has(~[data-slot=separator]~[data-slot]:hover)),[data-slot=separator]:has(~[data-slot][data-pressed]):not(:has(~[data-slot=separator]~[data-slot][data-pressed]))]:before:bg-destructive/45 dark:*:[button:hover~[data-slot=separator]:not([data-slot]:hover~[data-slot=separator]~[data-slot=separator]),[data-slot][data-pressed]~[data-slot=separator]:not([data-slot][data-pressed]~[data-slot=separator]~[data-slot=separator])]:before:bg-input/64 dark:in-data-invalid:*:[button:hover~[data-slot=separator]:not([data-slot]:hover~[data-slot=separator]~[data-slot=separator]),[data-slot][data-pressed]~[data-slot=separator]:not([data-slot][data-pressed]~[data-slot=separator]~[data-slot=separator])]:before:bg-destructive/45 dark:data-invalid:*:[button:hover~[data-slot=separator]:not([data-slot]:hover~[data-slot=separator]~[data-slot=separator]),[data-slot][data-pressed]~[data-slot=separator]:not([data-slot][data-pressed]~[data-slot=separator]~[data-slot=separator])]:before:bg-destructive/45",
  {
    defaultVariants: {
      orientation: "horizontal",
    },
    variants: {
      orientation: {
        horizontal:
          "*:pointer-coarse:after:min-w-auto *:data-slot:has-[~[data-slot]]:rounded-e-none *:data-slot:has-[~[data-slot]]:border-e-0 *:data-slot:not-data-[slot=separator]:has-[~[data-slot]]:before:-inset-e-[0.5px] *:data-slot:has-[~[data-slot]]:before:rounded-e-none *:[[data-slot]~[data-slot]:not([data-slot=separator])]:before:-inset-s-[0.5px] *:[[data-slot]~[data-slot]]:rounded-s-none *:[[data-slot]~[data-slot]]:border-s-0 *:[[data-slot]~[data-slot]]:before:rounded-s-none",
        vertical:
          "flex-col *:pointer-coarse:after:min-h-auto *:data-slot:has-[~[data-slot]]:rounded-b-none *:data-slot:has-[~[data-slot]]:border-b-0 *:data-slot:not-data-[slot=separator]:has-[~[data-slot]]:before:-bottom-[0.5px] *:data-slot:not-data-[slot=separator]:has-[~[data-slot]]:before:hidden *:data-slot:has-[~[data-slot]]:before:rounded-b-none dark:*:last:before:hidden dark:*:first:before:block *:[[data-slot]~[data-slot]:not([data-slot=separator])]:before:-top-[0.5px] *:[[data-slot]~[data-slot]]:rounded-t-none *:[[data-slot]~[data-slot]]:border-t-0 *:[[data-slot]~[data-slot]]:before:rounded-t-none",
      },
    },
  },
);

export const ButtonGroup = ({
  className,
  orientation,
  children,
  invalid,
  ...props
}: {
  className?: string;
  orientation?: VariantProps<typeof groupVariants>["orientation"];
  children: React.ReactNode;
  invalid?: boolean;
} & ComponentProps<typeof ark.div>) => {
  return (
    <ark.div
      className={cn(groupVariants({ orientation }), className)}
      data-orientation={orientation}
      data-slot="group"
      role="group"
      data-invalid={invalid ? "" : undefined}
      {...props}
    >
      {children}
    </ark.div>
  );
};

export const ButtonGroupText = ({
  className,
  ...props
}: ComponentProps<typeof ark.div>) => {
  return (
    <ark.div
      className={cn(
        "relative inline-flex items-center gap-2 whitespace-nowrap rounded-lg border border-input bg-muted not-dark:bg-clip-padding px-[calc(--spacing(3)-1px)] text-base text-muted-foreground shadow-xs/5 outline-none transition-shadow before:pointer-events-none before:absolute before:inset-0 before:rounded-[calc(var(--radius-lg)-1px)] before:shadow-[0_1px_--theme(--color-black/6%)] sm:text-sm dark:bg-input/64 dark:before:shadow-[0_-1px_--theme(--color-white/6%)] [&_svg:not([class*='size-'])]:size-4.5 sm:[&_svg:not([class*='size-'])]:size-4 [&_svg]:-mx-0.5 [&_svg]:shrink-0",
        className,
      )}
      data-slot="group-text"
      {...props}
    />
  );
};

export const ButtonGroupSeparator = ({
  className,
  orientation = "vertical",
  ...props
}: {
  className?: string;
} & ComponentProps<typeof Separator>) => {
  return (
    <Separator
      className={cn(
        "pointer-events-none relative z-2 self-stretch bg-input before:absolute before:inset-0 has-[+[data-slot=input-control]:focus-within,+[data-slot=input-group]:focus-within,+[data-slot=select-trigger]:focus-visible+*,+[data-slot=number-field]:focus-within]:translate-x-px has-[+[data-slot=input-control]:focus-within,+[data-slot=input-group]:focus-within,+[data-slot=select-trigger]:focus-visible+*,+[data-slot=number-field]:focus-within]:bg-ring dark:before:bg-input/32 [[data-slot=input-control]:focus-within+&,[data-slot=input-group]:focus-within+&,[data-slot=select-trigger]:focus-visible+*+&,[data-slot=number-field]:focus-within+&,[data-slot=number-field]:focus-within+input+&]:bg-ring [[data-slot=input-control]:focus-within+&,[data-slot=input-group]:focus-within+&,[data-slot=select-trigger]:focus-visible+*+&,[data-slot=number-field]:focus-within+input+&]:-translate-x-px",
        className,
      )}
      orientation={orientation}
      {...props}
    />
  );
};
