"use client";

import {
  Segment,
  SegmentGroup,
  SegmentGroupRoot,
} from "@/components/ui/segment-group";

const SegmentGroupDemo = () => (
  <SegmentGroupRoot defaultValue="weekly">
    <SegmentGroup>
      <Segment value="daily">Daily</Segment>
      <Segment value="weekly">Weekly</Segment>
      <Segment value="monthly">Monthly</Segment>
    </SegmentGroup>
  </SegmentGroupRoot>
);

export default SegmentGroupDemo;
