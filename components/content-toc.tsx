"use client";

import React, { useEffect, useState } from "react";

export interface TocItem {
  id: string;
  title: string;
  level: number;
}

interface ContentTOCProps {
  items: TocItem[];
}

export function ContentTOC({ items }: ContentTOCProps) {
  const [activeId, setActiveId] = useState<string>("");

  useEffect(() => {
    if (items.length === 0) return;

    // Use IntersectionObserver to track which header is currently in the viewport
    const observerOptions = {
      root: null,
      rootMargin: "-15% 0px -75% 0px", // Trigger when heading is near the top
      threshold: 0,
    };

    const handleIntersection = (entries: IntersectionObserverEntry[]) => {
      // Find entries that are intersecting
      const intersectingEntries = entries.filter((entry) => entry.isIntersecting);
      
      if (intersectingEntries.length > 0) {
        // Active heading is the first one that entered the viewport region
        setActiveId(intersectingEntries[0].target.id);
      }
    };

    const observer = new IntersectionObserver(handleIntersection, observerOptions);

    items.forEach((item) => {
      const element = document.getElementById(item.id);
      if (element) {
        observer.observe(element);
      }
    });

    const handleScroll = () => {
      // Set the first item active if scrolled back to the top of the page
      if (window.scrollY < 120 && items.length > 0) {
        setActiveId(items[0].id);
      }
    };
    window.addEventListener("scroll", handleScroll);

    // Initial check
    handleScroll();

    return () => {
      observer.disconnect();
      window.removeEventListener("scroll", handleScroll);
    };
  }, [items]);

  if (items.length === 0) return null;

  return (
    <aside className="fixed right-10 top-1/2 -translate-y-1/2 z-50 hidden xl:flex flex-col items-end gap-3 select-none">
      <div className="flex flex-col gap-4 border-r-2 border-border/30 pr-5 py-3 relative">
        {items.map((item) => {
          const isActive = activeId === item.id;
          return (
            <a
              key={item.id}
              href={`#${item.id}`}
              onClick={(e) => {
                e.preventDefault();
                const targetEl = document.getElementById(item.id);
                if (targetEl) {
                  const yOffset = -90; // Adjust for sticky header height
                  const y = targetEl.getBoundingClientRect().top + window.pageYOffset + yOffset;
                  window.scrollTo({ top: y, behavior: "smooth" });
                  setActiveId(item.id);
                }
              }}
              className="group flex items-center justify-end gap-3 text-right cursor-pointer"
            >
              {/* Floating label that animates on hover or when active */}
              <span
                className={`text-[10px] font-semibold tracking-widest uppercase transition-all duration-300 transform opacity-0 translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 ${
                  isActive ? "text-primary opacity-80 translate-x-0" : "text-muted-foreground/60"
                }`}
              >
                {item.title}
              </span>
              
              {/* Visual Indicator Lines */}
              <span
                className={`h-1 rounded-full transition-all duration-300 ${
                  isActive
                    ? "w-8 bg-primary shadow-sm shadow-primary/20"
                    : "w-4 bg-border/80 group-hover:w-6 group-hover:bg-muted-foreground/50"
                }`}
              />
            </a>
          );
        })}
      </div>
    </aside>
  );
}
