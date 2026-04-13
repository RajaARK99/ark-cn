"use client";

import {
  Marquee,
  MarqueeContent,
  MarqueeItem,
  MarqueeViewport,
} from "@/components/ui/marquee";

const VERTICAL_ITEMS = [
  "Vertical marquee",
  "Scrollable feed",
  "Smooth transitions",
  "Ark primitives",
] as const;

const MarqueeVerticalExample = () => (
  <Marquee className="max-w-md [--direction:column]">
    <MarqueeViewport>
      <MarqueeContent>
        {VERTICAL_ITEMS.map((item) => (
          <MarqueeItem key={item}>{item}</MarqueeItem>
        ))}
      </MarqueeContent>
    </MarqueeViewport>
  </Marquee>
);

export default MarqueeVerticalExample;
