"use client";

import {
  Marquee,
  MarqueeContent,
  MarqueeItem,
  MarqueeViewport,
} from "@/components/ui/marquee";

const BASIC_ITEMS = ["Design", "Build", "Ship", "Scale"] as const;

const MarqueeBasicExample = () => (
  <Marquee className="w-full max-w-2xl">
    <MarqueeViewport>
      <MarqueeContent>
        {BASIC_ITEMS.map((item) => (
          <MarqueeItem key={item}>{item}</MarqueeItem>
        ))}
      </MarqueeContent>
    </MarqueeViewport>
  </Marquee>
);

export default MarqueeBasicExample;
