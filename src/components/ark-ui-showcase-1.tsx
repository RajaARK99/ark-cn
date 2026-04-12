"use client";

import { useFilter } from "@ark-ui/react/locale";
import { Portal } from "@ark-ui/react/portal";
// import { passwordStrength } from "check-password-strength";
import {
  AlignCenterIcon,
  AlignJustifyIcon,
  AlignLeftIcon,
  AlignRightIcon,
  BellIcon,
  BoldIcon,
  CheckIcon,
  // CableIcon,
  ChevronDownIcon,
  ChevronRight,
  // ZapIcon,
  FileIcon,
  // ChevronUpIcon,
  // Code2Icon,
  GlobeIcon,
  HeartIcon,
  InfoIcon,
  ItalicIcon,
  LayersIcon,
  MinusIcon,
  PauseIcon,
  PlayIcon,
  RotateCcwIcon,
  UnderlineIcon,
  XIcon,
} from "lucide-react";
import {
  // type CSSProperties,
  // type FormEvent,
  type ReactNode,
  useRef,
  useState,
} from "react";
import { Button } from "@/components/ui/button";
// import {
//   Dialog,
//   DialogDescription,
//   DialogPanel,
//   DialogPopup,
//   DialogTitle,
//   DialogTrigger,
// } from "@/components/ui/dialog";
import {
  Field,
  FieldDescription,
  // FieldError,
  // FieldInput,
  FieldLabel,
} from "@/components/ui/field";
// import {
//   Fieldset,
//   FieldsetDescription,
//   FieldsetError,
//   FieldsetLegend,
// } from "@/components/ui/fieldset";
import { Input } from "@/components/ui/input";
// import {
//   PasswordInput,
//   PasswordInputContext,
//   PasswordInputLabel,
//   PasswordInputRoot,
//   PasswordInputRootProvider,
//   usePasswordInput,
// } from "@/components/ui/password-input";
// import {
//   PinInputContext,
//   PinInputLabel,
//   PinInputRoot,
//   PinInputRootProvider,
//   PinInputSlots,
//   usePinInput,
// } from "@/components/ui/pin-input";
// import {
//   Popover,
//   PopoverAnchor,
//   PopoverCloseTrigger,
//   PopoverContext,
//   PopoverDescription,
//   PopoverIndicator,
//   PopoverPopup,
//   PopoverRootProvider,
//   PopoverTitle,
//   PopoverTrigger,
//   usePopover,
//   usePopoverContext,
// } from "@/components/ui/popover";
// import {
//   ProgressCircular,
//   ProgressCircularCircle,
//   ProgressCircularLabel,
//   ProgressCircularRange,
//   ProgressCircularRoot,
//   ProgressCircularRootProvider,
//   ProgressCircularTrack,
//   ProgressCircularValueText,
// } from "@/components/ui/progress-circular";
// import {
//   ProgressLinear,
//   ProgressLinearContext,
//   ProgressLinearLabel,
//   ProgressLinearRange,
//   ProgressLinearRoot,
//   ProgressLinearRootProvider,
//   ProgressLinearTrack,
//   ProgressLinearValueText,
//   ProgressLinearView,
//   useProgress,
// } from "@/components/ui/progress-linear";
// import {
//   QrCode,
//   QrCodeContext,
//   QrCodeDownloadTrigger,
//   QrCodeFrame,
//   QrCodeOverlay,
//   QrCodePattern,
//   QrCodeRootProvider,
//   useQrCode,
// } from "@/components/ui/qr-code";
// import {
//   Radio,
//   RadioGroup,
//   RadioGroupContext,
//   RadioGroupLabel,
//   RadioGroupRootProvider,
//   useRadioGroup,
//   useRadioGroupContext,
// } from "@/components/ui/radio-group";
// import {
//   RatingGroup,
//   RatingGroupLabel,
//   RatingGroupRootProvider,
//   RatingStars,
//   useRatingGroup,
// } from "@/components/ui/rating-group";
// import {
//   ScrollArea,
//   ScrollAreaContent,
//   ScrollAreaContext,
//   ScrollAreaCorner,
//   ScrollAreaRoot,
//   ScrollAreaRootProvider,
//   ScrollAreaScrollbar,
//   ScrollAreaThumb,
//   ScrollAreaViewport,
//   useScrollArea,
// } from "@/components/ui/scroll-area";
// import {
//   Segment,
//   SegmentGroup,
//   SegmentGroupContext,
//   SegmentGroupRoot,
//   SegmentGroupRootProvider,
//   useSegmentGroup,
//   useSegmentGroupContext,
// } from "@/components/ui/segment-group";
// import {
//   Select,
//   SelectContext,
//   SelectEmpty,
//   SelectGroupedList,
//   SelectItem,
//   SelectItemGroup,
//   SelectItemGroupLabel,
//   SelectItemIndicator,
//   SelectItemText,
//   SelectLabel,
//   SelectList,
//   SelectPopup,
//   SelectRootProvider,
//   SelectTriggerField,
//   SelectValue,
//   useListCollection,
//   useSelect,
//   useSelectContext,
// } from "@/components/ui/select";
// import {
//   SignaturePad,
//   SignaturePadClearTrigger,
//   SignaturePadControl,
//   SignaturePadLabel,
//   SignaturePadRootProvider,
//   useSignaturePad,
// } from "@/components/ui/signature-pad";
import {
  Slider,
  SliderContext,
  SliderDraggingIndicator,
  SliderField,
  SliderLabel,
  SliderMarker,
  SliderMarkerGroup,
  SliderRootProvider,
  SliderValueText,
  useSlider,
} from "@/components/ui/slider";
// import { Textarea } from "@/components/ui/textarea";
import {
  Timer,
  TimerActionTrigger,
  TimerArea,
  TimerControl,
  TimerItem,
  TimerSeparator,
  useTimer,
} from "@/components/ui/timer";
import {
  AnchoredToastProvider,
  anchoredToaster,
  ToastProvider,
  toaster,
} from "@/components/ui/toast";
import { Toggle, ToggleContext, ToggleIndicator } from "@/components/ui/toggle";
import {
  ToggleGroup,
  ToggleGroupItem,
  ToggleGroupRootProvider,
  ToggleGroupSeparator,
  useToggleGroup,
} from "@/components/ui/toggle-group";
import {
  Tooltip,
  TooltipContext,
  TooltipPopup,
  // TooltipProvider,
  TooltipRootProvider,
  TooltipTrigger,
  useTooltip,
} from "@/components/ui/tooltip";
import {
  Tour,
  TourActions,
  TourActionTrigger,
  TourBackdrop,
  TourCloseTrigger,
  TourControl,
  TourDescription,
  TourPopup,
  TourProgressText,
  TourSpotlight,
  TourTitle,
  useTour,
  waitForElement,
  waitForEvent,
} from "@/components/ui/tour";
import {
  createTreeCollection,
  TreeView,
  TreeViewBranch,
  TreeViewBranchContent,
  TreeViewBranchControl,
  TreeViewBranchIndentGuide,
  TreeViewBranchIndicator,
  TreeViewBranchText,
  TreeViewItem,
  TreeViewItemText,
  TreeViewLabel,
  TreeViewNodeCheckbox,
  TreeViewNodeCheckboxIndicator,
  TreeViewNodeContext,
  TreeViewNodeProvider,
  TreeViewNodeRenameInput,
  TreeViewRootProvider,
  TreeViewTree,
  useTreeView,
  // useTreeViewContext,
} from "@/components/ui/tree-view";
import { cn } from "@/lib/utils";

// import { ButtonGroup } from "./ui/button-group";

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

// const SegmentDemoBox = ({
//   label,
//   children,
//   className,
// }: {
//   label: string;
//   children: ReactNode;
//   className?: string;
// }) => (
//   <div
//     className={cn(
//       "flex w-full flex-col gap-3 rounded-lg border border-border/70 bg-muted/15 p-4",
//       className,
//     )}
//   >
//     <span className="font-medium text-[0.65rem] text-muted-foreground uppercase tracking-wider">
//       {label}
//     </span>
//     <div className="min-w-0">{children}</div>
//   </div>
// );

// // const PasswordToggle = () => (
// //   <PasswordInputVisibilityTrigger asChild>
// //     <Button
// //       aria-label="Toggle password visibility"
// //       className="h-auto min-h-8.5 shrink-0 rounded-none rounded-e-[calc(var(--radius-lg)-1px)] sm:min-h-7.5"
// //       type="button"
// //       variant="ghost"
// //       size="icon-sm"
// //     >
// //       <PasswordInputIndicator
// //         fallback={<EyeIcon aria-hidden className="size-4" />}
// //       >
// //         <EyeOffIcon aria-hidden className="size-4" />
// //       </PasswordInputIndicator>
// //     </Button>
// //   </PasswordInputVisibilityTrigger>
// // );

// const PasswordInputDefaultDemo = () => (
//   <div className="w-full max-w-xs">
//     <PasswordInputRoot>
//       <PasswordInputLabel>Password</PasswordInputLabel>
//       <PasswordInput placeholder="Enter password" />
//     </PasswordInputRoot>
//   </div>
// );

// const PasswordInputAutocompleteDemo = () => (
//   <div className="flex w-full max-w-md flex-col gap-4 sm:flex-row">
//     <PasswordInputRoot autoComplete="new-password" className="flex-1">
//       <PasswordInputLabel>New password</PasswordInputLabel>

//       <PasswordInput name="new-password" placeholder="Create a password" />
//     </PasswordInputRoot>
//     <PasswordInputRoot autoComplete="current-password" className="flex-1">
//       <PasswordInputLabel>Current password</PasswordInputLabel>

//       <PasswordInput name="current-password" placeholder="Sign in" />
//     </PasswordInputRoot>
//   </div>
// );

// const PasswordInputControlledVisibilityDemo = () => {
//   const [visible, setVisible] = useState(false);
//   return (
//     <div className="flex w-full max-w-xs flex-col gap-2">
//       <p className="text-muted-foreground text-xs">
//         Controlled visible:{" "}
//         <span className="font-medium text-foreground">{String(visible)}</span>
//       </p>
//       <PasswordInputRoot
//         visible={visible}
//         onVisibilityChange={(d) => setVisible(d.visible)}
//       >
//         <PasswordInputLabel>Password</PasswordInputLabel>

//         <PasswordInput placeholder="Toggle is controlled externally" />
//       </PasswordInputRoot>
//     </div>
//   );
// };

// const PasswordInputRootProviderDemo = () => {
//   const store = usePasswordInput({ defaultVisible: false });
//   return (
//     <PasswordInputRootProvider value={store}>
//       <div className="flex w-full max-w-xs flex-col gap-2">
//         <p className="text-muted-foreground text-xs">
//           usePasswordInput + PasswordInputRootProvider — visible{" "}
//           <span className="font-medium text-foreground">
//             {String(store.visible)}
//           </span>
//         </p>
//         <PasswordInputLabel>Password</PasswordInputLabel>

//         <PasswordInput defaultValue="hunter2" />

//         <Button
//           onClick={() => store.toggleVisible()}
//           size="sm"
//           type="button"
//           variant="outline"
//         >
//           Toggle from outside
//         </Button>
//       </div>
//     </PasswordInputRootProvider>
//   );
// };

// const PasswordInputWithFieldDemo = () => (
//   <Field className="max-w-xs">
//     <FieldLabel>Account password</FieldLabel>
//     <PasswordInputRoot>
//       <PasswordInput placeholder="••••••••" />
//     </PasswordInputRoot>
//     <FieldDescription>
//       Field label and helper text; input is wired with FieldInput asChild.
//     </FieldDescription>
//   </Field>
// );

// const PasswordInputIgnoreManagersDemo = () => (
//   <div className="w-full max-w-xs">
//     <PasswordInputRoot ignorePasswordManagers>
//       <PasswordInputLabel>API key</PasswordInputLabel>
//       <PasswordInput placeholder="sk-…" />
//     </PasswordInputRoot>
//   </div>
// );

// const STRENGTH_BAR = [
//   "bg-destructive/80",
//   "bg-orange-500/90",
//   "bg-amber-400/90",
//   "bg-emerald-600/90",
// ] as const;

// const PasswordInputStrengthMeterDemo = () => {
//   const [value, setValue] = useState("");
//   const result = passwordStrength(value);
//   const widthPct =
//     value.length === 0 ? 0 : Math.min(100, ((result.id + 1) / 4) * 100);

//   return (
//     <div className="flex w-full max-w-xs flex-col gap-2">
//       <PasswordInputRoot>
//         <PasswordInputLabel>Password</PasswordInputLabel>
//         <PasswordInput
//           onChange={(e) => setValue(e.currentTarget.value)}
//           value={value}
//         />
//       </PasswordInputRoot>
//       <div className="space-y-1">
//         <div className="h-1.5 w-full overflow-hidden rounded-full bg-muted">
//           <div
//             className={cn(
//               "h-full transition-[width] duration-200",
//               STRENGTH_BAR[result.id] ?? STRENGTH_BAR[0],
//             )}
//             style={{ width: `${widthPct}%` }}
//           />
//         </div>
//         <p className="text-muted-foreground text-xs">
//           {value.length === 0 ? (
//             "Type to measure strength."
//           ) : (
//             <>
//               Strength:{" "}
//               <span className="font-medium text-foreground">
//                 {result.value}
//               </span>
//               <span className="text-muted-foreground">
//                 {" "}
//                 · length {result.length}
//               </span>
//             </>
//           )}
//         </p>
//       </div>
//     </div>
//   );
// };

// const PasswordInputValidationDemo = () => {
//   const [value, setValue] = useState("");
//   const invalid = value.length > 0 && value.length < 8;

//   return (
//     <div className="w-full max-w-xs">
//       <PasswordInputRoot invalid={invalid}>
//         <PasswordInputLabel>Password</PasswordInputLabel>
//         <PasswordInput
//           onChange={(e) => setValue(e.currentTarget.value)}
//           value={value}
//         />
//       </PasswordInputRoot>
//       {invalid ? (
//         <p className="mt-1.5 text-destructive text-xs">
//           Use at least 8 characters.
//         </p>
//       ) : (
//         <p className="mt-1.5 text-muted-foreground text-xs">
//           Enter 8+ characters (invalid while too short).
//         </p>
//       )}
//     </div>
//   );
// };

// const PasswordInputContextDemo = () => (
//   <PasswordInputRoot className="max-w-xs">
//     <PasswordInputContext>
//       {(ctx) => (
//         <p className="text-muted-foreground text-xs">
//           Context: password is{" "}
//           <span className="font-medium text-foreground">
//             {ctx.visible ? "shown" : "masked"}
//           </span>
//         </p>
//       )}
//     </PasswordInputContext>
//     <PasswordInputLabel>Password</PasswordInputLabel>
//     <PasswordInput placeholder="Try the eye toggle" />
//   </PasswordInputRoot>
// );

// const PasswordInputTranslationsDemo = () => (
//   <div className="w-full max-w-xs">
//     <PasswordInputRoot
//       translations={{
//         visibilityTrigger: (visible) =>
//           visible ? "Hide password" : "Show password",
//       }}
//     >
//       <PasswordInputLabel>Password</PasswordInputLabel>
//       <PasswordInput />
//     </PasswordInputRoot>
//   </div>
// );

// const PinInputSeparatedDemo = () => (
//   <div className="w-full max-w-md">
//     <PinInputRoot aria-label="Verification code" count={6}>
//       <PinInputLabel>Separated (default)</PinInputLabel>
//       <PinInputSlots variant="separated" separatorBetweenCount={3} />
//     </PinInputRoot>
//   </div>
// );

// const PinInputGroupedDemo = () => (
//   <div className="w-full max-w-md">
//     <PinInputRoot aria-label="Verification code" count={6}>
//       <PinInputLabel>Grouped</PinInputLabel>
//       <PinInputSlots variant="grouped" />
//     </PinInputRoot>
//   </div>
// );

// const PinInputGroupedThreeThreeDemo = () => (
//   <div className="w-full max-w-md">
//     <PinInputRoot aria-label="Verification code" count={6}>
//       <PinInputLabel>Grouped 3 · 3</PinInputLabel>
//       <PinInputSlots variant="grouped" separatorBetweenCount={3} />
//     </PinInputRoot>
//   </div>
// );

// const PinInputGroupedOneFourOneDemo = () => (
//   <div className="w-full max-w-md">
//     <PinInputRoot aria-label="Verification code" count={6}>
//       <PinInputLabel>1 · 4 · 1</PinInputLabel>
//       <PinInputSlots variant="grouped" separatorBetweenCount={1} />
//     </PinInputRoot>
//   </div>
// );

// const PinInputGroupedPairsDemo = () => (
//   <div className="w-full max-w-md">
//     <PinInputRoot aria-label="Verification code" count={6}>
//       <PinInputLabel>Pairs 2 · 2 · 2</PinInputLabel>
//       <PinInputSlots variant="grouped" separatorBetweenCount={2} />
//     </PinInputRoot>
//   </div>
// );

// const PinInputPlaceholderDemo = () => (
//   <div className="w-full max-w-xs">
//     <PinInputRoot count={4} placeholder="·">
//       <PinInputLabel>Custom placeholder</PinInputLabel>
//       <PinInputSlots variant="separated" />
//     </PinInputRoot>
//   </div>
// );

// const PinInputBlurOnCompleteDemo = () => (
//   <div className="w-full max-w-xs">
//     <PinInputRoot blurOnComplete count={4}>
//       <PinInputLabel>Blur when complete</PinInputLabel>
//       <PinInputSlots variant="separated" />
//     </PinInputRoot>
//   </div>
// );

// const PinInputOtpDemo = () => (
//   <div className="w-full max-w-md">
//     <PinInputRoot count={6} otp>
//       <PinInputLabel>OTP (autocomplete)</PinInputLabel>
//       <PinInputSlots variant="grouped" />
//     </PinInputRoot>
//     <p className="mt-2 text-muted-foreground text-xs">
//       Sets one-time-code autocomplete on fields (see Ark{" "}
//       <a
//         className="text-primary underline-offset-4 hover:underline"
//         href="https://ark-ui.com/docs/components/pin-input"
//         rel="noreferrer"
//         target="_blank"
//       >
//         Pin Input
//       </a>
//       ).
//     </p>
//   </div>
// );

// const PinInputMaskDemo = () => (
//   <div className="w-full max-w-xs">
//     <PinInputRoot count={4} mask>
//       <PinInputLabel>Masked</PinInputLabel>
//       <PinInputSlots variant="separated" />
//     </PinInputRoot>
//   </div>
// );

// const PinInputRootProviderDemo = () => {
//   const [message, setMessage] = useState<string | null>(null);
//   const store = usePinInput({
//     count: 6,
//     onValueComplete: (d) => setMessage(`Complete: ${d.valueAsString}`),
//   });
//   return (
//     <PinInputRootProvider className="max-w-md" value={store}>
//       <div className="flex flex-col gap-2">
//         <p className="text-muted-foreground text-xs">
//           usePinInput + PinInputRootProvider — focus from outside.
//         </p>
//         {message ? (
//           <p className="font-medium text-foreground text-xs">{message}</p>
//         ) : null}
//         <PinInputLabel>Programmatic control</PinInputLabel>
//         <div className="flex flex-wrap items-center gap-2">
//           <PinInputSlots variant="grouped" />
//           <Button
//             onClick={() => store.focus()}
//             size="sm"
//             type="button"
//             variant="outline"
//           >
//             Focus
//           </Button>
//         </div>
//       </div>
//     </PinInputRootProvider>
//   );
// };

// const PinInputWithFieldDemo = () => (
//   <Field className="max-w-md">
//     <FieldLabel>Code</FieldLabel>
//     <PinInputRoot count={6}>
//       <PinInputSlots variant="separated" />
//     </PinInputRoot>
//     <FieldDescription>
//       Field wires disabled/invalid/required into Ark Field context for the pin
//       root.
//     </FieldDescription>
//   </Field>
// );

// const PinInputFieldInvalidDemo = () => (
//   <Field className="max-w-md" invalid>
//     <FieldLabel>Invalid</FieldLabel>
//     <PinInputRoot count={4} invalid>
//       <PinInputSlots variant="separated" />
//     </PinInputRoot>
//     <FieldError>Code does not match the expected pattern.</FieldError>
//   </Field>
// );

// const PinInputControlledDemo = () => {
//   const [value, setValue] = useState<string[]>(["", "", "", "", "", ""]);
//   const [complete, setComplete] = useState<string | null>(null);
//   return (
//     <div className="flex w-full max-w-md flex-col gap-2">
//       <PinInputRoot
//         count={6}
//         onValueChange={(d) => {
//           setValue(d.value);
//           setComplete(null);
//         }}
//         onValueComplete={(d) => setComplete(d.valueAsString)}
//         value={value}
//       >
//         <PinInputLabel>Controlled</PinInputLabel>
//         <PinInputSlots variant="separated" />
//       </PinInputRoot>
//       <p className="text-muted-foreground text-xs">
//         Value:{" "}
//         <span className="font-mono text-foreground">
//           {value.join("") || "—"}
//         </span>
//         {complete ? (
//           <>
//             {" "}
//             · complete:{" "}
//             <span className="font-medium text-foreground">{complete}</span>
//           </>
//         ) : null}
//       </p>
//     </div>
//   );
// };

// const PinInputInvalidEntryDemo = () => {
//   const [last, setLast] = useState<string | null>(null);
//   return (
//     <div className="w-full max-w-xs">
//       <PinInputRoot
//         count={4}
//         onValueInvalid={(d) => setLast(`${d.value} @ ${d.index}`)}
//         type="numeric"
//       >
//         <PinInputLabel>Digits only</PinInputLabel>
//         <PinInputSlots variant="separated" />
//       </PinInputRoot>
//       <p className="mt-2 text-muted-foreground text-xs">
//         Try a letter — onValueInvalid:{" "}
//         <span className="font-mono text-foreground">{last ?? "—"}</span>
//       </p>
//     </div>
//   );
// };

// const PinInputAlphanumericDemo = () => (
//   <div className="w-full max-w-md">
//     <PinInputRoot count={6} type="alphanumeric">
//       <PinInputLabel>Alphanumeric</PinInputLabel>
//       <PinInputSlots variant="grouped" />
//     </PinInputRoot>
//   </div>
// );

// const PinInputDisabledDemo = () => (
//   <div className="w-full max-w-xs">
//     <PinInputRoot count={4} disabled>
//       <PinInputLabel>Disabled</PinInputLabel>
//       <PinInputSlots variant="separated" />
//     </PinInputRoot>
//   </div>
// );

// const PinInputReadOnlyDemo = () => (
//   <div className="w-full max-w-xs">
//     <PinInputRoot count={4} defaultValue={["1", "2", "3", "4"]} readOnly>
//       <PinInputLabel>Read only</PinInputLabel>
//       <PinInputSlots variant="separated" />
//     </PinInputRoot>
//   </div>
// );

// const PinInputContextDemo = () => (
//   <PinInputRoot className="max-w-md" count={6}>
//     <PinInputContext>
//       {(ctx) => (
//         <p className="text-muted-foreground text-xs">
//           Context:{" "}
//           <span className="font-medium text-foreground">
//             {ctx.complete ? "complete" : "in progress"}
//           </span>
//           {" · "}
//           <span className="font-mono">{ctx.valueAsString || "—"}</span>
//         </p>
//       )}
//     </PinInputContext>
//     <PinInputLabel>Render prop</PinInputLabel>
//     <PinInputSlots variant="grouped" />
//   </PinInputRoot>
// );

// const PinInputFourDigitsDemo = () => (
//   <div className="w-full max-w-xs">
//     <PinInputRoot count={4}>
//       <PinInputLabel>Four digits</PinInputLabel>
//       <PinInputSlots variant="grouped" />
//     </PinInputRoot>
//   </div>
// );

// const ProgressCircularDefaultDemo = () => (
//   <ProgressCircular defaultValue={50} showCenterValue size={112} />
// );

// const ProgressCircularMinMaxDemo = () => (
//   <ProgressCircular
//     defaultValue={20}
//     formatOptions={{ maximumFractionDigits: 0, style: "decimal" }}
//     max={30}
//     min={10}
//     showCenterValue
//     size={112}
//   />
// );

// const ProgressCircularIndeterminateDemo = () => (
//   <ProgressCircular showThumb value={null} size={112} />
// );

// const ProgressCircularLabelDemo = () => (
//   <ProgressCircular
//     label="Uploading files"
//     showCenterValue
//     size={112}
//     value={72}
//     variant="labeled"
//   />
// );

// const ProgressCircularRootProviderDemo = () => {
//   const store = useProgress({ defaultValue: 36 });
//   return (
//     <ProgressCircularRootProvider
//       className="max-w-xs"
//       style={
//         {
//           "--size": "112px",
//           "--thickness": "8px",
//         } as CSSProperties
//       }
//       value={store}
//     >
//       <p className="text-muted-foreground text-xs">
//         useProgress + RootProvider — value{" "}
//         <span className="font-medium text-foreground tabular-nums">
//           {store.value ?? "—"}
//         </span>
//       </p>
//       <ProgressCircularLabel>External control</ProgressCircularLabel>
//       <div className="relative inline-flex">
//         <ProgressCircularCircle className="text-primary [--thickness:8px] [--size:112px]">
//           <ProgressCircularTrack />
//           <ProgressCircularRange />
//         </ProgressCircularCircle>
//         <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
//           <ProgressCircularValueText className="font-semibold text-[0.9rem] tabular-nums" />
//         </div>
//       </div>
//       <div className="flex flex-wrap justify-center gap-2">
//         <Button
//           onClick={() => store.setValue(Math.max(0, (store.value ?? 0) - 15))}
//           size="sm"
//           type="button"
//           variant="outline"
//         >
//           −15
//         </Button>
//         <Button
//           onClick={() => store.setValue(Math.min(100, (store.value ?? 0) + 15))}
//           size="sm"
//           type="button"
//           variant="outline"
//         >
//           +15
//         </Button>
//         <Button
//           onClick={() => store.setToMin()}
//           size="sm"
//           type="button"
//           variant="secondary"
//         >
//           Min
//         </Button>
//         <Button
//           onClick={() => store.setToMax()}
//           size="sm"
//           type="button"
//           variant="secondary"
//         >
//           Max
//         </Button>
//       </div>
//     </ProgressCircularRootProvider>
//   );
// };

// const ProgressCircularRingDemo = () => (
//   <ProgressCircular
//     defaultValue={45}
//     showCenterValue
//     size={160}
//     variant="ring"
//   />
// );

// const ProgressCircularThumbDemo = () => (
//   <ProgressCircular
//     defaultValue={64}
//     showCenterValue
//     showThumb
//     size={128}
//     thickness={10}
//   />
// );

// const ProgressCircularRingPlainDemo = () => (
//   <ProgressCircular defaultValue={88} showThumb={false} size={112} />
// );

// const ProgressCircularRowDemo = () => (
//   <ProgressCircular
//     label="Storage"
//     showCenterValue
//     size={96}
//     thickness={7}
//     value={55}
//     variant="row"
//   />
// );

// const ProgressCircularComposedDemo = () => (
//   <ProgressCircularRoot
//     className="max-w-xs"
//     defaultValue={58}
//     style={
//       {
//         "--size": "112px",
//         "--thickness": "8px",
//       } as CSSProperties
//     }
//   >
//     <ProgressCircularLabel>Anatomy composition</ProgressCircularLabel>
//     <div className="relative inline-flex">
//       <ProgressCircularCircle>
//         <ProgressCircularTrack />
//         <ProgressCircularRange />
//       </ProgressCircularCircle>
//     </div>
//     <ProgressCircularValueText className="text-muted-foreground text-xs" />
//   </ProgressCircularRoot>
// );

// const ProgressCircularControlledDemo = () => {
//   const [value, setValue] = useState(42);
//   return (
//     <div className="flex w-full max-w-xs flex-col items-center gap-3">
//       <ProgressCircular
//         onValueChange={(d) => setValue(d.value ?? 0)}
//         showCenterValue
//         size={120}
//         value={value}
//       />
//       <input
//         aria-label="Progress value"
//         className="w-full accent-primary"
//         max={100}
//         min={0}
//         onChange={(e) => setValue(Number(e.target.value))}
//         type="range"
//         value={value}
//       />
//       <p className="text-muted-foreground text-xs">
//         Controlled <span className="font-mono text-foreground">{value}</span>
//       </p>
//     </div>
//   );
// };

// const ProgressLinearDefaultDemo = () => (
//   <div className="w-full max-w-md">
//     <ProgressLinear defaultValue={50} showValueText />
//   </div>
// );

// const ProgressLinearMinMaxDemo = () => (
//   <div className="w-full max-w-md">
//     <ProgressLinear
//       defaultValue={20}
//       formatOptions={{ maximumFractionDigits: 0, style: "decimal" }}
//       max={30}
//       min={10}
//       showValueText
//     />
//   </div>
// );

// const ProgressLinearIndeterminateDemo = () => (
//   <div className="w-full max-w-md">
//     <ProgressLinear label="Loading" value={null} />
//   </div>
// );

// const ProgressLinearValueTextDemo = () => (
//   <div className="w-full max-w-md">
//     <ProgressLinear
//       defaultValue={72}
//       showValueText
//       translations={{
//         value: (d) =>
//           d.value == null
//             ? "Loading"
//             : `${Math.round(d.percent)}% complete (${d.value} of ${d.max})`,
//       }}
//     />
//   </div>
// );

// const ProgressLinearVerticalDemo = () => (
//   <div className="flex items-end gap-4">
//     <ProgressLinearRoot
//       className="max-w-40 flex-row items-end gap-3"
//       defaultValue={55}
//       orientation="vertical"
//     >
//       <ProgressLinearLabel className="whitespace-nowrap pb-2 text-xs">
//         Upload
//       </ProgressLinearLabel>
//       <ProgressLinearTrack>
//         <ProgressLinearRange />
//       </ProgressLinearTrack>
//       <ProgressLinearValueText className="pb-2 text-muted-foreground text-xs" />
//     </ProgressLinearRoot>
//   </div>
// );

// const ProgressLinearRootProviderDemo = () => {
//   const store = useProgress({ defaultValue: 28 });
//   return (
//     <ProgressLinearRootProvider className="max-w-md" value={store}>
//       <p className="text-muted-foreground text-xs">
//         useProgress + RootProvider —{" "}
//         <span className="font-medium text-foreground tabular-nums">
//           {store.value ?? "—"}
//         </span>
//       </p>
//       <ProgressLinearLabel>External control</ProgressLinearLabel>
//       <ProgressLinearTrack className="h-2">
//         <ProgressLinearRange />
//       </ProgressLinearTrack>
//       <div className="flex flex-wrap gap-2">
//         <Button
//           onClick={() => store.setValue(Math.max(0, (store.value ?? 0) - 12))}
//           size="sm"
//           type="button"
//           variant="outline"
//         >
//           −12
//         </Button>
//         <Button
//           onClick={() => store.setValue(Math.min(100, (store.value ?? 0) + 12))}
//           size="sm"
//           type="button"
//           variant="outline"
//         >
//           +12
//         </Button>
//         <Button
//           onClick={() => store.setToMin()}
//           size="sm"
//           type="button"
//           variant="secondary"
//         >
//           Min
//         </Button>
//         <Button
//           onClick={() => store.setToMax()}
//           size="sm"
//           type="button"
//           variant="secondary"
//         >
//           Max
//         </Button>
//       </div>
//     </ProgressLinearRootProvider>
//   );
// };

// const ProgressLinearComposedDemo = () => (
//   <ProgressLinearRoot className="max-w-md" defaultValue={58}>
//     <ProgressLinearLabel>Anatomy composition</ProgressLinearLabel>
//     <ProgressLinearTrack className="h-2">
//       <ProgressLinearRange />
//     </ProgressLinearTrack>
//     <ProgressLinearValueText className="text-muted-foreground text-xs" />
//   </ProgressLinearRoot>
// );

// const ProgressLinearControlledDemo = () => {
//   const [value, setValue] = useState(42);
//   return (
//     <div className="flex w-full max-w-md flex-col gap-3">
//       <ProgressLinear
//         onValueChange={(d) => setValue(d.value ?? 0)}
//         showValueText
//         value={value}
//       />
//       <input
//         aria-label="Linear progress value"
//         className="w-full accent-primary"
//         max={100}
//         min={0}
//         onChange={(e) => setValue(Number(e.target.value))}
//         type="range"
//         value={value}
//       />
//     </div>
//   );
// };

// const ProgressLinearViewDemo = () => (
//   <ProgressLinearRoot className="max-w-md" defaultValue={75}>
//     <div className="flex min-h-10 flex-col gap-1">
//       <ProgressLinearView state="loading">
//         <p className="text-muted-foreground text-xs">Still working…</p>
//       </ProgressLinearView>
//       <ProgressLinearView state="complete">
//         <p className="text-emerald-600 text-xs">Finished</p>
//       </ProgressLinearView>
//       <ProgressLinearView state="indeterminate">
//         <p className="text-muted-foreground text-xs">Indeterminate</p>
//       </ProgressLinearView>
//     </div>
//     <ProgressLinearTrack className="mt-1 h-2">
//       <ProgressLinearRange />
//     </ProgressLinearTrack>
//   </ProgressLinearRoot>
// );

// const ProgressLinearContextDemo = () => (
//   <ProgressLinearRoot className="max-w-md" defaultValue={48}>
//     <ProgressLinearContext>
//       {(ctx) => (
//         <p className="text-muted-foreground text-xs">
//           <span className="font-medium text-foreground tabular-nums">
//             {ctx.percentAsString || `${Math.round(ctx.percent)}%`}
//           </span>
//           {" · "}
//           {ctx.indeterminate ? "indeterminate" : "determinate"}
//         </p>
//       )}
//     </ProgressLinearContext>
//     <ProgressLinearTrack className="h-2">
//       <ProgressLinearRange />
//     </ProgressLinearTrack>
//   </ProgressLinearRoot>
// );

// const ProgressLinearWithFieldDemo = () => (
//   <Field className="max-w-md">
//     <FieldLabel>Task progress</FieldLabel>
//     <ProgressLinear defaultValue={66} showValueText />
//     <FieldDescription>
//       Field label and helper; linear bar uses Root → Track → Range.
//     </FieldDescription>
//   </Field>
// );

// const ProgressLinearSizesDemo = () => (
//   <div className="flex w-full max-w-md flex-col gap-4">
//     <ProgressLinear defaultValue={30} label="Small" showValueText size="sm" />
//     <ProgressLinear defaultValue={50} label="Medium" showValueText size="md" />
//     <ProgressLinear defaultValue={80} label="Large" showValueText size="lg" />
//   </div>
// );

// const ProgressLinearCompleteDemo = () => (
//   <div className="w-full max-w-md">
//     <ProgressLinear defaultValue={100} label="Complete" showValueText />
//   </div>
// );

// const PopoverBasicDemo = () => (
//   <Popover>
//     <PopoverTrigger asChild>
//       <Button type="button" variant="outline">
//         Open popover
//       </Button>
//     </PopoverTrigger>
//     <PopoverPopup className="w-80 max-w-[min(20rem,var(--available-width,20rem))]">
//       <div className="mb-4 flex flex-col gap-1">
//         <PopoverTitle className="text-base">Send us feedback</PopoverTitle>
//         <PopoverDescription>Let us know how we can improve.</PopoverDescription>
//       </div>
//       <form
//         className="flex flex-col gap-3"
//         onSubmit={(e) => {
//           e.preventDefault();
//         }}
//       >
//         <Field>
//           <Textarea
//             aria-label="Send feedback"
//             id="popover-feedback"
//             placeholder="How can we improve?"
//           />
//         </Field>
//         <Button type="submit">Send feedback</Button>
//       </form>
//     </PopoverPopup>
//   </Popover>
// );

// const PopoverCloseButtonDemo = () => (
//   <Popover>
//     <PopoverTrigger asChild>
//       <Button type="button" variant="outline">
//         Notifications
//       </Button>
//     </PopoverTrigger>
//     <PopoverPopup className="relative w-80 max-w-[min(20rem,var(--available-width,20rem))]">
//       <PopoverCloseTrigger
//         aria-label="Close"
//         asChild
//         className="absolute inset-e-2 top-2"
//       >
//         <Button size="icon" type="button" variant="ghost">
//           <XIcon className="size-4" />
//         </Button>
//       </PopoverCloseTrigger>
//       <div className="pe-8">
//         <PopoverTitle className="text-base">Notifications</PopoverTitle>
//         <PopoverDescription>
//           You are all caught up. Good job!
//         </PopoverDescription>
//       </div>
//       <PopoverCloseTrigger asChild className="mt-3">
//         <Button type="button" variant="outline">
//           Close
//         </Button>
//       </PopoverCloseTrigger>
//     </PopoverPopup>
//   </Popover>
// );

// const PopoverControlledDemo = () => {
//   const [open, setOpen] = useState(false);

//   return (
//     <div className="flex flex-col gap-3">
//       <Button
//         onClick={() => setOpen((o) => !o)}
//         size="sm"
//         type="button"
//         variant="outline"
//       >
//         Toggle from outside
//       </Button>
//       <Popover onOpenChange={(d) => setOpen(d.open)} open={open}>
//         <PopoverTrigger asChild>
//           <Button type="button" variant="outline">
//             Controlled trigger
//           </Button>
//         </PopoverTrigger>
//         <PopoverPopup>
//           <PopoverTitle>Open is synced</PopoverTitle>
//           <PopoverDescription>
//             <span className="font-medium text-foreground">{String(open)}</span>
//           </PopoverDescription>
//         </PopoverPopup>
//       </Popover>
//     </div>
//   );
// };

// const PopoverRootProviderDemo = () => {
//   const store = usePopover({ defaultOpen: false });

//   return (
//     <div className="flex flex-col gap-2">
//       <output className="text-muted-foreground text-xs">
//         Open: {String(store.open)}
//       </output>
//       <PopoverRootProvider value={store}>
//         <PopoverTrigger asChild>
//           <Button type="button" variant="outline">
//             Provider trigger
//           </Button>
//         </PopoverTrigger>
//         <PopoverPopup>
//           <PopoverTitle>usePopover</PopoverTitle>
//           <PopoverDescription>
//             State lives in the store; toggle from outside below.
//           </PopoverDescription>
//           <Button
//             className="mt-2"
//             onClick={() => store.setOpen(false)}
//             size="sm"
//             type="button"
//             variant="secondary"
//           >
//             Close from content
//           </Button>
//         </PopoverPopup>
//       </PopoverRootProvider>
//       <Button
//         onClick={() => store.setOpen(!store.open)}
//         size="sm"
//         type="button"
//         variant="outline"
//       >
//         Toggle store
//       </Button>
//     </div>
//   );
// };

// const PopoverPlacementDemo = () => (
//   <Popover positioning={{ gutter: 12, placement: "right" }}>
//     <PopoverTrigger asChild>
//       <Button type="button" variant="outline">
//         Opens to the right
//       </Button>
//     </PopoverTrigger>
//     <PopoverPopup>
//       <PopoverTitle>Placement</PopoverTitle>
//       <PopoverDescription>
//         Root <code className="text-foreground">positioning.placement</code> is
//         set to <code className="text-foreground">right</code>.
//       </PopoverDescription>
//     </PopoverPopup>
//   </Popover>
// );

// const PopoverCloseBehaviorDemo = () => (
//   <Popover closeOnEscape={false} closeOnInteractOutside={false}>
//     <PopoverTrigger asChild>
//       <Button type="button" variant="outline">
//         Stays open
//       </Button>
//     </PopoverTrigger>
//     <PopoverPopup>
//       <PopoverTitle>Custom dismiss</PopoverTitle>
//       <PopoverDescription>
//         Outside click and Escape are disabled — use the button to close.
//       </PopoverDescription>
//       <PopoverCloseTrigger asChild className="mt-3">
//         <Button size="sm" type="button" variant="secondary">
//           Close popover
//         </Button>
//       </PopoverCloseTrigger>
//     </PopoverPopup>
//   </Popover>
// );

// const PopoverModalDemo = () => (
//   <Popover modal>
//     <PopoverTrigger asChild>
//       <Button type="button" variant="outline">
//         Modal popover
//       </Button>
//     </PopoverTrigger>
//     <PopoverPopup>
//       <PopoverTitle>Modal layer</PopoverTitle>
//       <PopoverDescription>
//         Focus is trapped, outside scroll is blocked, and background is inert
//         while open.
//       </PopoverDescription>
//     </PopoverPopup>
//   </Popover>
// );

// const PopoverAnchorDemo = () => (
//   <Popover portalled={false}>
//     <div className="flex flex-wrap items-center gap-2">
//       <PopoverTrigger asChild>
//         <Button type="button" variant="outline">
//           Open
//         </Button>
//       </PopoverTrigger>
//       <PopoverAnchor>
//         <Input
//           aria-label="Anchor reference"
//           className="max-w-48"
//           placeholder="Anchor positions to this field"
//         />
//       </PopoverAnchor>
//     </div>
//     <PopoverPopup disablePortal>
//       <PopoverTitle>Anchor</PopoverTitle>
//       <PopoverDescription>
//         Content is positioned relative to the anchor element, not only the
//         trigger.
//       </PopoverDescription>
//     </PopoverPopup>
//   </Popover>
// );

// const PopoverSameWidthDemo = () => (
//   <Popover positioning={{ sameWidth: true }}>
//     <PopoverTrigger asChild>
//       <Button className="w-56 justify-center" type="button" variant="outline">
//         Same width as trigger
//       </Button>
//     </PopoverTrigger>
//     <PopoverPopup className="w-(--reference-width)! max-w-none! min-w-0 p-3">
//       <PopoverTitle className="text-xs">Same width</PopoverTitle>
//       <PopoverDescription className="text-xs">
//         <code className="text-foreground">positioning.sameWidth</code> on Root.
//       </PopoverDescription>
//     </PopoverPopup>
//   </Popover>
// );

// const PopoverLazyMountDemo = () => (
//   <Popover lazyMount unmountOnExit>
//     <PopoverTrigger asChild>
//       <Button type="button" variant="outline">
//         Lazy mount
//       </Button>
//     </PopoverTrigger>
//     <PopoverPopup>
//       <PopoverTitle>Lazy mount</PopoverTitle>
//       <PopoverDescription>
//         Content mounts on first open and unmounts on close when{" "}
//         <code className="text-foreground">unmountOnExit</code> is set.
//       </PopoverDescription>
//     </PopoverPopup>
//   </Popover>
// );

// const PopoverNestedDemo = () => (
//   <Popover>
//     <PopoverTrigger asChild>
//       <Button type="button" variant="outline">
//         Nested
//       </Button>
//     </PopoverTrigger>
//     <PopoverPopup>
//       <PopoverTitle>Outer</PopoverTitle>
//       <PopoverDescription>Open the inner popover from here.</PopoverDescription>
//       <Popover
//         lazyMount
//         positioning={{ gutter: 8, placement: "right-start" }}
//         unmountOnExit
//       >
//         <PopoverTrigger asChild className="mt-3">
//           <Button size="sm" type="button" variant="secondary">
//             Advanced
//           </Button>
//         </PopoverTrigger>
//         <PopoverPopup>
//           <PopoverTitle>Inner</PopoverTitle>
//           <PopoverDescription>
//             Nested popovers keep separate open state and layering.
//           </PopoverDescription>
//         </PopoverPopup>
//       </Popover>
//     </PopoverPopup>
//   </Popover>
// );

// const PopoverDialogDemo = () => (
//   <Dialog>
//     <DialogTrigger asChild>
//       <Button type="button" variant="outline">
//         Open dialog
//       </Button>
//     </DialogTrigger>
//     <DialogPopup>
//       <DialogTitle>Edit profile</DialogTitle>
//       <DialogDescription>
//         Dialog stacking with a popover inside (lazy mount + unmount on exit).
//       </DialogDescription>
//       <DialogPanel>
//         <Popover lazyMount unmountOnExit>
//           <PopoverTrigger asChild>
//             <Button size="sm" type="button" variant="secondary">
//               More options
//             </Button>
//           </PopoverTrigger>
//           <PopoverPopup>
//             <PopoverTitle>Additional settings</PopoverTitle>
//             <PopoverDescription>
//               Renders above the dialog layer when portalled.
//             </PopoverDescription>
//           </PopoverPopup>
//         </Popover>
//       </DialogPanel>
//     </DialogPopup>
//   </Dialog>
// );

// const PopoverContextDemo = () => (
//   <Popover>
//     <PopoverContext>
//       {(ctx) => (
//         <div className="flex flex-col gap-2">
//           <div className="flex items-center gap-2 text-muted-foreground text-xs">
//             <span>Context open:</span>
//             <span className="font-medium text-foreground">
//               {String(ctx.open)}
//             </span>
//           </div>
//           <PopoverTrigger asChild>
//             <Button className="gap-1" type="button" variant="outline">
//               Toggle
//               <PopoverIndicator>
//                 {ctx.open ? (
//                   <ChevronUpIcon aria-hidden className="size-3.5" />
//                 ) : (
//                   <ChevronDownIcon aria-hidden className="size-3.5" />
//                 )}
//               </PopoverIndicator>
//             </Button>
//           </PopoverTrigger>
//         </div>
//       )}
//     </PopoverContext>
//     <PopoverPopup>
//       <PopoverTitle>Context + indicator</PopoverTitle>
//       <PopoverDescription>
//         <code className="text-foreground">PopoverContext</code> provides state;
//         chevron sits in{" "}
//         <code className="text-foreground">PopoverIndicator</code>.
//       </PopoverDescription>
//     </PopoverPopup>
//   </Popover>
// );

// const PopoverIndicatorOnlyDemo = () => (
//   <Popover positioning={{ placement: "top" }}>
//     <PopoverTrigger asChild>
//       <Button
//         aria-label="Password requirements"
//         size="icon-xs"
//         type="button"
//         variant="ghost"
//       >
//         <InfoIcon className="size-4" />
//       </Button>
//     </PopoverTrigger>
//     <PopoverPopup className="max-w-xs p-3">
//       <p className="text-foreground text-sm">Min. 8 characters.</p>
//     </PopoverPopup>
//   </Popover>
// );

// const PopoverNoArrowDemo = () => (
//   <Popover>
//     <PopoverTrigger asChild>
//       <Button type="button" variant="outline">
//         No arrow
//       </Button>
//     </PopoverTrigger>
//     <PopoverPopup showArrow={false}>
//       <PopoverTitle>No arrow</PopoverTitle>
//       <PopoverDescription>
//         Pass <code className="text-foreground">showArrow=false</code> to{" "}
//         <code className="text-foreground">PopoverPopup</code>.
//       </PopoverDescription>
//     </PopoverPopup>
//   </Popover>
// );

// const PopoverInitialFocusDemo = () => {
//   const secondRef = useRef<HTMLButtonElement>(null);

//   return (
//     <Popover initialFocusEl={() => secondRef.current}>
//       <PopoverTrigger asChild>
//         <Button type="button" variant="outline">
//           Initial focus
//         </Button>
//       </PopoverTrigger>
//       <PopoverPopup>
//         <PopoverTitle>Focus target</PopoverTitle>
//         <PopoverDescription>
//           Second button receives focus when opened.
//         </PopoverDescription>
//         <div className="mt-3 flex gap-2">
//           <Button size="sm" type="button" variant="outline">
//             First
//           </Button>
//           <Button ref={secondRef} size="sm" type="button" variant="secondary">
//             Second (focused)
//           </Button>
//         </div>
//       </PopoverPopup>
//     </Popover>
//   );
// };

// const PopoverWithFieldDemo = () => (
//   <Field className="max-w-xs">
//     <FieldLabel htmlFor="popover-field-note">Note</FieldLabel>
//     <Popover>
//       <div className="flex gap-2">
//         <FieldInput asChild className="flex-1">
//           <Input id="popover-field-note" placeholder="Focus the input…" />
//         </FieldInput>
//         <PopoverTrigger asChild>
//           <Button size="icon" type="button" variant="outline">
//             <InfoIcon className="size-4" />
//           </Button>
//         </PopoverTrigger>
//       </div>
//       <PopoverPopup className="w-72 max-w-[min(18rem,var(--available-width,18rem))]">
//         <PopoverTitle>Field + popover</PopoverTitle>
//         <PopoverDescription>
//           Trigger sits beside FieldInput; useful for inline hints.
//         </PopoverDescription>
//       </PopoverPopup>
//     </Popover>
//     <FieldDescription>Pattern aligned with Field composition.</FieldDescription>
//   </Field>
// );

// const PopoverUseContextHookDemo = () => {
//   const Inner = () => {
//     const ctx = usePopoverContext();
//     return (
//       <p className="text-muted-foreground text-xs">
//         usePopoverContext:{" "}
//         <span className="font-medium text-foreground">{String(ctx.open)}</span>
//       </p>
//     );
//   };

//   return (
//     <Popover>
//       <Inner />
//       <PopoverTrigger asChild className="mt-2">
//         <Button type="button" variant="outline">
//           Open
//         </Button>
//       </PopoverTrigger>
//       <PopoverPopup>
//         <PopoverTitle>Inside content</PopoverTitle>
//         <PopoverDescription>
//           Call <code className="text-foreground">usePopoverContext</code> in
//           descendants of Root.
//         </PopoverDescription>
//       </PopoverPopup>
//     </Popover>
//   );
// };

// const RatingGroupBasicDemo = () => (
//   <RatingGroup defaultValue={3}>
//     <RatingGroupLabel>Label</RatingGroupLabel>
//     <RatingStars />
//   </RatingGroup>
// );

// const RatingGroupControlledDemo = () => {
//   const [value, setValue] = useState(0);
//   return (
//     <div className="flex flex-col gap-2">
//       <RatingGroup
//         onValueChange={(d) => {
//           setValue(d.value);
//         }}
//         value={value}
//       >
//         <RatingGroupLabel>Label</RatingGroupLabel>
//         <RatingStars />
//       </RatingGroup>
//       <p className="text-muted-foreground text-xs">
//         Value:{" "}
//         <span className="font-medium tabular-nums text-foreground">
//           {value}
//         </span>
//       </p>
//     </div>
//   );
// };

// const RatingGroupRootProviderDemo = () => {
//   const store = useRatingGroup({ count: 5, defaultValue: 4 });
//   return (
//     <div className="flex max-w-md flex-col gap-2">
//       <output className="text-muted-foreground text-xs">
//         <span className="text-foreground">value:</span>{" "}
//         <span className="font-medium tabular-nums text-foreground">
//           {store.value}
//         </span>
//       </output>
//       <RatingGroupRootProvider value={store}>
//         <RatingGroupLabel>Label</RatingGroupLabel>
//         <RatingStars />
//       </RatingGroupRootProvider>
//       <Button
//         onClick={() => {
//           store.setValue(1);
//         }}
//         size="sm"
//         type="button"
//         variant="outline"
//       >
//         Set to 1
//       </Button>
//     </div>
//   );
// };

// const RatingGroupWithFieldDemo = () => (
//   <Field className="max-w-md">
//     <RatingGroup count={5} defaultValue={2}>
//       <RatingGroupLabel>Label</RatingGroupLabel>
//       <RatingStars />
//     </RatingGroup>
//     <FieldDescription>
//       Helper text below the group (Ark{" "}
//       <code className="text-foreground">with-field</code> example).
//     </FieldDescription>
//   </Field>
// );

// const RatingGroupHalfDemo = () => (
//   <RatingGroup allowHalf defaultValue={2.5}>
//     <RatingGroupLabel>Label</RatingGroupLabel>
//     <RatingStars withHalf />
//   </RatingGroup>
// );

// const RatingGroupFormDemo = () => {
//   const [submitted, setSubmitted] = useState<string | null>(null);
//   return (
//     <form
//       className="flex max-w-xs flex-col gap-3"
//       onSubmit={(e) => {
//         e.preventDefault();
//         const fd = new FormData(e.currentTarget);
//         setSubmitted(String(fd.get("review") ?? ""));
//       }}
//     >
//       <RatingGroup defaultValue={5} name="review">
//         <RatingGroupLabel>Label</RatingGroupLabel>
//         <RatingStars />
//       </RatingGroup>
//       <Button size="sm" type="submit" variant="default">
//         Submit
//       </Button>
//       {submitted !== null ? (
//         <p className="text-muted-foreground text-xs">
//           Rating value:{" "}
//           <span className="font-medium text-foreground">{submitted}</span>
//         </p>
//       ) : null}
//     </form>
//   );
// };

// const RatingGroupDisabledDemo = () => (
//   <RatingGroup defaultValue={2} disabled>
//     <RatingGroupLabel>Label</RatingGroupLabel>
//     <RatingStars />
//   </RatingGroup>
// );

const sliderDemoWrap = "w-full max-w-xs";

const SliderBasicDemo = () => (
  <div className={sliderDemoWrap}>
    <Slider aria-label={["Volume"]} defaultValue={50}>
      <SliderLabel>Volume</SliderLabel>
      <SliderField />
    </Slider>
  </div>
);

const SliderRangeDemo = () => (
  <div className={sliderDemoWrap}>
    <Slider defaultValue={[30, 60]}>
      <SliderContext>
        {({ value }) => (
          <div className="flex justify-between gap-2">
            <SliderLabel>Range</SliderLabel>
            <span className="font-medium text-foreground text-xs tabular-nums">
              {value.join(" – ")}
            </span>
          </div>
        )}
      </SliderContext>
      <SliderField />
    </Slider>
  </div>
);

const SliderWithMarksDemo = () => (
  <div className={sliderDemoWrap}>
    <Slider defaultValue={50}>
      <SliderLabel>With marks</SliderLabel>
      <SliderField />
      <SliderMarkerGroup>
        <SliderMarker value={0}>0</SliderMarker>
        <SliderMarker value={25}>25</SliderMarker>
        <SliderMarker value={50}>50</SliderMarker>
        <SliderMarker value={75}>75</SliderMarker>
        <SliderMarker value={100}>100</SliderMarker>
      </SliderMarkerGroup>
    </Slider>
  </div>
);

const SliderMinMaxDemo = () => (
  <div className={sliderDemoWrap}>
    <Slider defaultValue={0} max={10} min={-10}>
      <SliderLabel>−10 to 10</SliderLabel>
      <SliderField />
    </Slider>
  </div>
);

const SliderStepDemo = () => (
  <div className={sliderDemoWrap}>
    <Slider defaultValue={7.5} max={10} min={5} step={0.01}>
      <SliderLabel>Step 0.01 (5–10)</SliderLabel>
      <SliderField />
    </Slider>
  </div>
);

const SliderOnEventDemo = () => {
  const [live, setLive] = useState("");
  const [end, setEnd] = useState("");
  return (
    <div className="flex max-w-md flex-col gap-2">
      <Slider
        defaultValue={40}
        onValueChange={(d) => {
          setLive(d.value.join(", "));
        }}
        onValueChangeEnd={(d) => {
          setEnd(d.value.join(", "));
        }}
      >
        <SliderLabel>Events</SliderLabel>
        <SliderField />
      </Slider>
      <p className="text-muted-foreground text-xs">
        onValueChange:{" "}
        <span className="font-medium text-foreground">{live || "—"}</span>
      </p>
      <p className="text-muted-foreground text-xs">
        onValueChangeEnd:{" "}
        <span className="font-medium text-foreground">{end || "—"}</span>
      </p>
    </div>
  );
};

const SliderVerticalDemo = () => (
  <div className="flex w-full max-w-md flex-col gap-3">
    <Slider
      aria-label={["Storage size in GB"]}
      defaultValue={15}
      max={35}
      min={5}
      orientation="vertical"
    >
      <SliderField />
    </Slider>
    <div
      aria-label="Storage size reference values"
      className="flex w-full justify-between gap-1 font-medium text-muted-foreground text-xs"
      role="group"
    >
      <span>5 GB</span>
      <span>20 GB</span>
      <span>35 GB</span>
    </div>
  </div>
);

const SliderVerticalDraggingIndicatorDemo = () => (
  <div className="flex w-full max-w-md flex-col gap-3">
    <Slider
      aria-label={["Storage size in GB"]}
      defaultValue={15}
      max={35}
      min={5}
      orientation="vertical"
    >
      <SliderField
        thumbsProps={{ children: () => <SliderDraggingIndicator /> }}
      />
    </Slider>
    <div
      aria-label="Storage size reference values"
      className="flex w-full justify-between gap-1 font-medium text-muted-foreground text-xs"
      role="group"
    >
      <span>5 GB</span>
      <span>20 GB</span>
      <span>35 GB</span>
    </div>
  </div>
);

const SliderVerticalTwoRangesDemo = () => (
  <div className="flex w-full max-w-md flex-col gap-3">
    <div className="flex items-start justify-between gap-6">
      <div className="flex flex-col gap-2">
        <p className="font-medium text-foreground text-xs">5–35 GB</p>
        <Slider
          aria-label={["Min storage", "Max storage"]}
          defaultValue={[12, 28]}
          max={35}
          min={5}
          orientation="vertical"
        >
          <SliderField />
        </Slider>
      </div>
      <div className="flex flex-col gap-2">
        <p className="font-medium text-foreground text-xs">0–100 GB</p>
        <Slider
          aria-label={["Min storage", "Max storage"]}
          defaultValue={[25, 75]}
          max={100}
          min={0}
          orientation="vertical"
        >
          <SliderField />
        </Slider>
      </div>
    </div>
    <p className="text-muted-foreground text-xs">
      Two vertical range sliders (2 thumbs each) with different bounds.
    </p>
  </div>
);

const SliderCenterOriginDemo = () => (
  <div className={sliderDemoWrap}>
    <Slider defaultValue={20} origin="center">
      <SliderLabel>Center origin</SliderLabel>
      <div className="flex justify-between">
        <span className="text-muted-foreground text-xs">
          Offset from center
        </span>
        <SliderValueText />
      </div>
      <SliderField />
    </Slider>
  </div>
);

const SliderRootProviderDemo = () => {
  const store = useSlider({ defaultValue: [40] });
  return (
    <div className="flex max-w-xs flex-col gap-2">
      <Button
        onClick={() => {
          store.focus();
        }}
        size="sm"
        type="button"
        variant="outline"
      >
        Focus
      </Button>
      <SliderRootProvider value={store}>
        <SliderLabel>Label</SliderLabel>
        <SliderValueText />
        <SliderField />
      </SliderRootProvider>
    </div>
  );
};

const SliderDraggingIndicatorDemo = () => (
  <div className={sliderDemoWrap}>
    <Slider defaultValue={40}>
      <SliderLabel>Drag me</SliderLabel>
      <SliderField
        thumbsProps={{ children: () => <SliderDraggingIndicator /> }}
      />
    </Slider>
  </div>
);

const SliderThumbOverlapDemo = () => (
  <div className={sliderDemoWrap}>
    <Slider defaultValue={[30, 70]} minStepsBetweenThumbs={10} step={1}>
      <SliderLabel>Min gap (10 steps)</SliderLabel>
      <SliderField />
    </Slider>
  </div>
);

const SliderThumbCollisionDemo = () => (
  <div className="flex w-full max-w-lg flex-col gap-6">
    <div className={sliderDemoWrap}>
      <Slider defaultValue={[25, 60]} thumbCollisionBehavior="push">
        <SliderLabel>push</SliderLabel>
        <SliderField />
      </Slider>
    </div>
    <div className={sliderDemoWrap}>
      <Slider defaultValue={[25, 60]} thumbCollisionBehavior="swap">
        <SliderLabel>swap</SliderLabel>
        <SliderField />
      </Slider>
    </div>
  </div>
);

const SliderContextDemo = () => (
  <div className={sliderDemoWrap}>
    <Slider defaultValue={40}>
      <SliderContext>
        {(ctx) => (
          <div className="flex justify-between gap-2">
            <SliderLabel>Dragging: {String(ctx.dragging)}</SliderLabel>
            <span className="font-medium text-foreground text-sm tabular-nums">
              {ctx.value.join(", ")}
            </span>
          </div>
        )}
      </SliderContext>
      <SliderField />
    </Slider>
  </div>
);

const SliderThumbAlignmentDemo = () => (
  <div className="flex w-full max-w-lg flex-col gap-6">
    <div className={sliderDemoWrap}>
      <Slider defaultValue={50} thumbAlignment="contain">
        <div className="flex justify-between">
          <SliderLabel>contain</SliderLabel>
          <SliderValueText />
        </div>
        <SliderField />
      </Slider>
    </div>
    <div className={sliderDemoWrap}>
      <Slider defaultValue={50} thumbAlignment="center">
        <div className="flex justify-between">
          <SliderLabel>center</SliderLabel>
          <SliderValueText />
        </div>
        <SliderField />
      </Slider>
    </div>
  </div>
);

const SliderWithFieldDemo = () => (
  <Field className={sliderDemoWrap}>
    <FieldLabel>Opacity</FieldLabel>
    <FieldDescription>Helper text (Field + Slider).</FieldDescription>
    <Slider defaultValue={60}>
      <SliderField />
    </Slider>
  </Field>
);

const SliderWithNumberInputDemo = () => {
  const [n, setN] = useState(50);
  return (
    <div className="flex max-w-xs flex-col gap-3">
      <Slider
        max={100}
        min={0}
        onValueChange={(d) => {
          setN(d.value[0] ?? 0);
        }}
        value={n}
      >
        <SliderLabel>Opacity</SliderLabel>
        <SliderField />
      </Slider>
      <Input
        aria-label="Matching numeric value"
        className="max-w-32"
        max={100}
        min={0}
        onChange={(e) => {
          setN(Number(e.target.value));
        }}
        type="number"
        value={n}
      />
    </div>
  );
};

const SliderDisabledDemo = () => (
  <div className={sliderDemoWrap}>
    <Slider defaultValue={40} disabled>
      <SliderLabel>Disabled</SliderLabel>
      <SliderField />
    </Slider>
  </div>
);

const SliderFormDemo = () => {
  const [out, setOut] = useState<string | null>(null);
  return (
    <form
      className="flex max-w-xs flex-col gap-2"
      onSubmit={(e) => {
        e.preventDefault();
        const fd = new FormData(e.currentTarget);
        setOut(String(fd.get("volume") ?? ""));
      }}
    >
      <Slider defaultValue={72} name="volume">
        <SliderLabel>Volume</SliderLabel>
        <SliderField />
      </Slider>
      <Button size="sm" type="submit" variant="default">
        Submit
      </Button>
      {out !== null ? (
        <p className="text-muted-foreground text-xs">
          FormData volume:{" "}
          <span className="font-medium text-foreground">{out}</span>
        </p>
      ) : null}
    </form>
  );
};

const SliderReadOnlyDemo = () => (
  <div className={sliderDemoWrap}>
    <Slider defaultValue={55} readOnly>
      <SliderLabel>Read-only</SliderLabel>
      <SliderField />
    </Slider>
  </div>
);

// const SCROLL_AREA_LOREM_LONG =
//   "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.";

// const SCROLL_AREA_LOREM_MEDIUM =
//   "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";

// const SCROLL_AREA_LOREM_PARA2 =
//   "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.";

// const SCROLL_AREA_LOREM_PARA3 =
//   "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga.";

// const SCROLL_AREA_LOREM_NEST_OUTER =
//   "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.";

// const SCROLL_AREA_LOREM_NEST_INNER =
//   "This is a nested scroll area. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.";

// const ScrollAreaBasicDemo = () => (
//   <ScrollAreaRoot className="box-border h-34 w-full max-w-96">
//     <ScrollAreaViewport>
//       <ScrollAreaContent className="flex flex-col gap-4 py-3 ps-4 pe-6">
//         <p className="m-0 text-foreground text-sm leading-snug">
//           {SCROLL_AREA_LOREM_LONG}
//         </p>
//       </ScrollAreaContent>
//     </ScrollAreaViewport>
//     <ScrollAreaScrollbar orientation="vertical">
//       <ScrollAreaThumb />
//     </ScrollAreaScrollbar>
//     <ScrollAreaCorner />
//   </ScrollAreaRoot>
// );

// const ScrollAreaHorizontalDemo = () => (
//   <ScrollAreaRoot className="box-border h-auto w-full max-w-96">
//     <ScrollAreaViewport>
//       <ScrollAreaContent className="flex flex-col gap-4 py-3 ps-4 pe-6">
//         <p className="m-0 w-[50vw] max-w-none text-foreground text-sm leading-snug">
//           {SCROLL_AREA_LOREM_MEDIUM}
//         </p>
//       </ScrollAreaContent>
//     </ScrollAreaViewport>
//     <ScrollAreaScrollbar orientation="horizontal">
//       <ScrollAreaThumb />
//     </ScrollAreaScrollbar>
//     <ScrollAreaCorner />
//   </ScrollAreaRoot>
// );

// const ScrollAreaBothDirectionsDemo = () => (
//   <ScrollAreaRoot className="box-border h-48 w-96 max-w-[calc(100vw-8rem)]">
//     <ScrollAreaViewport>
//       <ScrollAreaContent className="flex flex-col gap-4 py-3 ps-4 pe-6">
//         <p className="m-0 w-[50vw] max-w-none text-foreground text-sm leading-snug">
//           {SCROLL_AREA_LOREM_MEDIUM}
//         </p>
//         <p className="m-0 w-[50vw] max-w-none text-foreground text-sm leading-snug">
//           {SCROLL_AREA_LOREM_PARA2}
//         </p>
//         <p className="m-0 w-[50vw] max-w-none text-foreground text-sm leading-snug">
//           {SCROLL_AREA_LOREM_PARA3}
//         </p>
//       </ScrollAreaContent>
//     </ScrollAreaViewport>
//     <ScrollAreaScrollbar orientation="vertical">
//       <ScrollAreaThumb />
//     </ScrollAreaScrollbar>
//     <ScrollAreaScrollbar orientation="horizontal">
//       <ScrollAreaThumb />
//     </ScrollAreaScrollbar>
//     <ScrollAreaCorner />
//   </ScrollAreaRoot>
// );

// const ScrollAreaNestedDemo = () => (
//   <ScrollAreaRoot className="box-border h-48 w-96 max-w-[calc(100vw-8rem)]">
//     <ScrollAreaViewport>
//       <ScrollAreaContent className="flex flex-col gap-4 py-3 ps-4 pe-6">
//         <p className="m-0 text-foreground text-sm leading-snug">
//           {SCROLL_AREA_LOREM_NEST_OUTER}
//         </p>
//         <ScrollAreaRoot className="box-border h-32 w-full">
//           <ScrollAreaViewport>
//             <ScrollAreaContent className="flex flex-col gap-4 py-3 ps-4 pe-6">
//               <p className="m-0 text-foreground text-sm leading-snug">
//                 {SCROLL_AREA_LOREM_NEST_INNER}
//               </p>
//             </ScrollAreaContent>
//           </ScrollAreaViewport>
//           <ScrollAreaScrollbar orientation="vertical">
//             <ScrollAreaThumb />
//           </ScrollAreaScrollbar>
//           <ScrollAreaCorner />
//         </ScrollAreaRoot>
//       </ScrollAreaContent>
//     </ScrollAreaViewport>
//     <ScrollAreaScrollbar orientation="vertical">
//       <ScrollAreaThumb />
//     </ScrollAreaScrollbar>
//     <ScrollAreaCorner />
//   </ScrollAreaRoot>
// );

// const ScrollAreaRootProviderDemo = () => {
//   const scrollArea = useScrollArea();
//   return (
//     <div className="flex max-w-md flex-col gap-3">
//       <div className="flex flex-wrap gap-2">
//         <Button
//           onClick={() => scrollArea.scrollToEdge({ edge: "top" })}
//           size="sm"
//           type="button"
//           variant="outline"
//         >
//           Scroll to top
//         </Button>
//         <Button
//           onClick={() => scrollArea.scrollToEdge({ edge: "bottom" })}
//           size="sm"
//           type="button"
//           variant="outline"
//         >
//           Scroll to bottom
//         </Button>
//       </div>
//       <ScrollAreaRootProvider
//         className="box-border h-34 w-full"
//         value={scrollArea}
//       >
//         <ScrollAreaViewport>
//           <ScrollAreaContent className="flex flex-col gap-4 py-3 ps-4 pe-6">
//             <p className="m-0 text-foreground text-sm leading-snug">
//               {SCROLL_AREA_LOREM_LONG}
//             </p>
//           </ScrollAreaContent>
//         </ScrollAreaViewport>
//         <ScrollAreaScrollbar orientation="vertical">
//           <ScrollAreaThumb />
//         </ScrollAreaScrollbar>
//         <ScrollAreaCorner />
//       </ScrollAreaRootProvider>
//     </div>
//   );
// };

// const ScrollAreaCompositeTagsDemo = () => {
//   const tags = Array.from({ length: 50 }, (_, i) => `v1.0.0-alpha.${i}`);
//   return (
//     <ScrollArea className="h-64 max-w-sm">
//       <div className="px-4 py-2">
//         <h4 className="mb-2 font-medium text-foreground text-sm">Tags</h4>
//         <div className="flex flex-col gap-1">
//           {tags.map((tag) => (
//             <div className="text-sm" key={tag}>
//               {tag}
//             </div>
//           ))}
//         </div>
//       </div>
//     </ScrollArea>
//   );
// };

// const ScrollAreaScrollFadeDemo = () => {
//   const tags = Array.from({ length: 50 }, (_, i) => `v1.0.0-alpha.${i}`);
//   return (
//     <ScrollArea className="h-64 max-w-sm" scrollFade>
//       <div className="px-4 py-2">
//         <h4 className="mb-2 font-medium text-foreground text-sm">Tags</h4>
//         <div className="flex flex-col gap-1">
//           {tags.map((tag) => (
//             <div className="text-sm" key={tag}>
//               {tag}
//             </div>
//           ))}
//         </div>
//       </div>
//     </ScrollArea>
//   );
// };

// const ScrollAreaHorizontalItemsDemo = () => (
//   <ScrollAreaRoot className="max-w-md">
//     <ScrollAreaViewport className="pb-2.5">
//       <ScrollAreaContent className="flex w-max gap-4 p-4">
//         {Array.from({ length: 20 }).map((_, i) => (
//           <div
//             className="flex h-20 w-32 shrink-0 items-center justify-center rounded-md bg-muted"
//             key={String(i)}
//           >
//             <span className="font-medium text-sm">Item {i + 1}</span>
//           </div>
//         ))}
//       </ScrollAreaContent>
//     </ScrollAreaViewport>
//     <ScrollAreaScrollbar orientation="horizontal">
//       <ScrollAreaThumb />
//     </ScrollAreaScrollbar>
//     <ScrollAreaCorner />
//   </ScrollAreaRoot>
// );

// const ScrollAreaCompositeScrollbarGutterDemo = () => {
//   const rows = Array.from({ length: 40 }, (_, i) => `Reserved gutter · ${i}`);
//   return (
//     <ScrollArea className="h-52 max-w-xs" scrollbarGutter>
//       <div className="flex flex-col gap-1 px-4 py-2">
//         {rows.map((row) => (
//           <div className="text-sm" key={row}>
//             {row}
//           </div>
//         ))}
//       </div>
//     </ScrollArea>
//   );
// };

// const ScrollAreaContextDemo = () => (
//   <ScrollAreaRoot className="box-border h-34 w-full max-w-sm">
//     <ScrollAreaContext>
//       {({ isAtTop, isAtBottom }) => (
//         <>
//           <ScrollAreaViewport>
//             <ScrollAreaContent className="flex flex-col gap-4 py-3 ps-4 pe-6">
//               <p className="m-0 text-foreground text-sm leading-snug">
//                 {SCROLL_AREA_LOREM_LONG}
//               </p>
//             </ScrollAreaContent>
//           </ScrollAreaViewport>
//           <ScrollAreaScrollbar orientation="vertical">
//             <ScrollAreaThumb />
//           </ScrollAreaScrollbar>
//           <ScrollAreaCorner />
//           <p className="mt-2 text-muted-foreground text-xs">
//             At top:{" "}
//             <span className="font-medium text-foreground">
//               {String(isAtTop)}
//             </span>
//             {" · "}
//             At bottom:{" "}
//             <span className="font-medium text-foreground">
//               {String(isAtBottom)}
//             </span>
//           </p>
//         </>
//       )}
//     </ScrollAreaContext>
//   </ScrollAreaRoot>
// );

// type QrCodeEccLevel = "L" | "M" | "Q" | "H";

// const QR_ECC_LEVELS: QrCodeEccLevel[] = ["L", "M", "Q", "H"];

// const QrCodeBasicDemo = () => (
//   <QrCode defaultValue="https://ark-ui.com">
//     <QrCodeFrame>
//       <QrCodePattern />
//     </QrCodeFrame>
//   </QrCode>
// );

// const QrCodeControlledDemo = () => {
//   const [value, setValue] = useState("https://ark-ui.com");
//   return (
//     <div className="flex flex-col gap-3">
//       <QrCode
//         onValueChange={(d) => {
//           setValue(d.value);
//         }}
//         value={value}
//       >
//         <QrCodeFrame>
//           <QrCodePattern />
//         </QrCodeFrame>
//       </QrCode>
//       <Button
//         onClick={() => {
//           setValue("https://react.dev");
//         }}
//         type="button"
//         variant="outline"
//       >
//         Encode react.dev
//       </Button>
//     </div>
//   );
// };

// const QrCodeDownloadDemo = () => (
//   <QrCode defaultValue="https://ark-ui.com">
//     <QrCodeFrame>
//       <QrCodePattern />
//     </QrCodeFrame>
//     <QrCodeDownloadTrigger fileName="qr-code.png" mimeType="image/png">
//       Download PNG
//     </QrCodeDownloadTrigger>
//   </QrCode>
// );

// const QrCodeErrorCorrectionDemo = () => {
//   const [ecc, setEcc] = useState<QrCodeEccLevel>("L");
//   return (
//     <div className="flex flex-col gap-3">
//       <div className="flex flex-wrap gap-2">
//         {QR_ECC_LEVELS.map((level) => (
//           <Button
//             key={level}
//             onClick={() => {
//               setEcc(level);
//             }}
//             size="sm"
//             type="button"
//             variant={ecc === level ? "default" : "outline"}
//           >
//             {level}
//           </Button>
//         ))}
//       </div>
//       <QrCode defaultValue="https://ark-ui.com" encoding={{ ecc }}>
//         <QrCodeFrame>
//           <QrCodePattern />
//         </QrCodeFrame>
//       </QrCode>
//     </div>
//   );
// };

// const QrCodeFillDemo = () => (
//   <div className="flex flex-wrap gap-6">
//     {["#5417D7", "#EC5D5E"].map((fill) => (
//       <QrCode defaultValue="https://ark-ui.com" key={fill}>
//         <QrCodeFrame style={{ fill } as CSSProperties}>
//           <QrCodePattern />
//         </QrCodeFrame>
//       </QrCode>
//     ))}
//   </div>
// );

// const QrCodeOverlayDemo = () => (
//   <QrCode defaultValue="https://ark-ui.com" encoding={{ ecc: "H" }}>
//     <QrCodeFrame>
//       <QrCodePattern />
//     </QrCodeFrame>
//     <QrCodeOverlay>
//       <img
//         alt="Ark UI"
//         height={48}
//         src="https://ark-ui.com/icon-192.png"
//         width={48}
//       />
//     </QrCodeOverlay>
//   </QrCode>
// );

// const QrCodeRootProviderDemo = () => {
//   const store = useQrCode({ defaultValue: "https://ark-ui.com" });
//   return (
//     <div className="flex max-w-md flex-col gap-3">
//       <QrCodeRootProvider value={store}>
//         <QrCodeFrame>
//           <QrCodePattern />
//         </QrCodeFrame>
//       </QrCodeRootProvider>
//       <output className="text-muted-foreground text-xs">
//         <span className="text-foreground">Current value:</span>{" "}
//         <span className="font-mono text-foreground">{store.value}</span>
//       </output>
//       <div className="flex flex-wrap gap-2">
//         <Button
//           onClick={() => {
//             store.setValue("https://react.dev");
//           }}
//           size="sm"
//           type="button"
//           variant="outline"
//         >
//           react.dev
//         </Button>
//         <Button
//           onClick={() => {
//             store.setValue("https://ark-ui.com");
//           }}
//           size="sm"
//           type="button"
//           variant="secondary"
//         >
//           ark-ui.com
//         </Button>
//       </div>
//     </div>
//   );
// };

// const QrCodeContextDemo = () => (
//   <QrCode defaultValue="https://ark-ui.com">
//     <QrCodeContext>
//       {(ctx) => (
//         <p className="text-muted-foreground text-xs">
//           Value length:{" "}
//           <span className="font-medium tabular-nums text-foreground">
//             {ctx.value.length}
//           </span>
//         </p>
//       )}
//     </QrCodeContext>
//     <QrCodeFrame>
//       <QrCodePattern />
//     </QrCodeFrame>
//   </QrCode>
// );

// const SignaturePadBasicDemo = () => (
//   <div className="w-full max-w-md">
//     <SignaturePad>
//       <SignaturePadLabel>Sign below</SignaturePadLabel>
//       <SignaturePadField>
//         <RotateCcwIcon />
//       </SignaturePadField>
//     </SignaturePad>
//   </div>
// );

// const SignaturePadImagePreviewDemo = () => {
//   const [imageUrl, setImageUrl] = useState("");
//   return (
//     <div className="flex w-full max-w-md flex-col gap-3">
//       <SignaturePad
//         onDrawEnd={(details) => {
//           void details.getDataUrl("image/png").then((url) => setImageUrl(url));
//         }}
//       >
//         <SignaturePadLabel>Sign below</SignaturePadLabel>
//         <SignaturePadField />
//       </SignaturePad>
//       <div className="flex flex-col gap-1">
//         <span className="text-muted-foreground text-xs">Image preview</span>
//         {imageUrl ? (
//           <img
//             alt="Signature preview"
//             className="max-h-40 w-full max-w-full rounded-md border border-border bg-white p-2 object-contain dark:bg-white"
//             height={160}
//             src={imageUrl}
//             width={320}
//           />
//         ) : (
//           <p className="text-muted-foreground text-xs">
//             Draw to update preview.
//           </p>
//         )}
//       </div>
//     </div>
//   );
// };

// const SignaturePadRootProviderDemo = () => {
//   const pad = useSignaturePad();
//   return (
//     <div className="flex w-full max-w-md flex-col gap-2">
//       <output className="text-muted-foreground text-xs">
//         Paths:{" "}
//         <span className="font-medium tabular-nums text-foreground">
//           {pad.paths.length}
//         </span>
//       </output>
//       <SignaturePadRootProvider value={pad}>
//         <SignaturePadLabel>Sign below</SignaturePadLabel>
//         <SignaturePadField>
//           <RotateCcwIcon />
//         </SignaturePadField>
//       </SignaturePadRootProvider>
//     </div>
//   );
// };

// const SignaturePadWithFieldDemo = () => (
//   <Field className="max-w-md">
//     <SignaturePad>
//       <SignaturePadLabel>Signature</SignaturePadLabel>
//       <SignaturePadField>
//         <RotateCcwIcon />
//       </SignaturePadField>
//     </SignaturePad>
//     <FieldDescription>
//       Sign using your pointer, stylus, or finger.
//     </FieldDescription>
//     <FieldError>This line demonstrates error styling (demo).</FieldError>
//   </Field>
// );

// const SignaturePadContextDemo = () => (
//   <div className="w-full max-w-md">
//     <SignaturePad>
//       <SignaturePadContext>
//         {(ctx) => (
//           <p className="text-muted-foreground text-xs">
//             Empty:{" "}
//             <span className="font-medium text-foreground">
//               {String(ctx.empty)}
//             </span>
//             {" · "}
//             Paths:{" "}
//             <span className="font-medium tabular-nums text-foreground">
//               {ctx.paths.length}
//             </span>
//             {ctx.drawing ? (
//               <span className="text-foreground"> · drawing</span>
//             ) : null}
//           </p>
//         )}
//       </SignaturePadContext>
//       <SignaturePadLabel>Sign below</SignaturePadLabel>
//       <SignaturePadField>
//         <RotateCcwIcon />
//       </SignaturePadField>
//     </SignaturePad>
//   </div>
// );

// const RadioGroupDefaultDemo = () => (
//   <RadioGroup className="max-w-xs" defaultValue="next">
//     <RadioGroupLabel>Framework</RadioGroupLabel>
//     <Radio value="next">Next.js</Radio>
//     <Radio value="vite">Vite</Radio>
//     <Radio value="astro">Astro</Radio>
//   </RadioGroup>
// );

// const RadioGroupControlledDemo = () => {
//   const [v, setV] = useState<string | null>("next");
//   return (
//     <div className="flex max-w-xs flex-col gap-2">
//       <p className="text-muted-foreground text-xs">
//         Value: <span className="font-medium text-foreground">{v}</span>
//       </p>
//       <RadioGroup value={v} onValueChange={({ value }) => setV(value)}>
//         <Radio value="next">Next.js</Radio>
//         <Radio value="vite">Vite</Radio>
//         <Radio value="astro">Astro</Radio>
//       </RadioGroup>
//     </div>
//   );
// };

// const RadioGroupDisabledGroupDemo = () => (
//   <RadioGroup className="max-w-xs" defaultValue="next" disabled>
//     <RadioGroupLabel>Framework (group disabled)</RadioGroupLabel>
//     <Radio value="next">Next.js</Radio>
//     <Radio value="vite">Vite</Radio>
//     <Radio value="astro">Astro</Radio>
//   </RadioGroup>
// );

// const RadioGroupDisabledItemDemo = () => (
//   <RadioGroup className="max-w-xs" defaultValue="next">
//     <RadioGroupLabel>Framework</RadioGroupLabel>
//     <Radio value="next">Next.js</Radio>
//     <Radio disabled value="vite">
//       Vite (disabled)
//     </Radio>
//     <Radio value="astro">Astro</Radio>
//   </RadioGroup>
// );

// const RadioGroupOrientationDemo = () => (
//   <RadioGroup className="max-w-md" defaultValue="a" orientation="horizontal">
//     <RadioGroupLabel>Axis</RadioGroupLabel>
//     <Radio value="a">Option A</Radio>
//     <Radio value="b">Option B</Radio>
//     <Radio value="c">Option C</Radio>
//   </RadioGroup>
// );

// const RadioGroupRootProviderDemo = () => {
//   const radio = useRadioGroup({ defaultValue: "React" });
//   const frameworks = ["React", "Solid", "Vue"] as const;
//   return (
//     <div className="flex max-w-xs flex-col gap-3">
//       <RadioGroupRootProvider value={radio}>
//         <RadioGroupLabel>Framework</RadioGroupLabel>
//         {frameworks.map((f) => (
//           <Radio key={f} value={f}>
//             {f}
//           </Radio>
//         ))}
//       </RadioGroupRootProvider>
//       <Button
//         onClick={() => {
//           radio.setValue("Solid");
//         }}
//         type="button"
//         variant="outline"
//       >
//         Set to Solid
//       </Button>
//     </div>
//   );
// };

// const RadioGroupFieldsetDemo = () => (
//   <Fieldset className="max-w-sm">
//     <FieldsetLegend>Select a framework</FieldsetLegend>
//     <RadioGroup defaultValue="React">
//       <Radio value="React">React</Radio>
//       <Radio value="Solid">Solid</Radio>
//       <Radio value="Vue">Vue</Radio>
//     </RadioGroup>
//     <FieldsetDescription>
//       Choose your preferred framework for the docs examples.
//     </FieldsetDescription>
//     <FieldsetError>Please select a framework</FieldsetError>
//   </Fieldset>
// );

// const RadioGroupWithDescriptionDemo = () => (
//   <RadioGroup className="max-w-sm" defaultValue="r-1">
//     <Radio value="r-1">
//       <span className="flex flex-col gap-1">
//         <span className="font-medium">Free</span>
//         <span className="text-muted-foreground text-xs">
//           Basic features for personal use.
//         </span>
//       </span>
//     </Radio>
//     <Radio value="r-2">
//       <span className="flex flex-col gap-1">
//         <span className="font-medium">Pro</span>
//         <span className="text-muted-foreground text-xs">
//           Advanced tools for professionals.
//         </span>
//       </span>
//     </Radio>
//   </RadioGroup>
// );

// const RadioGroupCardStyleDemo = () => (
//   <RadioGroup className="max-w-md gap-3" defaultValue="email">
//     <Radio
//       className="flex w-full items-stretch rounded-lg border border-border p-3 transition-colors hover:bg-accent/50 data-[state=checked]:border-primary/48 data-[state=checked]:bg-accent/50"
//       value="email"
//     >
//       <span className="flex flex-col gap-1 ps-0.5">
//         <span className="font-medium">Email</span>
//         <span className="text-muted-foreground text-xs">
//           Receive notifications via email.
//         </span>
//       </span>
//     </Radio>
//     <Radio
//       className="flex w-full items-stretch rounded-lg border border-border p-3 transition-colors hover:bg-accent/50 data-[state=checked]:border-primary/48 data-[state=checked]:bg-accent/50"
//       value="sms"
//     >
//       <span className="flex flex-col gap-1 ps-0.5">
//         <span className="font-medium">SMS</span>
//         <span className="text-muted-foreground text-xs">
//           Receive notifications via text message.
//         </span>
//       </span>
//     </Radio>
//   </RadioGroup>
// );

// const RadioGroupFormDemo = () => {
//   const [submitted, setSubmitted] = useState<string | null>(null);
//   return (
//     <form
//       className="flex max-w-xs flex-col gap-3"
//       onSubmit={(e: FormEvent<HTMLFormElement>) => {
//         e.preventDefault();
//         const fd = new FormData(e.currentTarget);
//         setSubmitted(String(fd.get("frameworks") ?? ""));
//       }}
//     >
//       <RadioGroup name="frameworks" defaultValue="next">
//         <RadioGroupLabel>Frameworks</RadioGroupLabel>
//         <Radio value="next">Next.js</Radio>
//         <Radio value="vite">Vite</Radio>
//         <Radio value="astro">Astro</Radio>
//       </RadioGroup>
//       <Button type="submit">Submit</Button>
//       {submitted ? (
//         <p className="text-muted-foreground text-xs">
//           Selected:{" "}
//           <span className="font-medium text-foreground">{submitted}</span>
//         </p>
//       ) : null}
//     </form>
//   );
// };

// const RadioGroupReadOnlyDemo = () => (
//   <RadioGroup className="max-w-xs" defaultValue="vite" readOnly>
//     <RadioGroupLabel>Read-only</RadioGroupLabel>
//     <Radio value="next">Next.js</Radio>
//     <Radio value="vite">Vite</Radio>
//     <Radio value="astro">Astro</Radio>
//   </RadioGroup>
// );

// const RadioGroupInvalidDemo = () => (
//   <RadioGroup className="max-w-xs" defaultValue="next" invalid>
//     <RadioGroupLabel>Invalid state</RadioGroupLabel>
//     <Radio value="next">Next.js</Radio>
//     <Radio value="vite">Vite</Radio>
//     <Radio value="astro">Astro</Radio>
//   </RadioGroup>
// );

// const RadioGroupWithFieldDemo = () => (
//   <Field className="max-w-xs gap-3">
//     <FieldLabel>Stack</FieldLabel>
//     <RadioGroup defaultValue="next" name="stack-field">
//       <Radio value="next">Next.js</Radio>
//       <Radio value="vite">Vite</Radio>
//       <Radio value="astro">Astro</Radio>
//     </RadioGroup>
//     <FieldDescription>Pick one framework for the project.</FieldDescription>
//   </Field>
// );

// const RadioGroupContextHookDemo = () => {
//   const Inner = () => {
//     const ctx = useRadioGroupContext();
//     return (
//       <p className="text-muted-foreground text-xs">
//         useRadioGroupContext:{" "}
//         <span className="font-medium text-foreground">{ctx.value}</span>
//       </p>
//     );
//   };
//   return (
//     <RadioGroup className="max-w-xs" defaultValue="b">
//       <Inner />
//       <Radio value="a">Option A</Radio>
//       <Radio value="b">Option B</Radio>
//     </RadioGroup>
//   );
// };

// const RadioGroupContextRenderDemo = () => (
//   <RadioGroup className="max-w-xs" defaultValue="next">
//     <RadioGroupContext>
//       {(ctx) => (
//         <p className="text-muted-foreground text-xs">
//           RadioGroupContext:{" "}
//           <span className="font-medium text-foreground">{ctx.value}</span>
//         </p>
//       )}
//     </RadioGroupContext>
//     <Radio value="next">Next.js</Radio>
//     <Radio value="vite">Vite</Radio>
//   </RadioGroup>
// );

// const SegmentGroupUnderlineTabsDemo = () => (
//   <SegmentDemoBox label="Underline (default variant)">
//     <SegmentGroupRoot
//       className="max-w-xl border-b"
//       defaultValue="react"
//       variant="underline"
//     >
//       <SegmentGroup>
//         <Segment value="react">React</Segment>
//         <Segment value="solid">Solid</Segment>
//         <Segment value="svelte">Svelte</Segment>
//         <Segment value="vue">Vue</Segment>
//       </SegmentGroup>
//     </SegmentGroupRoot>
//   </SegmentDemoBox>
// );

// const SegmentGroupUnderlineVerticalTabsDemo = () => (
//   <SegmentDemoBox label="Underline (default variant)">
//     <SegmentGroupRoot
//       className="max-w-xl border-s"
//       defaultValue="react"
//       variant="underline"
//       orientation="vertical"
//     >
//       <SegmentGroup>
//         <Segment value="react">React</Segment>
//         <Segment value="solid">Solid</Segment>
//         <Segment value="svelte">Svelte</Segment>
//         <Segment value="vue">Vue</Segment>
//       </SegmentGroup>
//     </SegmentGroupRoot>
//   </SegmentDemoBox>
// );
// const SegmentGroupDefaultDemo = () => (
//   <SegmentDemoBox label="Pill track (variant default)">
//     <SegmentGroupRoot
//       className="max-w-md"
//       defaultValue="react"
//       variant="default"
//     >
//       <SegmentGroup>
//         <Segment value="react">React</Segment>
//         <Segment value="solid">Solid</Segment>
//         <Segment value="vue">Vue</Segment>
//       </SegmentGroup>
//     </SegmentGroupRoot>
//   </SegmentDemoBox>
// );

// const SegmentGroupControlledDemo = () => {
//   const [v, setV] = useState<string | null>("react");
//   return (
//     <SegmentDemoBox label="Controlled value + group">
//       <div className="flex flex-col gap-2">
//         <p className="text-muted-foreground text-xs">
//           Value: <span className="font-medium text-foreground">{v}</span>
//         </p>
//         <SegmentGroupRoot value={v} onValueChange={({ value }) => setV(value)}>
//           <SegmentGroup>
//             <Segment value="react">React</Segment>
//             <Segment value="solid">Solid</Segment>
//             <Segment value="vue">Vue</Segment>
//           </SegmentGroup>
//         </SegmentGroupRoot>
//       </div>
//     </SegmentDemoBox>
//   );
// };

// const SegmentGroupRootProviderDemo = () => {
//   const store = useSegmentGroup({ defaultValue: "solid" });
//   return (
//     <SegmentDemoBox label="Root provider + external action">
//       <div className="flex flex-col gap-3">
//         <SegmentGroupRootProvider value={store}>
//           <SegmentGroup>
//             <Segment value="react">React</Segment>
//             <Segment value="solid">Solid</Segment>
//             <Segment value="vue">Vue</Segment>
//           </SegmentGroup>
//         </SegmentGroupRootProvider>
//         <Button
//           onClick={() => {
//             store.setValue("vue");
//           }}
//           type="button"
//           variant="outline"
//         >
//           Set to Vue
//         </Button>
//       </div>
//     </SegmentDemoBox>
//   );
// };

// const SegmentGroupDisabledGroupDemo = () => (
//   <SegmentDemoBox label="Disabled root">
//     <SegmentGroupRoot className="max-w-md" defaultValue="react" disabled>
//       <SegmentGroup>
//         <Segment value="react">React</Segment>
//         <Segment value="solid">Solid</Segment>
//         <Segment value="vue">Vue</Segment>
//       </SegmentGroup>
//     </SegmentGroupRoot>
//   </SegmentDemoBox>
// );

// const SegmentGroupDisabledItemDemo = () => (
//   <SegmentDemoBox label="Disabled segment">
//     <SegmentGroupRoot className="max-w-md" defaultValue="react">
//       <SegmentGroup>
//         <Segment value="react">React</Segment>
//         <Segment disabled value="solid">
//           Solid (disabled)
//         </Segment>
//         <Segment value="vue">Vue</Segment>
//       </SegmentGroup>
//     </SegmentGroupRoot>
//   </SegmentDemoBox>
// );

// const SegmentGroupOrientationDemo = () => (
//   <SegmentDemoBox label="Vertical orientation">
//     <div className="flex max-w-xs flex-col gap-3">
//       <SegmentGroupRoot
//         defaultValue="a"
//         orientation="vertical"
//         variant="default"
//       >
//         <SegmentGroup>
//           <Segment value="a">Alpha</Segment>
//           <Segment value="b">Beta</Segment>
//           <Segment value="c">Gamma</Segment>
//         </SegmentGroup>
//       </SegmentGroupRoot>
//     </div>
//   </SegmentDemoBox>
// );

// const SegmentGroupWithLabelDemo = () => (
//   <SegmentDemoBox label="Label prop">
//     <SegmentGroupRoot
//       className="w-full max-w-md"
//       defaultValue="next"
//       // label="Framework"
//     >
//       <SegmentGroup>
//         <Segment value="next">Next.js</Segment>
//         <Segment value="vite">Vite</Segment>
//         <Segment value="astro">Astro</Segment>
//       </SegmentGroup>
//     </SegmentGroupRoot>
//   </SegmentDemoBox>
// );

// const SegmentGroupFormDemo = () => {
//   const [submitted, setSubmitted] = useState<string | null>(null);
//   return (
//     <SegmentDemoBox label="Native form">
//       <form
//         className="flex flex-col gap-3"
//         onSubmit={(e: FormEvent<HTMLFormElement>) => {
//           e.preventDefault();
//           const fd = new FormData(e.currentTarget);
//           setSubmitted(String(fd.get("framework") ?? ""));
//         }}
//       >
//         <SegmentGroupRoot
//           className="max-w-md"
//           name="framework"
//           defaultValue="vite"
//         >
//           <SegmentGroup>
//             <Segment value="next">Next.js</Segment>
//             <Segment value="vite">Vite</Segment>
//             <Segment value="astro">Astro</Segment>
//           </SegmentGroup>
//         </SegmentGroupRoot>
//         <Button type="submit">Submit</Button>
//         {submitted ? (
//           <p className="text-muted-foreground text-xs">
//             Selected:{" "}
//             <span className="font-medium text-foreground">{submitted}</span>
//           </p>
//         ) : null}
//       </form>
//     </SegmentDemoBox>
//   );
// };

// const SegmentGroupReadOnlyDemo = () => (
//   <SegmentDemoBox label="Read-only">
//     <SegmentGroupRoot className="max-w-md" defaultValue="solid" readOnly>
//       <SegmentGroup>
//         <Segment value="react">React</Segment>
//         <Segment value="solid">Solid</Segment>
//         <Segment value="vue">Vue</Segment>
//       </SegmentGroup>
//     </SegmentGroupRoot>
//   </SegmentDemoBox>
// );

// const SegmentGroupInvalidDemo = () => (
//   <SegmentDemoBox label="Invalid state">
//     <SegmentGroupRoot className="max-w-md" defaultValue="react" invalid>
//       <SegmentGroup>
//         <Segment value="react">React</Segment>
//         <Segment value="solid">Solid</Segment>
//         <Segment value="vue">Vue</Segment>
//       </SegmentGroup>
//     </SegmentGroupRoot>
//   </SegmentDemoBox>
// );

// const SegmentGroupWithFieldDemo = () => (
//   <SegmentDemoBox label="Field + description">
//     <Field className="max-w-md gap-3">
//       <FieldLabel>View</FieldLabel>
//       <SegmentGroupRoot defaultValue="month" name="view-field">
//         <SegmentGroup>
//           <Segment value="month">Month</Segment>
//           <Segment value="week">Week</Segment>
//           <Segment value="day">Day</Segment>
//         </SegmentGroup>
//       </SegmentGroupRoot>
//       <FieldDescription>
//         Pick how dates are shown in the calendar.
//       </FieldDescription>
//     </Field>
//   </SegmentDemoBox>
// );

// const SegmentGroupContextHookDemo = () => {
//   const Inner = () => {
//     const ctx = useSegmentGroupContext();
//     return (
//       <p className="text-muted-foreground text-xs">
//         useSegmentGroupContext:{" "}
//         <span className="font-medium text-foreground">{ctx.value}</span>
//       </p>
//     );
//   };
//   return (
//     <SegmentDemoBox label="Hook + segments (same root)">
//       <SegmentGroupRoot className="max-w-md" defaultValue="b">
//         <Inner />
//         <SegmentGroup>
//           <Segment value="a">A</Segment>
//           <Segment value="b">B</Segment>
//           <Segment value="c">C</Segment>
//         </SegmentGroup>
//       </SegmentGroupRoot>
//     </SegmentDemoBox>
//   );
// };

// const SegmentGroupContextRenderDemo = () => (
//   <SegmentDemoBox label="Render-prop context">
//     <SegmentGroupRoot className="max-w-md" defaultValue="react">
//       <SegmentGroupContext>
//         {(ctx) => (
//           <p className="text-muted-foreground text-xs">
//             SegmentGroupContext:{" "}
//             <span className="font-medium text-foreground">{ctx.value}</span>
//           </p>
//         )}
//       </SegmentGroupContext>
//       <SegmentGroup>
//         <Segment value="react">React</Segment>
//         <Segment value="solid">Solid</Segment>
//       </SegmentGroup>
//     </SegmentGroupRoot>
//   </SegmentDemoBox>
// );

// const SegmentGroupWithDescriptionDemo = () => (
//   <SegmentDemoBox label="Rich ItemText">
//     <SegmentGroupRoot className="max-w-lg" defaultValue="free">
//       <SegmentGroup>
//         <Segment value="free">
//           <span className="flex flex-col gap-0.5">
//             <span className="font-medium">Free</span>
//             <span className="font-normal text-[0.7rem] text-muted-foreground leading-snug">
//               Basic features for personal use.
//             </span>
//           </span>
//         </Segment>
//         <Segment value="pro">
//           <span className="flex flex-col gap-0.5">
//             <span className="font-medium">Pro</span>
//             <span className="font-normal text-[0.7rem] text-muted-foreground leading-snug">
//               Advanced tools for teams.
//             </span>
//           </span>
//         </Segment>
//       </SegmentGroup>
//     </SegmentGroupRoot>
//   </SegmentDemoBox>
// );

// const SegmentGroupItemsShortcutDemo = () => (
//   <SegmentDemoBox label="items prop shortcut">
//     <SegmentGroupRoot className="max-w-md" defaultValue="react">
//       <SegmentGroup className="max-w-md">
//         <Segment value="react">React</Segment>
//         <Segment value="solid">Solid</Segment>
//         <Segment value="svelte">Svelte</Segment>
//         <Segment value="vue">Vue</Segment>
//       </SegmentGroup>
//     </SegmentGroupRoot>
//   </SegmentDemoBox>
// );

// const SegmentGroupAnatomyDemo = () => (
//   <SegmentDemoBox label="Ark anatomy (via Segment)">
//     <SegmentGroupRoot className="max-w-md" defaultValue="1">
//       <SegmentGroup>
//         <Segment value="1">One</Segment>
//         <Segment value="2">Two</Segment>
//       </SegmentGroup>
//     </SegmentGroupRoot>
//   </SegmentDemoBox>
// );

// const SELECT_FRAMEWORKS = [
//   { label: "Next.js", value: "next" },
//   { label: "Vite", value: "vite" },
//   { label: "Astro", value: "astro" },
// ] as const;

// const SELECT_FE_GROUP = [
//   { label: "Next.js", value: "next" },
//   { label: "Vite", value: "vite" },
//   { label: "Astro", value: "astro" },
// ] as const;

// const SELECT_BE_GROUP = [
//   { label: "Express", value: "express" },
//   { label: "NestJS", value: "nestjs" },
//   { label: "Fastify", value: "fastify" },
// ] as const;

// const SELECT_WITH_GROUPS = [...SELECT_FE_GROUP, ...SELECT_BE_GROUP];

// const SELECT_COMMAND_ITEMS = [
//   {
//     description: "npx create-next-app",
//     label: "Next.js",
//     value: "next",
//   },
//   {
//     description: "npm create vite@latest",
//     label: "Vite",
//     value: "vite",
//   },
//   {
//     description: "npm create astro@latest",
//     label: "Astro",
//     value: "astro",
//   },
// ] as const;

// const SELECT_LANG_LABELS: Record<string, string> = {
//   cpp: "C++",
//   csharp: "C#",
//   go: "Go",
//   java: "Java",
//   javascript: "JavaScript",
//   php: "PHP",
//   python: "Python",
//   rust: "Rust",
//   swift: "Swift",
//   typescript: "TypeScript",
// };

// const SELECT_LANG_KEYS = Object.keys(SELECT_LANG_LABELS);

// const SELECT_ICON_OPTIONS = [
//   { icon: LayersIcon, label: "Components", value: "components" },
//   { icon: ZapIcon, label: "Performance", value: "performance" },
//   { icon: GlobeIcon, label: "Network", value: "network" },
//   { icon: Code2Icon, label: "Development", value: "development" },
// ] as const;

// const SELECT_MANY_ITEMS = Array.from({ length: 80 }, (_, i) => ({
//   label: `Item ${i + 1}`,
//   value: `item-${i + 1}`,
// }));

// const SelectBasicDemo = () => (
//   <div className="w-full max-w-xs">
//     <Select
//       aria-label="Select framework"
//       defaultValue={["next"]}
//       items={[...SELECT_FRAMEWORKS]}
//     >
//       <SelectTriggerField>
//         <SelectValue placeholder="Select framework" />
//       </SelectTriggerField>
//       <SelectPopup>
//         <SelectList>
//           {SELECT_FRAMEWORKS.map((item) => (
//             <SelectItem key={item.value} item={item}>
//               <SelectItemText>{item.label}</SelectItemText>
//               <SelectItemIndicator />
//             </SelectItem>
//           ))}
//         </SelectList>
//       </SelectPopup>
//     </Select>
//   </div>
// );

// const SelectControlledDemo = () => {
//   const [v, setV] = useState<string[]>(["vite"]);
//   return (
//     <div className="flex w-full max-w-xs flex-col gap-2">
//       <p className="text-muted-foreground text-xs">
//         value:{" "}
//         <span className="font-medium text-foreground">
//           {v.join(", ") || "—"}
//         </span>
//       </p>
//       <Select
//         aria-label="Select framework"
//         items={[...SELECT_FRAMEWORKS]}
//         value={v}
//         onValueChange={(d) => setV(d.value)}
//       >
//         <SelectTriggerField>
//           <SelectValue placeholder="Select framework" />
//         </SelectTriggerField>

//         <SelectPopup>
//           <SelectList>
//             {SELECT_FRAMEWORKS.map((item) => (
//               <SelectItem key={item.value} item={item}>
//                 <SelectItemText>{item.label}</SelectItemText>
//                 <SelectItemIndicator />
//               </SelectItem>
//             ))}
//           </SelectList>
//         </SelectPopup>
//       </Select>
//     </div>
//   );
// };

// const SelectRootProviderDemo = () => {
//   const { collection } = useListCollection({
//     initialItems: [...SELECT_FRAMEWORKS],
//   });
//   const store = useSelect({ collection });
//   return (
//     <div className="flex w-full max-w-xs flex-col gap-3">
//       <SelectRootProvider value={store}>
//         <SelectLabel>Framework</SelectLabel>

//         <SelectTriggerField>
//           <SelectValue placeholder="Pick one" />
//         </SelectTriggerField>

//         <SelectPopup>
//           <SelectList>
//             {SELECT_FRAMEWORKS.map((item) => (
//               <SelectItem key={item.value} item={item}>
//                 <SelectItemText>{item.label}</SelectItemText>
//                 <SelectItemIndicator />
//               </SelectItem>
//             ))}
//           </SelectList>
//         </SelectPopup>
//       </SelectRootProvider>
//       <Button
//         onClick={() => {
//           store.setValue(["astro"]);
//         }}
//         type="button"
//         variant="outline"
//       >
//         Set to Astro
//       </Button>
//     </div>
//   );
// };

// const SelectMultipleDemo = () => (
//   <div className="w-full max-w-xs">
//     <Select
//       aria-label="Select languages"
//       defaultValue={["javascript", "typescript"]}
//       items={SELECT_LANG_KEYS.map((value) => ({
//         label: SELECT_LANG_LABELS[value] ?? value,
//         value,
//       }))}
//       multiple
//     >
//       <SelectTriggerField>
//         <SelectValue>
//           {(api) => {
//             const keys = api.value;
//             if (keys.length === 0) {
//               return "Select languages…";
//             }
//             const first = keys[0] ? SELECT_LANG_LABELS[keys[0]] : "";
//             const rest = keys.length > 1 ? ` (+${keys.length - 1} more)` : "";
//             return first + rest;
//           }}
//         </SelectValue>
//       </SelectTriggerField>
//       <SelectPopup>
//         <SelectContext>
//           {(api) => (
//             <>
//               <div className="border-border border-b p-1">
//                 <Button
//                   className="h-8 w-full justify-start px-2 text-xs"
//                   onClick={() => api.selectAll()}
//                   type="button"
//                   variant="ghost"
//                 >
//                   Select all
//                 </Button>
//               </div>
//               <SelectList>
//                 {SELECT_LANG_KEYS.map((value) => {
//                   const item = {
//                     label: SELECT_LANG_LABELS[value] ?? value,
//                     value,
//                   };
//                   return (
//                     <SelectItem key={value} item={item}>
//                       <SelectItemText>{item.label}</SelectItemText>
//                       <SelectItemIndicator />
//                     </SelectItem>
//                   );
//                 })}
//               </SelectList>
//             </>
//           )}
//         </SelectContext>
//       </SelectPopup>
//     </Select>
//   </div>
// );

// const SelectGroupingDemo = () => (
//   <div className="w-full max-w-xs">
//     <Select
//       aria-label="Grouped frameworks"
//       groupBy={(item) =>
//         SELECT_FE_GROUP.some((x) => x.value === item.value)
//           ? "Frontend"
//           : "Backend"
//       }
//       items={[...SELECT_WITH_GROUPS]}
//     >
//       <SelectTriggerField>
//         <SelectValue placeholder="Select stack" />
//       </SelectTriggerField>
//       <SelectPopup>
//         <SelectGroupedList items={[...SELECT_WITH_GROUPS]}>
//           {([group, groupItems]) => (
//             <SelectItemGroup key={group}>
//               <SelectItemGroupLabel>{group}</SelectItemGroupLabel>
//               {groupItems.map((item) => (
//                 <SelectItem key={item.value} item={item}>
//                   <SelectItemText>{item.label}</SelectItemText>
//                   <SelectItemIndicator />
//                 </SelectItem>
//               ))}
//             </SelectItemGroup>
//           )}
//         </SelectGroupedList>
//       </SelectPopup>
//     </Select>
//   </div>
// );

// const SelectFieldDemo = () => (
//   <Field className="max-w-xs gap-3">
//     <FieldLabel>Framework</FieldLabel>
//     <Select
//       aria-label="Framework field"
//       defaultValue={["next"]}
//       items={[...SELECT_FRAMEWORKS]}
//     >
//       <SelectTriggerField>
//         <SelectValue placeholder="Choose…" />
//       </SelectTriggerField>
//       <SelectPopup>
//         <SelectList>
//           {SELECT_FRAMEWORKS.map((item) => (
//             <SelectItem key={item.value} item={item}>
//               <SelectItemText>{item.label}</SelectItemText>
//               <SelectItemIndicator />
//             </SelectItem>
//           ))}
//         </SelectList>
//       </SelectPopup>
//     </Select>
//     <FieldDescription>Pick one for the starter template.</FieldDescription>
//   </Field>
// );

// const SelectFormDemo = () => {
//   const [submitted, setSubmitted] = useState<string | null>(null);
//   return (
//     <form
//       className="flex max-w-xs flex-col gap-3"
//       onSubmit={(e: FormEvent<HTMLFormElement>) => {
//         e.preventDefault();
//         const fd = new FormData(e.currentTarget);
//         setSubmitted(String(fd.get("framework") ?? ""));
//       }}
//     >
//       <Select
//         aria-label="Framework"
//         defaultValue={["next"]}
//         items={[...SELECT_FRAMEWORKS]}
//         name="framework"
//         required
//       >
//         <SelectTriggerField>
//           <SelectValue placeholder="Select a framework" />
//         </SelectTriggerField>
//         <SelectPopup>
//           <SelectList>
//             {SELECT_FRAMEWORKS.map((item) => (
//               <SelectItem key={item.value} item={item}>
//                 <SelectItemText>{item.label}</SelectItemText>
//                 <SelectItemIndicator />
//               </SelectItem>
//             ))}
//           </SelectList>
//         </SelectPopup>
//       </Select>
//       <Button type="submit">Submit</Button>
//       {submitted ? (
//         <p className="text-muted-foreground text-xs">
//           framework:{" "}
//           <span className="font-medium text-foreground">{submitted}</span>
//         </p>
//       ) : null}
//     </form>
//   );
// };

// const SelectAsyncDemo = () => {
//   const [items, setItems] = useState(SELECT_FRAMEWORKS.slice(0, 1));
//   const [busy, setBusy] = useState(false);
//   return (
//     <div className="flex w-full max-w-xs flex-col gap-2">
//       <p className="text-muted-foreground text-xs">
//         Open the menu to load the full list{busy ? "…" : "."}
//       </p>
//       <Select
//         aria-label="Async frameworks"
//         items={[...items]}
//         onOpenChange={({ open }) => {
//           if (open && items.length < SELECT_FRAMEWORKS.length) {
//             setBusy(true);
//             window.setTimeout(() => {
//               setItems([...SELECT_FRAMEWORKS]);
//               setBusy(false);
//             }, 500);
//           }
//         }}
//       >
//         <SelectTriggerField>
//           <SelectValue placeholder="Open to load…" />
//         </SelectTriggerField>
//         <SelectPopup>
//           <SelectList>
//             {items.map((item) => (
//               <SelectItem key={item.value} item={item}>
//                 <SelectItemText>{item.label}</SelectItemText>
//                 <SelectItemIndicator />
//               </SelectItem>
//             ))}
//           </SelectList>
//         </SelectPopup>
//       </Select>
//     </div>
//   );
// };

// const SelectLazyMountDemo = () => (
//   <div className="w-full max-w-xs">
//     <Select
//       aria-label="Lazy select"
//       defaultValue={["next"]}
//       items={[...SELECT_FRAMEWORKS]}
//       lazyMount
//       unmountOnExit
//     >
//       <SelectTriggerField>
//         <SelectValue />
//       </SelectTriggerField>
//       <SelectPopup>
//         <SelectList>
//           {SELECT_FRAMEWORKS.map((item) => (
//             <SelectItem key={item.value} item={item}>
//               <SelectItemText>{item.label}</SelectItemText>
//               <SelectItemIndicator />
//             </SelectItem>
//           ))}
//         </SelectList>
//       </SelectPopup>
//     </Select>
//   </div>
// );

// const SelectOverflowDemo = () => (
//   <div className="w-full max-w-xs">
//     <Select
//       aria-label="Long list"
//       items={SELECT_MANY_ITEMS}
//       positioning={{
//         flip: true,
//         hideWhenDetached: true,
//         placement: "bottom-start",
//         sameWidth: true,
//       }}
//     >
//       <SelectTriggerField>
//         <SelectValue placeholder="Scroll the list" />
//       </SelectTriggerField>
//       <SelectPopup>
//         <SelectList className="max-h-52">
//           {SELECT_MANY_ITEMS.map((item) => (
//             <SelectItem key={item.value} item={item}>
//               <SelectItemText>{item.label}</SelectItemText>
//               <SelectItemIndicator />
//             </SelectItem>
//           ))}
//         </SelectList>
//       </SelectPopup>
//     </Select>
//   </div>
// );

// const SelectSizesDemo = () => (
//   <div className="flex w-full max-w-md flex-col gap-4 sm:flex-row">
//     <Select
//       aria-label="Small"
//       defaultValue={["next"]}
//       items={[...SELECT_FRAMEWORKS]}
//     >
//       <SelectTriggerField>
//         <SelectValue placeholder="Small" />
//       </SelectTriggerField>
//       <SelectPopup>
//         <SelectList>
//           {SELECT_FRAMEWORKS.map((item) => (
//             <SelectItem key={item.value} item={item}>
//               <SelectItemText>{item.label}</SelectItemText>
//               <SelectItemIndicator />
//             </SelectItem>
//           ))}
//         </SelectList>
//       </SelectPopup>
//     </Select>
//     <Select
//       aria-label="Large"
//       defaultValue={["vite"]}
//       items={[...SELECT_FRAMEWORKS]}
//     >
//       <SelectTriggerField>
//         <SelectValue placeholder="Large" />
//       </SelectTriggerField>
//       <SelectPopup>
//         <SelectList>
//           {SELECT_FRAMEWORKS.map((item) => (
//             <SelectItem key={item.value} item={item}>
//               <SelectItemText>{item.label}</SelectItemText>
//               <SelectItemIndicator />
//             </SelectItem>
//           ))}
//         </SelectList>
//       </SelectPopup>
//     </Select>
//   </div>
// );

// const SelectDisabledDemo = () => (
//   <div className="w-full max-w-xs">
//     <Select
//       aria-label="Disabled"
//       defaultValue={["next"]}
//       disabled
//       items={[...SELECT_FRAMEWORKS]}
//     >
//       <SelectTriggerField>
//         <SelectValue placeholder="Framework" />
//       </SelectTriggerField>
//       <SelectPopup>
//         <SelectList>
//           {SELECT_FRAMEWORKS.map((item) => (
//             <SelectItem key={item.value} item={item}>
//               <SelectItemText>{item.label}</SelectItemText>
//               <SelectItemIndicator />
//             </SelectItem>
//           ))}
//         </SelectList>
//       </SelectPopup>
//     </Select>
//   </div>
// );

// const SelectSameWidthOffDemo = () => (
//   <div className="w-full max-w-xs">
//     <Select
//       aria-label="Wider popup"
//       defaultValue={["next"]}
//       items={[...SELECT_FRAMEWORKS]}
//       positioning={{ placement: "bottom-start", sameWidth: false }}
//     >
//       <SelectTriggerField>
//         <SelectValue />
//       </SelectTriggerField>
//       <SelectPopup className="min-w-56">
//         <SelectList>
//           {SELECT_FRAMEWORKS.map((item) => (
//             <SelectItem key={item.value} item={item}>
//               <SelectItemText>{item.label}</SelectItemText>
//               <SelectItemIndicator />
//             </SelectItem>
//           ))}
//         </SelectList>
//       </SelectPopup>
//     </Select>
//   </div>
// );

// const SelectWithLabelDemo = () => (
//   <div className="w-full max-w-xs">
//     <Select
//       aria-label="Select command"
//       defaultValue={[SELECT_COMMAND_ITEMS[0].value]}
//       items={[...SELECT_COMMAND_ITEMS]}
//     >
//       <SelectLabel>Commands</SelectLabel>

//       <SelectTriggerField>
//         <SelectValue />
//       </SelectTriggerField>

//       <SelectPopup>
//         <SelectList>
//           {SELECT_COMMAND_ITEMS.map((item) => (
//             <SelectItem key={item.value} item={item}>
//               <SelectItemText>{item.label}</SelectItemText>
//               <SelectItemIndicator />
//             </SelectItem>
//           ))}
//         </SelectList>
//       </SelectPopup>
//     </Select>
//   </div>
// );

// const SelectWithIconTriggerDemo = () => (
//   <div className="w-full max-w-xs">
//     <Select
//       aria-label="With icon"
//       defaultValue={["next"]}
//       items={[...SELECT_FRAMEWORKS]}
//     >
//       <SelectTriggerField>
//         <CableIcon aria-hidden className="size-4 shrink-0 opacity-80" />
//         <SelectValue placeholder="Framework" />
//       </SelectTriggerField>
//       <SelectPopup>
//         <SelectList>
//           {SELECT_FRAMEWORKS.map((item) => (
//             <SelectItem key={item.value} item={item}>
//               <SelectItemText>{item.label}</SelectItemText>
//               <SelectItemIndicator />
//             </SelectItem>
//           ))}
//         </SelectList>
//       </SelectPopup>
//     </Select>
//   </div>
// );

// const SelectOptionsWithIconDemo = () => (
//   <div className="w-full max-w-xs">
//     <Select
//       aria-label="Categories"
//       defaultValue={[SELECT_ICON_OPTIONS[0].value]}
//       items={[...SELECT_ICON_OPTIONS]}
//     >
//       <SelectTriggerField>
//         <SelectValue>
//           {(api) => {
//             const item = api.selectedItems[0] as
//               | (typeof SELECT_ICON_OPTIONS)[number]
//               | undefined;
//             if (!item) {
//               return "Select…";
//             }
//             const Icon = item.icon;
//             return (
//               <span className="flex min-w-0 items-center gap-2">
//                 <Icon className="size-4 shrink-0" />
//                 <span className="truncate">{item.label}</span>
//               </span>
//             );
//           }}
//         </SelectValue>
//       </SelectTriggerField>
//       <SelectPopup>
//         <SelectList>
//           {SELECT_ICON_OPTIONS.map((item) => (
//             <SelectItem key={item.value} item={item}>
//               <span className="flex items-center gap-2 flex-1">
//                 <item.icon className="size-4 shrink-0" />
//                 <SelectItemText>{item.label}</SelectItemText>
//               </span>
//               <SelectItemIndicator />
//             </SelectItem>
//           ))}
//         </SelectList>
//       </SelectPopup>
//     </Select>
//   </div>
// );

// const SelectObjectValuesDemo = () => (
//   <div className="w-full max-w-xs">
//     <Select
//       aria-label="Commands"
//       defaultValue={[SELECT_COMMAND_ITEMS[0].value]}
//       itemToString={(item) => item.value}
//       items={[...SELECT_COMMAND_ITEMS]}
//     >
//       <SelectTriggerField className="min-h-8 h-max sm:h-max">
//         <SelectValue>
//           {(api) => {
//             const item = api.selectedItems[0] as
//               | (typeof SELECT_COMMAND_ITEMS)[number]
//               | undefined;
//             if (!item) {
//               return "Select…";
//             }
//             return (
//               <span className="flex flex-col text-left">
//                 <span className="truncate">{item.label}</span>
//                 <span className="truncate text-muted-foreground text-xs">
//                   {item.description}
//                 </span>
//               </span>
//             );
//           }}
//         </SelectValue>
//       </SelectTriggerField>
//       <SelectPopup>
//         <SelectList>
//           {SELECT_COMMAND_ITEMS.map((item) => (
//             <SelectItem key={item.value} item={item}>
//               <span className="flex flex-col gap-0.5 flex-1">
//                 <SelectItemText>{item.label}</SelectItemText>
//                 <span className="text-muted-foreground text-xs">
//                   {item.description}
//                 </span>
//               </span>
//               <SelectItemIndicator />
//             </SelectItem>
//           ))}
//         </SelectList>
//       </SelectPopup>
//     </Select>
//   </div>
// );

// const SelectClearFieldDemo = () => (
//   <div className="w-full">
//     <Select
//       aria-label="Clearable"
//       defaultValue={["next"]}
//       items={[...SELECT_FRAMEWORKS]}
//     >
//       <SelectTriggerField showClear>
//         <SelectValue placeholder="Framework" />
//       </SelectTriggerField>
//       <SelectPopup>
//         <SelectList>
//           {SELECT_FRAMEWORKS.map((item) => (
//             <SelectItem key={item.value} item={item}>
//               <SelectItemText>{item.label}</SelectItemText>
//               <SelectItemIndicator />
//             </SelectItem>
//           ))}
//         </SelectList>
//       </SelectPopup>
//     </Select>
//   </div>
// );

// const SelectInvalidDemo = () => (
//   <div className="w-full max-w-xs">
//     <Select
//       aria-label="Invalid"
//       defaultValue={["next"]}
//       invalid
//       items={[...SELECT_FRAMEWORKS]}
//     >
//       <SelectTriggerField>
//         <SelectValue />
//       </SelectTriggerField>
//       <SelectPopup>
//         <SelectList>
//           {SELECT_FRAMEWORKS.map((item) => (
//             <SelectItem key={item.value} item={item}>
//               <SelectItemText>{item.label}</SelectItemText>
//               <SelectItemIndicator />
//             </SelectItem>
//           ))}
//         </SelectList>
//       </SelectPopup>
//     </Select>
//   </div>
// );

// const SelectReadOnlyDemo = () => (
//   <div className="w-full max-w-xs">
//     <Select
//       aria-label="Read-only"
//       defaultValue={["vite"]}
//       items={[...SELECT_FRAMEWORKS]}
//       readOnly
//     >
//       <SelectTriggerField>
//         <SelectValue />
//       </SelectTriggerField>
//       <SelectPopup>
//         <SelectList>
//           {SELECT_FRAMEWORKS.map((item) => (
//             <SelectItem key={item.value} item={item}>
//               <SelectItemText>{item.label}</SelectItemText>
//               <SelectItemIndicator />
//             </SelectItem>
//           ))}
//         </SelectList>
//       </SelectPopup>
//     </Select>
//   </div>
// );

// const SelectDeselectableDemo = () => (
//   <div className="w-full max-w-xs">
//     <Select
//       aria-label="Deselectable"
//       defaultValue={["next"]}
//       deselectable
//       items={[...SELECT_FRAMEWORKS]}
//     >
//       <SelectTriggerField>
//         <SelectValue placeholder="Tap again to clear" />
//       </SelectTriggerField>
//       <SelectPopup>
//         <SelectList>
//           {SELECT_FRAMEWORKS.map((item) => (
//             <SelectItem key={item.value} item={item}>
//               <SelectItemText>{item.label}</SelectItemText>
//               <SelectItemIndicator />
//             </SelectItem>
//           ))}
//         </SelectList>
//       </SelectPopup>
//     </Select>
//   </div>
// );

// const SelectEmptyDemo = () => {
//   const { collection } = useListCollection({
//     initialItems: [] as { label: string; value: string }[],
//   });
//   return (
//     <div className="w-full max-w-xs">
//       <Select collection={collection}>
//         <SelectTriggerField>
//           <SelectValue placeholder="No items" />
//         </SelectTriggerField>
//         <SelectPopup>
//           <SelectEmpty>No items to display</SelectEmpty>
//         </SelectPopup>
//       </Select>
//     </div>
//   );
// };

// const SelectContextHookDemo = () => {
//   const Inner = () => {
//     const ctx = useSelectContext();
//     return (
//       <p className="text-muted-foreground text-xs">
//         useSelectContext:{" "}
//         <span className="font-medium text-foreground">
//           {ctx.valueAsString || "—"}
//         </span>
//       </p>
//     );
//   };
//   return (
//     <div className="flex w-full max-w-xs flex-col gap-2">
//       <Select
//         aria-label="Context"
//         defaultValue={["next"]}
//         items={[...SELECT_FRAMEWORKS]}
//       >
//         <Inner />
//         <SelectTriggerField>
//           <SelectValue />
//         </SelectTriggerField>
//         <SelectPopup>
//           <SelectList>
//             {SELECT_FRAMEWORKS.map((item) => (
//               <SelectItem key={item.value} item={item}>
//                 <SelectItemText>{item.label}</SelectItemText>
//                 <SelectItemIndicator />
//               </SelectItem>
//             ))}
//           </SelectList>
//         </SelectPopup>
//       </Select>
//     </div>
//   );
// };

// const SelectCloseOnSelectDemo = () => (
//   <div className="w-full max-w-xs">
//     <Select
//       aria-label="Stay open"
//       closeOnSelect={false}
//       defaultValue={["next"]}
//       items={[...SELECT_FRAMEWORKS]}
//     >
//       <SelectTriggerField>
//         <SelectValue />
//       </SelectTriggerField>
//       <SelectPopup>
//         <SelectList>
//           {SELECT_FRAMEWORKS.map((item) => (
//             <SelectItem key={item.value} item={item}>
//               <SelectItemText>{item.label}</SelectItemText>
//               <SelectItemIndicator />
//             </SelectItem>
//           ))}
//         </SelectList>
//       </SelectPopup>
//     </Select>
//   </div>
// );

// const STEPS_ITEMS = [
//   { title: "First", description: "Contact Info" },
//   { title: "Second", description: "Date & Time" },
//   { title: "Third", description: "Select Rooms" },
// ] as const;

// const StepsBasicDemo = () => (
//   <Steps count={STEPS_ITEMS.length}>
//     <StepsList>
//       {STEPS_ITEMS.map((item, index) => (
//         <StepsItem index={index} key={item.title}>
//           <StepsTrigger>
//             <StepsIndicator>{index + 1}</StepsIndicator>
//             <div className="flex min-w-0 flex-col">
//               <StepsTitle>{item.title}</StepsTitle>
//               <StepsDescription>{item.description}</StepsDescription>
//             </div>
//           </StepsTrigger>
//           <StepsSeparator />
//         </StepsItem>
//       ))}
//     </StepsList>

//     {STEPS_ITEMS.map((item, index) => (
//       <StepsContent index={index} key={item.title}>
//         {item.title} — {item.description}
//       </StepsContent>
//     ))}

//     <StepsCompletedContent>
//       Steps complete — thank you for filling out the form!
//     </StepsCompletedContent>

//     <StepsActions>
//       <StepsPrevTrigger>Back</StepsPrevTrigger>
//       <StepsNextTrigger>Next</StepsNextTrigger>
//     </StepsActions>
//   </Steps>
// );

// const StepsControlledDemo = () => {
//   const [step, setStep] = useState(0);
//   return (
//     <div className="flex w-full flex-col gap-2">
//       <p className="text-muted-foreground text-xs">
//         current step:{" "}
//         <span className="font-medium text-foreground">{step + 1}</span>
//       </p>
//       <Steps
//         count={STEPS_ITEMS.length}
//         onStepChange={(d) => setStep(d.step)}
//         step={step}
//       >
//         <StepsList>
//           {STEPS_ITEMS.map((item, index) => (
//             <StepsItem index={index} key={item.title}>
//               <StepsTrigger>
//                 <StepsIndicator>{index + 1}</StepsIndicator>
//                 <div className="flex min-w-0 flex-col">
//                   <StepsTitle>{item.title}</StepsTitle>
//                   <StepsDescription>{item.description}</StepsDescription>
//                 </div>
//               </StepsTrigger>
//               <StepsSeparator />
//             </StepsItem>
//           ))}
//         </StepsList>

//         {STEPS_ITEMS.map((item, index) => (
//           <StepsContent index={index} key={item.title}>
//             {item.title} — {item.description}
//           </StepsContent>
//         ))}

//         <StepsCompletedContent>
//           Steps complete — thank you for filling out the form!
//         </StepsCompletedContent>

//         <StepsActions>
//           <StepsPrevTrigger>Back</StepsPrevTrigger>
//           <StepsNextTrigger>Next</StepsNextTrigger>
//         </StepsActions>
//       </Steps>
//     </div>
//   );
// };

// const StepsRootProviderDemo = () => {
//   const store = useSteps({ count: STEPS_ITEMS.length });
//   return (
//     <div className="flex w-full flex-col gap-2">
//       <p className="text-muted-foreground text-xs">
//         current step:{" "}
//         <span className="font-medium text-foreground">{store.value + 1}</span>
//       </p>

//       <StepsRootProvider value={store}>
//         <StepsList>
//           {STEPS_ITEMS.map((item, index) => (
//             <StepsItem index={index} key={item.title}>
//               <StepsTrigger>
//                 <StepsIndicator>{index + 1}</StepsIndicator>
//                 <div className="flex min-w-0 flex-col">
//                   <StepsTitle>{item.title}</StepsTitle>
//                   <StepsDescription>{item.description}</StepsDescription>
//                 </div>
//               </StepsTrigger>
//               <StepsSeparator />
//             </StepsItem>
//           ))}
//         </StepsList>

//         {STEPS_ITEMS.map((item, index) => (
//           <StepsContent index={index} key={item.title}>
//             {item.title} — {item.description}
//           </StepsContent>
//         ))}

//         <StepsCompletedContent>
//           Steps complete — thank you for filling out the form!
//         </StepsCompletedContent>

//         <StepsActions>
//           <StepsPrevTrigger>Back</StepsPrevTrigger>
//           <StepsNextTrigger>Next</StepsNextTrigger>
//         </StepsActions>
//       </StepsRootProvider>
//     </div>
//   );
// };

// const StepsVerticalDemo = () => (
//   <Steps count={STEPS_ITEMS.length} orientation="vertical">
//     <StepsList>
//       {STEPS_ITEMS.map((item, index) => (
//         <StepsItem index={index} key={item.title}>
//           <StepsTrigger>
//             <StepsIndicator>{index + 1}</StepsIndicator>
//             <div className="flex min-w-0 flex-col">
//               <StepsTitle>{item.title}</StepsTitle>
//               <StepsDescription>{item.description}</StepsDescription>
//             </div>
//           </StepsTrigger>
//           <StepsSeparator />
//         </StepsItem>
//       ))}
//     </StepsList>

//     {STEPS_ITEMS.map((item, index) => (
//       <StepsContent index={index} key={item.title}>
//         <div className="flex h-full w-full flex-col justify-between gap-4">
//           <div>
//             <p className="font-medium text-sm text-foreground">{item.title}</p>
//             <p className="text-muted-foreground text-xs">{item.description}</p>
//           </div>
//           <StepsActions className="mt-0">
//             <StepsPrevTrigger>Back</StepsPrevTrigger>
//             <StepsNextTrigger>Next</StepsNextTrigger>
//           </StepsActions>
//         </div>
//       </StepsContent>
//     ))}

//     <StepsCompletedContent>
//       <div className="flex h-full w-full flex-col justify-between gap-4">
//         <p>Steps complete — thank you for filling out the form!</p>
//         <StepsActions className="mt-0 justify-start">
//           <StepsPrevTrigger>Back</StepsPrevTrigger>
//         </StepsActions>
//       </div>
//     </StepsCompletedContent>
//   </Steps>
// );

// const StepsNestedValidationDemo = () => {
//   const [name, setName] = useState("");
//   const [date, setDate] = useState("");
//   const [room, setRoom] = useState("");
//   const [blocked, setBlocked] = useState<string | null>(null);

//   const isValid = (index: number) => {
//     if (index === 0) return name.trim().length > 1;
//     if (index === 1) return date.trim().length > 3;
//     if (index === 2) return room.trim().length > 0;
//     return true;
//   };

//   return (
//     <Steps
//       count={3}
//       isStepValid={isValid}
//       linear
//       onStepInvalid={(d) =>
//         setBlocked(`Step ${d.step + 1} is invalid — complete it to continue.`)
//       }
//       onStepChange={() => setBlocked(null)}
//     >
//       <StepsList>
//         {STEPS_ITEMS.map((item, index) => (
//           <StepsItem index={index} key={item.title}>
//             <StepsTrigger>
//               <StepsIndicator>{index + 1}</StepsIndicator>
//               <div className="flex min-w-0 flex-col">
//                 <StepsTitle>{item.title}</StepsTitle>
//                 <StepsDescription>{item.description}</StepsDescription>
//               </div>
//             </StepsTrigger>
//             <StepsSeparator />
//           </StepsItem>
//         ))}
//       </StepsList>

//       {blocked ? (
//         <p className="text-destructive text-xs">{blocked}</p>
//       ) : (
//         <p className="text-muted-foreground text-xs">
//           Linear + validation: “Next” is blocked until the current step is
//           valid.
//         </p>
//       )}

//       <StepsContent index={0}>
//         <div className="w-full max-w-sm space-y-3">
//           <Field>
//             <FieldLabel>Full name</FieldLabel>
//             <FieldInput asChild>
//               <Input
//                 onChange={(e) => setName(e.currentTarget.value)}
//                 placeholder="Ada Lovelace"
//                 value={name}
//               />
//             </FieldInput>
//             <FieldDescription>Enter at least 2 characters.</FieldDescription>
//             {name.trim().length > 0 && !isValid(0) ? (
//               <FieldError>Name is too short.</FieldError>
//             ) : null}
//           </Field>
//           <StepsActions className="mt-0">
//             <StepsPrevTrigger>Back</StepsPrevTrigger>
//             <StepsNextTrigger>Next</StepsNextTrigger>
//           </StepsActions>
//         </div>
//       </StepsContent>

//       <StepsContent index={1}>
//         <div className="w-full max-w-sm space-y-3">
//           <Field>
//             <FieldLabel>Date &amp; time</FieldLabel>
//             <FieldInput asChild>
//               <Input
//                 onChange={(e) => setDate(e.currentTarget.value)}
//                 placeholder="2026-04-07 14:00"
//                 value={date}
//               />
//             </FieldInput>
//             <FieldDescription>
//               Any non-empty value is accepted here.
//             </FieldDescription>
//             {date.trim().length > 0 && !isValid(1) ? (
//               <FieldError>Please enter a date.</FieldError>
//             ) : null}
//           </Field>
//           <StepsActions className="mt-0">
//             <StepsPrevTrigger>Back</StepsPrevTrigger>
//             <StepsNextTrigger>Next</StepsNextTrigger>
//           </StepsActions>
//         </div>
//       </StepsContent>

//       <StepsContent index={2}>
//         <div className="w-full max-w-sm space-y-3">
//           <Field>
//             <FieldLabel>Room</FieldLabel>
//             <FieldInput asChild>
//               <Input
//                 onChange={(e) => setRoom(e.currentTarget.value)}
//                 placeholder="Boardroom A"
//                 value={room}
//               />
//             </FieldInput>
//             <FieldDescription>Pick any room name.</FieldDescription>
//             {room.trim().length > 0 && !isValid(2) ? (
//               <FieldError>Please choose a room.</FieldError>
//             ) : null}
//           </Field>
//           <StepsActions className="mt-0">
//             <StepsPrevTrigger>Back</StepsPrevTrigger>
//             <StepsNextTrigger>Finish</StepsNextTrigger>
//           </StepsActions>
//         </div>
//       </StepsContent>

//       <StepsCompletedContent>
//         <div className="w-full space-y-3">
//           <p>Done. Summary:</p>
//           <ul className="list-inside list-disc text-muted-foreground text-sm">
//             <li>
//               <span className="text-foreground">Name:</span> {name || "—"}
//             </li>
//             <li>
//               <span className="text-foreground">Date:</span> {date || "—"}
//             </li>
//             <li>
//               <span className="text-foreground">Room:</span> {room || "—"}
//             </li>
//           </ul>
//           <StepsActions className="mt-0 justify-start">
//             <StepsPrevTrigger>Back</StepsPrevTrigger>
//           </StepsActions>
//         </div>
//       </StepsCompletedContent>
//     </Steps>
//   );
// };

const ToggleBasicDemo = () => (
  <Toggle aria-label="Toggle bold" variant="outline">
    <BoldIcon />
  </Toggle>
);

const ToggleControlledDemo = () => {
  const [pressed, setPressed] = useState(false);

  return (
    <div className="flex items-center gap-3">
      <Toggle
        aria-label="Toggle favorite"
        onPressedChange={setPressed}
        pressed={pressed}
        variant="outline"
      >
        <ToggleIndicator fallback={<HeartIcon />}>
          <HeartIcon fill="currentColor" />
        </ToggleIndicator>
      </Toggle>
      <p className="text-muted-foreground text-xs">
        Pressed:{" "}
        <span className="font-medium text-foreground">{String(pressed)}</span>
      </p>
    </div>
  );
};

const ToggleDisabledDemo = () => (
  <Toggle aria-label="Disabled toggle" disabled variant="outline">
    <BoldIcon />
  </Toggle>
);

const ToggleIndicatorDemo = () => (
  <Toggle aria-label="Toggle favorite" variant="outline">
    <ToggleIndicator fallback={<HeartIcon />}>
      <HeartIcon fill="currentColor" />
    </ToggleIndicator>
  </Toggle>
);

const ToggleContextDemo = () => (
  <Toggle aria-label="Toggle bold state" variant="outline">
    <BoldIcon />
    <ToggleContext>
      {(context) => (context.pressed ? "On" : "Off")}
    </ToggleContext>
  </Toggle>
);

const ToggleGroupBasicDemo = () => (
  <ToggleGroup defaultValue={["left"]}>
    <ToggleGroupItem aria-label="Align left" value="left">
      <AlignLeftIcon />
    </ToggleGroupItem>
    <ToggleGroupItem aria-label="Align center" value="center">
      <AlignCenterIcon />
    </ToggleGroupItem>
    <ToggleGroupItem aria-label="Align right" value="right">
      <AlignRightIcon />
    </ToggleGroupItem>
    <ToggleGroupItem aria-label="Justify" value="justify">
      <AlignJustifyIcon />
    </ToggleGroupItem>
  </ToggleGroup>
);

const ToggleGroupControlledDemo = () => {
  const [value, setValue] = useState(["left"]);

  return (
    <div className="space-y-2">
      <ToggleGroup
        onValueChange={(event) => setValue(event.value)}
        value={value}
        variant="outline"
      >
        <ToggleGroupItem aria-label="Align left" value="left">
          <AlignLeftIcon />
        </ToggleGroupItem>
        <ToggleGroupItem aria-label="Align center" value="center">
          <AlignCenterIcon />
        </ToggleGroupItem>
        <ToggleGroupItem aria-label="Align right" value="right">
          <AlignRightIcon />
        </ToggleGroupItem>
        <ToggleGroupItem aria-label="Justify" value="justify">
          <AlignJustifyIcon />
        </ToggleGroupItem>
      </ToggleGroup>
      <p className="text-muted-foreground text-xs">
        Value:{" "}
        <span className="text-foreground">{value.join(", ") || "none"}</span>
      </p>
    </div>
  );
};

const ToggleGroupSmallDemo = () => (
  <ToggleGroup defaultValue={["bold"]} size="sm">
    <ToggleGroupItem aria-label="Toggle bold" value="bold">
      <BoldIcon />
    </ToggleGroupItem>
    <ToggleGroupItem aria-label="Toggle italic" value="italic">
      <ItalicIcon />
    </ToggleGroupItem>
    <ToggleGroupItem aria-label="Toggle underline" value="underline">
      <UnderlineIcon />
    </ToggleGroupItem>
  </ToggleGroup>
);

const ToggleGroupLargeDemo = () => (
  <ToggleGroup defaultValue={["bold"]} size="lg">
    <ToggleGroupItem aria-label="Toggle bold" value="bold">
      <BoldIcon />
    </ToggleGroupItem>
    <ToggleGroupItem aria-label="Toggle italic" value="italic">
      <ItalicIcon />
    </ToggleGroupItem>
    <ToggleGroupItem aria-label="Toggle underline" value="underline">
      <UnderlineIcon />
    </ToggleGroupItem>
  </ToggleGroup>
);

const ToggleGroupOutlineDemo = () => (
  <ToggleGroup defaultValue={["bold"]} variant="outline">
    <ToggleGroupItem aria-label="Toggle bold" value="bold">
      <BoldIcon />
    </ToggleGroupItem>
    <ToggleGroupSeparator />
    <ToggleGroupItem aria-label="Toggle italic" value="italic">
      <ItalicIcon />
    </ToggleGroupItem>
    <ToggleGroupSeparator />
    <ToggleGroupItem aria-label="Toggle underline" value="underline">
      <UnderlineIcon />
    </ToggleGroupItem>
  </ToggleGroup>
);

const ToggleGroupVerticalDemo = () => (
  <ToggleGroup defaultValue={["bold"]} orientation="vertical" variant="outline">
    <ToggleGroupItem aria-label="Toggle bold" value="bold">
      <BoldIcon />
    </ToggleGroupItem>
    <ToggleGroupSeparator orientation="horizontal" />
    <ToggleGroupItem aria-label="Toggle italic" value="italic">
      <ItalicIcon />
    </ToggleGroupItem>
    <ToggleGroupSeparator orientation="horizontal" />
    <ToggleGroupItem aria-label="Toggle underline" value="underline">
      <UnderlineIcon />
    </ToggleGroupItem>
  </ToggleGroup>
);

const ToggleGroupDisabledDemo = () => (
  <ToggleGroup defaultValue={["bold"]} disabled>
    <ToggleGroupItem aria-label="Toggle bold" value="bold">
      <BoldIcon />
    </ToggleGroupItem>
    <ToggleGroupItem aria-label="Toggle italic" value="italic">
      <ItalicIcon />
    </ToggleGroupItem>
    <ToggleGroupItem aria-label="Toggle underline" value="underline">
      <UnderlineIcon />
    </ToggleGroupItem>
  </ToggleGroup>
);

const ToggleGroupWithDisabledItemDemo = () => (
  <ToggleGroup defaultValue={["bold"]}>
    <ToggleGroupItem aria-label="Toggle bold" value="bold">
      <BoldIcon />
    </ToggleGroupItem>
    <ToggleGroupItem aria-label="Toggle italic" disabled value="italic">
      <ItalicIcon />
    </ToggleGroupItem>
    <ToggleGroupItem aria-label="Toggle underline" value="underline">
      <UnderlineIcon />
    </ToggleGroupItem>
  </ToggleGroup>
);

const ToggleGroupMultipleDemo = () => (
  <ToggleGroup defaultValue={["bold"]} multiple>
    <ToggleGroupItem aria-label="Toggle bold" value="bold">
      <BoldIcon />
    </ToggleGroupItem>
    <ToggleGroupItem aria-label="Toggle italic" value="italic">
      <ItalicIcon />
    </ToggleGroupItem>
    <ToggleGroupItem aria-label="Toggle underline" value="underline">
      <UnderlineIcon />
    </ToggleGroupItem>
  </ToggleGroup>
);

const ToggleGroupRootProviderDemo = () => {
  const toggleGroup = useToggleGroup({ defaultValue: ["left"] });

  return (
    <div className="space-y-2">
      <p className="text-muted-foreground text-xs">
        Current:{" "}
        <span className="text-foreground">
          {toggleGroup.value.join(", ") || "none"}
        </span>
      </p>
      <ToggleGroupRootProvider value={toggleGroup}>
        <ToggleGroupItem aria-label="Align left" value="left">
          <AlignLeftIcon />
        </ToggleGroupItem>
        <ToggleGroupItem aria-label="Align center" value="center">
          <AlignCenterIcon />
        </ToggleGroupItem>
        <ToggleGroupItem aria-label="Align right" value="right">
          <AlignRightIcon />
        </ToggleGroupItem>
        <ToggleGroupItem aria-label="Justify" value="justify">
          <AlignJustifyIcon />
        </ToggleGroupItem>
      </ToggleGroupRootProvider>
    </div>
  );
};

// const ToggleGroupWithTooltipsDemo = () => (
//   <TooltipPrimitive.RootProvider>
//     <ToggleGroup defaultValue={["bold"]} multiple>
//       <TooltipPrimitive.Root>
//         <TooltipPrimitive.Trigger asChild>
//           <ToggleGroupItem aria-label="Toggle bold" value="bold">
//             <BoldIcon />
//           </ToggleGroupItem>
//         </TooltipPrimitive.Trigger>
//         <TooltipPrimitive.Positioner>
//           <TooltipPrimitive.Content className="rounded-md border border-input bg-popover px-2 py-1 text-popover-foreground text-xs shadow-xs/5">
//             Bold
//             <TooltipPrimitive.Arrow>
//               <TooltipPrimitive.ArrowTip className="fill-popover stroke-input" />
//             </TooltipPrimitive.Arrow>
//           </TooltipPrimitive.Content>
//         </TooltipPrimitive.Positioner>
//       </TooltipPrimitive.Root>
//       <TooltipPrimitive.Root>
//         <TooltipPrimitive.Trigger asChild>
//           <ToggleGroupItem aria-label="Toggle italic" value="italic">
//             <ItalicIcon />
//           </ToggleGroupItem>
//         </TooltipPrimitive.Trigger>
//         <TooltipPrimitive.Positioner>
//           <TooltipPrimitive.Content className="rounded-md border border-input bg-popover px-2 py-1 text-popover-foreground text-xs shadow-xs/5">
//             Italic
//             <TooltipPrimitive.Arrow>
//               <TooltipPrimitive.ArrowTip className="fill-popover stroke-input" />
//             </TooltipPrimitive.Arrow>
//           </TooltipPrimitive.Content>
//         </TooltipPrimitive.Positioner>
//       </TooltipPrimitive.Root>
//       <TooltipPrimitive.Root>
//         <TooltipPrimitive.Trigger asChild>
//           <ToggleGroupItem aria-label="Toggle underline" value="underline">
//             <UnderlineIcon />
//           </ToggleGroupItem>
//         </TooltipPrimitive.Trigger>
//         <TooltipPrimitive.Positioner>
//           <TooltipPrimitive.Content className="rounded-md border border-input bg-popover px-2 py-1 text-popover-foreground text-xs shadow-xs/5">
//             Underline
//             <TooltipPrimitive.Arrow>
//               <TooltipPrimitive.ArrowTip className="fill-popover stroke-input" />
//             </TooltipPrimitive.Arrow>
//           </TooltipPrimitive.Content>
//         </TooltipPrimitive.Positioner>
//       </TooltipPrimitive.Root>
//     </ToggleGroup>
//   </TooltipPrimitive.RootProvider>
// );

const TimerDigits = ({
  parts,
}: {
  parts: Array<{
    type: "days" | "hours" | "minutes" | "seconds" | "milliseconds";
    label: string;
  }>;
}) => (
  <TimerArea>
    {parts.map((part, index) => (
      <div className="flex items-center gap-2" key={part.type}>
        <div className="flex flex-col items-center">
          <TimerItem type={part.type} />
          <span className="text-[11px] uppercase tracking-wider text-muted-foreground">
            {part.label}
          </span>
        </div>
        {index < parts.length - 1 ? <TimerSeparator>:</TimerSeparator> : null}
      </div>
    ))}
  </TimerArea>
);

const TimerBasicDemo = () => (
  <Timer startMs={40 * 60 * 1000} targetMs={60 * 60 * 1000}>
    <TimerDigits
      parts={[
        { type: "days", label: "days" },
        { type: "hours", label: "hours" },
        { type: "minutes", label: "minutes" },
        { type: "seconds", label: "seconds" },
      ]}
    />
    <TimerControl>
      <TimerActionTrigger action="start" asChild>
        <Button size="sm" type="button" variant="outline">
          <PlayIcon className="size-4" /> Play
        </Button>
      </TimerActionTrigger>
      <TimerActionTrigger action="resume" asChild>
        <Button size="sm" type="button" variant="outline">
          <PlayIcon className="size-4" /> Resume
        </Button>
      </TimerActionTrigger>
      <TimerActionTrigger action="pause" asChild>
        <Button size="sm" type="button" variant="outline">
          <PauseIcon className="size-4" /> Pause
        </Button>
      </TimerActionTrigger>
    </TimerControl>
  </Timer>
);

const TimerCountdownDemo = () => (
  <Timer countdown startMs={5 * 60 * 1000}>
    <TimerDigits
      parts={[
        { type: "minutes", label: "minutes" },
        { type: "seconds", label: "seconds" },
      ]}
    />
    <TimerControl>
      <TimerActionTrigger action="start" asChild>
        <Button size="sm" type="button" variant="outline">
          <PlayIcon className="size-4" /> Start
        </Button>
      </TimerActionTrigger>
      <TimerActionTrigger action="pause" asChild>
        <Button size="sm" type="button" variant="outline">
          <PauseIcon className="size-4" /> Pause
        </Button>
      </TimerActionTrigger>
      <TimerActionTrigger action="reset" asChild>
        <Button size="sm" type="button" variant="outline">
          <RotateCcwIcon className="size-4" /> Reset
        </Button>
      </TimerActionTrigger>
    </TimerControl>
  </Timer>
);

const TimerIntervalDemo = () => (
  <Timer interval={100} targetMs={60 * 1000}>
    <TimerArea>
      <div className="flex flex-col items-center">
        <TimerItem type="seconds" />
        <span className="text-[11px] uppercase tracking-wider text-muted-foreground">
          seconds
        </span>
      </div>
      <TimerSeparator>.</TimerSeparator>
      <div className="flex flex-col items-center">
        <TimerItem type="milliseconds" />
        <span className="text-[11px] uppercase tracking-wider text-muted-foreground">
          ms
        </span>
      </div>
    </TimerArea>
    <TimerControl>
      <TimerActionTrigger action="start" asChild>
        <Button size="sm" type="button" variant="outline">
          <PlayIcon className="size-4" /> Start
        </Button>
      </TimerActionTrigger>
      <TimerActionTrigger action="pause" asChild>
        <Button size="sm" type="button" variant="outline">
          <PauseIcon className="size-4" /> Pause
        </Button>
      </TimerActionTrigger>
      <TimerActionTrigger action="reset" asChild>
        <Button size="sm" type="button" variant="outline">
          <RotateCcwIcon className="size-4" /> Reset
        </Button>
      </TimerActionTrigger>
    </TimerControl>
  </Timer>
);

const TimerEventsDemo = () => {
  const [ticks, setTicks] = useState(0);
  const [completed, setCompleted] = useState(false);

  return (
    <Timer
      onComplete={() => setCompleted(true)}
      onTick={() => setTicks((value) => value + 1)}
      targetMs={60 * 1000}
    >
      <TimerDigits
        parts={[
          { type: "minutes", label: "minutes" },
          { type: "seconds", label: "seconds" },
        ]}
      />
      <TimerControl>
        <TimerActionTrigger action="start" asChild>
          <Button size="sm" type="button" variant="outline">
            <PlayIcon className="size-4" /> Start
          </Button>
        </TimerActionTrigger>
        <TimerActionTrigger action="reset" asChild>
          <Button size="sm" type="button" variant="outline">
            <RotateCcwIcon className="size-4" /> Reset
          </Button>
        </TimerActionTrigger>
      </TimerControl>
      <p className="text-xs text-muted-foreground">
        Ticks: {ticks} {completed ? "· completed" : ""}
      </p>
    </Timer>
  );
};

const TimerPomodoroDemo = () => {
  const [isWorking, setIsWorking] = useState(true);
  const [cycles, setCycles] = useState(0);

  const onComplete = () => {
    setIsWorking((value) => !value);
    if (!isWorking) {
      setCycles((value) => value + 1);
    }
  };

  return (
    <Timer
      countdown
      key={isWorking ? "work" : "break"}
      onComplete={onComplete}
      startMs={isWorking ? 25 * 60 * 1000 : 5 * 60 * 1000}
    >
      <p className="text-sm font-medium text-foreground">
        {isWorking ? "Work session" : "Break session"}
      </p>
      <TimerDigits
        parts={[
          { type: "minutes", label: "minutes" },
          { type: "seconds", label: "seconds" },
        ]}
      />
      <TimerControl>
        <TimerActionTrigger action="start" asChild>
          <Button size="sm" type="button" variant="outline">
            <PlayIcon className="size-4" /> Start
          </Button>
        </TimerActionTrigger>
        <TimerActionTrigger action="pause" asChild>
          <Button size="sm" type="button" variant="outline">
            <PauseIcon className="size-4" /> Pause
          </Button>
        </TimerActionTrigger>
        <TimerActionTrigger action="reset" asChild>
          <Button size="sm" type="button" variant="outline">
            <RotateCcwIcon className="size-4" /> Reset
          </Button>
        </TimerActionTrigger>
      </TimerControl>
      <p className="text-xs text-muted-foreground">
        Completed cycles: {cycles}
      </p>
    </Timer>
  );
};

const TimerRootProviderDemo = () => {
  const timer = useTimer({ targetMs: 60 * 60 * 1000 });

  return (
    <div className="space-y-3">
      <p className="text-xs text-muted-foreground">
        Timer JSON: {JSON.stringify(timer.time)}
      </p>
      {/* <TimerRootProvider value={timer}>
        <>
        <TimerDigits
          parts={[
            { type: "hours", label: "hours" },
            { type: "minutes", label: "minutes" },
            { type: "seconds", label: "seconds" },
          ]}
        />
        <TimerControl>
          <TimerActionTrigger action="start" asChild>
            <Button size="sm" type="button" variant="outline">
              <PlayIcon className="size-4" /> Start
            </Button>
          </TimerActionTrigger>
          <TimerActionTrigger action="resume" asChild>
            <Button size="sm" type="button" variant="outline">
              <PlayIcon className="size-4" /> Resume
            </Button>
          </TimerActionTrigger>
          <TimerActionTrigger action="pause" asChild>
            <Button size="sm" type="button" variant="outline">
              <PauseIcon className="size-4" /> Pause
            </Button>
          </TimerActionTrigger>
          <TimerActionTrigger action="reset" asChild>
            <Button size="sm" type="button" variant="outline">
              <RotateCcwIcon className="size-4" /> Reset
            </Button>
          </TimerActionTrigger>
        </TimerControl>
        </>
        
      </TimerRootProvider> */}
    </div>
  );
};

// ─── Toast demos ────────────────────────────────────────────────────────────

const ToastBasicDemo = () => (
  <Button
    onClick={() =>
      toaster.create({
        title: "Event has been created",
        description: "Monday, January 3rd at 6:00pm",
        type: "info",
      })
    }
    size="sm"
    type="button"
    variant="outline"
  >
    Default Toast
  </Button>
);

const ToastTypesDemo = () => (
  <div className="flex flex-wrap gap-2">
    <Button
      onClick={() =>
        toaster.success({
          title: "Success!",
          description: "Your changes have been saved.",
        })
      }
      size="sm"
      type="button"
      variant="outline"
    >
      Success
    </Button>
    <Button
      onClick={() =>
        toaster.error({
          title: "Uh oh! Something went wrong.",
          description: "There was a problem with your request.",
        })
      }
      size="sm"
      type="button"
      variant="outline"
    >
      Error
    </Button>
    <Button
      onClick={() =>
        toaster.warning({
          title: "Warning!",
          description: "Your session is about to expire.",
        })
      }
      size="sm"
      type="button"
      variant="outline"
    >
      Warning
    </Button>
    <Button
      onClick={() =>
        toaster.info({
          title: "Heads up!",
          description: "You can add components to your app using the cli.",
        })
      }
      size="sm"
      type="button"
      variant="outline"
    >
      Info
    </Button>
  </div>
);

const ToastLoadingDemo = () => (
  <Button
    onClick={() =>
      toaster.create({
        title: "Loading\u2026",
        description: "Please wait while we process your request.",
        type: "loading",
      })
    }
    size="sm"
    type="button"
    variant="outline"
  >
    Loading Toast
  </Button>
);

const ToastActionDemo = () => (
  <Button
    onClick={() =>
      toaster.create({
        title: "Event has been created",
        description: "We have sent you an email with the event details.",
        type: "info",
        action: {
          label: "Undo",
          onClick: () => {
            toaster.create({
              title: "Action undone",
              description: "The action has been reverted.",
              type: "info",
            });
          },
        },
      })
    }
    size="sm"
    type="button"
    variant="outline"
  >
    With Action
  </Button>
);

const ToastPromiseDemo = () => {
  const handleUpload = () => {
    const upload = () =>
      new Promise<void>((resolve, reject) => {
        setTimeout(() => {
          Math.random() > 0.3 ? resolve() : reject(new Error("Upload failed"));
        }, 2000);
      });

    toaster.promise(upload, {
      loading: {
        title: "Uploading file\u2026",
        description: "Please wait while we upload your document.",
      },
      success: {
        title: "Upload complete",
        description: "Your file has been uploaded successfully.",
      },
      error: {
        title: "Upload failed",
        description: "Could not upload the file. Please try again.",
      },
    });
  };

  return (
    <Button onClick={handleUpload} size="sm" type="button" variant="outline">
      Run Promise
    </Button>
  );
};

const ToastUpdateDemo = () => {
  const idRef = useRef<string>(undefined);

  return (
    <div className="flex flex-wrap gap-2">
      <Button
        onClick={() => {
          idRef.current = toaster.create({
            title: "Sending message\u2026",
            description: "Please wait while we deliver your message.",
            type: "loading",
          });
        }}
        size="sm"
        type="button"
        variant="outline"
      >
        Send message
      </Button>
      <Button
        onClick={() => {
          if (!idRef.current) return;
          toaster.update(idRef.current, {
            title: "Message sent",
            description: "Your message has been delivered successfully.",
            type: "success",
          });
        }}
        size="sm"
        type="button"
        variant="outline"
      >
        Mark as sent
      </Button>
    </div>
  );
};

const TOAST_DURATIONS = [
  { label: "1s", value: 1000 },
  { label: "3s", value: 3000 },
  { label: "5s", value: 5000 },
  { label: "\u221E", value: Infinity },
];

const ToastDurationDemo = () => (
  <div className="flex flex-wrap gap-2">
    {TOAST_DURATIONS.map((d) => (
      <Button
        key={d.label}
        onClick={() =>
          toaster.create({
            title: "Reminder set",
            description:
              d.value === Infinity
                ? "This notification will stay until dismissed."
                : `This notification will disappear in ${d.label}.`,
            type: "info",
            duration: d.value,
          })
        }
        size="sm"
        type="button"
        variant="outline"
      >
        {d.label}
      </Button>
    ))}
  </div>
);

const TOAST_DESCRIPTIONS = [
  "Your changes have been saved.",
  "File uploaded successfully. You can view it in your documents folder.",
  "Your meeting has been scheduled for tomorrow at 10:00 AM. We have sent a calendar invite to all participants.",
  "We noticed unusual activity on your account. For your security, please verify your identity by clicking the link sent to your email.",
];

const ToastVaryingHeightDemo = () => {
  const [count, setCount] = useState(0);

  return (
    <Button
      onClick={() => {
        setCount((p) => p + 1);
        toaster.create({
          title: `Notification ${count + 1}`,
          description:
            TOAST_DESCRIPTIONS[
              Math.floor(Math.random() * TOAST_DESCRIPTIONS.length)
            ],
          type: "info",
        });
      }}
      size="sm"
      type="button"
      variant="outline"
    >
      Varying Heights
    </Button>
  );
};

const ToastStackedDemo = () => (
  <Button
    onClick={() => {
      ["Deployment queued", "Build started", "Build completed"].forEach(
        (title) => {
          toaster.create({
            title,
            description: "Monday, January 3rd at 6:00pm",
          });
        },
      );
    }}
    size="sm"
    type="button"
    variant="outline"
  >
    <BellIcon className="size-4" />
    Push 3 toasts
  </Button>
);

const ToastAnchoredDemo = () => (
  <Button
    onClick={() =>
      anchoredToaster.create({
        title: "Copied!",
      })
    }
    size="sm"
    type="button"
    variant="outline"
  >
    Anchored Toast
  </Button>
);

// const TOOLTIP_TOOLS = [
//   { icon: BoldIcon, id: "bold", label: "Bold", shortcut: "Ctrl+B" },
//   { icon: ItalicIcon, id: "italic", label: "Italic", shortcut: "Ctrl+I" },
//   {
//     icon: UnderlineIcon,
//     id: "underline",
//     label: "Underline",
//     shortcut: "Ctrl+U",
//   },
// ] as const;

const tourStageClass = "flex w-full max-w-xl flex-col gap-3";
const tourTargetClass =
  "flex min-h-20 items-center justify-center rounded-xl border border-border/70 bg-muted/20 px-4 py-3 text-center font-medium text-foreground text-sm";

const TourLaunchButton = ({
  label = "Start tour",
  onClick,
}: {
  label?: string;
  onClick: () => void;
}) => (
  <Button
    className="w-fit gap-2"
    onClick={onClick}
    type="button"
    variant="outline"
  >
    <PlayIcon className="size-4" />
    {label}
  </Button>
);

const TourActionButtons = () => (
  <TourActions>
    {(actions) =>
      actions.map((action, index) => (
        <TourActionTrigger
          action={action}
          asChild
          key={`${action.label}-${index}`}
        >
          <Button
            size="sm"
            type="button"
            variant={
              action.action === "next" || action.action === "dismiss"
                ? "default"
                : "outline"
            }
          >
            {action.label}
          </Button>
        </TourActionTrigger>
      ))
    }
  </TourActions>
);

const TourFrame = ({
  tour,
  showProgressBar = false,
}: {
  tour: any;
  showProgressBar?: boolean;
}) => (
  <Tour tour={tour}>
    <Portal>
      <TourBackdrop />
      <TourSpotlight />
    </Portal>
    <TourPopup className={cn("space-y-2", showProgressBar && "pb-6")}>
      <div className="flex items-start justify-between gap-3">
        <div className="min-w-0 flex-1 space-y-2">
          <TourProgressText />
          <TourTitle />
        </div>
        <TourCloseTrigger asChild>
          <Button
            aria-label="Close tour"
            size="icon-sm"
            type="button"
            variant="ghost"
          >
            <XIcon className="size-4" />
          </Button>
        </TourCloseTrigger>
      </div>
      <TourDescription />
      <TourControl>
        <TourActionButtons />
      </TourControl>
      {showProgressBar ? (
        <div className="absolute inset-x-0 bottom-0 h-1 overflow-hidden rounded-b-xl bg-muted">
          <div
            className="h-full bg-primary transition-[width] duration-200"
            style={{ width: `${tour.getProgressPercent()}%` }}
          />
        </div>
      ) : null}
    </TourPopup>
  </Tour>
);

const TourBasicDemo = () => {
  const tour = useTour({
    steps: [
      {
        id: "welcome",
        type: "dialog",
        title: "Welcome aboard",
        description:
          "This starter tour introduces the main actions in the workspace.",
        actions: [{ label: "Start tour", action: "next" }],
      },
      {
        id: "upload",
        type: "tooltip",
        arrow: true,
        title: "Upload files",
        description: "Add assets or docs from your computer.",
        target: () => document.querySelector("#tour-basic-upload"),
        actions: [
          { label: "Back", action: "prev" },
          { label: "Next", action: "next" },
        ],
      },
      {
        id: "save",
        type: "tooltip",
        arrow: true,
        title: "Save changes",
        description: "Persist the current draft before sharing it.",
        target: () => document.querySelector("#tour-basic-save"),
        actions: [
          { label: "Back", action: "prev" },
          { label: "Next", action: "next" },
        ],
      },
      {
        id: "more",
        type: "tooltip",
        arrow: true,
        title: "More options",
        description: "Advanced actions stay tucked away in the overflow menu.",
        target: () => document.querySelector("#tour-basic-more"),
        actions: [
          { label: "Back", action: "prev" },
          { label: "Finish", action: "dismiss" },
        ],
      },
    ],
  });

  return (
    <div className={tourStageClass}>
      <TourLaunchButton onClick={() => tour.start()} />
      <div className="flex flex-wrap gap-2">
        <Button id="tour-basic-upload" type="button" variant="outline">
          Upload
        </Button>
        <Button id="tour-basic-save" type="button" variant="outline">
          Save
        </Button>
        <Button id="tour-basic-more" type="button" variant="outline">
          More
        </Button>
      </div>
      <TourFrame tour={tour} />
    </div>
  );
};

const TourMixedTypesDemo = () => {
  const tour = useTour({
    steps: [
      {
        id: "intro",
        type: "dialog",
        title: "Three step types",
        description:
          "This sequence mixes dialog, tooltip, and floating tour steps in one flow.",
        actions: [{ label: "Start tour", action: "next" }],
      },
      {
        id: "anchor",
        type: "tooltip",
        arrow: true,
        title: "Anchored tooltip",
        description: "Tooltips are perfect for calling out a concrete control.",
        target: () => document.querySelector("#tour-mixed-anchor"),
        actions: [
          { label: "Back", action: "prev" },
          { label: "Next", action: "next" },
        ],
      },
      {
        id: "floating",
        type: "floating",
        placement: "bottom-end",
        title: "Floating panel",
        description:
          "Floating steps can introduce ambient UI without needing a target node.",
        actions: [
          { label: "Back", action: "prev" },
          { label: "Next", action: "next" },
        ],
      },
      {
        id: "done",
        type: "dialog",
        title: "Done",
        description: "You’ve now seen the core Tour presentation modes.",
        actions: [{ label: "Close", action: "dismiss" }],
      },
    ],
  });

  return (
    <div className={tourStageClass}>
      <TourLaunchButton onClick={() => tour.start()} />
      <div className={cn(tourTargetClass, "max-w-sm")} id="tour-mixed-anchor">
        Product analytics card
      </div>
      <TourFrame tour={tour} />
    </div>
  );
};

const TourProgressBarDemo = () => {
  const tour = useTour({
    steps: [
      {
        id: "step-1",
        type: "tooltip",
        arrow: true,
        title: "Step one",
        description: "The progress bar fills as you move through the tour.",
        target: () => document.querySelector("#tour-progress-1"),
        actions: [{ label: "Next", action: "next" }],
      },
      {
        id: "step-2",
        type: "tooltip",
        arrow: true,
        title: "Step two",
        description: "Halfway markers help users understand remaining effort.",
        target: () => document.querySelector("#tour-progress-2"),
        actions: [
          { label: "Back", action: "prev" },
          { label: "Next", action: "next" },
        ],
      },
      {
        id: "step-3",
        type: "tooltip",
        arrow: true,
        title: "Step three",
        description: "A compact bar fits nicely inside the popup chrome.",
        target: () => document.querySelector("#tour-progress-3"),
        actions: [
          { label: "Back", action: "prev" },
          { label: "Next", action: "next" },
        ],
      },
      {
        id: "step-4",
        type: "tooltip",
        arrow: true,
        title: "All set",
        description: "Last step reached.",
        target: () => document.querySelector("#tour-progress-4"),
        actions: [
          { label: "Back", action: "prev" },
          { label: "Finish", action: "dismiss" },
        ],
      },
    ],
  });

  return (
    <div className={tourStageClass}>
      <TourLaunchButton onClick={() => tour.start()} />
      <div className="grid grid-cols-2 gap-2">
        {["1", "2", "3", "4"].map((step) => (
          <div
            className={tourTargetClass}
            id={`tour-progress-${step}`}
            key={step}
          >
            Step {step}
          </div>
        ))}
      </div>
      <TourFrame showProgressBar tour={tour} />
    </div>
  );
};

const TourSkipDemo = () => {
  const tour = useTour({
    steps: [
      {
        id: "step-1",
        type: "tooltip",
        arrow: true,
        title: "Collections",
        description: "Users can skip the tour from the very first step.",
        target: () => document.querySelector("#tour-skip-1"),
        actions: [
          { label: "Skip", action: "dismiss" },
          { label: "Next", action: "next" },
        ],
      },
      {
        id: "step-2",
        type: "tooltip",
        arrow: true,
        title: "Saved views",
        description:
          "Keep skip available even mid-tour so exits are frictionless.",
        target: () => document.querySelector("#tour-skip-2"),
        actions: [
          { label: "Skip", action: "dismiss" },
          { label: "Back", action: "prev" },
          { label: "Next", action: "next" },
        ],
      },
      {
        id: "step-3",
        type: "tooltip",
        arrow: true,
        title: "Shortcuts",
        description: "The last step can finish normally.",
        target: () => document.querySelector("#tour-skip-3"),
        actions: [
          { label: "Back", action: "prev" },
          { label: "Finish", action: "dismiss" },
        ],
      },
    ],
  });

  return (
    <div className={tourStageClass}>
      <TourLaunchButton onClick={() => tour.start()} />
      <div className="grid gap-2 sm:grid-cols-3">
        <div className={tourTargetClass} id="tour-skip-1">
          Collections
        </div>
        <div className={tourTargetClass} id="tour-skip-2">
          Views
        </div>
        <div className={tourTargetClass} id="tour-skip-3">
          Shortcuts
        </div>
      </div>
      <TourFrame tour={tour} />
    </div>
  );
};

const TourKeyboardNavigationDemo = () => {
  const tour = useTour({
    keyboardNavigation: true,
    steps: [
      {
        id: "step-1",
        type: "tooltip",
        arrow: true,
        title: "Arrow keys",
        description: "Press Right Arrow to move forward.",
        target: () => document.querySelector("#tour-keyboard-1"),
        actions: [{ label: "Next", action: "next" }],
      },
      {
        id: "step-2",
        type: "tooltip",
        arrow: true,
        title: "Go back",
        description: "Press Left Arrow to revisit the previous item.",
        target: () => document.querySelector("#tour-keyboard-2"),
        actions: [
          { label: "Back", action: "prev" },
          { label: "Next", action: "next" },
        ],
      },
      {
        id: "step-3",
        type: "tooltip",
        arrow: true,
        title: "Escape closes",
        description: "Escape dismisses the tour from anywhere.",
        target: () => document.querySelector("#tour-keyboard-3"),
        actions: [
          { label: "Back", action: "prev" },
          { label: "Finish", action: "dismiss" },
        ],
      },
    ],
  });

  return (
    <div className={tourStageClass}>
      <TourLaunchButton onClick={() => tour.start()} />
      <p className="inline-flex items-center gap-2 text-muted-foreground text-xs">
        <InfoIcon className="size-4" />
        Use Right Arrow, Left Arrow, and Escape while the tour is open.
      </p>
      <div className="grid gap-2 sm:grid-cols-3">
        <div className={tourTargetClass} id="tour-keyboard-1">
          Right
        </div>
        <div className={tourTargetClass} id="tour-keyboard-2">
          Left
        </div>
        <div className={tourTargetClass} id="tour-keyboard-3">
          Escape
        </div>
      </div>
      <TourFrame tour={tour} />
    </div>
  );
};

const TourEventsDemo = () => {
  const [logs, setLogs] = useState<string[]>([]);

  const pushLog = (message: string) => {
    setLogs((current) => [...current.slice(-5), message]);
  };

  const tour = useTour({
    steps: [
      {
        id: "step-1",
        type: "tooltip",
        arrow: true,
        title: "Event stream",
        description: "Every step change writes to the log.",
        target: () => document.querySelector("#tour-events-1"),
        actions: [{ label: "Next", action: "next" }],
      },
      {
        id: "step-2",
        type: "tooltip",
        arrow: true,
        title: "Lifecycle hooks",
        description: "Status changes are useful for analytics and onboarding.",
        target: () => document.querySelector("#tour-events-2"),
        actions: [
          { label: "Back", action: "prev" },
          { label: "Next", action: "next" },
        ],
      },
      {
        id: "step-3",
        type: "tooltip",
        arrow: true,
        title: "Finish event",
        description: "Dismiss the tour to emit the closed status.",
        target: () => document.querySelector("#tour-events-3"),
        actions: [
          { label: "Back", action: "prev" },
          { label: "Finish", action: "dismiss" },
        ],
      },
    ],
    onStepChange: (details) => {
      pushLog(`step -> ${details.stepId}`);
    },
    onStatusChange: (details) => {
      pushLog(`status -> ${details.status}`);
    },
  });

  return (
    <div className={tourStageClass}>
      <TourLaunchButton
        label="Start tracked tour"
        onClick={() => {
          setLogs([]);
          tour.start();
        }}
      />
      <div className="grid gap-2 sm:grid-cols-3">
        <div className={tourTargetClass} id="tour-events-1">
          Trigger 1
        </div>
        <div className={tourTargetClass} id="tour-events-2">
          Trigger 2
        </div>
        <div className={tourTargetClass} id="tour-events-3">
          Trigger 3
        </div>
      </div>
      <div className="rounded-xl border border-border/70 bg-muted/15 p-3 text-xs">
        <p className="mb-2 font-medium text-foreground">Event log</p>
        <div className="space-y-1 font-mono text-muted-foreground">
          {logs.length ? (
            logs.map((log, index) => <p key={`${log}-${index}`}>{log}</p>)
          ) : (
            <p>Start the tour to see lifecycle events.</p>
          )}
        </div>
      </div>
      <TourFrame tour={tour} />
    </div>
  );
};

const TourWaitForClickDemo = () => {
  const [lastAction, setLastAction] = useState("none");

  const tour = useTour({
    steps: [
      {
        id: "intro",
        type: "dialog",
        title: "Interactive tour",
        description:
          "These steps wait for a real click before advancing automatically.",
        actions: [{ label: "Begin", action: "next" }],
      },
      {
        id: "create",
        type: "tooltip",
        arrow: true,
        title: "Click Create",
        description: "Press the Create button to continue.",
        target: () => document.querySelector("#tour-click-create"),
        effect: ({ next, target, show }) => {
          show();
          const [promise, cancel] = waitForEvent(target, "click");
          promise.then(() => next());
          return cancel;
        },
      },
      {
        id: "publish",
        type: "tooltip",
        arrow: true,
        title: "Click Publish",
        description: "One more required action.",
        target: () => document.querySelector("#tour-click-publish"),
        effect: ({ next, target, show }) => {
          show();
          const [promise, cancel] = waitForEvent(target, "click");
          promise.then(() => next());
          return cancel;
        },
      },
      {
        id: "archive",
        type: "tooltip",
        arrow: true,
        title: "Click Archive",
        description: "The last interaction completes the guided path.",
        target: () => document.querySelector("#tour-click-archive"),
        effect: ({ next, target, show }) => {
          show();
          const [promise, cancel] = waitForEvent(target, "click");
          promise.then(() => next());
          return cancel;
        },
      },
      {
        id: "done",
        type: "dialog",
        title: "Workflow complete",
        description: "You triggered every required action.",
        actions: [{ label: "Close", action: "dismiss" }],
      },
    ],
  });

  return (
    <div className={tourStageClass}>
      <TourLaunchButton
        label="Start interactive tour"
        onClick={() => tour.start()}
      />
      <div className="flex flex-wrap gap-2">
        <Button
          id="tour-click-create"
          onClick={() => setLastAction("create")}
          type="button"
          variant="outline"
        >
          Create
        </Button>
        <Button
          id="tour-click-publish"
          onClick={() => setLastAction("publish")}
          type="button"
          variant="outline"
        >
          Publish
        </Button>
        <Button
          id="tour-click-archive"
          onClick={() => setLastAction("archive")}
          type="button"
          variant="outline"
        >
          Archive
        </Button>
      </div>
      <p className="text-muted-foreground text-xs">
        Last action:{" "}
        <span className="font-medium text-foreground">{lastAction}</span>
      </p>
      <TourFrame tour={tour} />
    </div>
  );
};

const TourWaitForInputDemo = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [terms, setTerms] = useState(false);

  const resetForm = () => {
    setName("");
    setEmail("");
    setTerms(false);
  };

  const tour = useTour({
    steps: [
      {
        id: "intro",
        type: "dialog",
        title: "Form tutorial",
        description:
          "Each step waits until the current field contains valid input.",
        actions: [{ label: "Start", action: "next" }],
      },
      {
        id: "name",
        type: "tooltip",
        arrow: true,
        title: "Enter your name",
        description: "Type at least two characters to continue.",
        target: () => document.querySelector("#tour-form-name"),
        effect: ({ next, show }) => {
          show();
          const input =
            document.querySelector<HTMLInputElement>("#tour-form-name");
          if (!input) return;
          const [promise, cancel] = waitForEvent<HTMLInputElement>(
            () => input,
            "input",
            {
              predicate: (el) => el.value.trim().length >= 2,
            },
          );
          promise.then(() => next());
          return cancel;
        },
      },
      {
        id: "email",
        type: "tooltip",
        arrow: true,
        title: "Enter your email",
        description: "A valid email address unlocks the next step.",
        target: () => document.querySelector("#tour-form-email"),
        effect: ({ next, show }) => {
          show();
          const input =
            document.querySelector<HTMLInputElement>("#tour-form-email");
          if (!input) return;
          const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
          const [promise, cancel] = waitForEvent<HTMLInputElement>(
            () => input,
            "input",
            {
              predicate: (el) => emailRegex.test(el.value),
            },
          );
          promise.then(() => next());
          return cancel;
        },
      },
      {
        id: "terms",
        type: "tooltip",
        arrow: true,
        title: "Accept the terms",
        description: "Check the box to complete the tutorial.",
        target: () => document.querySelector("#tour-form-terms"),
        effect: ({ next, show }) => {
          show();
          const input =
            document.querySelector<HTMLInputElement>("#tour-form-terms");
          if (!input) return;
          const [promise, cancel] = waitForEvent<HTMLInputElement>(
            () => input,
            "change",
            {
              predicate: (el) => el.checked,
            },
          );
          promise.then(() => next());
          return cancel;
        },
      },
      {
        id: "done",
        type: "dialog",
        title: "Form complete",
        description: "The tour advanced only after valid input was present.",
        actions: [{ label: "Done", action: "dismiss" }],
      },
    ],
  });

  return (
    <div className={tourStageClass}>
      <div className="flex flex-wrap gap-2">
        <TourLaunchButton
          label="Start form tour"
          onClick={() => {
            resetForm();
            tour.start();
          }}
        />
        <Button onClick={resetForm} type="button" variant="ghost">
          <RotateCcwIcon className="size-4" />
          Reset
        </Button>
      </div>
      <div className="grid gap-3 rounded-xl border border-border/70 bg-muted/15 p-4">
        <Field>
          <FieldLabel htmlFor="tour-form-name">Name</FieldLabel>
          <Input
            id="tour-form-name"
            onChange={(event) => setName(event.target.value)}
            placeholder="Ada Lovelace"
            value={name}
          />
        </Field>
        <Field>
          <FieldLabel htmlFor="tour-form-email">Email</FieldLabel>
          <Input
            id="tour-form-email"
            onChange={(event) => setEmail(event.target.value)}
            placeholder="ada@example.com"
            type="email"
            value={email}
          />
        </Field>
        <label className="inline-flex items-center gap-2 text-sm text-foreground">
          <input
            checked={terms}
            className="size-4 accent-primary"
            id="tour-form-terms"
            onChange={(event) => setTerms(event.target.checked)}
            type="checkbox"
          />
          I accept the terms and conditions
        </label>
      </div>
      <TourFrame tour={tour} />
    </div>
  );
};

const TourWaitForElementDemo = () => {
  const baseItems = ["Inbox", "Drafts"];
  const [items, setItems] = useState(baseItems);

  const resetItems = () => setItems(baseItems);

  const tour = useTour({
    steps: [
      {
        id: "intro",
        type: "dialog",
        title: "Dynamic content",
        description:
          "This example waits until a brand-new element is rendered on the page.",
        actions: [{ label: "Start", action: "next" }],
      },
      {
        id: "add-item",
        type: "tooltip",
        arrow: true,
        title: "Add a new item",
        description: "Click the button to create a fresh list row.",
        target: () => document.querySelector("#tour-element-add"),
        effect: ({ next, target, show }) => {
          show();
          const [promise, cancel] = waitForEvent(target, "click");
          promise.then(() => next());
          return cancel;
        },
      },
      {
        id: "new-item",
        type: "tooltip",
        arrow: true,
        title: "Found it",
        description:
          "The tour waited until the new row existed before opening.",
        target: () => document.querySelector("[data-tour-item='new']"),
        effect: ({ show }) => {
          const [promise, cancel] = waitForElement(
            () => document.querySelector("[data-tour-item='new']"),
            { timeout: 5000 },
          );
          promise.then(() => show());
          return () => cancel();
        },
        actions: [{ label: "Done", action: "dismiss" }],
      },
    ],
  });

  return (
    <div className={tourStageClass}>
      <div className="flex flex-wrap gap-2">
        <TourLaunchButton
          onClick={() => {
            resetItems();
            tour.start();
          }}
        />
        <Button
          id="tour-element-add"
          onClick={() =>
            setItems((current) => [...current, `Item ${current.length + 1}`])
          }
          type="button"
          variant="outline"
        >
          Add item
        </Button>
      </div>
      <div className="space-y-2">
        {items.map((item, index) => (
          <div
            className="rounded-xl border border-border/70 bg-muted/20 px-4 py-3 text-sm text-foreground"
            data-tour-item={
              index === items.length - 1 && items.length > 2 ? "new" : undefined
            }
            key={item}
          >
            {item}
          </div>
        ))}
      </div>
      <TourFrame tour={tour} />
    </div>
  );
};

const TourAsyncDemo = () => {
  const tour = useTour({
    steps: [
      {
        id: "intro",
        type: "dialog",
        title: "Async loading",
        description:
          "This step waits for async data, then updates the copy before showing.",
        actions: [{ label: "Continue", action: "next" }],
      },
      {
        id: "profile",
        type: "tooltip",
        arrow: true,
        title: "Loading profile...",
        description: "Pulling usage metrics from the workspace service.",
        target: () => document.querySelector("#tour-async-card"),
        actions: [
          { label: "Back", action: "prev" },
          { label: "Finish", action: "dismiss" },
        ],
        effect: ({ show, update }) => {
          const timeout = window.setTimeout(() => {
            update({
              title: "Workspace owner",
              description:
                "Ada shipped 12 docs, 4 demos, and 3 shared templates this week.",
            });
            show();
          }, 900);

          return () => window.clearTimeout(timeout);
        },
      },
    ],
  });

  return (
    <div className={tourStageClass}>
      <TourLaunchButton label="Start async tour" onClick={() => tour.start()} />
      <div className={cn(tourTargetClass, "max-w-sm")} id="tour-async-card">
        Profile summary card
      </div>
      <TourFrame tour={tour} />
    </div>
  );
};

const TooltipBasicDemo = () => (
  <Tooltip>
    <TooltipTrigger>
      <Button variant="outline">Hover me</Button>
    </TooltipTrigger>
    <TooltipPopup>I am a tooltip.</TooltipPopup>
  </Tooltip>
);

const TooltipArrowDemo = () => (
  <Tooltip>
    <TooltipTrigger>
      <Button variant="outline">Hover me</Button>
    </TooltipTrigger>
    <TooltipPopup showArrow>Tooltip with arrow</TooltipPopup>
  </Tooltip>
);

const TooltipContextDemo = () => (
  <Tooltip>
    <TooltipTrigger>
      <Button variant="outline">Hover me</Button>
      Hover me
    </TooltipTrigger>
    <TooltipPopup>
      <TooltipContext>
        {(api) => `Tooltip open: ${String(api.open)}`}
      </TooltipContext>
    </TooltipPopup>
  </Tooltip>
);

const TooltipControlledDemo = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="flex flex-wrap items-center gap-2">
      <Button
        onClick={() => setOpen((prev) => !prev)}
        type="button"
        variant="outline"
      >
        Toggle
      </Button>
      <Tooltip open={open} onOpenChange={(details) => setOpen(details.open)}>
        <TooltipTrigger>
          <Button variant="outline">Hover me</Button>
        </TooltipTrigger>
        <TooltipPopup showArrow>Controlled tooltip</TooltipPopup>
      </Tooltip>
    </div>
  );
};

const TooltipDelayDemo = () => (
  <Tooltip closeDelay={0} openDelay={0}>
    <TooltipTrigger>
      <Button variant="outline">Instant tooltip</Button>
    </TooltipTrigger>
    <TooltipPopup>No open/close delay</TooltipPopup>
  </Tooltip>
);

const TooltipPositioningDemo = () => (
  <Tooltip
    positioning={{
      offset: { crossAxis: 12, mainAxis: 12 },
      placement: "left-start",
    }}
  >
    <TooltipTrigger>
      <Button variant="outline">Left start</Button>
    </TooltipTrigger>
    <TooltipPopup showArrow>Custom offset + placement</TooltipPopup>
  </Tooltip>
);

const TooltipRootProviderDemo = () => {
  const tooltip = useTooltip();

  return (
    <div className="flex flex-col items-start gap-2">
      <output className="text-muted-foreground text-xs">
        Open:{" "}
        <span className="font-medium text-foreground">
          {String(tooltip.open)}
        </span>
      </output>
      <TooltipRootProvider value={tooltip}>
        <TooltipTrigger>
          <Button variant="outline">Hover me</Button>
        </TooltipTrigger>
        <TooltipPopup>RootProvider store</TooltipPopup>
      </TooltipRootProvider>
    </div>
  );
};

const TooltipWithinFixedDemo = () => (
  <div className="w-full rounded-lg border border-border/70 bg-muted/15 p-3">
    <div className="fixed right-4 bottom-4 z-40 rounded-lg bg-primary/15 p-4 shadow-md">
      <Tooltip positioning={{ strategy: "fixed" }}>
        <TooltipTrigger>
          <Button size="sm" variant="outline">
            Fixed trigger
          </Button>
        </TooltipTrigger>
        <TooltipPopup showArrow>strategy=fixed</TooltipPopup>
      </Tooltip>
    </div>
    <p className="text-muted-foreground text-xs">
      Hover the fixed trigger in the bottom-right viewport corner.
    </p>
  </div>
);

// const TooltipMultipleTriggersDemo = () => {
//   const [activeTool, setActiveTool] = useState<
//     (typeof TOOLTIP_TOOLS)[number] | null
//   >(null);

//   return (
//     <Tooltip
//       onTriggerValueChange={(details) => {
//         setActiveTool(
//           TOOLTIP_TOOLS.find((tool) => tool.id === details.value) ?? null,
//         );
//       }}
//     >
//       <ButtonGroup
//         className="rounded-lg border border-border/70 p-1"
//         // attached={false}
//       >
//         {TOOLTIP_TOOLS.map((tool) => {
//           const Icon = tool.icon;
//           return (
//             <TooltipTrigger
//               key={tool.id}
//               className="inline-flex size-9 items-center justify-center rounded-md text-muted-foreground transition-colors hover:bg-accent hover:text-foreground"
//               value={tool.id}
//             >
//               <Icon className="size-4" />
//             </TooltipTrigger>
//           );
//         })}
//       </ButtonGroup>
//       <TooltipPopup showArrow>
//         {activeTool ? (
//           <span className="inline-flex items-center gap-2">
//             <span>{activeTool.label}</span>
//             <span className="text-[0.65rem] text-muted-foreground">
//               {activeTool.shortcut}
//             </span>
//           </span>
//         ) : (
//           "Select a tool"
//         )}
//       </TooltipPopup>
//     </Tooltip>
//   );
// };

// const TooltipGroupedDemo = () => (
// <TooltipProvider>
// <div className="flex items-center gap-2">
//   {TOOLTIP_TOOLS.map((tool) => {
//     const Icon = tool.icon;

//     return (
//       <Tooltip key={tool.id}>
//         <TooltipTrigger
//         >
//           <Button size="icon-sm" variant="outline">
//           <Icon className="size-4" />
//           </Button>
//         </TooltipTrigger>
//         <TooltipPopup showArrow>{tool.label}</TooltipPopup>
//       </Tooltip>
//     );
//   })}
// </div>
// </TooltipProvider>
// );

// const TooltipAnimatedSharedDemo = () => {
//   const [activeTool, setActiveTool] = useState<
//     (typeof TOOLTIP_TOOLS)[number] | null
//   >(TOOLTIP_TOOLS[0] ?? null);

//   return (
//     // <TooltipProvider value={activeTool?.id}>
//       <Tooltip
//         // onTriggerValueChange={(details) => {
//         //   setActiveTool(
//         //     TOOLTIP_TOOLS.find((tool) => tool.id === details.value) ?? null,
//         //   );
//         // }}

//       >
//         <ButtonGroup
//           className="rounded-lg border border-border/70 p-1"
//         >
//           {TOOLTIP_TOOLS.map((tool) => {
//             const Icon = tool.icon;
//             return (
//               <TooltipTrigger
//                 key={tool.id}
//                 className="inline-flex size-9 items-center justify-center rounded-md text-muted-foreground transition-colors hover:bg-accent hover:text-foreground"
//                 value={tool.id}
//               >
//                 <Icon aria-hidden className="size-4" />
//               </TooltipTrigger>
//             );
//           })}
//         </ButtonGroup>
//         <TooltipPopup showArrow className="transition-[width] duration-150">
//           {/* {activeTool ? (
//             <span className="inline-flex items-center gap-2">
//               <span>{activeTool.label}</span>
//               <span className="text-[0.65rem] text-muted-foreground">
//                 {activeTool.shortcut}
//               </span>
//             </span>
//           ) : null} */}
//         </TooltipPopup>
//       </Tooltip>
//     // </TooltipProvider>
//   );
// };

type ShowcaseTreeNode = {
  id: string;
  name: string;
  href?: string;
  children?: ShowcaseTreeNode[];
};

const TREE_ROOT: ShowcaseTreeNode = {
  id: "ROOT",
  name: "",
  children: [
    {
      id: "node_modules",
      name: "node_modules",
      children: [
        { id: "node_modules/zag-js", name: "zag-js" },
        { id: "node_modules/panda", name: "panda" },
        {
          id: "node_modules/@types",
          name: "@types",
          children: [
            { id: "node_modules/@types/react", name: "react" },
            { id: "node_modules/@types/react-dom", name: "react-dom" },
          ],
        },
      ],
    },
    {
      id: "src",
      name: "src",
      children: [
        { id: "src/app.tsx", name: "app.tsx", href: "/docs/introduction" },
        { id: "src/index.ts", name: "index.ts", href: "/docs/installation" },
      ],
    },
    { id: "package.json", name: "package.json" },
    {
      id: "README.md",
      name: "README.md",
      href: "https://ark-ui.com/docs/components/tree-view",
    },
  ],
};

const createShowcaseTreeCollection = () =>
  createTreeCollection<ShowcaseTreeNode>({
    nodeToValue: (node) => node.id,
    nodeToString: (node) => node.name,
    rootNode: structuredClone(TREE_ROOT),
  });

const TreeNodeCheckboxControl = () => (
  <TreeViewNodeCheckbox
    className={cn(
      "cursor-pointer peer relative flex size-4 shrink-0 items-center justify-center rounded border transition-colors outline-none group-has-disabled/field:opacity-50 after:absolute after:-inset-x-3 after:-inset-y-2 focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 disabled:cursor-not-allowed disabled:opacity-50 data-invalid:border-destructive data-invalid:ring-3 data-invalid:ring-destructive/20 data-invalid:data-[state='checked']:border-primary dark:bg-input/30 dark:data-invalid:border-destructive/50 dark:data-invalid:ring-destructive/40 data-[state='checked']:border-primary data-[state='checked']:bg-primary data-[state='checked']:text-primary-foreground dark:data-[state='checked']:bg-primary",
    )}
  >
    <TreeViewNodeCheckboxIndicator
      className="grid place-content-center text-current transition-none [&>svg]:size-3.5"
      indeterminate={<MinusIcon />}
    >
      <CheckIcon />
    </TreeViewNodeCheckboxIndicator>
  </TreeViewNodeCheckbox>
);

const TreeNodeActions = ({
  node,
  indexPath,
  onAdd,
  onRemove,
}: {
  node: ShowcaseTreeNode;
  indexPath: number[];
  onAdd?: (node: ShowcaseTreeNode, indexPath: number[]) => void;
  onRemove?: (indexPath: number[]) => void;
}) => {
  if (!onAdd && !onRemove) return null;
  return (
    <div className="ms-auto inline-flex items-center gap-1">
      {onRemove ? (
        <Button
          className="h-6 px-2 text-xs"
          onClick={(event) => {
            event.stopPropagation();
            onRemove(indexPath);
          }}
          variant="outline"
        >
          Del
        </Button>
      ) : null}
      {onAdd && node.children ? (
        <Button
          className="h-6 px-2 text-xs"
          onClick={(event) => {
            event.stopPropagation();
            onAdd(node, indexPath);
          }}
          variant="outline"
        >
          Add
        </Button>
      ) : null}
    </div>
  );
};

const TreeNodeRenderer = ({
  node,
  indexPath,
  checkbox,
  links,
  rename,
  onAdd,
  onRemove,
}: {
  node: ShowcaseTreeNode;
  indexPath: number[];
  checkbox?: boolean;
  links?: boolean;
  rename?: boolean;
  onAdd?: (node: ShowcaseTreeNode, indexPath: number[]) => void;
  onRemove?: (indexPath: number[]) => void;
}) => (
  <TreeViewNodeProvider indexPath={indexPath} node={node}>
    <TreeViewNodeContext>
      {(nodeState) =>
        node.children ? (
          <TreeViewBranch>
            <TreeViewBranchControl
              data-depth={nodeState.depth}
              style={{
                paddingInlineStart: "calc((var(--depth) - 1) * 22px)",
              }}
            >
              <TreeViewBranchIndicator className="group/indicator">
                <ChevronRight className="size-4 transition-transform group-data-[state=open]/indicator:rotate-90" />
              </TreeViewBranchIndicator>
              {checkbox ? <TreeNodeCheckboxControl /> : null}
              {rename && nodeState.renaming ? (
                <TreeViewNodeRenameInput />
              ) : (
                <TreeViewBranchText>
                  <LayersIcon className="size-3.5 text-muted-foreground" />
                  {node.name}
                </TreeViewBranchText>
              )}
              <TreeNodeActions
                indexPath={indexPath}
                node={node}
                onAdd={onAdd}
                onRemove={onRemove}
              />
            </TreeViewBranchControl>
            <TreeViewBranchContent>
              <TreeViewBranchIndentGuide />
              {node.children.map((child, childIndex) => (
                <TreeNodeRenderer
                  checkbox={checkbox}
                  indexPath={[...indexPath, childIndex]}
                  key={child.id}
                  links={links}
                  node={child}
                  onAdd={onAdd}
                  onRemove={onRemove}
                  rename={rename}
                />
              ))}
            </TreeViewBranchContent>
          </TreeViewBranch>
        ) : (
          <TreeViewItem
            asChild={Boolean(links && node.href)}
            data-depth={nodeState.depth}
            style={{
              paddingInlineStart: "calc(((var(--depth) - 1) * 22px) + 22px)",
            }}
          >
            {links && node.href ? (
              <a
                className="flex w-full items-center gap-2"
                href={node.href}
                rel={node.href.startsWith("http") ? "noreferrer" : undefined}
                target={node.href.startsWith("http") ? "_blank" : undefined}
              >
                {checkbox ? <TreeNodeCheckboxControl /> : null}
                {rename && nodeState.renaming ? (
                  <TreeViewNodeRenameInput />
                ) : (
                  <TreeViewItemText>
                    <FileIcon className="size-3.5 text-muted-foreground" />
                    {node.name}
                  </TreeViewItemText>
                )}
                {node.href.startsWith("http") ? (
                  <GlobeIcon className="ms-auto size-3 text-muted-foreground" />
                ) : null}
                <TreeNodeActions
                  indexPath={indexPath}
                  node={node}
                  onAdd={onAdd}
                  onRemove={onRemove}
                />
              </a>
            ) : (
              <>
                {checkbox ? <TreeNodeCheckboxControl /> : null}
                {rename && nodeState.renaming ? (
                  <TreeViewNodeRenameInput />
                ) : (
                  <TreeViewItemText>
                    <FileIcon className="size-3.5 text-muted-foreground" />
                    {node.name}
                  </TreeViewItemText>
                )}
                <TreeNodeActions
                  indexPath={indexPath}
                  node={node}
                  onAdd={onAdd}
                  onRemove={onRemove}
                />
              </>
            )}
          </TreeViewItem>
        )
      }
    </TreeViewNodeContext>
  </TreeViewNodeProvider>
);

const TreeBasicDemo = () => {
  const collection = createShowcaseTreeCollection();
  return (
    <TreeView collection={collection}>
      <TreeViewLabel>Tree</TreeViewLabel>
      <TreeViewTree>
        {collection.rootNode.children?.map((node, index) => (
          <TreeNodeRenderer indexPath={[index]} key={node.id} node={node} />
        ))}
      </TreeViewTree>
    </TreeView>
  );
};

const TreeCheckboxDemo = () => {
  const collection = createShowcaseTreeCollection();
  return (
    <TreeView collection={collection} defaultCheckedValue={[]}>
      <TreeViewLabel>Checkbox Tree</TreeViewLabel>
      <TreeViewTree>
        {collection.rootNode.children?.map((node, index) => (
          <TreeNodeRenderer
            checkbox
            indexPath={[index]}
            key={node.id}
            node={node}
          />
        ))}
      </TreeViewTree>
    </TreeView>
  );
};

const TreeMutationDemo = () => {
  const [collection, setCollection] = useState(createShowcaseTreeCollection);

  const handleRemove = (indexPath: number[]) => {
    setCollection((previous) => previous.remove([indexPath]));
  };

  const handleAdd = (node: ShowcaseTreeNode, indexPath: number[]) => {
    if (!node.children) return;
    const nextNode: ShowcaseTreeNode = {
      id: `${node.id}/new-${Date.now()}`,
      name: `untitled-${node.children.length + 1}.tsx`,
    };

    setCollection((previous) => {
      const currentNode = previous.at(indexPath);
      if (!currentNode || !currentNode.children) return previous;
      return previous.replace(indexPath, {
        ...currentNode,
        children: [nextNode, ...currentNode.children],
      });
    });
  };

  return (
    <TreeView collection={collection}>
      <TreeViewLabel>Mutation Tree</TreeViewLabel>
      <TreeViewTree>
        {collection.rootNode.children?.map((node, index) => (
          <TreeNodeRenderer
            indexPath={[index]}
            key={node.id}
            node={node}
            onAdd={handleAdd}
            onRemove={handleRemove}
          />
        ))}
      </TreeViewTree>
    </TreeView>
  );
};

const TreeRenameDemo = () => {
  const [collection, setCollection] = useState(createShowcaseTreeCollection);

  return (
    <TreeView
      canRename={() => true}
      collection={collection}
      onRenameComplete={(details) => {
        setCollection((previous) => {
          const node = previous.at(details.indexPath);
          if (!node) return previous;
          return previous.replace(details.indexPath, {
            ...node,
            name: details.label,
          });
        });
      }}
    >
      <TreeViewLabel>Rename Node (Press F2)</TreeViewLabel>
      <TreeViewTree>
        {collection.rootNode.children?.map((node, index) => (
          <TreeNodeRenderer
            indexPath={[index]}
            key={node.id}
            node={node}
            rename
          />
        ))}
      </TreeViewTree>
    </TreeView>
  );
};

const TreeFilteringDemo = () => {
  const { contains } = useFilter({ sensitivity: "base" });
  const [collection, setCollection] = useState(createShowcaseTreeCollection);

  return (
    <div className="flex flex-col gap-2">
      <Input
        className="h-8"
        onChange={(event) => {
          const value = event.target.value;
          const initialCollection = createShowcaseTreeCollection();
          const nextCollection =
            value.length > 0
              ? initialCollection.filter((node) => contains(node.name, value))
              : initialCollection;
          setCollection(nextCollection);
        }}
        placeholder="Filter nodes..."
      />
      <TreeView collection={collection}>
        <TreeViewTree>
          {collection.rootNode.children?.map((node, index) => (
            <TreeNodeRenderer indexPath={[index]} key={node.id} node={node} />
          ))}
        </TreeViewTree>
      </TreeView>
    </div>
  );
};

const TreeLinksDemo = () => {
  const collection = createShowcaseTreeCollection();
  return (
    <TreeView collection={collection}>
      <TreeViewLabel>Link Tree</TreeViewLabel>
      <TreeViewTree>
        {collection.rootNode.children?.map((node, index) => (
          <TreeNodeRenderer
            indexPath={[index]}
            key={node.id}
            links
            node={node}
          />
        ))}
      </TreeViewTree>
    </TreeView>
  );
};

const TREE_ROW_HEIGHT = 34;
const TREE_VIEWPORT_HEIGHT = 270;

const TreeVirtualizedDemo = () => {
  const tree = useTreeView({
    collection: createShowcaseTreeCollection(),
    scrollToIndexFn: ({ index }) => {
      if (!scrollAreaRef.current) return;
      scrollAreaRef.current.scrollTop = index * TREE_ROW_HEIGHT;
    },
  });
  const visibleNodes = tree.getVisibleNodes();
  const scrollAreaRef = useRef<HTMLDivElement | null>(null);
  const [scrollTop, setScrollTop] = useState(0);

  const startIndex = Math.max(0, Math.floor(scrollTop / TREE_ROW_HEIGHT));
  const endIndex = Math.min(
    visibleNodes.length,
    startIndex + Math.ceil(TREE_VIEWPORT_HEIGHT / TREE_ROW_HEIGHT) + 8,
  );
  const virtualRows = visibleNodes.slice(startIndex, endIndex);
  const paddingTop = startIndex * TREE_ROW_HEIGHT;
  const paddingBottom = Math.max(
    0,
    (visibleNodes.length - endIndex) * TREE_ROW_HEIGHT,
  );

  return (
    <TreeViewRootProvider value={tree}>
      <div className="mb-2 flex items-center gap-2">
        <Button
          className="h-8"
          onClick={() => tree.collapse()}
          variant="outline"
        >
          Collapse all
        </Button>
        <Button className="h-8" onClick={() => tree.expand()} variant="outline">
          Expand all
        </Button>
      </div>
      <TreeViewTree
        className="max-w-none overflow-auto rounded-md border border-border/70"
        onScroll={(event) => {
          setScrollTop(event.currentTarget.scrollTop);
        }}
        ref={scrollAreaRef}
        style={{ height: TREE_VIEWPORT_HEIGHT }}
      >
        <div style={{ paddingBottom, paddingTop }}>
          {virtualRows.map(({ node, indexPath }) => {
            const nodeState = tree.getNodeState({ indexPath, node });

            return (
              <TreeViewNodeProvider
                indexPath={indexPath}
                key={node.id}
                node={node}
              >
                {nodeState.isBranch ? (
                  <TreeViewBranchControl
                    style={{ paddingLeft: nodeState.depth * 18 + 8 }}
                  >
                    <TreeViewBranchIndicator>
                      <ChevronDownIcon className="size-3" />
                    </TreeViewBranchIndicator>
                    <TreeViewBranchText>
                      <LayersIcon className="size-3.5 text-muted-foreground" />
                      {node.name}
                    </TreeViewBranchText>
                  </TreeViewBranchControl>
                ) : (
                  <TreeViewItem
                    style={{ paddingLeft: nodeState.depth * 18 + 8 }}
                  >
                    <TreeViewItemText>
                      <FileIcon className="size-3.5 text-muted-foreground" />
                      {node.name}
                    </TreeViewItemText>
                  </TreeViewItem>
                )}
              </TreeViewNodeProvider>
            );
          })}
        </div>
      </TreeViewTree>
      <p className="mt-2 text-muted-foreground text-xs">
        Showing {visibleNodes.length} visible nodes with virtual windowing.
      </p>
    </TreeViewRootProvider>
  );
};

const ArkUiShowcase1 = () => {
  return (
    <div className="mx-auto flex min-h-screen max-w-6xl flex-col gap-10 p-6 md:p-10">
      <header className="flex flex-col gap-2">
        <h1 className="font-semibold text-2xl text-foreground tracking-tight">
          Ark UI showcase
        </h1>
        <p className="max-w-2xl text-muted-foreground text-sm">
          Tree view, tour, password input, pin input, progress (circular and
          linear), popover, rating group, scroll area, select, slider, tooltip,
          QR code, radio group, segment group, and signature pad examples for
          local development.
        </p>
      </header>

      <section className="flex flex-col gap-4">
        <h2 className="font-medium text-foreground text-lg">Tree View</h2>
        <p className="max-w-2xl text-muted-foreground text-sm">
          Built from{" "}
          <a
            className="text-primary underline-offset-4 hover:underline"
            href="https://ark-ui.com/docs/components/tree-view#checkbox-tree"
            rel="noreferrer"
            target="_blank"
          >
            Ark UI Tree View
          </a>{" "}
          with coss-style wrapper composition. Includes the key docs examples:
          checkbox tree, mutation, rename node, filtering, links, and
          virtualized rendering.
        </p>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          <DemoCard
            title="Basic"
            description="Tree anatomy and branch nesting."
          >
            <TreeBasicDemo />
          </DemoCard>
          <DemoCard
            title="Checkbox tree"
            description="Parent/child checked state with node checkboxes."
          >
            <TreeCheckboxDemo />
          </DemoCard>
          <DemoCard
            title="Mutation"
            description="Add and remove nodes with collection replace/remove."
          >
            <TreeMutationDemo />
          </DemoCard>
          <DemoCard
            title="Rename node"
            description="F2 inline rename via canRename + onRenameComplete."
          >
            <TreeRenameDemo />
          </DemoCard>
          <DemoCard
            title="Filtering"
            description="useFilter + collection.filter for search."
          >
            <TreeFilteringDemo />
          </DemoCard>
          <DemoCard
            title="Links"
            description="Render leaf nodes as anchors with asChild."
          >
            <TreeLinksDemo />
          </DemoCard>
          <DemoCard
            className="sm:col-span-2 lg:col-span-3"
            title="Virtualized"
            description="RootProvider + useTreeView with visible-node windowing."
          >
            <TreeVirtualizedDemo />
          </DemoCard>
        </div>
      </section>

      <section className="flex flex-col gap-4">
        <h2 className="font-medium text-foreground text-lg">Tour</h2>
        <p className="max-w-2xl text-muted-foreground text-sm">
          Built from{" "}
          <a
            className="text-primary underline-offset-4 hover:underline"
            href="https://ark-ui.com/docs/components/tour"
            rel="noreferrer"
            target="_blank"
          >
            Ark UI Tour
          </a>{" "}
          and styled with the same coss/ui overlay vocabulary used by the local{" "}
          <code className="text-foreground">Popover</code> and{" "}
          <code className="text-foreground">Dialog</code> wrappers. Includes the
          full MCP example set: basic, mixed types, progress, skip, keyboard
          navigation, events, wait for click/input/element, and async updates.
        </p>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          <DemoCard
            title="Basic"
            description="Dialog intro with anchored tooltip steps."
          >
            <TourBasicDemo />
          </DemoCard>
          <DemoCard
            title="Mixed step types"
            description="Dialog, tooltip, and floating steps together."
          >
            <TourMixedTypesDemo />
          </DemoCard>
          <DemoCard
            title="Progress"
            description="Bottom progress bar using tour.getProgressPercent()."
          >
            <TourProgressBarDemo />
          </DemoCard>
          <DemoCard
            title="Skip"
            description="Dismiss action available before finishing."
          >
            <TourSkipDemo />
          </DemoCard>
          <DemoCard
            title="Keyboard navigation"
            description="Arrow keys and Escape support."
          >
            <TourKeyboardNavigationDemo />
          </DemoCard>
          <DemoCard
            className="sm:col-span-2"
            title="Events"
            description="onStepChange and onStatusChange log output."
          >
            <TourEventsDemo />
          </DemoCard>
          <DemoCard
            title="Wait for click"
            description="Each step advances only after a required click."
          >
            <TourWaitForClickDemo />
          </DemoCard>
          <DemoCard
            className="sm:col-span-2"
            title="Wait for input"
            description="Form guidance that waits for valid values."
          >
            <TourWaitForInputDemo />
          </DemoCard>
          <DemoCard
            title="Wait for element"
            description="Delays a step until new DOM appears."
          >
            <TourWaitForElementDemo />
          </DemoCard>
          <DemoCard
            title="Async"
            description="Loads async content, updates, then shows the step."
          >
            <TourAsyncDemo />
          </DemoCard>
        </div>
      </section>

      <section className="flex flex-col gap-4">
        <h2 className="font-medium text-foreground text-lg">Tooltip</h2>
        <p className="max-w-2xl text-muted-foreground text-sm">
          Built from{" "}
          <a
            className="text-primary underline-offset-4 hover:underline"
            href="https://ark-ui.com/docs/components/tooltip#within-fixed-containers"
            rel="noreferrer"
            target="_blank"
          >
            Ark UI Tooltip
          </a>{" "}
          and styled with the coss/ui wrapper model from{" "}
          <a
            className="text-primary underline-offset-4 hover:underline"
            href="https://coss.com/ui/docs/components/tooltip#tooltipcreatehandle"
            rel="noreferrer"
            target="_blank"
          >
            coss Tooltip
          </a>
          : Root/Trigger/Popup with optional arrow, grouped provider behavior,
          and shared content patterns.
        </p>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          <DemoCard title="Basic" description="Ark basic trigger and popup.">
            <TooltipBasicDemo />
          </DemoCard>
          <DemoCard title="Arrow" description="Popup with Arrow and ArrowTip.">
            <TooltipArrowDemo />
          </DemoCard>
          <DemoCard title="Context" description="TooltipContext render prop.">
            <TooltipContextDemo />
          </DemoCard>
          <DemoCard title="Controlled" description="open + onOpenChange.">
            <TooltipControlledDemo />
          </DemoCard>
          <DemoCard
            title="Delay"
            description="openDelay and closeDelay set to 0."
          >
            <TooltipDelayDemo />
          </DemoCard>
          <DemoCard
            title="Positioning"
            description="left-start with custom offset."
          >
            <TooltipPositioningDemo />
          </DemoCard>
          <DemoCard
            title="Root provider"
            description="useTooltip + RootProvider."
          >
            <TooltipRootProviderDemo />
          </DemoCard>
          <DemoCard
            title="Within fixed container"
            description="positioning strategy fixed (Ark docs)."
          >
            <TooltipWithinFixedDemo />
          </DemoCard>
          {/* <DemoCard
            title="Multiple triggers"
            description="Single tooltip with trigger value switching."
          >
            <TooltipMultipleTriggersDemo />
          </DemoCard>
          <DemoCard
            title="Grouped tooltips"
            description="Provider grouped behavior."
          >
            <TooltipGroupedDemo />
          </DemoCard>
          <DemoCard
            title="Shared animated tooltip"
            description="coss-style shared popup across icon triggers."
            className="sm:col-span-2"
          >
            <TooltipAnimatedSharedDemo />
          </DemoCard> */}
        </div>
      </section>

      {/* <section className="flex flex-col gap-4">
        <h2 className="font-medium text-foreground text-lg">Steps</h2>
        <p className="max-w-2xl text-muted-foreground text-sm">
          Built on{" "}
          <a
            className="text-primary underline-offset-4 hover:underline"
            href="https://ark-ui.com/docs/components/steps"
            rel="noreferrer"
            target="_blank"
          >
            Ark UI Steps
          </a>{" "}
          and styled like{" "}
          <a
            className="text-primary underline-offset-4 hover:underline"
            href="https://www.diceui.com/docs/components/radix/stepper"
            rel="noreferrer"
            target="_blank"
          >
            Dice UI Stepper
          </a>
          . Includes basic, controlled, root provider, vertical, and a nested
          “step form” with linear validation.
        </p>
        <div className="grid gap-4 lg:grid-cols-2">
          <DemoCard title="Basic" description="Ark anatomy + Dice-style visuals.">
            <StepsBasicDemo />
          </DemoCard>
          <DemoCard title="Controlled" description="step + onStepChange.">
            <StepsControlledDemo />
          </DemoCard>
          <DemoCard title="Root provider" description="useSteps + RootProvider.">
            <StepsRootProviderDemo />
          </DemoCard>
          <DemoCard
            title="Vertical"
            description="orientation='vertical' with per-step actions."
          >
            <StepsVerticalDemo />
          </DemoCard>
          <DemoCard
            title="Nested form + validation"
            description="linear + isStepValid + onStepInvalid (blocks Next)."
            className="lg:col-span-2"
          >
            <StepsNestedValidationDemo />
          </DemoCard>
        </div>
      </section> */}

      {/* <section className="flex flex-col gap-4">
        <h2 className="font-medium text-foreground text-lg">Password input</h2>
        <p className="max-w-2xl text-muted-foreground text-sm">
          Aligned with{" "}
          <a
            className="text-primary underline-offset-4 hover:underline"
            href="https://ark-ui.com/docs/components/password-input"
            rel="noreferrer"
            target="_blank"
          >
            Ark UI Password Input
          </a>
          : anatomy Root → Label → Control → Input + VisibilityTrigger →
          Indicator, plus Field, strength, and validation patterns.
        </p>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          <DemoCard
            title="Default"
            description="Label, masked input, visibility toggle."
          >
            <PasswordInputDefaultDemo />
          </DemoCard>
          <DemoCard
            title="Autocomplete"
            description="new-password vs current-password on Root."
            className="sm:col-span-2"
          >
            <PasswordInputAutocompleteDemo />
          </DemoCard>
          <DemoCard
            title="Controlled visibility"
            description="visible + onVisibilityChange."
          >
            <PasswordInputControlledVisibilityDemo />
          </DemoCard>
          <DemoCard
            title="Root provider"
            description="usePasswordInput + PasswordInputRootProvider."
          >
            <PasswordInputRootProviderDemo />
          </DemoCard>
          <DemoCard
            title="Field"
            description="Field + FieldInput asChild on PasswordInput."
          >
            <PasswordInputWithFieldDemo />
          </DemoCard>
          <DemoCard
            title="Password managers"
            description="ignorePasswordManagers for API keys and secrets."
          >
            <PasswordInputIgnoreManagersDemo />
          </DemoCard>
          <DemoCard
            title="Strength meter"
            description="check-password-strength + progress bar."
            className="sm:col-span-2"
          >
            <PasswordInputStrengthMeterDemo />
          </DemoCard>
          <DemoCard
            title="Validation"
            description="invalid prop + inline error copy."
          >
            <PasswordInputValidationDemo />
          </DemoCard>
          <DemoCard
            title="Context"
            description="PasswordInputContext render prop."
          >
            <PasswordInputContextDemo />
          </DemoCard>
          <DemoCard
            title="Translations"
            description="translations.visibilityTrigger for assistive labels."
          >
            <PasswordInputTranslationsDemo />
          </DemoCard>
        </div>
      </section> */}

      {/* <section className="flex flex-col gap-4">
        <h2 className="font-medium text-foreground text-lg">Pin input</h2>
        <p className="max-w-2xl text-muted-foreground text-sm">
          Built on{" "}
          <a
            className="text-primary underline-offset-4 hover:underline"
            href="https://ark-ui.com/docs/components/pin-input"
            rel="noreferrer"
            target="_blank"
          >
            Ark UI Pin Input
          </a>
          . Use{" "}
          <code className="rounded bg-muted px-1 py-0.5 text-xs">
            variant=&quot;separated&quot;
          </code>{" "}
          for spaced cells or{" "}
          <code className="rounded bg-muted px-1 py-0.5 text-xs">
            variant=&quot;grouped&quot;
          </code>{" "}
          with{" "}
          <code className="rounded bg-muted px-1 py-0.5 text-xs">
            ButtonGroup
          </code>{" "}
          for a single fused row; compose multiple groups with{" "}
          <code className="rounded bg-muted px-1 py-0.5 text-xs">
            PinInputSeparator
          </code>{" "}
          (similar to{" "}
          <a
            className="text-primary underline-offset-4 hover:underline"
            href="https://coss.com/ui/docs/components/input-otp"
            rel="noreferrer"
            target="_blank"
          >
            coss Input OTP
          </a>
          {" / "}
          <a
            className="text-primary underline-offset-4 hover:underline"
            href="https://ui.shadcn.com/docs/components/base/input-otp"
            rel="noreferrer"
            target="_blank"
          >
            shadcn Input OTP
          </a>
          ).
        </p>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          <DemoCard
            title="Separated"
            description="Default variant: gap between cells (six digits)."
          >
            <PinInputSeparatedDemo />
          </DemoCard>
          <DemoCard
            title="Grouped"
            description="One fused row via ButtonGroup inside control."
          >
            <PinInputGroupedDemo />
          </DemoCard>
          <DemoCard
            title="Grouped 3 · 3"
            description="Two ButtonGroups with a dash separator."
          >
            <PinInputGroupedThreeThreeDemo />
          </DemoCard>
          <DemoCard
            title="1 · 4 · 1"
            description="Edge cells separated; middle four grouped (slotVariant)."
          >
            <PinInputGroupedOneFourOneDemo />
          </DemoCard>
          <DemoCard
            title="Pairs 2 · 2 · 2"
            description="Three fused pairs with separators."
          >
            <PinInputGroupedPairsDemo />
          </DemoCard>
          <DemoCard title="Custom placeholder" description="placeholder prop.">
            <PinInputPlaceholderDemo />
          </DemoCard>
          <DemoCard
            title="Blur on complete"
            description="blurOnComplete on root."
          >
            <PinInputBlurOnCompleteDemo />
          </DemoCard>
          <DemoCard
            title="OTP mode"
            description="otp prop for one-time-code autocomplete."
            className="sm:col-span-2"
          >
            <PinInputOtpDemo />
          </DemoCard>
          <DemoCard title="Mask" description="mask prop (password-like).">
            <PinInputMaskDemo />
          </DemoCard>
          <DemoCard
            title="Root provider"
            description="usePinInput + PinInputRootProvider + focus()."
            className="sm:col-span-2"
          >
            <PinInputRootProviderDemo />
          </DemoCard>
          <DemoCard
            title="Field"
            description="Field label, helper, and error region."
          >
            <PinInputWithFieldDemo />
          </DemoCard>
          <DemoCard
            title="Field invalid"
            description="invalid on Field + root."
          >
            <PinInputFieldInvalidDemo />
          </DemoCard>
          <DemoCard
            title="Controlled"
            description="value + onValueChange + onValueComplete."
            className="sm:col-span-2"
          >
            <PinInputControlledDemo />
          </DemoCard>
          <DemoCard
            title="Invalid entry"
            description="onValueInvalid when type rejects input."
          >
            <PinInputInvalidEntryDemo />
          </DemoCard>
          <DemoCard
            title="Alphanumeric"
            description="type=&quot;alphanumeric&quot;."
          >
            <PinInputAlphanumericDemo />
          </DemoCard>
          <DemoCard title="Disabled" description="disabled on root.">
            <PinInputDisabledDemo />
          </DemoCard>
          <DemoCard title="Read only" description="readOnly + defaultValue.">
            <PinInputReadOnlyDemo />
          </DemoCard>
          <DemoCard title="Context" description="PinInputContext render prop.">
            <PinInputContextDemo />
          </DemoCard>
          <DemoCard title="Four digits" description="count={4} grouped bar.">
            <PinInputFourDigitsDemo />
          </DemoCard>
        </div>
      </section> */}

      {/* <section className="flex flex-col gap-4">
        <h2 className="font-medium text-foreground text-lg">
          Progress (circular)
        </h2>
        <p className="max-w-2xl text-muted-foreground text-sm">
          Built on{" "}
          <a
            className="text-primary underline-offset-4 hover:underline"
            href="https://ark-ui.com/docs/components/progress-circular"
            rel="noreferrer"
            target="_blank"
          >
            Ark UI Progress (circular)
          </a>
          . The high-level{" "}
          <code className="rounded bg-muted px-1 py-0.5 text-xs">
            ProgressCircular
          </code>{" "}
          mirrors{" "}
          <code className="rounded bg-muted px-1 py-0.5 text-xs">
            AngleSlider
          </code>{" "}
          layout:{" "}
          <code className="rounded bg-muted px-1 py-0.5 text-xs">
            variant=&quot;ring&quot;
          </code>
          , optional{" "}
          <code className="rounded bg-muted px-1 py-0.5 text-xs">
            showThumb
          </code>
          , and{" "}
          <code className="rounded bg-muted px-1 py-0.5 text-xs">
            showCenterValue
          </code>
          . Primitives match Ark anatomy (Root → Label → Circle → Track / Range
          → ValueText).
        </p>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          <DemoCard
            title="Default"
            description="defaultValue 50, center ValueText."
          >
            <ProgressCircularDefaultDemo />
          </DemoCard>
          <DemoCard
            title="Min and max"
            description="min 10, max 30, decimal format."
          >
            <ProgressCircularMinMaxDemo />
          </DemoCard>
          <DemoCard
            title="Indeterminate"
            description="value null; circle spins (thumb hidden)."
          >
            <ProgressCircularIndeterminateDemo />
          </DemoCard>
          <DemoCard title="Label" description="variant labeled + label prop.">
            <ProgressCircularLabelDemo />
          </DemoCard>
          <DemoCard
            title="Root provider"
            description="useProgress, setValue, setToMin / setToMax."
            className="sm:col-span-2"
          >
            <ProgressCircularRootProviderDemo />
          </DemoCard>
          <DemoCard
            title="Ring + center"
            description="variant ring, size 160 (angle-slider scale)."
          >
            <ProgressCircularRingDemo />
          </DemoCard>
          <DemoCard
            title="With thumb"
            description="showThumb — end-cap on the arc."
          >
            <ProgressCircularThumbDemo />
          </DemoCard>
          <DemoCard
            title="Ring without thumb"
            description="showThumb false (arc only)."
          >
            <ProgressCircularRingPlainDemo />
          </DemoCard>
          <DemoCard
            title="Row"
            description="variant row — label beside the circle."
          >
            <ProgressCircularRowDemo />
          </DemoCard>
          <DemoCard
            title="Composed"
            description="Primitives only (Root → Label → Circle → ValueText)."
          >
            <ProgressCircularComposedDemo />
          </DemoCard>
          <DemoCard
            title="Controlled"
            description="value + range input + onValueChange."
            className="sm:col-span-2"
          >
            <ProgressCircularControlledDemo />
          </DemoCard>
        </div>
      </section> */}

      {/* <section className="flex flex-col gap-4">
        <h2 className="font-medium text-foreground text-lg">
          Progress (linear)
        </h2>
        <p className="max-w-2xl text-muted-foreground text-sm">
          Same Ark machine as circular —{" "}
          <a
            className="text-primary underline-offset-4 hover:underline"
            href="https://ark-ui.com/docs/components/progress-linear"
            rel="noreferrer"
            target="_blank"
          >
            Progress (linear)
          </a>
          . Anatomy: Root → Label / ValueText → Track → Range. Use{" "}
          <code className="rounded bg-muted px-1 py-0.5 text-xs">
            ProgressLinear
          </code>{" "}
          for a labeled bar or compose primitives. Indeterminate:{" "}
          <code className="rounded bg-muted px-1 py-0.5 text-xs">
            value=&#123;null&#125;
          </code>
          .
        </p>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          <DemoCard
            title="Default"
            description="defaultValue 50 with ValueText."
          >
            <ProgressLinearDefaultDemo />
          </DemoCard>
          <DemoCard
            title="Min and max"
            description="min 10, max 30, decimal format (Ark example)."
          >
            <ProgressLinearMinMaxDemo />
          </DemoCard>
          <DemoCard
            title="Indeterminate"
            description="value null — pulse on Range (Ark example)."
          >
            <ProgressLinearIndeterminateDemo />
          </DemoCard>
          <DemoCard
            title="Value text"
            description="translations.value for assistive copy (Ark example)."
            className="sm:col-span-2"
          >
            <ProgressLinearValueTextDemo />
          </DemoCard>
          <DemoCard
            title="Vertical"
            description="orientation vertical + track height (Ark example)."
          >
            <ProgressLinearVerticalDemo />
          </DemoCard>
          <DemoCard
            title="Root provider"
            description="useProgress + RootProvider (Ark example)."
            className="sm:col-span-2"
          >
            <ProgressLinearRootProviderDemo />
          </DemoCard>
          <DemoCard
            title="Composed"
            description="Primitives only — Root → Label → Track → Range → ValueText."
          >
            <ProgressLinearComposedDemo />
          </DemoCard>
          <DemoCard
            title="Controlled"
            description="value + range input + onValueChange."
            className="sm:col-span-2"
          >
            <ProgressLinearControlledDemo />
          </DemoCard>
          <DemoCard
            title="View"
            description="ProgressLinearView by loading / complete / indeterminate."
          >
            <ProgressLinearViewDemo />
          </DemoCard>
          <DemoCard
            title="Context"
            description="ProgressLinearContext render prop."
          >
            <ProgressLinearContextDemo />
          </DemoCard>
          <DemoCard title="Field" description="Field + label + helper text.">
            <ProgressLinearWithFieldDemo />
          </DemoCard>
          <DemoCard
            title="Track sizes"
            description="ProgressLinear size sm / md / lg."
            className="sm:col-span-2"
          >
            <ProgressLinearSizesDemo />
          </DemoCard>
          <DemoCard
            title="Complete"
            description="value at max — data-state complete."
          >
            <ProgressLinearCompleteDemo />
          </DemoCard>
        </div>
      </section> */}

      {/* <section className="flex flex-col gap-4">
        <h2 className="font-medium text-foreground text-lg">Popover</h2>
        <p className="max-w-2xl text-muted-foreground text-sm">
          Aligned with{" "}
          <a
            className="text-primary underline-offset-4 hover:underline"
            href="https://ark-ui.com/docs/components/popover"
            rel="noreferrer"
            target="_blank"
          >
            Ark UI Popover
          </a>{" "}
          and{" "}
          <a
            className="text-primary underline-offset-4 hover:underline"
            href="https://coss.com/ui/docs/components/popover"
            rel="noreferrer"
            target="_blank"
          >
            coss/ui
          </a>
          . <code className="text-foreground">PopoverPopup</code> shows an arrow
          like <code className="text-foreground">HoverCardPopup</code>.
        </p>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          <DemoCard
            title="Basic"
            description="Title, description, and a small form (coss-style)."
          >
            <PopoverBasicDemo />
          </DemoCard>
          <DemoCard
            title="Close triggers"
            description="Icon close + text CloseTrigger."
          >
            <PopoverCloseButtonDemo />
          </DemoCard>
          <DemoCard
            title="Controlled"
            description="open + onOpenChange with external toggle."
          >
            <PopoverControlledDemo />
          </DemoCard>
          <DemoCard
            title="Root provider"
            description="usePopover + PopoverRootProvider."
          >
            <PopoverRootProviderDemo />
          </DemoCard>
          <DemoCard
            title="Placement"
            description="positioning.placement right."
          >
            <PopoverPlacementDemo />
          </DemoCard>
          <DemoCard
            title="Close behavior"
            description="closeOnInteractOutside and closeOnEscape false."
          >
            <PopoverCloseBehaviorDemo />
          </DemoCard>
          <DemoCard
            title="Modal"
            description="modal — trap focus, inert backdrop, no outside scroll."
          >
            <PopoverModalDemo />
          </DemoCard>
          <DemoCard
            title="Anchor"
            description="PopoverAnchor + inline portal (portalled false)."
          >
            <PopoverAnchorDemo />
          </DemoCard>
          <DemoCard title="Same width" description="positioning.sameWidth.">
            <PopoverSameWidthDemo />
          </DemoCard>
          <DemoCard
            title="Lazy mount"
            description="lazyMount + unmountOnExit on Root."
          >
            <PopoverLazyMountDemo />
          </DemoCard>
          <DemoCard
            title="Nested"
            description="Inner popover with lazyMount / unmountOnExit."
            className="sm:col-span-2"
          >
            <PopoverNestedDemo />
          </DemoCard>
          <DemoCard
            title="Inside dialog"
            description="Popover in DialogPanel; popover uses lazyMount."
          >
            <PopoverDialogDemo />
          </DemoCard>
          <DemoCard
            title="Context + indicator"
            description="PopoverContext render prop and PopoverIndicator."
            className="sm:col-span-2"
          >
            <PopoverContextDemo />
          </DemoCard>
          <DemoCard
            title="Compact hint"
            description="Icon trigger, top placement, small content."
          >
            <PopoverIndicatorOnlyDemo />
          </DemoCard>
          <DemoCard title="No arrow" description="showArrow false.">
            <PopoverNoArrowDemo />
          </DemoCard>
          <DemoCard
            title="Initial focus"
            description="initialFocusEl pointing at a button in content."
          >
            <PopoverInitialFocusDemo />
          </DemoCard>
          <DemoCard
            title="With Field"
            description="FieldInput + adjacent trigger."
          >
            <PopoverWithFieldDemo />
          </DemoCard>
          <DemoCard
            title="usePopoverContext"
            description="Hook in a child under Root."
          >
            <PopoverUseContextHookDemo />
          </DemoCard>
        </div>
      </section> */}

      {/* <section className="flex flex-col gap-4">
        <h2 className="font-medium text-foreground text-lg">Rating group</h2>
        <p className="max-w-2xl text-muted-foreground text-sm">
          Matches{" "}
          <a
            className="text-primary underline-offset-4 hover:underline"
            href="https://ark-ui.com/docs/components/rating-group"
            rel="noreferrer"
            target="_blank"
          >
            Ark UI Rating Group
          </a>
          : Root → Label → Control → Context → Item → ItemContext, plus
          HiddenInput for forms.
        </p>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          <DemoCard
            title="Basic"
            description="defaultValue 3 and stacked star indicators (Ark example)."
          >
            <RatingGroupBasicDemo />
          </DemoCard>
          <DemoCard
            title="Controlled"
            description="value + onValueChange (Ark example)."
          >
            <RatingGroupControlledDemo />
          </DemoCard>
          <DemoCard
            title="Root provider"
            description="useRatingGroup + RootProvider; default 4, button sets 1 (Ark example)."
            className="sm:col-span-2"
          >
            <RatingGroupRootProviderDemo />
          </DemoCard>
          <DemoCard
            title="With field"
            description="Field wrapper + helper text; default 2 (Ark example)."
          >
            <RatingGroupWithFieldDemo />
          </DemoCard>
          <DemoCard
            title="Half rating"
            description="allowHalf, default 2.5, data-half clip on the foreground star (Ark example)."
          >
            <RatingGroupHalfDemo />
          </DemoCard>
          <DemoCard
            title="Forms"
            description="name + HiddenInput; default 5, submit reads FormData (Ark example)."
          >
            <RatingGroupFormDemo />
          </DemoCard>
          <DemoCard
            title="Disabled"
            description="disabled on Root; default 2 (Ark example)."
          >
            <RatingGroupDisabledDemo />
          </DemoCard>
        </div>
      </section> */}

      <section className="flex flex-col gap-4">
        <h2 className="font-medium text-foreground text-lg">Toggle</h2>
        <p className="max-w-2xl text-muted-foreground text-sm">
          Built from{" "}
          <a
            className="text-primary underline-offset-4 hover:underline"
            href="https://ark-ui.com/docs/components/toggle"
            rel="noreferrer"
            target="_blank"
          >
            Ark UI Toggle
          </a>{" "}
          and styled with the same variant and size pattern as{" "}
          <a
            className="text-primary underline-offset-4 hover:underline"
            href="https://coss.com/ui/docs/components/toggle"
            rel="noreferrer"
            target="_blank"
          >
            coss/ui Toggle
          </a>
          . Includes all Ark examples: basic, controlled, disabled, indicator,
          and context.
        </p>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          <DemoCard title="Basic" description="Default usage with an icon.">
            <ToggleBasicDemo />
          </DemoCard>
          <DemoCard
            title="Controlled"
            description="pressed + onPressedChange with external state."
          >
            <ToggleControlledDemo />
          </DemoCard>
          <DemoCard title="Disabled" description="disabled on root.">
            <ToggleDisabledDemo />
          </DemoCard>
          <DemoCard
            title="Indicator"
            description="ToggleIndicator fallback and pressed icon."
          >
            <ToggleIndicatorDemo />
          </DemoCard>
          <DemoCard
            title="Context"
            description="ToggleContext render prop for pressed state."
          >
            <ToggleContextDemo />
          </DemoCard>
        </div>
      </section>

      <section className="flex flex-col gap-4">
        <h2 className="font-medium text-foreground text-lg">Toggle Group</h2>
        <p className="max-w-2xl text-muted-foreground text-sm">
          Built from{" "}
          <a
            className="text-primary underline-offset-4 hover:underline"
            href="https://ark-ui.com/docs/components/toggle-group"
            rel="noreferrer"
            target="_blank"
          >
            Ark UI Toggle Group
          </a>{" "}
          and styled after{" "}
          <a
            className="text-primary underline-offset-4 hover:underline"
            href="https://coss.com/ui/docs/components/toggle-group"
            rel="noreferrer"
            target="_blank"
          >
            coss/ui Toggle Group
          </a>
          . Includes Ark examples (basic, controlled, multiple, root-provider)
          plus coss-style examples (small, large, outline, vertical, disabled,
          disabled item, and tooltips).
        </p>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          <DemoCard
            title="Basic"
            description="defaultValue + icon alignment actions (Ark basic)."
          >
            <ToggleGroupBasicDemo />
          </DemoCard>
          <DemoCard
            title="Controlled"
            description="value + onValueChange with external state (Ark controlled)."
          >
            <ToggleGroupControlledDemo />
          </DemoCard>
          <DemoCard
            title="Multiple selection"
            description="multiple with defaultValue ['bold'] (Ark multiple)."
          >
            <ToggleGroupMultipleDemo />
          </DemoCard>
          <DemoCard
            title="Root provider"
            description="useToggleGroup + ToggleGroupRootProvider (Ark root-provider)."
            className="sm:col-span-2"
          >
            <ToggleGroupRootProviderDemo />
          </DemoCard>
          <DemoCard
            title="Small toggles"
            description="size='sm' (coss small toggles)."
          >
            <ToggleGroupSmallDemo />
          </DemoCard>
          <DemoCard
            title="Large toggles"
            description="size='lg' (coss large toggles)."
          >
            <ToggleGroupLargeDemo />
          </DemoCard>
          <DemoCard
            title="Outline + separators"
            description="variant='outline' with ToggleGroupSeparator (coss outline)."
          >
            <ToggleGroupOutlineDemo />
          </DemoCard>
          <DemoCard
            title="Vertical"
            description="orientation='vertical' with horizontal separators (coss vertical)."
          >
            <ToggleGroupVerticalDemo />
          </DemoCard>
          <DemoCard
            title="Disabled"
            description="disabled on root (coss disabled)."
          >
            <ToggleGroupDisabledDemo />
          </DemoCard>
          <DemoCard
            title="With disabled toggle"
            description="single disabled item in group (coss disabled item)."
          >
            <ToggleGroupWithDisabledItemDemo />
          </DemoCard>
          {/* <DemoCard
            title="With tooltips"
            description="Ark tooltip primitives wrapping ToggleGroupItem (coss tooltip example)."
            className="sm:col-span-2"
          >
            <ToggleGroupWithTooltipsDemo />
          </DemoCard> */}
        </div>
      </section>

      <section className="flex flex-col gap-4">
        <h2 className="font-medium text-foreground text-lg">Slider</h2>
        <p className="max-w-2xl text-muted-foreground text-sm">
          Matches{" "}
          <a
            className="text-primary underline-offset-4 hover:underline"
            href="https://ark-ui.com/docs/components/slider"
            rel="noreferrer"
            target="_blank"
          >
            Ark UI Slider
          </a>{" "}
          (see{" "}
          <a
            className="text-primary underline-offset-4 hover:underline"
            href="https://coss.com/ui/docs/components/slider"
            rel="noreferrer"
            target="_blank"
          >
            coss/ui
          </a>
          ). Use <code className="text-foreground">SliderThumbs</code> instead
          of repeating <code className="text-foreground">SliderThumb</code> per
          index; pass <code className="text-foreground">defaultValue</code> as a
          single number or an array. Root anatomy: Label, ValueText, Control →
          Track → Range, then thumbs + HiddenInput.
        </p>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          <DemoCard
            title="Basic"
            description="Single thumb; defaultValue 50 (Ark basic)."
          >
            <SliderBasicDemo />
          </DemoCard>
          <DemoCard
            title="Range"
            description="defaultValue [30, 60] + SliderThumbs (Ark range)."
          >
            <SliderRangeDemo />
          </DemoCard>
          <DemoCard
            title="Marks"
            description="MarkerGroup + Marker values (Ark with-marks)."
          >
            <SliderWithMarksDemo />
          </DemoCard>
          <DemoCard
            title="Min / max"
            description="min −10, max 10 (Ark min-max)."
          >
            <SliderMinMaxDemo />
          </DemoCard>
          <DemoCard
            title="Step"
            description="step 0.01 between 5 and 10 (Ark step)."
          >
            <SliderStepDemo />
          </DemoCard>
          <DemoCard
            title="Change events"
            description="onValueChange + onValueChangeEnd (Ark on-event)."
            className="sm:col-span-2"
          >
            <SliderOnEventDemo />
          </DemoCard>
          <DemoCard
            title="Vertical"
            description="orientation vertical + reference labels (Ark vertical + coss-style)."
            className="sm:col-span-2"
          >
            <SliderVerticalDemo />
          </DemoCard>
          <DemoCard
            title="Vertical · dragging indicator"
            description="DraggingIndicator on the thumb (Ark dragging-indicator + vertical)."
            className="sm:col-span-2"
          >
            <SliderVerticalDraggingIndicatorDemo />
          </DemoCard>
          <DemoCard
            title="Vertical range · two sliders"
            description="Two vertical range sliders (2 thumbs) with different bounds."
            className="sm:col-span-2"
          >
            <SliderVerticalTwoRangesDemo />
          </DemoCard>
          <DemoCard
            title="Center origin"
            description="origin center (Ark center-origin)."
          >
            <SliderCenterOriginDemo />
          </DemoCard>
          <DemoCard
            title="Root provider"
            description="useSlider + SliderRootProvider; Focus button (Ark root-provider)."
            className="sm:col-span-2"
          >
            <SliderRootProviderDemo />
          </DemoCard>
          <DemoCard
            title="Dragging indicator"
            description="SliderDraggingIndicator via SliderThumbs child (Ark dragging-indicator)."
          >
            <SliderDraggingIndicatorDemo />
          </DemoCard>
          <DemoCard
            title="Thumb overlap"
            description="minStepsBetweenThumbs 10, step 1 (Ark thumb-overlap)."
          >
            <SliderThumbOverlapDemo />
          </DemoCard>
          <DemoCard
            title="Thumb collision"
            description="thumbCollisionBehavior push vs swap (Ark thumb-collision)."
            className="sm:col-span-2"
          >
            <SliderThumbCollisionDemo />
          </DemoCard>
          <DemoCard
            title="Context"
            description="SliderContext render prop: dragging + value (Ark context)."
          >
            <SliderContextDemo />
          </DemoCard>
          <DemoCard
            title="Thumb alignment"
            description="contain vs center (Ark thumb-alignment)."
            className="sm:col-span-2"
          >
            <SliderThumbAlignmentDemo />
          </DemoCard>
          <DemoCard
            title="With Field"
            description="FieldLabel + FieldDescription + Slider (coss-style)."
          >
            <SliderWithFieldDemo />
          </DemoCard>
          <DemoCard
            title="With number input"
            description="Controlled value shared with a number input (Ark curated example)."
          >
            <SliderWithNumberInputDemo />
          </DemoCard>
          <DemoCard title="Disabled" description="disabled on Root.">
            <SliderDisabledDemo />
          </DemoCard>
          <DemoCard
            title="Form"
            description="name on Root + FormData (Ark forms pattern)."
          >
            <SliderFormDemo />
          </DemoCard>
          <DemoCard title="Read-only" description="readOnly on Root.">
            <SliderReadOnlyDemo />
          </DemoCard>
        </div>
      </section>

      <section className="flex flex-col gap-4">
        <h2 className="font-medium text-foreground text-lg">Timer</h2>
        <p className="max-w-2xl text-muted-foreground text-sm">
          Built on{" "}
          <a
            className="text-primary underline-offset-4 hover:underline"
            href="https://ark-ui.com/docs/components/timer"
            rel="noreferrer"
            target="_blank"
          >
            Ark UI Timer
          </a>
          . Includes all Ark React examples: basic, countdown, interval, events,
          pomodoro, and root provider.
        </p>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          <DemoCard
            title="Basic"
            description="Target + start time with controls."
          >
            <TimerBasicDemo />
          </DemoCard>
          <DemoCard title="Countdown" description="countdown + startMs.">
            <TimerCountdownDemo />
          </DemoCard>
          <DemoCard
            title="Interval"
            description="interval 100ms with milliseconds."
          >
            <TimerIntervalDemo />
          </DemoCard>
          <DemoCard
            title="Events"
            description="onTick and onComplete callbacks."
          >
            <TimerEventsDemo />
          </DemoCard>
          <DemoCard
            title="Pomodoro"
            description="Alternates work and break sessions."
          >
            <TimerPomodoroDemo />
          </DemoCard>
          <DemoCard
            title="Root provider"
            description="useTimer + TimerRootProvider."
          >
            <TimerRootProviderDemo />
          </DemoCard>
        </div>
      </section>

      <section className="flex flex-col gap-4">
        <h2 className="font-medium text-foreground text-lg">Toast</h2>
        <p className="max-w-2xl text-muted-foreground text-sm">
          Built on{" "}
          <a
            className="text-primary underline-offset-4 hover:underline"
            href="https://ark-ui.com/docs/components/toast"
            rel="noreferrer"
            target="_blank"
          >
            Ark UI Toast
          </a>{" "}
          and styled like{" "}
          <a
            className="text-primary underline-offset-4 hover:underline"
            href="https://coss.com/ui/docs/components/toast"
            rel="noreferrer"
            target="_blank"
          >
            coss/ui
          </a>
          : sonner-like stacked toasts with overlap and anchored tooltip toasts.
          Uses <code className="text-foreground">createToaster</code> for global
          instances. Types: success, error, warning, info, loading.
        </p>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          <DemoCard
            title="Basic"
            description="toaster.create({ title, description })."
          >
            <ToastBasicDemo />
          </DemoCard>
          <DemoCard
            title="Types"
            description="toaster.success/error/warning/info with status icons."
            className="sm:col-span-2"
          >
            <ToastTypesDemo />
          </DemoCard>
          <DemoCard
            title="Loading"
            description='type: "loading" with spinner icon.'
          >
            <ToastLoadingDemo />
          </DemoCard>
          <DemoCard
            title="With action"
            description="action: { label, onClick } renders an action button."
          >
            <ToastActionDemo />
          </DemoCard>
          <DemoCard
            title="Promise"
            description="toaster.promise() for loading / success / error states."
          >
            <ToastPromiseDemo />
          </DemoCard>
          <DemoCard
            title="Update"
            description="toaster.create() then toaster.update(id, opts)."
          >
            <ToastUpdateDemo />
          </DemoCard>
          <DemoCard
            title="Duration"
            description="Custom duration or Infinity to keep until dismissed."
          >
            <ToastDurationDemo />
          </DemoCard>
          <DemoCard
            title="Varying heights"
            description="Different description lengths stacked with overlap."
          >
            <ToastVaryingHeightDemo />
          </DemoCard>
          <DemoCard
            title="Stacked toasts"
            description="Multiple toasts with overlap: true at bottom-end."
          >
            <ToastStackedDemo />
          </DemoCard>
          <DemoCard
            title="Anchored toast"
            description="Compact tooltip-style toast using anchoredToaster."
          >
            <ToastAnchoredDemo />
          </DemoCard>
        </div>
      </section>

      <ToastProvider />
      <AnchoredToastProvider />

      {/* <section className="flex flex-col gap-4">
        <h2 className="font-medium text-foreground text-lg">Scroll area</h2>
        <p className="max-w-2xl text-muted-foreground text-sm">
          Built from{" "}
          <a
            className="text-primary underline-offset-4 hover:underline"
            href="https://ark-ui.com/docs/components/scroll-area"
            rel="noreferrer"
            target="_blank"
          >
            Ark UI Scroll Area
          </a>{" "}
          (viewport hides native scrollbars per docs) with{" "}
          <a
            className="text-primary underline-offset-4 hover:underline"
            href="https://coss.com/ui/docs/components/scroll-area"
            rel="noreferrer"
            target="_blank"
          >
            coss-style
          </a>{" "}
          chrome: composite <code className="text-foreground">ScrollArea</code>{" "}
          plus primitives for horizontal, both axes, and nested layouts.
        </p>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          <DemoCard
            title="Basic"
            description="Root → Viewport → Content; vertical scrollbar + corner (Ark example)."
          >
            <ScrollAreaBasicDemo />
          </DemoCard>
          <DemoCard
            title="Horizontal"
            description="Horizontal scrollbar only; wide paragraph (Ark example)."
          >
            <ScrollAreaHorizontalDemo />
          </DemoCard>
          <DemoCard
            title="Both directions"
            description="Vertical and horizontal scrollbars + corner (Ark example)."
            className="sm:col-span-2"
          >
            <ScrollAreaBothDirectionsDemo />
          </DemoCard>
          <DemoCard
            title="Nested"
            description="Inner Root inside outer Content (Ark example)."
            className="sm:col-span-2"
          >
            <ScrollAreaNestedDemo />
          </DemoCard>
          <DemoCard
            title="Root provider"
            description="useScrollArea + RootProvider; scrollToEdge top/bottom (Ark example)."
            className="sm:col-span-2"
          >
            <ScrollAreaRootProviderDemo />
          </DemoCard>
          <DemoCard
            title="Composite · tags"
            description="Single ScrollArea wrapper; long list (coss-style)."
          >
            <ScrollAreaCompositeTagsDemo />
          </DemoCard>
          <DemoCard
            title="Scroll fade"
            description="Composite scrollFade mask on viewport (coss-style)."
          >
            <ScrollAreaScrollFadeDemo />
          </DemoCard>
          <DemoCard
            title="Scrollbar gutter"
            description="Composite scrollbarGutter; stable end padding (coss-style)."
          >
            <ScrollAreaCompositeScrollbarGutterDemo />
          </DemoCard>
          <DemoCard
            title="Horizontal items"
            description="Row of cards + bottom track; pb reserved for thumb (coss-style)."
            className="sm:col-span-2"
          >
            <ScrollAreaHorizontalItemsDemo />
          </DemoCard>
          <DemoCard
            title="ScrollAreaContext"
            description="Render prop: isAtTop / isAtBottom while scrolling."
          >
            <ScrollAreaContextDemo />
          </DemoCard>
        </div>
      </section> */}

      {/* <section className="flex flex-col gap-4">
        <h2 className="font-medium text-foreground text-lg">Select</h2>
        <p className="max-w-2xl text-muted-foreground text-sm">
          Built from{" "}
          <a
            className="text-primary underline-offset-4 hover:underline"
            href="https://ark-ui.com/docs/components/select"
            rel="noreferrer"
            target="_blank"
          >
            Ark UI Select
          </a>{" "}
          (Root → Control → Trigger, Positioner → Content → Item) with list
          collection helpers and styling aligned with{" "}
          <a
            className="text-primary underline-offset-4 hover:underline"
            href="https://coss.com/ui/docs/components/select"
            rel="noreferrer"
            target="_blank"
          >
            coss/ui
          </a>{" "}
          and <code className="text-foreground">combobox.tsx</code>:{" "}
          <code className="text-foreground">SelectPopup</code>,{" "}
          <code className="text-foreground">SelectTriggerField</code> with{" "}
          <code className="text-foreground">ButtonGroup</code> for clear.
        </p>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          <DemoCard
            title="Basic"
            description="defaultValue, SelectValue placeholder, HiddenSelect."
          >
            <SelectBasicDemo />
          </DemoCard>
          <DemoCard title="Controlled" description="value + onValueChange.">
            <SelectControlledDemo />
          </DemoCard>
          <DemoCard
            title="Root provider"
            description="useListCollection + useSelect + SelectRootProvider."
          >
            <SelectRootProviderDemo />
          </DemoCard>
          <DemoCard
            title="Multiple + select all"
            description="multiple, custom value text, selectAll in popup."
            className="sm:col-span-2"
          >
            <SelectMultipleDemo />
          </DemoCard>
          <DemoCard
            title="Grouping"
            description="groupBy + SelectGroupedList + ItemGroup."
          >
            <SelectGroupingDemo />
          </DemoCard>
          <DemoCard
            title="Field"
            description="FieldLabel + FieldDescription (forms)."
          >
            <SelectFieldDemo />
          </DemoCard>
          <DemoCard
            title="Form"
            description="name + HiddenSelect; FormData on submit."
          >
            <SelectFormDemo />
          </DemoCard>
          <DemoCard
            title="Async load"
            description="onOpenChange loads items after a delay."
          >
            <SelectAsyncDemo />
          </DemoCard>
          <DemoCard
            title="Lazy mount"
            description="lazyMount + unmountOnExit on Root."
          >
            <SelectLazyMountDemo />
          </DemoCard>
          <DemoCard
            title="Overflow"
            description="Many items + scroll; positioning flip / hideWhenDetached."
            className="sm:col-span-2"
          >
            <SelectOverflowDemo />
          </DemoCard>
          <DemoCard
            title="Sizes"
            description="SelectTrigger size sm and lg."
            className="sm:col-span-2"
          >
            <SelectSizesDemo />
          </DemoCard>
          <DemoCard title="Disabled" description="disabled on Root.">
            <SelectDisabledDemo />
          </DemoCard>
          <DemoCard
            title="Wider popup"
            description="sameWidth false + min-w on content."
          >
            <SelectSameWidthOffDemo />
          </DemoCard>
          <DemoCard
            title="With label"
            description="SelectLabel above the trigger."
          >
            <SelectWithLabelDemo />
          </DemoCard>
          <DemoCard
            title="Trigger icon"
            description="Leading icon in SelectTrigger (coss)."
          >
            <SelectWithIconTriggerDemo />
          </DemoCard>
          <DemoCard
            title="Options with icon"
            description="Per-option icons + Value render (coss)."
            className="sm:col-span-2"
          >
            <SelectOptionsWithIconDemo />
          </DemoCard>
          <DemoCard
            title="Object values"
            description="itemToString + two-line label / description."
            className="sm:col-span-2"
          >
            <SelectObjectValuesDemo />
          </DemoCard>
          <DemoCard
            title="Clear (ButtonGroup)"
            description="SelectTriggerField showClear + ClearTrigger."
          >
            <SelectClearFieldDemo />
          </DemoCard>
          <DemoCard title="Invalid" description="invalid on Root.">
            <SelectInvalidDemo />
          </DemoCard>
          <DemoCard title="Read-only" description="readOnly on Root.">
            <SelectReadOnlyDemo />
          </DemoCard>
          <DemoCard
            title="Deselectable"
            description="deselectable: click selected item to clear."
          >
            <SelectDeselectableDemo />
          </DemoCard>
          <DemoCard title="Empty" description="Empty collection + SelectEmpty.">
            <SelectEmptyDemo />
          </DemoCard>
          <DemoCard
            title="useSelectContext"
            description="Hook under Root (valueAsString)."
          >
            <SelectContextHookDemo />
          </DemoCard>
          <DemoCard
            title="closeOnSelect false"
            description="Menu stays open after picking (toggle multi-like)."
          >
            <SelectCloseOnSelectDemo />
          </DemoCard>
        </div>
      </section> */}

      {/* <section className="flex flex-col gap-4">
        <h2 className="font-medium text-foreground text-lg">QR code</h2>
        <p className="max-w-2xl text-muted-foreground text-sm">
          Matches{" "}
          <a
            className="text-primary underline-offset-4 hover:underline"
            href="https://ark-ui.com/docs/components/qr-code"
            rel="noreferrer"
            target="_blank"
          >
            Ark UI QR Code
          </a>{" "}
          anatomy: Root → Frame → Pattern; optional Overlay and DownloadTrigger;
          RootProvider with <code className="text-foreground">useQrCode</code>.
        </p>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          <DemoCard
            title="Basic"
            description="defaultValue; Frame + Pattern (100×100 via --qr-code-size)."
          >
            <QrCodeBasicDemo />
          </DemoCard>
          <DemoCard
            title="Controlled"
            description="value + onValueChange; external button updates payload."
          >
            <QrCodeControlledDemo />
          </DemoCard>
          <DemoCard
            title="Download"
            description="QrCodeDownloadTrigger with fileName and mimeType."
          >
            <QrCodeDownloadDemo />
          </DemoCard>
          <DemoCard
            title="Error correction"
            description="encoding.ecc L / M / Q / H for denser recovery."
            className="sm:col-span-2"
          >
            <QrCodeErrorCorrectionDemo />
          </DemoCard>
          <DemoCard
            title="Fill"
            description="Per-frame fill on two codes (same URL)."
          >
            <QrCodeFillDemo />
          </DemoCard>
          <DemoCard title="Overlay" description="Logo overlay with ecc H.">
            <QrCodeOverlayDemo />
          </DemoCard>
          <DemoCard
            title="Root provider"
            description="useQrCode store, setValue, and RootProvider."
            className="sm:col-span-2"
          >
            <QrCodeRootProviderDemo />
          </DemoCard>
          <DemoCard
            title="Context"
            description="QrCodeContext render prop (value length)."
          >
            <QrCodeContextDemo />
          </DemoCard>
        </div>
      </section> */}

      {/* <section className="flex flex-col gap-4">
        <h2 className="font-medium text-foreground text-lg">Signature pad</h2>
        <p className="max-w-2xl text-muted-foreground text-sm">
          Matches{" "}
          <a
            className="text-primary underline-offset-4 hover:underline"
            href="https://ark-ui.com/docs/components/signature-pad"
            rel="noreferrer"
            target="_blank"
          >
            Ark UI Signature Pad
          </a>{" "}
          anatomy: Root → Label, Control (Segment, ClearTrigger, Guide);
          optional HiddenInput;{" "}
          <code className="text-foreground">RootProvider</code> with{" "}
          <code className="text-foreground">useSignaturePad</code>; compose with{" "}
          <code className="text-foreground">Field</code> for helper and error
          text.
        </p>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          <DemoCard
            title="Basic"
            description="Label, Control, Segment, ClearTrigger, Guide (default size)."
          >
            <SignaturePadBasicDemo />
          </DemoCard>
          <DemoCard
            title="Image preview"
            description="onDrawEnd → getDataUrl('image/png') for a live preview."
            className="sm:col-span-2"
          >
            <SignaturePadImagePreviewDemo />
          </DemoCard>
          <DemoCard
            title="Root provider"
            description="useSignaturePad store, paths count, RootProvider."
            className="sm:col-span-2"
          >
            <SignaturePadRootProviderDemo />
          </DemoCard>
          <DemoCard
            title="With Field"
            description="FieldDescription + FieldError around the pad (forms)."
            className="sm:col-span-2"
          >
            <SignaturePadWithFieldDemo />
          </DemoCard>
          <DemoCard
            title="Context"
            description="SignaturePadContext: empty, paths, drawing."
          >
            <SignaturePadContextDemo />
          </DemoCard>
        </div>
      </section>  */}

      {/* <section className="flex flex-col gap-4">
        <h2 className="font-medium text-foreground text-lg">Radio group</h2>
        <p className="max-w-2xl text-muted-foreground text-sm">
          Built on{" "}
          <a
            className="text-primary underline-offset-4 hover:underline"
            href="https://ark-ui.com/docs/components/radio-group"
            rel="noreferrer"
            target="_blank"
          >
            Ark UI Radio Group
          </a>{" "}
          (Root → Label → Item with HiddenInput, ItemText, ItemControl) and
          styled like{" "}
          <a
            className="text-primary underline-offset-4 hover:underline"
            href="https://coss.com/ui/docs/components/radio-group"
            rel="noreferrer"
            target="_blank"
          >
            coss/ui
          </a>
          : <code className="text-foreground">RadioGroup</code> column layout,{" "}
          <code className="text-foreground">Radio</code> with circular control
          and primary fill.
        </p>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          <DemoCard
            title="Default"
            description="RadioGroupLabel + defaultValue (initial selection)."
          >
            <RadioGroupDefaultDemo />
          </DemoCard>
          <DemoCard title="Controlled" description="value + onValueChange.">
            <RadioGroupControlledDemo />
          </DemoCard>
          <DemoCard title="Disabled group" description="disabled on Root.">
            <RadioGroupDisabledGroupDemo />
          </DemoCard>
          <DemoCard
            title="Disabled item"
            description="disabled on a single Radio."
          >
            <RadioGroupDisabledItemDemo />
          </DemoCard>
          <DemoCard
            title="Orientation"
            description="orientation horizontal on Root."
          >
            <RadioGroupOrientationDemo />
          </DemoCard>
          <DemoCard
            title="Root provider"
            description="useRadioGroup + RadioGroupRootProvider."
          >
            <RadioGroupRootProviderDemo />
          </DemoCard>
          <DemoCard
            title="With fieldset"
            description="FieldsetLegend, helper, and error copy."
            className="sm:col-span-2"
          >
            <RadioGroupFieldsetDemo />
          </DemoCard>
          <DemoCard
            title="With description"
            description="Secondary line under each label (coss pattern)."
            className="sm:col-span-2"
          >
            <RadioGroupWithDescriptionDemo />
          </DemoCard>
          <DemoCard
            title="Card style"
            description="Bordered rows with checked highlight (coss)."
            className="sm:col-span-2"
          >
            <RadioGroupCardStyleDemo />
          </DemoCard>
          <DemoCard
            title="Form"
            description="name on Root + native FormData on submit."
          >
            <RadioGroupFormDemo />
          </DemoCard>
          <DemoCard title="Read-only" description="readOnly on Root.">
            <RadioGroupReadOnlyDemo />
          </DemoCard>
          <DemoCard title="Invalid" description="invalid on Root.">
            <RadioGroupInvalidDemo />
          </DemoCard>
          <DemoCard
            title="With Field"
            description="FieldLabel + FieldDescription around RadioGroup."
          >
            <RadioGroupWithFieldDemo />
          </DemoCard>
          <DemoCard
            title="useRadioGroupContext"
            description="Hook under RadioGroup Root."
          >
            <RadioGroupContextHookDemo />
          </DemoCard>
          <DemoCard
            title="RadioGroupContext"
            description="Render-prop context (current value)."
          >
            <RadioGroupContextRenderDemo />
          </DemoCard>
        </div>
      </section> */}

      {/* <section className="flex flex-col gap-4">
        <h2 className="font-medium text-foreground text-lg">Segment group</h2>
        <p className="max-w-2xl text-muted-foreground text-sm">
          From{" "}
          <a
            className="text-primary underline-offset-4 hover:underline"
            href="https://ark-ui.com/docs/components/segment-group"
            rel="noreferrer"
            target="_blank"
          >
            Ark UI Segment Group
          </a>
          : compose{" "}
          <code className="rounded bg-muted px-1 py-0.5 text-xs">
            &lt;SegmentGroup&gt;
          </code>{" "}
          with{" "}
          <code className="rounded bg-muted px-1 py-0.5 text-xs">
            &lt;Segment&gt;
          </code>{" "}
          children (indicator and Ark item parts are internal). Default style is
          an underline track like{" "}
          <a
            className="text-primary underline-offset-4 hover:underline"
            href="https://coss.com/ui/docs/components/tabs#underline-variant"
            rel="noreferrer"
            target="_blank"
          >
            coss/ui tabs (underline)
          </a>
          ; use{" "}
          <code className="rounded bg-muted px-1 py-0.5 text-xs">
            variant=&quot;default&quot;
          </code>{" "}
          for a pill track.
        </p>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          <DemoCard
            title="Underline tabs"
            description="Default variant — baseline + primary bar (Ark indicator)."
            className="sm:col-span-2 lg:col-span-3"
          >
            <SegmentGroupUnderlineTabsDemo />
          </DemoCard>
          <DemoCard
            title="Underline vertical tabs"
            description="Vertical variant — baseline + primary bar (Ark indicator)."
            className="sm:col-span-2 lg:col-span-3"
          >
            <SegmentGroupUnderlineVerticalTabsDemo />
          </DemoCard>
          <DemoCard
            title="items shortcut"
            description="Optional items array maps to Segment; no JSX children."
          >
            <SegmentGroupItemsShortcutDemo />
          </DemoCard>
          <DemoCard
            title="Pill track"
            description="variant default — filled sliding indicator."
          >
            <SegmentGroupDefaultDemo />
          </DemoCard>
          <DemoCard title="Controlled" description="value + onValueChange.">
            <SegmentGroupControlledDemo />
          </DemoCard>
          <DemoCard
            title="Root provider"
            description="useSegmentGroup + SegmentGroupRootProvider."
          >
            <SegmentGroupRootProviderDemo />
          </DemoCard>
          <DemoCard title="Disabled group" description="disabled on Root.">
            <SegmentGroupDisabledGroupDemo />
          </DemoCard>
          <DemoCard
            title="Disabled item"
            description="disabled on one Segment (Ark docs)."
          >
            <SegmentGroupDisabledItemDemo />
          </DemoCard>
          <DemoCard
            title="Orientation"
            description="orientation vertical on Root."
          >
            <SegmentGroupOrientationDemo />
          </DemoCard>
          <DemoCard
            title="Label"
            description="label prop on SegmentGroup (row below)."
          >
            <SegmentGroupWithLabelDemo />
          </DemoCard>
          <DemoCard
            title="With description"
            description="Custom ItemText (two lines per segment)."
            className="sm:col-span-2"
          >
            <SegmentGroupWithDescriptionDemo />
          </DemoCard>
          <DemoCard
            title="Anatomy"
            description="Segment wraps Ark ItemText → ItemControl → ItemHiddenInput."
          >
            <SegmentGroupAnatomyDemo />
          </DemoCard>
          <DemoCard
            title="Form"
            description="name on Root + native FormData on submit."
          >
            <SegmentGroupFormDemo />
          </DemoCard>
          <DemoCard title="Read-only" description="readOnly on Root.">
            <SegmentGroupReadOnlyDemo />
          </DemoCard>
          <DemoCard title="Invalid" description="invalid on Root.">
            <SegmentGroupInvalidDemo />
          </DemoCard>
          <DemoCard
            title="With Field"
            description="FieldLabel + FieldDescription around SegmentGroup."
          >
            <SegmentGroupWithFieldDemo />
          </DemoCard>
          <DemoCard
            title="useSegmentGroupContext"
            description="Hook under SegmentGroup Root."
          >
            <SegmentGroupContextHookDemo />
          </DemoCard>
          <DemoCard
            title="SegmentGroupContext"
            description="Render-prop context (current value)."
          >
            <SegmentGroupContextRenderDemo />
          </DemoCard>
        </div>
      </section> */}
    </div>
  );
};

export default ArkUiShowcase1;
