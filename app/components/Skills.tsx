// app/components/Skills.tsx
"use client";

import { useRef, useState } from "react";
import SectionLabel from "@/app/components/SectionLabel";
import { useScrollReveal } from "@/app/hooks/useScrollReveal";

type Skill = {
  name: string;
  tag: string;
  desc: string;
  color: string;
  glyph: string;
};

type Category = {
  id: "frontend" | "backend" | "data" | "tools";
  label: string;
  skills: Skill[];
};

// Updated skills to match your actual stack
const CATEGORIES: Category[] = [
  {
    id: "frontend",
    label: "Frontend",
    skills: [
      { 
        name: "React", 
        tag: "Library", 
        desc: "Component-based UI development", 
        color: "bg-sky-500/15 text-sky-300", 
        glyph: "⚛" 
      },
      { 
        name: "Next.js", 
        tag: "Framework", 
        desc: "Production React with SSR & SSG", 
        color: "bg-white/10 text-white", 
        glyph: "N" 
      },
      { 
        name: "TypeScript", 
        tag: "Language", 
        desc: "Typed, scalable JavaScript", 
        color: "bg-blue-500/15 text-blue-300", 
        glyph: "TS" 
      },
      { 
        name: "JavaScript", 
        tag: "Language", 
        desc: "Interactive web experiences", 
        color: "bg-yellow-400/15 text-yellow-300", 
        glyph: "JS" 
      },
      { 
        name: "Flutter", 
        tag: "Framework", 
        desc: "Cross-platform mobile apps", 
        color: "bg-cyan-500/15 text-cyan-300", 
        glyph: "Fl" 
      },
      { 
        name: "Tailwind CSS", 
        tag: "CSS", 
        desc: "Utility-first styling", 
        color: "bg-cyan-500/15 text-cyan-300", 
        glyph: "~" 
      },
      { 
        name: "HTML5 / CSS3", 
        tag: "Markup", 
        desc: "Semantic, responsive structure", 
        color: "bg-orange-500/15 text-orange-300", 
        glyph: "5" 
      },
    ],
  },
  {
    id: "backend",
    label: "Backend",
    skills: [
      { 
        name: "Python", 
        tag: "Language", 
        desc: "Backend services and scripting", 
        color: "bg-yellow-400/15 text-yellow-200", 
        glyph: "Py" 
      },
      { 
        name: "Django", 
        tag: "Framework", 
        desc: "Full-featured web backend", 
        color: "bg-emerald-600/15 text-emerald-300", 
        glyph: "Dj" 
      },
      { 
        name: "FastAPI", 
        tag: "Framework", 
        desc: "Modern, fast API development", 
        color: "bg-teal-500/15 text-teal-300", 
        glyph: "FA" 
      },
      { 
        name: "PHP", 
        tag: "Language", 
        desc: "Server-side scripting", 
        color: "bg-indigo-500/15 text-indigo-300", 
        glyph: "Ph" 
      },
      { 
        name: "PostgreSQL", 
        tag: "Database", 
        desc: "Relational data modeling", 
        color: "bg-indigo-500/15 text-indigo-300", 
        glyph: "Pg" 
      },
      { 
        name: "REST APIs", 
        tag: "Architecture", 
        desc: "Scalable API design", 
        color: "bg-purple-500/15 text-purple-300", 
        glyph: "AP" 
      },
    ],
  },
  {
    id: "data",
    label: "Data",
    skills: [

      { 
        name: "SQL", 
        tag: "Query Language", 
        desc: "Data querying and manipulation", 
        color: "bg-sky-500/15 text-sky-300", 
        glyph: "SQ" 
      },
    ],
  },
  {
    id: "tools",
    label: "Tools & DevOps",
    skills: [
      { 
        name: "Git", 
        tag: "VCS", 
        desc: "Version control and branching", 
        color: "bg-orange-500/15 text-orange-300", 
        glyph: "Gi" 
      },
      { 
        name: "GitHub", 
        tag: "Collaboration", 
        desc: "Code hosting and review", 
        color: "bg-white/10 text-white", 
        glyph: "Gh" 
      },
      { 
        name: "Docker", 
        tag: "DevOps", 
        desc: "Containerized environments", 
        color: "bg-sky-500/15 text-sky-300", 
        glyph: "Do" 
      },
      { 
        name: "VS Code", 
        tag: "Editor", 
        desc: "Day-to-day development", 
        color: "bg-blue-500/15 text-blue-300", 
        glyph: "Vc" 
      },
      { 
        name: "Postman", 
        tag: "Testing", 
        desc: "API design and testing", 
        color: "bg-orange-500/15 text-orange-300", 
        glyph: "Po" 
      },
      { 
        name: "Linux", 
        tag: "OS", 
        desc: "Server administration", 
        color: "bg-yellow-500/15 text-yellow-300", 
        glyph: "Li" 
      },
    ],
  },
];

function SkillCard({ skill }: { skill: Skill }) {
  return (
    <div className="rounded-xl border border-white/[0.06] bg-white/[0.015] p-4 transition-colors hover:border-white/15 hover:bg-white/[0.03]">
      <div className="flex items-start gap-3">
        <span
          className={`w-9 h-9 shrink-0 rounded-lg flex items-center justify-center text-[0.75rem] font-bold ${skill.color}`}
        >
          {skill.glyph}
        </span>
        <div className="flex-1 min-w-0">
          <p className="text-[0.9rem] font-bold text-white leading-tight">{skill.name}</p>
          <p className="text-[0.55rem] font-bold tracking-[0.12em] uppercase text-white/30 mt-0.5">
            {skill.tag}
          </p>
          <p className="text-[0.72rem] text-white/40 leading-snug mt-1">{skill.desc}</p>
        </div>
      </div>
    </div>
  );
}

export default function Skills() {
  const [active, setActive] = useState<Category["id"]>("frontend");
  const headerRef = useScrollReveal<HTMLDivElement>();
  const bodyRef = useScrollReveal<HTMLDivElement>();

  const current = CATEGORIES.find((c) => c.id === active)!;

  return (
    <section
      id="skills"
      className="relative z-10 bg-black py-20 md:py-28 px-6 md:px-16 border-t border-white/[0.05]"
    >
      <div className="max-w-7xl mx-auto">
        <div ref={headerRef} className="reveal mb-10 md:mb-12">
          <SectionLabel num="02" title="Skills" />

          <h2 className="font-display text-[clamp(2.4rem,4vw,3.8rem)] font-bold leading-[1.05] text-white mb-4">
            Things I build with.
          </h2>
          <p className="text-[0.95rem] text-white/40 leading-[1.8] max-w-xl">
            A focused toolkit for building modern interfaces, reliable backends, 
            and data-driven applications.
          </p>
        </div>

        {/* Category Tabs */}
        <div className="flex items-center gap-8 border-b border-white/[0.06] overflow-x-auto mb-8">
          {CATEGORIES.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActive(cat.id)}
              className={[
                "relative pb-3 text-[0.7rem] font-bold tracking-[0.15em] uppercase transition-colors whitespace-nowrap",
                active === cat.id ? "text-white" : "text-white/30 hover:text-white/60",
              ].join(" ")}
            >
              {cat.label}
              {active === cat.id && (
                <span className="absolute left-0 right-0 -bottom-px h-px bg-white" />
              )}
            </button>
          ))}
        </div>

        <div ref={bodyRef} className="reveal reveal-d2">
          {/* Skills Grid */}
          <div>
            <div className="flex items-center justify-between mb-4">
              <p className="text-[0.65rem] font-bold tracking-[0.15em] uppercase text-white/30">
                {current.label} · {current.skills.length} skills
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
              {current.skills.map((skill) => (
                <SkillCard key={skill.name} skill={skill} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}