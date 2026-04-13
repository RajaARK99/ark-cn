const fs = require("fs");
const path = require("path");
const root = "d:/Projects/ark-cn";
const exDir = path.join(root, "src/components/example");
const files = {
  "alert-demo.tsx": `"use client";

import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";

const AlertDemo = () => (
  <Alert className="w-full max-w-md">
    <AlertTitle>Heads up</AlertTitle>
    <AlertDescription>
      This is an alert built with Ark UI primitives and shadcn-style wrappers.
    </AlertDescription>
  </Alert>
);

export default AlertDemo;
`,
  "alert-dialog-demo.tsx": `"use client";

import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { Button } from "@/components/ui/button";

const AlertDialogDemo = () => (
  <AlertDialog>
    <AlertDialogTrigger asChild>
      <Button size="sm" variant="outline">
        Open dialog
      </Button>
    </AlertDialogTrigger>
    <AlertDialogContent>
      <AlertDialogHeader>
        <AlertDialogTitle>Confirm action</AlertDialogTitle>
        <AlertDialogDescription>
          This is an alert dialog built on Ark Dialog.
        </AlertDialogDescription>
      </AlertDialogHeader>
      <AlertDialogFooter>
        <AlertDialogCancel asChild>
          <Button size="sm" variant="ghost">
            Cancel
          </Button>
        </AlertDialogCancel>
        <AlertDialogAction asChild>
          <Button size="sm">Continue</Button>
        </AlertDialogAction>
      </AlertDialogFooter>
    </AlertDialogContent>
  </AlertDialog>
);

export default AlertDialogDemo;
`,
  "angle-slider-demo.tsx": `"use client";

import { AngleSlider } from "@/components/ui/angle-slider";

const AngleSliderDemo = () => {
  return <AngleSlider defaultValue={45} size={160} variant="ring" />;
};

export default AngleSliderDemo;
`,
  "badge-demo.tsx": `"use client";

import { Badge } from "@/components/ui/badge";

const BadgeDemo = () => (
  <div className="flex flex-wrap gap-2">
    <Badge>Default</Badge>
    <Badge variant="secondary">Secondary</Badge>
    <Badge variant="outline">Outline</Badge>
  </div>
);

export default BadgeDemo;
`,
  "breadcrumb-demo.tsx": `"use client";

import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";

const BreadcrumbDemo = () => (
  <Breadcrumb>
    <BreadcrumbList>
      <BreadcrumbItem>
        <BreadcrumbLink href="#">Docs</BreadcrumbLink>
      </BreadcrumbItem>
      <BreadcrumbSeparator />
      <BreadcrumbItem>
        <BreadcrumbPage>Components</BreadcrumbPage>
      </BreadcrumbItem>
    </BreadcrumbList>
  </Breadcrumb>
);

export default BreadcrumbDemo;
`,
  "carousel-demo.tsx": `"use client";

import {
  Carousel,
  CarouselContent,
  CarouselControl,
  CarouselIndicatorGroup,
  CarouselIndicatorItem,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const CarouselDemo = () => (
  <Carousel className="mx-auto w-full max-w-md" slideCount={3}>
    <CarouselControl className="relative h-40 overflow-hidden rounded-lg border border-border bg-muted/30">
      <CarouselContent>
        <CarouselItem
          index={0}
          className="flex h-40 items-center justify-center font-medium text-lg"
        >
          Slide 1
        </CarouselItem>
        <CarouselItem
          index={1}
          className="flex h-40 items-center justify-center font-medium text-lg"
        >
          Slide 2
        </CarouselItem>
        <CarouselItem
          index={2}
          className="flex h-40 items-center justify-center font-medium text-lg"
        >
          Slide 3
        </CarouselItem>
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </CarouselControl>
    <CarouselIndicatorGroup>
      <CarouselIndicatorItem index={0} />
      <CarouselIndicatorItem index={1} />
      <CarouselIndicatorItem index={2} />
    </CarouselIndicatorGroup>
  </Carousel>
);

export default CarouselDemo;
`,
  "clipboard-demo.tsx": `"use client";

import {
  ClipboardControl,
  ClipboardIndicator,
  ClipboardInput,
  ClipboardRoot,
  ClipboardTrigger,
  ClipboardValueText,
} from "@/components/ui/clipboard";
import { Button } from "@/components/ui/button";

const ClipboardDemo = () => (
  <ClipboardRoot value="https://ark-ui.com">
    <ClipboardControl>
      <ClipboardInput />
      <ClipboardTrigger asChild>
        <Button size="sm" variant="outline">
          <ClipboardIndicator copied={<span>Copied</span>}>
            <span>Copy</span>
          </ClipboardIndicator>
        </Button>
      </ClipboardTrigger>
    </ClipboardControl>
    <ClipboardValueText className="text-muted-foreground text-xs" />
  </ClipboardRoot>
);

export default ClipboardDemo;
`,
  "date-picker-demo.tsx": `"use client";

import { CalendarIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DatePicker,
  DatePickerCalendar,
  DatePickerControl,
  DatePickerInput,
  DatePickerLabel,
  DatePickerTrigger,
} from "@/components/ui/date-picker";

const DatePickerDemo = () => (
  <DatePicker locale="en-US" selectionMode="single">
    <DatePickerLabel>Date</DatePickerLabel>
    <DatePickerControl>
      <DatePickerInput />
      <DatePickerTrigger asChild>
        <Button aria-label="Open calendar" size="icon-sm" variant="outline">
          <CalendarIcon />
        </Button>
      </DatePickerTrigger>
    </DatePickerControl>
    <DatePickerCalendar />
  </DatePicker>
);

export default DatePickerDemo;
`,
  "input-group-demo.tsx": `"use client";

import {
  InputGroup,
  InputGroupInput,
  InputGroupText,
} from "@/components/ui/input-group";

const InputGroupDemo = () => (
  <InputGroup className="w-full max-w-md">
    <InputGroupText>https://</InputGroupText>
    <InputGroupInput placeholder="your-site.com" />
  </InputGroup>
);

export default InputGroupDemo;
`,
  "password-input-demo.tsx": `"use client";

import { PasswordInput } from "@/components/ui/password-input";

const PasswordInputDemo = () => (
  <PasswordInput className="w-full max-w-md" label="Password" />
);

export default PasswordInputDemo;
`,
  "pin-input-demo.tsx": `"use client";

import {
  PinInputControl,
  PinInputRoot,
  PinInputSlots,
} from "@/components/ui/pin-input";

const PinInputDemo = () => (
  <PinInputRoot className="w-full max-w-md" defaultValue={["1", "2"]}>
    <PinInputControl>
      <PinInputSlots />
    </PinInputControl>
  </PinInputRoot>
);

export default PinInputDemo;
`,
  "progress-circular-demo.tsx": `"use client";

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
`,
  "progress-linear-demo.tsx": `"use client";

import {
  ProgressLinear,
  ProgressLinearLabel,
  ProgressLinearValueText,
} from "@/components/ui/progress-linear";

const ProgressLinearDemo = () => (
  <ProgressLinear className="w-full max-w-md" value={64}>
    <ProgressLinearLabel>Progress</ProgressLinearLabel>
    <ProgressLinearValueText />
  </ProgressLinear>
);

export default ProgressLinearDemo;
`,
  "qr-code-demo.tsx": `"use client";

import {
  QrCode,
  QrCodeFrame,
  QrCodeOverlay,
  QrCodePattern,
} from "@/components/ui/qr-code";

const QrCodeDemo = () => (
  <QrCode encoding={{ ecc: "M" }} value="https://ark-ui.com">
    <QrCodeFrame>
      <QrCodePattern />
    </QrCodeFrame>
    <QrCodeOverlay>
      <span className="rounded bg-background/80 px-1 py-0.5 font-medium text-[10px]">
        ark-cn
      </span>
    </QrCodeOverlay>
  </QrCode>
);

export default QrCodeDemo;
`,
  "radio-group-demo.tsx": `"use client";

import { Radio, RadioGroup } from "@/components/ui/radio-group";

const RadioGroupDemo = () => (
  <RadioGroup className="w-full max-w-md" defaultValue="react">
    <Radio value="react">React</Radio>
    <Radio value="solid">Solid</Radio>
    <Radio value="vue">Vue</Radio>
  </RadioGroup>
);

export default RadioGroupDemo;
`,
  "rating-group-demo.tsx": `"use client";

import {
  RatingGroup,
  RatingGroupLabel,
  RatingStars,
} from "@/components/ui/rating-group";

const RatingGroupDemo = () => (
  <RatingGroup count={5} defaultValue={3}>
    <RatingGroupLabel>Rate this component</RatingGroupLabel>
    <RatingStars count={5} />
  </RatingGroup>
);

export default RatingGroupDemo;
`,
  "scroll-area-demo.tsx": `"use client";

import {
  ScrollArea,
  ScrollAreaContent,
  ScrollAreaViewport,
} from "@/components/ui/scroll-area";

const items = Array.from({ length: 20 }, (_, i) => "Item " + (i + 1));

const ScrollAreaDemo = () => (
  <ScrollArea className="w-full max-w-md rounded-lg border border-border">
    <ScrollAreaViewport className="h-56">
      <ScrollAreaContent className="p-3">
        <ul className="space-y-2">
          {items.map((item) => (
            <li key={item} className="rounded bg-muted/40 px-2 py-1.5 text-sm">
              {item}
            </li>
          ))}
        </ul>
      </ScrollAreaContent>
    </ScrollAreaViewport>
  </ScrollArea>
);

export default ScrollAreaDemo;
`,
  "segment-group-demo.tsx": `"use client";

import { Segment, SegmentGroup } from "@/components/ui/segment-group";

const SegmentGroupDemo = () => (
  <SegmentGroup defaultValue="weekly">
    <Segment value="daily">Daily</Segment>
    <Segment value="weekly">Weekly</Segment>
    <Segment value="monthly">Monthly</Segment>
  </SegmentGroup>
);

export default SegmentGroupDemo;
`,
  "select-demo.tsx": `"use client";

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
  <Select className="w-full max-w-md" collection={frameworks} defaultValue={["react"]}>
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
`,
  "separator-demo.tsx": `"use client";

import { Separator } from "@/components/ui/separator";

const SeparatorDemo = () => (
  <div className="w-full max-w-md space-y-3">
    <p className="font-medium text-sm">Top section</p>
    <Separator />
    <p className="text-muted-foreground text-sm">Bottom section</p>
  </div>
);

export default SeparatorDemo;
`,
  "sheet-demo.tsx": `"use client";

import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

const SheetDemo = () => (
  <Sheet>
    <SheetTrigger asChild>
      <Button size="sm" variant="outline">Open sheet</Button>
    </SheetTrigger>
    <SheetContent>
      <SheetHeader>
        <SheetTitle>Edit profile</SheetTitle>
        <SheetDescription>
          Make changes here. Click save when you are done.
        </SheetDescription>
      </SheetHeader>
      <SheetFooter>
        <SheetClose asChild>
          <Button size="sm">Save changes</Button>
        </SheetClose>
      </SheetFooter>
    </SheetContent>
  </Sheet>
);

export default SheetDemo;
`,
  "signature-pad-demo.tsx": `"use client";

import {
  SignaturePad,
  SignaturePadField,
  SignaturePadLabel,
} from "@/components/ui/signature-pad";

const SignaturePadDemo = () => (
  <SignaturePad className="w-full max-w-md">
    <SignaturePadLabel>Signature</SignaturePadLabel>
    <SignaturePadField className="h-40" />
  </SignaturePad>
);

export default SignaturePadDemo;
`,
  "spinner-demo.tsx": `"use client";

import { Spinner } from "@/components/ui/spinner";

const SpinnerDemo = () => <Spinner label="Loading" size="lg" />;

export default SpinnerDemo;
`,
  "swap-demo.tsx": `"use client";

import { Swap, SwapIndicator } from "@/components/ui/swap";

const SwapDemo = () => (
  <Swap className="inline-flex h-10 w-16 items-center justify-center rounded-lg border border-border bg-muted" defaultChecked>
    <SwapIndicator className="font-medium text-sm data-[state=unchecked]:hidden">
      ON
    </SwapIndicator>
    <SwapIndicator className="font-medium text-sm data-[state=checked]:hidden">
      OFF
    </SwapIndicator>
  </Swap>
);

export default SwapDemo;
`,
  "tree-view-demo.tsx": `"use client";

import { TreeBasicDemo } from "@/components/ark-ui-showcase-1";

const TreeViewDemoExample = () => <TreeBasicDemo />;

export default TreeViewDemoExample;
`,
};

for (const [name, content] of Object.entries(files)) {
  fs.writeFileSync(path.join(exDir, name), content, "utf8");
}

const showcase1Path = path.join(root, "src/components/ark-ui-showcase-1.tsx");
let s1 = fs.readFileSync(showcase1Path, "utf8");
const start = "// AUTO-EXPORT-START: docs-example-demos";
const end = "// AUTO-EXPORT-END: docs-example-demos";
const re = new RegExp(`${start}[\\s\\S]*?${end}\\n?`, "m");
const existing = (s1.match(/export\s*\{([\s\S]*?)\};/m) || [])[1] || "";
const names = new Set(
  existing
    .split("\n")
    .map((l) => l.replace(/[,\s]/g, ""))
    .filter(Boolean),
);
names.add("TreeBasicDemo");
const sorted = [...names].sort();
const block = `${start}\nexport {\n${sorted.map((n) => `  ${n},`).join("\n")}\n};\n${end}\n`;
s1 = s1.replace(re, block);
fs.writeFileSync(showcase1Path, s1, "utf8");

console.log("Wrote", Object.keys(files).length, "example files.");
