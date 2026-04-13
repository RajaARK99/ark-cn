"use client";

import { PauseIcon, PlayIcon, RotateCcwIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Timer,
  TimerActionTrigger,
  TimerArea,
  TimerControl,
  TimerItem,
  TimerSeparator,
} from "@/components/ui/timer";

const TimerIntervalDemo = () => (
  <Timer interval={100} targetMs={60 * 1000}>
    <TimerArea>
      <div className="flex flex-col items-center">
        <TimerItem type="seconds" />
        <span className="text-[11px] uppercase tracking-wider text-muted-foreground">
          seconds
        </span>
      </div>
      <TimerSeparator>.</TimerSeparator>
      <div className="flex flex-col items-center">
        <TimerItem type="milliseconds" />
        <span className="text-[11px] uppercase tracking-wider text-muted-foreground">
          ms
        </span>
      </div>
    </TimerArea>
    <TimerControl>
      <TimerActionTrigger action="start" asChild>
        <Button size="sm" type="button" variant="outline">
          <PlayIcon className="size-4" /> Start
        </Button>
      </TimerActionTrigger>
      <TimerActionTrigger action="pause" asChild>
        <Button size="sm" type="button" variant="outline">
          <PauseIcon className="size-4" /> Pause
        </Button>
      </TimerActionTrigger>
      <TimerActionTrigger action="reset" asChild>
        <Button size="sm" type="button" variant="outline">
          <RotateCcwIcon className="size-4" /> Reset
        </Button>
      </TimerActionTrigger>
    </TimerControl>
  </Timer>
);

export default TimerIntervalDemo;
