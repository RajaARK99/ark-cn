"use client";

import {
  Marquee,
  MarqueeContent,
  MarqueeItem,
  MarqueeViewport,
} from "@/components/ui/marquee";

const ITEMS = [
  "Ark UI",
  "shadcn-style",
  "TypeScript",
  "Tailwind v4",
  "Accessible",
] as const;

const MarqueeDemoExample = () => (
  <Marquee className="w-full max-w-2xl">
    <MarqueeViewport>
      <MarqueeContent>
        {ITEMS.map((item) => (
          <MarqueeItem key={item}>{item}</MarqueeItem>
        ))}
      </MarqueeContent>
    </MarqueeViewport>
  </Marquee>
);

export default MarqueeDemoExample;
