import { WorkExperienceEntry } from "@/data/work-experience";
import { ArrowUpRight } from "lucide-react";

const WorkItem = ({ experience }: { experience: WorkExperienceEntry }) => {
  const companyDomain = experience.companyUrl.replace(/^https?:\/\/(www\.)?/, "");

  return (
    <article className="w-full space-y-4 border-b border-border py-4 opacity-100 transition-[border-color,opacity] duration-50 last:border-b-0 group-hover:opacity-30 hover:opacity-100">
      <div className="flex flex-wrap items-start justify-between gap-2">
        <div>
          <h3 className="font-sans text-base font-normal text-primary">
            <span className="hover:underline underline-offset-4">
              {experience.title}, {experience.company}
            </span>
          </h3>

          <div className="flex items-center justify-start gap-1.5 text-sm">
            <span>at,</span>
            <a
              className="after:bg-primary hover:text-primary active:text-primary relative inline-flex items-center gap-0.5 text-sm font-normal transition-[gap,color] after:absolute after:-bottom-0.5 after:left-0 after:h-[1.5px] after:w-0 after:transition-[width] after:duration-300 hover:gap-1 hover:after:w-full"
              href={experience.companyUrl}
              target="_blank"
              rel="noreferrer"
            >
              <span>{companyDomain}</span>
              <ArrowUpRight className="size-4" aria-hidden="true" />
            </a>
          </div>
        </div>

        <time className="text-sm font-normal tabular-nums text-muted-foreground">
          {experience.dateRange}
        </time>
      </div>

      <div className="not-prose flex flex-wrap gap-1">
        {experience.technologies.map((technology, index) => (
          <div className="flex items-center gap-1" key={technology}>
            <span className="text-secondary-foreground flex w-fit items-center justify-center font-mono text-xs opacity-70">
              {technology}
            </span>
            {index < experience.technologies.length - 1 && (
              <span className="text-secondary-foreground text-xs opacity-70">/</span>
            )}
          </div>
        ))}
      </div>
    </article>
  );
};

export default WorkItem;
