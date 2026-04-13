"use client";

import { Button } from "@/components/ui/button";
import {
  Splitter,
  SplitterPanel,
  SplitterResizeTrigger,
  SplitterRootProvider,
  useSplitter,
} from "@/components/ui/splitter";

const SplitterRootProviderDemo = () => {
  const api = useSplitter({
    defaultSize: [30, 70],
    panels: [
      { id: "sidebar", collapsible: true, collapsedSize: 0, minSize: 15 },
      { id: "content", minSize: 30 },
    ],
  });

  return (
    <div className="flex w-full flex-col gap-3">
      <div className="flex flex-wrap items-center gap-2">
        <Button
          onClick={() => api.collapsePanel("sidebar")}
          size="sm"
          type="button"
          variant="outline"
        >
          Collapse sidebar
        </Button>
        <Button
          onClick={() => api.expandPanel("sidebar")}
          size="sm"
          type="button"
          variant="outline"
        >
          Expand sidebar
        </Button>
        <Button
          onClick={() => api.resetSizes()}
          size="sm"
          type="button"
          variant="outline"
        >
          Reset
        </Button>
      </div>
      <div className="h-44 w-full">
        <SplitterRootProvider value={api}>
          <Splitter panels={[{ id: "sidebar" }, { id: "content" }]}>
            <SplitterPanel className="p-4" id="sidebar">
              <p className="text-muted-foreground text-sm">Sidebar</p>
            </SplitterPanel>
            <SplitterResizeTrigger id="sidebar:content" withHandle />
            <SplitterPanel className="p-4" id="content">
              <p className="text-muted-foreground text-sm">Content</p>
            </SplitterPanel>
          </Splitter>
        </SplitterRootProvider>
      </div>
    </div>
  );
};

export default SplitterRootProviderDemo;
