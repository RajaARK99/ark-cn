"use client";

import { PauseIcon, PlayIcon, RotateCcwIcon } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Timer,
  TimerActionTrigger,
  TimerArea,
  TimerControl,
  TimerItem,
  TimerSeparator,
} from "@/components/ui/timer";

// const ToggleGroupWithTooltipsDemo = () => (
//   <TooltipPrimitive.RootProvider>
//     <ToggleGroup defaultValue={["bold"]} multiple>
//       <TooltipPrimitive.Root>
//         <TooltipPrimitive.Trigger asChild>
//           <ToggleGroupItem aria-label="Toggle bold" value="bold">
//             <BoldIcon />
//           </ToggleGroupItem>
//         </TooltipPrimitive.Trigger>
//         <TooltipPrimitive.Positioner>
//           <TooltipPrimitive.Content className="rounded-md border border-input bg-popover px-2 py-1 text-popover-foreground text-xs shadow-xs/5">
//             Bold
//             <TooltipPrimitive.Arrow>
//               <TooltipPrimitive.ArrowTip className="fill-popover stroke-input" />
//             </TooltipPrimitive.Arrow>
//           </TooltipPrimitive.Content>
//         </TooltipPrimitive.Positioner>
//       </TooltipPrimitive.Root>
//       <TooltipPrimitive.Root>
//         <TooltipPrimitive.Trigger asChild>
//           <ToggleGroupItem aria-label="Toggle italic" value="italic">
//             <ItalicIcon />
//           </ToggleGroupItem>
//         </TooltipPrimitive.Trigger>
//         <TooltipPrimitive.Positioner>
//           <TooltipPrimitive.Content className="rounded-md border border-input bg-popover px-2 py-1 text-popover-foreground text-xs shadow-xs/5">
//             Italic
//             <TooltipPrimitive.Arrow>
//               <TooltipPrimitive.ArrowTip className="fill-popover stroke-input" />
//             </TooltipPrimitive.Arrow>
//           </TooltipPrimitive.Content>
//         </TooltipPrimitive.Positioner>
//       </TooltipPrimitive.Root>
//       <TooltipPrimitive.Root>
//         <TooltipPrimitive.Trigger asChild>
//           <ToggleGroupItem aria-label="Toggle underline" value="underline">
//             <UnderlineIcon />
//           </ToggleGroupItem>
//         </TooltipPrimitive.Trigger>
//         <TooltipPrimitive.Positioner>
//           <TooltipPrimitive.Content className="rounded-md border border-input bg-popover px-2 py-1 text-popover-foreground text-xs shadow-xs/5">
//             Underline
//             <TooltipPrimitive.Arrow>
//               <TooltipPrimitive.ArrowTip className="fill-popover stroke-input" />
//             </TooltipPrimitive.Arrow>
//           </TooltipPrimitive.Content>
//         </TooltipPrimitive.Positioner>
//       </TooltipPrimitive.Root>
//     </ToggleGroup>
//   </TooltipPrimitive.RootProvider>
// );

const TimerDigits = ({
  parts,
}: {
  parts: Array<{
    type: "days" | "hours" | "minutes" | "seconds" | "milliseconds";
    label: string;
  }>;
}) => (
  <TimerArea>
    {parts.map((part, index) => (
      <div className="flex items-center gap-2" key={part.type}>
        <div className="flex flex-col items-center">
          <TimerItem type={part.type} />
          <span className="text-[11px] uppercase tracking-wider text-muted-foreground">
            {part.label}
          </span>
        </div>
        {index < parts.length - 1 ? <TimerSeparator>:</TimerSeparator> : null}
      </div>
    ))}
  </TimerArea>
);

const TimerPomodoroDemo = () => {
  const [isWorking, setIsWorking] = useState(true);
  const [cycles, setCycles] = useState(0);

  const onComplete = () => {
    setIsWorking((value) => !value);
    if (!isWorking) {
      setCycles((value) => value + 1);
    }
  };

  return (
    <Timer
      countdown
      key={isWorking ? "work" : "break"}
      onComplete={onComplete}
      startMs={isWorking ? 25 * 60 * 1000 : 5 * 60 * 1000}
    >
      <p className="text-sm font-medium text-foreground">
        {isWorking ? "Work session" : "Break session"}
      </p>
      <TimerDigits
        parts={[
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
      <p className="text-xs text-muted-foreground">
        Completed cycles: {cycles}
      </p>
    </Timer>
  );
};

export default TimerPomodoroDemo;
