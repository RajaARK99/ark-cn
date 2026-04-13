"use client";

import { Button } from "@/components/ui/button";
import {
  EditableArea,
  EditableControl,
  EditableEditTrigger,
  EditableInput,
  EditableLabel,
  EditablePreview,
  EditableRootProvider,
  useEditable,
} from "@/components/ui/editable";

const EditableRootProviderDemo = () => {
  const editable = useEditable({
    defaultValue: "From useEditable()",
    selectOnFocus: false,
  });

  return (
    <EditableRootProvider value={editable}>
      <EditableLabel>Root provider</EditableLabel>
      <EditableArea>
        <EditableInput />
        <EditablePreview />
      </EditableArea>
      <EditableControl>
        <EditableEditTrigger>Edit</EditableEditTrigger>
        <Button
          size="sm"
          type="button"
          variant="outline"
          onClick={() => {
            editable.setValue("Reset from outside");
          }}
        >
          Set value
        </Button>
      </EditableControl>
    </EditableRootProvider>
  );
};

export default EditableRootProviderDemo;
