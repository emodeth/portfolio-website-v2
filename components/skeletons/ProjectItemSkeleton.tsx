import Shimmer from "@/components/skeletons/Shimmer";

export const ProjectItemSkeleton = () => (
  <div className="w-full">
    <Shimmer className="aspect-video w-full rounded-[10px]" />
    <div className="mt-2.5 flex min-h-10 items-center gap-3">
      <Shimmer className="h-[16px] flex-1 max-w-[160px]" />
      <div className="ml-auto flex gap-1">
        <Shimmer className="size-8 rounded-[8px]" />
      </div>
    </div>
    <Shimmer className="mt-1 h-[13px] w-full" />
    <Shimmer className="mt-1 h-[13px] w-3/4" />
  </div>
);

export default ProjectItemSkeleton;
