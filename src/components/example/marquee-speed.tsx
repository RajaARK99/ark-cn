"use client";

import {
  Marquee,
  MarqueeContent,
  MarqueeItem,
  MarqueeViewport,
} from "@/components/ui/marquee";

const SPEED_ITEMS = ["Fast lane", "Normal lane", "Slow lane"] as const;

const MarqueeSpeedExample = () => (
  <div className="space-y-3">
    <Marquee className="w-full max-w-2xl">
      <MarqueeViewport>
        <MarqueeContent className="animation-duration-[10s]">
          {SPEED_ITEMS.map((item) => (
            <MarqueeItem key={`fast-${item}`}>{item}</MarqueeItem>
          ))}
        </MarqueeContent>
      </MarqueeViewport>
    </Marquee>
    <Marquee className="w-full max-w-2xl">
      <MarqueeViewport>
        <MarqueeContent className="animation-duration-[24s]">
          {SPEED_ITEMS.map((item) => (
            <MarqueeItem key={`slow-${item}`}>{item}</MarqueeItem>
          ))}
        </MarqueeContent>
      </MarqueeViewport>
    </Marquee>
  </div>
);

export default MarqueeSpeedExample;
