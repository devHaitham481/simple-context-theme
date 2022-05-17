import React, { useLayoutEffect } from "react";

const defaultTheme = {
  primary: "#2f81ff",
  secondary: "#535151",
  tertiary: "#c4c4c4",
};

const ThemeContext = React.createContext(null);

const ThemeContextProvider = ({ children }) => {
  const [theme, setTheme] = React.useState(defaultTheme);

  return (
    <ThemeContext.Provider value={[theme, setTheme]}>
      {children}
    </ThemeContext.Provider>
  );
};

const useThemeContext = () => {
  const [theme, setTheme] = React.useContext(ThemeContext);

  const handleTheme = (value) => {
    setTheme(value);
    console.log("setThemeRan");
    window.localStorage.setItem("theme", JSON.stringify(value));
  };

  return { theme: theme, setTheme: handleTheme };
};

export { ThemeContextProvider, useThemeContext, defaultTheme };
