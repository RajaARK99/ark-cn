import { MoonIcon, SunIcon } from "lucide-react";
import { Swap } from "@/components/ui/swap";
import { useTheme } from "./theme-provider";
import { Button } from "./ui/button";
import { SwapIndicator } from "./ui/swap";

const ToggleTheme = () => {
  const { theme, setTheme } = useTheme();
  return (
    <Button
      type="button"
      variant="ghost"
      size="icon"
      onClick={() => setTheme(theme === "light" ? "dark" : "light")}
      aria-label={theme === "light" ? "Show moon" : "Show sun"}
    >
      <Swap swap={theme === "light"}>
        <SwapIndicator className="swap-indicator-rotate" type="on">
          <MoonIcon />
        </SwapIndicator>
        <SwapIndicator className="swap-indicator-rotate" type="off">
          <SunIcon />
        </SwapIndicator>
      </Swap>
    </Button>
  );
};

export default ToggleTheme;
