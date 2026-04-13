"use client";

import { Button } from "@/components/ui/button";
import {
  SliderField,
  SliderLabel,
  SliderRootProvider,
  SliderValueText,
  useSlider,
} from "@/components/ui/slider";

const SliderRootProviderDemo = () => {
  const store = useSlider({ defaultValue: [40] });
  return (
    <div className="flex max-w-xs flex-col gap-2">
      <Button
        onClick={() => {
          store.focus();
        }}
        size="sm"
        type="button"
        variant="outline"
      >
        Focus
      </Button>
      <SliderRootProvider value={store}>
        <SliderLabel>Label</SliderLabel>
        <SliderValueText />
        <SliderField />
      </SliderRootProvider>
    </div>
  );
};

export default SliderRootProviderDemo;
