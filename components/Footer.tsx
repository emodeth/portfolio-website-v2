"use client";

import * as React from "react";
import { Contrast } from "lucide-react";
import { useTheme } from "@/components/ThemeContext";
import { Tooltip } from "@/components/ui/tooltip";

const Footer = () => {
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => setMounted(true), []);

  React.useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      const activeElement = document.activeElement;
      if (
        activeElement &&
        (activeElement.tagName === "INPUT" ||
          activeElement.tagName === "TEXTAREA" ||
          activeElement.hasAttribute("contenteditable"))
      ) {
        return;
      }

      if (e.key === "d" || e.key === "D") {
        e.preventDefault();
        setTheme(resolvedTheme === "dark" ? "light" : "dark");
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [resolvedTheme, setTheme]);

  const isDark = mounted && resolvedTheme === "dark";

  return (
    <footer className="mx-auto max-w-[640px] px-6 pb-3">
      <div className="flex min-h-11 items-center justify-between border-t border-border pt-3 text-xs leading-5 text-muted-foreground">
        <p className="tabular-nums">Last updated · Aug 22, 2026</p>

        <Tooltip
          content={
            <div className="flex items-center gap-1.5">
              <span>Toggle Mode</span>
              <kbd className="inline-flex h-4 select-none items-center rounded border border-background/20 bg-background/10 px-1.5 font-mono text-[9px] font-medium text-background/90">
                D
              </kbd>
            </div>
          }
        >
          <button
            type="button"
            onClick={() => setTheme(isDark ? "light" : "dark")}
            className="group relative -my-2 flex size-8 items-center justify-center rounded-[8px] text-gray-1100 hover:bg-secondary hover:text-foreground transition-[color,background-color,scale] duration-150 active:scale-[0.96] focus-visible:outline-2 focus-visible:outline-offset-1 focus-visible:outline-ring"
            aria-label={isDark ? "Switch to light theme" : "Switch to dark theme"}
            title={isDark ? "Switch to light theme" : "Switch to dark theme"}
          >
            <Contrast aria-hidden="true" className="size-[18px]" />
          </button>
        </Tooltip>

        <p>© 2026 Emirhan Keskin</p>
      </div>
    </footer>
  );
};

export default Footer;
