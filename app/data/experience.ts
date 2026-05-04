import type { ExperienceItem } from "../types";

export const experience: ExperienceItem[] = [
  {
    period:      "2023 — Now",
    current:     true,
    role:        "Full-Stack Developer",
    company:     "Freelance & Contract Work",
    description:
      "Delivering end-to-end web systems for clients in transport and logistics. Sole responsibility for backend API architecture, database schema design, frontend implementation, and production deployment. Shipped LIHIMS and Elegance Coaches as complete, client-facing platforms.",
    chips: ["FastAPI", "NestJS", "Next.js", "PostgreSQL", "TypeScript"],
  },
  {
    period:      "2022 – 2023",
    role:        "Backend Developer — Final Year Project",
    company:     "Mzuzu University, Polytechnic",
    description:
      "Designed and built a full logistics management prototype as a final-year academic project. Architected the database schema, developed a complete REST API with FastAPI, and integrated it with a Next.js frontend — this became the backbone of the later LIHIMS production system.",
    chips: ["FastAPI", "PostgreSQL", "Next.js", "Alembic"],
  },
  {
    period:      "2021 – 2022",
    role:        "Junior Web Developer",
    company:     "Self-Directed Projects",
    description:
      "Built early web applications using PHP, JavaScript, and MySQL. Developed the Taxi Booking App — a full booking flow with driver matching and real-time state management — from scratch as a personal project.",
    chips: ["PHP", "JavaScript", "MySQL"],
  },
];