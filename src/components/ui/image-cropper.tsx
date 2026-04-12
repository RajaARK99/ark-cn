"use client";

import { ImageCropper as ImageCropperPrimitive } from "@ark-ui/react/image-cropper";

import { cn } from "@/lib/utils";

export const imageCropperHandles = ImageCropperPrimitive.handles;

const imageCropperRootLayoutClass =
  "relative flex w-full max-w-lg flex-col gap-4 text-foreground [--cropper-accent:theme(colors.primary)] [--cropper-handler-size:6px] [--cropper-handler-width:3px] [--cropper-line-width:2px] [--cropper-overlay-color:rgb(0_0_0/0.5)]";

export const ImageCropper = ({
  className,
  ...props
}: ImageCropperPrimitive.RootProps) => (
  <ImageCropperPrimitive.Root
    data-slot="image-cropper"
    className={cn(imageCropperRootLayoutClass, className)}
    {...props}
  />
);

export const ImageCropperRootProvider = ({
  className,
  ...props
}: ImageCropperPrimitive.RootProviderProps) => (
  <ImageCropperPrimitive.RootProvider
    data-slot="image-cropper"
    className={cn(imageCropperRootLayoutClass, className)}
    {...props}
  />
);

export const ImageCropperViewport = ({
  className,
  ...props
}: ImageCropperPrimitive.ViewportProps) => (
  <ImageCropperPrimitive.Viewport
    data-slot="image-cropper-viewport"
    className={cn(
      "relative aspect-video w-full overflow-hidden rounded-lg bg-muted",
      className,
    )}
    {...props}
  />
);

export const ImageCropperImage = ({
  className,
  ...props
}: ImageCropperPrimitive.ImageProps) => (
  <ImageCropperPrimitive.Image
    data-slot="image-cropper-image"
    className={cn(
      "pointer-events-none absolute inset-0 size-full select-none object-contain backface-hidden origin-center",
      className,
    )}
    {...props}
  />
);

export const ImageCropperSelection = ({
  className,
  ...props
}: ImageCropperPrimitive.SelectionProps) => (
  <ImageCropperPrimitive.Selection
    data-slot="image-cropper-selection"
    className={cn(
      "box-border cursor-move outline-none backface-hidden",
      "[box-shadow:0_0_0_9999px_var(--cropper-overlay-color)]",
      "border-(length:--cropper-line-width) border-white/50",
      "data-[shape=circle]:rounded-full",
      "focus-visible:border-primary",
      "data-disabled:cursor-default",
      "data-dragging:cursor-grabbing data-dragging:border-white/80",
      className,
    )}
    {...props}
  />
);

export const ImageCropperHandle = ({
  className,
  children,
  ...props
}: ImageCropperPrimitive.HandleProps) => (
  <ImageCropperPrimitive.Handle
    data-slot="image-cropper-handle"
    className={cn(
      "absolute flex size-[calc(var(--cropper-handler-size)+8px)] touch-none items-center justify-center",
      "data-disabled:hidden",
      "data-[position=bottom]:cursor-ns-resize data-[position=top]:cursor-ns-resize",
      "data-[position=left]:cursor-ew-resize data-[position=right]:cursor-ew-resize",
      "data-[position=bottom-left]:cursor-nesw-resize data-[position=bottom-right]:cursor-nwse-resize",
      "data-[position=top-left]:cursor-nwse-resize data-[position=top-right]:cursor-nesw-resize",
      "[&>div]:size-(--cropper-handler-size) [&>div]:rounded-full [&>div]:border-2 [&>div]:border-primary [&>div]:bg-background [&>div]:shadow-sm",
      className,
    )}
    {...props}
  >
    {children ?? <div />}
  </ImageCropperPrimitive.Handle>
);

export const ImageCropperGrid = ({
  className,
  ...props
}: ImageCropperPrimitive.GridProps) => (
  <ImageCropperPrimitive.Grid
    data-slot="image-cropper-grid"
    className={cn(
      "pointer-events-none absolute opacity-0 transition-opacity",
      "data-[axis=horizontal]:inset-[33.33%_0] data-[axis=horizontal]:border-y data-[axis=horizontal]:border-white/40",
      "data-[axis=vertical]:inset-[0_33.33%] data-[axis=vertical]:border-x data-[axis=vertical]:border-white/40",
      "data-dragging:opacity-100 data-panning:opacity-100",
      className,
    )}
    {...props}
  />
);

export type {
  ImageCropperContextProps,
  ImageCropperCropChangeDetails,
  ImageCropperFlipChangeDetails,
  ImageCropperFlipState,
  ImageCropperHandlePosition,
  ImageCropperRotationChangeDetails,
  ImageCropperZoomChangeDetails,
  UseImageCropperContext,
  UseImageCropperProps,
  UseImageCropperReturn,
} from "@ark-ui/react/image-cropper";
export {
  ImageCropperContext,
  imageCropperAnatomy,
  useImageCropper,
  useImageCropperContext,
} from "@ark-ui/react/image-cropper";
