import { Project } from "@/lib/types";
import ProjectItem from "./ProjectItem";

interface ProjectsProps {
  projects: Project[];
}

const Projects = ({ projects }: ProjectsProps) => {
  return (
    <div className="mt-16">
      <h2 className="text-wrap-balance text-[16px] font-semibold leading-[22px] tracking-tight text-foreground">
        Projects
      </h2>

      <div className="flex flex-col gap-7 mt-6">
        {projects.map((project) => (
          <ProjectItem key={project.id} project={project} />
        ))}
      </div>
    </div>
  );
};

export default Projects;
