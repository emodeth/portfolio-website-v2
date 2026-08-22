import { WorkExperienceEntry } from "@/data/work-experience";

const WorkItem = ({ experience }: { experience: WorkExperienceEntry }) => {
  return (
    <article className="grid grid-cols-[auto_1fr] gap-x-3 py-5">
      {/* Dot — sits on the shared timeline line */}
      <div className="relative z-10 mt-[7px] size-[6px] shrink-0 rounded-full bg-primary" />

      {/* Content */}
      <div className="space-y-1 pb-2">
        {/* Title row */}
        <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-0.5">
          <h3 className="font-sans text-sm font-semibold text-primary">
            {experience.title}
          </h3>
          <time className="shrink-0  text-xs text-muted-foreground tabular-nums">
            {experience.dateRange}
          </time>
        </div>

        {/* Company */}
        <p className="text-sm text-foreground font-medium">
          at {experience.company}
        </p>

        {/* Description */}
        {experience.description && (
          <p className="pt-1 text-sm leading-relaxed text-muted-foreground">
            {experience.description}
          </p>
        )}
      </div>
    </article>
  );
};

export default WorkItem;
