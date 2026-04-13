"use client";

import { useState } from "react";
import {
  TagsInput,
  TagsInputClearTrigger,
  TagsInputContext,
  TagsInputControl,
  TagsInputHiddenInput,
  TagsInputInput,
  TagsInputItem,
  TagsInputItemDeleteTrigger,
  TagsInputItemInput,
  TagsInputItemPreview,
  TagsInputItemText,
  TagsInputLabel,
} from "@/components/ui/tags-input";

const TagsInputScaffold = ({
  label = "Frameworks",
  placeholder = "Add framework",
}: {
  label?: string;
  placeholder?: string;
}) => (
  <TagsInputContext>
    {(api) => (
      <>
        <TagsInputLabel>{label}</TagsInputLabel>
        <TagsInputControl>
          {api.value.map((value, index) => (
            <TagsInputItem
              key={`${value}-${index}`}
              index={index}
              value={value}
            >
              <TagsInputItemPreview>
                <TagsInputItemText>{value}</TagsInputItemText>
                <TagsInputItemDeleteTrigger />
              </TagsInputItemPreview>
              <TagsInputItemInput />
            </TagsInputItem>
          ))}
          <TagsInputInput placeholder={placeholder} />
          <TagsInputClearTrigger />
        </TagsInputControl>
      </>
    )}
  </TagsInputContext>
);

const TagsInputControlledDemo = () => {
  const [value, setValue] = useState<string[]>(["React", "Solid"]);
  return (
    <TagsInput value={value} onValueChange={(d) => setValue(d.value)}>
      <TagsInputScaffold />
      <TagsInputHiddenInput />
    </TagsInput>
  );
};

export default TagsInputControlledDemo;
