import { useCallback, useEffect, useState } from "react";
import {
  applyThemeColors,
  COLOR_THEME_KEY,
  getStoredTheme,
  themes,
} from "./themes";

const THEME_KEY = "rohit-portfolio-theme";

function getInitialMode() {
  if (typeof window === "undefined") return "dark";
  try {
    const stored = localStorage.getItem(THEME_KEY);
    if (stored === "light" || stored === "dark") return stored;
  } catch {
    /* ignore storage errors */
  }
  return "dark";
}

export function useTheme() {
  const [mode, setMode] = useState(getInitialMode);
  const [colorTheme, setColorTheme] = useState(getStoredTheme);

  useEffect(() => {
    const root = document.documentElement;
    root.classList.toggle("dark", mode === "dark");
    try {
      localStorage.setItem(THEME_KEY, mode);
    } catch {
      /* ignore storage errors */
    }
  }, [mode]);

  useEffect(() => {
    const root = document.documentElement;
    root.classList.add("theme-transitioning");
    applyThemeColors(colorTheme);
    try {
      localStorage.setItem(COLOR_THEME_KEY, colorTheme);
    } catch {
      /* ignore storage errors */
    }
    const timer = setTimeout(() => root.classList.remove("theme-transitioning"), 450);
    return () => {
      clearTimeout(timer);
      root.classList.remove("theme-transitioning");
    };
  }, [colorTheme]);

  const toggleTheme = useCallback(() => {
    setMode((current) => (current === "dark" ? "light" : "dark"));
  }, []);

  const changeTheme = useCallback((id) => {
    if (themes.some((theme) => theme.id === id)) setColorTheme(id);
  }, []);

  return { theme: mode, toggleTheme, colorTheme, setColorTheme: changeTheme, themes };
}
