"use client";

import {
  Marquee,
  MarqueeContent,
  MarqueeContext,
  MarqueeItem,
  MarqueeViewport,
} from "@/components/ui/marquee";

const CONTEXT_ITEMS = ["Hover me", "Pause state", "Context API"] as const;

const MarqueeContextExample = () => (
  <Marquee className="w-full max-w-2xl">
    <MarqueeViewport>
      <MarqueeContent>
        {CONTEXT_ITEMS.map((item) => (
          <MarqueeItem key={item}>{item}</MarqueeItem>
        ))}
      </MarqueeContent>
    </MarqueeViewport>
    <MarqueeContext>
      {(api) => (
        <p className="px-1 text-muted-foreground text-xs">
          Context ready: {String(Boolean(api))}
        </p>
      )}
    </MarqueeContext>
  </Marquee>
);

export default MarqueeContextExample;
