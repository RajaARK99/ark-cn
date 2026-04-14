"use client";

import {
  Timer as TimerPrimitive,
  useTimer,
  useTimerContext,
} from "@ark-ui/react/timer";
import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

export type TimerProps = TimerPrimitive.RootProps;

export const Timer = ({ className, ...props }: TimerProps) => (
  <TimerPrimitive.Root
    className={cn("flex flex-col gap-4", className)}
    data-slot="timer"
    {...props}
  />
);

export type TimerAreaProps = TimerPrimitive.AreaProps;

export const TimerArea = ({ className, ...props }: TimerAreaProps) => (
  <TimerPrimitive.Area
    className={cn("flex items-center gap-2", className)}
    data-slot="timer-area"
    {...props}
  />
);

export type TimerItemProps = TimerPrimitive.ItemProps;

export const TimerItem = ({ className, ...props }: TimerItemProps) => (
  <TimerPrimitive.Item
    className={cn(
      "min-w-[2ch] text-center font-mono text-2xl font-semibold",
      className,
    )}
    data-slot="timer-item"
    {...props}
  />
);

export type TimerSeparatorProps = TimerPrimitive.SeparatorProps;

export const TimerSeparator = ({
  className,
  ...props
}: TimerSeparatorProps) => (
  <TimerPrimitive.Separator
    className={cn("text-xl text-muted-foreground", className)}
    data-slot="timer-separator"
    {...props}
  />
);

export type TimerControlProps = TimerPrimitive.ControlProps;

export const TimerControl = ({ className, ...props }: TimerControlProps) => (
  <TimerPrimitive.Control
    className={cn("flex flex-wrap items-center gap-2", className)}
    data-slot="timer-control"
    {...props}
  />
);

export type TimerActionTriggerProps = TimerPrimitive.ActionTriggerProps;

export const TimerActionTrigger = ({
  className,
  ...props
}: TimerActionTriggerProps) => (
  <TimerPrimitive.ActionTrigger
    className={cn(className)}
    data-slot="timer-action-trigger"
    {...props}
  />
);

export type TimerDigitsPart = {
  type: NonNullable<TimerPrimitive.ItemProps["type"]>;
  label: string;
};

export type TimerDigitsProps = {
  parts: TimerDigitsPart[];
  separator?: ReactNode;
};

export const TimerDigits = ({ parts, separator = ":" }: TimerDigitsProps) => (
  <TimerArea>
    {parts.map((part, index) => (
      <div className="flex items-center gap-2" key={`${part.type}-${index}`}>
        <div className="flex flex-col items-center">
          <TimerItem type={part.type} />
          <span className="text-[11px] uppercase tracking-wider text-muted-foreground">
            {part.label}
          </span>
        </div>
        {index < parts.length - 1 ? (
          <TimerSeparator>{separator}</TimerSeparator>
        ) : null}
      </div>
    ))}
  </TimerArea>
);

export const TimerContext = TimerPrimitive.Context;

export const TimerRootProvider = (props: TimerPrimitive.RootProviderProps) => (
  <TimerPrimitive.RootProvider data-slot="timer-root-provider" {...props} />
);

export { useTimer, useTimerContext };
