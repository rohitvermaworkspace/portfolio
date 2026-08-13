import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { applyThemeColors, getStoredTheme } from "./lib/themes";
import "./index.css";

applyThemeColors(getStoredTheme());

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);