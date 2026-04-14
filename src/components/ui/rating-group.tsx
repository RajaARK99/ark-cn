"use client";

import {
  RatingGroup as RatingGroupPrimitive,
  useRatingGroup,
  useRatingGroupContext,
} from "@ark-ui/react/rating-group";
import { StarIcon } from "lucide-react";
import { type ComponentProps, type CSSProperties, type ReactNode } from "react";
import { cn } from "@/lib/utils";

export { useRatingGroup, useRatingGroupContext };

export type RatingGroupProps = ComponentProps<typeof RatingGroupPrimitive.Root>;

export const RatingGroup = ({
  className,
  children,
  ...props
}: RatingGroupProps) => (
  <RatingGroupPrimitive.Root
    className={cn(
      "group/rating-group flex flex-col gap-1.5 text-foreground",
      "data-readonly:pointer-events-none",
      className,
    )}
    data-slot="rating-group"
    {...props}
  >
    {children}
    <RatingGroupPrimitive.HiddenInput />
  </RatingGroupPrimitive.Root>
);

export type RatingGroupLabelProps = ComponentProps<
  typeof RatingGroupPrimitive.Label
>;

export const RatingGroupLabel = ({
  className,
  ...props
}: RatingGroupLabelProps) => (
  <RatingGroupPrimitive.Label
    className={cn(
      "text-sm font-medium text-foreground leading-none select-none",
      "data-disabled:pointer-events-none data-disabled:opacity-50",
      className,
    )}
    data-slot="rating-group-label"
    {...props}
  />
);

export type RatingGroupControlProps = ComponentProps<
  typeof RatingGroupPrimitive.Control
>;

export const RatingGroupControl = ({
  className,
  ...props
}: RatingGroupControlProps) => (
  <RatingGroupPrimitive.Control
    className={cn("inline-flex items-center gap-0.5", className)}
    data-slot="rating-group-control"
    {...props}
  />
);

export type RatingGroupItemProps = ComponentProps<
  typeof RatingGroupPrimitive.Item
>;

export const RatingGroupItem = ({
  className,
  ...props
}: RatingGroupItemProps) => (
  <RatingGroupPrimitive.Item
    className={cn(
      "inline-flex cursor-pointer items-center justify-center rounded-sm outline-none",
      "focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background",
      "data-disabled:pointer-events-none data-disabled:cursor-not-allowed data-disabled:opacity-50",
      className,
    )}
    data-slot="rating-group-item"
    {...props}
  />
);

export type RatingGroupItemContextProps = ComponentProps<
  typeof RatingGroupPrimitive.ItemContext
>;

export const RatingGroupItemContext = (props: RatingGroupItemContextProps) => (
  <RatingGroupPrimitive.ItemContext {...props} />
);

export type RatingGroupContextProps = ComponentProps<
  typeof RatingGroupPrimitive.Context
>;

export const RatingGroupContext = (props: RatingGroupContextProps) => (
  <RatingGroupPrimitive.Context {...props} />
);

export type RatingGroupRootProviderProps = ComponentProps<
  typeof RatingGroupPrimitive.RootProvider
>;

export const RatingGroupRootProvider = ({
  className,
  children,
  ...props
}: RatingGroupRootProviderProps) => (
  <RatingGroupPrimitive.RootProvider
    className={cn(
      "group/rating-group flex flex-col gap-1.5 text-foreground",
      "data-readonly:pointer-events-none",
      className,
    )}
    data-slot="rating-group-root-provider"
    {...props}
  >
    {children}
    <RatingGroupPrimitive.HiddenInput />
  </RatingGroupPrimitive.RootProvider>
);

/** Layout + colors only; fg fill clip is `style.clipPath` (Tailwind rule order is unreliable for this cascade). */
export const ratingGroupStarIndicatorClassName = cn(
  "relative inline-flex size-5 shrink-0",
  "[&_svg]:pointer-events-none [&_svg]:absolute [&_svg]:inset-0 [&_svg]:size-full",
  "**:data-bg:text-muted-foreground",
  "**:data-fg:text-chart-1",
);

/** Same result as Ark `.ItemIndicator` clip rules, without relying on stylesheet order. */
const ratingStarForegroundClipPath = (
  highlighted: boolean,
  half: boolean,
): NonNullable<CSSProperties["clipPath"]> =>
  !highlighted
    ? "inset(0 100% 0 0)"
    : half
      ? "inset(0 50% 0 0)"
      : "inset(0 0 0 0)";

const RatingStarIndicator = ({
  half,
  highlighted,
}: {
  half?: boolean;
  highlighted?: boolean;
}) => {
  const hi = Boolean(highlighted);
  const h = Boolean(half);
  return (
    <span className={ratingGroupStarIndicatorClassName}>
      <StarIcon aria-hidden data-bg="" />
      <StarIcon
        aria-hidden
        data-fg=""
        fill="currentColor"
        style={{ clipPath: ratingStarForegroundClipPath(hi, h) }}
      />
    </span>
  );
};

export const RatingStars = ({
  withHalf = false,
  children,
}: {
  withHalf?: boolean;
  children?: (item: number, half: boolean, highlighted: boolean) => ReactNode;
}) => (
  <RatingGroupControl>
    <RatingGroupContext>
      {({ items }) =>
        items.map((item) => (
          <RatingGroupItem index={item} key={item}>
            <RatingGroupItemContext>
              {children
                ? ({ half, highlighted }) => children(item, half, highlighted)
                : withHalf
                  ? ({ half, highlighted }) => (
                      <RatingStarIndicator
                        half={half}
                        highlighted={highlighted}
                      />
                    )
                  : ({ highlighted }) => (
                      <RatingStarIndicator highlighted={highlighted} />
                    )}
            </RatingGroupItemContext>
          </RatingGroupItem>
        ))
      }
    </RatingGroupContext>
  </RatingGroupControl>
);
