"use client";

import { useRef, useEffect } from "react";
import SectionLabel from "@/app/components/SectionLabel";
import { experience } from "@/app/data/experience";
import type { ExperienceItem } from "../types";

function ExpRow({ item, delay }: { item: ExperienceItem; delay: number }) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { el.classList.add("visible"); obs.unobserve(el); } },
      { threshold: 0.1 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className="exp-item reveal relative py-8 md:py-10 border-b border-white/[0.07] first:border-t first:border-white/[0.07]"
      style={{ transitionDelay: `${delay}ms` }}
    >
      {/* Mobile layout: stacked. Desktop: side-by-side */}
      <div className="grid grid-cols-1 md:grid-cols-[180px_1fr] gap-3 md:gap-16">

        {/* Left: period */}
        <div className="flex md:flex-col items-center md:items-start gap-3 md:gap-0">
          <p className="text-[0.75rem] text-ink-3 font-semibold tracking-[0.06em] uppercase md:pt-0.5">
            {item.period}
          </p>
          {item.current && (
            <span className="inline-block md:mt-2 px-2 py-0.5 rounded-full bg-[rgba(78,203,141,0.1)] border border-[rgba(78,203,141,0.2)] text-[#4ecb8d] text-[0.62rem] font-bold tracking-widest uppercase">
              Current
            </span>
          )}
        </div>

        {/* Right: content */}
        <div>
          <h3 className="font-display text-[1.25rem] sm:text-[1.45rem] font-bold text-ink mb-0.5">
            {item.role}
          </h3>
          <p className="text-[0.88rem] text-gold font-semibold mb-3">{item.company}</p>
          <p className="text-[0.88rem] text-ink-2 leading-[1.8]">{item.description}</p>

          {/* Chips */}
          <div className="flex flex-wrap gap-1.5 mt-4">
            {item.chips.map((chip) => (
              <span
                key={chip}
                className="px-2.5 py-1 bg-surface border border-white/[0.07] rounded-full text-[0.68rem] text-ink-2 font-semibold tracking-wide"
              >
                {chip}
              </span>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}

export default function Experience() {
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
    <section id="experience" className="relative z-10 bg-bg py-20 md:py-28 px-6 md:px-16">
      <div className="max-w-7xl mx-auto">

        <div ref={headerRef} className="reveal mb-10 md:mb-14">
          <SectionLabel num="05" title="Experience" />
          <h2 className="font-display text-[clamp(2.4rem,4vw,3.8rem)] font-bold leading-[1.05] text-ink">
            Career<br />
            <em className="italic text-gold">Timeline</em>
          </h2>
        </div>

        <div>
          {experience.map((item, i) => (
            <ExpRow key={item.role} item={item} delay={i * 100} />
          ))}
        </div>

      </div>
    </section>
  );
}