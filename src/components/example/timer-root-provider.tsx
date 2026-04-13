"use client";

import { useTimer } from "@/components/ui/timer";

const TimerRootProviderDemo = () => {
  const timer = useTimer({ targetMs: 60 * 60 * 1000 });

  return (
    <div className="space-y-3">
      <p className="text-xs text-muted-foreground">
        Timer JSON: {JSON.stringify(timer.time)}
      </p>
      {/* <TimerRootProvider value={timer}>
        <>
        <TimerDigits
          parts={[
            { type: "hours", label: "hours" },
            { type: "minutes", label: "minutes" },
            { type: "seconds", label: "seconds" },
          ]}
        />
        <TimerControl>
          <TimerActionTrigger action="start" asChild>
            <Button size="sm" type="button" variant="outline">
              <PlayIcon className="size-4" /> Start
            </Button>
          </TimerActionTrigger>
          <TimerActionTrigger action="resume" asChild>
            <Button size="sm" type="button" variant="outline">
              <PlayIcon className="size-4" /> Resume
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
        </>
        
      </TimerRootProvider> */}
    </div>
  );
};

export default TimerRootProviderDemo;
