"use client";

import { useRef, useEffect } from "react";
import Link from "next/link";
import SectionLabel from "@/app/components/SectionLabel";
import TechBadge from "@/app/components/TechBadge";
import { useDragScroll } from "@/app/hooks/useDragScroll";
import { projects } from "@/app/data/projects";
import type { Project } from "../types";

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

function ProjectIcon({ id }: { id: string }) {
  const base =
    "w-6 h-6 fill-none stroke-white/60 stroke-[1.5] stroke-linecap-round stroke-linejoin-round";

  if (id === "lihims")
    return (
      <svg viewBox="0 0 24 24" className={base}>
        <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
        <polyline points="3.27 6.96 12 12.01 20.73 6.96" />
        <line x1="12" y1="22.08" x2="12" y2="12" />
      </svg>
    );

  if (id === "elegance")
    return (
      <svg viewBox="0 0 24 24" className={base}>
        <rect x="1" y="3" width="15" height="13" />
        <polygon points="16 8 20 8 23 11 23 16 16 16 16 8" />
        <circle cx="5.5" cy="18.5" r="2.5" />
        <circle cx="18.5" cy="18.5" r="2.5" />
      </svg>
    );

  // Default: taxi / generic
  return (
    <svg viewBox="0 0 24 24" className={base}>
      <path d="M5 17H3a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11l5 5v5" />
      <circle cx="16" cy="17" r="3" />
      <circle cx="7" cy="17" r="3" />
    </svg>
  );
}

function ProjectCard({ project }: { project: Project }) {
  const ref = useRef<HTMLElement>(null);

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

  return (
    <article
      ref={ref}
      className="reveal group flex-none w-[calc(100vw-3rem)] sm:w-[360px] md:w-[400px] bg-bg-2 border border-white/[0.07] rounded-2xl overflow-hidden transition-all duration-300 hover:border-white/[0.14] hover:-translate-y-1.5 hover:shadow-[0_20px_60px_rgba(0,0,0,0.5)]"
    >

      <div
        className={`relative h-48 sm:h-52 bg-gradient-to-br ${project.thumbGrad} flex items-center justify-center overflow-hidden`}
      >
        {/* Live badge */}
        {project.status === "live" && (
          <div className="absolute top-4 left-4 z-10 inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-[rgba(78,203,141,0.15)] border border-[rgba(78,203,141,0.25)] text-[#4ecb8d] text-[0.65rem] font-bold tracking-widest uppercase">
            <span className="w-1.5 h-1.5 rounded-full bg-[#4ecb8d] animate-pulse-dot" />
            Live
          </div>
        )}

        {/* Watermark */}
        <span className="absolute bottom-[-0.2em] right-2 font-display text-[5rem] font-bold tracking-tight text-white/[0.08] select-none transition-transform duration-500 group-hover:-translate-y-2 group-hover:scale-105">
          {project.thumbLabel}
        </span>

        {/* Centre icon */}
        <div className="relative z-10 w-14 h-14 rounded-xl flex items-center justify-center bg-white/[0.08]">
          <ProjectIcon id={project.id} />
        </div>
      </div>

      <div className="p-5 sm:p-6 flex flex-col">
        <h3 className="font-display text-[1.25rem] sm:text-[1.45rem] font-bold text-ink mb-1">
          {project.title}
        </h3>
        <p className="text-[0.72rem] font-semibold tracking-[0.1em] uppercase text-ink-3 mb-3">
          {project.subtitle}
        </p>
        <p className="text-[0.85rem] text-ink-2 leading-[1.75] mb-5">
          {project.description}
        </p>

        {/* Tech tags */}
        <div className="flex flex-wrap gap-1.5 mb-5">
          {project.tech.map((t) => (
            <TechBadge key={t.label} {...t} />
          ))}
        </div>

        {/* CTA link */}
        <Link
          href={project.href}
          className="inline-flex items-center gap-1.5 text-[0.75rem] font-bold tracking-[0.08em] uppercase text-ink-3 transition-colors hover:text-green-400 group/link mt-auto"
        >
          View Project
          <svg
            width="13"
            height="13"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            className="transition-transform group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5"
          >
            <path d="M7 17L17 7M7 7h10v10" />
          </svg>
        </Link>
      </div>
    </article>
  );
}

export default function Projects() {
  const headerRef = useRevealRef<HTMLDivElement>();

  const {
    ref: trackRef,
    onMouseDown,
    onMouseLeave,
    onMouseUp,
    onMouseMove,
    scrollBy,
  } = useDragScroll<HTMLDivElement>();

  return (
    <section id="projects" className="relative z-10 bg-bg py-20 md:py-28 overflow-hidden">

      {/* ── Header — max-w-7xl centered, same as Skills / Education ── */}
      <div
        ref={headerRef}
        className="reveal max-w-7xl mx-auto px-6 md:px-16 mb-10 md:mb-12"
      >
        <SectionLabel num="03" title="Projects" />

        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6">
          <h2 className="font-display text-[clamp(2.4rem,4vw,3.8rem)] font-bold leading-[1.05] text-ink">
            Selected<br />
            <em className="italic text-green-400">Work</em>
          </h2>

          {/* Scroll arrow controls */}
          <div className="flex items-center gap-3 text-[0.7rem] text-ink-3 tracking-widest uppercase">
            <span className="hidden sm:inline">Drag to explore</span>
            <button
              onClick={() => scrollBy(-430)}
              aria-label="Scroll left"
              className="w-9 h-9 rounded-full border border-white/[0.14] bg-transparent flex items-center justify-center transition-colors hover:border-gold hover:bg-[rgba(200,169,110,0.08)]"
            >
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M19 12H5M12 5l-7 7 7 7" />
              </svg>
            </button>
            <button
              onClick={() => scrollBy(430)}
              aria-label="Scroll right"
              className="w-9 h-9 rounded-full border border-white/[0.14] bg-transparent flex items-center justify-center transition-colors hover:border-gold hover:bg-[rgba(200,169,110,0.08)]"
            >
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>
              {/* ── Scrollable card track ── */}
      <div className="relative">
        {/* Left fade — width matches px padding so cards peek out cleanly */}
        <div className="absolute left-0 top-0 bottom-6 w-6 md:w-16 z-10 pointer-events-none" />
        {/* Right fade */}
        <div className="absolute right-0 top-0 bottom-6 w-16 md:w-24 z-10 pointer-events-none" />

        <div
          ref={trackRef}
          onMouseDown={onMouseDown}
          onMouseLeave={onMouseLeave}
          onMouseUp={onMouseUp}
          onMouseMove={onMouseMove}
          className={[
            "flex gap-4 sm:gap-5 overflow-x-auto pb-6",
            "cursor-grab active:cursor-grabbing",
            "px-6 md:px-16",
            "[scroll-snap-type:x_mandatory]",
            "[-webkit-overflow-scrolling:touch]",
            "[scrollbar-width:thin]",
            "[scrollbar-color:#242428_transparent]",
          ].join(" ")}
        >
          {projects.map((project) => (
            <div key={project.id} className="snap-start">
              <ProjectCard project={project} />
            </div>
          ))}

          {/* Trailing spacer so last card fully clears the right fade */}
          <div className="flex-none w-6 md:w-16 pointer-events-none" />
        </div>
      </div>
      </div>

    </section>
  );
}