"use client";

import { ChevronDownIcon } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import {
  Item,
  ItemContent,
  ItemDescription,
  ItemMedia,
  ItemTitle,
} from "@/components/ui/item";
import { Menu, MenuItem, MenuPopup, MenuTrigger } from "@/components/ui/menu";

const people = [
  {
    username: "shadcn",
    avatar: "https://github.com/shadcn.png",
    email: "shadcn@vercel.com",
  },
  {
    username: "maxleiter",
    avatar: "https://github.com/maxleiter.png",
    email: "maxleiter@vercel.com",
  },
  {
    username: "evilrabbit",
    avatar: "https://github.com/evilrabbit.png",
    email: "evilrabbit@vercel.com",
  },
];

const ItemDropdown = () => {
  return (
    <Menu positioning={{ placement: "bottom-end" }}>
      <MenuTrigger asChild>
        <Button variant="outline">
          Select <ChevronDownIcon />
        </Button>
      </MenuTrigger>
      <MenuPopup className="w-48">
        {people.map((person) => (
          <MenuItem
            key={person.username}
            value={person.username}
            className="p-0"
          >
            <Item size="xs" className="w-full">
              <ItemMedia>
                <Avatar size="sm">
                  <AvatarImage src={person.avatar} className="grayscale" />
                  <AvatarFallback>
                    {person.username.charAt(0).toUpperCase()}
                  </AvatarFallback>
                </Avatar>
              </ItemMedia>
              <ItemContent className="gap-0">
                <ItemTitle>{person.username}</ItemTitle>
                <ItemDescription className="leading-none">
                  {person.email}
                </ItemDescription>
              </ItemContent>
            </Item>
          </MenuItem>
        ))}
      </MenuPopup>
    </Menu>
  );
};

export default ItemDropdown;
