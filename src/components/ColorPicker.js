import React, { useEffect, useState } from "react";

import { SketchPicker, HuePicker, ChromePicker } from "react-color";
import { ThemeContext, useThemeContext } from "../context/theme-context";

import ColorScheme from "color-scheme";

const mapColorSchemes = (colors, theme) => {
  const palette = Object.assign(
    {},
    ...Object.keys(theme).map((k, i) => ({ [k]: "#".concat(colors[i + 1]) }))
  );
  console.log("palette", palette, theme);
  return palette;
};

const ColorPicker = () => {
  const { theme, setTheme } = useThemeContext();
  const [stateColor, setStateColor] = useState("#43094");

  const handleColorPalete = (c) => {
    let scheme = new ColorScheme();

    scheme.from_hue(c.hsl.h).scheme("contrast").variation("default");

    const colorPalette = scheme.colors();
    console.log("theme inside color Picker before setting", theme);
    console.log("color", colorPalette);
    setTheme(mapColorSchemes(colorPalette, theme));
    console.log(
      "mapColorScheme inside handleColorPalette",
      mapColorSchemes(colorPalette, theme)
    );
    console.log("theme inside color Picker after setting", theme);
  };

  return (
    <div>
      <HuePicker
        color={stateColor}
        onChangeComplete={(color) => {
          setStateColor(color);
          handleColorPalete(color);
        }}
      />
    </div>
  );
};

export default ColorPicker;
