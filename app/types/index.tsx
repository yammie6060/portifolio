// ─── Project ──────────────────────────────────────────────────────────────────
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
  thumbGrad:   string;   // tailwind gradient classes
  thumbLabel:  string;
  href:        string;
}

// ─── Skill ────────────────────────────────────────────────────────────────────
export interface Skill {
  name:        string;
  description: string;
  level:       number; // 0–100
  svgPaths:    string[]; // individual SVG <path>/<polyline>/etc. d attributes
}

// ─── Education ────────────────────────────────────────────────────────────────
export interface EducationItem {
  num:         string;
  period:      string;
  degree:      string;
  institution: string;
  description: string;
  tags:        string[];
}

// ─── Experience ───────────────────────────────────────────────────────────────
export interface ExperienceItem {
  period:      string;
  current?:    boolean;
  role:        string;
  company:     string;
  description: string;
  chips:       string[];
}

// ─── Nav ──────────────────────────────────────────────────────────────────────
export interface NavLink {
  label: string;
  href:  string;
  cta?:  boolean;
}