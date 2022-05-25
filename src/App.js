import "./App.css";
import Layout from "./components/Layout";
import { initialValue, ThemeContextProvider } from "./context/theme-context";
import { useState } from "react";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Dashboard from "./pages/Dashboard";

function App() {
  return (
    <Router>
      <ThemeContextProvider initialValue={initialValue}>
        <div className="container">
          <Layout>
            <Routes>
              <Route path="/dashboard" element={<Dashboard />}></Route>
            </Routes>
          </Layout>
        </div>
      </ThemeContextProvider>
    </Router>
  );
}

export default App;
