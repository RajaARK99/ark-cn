// import { parseDate } from "@ark-ui/react/date-picker";
// import {
//   ArrowDownIcon,
//   ArrowDownLeftIcon,
//   ArrowUpIcon,
//   CalendarIcon,
//   CameraIcon,
//   CheckIcon,
//   ChevronDownIcon,
//   ChevronLeftIcon,
//   ChevronRightIcon,
//   ChevronsLeftIcon,
//   ChevronsRightIcon,
//   ChevronsUpDownIcon,
//   ChevronUpIcon,
//   CornerDownLeftIcon,
//   CornerUpLeftIcon,
//   CropIcon,
//   EllipsisVerticalIcon,
//   FileIcon,
//   FileTextIcon,
//   GripVerticalIcon,
//   ImageIcon,
//   Maximize2Icon,
//   MinusIcon,
//   PaperclipIcon,
//   PencilIcon,
//   PlusIcon,
//   SearchIcon,
//   StarIcon,
//   UploadIcon,
//   UserRoundIcon,
//   XIcon,
//   ZoomInIcon,
//   ZoomOutIcon,
// } from "lucide-react";
// import {
//   type ComponentProps,
//   Fragment,
//   type ReactNode,
//   useEffect,
//   useMemo,
//   useState,
// } from "react";
// import {
//   Accordion,
//   AccordionItem,
//   AccordionPanel,
//   AccordionTrigger,
// } from "@/components/ui/accordion";
// import {
//   AlertDialog,
//   AlertDialogAction,
//   AlertDialogCancel,
//   AlertDialogContent,
//   AlertDialogDescription,
//   AlertDialogFooter,
//   AlertDialogHeader,
//   AlertDialogTitle,
//   AlertDialogTrigger,
// } from "@/components/ui/alert-dialog";
// import { AngleSlider } from "@/components/ui/angle-slider";
// import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
// import { Badge } from "@/components/ui/badge";
// import {
//   Breadcrumb,
//   BreadcrumbItem,
//   BreadcrumbLink,
//   BreadcrumbList,
//   BreadcrumbPage,
//   BreadcrumbSeparator,
// } from "@/components/ui/breadcrumb";
// import { Button } from "@/components/ui/button";
// import { ButtonGroup, ButtonGroupSeparator } from "@/components/ui/button-group";
// import {
//   Carousel,
//   CarouselContent,
//   CarouselControl,
//   CarouselIndicatorGroup,
//   CarouselIndicatorItem,
//   CarouselItem,
//   CarouselNext,
//   CarouselPrevious,
// } from "@/components/ui/carousel";
// import {
//   Checkbox,
//   CheckboxLabel,
//   CheckboxRoot,
// } from "@/components/ui/checkbox";
// import {
//   ClipboardControl,
//   ClipboardIndicator,
//   ClipboardInput,
//   ClipboardRoot,
//   ClipboardTrigger,
//   ClipboardValueText,
// } from "@/components/ui/clipboard";
// import {
//   Collapsible,
//   CollapsibleContent,
//   CollapsibleTrigger,
// } from "@/components/ui/collapsible";
// import {
//   ColorPicker,
//   ColorPickerArea,
//   ColorPickerChannelInput,
//   ColorPickerChannelSlider,
//   ColorPickerChannelSliderRow,
//   ColorPickerContent,
//   ColorPickerControl,
//   ColorPickerEyeDropperTrigger,
//   ColorPickerFormatSelect,
//   ColorPickerFormatTrigger,
//   ColorPickerHueAlphaSliders,
//   ColorPickerLabel,
//   ColorPickerPositioner,
//   ColorPickerPresetSwatches,
//   ColorPickerRootProvider,
//   ColorPickerSwatch,
//   ColorPickerSwatchGroup,
//   ColorPickerSwatchIndicator,
//   ColorPickerSwatchTrigger,
//   ColorPickerTransparencyGrid,
//   ColorPickerTrigger,
//   ColorPickerValueSwatch,
//   ColorPickerValueText,
//   ColorPickerView,
//   parseColor,
//   useColorPicker,
// } from "@/components/ui/color-picker";
// import {
//   Combobox,
//   ComboboxChip,
//   ComboboxChips,
//   ComboboxChipsInput,
//   ComboboxControl,
//   ComboboxEmpty,
//   ComboboxGroupedList,
//   ComboboxInput,
//   ComboboxItem,
//   ComboboxItemGroup,
//   ComboboxItemGroupLabel,
//   ComboboxItemIndicator,
//   ComboboxItemText,
//   ComboboxLabel,
//   ComboboxList,
//   ComboboxPopup,
//   ComboboxSeparator,
//   ComboboxTrigger,
//   ComboboxValue,
// } from "@/components/ui/combobox";
// import {
//   Command,
//   CommandDialog,
//   CommandDialogPopup,
//   CommandDialogTrigger,
//   CommandEmpty,
//   CommandFooter,
//   CommandGroup,
//   CommandGroupedList,
//   CommandGroupLabel,
//   CommandInput,
//   CommandItem,
//   CommandItemText,
//   CommandList,
//   CommandPanel,
//   CommandPopup,
//   CommandSeparator,
//   CommandShortcut,
// } from "@/components/ui/command";
// import {
//   DatePicker,
//   DatePickerCalendar,
//   DatePickerControl,
//   DatePickerInput,
//   DatePickerLabel,
//   DatePickerTrigger,
// } from "@/components/ui/date-picker";
// import {
//   Dialog,
//   DialogClose,
//   DialogDescription,
//   DialogFooter,
//   DialogHeader,
//   DialogPanel,
//   DialogPopup,
//   DialogRootProvider,
//   DialogTitle,
//   DialogTrigger,
//   useDialog,
// } from "@/components/ui/dialog";
// import {
//   Editable,
//   EditableArea,
//   EditableCancelTrigger,
//   EditableContext,
//   EditableControl,
//   EditableEditTrigger,
//   EditableInput,
//   EditableLabel,
//   EditablePreview,
//   EditableRootProvider,
//   EditableSubmitTrigger,
//   useEditable,
// } from "@/components/ui/editable";
// import {
//   Field,
//   FieldContext,
//   FieldDescription,
//   FieldError,
//   FieldInput,
//   FieldLabel,
//   FieldRequiredIndicator,
//   FieldRootProvider,
//   useField,
// } from "@/components/ui/field";
// import {
//   Fieldset,
//   FieldsetDescription,
//   FieldsetError,
//   FieldsetLegend,
//   FieldsetRootProvider,
//   useFieldset,
// } from "@/components/ui/fieldset";
// import {
//   FileUpload,
//   FileUploadClearTrigger,
//   FileUploadContext,
//   FileUploadDropzone,
//   FileUploadItem,
//   FileUploadItemDeleteTrigger,
//   FileUploadItemGroup,
//   FileUploadItemName,
//   FileUploadItemPreview,
//   FileUploadItemPreviewImage,
//   FileUploadItemSizeText,
//   FileUploadLabel,
//   FileUploadRootProvider,
//   FileUploadTrigger,
//   useFileUpload,
// } from "@/components/ui/file-upload";
// import {
//   FloatingPanel,
//   FloatingPanelBody,
//   FloatingPanelCloseTrigger,
//   FloatingPanelContext,
//   FloatingPanelControl,
//   FloatingPanelDragTrigger,
//   FloatingPanelHeader,
//   FloatingPanelPopup,
//   type FloatingPanelProps,
//   FloatingPanelStageTrigger,
//   FloatingPanelTitle,
//   FloatingPanelTrigger,
// } from "@/components/ui/floating-panel";
// import {
//   HoverCard,
//   HoverCardContext,
//   HoverCardPopup,
//   HoverCardRootProvider,
//   HoverCardTrigger,
//   useHoverCard,
//   useHoverCardContext,
// } from "@/components/ui/hover-card";
// import {
//   ImageCropper,
//   ImageCropperGrid,
//   ImageCropperHandle,
//   ImageCropperImage,
//   ImageCropperRootProvider,
//   ImageCropperSelection,
//   ImageCropperViewport,
//   imageCropperHandles,
//   useImageCropper,
// } from "@/components/ui/image-cropper";
// import { Input } from "@/components/ui/input";
// import {
//   InputGroup,
//   InputGroupAddon,
//   InputGroupInput,
// } from "@/components/ui/input-group";
// import {
//   createGridCollection,
//   createListCollection,
//   Listbox,
//   ListboxContent,
//   ListboxContext,
//   ListboxEmpty,
//   ListboxInput,
//   ListboxItem,
//   ListboxItemGroup,
//   ListboxItemGroupLabel,
//   ListboxItemIndicator,
//   ListboxItemText,
//   ListboxLabel,
//   ListboxRootProvider,
//   ListboxValueText,
//   useListbox,
//   useListCollection,
// } from "@/components/ui/listbox";
// import {
//   Marquee,
//   MarqueeContent,
//   MarqueeContext,
//   MarqueeEdge,
//   MarqueeItem,
//   MarqueeRootProvider,
//   MarqueeViewport,
//   useMarquee,
// } from "@/components/ui/marquee";
// import {
//   Menu,
//   MenuCheckboxItem,
//   MenuContext,
//   MenuContextTrigger,
//   MenuIndicator,
//   MenuItem,
//   MenuItemContext,
//   MenuItemGroup,
//   MenuItemGroupLabel,
//   MenuItemIndicator,
//   MenuItemText,
//   MenuPopup,
//   MenuRadioItem,
//   MenuRadioItemGroup,
//   MenuRootProvider,
//   MenuSeparator,
//   MenuTrigger,
//   MenuTriggerItem,
//   useMenu,
// } from "@/components/ui/menu";
// import {
//   NumberInput,
//   NumberInputContext,
//   NumberInputControl,
//   NumberInputDecrementTrigger,
//   NumberInputIncrementTrigger,
//   NumberInputLabel,
//   NumberInputRoot,
//   NumberInputRootProvider,
//   NumberInputScrubber,
//   NumberInputValueText,
//   useNumberInput,
// } from "@/components/ui/number-input";
// import {
//   Pagination,
//   PaginationContext,
//   PaginationFirstTrigger,
//   PaginationItems,
//   PaginationLastTrigger,
//   PaginationNextTrigger,
//   PaginationPrevTrigger,
//   PaginationRootProvider,
//   usePagination,
// } from "@/components/ui/pagination";
// import { Textarea } from "@/components/ui/textarea";
// import { ZoomImage } from "@/components/ui/zoom-image";
// import { cn } from "@/lib/utils";

// const PRESET_SWATCHES = ["red", "blue", "green", "orange"] as const;

// const COMBOBOX_FRUITS = [
//   { label: "Apple", value: "apple" },
//   { label: "Banana", value: "banana" },
//   { label: "Orange", value: "orange" },
//   { label: "Grape", value: "grape" },
//   { label: "Strawberry", value: "strawberry" },
//   { label: "Mango", value: "mango" },
//   { label: "Pineapple", value: "pineapple" },
//   { label: "Kiwi", value: "kiwi" },
//   { label: "Peach", value: "peach" },
//   { label: "Pear", value: "pear" },
// ] as const;

// const LISTBOX_ECOSYSTEM = [
//   { ecosystem: "UI", label: "React", value: "react" },
//   { ecosystem: "UI", label: "Vue", value: "vue" },
//   { ecosystem: "UI", label: "Svelte", value: "svelte" },
//   { ecosystem: "Runtime", label: "Node.js", value: "node" },
// ] as const;

// const LISTBOX_GRID_CELLS = Array.from({ length: 9 }, (_, i) => ({
//   label: `Cell ${i + 1}`,
//   value: `c${i + 1}`,
// }));

// const MARQUEE_FRUITS = [
//   { name: "Apple", logo: "🍎" },
//   { name: "Banana", logo: "🍌" },
//   { name: "Cherry", logo: "🍒" },
//   { name: "Grape", logo: "🍇" },
//   { name: "Watermelon", logo: "🍉" },
//   { name: "Strawberry", logo: "🍓" },
// ] as const;

// const MARQUEE_FRUITS_SHORT = [
//   { name: "Apple", logo: "🍎" },
//   { name: "Banana", logo: "🍌" },
//   { name: "Cherry", logo: "🍒" },
// ] as const;

// type ComboTag = {
//   label: string;
//   value: string;
//   group: "Status" | "Priority" | "Team";
// };

// const COMBOBOX_TAGS: ComboTag[] = [
//   { group: "Status", value: "s-open", label: "Open" },
//   { group: "Status", value: "s-progress", label: "In progress" },
//   { group: "Status", value: "s-done", label: "Done" },
//   { group: "Priority", value: "p-low", label: "Low" },
//   { group: "Priority", value: "p-high", label: "High" },
//   { group: "Team", value: "t-fe", label: "Frontend" },
//   { group: "Team", value: "t-be", label: "Backend" },
// ];

// type CommandPaletteItem = {
//   label: string;
//   value: string;
//   shortcut?: string;
//   group: "Suggestions" | "Commands";
// };

// const COMMAND_STANDALONE_ITEMS = [
//   { label: "Profile", value: "profile" },
//   { label: "Settings", value: "settings" },
//   { label: "Billing", value: "billing" },
//   { label: "Log out", value: "logout" },
// ] as const;

// const COMMAND_PALETTE_ITEMS: CommandPaletteItem[] = [
//   { group: "Suggestions", label: "Linear", shortcut: "⌘L", value: "linear" },
//   { group: "Suggestions", label: "Figma", shortcut: "⌘F", value: "figma" },
//   { group: "Suggestions", label: "Slack", shortcut: "⌘S", value: "slack" },
//   {
//     group: "Commands",
//     label: "Clipboard history",
//     shortcut: "⌘⇧C",
//     value: "clipboard",
//   },
//   {
//     group: "Commands",
//     label: "Create snippet",
//     shortcut: "⌘N",
//     value: "snippet",
//   },
//   {
//     group: "Commands",
//     label: "System preferences",
//     shortcut: "⌘,",
//     value: "prefs",
//   },
// ];

// const defaultParsed = () => parseColor("#eb5e41");

// const DemoCard = ({
//   title,
//   description,
//   className,
//   children,
// }: {
//   title: string;
//   description?: string;
//   className?: string;
//   children: React.ReactNode;
// }) => (
//   <section
//     className={cn(
//       "flex flex-col gap-3 rounded-xl border border-border bg-card p-4 shadow-xs/5",
//       className,
//     )}
//   >
//     <div>
//       <h3 className="font-semibold text-foreground text-sm">{title}</h3>
//       {description ? (
//         <p className="mt-0.5 text-muted-foreground text-xs">{description}</p>
//       ) : null}
//     </div>
//     {children}
//   </section>
// );

// const CommandPaletteDemo = () => {
//   const [open, setOpen] = useState(false);
//   const [resetKey, setResetKey] = useState(0);

//   useEffect(() => {
//     const down = (e: KeyboardEvent) => {
//       if (e.key === "j" && (e.metaKey || e.ctrlKey)) {
//         e.preventDefault();
//         setOpen((o) => !o);
//       }
//     };
//     document.addEventListener("keydown", down);
//     return () => document.removeEventListener("keydown", down);
//   }, []);

//   return (
//     <CommandDialog
//       onOpenChange={(d) => {
//         setOpen(d.open);
//         if (d.open) setResetKey((k) => k + 1);
//       }}
//       open={open}
//     >
//       <CommandDialogTrigger asChild>
//         <Button variant="outline">
//           Open command palette
//           <span className="ms-1 hidden text-muted-foreground text-xs sm:inline">
//             ⌘J
//           </span>
//         </Button>
//       </CommandDialogTrigger>
//       <CommandDialogPopup aria-label="Command palette">
//         <Command
//           key={resetKey}
//           groupBy={(item) => item.group}
//           groupSort={["Suggestions", "Commands"]}
//           items={COMMAND_PALETTE_ITEMS}
//           open={open}
//           onOpenChange={(d) => {
//             if (!d.open) setOpen(false);
//           }}
//           onValueChange={() => {
//             setOpen(false);
//           }}
//         >
//           <CommandInput placeholder="Search for apps and commands…" />
//           <CommandPopup>
//             <CommandEmpty>No results found.</CommandEmpty>
//             <CommandGroupedList items={COMMAND_PALETTE_ITEMS}>
//               {([group, groupItems]) => (
//                 <Fragment key={group}>
//                   <CommandGroup>
//                     <CommandGroupLabel>{group}</CommandGroupLabel>
//                     {groupItems.map((item) => (
//                       <CommandItem key={item.value} item={item}>
//                         <CommandItemText>{item.label}</CommandItemText>
//                         {item.shortcut ? (
//                           <CommandShortcut>{item.shortcut}</CommandShortcut>
//                         ) : null}
//                       </CommandItem>
//                     ))}
//                   </CommandGroup>
//                   {group !== "Commands" ? <CommandSeparator /> : null}
//                 </Fragment>
//               )}
//             </CommandGroupedList>
//           </CommandPopup>
//           <CommandFooter>
//             <div className="flex flex-wrap items-center gap-4">
//               <div className="flex items-center gap-1.5">
//                 <kbd className="pointer-events-none inline-flex h-5 items-center justify-center rounded border border-border bg-muted px-1 font-medium font-mono text-muted-foreground text-xs shadow-xs">
//                   <ArrowUpIcon className="size-2.5 opacity-80" />
//                 </kbd>
//                 <kbd className="pointer-events-none inline-flex h-5 items-center justify-center rounded border border-border bg-muted px-1 font-medium font-mono text-muted-foreground text-xs shadow-xs">
//                   <ArrowDownIcon className="size-2.5 opacity-80" />
//                 </kbd>
//                 <span>Navigate</span>
//               </div>
//               <div className="flex items-center gap-1.5">
//                 <kbd className="pointer-events-none inline-flex h-5 min-w-5 items-center justify-center rounded border border-border bg-muted px-1 font-medium font-mono text-muted-foreground text-xs shadow-xs">
//                   <CornerDownLeftIcon className="size-2.5 opacity-80" />
//                 </kbd>
//                 <span>Open</span>
//               </div>
//             </div>
//             <div className="flex items-center gap-1.5">
//               <kbd className="pointer-events-none inline-flex h-5 min-w-5 items-center justify-center rounded border border-border bg-muted px-1.5 font-medium font-mono text-muted-foreground text-xs shadow-xs">
//                 Esc
//               </kbd>
//               <span>Close</span>
//             </div>
//           </CommandFooter>
//         </Command>
//       </CommandDialogPopup>
//     </CommandDialog>
//   );
// };

// const CommandStandaloneDemo = () => (
//   <CommandPanel className="max-w-md">
//     <Command autoFocus={false} items={[...COMMAND_STANDALONE_ITEMS]} open>
//       <CommandInput placeholder="Type a command…" />
//       <CommandPopup>
//         <CommandEmpty>No results found.</CommandEmpty>
//         <CommandList items={[...COMMAND_STANDALONE_ITEMS]}>
//           {(item) => (
//             <CommandItem key={item.value} item={item}>
//               <CommandItemText>{item.label}</CommandItemText>
//             </CommandItem>
//           )}
//         </CommandList>
//       </CommandPopup>
//     </Command>
//   </CommandPanel>
// );

// const DialogBasicDemo = () => (
//   <Dialog>
//     <DialogTrigger asChild>
//       <Button size="sm" variant="outline">
//         Open dialog
//       </Button>
//     </DialogTrigger>
//     <DialogPopup className="sm:max-w-sm">
//       <DialogHeader>
//         <DialogTitle>Edit profile</DialogTitle>
//         <DialogDescription>
//           Make changes here. Save when you are done.
//         </DialogDescription>
//       </DialogHeader>
//       <DialogPanel>
//         <Input defaultValue="Jane Doe" aria-label="Name" />
//       </DialogPanel>
//       <DialogFooter>
//         <DialogClose asChild>
//           <Button size="sm" variant="ghost">
//             Cancel
//           </Button>
//         </DialogClose>
//         <Button size="sm" type="button">
//           Save
//         </Button>
//       </DialogFooter>
//     </DialogPopup>
//   </Dialog>
// );

// const DialogNestedDemo = () => {
//   const parentDialog = useDialog();
//   const childDialog = useDialog();

//   return (
//     <>
//       <Button
//         size="sm"
//         type="button"
//         variant="outline"
//         onClick={() => parentDialog.setOpen(true)}
//       >
//         Open parent
//       </Button>

//       <DialogRootProvider value={parentDialog}>
//         <DialogPopup className="sm:max-w-md" showCloseButton={false}>
//           <DialogHeader>
//             <DialogTitle>Manage team member</DialogTitle>
//             <DialogDescription>
//               Two sibling{" "}
//               <code className="rounded bg-muted px-1 py-px text-xs">
//                 DialogRootProvider
//               </code>{" "}
//               trees with{" "}
//               <code className="rounded bg-muted px-1 py-px text-xs">
//                 useDialog
//               </code>
//               . When the child is open, the parent panel gets{" "}
//               <code className="rounded bg-muted px-1 py-px text-xs">
//                 data-has-nested
//               </code>{" "}
//               and scales down.
//             </DialogDescription>
//           </DialogHeader>
//           <DialogPanel className="grid gap-4">
//             <div className="grid gap-1">
//               <p className="text-muted-foreground text-sm">Name</p>
//               <p className="font-medium text-sm">Bora Baloglu</p>
//             </div>
//             <div className="grid gap-1">
//               <p className="text-muted-foreground text-sm">Email</p>
//               <p className="font-medium text-sm">bora@example.com</p>
//             </div>
//           </DialogPanel>
//           <DialogFooter>
//             <Button
//               size="sm"
//               type="button"
//               variant="outline"
//               onClick={() => childDialog.setOpen(true)}
//             >
//               Edit details
//             </Button>
//           </DialogFooter>
//         </DialogPopup>
//       </DialogRootProvider>

//       <DialogRootProvider value={childDialog}>
//         <DialogPopup className="sm:max-w-sm" showCloseButton={false}>
//           <DialogHeader>
//             <DialogTitle>Edit details</DialogTitle>
//             <DialogDescription>
//               Update member information below.
//             </DialogDescription>
//           </DialogHeader>
//           <DialogPanel className="grid gap-4">
//             <Input defaultValue="Bora Baloglu" aria-label="Name" />
//             <Input
//               defaultValue="bora@example.com"
//               aria-label="Email"
//               type="email"
//             />
//           </DialogPanel>
//           <DialogFooter>
//             <DialogClose asChild>
//               <Button size="sm" type="button" variant="ghost">
//                 Cancel
//               </Button>
//             </DialogClose>
//             <Button size="sm" type="button">
//               Save changes
//             </Button>
//           </DialogFooter>
//         </DialogPopup>
//       </DialogRootProvider>
//     </>
//   );
// };

// const MenuBasicDemo = () => {
//   const [last, setLast] = useState<string | null>(null);
//   return (
//     <div className="flex flex-col gap-2">
//       <output className="text-muted-foreground text-xs">
//         Last: {last ?? "—"}
//       </output>
//       <Menu
//         onSelect={(d) => {
//           setLast(d.value);
//         }}
//       >
//         <MenuTrigger asChild>
//           <Button size="sm" type="button" variant="outline">
//             Open menu
//           </Button>
//         </MenuTrigger>
//         <MenuPopup>
//           <MenuItem value="new">
//             <MenuItemText>New file</MenuItemText>
//           </MenuItem>
//           <MenuItem value="copy">
//             <MenuItemText>Copy</MenuItemText>
//           </MenuItem>
//           <MenuItem value="paste">
//             <MenuItemText>Paste</MenuItemText>
//           </MenuItem>
//         </MenuPopup>
//       </Menu>
//     </div>
//   );
// };

// const MenuRootProviderDemo = () => {
//   const menu = useMenu({ defaultOpen: false });
//   return (
//     <div className="flex flex-col gap-2">
//       <output className="text-muted-foreground text-xs">
//         Open: {String(menu.api.open)}
//       </output>
//       <MenuRootProvider value={menu}>
//         <MenuTrigger asChild>
//           <Button size="sm" type="button" variant="outline">
//             useMenu + RootProvider
//           </Button>
//         </MenuTrigger>
//         <MenuPopup>
//           <MenuItem value="a">
//             <MenuItemText>Option A</MenuItemText>
//           </MenuItem>
//           <MenuItem value="b">
//             <MenuItemText>Option B</MenuItemText>
//           </MenuItem>
//         </MenuPopup>
//       </MenuRootProvider>
//     </div>
//   );
// };

// const MenuGroupingDemo = () => (
//   <Menu>
//     <MenuTrigger asChild>
//       <Button size="sm" type="button" variant="outline">
//         Grouped items
//       </Button>
//     </MenuTrigger>
//     <MenuPopup>
//       <MenuItemGroup>
//         <MenuItemGroupLabel>Account</MenuItemGroupLabel>
//         <MenuItem value="profile">
//           <MenuItemText>Profile</MenuItemText>
//         </MenuItem>
//         <MenuItem value="billing">
//           <MenuItemText>Billing</MenuItemText>
//         </MenuItem>
//       </MenuItemGroup>
//       <MenuSeparator />
//       <MenuItemGroup>
//         <MenuItemGroupLabel>Support</MenuItemGroupLabel>
//         <MenuItem value="docs">
//           <MenuItemText>Docs</MenuItemText>
//         </MenuItem>
//         <MenuItem value="contact">
//           <MenuItemText>Contact</MenuItemText>
//         </MenuItem>
//       </MenuItemGroup>
//     </MenuPopup>
//   </Menu>
// );

// const MenuLinksDemo = () => (
//   <Menu>
//     <MenuTrigger asChild>
//       <Button size="sm" type="button" variant="outline">
//         Links
//       </Button>
//     </MenuTrigger>
//     <MenuPopup>
//       <MenuItem asChild value="docs">
//         <a href="#menu-docs">Documentation</a>
//       </MenuItem>
//       <MenuItem asChild value="repo">
//         <a href="#menu-repo" rel="noreferrer" target="_blank">
//           Repository
//         </a>
//       </MenuItem>
//     </MenuPopup>
//   </Menu>
// );

// const MenuCheckboxDemo = () => {
//   const [showToolbar, setShowToolbar] = useState(true);
//   const [showStatusBar, setShowStatusBar] = useState(false);
//   return (
//     <Menu>
//       <MenuTrigger asChild>
//         <Button size="sm" type="button" variant="outline">
//           Checkboxes
//         </Button>
//       </MenuTrigger>
//       <MenuPopup>
//         <MenuCheckboxItem
//           checked={showToolbar}
//           onCheckedChange={setShowToolbar}
//           value="autosave"
//         >
//           <MenuItemText>Auto save</MenuItemText>
//           <MenuItemIndicator>
//             <CheckIcon aria-hidden className="size-4" />
//           </MenuItemIndicator>
//         </MenuCheckboxItem>
//         <MenuCheckboxItem
//           checked={showStatusBar}
//           onCheckedChange={setShowStatusBar}
//           value="notify"
//         >
//           <MenuItemText>Notifications</MenuItemText>
//           <MenuItemIndicator>
//             <CheckIcon aria-hidden className="size-4" />
//           </MenuItemIndicator>
//         </MenuCheckboxItem>
//       </MenuPopup>
//     </Menu>
//   );
// };

// const MenuRadioDemo = () => {
//   const [sortBy, setSortBy] = useState("light");
//   return (
//     <Menu>
//       <MenuTrigger asChild>
//         <Button size="sm" type="button" variant="outline">
//           Theme
//         </Button>
//       </MenuTrigger>
//       <MenuPopup>
//         <MenuRadioItemGroup
//           defaultValue="system"
//           value={sortBy}
//           onValueChange={(e) => setSortBy(e.value)}
//         >
//           <MenuRadioItem value="light">
//             <MenuItemText>Light</MenuItemText>
//             <MenuItemIndicator>
//               <span className="block size-2 rounded-full bg-current" />
//             </MenuItemIndicator>
//           </MenuRadioItem>
//           <MenuRadioItem value="dark">
//             <MenuItemText>Dark</MenuItemText>
//             <MenuItemIndicator>
//               <span className="block size-2 rounded-full bg-current" />
//             </MenuItemIndicator>
//           </MenuRadioItem>
//           <MenuRadioItem value="system">
//             <MenuItemText>System</MenuItemText>
//             <MenuItemIndicator>
//               <span className="block size-2 rounded-full bg-current" />
//             </MenuItemIndicator>
//           </MenuRadioItem>
//         </MenuRadioItemGroup>
//       </MenuPopup>
//     </Menu>
//   );
// };

// const MenuContextMenuDemo = () => (
//   <Menu>
//     <MenuContextTrigger className="w-full max-w-xs rounded-lg border border-dashed border-border p-6 text-center text-muted-foreground text-sm">
//       Right-click or long-press here
//     </MenuContextTrigger>
//     <MenuPopup>
//       <MenuItem value="back">
//         <MenuItemText>Back</MenuItemText>
//       </MenuItem>
//       <MenuItem value="forward">
//         <MenuItemText>Forward</MenuItemText>
//       </MenuItem>
//       <MenuSeparator />
//       <MenuItem value="reload">
//         <MenuItemText>Reload</MenuItemText>
//       </MenuItem>
//     </MenuPopup>
//   </Menu>
// );

// const MenuNestedDemo = () => (
//   <Menu>
//     <MenuTrigger asChild>
//       <Button size="sm" type="button" variant="outline">
//         Nested
//       </Button>
//     </MenuTrigger>
//     <MenuPopup>
//       <MenuItem value="one">
//         <MenuItemText>Item one</MenuItemText>
//       </MenuItem>
//       <Menu>
//         <MenuTriggerItem>
//           <MenuItemText>More</MenuItemText>
//           <ChevronRightIcon
//             aria-hidden
//             className="size-4 shrink-0 opacity-60"
//           />
//         </MenuTriggerItem>
//         <MenuPopup>
//           <MenuItem value="sub-a">
//             <MenuItemText>Sub item A</MenuItemText>
//           </MenuItem>
//           <MenuItem value="sub-b">
//             <MenuItemText>Sub item B</MenuItemText>
//           </MenuItem>
//         </MenuPopup>
//       </Menu>
//       <MenuItem value="two">
//         <MenuItemText>Item two</MenuItemText>
//       </MenuItem>
//     </MenuPopup>
//   </Menu>
// );

// const MenuInDialogDemo = () => (
//   <Dialog>
//     <DialogTrigger asChild>
//       <Button size="sm" type="button" variant="outline">
//         Open dialog with menu
//       </Button>
//     </DialogTrigger>
//     <DialogPopup className="sm:max-w-md">
//       <DialogHeader>
//         <DialogTitle>Menu inside dialog</DialogTitle>
//         <DialogDescription>
//           Menu uses lazyMount and unmountOnExit so layers clean up when the
//           dialog closes (Ark pattern).
//         </DialogDescription>
//       </DialogHeader>
//       <DialogPanel className="flex justify-start">
//         <Menu lazyMount unmountOnExit>
//           <MenuTrigger asChild>
//             <Button size="sm" type="button" variant="outline">
//               Actions
//             </Button>
//           </MenuTrigger>
//           <MenuPopup>
//             <MenuItem value="edit">
//               <MenuItemText>Edit</MenuItemText>
//             </MenuItem>
//             <MenuItem value="duplicate">
//               <MenuItemText>Duplicate</MenuItemText>
//             </MenuItem>
//             <MenuSeparator />
//             <MenuItem value="delete">
//               <MenuItemText>Delete</MenuItemText>
//             </MenuItem>
//           </MenuPopup>
//         </Menu>
//       </DialogPanel>
//       <DialogFooter>
//         <DialogClose asChild>
//           <Button size="sm" type="button" variant="ghost">
//             Close
//           </Button>
//         </DialogClose>
//       </DialogFooter>
//     </DialogPopup>
//   </Dialog>
// );

// const MenuItemDialogDemo = () => {
//   const [confirmOpen, setConfirmOpen] = useState(false);
//   return (
//     <>
//       <Menu>
//         <MenuTrigger asChild>
//           <Button size="sm" type="button" variant="outline">
//             Danger menu
//           </Button>
//         </MenuTrigger>
//         <MenuPopup>
//           <MenuItem value="rename">
//             <MenuItemText>Rename</MenuItemText>
//           </MenuItem>
//           <MenuItem
//             closeOnSelect={false}
//             value="delete"
//             onSelect={() => setConfirmOpen(true)}
//           >
//             <MenuItemText>Delete…</MenuItemText>
//           </MenuItem>
//         </MenuPopup>
//       </Menu>
//       <Dialog onOpenChange={(e) => setConfirmOpen(e.open)} open={confirmOpen}>
//         <DialogPopup className="sm:max-w-sm">
//           <DialogHeader>
//             <DialogTitle>Delete item?</DialogTitle>
//             <DialogDescription>This cannot be undone.</DialogDescription>
//           </DialogHeader>
//           <DialogFooter>
//             <DialogClose asChild>
//               <Button size="sm" type="button" variant="ghost">
//                 Cancel
//               </Button>
//             </DialogClose>
//             <Button
//               size="sm"
//               type="button"
//               variant="destructive"
//               onClick={() => setConfirmOpen(false)}
//             >
//               Delete
//             </Button>
//           </DialogFooter>
//         </DialogPopup>
//       </Dialog>
//     </>
//   );
// };

// const MenuControlledDemo = () => {
//   const [open, setOpen] = useState(false);
//   return (
//     <div className="flex flex-col gap-2">
//       <Button
//         size="sm"
//         type="button"
//         variant="secondary"
//         onClick={() => setOpen((o) => !o)}
//       >
//         Toggle menu
//       </Button>
//       <Menu onOpenChange={(d) => setOpen(d.open)} open={open}>
//         <MenuTrigger asChild>
//           <Button size="sm" type="button" variant="outline">
//             Controlled
//           </Button>
//         </MenuTrigger>
//         <MenuPopup>
//           <MenuItem value="x">
//             <MenuItemText>Close from item</MenuItemText>
//           </MenuItem>
//         </MenuPopup>
//       </Menu>
//     </div>
//   );
// };

// const MenuContextHookDemo = () => (
//   <Menu>
//     <MenuTrigger asChild>
//       <Button size="sm" type="button" variant="outline">
//         useMenuContext
//       </Button>
//     </MenuTrigger>
//     <MenuPopup>
//       <MenuContext>
//         {(ctx) => (
//           <div className="border-border border-b px-2 py-1.5 text-muted-foreground text-xs">
//             open: {String(ctx.open)}
//           </div>
//         )}
//       </MenuContext>
//       <MenuItem value="item-1">
//         <MenuItemText>Item 1</MenuItemText>
//       </MenuItem>
//       <MenuItem value="item-2">
//         <MenuItemText>Item 2</MenuItemText>
//       </MenuItem>
//     </MenuPopup>
//   </Menu>
// );

// const MenuPositioningDemo = () => (
//   <Menu positioning={{ placement: "right-start", gutter: 8 }}>
//     <MenuTrigger asChild>
//       <Button size="sm" type="button" variant="outline">
//         Opens to the right
//       </Button>
//     </MenuTrigger>
//     <MenuPopup>
//       <MenuItem value="p1">
//         <MenuItemText>One</MenuItemText>
//       </MenuItem>
//       <MenuItem value="p2">
//         <MenuItemText>Two</MenuItemText>
//       </MenuItem>
//     </MenuPopup>
//   </Menu>
// );

// const MenuTriggerIndicatorDemo = () => (
//   <Menu>
//     <MenuTrigger asChild>
//       <Button size="sm" type="button" variant="outline">
//         Options
//         <MenuIndicator>
//           <ChevronDownIcon aria-hidden className="size-4 opacity-70" />
//         </MenuIndicator>
//       </Button>
//     </MenuTrigger>
//     <MenuPopup>
//       <MenuItem value="alpha">
//         <MenuItemText>Alpha</MenuItemText>
//       </MenuItem>
//       <MenuItem value="beta">
//         <MenuItemText>Beta</MenuItemText>
//       </MenuItem>
//     </MenuPopup>
//   </Menu>
// );

// const MenuCloseOnSelectDemo = () => (
//   <Menu closeOnSelect>
//     <MenuTrigger asChild>
//       <Button size="sm" type="button" variant="outline">
//         closeOnSelect (default)
//       </Button>
//     </MenuTrigger>
//     <MenuPopup>
//       <MenuItem value="a">
//         <MenuItemText>Closes menu</MenuItemText>
//       </MenuItem>
//       <MenuItem closeOnSelect={false} value="b">
//         <MenuItemText>Stays open</MenuItemText>
//       </MenuItem>
//     </MenuPopup>
//   </Menu>
// );

// const MENU_MESSAGE_ROWS = [
//   {
//     id: "1",
//     preview: "Hey, can you review the latest PR?",
//     sender: "Alice Johnson",
//   },
//   {
//     id: "2",
//     preview: "Meeting notes from today are attached.",
//     sender: "Bob Smith",
//   },
//   {
//     id: "3",
//     preview: "The deploy finished successfully!",
//     sender: "Carol Davis",
//   },
// ] as const;

// const MenuMultipleTriggersDemo = () => (
//   <Menu positioning={{ placement: "right-start" }}>
//     <div className="flex w-full max-w-md flex-col gap-1">
//       {MENU_MESSAGE_ROWS.map((msg) => (
//         <div
//           className="flex items-center gap-3 rounded-lg border border-border px-3 py-2"
//           key={msg.id}
//         >
//           <div className="min-w-0 flex-1">
//             <p className="font-semibold text-foreground text-xs">
//               {msg.sender}
//             </p>
//             <p className="truncate text-muted-foreground text-xs">
//               {msg.preview}
//             </p>
//           </div>
//           <MenuTrigger
//             aria-label="Message actions"
//             className="inline-flex size-7 shrink-0 items-center justify-center rounded-md text-muted-foreground hover:bg-accent hover:text-foreground"
//             type="button"
//             value={msg.id}
//           >
//             <EllipsisVerticalIcon className="size-4" />
//           </MenuTrigger>
//         </div>
//       ))}
//     </div>
//     <MenuPopup>
//       <MenuItem value="reply">
//         <MenuItemText>Reply</MenuItemText>
//       </MenuItem>
//       <MenuItem value="forward">
//         <MenuItemText>Forward</MenuItemText>
//       </MenuItem>
//       <MenuItem value="archive">
//         <MenuItemText>Archive</MenuItemText>
//       </MenuItem>
//       <MenuSeparator />
//       <MenuItem value="delete">
//         <MenuItemText>Delete</MenuItemText>
//       </MenuItem>
//     </MenuPopup>
//   </Menu>
// );

// const FILE_MENU_ITEMS = [
//   { label: "New File", value: "new" },
//   { label: "Open…", value: "open" },
//   { label: "Save", value: "save" },
// ] as const;

// const EDIT_MENU_ITEMS = [
//   { label: "Undo", value: "undo" },
//   { label: "Redo", value: "redo" },
//   { label: "Cut", value: "cut" },
//   { label: "Copy", value: "copy" },
// ] as const;

// const MenuMultipleMenusDemo = () => (
//   <div className="flex flex-wrap gap-2">
//     <Menu id="showcase-file">
//       <MenuTrigger asChild>
//         <Button size="sm" type="button" variant="outline">
//           File
//           <MenuIndicator>
//             <ChevronDownIcon aria-hidden className="size-4 opacity-70" />
//           </MenuIndicator>
//         </Button>
//       </MenuTrigger>
//       <MenuPopup>
//         {FILE_MENU_ITEMS.map((item) => (
//           <MenuItem key={item.value} value={item.value}>
//             <MenuItemText>{item.label}</MenuItemText>
//           </MenuItem>
//         ))}
//       </MenuPopup>
//     </Menu>
//     <Menu id="showcase-edit">
//       <MenuTrigger asChild>
//         <Button size="sm" type="button" variant="outline">
//           Edit
//           <MenuIndicator>
//             <ChevronDownIcon aria-hidden className="size-4 opacity-70" />
//           </MenuIndicator>
//         </Button>
//       </MenuTrigger>
//       <MenuPopup>
//         {EDIT_MENU_ITEMS.map((item) => (
//           <MenuItem key={item.value} value={item.value}>
//             <MenuItemText>{item.label}</MenuItemText>
//           </MenuItem>
//         ))}
//       </MenuPopup>
//     </Menu>
//   </div>
// );

// const MenuContextLazyMountDemo = () => (
//   <Menu lazyMount unmountOnExit>
//     <MenuContextTrigger className="flex h-40 w-full max-w-xs items-center justify-center rounded-lg border border-dashed border-border text-muted-foreground text-sm">
//       Right-click here
//     </MenuContextTrigger>
//     <MenuPopup>
//       <MenuItem value="cut">
//         <MenuItemText>Cut</MenuItemText>
//       </MenuItem>
//       <MenuItem value="copy">
//         <MenuItemText>Copy</MenuItemText>
//       </MenuItem>
//       <MenuItem value="paste">
//         <MenuItemText>Paste</MenuItemText>
//       </MenuItem>
//       <MenuSeparator />
//       <Menu lazyMount unmountOnExit>
//         <MenuTriggerItem>
//           <MenuItemText>Share</MenuItemText>
//           <ChevronRightIcon aria-hidden className="size-4 opacity-60" />
//         </MenuTriggerItem>
//         <MenuPopup>
//           <MenuItem value="email">
//             <MenuItemText>Email</MenuItemText>
//           </MenuItem>
//           <MenuItem value="message">
//             <MenuItemText>Message</MenuItemText>
//           </MenuItem>
//           <MenuItem value="airdrop">
//             <MenuItemText>AirDrop</MenuItemText>
//           </MenuItem>
//         </MenuPopup>
//       </Menu>
//     </MenuPopup>
//   </Menu>
// );

// const MenuItemContextRowDemo = () => (
//   <Menu>
//     <MenuTrigger asChild>
//       <Button size="sm" type="button" variant="outline">
//         Settings
//         <MenuIndicator>
//           <ChevronDownIcon aria-hidden className="size-4 opacity-70" />
//         </MenuIndicator>
//       </Button>
//     </MenuTrigger>
//     <MenuPopup>
//       <MenuItem value="profile">
//         <MenuItemContext>
//           {(item) => (
//             <span
//               className={
//                 item.highlighted ? "text-foreground" : "text-muted-foreground"
//               }
//             >
//               Profile Settings
//             </span>
//           )}
//         </MenuItemContext>
//       </MenuItem>
//       <MenuItem value="preferences">
//         <MenuItemText>Preferences</MenuItemText>
//       </MenuItem>
//       <MenuItem value="notifications">
//         <MenuItemText>Notifications</MenuItemText>
//       </MenuItem>
//       <MenuSeparator />
//       <MenuItem value="logout">
//         <MenuItemText>Log out</MenuItemText>
//       </MenuItem>
//     </MenuPopup>
//   </Menu>
// );

// const ACCOUNT_MENU_ITEMS = [
//   { label: "My Profile", value: "profile" },
//   { label: "Settings", value: "settings" },
//   { label: "Billing", value: "billing" },
//   { label: "Log out", value: "logout" },
// ] as const;

// const MenuSelectEventDemo = () => {
//   const [lines, setLines] = useState<string[]>([]);
//   return (
//     <div className="flex flex-col gap-2">
//       <output className="min-h-10 whitespace-pre-wrap text-muted-foreground text-xs">
//         {lines.length ? lines.join("\n") : "Pick an item…"}
//       </output>
//       <Menu
//         onSelect={(e) => {
//           setLines((prev) =>
//             [`root onSelect: ${e.value}`, ...prev].slice(0, 5),
//           );
//         }}
//       >
//         <MenuTrigger asChild>
//           <Button size="sm" type="button" variant="outline">
//             Account
//             <MenuIndicator>
//               <ChevronDownIcon aria-hidden className="size-4 opacity-70" />
//             </MenuIndicator>
//           </Button>
//         </MenuTrigger>
//         <MenuPopup>
//           {ACCOUNT_MENU_ITEMS.map((item) => (
//             <MenuItem
//               key={item.value}
//               value={item.value}
//               onSelect={() => {
//                 setLines((prev) =>
//                   [`item onSelect: ${item.label}`, ...prev].slice(0, 5),
//                 );
//               }}
//             >
//               <MenuItemText>{item.label}</MenuItemText>
//             </MenuItem>
//           ))}
//         </MenuPopup>
//       </Menu>
//     </div>
//   );
// };

// /** Showcase-only: shared InputGroupInput styles for Ark NumberInput demos */
// const SHOWCASE_NI_INPUT_CLASS =
//   "order-2 min-h-8.5 border-0 bg-transparent px-3 text-base leading-8.5 shadow-none sm:min-h-7.5 sm:text-sm sm:leading-7.5";

// /** NumberInput.Input as InputGroupInput — use inside NiGroup */
// const NiGroupInput = ({
//   className,
//   ...props
// }: ComponentProps<typeof InputGroupInput>) => (
//   <NumberInput asChild>
//     <InputGroupInput
//       className={cn(SHOWCASE_NI_INPUT_CLASS, className)}
//       {...props}
//     />
//   </NumberInput>
// );

// /** NumberInputControl + InputGroup wrapper */
// const NiGroup = ({
//   children,
//   className: controlClassName,
//   groupClassName,
// }: {
//   children: ReactNode;
//   className?: string;
//   groupClassName?: string;
// }) => (
//   <NumberInputControl asChild className={controlClassName}>
//     <InputGroup className={groupClassName}>{children}</InputGroup>
//   </NumberInputControl>
// );

// const NumberInputDefaultDemo = () => (
//   <div className="w-full max-w-xs">
//     <NumberInputRoot defaultValue="1" invalid>
//       <NiGroup>
//         <InputGroupAddon align="inline-start">
//           <NumberInputDecrementTrigger asChild>
//             <Button size="icon-sm" type="button" variant="ghost">
//               <MinusIcon aria-hidden className="size-4" />
//             </Button>
//           </NumberInputDecrementTrigger>
//         </InputGroupAddon>
//         <NiGroupInput className="px-2 text-center" />
//         <InputGroupAddon align="inline-end">
//           <NumberInputIncrementTrigger asChild>
//             <Button size="icon-sm" type="button" variant="ghost">
//               <PlusIcon aria-hidden className="size-4" />
//             </Button>
//           </NumberInputIncrementTrigger>
//         </InputGroupAddon>
//       </NiGroup>
//     </NumberInputRoot>
//   </div>
// );

// const NumberInputStepperRightDemo = () => (
//   <div className="w-full max-w-xs">
//     <NumberInputRoot defaultValue="3">
//       <NiGroup>
//         <NiGroupInput />
//         <InputGroupAddon
//           align="inline-end"
//           className="flex-col gap-0 border-border border-s p-0"
//         >
//           <div className="flex flex-col divide-y divide-border">
//             <NumberInputIncrementTrigger asChild>
//               <Button
//                 className="size-4 w-6! shrink-0 rounded-none sm:size-4"
//                 size="icon-xs"
//                 type="button"
//                 variant="ghost"
//               >
//                 <ChevronUpIcon aria-hidden />
//               </Button>
//             </NumberInputIncrementTrigger>
//             <NumberInputDecrementTrigger asChild>
//               <Button
//                 className="size-4 w-6! shrink-0 rounded-none sm:size-4"
//                 size="icon-xs"
//                 type="button"
//                 variant="ghost"
//               >
//                 <ChevronDownIcon aria-hidden />
//               </Button>
//             </NumberInputDecrementTrigger>
//           </div>
//         </InputGroupAddon>
//       </NiGroup>
//     </NumberInputRoot>
//   </div>
// );

// const NumberInputExternalPlusDemo = () => (
//   <NumberInputRoot
//     className="flex w-full max-w-lg flex-row flex-wrap items-center gap-2"
//     defaultValue="0"
//   >
//     <NiGroup className="min-w-0 flex-1">
//       <InputGroupAddon align="inline-start">
//         <NumberInputDecrementTrigger asChild>
//           <Button size="icon-sm" type="button" variant="outline">
//             <MinusIcon aria-hidden className="size-4" />
//           </Button>
//         </NumberInputDecrementTrigger>
//       </InputGroupAddon>
//       <NiGroupInput />
//     </NiGroup>
//     <NumberInputContext>
//       {(ctx) => (
//         <Button
//           className="shrink-0"
//           size="sm"
//           type="button"
//           onClick={() => ctx.increment()}
//         >
//           <PlusIcon aria-hidden className="size-4" />
//           External +
//         </Button>
//       )}
//     </NumberInputContext>
//   </NumberInputRoot>
// );

// const NumberInputMinMaxDemo = () => (
//   <div className="w-full max-w-xs">
//     <NumberInputRoot defaultValue="5" max={10} min={0}>
//       <NiGroup>
//         <InputGroupAddon align="inline-start">
//           <NumberInputDecrementTrigger asChild>
//             <Button size="icon-sm" type="button" variant="outline">
//               <MinusIcon aria-hidden className="size-4" />
//             </Button>
//           </NumberInputDecrementTrigger>
//         </InputGroupAddon>
//         <NiGroupInput />
//         <InputGroupAddon align="inline-end">
//           <NumberInputIncrementTrigger asChild>
//             <Button size="icon-sm" type="button" variant="outline">
//               <PlusIcon aria-hidden className="size-4" />
//             </Button>
//           </NumberInputIncrementTrigger>
//         </InputGroupAddon>
//       </NiGroup>
//     </NumberInputRoot>
//     <p className="mt-2 text-muted-foreground text-xs">min 0, max 10</p>
//   </div>
// );

// const NumberInputPrecisionDemo = () => (
//   <div className="w-full max-w-xs">
//     <NumberInputRoot
//       defaultValue="1.234"
//       formatOptions={{
//         maximumFractionDigits: 2,
//         minimumFractionDigits: 2,
//       }}
//     >
//       <NiGroup>
//         <NiGroupInput />
//         <InputGroupAddon
//           align="inline-end"
//           className="flex flex-col divide-y divide-border p-0"
//         >
//           <NumberInputIncrementTrigger asChild>
//             <Button
//               className="size-8 shrink-0 rounded-none sm:size-7"
//               size="icon"
//               type="button"
//               variant="ghost"
//             >
//               <ChevronUpIcon aria-hidden className="size-3.5" />
//             </Button>
//           </NumberInputIncrementTrigger>
//           <NumberInputDecrementTrigger asChild>
//             <Button
//               className="size-8 shrink-0 rounded-none sm:size-7"
//               size="icon"
//               type="button"
//               variant="ghost"
//             >
//               <ChevronDownIcon aria-hidden className="size-3.5" />
//             </Button>
//           </NumberInputDecrementTrigger>
//         </InputGroupAddon>
//       </NiGroup>
//     </NumberInputRoot>
//   </div>
// );

// const NumberInputMouseWheelDemo = () => (
//   <div className="w-full max-w-xs">
//     <NumberInputRoot allowMouseWheel defaultValue="0">
//       <NiGroup>
//         <NiGroupInput />
//         <InputGroupAddon align="inline-end">
//           <NumberInputIncrementTrigger asChild>
//             <Button size="icon-sm" type="button" variant="outline">
//               <PlusIcon aria-hidden className="size-4" />
//             </Button>
//           </NumberInputIncrementTrigger>
//         </InputGroupAddon>
//       </NiGroup>
//     </NumberInputRoot>
//     <p className="mt-2 text-muted-foreground text-xs">
//       Hover and scroll the wheel
//     </p>
//   </div>
// );

// const NumberInputScrubberDemo = () => (
//   <div className="w-full max-w-sm">
//     <NumberInputRoot defaultValue="42">
//       <NumberInputLabel className="sr-only">Amount</NumberInputLabel>
//       <NumberInputScrubber asChild>
//         <button
//           className="mb-2 cursor-ew-resize rounded-md border border-dashed border-border px-2 py-1 text-muted-foreground text-xs"
//           type="button"
//         >
//           Scrub (drag horizontally)
//         </button>
//       </NumberInputScrubber>
//       <NiGroup>
//         <NiGroupInput />
//       </NiGroup>
//     </NumberInputRoot>
//   </div>
// );

// const NumberInputWithFieldDemo = () => (
//   <Field className="max-w-xs">
//     <FieldLabel>Units</FieldLabel>
//     <NumberInputRoot defaultValue="1">
//       <NiGroup>
//         <InputGroupAddon align="inline-start">
//           <NumberInputDecrementTrigger asChild>
//             <Button size="icon-sm" type="button" variant="ghost">
//               <MinusIcon aria-hidden className="size-4" />
//             </Button>
//           </NumberInputDecrementTrigger>
//         </InputGroupAddon>
//         <NiGroupInput />
//         <InputGroupAddon align="inline-end">
//           <NumberInputIncrementTrigger asChild>
//             <Button size="icon-sm" type="button" variant="ghost">
//               <PlusIcon aria-hidden className="size-4" />
//             </Button>
//           </NumberInputIncrementTrigger>
//         </InputGroupAddon>
//       </NiGroup>
//     </NumberInputRoot>
//     <FieldDescription>
//       Wrapped in Field for label and helper text.
//     </FieldDescription>
//   </Field>
// );

// const NumberInputRootProviderDemo = () => {
//   const numberInput = useNumberInput({ defaultValue: "7" });
//   return (
//     <div className="flex w-full max-w-md flex-col gap-2">
//       <output className="text-muted-foreground text-xs">
//         valueAsNumber: {numberInput.valueAsNumber}
//       </output>
//       <NumberInputRootProvider value={numberInput}>
//         <NiGroup>
//           <NiGroupInput />
//           <InputGroupAddon
//             align="inline-end"
//             className="flex flex-col divide-y divide-border p-0"
//           >
//             <NumberInputIncrementTrigger asChild>
//               <Button
//                 className="size-8 shrink-0 rounded-none sm:size-7"
//                 size="icon"
//                 type="button"
//                 variant="ghost"
//               >
//                 <ChevronUpIcon aria-hidden className="size-3.5" />
//               </Button>
//             </NumberInputIncrementTrigger>
//             <NumberInputDecrementTrigger asChild>
//               <Button
//                 className="size-8 shrink-0 rounded-none sm:size-7"
//                 size="icon"
//                 type="button"
//                 variant="ghost"
//               >
//                 <ChevronDownIcon aria-hidden className="size-3.5" />
//               </Button>
//             </NumberInputDecrementTrigger>
//           </InputGroupAddon>
//         </NiGroup>
//       </NumberInputRootProvider>
//     </div>
//   );
// };

// const NumberInputFormattingDemo = () => (
//   <div className="w-full max-w-xs">
//     <NumberInputRoot
//       defaultValue="1234.5"
//       formatOptions={{ currency: "USD", style: "currency" }}
//     >
//       <NiGroup>
//         <NiGroupInput />
//       </NiGroup>
//     </NumberInputRoot>
//   </div>
// );

// const NumberInputContextDemo = () => (
//   <div className="w-full max-w-xs">
//     <NumberInputRoot defaultValue="1">
//       <NumberInputContext>
//         {(ctx) => (
//           <p className="mb-2 text-muted-foreground text-xs">
//             value: {ctx.value} · valueAsNumber: {ctx.valueAsNumber}
//           </p>
//         )}
//       </NumberInputContext>
//       <NiGroup>
//         <NiGroupInput />
//       </NiGroup>
//     </NumberInputRoot>
//   </div>
// );

// const NumberInputValueTextDemo = () => (
//   <div className="w-full max-w-xs">
//     <NumberInputRoot defaultValue="99">
//       <div className="mb-2 flex items-baseline gap-2">
//         <span className="text-muted-foreground text-xs">Preview:</span>
//         <NumberInputValueText className="font-medium text-foreground text-sm" />
//       </div>
//       <NiGroup>
//         <NiGroupInput />
//       </NiGroup>
//     </NumberInputRoot>
//   </div>
// );

// const ListboxBasicDemo = () => {
//   const collection = useMemo(
//     () =>
//       createListCollection({
//         items: [
//           { label: "React", value: "react" },
//           { label: "Vue", value: "vue" },
//           { label: "Svelte", value: "svelte" },
//         ],
//       }),
//     [],
//   );
//   return (
//     <div className="w-full max-w-sm">
//       <Listbox collection={collection} defaultValue={["react"]}>
//         <ListboxLabel>Framework</ListboxLabel>
//         <ListboxContent>
//           {collection.items.map((item) => (
//             <ListboxItem key={item.value} item={item}>
//               <ListboxItemText>{item.label}</ListboxItemText>
//               <ListboxItemIndicator />
//             </ListboxItem>
//           ))}
//         </ListboxContent>
//       </Listbox>
//     </div>
//   );
// };

// const ListboxControlledDemo = () => {
//   const collection = useMemo(
//     () =>
//       createListCollection({
//         items: [
//           { label: "React", value: "react" },
//           { label: "Vue", value: "vue" },
//           { label: "Svelte", value: "svelte" },
//         ],
//       }),
//     [],
//   );
//   const [value, setValue] = useState<string[]>(["vue"]);
//   return (
//     <div className="w-full max-w-sm">
//       <Listbox
//         collection={collection}
//         onValueChange={(d) => setValue(d.value)}
//         value={value}
//       >
//         <ListboxLabel>Controlled</ListboxLabel>
//         <ListboxContent>
//           {collection.items.map((item) => (
//             <ListboxItem key={item.value} item={item}>
//               <ListboxItemText>{item.label}</ListboxItemText>
//               <ListboxItemIndicator />
//             </ListboxItem>
//           ))}
//         </ListboxContent>
//       </Listbox>
//       <p className="mt-2 text-muted-foreground text-xs">
//         value: {value.join(", ") || "—"}
//       </p>
//     </div>
//   );
// };

// const ListboxRootProviderDemo = () => {
//   const collection = useMemo(
//     () =>
//       createListCollection({
//         items: [
//           { label: "Option A", value: "a" },
//           { label: "Option B", value: "b" },
//         ],
//       }),
//     [],
//   );
//   const service = useListbox({ collection, defaultValue: ["a"] });
//   return (
//     <ListboxRootProvider
//       className="flex w-full max-w-sm flex-col gap-2"
//       value={service}
//     >
//       <ListboxLabel>useListbox + RootProvider</ListboxLabel>
//       <ListboxContent>
//         {collection.items.map((item) => (
//           <ListboxItem key={item.value} item={item}>
//             <ListboxItemText>{item.label}</ListboxItemText>
//             <ListboxItemIndicator />
//           </ListboxItem>
//         ))}
//       </ListboxContent>
//     </ListboxRootProvider>
//   );
// };

// const ListboxDisabledDemo = () => {
//   const collection = useMemo(
//     () =>
//       createListCollection({
//         items: [
//           { label: "Available", value: "a" },
//           { label: "Unavailable", value: "b" },
//           { label: "Available", value: "c" },
//         ],
//         isItemDisabled: (item) => item.value === "b",
//       }),
//     [],
//   );
//   return (
//     <div className="w-full max-w-sm">
//       <Listbox collection={collection} defaultValue={["a"]}>
//         <ListboxLabel>Disabled item</ListboxLabel>
//         <ListboxContent>
//           {collection.items.map((item) => (
//             <ListboxItem key={item.value} item={item}>
//               <ListboxItemText>{item.label}</ListboxItemText>
//               <ListboxItemIndicator />
//             </ListboxItem>
//           ))}
//         </ListboxContent>
//       </Listbox>
//     </div>
//   );
// };

// const ListboxMultipleDemo = () => {
//   const collection = useMemo(
//     () =>
//       createListCollection({
//         items: [
//           { label: "Apple", value: "apple" },
//           { label: "Banana", value: "banana" },
//           { label: "Orange", value: "orange" },
//         ],
//       }),
//     [],
//   );
//   return (
//     <div className="w-full max-w-sm">
//       <Listbox
//         collection={collection}
//         defaultValue={["apple", "orange"]}
//         selectionMode="multiple"
//       >
//         <ListboxLabel>Multiple selection</ListboxLabel>
//         <ListboxContent>
//           {collection.items.map((item) => (
//             <ListboxItem key={item.value} item={item}>
//               <ListboxItemText>{item.label}</ListboxItemText>
//               <ListboxItemIndicator />
//             </ListboxItem>
//           ))}
//         </ListboxContent>
//       </Listbox>
//     </div>
//   );
// };

// const ListboxGroupedDemo = () => {
//   const collection = useMemo(
//     () =>
//       createListCollection({
//         groupBy: (item) => item.ecosystem,
//         items: [...LISTBOX_ECOSYSTEM],
//       }),
//     [],
//   );
//   return (
//     <div className="w-full max-w-sm">
//       <Listbox collection={collection} defaultValue={["react"]}>
//         <ListboxLabel>Grouped</ListboxLabel>
//         <ListboxContent>
//           {collection.group().map(([group, items]) => (
//             <ListboxItemGroup key={group}>
//               <ListboxItemGroupLabel>{group}</ListboxItemGroupLabel>
//               {items.map((item) => (
//                 <ListboxItem key={item.value} item={item}>
//                   <ListboxItemText>{item.label}</ListboxItemText>
//                   <ListboxItemIndicator />
//                 </ListboxItem>
//               ))}
//             </ListboxItemGroup>
//           ))}
//         </ListboxContent>
//       </Listbox>
//     </div>
//   );
// };

// const ListboxExtendedDemo = () => {
//   const collection = useMemo(
//     () =>
//       createListCollection({
//         items: [
//           { label: "One", value: "1" },
//           { label: "Two", value: "2" },
//           { label: "Three", value: "3" },
//           { label: "Four", value: "4" },
//         ],
//       }),
//     [],
//   );
//   return (
//     <div className="w-full max-w-sm">
//       <Listbox collection={collection} selectionMode="extended">
//         <ListboxLabel>Extended (⌘/Ctrl + click)</ListboxLabel>
//         <ListboxContent>
//           {collection.items.map((item) => (
//             <ListboxItem key={item.value} item={item}>
//               <ListboxItemText>{item.label}</ListboxItemText>
//               <ListboxItemIndicator />
//             </ListboxItem>
//           ))}
//         </ListboxContent>
//       </Listbox>
//     </div>
//   );
// };

// const ListboxHorizontalDemo = () => {
//   const collection = useMemo(
//     () =>
//       createListCollection({
//         items: [
//           { label: "Sm", value: "sm" },
//           { label: "Md", value: "md" },
//           { label: "Lg", value: "lg" },
//           { label: "Xl", value: "xl" },
//         ],
//       }),
//     [],
//   );
//   return (
//     <div className="w-full max-w-md">
//       <Listbox
//         collection={collection}
//         defaultValue={["md"]}
//         orientation="horizontal"
//       >
//         <ListboxLabel>Horizontal orientation</ListboxLabel>
//         <ListboxContent className="max-h-none min-h-0">
//           {collection.items.map((item) => (
//             <ListboxItem key={item.value} item={item}>
//               <ListboxItemText>{item.label}</ListboxItemText>
//               <ListboxItemIndicator />
//             </ListboxItem>
//           ))}
//         </ListboxContent>
//       </Listbox>
//     </div>
//   );
// };

// const ListboxGridDemo = () => {
//   const collection = useMemo(
//     () =>
//       createGridCollection({
//         columnCount: 3,
//         items: LISTBOX_GRID_CELLS,
//       }),
//     [],
//   );
//   return (
//     <div className="w-full max-w-sm">
//       <Listbox collection={collection} defaultValue={["c1"]}>
//         <ListboxLabel>Grid (3 columns)</ListboxLabel>
//         <ListboxContent>
//           {collection.items.map((item) => (
//             <ListboxItem key={item.value} item={item}>
//               <ListboxItemText>{item.label}</ListboxItemText>
//               <ListboxItemIndicator />
//             </ListboxItem>
//           ))}
//         </ListboxContent>
//       </Listbox>
//     </div>
//   );
// };

// const ListboxFilteringDemo = () => {
//   const [query, setQuery] = useState("");
//   const { collection, filter } = useListCollection({
//     filter: (itemText, filterText) =>
//       itemText.toLowerCase().includes(filterText.toLowerCase()),
//     initialItems: [...COMBOBOX_FRUITS],
//   });
//   useEffect(() => {
//     filter(query);
//   }, [query, filter]);
//   return (
//     <div className="w-full max-w-sm">
//       <Listbox collection={collection}>
//         <ListboxLabel>Filter</ListboxLabel>
//         <ListboxInput
//           onChange={(e) => setQuery(e.target.value)}
//           placeholder="Search fruits…"
//           value={query}
//         />
//         <ListboxContent>
//           <ListboxEmpty>No matches.</ListboxEmpty>
//           {collection.items.map((item) => (
//             <ListboxItem key={item.value} item={item}>
//               <ListboxItemText>{item.label}</ListboxItemText>
//               <ListboxItemIndicator />
//             </ListboxItem>
//           ))}
//         </ListboxContent>
//       </Listbox>
//     </div>
//   );
// };

// const ListboxSelectAllDemo = () => {
//   const collection = useMemo(
//     () =>
//       createListCollection({
//         items: COMBOBOX_FRUITS.slice(0, 5),
//       }),
//     [],
//   );
//   return (
//     <div className="w-full max-w-sm">
//       <Listbox
//         collection={collection}
//         defaultValue={[]}
//         selectionMode="multiple"
//       >
//         <div className="flex flex-wrap gap-2">
//           <ListboxContext>
//             {(api) => (
//               <>
//                 <Button asChild size="sm" type="button" variant="outline">
//                   <button onClick={() => api.selectAll()} type="button">
//                     Select all
//                   </button>
//                 </Button>
//                 <Button asChild size="sm" type="button" variant="outline">
//                   <button onClick={() => api.clearValue()} type="button">
//                     Clear
//                   </button>
//                 </Button>
//               </>
//             )}
//           </ListboxContext>
//         </div>
//         <ListboxLabel>Fruits</ListboxLabel>
//         <ListboxContent>
//           {collection.items.map((item) => (
//             <ListboxItem key={item.value} item={item}>
//               <ListboxItemText>{item.label}</ListboxItemText>
//               <ListboxItemIndicator />
//             </ListboxItem>
//           ))}
//         </ListboxContent>
//       </Listbox>
//     </div>
//   );
// };

// const ListboxValueTextDemo = () => {
//   const collection = useMemo(
//     () =>
//       createListCollection({
//         items: [
//           { label: "React", value: "react" },
//           { label: "Vue", value: "vue" },
//         ],
//       }),
//     [],
//   );
//   return (
//     <div className="w-full max-w-sm">
//       <Listbox collection={collection}>
//         <ListboxLabel>Value text</ListboxLabel>
//         <ListboxContent>
//           {collection.items.map((item) => (
//             <ListboxItem key={item.value} item={item}>
//               <ListboxItemText>{item.label}</ListboxItemText>
//               <ListboxItemIndicator />
//             </ListboxItem>
//           ))}
//         </ListboxContent>
//         <p className="text-muted-foreground text-sm">
//           Selected:{" "}
//           <ListboxValueText
//             className="font-medium text-foreground"
//             placeholder="None yet"
//           />
//         </p>
//       </Listbox>
//     </div>
//   );
// };

// const PaginationDefaultDemo = () => (
//   <Pagination
//     count={100}
//     pageSize={10}
//     className="flex flex-wrap items-center gap-1"
//   >
//     <PaginationPrevTrigger asChild aria-label="Previous page">
//       <Button size="icon" variant="outline">
//         <ChevronLeftIcon className="size-4" />
//       </Button>
//     </PaginationPrevTrigger>
//     <PaginationItems />
//     <PaginationNextTrigger asChild aria-label="Next page">
//       <Button size="icon" variant="outline">
//         <ChevronRightIcon className="size-4" />
//       </Button>
//     </PaginationNextTrigger>
//   </Pagination>
// );

// const PaginationControlledDemo = () => {
//   const [page, setPage] = useState(1);
//   return (
//     <Pagination
//       count={120}
//       page={page}
//       pageSize={10}
//       onPageChange={(d) => setPage(d.page)}
//     >
//       <PaginationContext>
//         {(api) => (
//           <div className="flex flex-col gap-2">
//             <p className="text-muted-foreground text-xs">
//               Controlled page:{" "}
//               <span className="font-medium text-foreground">{page}</span>{" "}
//               (synced with api: {api.page})
//             </p>
//             <div className="flex flex-wrap items-center gap-1">
//               <PaginationPrevTrigger asChild>
//                 <Button size="icon" variant="outline">
//                   <ChevronLeftIcon className="size-4" />
//                 </Button>
//               </PaginationPrevTrigger>
//               <PaginationItems />
//               <PaginationNextTrigger asChild>
//                 <Button size="icon" variant="outline">
//                   <ChevronRightIcon className="size-4" />
//                 </Button>
//               </PaginationNextTrigger>
//             </div>
//           </div>
//         )}
//       </PaginationContext>
//     </Pagination>
//   );
// };

// const PaginationRootProviderDemo = () => {
//   const store = usePagination({ count: 90, defaultPage: 2, pageSize: 10 });
//   return (
//     <PaginationRootProvider value={store}>
//       <div className="flex flex-col gap-2">
//         <p className="text-muted-foreground text-xs">
//           usePagination + PaginationRootProvider — page {store.page} /{" "}
//           {store.totalPages}
//         </p>
//         <div className="flex flex-wrap items-center gap-1">
//           <PaginationPrevTrigger asChild>
//             <Button size="icon" variant="outline">
//               <ChevronLeftIcon className="size-4" />
//             </Button>
//           </PaginationPrevTrigger>
//           <PaginationItems />
//           <PaginationNextTrigger asChild>
//             <Button size="icon" variant="outline">
//               <ChevronRightIcon className="size-4" />
//             </Button>
//           </PaginationNextTrigger>
//         </div>
//       </div>
//     </PaginationRootProvider>
//   );
// };

// const PaginationCustomDemo = () => (
//   <Pagination
//     boundaryCount={2}
//     count={200}
//     pageSize={10}
//     siblingCount={2}
//     translations={{
//       nextTriggerLabel: "Next",
//       prevTriggerLabel: "Previous",
//     }}
//   >
//     <div className="flex flex-wrap items-center gap-1">
//       <PaginationPrevTrigger>Prev</PaginationPrevTrigger>
//       <PaginationItems />
//       <PaginationNextTrigger>Next</PaginationNextTrigger>
//     </div>
//   </Pagination>
// );

// const PaginationContextInfoDemo = () => (
//   <Pagination count={55} pageSize={10}>
//     <PaginationContext>
//       {(api) => (
//         <div className="flex flex-col gap-2">
//           <p className="rounded-md border border-border/80 bg-muted/40 px-2 py-1.5 text-foreground text-xs">
//             pageRange: {api.pageRange.start}–{api.pageRange.end} of {api.count}{" "}
//             · totalPages: {api.totalPages}
//           </p>
//           <div className="flex flex-wrap items-center gap-1">
//             <PaginationPrevTrigger asChild>
//               <Button size="icon" variant="outline">
//                 <ChevronLeftIcon className="size-4" />
//               </Button>
//             </PaginationPrevTrigger>
//             <PaginationItems />
//             <PaginationNextTrigger asChild>
//               <Button size="icon" variant="outline">
//                 <ChevronRightIcon className="size-4" />
//               </Button>
//             </PaginationNextTrigger>
//           </div>
//         </div>
//       )}
//     </PaginationContext>
//   </Pagination>
// );

// const PAGINATION_SLICE_DATA = Array.from({ length: 47 }, (_, i) => ({
//   id: String(i + 1),
//   title: `Item ${i + 1}`,
// }));

// const PaginationSliceDemo = () => (
//   <Pagination
//     count={PAGINATION_SLICE_DATA.length}
//     defaultPage={1}
//     pageSize={10}
//   >
//     <PaginationContext>
//       {(api) => (
//         <div className="flex w-full max-w-sm flex-col gap-3">
//           <ul className="max-h-32 space-y-1 overflow-auto rounded-md border border-border p-2 text-sm">
//             {api.slice(PAGINATION_SLICE_DATA).map((row) => (
//               <li key={row.id}>{row.title}</li>
//             ))}
//           </ul>
//           <div className="flex flex-wrap items-center gap-1">
//             <PaginationPrevTrigger asChild>
//               <Button size="icon" variant="outline">
//                 <ChevronLeftIcon className="size-4" />
//               </Button>
//             </PaginationPrevTrigger>
//             <PaginationItems />
//             <PaginationNextTrigger asChild>
//               <Button size="icon" variant="outline">
//                 <ChevronRightIcon className="size-4" />
//               </Button>
//             </PaginationNextTrigger>
//           </div>
//         </div>
//       )}
//     </PaginationContext>
//   </Pagination>
// );

// const PaginationPageRangeLabelDemo = () => (
//   <Pagination count={250} pageSize={25}>
//     <PaginationContext>
//       {(api) => (
//         <div className="flex flex-col gap-2">
//           <p className="text-muted-foreground text-sm">
//             Showing {api.pageRange.start}–{api.pageRange.end} of {api.count}{" "}
//             results
//           </p>
//           <div className="flex flex-wrap items-center gap-1">
//             <PaginationPrevTrigger asChild>
//               <Button size="icon" variant="outline">
//                 <ChevronLeftIcon className="size-4" />
//               </Button>
//             </PaginationPrevTrigger>
//             <PaginationItems />
//             <PaginationNextTrigger asChild>
//               <Button size="icon" variant="outline">
//                 <ChevronRightIcon className="size-4" />
//               </Button>
//             </PaginationNextTrigger>
//           </div>
//         </div>
//       )}
//     </PaginationContext>
//   </Pagination>
// );

// const PaginationPageSizeDemo = () => (
//   <Pagination count={200} defaultPageSize={10}>
//     <PaginationContext>
//       {(api) => (
//         <div className="flex flex-col gap-3">
//           <label className="flex items-center gap-2 text-sm">
//             <span className="text-muted-foreground">Items per page</span>
//             <select
//               className="rounded-md border border-input bg-background px-2 py-1.5 text-foreground text-sm outline-none focus-visible:ring-2 focus-visible:ring-ring"
//               onChange={(e) => api.setPageSize(Number(e.target.value))}
//               value={api.pageSize}
//             >
//               <option value={5}>5</option>
//               <option value={10}>10</option>
//               <option value={25}>25</option>
//             </select>
//           </label>
//           <p className="text-muted-foreground text-xs">
//             Page {api.page} of {api.totalPages}
//           </p>
//           <div className="flex flex-wrap items-center gap-1">
//             <PaginationPrevTrigger asChild>
//               <Button size="icon" variant="outline">
//                 <ChevronLeftIcon className="size-4" />
//               </Button>
//             </PaginationPrevTrigger>
//             <PaginationItems />
//             <PaginationNextTrigger asChild>
//               <Button size="icon" variant="outline">
//                 <ChevronRightIcon className="size-4" />
//               </Button>
//             </PaginationNextTrigger>
//           </div>
//         </div>
//       )}
//     </PaginationContext>
//   </Pagination>
// );

// const PaginationLinksDemo = () => (
//   <Pagination
//     count={60}
//     getPageUrl={({ page }) => `#pagination-page-${page}`}
//     pageSize={10}
//     type="link"
//   >
//     <div className="flex flex-wrap items-center gap-1">
//       <PaginationPrevTrigger asChild>
//         <Button variant="outline">
//           <ChevronLeftIcon className="size-4" />
//           Previous
//         </Button>
//       </PaginationPrevTrigger>
//       <PaginationItems />
//       <PaginationNextTrigger asChild>
//         <Button variant="outline">Next</Button>
//       </PaginationNextTrigger>
//     </div>
//   </Pagination>
// );

// const PaginationButtonGroupDemo = () => (
//   <Pagination
//     className="flex flex-wrap items-center gap-1.5"
//     count={50}
//     pageSize={10}
//     siblingCount={1}
//   >
//     <PaginationFirstTrigger aria-label="First page" asChild>
//       <Button variant="outline">
//         <ChevronsLeftIcon className="size-4" />
//       </Button>
//     </PaginationFirstTrigger>
//     <PaginationPrevTrigger aria-label="Previous page" asChild>
//       <Button variant="outline">
//         <ChevronLeftIcon className="size-4" />
//       </Button>
//     </PaginationPrevTrigger>
//     <PaginationItems />
//     <PaginationNextTrigger aria-label="Next page" asChild>
//       <Button variant="outline" size="icon">
//         <ChevronRightIcon className="size-4" />
//       </Button>
//     </PaginationNextTrigger>
//     <PaginationLastTrigger aria-label="Last page" asChild>
//       <Button variant="outline" size="icon">
//         <ChevronsRightIcon className="size-4" />
//       </Button>
//     </PaginationLastTrigger>
//   </Pagination>
// );

// const PaginationSpacedDemo = () => (
//   <Pagination className="gap-4" count={100} pageSize={10} siblingCount={1}>
//     <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
//       <p className="text-muted-foreground text-sm">
//         Loose layout: separate controls with gap-4 on the root.
//       </p>
//       <div className="flex flex-wrap items-center gap-3">
//         <PaginationFirstTrigger asChild>
//           <Button size="icon" variant="ghost">
//             <ChevronsLeftIcon className="size-4" />
//           </Button>
//         </PaginationFirstTrigger>
//         <PaginationPrevTrigger asChild>
//           <Button size="icon" variant="ghost">
//             <ChevronLeftIcon className="size-4" />
//           </Button>
//         </PaginationPrevTrigger>
//         <div className="flex flex-wrap items-center gap-1.5">
//           <PaginationItems />
//         </div>
//         <PaginationNextTrigger asChild>
//           <Button size="icon" variant="ghost">
//             <ChevronRightIcon className="size-4" />
//           </Button>
//         </PaginationNextTrigger>
//         <PaginationLastTrigger asChild>
//           <Button size="icon" variant="ghost">
//             <ChevronsRightIcon className="size-4" />
//           </Button>
//         </PaginationLastTrigger>
//       </div>
//     </div>
//   </Pagination>
// );

// const MarqueeBasicDemo = () => (
//   <div className="w-full max-w-xl">
//     <Marquee translations={{ root: "Scrolling fruit labels" }}>
//       <MarqueeViewport>
//         <MarqueeContent>
//           {MARQUEE_FRUITS.map((item, i) => (
//             <MarqueeItem key={`${item.name}-${i}`}>
//               <span className="text-2xl leading-none">{item.logo}</span>
//               <span className="font-medium">{item.name}</span>
//             </MarqueeItem>
//           ))}
//         </MarqueeContent>
//       </MarqueeViewport>
//     </Marquee>
//   </div>
// );

// const MarqueeAutoFillDemo = () => (
//   <div className="w-full max-w-xl">
//     <Marquee autoFill spacing="2rem" translations={{ root: "Auto-filled row" }}>
//       <MarqueeViewport>
//         <MarqueeContent>
//           {MARQUEE_FRUITS_SHORT.map((item, i) => (
//             <MarqueeItem key={`${item.name}-${i}`}>
//               <span className="text-2xl leading-none">{item.logo}</span>
//               <span className="font-medium">{item.name}</span>
//             </MarqueeItem>
//           ))}
//         </MarqueeContent>
//       </MarqueeViewport>
//     </Marquee>
//   </div>
// );

// const MarqueeReverseDemo = () => (
//   <div className="w-full max-w-xl">
//     <Marquee reverse translations={{ root: "Reversed direction" }}>
//       <MarqueeViewport>
//         <MarqueeContent>
//           {MARQUEE_FRUITS.map((item, i) => (
//             <MarqueeItem key={`${item.name}-${i}`}>
//               <span className="text-2xl leading-none">{item.logo}</span>
//               <span className="font-medium">{item.name}</span>
//             </MarqueeItem>
//           ))}
//         </MarqueeContent>
//       </MarqueeViewport>
//     </Marquee>
//   </div>
// );

// const MarqueeVerticalDemo = () => (
//   <div className="w-full max-w-xl">
//     <Marquee side="bottom" translations={{ root: "Vertical marquee" }}>
//       <MarqueeViewport>
//         <MarqueeContent>
//           {MARQUEE_FRUITS.map((item, i) => (
//             <MarqueeItem key={`${item.name}-${i}`}>
//               <span className="text-2xl leading-none">{item.logo}</span>
//               <span className="font-medium">{item.name}</span>
//             </MarqueeItem>
//           ))}
//         </MarqueeContent>
//       </MarqueeViewport>
//     </Marquee>
//   </div>
// );

// const MarqueeSpeedDemo = () => (
//   <div className="w-full max-w-xl">
//     <Marquee speed={120} translations={{ root: "Faster scroll" }}>
//       <MarqueeViewport>
//         <MarqueeContent>
//           {MARQUEE_FRUITS.map((item, i) => (
//             <MarqueeItem key={`${item.name}-${i}`}>
//               <span className="text-2xl leading-none">{item.logo}</span>
//               <span className="font-medium">{item.name}</span>
//             </MarqueeItem>
//           ))}
//         </MarqueeContent>
//       </MarqueeViewport>
//     </Marquee>
//   </div>
// );

// const MarqueePauseOnInteractionDemo = () => (
//   <div className="w-full max-w-xl">
//     <Marquee
//       pauseOnInteraction
//       translations={{ root: "Pause on hover or focus" }}
//     >
//       <MarqueeViewport>
//         <MarqueeContent>
//           {MARQUEE_FRUITS.map((item, i) => (
//             <MarqueeItem key={`${item.name}-${i}`}>
//               <span className="text-2xl leading-none">{item.logo}</span>
//               <span className="font-medium">{item.name}</span>
//             </MarqueeItem>
//           ))}
//         </MarqueeContent>
//       </MarqueeViewport>
//     </Marquee>
//   </div>
// );

// const MarqueeProgrammaticDemo = () => {
//   const marquee = useMarquee();
//   return (
//     <div className="flex w-full max-w-xl flex-col gap-3">
//       <MarqueeRootProvider value={marquee}>
//         <MarqueeViewport>
//           <MarqueeContent>
//             {MARQUEE_FRUITS.map((item, i) => (
//               <MarqueeItem key={`${item.name}-${i}`}>
//                 <span className="text-2xl leading-none">{item.logo}</span>
//                 <span className="font-medium">{item.name}</span>
//               </MarqueeItem>
//             ))}
//           </MarqueeContent>
//         </MarqueeViewport>
//       </MarqueeRootProvider>
//       <div className="flex flex-wrap gap-2">
//         <button onClick={() => marquee.pause()} type="button">
//           Pause
//         </button>
//         <button onClick={() => marquee.resume()} type="button">
//           Resume
//         </button>
//         <button onClick={() => marquee.togglePause()} type="button">
//           Toggle
//         </button>
//         <button onClick={() => marquee.restart()} type="button">
//           Restart
//         </button>
//       </div>
//     </div>
//   );
// };

// const MarqueeFiniteLoopsDemo = () => {
//   const [loopDone, setLoopDone] = useState(0);
//   const [completed, setCompleted] = useState(0);
//   return (
//     <div className="flex w-full max-w-xl flex-col gap-3">
//       <Marquee
//         loopCount={3}
//         onComplete={() => setCompleted((c) => c + 1)}
//         onLoopComplete={() => setLoopDone((c) => c + 1)}
//         translations={{ root: "Finite loop marquee" }}
//       >
//         <MarqueeViewport>
//           <MarqueeContent>
//             {MARQUEE_FRUITS.map((item, i) => (
//               <MarqueeItem key={`${item.name}-${i}`}>
//                 <span className="text-2xl leading-none">{item.logo}</span>
//                 <span className="font-medium">{item.name}</span>
//               </MarqueeItem>
//             ))}
//           </MarqueeContent>
//         </MarqueeViewport>
//       </Marquee>
//       <p className="text-muted-foreground text-xs">
//         Loops finished: {loopDone} · Runs completed: {completed}
//       </p>
//     </div>
//   );
// };

// const MarqueeWithEdgesDemo = () => (
//   <div className="w-full max-w-xl">
//     <Marquee translations={{ root: "Marquee with edge fades" }}>
//       <MarqueeEdge side="start" />
//       <MarqueeViewport>
//         <MarqueeContent>
//           {MARQUEE_FRUITS.map((item, i) => (
//             <MarqueeItem key={`${item.name}-${i}`}>
//               <span className="text-2xl leading-none">{item.logo}</span>
//               <span className="font-medium">{item.name}</span>
//             </MarqueeItem>
//           ))}
//         </MarqueeContent>
//       </MarqueeViewport>
//       <MarqueeEdge side="end" />
//     </Marquee>
//   </div>
// );

// const MarqueeOrientationCompareDemo = () => (
//   <div className="grid w-full max-w-3xl gap-6 sm:grid-cols-2">
//     <div className="flex min-w-0 flex-col gap-2">
//       <p className="font-medium text-foreground text-xs">Horizontal</p>
//       <Marquee
//         className="max-w-full"
//         translations={{ root: "Horizontal orientation" }}
//       >
//         <MarqueeViewport>
//           <MarqueeContent>
//             {MARQUEE_FRUITS_SHORT.map((item, i) => (
//               <MarqueeItem key={`h-${item.name}-${i}`}>
//                 <span className="text-2xl leading-none">{item.logo}</span>
//                 <span className="font-medium">{item.name}</span>
//               </MarqueeItem>
//             ))}
//           </MarqueeContent>
//         </MarqueeViewport>
//       </Marquee>
//     </div>
//     <div className="flex min-w-0 flex-col gap-2">
//       <p className="font-medium text-foreground text-xs">
//         Vertical (side bottom)
//       </p>
//       <Marquee
//         className="max-w-full"
//         side="bottom"
//         translations={{ root: "Vertical orientation" }}
//       >
//         <MarqueeViewport>
//           <MarqueeContent>
//             {MARQUEE_FRUITS_SHORT.map((item, i) => (
//               <MarqueeItem key={`v-${item.name}-${i}`}>
//                 <span className="text-2xl leading-none">{item.logo}</span>
//                 <span className="font-medium">{item.name}</span>
//               </MarqueeItem>
//             ))}
//           </MarqueeContent>
//         </MarqueeViewport>
//       </Marquee>
//     </div>
//   </div>
// );

// const MarqueeContextDemo = () => (
//   <div className="w-full max-w-xl">
//     <Marquee pauseOnInteraction translations={{ root: "Context API" }}>
//       <MarqueeContext>
//         {(api) => (
//           <>
//             <p className="mb-2 text-muted-foreground text-xs">
//               Paused: {String(api.paused)} · Orientation: {api.orientation}
//             </p>
//             <MarqueeViewport>
//               <MarqueeContent>
//                 {MARQUEE_FRUITS_SHORT.map((item, i) => (
//                   <MarqueeItem key={`${item.name}-${i}`}>
//                     <span className="text-2xl leading-none">{item.logo}</span>
//                     <span className="font-medium">{item.name}</span>
//                   </MarqueeItem>
//                 ))}
//               </MarqueeContent>
//             </MarqueeViewport>
//           </>
//         )}
//       </MarqueeContext>
//     </Marquee>
//   </div>
// );

// const HOVER_PROFILE = {
//   avatar: "https://i.pravatar.cc/300?u=sarah",
//   bio: "Design Engineer at Acme Inc. Building beautiful interfaces and design systems.",
//   name: "Sarah Chen",
//   username: "@sarah_chen",
// } as const;

// const HoverCardProfilePreview = () => (
//   <div className="flex flex-col gap-3">
//     <div className="flex items-start justify-between gap-3">
//       <img
//         alt=""
//         className="size-14 shrink-0 rounded-full object-cover"
//         src={HOVER_PROFILE.avatar}
//       />
//       <Button size="sm" type="button" variant="secondary">
//         Follow
//       </Button>
//     </div>
//     <div>
//       <p className="font-semibold text-foreground text-sm leading-tight">
//         {HOVER_PROFILE.name}
//       </p>
//       <p className="text-muted-foreground text-sm">{HOVER_PROFILE.username}</p>
//     </div>
//     <p className="text-foreground text-sm leading-snug">{HOVER_PROFILE.bio}</p>
//     <div className="flex gap-4 text-muted-foreground text-xs">
//       <div className="flex gap-1">
//         <span aria-hidden className="font-medium text-foreground">
//           2,456
//         </span>
//         <span>Following</span>
//       </div>
//       <div className="flex gap-1">
//         <span aria-hidden className="font-medium text-foreground">
//           14.5K
//         </span>
//         <span>Followers</span>
//       </div>
//     </div>
//   </div>
// );

// const HoverCardCossStyleDemo = () => (
//   <HoverCard>
//     <HoverCardTrigger asChild>
//       <Button className="h-auto px-2 py-1 font-normal" variant="ghost">
//         ark-cn/ui
//       </Button>
//     </HoverCardTrigger>
//     <HoverCardPopup>
//       <div className="flex flex-col gap-4">
//         <div className="flex flex-col gap-1">
//           <h4 className="font-medium text-foreground text-sm">ark-cn/ui</h4>
//           <p className="text-muted-foreground text-sm">
//             Ark UI primitives styled like coss.com/ui — copy-paste ready
//             components for your apps.
//           </p>
//         </div>
//         <div className="flex items-center gap-4 text-muted-foreground text-xs">
//           <div className="flex items-center gap-1">
//             <span aria-hidden className="size-2 rounded-full bg-blue-500" />
//             <span>TypeScript</span>
//           </div>
//           <div className="flex items-center gap-1">
//             <StarIcon className="size-3" />
//             <span>58.2k</span>
//           </div>
//           <div className="flex items-center gap-1">
//             <CornerUpLeftIcon className="size-3" />
//             <span>5.1k</span>
//           </div>
//         </div>
//       </div>
//     </HoverCardPopup>
//   </HoverCard>
// );

// const HoverCardBasicDemo = () => (
//   <HoverCard>
//     <p className="max-w-md text-muted-foreground text-sm leading-relaxed">
//       Liked by{" "}
//       <HoverCardTrigger asChild>
//         <a
//           className="font-medium text-primary underline underline-offset-2"
//           href="#hover-basic"
//         >
//           {HOVER_PROFILE.username}
//         </a>
//       </HoverCardTrigger>{" "}
//       and 3 others.
//     </p>
//     <HoverCardPopup>
//       <HoverCardProfilePreview />
//     </HoverCardPopup>
//   </HoverCard>
// );

// const HoverCardControlledDemo = () => {
//   const [open, setOpen] = useState(false);

//   return (
//     <div className="flex flex-col gap-3">
//       <Button
//         size="sm"
//         type="button"
//         variant="outline"
//         onClick={() => setOpen((o) => !o)}
//       >
//         Toggle
//       </Button>
//       <HoverCard onOpenChange={(e) => setOpen(e.open)} open={open}>
//         <p className="max-w-md text-muted-foreground text-sm leading-relaxed">
//           Liked by{" "}
//           <HoverCardTrigger asChild>
//             <a
//               className="font-medium text-primary underline underline-offset-2"
//               href="#hover-controlled"
//             >
//               {HOVER_PROFILE.username}
//             </a>
//           </HoverCardTrigger>{" "}
//           and 3 others.
//         </p>
//         <HoverCardPopup>
//           <div className="flex flex-col gap-3">
//             <img
//               alt=""
//               className="size-16 rounded-full object-cover"
//               src={HOVER_PROFILE.avatar}
//             />
//             <div>
//               <p className="font-semibold text-foreground text-sm">
//                 {HOVER_PROFILE.name}
//               </p>
//               <p className="text-muted-foreground text-sm">
//                 {HOVER_PROFILE.username}
//               </p>
//             </div>
//             <p className="text-foreground text-sm">{HOVER_PROFILE.bio}</p>
//           </div>
//         </HoverCardPopup>
//       </HoverCard>
//     </div>
//   );
// };

// const HoverCardDelayDemo = () => (
//   <HoverCard closeDelay={500} openDelay={200}>
//     <p className="max-w-md text-muted-foreground text-sm leading-relaxed">
//       Hover the handle —{" "}
//       <HoverCardTrigger asChild>
//         <a
//           className="font-medium text-primary underline underline-offset-2"
//           href="#hover-delay"
//         >
//           {HOVER_PROFILE.username}
//         </a>
//       </HoverCardTrigger>
//     </p>
//     <HoverCardPopup>
//       <HoverCardProfilePreview />
//     </HoverCardPopup>
//   </HoverCard>
// );

// const HoverCardPositioningDemo = () => (
//   <HoverCard positioning={{ gutter: 12, placement: "right" }}>
//     <p className="max-w-md text-muted-foreground text-sm leading-relaxed">
//       Opens to the right —{" "}
//       <HoverCardTrigger asChild>
//         <a
//           className="font-medium text-primary underline underline-offset-2"
//           href="#hover-position"
//         >
//           {HOVER_PROFILE.username}
//         </a>
//       </HoverCardTrigger>
//     </p>
//     <HoverCardPopup>
//       <HoverCardProfilePreview />
//     </HoverCardPopup>
//   </HoverCard>
// );

// const HoverCardRootProviderDemo = () => {
//   const hoverCard = useHoverCard();

//   return (
//     <div className="flex flex-col gap-2">
//       <output className="text-muted-foreground text-xs">
//         Open: {String(hoverCard.open)}
//       </output>
//       <HoverCardRootProvider value={hoverCard}>
//         <p className="max-w-md text-muted-foreground text-sm leading-relaxed">
//           Liked by{" "}
//           <HoverCardTrigger asChild>
//             <a
//               className="font-medium text-primary underline underline-offset-2"
//               href="#hover-provider"
//             >
//               {HOVER_PROFILE.username}
//             </a>
//           </HoverCardTrigger>
//         </p>
//         <HoverCardPopup>
//           <HoverCardProfilePreview />
//         </HoverCardPopup>
//       </HoverCardRootProvider>
//     </div>
//   );
// };

// const HoverCardContextDemo = () => (
//   <HoverCard>
//     <HoverCardContext>
//       {(ctx) => (
//         <p className="max-w-md text-muted-foreground text-sm leading-relaxed">
//           Liked by{" "}
//           <HoverCardTrigger asChild>
//             <a
//               className="inline-flex items-center gap-1 font-medium text-primary underline underline-offset-2"
//               href="#hover-context"
//             >
//               {HOVER_PROFILE.username}
//               {ctx.open ? (
//                 <ChevronUpIcon className="size-3.5" />
//               ) : (
//                 <ChevronDownIcon className="size-3.5" />
//               )}
//             </a>
//           </HoverCardTrigger>
//         </p>
//       )}
//     </HoverCardContext>
//     <HoverCardPopup>
//       <HoverCardProfilePreview />
//     </HoverCardPopup>
//   </HoverCard>
// );

// type HoverMiniProfile = {
//   avatar: string;
//   bio: string;
//   id: string;
//   name: string;
//   username: string;
// };

// const HOVER_MINI_PROFILES: HoverMiniProfile[] = [
//   {
//     avatar: "https://i.pravatar.cc/300?u=sarah",
//     bio: "Design Engineer at Acme Inc. Building beautiful interfaces.",
//     id: "sarah",
//     name: "Sarah Chen",
//     username: "@sarah_chen",
//   },
//   {
//     avatar: "https://i.pravatar.cc/300?u=alex",
//     bio: "Full-stack developer and open source contributor.",
//     id: "alex",
//     name: "Alex Rivera",
//     username: "@alex_r",
//   },
//   {
//     avatar: "https://i.pravatar.cc/300?u=jordan",
//     bio: "DevOps lead. Automating all the things.",
//     id: "jordan",
//     name: "Jordan Lee",
//     username: "@jordan_lee",
//   },
// ];

// const HoverCardMultipleRootsDemo = () => (
//   <div className="flex flex-col gap-3">
//     <p className="text-muted-foreground text-xs">
//       Each link is its own{" "}
//       <code className="rounded bg-muted px-1 py-px">HoverCard</code> root
//       (per-profile preview).
//     </p>
//     <div className="flex flex-wrap gap-x-3 gap-y-2">
//       {HOVER_MINI_PROFILES.map((p) => (
//         <HoverCard key={p.id}>
//           <HoverCardTrigger asChild>
//             <a
//               className="font-medium text-primary underline underline-offset-2"
//               href={`#mr-${p.id}`}
//             >
//               {p.username}
//             </a>
//           </HoverCardTrigger>
//           <HoverCardPopup>
//             <div className="flex flex-col gap-3">
//               <img
//                 alt=""
//                 className="size-14 rounded-full object-cover"
//                 src={p.avatar}
//               />
//               <div>
//                 <p className="font-semibold text-foreground text-sm">
//                   {p.name}
//                 </p>
//                 <p className="text-muted-foreground text-sm">{p.username}</p>
//               </div>
//               <p className="text-foreground text-sm leading-snug">{p.bio}</p>
//             </div>
//           </HoverCardPopup>
//         </HoverCard>
//       ))}
//     </div>
//   </div>
// );

// const HoverCardContextHookDemo = () => {
//   const Status = () => {
//     const { open } = useHoverCardContext();
//     return (
//       <p className="text-muted-foreground text-xs">
//         Panel: {open ? "open" : "closed"}
//       </p>
//     );
//   };

//   return (
//     <HoverCard>
//       <div className="flex flex-col gap-1">
//         <Status />
//         <HoverCardTrigger asChild>
//           <a
//             className="font-medium text-primary underline underline-offset-2"
//             href="#hover-hook"
//           >
//             {HOVER_PROFILE.username}
//           </a>
//         </HoverCardTrigger>
//       </div>
//       <HoverCardPopup>
//         <HoverCardProfilePreview />
//       </HoverCardPopup>
//     </HoverCard>
//   );
// };

// const HoverCardNoArrowDemo = () => (
//   <HoverCard>
//     <HoverCardTrigger asChild>
//       <a
//         className="font-medium text-primary underline underline-offset-2"
//         href="#hover-no-arrow"
//       >
//         No arrow
//       </a>
//     </HoverCardTrigger>
//     <HoverCardPopup showArrow={false}>
//       <p className="text-muted-foreground text-sm">
//         <code className="rounded bg-muted px-1 py-px">
//           showArrow=&#123;false&#125;
//         </code>{" "}
//         on the popup.
//       </p>
//     </HoverCardPopup>
//   </HoverCard>
// );

// const FloatingPanelDemoLayout = ({
//   title,
//   children,
//   ...root
// }: FloatingPanelProps & { title: string; children: React.ReactNode }) => (
//   <FloatingPanel defaultSize={{ width: 360, height: 220 }} {...root}>
//     <FloatingPanelTrigger asChild>
//       <Button size="sm" variant="outline">
//         Open panel
//       </Button>
//     </FloatingPanelTrigger>
//     <FloatingPanelPopup>
//       <FloatingPanelDragTrigger>
//         <FloatingPanelHeader>
//           <FloatingPanelTitle>
//             <GripVerticalIcon className="size-4 shrink-0 text-muted-foreground" />
//             {title}
//           </FloatingPanelTitle>
//           <FloatingPanelControl>
//             <FloatingPanelStageTrigger
//               aria-label="Minimize"
//               stage="minimized"
//               asChild
//             >
//               <Button variant="ghost" size="icon-sm">
//                 <MinusIcon />
//               </Button>
//             </FloatingPanelStageTrigger>
//             <FloatingPanelStageTrigger
//               aria-label="Maximize"
//               stage="maximized"
//               asChild
//             >
//               <Button variant="ghost" size="icon-sm">
//                 <Maximize2Icon />
//               </Button>
//             </FloatingPanelStageTrigger>
//             <FloatingPanelStageTrigger
//               aria-label="Restore"
//               stage="default"
//               asChild
//             >
//               <Button variant="ghost" size="icon-sm">
//                 <ArrowDownLeftIcon />
//               </Button>
//             </FloatingPanelStageTrigger>
//             <FloatingPanelCloseTrigger aria-label="Close" asChild>
//               <Button variant="ghost" size="icon-sm">
//                 <XIcon />
//               </Button>
//             </FloatingPanelCloseTrigger>
//           </FloatingPanelControl>
//         </FloatingPanelHeader>
//       </FloatingPanelDragTrigger>
//       <FloatingPanelBody>{children}</FloatingPanelBody>
//     </FloatingPanelPopup>
//   </FloatingPanel>
// );

// const FloatingPanelBasicDemo = () => (
//   <FloatingPanelDemoLayout title="Floating panel">
//     <p>Drag the header, resize from edges, or use the window controls.</p>
//   </FloatingPanelDemoLayout>
// );

// const FloatingPanelControlledSizeDemo = () => {
//   const [size, setSize] = useState({ height: 300, width: 400 });

//   return (
//     <FloatingPanelDemoLayout
//       title="Controlled size"
//       onSizeChange={(e) => {
//         setSize(e.size);
//       }}
//       size={size}
//     >
//       <p className="font-mono text-xs">
//         width: {Math.round(size.width)} · height: {Math.round(size.height)}
//       </p>
//     </FloatingPanelDemoLayout>
//   );
// };

// const FloatingPanelControlledPositionDemo = () => {
//   const [position, setPosition] = useState({ x: 200, y: 200 });

//   return (
//     <FloatingPanelDemoLayout
//       title="Controlled position"
//       onPositionChange={(e) => {
//         setPosition(e.position);
//       }}
//       position={position}
//     >
//       <p className="font-mono text-xs">
//         x: {Math.round(position.x)} · y: {Math.round(position.y)}
//       </p>
//     </FloatingPanelDemoLayout>
//   );
// };

// const FloatingPanelAnchorDemo = () => (
//   <FloatingPanel
//     defaultSize={{ height: 220, width: 360 }}
//     getAnchorPosition={({ triggerRect }) => {
//       if (!triggerRect) {
//         return { x: 0, y: 0 };
//       }
//       return {
//         x: triggerRect.x + triggerRect.width / 2,
//         y: triggerRect.y + triggerRect.height / 2,
//       };
//     }}
//   >
//     <FloatingPanelTrigger asChild>
//       <Button size="sm" variant="outline">
//         Open panel
//       </Button>
//     </FloatingPanelTrigger>
//     <FloatingPanelPopup>
//       <FloatingPanelDragTrigger>
//         <FloatingPanelHeader>
//           <FloatingPanelTitle>
//             <GripVerticalIcon className="size-4 shrink-0 text-muted-foreground" />
//             Anchor position
//           </FloatingPanelTitle>
//           <FloatingPanelControl>
//             <FloatingPanelStageTrigger
//               aria-label="Minimize"
//               stage="minimized"
//               asChild
//             >
//               <Button variant="ghost" size="icon-sm">
//                 <MinusIcon />
//               </Button>
//             </FloatingPanelStageTrigger>
//             <FloatingPanelStageTrigger
//               aria-label="Maximize"
//               stage="maximized"
//               asChild
//             >
//               <Button variant="ghost" size="icon-sm">
//                 <Maximize2Icon />
//               </Button>
//             </FloatingPanelStageTrigger>
//             <FloatingPanelStageTrigger
//               aria-label="Restore"
//               stage="default"
//               asChild
//             >
//               <Button variant="ghost" size="icon-sm">
//                 <ArrowDownLeftIcon />
//               </Button>
//             </FloatingPanelStageTrigger>
//             <FloatingPanelCloseTrigger aria-label="Close" asChild>
//               <Button variant="ghost" size="icon-sm">
//                 <XIcon />
//               </Button>
//             </FloatingPanelCloseTrigger>
//           </FloatingPanelControl>
//         </FloatingPanelHeader>
//       </FloatingPanelDragTrigger>
//       <FloatingPanelBody>
//         <p>
//           Initial position uses{" "}
//           <code className="rounded bg-muted px-1 py-px">getAnchorPosition</code>{" "}
//           (centered on the trigger).
//         </p>
//       </FloatingPanelBody>
//     </FloatingPanelPopup>
//   </FloatingPanel>
// );

// const FloatingPanelControlledOpenDemo = () => {
//   const [open, setOpen] = useState(false);

//   return (
//     <div className="flex flex-wrap items-center gap-2">
//       <Button
//         size="sm"
//         type="button"
//         variant="secondary"
//         onClick={() => {
//           setOpen(true);
//         }}
//       >
//         Open externally
//       </Button>
//       <FloatingPanel
//         defaultSize={{ height: 220, width: 360 }}
//         onOpenChange={(e) => {
//           setOpen(e.open);
//         }}
//         open={open}
//       >
//         <FloatingPanelTrigger asChild>
//           <Button size="sm" variant="outline">
//             Toggle panel
//           </Button>
//         </FloatingPanelTrigger>
//         <FloatingPanelPopup>
//           <FloatingPanelDragTrigger>
//             <FloatingPanelHeader>
//               <FloatingPanelTitle>
//                 <GripVerticalIcon className="size-4 shrink-0 text-muted-foreground" />
//                 Controlled open
//               </FloatingPanelTitle>
//               <FloatingPanelControl>
//                 <FloatingPanelStageTrigger
//                   aria-label="Minimize"
//                   stage="minimized"
//                   asChild
//                 >
//                   <Button variant="ghost" size="icon-sm">
//                     <MinusIcon />
//                   </Button>
//                 </FloatingPanelStageTrigger>
//                 <FloatingPanelStageTrigger
//                   aria-label="Maximize"
//                   stage="maximized"
//                   asChild
//                 >
//                   <Button variant="ghost" size="icon-sm">
//                     <Maximize2Icon />
//                   </Button>
//                 </FloatingPanelStageTrigger>
//                 <FloatingPanelStageTrigger
//                   aria-label="Restore"
//                   stage="default"
//                   asChild
//                 >
//                   <Button variant="ghost" size="icon-sm">
//                     <ArrowDownLeftIcon />
//                   </Button>
//                 </FloatingPanelStageTrigger>
//                 <FloatingPanelCloseTrigger aria-label="Close" asChild>
//                   <Button variant="ghost" size="icon-sm">
//                     <XIcon />
//                   </Button>
//                 </FloatingPanelCloseTrigger>
//               </FloatingPanelControl>
//             </FloatingPanelHeader>
//           </FloatingPanelDragTrigger>
//           <FloatingPanelBody>
//             <p>open is driven by React state.</p>
//           </FloatingPanelBody>
//         </FloatingPanelPopup>
//       </FloatingPanel>
//     </div>
//   );
// };

// const FloatingPanelLazyMountDemo = () => (
//   <FloatingPanel defaultSize={{ height: 220, width: 360 }} lazyMount>
//     <FloatingPanelTrigger asChild>
//       <Button size="sm" variant="outline">
//         Open panel
//       </Button>
//     </FloatingPanelTrigger>
//     <FloatingPanelPopup>
//       <FloatingPanelDragTrigger>
//         <FloatingPanelHeader>
//           <FloatingPanelTitle>
//             <GripVerticalIcon className="size-4 shrink-0 text-muted-foreground" />
//             Lazy mount
//           </FloatingPanelTitle>
//           <FloatingPanelControl>
//             <FloatingPanelStageTrigger
//               aria-label="Minimize"
//               stage="minimized"
//               asChild
//             >
//               <Button variant="ghost" size="icon-sm">
//                 <MinusIcon />
//               </Button>
//             </FloatingPanelStageTrigger>
//             <FloatingPanelStageTrigger
//               aria-label="Maximize"
//               stage="maximized"
//               asChild
//             >
//               <Button variant="ghost" size="icon-sm">
//                 <Maximize2Icon />
//               </Button>
//             </FloatingPanelStageTrigger>
//             <FloatingPanelStageTrigger
//               aria-label="Restore"
//               stage="default"
//               asChild
//             >
//               <Button variant="ghost" size="icon-sm">
//                 <ArrowDownLeftIcon />
//               </Button>
//             </FloatingPanelStageTrigger>
//             <FloatingPanelCloseTrigger aria-label="Close" asChild>
//               <Button variant="ghost" size="icon-sm">
//                 <XIcon />
//               </Button>
//             </FloatingPanelCloseTrigger>
//           </FloatingPanelControl>
//         </FloatingPanelHeader>
//       </FloatingPanelDragTrigger>
//       <FloatingPanelBody>
//         <p>Positioner and content mount when the panel first opens.</p>
//       </FloatingPanelBody>
//     </FloatingPanelPopup>
//   </FloatingPanel>
// );

// const FloatingPanelContextDemo = () => (
//   <FloatingPanel defaultSize={{ height: 220, width: 360 }}>
//     <FloatingPanelTrigger asChild>
//       <Button size="sm" variant="outline">
//         Open panel
//       </Button>
//     </FloatingPanelTrigger>
//     <FloatingPanelContext>
//       {(fp) => (
//         <p className="text-muted-foreground text-xs">
//           Panel is{" "}
//           <span className="font-medium text-foreground">
//             {fp.open ? "open" : "closed"}
//           </span>
//           .
//         </p>
//       )}
//     </FloatingPanelContext>
//     <FloatingPanelPopup>
//       <FloatingPanelDragTrigger>
//         <FloatingPanelHeader>
//           <FloatingPanelTitle>
//             <GripVerticalIcon className="size-4 shrink-0 text-muted-foreground" />
//             Context
//           </FloatingPanelTitle>
//           <FloatingPanelControl>
//             <FloatingPanelStageTrigger
//               aria-label="Minimize"
//               stage="minimized"
//               asChild
//             >
//               <Button variant="ghost" size="icon-sm">
//                 <MinusIcon />
//               </Button>
//             </FloatingPanelStageTrigger>
//             <FloatingPanelStageTrigger
//               aria-label="Maximize"
//               stage="maximized"
//               asChild
//             >
//               <Button variant="ghost" size="icon-sm">
//                 <Maximize2Icon />
//               </Button>
//             </FloatingPanelStageTrigger>
//             <FloatingPanelStageTrigger
//               aria-label="Restore"
//               stage="default"
//               asChild
//             >
//               <Button variant="ghost" size="icon-sm">
//                 <ArrowDownLeftIcon />
//               </Button>
//             </FloatingPanelStageTrigger>
//             <FloatingPanelCloseTrigger aria-label="Close" asChild>
//               <Button variant="ghost" size="icon-sm">
//                 <XIcon />
//               </Button>
//             </FloatingPanelCloseTrigger>
//           </FloatingPanelControl>
//         </FloatingPanelHeader>
//       </FloatingPanelDragTrigger>
//       <FloatingPanelBody>
//         <p>
//           Status above comes from{" "}
//           <code className="rounded bg-muted px-1 py-px">
//             FloatingPanelContext
//           </code>
//           .
//         </p>
//       </FloatingPanelBody>
//     </FloatingPanelPopup>
//   </FloatingPanel>
// );

// const ComboboxBasicDemo = () => (
//   <Combobox items={COMBOBOX_FRUITS}>
//     <ComboboxInput aria-label="Select a fruit" placeholder="Select a fruit…" />
//     <ComboboxPopup>
//       <ComboboxEmpty>No items found.</ComboboxEmpty>
//       <ComboboxList items={COMBOBOX_FRUITS}>
//         {(item) => (
//           <ComboboxItem item={item}>
//             <ComboboxItemText>{item.label}</ComboboxItemText>
//             <ComboboxItemIndicator />
//           </ComboboxItem>
//         )}
//       </ComboboxList>
//     </ComboboxPopup>
//   </Combobox>
// );

// const ComboboxDisabledDemo = () => (
//   <Combobox defaultValue={["orange"]} disabled items={COMBOBOX_FRUITS}>
//     <ComboboxInput aria-label="Select a fruit" placeholder="Select a fruit…" />

//     <ComboboxPopup>
//       <ComboboxEmpty>No items found.</ComboboxEmpty>
//       <ComboboxList items={COMBOBOX_FRUITS}>
//         {(item) => (
//           <ComboboxItem item={item}>
//             <ComboboxItemText>{item.label}</ComboboxItemText>
//             <ComboboxItemIndicator />
//           </ComboboxItem>
//         )}
//       </ComboboxList>
//     </ComboboxPopup>
//   </Combobox>
// );

// const ComboboxSizesDemo = () => (
//   <div className="flex max-w-xs flex-col gap-4">
//     <Combobox items={COMBOBOX_FRUITS}>
//       <ComboboxInput
//         aria-label="Select a fruit"
//         placeholder="Select a fruit…"
//         size="lg"
//       />

//       <ComboboxPopup>
//         <ComboboxEmpty>No items found.</ComboboxEmpty>
//         <ComboboxList items={COMBOBOX_FRUITS}>
//           {(item) => (
//             <ComboboxItem item={item}>
//               <ComboboxItemText>{item.label}</ComboboxItemText>
//               <ComboboxItemIndicator />
//             </ComboboxItem>
//           )}
//         </ComboboxList>
//       </ComboboxPopup>
//     </Combobox>
//     <Combobox items={COMBOBOX_FRUITS}>
//       <ComboboxInput
//         aria-label="Select a fruit"
//         placeholder="Select a fruit…"
//         size="sm"
//       />
//       <ComboboxPopup>
//         <ComboboxEmpty>No items found.</ComboboxEmpty>
//         <ComboboxList items={COMBOBOX_FRUITS}>
//           {(item) => (
//             <ComboboxItem item={item}>
//               <ComboboxItemText>{item.label}</ComboboxItemText>
//               <ComboboxItemIndicator />
//             </ComboboxItem>
//           )}
//         </ComboboxList>
//       </ComboboxPopup>
//     </Combobox>
//   </div>
// );

// const ComboboxWithLabelDemo = () => {
//   return (
//     <Combobox items={COMBOBOX_FRUITS}>
//       <div className="flex max-w-xs flex-col gap-2">
//         <ComboboxLabel>Fruits</ComboboxLabel>
//         <ComboboxInput
//           aria-label="Select a fruit"
//           placeholder="Select a fruit…"
//         />
//       </div>
//       <ComboboxPopup>
//         <ComboboxEmpty>No results found.</ComboboxEmpty>
//         <ComboboxList items={COMBOBOX_FRUITS}>
//           {(item) => (
//             <ComboboxItem item={item}>
//               <ComboboxItemText>{item.label}</ComboboxItemText>
//               <ComboboxItemIndicator />
//             </ComboboxItem>
//           )}
//         </ComboboxList>
//       </ComboboxPopup>
//     </Combobox>
//   );
// };

// const ComboboxAutoHighlightDemo = () => (
//   <Combobox inputBehavior="autohighlight" items={COMBOBOX_FRUITS}>
//     <ComboboxInput aria-label="Select a fruit" placeholder="Select a fruit…" />
//     <ComboboxPopup>
//       <ComboboxEmpty>No results found.</ComboboxEmpty>
//       <ComboboxList items={COMBOBOX_FRUITS}>
//         {(item) => (
//           <ComboboxItem item={item}>
//             <ComboboxItemText>{item.label}</ComboboxItemText>
//             <ComboboxItemIndicator />
//           </ComboboxItem>
//         )}
//       </ComboboxList>
//     </ComboboxPopup>
//   </Combobox>
// );

// const ComboboxClearDemo = () => (
//   <Combobox items={COMBOBOX_FRUITS}>
//     <ComboboxInput aria-label="Select a fruit" placeholder="Select a fruit…" />
//     <ComboboxPopup>
//       <ComboboxEmpty>No items found.</ComboboxEmpty>
//       <ComboboxList items={COMBOBOX_FRUITS}>
//         {(item) => (
//           <ComboboxItem item={item}>
//             <ComboboxItemText>{item.label}</ComboboxItemText>
//             <ComboboxItemIndicator />
//           </ComboboxItem>
//         )}
//       </ComboboxList>
//     </ComboboxPopup>
//   </Combobox>
// );

// const ComboboxGroupedDemo = () => (
//   <Combobox
//     groupBy={(item) => item.group}
//     groupSort={["Status", "Priority", "Team"]}
//     items={COMBOBOX_TAGS}
//   >
//     <ComboboxInput aria-label="Select a fruit" placeholder="Select a fruit…" />
//     <ComboboxPopup>
//       <ComboboxEmpty>No tags found.</ComboboxEmpty>
//       <ComboboxGroupedList items={COMBOBOX_TAGS}>
//         {([group, groupItems]) => (
//           <Fragment key={group}>
//             <ComboboxItemGroup>
//               <ComboboxItemGroupLabel>{group}</ComboboxItemGroupLabel>
//               {groupItems.map((item) => (
//                 <ComboboxItem key={item.value} item={item}>
//                   <ComboboxItemText>{item.label}</ComboboxItemText>
//                   <ComboboxItemIndicator />
//                 </ComboboxItem>
//               ))}
//             </ComboboxItemGroup>
//             {group !== "Team" ? <ComboboxSeparator /> : null}
//           </Fragment>
//         )}
//       </ComboboxGroupedList>
//     </ComboboxPopup>
//   </Combobox>
// );

// const ComboboxMultipleDemo = () => (
//   <Combobox
//     defaultValue={["apple", "strawberry"]}
//     items={COMBOBOX_FRUITS}
//     multiple
//     openOnClick
//   >
//     {({ selectedItems }) => {
//       return (
//         <>
//           <ComboboxChips>
//             {selectedItems.map((item) => (
//               <ComboboxChip
//                 key={item.value}
//                 aria-label={item.label}
//                 value={item.value}
//               >
//                 {item.label}
//               </ComboboxChip>
//             ))}
//             <ComboboxChipsInput
//               aria-label="Add fruit"
//               placeholder={"Select fruits…"}
//             />
//           </ComboboxChips>
//           <ComboboxPopup>
//             <ComboboxEmpty>No items found.</ComboboxEmpty>
//             <ComboboxList items={COMBOBOX_FRUITS}>
//               {(item) => (
//                 <ComboboxItem item={item}>
//                   <ComboboxItemText>{item.label}</ComboboxItemText>
//                   <ComboboxItemIndicator />
//                 </ComboboxItem>
//               )}
//             </ComboboxList>
//           </ComboboxPopup>
//         </>
//       );
//     }}
//   </Combobox>
// );

// const ComboboxStartAddonDemo = () => (
//   <Combobox items={COMBOBOX_FRUITS} openOnClick>
//     <ComboboxInput
//       aria-label="Search fruits"
//       placeholder="Search fruits…"
//       startAddon={<SearchIcon className="size-3" />}
//     />
//     <ComboboxPopup>
//       <ComboboxEmpty>No items found.</ComboboxEmpty>
//       <ComboboxList items={COMBOBOX_FRUITS}>
//         {(item) => (
//           <ComboboxItem item={item}>
//             <ComboboxItemText>{item.label}</ComboboxItemText>
//             <ComboboxItemIndicator />
//           </ComboboxItem>
//         )}
//       </ComboboxList>
//     </ComboboxPopup>
//   </Combobox>
// );

// const ComboboxStartAddonMultipleDemo = () => (
//   <Combobox
//     defaultValue={["apple", "grape"]}
//     items={COMBOBOX_FRUITS}
//     multiple
//     openOnClick
//     disabled
//   >
//     {({ selectedItems }) => {
//       return (
//         <>
//           <ComboboxChips
//             startAddon={<SearchIcon className="size-3" />}
//             endAddon={<XIcon className="size-3" />}
//           >
//             {selectedItems.map((item: (typeof COMBOBOX_FRUITS)[number]) => (
//               <ComboboxChip
//                 key={item.value}
//                 aria-label={item.label}
//                 value={item.value}
//               >
//                 {item.label}
//               </ComboboxChip>
//             ))}
//             <ComboboxChipsInput
//               aria-label="Add fruit"
//               placeholder={
//                 selectedItems.length > 0 ? undefined : "Select fruits…"
//               }
//             />
//           </ComboboxChips>
//           <ComboboxPopup>
//             <ComboboxEmpty>No items found.</ComboboxEmpty>
//             <ComboboxList items={COMBOBOX_FRUITS}>
//               {(item) => (
//                 <ComboboxItem item={item}>
//                   <ComboboxItemText>{item.label}</ComboboxItemText>
//                   <ComboboxItemIndicator />
//                 </ComboboxItem>
//               )}
//             </ComboboxList>
//           </ComboboxPopup>
//         </>
//       );
//     }}
//   </Combobox>
// );

// const ComboboxSelectButtonDemo = () => (
//   <Combobox
//     closeOnSelect
//     defaultValue={["apple"]}
//     items={COMBOBOX_FRUITS}
//     openOnClick
//     selectionBehavior="clear"
//     disabled
//   >
//     <ComboboxControl className="w-full max-w-xs">
//       <ComboboxControl>
//         <ComboboxTrigger asChild>
//           <Button
//             className="w-full justify-between font-normal"
//             type="button"
//             variant="outline"
//           >
//             <ComboboxValue placeholder="Select a fruit" />
//             <ChevronsUpDownIcon className="opacity-60" />
//           </Button>
//         </ComboboxTrigger>
//       </ComboboxControl>
//     </ComboboxControl>
//     <ComboboxPopup aria-label="Select fruit" className="relative">
//       <div className="border-b p-2">
//         <ComboboxInput
//           aria-label="Select a fruit"
//           placeholder="Select a fruit…"
//           showClear={false}
//           showIndicator={false}
//           startAddon={<SearchIcon className="size-3" />}
//         />
//       </div>
//       <ComboboxEmpty>No items found.</ComboboxEmpty>
//       <ComboboxList
//         items={COMBOBOX_FRUITS}
//         className="max-h-50 overflow-y-auto"
//       >
//         {(item) => (
//           <ComboboxItem item={item}>
//             <ComboboxItemText>{item.label}</ComboboxItemText>
//             <ComboboxItemIndicator />
//           </ComboboxItem>
//         )}
//       </ComboboxList>
//     </ComboboxPopup>
//   </Combobox>
// );

// const ComboboxFormDemo = () => {
//   const [message, setMessage] = useState("");
//   return (
//     <form
//       className="flex max-w-xs flex-col gap-3"
//       onSubmit={(e) => {
//         e.preventDefault();
//         setMessage(String(new FormData(e.currentTarget).get("fruit") ?? ""));
//       }}
//     >
//       <Combobox items={COMBOBOX_FRUITS} name="fruit" required>
//         <ComboboxInput placeholder="Favorite fruit…" />

//         <ComboboxPopup>
//           <ComboboxEmpty>No results found.</ComboboxEmpty>
//           <ComboboxList items={COMBOBOX_FRUITS}>
//             {(item) => (
//               <ComboboxItem item={item}>
//                 <ComboboxItemText>{item.label}</ComboboxItemText>
//                 <ComboboxItemIndicator />
//               </ComboboxItem>
//             )}
//           </ComboboxList>
//         </ComboboxPopup>
//       </Combobox>
//       <Button size="sm" type="submit">
//         Submit
//       </Button>
//       {message ? (
//         <output className="text-muted-foreground text-xs">
//           Submitted: {message}
//         </output>
//       ) : null}
//     </form>
//   );
// };

// const ColorPickerBasicDemo = () => (
//   <ColorPicker defaultValue={defaultParsed()}>
//     <ColorPickerLabel>Color</ColorPickerLabel>
//     <ColorPickerControl>
//       <ColorPickerChannelInput channel="hex" />
//       <ColorPickerChannelInput channel="alpha" />
//       <ColorPickerTrigger />
//     </ColorPickerControl>
//     <ColorPickerPositioner>
//       <ColorPickerContent>
//         <ColorPickerArea />
//         <ColorPickerHueAlphaSliders />
//       </ColorPickerContent>
//     </ColorPickerPositioner>
//   </ColorPicker>
// );

// const ColorPickerControlledDemo = () => {
//   const [value, setValue] = useState(() => parseColor("hsl(20, 100%, 50%)"));
//   return (
//     <div className="flex flex-col gap-2">
//       <output className="text-muted-foreground text-xs tabular-nums">
//         {value.toString("hex")}
//       </output>
//       <ColorPicker value={value} onValueChange={(d) => setValue(d.value)}>
//         <ColorPickerLabel>Color</ColorPickerLabel>
//         <ColorPickerControl>
//           <ColorPickerChannelInput channel="hex" />
//           <ColorPickerChannelInput channel="alpha" />
//           <ColorPickerTrigger />
//         </ColorPickerControl>
//         <ColorPickerPositioner>
//           <ColorPickerContent>
//             <ColorPickerArea />
//             <ColorPickerHueAlphaSliders />
//           </ColorPickerContent>
//         </ColorPickerPositioner>
//       </ColorPicker>
//     </div>
//   );
// };

// const ColorPickerOpenControlledDemo = () => {
//   const [open, setOpen] = useState(false);
//   return (
//     <div className="flex flex-col gap-3">
//       <Button
//         type="button"
//         variant="outline"
//         size="sm"
//         onClick={() => setOpen((o) => !o)}
//       >
//         Toggle popover
//       </Button>
//       <ColorPicker
//         open={open}
//         onOpenChange={(d) => setOpen(d.open)}
//         defaultValue={defaultParsed()}
//       >
//         <ColorPickerLabel>Color</ColorPickerLabel>
//         <ColorPickerControl>
//           <ColorPickerChannelInput channel="hex" />
//           <ColorPickerTrigger />
//         </ColorPickerControl>
//         <ColorPickerPositioner>
//           <ColorPickerContent>
//             <ColorPickerArea />
//             <ColorPickerHueAlphaSliders />
//           </ColorPickerContent>
//         </ColorPickerPositioner>
//       </ColorPicker>
//     </div>
//   );
// };

// const ColorPickerDisabledDemo = () => (
//   <ColorPicker defaultValue={defaultParsed()} disabled>
//     <ColorPickerLabel>Color</ColorPickerLabel>
//     <ColorPickerControl>
//       <ColorPickerChannelInput channel="hex" />
//       <ColorPickerTrigger />
//     </ColorPickerControl>
//     <ColorPickerPositioner>
//       <ColorPickerContent>
//         <ColorPickerArea />
//         <ColorPickerHueAlphaSliders />
//       </ColorPickerContent>
//     </ColorPickerPositioner>
//   </ColorPicker>
// );

// const ColorPickerInlineDemo = () => (
//   <ColorPicker inline defaultValue={defaultParsed()}>
//     <ColorPickerArea />
//     <ColorPickerPresetSwatches colors={PRESET_SWATCHES} />
//   </ColorPicker>
// );

// const ColorPickerInputOnlyDemo = () => (
//   <ColorPicker defaultValue={defaultParsed()}>
//     <ColorPickerLabel>Color</ColorPickerLabel>
//     <ColorPickerControl>
//       <div className="relative grid size-9 shrink-0 place-items-center overflow-hidden rounded-lg border border-input">
//         <ColorPickerTransparencyGrid className="col-start-1 row-start-1 size-full" />
//         <ColorPickerValueSwatch className="col-start-1 row-start-1 z-1 size-full rounded-[inherit]" />
//       </div>
//       <ColorPickerChannelInput channel="hex" />
//       <ColorPickerEyeDropperTrigger />
//     </ColorPickerControl>
//   </ColorPicker>
// );

// const ColorPickerSliderOnlyDemo = () => (
//   <ColorPicker defaultFormat="rgba" defaultOpen defaultValue={defaultParsed()}>
//     <ColorPickerLabel>RGB</ColorPickerLabel>
//     <ColorPickerControl>
//       <ColorPickerValueText
//         className="min-w-0 flex-1 truncate text-start"
//         format="hex"
//       />
//       <ColorPickerTrigger />
//     </ColorPickerControl>
//     <ColorPickerPositioner>
//       <ColorPickerContent>
//         <div className="flex flex-col gap-3">
//           {(["red", "green", "blue"] as const).map((ch) => (
//             <ColorPickerChannelSliderRow key={ch} channel={ch} />
//           ))}
//         </div>
//       </ColorPickerContent>
//     </ColorPickerPositioner>
//   </ColorPicker>
// );

// const ColorPickerSwatchOnlyDemo = () => (
//   <ColorPicker defaultOpen defaultValue={defaultParsed()}>
//     <ColorPickerLabel>Presets</ColorPickerLabel>
//     <ColorPickerControl>
//       <ColorPickerValueText
//         className="min-w-0 flex-1 truncate text-start"
//         format="hex"
//       />
//       <ColorPickerTrigger />
//     </ColorPickerControl>
//     <ColorPickerPositioner>
//       <ColorPickerContent className="w-auto min-w-48">
//         <ColorPickerPresetSwatches colors={PRESET_SWATCHES} />
//       </ColorPickerContent>
//     </ColorPickerPositioner>
//   </ColorPicker>
// );

// const ColorPickerSwatchesInPopoverDemo = () => (
//   <ColorPicker defaultValue={defaultParsed()} closeOnSelect>
//     <ColorPickerLabel>With swatches</ColorPickerLabel>
//     <ColorPickerControl>
//       <ColorPickerChannelInput channel="hex" />
//       <ColorPickerTrigger />
//     </ColorPickerControl>
//     <ColorPickerPositioner>
//       <ColorPickerContent>
//         <ColorPickerArea />
//         <ColorPickerHueAlphaSliders />
//         <ColorPickerPresetSwatches colors={PRESET_SWATCHES} />
//       </ColorPickerContent>
//     </ColorPickerPositioner>
//   </ColorPicker>
// );

// const ColorPickerValueSwatchDemo = () => (
//   <ColorPicker inline defaultValue={defaultParsed()}>
//     <ColorPickerArea />
//     <div className="flex items-center gap-3">
//       <div className="relative grid size-8 shrink-0 place-items-center overflow-hidden rounded border border-border">
//         <ColorPickerTransparencyGrid className="col-start-1 row-start-1 size-full" />
//         <ColorPickerValueSwatch className="col-start-1 row-start-1 z-1 size-full rounded-[inherit]" />
//       </div>
//       <div className="flex flex-1 flex-col gap-2.5">
//         <ColorPickerChannelSlider channel="hue" />
//         <ColorPickerChannelSlider channel="alpha" />
//       </div>
//     </div>
//   </ColorPicker>
// );

// const ColorPickerFormatDemo = () => (
//   <ColorPicker inline defaultFormat="rgba" defaultValue={defaultParsed()}>
//     <div className="flex flex-wrap items-center gap-2">
//       <ColorPickerFormatTrigger>Format</ColorPickerFormatTrigger>
//       <ColorPickerFormatSelect>
//         <option value="hsla">HSLA</option>
//         <option value="rgba">RGBA</option>
//         <option value="hex">HEX</option>
//       </ColorPickerFormatSelect>
//     </div>
//     <ColorPickerView format="rgba">
//       <div className="flex gap-2">
//         <ColorPickerChannelInput channel="red" />
//         <ColorPickerChannelInput channel="green" />
//         <ColorPickerChannelInput channel="blue" />
//         <ColorPickerChannelInput channel="alpha" />
//       </div>
//     </ColorPickerView>
//     <ColorPickerView format="hsla">
//       <div className="flex flex-wrap gap-2">
//         <ColorPickerChannelInput channel="hue" />
//         <ColorPickerChannelInput channel="saturation" />
//         <ColorPickerChannelInput channel="lightness" />
//         <ColorPickerChannelInput channel="alpha" />
//       </div>
//     </ColorPickerView>
//     <ColorPickerView format={"rgba"}>
//       <ColorPickerChannelInput channel="hex" />
//     </ColorPickerView>
//   </ColorPicker>
// );

// const ColorPickerRootProviderDemo = () => {
//   const colorPicker = useColorPicker({ defaultValue: defaultParsed() });
//   return (
//     <div className="flex flex-col gap-2">
//       <output className="text-muted-foreground text-xs">
//         {colorPicker.valueAsString}
//       </output>
//       <ColorPickerRootProvider value={colorPicker}>
//         <ColorPickerLabel>Color</ColorPickerLabel>
//         <ColorPickerControl>
//           <ColorPickerChannelInput channel="hex" />
//           <ColorPickerChannelInput channel="alpha" />
//           <ColorPickerTrigger />
//         </ColorPickerControl>
//         <ColorPickerPositioner>
//           <ColorPickerContent>
//             <ColorPickerArea />
//             <ColorPickerHueAlphaSliders />
//             <ColorPickerSwatchGroup>
//               {PRESET_SWATCHES.map((c) => (
//                 <ColorPickerSwatchTrigger key={c} value={c}>
//                   <ColorPickerSwatch value={c}>
//                     <ColorPickerSwatchIndicator />
//                   </ColorPickerSwatch>
//                 </ColorPickerSwatchTrigger>
//               ))}
//             </ColorPickerSwatchGroup>
//           </ColorPickerContent>
//         </ColorPickerPositioner>
//       </ColorPickerRootProvider>
//     </div>
//   );
// };

// const ColorPickerFormDemo = () => {
//   const [msg, setMsg] = useState<string | null>(null);
//   return (
//     <form
//       className="flex flex-col gap-2"
//       onSubmit={(e) => {
//         e.preventDefault();
//         const fd = new FormData(e.currentTarget);
//         setMsg(String(fd.get("accent") ?? ""));
//       }}
//     >
//       <ColorPicker inline name="accent" defaultValue={defaultParsed()}>
//         <ColorPickerArea />
//         <ColorPickerHueAlphaSliders />
//         <ColorPickerView format="rgba">
//           <div className="flex gap-2">
//             <ColorPickerChannelInput channel="hex" />
//             <ColorPickerChannelInput channel="alpha" />
//           </div>
//         </ColorPickerView>
//         <ColorPickerView format="hsla">
//           <div className="flex flex-wrap gap-2">
//             <ColorPickerChannelInput channel="hue" />
//             <ColorPickerChannelInput channel="saturation" />
//             <ColorPickerChannelInput channel="lightness" />
//           </div>
//         </ColorPickerView>
//       </ColorPicker>
//       <Button type="submit" size="sm">
//         Read hidden input
//       </Button>
//       {msg ? (
//         <span className="text-muted-foreground text-xs tabular-nums">
//           {msg}
//         </span>
//       ) : null}
//     </form>
//   );
// };

// const ColorPickerWithFieldDemo = () => (
//   <Field className="max-w-xs">
//     <ColorPicker defaultValue={defaultParsed()}>
//       <ColorPickerLabel>Label</ColorPickerLabel>
//       <ColorPickerControl>
//         <ColorPickerChannelInput channel="hex" />
//         <ColorPickerChannelInput channel="alpha" />
//         <ColorPickerTrigger />
//       </ColorPickerControl>
//       <ColorPickerPositioner>
//         <ColorPickerContent>
//           <ColorPickerArea />
//           <ColorPickerHueAlphaSliders />
//         </ColorPickerContent>
//       </ColorPickerPositioner>
//     </ColorPicker>
//     <FieldDescription>Helper text from Field</FieldDescription>
//     <FieldError>Example error state copy</FieldError>
//   </Field>
// );

// const FieldBasicDemo = () => (
//   <Field className="max-w-xs">
//     <FieldLabel>Name</FieldLabel>
//     <FieldInput placeholder="Enter name" />
//     <FieldDescription>Visible on your profile</FieldDescription>
//   </Field>
// );

// const FieldRequiredDemo = () => (
//   <Field className="max-w-xs" required>
//     <FieldLabel>
//       Password
//       <FieldRequiredIndicator />
//     </FieldLabel>
//     <FieldInput placeholder="Enter password" required type="password" />
//     <FieldError>Please fill out this field.</FieldError>
//   </Field>
// );

// const FieldRequiredIndicatorCustomDemo = () => (
//   <Field className="max-w-xs" required>
//     <FieldLabel>
//       Username
//       <FieldRequiredIndicator fallback=" (required)" />
//     </FieldLabel>
//     <FieldInput placeholder="jane" required type="text" />
//   </Field>
// );

// const FieldDisabledDemo = () => (
//   <Field className="max-w-xs" disabled>
//     <FieldLabel>Email</FieldLabel>
//     <FieldInput disabled placeholder="Enter your email" type="email" />
//     <FieldDescription>This field is currently disabled.</FieldDescription>
//   </Field>
// );

// const FieldInvalidDemo = () => (
//   <Field className="max-w-xs" invalid>
//     <FieldLabel>Email</FieldLabel>
//     <FieldInput placeholder="Enter your email" type="email" />
//     <FieldError>Please enter a valid email address.</FieldError>
//   </Field>
// );

// const FieldTextareaDemo = () => (
//   <Field className="max-w-xs">
//     <FieldLabel>Bio</FieldLabel>
//     <FieldInput asChild>
//       <Textarea placeholder="Tell us about yourself…" />
//     </FieldInput>
//     <FieldDescription>
//       Write a short bio. Maximum 500 characters.
//     </FieldDescription>
//   </Field>
// );

// const FieldCheckboxDemo = () => (
//   <Field className="max-w-md">
//     <FieldLabel className="flex cursor-pointer items-center gap-2 font-normal">
//       <CheckboxRoot>
//         <Checkbox />
//       </CheckboxRoot>
//       Accept terms and conditions
//     </FieldLabel>
//   </Field>
// );

// const FieldCustomControlDemo = () => (
//   <Field className="max-w-xs" invalid>
//     <FieldLabel>Custom input</FieldLabel>
//     <FieldContext>
//       {(ctx) => (
//         <Input
//           className="w-full"
//           placeholder="Wired via getInputProps()"
//           {...ctx.getInputProps()}
//         />
//       )}
//     </FieldContext>
//     <FieldDescription>Uses Field.Context + getInputProps().</FieldDescription>
//     <FieldError>This field has an error</FieldError>
//   </Field>
// );

// const FieldRootProviderDemo = () => {
//   const field = useField({ id: "showcase-field-provider" });
//   return (
//     <FieldRootProvider value={field}>
//       <div className="flex max-w-xs flex-col gap-1.5">
//         <label
//           className="text-sm font-medium text-foreground leading-none"
//           {...field.getLabelProps()}
//         >
//           External label
//         </label>
//         <Input
//           placeholder="Controlled by useField()"
//           {...field.getInputProps()}
//         />
//         <span
//           className="text-muted-foreground text-xs"
//           {...field.getHelperTextProps()}
//         >
//           RootProvider + useField() mirror the primitive API.
//         </span>
//       </div>
//     </FieldRootProvider>
//   );
// };

// const FieldsetBillingDemo = () => (
//   <Fieldset className="max-w-md">
//     <FieldsetLegend>Billing details</FieldsetLegend>
//     <Field>
//       <FieldLabel>Company</FieldLabel>
//       <FieldInput placeholder="Enter company name" type="text" />
//       <FieldDescription>
//         The name that will appear on invoices.
//       </FieldDescription>
//     </Field>
//     <Field>
//       <FieldLabel>Tax ID</FieldLabel>
//       <FieldInput placeholder="Enter tax identification number" type="text" />
//       <FieldDescription>
//         Your business tax identification number.
//       </FieldDescription>
//     </Field>
//   </Fieldset>
// );

// const FieldsetWithDescriptionDemo = () => (
//   <Fieldset className="max-w-md">
//     <FieldsetLegend>Workspace</FieldsetLegend>
//     <FieldsetDescription>
//       These values apply to all projects in this workspace.
//     </FieldsetDescription>
//     <Field>
//       <FieldLabel>Display name</FieldLabel>
//       <FieldInput placeholder="Acme Corp" />
//     </Field>
//   </Fieldset>
// );

// const FieldsetInvalidDemo = () => (
//   <Fieldset className="max-w-md" invalid>
//     <FieldsetLegend>Account information</FieldsetLegend>
//     <FieldsetError>Please fix the errors below to continue.</FieldsetError>
//     <Field invalid>
//       <FieldLabel>Username</FieldLabel>
//       <FieldInput defaultValue="jo" />
//       <FieldError>Username must be at least 3 characters</FieldError>
//     </Field>
//     <Field invalid>
//       <FieldLabel>Email</FieldLabel>
//       <FieldInput defaultValue="invalid-email" type="email" />
//       <FieldError>Please enter a valid email address</FieldError>
//     </Field>
//   </Fieldset>
// );

// const FieldsetDisabledDemo = () => (
//   <Fieldset className="max-w-md" disabled>
//     <FieldsetLegend>Read-only profile</FieldsetLegend>
//     <Field disabled>
//       <FieldLabel>Name</FieldLabel>
//       <FieldInput defaultValue="Jane Doe" disabled />
//     </Field>
//     <Field disabled>
//       <FieldLabel>Email</FieldLabel>
//       <FieldInput defaultValue="jane@example.com" disabled type="email" />
//     </Field>
//   </Fieldset>
// );

// const FieldsetCheckboxDemo = () => (
//   <Fieldset className="max-w-md">
//     <FieldsetLegend>Email preferences</FieldsetLegend>
//     <CheckboxRoot defaultChecked>
//       <Checkbox />
//       <CheckboxLabel>Product updates</CheckboxLabel>
//     </CheckboxRoot>
//     <CheckboxRoot>
//       <Checkbox />
//       <CheckboxLabel>Marketing emails</CheckboxLabel>
//     </CheckboxRoot>
//   </Fieldset>
// );

// const FieldsetRootProviderDemo = () => {
//   const fieldset = useFieldset({ id: "showcase-fieldset-provider" });
//   return (
//     <FieldsetRootProvider
//       className="flex w-full max-w-md min-w-0 flex-col gap-3 border-0 p-0 text-foreground"
//       value={fieldset}
//     >
//       <FieldsetLegend {...fieldset.getLegendProps()}>
//         Contact details
//       </FieldsetLegend>
//       <Field>
//         <FieldLabel>Name</FieldLabel>
//         <FieldInput placeholder="John Doe" />
//       </Field>
//       <Field>
//         <FieldLabel>Email</FieldLabel>
//         <FieldInput placeholder="john@example.com" type="email" />
//       </Field>
//     </FieldsetRootProvider>
//   );
// };

// const FileUploadDropzonePreviewsDemo = () => (
//   <FileUpload className="max-w-md" maxFiles={5}>
//     <FileUploadLabel>Dropzone + typed previews</FileUploadLabel>
//     <FileUploadDropzone>
//       <UploadIcon className="size-8 text-muted-foreground" />
//       <div className="flex flex-col gap-0.5">
//         <span className="font-medium text-sm">Drag files here</span>
//         <span className="text-muted-foreground text-xs">
//           or click to browse
//         </span>
//       </div>
//     </FileUploadDropzone>
//     <FileUploadItemGroup>
//       <FileUploadContext>
//         {({ acceptedFiles }) =>
//           acceptedFiles.map((file) => (
//             <FileUploadItem key={`${file.name}-${file.size}`} file={file}>
//               <FileUploadItemPreview type="image/*">
//                 <FileUploadItemPreviewImage />
//               </FileUploadItemPreview>
//               <FileUploadItemPreview type=".*">
//                 <FileIcon />
//               </FileUploadItemPreview>
//               <div className="flex min-w-0 flex-1 flex-col gap-0.5">
//                 <FileUploadItemName />
//                 <FileUploadItemSizeText />
//               </div>
//               <FileUploadItemDeleteTrigger aria-label={`Remove ${file.name}`}>
//                 <XIcon />
//               </FileUploadItemDeleteTrigger>
//             </FileUploadItem>
//           ))
//         }
//       </FileUploadContext>
//     </FileUploadItemGroup>
//   </FileUpload>
// );

// const AVATAR_MAX_BYTES = 2 * 1024 * 1024;

// const FileUploadAvatarCircleDemo = () => (
//   <FileUpload
//     accept={{ "image/png": [".png"], "image/jpeg": [".jpg", ".jpeg"] }}
//     className="w-full max-w-xs flex-col items-center gap-4"
//     maxFileSize={AVATAR_MAX_BYTES}
//     maxFiles={1}
//   >
//     <FileUploadLabel className="sr-only">Avatar photo</FileUploadLabel>
//     <div className="relative size-48 shrink-0">
//       <FileUploadContext>
//         {({ acceptedFiles }) => {
//           if (acceptedFiles.length <= 0) {
//             return (
//               <FileUploadDropzone
//                 className={cn(
//                   "cursor-pointer flex size-48 flex-col items-center justify-center gap-2 rounded-full border-2 border-dashed border-input bg-muted/20 p-4 transition-colors",
//                   "hover:bg-muted/35 data-dragging:border-primary data-dragging:bg-primary/5",
//                 )}
//               >
//                 <UserRoundIcon className="size-12 text-muted-foreground" />
//                 <span className="px-2 text-center text-muted-foreground text-xs leading-tight">
//                   Tap or drop image
//                 </span>
//               </FileUploadDropzone>
//             );
//           }

//           return (
//             <FileUploadItemGroup
//               className={cn(
//                 "absolute inset-0 m-0 flex items-center justify-center p-0",
//               )}
//             >
//               {acceptedFiles.map((file) => (
//                 <FileUploadItem
//                   key={`${file.name}-${file.size}`}
//                   className="relative size-full max-h-48 max-w-48 border-0 bg-transparent p-0 shadow-none"
//                   file={file}
//                 >
//                   <FileUploadItemPreview
//                     className="size-full overflow-hidden rounded-full border-0"
//                     type="image/*"
//                   >
//                     <FileUploadItemPreviewImage className="size-full max-h-none max-w-none border-0 object-cover" />
//                   </FileUploadItemPreview>
//                   <FileUploadItemDeleteTrigger
//                     aria-label={`Remove ${file.name}`}
//                     className="absolute top-5 right-3 z-10 rounded-full bg-background p-1 hover:bg-muted"
//                   >
//                     <XIcon className="stroke-[2.5]" />
//                   </FileUploadItemDeleteTrigger>
//                 </FileUploadItem>
//               ))}
//             </FileUploadItemGroup>
//           );
//         }}
//       </FileUploadContext>
//     </div>
//     <FileUploadContext>
//       {({ acceptedFiles }) => (
//         <div className="flex flex-col items-center gap-1 text-center">
//           <p className="font-semibold text-base text-foreground leading-tight">
//             {acceptedFiles.length > 0 ? "Avatar uploaded" : "Add your avatar"}
//           </p>
//           <p className="text-muted-foreground text-sm leading-snug">
//             PNG, JPG up to 2MB
//           </p>
//         </div>
//       )}
//     </FileUploadContext>
//   </FileUpload>
// );

// const FileUploadAvatarSoftDemo = () => (
//   <FileUpload
//     accept={{ "image/*": [".png", ".jpg", ".jpeg", ".webp"] }}
//     className="max-w-xs"
//     maxFiles={1}
//   >
//     <FileUploadLabel>Portrait (4px radius preview)</FileUploadLabel>
//     <FileUploadDropzone className="min-h-24 rounded-lg border-solid">
//       <ImageIcon className="size-7 text-muted-foreground" />
//       <span className="text-muted-foreground text-xs">
//         Square-ish drop target
//       </span>
//     </FileUploadDropzone>
//     <FileUploadItemGroup>
//       <FileUploadContext>
//         {({ acceptedFiles }) =>
//           acceptedFiles.map((file) => (
//             <FileUploadItem
//               key={`${file.name}-${file.size}`}
//               className="border-0 bg-transparent p-0 shadow-none"
//               file={file}
//             >
//               <FileUploadItemPreview type="image/*" className="size-20">
//                 <FileUploadItemPreviewImage className="" />
//               </FileUploadItemPreview>
//               <div className="flex min-w-0 flex-1 flex-col justify-center gap-1">
//                 <FileUploadItemName />
//                 <FileUploadItemSizeText />
//               </div>
//               <FileUploadItemDeleteTrigger aria-label={`Remove ${file.name}`}>
//                 <XIcon />
//               </FileUploadItemDeleteTrigger>
//             </FileUploadItem>
//           ))
//         }
//       </FileUploadContext>
//     </FileUploadItemGroup>
//   </FileUpload>
// );

// const FileUploadAvatarPickerDemo = () => (
//   <FileUpload
//     accept={{ "image/png": [".png"], "image/jpeg": [".jpg", ".jpeg"] }}
//     className="w-full max-w-xs flex-col items-center gap-4"
//     maxFileSize={AVATAR_MAX_BYTES}
//     maxFiles={1}
//   >
//     <FileUploadLabel className="sr-only">Profile photo</FileUploadLabel>
//     <div className="relative size-48 shrink-0">
//       <FileUploadItemGroup className="absolute inset-0 m-0 gap-0 p-0">
//         <FileUploadContext>
//           {({ acceptedFiles }) =>
//             acceptedFiles.map((file) => (
//               <FileUploadItem
//                 key={`${file.name}-${file.size}`}
//                 className="relative size-full border-0 bg-transparent p-0 shadow-none"
//                 file={file}
//               >
//                 <FileUploadItemPreview
//                   className="size-full overflow-hidden rounded-full border-0"
//                   type="image/*"
//                 >
//                   <FileUploadItemPreviewImage className="size-full max-h-none max-w-none border-0 object-cover" />
//                 </FileUploadItemPreview>
//                 <FileUploadItemDeleteTrigger
//                   aria-label="Remove photo"
//                   className="absolute top-2 right-2 z-10 flex size-8 items-center justify-center rounded-full bg-black/85 text-white shadow-md hover:bg-black/75 focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background dark:bg-black/90 dark:hover:bg-black/80 [&_svg]:text-white"
//                 >
//                   <XIcon className="size-4 stroke-[2.5]" />
//                 </FileUploadItemDeleteTrigger>
//               </FileUploadItem>
//             ))
//           }
//         </FileUploadContext>
//       </FileUploadItemGroup>
//       <FileUploadContext>
//         {({ acceptedFiles }) => (
//           <FileUploadDropzone
//             className={cn(
//               "absolute inset-0 flex size-full min-h-0 flex-col items-center justify-center gap-2 rounded-full border-2 border-dashed border-input bg-muted/20 p-3 transition-colors",
//               "hover:bg-muted/35 data-dragging:border-primary data-dragging:bg-primary/5",
//               acceptedFiles.length > 0 && "pointer-events-none opacity-0",
//             )}
//           >
//             <CameraIcon className="size-10 text-muted-foreground" />
//             <span className="px-2 text-center text-muted-foreground text-xs leading-tight">
//               Tap or drop image
//             </span>
//           </FileUploadDropzone>
//         )}
//       </FileUploadContext>
//     </div>
//     <FileUploadContext>
//       {({ acceptedFiles }) => (
//         <div className="flex flex-col items-center gap-1 text-center">
//           <p className="font-semibold text-base text-foreground leading-tight">
//             {acceptedFiles.length > 0 ? "Avatar uploaded" : "Add your avatar"}
//           </p>
//           <p className="text-muted-foreground text-sm leading-snug">
//             PNG, JPG up to 2MB
//           </p>
//         </div>
//       )}
//     </FileUploadContext>
//   </FileUpload>
// );

// const FileUploadButtonGroupRowDemo = () => (
//   <FileUpload className="max-w-lg" invalid>
//     <FileUploadLabel>Input-style row + ButtonGroup</FileUploadLabel>
//     <ButtonGroup className="w-full max-w-md truncate" invalid>
//       <FileUploadContext>
//         {({ acceptedFiles }) => {
//           return (
//             <>
//               <FileUploadTrigger asChild>
//                 <Button
//                   variant="outline"
//                   className="max-w-full flex-1 truncate block text-start"
//                 >
//                   {acceptedFiles.length > 0
//                     ? acceptedFiles.map((f) => f.name).join(", ")
//                     : "No file chosen"}
//                 </Button>
//               </FileUploadTrigger>
//               {acceptedFiles.length > 0 && <GroupSeparator />}
//               <FileUploadClearTrigger asChild>
//                 <Button variant="outline">
//                   <XIcon />
//                 </Button>
//               </FileUploadClearTrigger>
//               <GroupSeparator />
//               <FileUploadTrigger asChild>
//                 <Button variant="outline">
//                   <PaperclipIcon />
//                 </Button>
//               </FileUploadTrigger>
//             </>
//           );
//         }}
//       </FileUploadContext>
//     </ButtonGroup>
//     {/* <FileUploadItemGroup className="mt-2">
//       <FileUploadContext>
//         {({ acceptedFiles }) =>
//           acceptedFiles.map((file) => (
//             <FileUploadItem key={`${file.name}-${file.size}`} file={file}>
//               <FileUploadItemPreview type="image/*">
//                 <FileUploadItemPreviewImage className="size-9" />
//               </FileUploadItemPreview>
//               <FileUploadItemPreview type=".*">
//                 <FileTextIcon className="size-4" />
//               </FileUploadItemPreview>
//               <FileUploadItemName />
//               <FileUploadItemSizeText />
//               <FileUploadItemDeleteTrigger aria-label={`Remove ${file.name}`}>
//                 <XIcon />
//               </FileUploadItemDeleteTrigger>
//             </FileUploadItem>
//           ))
//         }
//       </FileUploadContext>
//     </FileUploadItemGroup> */}
//   </FileUpload>
// );

// const FileUploadTriggerCompactDemo = () => (
//   <FileUpload className="max-w-md" maxFiles={3}>
//     <FileUploadLabel>Trigger only</FileUploadLabel>
//     <div className="flex flex-wrap items-center gap-2">
//       <FileUploadTrigger asChild>
//         <Button variant="outline">
//           <PaperclipIcon />
//           Attach files
//         </Button>
//       </FileUploadTrigger>
//       <FileUploadClearTrigger asChild>
//         <Button variant="outline">
//           <XIcon />
//           Clear all
//         </Button>
//       </FileUploadClearTrigger>
//     </div>
//     <FileUploadItemGroup className="mt-2">
//       <FileUploadContext>
//         {({ acceptedFiles }) =>
//           acceptedFiles.map((file) => (
//             <FileUploadItem key={`${file.name}-${file.size}`} file={file}>
//               <FileUploadItemName />
//               <FileUploadItemSizeText />
//               <FileUploadItemDeleteTrigger aria-label={`Remove ${file.name}`}>
//                 <XIcon />
//               </FileUploadItemDeleteTrigger>
//             </FileUploadItem>
//           ))
//         }
//       </FileUploadContext>
//     </FileUploadItemGroup>
//   </FileUpload>
// );

// const FileUploadInitialFilesDemo = () => {
//   const defaultAcceptedFiles = useMemo(() => {
//     if (typeof File === "undefined") {
//       return [];
//     }
//     return [
//       new File(["demo"], "notes.txt", { type: "text/plain" }),
//       new File(["{}"], "config.json", { type: "application/json" }),
//     ];
//   }, []);

//   return (
//     <FileUpload
//       className="max-w-md"
//       defaultAcceptedFiles={defaultAcceptedFiles}
//     >
//       <FileUploadLabel>Initial files (defaultAcceptedFiles)</FileUploadLabel>
//       <FileUploadItemGroup>
//         <FileUploadContext>
//           {({ acceptedFiles }) =>
//             acceptedFiles.map((file) => (
//               <FileUploadItem key={`${file.name}-${file.size}`} file={file}>
//                 <FileUploadItemPreview type=".*">
//                   <FileIcon />
//                 </FileUploadItemPreview>
//                 <FileUploadItemName />
//                 <FileUploadItemSizeText />
//                 <FileUploadItemDeleteTrigger aria-label={`Remove ${file.name}`}>
//                   <XIcon />
//                 </FileUploadItemDeleteTrigger>
//               </FileUploadItem>
//             ))
//           }
//         </FileUploadContext>
//       </FileUploadItemGroup>
//       <FileUploadTrigger>Add more</FileUploadTrigger>
//     </FileUpload>
//   );
// };

// const FileUploadRejectedDemo = () => (
//   <FileUpload className="max-w-md" maxFileSize={500} maxFiles={2}>
//     <FileUploadLabel>Rejections (&lt; 500 bytes)</FileUploadLabel>
//     <FileUploadDropzone>
//       <UploadIcon className="size-6 text-muted-foreground" />
//       <span className="text-muted-foreground text-xs">
//         Try a large file to see rejectedFiles
//       </span>
//     </FileUploadDropzone>
//     <FileUploadContext>
//       {({ rejectedFiles }) =>
//         rejectedFiles.length > 0 ? (
//           <ul className="rounded-md border border-destructive/30 bg-destructive/5 px-3 py-2 text-destructive text-xs">
//             {rejectedFiles.map((rej) => (
//               <li key={`${rej.file.name}-${rej.file.size}`}>
//                 {rej.file.name}: {rej.errors.join(", ")}
//               </li>
//             ))}
//           </ul>
//         ) : null
//       }
//     </FileUploadContext>
//     <FileUploadItemGroup>
//       <FileUploadContext>
//         {({ acceptedFiles }) =>
//           acceptedFiles.map((file) => (
//             <FileUploadItem key={`${file.name}-${file.size}`} file={file}>
//               <FileUploadItemName />
//               <FileUploadItemDeleteTrigger aria-label={`Remove ${file.name}`}>
//                 <XIcon />
//               </FileUploadItemDeleteTrigger>
//             </FileUploadItem>
//           ))
//         }
//       </FileUploadContext>
//     </FileUploadItemGroup>
//   </FileUpload>
// );

// const FileUploadWithFieldDemo = () => (
//   <Field className="max-w-md" invalid>
//     <FieldLabel>Evidence upload</FieldLabel>
//     <FileUpload maxFiles={2} maxFileSize={2000}>
//       <FileUploadDropzone className="min-h-28">
//         <FileTextIcon className="size-6 text-muted-foreground" />
//         <span className="text-muted-foreground text-xs">
//           Max 2 files, 2KB each (invalid Field wrapper for demo)
//         </span>
//       </FileUploadDropzone>
//       <FileUploadItemGroup>
//         <FileUploadContext>
//           {({ acceptedFiles }) =>
//             acceptedFiles.map((file) => (
//               <FileUploadItem key={`${file.name}-${file.size}`} file={file}>
//                 <FileUploadItemName />
//                 <FileUploadItemDeleteTrigger aria-label={`Remove ${file.name}`}>
//                   <XIcon />
//                 </FileUploadItemDeleteTrigger>
//               </FileUploadItem>
//             ))
//           }
//         </FileUploadContext>
//       </FileUploadItemGroup>
//     </FileUpload>
//     <FieldError>Attach at least one document to continue.</FieldError>
//   </Field>
// );

// const FileUploadDropzoneNestedTriggerDemo = () => (
//   <FileUpload className="max-w-md" maxFiles={4}>
//     <FileUploadLabel>Dropzone disableClick + nested trigger</FileUploadLabel>
//     <FileUploadDropzone disableClick>
//       <UploadIcon className="size-7 text-muted-foreground" />
//       <p className="text-muted-foreground text-xs">
//         Drag here — use the button
//       </p>
//       <FileUploadTrigger asChild>
//         <Button size="sm" variant="default">
//           Choose files
//         </Button>
//       </FileUploadTrigger>
//     </FileUploadDropzone>
//     <FileUploadItemGroup>
//       <FileUploadContext>
//         {({ acceptedFiles }) =>
//           acceptedFiles.map((file) => (
//             <FileUploadItem key={`${file.name}-${file.size}`} file={file}>
//               <FileUploadItemName />
//               <FileUploadItemSizeText />
//               <FileUploadItemDeleteTrigger aria-label={`Remove ${file.name}`}>
//                 <XIcon />
//               </FileUploadItemDeleteTrigger>
//             </FileUploadItem>
//           ))
//         }
//       </FileUploadContext>
//     </FileUploadItemGroup>
//   </FileUpload>
// );

// const FileUploadGridPreviewsDemo = () => (
//   <FileUpload accept={{ "image/*": [] }} className="max-w-lg" maxFiles={8}>
//     <FileUploadLabel>Image grid (multi preview)</FileUploadLabel>
//     <FileUploadDropzone className="min-h-28">
//       <ImageIcon className="size-7 text-muted-foreground" />
//       <span className="text-muted-foreground text-xs">Up to 8 images</span>
//     </FileUploadDropzone>
//     <FileUploadItemGroup className="grid grid-cols-2 gap-2 sm:grid-cols-3">
//       <FileUploadContext>
//         {({ acceptedFiles }) =>
//           acceptedFiles.map((file) => (
//             <FileUploadItem
//               key={`${file.name}-${file.size}`}
//               className="flex-col items-stretch gap-2 p-2"
//               file={file}
//             >
//               <FileUploadItemPreview type="image/*">
//                 <FileUploadItemPreviewImage className="aspect-square w-full max-w-none" />
//               </FileUploadItemPreview>
//               <div className="flex w-full items-start justify-between gap-1">
//                 <div className="min-w-0">
//                   <FileUploadItemName className="text-xs" />
//                   <FileUploadItemSizeText />
//                 </div>
//                 <FileUploadItemDeleteTrigger aria-label={`Remove ${file.name}`}>
//                   <XIcon />
//                 </FileUploadItemDeleteTrigger>
//               </div>
//             </FileUploadItem>
//           ))
//         }
//       </FileUploadContext>
//     </FileUploadItemGroup>
//   </FileUpload>
// );

// const FileUploadRootProviderDemo = () => {
//   const fileUpload = useFileUpload({ maxFiles: 3 });

//   return (
//     <FileUploadRootProvider className="max-w-md items-start" value={fileUpload}>
//       <FileUploadLabel>RootProvider + useFileUpload</FileUploadLabel>
//       <div className="flex flex-wrap gap-2">
//         <Button
//           size="sm"
//           type="button"
//           variant="outline"
//           onClick={() => {
//             fileUpload.openFilePicker();
//           }}
//         >
//           Open picker
//         </Button>
//         <Button
//           size="sm"
//           type="button"
//           variant="secondary"
//           onClick={() => {
//             fileUpload.clearFiles();
//           }}
//         >
//           Clear files
//         </Button>
//       </div>
//       <p className="text-muted-foreground text-xs">
//         {fileUpload.acceptedFiles.length} accepted · dragging:{" "}
//         {fileUpload.dragging ? "yes" : "no"}
//       </p>
//       <FileUploadItemGroup>
//         {fileUpload.acceptedFiles.map((file) => (
//           <FileUploadItem key={`${file.name}-${file.size}`} file={file}>
//             <FileUploadItemName />
//             <FileUploadItemDeleteTrigger aria-label={`Remove ${file.name}`}>
//               <XIcon />
//             </FileUploadItemDeleteTrigger>
//           </FileUploadItem>
//         ))}
//       </FileUploadItemGroup>
//     </FileUploadRootProvider>
//   );
// };

// const IMAGE_CROPPER_SAMPLE =
//   "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800";

// const ImageCropperBasicDemo = () => (
//   <ImageCropper className="max-w-md">
//     <ImageCropperViewport>
//       <ImageCropperImage alt="Mountain" src={IMAGE_CROPPER_SAMPLE} />
//       <ImageCropperSelection>
//         {imageCropperHandles.map((position) => (
//           <ImageCropperHandle key={position} position={position} />
//         ))}
//         <ImageCropperGrid axis="horizontal" />
//         <ImageCropperGrid axis="vertical" />
//       </ImageCropperSelection>
//     </ImageCropperViewport>
//   </ImageCropper>
// );

// const ImageCropperAspectRatioDemo = () => (
//   <ImageCropper aspectRatio={1} className="max-w-xs">
//     <ImageCropperViewport className="aspect-square max-h-80">
//       <ImageCropperImage alt="Mountain" src={IMAGE_CROPPER_SAMPLE} />
//       <ImageCropperSelection>
//         {imageCropperHandles.map((position) => (
//           <ImageCropperHandle key={position} position={position} />
//         ))}
//         <ImageCropperGrid axis="horizontal" />
//         <ImageCropperGrid axis="vertical" />
//       </ImageCropperSelection>
//     </ImageCropperViewport>
//   </ImageCropper>
// );

// const ImageCropperCircleDemo = () => (
//   <ImageCropper className="max-w-md" cropShape="circle">
//     <ImageCropperViewport>
//       <ImageCropperImage alt="Mountain" src={IMAGE_CROPPER_SAMPLE} />
//       <ImageCropperSelection>
//         {imageCropperHandles.map((position) => (
//           <ImageCropperHandle key={position} position={position} />
//         ))}
//         <ImageCropperGrid axis="horizontal" />
//         <ImageCropperGrid axis="vertical" />
//       </ImageCropperSelection>
//     </ImageCropperViewport>
//   </ImageCropper>
// );

// const ImageCropperControlledZoomDemo = () => {
//   const [zoom, setZoom] = useState(1);

//   return (
//     <div className="flex w-full max-w-md flex-col gap-3">
//       <div className="flex items-center gap-2">
//         <button
//           aria-label="Zoom out"
//           type="button"
//           onClick={() => {
//             setZoom((z) => Math.max(1, z - 0.1));
//           }}
//         >
//           <ZoomOutIcon aria-hidden className="size-4" />
//         </button>
//         <span className="min-w-12 text-center font-mono text-muted-foreground text-xs tabular-nums">
//           {zoom.toFixed(1)}×
//         </span>
//         <button
//           aria-label="Zoom in"
//           type="button"
//           onClick={() => {
//             setZoom((z) => Math.min(5, z + 0.1));
//           }}
//         >
//           <ZoomInIcon aria-hidden className="size-4" />
//         </button>
//       </div>
//       <ImageCropper
//         maxZoom={5}
//         minZoom={1}
//         zoom={zoom}
//         onZoomChange={(e) => {
//           setZoom(e.zoom);
//         }}
//       >
//         <ImageCropperViewport>
//           <ImageCropperImage alt="Mountain" src={IMAGE_CROPPER_SAMPLE} />
//           <ImageCropperSelection>
//             {imageCropperHandles.map((position) => (
//               <ImageCropperHandle key={position} position={position} />
//             ))}
//             <ImageCropperGrid axis="horizontal" />
//             <ImageCropperGrid axis="vertical" />
//           </ImageCropperSelection>
//         </ImageCropperViewport>
//       </ImageCropper>
//     </div>
//   );
// };

// const ImageCropperCropPreviewDemo = () => {
//   const imageCropper = useImageCropper();
//   const [preview, setPreview] = useState<string | null>(null);

//   const handleCrop = async () => {
//     const result = await imageCropper.getCroppedImage({ output: "dataUrl" });
//     if (typeof result === "string") {
//       setPreview(result);
//     }
//   };

//   return (
//     <div className="flex w-full max-w-md flex-col gap-3">
//       <div>
//         <button type="button" onClick={handleCrop}>
//           <CropIcon aria-hidden className="me-1 inline size-4" />
//           Crop image
//         </button>
//       </div>
//       <ImageCropperRootProvider value={imageCropper}>
//         <ImageCropperViewport>
//           <ImageCropperImage
//             alt="Mountain"
//             crossOrigin="anonymous"
//             src={IMAGE_CROPPER_SAMPLE}
//           />
//           <ImageCropperSelection>
//             {imageCropperHandles.map((position) => (
//               <ImageCropperHandle key={position} position={position} />
//             ))}
//             <ImageCropperGrid axis="horizontal" />
//             <ImageCropperGrid axis="vertical" />
//           </ImageCropperSelection>
//         </ImageCropperViewport>
//       </ImageCropperRootProvider>
//       <div className="flex flex-col gap-1 rounded-md border border-border bg-muted/30 p-3">
//         <span className="font-medium text-muted-foreground text-xs uppercase tracking-wide">
//           Preview
//         </span>
//         {preview ? (
//           <img
//             alt="Cropped result"
//             className="max-h-28 max-w-28 rounded-md object-contain"
//             height={120}
//             src={preview}
//             width={120}
//           />
//         ) : (
//           <span className="text-muted-foreground text-xs">
//             Run crop to preview
//           </span>
//         )}
//       </div>
//     </div>
//   );
// };

// const ImageCropperRootProviderZoomDemo = () => {
//   const imageCropper = useImageCropper({ maxZoom: 5, minZoom: 1 });

//   return (
//     <div className="flex w-full max-w-md flex-col gap-3">
//       <div className="flex items-center gap-2">
//         <button
//           aria-label="Zoom out"
//           type="button"
//           onClick={() => {
//             imageCropper.setZoom(imageCropper.zoom - 0.1);
//           }}
//         >
//           <ZoomOutIcon aria-hidden className="size-4" />
//         </button>
//         <span className="min-w-12 text-center font-mono text-muted-foreground text-xs tabular-nums">
//           {imageCropper.zoom.toFixed(1)}×
//         </span>
//         <button
//           aria-label="Zoom in"
//           type="button"
//           onClick={() => {
//             imageCropper.setZoom(imageCropper.zoom + 0.1);
//           }}
//         >
//           <ZoomInIcon aria-hidden className="size-4" />
//         </button>
//       </div>
//       <ImageCropperRootProvider value={imageCropper}>
//         <ImageCropperViewport>
//           <ImageCropperImage alt="Mountain" src={IMAGE_CROPPER_SAMPLE} />
//           <ImageCropperSelection>
//             {imageCropperHandles.map((position) => (
//               <ImageCropperHandle key={position} position={position} />
//             ))}
//             <ImageCropperGrid axis="horizontal" />
//             <ImageCropperGrid axis="vertical" />
//           </ImageCropperSelection>
//         </ImageCropperViewport>
//       </ImageCropperRootProvider>
//     </div>
//   );
// };

// const ZoomImagePreviewDemo = () => (
//   <ZoomImage
//     alt="Mountain"
//     className="max-w-md"
//     maxZoom={4}
//     minZoom={1}
//     src={IMAGE_CROPPER_SAMPLE}
//   />
// );

// const EditableDesignReferenceDemo = () => (
//   <Editable
//     activationMode="focus"
//     defaultValue=""
//     placeholder={{ edit: "Double click to edit", preview: "Click to edit" }}
//     submitMode="none"
//   >
//     <EditableLabel>Fruit</EditableLabel>
//     <EditableArea>
//       <EditableInput />
//       <EditablePreview />
//     </EditableArea>
//     <EditableContext>
//       {(ctx) =>
//         ctx.editing ? (
//           <EditableControl>
//             <EditableSubmitTrigger>Save</EditableSubmitTrigger>
//             <EditableCancelTrigger>Cancel</EditableCancelTrigger>
//           </EditableControl>
//         ) : (
//           <EditableControl>
//             <EditableEditTrigger>Edit</EditableEditTrigger>
//           </EditableControl>
//         )
//       }
//     </EditableContext>
//   </Editable>
// );

// const EditableBasicDemo = () => (
//   <Editable defaultValue="Hello World" placeholder="Enter text…">
//     <EditableLabel>Label</EditableLabel>
//     <EditableArea>
//       <EditableInput />
//       <EditablePreview />
//     </EditableArea>
//     <EditableControl>
//       <EditableEditTrigger>Edit</EditableEditTrigger>
//     </EditableControl>
//   </Editable>
// );

// const EditableControlledDemo = () => {
//   const [value, setValue] = useState("Controlled value");

//   return (
//     <Editable
//       placeholder="Enter text…"
//       value={value}
//       onValueChange={(e) => {
//         setValue(e.value);
//       }}
//     >
//       <EditableLabel>Controlled</EditableLabel>
//       <EditableArea>
//         <EditableInput />
//         <EditablePreview />
//       </EditableArea>
//       <EditableControl>
//         <EditableEditTrigger>Edit</EditableEditTrigger>
//       </EditableControl>
//       <p className="text-muted-foreground text-xs tabular-nums">
//         Live: {value || "∅"}
//       </p>
//     </Editable>
//   );
// };

// const EditableRootProviderDemo = () => {
//   const editable = useEditable({
//     defaultValue: "From useEditable()",
//     selectOnFocus: false,
//   });

//   return (
//     <EditableRootProvider value={editable}>
//       <EditableLabel>Root provider</EditableLabel>
//       <EditableArea>
//         <EditableInput />
//         <EditablePreview />
//       </EditableArea>
//       <EditableControl>
//         <EditableEditTrigger>Edit</EditableEditTrigger>
//         <Button
//           size="sm"
//           type="button"
//           variant="outline"
//           onClick={() => {
//             editable.setValue("Reset from outside");
//           }}
//         >
//           Set value
//         </Button>
//       </EditableControl>
//     </EditableRootProvider>
//   );
// };

// const EditableContextHintsDemo = () => (
//   <Editable defaultValue="Hello" placeholder="Type…">
//     <EditableLabel>Context</EditableLabel>
//     <EditableArea>
//       <EditableInput />
//       <EditablePreview />
//     </EditableArea>
//     <EditableContext>
//       {(ctx) =>
//         ctx.editing ? (
//           <p className="text-muted-foreground text-xs">
//             Enter saves, Esc cancels (with default submit mode).
//           </p>
//         ) : (
//           <EditableControl>
//             <EditableEditTrigger>Edit</EditableEditTrigger>
//           </EditableControl>
//         )
//       }
//     </EditableContext>
//   </Editable>
// );

// const EditableIconControlsDemo = () => (
//   <Editable defaultValue="Click edit to start" submitMode="none">
//     <EditableLabel>Custom controls</EditableLabel>
//     <EditableArea>
//       <EditableInput />
//       <EditablePreview />
//     </EditableArea>
//     <EditableContext>
//       {(ctx) => (
//         <EditableControl>
//           {ctx.editing ? (
//             <>
//               <EditableSubmitTrigger aria-label="Save">
//                 <CheckIcon />
//               </EditableSubmitTrigger>
//               <EditableCancelTrigger aria-label="Cancel">
//                 <XIcon />
//               </EditableCancelTrigger>
//             </>
//           ) : (
//             <EditableEditTrigger aria-label="Edit">
//               <PencilIcon />
//             </EditableEditTrigger>
//           )}
//         </EditableControl>
//       )}
//     </EditableContext>
//   </Editable>
// );

// const EditableDoubleClickDemo = () => (
//   <Editable
//     activationMode="dblclick"
//     defaultValue="Double-click to edit"
//     submitMode="none"
//   >
//     <EditableLabel>Double-click</EditableLabel>
//     <EditableArea>
//       <EditableInput />
//       <EditablePreview />
//     </EditableArea>
//     <EditableContext>
//       {(ctx) =>
//         ctx.editing ? (
//           <EditableControl>
//             <EditableSubmitTrigger>Save</EditableSubmitTrigger>
//             <EditableCancelTrigger>Cancel</EditableCancelTrigger>
//           </EditableControl>
//         ) : null
//       }
//     </EditableContext>
//   </Editable>
// );

// const EditableClickActivationDemo = () => (
//   <Editable activationMode="click" defaultValue="" placeholder="Click preview">
//     <EditableLabel>Click activation</EditableLabel>
//     <EditableArea>
//       <EditableInput />
//       <EditablePreview />
//     </EditableArea>
//     <EditableControl>
//       <EditableEditTrigger>Edit</EditableEditTrigger>
//     </EditableControl>
//   </Editable>
// );

// const EditableTextareaDemo = () => (
//   <Editable
//     activationMode="dblclick"
//     autoResize
//     defaultValue="Ark UI editable with a textarea."
//     placeholder="Enter a description…"
//     submitMode="none"
//   >
//     <EditableLabel>Textarea</EditableLabel>
//     <EditableArea>
//       <EditableInput
//         asChild
//         className="leading-relaxed data-autoresize:wrap-break-word"
//       >
//         <textarea />
//       </EditableInput>
//       <EditablePreview className="leading-relaxed" />
//     </EditableArea>
//     <EditableContext>
//       {(ctx) =>
//         ctx.editing ? (
//           <>
//             <p className="text-muted-foreground text-xs">
//               ⌘ Enter (macOS) or Ctrl+Enter to save
//             </p>
//             <EditableControl>
//               <EditableSubmitTrigger>Save</EditableSubmitTrigger>
//               <EditableCancelTrigger>Cancel</EditableCancelTrigger>
//             </EditableControl>
//           </>
//         ) : null
//       }
//     </EditableContext>
//   </Editable>
// );

// const EditableWithFieldDemo = () => (
//   <Field className="max-w-md">
//     <Editable placeholder="Enter your bio" submitMode="none">
//       <EditableLabel>Bio</EditableLabel>
//       <EditableArea>
//         <EditableInput />
//         <EditablePreview />
//       </EditableArea>
//       <EditableContext>
//         {(ctx) =>
//           ctx.editing ? (
//             <EditableControl>
//               <EditableSubmitTrigger>Save</EditableSubmitTrigger>
//               <EditableCancelTrigger>Cancel</EditableCancelTrigger>
//             </EditableControl>
//           ) : (
//             <EditableControl>
//               <EditableEditTrigger>Edit</EditableEditTrigger>
//             </EditableControl>
//           )
//         }
//       </EditableContext>
//     </Editable>
//     <FieldDescription>
//       Click to edit your bio; Field supplies helper copy.
//     </FieldDescription>
//     <FieldError>Example error state (visual only)</FieldError>
//   </Field>
// );

// const EditableDisabledDemo = () => (
//   <Editable defaultValue="Read-only value" disabled placeholder="…">
//     <EditableLabel>Disabled</EditableLabel>
//     <EditableArea>
//       <EditableInput />
//       <EditablePreview />
//     </EditableArea>
//     <EditableControl>
//       <EditableEditTrigger>Edit</EditableEditTrigger>
//     </EditableControl>
//   </Editable>
// );

// const EditableReadOnlyDemo = () => (
//   <Editable defaultValue="Cannot edit" readOnly>
//     <EditableLabel>Read only</EditableLabel>
//     <EditableArea>
//       <EditableInput />
//       <EditablePreview />
//     </EditableArea>
//     <EditableControl>
//       <EditableEditTrigger>Edit</EditableEditTrigger>
//     </EditableControl>
//   </Editable>
// );

// const EditableInvalidDemo = () => (
//   <Editable defaultValue="" invalid placeholder="Required field">
//     <EditableLabel>Invalid</EditableLabel>
//     <EditableArea>
//       <EditableInput />
//       <EditablePreview />
//     </EditableArea>
//     <EditableControl>
//       <EditableEditTrigger>Edit</EditableEditTrigger>
//     </EditableControl>
//   </Editable>
// );

// const EditableMaxLengthDemo = () => (
//   <Editable defaultValue="Short" maxLength={12} placeholder="Max 12 chars">
//     <EditableLabel>Max length</EditableLabel>
//     <EditableArea>
//       <EditableInput />
//       <EditablePreview />
//     </EditableArea>
//     <EditableControl>
//       <EditableEditTrigger>Edit</EditableEditTrigger>
//     </EditableControl>
//   </Editable>
// );

// const EditableDefaultEditDemo = () => (
//   <Editable defaultEdit defaultValue="Starts in edit mode" submitMode="none">
//     <EditableLabel>Default edit</EditableLabel>
//     <EditableArea>
//       <EditableInput />
//       <EditablePreview />
//     </EditableArea>
//     <EditableControl>
//       <EditableSubmitTrigger>Save</EditableSubmitTrigger>
//       <EditableCancelTrigger>Cancel</EditableCancelTrigger>
//     </EditableControl>
//   </Editable>
// );

// const EditableSubmitModeDemo = () => (
//   <Editable
//     defaultValue="Blur commits"
//     placeholder="Blur or Enter"
//     submitMode="both"
//   >
//     <EditableLabel>Submit: both (blur + Enter)</EditableLabel>
//     <EditableArea>
//       <EditableInput />
//       <EditablePreview />
//     </EditableArea>
//     <EditableControl>
//       <EditableEditTrigger>Edit</EditableEditTrigger>
//     </EditableControl>
//   </Editable>
// );

// const EditableActivationNoneDemo = () => (
//   <Editable
//     activationMode="none"
//     defaultValue="Programmatic only"
//     submitMode="none"
//   >
//     <EditableLabel>activationMode none</EditableLabel>
//     <EditableArea>
//       <EditableInput />
//       <EditablePreview />
//     </EditableArea>
//     <EditableContext>
//       {(ctx) => (
//         <EditableControl>
//           {ctx.editing ? (
//             <>
//               <EditableSubmitTrigger>Save</EditableSubmitTrigger>
//               <EditableCancelTrigger>Cancel</EditableCancelTrigger>
//             </>
//           ) : (
//             <EditableEditTrigger>Edit</EditableEditTrigger>
//           )}
//         </EditableControl>
//       )}
//     </EditableContext>
//   </Editable>
// );

// export const ArkUiShowcase = () => {
//   const today = useMemo(() => parseDate(new Date()), []);

//   return (
//     <main className="min-h-screen bg-background px-4 py-10 text-foreground sm:px-8">
//       <div className="mx-auto flex max-w-6xl flex-col gap-10">
//         <header className="flex flex-col gap-1 border-border border-b pb-6">
//           <h1 className="font-semibold text-2xl tracking-tight">
//             Ark UI + shadcn-style primitives
//           </h1>
//           <p className="max-w-2xl text-muted-foreground text-sm">
//             Color picker patterns align with the{" "}
//             <a
//               className="text-primary underline-offset-4 hover:underline"
//               href="https://ark-ui.com/docs/components/color-picker"
//               rel="noreferrer"
//               target="_blank"
//             >
//               Ark UI color picker docs
//             </a>
//             . Other widgets are the Ark-backed components under{" "}
//             <code className="rounded bg-muted px-1 py-0.5 text-xs">
//               src/components/ui
//             </code>
//             .
//           </p>
//         </header>

//         <section className="flex flex-col gap-4">
//           <h2 className="font-medium text-foreground text-lg">Field</h2>
//           <p className="max-w-2xl text-muted-foreground text-sm">
//             Ark UI{" "}
//             <a
//               className="text-foreground underline underline-offset-2 hover:no-underline"
//               href="https://ark-ui.com/docs/components/field"
//               rel="noreferrer"
//               target="_blank"
//             >
//               Field
//             </a>{" "}
//             with coss-style naming (
//             <a
//               className="text-foreground underline underline-offset-2 hover:no-underline"
//               href="https://coss.com/ui/docs/components/field"
//               rel="noreferrer"
//               target="_blank"
//             >
//               reference
//             </a>
//             ). Use{" "}
//             <code className="rounded bg-muted px-1 py-0.5 text-xs">
//               FieldRequiredIndicator
//             </code>{" "}
//             for the built-in required asterisk.
//           </p>
//           <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
//             <DemoCard
//               title="Label + Input"
//               description="FieldControl asChild + styled Input."
//             >
//               <FieldBasicDemo />
//             </DemoCard>
//             <DemoCard
//               title="Required"
//               description="Field required + FieldRequiredIndicator (Ark UI)."
//             >
//               <FieldRequiredDemo />
//             </DemoCard>
//             <DemoCard
//               title="Required fallback"
//               description="RequiredIndicator fallback prop."
//             >
//               <FieldRequiredIndicatorCustomDemo />
//             </DemoCard>
//             <DemoCard title="Disabled" description="Root disabled + Input.">
//               <FieldDisabledDemo />
//             </DemoCard>
//             <DemoCard title="Invalid" description="invalid + FieldError.">
//               <FieldInvalidDemo />
//             </DemoCard>
//             <DemoCard title="Textarea" description="FieldControl + Textarea.">
//               <FieldTextareaDemo />
//             </DemoCard>
//             <DemoCard
//               title="Checkbox in label"
//               description="FieldLabel wraps CheckboxRoot + control."
//             >
//               <FieldCheckboxDemo />
//             </DemoCard>
//             <DemoCard
//               title="Custom control"
//               description="FieldContext + getInputProps()."
//             >
//               <FieldCustomControlDemo />
//             </DemoCard>
//             <DemoCard
//               title="Root provider"
//               description="useField + FieldRootProvider."
//             >
//               <FieldRootProviderDemo />
//             </DemoCard>
//           </div>
//         </section>

//         <section className="flex flex-col gap-4">
//           <h2 className="font-medium text-foreground text-lg">Fieldset</h2>
//           <p className="max-w-2xl text-muted-foreground text-sm">
//             Ark UI{" "}
//             <a
//               className="text-foreground underline underline-offset-2 hover:no-underline"
//               href="https://ark-ui.com/docs/components/fieldset"
//               rel="noreferrer"
//               target="_blank"
//             >
//               Fieldset
//             </a>{" "}
//             with naming aligned to{" "}
//             <a
//               className="text-foreground underline underline-offset-2 hover:no-underline"
//               href="https://coss.com/ui/docs/components/fieldset"
//               rel="noreferrer"
//               target="_blank"
//             >
//               coss.com/ui Fieldset
//             </a>
//             . Group related fields; use{" "}
//             <code className="rounded bg-muted px-1 py-0.5 text-xs">
//               FieldsetDescription
//             </code>{" "}
//             and{" "}
//             <code className="rounded bg-muted px-1 py-0.5 text-xs">
//               FieldsetError
//             </code>{" "}
//             for legend-level helper and error copy.
//           </p>
//           <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
//             <DemoCard
//               title="Billing (coss-style)"
//               description="Legend + Field rows with descriptions."
//             >
//               <FieldsetBillingDemo />
//             </DemoCard>
//             <DemoCard
//               title="Fieldset description"
//               description="Helper text on the group via FieldsetDescription."
//             >
//               <FieldsetWithDescriptionDemo />
//             </DemoCard>
//             <DemoCard
//               title="Invalid"
//               description="invalid on root + FieldsetError + invalid Fields."
//             >
//               <FieldsetInvalidDemo />
//             </DemoCard>
//             <DemoCard
//               title="Disabled"
//               description="disabled fieldset + Fields."
//             >
//               <FieldsetDisabledDemo />
//             </DemoCard>
//             <DemoCard
//               title="Checkboxes"
//               description="CheckboxRoot groups under a legend."
//             >
//               <FieldsetCheckboxDemo />
//             </DemoCard>
//             <DemoCard
//               title="Root provider"
//               description="useFieldset + FieldsetRootProvider."
//             >
//               <FieldsetRootProviderDemo />
//             </DemoCard>
//           </div>
//         </section>

//         <section className="flex flex-col gap-4">
//           <h2 className="font-medium text-foreground text-lg">File upload</h2>
//           <p className="max-w-2xl text-muted-foreground text-sm">
//             Ark UI{" "}
//             <a
//               className="text-foreground underline underline-offset-2 hover:no-underline"
//               href="https://ark-ui.com/docs/components/file-upload"
//               rel="noreferrer"
//               target="_blank"
//             >
//               File upload
//             </a>{" "}
//             with styled primitives under{" "}
//             <code className="rounded bg-muted px-1 py-0.5 text-xs">
//               src/components/ui/file-upload.tsx
//             </code>
//             . Covers dropzones, avatar-style pickers, previews, button-group
//             rows, and{" "}
//             <code className="rounded bg-muted px-1 py-0.5 text-xs">
//               defaultAcceptedFiles
//             </code>
//             .
//           </p>
//           <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
//             <DemoCard
//               className="lg:col-span-2"
//               title="Dropzone + previews"
//               description="Typed ItemPreview for images vs generic files."
//             >
//               <FileUploadDropzonePreviewsDemo />
//             </DemoCard>
//             <DemoCard
//               title="Avatar preview (circle)"
//               description="Large round crop, dark remove chip, centered title + PNG/JPG copy."
//             >
//               <FileUploadAvatarCircleDemo />
//             </DemoCard>
//             <DemoCard
//               title="Avatar preview (4px)"
//               description="Same flow with rounded (4px) preview."
//             >
//               <FileUploadAvatarSoftDemo />
//             </DemoCard>
//             <DemoCard
//               title="Circular picker overlay"
//               description="Same layout as circle avatar; empty state uses camera + dashed ring."
//             >
//               <FileUploadAvatarPickerDemo />
//             </DemoCard>
//             <DemoCard
//               className="lg:col-span-2"
//               title="ButtonGroup row"
//               description="Filename strip, Browse, Clear — compact list below."
//             >
//               <FileUploadButtonGroupRowDemo />
//             </DemoCard>
//             <DemoCard
//               title="Trigger + clear"
//               description="Paperclip trigger and compact file rows."
//             >
//               <FileUploadTriggerCompactDemo />
//             </DemoCard>
//             <DemoCard
//               title="Initial files"
//               description="defaultAcceptedFiles from useMemo (SSR-safe)."
//             >
//               <FileUploadInitialFilesDemo />
//             </DemoCard>
//             <DemoCard
//               title="Rejected files"
//               description="Small maxFileSize; surface rejectedFiles in context."
//             >
//               <FileUploadRejectedDemo />
//             </DemoCard>
//             <DemoCard
//               title="With Field"
//               description="FieldLabel + invalid FieldError around upload."
//             >
//               <FileUploadWithFieldDemo />
//             </DemoCard>
//             <DemoCard
//               title="Nested trigger"
//               description="Dropzone disableClick + Trigger button inside."
//             >
//               <FileUploadDropzoneNestedTriggerDemo />
//             </DemoCard>
//             <DemoCard
//               className="lg:col-span-2"
//               title="Image grid"
//               description="Multi-file grid with aspect previews."
//             >
//               <FileUploadGridPreviewsDemo />
//             </DemoCard>
//             <DemoCard
//               title="Root provider"
//               description="useFileUpload + FileUploadRootProvider."
//             >
//               <FileUploadRootProviderDemo />
//             </DemoCard>
//           </div>
//         </section>

//         <section className="flex flex-col gap-4">
//           <h2 className="font-medium text-foreground text-lg">Image cropper</h2>
//           <p className="max-w-2xl text-muted-foreground text-sm">
//             Ark UI{" "}
//             <a
//               className="text-foreground underline underline-offset-2 hover:no-underline"
//               href="https://ark-ui.com/docs/components/image-cropper"
//               rel="noreferrer"
//               target="_blank"
//             >
//               Image cropper
//             </a>{" "}
//             primitives in{" "}
//             <code className="rounded bg-muted px-1 py-0.5 text-xs">
//               src/components/ui/image-cropper.tsx
//             </code>
//             . Zoom-only preview uses{" "}
//             <code className="rounded bg-muted px-1 py-0.5 text-xs">
//               src/components/ui/zoom-image.tsx
//             </code>{" "}
//             (fixed crop area, no resize handles). Toolbar buttons are unstyled
//             placeholders for your own{" "}
//             <code className="rounded bg-muted px-1 py-0.5 text-xs">
//               asChild
//             </code>{" "}
//             wiring.
//           </p>
//           <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
//             <DemoCard
//               className="lg:col-span-2"
//               title="Basic"
//               description="Default rectangle crop with handles and rule-of-thirds grid."
//             >
//               <ImageCropperBasicDemo />
//             </DemoCard>
//             <DemoCard
//               title="1:1 aspect"
//               description="aspectRatio={1} with square viewport."
//             >
//               <ImageCropperAspectRatioDemo />
//             </DemoCard>
//             <DemoCard
//               title="Circle"
//               description="cropShape=&quot;circle&quot;."
//             >
//               <ImageCropperCircleDemo />
//             </DemoCard>
//             <DemoCard
//               className="lg:col-span-2"
//               title="Controlled zoom"
//               description="zoom + onZoomChange; unstyled zoom buttons."
//             >
//               <ImageCropperControlledZoomDemo />
//             </DemoCard>
//             <DemoCard
//               className="lg:col-span-2"
//               title="Crop preview"
//               description="useImageCropper + getCroppedImage data URL; crossOrigin for canvas."
//             >
//               <ImageCropperCropPreviewDemo />
//             </DemoCard>
//             <DemoCard
//               className="lg:col-span-2"
//               title="Root provider + zoom API"
//               description="useImageCropper + RootProvider + setZoom from context."
//             >
//               <ImageCropperRootProviderZoomDemo />
//             </DemoCard>
//             <DemoCard
//               className="lg:col-span-2"
//               title="Zoom image (preview)"
//               description="ZoomImage: fixedCropArea, transparent mask, pinch and wheel zoom."
//             >
//               <ZoomImagePreviewDemo />
//             </DemoCard>
//           </div>
//         </section>

//         <section className="flex flex-col gap-4">
//           <h2 className="font-medium text-foreground text-lg">Color picker</h2>
//           <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
//             <DemoCard
//               title="Basic"
//               description="Default popover with area + hue/alpha."
//             >
//               <ColorPickerBasicDemo />
//             </DemoCard>
//             <DemoCard title="Controlled" description="value + onValueChange.">
//               <ColorPickerControlledDemo />
//             </DemoCard>
//             <DemoCard
//               title="Open controlled"
//               description="open + onOpenChange."
//             >
//               <ColorPickerOpenControlledDemo />
//             </DemoCard>
//             <DemoCard title="Disabled">
//               <ColorPickerDisabledDemo />
//             </DemoCard>
//             <DemoCard title="Inline" description="inline + area + presets.">
//               <ColorPickerInlineDemo />
//             </DemoCard>
//             <DemoCard
//               title="Input only"
//               description="Swatch, hex input, eye dropper."
//             >
//               <ColorPickerInputOnlyDemo />
//             </DemoCard>
//             <DemoCard
//               title="Slider only"
//               description="RGB sliders in popover content."
//             >
//               <ColorPickerSliderOnlyDemo />
//             </DemoCard>
//             <DemoCard title="Swatch only" description="Preset grid in popover.">
//               <ColorPickerSwatchOnlyDemo />
//             </DemoCard>
//             <DemoCard
//               title="Swatches"
//               description="Area + sliders + presets, closeOnSelect."
//             >
//               <ColorPickerSwatchesInPopoverDemo />
//             </DemoCard>
//             <DemoCard
//               title="Value swatch"
//               description="Inline layout with live swatch + sliders."
//             >
//               <ColorPickerValueSwatchDemo />
//             </DemoCard>
//             <DemoCard
//               title="Format views"
//               description="FormatTrigger / Select + View by format."
//             >
//               <ColorPickerFormatDemo />
//             </DemoCard>
//             <DemoCard
//               title="Root provider"
//               description="useColorPicker + RootProvider."
//             >
//               <ColorPickerRootProviderDemo />
//             </DemoCard>
//             <DemoCard
//               title="Form usage"
//               description="Native form + name on root (hidden input)."
//             >
//               <ColorPickerFormDemo />
//             </DemoCard>
//             <DemoCard
//               title="With Field"
//               description="Field helper + error text."
//             >
//               <ColorPickerWithFieldDemo />
//             </DemoCard>
//           </div>
//         </section>

//         <section className="flex flex-col gap-4">
//           <h2 className="font-medium text-foreground text-lg">Combobox</h2>
//           <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
//             <DemoCard title="Basic" description="Single selection + filter.">
//               <ComboboxBasicDemo />
//             </DemoCard>
//             <DemoCard title="Disabled" description="defaultValue + disabled.">
//               <ComboboxDisabledDemo />
//             </DemoCard>
//             <DemoCard title="Sizes" description="Input size sm and lg.">
//               <ComboboxSizesDemo />
//             </DemoCard>
//             <DemoCard title="With label" description="Label + htmlFor.">
//               <ComboboxWithLabelDemo />
//             </DemoCard>
//             <DemoCard
//               title="Auto highlight"
//               description="inputBehavior autohighlight."
//             >
//               <ComboboxAutoHighlightDemo />
//             </DemoCard>
//             <DemoCard title="Clear button" description="showClear on input.">
//               <ComboboxClearDemo />
//             </DemoCard>
//             <DemoCard
//               title="Grouped"
//               description="renderChildren + collection prop for inferred item type."
//             >
//               <ComboboxGroupedDemo />
//             </DemoCard>
//             <DemoCard
//               title="Multiple"
//               description="Chips + ComboboxChipsInput."
//             >
//               <ComboboxMultipleDemo />
//             </DemoCard>
//             <DemoCard title="Start addon" description="Search icon prefix.">
//               <ComboboxStartAddonDemo />
//             </DemoCard>
//             <DemoCard
//               title="Start addon — multiple"
//               description="Icon on chips row."
//             >
//               <ComboboxStartAddonMultipleDemo />
//             </DemoCard>
//             <DemoCard
//               title="Select-like button"
//               description="Trigger + filter inside popup."
//             >
//               <ComboboxSelectButtonDemo />
//             </DemoCard>

//             <DemoCard title="Form" description="name on root + submit.">
//               <ComboboxFormDemo />
//             </DemoCard>
//           </div>
//         </section>

//         <section className="flex flex-col gap-4">
//           <h2 className="font-medium text-foreground text-lg">Command</h2>
//           <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
//             <DemoCard
//               title="Command palette"
//               description="Dialog + Combobox, ⌘J / Ctrl+J."
//               className="sm:col-span-2 lg:col-span-3"
//             >
//               <CommandPaletteDemo />
//             </DemoCard>
//             <DemoCard
//               title="Standalone command"
//               description="CommandPanel + open Combobox (no dialog)."
//             >
//               <CommandStandaloneDemo />
//             </DemoCard>
//           </div>
//         </section>

//         <section className="flex flex-col gap-4">
//           <h2 className="font-medium text-foreground text-lg">Dialog</h2>
//           <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
//             <DemoCard
//               title="Basic dialog"
//               description="Blur backdrop, header, scrollable panel, footer."
//             >
//               <DialogBasicDemo />
//             </DemoCard>
//             <DemoCard
//               title="Nested dialogs"
//               className="sm:col-span-2"
//               description="Two sibling useDialog + DialogRootProvider trees (Ark UI nested pattern), not Dialog.Root inside another dialog."
//             >
//               <DialogNestedDemo />
//             </DemoCard>
//           </div>
//         </section>

//         <section className="flex flex-col gap-4">
//           <h2 className="font-medium text-foreground text-lg">Hover card</h2>
//           <p className="max-w-2xl text-muted-foreground text-sm">
//             Preview on hover from{" "}
//             <a
//               className="text-primary underline-offset-4 hover:underline"
//               href="https://ark-ui.com/docs/components/hover-card"
//               rel="noreferrer"
//               target="_blank"
//             >
//               Ark UI Hover Card
//             </a>
//             , styled like the{" "}
//             <a
//               className="text-primary underline-offset-4 hover:underline"
//               href="https://coss.com/ui/docs/components/preview-card"
//               rel="noreferrer"
//               target="_blank"
//             >
//               coss.com/ui preview card
//             </a>
//             .{" "}
//             <code className="rounded bg-muted px-1 py-px">HoverCardPopup</code>{" "}
//             wraps portal, positioner, arrow, and content.
//           </p>
//           <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
//             <DemoCard
//               title="Preview (coss-style)"
//               description="Ghost button trigger + meta row; trigger uses asChild."
//             >
//               <HoverCardCossStyleDemo />
//             </DemoCard>
//             <DemoCard
//               title="Basic"
//               description="Link trigger + profile preview (Ark basic example)."
//             >
//               <HoverCardBasicDemo />
//             </DemoCard>
//             <DemoCard
//               title="Controlled"
//               description="open + onOpenChange; external toggle."
//             >
//               <HoverCardControlledDemo />
//             </DemoCard>
//             <DemoCard
//               title="Delay"
//               description="openDelay 200ms, closeDelay 500ms."
//             >
//               <HoverCardDelayDemo />
//             </DemoCard>
//             <DemoCard
//               title="Positioning"
//               description="placement right, gutter 12."
//             >
//               <HoverCardPositioningDemo />
//             </DemoCard>
//             <DemoCard
//               title="Root provider"
//               description="useHoverCard + RootProvider."
//             >
//               <HoverCardRootProviderDemo />
//             </DemoCard>
//             <DemoCard
//               title="Context"
//               description="HoverCard.Context render prop; chevron by open."
//             >
//               <HoverCardContextDemo />
//             </DemoCard>
//             <DemoCard
//               title="useHoverCardContext"
//               description="Child reads open state outside the trigger."
//             >
//               <HoverCardContextHookDemo />
//             </DemoCard>
//             <DemoCard
//               title="Multiple roots"
//               description="One HoverCard per trigger when previews differ."
//             >
//               <HoverCardMultipleRootsDemo />
//             </DemoCard>
//             <DemoCard title="No arrow" description="showArrow false on popup.">
//               <HoverCardNoArrowDemo />
//             </DemoCard>
//           </div>
//         </section>

//         <section className="flex flex-col gap-4">
//           <h2 className="font-medium text-foreground text-lg">Listbox</h2>
//           <p className="max-w-2xl text-muted-foreground text-sm">
//             Single and multi-select lists from{" "}
//             <a
//               className="text-primary underline-offset-4 hover:underline"
//               href="https://ark-ui.com/docs/components/listbox"
//               rel="noreferrer"
//               target="_blank"
//             >
//               Ark UI Listbox
//             </a>
//             .{" "}
//             <code className="rounded bg-muted px-1 py-px">ListboxContent</code>{" "}
//             styles vertical, horizontal, and grid layouts via{" "}
//             <code className="rounded bg-muted px-1 py-px">
//               data-orientation
//             </code>{" "}
//             and <code className="rounded bg-muted px-1 py-px">data-layout</code>
//             .
//           </p>
//           <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
//             <DemoCard title="Basic" description="Default single select.">
//               <ListboxBasicDemo />
//             </DemoCard>
//             <DemoCard title="Controlled" description="value + onValueChange.">
//               <ListboxControlledDemo />
//             </DemoCard>
//             <DemoCard
//               title="Root provider"
//               description="useListbox + ListboxRootProvider."
//             >
//               <ListboxRootProviderDemo />
//             </DemoCard>
//             <DemoCard
//               title="Disabled item"
//               description="isItemDisabled in createListCollection."
//             >
//               <ListboxDisabledDemo />
//             </DemoCard>
//             <DemoCard title="Multiple" description="selectionMode multiple.">
//               <ListboxMultipleDemo />
//             </DemoCard>
//             <DemoCard title="Grouping" description="groupBy + ItemGroup.">
//               <ListboxGroupedDemo />
//             </DemoCard>
//             <DemoCard
//               title="Extended"
//               description="Modifier-based multi-select (⌘/Ctrl+click)."
//             >
//               <ListboxExtendedDemo />
//             </DemoCard>
//             <DemoCard
//               title="Horizontal orientation"
//               description="orientation horizontal on root."
//             >
//               <ListboxHorizontalDemo />
//             </DemoCard>
//             <DemoCard
//               title="Grid layout"
//               description="createGridCollection + columnCount."
//             >
//               <ListboxGridDemo />
//             </DemoCard>
//             <DemoCard
//               title="Filtering"
//               description="useListCollection filter + ListboxInput."
//             >
//               <ListboxFilteringDemo />
//             </DemoCard>
//             <DemoCard
//               title="Select all"
//               description="ListboxContext selectAll / clearValue; triggers use asChild."
//             >
//               <ListboxSelectAllDemo />
//             </DemoCard>
//             <DemoCard
//               title="Value text"
//               description="ListboxValueText + placeholder."
//             >
//               <ListboxValueTextDemo />
//             </DemoCard>
//           </div>
//         </section>

//         <section className="flex flex-col gap-4">
//           <h2 className="font-medium text-foreground text-lg">Number input</h2>
//           <p className="max-w-2xl text-muted-foreground text-sm">
//             Numeric field from{" "}
//             <a
//               className="text-primary underline-offset-4 hover:underline"
//               href="https://ark-ui.com/docs/components/number-input"
//               rel="noreferrer"
//               target="_blank"
//             >
//               Ark UI Number Input
//             </a>
//             . Use{" "}
//             <code className="rounded bg-muted px-1 py-px">
//               NumberInputControl
//             </code>{" "}
//             with <code className="rounded bg-muted px-1 py-px">asChild</code> on{" "}
//             <code className="rounded bg-muted px-1 py-px">InputGroup</code> for
//             layout; wire increment and decrement with{" "}
//             <code className="rounded bg-muted px-1 py-px">asChild</code> and
//             your own <code className="rounded bg-muted px-1 py-px">Button</code>{" "}
//             styles.
//           </p>
//           <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
//             <DemoCard
//               title="Default (pill)"
//               description="Minus · value · plus inside InputGroup; rounded-full."
//             >
//               <NumberInputDefaultDemo />
//             </DemoCard>
//             <DemoCard
//               title="Stepper column (right)"
//               description="Stacked chevrons with divider; image-style stepper."
//             >
//               <NumberInputStepperRightDemo />
//             </DemoCard>
//             <DemoCard
//               title="External increment"
//               description="NumberInput.Context + manual Button outside the group."
//             >
//               <NumberInputExternalPlusDemo />
//             </DemoCard>
//             <DemoCard title="Min / max" description="min={0} max={10}.">
//               <NumberInputMinMaxDemo />
//             </DemoCard>
//             <DemoCard
//               title="Precision"
//               description="formatOptions fraction digits (2dp)."
//             >
//               <NumberInputPrecisionDemo />
//             </DemoCard>
//             <DemoCard
//               title="Mouse wheel"
//               description="allowMouseWheel to change value on scroll."
//             >
//               <NumberInputMouseWheelDemo />
//             </DemoCard>
//             <DemoCard
//               title="Scrubber"
//               description="NumberInputScrubber before control (drag to change)."
//             >
//               <NumberInputScrubberDemo />
//             </DemoCard>
//             <DemoCard
//               title="With Field"
//               description="FieldLabel + InputGroup + FieldDescription."
//             >
//               <NumberInputWithFieldDemo />
//             </DemoCard>
//             <DemoCard
//               title="Root provider"
//               description="useNumberInput + NumberInputRootProvider."
//             >
//               <NumberInputRootProviderDemo />
//             </DemoCard>
//             <DemoCard
//               title="Currency format"
//               description="formatOptions style currency USD."
//             >
//               <NumberInputFormattingDemo />
//             </DemoCard>
//             <DemoCard
//               title="Context"
//               description="NumberInput.Context render prop for value readout."
//             >
//               <NumberInputContextDemo />
//             </DemoCard>
//             <DemoCard
//               title="Value text"
//               description="NumberInputValueText formatted preview."
//             >
//               <NumberInputValueTextDemo />
//             </DemoCard>
//           </div>
//         </section>

//         <section className="flex flex-col gap-4">
//           <h2 className="font-medium text-foreground text-lg">Menu</h2>
//           <p className="max-w-2xl text-muted-foreground text-sm">
//             Dropdown and context menus from{" "}
//             <a
//               className="text-primary underline-offset-4 hover:underline"
//               href="https://ark-ui.com/docs/components/menu"
//               rel="noreferrer"
//               target="_blank"
//             >
//               Ark UI Menu
//             </a>
//             . <code className="rounded bg-muted px-1 py-px">MenuPopup</code>{" "}
//             wraps portal, positioner, and content; triggers stay unstyled so you
//             can use <code className="rounded bg-muted px-1 py-px">asChild</code>{" "}
//             with <code className="rounded bg-muted px-1 py-px">Button</code>{" "}
//             (see{" "}
//             <a
//               className="text-primary underline-offset-4 hover:underline"
//               href="https://coss.com/ui/docs/components/menu"
//               rel="noreferrer"
//               target="_blank"
//             >
//               coss.com/ui Menu
//             </a>{" "}
//             for interaction patterns).
//           </p>
//           <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
//             <DemoCard
//               title="Item selection"
//               description="onSelect on root; each item has a value."
//             >
//               <MenuBasicDemo />
//             </DemoCard>
//             <DemoCard
//               title="Root provider"
//               description="useMenu + MenuRootProvider."
//             >
//               <MenuRootProviderDemo />
//             </DemoCard>
//             <DemoCard
//               title="Grouping"
//               description="ItemGroup + ItemGroupLabel."
//             >
//               <MenuGroupingDemo />
//             </DemoCard>
//             <DemoCard
//               title="Links"
//               description="MenuItem asChild with anchor (Ark links guide)."
//             >
//               <MenuLinksDemo />
//             </DemoCard>
//             <DemoCard
//               title="Checkbox items"
//               description="CheckboxItem + ItemIndicator + CheckIcon."
//             >
//               <MenuCheckboxDemo />
//             </DemoCard>
//             <DemoCard
//               title="Radio group"
//               description="RadioItemGroup defaultValue + RadioItem + indicator."
//             >
//               <MenuRadioDemo />
//             </DemoCard>
//             <DemoCard
//               title="Context menu"
//               description="ContextTrigger (right-click / long-press)."
//             >
//               <MenuContextMenuDemo />
//             </DemoCard>
//             <DemoCard
//               title="Nested submenu"
//               description="Nested Menu + TriggerItem + second MenuPopup."
//             >
//               <MenuNestedDemo />
//             </DemoCard>
//             <DemoCard
//               title="Menu in dialog"
//               description="lazyMount + unmountOnExit on Menu inside Dialog."
//             >
//               <MenuInDialogDemo />
//             </DemoCard>
//             <DemoCard
//               title="Menu item → dialog"
//               description="closeOnSelect false + destructive confirmation dialog."
//             >
//               <MenuItemDialogDemo />
//             </DemoCard>
//             <DemoCard
//               title="Controlled"
//               description="open + onOpenChange; external toggle."
//             >
//               <MenuControlledDemo />
//             </DemoCard>
//             <DemoCard
//               title="Context render prop"
//               description="Menu.Context shows open state above items."
//             >
//               <MenuContextHookDemo />
//             </DemoCard>
//             <DemoCard
//               title="Positioning"
//               description="placement right-start, gutter 8 on root."
//             >
//               <MenuPositioningDemo />
//             </DemoCard>
//             <DemoCard
//               title="Trigger indicator"
//               description="Menu.Indicator with chevron inside Button (asChild)."
//             >
//               <MenuTriggerIndicatorDemo />
//             </DemoCard>
//             <DemoCard
//               title="Multiple triggers"
//               description="One menu, many triggers with value (message list)."
//               className="sm:col-span-2 lg:col-span-3"
//             >
//               <MenuMultipleTriggersDemo />
//             </DemoCard>
//             <DemoCard
//               title="Multiple menus"
//               description="Separate Menu roots with distinct id (File / Edit)."
//             >
//               <MenuMultipleMenusDemo />
//             </DemoCard>
//             <DemoCard
//               title="Context lazy-mount submenu"
//               description="lazyMount + nested Menu + TriggerItem (Ark context-lazy-mount)."
//               className="sm:col-span-2"
//             >
//               <MenuContextLazyMountDemo />
//             </DemoCard>
//             <DemoCard
//               title="Item context"
//               description="MenuItemContext render prop; color only on highlight (no font-weight change)."
//             >
//               <MenuItemContextRowDemo />
//             </DemoCard>
//             <DemoCard
//               title="Select event"
//               description="Root onSelect + per-item onSelect (logged)."
//               className="sm:col-span-2"
//             >
//               <MenuSelectEventDemo />
//             </DemoCard>
//             <DemoCard
//               title="closeOnSelect"
//               description="Item-level closeOnSelect false keeps menu open."
//             >
//               <MenuCloseOnSelectDemo />
//             </DemoCard>
//           </div>
//         </section>

//         <section className="flex flex-col gap-4">
//           <h2 className="font-medium text-foreground text-lg">Pagination</h2>
//           <p className="max-w-2xl text-muted-foreground text-sm">
//             Page navigation from{" "}
//             <a
//               className="text-primary underline-offset-4 hover:underline"
//               href="https://ark-ui.com/docs/components/pagination"
//               rel="noreferrer"
//               target="_blank"
//             >
//               Ark UI Pagination
//             </a>
//             . Map <code className="rounded bg-muted px-1 py-px">api.pages</code>{" "}
//             to{" "}
//             <code className="rounded bg-muted px-1 py-px">PaginationItem</code>{" "}
//             and{" "}
//             <code className="rounded bg-muted px-1 py-px">
//               PaginationEllipsis
//             </code>
//             ; use{" "}
//             <code className="rounded bg-muted px-1 py-px">ButtonGroup</code> for
//             a joined control strip or default spacing for separate controls.
//           </p>
//           <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
//             <DemoCard
//               title="Default"
//               description="Uncontrolled; prev / page items / next."
//             >
//               <PaginationDefaultDemo />
//             </DemoCard>
//             <DemoCard title="Controlled" description="page + onPageChange.">
//               <PaginationControlledDemo />
//             </DemoCard>
//             <DemoCard
//               title="Root provider"
//               description="usePagination + PaginationRootProvider."
//             >
//               <PaginationRootProviderDemo />
//             </DemoCard>
//             <DemoCard
//               title="Customization"
//               description="siblingCount, boundaryCount, translations."
//             >
//               <PaginationCustomDemo />
//             </DemoCard>
//             <DemoCard
//               title="Context"
//               description="pageRange + totalPages in a summary line."
//             >
//               <PaginationContextInfoDemo />
//             </DemoCard>
//             <DemoCard
//               title="Data slicing"
//               description="api.slice() drives the list body."
//             >
//               <PaginationSliceDemo />
//             </DemoCard>
//             <DemoCard
//               title="Page range label"
//               description="Human-readable “Showing a–b of n”."
//             >
//               <PaginationPageRangeLabelDemo />
//             </DemoCard>
//             <DemoCard
//               title="Page size"
//               description="setPageSize via native select."
//             >
//               <PaginationPageSizeDemo />
//             </DemoCard>
//             <DemoCard
//               title="Links"
//               description='type "link" + getPageUrl (hash).'
//             >
//               <PaginationLinksDemo />
//             </DemoCard>
//             <DemoCard
//               title="Button group"
//               description="ButtonGroup + className contents + first/last."
//             >
//               <PaginationButtonGroupDemo />
//             </DemoCard>
//             <DemoCard
//               title="Spaced layout"
//               description="gap-4 root + rounded-full triggers."
//               className="sm:col-span-2 lg:col-span-3"
//             >
//               <PaginationSpacedDemo />
//             </DemoCard>
//           </div>
//         </section>

//         <section className="flex flex-col gap-4">
//           <h2 className="font-medium text-foreground text-lg">Marquee</h2>
//           <p className="max-w-2xl text-muted-foreground text-sm">
//             Continuous scroll from{" "}
//             <a
//               className="text-primary underline-offset-4 hover:underline"
//               href="https://ark-ui.com/docs/components/marquee"
//               rel="noreferrer"
//               target="_blank"
//             >
//               Ark UI Marquee
//             </a>
//             . Keyframes{" "}
//             <code className="rounded bg-muted px-1 py-px">marquee-x</code> /{" "}
//             <code className="rounded bg-muted px-1 py-px">marquee-y</code> and
//             edge fades live in{" "}
//             <code className="rounded bg-muted px-1 py-px">src/styles.css</code>{" "}
//             (targets{" "}
//             <code className="rounded bg-muted px-1 py-px">data-slot</code> on
//             the primitives). Root uses{" "}
//             <code className="rounded bg-muted px-1 py-px">
//               data-[orientation]
//             </code>{" "}
//             for default heights.
//           </p>
//           <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
//             <DemoCard
//               title="Basic"
//               description="Horizontal scroll; translations.root for aria-label."
//             >
//               <MarqueeBasicDemo />
//             </DemoCard>
//             <DemoCard
//               title="Auto fill"
//               description="autoFill + spacing to duplicate content."
//             >
//               <MarqueeAutoFillDemo />
//             </DemoCard>
//             <DemoCard title="Reverse" description="reverse prop.">
//               <MarqueeReverseDemo />
//             </DemoCard>
//             <DemoCard
//               title="Vertical"
//               description="side bottom (scrolls toward bottom)."
//             >
//               <MarqueeVerticalDemo />
//             </DemoCard>
//             <DemoCard title="Speed" description="speed={120} px/s.">
//               <MarqueeSpeedDemo />
//             </DemoCard>
//             <DemoCard
//               title="Pause on interaction"
//               description="pauseOnInteraction for hover/focus."
//             >
//               <MarqueePauseOnInteractionDemo />
//             </DemoCard>
//             <DemoCard
//               className="lg:col-span-2"
//               title="Programmatic"
//               description="useMarquee + RootProvider; native buttons (wire Button asChild yourself)."
//             >
//               <MarqueeProgrammaticDemo />
//             </DemoCard>
//             <DemoCard
//               title="Finite loops"
//               description="loopCount={3}, onLoopComplete, onComplete."
//             >
//               <MarqueeFiniteLoopsDemo />
//             </DemoCard>
//             <DemoCard
//               title="Edges"
//               description="MarqueeEdge start/end fade overlays."
//             >
//               <MarqueeWithEdgesDemo />
//             </DemoCard>
//             <DemoCard
//               className="lg:col-span-2"
//               title="Orientation"
//               description="Horizontal vs vertical: data-orientation heights on root."
//             >
//               <MarqueeOrientationCompareDemo />
//             </DemoCard>
//             <DemoCard
//               title="Context"
//               description="MarqueeContext render prop; status line above viewport."
//             >
//               <MarqueeContextDemo />
//             </DemoCard>
//           </div>
//         </section>

//         <section className="flex flex-col gap-4">
//           <h2 className="font-medium text-foreground text-lg">
//             Floating panel
//           </h2>
//           <p className="max-w-2xl text-muted-foreground text-sm">
//             Non-modal floating window from{" "}
//             <a
//               className="text-primary underline-offset-4 hover:underline"
//               href="https://ark-ui.com/docs/components/floating-panel"
//               rel="noreferrer"
//               target="_blank"
//             >
//               Ark UI Floating Panel
//             </a>
//             .{" "}
//             <code className="rounded bg-muted px-1 py-px">
//               FloatingPanelPopup
//             </code>{" "}
//             wraps portal, positioner, and content like{" "}
//             <code className="rounded bg-muted px-1 py-px">ComboboxPopup</code>.
//           </p>
//           <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
//             <DemoCard
//               title="Basic"
//               description="Default size; drag, resize, minimize / maximize / restore."
//             >
//               <FloatingPanelBasicDemo />
//             </DemoCard>
//             <DemoCard
//               title="Controlled size"
//               description="size + onSizeChange (matches Ark controlled-size example)."
//             >
//               <FloatingPanelControlledSizeDemo />
//             </DemoCard>
//             <DemoCard
//               title="Controlled position"
//               description="position + onPositionChange."
//             >
//               <FloatingPanelControlledPositionDemo />
//             </DemoCard>
//             <DemoCard
//               title="Anchor position"
//               description="getAnchorPosition — panel opens centered on the trigger."
//             >
//               <FloatingPanelAnchorDemo />
//             </DemoCard>
//             <DemoCard
//               title="Controlled open"
//               description="open + onOpenChange; secondary button opens from outside."
//             >
//               <FloatingPanelControlledOpenDemo />
//             </DemoCard>
//             <DemoCard title="Lazy mount" description="lazyMount on the root.">
//               <FloatingPanelLazyMountDemo />
//             </DemoCard>
//             <DemoCard
//               title="Context"
//               description="FloatingPanelContext for status outside the portaled panel."
//             >
//               <FloatingPanelContextDemo />
//             </DemoCard>
//           </div>
//         </section>

//         <section className="flex flex-col gap-4">
//           <h2 className="font-medium text-foreground text-lg">Editable</h2>
//           <p className="max-w-2xl text-muted-foreground text-sm">
//             Shadcn-style inline edit built on{" "}
//             <a
//               className="text-primary underline-offset-4 hover:underline"
//               href="https://ark-ui.com/docs/components/editable"
//               rel="noreferrer"
//               target="_blank"
//             >
//               Ark UI Editable
//             </a>
//             .
//           </p>
//           <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
//             <DemoCard
//               title="Design reference"
//               description="Preview + Edit; edit mode shows Save / Cancel. Matches provided mock."
//             >
//               <EditableDesignReferenceDemo />
//             </DemoCard>

//             <DemoCard
//               title="Basic"
//               description="Default value, focus preview to edit, Edit trigger."
//             >
//               <EditableBasicDemo />
//             </DemoCard>

//             <DemoCard title="Controlled" description="value + onValueChange.">
//               <EditableControlledDemo />
//             </DemoCard>

//             <DemoCard
//               title="Root provider"
//               description="useEditable + RootProvider; external Set value."
//             >
//               <EditableRootProviderDemo />
//             </DemoCard>

//             <DemoCard
//               title="Context"
//               description="Editable.Context for conditional UI."
//             >
//               <EditableContextHintsDemo />
//             </DemoCard>

//             <DemoCard
//               title="Icon controls"
//               description="SubmitMode none; save/cancel icons while editing."
//             >
//               <EditableIconControlsDemo />
//             </DemoCard>

//             <DemoCard
//               title="Double-click"
//               description="activationMode dblclick."
//             >
//               <EditableDoubleClickDemo />
//             </DemoCard>

//             <DemoCard
//               title="Click"
//               description="activationMode click on preview."
//             >
//               <EditableClickActivationDemo />
//             </DemoCard>

//             <DemoCard
//               title="Textarea"
//               description="Input asChild textarea, autoResize, ⌘/Ctrl+Enter save."
//               className="sm:col-span-2"
//             >
//               <EditableTextareaDemo />
//             </DemoCard>

//             <DemoCard
//               title="With Field"
//               description="Field helper + error text alongside Editable."
//               className="sm:col-span-2"
//             >
//               <EditableWithFieldDemo />
//             </DemoCard>

//             <DemoCard title="Disabled">
//               <EditableDisabledDemo />
//             </DemoCard>

//             <DemoCard title="Read only">
//               <EditableReadOnlyDemo />
//             </DemoCard>

//             <DemoCard title="Invalid" description="invalid styling on input.">
//               <EditableInvalidDemo />
//             </DemoCard>

//             <DemoCard title="Max length" description="maxLength prop.">
//               <EditableMaxLengthDemo />
//             </DemoCard>

//             <DemoCard title="Default edit" description="Opens in edit mode.">
//               <EditableDefaultEditDemo />
//             </DemoCard>

//             <DemoCard
//               title="Submit mode"
//               description="submitMode both — blur and Enter commit."
//             >
//               <EditableSubmitModeDemo />
//             </DemoCard>

//             <DemoCard
//               title="activationMode none"
//               description="Only Edit trigger enters edit mode."
//             >
//               <EditableActivationNoneDemo />
//             </DemoCard>
//           </div>
//         </section>

//         <section className="flex flex-col gap-4">
//           <h2 className="font-medium text-foreground text-lg">
//             Other UI primitives
//           </h2>
//           <div className="grid gap-4 lg:grid-cols-2">
//             <DemoCard title="Accordion">
//               <Accordion collapsible defaultValue={["a"]}>
//                 <AccordionItem value="a">
//                   <AccordionTrigger>Section A</AccordionTrigger>
//                   <AccordionPanel>Content for section A.</AccordionPanel>
//                 </AccordionItem>
//                 <AccordionItem value="b">
//                   <AccordionTrigger>Section B</AccordionTrigger>
//                   <AccordionPanel>Content for section B.</AccordionPanel>
//                 </AccordionItem>
//               </Accordion>
//             </DemoCard>

//             <DemoCard title="Angle slider">
//               <AngleSlider defaultValue={45} variant="ring" size={160} />
//             </DemoCard>

//             <DemoCard title="Avatar">
//               <div className="flex items-center gap-3">
//                 <Avatar>
//                   <AvatarImage alt="" src="https://github.com/shadcn.png" />
//                   <AvatarFallback>CN</AvatarFallback>
//                 </Avatar>
//                 <Avatar size="sm">
//                   <AvatarFallback>SM</AvatarFallback>
//                 </Avatar>
//               </div>
//             </DemoCard>

//             <DemoCard title="Badge & breadcrumb">
//               <div className="flex flex-col gap-3">
//                 <div className="flex flex-wrap gap-2">
//                   <Badge>Default</Badge>
//                   <Badge variant="secondary">Secondary</Badge>
//                   <Badge variant="outline">Outline</Badge>
//                 </div>
//                 <Breadcrumb>
//                   <BreadcrumbList>
//                     <BreadcrumbItem>
//                       <BreadcrumbLink href="#">Docs</BreadcrumbLink>
//                     </BreadcrumbItem>
//                     <BreadcrumbSeparator />
//                     <BreadcrumbItem>
//                       <BreadcrumbPage>Components</BreadcrumbPage>
//                     </BreadcrumbItem>
//                   </BreadcrumbList>
//                 </Breadcrumb>
//               </div>
//             </DemoCard>

//             <DemoCard title="Checkbox">
//               <CheckboxRoot defaultChecked>
//                 <Checkbox />
//                 <CheckboxLabel>Accept terms</CheckboxLabel>
//               </CheckboxRoot>
//             </DemoCard>

//             <DemoCard title="Clipboard">
//               <ClipboardRoot value="https://ark-ui.com">
//                 <ClipboardControl>
//                   <ClipboardInput />
//                   <ClipboardTrigger asChild>
//                     <Button size="sm" variant="outline">
//                       <ClipboardIndicator copied={<span>Copied</span>}>
//                         <span>Copy</span>
//                       </ClipboardIndicator>
//                     </Button>
//                   </ClipboardTrigger>
//                 </ClipboardControl>
//                 <ClipboardValueText className="text-muted-foreground text-xs" />
//               </ClipboardRoot>
//             </DemoCard>

//             <DemoCard title="Collapsible">
//               <Collapsible>
//                 <CollapsibleTrigger className="flex items-center gap-2 font-medium text-sm">
//                   Toggle
//                   <ChevronDownIcon className="size-4 transition-transform in-data-[state=open]:rotate-180" />
//                 </CollapsibleTrigger>
//                 <CollapsibleContent>
//                   <p className="pt-2 text-muted-foreground text-sm">
//                     Hidden until expanded.
//                   </p>
//                 </CollapsibleContent>
//               </Collapsible>
//             </DemoCard>

//             <DemoCard title="Date picker">
//               <DatePicker
//                 defaultValue={[today]}
//                 locale="en-US"
//                 selectionMode="single"
//               >
//                 <DatePickerLabel>Date</DatePickerLabel>
//                 <DatePickerControl>
//                   <DatePickerInput />
//                   <DatePickerTrigger asChild>
//                     <Button
//                       aria-label="Open calendar"
//                       size="icon-sm"
//                       variant="outline"
//                     >
//                       <CalendarIcon />
//                     </Button>
//                   </DatePickerTrigger>
//                 </DatePickerControl>
//                 <DatePickerCalendar />
//               </DatePicker>
//             </DemoCard>

//             <DemoCard title="Input">
//               <Input placeholder="Type something…" />
//             </DemoCard>

//             <DemoCard title="Alert dialog">
//               <AlertDialog>
//                 <AlertDialogTrigger asChild>
//                   <Button size="sm" variant="outline">
//                     Open dialog
//                   </Button>
//                 </AlertDialogTrigger>
//                 <AlertDialogContent>
//                   <AlertDialogHeader>
//                     <AlertDialogTitle>Confirm</AlertDialogTitle>
//                     <AlertDialogDescription>
//                       This is an alert dialog built on Ark Dialog.
//                     </AlertDialogDescription>
//                   </AlertDialogHeader>
//                   <AlertDialogFooter>
//                     <AlertDialogCancel asChild>
//                       <Button size="sm" variant="ghost">
//                         Cancel
//                       </Button>
//                     </AlertDialogCancel>
//                     <AlertDialogAction asChild>
//                       <Button size="sm">Continue</Button>
//                     </AlertDialogAction>
//                   </AlertDialogFooter>
//                 </AlertDialogContent>
//               </AlertDialog>
//             </DemoCard>

//             <DemoCard title="Carousel" className="lg:col-span-2">
//               <Carousel className="mx-auto w-full max-w-md" slideCount={3}>
//                 <CarouselControl className="relative h-40 overflow-hidden rounded-lg border border-border bg-muted/30">
//                   <CarouselContent>
//                     <CarouselItem
//                       index={0}
//                       className="flex h-40 items-center justify-center font-medium text-lg"
//                     >
//                       Slide 1
//                     </CarouselItem>
//                     <CarouselItem
//                       index={1}
//                       className="flex h-40 items-center justify-center font-medium text-lg"
//                     >
//                       Slide 2
//                     </CarouselItem>
//                     <CarouselItem
//                       index={2}
//                       className="flex h-40 items-center justify-center font-medium text-lg"
//                     >
//                       Slide 3
//                     </CarouselItem>
//                   </CarouselContent>
//                   <CarouselPrevious />
//                   <CarouselNext />
//                 </CarouselControl>
//                 <CarouselIndicatorGroup>
//                   <CarouselIndicatorItem index={0} />
//                   <CarouselIndicatorItem index={1} />
//                   <CarouselIndicatorItem index={2} />
//                 </CarouselIndicatorGroup>
//               </Carousel>
//             </DemoCard>
//           </div>
//         </section>
//       </div>
//     </main>
//   );
// };

// // AUTO-EXPORT-START: docs-example-demos
// export {
//   ColorPickerBasicDemo,
//   ColorPickerControlledDemo,
//   ColorPickerFormDemo,
//   ColorPickerOpenControlledDemo,
//   ColorPickerRootProviderDemo,
//   ColorPickerSwatchesInPopoverDemo,
//   ComboboxBasicDemo,
//   ComboboxClearDemo,
//   ComboboxFormDemo,
//   ComboboxGroupedDemo,
//   ComboboxSelectButtonDemo,
//   ComboboxSizesDemo,
//   CommandPaletteDemo,
//   CommandStandaloneDemo,
//   DialogBasicDemo,
//   DialogNestedDemo,
//   EditableBasicDemo,
//   EditableContextHintsDemo,
//   EditableControlledDemo,
//   EditableInvalidDemo,
//   EditableRootProviderDemo,
//   EditableTextareaDemo,
//   FieldBasicDemo,
//   FieldCheckboxDemo,
//   FieldInvalidDemo,
//   FieldRootProviderDemo,
//   FieldsetBillingDemo,
//   FieldsetCheckboxDemo,
//   FieldsetDisabledDemo,
//   FieldsetInvalidDemo,
//   FieldsetRootProviderDemo,
//   FieldTextareaDemo,
//   FileUploadAvatarCircleDemo,
//   FileUploadAvatarPickerDemo,
//   FileUploadAvatarSoftDemo,
//   FileUploadButtonGroupRowDemo,
//   FileUploadRejectedDemo,
//   FileUploadRootProviderDemo,
//   FileUploadWithFieldDemo,
//   FloatingPanelBasicDemo,
//   FloatingPanelContextDemo,
//   FloatingPanelControlledOpenDemo,
//   FloatingPanelControlledPositionDemo,
//   FloatingPanelControlledSizeDemo,
//   HoverCardBasicDemo,
//   HoverCardContextDemo,
//   HoverCardContextHookDemo,
//   HoverCardControlledDemo,
//   HoverCardRootProviderDemo,
//   ImageCropperAspectRatioDemo,
//   ImageCropperBasicDemo,
//   ImageCropperCircleDemo,
//   ImageCropperControlledZoomDemo,
//   ImageCropperRootProviderZoomDemo,
//   ListboxBasicDemo,
//   ListboxControlledDemo,
//   ListboxGridDemo,
//   ListboxGroupedDemo,
//   ListboxRootProviderDemo,
//   ListboxSelectAllDemo,
//   MarqueeBasicDemo,
//   MarqueeContextDemo,
//   MarqueeReverseDemo,
//   MarqueeSpeedDemo,
//   MarqueeVerticalDemo,
//   MenuBasicDemo,
//   MenuCheckboxDemo,
//   MenuCloseOnSelectDemo,
//   MenuContextHookDemo,
//   MenuContextMenuDemo,
//   MenuControlledDemo,
//   MenuRootProviderDemo,
//   MenuSelectEventDemo,
//   NumberInputContextDemo,
//   NumberInputDefaultDemo,
//   NumberInputFormattingDemo,
//   NumberInputMinMaxDemo,
//   NumberInputRootProviderDemo,
//   PaginationButtonGroupDemo,
//   PaginationContextInfoDemo,
//   PaginationControlledDemo,
//   PaginationDefaultDemo,
//   PaginationLinksDemo,
//   PaginationRootProviderDemo,
//   ZoomImagePreviewDemo,
// };
// // AUTO-EXPORT-END: docs-example-demos
