import { createFileRoute, Outlet } from "@tanstack/react-router";
import DocProvider from "@/components/docs/doc-provider";
import DocsTOC from "@/components/docs/doc-toc";
import DocsSidebar from "@/components/docs/docs-sidebar";
import Header from "@/components/header";
import { DocsLayoutPage } from "@/components/loading-page";
import MobileMenu from "@/components/mobile-menu";
import { DocsNotFoundPage } from "@/components/not-found-page";
import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar";
import { cn } from "@/lib/utils";

const RouteComponent = () => {
  return (
    <main className="[--header-height:calc(--spacing(14))] overflow-x-clip">
      <SidebarProvider className="flex flex-col">
        <Header
          className="border-b"
          containerClassName={cn(
            "min-[1600px]:border-x min-[1600px]:relative",
            "min-[1600px]:before:absolute min-[1600px]:before:top-[calc(var(--header-height)-4.5px)] min-[1600px]:before:left-0 min-[1600px]:before:z-1 min-[1600px]:before:-ml-1 min-[1600px]:before:size-2 min-[1600px]:before:rounded-xs min-[1600px]:before:border min-[1600px]:before:border-border min-[1600px]:before:bg-popover min-[1600px]:before:bg-clip-padding min-[1600px]:before:shadow-xs/5 min-[1600px]:after:absolute min-[1600px]:after:top-[calc(var(--header-height)-4.5px)] min-[1600px]:after:right-0 min-[1600px]:after:z-1 min-[1600px]:after:-mr-1 min-[1600px]:after:size-2 min-[1600px]:after:rounded-xs min-[1600px]:after:border min-[1600px]:after:border-border min-[1600px]:after:bg-background min-[1600px]:after:bg-clip-padding min-[1600px]:after:shadow-xs/5 min-[1600px]:dark:after:bg-clip-border min-[1600px]:dark:before:bg-clip-border",
          )}
          mobileMenu={<MobileMenu />}
        />
        <DocProvider>
          <div className="flex flex-1 max-w-400 mx-auto w-full">
            <DocsSidebar className="min-[1600px]:border-l" />
            <SidebarInset className="bg-muted/40 rounded-2xl">
              <Outlet />
            </SidebarInset>
            <DocsTOC className="min-[1600px]:border-r" />
          </div>
        </DocProvider>
      </SidebarProvider>
    </main>
  );
};

export const Route = createFileRoute("/_docsLayout")({
  component: RouteComponent,
  notFoundComponent: DocsNotFoundPage,
  pendingComponent: DocsLayoutPage,
});
