
import type { Project } from "../types";

export const projects: Project[] = [
  {
    id:          "lihims",
    title:       "LIHIMS",
    subtitle:    "Lighthouse Inventory Management System",
    description:
      "A full-featured enterprise inventory and logistics management system with multi-level approval workflows, real-time stock tracking, and role-based access control. Built for production reliability.",
    tech: [
      { label: "FastAPI",    variant: "blue" },
      { label: "PostgreSQL", variant: "blue" },
      { label: "Next.js",    variant: "gold" },
      { label: "Alembic",    variant: "gold" },
    ],
    status:     "live",
    thumbGrad:  "from-[#0d1f35] to-[#1a3c5e]",
    thumbLabel: "LIHIMS",
    href:       "",
    image:      null, 
  },

  {
    id:          "Tikketa",
    title:       "TIKKETA",
    subtitle:    "Digital Transport Infrastructure System",
    description:
      "A comprehensive transport management system for configuring routes, managing seat allocations, setting schedules, generating operational reports and many other for transport operators.",
    tech: [
      { label: "NestJS",     variant: "green" },
      { label: "PostgreSQL", variant: "blue"  },
      { label: "Next.js",    variant: "gold"  },
      { label: "TypeScript", variant: "green" },
    ],
    status:     "live",
    thumbGrad:  "from-[#0d1f1a] to-[#1a3d2e]",
    thumbLabel: "TK",
    href:       "https://tikketa.com/",
    image:      null, 
  },

  {
    id:          "Digirise",
    title:       "Digirise",
    subtitle:    "Company Portfolio Site",
    description:
      "A modern, responsive website for Digirise, showcasing their services and portfolio. Built with a focus on clean design, fast performance, and seamless user experience. Implemented with Next.js and Tailwind CSS.",
    tech: [
      { label: "Next.js",    variant: "gold" },
      { label: "TypeScript", variant: "green" },
      { label: "Tailwind CSS", variant: "blue" },
    ],
    status:     "live",
    thumbGrad:  "from-[#1f1005] to-[#3d2010]",
    thumbLabel: "DR",
    href:       "https://digirisemalawi.vercel.app/",
    image:      null
  },
];