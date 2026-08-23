import { WorkExperienceEntry } from "@/lib/queries";
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

      {/* relative wrapper — single vertical line connects all dots */}
      {/* py-5 (20px) + mt-[7px] (7px) + half dot (3px) = 30px offset from each end */}
      <div className="relative mt-1">
        <div
          className="absolute left-[2.5px] w-px bg-border"
          style={{ top: "30px", bottom: "30px" }}
        />
        {workExperience.map((experience) => (
          <WorkItem key={experience.id} experience={experience} />
        ))}
      </div>
    </section>
  );
};

export default WorkExperience;
