"use client";

import { BoldIcon } from "lucide-react";
import { Toggle } from "@/components/ui/toggle";

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

export default ToggleBasicDemo;
