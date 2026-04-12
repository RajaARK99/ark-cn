"use client";

import {
  Combobox as ComboboxPrimitive,
  useCombobox,
  useListCollection,
} from "@ark-ui/react/combobox";
import { useFilter } from "@ark-ui/react/locale";
import { BookUser, Check, Circle, CreditCard, Dot, Truck } from "lucide-react";
import type { ReactNode } from "react";
import { useEffect, useId, useState } from "react";
import { Button } from "@/components/ui/button";
import { Field, FieldDescription, FieldError } from "@/components/ui/field";
import {
  Splitter,
  SplitterContext,
  SplitterPanel,
  SplitterResizeTrigger,
  SplitterRootProvider,
  useSplitter,
} from "@/components/ui/splitter";
import {
  Steps,
  StepsCompletedContent,
  StepsContent,
  StepsContext,
  StepsDescription,
  StepsIndicator,
  StepsItem,
  StepsList,
  StepsNextTrigger,
  StepsPrevTrigger,
  StepsRootProvider,
  StepsSeparator,
  StepsTitle,
  StepsTrigger,
  useSteps,
} from "@/components/ui/steps";
import {
  Switch,
  SwitchContext,
  SwitchLabel,
  SwitchRoot,
  SwitchRootProvider,
  useSwitch,
} from "@/components/ui/switch";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsRootProvider,
  TabsTrigger,
  useTabs,
} from "@/components/ui/tabs";
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
  TagsInputRootProvider,
  useTagsInput,
} from "@/components/ui/tags-input";
import { cn } from "@/lib/utils";

const DemoCard = ({
  title,
  description,
  className,
  children,
}: {
  title: string;
  description?: string;
  className?: string;
  children: ReactNode;
}) => (
  <section
    className={cn(
      "flex flex-col gap-3 rounded-xl border border-border bg-card p-4 shadow-xs/5",
      className,
    )}
  >
    <div>
      <h3 className="font-semibold text-foreground text-sm">{title}</h3>
      {description ? (
        <p className="mt-0.5 text-muted-foreground text-xs">{description}</p>
      ) : null}
    </div>
    {children}
  </section>
);

const SplitterBasicDemo = () => (
  <div className="h-48 w-full">
    <Splitter defaultSize={[40, 60]} panels={[{ id: "a" }, { id: "b" }]}>
      <SplitterPanel className="p-4" id="a">
        <p className="text-muted-foreground text-sm">Panel A</p>
      </SplitterPanel>
      <SplitterResizeTrigger id="a:b" withHandle />
      <SplitterPanel className="p-4" id="b">
        <p className="text-muted-foreground text-sm">Panel B</p>
      </SplitterPanel>
    </Splitter>
  </div>
);

const SplitterVerticalDemo = () => (
  <div className="h-64 w-full">
    <Splitter
      defaultSize={[55, 45]}
      orientation="vertical"
      panels={[{ id: "top" }, { id: "bottom" }]}
    >
      <SplitterPanel className="p-4" id="top">
        <p className="text-muted-foreground text-sm">Top</p>
      </SplitterPanel>
      <SplitterResizeTrigger id="top:bottom" withHandle />
      <SplitterPanel className="p-4" id="bottom">
        <p className="text-muted-foreground text-sm">Bottom</p>
      </SplitterPanel>
    </Splitter>
  </div>
);

const SplitterCollapsiblePanelsDemo = () => (
  <div className="h-48 w-full">
    <Splitter
      defaultSize={[25, 75]}
      panels={[
        { id: "sidebar", collapsible: true, collapsedSize: 0, minSize: 15 },
        { id: "content", minSize: 30 },
      ]}
    >
      <SplitterPanel className="p-4" id="sidebar">
        <p className="text-muted-foreground text-sm">Collapsible sidebar</p>
      </SplitterPanel>
      <SplitterResizeTrigger id="sidebar:content" withHandle />
      <SplitterPanel className="p-4" id="content">
        <p className="text-muted-foreground text-sm">Content</p>
      </SplitterPanel>
    </Splitter>
  </div>
);

const SplitterMultiplePanelsDemo = () => (
  <div className="h-48 w-full">
    <Splitter
      defaultSize={[20, 50, 30]}
      panels={[
        { id: "nav", minSize: 12 },
        { id: "main", minSize: 30 },
        { id: "aside", collapsible: true, collapsedSize: 0, minSize: 15 },
      ]}
    >
      <SplitterPanel className="p-4" id="nav">
        <p className="text-muted-foreground text-sm">Nav</p>
      </SplitterPanel>
      <SplitterResizeTrigger id="nav:main" withHandle />
      <SplitterPanel className="p-4" id="main">
        <p className="text-muted-foreground text-sm">Main</p>
      </SplitterPanel>
      <SplitterResizeTrigger id="main:aside" withHandle />
      <SplitterPanel className="p-4" id="aside">
        <p className="text-muted-foreground text-sm">Aside (collapsible)</p>
      </SplitterPanel>
    </Splitter>
  </div>
);

const SplitterNestedDemo = () => (
  <div className="h-64 w-full">
    <Splitter defaultSize={[35, 65]} panels={[{ id: "left" }, { id: "right" }]}>
      <SplitterPanel className="p-4" id="left">
        <p className="text-muted-foreground text-sm">Left</p>
      </SplitterPanel>
      <SplitterResizeTrigger id="left:right" withHandle />
      <SplitterPanel className="p-0" id="right">
        <Splitter
          defaultSize={[60, 40]}
          orientation="vertical"
          panels={[{ id: "rtop" }, { id: "rbottom" }]}
          className="rounded-none"
        >
          <SplitterPanel className="p-4" id="rtop">
            <p className="text-muted-foreground text-sm">Right · Top</p>
          </SplitterPanel>
          <SplitterResizeTrigger id="rtop:rbottom" withHandle />
          <SplitterPanel className="p-4" id="rbottom">
            <p className="text-muted-foreground text-sm">Right · Bottom</p>
          </SplitterPanel>
        </Splitter>
      </SplitterPanel>
    </Splitter>
  </div>
);

const SplitterRootProviderDemo = () => {
  const api = useSplitter({
    defaultSize: [30, 70],
    panels: [
      { id: "sidebar", collapsible: true, collapsedSize: 0, minSize: 15 },
      { id: "content", minSize: 30 },
    ],
  });

  return (
    <div className="flex w-full flex-col gap-3">
      <div className="flex flex-wrap items-center gap-2">
        <Button
          onClick={() => api.collapsePanel("sidebar")}
          size="sm"
          type="button"
          variant="outline"
        >
          Collapse sidebar
        </Button>
        <Button
          onClick={() => api.expandPanel("sidebar")}
          size="sm"
          type="button"
          variant="outline"
        >
          Expand sidebar
        </Button>
        <Button
          onClick={() => api.resetSizes()}
          size="sm"
          type="button"
          variant="outline"
        >
          Reset
        </Button>
      </div>
      <div className="h-44 w-full">
        <SplitterRootProvider value={api}>
          <Splitter panels={[{ id: "sidebar" }, { id: "content" }]}>
            <SplitterPanel className="p-4" id="sidebar">
              <p className="text-muted-foreground text-sm">Sidebar</p>
            </SplitterPanel>
            <SplitterResizeTrigger id="sidebar:content" withHandle />
            <SplitterPanel className="p-4" id="content">
              <p className="text-muted-foreground text-sm">Content</p>
            </SplitterPanel>
          </Splitter>
        </SplitterRootProvider>
      </div>
    </div>
  );
};

const SplitterContextDemo = () => (
  <div className="flex w-full flex-col gap-3">
    <div className="h-44 w-full">
      <Splitter
        defaultSize={[50, 50]}
        panels={[{ id: "left" }, { id: "right" }]}
      >
        <SplitterPanel className="p-4" id="left">
          <SplitterContext>
            {(api) => (
              <p className="text-muted-foreground text-sm">
                Dragging:{" "}
                <span className="font-medium text-foreground">
                  {String(api.dragging)}
                </span>
              </p>
            )}
          </SplitterContext>
        </SplitterPanel>
        <SplitterResizeTrigger id="left:right" withHandle />
        <SplitterPanel className="p-4" id="right">
          <SplitterContext>
            {(api) => (
              <p className="text-muted-foreground text-sm">
                Sizes:{" "}
                <span className="font-medium text-foreground">
                  {api.getSizes().join(" / ")}
                </span>
              </p>
            )}
          </SplitterContext>
        </SplitterPanel>
      </Splitter>
    </div>
    <p className="text-muted-foreground text-xs">
      SplitterContext exposes the API (e.g. dragging + getSizes()) under the
      Root.
    </p>
  </div>
);

const SplitterDynamicCollapsibleDemo = () => {
  const api = useSplitter({
    defaultSize: [28, 72],
    panels: [
      { id: "sidebar", collapsible: true, collapsedSize: 0, minSize: 18 },
      { id: "content", minSize: 30 },
    ],
  });

  useEffect(() => {
    const mq = window.matchMedia("(max-width: 640px)");
    const sync = () => {
      if (mq.matches) api.collapsePanel("sidebar");
      else api.expandPanel("sidebar");
    };
    sync();
    mq.addEventListener("change", sync);
    return () => mq.removeEventListener("change", sync);
  }, [api]);

  return (
    <div className="flex w-full flex-col gap-3">
      <p className="text-muted-foreground text-xs">
        Resize the window below 640px wide to auto-collapse.
      </p>
      <div className="h-44 w-full">
        <SplitterRootProvider value={api}>
          <Splitter panels={[{ id: "sidebar" }, { id: "content" }]}>
            <SplitterPanel className="p-4" id="sidebar">
              <p className="text-muted-foreground text-sm">
                Responsive sidebar
              </p>
            </SplitterPanel>
            <SplitterResizeTrigger id="sidebar:content" withHandle />
            <SplitterPanel className="p-4" id="content">
              <p className="text-muted-foreground text-sm">Content</p>
            </SplitterPanel>
          </Splitter>
        </SplitterRootProvider>
      </div>
    </div>
  );
};

const SwitchBasicDemo = () => (
  <SwitchRoot>
    <Switch />
    <SwitchLabel>Label</SwitchLabel>
  </SwitchRoot>
);

const SwitchInitialCheckedDemo = () => (
  <SwitchRoot defaultChecked>
    <Switch />
    <SwitchLabel>Label</SwitchLabel>
  </SwitchRoot>
);

const SwitchDisabledDemo = () => (
  <SwitchRoot disabled>
    <Switch />
    <SwitchLabel>Label</SwitchLabel>
  </SwitchRoot>
);

const SwitchControlledDemo = () => {
  const [checked, setChecked] = useState(false);

  return (
    <SwitchRoot
      checked={checked}
      onCheckedChange={(e) => setChecked(e.checked)}
    >
      <Switch />
      <SwitchLabel>Label</SwitchLabel>
    </SwitchRoot>
  );
};

const SwitchContextDemo = () => (
  <SwitchRoot>
    <Switch />
    <SwitchContext>
      {(ctx) => (
        <SwitchLabel>
          Feature is {ctx.checked ? "enabled" : "disabled"}
        </SwitchLabel>
      )}
    </SwitchContext>
  </SwitchRoot>
);

const SwitchRootProviderDemo = () => {
  const api = useSwitch();

  return (
    <div className="flex flex-col items-start gap-3">
      <Button onClick={() => api.toggleChecked()} size="sm" variant="outline">
        Toggle
      </Button>

      <SwitchRootProvider
        value={api}
        className="inline-flex items-center gap-2"
      >
        <Switch />
        <SwitchLabel>Label</SwitchLabel>
      </SwitchRootProvider>
    </div>
  );
};

const SwitchWithFieldDemo = () => (
  <Field className="max-w-sm">
    <SwitchRoot>
      <Switch />
      <SwitchLabel>Label</SwitchLabel>
    </SwitchRoot>
    <FieldDescription>Additional Info</FieldDescription>
    <FieldError>Error Info</FieldError>
  </Field>
);

const SwitchCardStyleDemo = () => (
  <SwitchRoot
    className={cn(
      "w-full max-w-sm items-start justify-between gap-6 rounded-lg border border-border p-3",
      "hover:bg-accent/40",
      "has-data-[state=checked]:border-primary/50 has-data-[state=checked]:bg-accent/40",
    )}
  >
    <div className="flex flex-col gap-1">
      <SwitchLabel className="font-medium">Enable notifications</SwitchLabel>
      <span className="text-muted-foreground text-xs">
        You can enable or disable notifications at any time.
      </span>
    </div>
    <Switch className="mt-0.5" />
  </SwitchRoot>
);

const SwitchNestedDemo = () => (
  <div className="flex w-full max-w-sm flex-col gap-3 rounded-lg border border-border p-3">
    <SwitchRoot className="justify-between">
      <SwitchLabel className="font-medium">Notifications</SwitchLabel>
      <Switch />
    </SwitchRoot>
    <div className="ms-3 border-border border-s ps-3">
      <SwitchRoot className="justify-between">
        <SwitchLabel className="text-sm text-muted-foreground">
          Email updates
        </SwitchLabel>
        <Switch />
      </SwitchRoot>
    </div>
  </div>
);

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

const TagsInputBasicDemo = () => (
  <TagsInput>
    <TagsInputScaffold />
    <TagsInputHiddenInput />
  </TagsInput>
);

const TagsInputAllowDuplicatesDemo = () => (
  <TagsInput allowDuplicates>
    <TagsInputScaffold />
    <TagsInputHiddenInput />
  </TagsInput>
);

const TagsInputBlurBehaviorDemo = () => (
  <TagsInput blurBehavior="add">
    <TagsInputScaffold />
    <TagsInputHiddenInput />
  </TagsInput>
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

const TAG_DELIMITER = /[,;\s]/;
const TagsInputDelimiterDemo = () => (
  <TagsInput delimiter={TAG_DELIMITER}>
    <TagsInputScaffold placeholder="comma, semicolon or space" />
    <TagsInputHiddenInput />
  </TagsInput>
);

const TagsInputDisabledDemo = () => (
  <TagsInput defaultValue={["React", "Solid", "Vue"]} disabled>
    <TagsInputScaffold />
    <TagsInputHiddenInput />
  </TagsInput>
);

const TagsInputDisabledEditingDemo = () => (
  <TagsInput editable={false}>
    <TagsInputScaffold />
    <TagsInputHiddenInput />
  </TagsInput>
);

const TagsInputInvalidDemo = () => (
  <TagsInput invalid>
    <TagsInputScaffold />
    <TagsInputHiddenInput />
  </TagsInput>
);

const TagsInputMaxTagLengthDemo = () => (
  <TagsInput maxLength={10}>
    <TagsInputScaffold label="Frameworks (max 10 chars)" />
    <TagsInputHiddenInput />
  </TagsInput>
);

const TagsInputMaxWithOverflowDemo = () => (
  <TagsInput allowOverflow max={3}>
    <TagsInputScaffold />
    <TagsInputHiddenInput />
  </TagsInput>
);

const TagsInputPasteBehaviorDemo = () => (
  <TagsInput addOnPaste delimiter=",">
    <TagsInputScaffold />
    <TagsInputHiddenInput />
  </TagsInput>
);

const TagsInputReadonlyDemo = () => (
  <TagsInput defaultValue={["React", "Solid", "Vue"]} readOnly>
    <TagsInputScaffold />
    <TagsInputHiddenInput />
  </TagsInput>
);

const TagsInputSanitizeDemo = () => {
  const [value, setValue] = useState<string[]>([]);
  return (
    <TagsInput
      value={value}
      onValueChange={(d) =>
        setValue(d.value.map((item) => item.trim().toLowerCase()))
      }
    >
      <TagsInputScaffold label="Email addresses" placeholder="Add email" />
      <TagsInputHiddenInput />
    </TagsInput>
  );
};

const VALID_TAG_PATTERN = /^[a-zA-Z0-9-]+$/;
const TagsInputValidationDemo = () => (
  <TagsInput
    validate={({ value, inputValue }) =>
      Boolean(inputValue?.trim()) &&
      !value.includes(inputValue) &&
      inputValue.length >= 3 &&
      VALID_TAG_PATTERN.test(inputValue)
    }
  >
    <TagsInputScaffold label="Min 3 chars, alphanumeric + hyphen" />
    <TagsInputHiddenInput />
  </TagsInput>
);

const TagsInputProgrammaticControlDemo = () => {
  const api = useTagsInput();
  return (
    <div className="flex flex-col gap-2">
      <div className="flex flex-wrap gap-2">
        <Button
          onClick={() => api.addValue("React")}
          size="sm"
          variant="outline"
        >
          Add React
        </Button>
        <Button
          onClick={() => api.addValue("Solid")}
          size="sm"
          variant="outline"
        >
          Add Solid
        </Button>
        <Button
          onClick={() => api.setValue(["Vue", "Svelte"])}
          size="sm"
          variant="outline"
        >
          Set Vue + Svelte
        </Button>
        <Button onClick={() => api.clearValue()} size="sm" variant="outline">
          Clear all
        </Button>
      </div>
      <TagsInputRootProvider value={api}>
        <TagsInputScaffold />
        <TagsInputHiddenInput />
      </TagsInputRootProvider>
    </div>
  );
};

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

const TagsInputWithFieldDemo = () => (
  <Field className="max-w-md">
    <TagsInput>
      <TagsInputScaffold />
      <TagsInputHiddenInput />
    </TagsInput>
    <FieldDescription>Additional info</FieldDescription>
    <FieldError>Error info</FieldError>
  </Field>
);

const TagsInputNestedDemo = () => (
  <div className="flex w-full max-w-xl flex-col gap-3 rounded-lg border border-border p-3">
    <TagsInput defaultValue={["frontend", "ui"]}>
      <TagsInputScaffold label="Parent tags" />
      <TagsInputHiddenInput />
    </TagsInput>
    <div className="ms-3 border-border border-s ps-3">
      <TagsInput defaultValue={["react"]}>
        <TagsInputScaffold label="Nested tags" />
        <TagsInputHiddenInput />
      </TagsInput>
    </div>
  </div>
);

const TagsInputWithComboboxDemo = () => {
  const uid = useId();
  const { contains } = useFilter({ sensitivity: "base" });
  const { collection, filter } = useListCollection({
    initialItems: [
      "React",
      "Solid",
      "Vue",
      "Svelte",
      "Angular",
      "Preact",
      "Next.js",
      "Astro",
    ],
    filter: contains,
  });
  const tagsApi = useTagsInput({
    ids: { input: `tags-input-${uid}`, control: `tags-control-${uid}` },
  });
  const comboboxApi = useCombobox({
    ids: { input: `tags-input-${uid}`, control: `tags-control-${uid}` },
    collection,
    value: [],
    allowCustomValue: true,
    selectionBehavior: "clear",
    onInputValueChange: (details) => filter(details.inputValue),
    onValueChange: (details) => {
      if (details.value[0]) tagsApi.addValue(details.value[0]);
    },
  });

  return (
    <ComboboxPrimitive.RootProvider value={comboboxApi}>
      <TagsInputRootProvider value={tagsApi}>
        <TagsInputLabel>Frameworks</TagsInputLabel>
        <TagsInputContext>
          {(api) => (
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
              <ComboboxPrimitive.Input asChild>
                <TagsInputInput placeholder="Search framework" />
              </ComboboxPrimitive.Input>
              <TagsInputClearTrigger />
            </TagsInputControl>
          )}
        </TagsInputContext>
        <TagsInputHiddenInput />
      </TagsInputRootProvider>
      <ComboboxPrimitive.Positioner>
        <ComboboxPrimitive.Content className="z-50 mt-1 max-h-56 min-w-(--reference-width) overflow-auto rounded-md border border-border bg-popover p-1 shadow-md">
          <ComboboxPrimitive.Empty className="px-2 py-1.5 text-muted-foreground text-sm">
            No frameworks found
          </ComboboxPrimitive.Empty>
          {collection.items.map((item) => (
            <ComboboxPrimitive.Item
              key={item}
              item={item}
              className="flex cursor-pointer items-center justify-between rounded-sm px-2 py-1.5 text-sm data-highlighted:bg-accent"
            >
              <ComboboxPrimitive.ItemText>{item}</ComboboxPrimitive.ItemText>
              <ComboboxPrimitive.ItemIndicator>
                <Check className="size-4" />
              </ComboboxPrimitive.ItemIndicator>
            </ComboboxPrimitive.Item>
          ))}
        </ComboboxPrimitive.Content>
      </ComboboxPrimitive.Positioner>
    </ComboboxPrimitive.RootProvider>
  );
};

const TabsBasicDemo = () => (
  <Tabs defaultValue="account" variant="default">
    <TabsList>
      <TabsTrigger value="account">Account</TabsTrigger>
      <TabsTrigger value="password">Password</TabsTrigger>
      <TabsTrigger value="billing">Billing</TabsTrigger>
    </TabsList>
    <TabsContent value="account">
      <div className="text-muted-foreground text-sm">
        Make changes to your account here.
      </div>
    </TabsContent>
    <TabsContent value="password">
      <div className="text-muted-foreground text-sm">
        Change your password here.
      </div>
    </TabsContent>
    <TabsContent value="billing">
      <div className="text-muted-foreground text-sm">
        Manage your billing and payment details.
      </div>
    </TabsContent>
  </Tabs>
);

const TabsUnderlineVerticalDemo = () => (
  <Tabs defaultValue="account" variant="underline" orientation="vertical">
    <TabsList className="w-full justify-start">
      <TabsTrigger value="account">Account</TabsTrigger>
      <TabsTrigger value="password">Password</TabsTrigger>
      <TabsTrigger value="billing">Billing</TabsTrigger>
    </TabsList>
    <TabsContent value="account">
      <div className="text-muted-foreground text-sm">
        Underline variant uses a sliding indicator bar.
      </div>
    </TabsContent>
    <TabsContent value="password">
      <div className="text-muted-foreground text-sm">
        Keyboard: Arrow keys move focus, Enter selects in manual mode.
      </div>
    </TabsContent>
    <TabsContent value="billing">
      <div className="text-muted-foreground text-sm">
        Supports vertical orientation too.
      </div>
    </TabsContent>
  </Tabs>
);

const TabsControlledDemo = () => {
  const [value, setValue] = useState<string | null>("account");

  return (
    <Tabs
      value={value}
      onValueChange={(e) => setValue(e.value)}
      variant="default"
    >
      <div className="flex flex-wrap items-center gap-2">
        <Button
          size="sm"
          type="button"
          variant="outline"
          onClick={() => setValue("account")}
        >
          Select Account
        </Button>
        <Button
          size="sm"
          type="button"
          variant="outline"
          onClick={() => setValue("password")}
        >
          Select Password
        </Button>
        <Button
          size="sm"
          type="button"
          variant="outline"
          onClick={() => setValue("billing")}
        >
          Select Billing
        </Button>
        <div className="text-muted-foreground text-xs">
          current: <span className="font-medium text-foreground">{value}</span>
        </div>
      </div>
      <TabsList>
        <TabsTrigger value="account">Account</TabsTrigger>
        <TabsTrigger value="password">Password</TabsTrigger>
        <TabsTrigger value="billing">Billing</TabsTrigger>
      </TabsList>
      <TabsContent value="account">
        <div className="text-muted-foreground text-sm">
          Controlled: manage <code className="text-foreground">value</code> +{" "}
          <code className="text-foreground">onValueChange</code>.
        </div>
      </TabsContent>
      <TabsContent value="password">
        <div className="text-muted-foreground text-sm">
          Tabs can be <span className="text-foreground">deselectable</span> too.
        </div>
      </TabsContent>
      <TabsContent value="billing">
        <div className="text-muted-foreground text-sm">
          Indicator animation is driven by Ark CSS vars.
        </div>
      </TabsContent>
    </Tabs>
  );
};

const TabsDisabledDemo = () => (
  <Tabs defaultValue="account" variant="default">
    <TabsList>
      <TabsTrigger value="account">Account</TabsTrigger>
      <TabsTrigger disabled value="password">
        Password (disabled)
      </TabsTrigger>
      <TabsTrigger value="billing">Billing</TabsTrigger>
    </TabsList>
    <TabsContent value="account">
      <div className="text-muted-foreground text-sm">
        Disabled triggers get{" "}
        <code className="text-foreground">data-disabled</code>.
      </div>
    </TabsContent>
    <TabsContent value="password">
      <div className="text-muted-foreground text-sm">
        This should never activate.
      </div>
    </TabsContent>
    <TabsContent value="billing">
      <div className="text-muted-foreground text-sm">
        Focusable + accessible by default.
      </div>
    </TabsContent>
  </Tabs>
);

const TabsVerticalDemo = () => (
  <Tabs defaultValue="account" orientation="vertical" variant="default">
    <TabsList className="w-56">
      <TabsTrigger value="account">Account</TabsTrigger>
      <TabsTrigger value="password">Password</TabsTrigger>
      <TabsTrigger value="billing">Billing</TabsTrigger>
    </TabsList>
    <TabsContent value="account">
      <div className="text-muted-foreground text-sm">
        Vertical orientation changes arrow-key navigation (Up/Down).
      </div>
    </TabsContent>
    <TabsContent value="password">
      <div className="text-muted-foreground text-sm">
        Triggers stretch to full width.
      </div>
    </TabsContent>
    <TabsContent value="billing">
      <div className="text-muted-foreground text-sm">
        Content shifts to the right.
      </div>
    </TabsContent>
  </Tabs>
);

const TabsLazyMountDemo = () => (
  <Tabs defaultValue="account" lazyMount unmountOnExit variant="underline">
    <TabsList className="w-full justify-start">
      <TabsTrigger value="account">Account</TabsTrigger>
      <TabsTrigger value="password">Password</TabsTrigger>
      <TabsTrigger value="billing">Billing</TabsTrigger>
    </TabsList>
    <TabsContent value="account">
      <div className="text-muted-foreground text-sm">Lazy mounted content.</div>
    </TabsContent>
    <TabsContent value="password">
      <div className="text-muted-foreground text-sm">
        Unmounted when you switch away.
      </div>
    </TabsContent>
    <TabsContent value="billing">
      <div className="text-muted-foreground text-sm">
        Mounted again when revisited.
      </div>
    </TabsContent>
  </Tabs>
);

const TabsManualActivationDemo = () => (
  <Tabs activationMode="manual" defaultValue="account" variant="default">
    <TabsList>
      <TabsTrigger value="account">Account</TabsTrigger>
      <TabsTrigger value="password">Password</TabsTrigger>
      <TabsTrigger value="billing">Billing</TabsTrigger>
    </TabsList>
    <TabsContent value="account">
      <div className="text-muted-foreground text-sm">
        Manual activation: focus doesn’t select until Enter/Space.
      </div>
    </TabsContent>
    <TabsContent value="password">
      <div className="text-muted-foreground text-sm">
        Try moving focus with arrow keys first.
      </div>
    </TabsContent>
    <TabsContent value="billing">
      <div className="text-muted-foreground text-sm">
        Then press Enter to select.
      </div>
    </TabsContent>
  </Tabs>
);

const TabsLinksDemo = () => (
  <Tabs defaultValue="account" variant="underline">
    <TabsList className="w-full justify-start">
      <TabsTrigger asChild value="account">
        <a className="no-underline" href="#account">
          Account
        </a>
      </TabsTrigger>
      <TabsTrigger asChild value="password">
        <a className="no-underline" href="#password">
          Password
        </a>
      </TabsTrigger>
      <TabsTrigger asChild value="billing">
        <a className="no-underline" href="#billing">
          Billing
        </a>
      </TabsTrigger>
    </TabsList>
    <TabsContent value="account">
      <div className="text-muted-foreground text-sm">
        Triggers can render as links with{" "}
        <code className="text-foreground">asChild</code>.
      </div>
    </TabsContent>
    <TabsContent value="password">
      <div className="text-muted-foreground text-sm">
        Useful for router integration + SEO patterns.
      </div>
    </TabsContent>
    <TabsContent value="billing">
      <div className="text-muted-foreground text-sm">
        You can also use the Ark navigate API.
      </div>
    </TabsContent>
  </Tabs>
);

const TabsRootProviderDemo = () => {
  const api = useTabs({ defaultValue: "account" });

  return (
    <div className="flex w-full flex-col gap-3">
      <div className="text-muted-foreground text-xs">
        selected:{" "}
        <span className="font-medium text-foreground">{api.value}</span>
      </div>
      <TabsRootProvider value={api} variant="default">
        <TabsList>
          <TabsTrigger value="account">Account</TabsTrigger>
          <TabsTrigger value="password">Password</TabsTrigger>
          <TabsTrigger value="billing">Billing</TabsTrigger>
        </TabsList>
        <TabsContent value="account">
          <div className="text-muted-foreground text-sm">
            RootProvider: control from outside via{" "}
            <code className="text-foreground">useTabs</code>.
          </div>
        </TabsContent>
        <TabsContent value="password">
          <div className="text-muted-foreground text-sm">
            Expose state anywhere you need.
          </div>
        </TabsContent>
        <TabsContent value="billing">
          <div className="text-muted-foreground text-sm">
            No prop drilling required.
          </div>
        </TabsContent>
      </TabsRootProvider>
    </div>
  );
};

const TabsNestedDemo = () => (
  <Tabs defaultValue="one" variant="underline">
    <TabsList className="w-full justify-start">
      <TabsTrigger value="one">Outer · One</TabsTrigger>
      <TabsTrigger value="two">Outer · Two</TabsTrigger>
    </TabsList>
    <TabsContent value="one">
      <div className="flex flex-col gap-3">
        <div className="text-muted-foreground text-sm">
          Nested tabs inside tab content.
        </div>
        <Tabs defaultValue="a" variant="default">
          <TabsList>
            <TabsTrigger value="a">Inner A</TabsTrigger>
            <TabsTrigger value="b">Inner B</TabsTrigger>
            <TabsTrigger value="c">Inner C</TabsTrigger>
          </TabsList>
          <TabsContent value="a">
            <div className="text-muted-foreground text-sm">Inner content A</div>
          </TabsContent>
          <TabsContent value="b">
            <div className="text-muted-foreground text-sm">Inner content B</div>
          </TabsContent>
          <TabsContent value="c">
            <div className="text-muted-foreground text-sm">Inner content C</div>
          </TabsContent>
        </Tabs>
      </div>
    </TabsContent>
    <TabsContent value="two">
      <div className="text-muted-foreground text-sm">
        Outer tab two content.
      </div>
    </TabsContent>
  </Tabs>
);

const STEP_ITEMS = [
  { title: "First", description: "Contact Info" },
  { title: "Second", description: "Date & Time" },
  { title: "Third", description: "Select Rooms" },
];

const TIMELINE_ITEMS = [
  {
    title: "Order Placed",
    description: "Your order has been successfully placed",
  },
  {
    title: "Processing",
    description: "We're preparing your items for shipment",
  },
  { title: "Shipped", description: "Your order is on its way to you" },
  { title: "Delivered", description: "Order delivered to your address" },
];

const FORM_STEPS = [
  { title: "Account Setup", description: "Create your account" },
  { title: "Profile Info", description: "Complete your profile" },
  { title: "Review", description: "Review your information" },
];

const PERSONAL_STEPS = [
  { title: "Personal Details", description: "Enter your basic information" },
  { title: "About You", description: "Tell us more about yourself" },
  { title: "Professional Info", description: "Add your professional details" },
];

const CENTERED_STEPS: {
  title: string;
  description: string;
  icon?: typeof BookUser;
}[] = [
  { title: "Address", description: "Add your address", icon: BookUser },
  { title: "Shipping", description: "Set your preferred", icon: Truck },
  { title: "Payment", description: "Add any payment", icon: CreditCard },
  { title: "Checkout", description: "Confirm your order" },
];

const DETAILS_STEPS = [
  {
    title: "Your details",
    description:
      "Provide your name and email address. We will use this information to create your account",
  },
  {
    title: "Company details",
    description:
      "A few details about your company will help us personalize your experience",
  },
  {
    title: "Invite your team",
    description:
      "Start collaborating with your team by inviting them to join your account. You can skip this step and invite them later",
  },
];

const CENTERED_FORM_STEPS = [
  { title: "Your details", description: "Provide your name and email" },
  { title: "Your password", description: "Choose a password" },
  { title: "Your Favorite Drink", description: "Choose a drink" },
];

const StepsBasicDemo = () => (
  <Steps count={STEP_ITEMS.length}>
    <StepsContext>
      {(api) => (
        <>
          <StepsList>
            {STEP_ITEMS.map((item, index) => {
              const state = api.getItemState({ index });
              return (
                <StepsItem key={item.title} index={index}>
                  <StepsTrigger>
                    <StepsIndicator>
                      {state.completed ? (
                        <Check className="size-4" />
                      ) : (
                        index + 1
                      )}
                    </StepsIndicator>
                    <div className="flex flex-col">
                      <StepsTitle>{item.title}</StepsTitle>
                      <StepsDescription>{item.description}</StepsDescription>
                    </div>
                  </StepsTrigger>
                  <StepsSeparator />
                </StepsItem>
              );
            })}
          </StepsList>

          {STEP_ITEMS.map((item, index) => (
            <StepsContent key={item.title} index={index}>
              <p className="text-muted-foreground">
                {item.title} &ndash; {item.description}
              </p>
            </StepsContent>
          ))}

          <StepsCompletedContent>
            Steps Complete &mdash; Thank you for filling out the form!
          </StepsCompletedContent>

          <div className="flex items-center justify-between">
            <StepsPrevTrigger asChild>
              <Button variant="outline" size="sm">
                Previous
              </Button>
            </StepsPrevTrigger>
            <span className="text-muted-foreground text-sm">
              Step {api.value + 1} of {api.count}
            </span>
            <StepsNextTrigger asChild>
              <Button size="sm">Next</Button>
            </StepsNextTrigger>
          </div>
        </>
      )}
    </StepsContext>
  </Steps>
);

const StepsControlledDemo = () => {
  const [step, setStep] = useState(0);

  return (
    <Steps
      count={STEP_ITEMS.length}
      step={step}
      onStepChange={(d) => setStep(d.step)}
    >
      <StepsContext>
        {(api) => (
          <>
            <StepsList>
              {STEP_ITEMS.map((item, index) => {
                const state = api.getItemState({ index });
                return (
                  <StepsItem key={item.title} index={index}>
                    <StepsTrigger>
                      <StepsIndicator>
                        {state.completed ? (
                          <Check className="size-4" />
                        ) : (
                          index + 1
                        )}
                      </StepsIndicator>
                      <div className="flex flex-col">
                        <StepsTitle>{item.title}</StepsTitle>
                        <StepsDescription>{item.description}</StepsDescription>
                      </div>
                    </StepsTrigger>
                    <StepsSeparator />
                  </StepsItem>
                );
              })}
            </StepsList>

            {STEP_ITEMS.map((item, index) => (
              <StepsContent key={item.title} index={index}>
                <p className="text-muted-foreground">
                  {item.title} &ndash; {item.description}
                </p>
              </StepsContent>
            ))}

            <StepsCompletedContent>
              Steps Complete &mdash; Thank you!
            </StepsCompletedContent>

            <div className="flex items-center justify-between">
              <StepsPrevTrigger asChild>
                <Button variant="outline" size="sm">
                  Previous
                </Button>
              </StepsPrevTrigger>
              <span className="text-muted-foreground text-sm">
                Step {api.value + 1} of {api.count}
              </span>
              <StepsNextTrigger asChild>
                <Button size="sm">Next</Button>
              </StepsNextTrigger>
            </div>
          </>
        )}
      </StepsContext>
    </Steps>
  );
};

const StepsRootProviderDemo = () => {
  const api = useSteps({ count: STEP_ITEMS.length });

  return (
    <div className="flex flex-col gap-3">
      <div className="flex flex-wrap items-center gap-2">
        <Button onClick={() => api.goToPrevStep()} size="sm" variant="outline">
          Prev
        </Button>
        <Button onClick={() => api.goToNextStep()} size="sm" variant="outline">
          Next
        </Button>
        <Button onClick={() => api.resetStep()} size="sm" variant="outline">
          Reset
        </Button>
        <span className="text-muted-foreground text-xs">
          step:{" "}
          <span className="font-medium text-foreground">{api.value + 1}</span>
        </span>
      </div>
      <StepsRootProvider value={api}>
        <StepsContext>
          {(ctxApi) => (
            <>
              <StepsList>
                {STEP_ITEMS.map((item, index) => {
                  const state = ctxApi.getItemState({ index });
                  return (
                    <StepsItem key={item.title} index={index}>
                      <StepsTrigger>
                        <StepsIndicator>
                          {state.completed ? (
                            <Check className="size-4" />
                          ) : (
                            index + 1
                          )}
                        </StepsIndicator>
                        <StepsTitle>{item.title}</StepsTitle>
                      </StepsTrigger>
                      <StepsSeparator />
                    </StepsItem>
                  );
                })}
              </StepsList>

              {STEP_ITEMS.map((item, index) => (
                <StepsContent key={item.title} index={index}>
                  <p className="text-muted-foreground">
                    {item.title} &ndash; {item.description}
                  </p>
                </StepsContent>
              ))}

              <StepsCompletedContent>All done!</StepsCompletedContent>
            </>
          )}
        </StepsContext>
      </StepsRootProvider>
    </div>
  );
};

const StepsVerticalDemo = () => (
  <Steps count={TIMELINE_ITEMS.length} defaultStep={2} orientation="vertical">
    <StepsContext>
      {(api) => (
        <>
          <StepsList>
            {TIMELINE_ITEMS.map((item, index) => {
              const state = api.getItemState({ index });
              return (
                <StepsItem key={item.title} index={index}>
                  <StepsTrigger>
                    <StepsIndicator>
                      {state.completed ? (
                        <Check className="size-4" />
                      ) : (
                        index + 1
                      )}
                    </StepsIndicator>
                    <div className="flex flex-col">
                      <StepsTitle>{item.title}</StepsTitle>
                      <StepsDescription>{item.description}</StepsDescription>
                    </div>
                  </StepsTrigger>
                  <StepsSeparator />
                </StepsItem>
              );
            })}
          </StepsList>

          {TIMELINE_ITEMS.map((item, index) => (
            <StepsContent key={item.title} index={index}>
              <div className="flex flex-col gap-2">
                <h4 className="font-semibold text-foreground">{item.title}</h4>
                <p className="text-muted-foreground text-sm">
                  {item.description}
                </p>
                <p className="text-muted-foreground text-sm">
                  This is the content for {item.title}. You can add forms,
                  information, or any other content here.
                </p>
              </div>
            </StepsContent>
          ))}

          <StepsCompletedContent>All steps complete!</StepsCompletedContent>
        </>
      )}
    </StepsContext>
  </Steps>
);

const StepsFormWizardDemo = () => (
  <Steps count={FORM_STEPS.length}>
    <StepsContext>
      {(api) => (
        <>
          <StepsList>
            {FORM_STEPS.map((item, index) => {
              const state = api.getItemState({ index });
              return (
                <StepsItem key={item.title} index={index}>
                  <StepsTrigger>
                    <StepsIndicator>
                      {state.completed ? (
                        <Check className="size-4" />
                      ) : (
                        index + 1
                      )}
                    </StepsIndicator>
                    <div className="flex flex-col">
                      <StepsTitle>{item.title}</StepsTitle>
                      <StepsDescription>{item.description}</StepsDescription>
                    </div>
                  </StepsTrigger>
                  <StepsSeparator />
                </StepsItem>
              );
            })}
          </StepsList>

          <StepsContent index={0}>
            <div className="flex flex-col gap-4">
              <div className="flex flex-col gap-1.5">
                <label className="font-medium text-sm">Username</label>
                <input
                  className="h-9 rounded-md border border-input bg-transparent px-3 text-sm outline-none focus-visible:ring-2 focus-visible:ring-ring"
                  placeholder="Enter username"
                />
              </div>
              <div className="flex flex-col gap-1.5">
                <label className="font-medium text-sm">Email</label>
                <input
                  className="h-9 rounded-md border border-input bg-transparent px-3 text-sm outline-none focus-visible:ring-2 focus-visible:ring-ring"
                  placeholder="Enter email"
                  type="email"
                />
              </div>
            </div>
          </StepsContent>

          <StepsContent index={1}>
            <div className="flex flex-col gap-4">
              <div className="flex flex-col gap-1.5">
                <label className="font-medium text-sm">Bio</label>
                <textarea
                  className="min-h-20 rounded-md border border-input bg-transparent px-3 py-2 text-sm outline-none focus-visible:ring-2 focus-visible:ring-ring"
                  placeholder="Tell us about yourself"
                />
              </div>
            </div>
          </StepsContent>

          <StepsContent index={2}>
            <p className="text-muted-foreground">
              Review your information before submitting.
            </p>
          </StepsContent>

          <StepsCompletedContent>
            Account created successfully!
          </StepsCompletedContent>

          <div className="flex items-center justify-between">
            <StepsPrevTrigger asChild>
              <Button variant="outline" size="sm">
                Previous
              </Button>
            </StepsPrevTrigger>
            <span className="text-muted-foreground text-sm">
              Step {api.value + 1} of {api.count}
            </span>
            <StepsNextTrigger asChild>
              <Button size="sm">Next</Button>
            </StepsNextTrigger>
          </div>
        </>
      )}
    </StepsContext>
  </Steps>
);

const StepsPersonalFormDemo = () => (
  <Steps count={PERSONAL_STEPS.length}>
    <StepsContext>
      {(api) => (
        <>
          <StepsList>
            {PERSONAL_STEPS.map((item, index) => {
              const state = api.getItemState({ index });
              return (
                <StepsItem key={item.title} index={index}>
                  <StepsTrigger>
                    <StepsIndicator>
                      {state.completed ? (
                        <Check className="size-4" />
                      ) : (
                        index + 1
                      )}
                    </StepsIndicator>
                    <div className="flex flex-col">
                      <StepsTitle>{item.title}</StepsTitle>
                      <StepsDescription>{item.description}</StepsDescription>
                    </div>
                  </StepsTrigger>
                  <StepsSeparator />
                </StepsItem>
              );
            })}
          </StepsList>

          <StepsContent index={0}>
            <div className="flex flex-col gap-4">
              <div className="grid grid-cols-2 gap-4">
                <div className="flex flex-col gap-1.5">
                  <label className="font-medium text-sm">First Name</label>
                  <input
                    className="h-9 rounded-md border border-input bg-transparent px-3 text-sm outline-none focus-visible:ring-2 focus-visible:ring-ring"
                    defaultValue="John"
                  />
                </div>
                <div className="flex flex-col gap-1.5">
                  <label className="font-medium text-sm">Last Name</label>
                  <input
                    className="h-9 rounded-md border border-input bg-transparent px-3 text-sm outline-none focus-visible:ring-2 focus-visible:ring-ring"
                    defaultValue="Doe"
                  />
                </div>
              </div>
              <div className="flex flex-col gap-1.5">
                <label className="font-medium text-sm">Email</label>
                <input
                  className="h-9 rounded-md border border-input bg-transparent px-3 text-sm outline-none focus-visible:ring-2 focus-visible:ring-ring"
                  defaultValue="john.doe@example.com"
                  type="email"
                />
              </div>
            </div>
          </StepsContent>

          <StepsContent index={1}>
            <div className="flex flex-col gap-4">
              <div className="flex flex-col gap-1.5">
                <label className="font-medium text-sm">Bio</label>
                <textarea
                  className="min-h-20 rounded-md border border-input bg-transparent px-3 py-2 text-sm outline-none focus-visible:ring-2 focus-visible:ring-ring"
                  placeholder="Tell us more about yourself"
                />
              </div>
            </div>
          </StepsContent>

          <StepsContent index={2}>
            <div className="flex flex-col gap-4">
              <div className="flex flex-col gap-1.5">
                <label className="font-medium text-sm">Specialization</label>
                <input
                  className="h-9 rounded-md border border-input bg-transparent px-3 text-sm outline-none focus-visible:ring-2 focus-visible:ring-ring"
                  placeholder="e.g. Frontend, Backend"
                />
              </div>
            </div>
          </StepsContent>

          <StepsCompletedContent>
            Profile complete &mdash; Welcome aboard!
          </StepsCompletedContent>

          <div className="flex items-center justify-between">
            <StepsPrevTrigger asChild>
              <Button variant="outline" size="sm">
                Previous
              </Button>
            </StepsPrevTrigger>
            <span className="text-muted-foreground text-sm">
              Step {api.value + 1} of {api.count}
            </span>
            <StepsNextTrigger asChild>
              <Button size="sm">Next</Button>
            </StepsNextTrigger>
          </div>
        </>
      )}
    </StepsContext>
  </Steps>
);

const StepsContextDemo = () => (
  <Steps count={STEP_ITEMS.length}>
    <StepsContext>
      {(api) => (
        <>
          <StepsList>
            {STEP_ITEMS.map((item, index) => {
              const state = api.getItemState({ index });
              return (
                <StepsItem key={item.title} index={index}>
                  <StepsTrigger>
                    <StepsIndicator>
                      {state.completed ? (
                        <Check className="size-4" />
                      ) : (
                        index + 1
                      )}
                    </StepsIndicator>
                    <StepsTitle>{item.title}</StepsTitle>
                  </StepsTrigger>
                  <StepsSeparator />
                </StepsItem>
              );
            })}
          </StepsList>

          {STEP_ITEMS.map((item, index) => (
            <StepsContent key={item.title} index={index}>
              <p className="text-muted-foreground">
                {item.title} &ndash; {item.description}
              </p>
            </StepsContent>
          ))}

          <StepsCompletedContent>All done!</StepsCompletedContent>

          <div className="flex items-center justify-between gap-2">
            <span className="text-muted-foreground text-xs">
              Progress:{" "}
              <span className="font-medium text-foreground">
                {api.percent.toFixed(0)}%
              </span>{" "}
              &middot; completed:{" "}
              <span className="font-medium text-foreground">
                {String(api.isCompleted)}
              </span>
            </span>
            <div className="flex gap-2">
              <StepsPrevTrigger asChild>
                <Button variant="outline" size="sm">
                  Back
                </Button>
              </StepsPrevTrigger>
              <StepsNextTrigger asChild>
                <Button size="sm">Next</Button>
              </StepsNextTrigger>
            </div>
          </div>
        </>
      )}
    </StepsContext>
  </Steps>
);

const StepsLinearDemo = () => {
  const [invalidStep, setInvalidStep] = useState<number | null>(null);

  return (
    <div className="flex flex-col gap-3">
      {invalidStep !== null && (
        <div className="rounded-md border border-destructive/50 bg-destructive/10 px-3 py-2 text-destructive text-xs">
          Step {invalidStep + 1} is invalid &mdash; complete it before moving
          forward.
        </div>
      )}
      <Steps
        count={STEP_ITEMS.length}
        linear
        isStepValid={(index) => index !== 1}
        onStepInvalid={(d) => setInvalidStep(d.step)}
        onStepChange={() => setInvalidStep(null)}
      >
        <StepsContext>
          {(api) => (
            <>
              <StepsList>
                {STEP_ITEMS.map((item, index) => {
                  const state = api.getItemState({ index });
                  return (
                    <StepsItem key={item.title} index={index}>
                      <StepsTrigger>
                        <StepsIndicator>
                          {state.completed ? (
                            <Check className="size-4" />
                          ) : (
                            index + 1
                          )}
                        </StepsIndicator>
                        <div className="flex flex-col">
                          <StepsTitle>{item.title}</StepsTitle>
                          <StepsDescription>
                            {item.description}
                          </StepsDescription>
                        </div>
                      </StepsTrigger>
                      <StepsSeparator />
                    </StepsItem>
                  );
                })}
              </StepsList>

              {STEP_ITEMS.map((item, index) => (
                <StepsContent key={item.title} index={index}>
                  <p className="text-muted-foreground">
                    {item.title} &ndash; {item.description}
                  </p>
                </StepsContent>
              ))}

              <StepsCompletedContent>All done!</StepsCompletedContent>

              <div className="flex items-center justify-between">
                <StepsPrevTrigger asChild>
                  <Button variant="outline" size="sm">
                    Previous
                  </Button>
                </StepsPrevTrigger>
                <span className="text-muted-foreground text-sm">
                  Step {api.value + 1} of {api.count}
                </span>
                <StepsNextTrigger asChild>
                  <Button size="sm">Next</Button>
                </StepsNextTrigger>
              </div>
            </>
          )}
        </StepsContext>
      </Steps>
    </div>
  );
};

const StepsNestedDemo = () => (
  <Steps count={2}>
    <StepsContext>
      {(api) => (
        <>
          <StepsList>
            {["Outer A", "Outer B"].map((title, index) => {
              const state = api.getItemState({ index });
              return (
                <StepsItem key={title} index={index}>
                  <StepsTrigger>
                    <StepsIndicator>
                      {state.completed ? (
                        <Check className="size-4" />
                      ) : (
                        index + 1
                      )}
                    </StepsIndicator>
                    <StepsTitle>{title}</StepsTitle>
                  </StepsTrigger>
                  <StepsSeparator />
                </StepsItem>
              );
            })}
          </StepsList>

          <StepsContent index={0}>
            <div className="flex w-full flex-col gap-3">
              <p className="text-muted-foreground text-sm">
                Nested steps inside step content:
              </p>
              <Steps count={2} className="w-full">
                <StepsContext>
                  {(innerApi) => (
                    <>
                      <StepsList>
                        {["Inner 1", "Inner 2"].map((t, i) => {
                          const s = innerApi.getItemState({ index: i });
                          return (
                            <StepsItem key={t} index={i}>
                              <StepsTrigger>
                                <StepsIndicator>
                                  {s.completed ? (
                                    <Check className="size-4" />
                                  ) : (
                                    i + 1
                                  )}
                                </StepsIndicator>
                                <StepsTitle>{t}</StepsTitle>
                              </StepsTrigger>
                              <StepsSeparator />
                            </StepsItem>
                          );
                        })}
                      </StepsList>
                      <StepsContent index={0}>
                        <p className="text-muted-foreground">Inner content 1</p>
                      </StepsContent>
                      <StepsContent index={1}>
                        <p className="text-muted-foreground">Inner content 2</p>
                      </StepsContent>
                      <StepsCompletedContent>
                        Inner complete!
                      </StepsCompletedContent>
                      <div className="flex justify-end gap-2">
                        <StepsPrevTrigger asChild>
                          <Button variant="outline" size="sm">
                            Back
                          </Button>
                        </StepsPrevTrigger>
                        <StepsNextTrigger asChild>
                          <Button size="sm">Next</Button>
                        </StepsNextTrigger>
                      </div>
                    </>
                  )}
                </StepsContext>
              </Steps>
            </div>
          </StepsContent>

          <StepsContent index={1}>
            <p className="text-muted-foreground">Outer step B content</p>
          </StepsContent>

          <StepsCompletedContent>
            All outer steps complete!
          </StepsCompletedContent>

          <div className="flex justify-end gap-2">
            <StepsPrevTrigger asChild>
              <Button variant="outline" size="sm">
                Back
              </Button>
            </StepsPrevTrigger>
            <StepsNextTrigger asChild>
              <Button size="sm">Next</Button>
            </StepsNextTrigger>
          </div>
        </>
      )}
    </StepsContext>
  </Steps>
);

const StepsHorizontalCenteredDemo = () => (
  <Steps count={CENTERED_STEPS.length}>
    <StepsContext>
      {(api) => (
        <StepsList>
          {CENTERED_STEPS.map((item, index) => {
            const state = api.getItemState({ index });
            const Icon = item.icon;
            return (
              <StepsItem
                key={item.title}
                index={index}
                className="flex-col items-center justify-center gap-0"
              >
                <StepsTrigger className="static z-1">
                  <StepsIndicator>
                    {state.completed ? (
                      <Check className="size-4" />
                    ) : Icon ? (
                      <Icon className="size-4" />
                    ) : (
                      index + 1
                    )}
                  </StepsIndicator>
                </StepsTrigger>
                <StepsSeparator
                  className={cn(
                    "z-0 absolute left-1/2 -right-1/2 top-4 data-[orientation=horizontal]:mx-0",
                    index === CENTERED_STEPS.length - 2 && "-right-1/4",
                  )}
                />
                <div className="mt-2 flex flex-col items-center text-center">
                  <StepsTitle>{item.title}</StepsTitle>
                  <StepsDescription>{item.description}</StepsDescription>
                </div>
              </StepsItem>
            );
          })}
        </StepsList>
      )}
    </StepsContext>
  </Steps>
);

const StepsVerticalButtonsDemo = () => (
  <Steps
    count={DETAILS_STEPS.length}
    orientation="vertical"
    className="flex-col! gap-0! mx-auto max-w-md"
  >
    <StepsContext>
      {(api) => (
        <StepsList className="w-full">
          {DETAILS_STEPS.map((item, index) => {
            const state = api.getItemState({ index });
            return (
              <StepsItem
                key={item.title}
                index={index}
                className="flex w-full items-start gap-6"
              >
                <StepsSeparator className="data-[orientation=vertical]:left-3.75 data-[orientation=vertical]:top-8 data-[orientation=vertical]:bottom-auto data-[orientation=vertical]:h-[calc(100%-32px)]" />
                <StepsTrigger asChild>
                  <Button
                    variant={
                      state.completed || state.current ? "default" : "outline"
                    }
                    size="icon"
                    className={cn(
                      "z-10 shrink-0 rounded-full text-foreground before:content-[''] before:absolute before:inset-0 before:rounded-full",
                      state.current &&
                        "ring-2 ring-ring ring-offset-2 ring-offset-background",
                      state.completed && "text-background bg-primary",
                    )}
                  >
                    {state.completed ? (
                      <Check className="size-5" />
                    ) : state.current ? (
                      <Circle />
                    ) : (
                      <Dot />
                    )}
                  </Button>
                </StepsTrigger>
                <div className="flex flex-col gap-1">
                  <StepsTitle
                    className={cn(
                      "transition lg:text-base",
                      state.current && "text-primary",
                    )}
                  >
                    {item.title}
                  </StepsTitle>
                  <StepsDescription
                    className={cn(
                      "whitespace-normal text-sm transition",
                      state.current && "text-primary",
                    )}
                  >
                    {item.description}
                  </StepsDescription>
                </div>
              </StepsItem>
            );
          })}
        </StepsList>
      )}
    </StepsContext>
  </Steps>
);

const StepsFormCenteredDemo = () => {
  const [step, setStep] = useState(0);

  return (
    <Steps
      count={CENTERED_FORM_STEPS.length}
      step={step}
      onStepChange={(d) => setStep(d.step)}
    >
      <StepsContext>
        {(api) => (
          <>
            <StepsList>
              {CENTERED_FORM_STEPS.map((item, index) => {
                const state = api.getItemState({ index });
                return (
                  <StepsItem
                    key={item.title}
                    index={index}
                    className="flex-col items-center justify-center gap-0"
                  >
                    <StepsSeparator
                      className={cn(
                        "z-0 absolute left-[calc(50%+16px)] -right-[calc(50%-8px)] top-3.75 data-[orientation=horizontal]:mx-0",
                        index === CENTERED_FORM_STEPS.length - 2 &&
                          "-right-[calc(25%-56px)]",
                      )}
                    />
                    <StepsTrigger asChild>
                      <Button
                        variant={
                          state.completed || state.current
                            ? "default"
                            : "outline"
                        }
                        size="icon"
                        className={cn(
                          "z-10 shrink-0 rounded-full text-foreground before:content-[''] before:absolute before:inset-0 before:rounded-full",
                          state.current &&
                            "ring-2 ring-ring ring-offset-2 ring-offset-background",
                          state.completed && "text-background bg-primary",
                        )}
                      >
                        {state.completed ? (
                          <Check className="size-5" />
                        ) : state.current ? (
                          <Circle />
                        ) : (
                          <Dot />
                        )}
                      </Button>
                    </StepsTrigger>
                    <div className="mt-5 flex flex-col items-center text-center">
                      <StepsTitle
                        className={cn(
                          "transition",
                          state.current && "text-primary",
                        )}
                      >
                        {item.title}
                      </StepsTitle>
                      <StepsDescription
                        className={cn(
                          "transition",
                          state.current && "text-primary",
                        )}
                      >
                        {item.description}
                      </StepsDescription>
                    </div>
                  </StepsItem>
                );
              })}
            </StepsList>

            <StepsContent index={0}>
              <div className="flex flex-col gap-4">
                <div className="flex flex-col gap-1.5">
                  <label className="font-medium text-sm">Full Name</label>
                  <input
                    className="h-9 rounded-md border border-input bg-transparent px-3 text-sm outline-none focus-visible:ring-2 focus-visible:ring-ring"
                    type="text"
                    placeholder="John Doe"
                  />
                </div>
                <div className="flex flex-col gap-1.5">
                  <label className="font-medium text-sm">Email</label>
                  <input
                    className="h-9 rounded-md border border-input bg-transparent px-3 text-sm outline-none focus-visible:ring-2 focus-visible:ring-ring"
                    type="email"
                    placeholder="john@example.com"
                  />
                </div>
              </div>
            </StepsContent>
            <StepsContent index={1}>
              <div className="flex flex-col gap-4">
                <div className="flex flex-col gap-1.5">
                  <label className="font-medium text-sm">Password</label>
                  <input
                    className="h-9 rounded-md border border-input bg-transparent px-3 text-sm outline-none focus-visible:ring-2 focus-visible:ring-ring"
                    type="password"
                    placeholder="••••••••"
                  />
                </div>
                <div className="flex flex-col gap-1.5">
                  <label className="font-medium text-sm">
                    Confirm Password
                  </label>
                  <input
                    className="h-9 rounded-md border border-input bg-transparent px-3 text-sm outline-none focus-visible:ring-2 focus-visible:ring-ring"
                    type="password"
                    placeholder="••••••••"
                  />
                </div>
              </div>
            </StepsContent>
            <StepsContent index={2}>
              <div className="flex flex-col gap-4">
                <div className="flex flex-col gap-1.5">
                  <label className="font-medium text-sm">Favorite Drink</label>
                  <select className="h-9 rounded-md border border-input bg-transparent px-3 text-sm outline-none focus-visible:ring-2 focus-visible:ring-ring">
                    <option value="">Select a drink</option>
                    <option value="coffee">Coffee</option>
                    <option value="tea">Tea</option>
                    <option value="soda">Soda</option>
                  </select>
                </div>
              </div>
            </StepsContent>
            <StepsCompletedContent>
              Form submitted successfully!
            </StepsCompletedContent>

            <div className="flex items-center justify-between">
              <StepsPrevTrigger asChild>
                <Button variant="outline" size="sm">
                  Back
                </Button>
              </StepsPrevTrigger>
              <div className="flex items-center gap-3">
                {api.value < api.count - 1 ? (
                  <StepsNextTrigger asChild>
                    <Button size="sm">Next</Button>
                  </StepsNextTrigger>
                ) : !api.isCompleted ? (
                  <Button size="sm" onClick={() => api.goToNextStep()}>
                    Submit
                  </Button>
                ) : null}
              </div>
            </div>
          </>
        )}
      </StepsContext>
    </Steps>
  );
};

const ArkUiShowcase2 = () => {
  return (
    <div className="mx-auto flex min-h-screen max-w-6xl flex-col gap-10 p-6 md:p-10">
      <header className="flex flex-col gap-2">
        <h1 className="font-semibold text-2xl text-foreground tracking-tight">
          Ark UI showcase 2
        </h1>
        <p className="max-w-2xl text-muted-foreground text-sm">
          Splitter, Switch, Tags Input, Tabs, Steps, and Toast examples (Ark UI)
          for local development.
        </p>
      </header>

      <section className="flex flex-col gap-4">
        <h2 className="font-medium text-foreground text-lg">Splitter</h2>
        <p className="max-w-2xl text-muted-foreground text-sm">
          Built from{" "}
          <a
            className="text-primary underline-offset-4 hover:underline"
            href="https://ark-ui.com/docs/components/splitter"
            rel="noreferrer"
            target="_blank"
          >
            Ark UI Splitter
          </a>{" "}
          with a shadcn-style wrapper API (similar to{" "}
          <a
            className="text-primary underline-offset-4 hover:underline"
            href="https://ui.shadcn.com/docs/components/radix/resizable"
            rel="noreferrer"
            target="_blank"
          >
            shadcn Resizable
          </a>
          ). Use <code className="text-foreground">withHandle</code> on the
          resize trigger to show a visible grip indicator.
        </p>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          <DemoCard title="Basic" description="Two panels + withHandle.">
            <SplitterBasicDemo />
          </DemoCard>
          <DemoCard
            title="Vertical"
            description="orientation vertical (Ark example)."
          >
            <SplitterVerticalDemo />
          </DemoCard>
          <DemoCard
            title="Collapsible panels"
            description="collapsible + collapsedSize on a panel (Ark example)."
            className="sm:col-span-2"
          >
            <SplitterCollapsiblePanelsDemo />
          </DemoCard>
          <DemoCard
            title="Multiple panels"
            description="Three panels + 2 handles (Ark example)."
            className="sm:col-span-2"
          >
            <SplitterMultiplePanelsDemo />
          </DemoCard>
          <DemoCard
            title="Nested"
            description="Splitter inside a panel (nested layout)."
            className="sm:col-span-2"
          >
            <SplitterNestedDemo />
          </DemoCard>
          <DemoCard
            title="Context"
            description="SplitterContext render prop API (Ark example)."
            className="sm:col-span-2"
          >
            <SplitterContextDemo />
          </DemoCard>
          <DemoCard
            title="Root provider"
            description="useSplitter + SplitterRootProvider (Ark example)."
            className="sm:col-span-2"
          >
            <SplitterRootProviderDemo />
          </DemoCard>
          <DemoCard
            title="Dynamic collapsible"
            description="Collapse/expand based on viewport size (Ark example)."
            className="sm:col-span-2"
          >
            <SplitterDynamicCollapsibleDemo />
          </DemoCard>
        </div>
      </section>

      <section className="flex flex-col gap-4">
        <h2 className="font-medium text-foreground text-lg">Switch</h2>
        <p className="max-w-2xl text-muted-foreground text-sm">
          Built from{" "}
          <a
            className="text-primary underline-offset-4 hover:underline"
            href="https://ark-ui.com/docs/components/switch"
            rel="noreferrer"
            target="_blank"
          >
            Ark UI Switch
          </a>{" "}
          with a shadcn/coss-style wrapper API.
        </p>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          <DemoCard title="Basic">
            <SwitchBasicDemo />
          </DemoCard>

          <DemoCard
            title="Initial checked"
            description="defaultChecked (Ark example)."
          >
            <SwitchInitialCheckedDemo />
          </DemoCard>

          <DemoCard
            title="Controlled"
            description="checked + onCheckedChange (Ark example)."
          >
            <SwitchControlledDemo />
          </DemoCard>

          <DemoCard title="Disabled" description="disabled (Ark example).">
            <SwitchDisabledDemo />
          </DemoCard>

          <DemoCard
            title="Context"
            description="Switch.Context render prop (Ark example)."
          >
            <SwitchContextDemo />
          </DemoCard>

          <DemoCard
            title="Root provider"
            description="useSwitch + RootProvider (Ark example)."
            className="sm:col-span-2"
          >
            <SwitchRootProviderDemo />
          </DemoCard>

          <DemoCard
            title="With Field"
            description="Field helper + error text (Ark example)."
            className="sm:col-span-2"
          >
            <SwitchWithFieldDemo />
          </DemoCard>

          <DemoCard
            title="Card style"
            description="Clickable card pattern (composition)."
            className="sm:col-span-2"
          >
            <SwitchCardStyleDemo />
          </DemoCard>
          <DemoCard
            title="Nested"
            description="Nested switch group pattern."
            className="sm:col-span-2"
          >
            <SwitchNestedDemo />
          </DemoCard>
        </div>
      </section>

      <section className="flex flex-col gap-4">
        <h2 className="font-medium text-foreground text-lg">Tags Input</h2>
        <p className="max-w-2xl text-muted-foreground text-sm">
          Built from{" "}
          <a
            className="text-primary underline-offset-4 hover:underline"
            href="https://ark-ui.com/docs/components/tags-input"
            rel="noreferrer"
            target="_blank"
          >
            Ark UI Tags Input
          </a>{" "}
          using the same wrapper style as the other UI primitives.
        </p>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          <DemoCard title="Basic" description="Ark example: basic.">
            <TagsInputBasicDemo />
          </DemoCard>
          <DemoCard title="Allow duplicates" description="allowDuplicates.">
            <TagsInputAllowDuplicatesDemo />
          </DemoCard>
          <DemoCard title="Blur behavior" description="blurBehavior=add.">
            <TagsInputBlurBehaviorDemo />
          </DemoCard>
          <DemoCard title="Controlled" description="value + onValueChange.">
            <TagsInputControlledDemo />
          </DemoCard>
          <DemoCard
            title="Controlled input value"
            description="inputValue + onInputValueChange."
          >
            <TagsInputControlledInputValueDemo />
          </DemoCard>
          <DemoCard
            title="Delimiter"
            description="comma/semicolon/space delimiter."
          >
            <TagsInputDelimiterDemo />
          </DemoCard>
          <DemoCard title="Disabled" description="disabled root.">
            <TagsInputDisabledDemo />
          </DemoCard>
          <DemoCard title="Disabled editing" description="editable=false.">
            <TagsInputDisabledEditingDemo />
          </DemoCard>
          <DemoCard title="Invalid" description="invalid root state.">
            <TagsInputInvalidDemo />
          </DemoCard>
          <DemoCard title="Max tag length" description="maxLength=10.">
            <TagsInputMaxTagLengthDemo />
          </DemoCard>
          <DemoCard
            title="Max with overflow"
            description="max + allowOverflow."
          >
            <TagsInputMaxWithOverflowDemo />
          </DemoCard>
          <DemoCard
            title="Paste behavior"
            description="addOnPaste with delimiter."
          >
            <TagsInputPasteBehaviorDemo />
          </DemoCard>
          <DemoCard title="Readonly" description="readOnly + default values.">
            <TagsInputReadonlyDemo />
          </DemoCard>
          <DemoCard
            title="Sanitize value"
            description="normalize to lowercase."
          >
            <TagsInputSanitizeDemo />
          </DemoCard>
          <DemoCard title="Validation" description="custom validate callback.">
            <TagsInputValidationDemo />
          </DemoCard>
          <DemoCard
            title="Programmatic control"
            description="useTagsInput actions."
            className="sm:col-span-2"
          >
            <TagsInputProgrammaticControlDemo />
          </DemoCard>
          <DemoCard
            title="Root provider"
            description="useTagsInput + RootProvider."
          >
            <TagsInputRootProviderDemo />
          </DemoCard>
          <DemoCard title="With Field" description="Field helper + error text.">
            <TagsInputWithFieldDemo />
          </DemoCard>
          <DemoCard
            title="With Combobox"
            description="Ark example: tags input with combobox suggestions."
            className="sm:col-span-2"
          >
            <TagsInputWithComboboxDemo />
          </DemoCard>
          <DemoCard
            title="Nested"
            description="Nested tags input composition."
            className="sm:col-span-2"
          >
            <TagsInputNestedDemo />
          </DemoCard>
        </div>
      </section>

      <section className="flex flex-col gap-4">
        <h2 className="font-medium text-foreground text-lg">Tabs</h2>
        <p className="max-w-2xl text-muted-foreground text-sm">
          Built from{" "}
          <a
            className="text-primary underline-offset-4 hover:underline"
            href="https://ark-ui.com/docs/components/tabs"
            rel="noreferrer"
            target="_blank"
          >
            Ark UI Tabs
          </a>{" "}
          with a shadcn/coss-style wrapper API. Variants:{" "}
          <code className="text-foreground">default</code> and{" "}
          <code className="text-foreground">underline</code>.
        </p>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          <DemoCard
            title="Basic"
            description="Ark example: basic. Default variant."
          >
            <TabsBasicDemo />
          </DemoCard>
          <DemoCard
            title="Basic"
            description="Ark example: basic. Default variant."
          >
            <TabsUnderlineVerticalDemo />
          </DemoCard>

          {/* <DemoCard
            title="Underline"
            description="Second variant + indicator animation."
          >
            <TabsUnderlineDemo />
          </DemoCard> */}
          <DemoCard
            title="Controlled"
            description="Ark example: controlled (value + onValueChange)."
            className="sm:col-span-2"
          >
            <TabsControlledDemo />
          </DemoCard>
          <DemoCard
            title="Disabled tab"
            description="Ark example: disabled-tab."
          >
            <TabsDisabledDemo />
          </DemoCard>
          <DemoCard
            title="Vertical"
            description="Ark example: vertical orientation."
          >
            <TabsVerticalDemo />
          </DemoCard>
          <DemoCard
            title="Lazy mount"
            description="Ark example: lazyMount + unmountOnExit."
          >
            <TabsLazyMountDemo />
          </DemoCard>
          <DemoCard
            title="Manual activation"
            description="Ark example: activationMode manual."
          >
            <TabsManualActivationDemo />
          </DemoCard>
          <DemoCard
            title="Links"
            description="Ark example: triggers rendered as anchors."
          >
            <TabsLinksDemo />
          </DemoCard>
          <DemoCard
            title="Root provider"
            description="Ark example: useTabs + RootProvider."
            className="sm:col-span-2"
          >
            <TabsRootProviderDemo />
          </DemoCard>
          <DemoCard
            title="Nested"
            description="Nested tabs inside tabs content."
            className="sm:col-span-2"
          >
            <TabsNestedDemo />
          </DemoCard>
        </div>
      </section>

      <section className="flex flex-col gap-4">
        <h2 className="font-medium text-foreground text-lg">Steps</h2>
        <p className="max-w-2xl text-muted-foreground text-sm">
          Built from{" "}
          <a
            className="text-primary underline-offset-4 hover:underline"
            href="https://ark-ui.com/docs/components/steps"
            rel="noreferrer"
            target="_blank"
          >
            Ark UI Steps
          </a>{" "}
          with{" "}
          <a
            className="text-primary underline-offset-4 hover:underline"
            href="https://www.diceui.com/docs/components/radix/stepper"
            rel="noreferrer"
            target="_blank"
          >
            Dice UI
          </a>{" "}
          / shadcn-vue&ndash;inspired styling. Guides users through multi-step
          processes with visual progress indicators.
        </p>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          <DemoCard
            title="Basic"
            description="Horizontal stepper with step counter."
            className="sm:col-span-2 lg:col-span-3"
          >
            <StepsBasicDemo />
          </DemoCard>
          <DemoCard
            title="Centered (icons)"
            description="Icons on top, title/description below, separator touching indicators."
            className="sm:col-span-2 lg:col-span-3"
          >
            <StepsHorizontalCenteredDemo />
          </DemoCard>
          <DemoCard
            title="Vertical (buttons)"
            description="Button triggers with ring effect, vertical separator."
            className="sm:col-span-2 lg:col-span-3"
          >
            <StepsVerticalButtonsDemo />
          </DemoCard>
          <DemoCard
            title="Centered Form"
            description="Centered stepper with Button triggers and form content."
            className="sm:col-span-2 lg:col-span-3"
          >
            <StepsFormCenteredDemo />
          </DemoCard>
          <DemoCard
            title="With Form"
            description="Form wizard with Username/Email fields."
            className="sm:col-span-2 lg:col-span-3"
          >
            <StepsFormWizardDemo />
          </DemoCard>
          <DemoCard
            title="With Form (Personal)"
            description="Form wizard with grid fields."
            className="sm:col-span-2 lg:col-span-3"
          >
            <StepsPersonalFormDemo />
          </DemoCard>
          <DemoCard
            title="Vertical"
            description="Vertical timeline (order tracking)."
            className="sm:col-span-2 lg:col-span-3"
          >
            <StepsVerticalDemo />
          </DemoCard>
          <DemoCard
            title="Controlled"
            description="step + onStepChange."
            className="sm:col-span-2 lg:col-span-3"
          >
            <StepsControlledDemo />
          </DemoCard>
          <DemoCard
            title="Root provider"
            description="useSteps + RootProvider external control."
            className="sm:col-span-2 lg:col-span-3"
          >
            <StepsRootProviderDemo />
          </DemoCard>
          <DemoCard
            title="Context"
            description="Steps.Context render prop (percent, isCompleted)."
            className="sm:col-span-2 lg:col-span-3"
          >
            <StepsContextDemo />
          </DemoCard>
          <DemoCard
            title="Linear (validation)"
            description="linear + isStepValid blocks forward navigation."
            className="sm:col-span-2 lg:col-span-3"
          >
            <StepsLinearDemo />
          </DemoCard>
          <DemoCard
            title="Nested"
            description="Nested steps inside step content."
            className="sm:col-span-2 lg:col-span-3"
          >
            <StepsNestedDemo />
          </DemoCard>
        </div>
      </section>
    </div>
  );
};

export default ArkUiShowcase2;
