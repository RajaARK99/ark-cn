"use client";

import {
  ScrollArea as ScrollAreaPrimitive,
  useScrollArea,
  useScrollAreaContext,
} from "@ark-ui/react/scroll-area";
import {
  type ComponentProps,
  createContext,
  type ReactNode,
  useContext,
} from "react";
import { cn } from "@/lib/utils";

export { useScrollArea, useScrollAreaContext };

export type ScrollAreaScrollbarVisibility = "hover" | "always";

const ScrollAreaScrollbarVisibilityContext =
  createContext<ScrollAreaScrollbarVisibility>("hover");

const viewportClassName = cn(
  "z-0 col-start-1 row-start-1 box-border block size-full min-h-0 min-w-0 rounded-[inherit] outline-none ring-offset-background",
  "overscroll-contain [scrollbar-width:none] [&::-webkit-scrollbar]:hidden",
  "focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
);

const scrollbarBaseClassName = cn(
  "z-10 flex touch-none select-none rounded-full bg-muted/60 transition-opacity duration-150 ease-out",
  "before:absolute before:content-['']",
  "data-[orientation=vertical]:mx-1 data-[orientation=vertical]:my-2 data-[orientation=vertical]:w-1.5 data-[orientation=vertical]:flex-col",
  "data-[orientation=vertical]:before:left-1/2 data-[orientation=vertical]:before:h-full data-[orientation=vertical]:before:w-5 data-[orientation=vertical]:before:-translate-x-1/2",
  "data-[orientation=horizontal]:mx-2 data-[orientation=horizontal]:my-1 data-[orientation=horizontal]:h-1.5 data-[orientation=horizontal]:flex-row",
  "data-[orientation=horizontal]:before:h-5 data-[orientation=horizontal]:before:w-full",
  "data-[orientation=vertical]:[&:not([data-overflow-y])]:hidden",
  "data-[orientation=horizontal]:[&:not([data-overflow-x])]:hidden",
);

const scrollbarVisibilityClassName: Record<
  ScrollAreaScrollbarVisibility,
  string
> = {
  hover: cn(
    "opacity-0 pointer-events-none",
    "group-hover/scroll-area:pointer-events-auto group-hover/scroll-area:opacity-100",
    "group-focus-within/scroll-area:pointer-events-auto group-focus-within/scroll-area:opacity-100",
    "data-hover:pointer-events-auto data-hover:opacity-100",
    "data-scrolling:pointer-events-auto data-scrolling:opacity-100 data-scrolling:duration-0",
    "data-dragging:pointer-events-auto data-dragging:opacity-100 data-dragging:duration-0",
  ),
  always: cn("pointer-events-auto opacity-100"),
};

/* No flex-1: Zag sets height/width from --thumb-* and translate3d on the thumb; flex-1 fills the track and breaks offsetHeight + drag. */
const thumbClassName = cn(
  "relative flex-none rounded-full bg-foreground/25 transition-colors",
  "pointer-events-auto w-full max-w-full",
  "data-[orientation=horizontal]:h-full data-[orientation=horizontal]:max-h-full",
  "data-hover:bg-foreground/40 data-dragging:bg-foreground/55",
);

export type ScrollAreaRootProps = ComponentProps<
  typeof ScrollAreaPrimitive.Root
> & {
  scrollbarVisibility?: ScrollAreaScrollbarVisibility;
};

export const ScrollAreaRoot = ({
  className,
  scrollbarVisibility = "hover",
  ...props
}: ScrollAreaRootProps) => (
  <ScrollAreaScrollbarVisibilityContext.Provider value={scrollbarVisibility}>
    <ScrollAreaPrimitive.Root
      className={cn(
        "group/scroll-area relative isolate grid min-h-0 min-w-0 grid-cols-[minmax(0,1fr)] grid-rows-[minmax(0,1fr)] overflow-hidden rounded-lg border border-border bg-card text-card-foreground",
        className,
      )}
      data-slot="scroll-area-root"
      {...props}
    />
  </ScrollAreaScrollbarVisibilityContext.Provider>
);

export type ScrollAreaViewportProps = ComponentProps<
  typeof ScrollAreaPrimitive.Viewport
>;

export const ScrollAreaViewport = ({
  className,
  ...props
}: ScrollAreaViewportProps) => (
  <ScrollAreaPrimitive.Viewport
    className={cn(viewportClassName, className)}
    data-slot="scroll-area-viewport"
    {...props}
  />
);

export type ScrollAreaContentProps = ComponentProps<
  typeof ScrollAreaPrimitive.Content
>;

export const ScrollAreaContent = ({
  className,
  ...props
}: ScrollAreaContentProps) => (
  <ScrollAreaPrimitive.Content
    className={cn(className)}
    data-slot="scroll-area-content"
    {...props}
  />
);

export type ScrollAreaScrollbarProps = ComponentProps<
  typeof ScrollAreaPrimitive.Scrollbar
>;

export const ScrollAreaScrollbar = ({
  className,
  ...props
}: ScrollAreaScrollbarProps) => {
  const visibility = useContext(ScrollAreaScrollbarVisibilityContext);
  return (
    <ScrollAreaPrimitive.Scrollbar
      className={cn(
        scrollbarBaseClassName,
        scrollbarVisibilityClassName[visibility],
        className,
      )}
      data-slot="scroll-area-scrollbar"
      {...props}
    />
  );
};

export type ScrollAreaThumbProps = ComponentProps<
  typeof ScrollAreaPrimitive.Thumb
>;

export const ScrollAreaThumb = ({
  className,
  ...props
}: ScrollAreaThumbProps) => (
  <ScrollAreaPrimitive.Thumb
    className={cn(thumbClassName, className)}
    data-slot="scroll-area-thumb"
    {...props}
  />
);

export type ScrollAreaCornerProps = ComponentProps<
  typeof ScrollAreaPrimitive.Corner
>;

export const ScrollAreaCorner = ({
  className,
  ...props
}: ScrollAreaCornerProps) => (
  <ScrollAreaPrimitive.Corner
    className={cn("z-20 bg-transparent", className)}
    data-slot="scroll-area-corner"
    {...props}
  />
);

export type ScrollAreaRootProviderProps = ComponentProps<
  typeof ScrollAreaPrimitive.RootProvider
> & {
  scrollbarVisibility?: ScrollAreaScrollbarVisibility;
};

export const ScrollAreaRootProvider = ({
  className,
  scrollbarVisibility = "hover",
  ...props
}: ScrollAreaRootProviderProps) => (
  <ScrollAreaScrollbarVisibilityContext.Provider value={scrollbarVisibility}>
    <ScrollAreaPrimitive.RootProvider
      className={cn(
        "group/scroll-area relative isolate grid min-h-0 min-w-0 grid-cols-[minmax(0,1fr)] grid-rows-[minmax(0,1fr)] overflow-hidden rounded-lg border border-border bg-card text-card-foreground",
        className,
      )}
      data-slot="scroll-area-root-provider"
      {...props}
    />
  </ScrollAreaScrollbarVisibilityContext.Provider>
);

export type ScrollAreaContextProps = ComponentProps<
  typeof ScrollAreaPrimitive.Context
>;

export const ScrollAreaContext = (props: ScrollAreaContextProps) => (
  <ScrollAreaPrimitive.Context {...props} />
);

export type ScrollAreaProps = ScrollAreaRootProps & {
  scrollFade?: boolean;
  scrollbarGutter?: boolean;
  children?: ReactNode;
};

export const ScrollArea = ({
  className,
  children,
  scrollFade,
  scrollbarGutter,
  ...props
}: ScrollAreaProps) => (
  <ScrollAreaRoot className={className} {...props}>
    <ScrollAreaViewport
      className={cn(
        scrollbarGutter && "pe-2.5",
        scrollFade &&
          "mask-[linear-gradient(to_bottom,transparent,black_12px,black_calc(100%-12px),transparent)]",
      )}
    >
      <ScrollAreaContent>{children}</ScrollAreaContent>
    </ScrollAreaViewport>
    <ScrollAreaScrollbar orientation="vertical">
      <ScrollAreaThumb />
    </ScrollAreaScrollbar>
    <ScrollAreaCorner />
  </ScrollAreaRoot>
);
