"use client";

import { Swap as SwapPrimitive } from "@ark-ui/react/swap";

import { cn } from "@/lib/utils";

export type SwapProps = SwapPrimitive.RootProps;

export const Swap = ({ className, ...props }: SwapProps) => (
  <SwapPrimitive.Root data-slot="swap" className={cn(className)} {...props} />
);

export type SwapIndicatorProps = SwapPrimitive.IndicatorProps;

export const SwapIndicator = ({ className, ...props }: SwapIndicatorProps) => (
  <SwapPrimitive.Indicator
    data-slot="swap-indicator"
    className={cn(className)}
    {...props}
  />
);

export type SwapRootProviderProps = SwapPrimitive.RootProviderProps;

export const SwapRootProvider = ({
  className,
  ...props
}: SwapRootProviderProps) => (
  <SwapPrimitive.RootProvider
    data-slot="swap-root-provider"
    className={cn(className)}
    {...props}
  />
);

export type { UseSwapProps, UseSwapReturn } from "@ark-ui/react/swap";
export { useSwap, useSwapContext } from "@ark-ui/react/swap";
