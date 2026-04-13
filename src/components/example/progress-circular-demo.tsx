"use client";

import {
  ProgressCircular,
  ProgressCircularLabel,
  ProgressCircularValueText,
} from "@/components/ui/progress-circular";

const ProgressCircularDemo = () => (
  <ProgressCircular className="max-w-xs" value={72}>
    <ProgressCircularLabel>Upload</ProgressCircularLabel>
    <ProgressCircularValueText />
  </ProgressCircular>
);

export default ProgressCircularDemo;
