"use client";

import { ChevronDownIcon, ChevronUpIcon } from "lucide-react";
import type { ComponentProps, ReactNode } from "react";
import { Button } from "@/components/ui/button";
import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
} from "@/components/ui/input-group";
import {
  NumberInput,
  NumberInputControl,
  NumberInputDecrementTrigger,
  NumberInputIncrementTrigger,
  NumberInputRootProvider,
  useNumberInput,
} from "@/components/ui/number-input";
import { cn } from "@/lib/utils";

/** Showcase-only: shared InputGroupInput styles for Ark NumberInput demos */
const SHOWCASE_NI_INPUT_CLASS =
  "order-2 min-h-8.5 border-0 bg-transparent px-3 text-base leading-8.5 shadow-none sm:min-h-7.5 sm:text-sm sm:leading-7.5";

/** NumberInput.Input as InputGroupInput — use inside NiGroup */
const NiGroupInput = ({
  className,
  ...props
}: ComponentProps<typeof InputGroupInput>) => (
  <NumberInput asChild>
    <InputGroupInput
      className={cn(SHOWCASE_NI_INPUT_CLASS, className)}
      {...props}
    />
  </NumberInput>
);

/** NumberInputControl + InputGroup wrapper */
const NiGroup = ({
  children,
  className: controlClassName,
  groupClassName,
}: {
  children: ReactNode;
  className?: string;
  groupClassName?: string;
}) => (
  <NumberInputControl asChild className={controlClassName}>
    <InputGroup className={groupClassName}>{children}</InputGroup>
  </NumberInputControl>
);

const NumberInputRootProviderDemo = () => {
  const numberInput = useNumberInput({ defaultValue: "7" });
  return (
    <div className="flex w-full max-w-md flex-col gap-2">
      <output className="text-muted-foreground text-xs">
        valueAsNumber: {numberInput.valueAsNumber}
      </output>
      <NumberInputRootProvider value={numberInput}>
        <NiGroup>
          <NiGroupInput />
          <InputGroupAddon
            align="inline-end"
            className="flex flex-col divide-y divide-border p-0"
          >
            <NumberInputIncrementTrigger asChild>
              <Button
                className="size-8 shrink-0 rounded-none sm:size-7"
                size="icon"
                type="button"
                variant="ghost"
              >
                <ChevronUpIcon aria-hidden className="size-3.5" />
              </Button>
            </NumberInputIncrementTrigger>
            <NumberInputDecrementTrigger asChild>
              <Button
                className="size-8 shrink-0 rounded-none sm:size-7"
                size="icon"
                type="button"
                variant="ghost"
              >
                <ChevronDownIcon aria-hidden className="size-3.5" />
              </Button>
            </NumberInputDecrementTrigger>
          </InputGroupAddon>
        </NiGroup>
      </NumberInputRootProvider>
    </div>
  );
};

export default NumberInputRootProviderDemo;
