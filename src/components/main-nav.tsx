import { Link, useLocation } from "@tanstack/react-router";
import type { ComponentProps } from "react";
import { cn } from "@/lib/utils";
import { buttonVariants } from "./ui/button";

export const MainNav = ({
  items,
  className,
  ...props
}: ComponentProps<"nav"> & {
  items: { href: string; label: string }[];
}) => {
  const location = useLocation();

  return (
    <nav
      className={cn("items-center gap-0 hidden md:flex", className)}
      {...props}
    >
      {items.map((item) => (
        <Link
          key={item.href}
          to={item.href}
          data-active={location.href === item.href}
          className={buttonVariants({ variant: "ghost", size: "sm" })}
        >
          {item.label}
        </Link>
      ))}
    </nav>
  );
};
