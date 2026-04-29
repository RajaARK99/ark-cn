import { SearchXIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Empty,
  EmptyContent,
  EmptyDescription,
  EmptyHeader,
  EmptyMedia,
  EmptyTitle,
} from "@/components/ui/empty";

const EmptyIconVariant = () => {
  return (
    <Empty>
      <EmptyHeader>
        <EmptyMedia>
          <SearchXIcon className="size-16 text-muted-foreground" />
        </EmptyMedia>
        <EmptyTitle>No results found</EmptyTitle>
        <EmptyDescription>
          Try different keywords or <a href="#">clear your filters</a>.
        </EmptyDescription>
      </EmptyHeader>
      <EmptyContent>
        <Button variant="outline" size="sm">
          Clear filters
        </Button>
      </EmptyContent>
    </Empty>
  );
};

export default EmptyIconVariant;
