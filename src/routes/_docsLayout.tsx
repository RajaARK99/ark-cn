import { createFileRoute, Outlet } from "@tanstack/react-router";
import DocProvider from "@/components/docs/doc-provider";
import DocsTOC from "@/components/docs/doc-toc";
import DocsSidebar from "@/components/docs/docs-sidebar";
import Header from "@/components/header";
import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar";

const RouteComponent = () => {
  return (
    <main className="[--header-height:calc(--spacing(14))]">
      <SidebarProvider className="flex flex-col">
        <Header />
        <DocProvider>
          <div className="flex flex-1 max-w-400 mx-auto w-full">
            <DocsSidebar />
            <SidebarInset>
              <Outlet />
            </SidebarInset>
            <DocsTOC />
          </div>
        </DocProvider>
      </SidebarProvider>
    </main>
  );
};

export const Route = createFileRoute("/_docsLayout")({
  component: RouteComponent,
});
