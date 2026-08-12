export type ProjectStatus = "active" | "completed" | "archived";

export type Project = {
  slug: string;
  name: string;
  summary: string;
  description: string;
  role: string;
  year: string;
  status: ProjectStatus;
  featured: boolean;
  technologies: string[];
  image: string;
  imageAlt: string;
  liveUrl?: string;
  repositoryUrl?: string;
  category: string;
  teamSize: string;
  responsibilities: string[];
  challenges?: string[];
  outcomes?: string[];
};

export type Experience = {
  company: string;
  role: string;
  employmentType?: string;
  startDate: string;
  endDate?: string;
  current?: boolean;
  description: string;
  achievements: string[];
  technologies?: string[];
};

export type SkillGroup = {
  label: string;
  summary: string;
  skills: string[];
};
