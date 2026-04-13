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

const TourMixedTypesDemo = () => {
  const tour = useTour({
    steps: [
      {
        id: "intro",
        type: "dialog",
        title: "Three step types",
        description:
          "This sequence mixes dialog, tooltip, and floating tour steps in one flow.",
        actions: [{ label: "Start tour", action: "next" }],
      },
      {
        id: "anchor",
        type: "tooltip",
        arrow: true,
        title: "Anchored tooltip",
        description: "Tooltips are perfect for calling out a concrete control.",
        target: () => document.querySelector("#tour-mixed-anchor"),
        actions: [
          { label: "Back", action: "prev" },
          { label: "Next", action: "next" },
        ],
      },
      {
        id: "floating",
        type: "floating",
        placement: "bottom-end",
        title: "Floating panel",
        description:
          "Floating steps can introduce ambient UI without needing a target node.",
        actions: [
          { label: "Back", action: "prev" },
          { label: "Next", action: "next" },
        ],
      },
      {
        id: "done",
        type: "dialog",
        title: "Done",
        description: "You’ve now seen the core Tour presentation modes.",
        actions: [{ label: "Close", action: "dismiss" }],
      },
    ],
  });

  return (
    <div className={tourStageClass}>
      <TourLaunchButton onClick={() => tour.start()} />
      <div className={cn(tourTargetClass, "max-w-sm")} id="tour-mixed-anchor">
        Product analytics card
      </div>
      <TourFrame tour={tour} />
    </div>
  );
};

export default TourMixedTypesDemo;
