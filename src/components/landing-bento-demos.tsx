import {
  CheckIcon,
  ChevronDownIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
  ChevronsUpDownIcon,
  InfoIcon,
  Loader2Icon,
  MicIcon,
  MinusIcon,
  MoreHorizontalIcon,
  PauseIcon,
  PlayIcon,
  PlusIcon,
  RefreshCwIcon,
  SearchIcon,
  XIcon,
} from "lucide-react";
import type { ComponentProps, ReactNode } from "react";
import { useState } from "react";
import {
  Accordion,
  AccordionItem,
  AccordionPanel,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Button, buttonVariants } from "@/components/ui/button";
import {
  Checkbox,
  CheckboxLabel,
  CheckboxRoot,
} from "@/components/ui/checkbox";
import {
  ClipboardControl,
  ClipboardIndicator,
  ClipboardInput,
  ClipboardRoot,
  ClipboardTrigger,
} from "@/components/ui/clipboard";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import { Field, FieldLabel } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
  InputGroupTextarea,
} from "@/components/ui/input-group";
import {
  NumberInput,
  NumberInputControl,
  NumberInputDecrementTrigger,
  NumberInputIncrementTrigger,
  NumberInputRoot,
} from "@/components/ui/number-input";
import {
  Pagination,
  PaginationItems,
  PaginationNextTrigger,
  PaginationPrevTrigger,
} from "@/components/ui/pagination";
import {
  Radio,
  RadioGroup,
  RadioGroupLabel,
} from "@/components/ui/radio-group";
import {
  Select,
  SelectItem,
  SelectItemIndicator,
  SelectItemText,
  SelectList,
  SelectPopup,
  SelectTriggerField,
  SelectValue,
} from "@/components/ui/select";
import {
  Slider,
  SliderContext,
  SliderField,
  SliderLabel,
} from "@/components/ui/slider";
import { Spinner } from "@/components/ui/spinner";
import { Swap, SwapIndicator } from "@/components/ui/swap";
import { Switch, SwitchLabel, SwitchRoot } from "@/components/ui/switch";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Textarea } from "@/components/ui/textarea";
import { Tooltip, TooltipPopup, TooltipTrigger } from "@/components/ui/tooltip";
import { siteConfig } from "@/lib/site-config";
import { cn } from "@/lib/utils";

const CHECKOUT_MONTH_ITEMS = Array.from({ length: 12 }, (_, i) => {
  const v = String(i + 1).padStart(2, "0");
  return { label: v, value: v };
});

const CHECKOUT_YEAR_ITEMS = [2026, 2027, 2028].map((y) => ({
  label: String(y),
  value: String(y),
}));

const NI_INPUT_CLASS =
  "order-2 min-h-8.5 border-0 bg-transparent px-3 text-base leading-8.5 shadow-none sm:min-h-7.5 sm:text-sm sm:leading-7.5";

const NiGroupInput = ({
  className,
  ...props
}: ComponentProps<typeof InputGroupInput>) => {
  return (
    <NumberInput asChild>
      <InputGroupInput className={cn(NI_INPUT_CLASS, className)} {...props} />
    </NumberInput>
  );
};

const NiGroup = ({
  children,
  className: controlClassName,
  groupClassName,
}: {
  children: ReactNode;
  className?: string;
  groupClassName?: string;
}) => {
  return (
    <NumberInputControl asChild className={controlClassName}>
      <InputGroup className={groupClassName}>{children}</InputGroup>
    </NumberInputControl>
  );
};

const BentoShell = ({
  title,
  description,
  className,
  children,
}: {
  title: string;
  description?: string;
  className?: string;
  children: ReactNode;
}) => {
  return (
    <article
      className={cn(
        "group/bento flex min-w-0 flex-col rounded-2xl border border-border/80 bg-card/95 p-4 shadow-xs",
        "ring-1 ring-border/20 dark:bg-card/80",
        "transition-[border-color,box-shadow] duration-200 ease-out motion-reduce:transition-none",
        "hover:border-border hover:shadow-md motion-reduce:hover:shadow-xs",
        className,
      )}
    >
      <header className="mb-3 border-b border-border/50 pb-3">
        <h3 className="font-semibold text-foreground text-sm tracking-tight">
          {title}
        </h3>
        {description ? (
          <p className="mt-1 text-pretty text-muted-foreground text-xs leading-relaxed">
            {description}
          </p>
        ) : null}
      </header>
      <div className="min-w-0">{children}</div>
    </article>
  );
};

const BentoColumn = ({ children }: { children: ReactNode }) => {
  return <div className="flex min-w-0 flex-col gap-3 lg:gap-4">{children}</div>;
};

const SwapIconPair = () => {
  const [a, setA] = useState(false);
  const [b, setB] = useState(false);

  return (
    <div className="flex flex-wrap items-center gap-3">
      <Button
        type="button"
        variant="outline"
        size="icon"
        onClick={() => setA((v) => !v)}
        aria-label={a ? "Show error state" : "Show success state"}
      >
        <Swap swap={a}>
          <SwapIndicator className="swap-indicator-fade" type="on">
            <CheckIcon />
          </SwapIndicator>
          <SwapIndicator className="swap-indicator-fade" type="off">
            <XIcon />
          </SwapIndicator>
        </Swap>
      </Button>
      <Button
        type="button"
        variant="outline"
        size="icon"
        onClick={() => setB((v) => !v)}
        aria-label={b ? "Show pause" : "Show play"}
      >
        <Swap swap={b} style={{ perspective: "200px" }}>
          <SwapIndicator className="swap-indicator-flip" type="on">
            <PlayIcon />
          </SwapIndicator>
          <SwapIndicator className="swap-indicator-flip" type="off">
            <PauseIcon />
          </SwapIndicator>
        </Swap>
      </Button>
    </div>
  );
};

const SurveyChips = () => {
  const [channel, setChannel] = useState<
    "social" | "search" | "referral" | "other"
  >("social");

  const items = [
    { id: "social" as const, label: "Social" },
    { id: "search" as const, label: "Search" },
    { id: "referral" as const, label: "Referral" },
    { id: "other" as const, label: "Other" },
  ];

  return (
    <div className="flex flex-wrap gap-1.5">
      {items.map(({ id, label }) => {
        const selected = channel === id;
        return (
          <Button
            key={id}
            type="button"
            size="sm"
            variant={selected ? "default" : "outline"}
            className="inline-flex h-7 items-center gap-1 rounded-full px-2.5 text-xs"
            onClick={() => setChannel(id)}
          >
            {selected ? (
              <CheckIcon className="size-3 opacity-90" aria-hidden="true" />
            ) : null}
            {label}
          </Button>
        );
      })}
    </div>
  );
};

export const LandingBentoDemos = () => {
  return (
    <div className="mx-auto w-full max-6xl grid grid-cols-1 gap-4 lg:grid-cols-3 lg:items-start lg:gap-5">
      <BentoColumn>
        <BentoShell
          title="Checkout"
          description="Card fields, billing flag, and a short note."
        >
          <div className="flex flex-col gap-3">
            <Field>
              <FieldLabel htmlFor="bento-card-name">Name on card</FieldLabel>
              <Input
                id="bento-card-name"
                autoComplete="cc-name"
                placeholder="John Doe"
              />
            </Field>
            <Field>
              <FieldLabel htmlFor="bento-card-number">Card number</FieldLabel>
              <Input
                id="bento-card-number"
                inputMode="numeric"
                autoComplete="cc-number"
                placeholder="1234 5678 9012 3456"
              />
            </Field>
            <div className="grid grid-cols-3 gap-2">
              <Field>
                <FieldLabel htmlFor="bento-cvv">CVV</FieldLabel>
                <Input
                  id="bento-cvv"
                  inputMode="numeric"
                  autoComplete="cc-csc"
                  placeholder="123"
                />
              </Field>
              <Field>
                <FieldLabel id="bento-mm-label">MM</FieldLabel>
                <Select
                  aria-labelledby="bento-mm-label"
                  defaultValue={["01"]}
                  items={CHECKOUT_MONTH_ITEMS}
                >
                  <SelectTriggerField
                    size="sm"
                    className="h-8.5 min-h-8.5 px-2 text-sm sm:h-7.5 sm:min-h-7.5"
                  >
                    <SelectValue />
                  </SelectTriggerField>
                  <SelectPopup>
                    <SelectList>
                      {CHECKOUT_MONTH_ITEMS.map((item) => (
                        <SelectItem key={item.value} item={item}>
                          <SelectItemText>{item.label}</SelectItemText>
                          <SelectItemIndicator />
                        </SelectItem>
                      ))}
                    </SelectList>
                  </SelectPopup>
                </Select>
              </Field>
              <Field>
                <FieldLabel id="bento-yy-label">YY</FieldLabel>
                <Select
                  aria-labelledby="bento-yy-label"
                  defaultValue={["2026"]}
                  items={CHECKOUT_YEAR_ITEMS}
                >
                  <SelectTriggerField
                    size="sm"
                    className="h-8.5 min-h-8.5 px-2 text-sm sm:h-7.5 sm:min-h-7.5"
                  >
                    <SelectValue />
                  </SelectTriggerField>
                  <SelectPopup>
                    <SelectList>
                      {CHECKOUT_YEAR_ITEMS.map((item) => (
                        <SelectItem key={item.value} item={item}>
                          <SelectItemText>{item.label}</SelectItemText>
                          <SelectItemIndicator />
                        </SelectItem>
                      ))}
                    </SelectList>
                  </SelectPopup>
                </Select>
              </Field>
            </div>
            <CheckboxRoot defaultChecked>
              <Checkbox />
              <CheckboxLabel>Same as shipping address</CheckboxLabel>
            </CheckboxRoot>
            <Textarea placeholder="Comments…" rows={2} className="min-h-16" />
            <div className="flex flex-wrap gap-2">
              <Button type="button" size="sm">
                Submit
              </Button>
              <Button type="button" size="sm" variant="outline">
                Cancel
              </Button>
            </div>
          </div>
        </BentoShell>

        <BentoShell title="Accordion" description="Stacked disclosures.">
          <Accordion collapsible defaultValue={["a"]}>
            <AccordionItem value="a">
              <AccordionTrigger>Basics</AccordionTrigger>
              <AccordionPanel className="text-muted-foreground text-sm">
                Shared spacing and radius tokens.
              </AccordionPanel>
            </AccordionItem>
            <AccordionItem value="b">
              <AccordionTrigger>Advanced</AccordionTrigger>
              <AccordionPanel className="text-muted-foreground text-sm">
                Optional power without visual noise on first load.
              </AccordionPanel>
            </AccordionItem>
          </Accordion>
        </BentoShell>

        <BentoShell
          title="Queries"
          description="Command, search, and URL patterns."
        >
          <div className="flex flex-col gap-3">
            <InputGroup>
              <InputGroupAddon align="inline-start">
                <Button
                  type="button"
                  size="icon-xs"
                  variant="ghost"
                  className="rounded-none"
                  aria-label="Add"
                >
                  <PlusIcon className="size-4" />
                </Button>
              </InputGroupAddon>
              <InputGroupInput placeholder="Command…" />
              <InputGroupAddon align="inline-end">
                <MicIcon className="size-4 text-muted-foreground" aria-hidden />
              </InputGroupAddon>
            </InputGroup>
            <div className="flex items-center gap-2">
              <InputGroup className="min-w-0 flex-1">
                <InputGroupAddon align="inline-start">
                  <SearchIcon className="size-4" aria-hidden />
                </InputGroupAddon>
                <InputGroupInput
                  type="search"
                  placeholder="Search…"
                  autoComplete="off"
                />
              </InputGroup>
              <span className="shrink-0 text-muted-foreground text-xs tabular-nums">
                12
              </span>
            </div>
            <InputGroup>
              <InputGroupInput
                readOnly
                defaultValue="https://example.com"
                className="font-mono text-xs"
              />
              <InputGroupAddon align="inline-end">
                <InfoIcon
                  className="size-4 text-muted-foreground"
                  aria-hidden
                />
              </InputGroupAddon>
            </InputGroup>
          </div>
        </BentoShell>

        <BentoShell
          title="Compute"
          description="Radio choice and stepped numeric value."
        >
          <RadioGroup defaultValue="k8s" className="gap-2">
            <RadioGroupLabel className="text-xs">Environment</RadioGroupLabel>
            <Radio value="k8s">
              <span className="text-sm">Kubernetes</span>
            </Radio>
            <Radio value="vm" disabled>
              <span className="text-sm text-muted-foreground">VM (soon)</span>
            </Radio>
            <Radio value="on-prem">
              <span className="text-sm text-muted-foreground">On-prem</span>
            </Radio>
          </RadioGroup>
          <div className="mt-3">
            <p className="mb-2 text-muted-foreground text-xs">GPUs</p>
            <NumberInputRoot defaultValue="8" max={16} min={1}>
              <NiGroup>
                <InputGroupAddon align="inline-start">
                  <NumberInputDecrementTrigger asChild>
                    <Button size="icon-sm" type="button" variant="ghost">
                      <MinusIcon className="size-4" aria-hidden />
                    </Button>
                  </NumberInputDecrementTrigger>
                </InputGroupAddon>
                <NiGroupInput className="text-center" />
                <InputGroupAddon align="inline-end">
                  <NumberInputIncrementTrigger asChild>
                    <Button size="icon-sm" type="button" variant="ghost">
                      <PlusIcon className="size-4" aria-hidden />
                    </Button>
                  </NumberInputIncrementTrigger>
                </InputGroupAddon>
              </NiGroup>
            </NumberInputRoot>
          </div>
        </BentoShell>
      </BentoColumn>

      <BentoColumn>
        <BentoShell
          title="Tabs"
          description="Segmented surface with shared indicator styling."
        >
          <Tabs defaultValue="preview" className="w-full">
            <TabsList className="w-full sm:w-auto">
              <TabsTrigger value="preview">Preview</TabsTrigger>
              <TabsTrigger value="code">Code</TabsTrigger>
              <TabsTrigger value="props">Props</TabsTrigger>
            </TabsList>
            <TabsContent
              value="preview"
              className="mt-2 min-h-11 text-muted-foreground text-sm"
            >
              Content for the active tab.
            </TabsContent>
            <TabsContent
              value="code"
              className="mt-2 min-h-11 text-muted-foreground text-sm"
            >
              Snippet or diff body.
            </TabsContent>
            <TabsContent
              value="props"
              className="mt-2 min-h-11 text-muted-foreground text-sm"
            >
              Prop table or defaults.
            </TabsContent>
          </Tabs>
        </BentoShell>

        <BentoShell title="Range" description="Dual-thumb slider.">
          <Slider defaultValue={[200, 800]} max={1200} min={0} step={10}>
            <SliderContext>
              {({ value }) => (
                <div className="flex items-center justify-between gap-2">
                  <SliderLabel>Price</SliderLabel>
                  <span className="font-medium text-foreground text-xs tabular-nums">
                    ${value[0]} – ${value[1] ?? value[0]}
                  </span>
                </div>
              )}
            </SliderContext>
            <SliderField />
          </Slider>
        </BentoShell>

        <BentoShell
          title="Composer"
          description="Prompt shell with a compact footer."
        >
          <InputGroup>
            <InputGroupTextarea
              placeholder="Ask, search, or chat…"
              rows={3}
              className="min-h-18"
            />
            <InputGroupAddon
              align="block-end"
              className="flex flex-wrap items-center justify-between gap-2 border-t border-border bg-muted/30 px-2 py-2"
            >
              <div className="flex items-center gap-1">
                <Button
                  type="button"
                  size="icon-xs"
                  variant="ghost"
                  aria-label="Add"
                >
                  <PlusIcon className="size-4" />
                </Button>
                <Badge variant="secondary" size="sm">
                  Auto
                </Badge>
              </div>
              <div className="flex min-w-0 flex-1 items-center gap-2 px-1">
                <div
                  className="h-1.5 min-w-0 flex-1 overflow-hidden rounded-full bg-muted"
                  aria-hidden
                >
                  <div className="h-full w-[52%] rounded-full bg-primary" />
                </div>
                <span className="shrink-0 text-muted-foreground text-xs">
                  52%
                </span>
              </div>
              <Button type="button" size="icon-sm" aria-label="Send">
                <ChevronRightIcon className="size-4" />
              </Button>
            </InputGroupAddon>
          </InputGroup>
        </BentoShell>

        <BentoShell
          title="Toggles"
          description="Switch, checkbox, and row actions."
        >
          <SwitchRoot defaultChecked className="mb-3">
            <Switch />
            <SwitchLabel className="text-sm">Wallpaper tint</SwitchLabel>
          </SwitchRoot>
          <CheckboxRoot defaultChecked className="mb-3">
            <Checkbox />
            <CheckboxLabel className="text-sm">Agree to terms</CheckboxLabel>
          </CheckboxRoot>
          <div className="flex flex-wrap gap-1.5">
            <Button type="button" size="sm" variant="outline">
              Archive
            </Button>
            <Button type="button" size="sm" variant="outline">
              Report
            </Button>
            <Button
              type="button"
              size="icon-sm"
              variant="outline"
              aria-label="More"
            >
              <MoreHorizontalIcon className="size-4" />
            </Button>
          </div>
        </BentoShell>

        <BentoShell title="Clipboard" description="Copy a stable URL.">
          <ClipboardRoot value={siteConfig.url}>
            <ClipboardControl>
              <ClipboardInput />
              <ClipboardTrigger>
                <ClipboardIndicator copied={"Copied"}>Copy</ClipboardIndicator>
              </ClipboardTrigger>
            </ClipboardControl>
          </ClipboardRoot>
          <p
            className="mt-2 font-mono text-[11px] text-muted-foreground"
            translate="no"
          >
            {siteConfig.url}
          </p>
        </BentoShell>
      </BentoColumn>

      <BentoColumn>
        <BentoShell
          title="Team & wayfinding"
          description="Avatars, status, and breadcrumb in one strip."
        >
          <div className="flex items-center gap-3">
            <div className="flex -space-x-2">
              {["AK", "CN", "UI"].map((initials) => (
                <Avatar
                  key={initials}
                  size="sm"
                  className="ring-2 ring-background"
                >
                  <AvatarFallback>{initials}</AvatarFallback>
                </Avatar>
              ))}
            </div>
            <div className="min-w-0">
              <p className="font-medium text-foreground text-sm">No team yet</p>
              <Button type="button" size="sm" className="mt-2">
                <PlusIcon className="size-4" aria-hidden="true" />
                Invite
              </Button>
            </div>
          </div>
          <div className="mt-3 flex flex-wrap gap-2">
            <Badge variant="secondary" className="gap-1 pr-2">
              <Loader2Icon className="size-3 animate-spin" aria-hidden />
              Syncing
            </Badge>
            <Badge variant="outline" className="gap-1 pr-2">
              <RefreshCwIcon className="size-3" aria-hidden />
              Updating
            </Badge>
          </div>
          <Breadcrumb className="mt-3">
            <BreadcrumbList>
              <BreadcrumbItem>
                <BreadcrumbLink href="/docs/installation">Docs</BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbPage>UI</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </BentoShell>

        <BentoShell
          title="Pagination & chips"
          description="Pager plus compact survey pills."
        >
          <Pagination
            count={30}
            pageSize={10}
            className="mb-3 flex flex-wrap gap-1"
          >
            <PaginationPrevTrigger asChild aria-label="Previous page">
              <Button size="icon-sm" variant="outline" type="button">
                <ChevronLeftIcon className="size-4" />
              </Button>
            </PaginationPrevTrigger>
            <PaginationItems size="sm" variant="ghost" />
            <PaginationNextTrigger asChild aria-label="Next page">
              <Button size="icon-sm" variant="outline" type="button">
                <ChevronRightIcon className="size-4" />
              </Button>
            </PaginationNextTrigger>
          </Pagination>
          <Button
            type="button"
            size="sm"
            variant="outline"
            className="mb-3 w-full gap-1 sm:w-auto"
          >
            Copilot
            <ChevronsUpDownIcon className="size-3.5 opacity-70" aria-hidden />
          </Button>
          <SurveyChips />
        </BentoShell>

        <BentoShell
          title="Notes & loading"
          description="Collapsible detail and a blocking state."
        >
          <Collapsible defaultOpen={false} className="group">
            <CollapsibleTrigger
              className={cn(
                buttonVariants({ variant: "ghost", size: "sm" }),
                "mb-2 flex w-full items-center justify-between px-2",
              )}
            >
              <span className="text-sm">Release notes</span>
              <ChevronDownIcon
                className="size-4 shrink-0 transition-transform duration-200 group-data-[state=open]:rotate-180"
                aria-hidden
              />
            </CollapsibleTrigger>
            <CollapsibleContent>
              <p className="text-muted-foreground text-xs leading-relaxed">
                Collapsible keeps secondary copy out of the default scan path.
              </p>
            </CollapsibleContent>
          </Collapsible>
          <div className="flex flex-col items-center gap-2 rounded-lg border border-dashed border-border/80 py-4 text-center">
            <Spinner className="size-6 text-muted-foreground" />
            <p className="font-medium text-foreground text-xs">Processing…</p>
            <Button type="button" size="sm" variant="outline">
              Cancel
            </Button>
          </div>
        </BentoShell>
        <BentoShell
          title="Motion & hint"
          description="Swap icons and a tooltip trigger."
        >
          <SwapIconPair />
          <div className="mt-3">
            <Tooltip openDelay={120}>
              <TooltipTrigger asChild>
                <button
                  type="button"
                  className={cn(
                    buttonVariants({ variant: "outline", size: "sm" }),
                  )}
                >
                  What is this?
                </button>
              </TooltipTrigger>
              <TooltipPopup>
                Short helper copy next to interactive controls.
              </TooltipPopup>
            </Tooltip>
          </div>
        </BentoShell>
      </BentoColumn>
    </div>
  );
};
