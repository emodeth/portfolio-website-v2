"use client";

import * as React from "react";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "@/components/ThemeContext";

const Footer = () => {
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => setMounted(true), []);

  const isDark = mounted && resolvedTheme === "dark";

  return (
    <footer className="mx-auto max-w-[640px] px-6 pb-6 sm:pb-8">
      <div className="flex min-h-11 items-center justify-between border-t border-border pt-3 text-xs leading-5 text-muted-foreground">
        <p className="tabular-nums">
          Last updated · Aug 22, 2026
        </p>

        <button
          type="button"
          onClick={() => setTheme(isDark ? "light" : "dark")}
          className="group relative -my-2 grid size-10 place-items-center rounded-full text-muted-foreground outline-none transition-[color,background-color,transform] hover:bg-accent hover:text-foreground focus-visible:ring-2 focus-visible:ring-ring active:scale-[0.96]"
          aria-label={isDark ? "Switch to light theme" : "Switch to dark theme"}
          title={isDark ? "Switch to light theme" : "Switch to dark theme"}
        >
          <Sun
            aria-hidden="true"
            className={`absolute size-4 transition-[opacity,transform,filter] duration-200 ease-[cubic-bezier(0.2,0,0,1)] ${
              isDark
                ? "scale-[0.25] opacity-0 blur-[4px]"
                : "scale-100 opacity-100 blur-0"
            }`}
          />
          <Moon
            aria-hidden="true"
            className={`absolute size-4 transition-[opacity,transform,filter] duration-200 ease-[cubic-bezier(0.2,0,0,1)] ${
              isDark
                ? "scale-100 opacity-100 blur-0"
                : "scale-[0.25] opacity-0 blur-[4px]"
            }`}
          />
        </button>

        <p>© 2026 Emirhan Keskin</p>
      </div>
    </footer>
  );
};

export default Footer;
