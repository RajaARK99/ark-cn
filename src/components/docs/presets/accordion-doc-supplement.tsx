"use client";

import { DocPropsTable } from "@/components/docs/docs-props-table";

const TRIGGER_EXTENSION = [
  {
    prop: "indicator?",
    type: "ReactNode",
    description:
      "Optional node rendered inside ItemIndicator instead of the default ChevronDown icon.",
  },
];

const PANEL_EXTENSION = [
  {
    prop: "containerClassName?",
    type: "string",
    description:
      "Merged onto the inner padded div that wraps children. Use Ark’s className on ItemContent (passed through as className here) for the animated outer shell; use containerClassName for inner padding, borders, and body layout.",
  },
];

export type AccordionDocSupplementSection = "extension-props";

export type AccordionDocSupplementProps = {
  section: AccordionDocSupplementSection;
};

export const AccordionDocSupplement = ({
  section,
}: AccordionDocSupplementProps) => {
  switch (section) {
    case "extension-props":
      return (
        <div className="not-prose flex flex-col gap-8">
          <div>
            <h4 className="mb-2 font-semibold text-foreground text-sm tracking-tight">
              AccordionTrigger
            </h4>
            <DocPropsTable rows={TRIGGER_EXTENSION} />
          </div>
          <div>
            <h4 className="mb-2 font-semibold text-foreground text-sm tracking-tight">
              AccordionPanel
            </h4>
            <DocPropsTable rows={PANEL_EXTENSION} />
          </div>
        </div>
      );
    default:
      return null;
  }
};
