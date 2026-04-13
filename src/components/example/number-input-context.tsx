"use client";

import type { ComponentProps, ReactNode } from "react";
import { InputGroup, InputGroupInput } from "@/components/ui/input-group";
import {
  NumberInput,
  NumberInputContext,
  NumberInputControl,
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

const NumberInputContextDemo = () => (
  <div className="w-full max-w-xs">
    <NumberInputRoot defaultValue="1">
      <NumberInputContext>
        {(ctx) => (
          <p className="mb-2 text-muted-foreground text-xs">
            value: {ctx.value} · valueAsNumber: {ctx.valueAsNumber}
          </p>
        )}
      </NumberInputContext>
      <NiGroup>
        <NiGroupInput />
      </NiGroup>
    </NumberInputRoot>
  </div>
);

export default NumberInputContextDemo;
