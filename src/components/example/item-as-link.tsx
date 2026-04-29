import {
  ArrowRightIcon,
  BookOpenIcon,
  GlobeIcon,
  ShieldIcon,
} from "lucide-react";
import {
  Item,
  ItemActions,
  ItemContent,
  ItemDescription,
  ItemGroup,
  ItemMedia,
  ItemTitle,
} from "@/components/ui/item";

const links = [
  {
    icon: BookOpenIcon,
    label: "Documentation",
    desc: "Read the full docs",
    href: "#",
  },
  { icon: GlobeIcon, label: "Website", desc: "Visit our homepage", href: "#" },
  {
    icon: ShieldIcon,
    label: "Security",
    desc: "Review security policies",
    href: "#",
  },
];

const ItemAsLink = () => {
  return (
    <ItemGroup className="max-w-sm">
      {links.map((link) => (
        <Item key={link.label} variant="outline" asChild>
          <a href={link.href}>
            <ItemMedia variant="icon">
              <link.icon />
            </ItemMedia>
            <ItemContent>
              <ItemTitle>{link.label}</ItemTitle>
              <ItemDescription>{link.desc}</ItemDescription>
            </ItemContent>
            <ItemActions>
              <ArrowRightIcon className="size-4 text-muted-foreground" />
            </ItemActions>
          </a>
        </Item>
      ))}
    </ItemGroup>
  );
};

export default ItemAsLink;
