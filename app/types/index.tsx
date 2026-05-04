export type TechVariant = "blue" | "green" | "gold";

export interface TechTag {
  label:   string;
  variant: TechVariant;
}

export type ProjectStatus = "live" | "wip" | "archived";

export interface Project {
  id:          string;
  title:       string;
  subtitle:    string;
  description: string;
  tech:        TechTag[];
  status:      ProjectStatus;
  thumbGrad:   string;  
  thumbLabel:  string;
  href:        string;
}

export interface Skill {
  name:        string;
  description: string;
  level:       number; // 0–100
  svgPaths:    string[]; 
}
export interface SkillGroup {
  name: string;
  iconPaths: string[];
  skills: Skill[];
}
export interface EducationItem {
  num:         string;
  period:      string;
  degree:      string;
  institution: string;
  description: string;
  tags:        string[];
}

export interface ExperienceItem {
  period:      string;
  current?:    boolean;
  role:        string;
  company:     string;
  description: string;
  chips:       string[];
}

export interface NavLink {
  label: string;
  href:  string;
  cta?:  boolean;
}