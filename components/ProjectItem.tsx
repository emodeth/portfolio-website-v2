import Image from "next/image";
import Link from "next/link";
import { Globe } from "lucide-react";
import { IoLogoGithub } from "react-icons/io";
import { Project } from "@/lib/types";
import { Tooltip } from "@/components/ui/tooltip";

const ProjectItem = ({ project }: { project: Project }) => {
  const projectHref = `/projects/${project.slug}`;

  return (
    <article className="group">
      <Link
        href={projectHref}
        aria-label={`View ${project.title} project`}
        className="block rounded-[10px] bg-card p-1 shadow-[0_0_0_1px_rgba(0,0,0,0.10),0_1px_2px_-1px_rgba(0,0,0,0.08),0_2px_5px_rgba(0,0,0,0.04)] transition-[box-shadow] duration-200 ease-out hover:shadow-[0_0_0_1px_rgba(0,0,0,0.14),0_2px_4px_-1px_rgba(0,0,0,0.10),0_4px_8px_rgba(0,0,0,0.06)] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-ring dark:shadow-[0_0_0_1px_rgba(255,255,255,0.10)] dark:hover:shadow-[0_0_0_1px_rgba(255,255,255,0.16)]"
      >
        <div className="relative aspect-video w-full overflow-hidden rounded-md bg-muted">
          <Image
            src={project.coverUrl}
            alt={`${project.title} preview`}
            fill
            sizes="(max-width: 640px) calc(100vw - 48px), 592px"
            className="object-cover outline -outline-offset-1 outline-black/10 transition-transform duration-300 ease-out group-hover:scale-[1.015] dark:outline-white/10"
          />
        </div>
      </Link>

      <div className="mt-2.5 flex min-h-10 items-center gap-3">
        <h3 className="min-w-0 flex-1 text-base font-medium leading-5 text-gray-1200 text-balance">
          <Link
            href={projectHref}
            className="rounded-sm underline-offset-4 hover:underline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring"
          >
            {project.title}
          </Link>
        </h3>

        {(project.demoUrl || project.codeUrl) && (
          <div
            className="flex shrink-0 items-center gap-1"
            role="group"
            aria-label="Project links"
          >
            {project.demoUrl && (
              <Tooltip content="Website">
                <Link
                  href={project.demoUrl}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={`Open ${project.title} website`}
                  className="flex size-8 items-center justify-center rounded-[8px] text-gray-1100 hover:bg-secondary hover:text-foreground transition-[color,background-color,scale] duration-150 active:scale-[0.96] focus-visible:outline-2 focus-visible:outline-offset-1 focus-visible:outline-ring"
                >
                  <Globe className="size-[18px]" aria-hidden="true" />
                </Link>
              </Tooltip>
            )}
            {project.codeUrl && (
              <Tooltip content="GitHub">
                <Link
                  href={project.codeUrl}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={`View ${project.title} on GitHub`}
                  className="flex size-8 items-center justify-center rounded-[8px] text-gray-1100 hover:bg-secondary hover:text-foreground transition-[color,background-color,scale] duration-150 active:scale-[0.96] focus-visible:outline-2 focus-visible:outline-offset-1 focus-visible:outline-ring"
                >
                  <IoLogoGithub className="size-[18px]" aria-hidden="true" />
                </Link>
              </Tooltip>
            )}
          </div>
        )}
      </div>

      <p className="text-pretty text-sm leading-5 text-gray-1100">
        {project.description}
      </p>
    </article>
  );
};

export default ProjectItem;
