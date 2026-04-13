"use client";

import { Portal } from "@ark-ui/react/portal";
import { PlayIcon, XIcon } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Tour,
  TourActions,
  TourActionTrigger,
  TourBackdrop,
  TourCloseTrigger,
  TourControl,
  TourDescription,
  TourPopup,
  TourProgressText,
  TourSpotlight,
  TourTitle,
  useTour,
} from "@/components/ui/tour";
import { cn } from "@/lib/utils";

// const TOOLTIP_TOOLS = [
//   { icon: BoldIcon, id: "bold", label: "Bold", shortcut: "Ctrl+B" },
//   { icon: ItalicIcon, id: "italic", label: "Italic", shortcut: "Ctrl+I" },
//   {
//     icon: UnderlineIcon,
//     id: "underline",
//     label: "Underline",
//     shortcut: "Ctrl+U",
//   },
// ] as const;

const tourStageClass = "flex w-full max-w-xl flex-col gap-3";

const tourTargetClass =
  "flex min-h-20 items-center justify-center rounded-xl border border-border/70 bg-muted/20 px-4 py-3 text-center font-medium text-foreground text-sm";

const TourLaunchButton = ({
  label = "Start tour",
  onClick,
}: {
  label?: string;
  onClick: () => void;
}) => (
  <Button
    className="w-fit gap-2"
    onClick={onClick}
    type="button"
    variant="outline"
  >
    <PlayIcon className="size-4" />
    {label}
  </Button>
);

const TourActionButtons = () => (
  <TourActions>
    {(actions) =>
      actions.map((action, index) => (
        <TourActionTrigger
          action={action}
          asChild
          key={`${action.label}-${index}`}
        >
          <Button
            size="sm"
            type="button"
            variant={
              action.action === "next" || action.action === "dismiss"
                ? "default"
                : "outline"
            }
          >
            {action.label}
          </Button>
        </TourActionTrigger>
      ))
    }
  </TourActions>
);

const TourFrame = ({
  tour,
  showProgressBar = false,
}: {
  tour: any;
  showProgressBar?: boolean;
}) => (
  <Tour tour={tour}>
    <Portal>
      <TourBackdrop />
      <TourSpotlight />
    </Portal>
    <TourPopup className={cn("space-y-2", showProgressBar && "pb-6")}>
      <div className="flex items-start justify-between gap-3">
        <div className="min-w-0 flex-1 space-y-2">
          <TourProgressText />
          <TourTitle />
        </div>
        <TourCloseTrigger asChild>
          <Button
            aria-label="Close tour"
            size="icon-sm"
            type="button"
            variant="ghost"
          >
            <XIcon className="size-4" />
          </Button>
        </TourCloseTrigger>
      </div>
      <TourDescription />
      <TourControl>
        <TourActionButtons />
      </TourControl>
      {showProgressBar ? (
        <div className="absolute inset-x-0 bottom-0 h-1 overflow-hidden rounded-b-xl bg-muted">
          <div
            className="h-full bg-primary transition-[width] duration-200"
            style={{ width: `${tour.getProgressPercent()}%` }}
          />
        </div>
      ) : null}
    </TourPopup>
  </Tour>
);

const TourEventsDemo = () => {
  const [logs, setLogs] = useState<string[]>([]);

  const pushLog = (message: string) => {
    setLogs((current) => [...current.slice(-5), message]);
  };

  const tour = useTour({
    steps: [
      {
        id: "step-1",
        type: "tooltip",
        arrow: true,
        title: "Event stream",
        description: "Every step change writes to the log.",
        target: () => document.querySelector("#tour-events-1"),
        actions: [{ label: "Next", action: "next" }],
      },
      {
        id: "step-2",
        type: "tooltip",
        arrow: true,
        title: "Lifecycle hooks",
        description: "Status changes are useful for analytics and onboarding.",
        target: () => document.querySelector("#tour-events-2"),
        actions: [
          { label: "Back", action: "prev" },
          { label: "Next", action: "next" },
        ],
      },
      {
        id: "step-3",
        type: "tooltip",
        arrow: true,
        title: "Finish event",
        description: "Dismiss the tour to emit the closed status.",
        target: () => document.querySelector("#tour-events-3"),
        actions: [
          { label: "Back", action: "prev" },
          { label: "Finish", action: "dismiss" },
        ],
      },
    ],
    onStepChange: (details) => {
      pushLog(`step -> ${details.stepId}`);
    },
    onStatusChange: (details) => {
      pushLog(`status -> ${details.status}`);
    },
  });

  return (
    <div className={tourStageClass}>
      <TourLaunchButton
        label="Start tracked tour"
        onClick={() => {
          setLogs([]);
          tour.start();
        }}
      />
      <div className="grid gap-2 sm:grid-cols-3">
        <div className={tourTargetClass} id="tour-events-1">
          Trigger 1
        </div>
        <div className={tourTargetClass} id="tour-events-2">
          Trigger 2
        </div>
        <div className={tourTargetClass} id="tour-events-3">
          Trigger 3
        </div>
      </div>
      <div className="rounded-xl border border-border/70 bg-muted/15 p-3 text-xs">
        <p className="mb-2 font-medium text-foreground">Event log</p>
        <div className="space-y-1 font-mono text-muted-foreground">
          {logs.length ? (
            logs.map((log, index) => <p key={`${log}-${index}`}>{log}</p>)
          ) : (
            <p>Start the tour to see lifecycle events.</p>
          )}
        </div>
      </div>
      <TourFrame tour={tour} />
    </div>
  );
};

export default TourEventsDemo;
