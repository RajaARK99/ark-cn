"use client";

import { TreeView as TreeViewPrimitive } from "@ark-ui/react/tree-view";
import { forwardRef } from "react";
import { cn } from "@/lib/utils";

export type TreeViewProps<T> = TreeViewPrimitive.RootProps<T>;

export const TreeView = <T,>({ className, ...props }: TreeViewProps<T>) => (
  <TreeViewPrimitive.Root
    className={cn(
      "flex w-full max-w-md flex-col gap-2 text-sm text-foreground",
      className,
    )}
    data-slot="tree-view"
    {...props}
  />
);

export type TreeViewLabelProps = TreeViewPrimitive.LabelProps;

export const TreeViewLabel = ({ className, ...props }: TreeViewLabelProps) => (
  <TreeViewPrimitive.Label
    className={cn("font-medium text-sm", className)}
    data-slot="tree-view-label"
    {...props}
  />
);

export type TreeViewTreeProps = TreeViewPrimitive.TreeProps;

export const TreeViewTree = forwardRef<HTMLDivElement, TreeViewTreeProps>(
  ({ className, ...props }, ref) => (
    <TreeViewPrimitive.Tree
      className={cn("flex flex-col", className)}
      data-slot="tree-view-tree"
      ref={ref}
      {...props}
    />
  ),
);
TreeViewTree.displayName = "TreeViewTree";

export const TreeViewBranch = ({
  className,
  ...props
}: TreeViewPrimitive.BranchProps) => (
  <TreeViewPrimitive.Branch
    className={cn("relative", className)}
    data-slot="tree-view-branch"
    {...props}
  />
);

export const TreeViewBranchControl = ({
  className,
  ...props
}: TreeViewPrimitive.BranchControlProps) => (
  <TreeViewPrimitive.BranchControl
    className={cn(
      "group flex w-full cursor-pointer items-center gap-2 rounded-md px-2 py-1.5 text-left transition-colors hover:bg-accent/60 data-selected:bg-accent data-disabled:pointer-events-none data-disabled:opacity-50",
      className,
    )}
    data-slot="tree-view-branch-control"
    {...props}
  />
);

export const TreeViewBranchIndicator = ({
  className,
  ...props
}: TreeViewPrimitive.BranchIndicatorProps) => (
  <TreeViewPrimitive.BranchIndicator
    className={cn(
      "inline-flex size-4 items-center justify-center text-muted-foreground transition-transform data-state-open:rotate-90",
      className,
    )}
    data-slot="tree-view-branch-indicator"
    {...props}
  />
);

export const TreeViewBranchText = ({
  className,
  ...props
}: TreeViewPrimitive.BranchTextProps) => (
  <TreeViewPrimitive.BranchText
    className={cn(
      "inline-flex min-w-0 flex-1 items-center gap-2 truncate",
      className,
    )}
    data-slot="tree-view-branch-text"
    {...props}
  />
);

export const TreeViewBranchContent = ({
  className,
  ...props
}: TreeViewPrimitive.BranchContentProps) => (
  <TreeViewPrimitive.BranchContent
    className={cn("relative", className)}
    data-slot="tree-view-branch-content"
    {...props}
  />
);

export const TreeViewBranchIndentGuide = ({
  className,
  ...props
}: TreeViewPrimitive.BranchIndentGuideProps) => (
  <TreeViewPrimitive.BranchIndentGuide
    className={cn(
      "absolute top-0 bottom-0 left-4 w-px bg-border/70",
      className,
    )}
    data-slot="tree-view-branch-indent-guide"
    {...props}
  />
);

export const TreeViewItem = ({
  className,
  ...props
}: TreeViewPrimitive.ItemProps) => (
  <TreeViewPrimitive.Item
    className={cn(
      "flex w-full cursor-pointer items-center gap-2 rounded-md px-2 py-1.5 text-left transition-colors hover:bg-accent/60 data-selected:bg-accent data-disabled:pointer-events-none data-disabled:opacity-50",
      className,
    )}
    data-slot="tree-view-item"
    {...props}
  />
);

export const TreeViewItemText = ({
  className,
  ...props
}: TreeViewPrimitive.ItemTextProps) => (
  <TreeViewPrimitive.ItemText
    className={cn(
      "inline-flex min-w-0 flex-1 items-center gap-2 truncate",
      className,
    )}
    data-slot="tree-view-item-text"
    {...props}
  />
);

export const TreeViewNodeCheckbox = ({
  className,
  ...props
}: TreeViewPrimitive.NodeCheckboxProps) => (
  <TreeViewPrimitive.NodeCheckbox
    className={cn(
      "inline-flex size-4 items-center justify-center rounded-sm border border-input bg-background text-primary data-state-checked:border-primary data-state-checked:bg-primary data-state-checked:text-primary-foreground data-state-indeterminate:border-primary data-state-indeterminate:bg-primary data-state-indeterminate:text-primary-foreground",
      className,
    )}
    data-slot="tree-view-node-checkbox"
    {...props}
  />
);

export const TreeViewNodeCheckboxIndicator = ({
  className,
  ...props
}: TreeViewPrimitive.NodeCheckboxIndicatorProps) => (
  <TreeViewPrimitive.NodeCheckboxIndicator
    className={cn("inline-flex items-center justify-center", className)}
    data-slot="tree-view-node-checkbox-indicator"
    {...props}
  />
);

export const TreeViewNodeRenameInput = ({
  className,
  ...props
}: TreeViewPrimitive.NodeRenameInputProps) => (
  <TreeViewPrimitive.NodeRenameInput
    className={cn(
      "h-7 min-w-0 flex-1 rounded border border-primary/50 bg-background px-1.5 text-sm outline-none ring-offset-background focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-1",
      className,
    )}
    data-slot="tree-view-node-rename-input"
    {...props}
  />
);

export const TreeViewNodeProvider = TreeViewPrimitive.NodeProvider;
export const TreeViewNodeContext = TreeViewPrimitive.NodeContext;
export const TreeViewRootProvider = TreeViewPrimitive.RootProvider;

export {
  createTreeCollection,
  useTreeView,
  useTreeViewContext,
} from "@ark-ui/react/tree-view";
