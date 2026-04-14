import { Link } from "@tanstack/react-router";
import { allDocs } from "content-collections";
import { getDocURl } from "@/lib/docs";
import { buttonVariants } from "../ui/button";

type ComponentNavItem = {
  title: string;
  docsPath: string;
};

const getComponentNavItems = (): ComponentNavItem[] => {
  return allDocs
    .filter((doc) => doc.url.startsWith("/components/"))
    .map((doc) => {
      const docsPath = getDocURl(doc.url);
      return {
        title: doc.title,
        docsPath: docsPath ?? "/docs",
      };
    })
    .sort((a, b) => a.title.localeCompare(b.title));
};

export const ComponentsNavigation = () => {
  const items = getComponentNavItems();

  if (items.length === 0) {
    return (
      <p className="text-sm text-muted-foreground">
        No component docs found yet.
      </p>
    );
  }

  return (
    <div className="not-prose grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
      {items.map((item) => (
        <Link
          key={item.docsPath}
          to={item.docsPath}
          params={{ _splat: item.docsPath }}
          className={buttonVariants({ variant: "link", className: "justify-start" })}
        >
          <p className="font-medium leading-tight">{item.title}</p>
        </Link>
      ))}
    </div>
  );
};
