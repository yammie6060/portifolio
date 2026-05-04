import type { Project } from "../types";

export const projects: Project[] = [
  
  {
    id:          "lihims",
    title:       "LIHIMS",
    subtitle:    "Inventory & Logistics Platform",
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
  },

  {
    id:          "elegance",
    title:       "Elegance Coaches",
    subtitle:    "Fleet & Routes System",
    description:
      "A comprehensive bus fleet management system for configuring routes, managing seat allocations, setting schedules, and generating operational reports for transport operators.",
    tech: [
      { label: "NestJS",     variant: "green" },
      { label: "PostgreSQL", variant: "blue"  },
      { label: "Next.js",    variant: "gold"  },
      { label: "TypeScript", variant: "green" },
    ],
    status:     "live",
    thumbGrad:  "from-[#0d1f1a] to-[#1a3d2e]",
    thumbLabel: "EC",
    href:       "https://elegancecoaches.com",
  },

  {
    id:          "Mindtech Website",
    title:       "Mindtech Website",
    subtitle:    "Company Portfolio Site",
    description:
      "A modern, responsive website for Mindtech, showcasing their services and portfolio. Built with a focus on clean design, fast performance, and seamless user experience. Implemented with Next.js and Tailwind CSS.",
    tech: [
      { label: "Next.js",    variant: "gold" },
      { label: "TypeScript", variant: "green" },
      { label: "Tailwind CSS", variant: "blue" },
    ],
    status:     "live",
    thumbGrad:  "from-[#1f1005] to-[#3d2010]",
    thumbLabel: "MT",
    href:       "https://mindtechs.vercel.app/",
  },
];