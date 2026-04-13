"use client";

import { FieldRootProvider, useField } from "@/components/ui/field";
import { Input } from "@/components/ui/input";

const FieldRootProviderDemo = () => {
  const field = useField({ id: "showcase-field-provider" });
  return (
    <FieldRootProvider value={field}>
      <div className="flex max-w-xs flex-col gap-1.5">
        <label
          className="text-sm font-medium text-foreground leading-none"
          {...field.getLabelProps()}
        >
          External label
        </label>
        <Input
          placeholder="Controlled by useField()"
          {...field.getInputProps()}
        />
        <span
          className="text-muted-foreground text-xs"
          {...field.getHelperTextProps()}
        >
          RootProvider + useField() mirror the primitive API.
        </span>
      </div>
    </FieldRootProvider>
  );
};

export default FieldRootProviderDemo;
