import React, { useEffect, useState } from "react";

import { SketchPicker, HuePicker, ChromePicker } from "react-color";
import { ThemeContext, useThemeContext } from "../context/theme-context";
import { useRenderCount } from "@gilbarbara/hooks";

import ColorScheme from "color-scheme";

const mapColorScheme = (colors, theme) => {
  Object.keys(theme).forEach(
    (key, index) => (theme[key] = "#".concat(colors[index]))
  );
  return theme;
};

const ColorPicker = () => {
  const { theme, setTheme } = useThemeContext();
  const [stateColor, setStateColor] = useState("#43094");
  //   console.log("renderCountColorPicker", useRenderCount());

  useEffect(() => {
    let scheme = new ColorScheme();
    if (typeof stateColor === "string") return;
    scheme.from_hue(stateColor.hsl.h).scheme("mono").variation("soft");

    const colorPalette = scheme.colors();

    setTheme(mapColorScheme(colorPalette, theme));
    console.log("Theme", theme);
  }, [stateColor]);

  return (
    <div>
      <ChromePicker
        color={stateColor}
        onChangeComplete={(color) => {
          setStateColor(color);
        }}
      />
    </div>
  );
};

export default ColorPicker;
