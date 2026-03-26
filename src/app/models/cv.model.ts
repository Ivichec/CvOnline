export interface PersonalInfo {
  name: string;
  title: string;
  photo: string;
  email: string;
  phone: string;
  location: string;
  linkedin: string;
  github: string;
  summary: string;
}

export interface Experience {
  position: string;
  company: string;
  location: string;
  startDate: string;
  endDate: string;
  description: string;
  achievements: string[];
}

export interface Education {
  degree: string;
  institution: string;
  location: string;
  startDate: string;
  endDate: string;
  description: string;
}

export interface Skill {
  name: string;
  level: number; // 0-100
  category: string;
}

export interface Project {
  name: string;
  description: string;
  technologies: string[];
  repoUrl: string;
  demoUrl: string;
  image: string;
}

export interface Language {
  name: string;
  level: string;
  certification: string;
}

export interface CvData {
  personalInfo: PersonalInfo;
  experiences: Experience[];
  education: Education[];
  skills: Skill[];
  projects: Project[];
  languages: Language[];
}
