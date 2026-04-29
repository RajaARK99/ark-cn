import { FolderOpenIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Empty,
  EmptyContent,
  EmptyDescription,
  EmptyHeader,
  EmptyMedia,
  EmptyTitle,
} from "@/components/ui/empty";

const EmptyDemo = () => {
  return (
    <Empty>
      <EmptyHeader>
        <EmptyMedia variant="icon">
          <FolderOpenIcon />
        </EmptyMedia>
        <EmptyTitle>No files found</EmptyTitle>
        <EmptyDescription>
          Upload a file to get started or <a href="#">browse existing ones</a>.
        </EmptyDescription>
      </EmptyHeader>
      <EmptyContent>
        <Button size="sm">Upload file</Button>
      </EmptyContent>
    </Empty>
  );
};

export default EmptyDemo;
