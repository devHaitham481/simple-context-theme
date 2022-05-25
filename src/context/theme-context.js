import React, { useState } from "react";

const useLocalStorage = (key, initialValue) => {
  const [storedValue, setStoredValue] = useState(() => {
    try {
      const item = window.localStorage.getItem(key);

      return item ? JSON.parse(item) : initialValue;
    } catch (error) {
      console.log(error);
      return initialValue;
    }
  });
  const setValue = (value) => {
    try {
      const valueToStore =
        value instanceof Function ? value(storedValue) : value;

      setStoredValue(valueToStore);
      window.localStorage.setItem(key, JSON.stringify(valueToStore));
    } catch (error) {
      console.log(error);
    }
  };

  return [storedValue, setValue];
};

export const initialValue = {
  theme: {
    primary: "",
    secondary: "",
    tertiary: "",
  },
  logo: null,
  setLogo: () => {},
};

const ThemeContext = React.createContext(initialValue);

const ThemeContextProvider = ({ initialValue, children }) => {
  const [theme, setTheme] = useLocalStorage("theme", initialValue.theme);
  const [logo, setLogo] = useLocalStorage("logo", null);
  console.log("insideThemeContext", theme);
  return (
    <ThemeContext.Provider value={{ theme, setTheme, logo, setLogo }}>
      {children}
    </ThemeContext.Provider>
  );
};

const useThemeContext = () => {
  return React.useContext(ThemeContext);
};

export { ThemeContextProvider, useThemeContext };
