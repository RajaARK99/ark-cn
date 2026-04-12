"use client";

import {
  Tabs as TabsPrimitive,
  useTabs,
  useTabsContext,
} from "@ark-ui/react/tabs";
import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

export { useTabs, useTabsContext };

export type TabsVariant = "default" | "underline";

export type TabsProps = TabsPrimitive.RootProps & { variant?: TabsVariant };

export const Tabs = ({
  orientation = "horizontal",
  variant = "default",
  className,
  ...props
}: TabsProps) => (
  <TabsPrimitive.Root
    data-slot="tabs"
    data-variant={variant}
    orientation={orientation}
    className={cn(
      "group flex w-full data-[orientation=horizontal]:flex-col data-[orientation=vertical]:flex-row",
      className,
    )}
    {...props}
  />
);

export type TabsRootProviderProps = TabsPrimitive.RootProviderProps & {
  variant?: TabsVariant;
  orientation?: TabsPrimitive.RootProps["orientation"];
};

export const TabsRootProvider = ({
  variant = "default",
  orientation = "horizontal",
  className,
  ...props
}: TabsRootProviderProps) => (
  <TabsPrimitive.RootProvider
    data-slot="tabs-root-provider"
    data-variant={variant}
    data-orientation={orientation}
    className={cn(
      "group flex w-full data-[orientation=horizontal]:flex-col data-[orientation=vertical]:flex-row",
      className,
    )}
    {...props}
  />
);

export type TabsListProps = TabsPrimitive.ListProps & {
  withIndicator?: boolean;
  indicatorClassName?: string;
};

export const TabsList = ({
  className,
  withIndicator = true,
  indicatorClassName,
  children,
  ...props
}: TabsListProps) => (
  <TabsPrimitive.List
    data-slot="tabs-list"
    className={cn(
      "relative isolate inline-flex w-fit items-center gap-1 text-muted-foreground",
      "data-[orientation=vertical]:flex-col data-[orientation=vertical]:items-stretch",
      "group-data-[variant=default]:rounded-lg group-data-[variant=default]:bg-muted group-data-[variant=default]:p-1",
      "group-data-[variant=underline]:rounded-none group-data-[variant=underline]:bg-transparent group-data-[variant=underline]:p-0 group-data-[variant=underline]:group-data-[orientation=horizontal]:border-b group-data-[variant=underline]:group-data-[orientation=vertical]:border-s group-data-[variant=underline]:border-border",
      className,
    )}
    {...props}
  >
    {children}
    {withIndicator ? (
      <TabsPrimitive.Indicator
        data-slot="tabs-indicator"
        className={cn(
          "absolute z-0",
          "left-(--left) top-(--top) h-(--height) w-(--width)",
          "transition-[width,height,left,top] duration-200 ease-in-out motion-reduce:transition-none",
          "group-data-[variant=default]:rounded-md group-data-[variant=default]:bg-background group-data-[variant=default]:shadow-sm/5 group-data-[variant=default]:dark:bg-input",
          "group-data-[variant=underline]:rounded-full group-data-[variant=underline]:bg-primary",
          "group-data-[variant=underline]:data-[orientation=horizontal]:top-auto group-data-[variant=underline]:data-[orientation=horizontal]:bottom-0 group-data-[variant=underline]:data-[orientation=horizontal]:h-0.5 group-data-[variant=underline]:data-[orientation=horizontal]:translate-y-px",
          "group-data-[variant=underline]:data-[orientation=vertical]:left-0 group-data-[variant=underline]:data-[orientation=vertical]:w-0.5 group-data-[variant=underline]:data-[orientation=vertical]:-translate-x-px",
          indicatorClassName,
        )}
      />
    ) : null}
  </TabsPrimitive.List>
);

export const TabsTrigger = ({
  className,
  ...props
}: TabsPrimitive.TriggerProps) => (
  <TabsPrimitive.Trigger
    data-slot="tabs-trigger"
    className={cn(
      "cursor-pointer disabled:cursor-default data-disabled:cursor-default relative z-10 inline-flex min-h-8 items-center justify-center whitespace-nowrap rounded-md px-3 font-medium text-sm outline-none transition-[color,background-color,box-shadow] select-none",
      "data-[orientation=vertical]:w-full data-[orientation=vertical]:justify-start data-[orientation=vertical]:px-3 data-[orientation=vertical]:py-2",
      "focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-1 focus-visible:ring-offset-background",
      "data-disabled:pointer-events-none data-disabled:opacity-64",
      "group-data-[variant=default]:text-muted-foreground data-selected:group-data-[variant=default]:text-foreground",
      "group-data-[variant=underline]:rounded-none group-data-[variant=underline]:text-muted-foreground data-selected:group-data-[variant=underline]:text-foreground",
      className,
    )}
    {...props}
  />
);

export const TabsContent = ({
  className,
  ...props
}: TabsPrimitive.ContentProps) => (
  <TabsPrimitive.Content
    data-slot="tabs-content"
    className={cn(
      "mt-3 w-full rounded-lg text-sm outline-none",
      "data-[orientation=vertical]:mt-0 data-[orientation=vertical]:ms-4",
      "focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-1 focus-visible:ring-offset-background",
      className,
    )}
    {...props}
  />
);

export const TabsIndicator = ({
  className,
  ...props
}: TabsPrimitive.IndicatorProps) => (
  <TabsPrimitive.Indicator
    data-slot="tabs-indicator-raw"
    className={cn(className)}
    {...props}
  />
);

export const TabsContext = (props: TabsPrimitive.ContextProps) => (
  <TabsPrimitive.Context {...props} />
);

export const TabsRoot = ({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) => (
  <div className={cn("flex w-full flex-col gap-3", className)}>{children}</div>
);
