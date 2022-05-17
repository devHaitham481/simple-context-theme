import "./App.css";
import Layout from "./components/Layout";
import { ThemeContextProvider, defaultTheme } from "./context/theme-context";
import { useState } from "react";
import ColorPicker from "./components/ColorPicker";

function App() {
  // const [theme, setTheme] = useState(themes.dark);

  // const toggleTheme = () => {
  //   theme === themes.dark ? setTheme(themes.light) : setTheme(themes.dark);
  //   console.log(theme);
  // };

  return (
    <ThemeContextProvider>
      <div className="container">
        <Layout></Layout>
        <ColorPicker />
      </div>
    </ThemeContextProvider>
  );
}

export default App;
