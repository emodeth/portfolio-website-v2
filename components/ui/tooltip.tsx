import * as React from "react";

interface TooltipProps {
  content: string;
  children: React.ReactNode;
}

export function Tooltip({ content, children }: TooltipProps) {
  return (
    <div className="relative group/tooltip flex items-center justify-center">
      {/* Tooltip bubble */}
      <div className="pointer-events-none absolute bottom-full mb-1.5 left-1/2 -translate-x-1/2 flex flex-col items-center opacity-0 scale-95 transition-all duration-150 group-hover/tooltip:translate-y-0 group-hover/tooltip:opacity-100 group-hover/tooltip:scale-100 group-focus-within/tooltip:translate-y-0 group-focus-within/tooltip:opacity-100 group-focus-within/tooltip:scale-100 translate-y-1 z-50">
        <div className="bg-foreground text-background text-xs font-semibold px-2.5 py-1 rounded-[6px] shadow-[0_4px_12px_rgba(0,0,0,0.12)] whitespace-nowrap">
          {content}
        </div>
        <div className="w-2 h-2 bg-foreground rotate-45 -mt-1 z-[-1]"></div>
      </div>
      {children}
    </div>
  );
}
