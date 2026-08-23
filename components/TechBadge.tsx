import { cn } from "@/lib/utils";

const TechBadge = ({ name }: { name: string }) => {
  return (
    <div
      className={cn(
        "flex items-center justify-center rounded-md border border-border bg-background px-2.5 py-1 text-[13px] font-medium text-gray-1100 whitespace-nowrap"
      )}
    >
      {name}
    </div>
  );
};

export default TechBadge;
