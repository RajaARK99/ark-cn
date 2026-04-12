"use client";

import {
  type CollectionItem,
  Listbox as ListboxPrimitive,
} from "@ark-ui/react/listbox";
import { CheckIcon } from "lucide-react";

import { cn } from "@/lib/utils";

export type ListboxProps<T extends CollectionItem = CollectionItem> =
  ListboxPrimitive.RootProps<T>;

export const Listbox = <T extends CollectionItem = CollectionItem>(
  props: ListboxPrimitive.RootProps<T>,
) => {
  const { className, ...rest } = props;
  return (
    <ListboxPrimitive.Root
      data-slot="listbox"
      className={cn("flex w-full flex-col gap-2", className)}
      {...rest}
    />
  );
};

export type ListboxLabelProps = ListboxPrimitive.LabelProps;

export const ListboxLabel = ({ className, ...props }: ListboxLabelProps) => (
  <ListboxPrimitive.Label
    data-slot="listbox-label"
    className={cn(
      "text-sm font-medium text-foreground leading-none select-none data-disabled:opacity-64",
      className,
    )}
    {...props}
  />
);

export type ListboxContentProps = ListboxPrimitive.ContentProps;

export const ListboxContent = ({
  className,
  ...props
}: ListboxContentProps) => (
  <ListboxPrimitive.Content
    data-slot="listbox-content"
    className={cn(
      "max-h-60 min-h-10 overflow-auto rounded-md border border-border bg-popover p-1 text-popover-foreground shadow-sm outline-none ring-1 ring-border/20",
      "data-[orientation=vertical]:flex data-[orientation=vertical]:flex-col data-[orientation=vertical]:gap-0.5",
      "data-[orientation=horizontal]:flex data-[orientation=horizontal]:flex-row data-[orientation=horizontal]:flex-wrap data-[orientation=horizontal]:gap-1.5 data-[orientation=horizontal]:content-start",
      "data-[layout=grid]:grid data-[layout=grid]:gap-1 data-[layout=grid]:auto-rows-fr data-[layout=grid]:grid-cols-[repeat(var(--column-count),minmax(0,1fr))]",
      className,
    )}
    {...props}
  />
);

export type ListboxEmptyProps = ListboxPrimitive.EmptyProps;

export const ListboxEmpty = ({ className, ...props }: ListboxEmptyProps) => (
  <ListboxPrimitive.Empty
    data-slot="listbox-empty"
    className={cn(
      "rounded-md px-2 py-6 text-center text-muted-foreground text-sm",
      className,
    )}
    {...props}
  />
);

export type ListboxInputProps = ListboxPrimitive.InputProps;

export const ListboxInput = ({ className, ...props }: ListboxInputProps) => (
  <ListboxPrimitive.Input
    data-slot="listbox-input"
    className={cn(
      "h-9 w-full rounded-md border border-input bg-background px-3 py-1 text-foreground text-sm shadow-xs outline-none placeholder:text-muted-foreground focus-visible:ring-2 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-64",
      className,
    )}
    {...props}
  />
);

export type ListboxItemProps = ListboxPrimitive.ItemProps;

export const ListboxItem = ({ className, ...props }: ListboxItemProps) => (
  <ListboxPrimitive.Item
    data-slot="listbox-item"
    className={cn(
      "relative flex cursor-pointer select-none items-center gap-2 rounded-sm px-2 py-1.5 text-sm outline-none transition-colors",
      "data-disabled:pointer-events-none data-disabled:opacity-50",
      "data-highlighted:bg-accent data-highlighted:text-accent-foreground",
      "data-selected:bg-accent/80",
      "data-[orientation=horizontal]:shrink-0",
      "data-[layout=grid]:min-h-9 data-[layout=grid]:min-w-0",
      className,
    )}
    {...props}
  />
);

export type ListboxItemTextProps = ListboxPrimitive.ItemTextProps;

export const ListboxItemText = ({
  className,
  ...props
}: ListboxItemTextProps) => (
  <ListboxPrimitive.ItemText
    data-slot="listbox-item-text"
    className={cn("flex-1 truncate", className)}
    {...props}
  />
);

export type ListboxItemIndicatorProps = ListboxPrimitive.ItemIndicatorProps;

export const ListboxItemIndicator = ({
  className,
  children,
  ...props
}: ListboxItemIndicatorProps) => (
  <ListboxPrimitive.ItemIndicator
    data-slot="listbox-item-indicator"
    className={cn("text-primary shrink-0", className)}
    {...props}
  >
    {children ?? <CheckIcon className="size-4" />}
  </ListboxPrimitive.ItemIndicator>
);

export type ListboxItemGroupProps = ListboxPrimitive.ItemGroupProps;

export const ListboxItemGroup = ({
  className,
  ...props
}: ListboxItemGroupProps) => (
  <ListboxPrimitive.ItemGroup
    data-slot="listbox-item-group"
    className={cn(
      "flex flex-col gap-0.5",
      "data-[orientation=horizontal]:flex-row data-[orientation=horizontal]:flex-wrap data-[orientation=horizontal]:gap-2",
      className,
    )}
    {...props}
  />
);

export type ListboxItemGroupLabelProps = ListboxPrimitive.ItemGroupLabelProps;

export const ListboxItemGroupLabel = ({
  className,
  ...props
}: ListboxItemGroupLabelProps) => (
  <ListboxPrimitive.ItemGroupLabel
    data-slot="listbox-item-group-label"
    className={cn(
      "px-2 py-1 font-medium text-muted-foreground text-xs",
      className,
    )}
    {...props}
  />
);

export type ListboxValueTextProps = ListboxPrimitive.ValueTextProps;

export const ListboxValueText = ({
  className,
  ...props
}: ListboxValueTextProps) => (
  <ListboxPrimitive.ValueText
    data-slot="listbox-value-text"
    className={cn("text-muted-foreground text-sm", className)}
    {...props}
  />
);

export const ListboxContext = ListboxPrimitive.Context;

export type ListboxRootProviderProps<
  T extends CollectionItem = CollectionItem,
> = ListboxPrimitive.RootProviderProps<T>;

export const ListboxRootProvider = <T extends CollectionItem = CollectionItem>(
  props: ListboxPrimitive.RootProviderProps<T>,
) => <ListboxPrimitive.RootProvider {...props} />;

/** Grid collections and `useListCollection` (filtering) live in `@ark-ui/react/collection`. */
export {
  createGridCollection,
  type GridCollection,
  type GridCollectionOptions,
  type UseListCollectionProps,
  type UseListCollectionReturn,
  useListCollection,
} from "@ark-ui/react/collection";
export type {
  CollectionItem,
  ListboxHighlightChangeDetails,
  ListboxScrollToIndexDetails,
  ListboxSelectionDetails,
  ListboxSelectionMode,
  ListboxValueChangeDetails,
  ListCollection,
  UseListboxItemContext,
  UseListboxProps,
  UseListboxReturn,
} from "@ark-ui/react/listbox";
export {
  createListCollection,
  useListbox,
  useListboxContext,
  useListboxItemContext,
} from "@ark-ui/react/listbox";
