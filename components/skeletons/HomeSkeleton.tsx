import MaxWidthWrapper from "@/components/MaxWidthWrapper";

const Shimmer = ({ className }: { className?: string }) => (
  <div
    className={`rounded-md bg-muted animate-pulse ${className ?? ""}`}
  />
);

const WorkItemSkeleton = () => (
  <div className="grid grid-cols-[auto_1fr] gap-x-3 py-5">
    {/* Timeline dot */}
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

const ProjectItemSkeleton = () => (
  <div className="w-full">
    {/* Cover image */}
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

export default function HomeSkeleton() {
  return (
    <MaxWidthWrapper>
      {/* AboutMe */}
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

      {/* Work Experience */}
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

      {/* Projects */}
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
