"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
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

const TagsInputControlledInputValueDemo = () => {
  const [inputValue, setInputValue] = useState("");
  return (
    <div className="flex flex-col gap-2">
      <div className="flex flex-wrap gap-2">
        <Button
          onClick={() => setInputValue("React")}
          size="sm"
          variant="outline"
        >
          Set "React"
        </Button>
        <Button onClick={() => setInputValue("")} size="sm" variant="outline">
          Clear
        </Button>
      </div>
      <TagsInput
        inputValue={inputValue}
        onInputValueChange={(d) => setInputValue(d.inputValue)}
      >
        <TagsInputScaffold />
        <TagsInputHiddenInput />
      </TagsInput>
    </div>
  );
};

export default TagsInputControlledInputValueDemo;
