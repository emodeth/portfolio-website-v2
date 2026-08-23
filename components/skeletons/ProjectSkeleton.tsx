import MaxWidthWrapper from "@/components/MaxWidthWrapper";

const Shimmer = ({ className }: { className?: string }) => (
  <div className={`rounded-md bg-muted animate-pulse ${className ?? ""}`} />
);

export default function ProjectSkeleton() {
  return (
    <MaxWidthWrapper>
      <article className="pb-4 md:pb-8 max-w-3xl mx-auto space-y-4">
        {/* Top nav row: back button + action buttons */}
        <div className="flex items-center justify-between gap-4">
          <Shimmer className="size-7 rounded-full shrink-0" />
          <div className="flex gap-2">
            <Shimmer className="h-7 w-16 rounded-[8px]" />
            <Shimmer className="h-7 w-16 rounded-[8px]" />
          </div>
        </div>

        {/* Title + description */}
        <div className="space-y-1.5">
          <Shimmer className="h-[28px] w-48" />
          <Shimmer className="h-[16px] w-72 max-w-full" />
        </div>

        {/* Media showcase */}
        <Shimmer className="aspect-video w-full rounded-xl" />

        {/* MDX content body */}
        <div className="space-y-3 pt-2">
          <Shimmer className="h-[15px] w-36 mt-6" />
          <Shimmer className="h-[14px] w-full" />
          <Shimmer className="h-[14px] w-5/6" />
          <Shimmer className="h-[14px] w-4/5" />

          <Shimmer className="h-[15px] w-28 mt-6" />
          <Shimmer className="h-[14px] w-full" />
          <Shimmer className="h-[14px] w-3/4" />
          <Shimmer className="h-[14px] w-5/6" />
          <Shimmer className="h-[14px] w-2/3" />
        </div>
      </article>
    </MaxWidthWrapper>
  );
}
