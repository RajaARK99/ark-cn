"use client";

import {
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
  TagsInputRootProvider,
  useTagsInput,
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

const TagsInputRootProviderDemo = () => {
  const api = useTagsInput();
  return (
    <div className="flex flex-col gap-2">
      <TagsInputRootProvider value={api}>
        <TagsInputScaffold />
        <TagsInputHiddenInput />
      </TagsInputRootProvider>
      <p className="text-muted-foreground text-xs">
        values: {JSON.stringify(api.value)}
      </p>
    </div>
  );
};

export default TagsInputRootProviderDemo;
