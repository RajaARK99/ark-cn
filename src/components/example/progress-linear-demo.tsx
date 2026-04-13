"use client";

import {
  ProgressLinear,
  ProgressLinearLabel,
  ProgressLinearValueText,
} from "@/components/ui/progress-linear";

const ProgressLinearDemo = () => (
  <ProgressLinear className="w-full max-w-md" value={64}>
    <ProgressLinearLabel>Progress</ProgressLinearLabel>
    <ProgressLinearValueText />
  </ProgressLinear>
);

export default ProgressLinearDemo;
