"use client";

import { Portal } from "@ark-ui/react/portal";
import { PlayIcon, XIcon } from "lucide-react";
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

const TourSkipDemo = () => {
  const tour = useTour({
    steps: [
      {
        id: "step-1",
        type: "tooltip",
        arrow: true,
        title: "Collections",
        description: "Users can skip the tour from the very first step.",
        target: () => document.querySelector("#tour-skip-1"),
        actions: [
          { label: "Skip", action: "dismiss" },
          { label: "Next", action: "next" },
        ],
      },
      {
        id: "step-2",
        type: "tooltip",
        arrow: true,
        title: "Saved views",
        description:
          "Keep skip available even mid-tour so exits are frictionless.",
        target: () => document.querySelector("#tour-skip-2"),
        actions: [
          { label: "Skip", action: "dismiss" },
          { label: "Back", action: "prev" },
          { label: "Next", action: "next" },
        ],
      },
      {
        id: "step-3",
        type: "tooltip",
        arrow: true,
        title: "Shortcuts",
        description: "The last step can finish normally.",
        target: () => document.querySelector("#tour-skip-3"),
        actions: [
          { label: "Back", action: "prev" },
          { label: "Finish", action: "dismiss" },
        ],
      },
    ],
  });

  return (
    <div className={tourStageClass}>
      <TourLaunchButton onClick={() => tour.start()} />
      <div className="grid gap-2 sm:grid-cols-3">
        <div className={tourTargetClass} id="tour-skip-1">
          Collections
        </div>
        <div className={tourTargetClass} id="tour-skip-2">
          Views
        </div>
        <div className={tourTargetClass} id="tour-skip-3">
          Shortcuts
        </div>
      </div>
      <TourFrame tour={tour} />
    </div>
  );
};

export default TourSkipDemo;
