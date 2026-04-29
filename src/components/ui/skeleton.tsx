"use client";

import { ark } from "@ark-ui/react/factory";
import type { ComponentProps } from "react";
import { cn } from "@/lib/utils";

export const Skeleton = ({
  className,
  ...props
}: ComponentProps<typeof ark.div>) => {
  return (
    <ark.div
      data-slot="skeleton"
      className={cn("animate-pulse rounded-md bg-muted", className)}
      {...props}
    />
  );
};
