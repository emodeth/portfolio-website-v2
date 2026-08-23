import TechBadge from "./TechBadge";
import { Project } from "@/lib/types";

const TechStack = ({ project }: { project: Project }) => {
  return (
    <div className="mt-12">
      <h2 className="text-xl! font-bold text-foreground mb-4">Tech Stack</h2>
      <div>
        <div className="flex flex-wrap gap-2">
          {project.techStack.map((name) => (
            <TechBadge key={name} name={name} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default TechStack;
