"use client";

import { Steps as StepsPrimitive, useSteps } from "@ark-ui/react/steps";
import type { ComponentProps } from "react";
import { cn } from "@/lib/utils";

export type StepsProps = StepsPrimitive.RootProps;

export const Steps = ({ className, ...props }: StepsProps) => (
  <StepsPrimitive.Root
    data-slot="steps"
    className={cn(
      "flex w-full",
      "data-[orientation=horizontal]:flex-col data-[orientation=horizontal]:gap-4",
      "data-[orientation=vertical]:flex-row data-[orientation=vertical]:gap-6",
      className,
    )}
    {...props}
  />
);

export const StepsList = ({
  className,
  ...props
}: StepsPrimitive.ListProps) => (
  <StepsPrimitive.List
    data-slot="steps-list"
    className={cn(
      "flex items-center gap-2",
      "data-[orientation=vertical]:flex-col data-[orientation=vertical]:items-start data-[orientation=vertical]:gap-0",
      className,
    )}
    {...props}
  />
);

export const StepsItem = ({
  className,
  ...props
}: StepsPrimitive.ItemProps) => (
  <StepsPrimitive.Item
    data-slot="steps-item"
    className={cn(
      "group relative flex flex-1 items-center gap-2",
      "last:flex-initial last:**:data-[part=separator]:hidden",
      "data-disabled:pointer-events-none data-disabled:opacity-50",
      "data-[orientation=vertical]:items-start data-[orientation=vertical]:pb-8 data-[orientation=vertical]:last:pb-0",
      className,
    )}
    {...props}
  />
);

export const StepsTrigger = ({
  className,
  ...props
}: StepsPrimitive.TriggerProps) => (
  <StepsPrimitive.Trigger
    data-slot="steps-trigger"
    className={cn(
      "inline-flex cursor-pointer items-center gap-3 rounded-md bg-transparent p-0 text-left outline-none transition-all",
      "focus-visible:ring-[3px] focus-visible:ring-ring/50",
      "disabled:pointer-events-none disabled:opacity-50",
      className,
    )}
    {...props}
  />
);

export const StepsIndicator = ({
  className,
  children,
  ...props
}: StepsPrimitive.IndicatorProps) => (
  <StepsPrimitive.Indicator
    data-slot="steps-indicator"
    className={cn(
      "inline-flex size-8 shrink-0 items-center justify-center rounded-full text-sm font-medium transition-colors",
      "data-incomplete:bg-muted data-incomplete:text-muted-foreground",
      "data-current:bg-primary data-current:text-primary-foreground",
      "data-complete:bg-accent data-complete:text-accent-foreground",
      "[&_svg]:size-4 [&_svg]:shrink-0",
      className,
    )}
    {...props}
  >
    {children}
  </StepsPrimitive.Indicator>
);

export const StepsSeparator = ({
  className,
  ...props
}: StepsPrimitive.SeparatorProps) => (
  <StepsPrimitive.Separator
    data-slot="steps-separator"
    className={cn(
      "shrink-0 rounded-full bg-muted transition-colors",
      "data-complete:bg-primary",
      "data-[orientation=horizontal]:mx-2 data-[orientation=horizontal]:h-0.5 data-[orientation=horizontal]:flex-1",
      "data-[orientation=vertical]:absolute data-[orientation=vertical]:left-3.75 data-[orientation=vertical]:top-10 data-[orientation=vertical]:bottom-2 data-[orientation=vertical]:w-0.5",
      className,
    )}
    {...props}
  />
);

export const StepsContent = ({
  className,
  ...props
}: StepsPrimitive.ContentProps) => (
  <StepsPrimitive.Content
    data-slot="steps-content"
    className={cn(
      "rounded-lg border border-border p-4 text-sm",
      "data-[orientation=vertical]:flex-1",
      className,
    )}
    {...props}
  />
);

export const StepsCompletedContent = ({
  className,
  ...props
}: StepsPrimitive.CompletedContentProps) => (
  <StepsPrimitive.CompletedContent
    data-slot="steps-completed-content"
    className={cn(
      "flex items-center justify-center rounded-lg border border-border p-6 text-center text-sm font-medium text-primary",
      "data-[orientation=vertical]:flex-1",
      className,
    )}
    {...props}
  />
);

export const StepsTitle = ({ className, ...props }: ComponentProps<"span">) => (
  <span
    data-slot="steps-title"
    className={cn("text-sm font-semibold whitespace-nowrap", className)}
    {...props}
  />
);

export const StepsDescription = ({
  className,
  ...props
}: ComponentProps<"span">) => (
  <span
    data-slot="steps-description"
    className={cn("text-xs text-muted-foreground", className)}
    {...props}
  />
);

export const StepsPrevTrigger = ({
  className,
  ...props
}: StepsPrimitive.PrevTriggerProps) => (
  <StepsPrimitive.PrevTrigger
    data-slot="steps-prev-trigger"
    className={className}
    {...props}
  />
);

export const StepsNextTrigger = ({
  className,
  ...props
}: StepsPrimitive.NextTriggerProps) => (
  <StepsPrimitive.NextTrigger
    data-slot="steps-next-trigger"
    className={className}
    {...props}
  />
);

export const StepsProgress = ({
  className,
  ...props
}: StepsPrimitive.ProgressProps) => (
  <StepsPrimitive.Progress
    data-slot="steps-progress"
    className={cn(
      "h-1 w-full overflow-hidden rounded-full bg-muted",
      className,
    )}
    {...props}
  />
);

export const StepsContext = StepsPrimitive.Context;

export const StepsRootProvider = (props: StepsPrimitive.RootProviderProps) => (
  <StepsPrimitive.RootProvider {...props} />
);

export type {
  UseStepsProps,
  UseStepsReturn,
} from "@ark-ui/react/steps";
export { useSteps };
