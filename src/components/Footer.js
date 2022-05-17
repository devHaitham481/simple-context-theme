import React, { useContext, useEffect } from "react";
import { Layout } from "antd";
import { ThemeContext, useThemeContext } from "../context/theme-context";

import { useRenderCount } from "@gilbarbara/hooks";

const { Footer } = Layout;

const FooterComponent = () => {
  const { theme, setTheme } = useThemeContext();
  console.log("footerTheme", theme);
  const localTheme = JSON.parse(localStorage.getItem("theme"));
  console.log("localTheme", localTheme.primary);

  useEffect(() => {}, [theme]);
  return (
    <>
      <Footer
        className="footer"
        style={{ backgroundColor: localTheme.primary }}
      >
        <button onClick={() => setTheme(theme)}>
          Click me to change the theme color value ::)
        </button>
        Ant Design ©2018 Created by Ant
      </Footer>
    </>
  );
};

export default FooterComponent;
