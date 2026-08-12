"use client";

import type { MouseEvent, ReactNode } from "react";
import { useEffect, useState } from "react";
import { Computer, Moon, Sun } from "lucide-react";

type Theme = "light" | "dark" | "system";

const STORAGE_KEY = "archive-theme";
const THEME_TRANSITION_MS = 500;

function getSystemTheme(): "light" | "dark" {
  if (typeof window === "undefined") {
    return "light";
  }

  return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
}

function getPreferredTheme(): Theme {
  if (typeof window === "undefined") {
    return "system";
  }

  const stored = window.localStorage.getItem(STORAGE_KEY);
  if (stored === "light" || stored === "dark" || stored === "system") {
    return stored;
  }

  return "system";
}

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [theme, setTheme] = useState<Theme>("system");
  const [isMounted, setIsMounted] = useState(false);

  function resolveTheme(nextTheme: Theme): "light" | "dark" {
    if (nextTheme === "system") {
      return getSystemTheme();
    }

    return nextTheme;
  }

  function applyTheme(nextTheme: Theme) {
    const resolvedTheme = resolveTheme(nextTheme);
    document.documentElement.classList.toggle("dark", resolvedTheme === "dark");
    window.localStorage.setItem(STORAGE_KEY, nextTheme);
  }

  function setThemeOrigin(x: number, y: number) {
    const root = document.documentElement;
    const maxX = Math.max(x, window.innerWidth - x);
    const maxY = Math.max(y, window.innerHeight - y);
    const radius = Math.hypot(maxX, maxY);

    root.style.setProperty("--theme-origin-x", `${x}px`);
    root.style.setProperty("--theme-origin-y", `${y}px`);
    root.style.setProperty("--theme-reveal-radius", `${radius}px`);
  }

  function updateTheme(nextTheme: Theme) {
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (!reduceMotion && "startViewTransition" in document) {
      document.documentElement.classList.add("theme-transition");
      const transition = (document as Document & {
        startViewTransition?: (callback: () => void) => { finished: Promise<void> };
      }).startViewTransition?.(() => {
        applyTheme(nextTheme);
      });

      transition?.finished.finally(() => {
        window.setTimeout(() => {
          document.documentElement.classList.remove("theme-transition");
        }, THEME_TRANSITION_MS);
      });
      return;
    }

    document.documentElement.classList.add("theme-transition");
    applyTheme(nextTheme);
    window.setTimeout(() => {
      document.documentElement.classList.remove("theme-transition");
    }, THEME_TRANSITION_MS);
  }

  useEffect(() => {
    const preferred = getPreferredTheme();
    setTheme(preferred);
    document.documentElement.classList.toggle("dark", resolveTheme(preferred) === "dark");
    setThemeOrigin(window.innerWidth - 32, 96);
    setIsMounted(true);
  }, []);

  useEffect(() => {
    if (!isMounted) {
      return;
    }

    updateTheme(theme);
  }, [isMounted, theme]);

  useEffect(() => {
    const media = window.matchMedia("(prefers-color-scheme: dark)");
    const onChange = () => {
      const stored = window.localStorage.getItem(STORAGE_KEY);
      if (!stored || stored === "system") {
        setTheme("system");
      }
    };

    media.addEventListener("change", onChange);
    return () => media.removeEventListener("change", onChange);
  }, []);

  const resolvedTheme = isMounted ? resolveTheme(theme) : "light";
  const nextThemeLabel = resolvedTheme === "light" ? "dark" : "light";

  return (
    <>
      {children}
      <div className="theme-switcher theme-switcher--desktop" aria-label="Theme switcher">
        <button
          type="button"
          onClick={(event: MouseEvent<HTMLButtonElement>) => {
            const rect = event.currentTarget.getBoundingClientRect();
            setThemeOrigin(rect.left + rect.width / 2, rect.top + rect.height / 2);
            setTheme("system");
          }}
          className="theme-switcher__button"
          data-active={theme === "system"}
          aria-label="Use system theme"
        >
          <Computer size={14} strokeWidth={1.6} />
        </button>
        <button
          type="button"
          onClick={(event: MouseEvent<HTMLButtonElement>) => {
            const rect = event.currentTarget.getBoundingClientRect();
            setThemeOrigin(rect.left + rect.width / 2, rect.top + rect.height / 2);
            setTheme("light");
          }}
          className="theme-switcher__button"
          data-active={theme === "light"}
          aria-label="Use light theme"
        >
          <Sun size={14} strokeWidth={1.6} />
        </button>
        <button
          type="button"
          onClick={(event: MouseEvent<HTMLButtonElement>) => {
            const rect = event.currentTarget.getBoundingClientRect();
            setThemeOrigin(rect.left + rect.width / 2, rect.top + rect.height / 2);
            setTheme("dark");
          }}
          className="theme-switcher__button"
          data-active={theme === "dark"}
          aria-label="Use dark theme"
        >
          <Moon size={14} strokeWidth={1.6} />
        </button>
      </div>
      <button
        type="button"
        onClick={(event: MouseEvent<HTMLButtonElement>) => {
          const rect = event.currentTarget.getBoundingClientRect();
          setThemeOrigin(rect.left + rect.width / 2, rect.top + rect.height / 2);
          setTheme((current) => (resolveTheme(current) === "light" ? "dark" : "light"));
        }}
        className="archive-icon-button theme-switcher--mobile fixed right-4 top-[76px] z-[60] md:right-6"
        aria-label={`Switch to ${nextThemeLabel} mode`}
      >
        {resolvedTheme === "light" ? <Moon size={14} strokeWidth={1.6} /> : <Sun size={14} strokeWidth={1.6} />}
      </button>
    </>
  );
}
