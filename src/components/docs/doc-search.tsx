import { useNavigate } from "@tanstack/react-router";
import { SearchIcon } from "lucide-react";
import { Fragment, useEffect, useState } from "react";
import {
  Command,
  CommandDialog,
  CommandDialogPopup,
  CommandDialogTrigger,
  CommandEmpty,
  CommandFooter,
  CommandGroup,
  CommandGroupedList,
  CommandGroupLabel,
  CommandInput,
  CommandItem,
  CommandItemText,
  CommandPopup,
} from "@/components/ui/command";
import { getDocsGroups } from "@/lib/docs-navigation";
import { cn } from "@/lib/utils";

type DocSearchItem = {
  value: string;
  label: string;
  group: string;
};

const buildItems = (): DocSearchItem[] =>
  getDocsGroups().flatMap((group) =>
    group.items.map((doc) => ({
      value: doc.url === "/" ? "/docs" : `/docs${doc.url}`,
      label: doc.title,
      group: group.title,
    })),
  );

const items = buildItems();

const DocSearch = ({ className }: { className?: string }) => {
  const [open, setOpen] = useState(false);
  const [resetKey, setResetKey] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        setOpen((o) => !o);
      }
    };
    document.addEventListener("keydown", down);
    return () => document.removeEventListener("keydown", down);
  }, []);

  return (
    <CommandDialog
      open={open}
      onOpenChange={(d) => {
        setOpen(d.open);
        if (d.open) setResetKey((k) => k + 1);
      }}
    >
      <CommandDialogTrigger asChild>
        <button
          type="button"
          className={cn(
            "hidden lg:flex items-center gap-2 h-8 w-48 px-3 rounded-full border border-border/60 bg-muted/40 text-muted-foreground text-sm hover:bg-muted hover:border-border transition-colors cursor-pointer",
            className,
          )}
        >
          <SearchIcon className="size-3.5 shrink-0" />
          <span className="flex-1 text-left">Search docs...</span>
          <kbd className="pointer-events-none inline-flex h-5 items-center rounded border border-border bg-background px-1 font-medium font-mono text-[10px]">
            ⌘K
          </kbd>
        </button>
      </CommandDialogTrigger>

      <CommandDialogPopup aria-label="Search documentation">
        <Command
          key={resetKey}
          groupBy={(item) => item.group}
          items={items}
          open={open}
          onOpenChange={(d) => {
            if (!d.open) setOpen(false);
          }}
          onValueChange={(details) => {
            const url = details.value[0];
            if (url) {
              setOpen(false);
              navigate({ to: url });
            }
          }}
        >
          <CommandInput placeholder="Search docs..." />
          <CommandPopup>
            <CommandEmpty>No results found.</CommandEmpty>
            <CommandGroupedList items={items}>
              {([group, groupItems]) => (
                <Fragment key={group}>
                  <CommandGroup>
                    <CommandGroupLabel>{group}</CommandGroupLabel>
                    {groupItems.map((item) => (
                      <CommandItem key={item.value} item={item}>
                        <CommandItemText>{item.label}</CommandItemText>
                      </CommandItem>
                    ))}
                  </CommandGroup>
                </Fragment>
              )}
            </CommandGroupedList>
          </CommandPopup>
          <CommandFooter>
            <div className="flex items-center gap-3">
              <span className="flex items-center gap-1">
                <kbd className="inline-flex h-5 items-center rounded border border-border bg-muted px-1 font-mono text-[10px]">
                  ↑
                </kbd>
                <kbd className="inline-flex h-5 items-center rounded border border-border bg-muted px-1 font-mono text-[10px]">
                  ↓
                </kbd>
                Navigate
              </span>
              <span className="flex items-center gap-1">
                <kbd className="inline-flex h-5 items-center rounded border border-border bg-muted px-1 font-mono text-[10px]">
                  ↵
                </kbd>
                Open
              </span>
            </div>
            <span className="flex items-center gap-1">
              <kbd className="inline-flex h-5 items-center rounded border border-border bg-muted px-1.5 font-mono text-[10px]">
                Esc
              </kbd>
              Close
            </span>
          </CommandFooter>
        </Command>
      </CommandDialogPopup>
    </CommandDialog>
  );
};

export default DocSearch;
