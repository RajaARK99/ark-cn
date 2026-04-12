"use client";

import { Collapsible as CollapsiblePrimitive } from "@ark-ui/react/collapsible";

import { cn } from "@/lib/utils";

export const Collapsible = ({
  className,
  ...props
}: CollapsiblePrimitive.RootProps) => {
  return (
    <CollapsiblePrimitive.Root
      data-slot="collapsible"
      className={cn("flex w-full flex-col gap-2", className)}
      {...props}
    />
  );
};

export const CollapsibleTrigger = CollapsiblePrimitive.Trigger;

export const CollapsibleContent = ({
  className,
  children,
  ...props
}: CollapsiblePrimitive.ContentProps) => {
  return (
    <CollapsiblePrimitive.Content
      data-slot="collapsible-content"
      className={cn(
        "overflow-hidden text-sm [--radix-collapsible-content-height:var(--height)] data-[state=open]:animate-collapsible-down data-[state=closed]:animate-collapsible-up",
        className,
      )}
      {...props}
    >
      {children}
    </CollapsiblePrimitive.Content>
  );
};

export const CollapsibleIndicator = CollapsiblePrimitive.Indicator;

export const CollapsibleContext = CollapsiblePrimitive.Context;
