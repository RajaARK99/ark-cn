"use client";

import {
  ScrollArea,
  ScrollAreaContent,
  ScrollAreaViewport,
} from "@/components/ui/scroll-area";

const items = Array.from({ length: 20 }, (_, i) => "Item " + (i + 1));

const ScrollAreaDemo = () => (
  <ScrollArea className="w-full max-w-md rounded-lg border border-border">
    <ScrollAreaViewport className="h-56">
      <ScrollAreaContent className="p-3">
        <ul className="space-y-2">
          {items.map((item) => (
            <li key={item} className="rounded bg-muted/40 px-2 py-1.5 text-sm">
              {item}
            </li>
          ))}
        </ul>
      </ScrollAreaContent>
    </ScrollAreaViewport>
  </ScrollArea>
);

export default ScrollAreaDemo;
