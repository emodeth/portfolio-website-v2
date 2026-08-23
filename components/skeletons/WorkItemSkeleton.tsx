import Shimmer from "@/components/skeletons/Shimmer";

export const WorkItemSkeleton = () => (
  <div className="grid grid-cols-[auto_1fr] gap-x-3 py-5">
    <div className="relative z-10 mt-[7px] size-[6px] shrink-0 rounded-full bg-border" />
    <div className="space-y-2 pb-2">
      <div className="flex items-baseline justify-between gap-4">
        <Shimmer className="h-[14px] w-32" />
        <Shimmer className="h-[12px] w-20 shrink-0" />
      </div>
      <Shimmer className="h-[13px] w-24" />
      <Shimmer className="h-[13px] w-full" />
      <Shimmer className="h-[13px] w-4/5" />
    </div>
  </div>
);

export default WorkItemSkeleton;
