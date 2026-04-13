"use client";

import {
  BookOpenIcon,
  BotIcon,
  ChevronRightIcon,
  CommandIcon,
  Settings2Icon,
  SquareTerminalIcon,
} from "lucide-react";
import type { ReactNode } from "react";
import { Separator } from "@/components/ui/separator";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarInset,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub,
  SidebarMenuSubButton,
  SidebarMenuSubItem,
  SidebarProvider,
  SidebarRail,
  SidebarTrigger,
} from "@/components/ui/sidebar";
import { cn } from "@/lib/utils";

// ---------------------------------------------------------------------------
// Sidebar demo utilities
// ---------------------------------------------------------------------------

/**
 * Override the sidebar's `position: fixed` / `h-svh` / `min-h-svh` so the
 * sidebar positions and sizes relative to this frame instead of the viewport.
 *
 * - `relative` on the frame → `absolute` on the sidebar-container anchors it here.
 * - `h-full` replaces `h-svh` so height = frame height, not viewport.
 * - `min-h-full` replaces `min-h-svh` on the wrapper.
 * - `overflow-hidden` clips the off-canvas slide.
 * - NO `contain: paint` — tooltips portal to `document.body` and position normally.
 */
const DemoFrame = ({
  children,
  className,
  height = 520,
}: {
  children: ReactNode;
  className?: string;
  height?: number;
}) => (
  <div
    className={cn(
      "relative overflow-hidden rounded-xl border",
      "**:data-[slot=sidebar-wrapper]:min-h-full",
      "**:data-[slot=sidebar-container]:absolute **:data-[slot=sidebar-container]:h-full",
      className,
    )}
    style={{ height }}
  >
    {children}
  </div>
);

/** Tall placeholder so the main column scrolls inside the fixed-height demo frame. */
const DemoPlaceholder = () => (
  <div className="flex flex-col gap-4 p-4 pb-8">
    <div className="grid auto-rows-min gap-4 md:grid-cols-3">
      <div className="aspect-video rounded-xl bg-muted/50" />
      <div className="aspect-video rounded-xl bg-muted/50" />
      <div className="aspect-video rounded-xl bg-muted/50" />
    </div>
    {Array.from({ length: 10 }).map((_, i) => (
      <div
        key={`demo-row-${i.toString()}`}
        className="h-20 shrink-0 rounded-xl bg-muted/50"
      />
    ))}
  </div>
);

/**
 * SidebarInset must get min-h-0 + a scrollable flex child so overflow is reachable
 * inside the flex + fixed-height preview.
 */
const DemoInsetShell = ({
  header,
  children,
  bodyClassName,
}: {
  header: ReactNode;
  children?: ReactNode;
  bodyClassName?: string;
}) => (
  <SidebarInset className="min-h-0 min-w-0 flex-1 overflow-hidden">
    {header}
    <div
      className={cn(
        "min-h-0 min-w-0 flex-1 overflow-x-hidden overflow-y-auto overscroll-y-contain",
        bodyClassName,
      )}
    >
      {children ?? <DemoPlaceholder />}
    </div>
  </SidebarInset>
);

const DemoHeader = ({
  breadcrumb = "Data Fetching",
}: {
  breadcrumb?: string;
}) => (
  <header className="flex h-16 shrink-0 items-center gap-2 border-b px-4">
    <SidebarTrigger className="-ml-1" />
    <Separator
      orientation="vertical"
      className="mr-2 data-[orientation=vertical]:h-4"
    />
    <div className="flex items-center gap-1.5 text-sm">
      <span className="hidden text-muted-foreground md:inline">
        Build Your Application
      </span>
      <ChevronRightIcon className="hidden size-3.5 text-muted-foreground md:inline" />
      <span className="font-medium">{breadcrumb}</span>
    </div>
  </header>
);

// ---------------------------------------------------------------------------
// Reusable nav data
// ---------------------------------------------------------------------------

const NAV_MAIN = [
  {
    title: "Playground",
    icon: SquareTerminalIcon,
    isActive: true,
    items: [
      { title: "History", href: "#" },
      { title: "Starred", href: "#" },
      { title: "Settings", href: "#" },
    ],
  },
  {
    title: "Models",
    icon: BotIcon,
    items: [
      { title: "Genesis", href: "#" },
      { title: "Explorer", href: "#" },
      { title: "Quantum", href: "#" },
    ],
  },
  {
    title: "Documentation",
    icon: BookOpenIcon,
    items: [
      { title: "Introduction", href: "#" },
      { title: "Get Started", href: "#" },
      { title: "Tutorials", href: "#" },
      { title: "Changelog", href: "#" },
    ],
  },
  {
    title: "Settings",
    icon: Settings2Icon,
    items: [
      { title: "General", href: "#" },
      { title: "Team", href: "#" },
      { title: "Billing", href: "#" },
      { title: "Limits", href: "#" },
    ],
  },
];

// ---------------------------------------------------------------------------
// Reusable AppSidebar compositions
// ---------------------------------------------------------------------------

const TeamSwitcher = () => (
  <SidebarMenu>
    <SidebarMenuItem>
      <SidebarMenuButton size="lg">
        <div className="flex size-8 items-center justify-center rounded-lg bg-sidebar-primary text-sidebar-primary-foreground">
          <CommandIcon className="size-4" />
        </div>
        <div className="grid flex-1 text-left text-sm leading-tight">
          <span className="truncate font-semibold">Acme Inc</span>
          <span className="truncate text-xs">Enterprise</span>
        </div>
      </SidebarMenuButton>
    </SidebarMenuItem>
  </SidebarMenu>
);

const NavSubmenus = () => (
  <SidebarGroup>
    <SidebarGroupLabel>Platform</SidebarGroupLabel>
    <SidebarGroupContent>
      <SidebarMenu>
        {NAV_MAIN.map((item) => (
          <SidebarMenuItem key={item.title}>
            <SidebarMenuButton isActive={item.isActive}>
              <item.icon />
              <span>{item.title}</span>
            </SidebarMenuButton>
            <SidebarMenuSub>
              {item.items.map((sub) => (
                <SidebarMenuSubItem key={sub.title}>
                  <SidebarMenuSubButton
                    href={sub.href}
                    isActive={sub.title === "History"}
                  >
                    <span>{sub.title}</span>
                  </SidebarMenuSubButton>
                </SidebarMenuSubItem>
              ))}
            </SidebarMenuSub>
          </SidebarMenuItem>
        ))}
      </SidebarMenu>
    </SidebarGroupContent>
  </SidebarGroup>
);

/** sidebar-03: Submenus */
const Sidebar03Demo = () => (
  <DemoFrame>
    <SidebarProvider className="flex h-full min-h-0 w-full overflow-hidden">
      <Sidebar>
        <SidebarHeader>
          <TeamSwitcher />
        </SidebarHeader>
        <SidebarContent>
          <NavSubmenus />
        </SidebarContent>
        <SidebarRail />
      </Sidebar>
      <DemoInsetShell header={<DemoHeader breadcrumb="History" />} />
    </SidebarProvider>
  </DemoFrame>
);

export default Sidebar03Demo;
