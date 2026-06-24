export interface Profile {
  id: string | number;
  name: string;
  description: string;
  imgUrl: string;
  jobTitle: string;
  mail: string;
  githubUrl: string;
  resume: string;
}

export interface WorkExperience {
  id: string | number;
  companyName: string;
  description: string;
  type: string;
  workTitle: string;
  startDate: Date;
  endDate: Date | null;
}

export interface Tech {
  id: string | number;
  name: string;
  iconName: string;
}

export interface Project {
  id: string | number;
  slug: string;
  title: string;
  description: string;
  coverUrl: string;
  videoUrl: string | null;
  codeUrl: string | null;
  demoUrl: string | null;
  photos: string[];
  content: string;
  techStack: Tech[];
}
