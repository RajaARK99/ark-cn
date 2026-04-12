"use client";

import {
  QrCode as QrCodePrimitive,
  useQrCode,
  useQrCodeContext,
} from "@ark-ui/react/qr-code";
import type { CSSProperties } from "react";

import { cn } from "@/lib/utils";

export type QrCodeOwnProps = {
  /** Square display size in CSS pixels. Default 100. Ignored when both `width` and `height` are set. */
  size?: number;
  /** Display width in CSS pixels. Use with `height` for a non-square frame. */
  width?: number;
  /** Display height in CSS pixels. Use with `width`. */
  height?: number;
};

const qrCodeLayoutStyle = ({
  size = 100,
  width,
  height,
}: QrCodeOwnProps): CSSProperties => {
  if (width !== undefined && height !== undefined) {
    return {
      "--qr-code-width": `${width}px`,
      "--qr-code-height": `${height}px`,
      "--qr-code-overlay-size": `calc(min(${width}px, ${height}px) / 3)`,
    } as CSSProperties;
  }
  return {
    "--qr-code-size": `${size}px`,
    "--qr-code-overlay-size": "calc(var(--qr-code-size) / 3)",
  } as CSSProperties;
};

export type QrCodeProps = QrCodePrimitive.RootProps & QrCodeOwnProps;

export const QrCode = ({
  className,
  size,
  width,
  height,
  style,
  ...props
}: QrCodeProps) => (
  <QrCodePrimitive.Root
    className={cn(
      "relative flex w-fit flex-col gap-2 text-foreground",
      className,
    )}
    data-slot="qr-code"
    style={{ ...qrCodeLayoutStyle({ size, width, height }), ...style }}
    {...props}
  />
);

export type QrCodeFrameProps = QrCodePrimitive.FrameProps;

export const QrCodeFrame = ({ className, ...props }: QrCodeFrameProps) => (
  <QrCodePrimitive.Frame
    className={cn(
      "block h-(--qr-code-height,var(--qr-code-size)) w-(--qr-code-width,var(--qr-code-size)) max-w-full shrink-0 fill-current text-foreground",
      className,
    )}
    data-slot="qr-code-frame"
    {...props}
  />
);

export type QrCodePatternProps = QrCodePrimitive.PatternProps;

export const QrCodePattern = ({ className, ...props }: QrCodePatternProps) => (
  <QrCodePrimitive.Pattern
    className={cn("fill-inherit", className)}
    data-slot="qr-code-pattern"
    {...props}
  />
);

export type QrCodeOverlayProps = QrCodePrimitive.OverlayProps;

export const QrCodeOverlay = ({ className, ...props }: QrCodeOverlayProps) => (
  <QrCodePrimitive.Overlay
    className={cn(
      "flex size-(--qr-code-overlay-size) items-center justify-center rounded-md bg-popover p-1",
      "[&_img]:size-full [&_img]:object-contain [&_svg]:size-full [&_svg]:object-contain",
      className,
    )}
    data-slot="qr-code-overlay"
    {...props}
  />
);

export type QrCodeDownloadTriggerProps = QrCodePrimitive.DownloadTriggerProps;

export const QrCodeDownloadTrigger = ({
  className,
  ...props
}: QrCodeDownloadTriggerProps) => (
  <QrCodePrimitive.DownloadTrigger
    className={cn(
      "inline-flex h-8 min-w-8 shrink-0 items-center justify-center rounded-md border-0 bg-muted px-3 font-medium text-foreground text-sm transition-[background-color,color] hover:bg-foreground hover:text-background",
      className,
    )}
    data-slot="qr-code-download-trigger"
    {...props}
  />
);

export type QrCodeRootProviderProps = QrCodePrimitive.RootProviderProps &
  QrCodeOwnProps;

export const QrCodeRootProvider = ({
  className,
  size,
  width,
  height,
  style,
  ...props
}: QrCodeRootProviderProps) => (
  <QrCodePrimitive.RootProvider
    className={cn(
      "relative flex w-fit flex-col gap-2 text-foreground",
      className,
    )}
    data-slot="qr-code-provider"
    style={{ ...qrCodeLayoutStyle({ size, width, height }), ...style }}
    {...props}
  />
);

export const QrCodeContext = QrCodePrimitive.Context;

export type { QrCodeGenerateOptions } from "@ark-ui/react/qr-code";
export { useQrCode, useQrCodeContext };
