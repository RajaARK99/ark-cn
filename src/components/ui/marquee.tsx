"use client";

import {
  Marquee as MarqueePrimitive,
  useMarquee,
  useMarqueeContext,
} from "@ark-ui/react/marquee";
import type { ComponentProps } from "react";

import { cn } from "@/lib/utils";

export type MarqueeProps = ComponentProps<typeof MarqueePrimitive.Root>;
export type MarqueeViewportProps = ComponentProps<
  typeof MarqueePrimitive.Viewport
>;
export type MarqueeContentProps = ComponentProps<
  typeof MarqueePrimitive.Content
>;
export type MarqueeItemProps = ComponentProps<typeof MarqueePrimitive.Item>;
export type MarqueeEdgeProps = ComponentProps<typeof MarqueePrimitive.Edge>;
export type MarqueeRootProviderProps = ComponentProps<
  typeof MarqueePrimitive.RootProvider
>;

export const Marquee = ({ className, ...props }: MarqueeProps) => (
  <MarqueePrimitive.Root
    className={cn(
      "w-full max-w-full text-foreground",
      "data-[orientation=horizontal]:h-20 data-[orientation=vertical]:h-60",
      className,
    )}
    data-slot="marquee-root"
    {...props}
  />
);

export const MarqueeViewport = ({
  className,
  ...props
}: MarqueeViewportProps) => (
  <MarqueePrimitive.Viewport
    className={cn("h-full w-full", className)}
    data-slot="marquee-viewport"
    {...props}
  />
);

export const MarqueeContent = ({
  className,
  ...props
}: MarqueeContentProps) => (
  <MarqueePrimitive.Content
    className={cn(className)}
    data-slot="marquee-content"
    {...props}
  />
);

export const MarqueeItem = ({ className, ...props }: MarqueeItemProps) => (
  <MarqueePrimitive.Item
    className={cn(
      "flex shrink-0 items-center justify-center gap-3 whitespace-nowrap rounded-md border border-border px-6 py-4 text-sm select-none",
      className,
    )}
    data-slot="marquee-item"
    {...props}
  />
);

export const MarqueeEdge = ({ className, ...props }: MarqueeEdgeProps) => (
  <MarqueePrimitive.Edge
    className={cn("data-[orientation=horizontal]:w-[20%]", className)}
    data-slot="marquee-edge"
    {...props}
  />
);

export const MarqueeRootProvider = ({
  className,
  ...props
}: MarqueeRootProviderProps) => (
  <MarqueePrimitive.RootProvider
    className={cn(
      "w-full max-w-full text-foreground",
      "data-[orientation=horizontal]:h-20 data-[orientation=vertical]:h-60",
      className,
    )}
    data-slot="marquee-root"
    {...props}
  />
);

export const MarqueeContext = MarqueePrimitive.Context;

export type {
  MarqueePauseStatusDetails,
  MarqueeSide,
} from "@ark-ui/react/marquee";
export { useMarquee, useMarqueeContext };
