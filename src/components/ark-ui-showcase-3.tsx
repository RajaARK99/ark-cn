// import {
//   BookOpenIcon,
//   BotIcon,
//   CalendarIcon,
//   CheckIcon,
//   ChevronRightIcon,
//   CommandIcon,
//   FileTextIcon,
//   FolderIcon,
//   FrameIcon,
//   HomeIcon,
//   InboxIcon,
//   LifeBuoyIcon,
//   MapIcon,
//   MoonIcon,
//   MoreHorizontalIcon,
//   PauseIcon,
//   PieChartIcon,
//   PlayIcon,
//   PlusIcon,
//   SearchIcon,
//   SendIcon,
//   Settings2Icon,
//   SquareTerminalIcon,
//   StarIcon,
//   SunIcon,
//   TrashIcon,
//   Volume2Icon,
//   VolumeXIcon,
//   XIcon,
// } from "lucide-react";
// import { type ReactNode, useState } from "react";

// import { Button } from "@/components/ui/button";
// import {
//   Collapsible,
//   CollapsibleContent,
//   CollapsibleTrigger,
// } from "@/components/ui/collapsible";
// import { Separator } from "@/components/ui/separator";
// import {
//   Sidebar,
//   SidebarContent,
//   SidebarFooter,
//   SidebarGroup,
//   SidebarGroupAction,
//   SidebarGroupContent,
//   SidebarGroupLabel,
//   SidebarHeader,
//   SidebarInput,
//   SidebarInset,
//   SidebarMenu,
//   SidebarMenuAction,
//   SidebarMenuBadge,
//   SidebarMenuButton,
//   SidebarMenuItem,
//   SidebarMenuSkeleton,
//   SidebarMenuSub,
//   SidebarMenuSubButton,
//   SidebarMenuSubItem,
//   SidebarProvider,
//   SidebarRail,
//   SidebarSeparator,
//   SidebarTrigger,
//   useSidebar,
// } from "@/components/ui/sidebar";
// import { Swap, SwapIndicator } from "@/components/ui/swap";
// import { Tooltip, TooltipPopup, TooltipTrigger } from "@/components/ui/tooltip";
// import { cn } from "@/lib/utils";

// // ---------------------------------------------------------------------------
// // Swap demos (kept from original)
// // ---------------------------------------------------------------------------

// const SwapFadeExample = () => {
//   const [swapped, setSwapped] = useState(false);
//   return (
//     <Button
//       type="button"
//       variant="outline"
//       size="icon"
//       onClick={() => setSwapped((prev) => !prev)}
//       aria-label={swapped ? "Show error icon" : "Show success icon"}
//     >
//       <Swap swap={swapped}>
//         <SwapIndicator className="swap-indicator-fade" type="on">
//           <CheckIcon />
//         </SwapIndicator>
//         <SwapIndicator className="swap-indicator-fade" type="off">
//           <XIcon />
//         </SwapIndicator>
//       </Swap>
//     </Button>
//   );
// };

// const SwapFlipExample = () => {
//   const [swapped, setSwapped] = useState(false);
//   return (
//     <Button
//       type="button"
//       variant="outline"
//       size="icon"
//       onClick={() => setSwapped((prev) => !prev)}
//       aria-label={swapped ? "Show pause" : "Show play"}
//     >
//       <Swap swap={swapped} style={{ perspective: "200px" }}>
//         <SwapIndicator className="swap-indicator-flip" type="on">
//           <PlayIcon />
//         </SwapIndicator>
//         <SwapIndicator className="swap-indicator-flip" type="off">
//           <PauseIcon />
//         </SwapIndicator>
//       </Swap>
//     </Button>
//   );
// };

// const SwapRotateExample = () => {
//   const [swapped, setSwapped] = useState(false);
//   return (
//     <Button
//       type="button"
//       variant="outline"
//       size="icon"
//       onClick={() => setSwapped((prev) => !prev)}
//       aria-label={swapped ? "Show moon" : "Show sun"}
//     >
//       <Swap swap={swapped}>
//         <SwapIndicator className="swap-indicator-rotate" type="on">
//           <SunIcon />
//         </SwapIndicator>
//         <SwapIndicator className="swap-indicator-rotate" type="off">
//           <MoonIcon />
//         </SwapIndicator>
//       </Swap>
//     </Button>
//   );
// };

// const SwapScaleExample = () => {
//   const [swapped, setSwapped] = useState(false);
//   return (
//     <Button
//       type="button"
//       variant="outline"
//       size="icon"
//       onClick={() => setSwapped((prev) => !prev)}
//       aria-label={swapped ? "Mute" : "Unmute"}
//     >
//       <Swap swap={swapped}>
//         <SwapIndicator className="swap-indicator-scale" type="on">
//           <Volume2Icon />
//         </SwapIndicator>
//         <SwapIndicator className="swap-indicator-scale" type="off">
//           <VolumeXIcon />
//         </SwapIndicator>
//       </Swap>
//     </Button>
//   );
// };

// const SwapLazyMountExample = () => {
//   const [swapped, setSwapped] = useState(false);
//   return (
//     <div className="flex flex-col gap-3">
//       <Button
//         type="button"
//         variant="outline"
//         onClick={() => setSwapped((prev) => !prev)}
//       >
//         Toggle (lazyMount + unmountOnExit)
//       </Button>
//       <Swap lazyMount swap={swapped} unmountOnExit>
//         <SwapIndicator className="swap-indicator-fade" type="on">
//           <span className="text-sm">On — mounted when first shown</span>
//         </SwapIndicator>
//         <SwapIndicator className="swap-indicator-fade" type="off">
//           <span className="text-sm">Off — unmounted when hidden</span>
//         </SwapIndicator>
//       </Swap>
//     </div>
//   );
// };

// // ---------------------------------------------------------------------------
// // Sidebar demo utilities
// // ---------------------------------------------------------------------------

// /**
//  * Override the sidebar's `position: fixed` / `h-svh` / `min-h-svh` so the
//  * sidebar positions and sizes relative to this frame instead of the viewport.
//  *
//  * - `relative` on the frame → `absolute` on the sidebar-container anchors it here.
//  * - `h-full` replaces `h-svh` so height = frame height, not viewport.
//  * - `min-h-full` replaces `min-h-svh` on the wrapper.
//  * - `overflow-hidden` clips the off-canvas slide.
//  * - NO `contain: paint` — tooltips portal to `document.body` and position normally.
//  */
// const DemoFrame = ({
//   children,
//   className,
//   height = 520,
// }: {
//   children: ReactNode;
//   className?: string;
//   height?: number;
// }) => (
//   <div
//     className={cn(
//       "relative overflow-hidden rounded-xl border",
//       "**:data-[slot=sidebar-wrapper]:min-h-full",
//       "**:data-[slot=sidebar-container]:absolute **:data-[slot=sidebar-container]:h-full",
//       className,
//     )}
//     style={{ height }}
//   >
//     {children}
//   </div>
// );

// /** Tall placeholder so the main column scrolls inside the fixed-height demo frame. */
// const DemoPlaceholder = () => (
//   <div className="flex flex-col gap-4 p-4 pb-8">
//     <div className="grid auto-rows-min gap-4 md:grid-cols-3">
//       <div className="aspect-video rounded-xl bg-muted/50" />
//       <div className="aspect-video rounded-xl bg-muted/50" />
//       <div className="aspect-video rounded-xl bg-muted/50" />
//     </div>
//     {Array.from({ length: 10 }).map((_, i) => (
//       <div
//         key={`demo-row-${i.toString()}`}
//         className="h-20 shrink-0 rounded-xl bg-muted/50"
//       />
//     ))}
//   </div>
// );

// /**
//  * SidebarInset must get min-h-0 + a scrollable flex child so overflow is reachable
//  * inside the flex + fixed-height preview.
//  */
// const DemoInsetShell = ({
//   header,
//   children,
//   bodyClassName,
// }: {
//   header: ReactNode;
//   children?: ReactNode;
//   bodyClassName?: string;
// }) => (
//   <SidebarInset className="min-h-0 min-w-0 flex-1 overflow-hidden">
//     {header}
//     <div
//       className={cn(
//         "min-h-0 min-w-0 flex-1 overflow-x-hidden overflow-y-auto overscroll-y-contain",
//         bodyClassName,
//       )}
//     >
//       {children ?? <DemoPlaceholder />}
//     </div>
//   </SidebarInset>
// );

// const DemoHeader = ({
//   breadcrumb = "Data Fetching",
// }: {
//   breadcrumb?: string;
// }) => (
//   <header className="flex h-16 shrink-0 items-center gap-2 border-b px-4">
//     <SidebarTrigger className="-ml-1" />
//     <Separator
//       orientation="vertical"
//       className="mr-2 data-[orientation=vertical]:h-4"
//     />
//     <div className="flex items-center gap-1.5 text-sm">
//       <span className="hidden text-muted-foreground md:inline">
//         Build Your Application
//       </span>
//       <ChevronRightIcon className="hidden size-3.5 text-muted-foreground md:inline" />
//       <span className="font-medium">{breadcrumb}</span>
//     </div>
//   </header>
// );

// const DemoHeaderCollapsible = () => {
//   const { state } = useSidebar();
//   return (
//     <header className="flex h-16 shrink-0 items-center gap-2 border-b px-4 transition-[height] ease-linear group-has-data-[collapsible=icon]/sidebar-wrapper:h-12">
//       <SidebarTrigger className="-ml-1" />
//       <Separator
//         orientation="vertical"
//         className="mr-2 data-[orientation=vertical]:h-4"
//       />
//       <span className="font-medium text-sm">
//         {state === "expanded" ? "Expanded" : "Collapsed to icons"}
//       </span>
//     </header>
//   );
// };

// // ---------------------------------------------------------------------------
// // Reusable nav data
// // ---------------------------------------------------------------------------

// const NAV_MAIN = [
//   {
//     title: "Playground",
//     icon: SquareTerminalIcon,
//     isActive: true,
//     items: [
//       { title: "History", href: "#" },
//       { title: "Starred", href: "#" },
//       { title: "Settings", href: "#" },
//     ],
//   },
//   {
//     title: "Models",
//     icon: BotIcon,
//     items: [
//       { title: "Genesis", href: "#" },
//       { title: "Explorer", href: "#" },
//       { title: "Quantum", href: "#" },
//     ],
//   },
//   {
//     title: "Documentation",
//     icon: BookOpenIcon,
//     items: [
//       { title: "Introduction", href: "#" },
//       { title: "Get Started", href: "#" },
//       { title: "Tutorials", href: "#" },
//       { title: "Changelog", href: "#" },
//     ],
//   },
//   {
//     title: "Settings",
//     icon: Settings2Icon,
//     items: [
//       { title: "General", href: "#" },
//       { title: "Team", href: "#" },
//       { title: "Billing", href: "#" },
//       { title: "Limits", href: "#" },
//     ],
//   },
// ];

// const NAV_PROJECTS = [
//   { name: "Design Engineering", icon: FrameIcon, href: "#" },
//   { name: "Sales & Marketing", icon: PieChartIcon, href: "#" },
//   { name: "Travel", icon: MapIcon, href: "#" },
// ];

// const NAV_SECONDARY = [
//   { title: "Support", icon: LifeBuoyIcon, href: "#" },
//   { title: "Feedback", icon: SendIcon, href: "#" },
// ];

// const NAV_FLAT = [
//   { title: "Home", icon: HomeIcon, href: "#" },
//   { title: "Inbox", icon: InboxIcon, href: "#", badge: "12" },
//   { title: "Calendar", icon: CalendarIcon, href: "#" },
//   { title: "Search", icon: SearchIcon, href: "#" },
//   { title: "Settings", icon: Settings2Icon, href: "#" },
// ];

// /** Extra items so icon-mode sidebar scrolls inside the preview. */
// const NAV_ICON_FLAT = [
//   ...NAV_FLAT,
//   { title: "Playground", icon: SquareTerminalIcon, href: "#" },
//   { title: "Models", icon: BotIcon, href: "#" },
//   { title: "Docs", icon: BookOpenIcon, href: "#" },
//   { title: "Design", icon: FrameIcon, href: "#" },
//   { title: "Marketing", icon: PieChartIcon, href: "#" },
//   { title: "Map", icon: MapIcon, href: "#" },
//   { title: "Terminal", icon: SquareTerminalIcon, href: "#" },
//   { title: "Files", icon: FolderIcon, href: "#" },
//   { title: "Notes", icon: FileTextIcon, href: "#" },
//   { title: "Starred", icon: StarIcon, href: "#" },
// ];

// const NAV_FILES = [
//   { name: "components", icon: FolderIcon },
//   { name: "lib", icon: FolderIcon },
//   { name: "app", icon: FolderIcon },
//   { name: "README.md", icon: FileTextIcon },
// ];

// // ---------------------------------------------------------------------------
// // Reusable AppSidebar compositions
// // ---------------------------------------------------------------------------

// const TeamSwitcher = () => (
//   <SidebarMenu>
//     <SidebarMenuItem>
//       <SidebarMenuButton size="lg">
//         <div className="flex size-8 items-center justify-center rounded-lg bg-sidebar-primary text-sidebar-primary-foreground">
//           <CommandIcon className="size-4" />
//         </div>
//         <div className="grid flex-1 text-left text-sm leading-tight">
//           <span className="truncate font-semibold">Acme Inc</span>
//           <span className="truncate text-xs">Enterprise</span>
//         </div>
//       </SidebarMenuButton>
//     </SidebarMenuItem>
//   </SidebarMenu>
// );

// const NavGrouped = () => (
//   <>
//     <SidebarGroup>
//       <SidebarGroupLabel>Platform</SidebarGroupLabel>
//       <SidebarGroupContent>
//         <SidebarMenu>
//           {NAV_MAIN.map((item) => (
//             <SidebarMenuItem key={item.title}>
//               <SidebarMenuButton isActive={item.isActive}>
//                 <item.icon />
//                 <span>{item.title}</span>
//               </SidebarMenuButton>
//             </SidebarMenuItem>
//           ))}
//         </SidebarMenu>
//       </SidebarGroupContent>
//     </SidebarGroup>
//     <SidebarGroup>
//       <SidebarGroupLabel>Projects</SidebarGroupLabel>
//       <SidebarGroupContent>
//         <SidebarMenu>
//           {NAV_PROJECTS.map((item) => (
//             <SidebarMenuItem key={item.name}>
//               <SidebarMenuButton>
//                 <item.icon />
//                 <span>{item.name}</span>
//               </SidebarMenuButton>
//               <SidebarMenuAction showOnHover aria-label="More">
//                 <MoreHorizontalIcon />
//               </SidebarMenuAction>
//             </SidebarMenuItem>
//           ))}
//           <SidebarMenuItem>
//             <SidebarMenuButton>
//               <PlusIcon />
//               <span>More</span>
//             </SidebarMenuButton>
//           </SidebarMenuItem>
//         </SidebarMenu>
//       </SidebarGroupContent>
//     </SidebarGroup>
//   </>
// );

// const NavCollapsible = () => (
//   <SidebarGroup>
//     <SidebarGroupLabel>Platform</SidebarGroupLabel>
//     <SidebarGroupContent>
//       <SidebarMenu>
//         {NAV_MAIN.map((item) => (
//           <Collapsible
//             key={item.title}
//             defaultOpen={item.isActive}
//             className="group/collapsible"
//           >
//             <SidebarMenuItem>
//               <CollapsibleTrigger asChild>
//                 <SidebarMenuButton>
//                   <item.icon />
//                   <span>{item.title}</span>
//                   <ChevronRightIcon className="ml-auto transition-transform group-data-[state=open]/collapsible:rotate-90" />
//                 </SidebarMenuButton>
//               </CollapsibleTrigger>
//               <CollapsibleContent>
//                 <SidebarMenuSub>
//                   {item.items.map((sub) => (
//                     <SidebarMenuSubItem key={sub.title}>
//                       <SidebarMenuSubButton href={sub.href}>
//                         <span>{sub.title}</span>
//                       </SidebarMenuSubButton>
//                     </SidebarMenuSubItem>
//                   ))}
//                 </SidebarMenuSub>
//               </CollapsibleContent>
//             </SidebarMenuItem>
//           </Collapsible>
//         ))}
//       </SidebarMenu>
//     </SidebarGroupContent>
//   </SidebarGroup>
// );

// const NavSubmenus = () => (
//   <SidebarGroup>
//     <SidebarGroupLabel>Platform</SidebarGroupLabel>
//     <SidebarGroupContent>
//       <SidebarMenu>
//         {NAV_MAIN.map((item) => (
//           <SidebarMenuItem key={item.title}>
//             <SidebarMenuButton isActive={item.isActive}>
//               <item.icon />
//               <span>{item.title}</span>
//             </SidebarMenuButton>
//             <SidebarMenuSub>
//               {item.items.map((sub) => (
//                 <SidebarMenuSubItem key={sub.title}>
//                   <SidebarMenuSubButton
//                     href={sub.href}
//                     isActive={sub.title === "History"}
//                   >
//                     <span>{sub.title}</span>
//                   </SidebarMenuSubButton>
//                 </SidebarMenuSubItem>
//               ))}
//             </SidebarMenuSub>
//           </SidebarMenuItem>
//         ))}
//       </SidebarMenu>
//     </SidebarGroupContent>
//   </SidebarGroup>
// );

// /**
//  * For icon-collapse + tooltips, we can't use CollapsibleTrigger asChild on
//  * a SidebarMenuButton that also has a tooltip — both inject conflicting
//  * event handlers. Instead we render an outer Tooltip manually and use
//  * CollapsibleTrigger asChild on a plain ark.button so each concern gets
//  * its own handler chain.
//  */
// const NavIconOnly = () => {
//   const { state, isMobile } = useSidebar();
//   const showTooltip = state === "collapsed" && !isMobile;

//   return (
//     <SidebarGroup>
//       <SidebarGroupLabel>Platform</SidebarGroupLabel>
//       <SidebarGroupContent>
//         <SidebarMenu>
//           {NAV_MAIN.map((item) => (
//             <Collapsible
//               key={item.title}
//               defaultOpen={item.isActive}
//               className="group/collapsible"
//             >
//               <SidebarMenuItem>
//                 <Tooltip
//                   positioning={{ placement: "right" }}
//                   openDelay={150}
//                   closeDelay={0}
//                   open={showTooltip ? undefined : false}
//                 >
//                   <TooltipTrigger asChild>
//                     <CollapsibleTrigger asChild>
//                       <SidebarMenuButton isActive={item.isActive}>
//                         <item.icon />
//                         <span>{item.title}</span>
//                         <ChevronRightIcon className="ml-auto transition-transform group-data-[state=open]/collapsible:rotate-90" />
//                       </SidebarMenuButton>
//                     </CollapsibleTrigger>
//                   </TooltipTrigger>
//                   <TooltipPopup showArrow>{item.title}</TooltipPopup>
//                 </Tooltip>
//                 <CollapsibleContent>
//                   <SidebarMenuSub>
//                     {item.items.map((sub) => (
//                       <SidebarMenuSubItem key={sub.title}>
//                         <SidebarMenuSubButton href={sub.href}>
//                           <span>{sub.title}</span>
//                         </SidebarMenuSubButton>
//                       </SidebarMenuSubItem>
//                     ))}
//                   </SidebarMenuSub>
//                 </CollapsibleContent>
//               </SidebarMenuItem>
//             </Collapsible>
//           ))}
//         </SidebarMenu>
//       </SidebarGroupContent>
//     </SidebarGroup>
//   );
// };

// const NavFlat = () => (
//   <SidebarGroup>
//     <SidebarGroupLabel>Application</SidebarGroupLabel>
//     <SidebarGroupContent>
//       <SidebarMenu>
//         {NAV_FLAT.map((item) => (
//           <SidebarMenuItem key={item.title}>
//             <SidebarMenuButton
//               isActive={item.title === "Home"}
//               tooltip={item.title}
//             >
//               <item.icon />
//               <span>{item.title}</span>
//             </SidebarMenuButton>
//             {item.badge ? (
//               <SidebarMenuBadge>{item.badge}</SidebarMenuBadge>
//             ) : null}
//           </SidebarMenuItem>
//         ))}
//       </SidebarMenu>
//     </SidebarGroupContent>
//   </SidebarGroup>
// );

// const NavUser = () => (
//   <SidebarMenu>
//     <SidebarMenuItem>
//       <SidebarMenuButton size="lg" tooltip="User">
//         <div className="flex size-8 items-center justify-center rounded-full bg-sidebar-accent">
//           <span className="font-medium text-sidebar-accent-foreground text-xs">
//             CN
//           </span>
//         </div>
//         <div className="grid flex-1 text-left text-sm leading-tight">
//           <span className="truncate font-medium">shadcn</span>
//           <span className="truncate text-xs text-muted-foreground">
//             m@example.com
//           </span>
//         </div>
//       </SidebarMenuButton>
//     </SidebarMenuItem>
//   </SidebarMenu>
// );

// const NavSecondary = () => (
//   <SidebarGroup className="mt-auto">
//     <SidebarGroupContent>
//       <SidebarMenu>
//         {NAV_SECONDARY.map((item) => (
//           <SidebarMenuItem key={item.title}>
//             <SidebarMenuButton tooltip={item.title}>
//               <item.icon />
//               <span>{item.title}</span>
//             </SidebarMenuButton>
//           </SidebarMenuItem>
//         ))}
//       </SidebarMenu>
//     </SidebarGroupContent>
//   </SidebarGroup>
// );

// const NavIconFlatScrollable = () => (
//   <SidebarGroup>
//     <SidebarGroupLabel>Application</SidebarGroupLabel>
//     <SidebarGroupContent>
//       <SidebarMenu>
//         {NAV_ICON_FLAT.map((item) => (
//           <SidebarMenuItem key={item.title}>
//             <SidebarMenuButton
//               isActive={item.title === "Home"}
//               tooltip={item.title}
//             >
//               <item.icon />
//               <span>{item.title}</span>
//             </SidebarMenuButton>
//             {"badge" in item && item.badge ? (
//               <SidebarMenuBadge>{item.badge}</SidebarMenuBadge>
//             ) : null}
//           </SidebarMenuItem>
//         ))}
//       </SidebarMenu>
//     </SidebarGroupContent>
//   </SidebarGroup>
// );

// const IconCollapseToolbar = () => {
//   const { toggleSidebar, open } = useSidebar();
//   return (
//     <div className="flex flex-wrap items-center gap-2 border-sidebar-border border-b px-2 py-2">
//       <span className="text-sidebar-foreground/80 text-xs">
//         <code className="rounded bg-sidebar-accent px-1">
//           collapsible=&quot;icon&quot;
//         </code>
//       </span>
//       <Button
//         type="button"
//         variant="outline"
//         size="sm"
//         onClick={() => toggleSidebar()}
//       >
//         {open ? "Collapse to icons" : "Expand sidebar"}
//       </Button>
//       <span className="text-muted-foreground text-xs">⌘/Ctrl+B</span>
//     </div>
//   );
// };

// // ---------------------------------------------------------------------------
// // Sidebar demos (shadcn blocks style)
// // ---------------------------------------------------------------------------

// /** sidebar-01: Simple grouped navigation */
// const Sidebar01Demo = () => (
//   <DemoFrame>
//     <SidebarProvider className="flex h-full min-h-0 w-full overflow-hidden">
//       <Sidebar>
//         <SidebarHeader className="border-sidebar-border border-b">
//           <SidebarInput placeholder="Search…" />
//         </SidebarHeader>
//         <SidebarContent>
//           <NavGrouped />
//         </SidebarContent>
//         <SidebarRail />
//       </Sidebar>
//       <DemoInsetShell header={<DemoHeader />} />
//     </SidebarProvider>
//   </DemoFrame>
// );

// /** sidebar-02: Collapsible sections */
// const Sidebar02Demo = () => (
//   <DemoFrame>
//     <SidebarProvider className="flex h-full min-h-0 w-full overflow-hidden">
//       <Sidebar>
//         <SidebarHeader>
//           <TeamSwitcher />
//         </SidebarHeader>
//         <SidebarContent>
//           <NavCollapsible />
//           <NavSecondary />
//         </SidebarContent>
//         <SidebarFooter>
//           <NavUser />
//         </SidebarFooter>
//         <SidebarRail />
//       </Sidebar>
//       <DemoInsetShell header={<DemoHeader breadcrumb="Get Started" />} />
//     </SidebarProvider>
//   </DemoFrame>
// );

// /** sidebar-03: Submenus */
// const Sidebar03Demo = () => (
//   <DemoFrame>
//     <SidebarProvider className="flex h-full min-h-0 w-full overflow-hidden">
//       <Sidebar>
//         <SidebarHeader>
//           <TeamSwitcher />
//         </SidebarHeader>
//         <SidebarContent>
//           <NavSubmenus />
//         </SidebarContent>
//         <SidebarRail />
//       </Sidebar>
//       <DemoInsetShell header={<DemoHeader breadcrumb="History" />} />
//     </SidebarProvider>
//   </DemoFrame>
// );

// /** sidebar-04: Floating variant */
// const Sidebar04Demo = () => (
//   <DemoFrame>
//     <SidebarProvider className="flex h-full min-h-0 w-full overflow-hidden">
//       <Sidebar variant="floating">
//         <SidebarHeader>
//           <TeamSwitcher />
//         </SidebarHeader>
//         <SidebarContent>
//           <NavSubmenus />
//         </SidebarContent>
//         <SidebarRail />
//       </Sidebar>
//       <DemoInsetShell header={<DemoHeader breadcrumb="Explorer" />} />
//     </SidebarProvider>
//   </DemoFrame>
// );

// /** sidebar-05: Collapsible submenus */
// const Sidebar05Demo = () => (
//   <DemoFrame>
//     <SidebarProvider className="flex h-full min-h-0 w-full overflow-hidden">
//       <Sidebar>
//         <SidebarHeader className="border-sidebar-border border-b">
//           <SidebarInput placeholder="Search…" />
//         </SidebarHeader>
//         <SidebarContent>
//           <NavCollapsible />
//         </SidebarContent>
//         <SidebarRail />
//       </Sidebar>
//       <DemoInsetShell header={<DemoHeader breadcrumb="Tutorials" />} />
//     </SidebarProvider>
//   </DemoFrame>
// );

// /** sidebar-07: Collapses to icons */
// const Sidebar07Demo = () => (
//   <DemoFrame>
//     <SidebarProvider className="flex h-full min-h-0 w-full overflow-hidden">
//       <Sidebar collapsible="icon">
//         <SidebarHeader>
//           <TeamSwitcher />
//         </SidebarHeader>
//         <SidebarContent>
//           <NavIconOnly />
//           <NavSecondary />
//         </SidebarContent>
//         <SidebarFooter>
//           <NavUser />
//         </SidebarFooter>
//         <SidebarRail />
//       </Sidebar>
//       <DemoInsetShell header={<DemoHeaderCollapsible />} />
//     </SidebarProvider>
//   </DemoFrame>
// );

// /** Collapsible icon + flat list: long nav scrolls inside SidebarContent; tooltips when collapsed */
// const SidebarIconFlatDemo = () => (
//   <DemoFrame>
//     <SidebarProvider
//       className="flex h-full min-h-0 w-full overflow-hidden"
//       defaultOpen
//     >
//       <Sidebar collapsible="icon">
//         <SidebarHeader className="gap-0">
//           <IconCollapseToolbar />
//           <div className="px-2 pb-2">
//             <TeamSwitcher />
//           </div>
//         </SidebarHeader>
//         <SidebarContent>
//           <NavIconFlatScrollable />
//           <NavSecondary />
//         </SidebarContent>
//         <SidebarFooter>
//           <NavUser />
//         </SidebarFooter>
//         <SidebarRail />
//       </Sidebar>
//       <DemoInsetShell header={<DemoHeaderCollapsible />} />
//     </SidebarProvider>
//   </DemoFrame>
// );

// /** sidebar-08: Inset variant with secondary nav */
// const Sidebar08Demo = () => (
//   <DemoFrame>
//     <SidebarProvider className="flex h-full min-h-0 w-full overflow-hidden">
//       <Sidebar variant="inset">
//         <SidebarHeader>
//           <TeamSwitcher />
//         </SidebarHeader>
//         <SidebarContent>
//           <NavGrouped />
//           <NavSecondary />
//         </SidebarContent>
//         <SidebarFooter>
//           <NavUser />
//         </SidebarFooter>
//       </Sidebar>
//       <DemoInsetShell header={<DemoHeader breadcrumb="Inbox" />} />
//     </SidebarProvider>
//   </DemoFrame>
// );

// /** sidebar-11: File tree */
// const Sidebar11Demo = () => (
//   <DemoFrame>
//     <SidebarProvider className="flex h-full min-h-0 w-full overflow-hidden">
//       <Sidebar>
//         <SidebarHeader>
//           <TeamSwitcher />
//         </SidebarHeader>
//         <SidebarContent>
//           <SidebarGroup>
//             <SidebarGroupLabel>Files</SidebarGroupLabel>
//             <SidebarGroupAction aria-label="New file">
//               <PlusIcon />
//             </SidebarGroupAction>
//             <SidebarGroupContent>
//               <SidebarMenu>
//                 {NAV_FILES.map((f) => (
//                   <SidebarMenuItem key={f.name}>
//                     <SidebarMenuButton>
//                       <f.icon />
//                       <span>{f.name}</span>
//                     </SidebarMenuButton>
//                     {f.icon === FolderIcon ? (
//                       <SidebarMenuAction showOnHover aria-label="Delete">
//                         <TrashIcon />
//                       </SidebarMenuAction>
//                     ) : null}
//                   </SidebarMenuItem>
//                 ))}
//               </SidebarMenu>
//             </SidebarGroupContent>
//           </SidebarGroup>
//           <SidebarSeparator />
//           <SidebarGroup>
//             <SidebarGroupLabel>Favorites</SidebarGroupLabel>
//             <SidebarGroupContent>
//               <SidebarMenu>
//                 <SidebarMenuItem>
//                   <SidebarMenuButton>
//                     <StarIcon />
//                     <span>button.tsx</span>
//                   </SidebarMenuButton>
//                 </SidebarMenuItem>
//               </SidebarMenu>
//             </SidebarGroupContent>
//           </SidebarGroup>
//         </SidebarContent>
//         <SidebarRail />
//       </Sidebar>
//       <DemoInsetShell header={<DemoHeader breadcrumb="button.tsx" />} />
//     </SidebarProvider>
//   </DemoFrame>
// );

// /** sidebar-14: Right side */
// const Sidebar14Demo = () => (
//   <DemoFrame>
//     <SidebarProvider className="flex h-full min-h-0 w-full overflow-hidden">
//       <DemoInsetShell
//         header={
//           <header className="flex h-16 shrink-0 items-center gap-2 border-b px-4">
//             <div className="flex items-center gap-1.5 text-sm">
//               <span className="hidden text-muted-foreground md:inline">
//                 Build Your Application
//               </span>
//               <ChevronRightIcon className="hidden size-3.5 text-muted-foreground md:inline" />
//               <span className="font-medium">Data Fetching</span>
//             </div>
//             <SidebarTrigger className="-mr-1 ml-auto rotate-180" />
//           </header>
//         }
//       />
//       <Sidebar side="right">
//         <SidebarHeader>
//           <TeamSwitcher />
//         </SidebarHeader>
//         <SidebarContent>
//           <NavIconFlatScrollable />
//         </SidebarContent>
//         <SidebarRail />
//       </Sidebar>
//     </SidebarProvider>
//   </DemoFrame>
// );

// /** sidebar-skeleton: Loading state */
// const SidebarSkeletonDemo = () => (
//   <DemoFrame height={320}>
//     <SidebarProvider className="flex h-full min-h-0 w-full overflow-hidden">
//       <Sidebar>
//         <SidebarHeader>
//           <SidebarMenuSkeleton showIcon />
//         </SidebarHeader>
//         <SidebarContent>
//           <SidebarGroup>
//             <SidebarGroupContent>
//               <SidebarMenu>
//                 {Array.from({ length: 5 }).map((_, i) => (
//                   <SidebarMenuSkeleton
//                     key={`sk-${i.toString()}`}
//                     showIcon={i % 2 === 0}
//                   />
//                 ))}
//               </SidebarMenu>
//             </SidebarGroupContent>
//           </SidebarGroup>
//         </SidebarContent>
//         <SidebarRail />
//       </Sidebar>
//       <DemoInsetShell
//         bodyClassName="p-4"
//         header={<DemoHeader breadcrumb="Loading…" />}
//       >
//         <div className="min-h-72 animate-pulse rounded-xl bg-muted/50" />
//       </DemoInsetShell>
//     </SidebarProvider>
//   </DemoFrame>
// );

// /** sidebar-controlled: External open/close */
// const SidebarControlledDemo = () => {
//   const [open, setOpen] = useState(true);
//   return (
//     <div className="flex flex-col gap-3">
//       <div className="flex gap-2">
//         <Button
//           type="button"
//           variant="outline"
//           size="sm"
//           onClick={() => setOpen((o) => !o)}
//         >
//           {open ? "Close sidebar" : "Open sidebar"}
//         </Button>
//       </div>
//       <DemoFrame>
//         <SidebarProvider
//           className="flex h-full min-h-0 w-full overflow-hidden"
//           open={open}
//           onOpenChange={setOpen}
//         >
//           <Sidebar collapsible="offcanvas">
//             <SidebarHeader>
//               <TeamSwitcher />
//             </SidebarHeader>
//             <SidebarContent>
//               <NavFlat />
//             </SidebarContent>
//             <SidebarRail />
//           </Sidebar>
//           <DemoInsetShell header={<DemoHeader breadcrumb="Controlled" />} />
//         </SidebarProvider>
//       </DemoFrame>
//     </div>
//   );
// };

// /** sidebar-non-collapsible: Fixed width, no collapse */
// const SidebarNoneDemo = () => (
//   <DemoFrame>
//     <SidebarProvider className="flex h-full min-h-0 w-full overflow-hidden">
//       <Sidebar collapsible="none">
//         <SidebarHeader>
//           <TeamSwitcher />
//         </SidebarHeader>
//         <SidebarContent>
//           <NavFlat />
//         </SidebarContent>
//       </Sidebar>
//       <DemoInsetShell
//         header={
//           <header className="flex h-16 shrink-0 items-center border-b px-4 font-medium text-sm">
//             Non-collapsible sidebar
//           </header>
//         }
//       />
//     </SidebarProvider>
//   </DemoFrame>
// );

// // ---------------------------------------------------------------------------
// // Main showcase
// // ---------------------------------------------------------------------------

// const ArkUiShowcase3 = () => {
//   return (
//     <main className="mx-auto flex w-full max-w-6xl flex-col gap-12 p-6 md:p-8">
//       {/* ---- Swap section ---- */}
//       <section className="space-y-3">
//         <h1 className="font-semibold text-2xl tracking-tight">Swap</h1>
//         <p className="text-muted-foreground text-sm">
//           Animate between two stacked indicators with{" "}
//           <code className="rounded bg-muted px-1 py-0.5 text-xs">
//             data-state
//           </code>
//           . Built with{" "}
//           <a
//             className="text-primary underline-offset-4 hover:underline"
//             href="https://ark-ui.com/docs/utilities/swap"
//             rel="noreferrer"
//             target="_blank"
//           >
//             Ark UI Swap
//           </a>
//           .
//         </p>
//       </section>

//       <section className="space-y-4 rounded-xl border bg-card p-5">
//         <h2 className="font-medium text-lg">Fade</h2>
//         <p className="text-muted-foreground text-sm">
//           Cross-fade between two icons (check / close).
//         </p>
//         <SwapFadeExample />
//       </section>

//       <section className="space-y-4 rounded-xl border bg-card p-5">
//         <h2 className="font-medium text-lg">Flip</h2>
//         <p className="text-muted-foreground text-sm">
//           3D flip using root <code className="text-xs">perspective</code> and{" "}
//           <code className="text-xs">backface-visibility: hidden</code> on
//           indicators.
//         </p>
//         <SwapFlipExample />
//       </section>

//       <section className="space-y-4 rounded-xl border bg-card p-5">
//         <h2 className="font-medium text-lg">Rotate</h2>
//         <p className="text-muted-foreground text-sm">
//           Spin sun / moon icons in and out with fade and blur.
//         </p>
//         <SwapRotateExample />
//       </section>

//       <section className="space-y-4 rounded-xl border bg-card p-5">
//         <h2 className="font-medium text-lg">Scale</h2>
//         <p className="text-muted-foreground text-sm">
//           Pop between volume on and muted icons.
//         </p>
//         <SwapScaleExample />
//       </section>

//       <section className="space-y-4 rounded-xl border bg-card p-5">
//         <h2 className="font-medium text-lg">Lazy mount</h2>
//         <p className="text-muted-foreground text-sm">
//           With <code className="text-xs">lazyMount</code> and{" "}
//           <code className="text-xs">unmountOnExit</code>, inactive indicators
//           stay out of the DOM until needed.
//         </p>
//         <SwapLazyMountExample />
//       </section>

//       {/* ---- Sidebar section ---- */}
//       <section className="space-y-3 border-border border-t pt-10">
//         <h1 className="font-semibold text-2xl tracking-tight">Sidebar</h1>
//         <p className="max-w-3xl text-muted-foreground text-sm">
//           Shadcn-style layout blocks built on{" "}
//           <code className="rounded bg-muted px-1 py-0.5 text-xs">ark</code>{" "}
//           factory elements,{" "}
//           <a
//             className="text-primary underline-offset-4 hover:underline"
//             href="https://ark-ui.com/docs/components/dialog"
//             rel="noreferrer"
//             target="_blank"
//           >
//             Dialog
//           </a>{" "}
//           (via Sheet) for mobile, and{" "}
//           <a
//             className="text-primary underline-offset-4 hover:underline"
//             href="https://ark-ui.com/docs/components/tooltip"
//             rel="noreferrer"
//             target="_blank"
//           >
//             Tooltip
//           </a>{" "}
//           for collapsed icon labels. Each preview is contained with{" "}
//           <code className="rounded bg-muted px-1 text-xs">contain: paint</code>{" "}
//           so the fixed-positioned sidebar stays inside the frame. Main columns
//           use a scroll region so long content stays usable inside the fixed
//           preview height.
//         </p>
//       </section>

//       <section className="flex flex-col gap-4">
//         <div>
//           <h2 className="font-medium text-lg">sidebar-01</h2>
//           <p className="text-muted-foreground text-sm">
//             A simple sidebar with navigation grouped by section.
//           </p>
//         </div>
//         <Sidebar01Demo />
//       </section>

//       <section className="flex flex-col gap-4">
//         <div>
//           <h2 className="font-medium text-lg">sidebar-02</h2>
//           <p className="text-muted-foreground text-sm">
//             A sidebar with collapsible sections (Ark UI{" "}
//             <a
//               className="text-primary underline-offset-4 hover:underline"
//               href="https://ark-ui.com/docs/components/collapsible"
//               rel="noreferrer"
//               target="_blank"
//             >
//               Collapsible
//             </a>
//             ).
//           </p>
//         </div>
//         <Sidebar02Demo />
//       </section>

//       <section className="flex flex-col gap-4">
//         <div>
//           <h2 className="font-medium text-lg">sidebar-03</h2>
//           <p className="text-muted-foreground text-sm">
//             A sidebar with submenus.
//           </p>
//         </div>
//         <Sidebar03Demo />
//       </section>

//       <section className="flex flex-col gap-4">
//         <div>
//           <h2 className="font-medium text-lg">sidebar-04</h2>
//           <p className="text-muted-foreground text-sm">
//             A floating sidebar with submenus.
//           </p>
//         </div>
//         <Sidebar04Demo />
//       </section>

//       <section className="flex flex-col gap-4">
//         <div>
//           <h2 className="font-medium text-lg">sidebar-05</h2>
//           <p className="text-muted-foreground text-sm">
//             A sidebar with collapsible submenus and search.
//           </p>
//         </div>
//         <Sidebar05Demo />
//       </section>

//       <section className="flex flex-col gap-4">
//         <div>
//           <h2 className="font-medium text-lg">sidebar-07</h2>
//           <p className="text-muted-foreground text-sm">
//             Icon collapse with nested collapsible sections (Ark UI{" "}
//             <a
//               className="text-primary underline-offset-4 hover:underline"
//               href="https://ark-ui.com/docs/components/tooltip"
//               rel="noreferrer"
//               target="_blank"
//             >
//               Tooltip
//             </a>{" "}
//             on each row when the rail is icon-only).
//           </p>
//         </div>
//         <Sidebar07Demo />
//       </section>

//       <section className="flex flex-col gap-4">
//         <div>
//           <h2 className="font-medium text-lg">
//             Collapsible icon (flat navigation)
//           </h2>
//           <p className="text-muted-foreground text-sm">
//             <code className="text-xs">collapsible=&quot;icon&quot;</code> with a
//             long flat list: the rail scrolls when content overflows; collapsed
//             rows show Ark UI tooltips. Use the button or ⌘/Ctrl+B to toggle.
//           </p>
//         </div>
//         <SidebarIconFlatDemo />
//       </section>

//       <section className="flex flex-col gap-4">
//         <div>
//           <h2 className="font-medium text-lg">sidebar-08</h2>
//           <p className="text-muted-foreground text-sm">
//             An inset sidebar with secondary navigation.
//           </p>
//         </div>
//         <Sidebar08Demo />
//       </section>

//       <section className="flex flex-col gap-4">
//         <div>
//           <h2 className="font-medium text-lg">sidebar-11</h2>
//           <p className="text-muted-foreground text-sm">
//             A sidebar with a file tree, group actions, and favorites.
//           </p>
//         </div>
//         <Sidebar11Demo />
//       </section>

//       <section className="flex flex-col gap-4">
//         <div>
//           <h2 className="font-medium text-lg">sidebar-14</h2>
//           <p className="text-muted-foreground text-sm">
//             A sidebar on the right.
//           </p>
//         </div>
//         <Sidebar14Demo />
//       </section>

//       <section className="flex flex-col gap-4">
//         <div>
//           <h2 className="font-medium text-lg">Non-collapsible</h2>
//           <p className="text-muted-foreground text-sm">
//             Fixed width, no off-canvas or icon collapse.
//           </p>
//         </div>
//         <SidebarNoneDemo />
//       </section>

//       <section className="flex flex-col gap-4">
//         <div>
//           <h2 className="font-medium text-lg">Skeleton placeholders</h2>
//           <p className="text-muted-foreground text-sm">
//             <code className="text-xs">SidebarMenuSkeleton</code> for loading
//             state.
//           </p>
//         </div>
//         <SidebarSkeletonDemo />
//       </section>

//       <section className="flex flex-col gap-4">
//         <div>
//           <h2 className="font-medium text-lg">Controlled open</h2>
//           <p className="text-muted-foreground text-sm">
//             Mirrors Ark Dialog&apos;s <code className="text-xs">open</code> /{" "}
//             <code className="text-xs">onOpenChange</code> contract on the
//             provider.
//           </p>
//         </div>
//         <SidebarControlledDemo />
//       </section>
//     </main>
//   );
// };

// export default ArkUiShowcase3;


