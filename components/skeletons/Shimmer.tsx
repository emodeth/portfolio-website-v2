import { cn } from "@/lib/utils";

interface ShimmerProps {
  className?: string;
}

export const Shimmer = ({ className }: ShimmerProps) => (
  <div className={cn("rounded-md bg-muted animate-pulse", className)} />
);

export default Shimmer;
