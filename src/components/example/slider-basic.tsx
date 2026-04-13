"use client";

import { Slider, SliderField, SliderLabel } from "@/components/ui/slider";

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

export default SliderBasicDemo;
