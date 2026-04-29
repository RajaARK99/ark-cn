import { UserIcon } from "lucide-react";
import {
  Item,
  ItemContent,
  ItemDescription,
  ItemGroup,
  ItemMedia,
  ItemSeparator,
  ItemTitle,
} from "@/components/ui/item";

const ItemSizes = () => {
  return (
    <ItemGroup className="max-w-sm">
      <Item variant="outline" size="default">
        <ItemMedia variant="icon">
          <UserIcon />
        </ItemMedia>
        <ItemContent>
          <ItemTitle>Default size</ItemTitle>
          <ItemDescription>size=&quot;default&quot;</ItemDescription>
        </ItemContent>
      </Item>
      <ItemSeparator />
      <Item variant="outline" size="sm">
        <ItemMedia variant="icon">
          <UserIcon />
        </ItemMedia>
        <ItemContent>
          <ItemTitle>Small size</ItemTitle>
          <ItemDescription>size=&quot;sm&quot;</ItemDescription>
        </ItemContent>
      </Item>
      <ItemSeparator />
      <Item variant="outline" size="xs">
        <ItemMedia variant="icon">
          <UserIcon />
        </ItemMedia>
        <ItemContent>
          <ItemTitle>Extra small size</ItemTitle>
          <ItemDescription>size=&quot;xs&quot;</ItemDescription>
        </ItemContent>
      </Item>
    </ItemGroup>
  );
};

export default ItemSizes;
