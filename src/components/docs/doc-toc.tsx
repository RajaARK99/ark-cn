import { useEffect, useRef, useState } from "react";
import type { DocsHeading } from "@/lib/docs";
import { cn } from "@/lib/utils";
import {
  Sidebar,
  SidebarContent,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "../ui/sidebar";
import { useDoc } from "./doc-provider";

const useScrollSpy = (headings: DocsHeading[]) => {
  const [activeId, setActiveId] = useState("");
  const observerRef = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    if (!headings || headings.length === 0) {
      setActiveId("");
      return;
    }

    setActiveId(headings[0]?.id ?? "");

    observerRef.current?.disconnect();

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        }
      },
      { rootMargin: "-80px 0px -60% 0px" },
    );

    observerRef.current = observer;

    for (const heading of headings) {
      const el = document.getElementById(heading.id);
      if (el) observer.observe(el);
    }

    return () => observer.disconnect();
  }, [headings]);

  return activeId;
};

const DocsTOC = ({ className }: { className?: string }) => {
  const { headings } = useDoc();
  const activeId = useScrollSpy(headings);

  return (
    <Sidebar
      collapsible="none"
      className={cn(
        "sticky top-(--header-height) h-[calc(100svh-var(--header-height))]! hidden lg:flex py-6 px-3",
        className,
      )}
    >
      <SidebarHeader className="flex flex-row gap-2 px-0">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="size-4 text-muted-foreground"
          aria-hidden="true"
        >
          <path d="M21 5H3"></path>
          <path d="M15 12H3"></path>
          <path d="M17 19H3"></path>
        </svg>
        <h6 className="text-sm font-semibold text-muted-foreground">
          On this page
        </h6>
      </SidebarHeader>
      <SidebarContent>
        {headings.length === 0 ? null : (
          <SidebarMenu>
            {headings.map((item) => {
              return (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton
                    asChild
                    isActive={activeId === item.id}
                    className={cn(
                      "data-[active=true]:bg-transparent hover:bg-transparent text-muted-foreground",
                      item.depth === 3 && "pl-4",
                    )}
                  >
                    <a href={`#${item.id}`}>{item.title}</a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              );
            })}
          </SidebarMenu>
        )}
      </SidebarContent>
    </Sidebar>
  );
};

export default DocsTOC;
