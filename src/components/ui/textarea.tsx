"use client";

import { ark } from "@ark-ui/react/factory";
import type { ComponentProps } from "react";
import { cn } from "@/lib/utils";

export type TextareaProps = ComponentProps<"textarea"> &
  ComponentProps<typeof ark.textarea> & {
    size?: "sm" | "default" | "lg" | number;
    unstyled?: boolean;
  };

export const Textarea = ({
  className,
  size = "default",
  unstyled = false,
  ...props
}: TextareaProps) => {
  return (
    <span
      className={
        cn(
          !unstyled &&
            "relative inline-flex w-full rounded-lg border border-input bg-background not-dark:bg-clip-padding text-base text-foreground shadow-xs/5 ring-ring/24 transition-shadow before:pointer-events-none before:absolute before:inset-0 before:rounded-[calc(var(--radius-lg)-1px)] has-focus-visible:has-data-invalid:border-destructive/64 has-focus-visible:has-data-invalid:ring-destructive/16 has-data-invalid:border-destructive/36 has-focus-visible:border-ring has-disabled:opacity-64 has-[:disabled,:focus-visible,[data-invalid]]:shadow-none has-focus-visible:ring-[3px] not-has-disabled:has-not-focus-visible:not-has-data-invalid:before:shadow-[0_1px_--theme(--color-black/4%)] sm:text-sm dark:bg-input/32 dark:has-data-invalid:ring-destructive/24 dark:not-has-disabled:has-not-focus-visible:not-has-data-invalid:before:shadow-[0_-1px_--theme(--color-white/6%)]",
          className,
        ) || undefined
      }
      data-size={size}
      data-slot="textarea-control"
    >
      <ark.textarea
        className={cn(
          "field-sizing-content min-h-17.5 w-full rounded-[inherit] px-[calc(--spacing(3)-1px)] py-[calc(--spacing(1.5)-1px)] outline-none max-sm:min-h-20.5",
          size === "sm" &&
            "min-h-16.5 px-[calc(--spacing(2.5)-1px)] py-[calc(--spacing(1)-1px)] max-sm:min-h-19.5",
          size === "lg" &&
            "min-h-18.5 py-[calc(--spacing(2)-1px)] max-sm:min-h-21.5",
        )}
        data-slot="textarea"
        {...props}
      />
    </span>
  );
};
