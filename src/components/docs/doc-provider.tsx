import { createContext, useContext, useState } from "react";
import type { DocsHeading } from "@/lib/docs";

type DocContextType = {
  headings: DocsHeading[];
  setHeadings: (headings: DocsHeading[]) => void;
};

const DocContext = createContext<DocContextType>({
  headings: [],
  setHeadings: () => {},
});

const DocProvider = ({ children }: { children: React.ReactNode }) => {
  const [headings, setHeadings] = useState<DocsHeading[]>([]);
  return (
    <DocContext.Provider value={{ headings, setHeadings }}>
      {children}
    </DocContext.Provider>
  );
};

export const useDoc = () => {
  return useContext(DocContext);
};

export default DocProvider;
