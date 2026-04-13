"use client";

import { Button } from "@/components/ui/button";
import {
  MenuItem,
  MenuItemText,
  MenuPopup,
  MenuRootProvider,
  MenuTrigger,
  useMenu,
} from "@/components/ui/menu";

const MenuRootProviderDemo = () => {
  const menu = useMenu({ defaultOpen: false });
  return (
    <div className="flex flex-col gap-2">
      <output className="text-muted-foreground text-xs">
        Open: {String(menu.api.open)}
      </output>
      <MenuRootProvider value={menu}>
        <MenuTrigger asChild>
          <Button size="sm" type="button" variant="outline">
            useMenu + RootProvider
          </Button>
        </MenuTrigger>
        <MenuPopup>
          <MenuItem value="a">
            <MenuItemText>Option A</MenuItemText>
          </MenuItem>
          <MenuItem value="b">
            <MenuItemText>Option B</MenuItemText>
          </MenuItem>
        </MenuPopup>
      </MenuRootProvider>
    </div>
  );
};

export default MenuRootProviderDemo;
