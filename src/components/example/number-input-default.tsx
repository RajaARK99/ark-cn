"use client";

import { MinusIcon, PlusIcon } from "lucide-react";
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
  NumberInputRoot,
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

const NumberInputDefaultDemo = () => (
  <div className="w-full max-w-xs">
    <NumberInputRoot defaultValue="1" invalid>
      <NiGroup>
        <InputGroupAddon align="inline-start">
          <NumberInputDecrementTrigger asChild>
            <Button size="icon-sm" type="button" variant="ghost">
              <MinusIcon aria-hidden className="size-4" />
            </Button>
          </NumberInputDecrementTrigger>
        </InputGroupAddon>
        <NiGroupInput className="px-2 text-center" />
        <InputGroupAddon align="inline-end">
          <NumberInputIncrementTrigger asChild>
            <Button size="icon-sm" type="button" variant="ghost">
              <PlusIcon aria-hidden className="size-4" />
            </Button>
          </NumberInputIncrementTrigger>
        </InputGroupAddon>
      </NiGroup>
    </NumberInputRoot>
  </div>
);

export default NumberInputDefaultDemo;
