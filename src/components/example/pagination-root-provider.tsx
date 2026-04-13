"use client";

import { ChevronLeftIcon, ChevronRightIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  PaginationItems,
  PaginationNextTrigger,
  PaginationPrevTrigger,
  PaginationRootProvider,
  usePagination,
} from "@/components/ui/pagination";

const PaginationRootProviderDemo = () => {
  const store = usePagination({ count: 90, defaultPage: 2, pageSize: 10 });
  return (
    <PaginationRootProvider value={store}>
      <div className="flex flex-col gap-2">
        <p className="text-muted-foreground text-xs">
          usePagination + PaginationRootProvider — page {store.page} /{" "}
          {store.totalPages}
        </p>
        <div className="flex flex-wrap items-center gap-1">
          <PaginationPrevTrigger asChild>
            <Button size="icon" variant="outline">
              <ChevronLeftIcon className="size-4" />
            </Button>
          </PaginationPrevTrigger>
          <PaginationItems />
          <PaginationNextTrigger asChild>
            <Button size="icon" variant="outline">
              <ChevronRightIcon className="size-4" />
            </Button>
          </PaginationNextTrigger>
        </div>
      </div>
    </PaginationRootProvider>
  );
};

export default PaginationRootProviderDemo;
