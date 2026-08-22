export interface WorkExperienceEntry {
  id: string;
  title: string;
  company: string;
  companyUrl: string;
  dateRange: string;
  technologies: string[];
}

export const workExperience: WorkExperienceEntry[] = [
  {
    id: "sirdash-frontend-engineer",
    title: "Frontend Engineer",
    company: "SirDash.ai",
    companyUrl: "https://sirdash.ai",
    dateRange: "Feb, 2026 – Jun, 2026",
    technologies: [
      "React",
      "TypeScript",
      "JavaScript",
      "Tailwind CSS",
      "SCSS",
      "Supabase",
      "Github Actions",
      "Docker",
      "AWS",
    ],
  },
  {
    id: "stork-frontend-engineer",
    title: "Frontend Engineer",
    company: "Stork",
    companyUrl: "https://stork.com",
    dateRange: "Sep, 2024 – Sep, 2025",
    technologies: [
      "Next.js",
      "React",
      "React Native",
      "TypeScript",
      "JavaScript",
      "Tailwind CSS",
      "SCSS",
    ],
  },
];
