"use client";

import {
  QrCode,
  QrCodeFrame,
  QrCodeOverlay,
  QrCodePattern,
} from "@/components/ui/qr-code";

const QrCodeDemo = () => (
  <QrCode encoding={{ ecc: "M" }} value="https://ark-ui.com">
    <QrCodeFrame>
      <QrCodePattern />
    </QrCodeFrame>
    <QrCodeOverlay>
      <span className="rounded bg-background/80 px-1 py-0.5 font-medium text-[10px]">
        ark-cn
      </span>
    </QrCodeOverlay>
  </QrCode>
);

export default QrCodeDemo;
