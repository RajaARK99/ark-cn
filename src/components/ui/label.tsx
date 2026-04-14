"use client";

import { ark } from "@ark-ui/react/factory";
import type { ComponentProps } from "react";
import { cn } from "@/lib/utils";

export const Label = ({
  className,
  ...props
}: ComponentProps<typeof ark.label>) => {
  return (
    <ark.label
      className={cn(
        "inline-flex items-center gap-2 font-medium text-base/4.5 text-foreground sm:text-sm/4",
        className,
      )}
      {...props}
    />
  );
};
