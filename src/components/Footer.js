import React, { useContext, useEffect } from "react";
import { Layout } from "antd";
import { ThemeContext, useThemeContext } from "../context/theme-context";

const { Footer } = Layout;

const FooterComponent = () => {
  const { theme, setTheme } = useThemeContext();
  console.log("insideFooterTheme", theme);
  return (
    <>
      <Footer
        className="footer"
        style={{
          backgroundColor: theme.primary,
          color: theme.secondary,
          fontSize: "1rem",
        }}
      >
        {/* <button onClick={() => setTheme(theme)}>
          Click me to change the theme color value ::)
        </button> */}
        Ant Design ©2018 Created by Ant
      </Footer>
    </>
  );
};

export default FooterComponent;
