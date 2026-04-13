"use client";

import {
  ColorPicker,
  ColorPickerArea,
  ColorPickerChannelInput,
  ColorPickerContent,
  ColorPickerControl,
  ColorPickerHueAlphaSliders,
  ColorPickerLabel,
  ColorPickerPositioner,
  ColorPickerPresetSwatches,
  ColorPickerTrigger,
  parseColor,
} from "@/components/ui/color-picker";

const PRESET_SWATCHES = ["red", "blue", "green", "orange"] as const;

const defaultParsed = () => parseColor("#eb5e41");

const ColorPickerSwatchesInPopoverDemo = () => (
  <ColorPicker defaultValue={defaultParsed()} closeOnSelect>
    <ColorPickerLabel>With swatches</ColorPickerLabel>
    <ColorPickerControl>
      <ColorPickerChannelInput channel="hex" />
      <ColorPickerTrigger />
    </ColorPickerControl>
    <ColorPickerPositioner>
      <ColorPickerContent>
        <ColorPickerArea />
        <ColorPickerHueAlphaSliders />
        <ColorPickerPresetSwatches colors={PRESET_SWATCHES} />
      </ColorPickerContent>
    </ColorPickerPositioner>
  </ColorPicker>
);

export default ColorPickerSwatchesInPopoverDemo;
