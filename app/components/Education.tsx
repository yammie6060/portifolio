"use client";

import { useRef, useEffect } from "react";
import SectionLabel from "@/app/components/SectionLabel";
import { education } from "@/app/data/education";
import type { EducationItem } from "../types";

function EduCard({ item, delay }: { item: EducationItem; delay: number }) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { el.classList.add("visible"); obs.unobserve(el); } },
      { threshold: 0.12 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className="reveal group relative bg-bg-3 border border-white/[0.07] rounded-2xl p-6 sm:p-8 overflow-hidden transition-colors hover:border-white/[0.13]"
      style={{ transitionDelay: `${delay}ms` }}
    >
      {/* Top accent line */}
      <div className="absolute top-0 left-0 right-0 h-px bg-linear-to-r from-gold to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

      {/* Ghost number */}
      <div className="font-display text-[4rem] sm:text-[5rem] font-bold text-surface-2 leading-none mb-5 select-none">
        {item.num}
      </div>

      <span className="inline-block text-[0.68rem] font-bold tracking-[0.12em] uppercase text-green-400 mb-2">
        {item.period}
      </span>

      <h3 className="font-display text-[1.1rem] sm:text-[1.2rem] font-bold text-ink mb-1">
        {item.degree}
      </h3>
      <p className="text-[0.85rem] text-ink-2 font-medium mb-4">{item.institution}</p>
      <p className="text-[0.82rem] text-ink-3 leading-[1.75]">{item.description}</p>

      {/* Tags */}
      <div className="flex flex-wrap gap-1.5 mt-5">
        {item.tags.map((tag) => (
          <span
            key={tag}
            className="px-2.5 py-1 bg-surface border border-white/[0.07] rounded-full text-[0.67rem] text-ink-3 font-semibold tracking-wide"
          >
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
}

export default function Education() {
  const headerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = headerRef.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { el.classList.add("visible"); obs.unobserve(el); } },
      { threshold: 0.1 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <section id="education" className="relative z-10 bg-bg-2 py-20 md:py-28 px-6 md:px-16">
      <div className="max-w-7xl mx-auto">

        <div ref={headerRef} className="reveal mb-10 md:mb-14">
          <SectionLabel num="04" title="Education" />
          <h2 className="font-display text-[clamp(2.4rem,4vw,3.8rem)] font-bold leading-[1.05] text-ink">
            Academic<br />
            <em className="italic text-green-400">Foundation</em>
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-6">
          {education.map((item, i) => (
            <EduCard key={item.num} item={item} delay={i * 120} />
          ))}
        </div>

      </div>
    </section>
  );
}