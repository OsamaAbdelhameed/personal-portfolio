export type ExperienceEngagement = "employment" | "freelance" | "internship" | "volunteering";

export type ExperienceItem = {
  id: string;
  organization: string;
  title: string;
  start: string;
  end?: string;
  current?: boolean;
  location?: string;
  engagement: ExperienceEngagement;
  highlights: string[];
  tech: string[];
};

export type ProjectEngagement = "professional" | "independent" | "academic";

export type ProjectItem = {
  id: string;
  name: string;
  organization?: string;
  engagement: ProjectEngagement;
  role: string;
  summary: string;
  engineeringHighlights: string[];
  technologies?: string[];
  thumbnail?: string;
  demoUrl?: string;
  repoUrl?: string;
  status: "verified" | "needs_verification";
};

export type SkillCategory = {
  id: string;
  titleKey: string;
  icon: string;
  color: string;
  skills: string[];
};
