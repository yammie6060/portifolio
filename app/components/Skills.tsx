"use client";

import { useEffect, useRef } from "react";
import SectionLabel from "@/app/components/SectionLabel";
import { technicalSkills, professionalSkills } from "@/app/data/skills";
import type { Skill } from "../types";

/* ─────────────────────────────────────────────────────────────────────────────
   Shared card — used by both grids, styled per variant
───────────────────────────────────────────────────────────────────────────── */
function SkillCard({
  skill,
  delay,
  variant = "technical",
}: {
  skill: Skill;
  delay: number;
  variant?: "technical" | "professional";
}) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add("visible");
          obs.unobserve(el);
        }
      },
      { threshold: 0.15 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  const isProfessional = variant === "professional";

  return (
    <div
      ref={ref}
      className={[
        "skill-card reveal group relative overflow-hidden transition-colors",
        isProfessional
          ? "bg-bg-3 border border-white/[0.07] rounded-xl p-6 hover:border-white/[0.14]"
          : "bg-bg-2 p-6 sm:p-7 border-r border-b border-white/[0.07] hover:bg-bg-3",
      ].join(" ")}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {/* Gold hover tint */}
      <div className="absolute inset-0 bg-[rgba(200,169,110,0.04)] opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />

      {/* Top accent line on professional cards */}
      {isProfessional && (
        <div className="absolute top-0 left-0 right-0 h-px bg-linear-to-r from-gold to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
      )}

      {/* Icon */}
      <div className="relative z-10 w-11 h-11 rounded-sm bg-surface flex items-center justify-center mb-5 transition-colors group-hover:bg-[rgba(200,169,110,0.1)]">
        <svg
          viewBox="0 0 24 24"
          className="w-5 h-5 stroke-gold fill-none"
          strokeWidth="1.6"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          {skill.svgPaths.map((d, i) => (
            <path key={i} d={d} />
          ))}
        </svg>
      </div>

      {/* Name */}
      <div className="relative z-10 text-[0.95rem] font-bold text-ink mb-1.5">
        {skill.name}
      </div>

      {/* Description */}
      <div className="relative z-10 text-[0.78rem] text-ink-3 leading-[1.6]">
        {skill.description}
      </div>

      {/* Level bar */}
      <div className="relative z-10 mt-5 h-px bg-surface-2 overflow-hidden">
        <div
          className="skill-bar-fill h-full bg-linear-to-r from-gold to-gold/40"
          style={{ width: `${skill.level}%` }}
        />
      </div>

      {/* Percentage label — professional cards only */}
      {isProfessional && (
        <div className="relative z-10 mt-2 flex justify-end">
          <span className="text-[0.65rem] font-bold text-ink-3 tracking-widest">
            {skill.level}%
          </span>
        </div>
      )}
    </div>
  );
}

/* ─────────────────────────────────────────────────────────────────────────────
   Local scroll-reveal helper
───────────────────────────────────────────────────────────────────────────── */
function useRevealRef<T extends HTMLElement>() {
  const ref = useRef<T>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add("visible");
          obs.unobserve(el);
        }
      },
      { threshold: 0.1 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);
  return ref;
}

/* ─────────────────────────────────────────────────────────────────────────────
   Export — two sections, back-to-back
───────────────────────────────────────────────────────────────────────────── */
export default function Skills() {
  const techHeaderRef = useRevealRef<HTMLDivElement>();
  const softHeaderRef = useRevealRef<HTMLDivElement>();

  return (
    <>
      {/* ════════════════════════════════════════════════════════════════════
          SECTION 1 — Technical Skills
          bg-bg-2, bordered grid cells (no card outlines)
      ════════════════════════════════════════════════════════════════════ */}
      <section id="skills" className="relative z-10 bg-bg-2 py-20 md:py-28 px-6 md:px-16">
        <div className="max-w-7xl mx-auto">

          <div
            ref={techHeaderRef}
            className="reveal mb-12 md:mb-14 flex flex-col sm:flex-row sm:items-end justify-between gap-6"
          >
            <div>
              <SectionLabel num="02" title="Skills" />
              <h2 className="font-display text-[clamp(2.4rem,4vw,3.8rem)] font-bold leading-[1.05] text-ink">
                Technical<br />
                <em className="italic text-gold">Expertise</em>
              </h2>
            </div>
            <p className="text-[0.95rem] text-ink-2 max-w-xs sm:text-right leading-[1.8]">
              The stack I use to design, build, and ship production-grade systems.
            </p>
          </div>

          {/* Bordered grid: outer top + left border, each cell supplies right + bottom */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 border-t border-l border-white/[0.07]">
            {technicalSkills.map((skill, i) => (
              <SkillCard
                key={skill.name}
                skill={skill}
                delay={(i % 4) * 80}
                variant="technical"
              />
            ))}
          </div>

        </div>
      </section>

      {/* ════════════════════════════════════════════════════════════════════
          SECTION 2 — Professional / Soft Skills
          bg-bg, individually boxed rounded cards
      ════════════════════════════════════════════════════════════════════ */}
      <section
        id="professional-skills"
        className="relative z-10 bg-bg py-20 md:py-28 px-6 md:px-16"
      >
        {/* Gold hairline divider at section top */}
        <div
          className="absolute top-0 left-1/2 -translate-x-1/2 w-[480px] h-px pointer-events-none"
          style={{
            background:
              "linear-gradient(to right, transparent, rgba(200,169,110,0.18), transparent)",
          }}
        />

        <div className="max-w-7xl mx-auto">

          <div
            ref={softHeaderRef}
            className="reveal mb-12 md:mb-14 flex flex-col sm:flex-row sm:items-end justify-between gap-6"
          >
            <div>
              <p className="text-[0.68rem] font-bold tracking-[0.2em] uppercase text-gold mb-3">
                02 — Professional
              </p>
              <h2 className="font-display text-[clamp(2.4rem,4vw,3.8rem)] font-bold leading-[1.05] text-ink">
                Soft &amp;<br />
                <em className="italic text-gold">Interpersonal</em>
              </h2>
            </div>
            <p className="text-[0.95rem] text-ink-2 max-w-xs sm:text-right leading-[1.8]">
              How I think, communicate, and operate — independently or within a team.
            </p>
          </div>

          {/* Gap-based card grid: 1 → 2 → 4 cols */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
            {professionalSkills.map((skill, i) => (
              <SkillCard
                key={skill.name}
                skill={skill}
                delay={(i % 4) * 80}
                variant="professional"
              />
            ))}
          </div>

        </div>
      </section>
    </>
  );
}