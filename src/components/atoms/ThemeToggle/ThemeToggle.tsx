import { useEffect, useState } from "react";

const STORAGE_KEY = "rzest-theme";

type Theme = "light" | "dark";

function getInitialTheme(): Theme {
  if (typeof document === "undefined") return "light";
  const current = document.documentElement.getAttribute("data-theme");
  return current === "dark" ? "dark" : "light";
}

export interface ThemeToggleProps {
  className?: string;
}

export function ThemeToggle({ className = "" }: ThemeToggleProps) {
  const [theme, setTheme] = useState<Theme>(getInitialTheme);

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    try {
      window.localStorage.setItem(STORAGE_KEY, theme);
    } catch {
      // localStorage may be unavailable (privacy mode, SSR) — theme still applies for this session.
    }
  }, [theme]);

  const toggle = () => setTheme((prev) => (prev === "light" ? "dark" : "light"));

  const classes = ["theme-toggle", className].filter(Boolean).join(" ");

  return (
    <button
      type="button"
      className={classes}
      onClick={toggle}
      aria-label={`Switch to ${theme === "light" ? "dark" : "light"} mode`}
    >
      <span aria-hidden="true">{theme === "light" ? "☾" : "☀"}</span>
    </button>
  );
}
