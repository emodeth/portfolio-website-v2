import { cn } from "@/lib/utils";
import { ReactNode } from "react";

interface MaxWidthWrapperProps {
  className?: string;
  children: ReactNode;
}

const MaxWidthWrapper = ({ className, children }: MaxWidthWrapperProps) => {
  return (
    <div
      className={cn(
        "mx-auto max-w-[640px] px-6 py-12 leading-relaxed sm:py-24",
        className
      )}
    >
      {children}
    </div>
  );
};

export default MaxWidthWrapper;
