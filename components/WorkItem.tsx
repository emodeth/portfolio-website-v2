import { WorkExperience } from "@/lib/types";
import MarkdownRenderer from "./MarkdownRenderer";

const formatDateRange = (startDate: Date, endDate: Date | null) => {
  const start = startDate.getFullYear();
  const end = endDate ? endDate.getFullYear() : "Present";
  return `${start} - ${end}`;
};

const WorkItem = ({ experience }: { experience: WorkExperience }) => {
  const dateRange = formatDateRange(experience.startDate, experience.endDate);

  return (
    <div className="flex flex-col gap-2 md:flex-row md:gap-10">
      <span className="min-w-[120px] font-medium text-gray-1100 hidden md:block">
        {dateRange}
      </span>

      <div className="flex flex-col gap-2">
        <div className="flex flex-col text-[16px]">
          <h3 className="font-semibold text-gray-1200">
            {experience.workTitle}
          </h3>
          <p className="text-gray-1100">
            {experience.companyName} • {experience.type}
            <span className="md:hidden"> • {dateRange}</span>
          </p>
        </div>

        <div className="max-w-xl text-gray-1100">
          <MarkdownRenderer>{experience.description}</MarkdownRenderer>
        </div>
      </div>
    </div>
  );
};

export default WorkItem;
