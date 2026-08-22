import { WorkExperienceEntry } from "@/data/work-experience";
import WorkItem from "./WorkItem";

interface WorkExperienceProps {
  workExperience: WorkExperienceEntry[];
}

const WorkExperience = ({ workExperience }: WorkExperienceProps) => {
  return (
    <section className="mt-16">
      <h2 className="text-wrap-balance text-[16px] font-semibold leading-[22px] tracking-tight text-foreground">
        Experience
      </h2>

      <div className="group mt-2">
        {workExperience.map((experience) => (
          <WorkItem key={experience.id} experience={experience} />
        ))}
      </div>
    </section>
  );
};

export default WorkExperience;
