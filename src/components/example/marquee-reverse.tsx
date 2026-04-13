"use client";

import {
  Marquee,
  MarqueeContent,
  MarqueeItem,
  MarqueeViewport,
} from "@/components/ui/marquee";

const REVERSE_ITEMS = ["One", "Two", "Three", "Four"] as const;

const MarqueeReverseExample = () => (
  <Marquee className="w-full max-w-2xl">
    <MarqueeViewport>
      <MarqueeContent className="direction-[reverse]">
        {REVERSE_ITEMS.map((item) => (
          <MarqueeItem key={item}>{item}</MarqueeItem>
        ))}
      </MarqueeContent>
    </MarqueeViewport>
  </Marquee>
);

export default MarqueeReverseExample;
