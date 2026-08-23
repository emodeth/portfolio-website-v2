import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import Shimmer from "@/components/skeletons/Shimmer";
import WorkItemSkeleton from "@/components/skeletons/WorkItemSkeleton";
import ProjectItemSkeleton from "@/components/skeletons/ProjectItemSkeleton";

export default function HomeSkeleton() {
  return (
    <MaxWidthWrapper>
      <section className="flex flex-col gap-2">
        <Shimmer className="h-[18px] w-36" />
        <Shimmer className="h-[16px] w-28" />
        <div className="mt-5 space-y-1.5">
          <Shimmer className="h-[14px] w-full" />
          <Shimmer className="h-[14px] w-5/6" />
          <Shimmer className="h-[14px] w-4/5" />
        </div>
        <div className="mt-3 space-y-1.5">
          <Shimmer className="h-[14px] w-full" />
          <Shimmer className="h-[14px] w-2/3" />
        </div>
      </section>

      <section className="mt-16">
        <Shimmer className="h-[16px] w-24" />
        <div className="relative mt-1">
          <div
            className="absolute left-[2.5px] w-px bg-border"
            style={{ top: "30px", bottom: "30px" }}
          />
          <WorkItemSkeleton />
          <WorkItemSkeleton />
          <WorkItemSkeleton />
        </div>
      </section>

      <div className="mt-16">
        <Shimmer className="h-[16px] w-16" />
        <div className="mt-6 flex flex-col gap-7">
          <ProjectItemSkeleton />
          <ProjectItemSkeleton />
          <ProjectItemSkeleton />
          <ProjectItemSkeleton />
        </div>
      </div>
    </MaxWidthWrapper>
  );
}
