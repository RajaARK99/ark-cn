"use client";

import { createListCollection } from "@ark-ui/react/collection";
import {
  Select,
  SelectControl,
  SelectIndicator,
  SelectItem,
  SelectItemIndicator,
  SelectItemText,
  SelectLabel,
  SelectList,
  SelectPopup,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const frameworks = createListCollection({
  items: [
    { label: "React", value: "react" },
    { label: "Solid", value: "solid" },
    { label: "Vue", value: "vue" },
  ],
});

const SelectDemo = () => (
  <Select
    className="w-full max-w-md"
    collection={frameworks}
    defaultValue={["react"]}
  >
    <SelectLabel>Framework</SelectLabel>
    <SelectControl>
      <SelectTrigger>
        <SelectValue placeholder="Select framework" />
        <SelectIndicator />
      </SelectTrigger>
    </SelectControl>
    <SelectPopup>
      <SelectList>
        {frameworks.items.map((item) => (
          <SelectItem key={item.value} item={item}>
            <SelectItemText>{item.label}</SelectItemText>
            <SelectItemIndicator />
          </SelectItem>
        ))}
      </SelectList>
    </SelectPopup>
  </Select>
);

export default SelectDemo;
