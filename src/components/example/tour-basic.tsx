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

const TourBasicDemo = () => {
  const tour = useTour({
    steps: [
      {
        id: "welcome",
        type: "dialog",
        title: "Welcome aboard",
        description:
          "This starter tour introduces the main actions in the workspace.",
        actions: [{ label: "Start tour", action: "next" }],
      },
      {
        id: "upload",
        type: "tooltip",
        arrow: true,
        title: "Upload files",
        description: "Add assets or docs from your computer.",
        target: () => document.querySelector("#tour-basic-upload"),
        actions: [
          { label: "Back", action: "prev" },
          { label: "Next", action: "next" },
        ],
      },
      {
        id: "save",
        type: "tooltip",
        arrow: true,
        title: "Save changes",
        description: "Persist the current draft before sharing it.",
        target: () => document.querySelector("#tour-basic-save"),
        actions: [
          { label: "Back", action: "prev" },
          { label: "Next", action: "next" },
        ],
      },
      {
        id: "more",
        type: "tooltip",
        arrow: true,
        title: "More options",
        description: "Advanced actions stay tucked away in the overflow menu.",
        target: () => document.querySelector("#tour-basic-more"),
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
      <div className="flex flex-wrap gap-2">
        <Button id="tour-basic-upload" type="button" variant="outline">
          Upload
        </Button>
        <Button id="tour-basic-save" type="button" variant="outline">
          Save
        </Button>
        <Button id="tour-basic-more" type="button" variant="outline">
          More
        </Button>
      </div>
      <TourFrame tour={tour} />
    </div>
  );
};

export default TourBasicDemo;
