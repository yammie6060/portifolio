// app/components/EducationExperience.tsx
"use client";

import { useState, useRef, useEffect } from "react";
import SectionLabel from "@/app/components/SectionLabel";
import { education } from "@/app/data/education";
import { experience } from "@/app/data/experience";
import type { EducationItem, ExperienceItem } from "../types";

type Tab = "education" | "experience";

function useReveal<T extends HTMLElement>() {
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

function CardItem({
  period,
  title,
  subtitle,
  description,
  tags,
  badge,
  delay,
}: {
  period: string;
  title: string;
  subtitle: string;
  description: string;
  tags: string[];
  badge?: string;
  delay: number;
}) {
  const ref = useReveal<HTMLDivElement>();
  
  return (
    <div
      ref={ref}
      className="reveal rounded-2xl border border-white/5 bg-white/[0.02] p-5 sm:p-6 transition-colors hover:border-white/10 hover:bg-white/[0.04]"
      style={{ transitionDelay: `${delay}ms` }}
    >
      <div className="flex items-center gap-3 mb-3 flex-wrap">
        <span className="text-[0.7rem] font-semibold tracking-[0.1em] uppercase text-white/30">
          {period}
        </span>
        {badge && (
          <span className="px-2 py-0.5 rounded-full bg-white/5 border border-white/10 text-white/60 text-[0.6rem] font-bold tracking-widest uppercase">
            {badge}
          </span>
        )}
      </div>

      <h3 className="font-display text-[1.1rem] sm:text-[1.25rem] font-bold text-white mb-0.5 leading-tight">
        {title}
      </h3>
      <p className="text-[0.8rem] text-white/50 font-medium mb-3">{subtitle}</p>
      <p className="text-[0.82rem] text-white/40 leading-[1.7] line-clamp-3">{description}</p>

      {tags.length > 0 && (
        <div className="flex flex-wrap gap-1.5 mt-4">
          {tags.map((tag) => (
            <span
              key={tag}
              className="px-2.5 py-1 bg-white/5 border border-white/5 rounded-full text-[0.65rem] text-white/30 font-semibold tracking-wide"
            >
              {tag}
            </span>
          ))}
        </div>
      )}
    </div>
  );
}

export default function EducationExperience() {
  const [tab, setTab] = useState<Tab>("experience");
  const headerRef = useReveal<HTMLDivElement>();

  const items =
    tab === "education"
      ? education.map((e: EducationItem) => ({
          period: e.period,
          title: e.degree,
          subtitle: e.institution,
          description: e.description,
          tags: e.tags,
        }))
      : experience.map((e: ExperienceItem) => ({
          period: e.period,
          title: e.role,
          subtitle: e.company,
          description: e.description,
          tags: e.chips,
          badge: e.current ? "Current" : undefined,
        }));

  return (
    <section
      id="experience"
      className="relative z-10 bg-black py-20 md:py-28 px-6 md:px-16 border-t border-white/[0.05]"
    >
      <div className="max-w-7xl mx-auto">
        <div ref={headerRef} className="reveal mb-10 md:mb-12">
          <SectionLabel num="04" title="Journey" />

          <h2 className="font-display text-[clamp(2.4rem,4vw,3.8rem)] font-bold leading-[1.05] text-white mb-4">
            Career &amp;{" "}
            <em className="italic text-white/60">Education</em>
          </h2>

          <p className="text-[0.95rem] text-white/40 leading-[1.8] max-w-xl">
            My professional journey and academic foundation.
          </p>

          {/* Tabs */}
          <div className="flex items-center gap-8 border-b border-white/[0.06] mt-6">
            {(["experience", "education"] as Tab[]).map((t) => (
              <button
                key={t}
                onClick={() => setTab(t)}
                className={[
                  "relative pb-3 text-[0.7rem] font-bold tracking-[0.15em] uppercase transition-colors",
                  tab === t ? "text-white" : "text-white/30 hover:text-white/60",
                ].join(" ")}
              >
                {t}
                {tab === t && (
                  <span className="absolute left-0 right-0 -bottom-px h-px bg-white" />
                )}
              </button>
            ))}
          </div>
        </div>

        {/* Grid Layout - Rows and Columns */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
          {items.map((item, i) => (
            <CardItem key={item.title + item.period} {...item} delay={i * 80} />
          ))}
        </div>
      </div>
    </section>
  );
}