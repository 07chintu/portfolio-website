export interface Skill {
  name: string;
  icon?: string;
  level?: 'Expert' | 'Advanced' | 'Intermediate' | 'Familiar';
  category: SkillCategory;
}

export type SkillCategory =
  | 'AI & Generative AI'
  | 'Backend'
  | 'Frontend'
  | 'Database'
  | 'Cloud & DevOps'
  | 'Blockchain & Web3'
  | 'Tools';

export interface Project {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  problem: string;
  solution: string;
  highlights: string[];
  tech: string[];
  liveUrl?: string;
  githubUrl?: string;
  githubUrls?: { label: string; url: string }[];
  featured: boolean;
  badge?: string;
  badgeColor?: string;
  gradient: string;
}

export interface Experience {
  company: string;
  role: string;
  duration: string;
  location: string;
  current: boolean;
  description: string[];
  tech: string[];
}

export interface Education {
  degree: string;
  field: string;
  institution: string;
  year: string;
  cgpa: string;
  location: string;
}


export interface NavLink {
  label: string;
  href: string;
}
