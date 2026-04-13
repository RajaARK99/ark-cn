"use client";

import {
  PinInputControl,
  PinInputRoot,
  PinInputSlots,
} from "@/components/ui/pin-input";

const PinInputDemo = () => (
  <PinInputRoot className="w-full max-w-md" defaultValue={["1", "2"]}>
    <PinInputControl>
      <PinInputSlots variant="grouped" />
    </PinInputControl>
  </PinInputRoot>
);

export default PinInputDemo;
