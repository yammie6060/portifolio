"use client";

import { useRef, useEffect, useState, useCallback } from "react";
import Link from "next/link";
import SectionLabel from "@/app/components/SectionLabel";
import TechBadge from "@/app/components/TechBadge";
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
    "w-7 h-7 fill-none stroke-white/40 stroke-[1.5] stroke-linecap-round stroke-linejoin-round";

  if (id === "lihims") {
    return (
      <svg viewBox="0 0 24 24" className={base}>
        <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
        <polyline points="3.27 6.96 12 12.01 20.73 6.96" />
        <line x1="12" y1="22.08" x2="12" y2="12" />
      </svg>
    );
  }

  if (id === "elegance") {
    return (
      <svg viewBox="0 0 24 24" className={base}>
        <rect x="1" y="3" width="15" height="13" />
        <polygon points="16 8 20 8 23 11 23 16 16 16 16 8" />
        <circle cx="5.5" cy="18.5" r="2.5" />
        <circle cx="18.5" cy="18.5" r="2.5" />
      </svg>
    );
  }

  return (
    <svg viewBox="0 0 24 24" className={base}>
      <path d="M5 17H3a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11l5 5v5" />
      <circle cx="16" cy="17" r="3" />
      <circle cx="7" cy="17" r="3" />
    </svg>
  );
}

function ProjectVisual({
  project,
  index,
}: {
  project: Project;
  index: number;
}) {
  const num = String(index + 1).padStart(2, "0");

  return (
    <div
      className={`group relative w-full aspect-[4/3] sm:aspect-[16/11] lg:aspect-[4/3] rounded-2xl overflow-hidden bg-gradient-to-br ${project.thumbGrad} border border-white/[0.07] shadow-[0_25px_80px_rgba(0,0,0,0.35)]`}
    >
      {/* Subtle overlay */}
      <div className="absolute inset-0 bg-black/10" />

      {/* Live badge */}
      {project.status === "live" && (
        <div className="absolute top-5 left-5 z-20 inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-black/45 border border-white/10 text-white/70 text-[0.6rem] font-bold tracking-[0.15em] uppercase backdrop-blur-md">
          <span className="w-1.5 h-1.5 rounded-full bg-white/70 animate-pulse-dot" />
          Live
        </div>
      )}

      {/* Large project label */}
      <span className="absolute -bottom-5 right-4 font-display text-[7rem] sm:text-[9rem] font-bold tracking-tight text-white/[0.05] select-none transition-all duration-700 group-hover:-translate-y-3 group-hover:scale-105">
        {project.thumbLabel}
      </span>

      {/* Center icon */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="relative w-20 h-20 rounded-2xl flex items-center justify-center bg-white/[0.06] border border-white/[0.08] backdrop-blur-sm transition-all duration-500 group-hover:bg-white/[0.09] group-hover:border-white/[0.15] group-hover:scale-105">
          <ProjectIcon id={project.id} />
        </div>
      </div>

      {/* Project number */}
      <span className="absolute top-5 right-5 font-display text-xs tracking-[0.25em] text-white/25">
        {num}
      </span>

      {/* Bottom subtle gradient */}
      <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-black/25 to-transparent pointer-events-none" />
    </div>
  );
}

export default function Projects() {
  const headerRef = useRevealRef<HTMLDivElement>();

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [isChanging, setIsChanging] = useState(false);

  const currentProject = projects[currentIndex];

  /*
   * Change project with a small transition.
   */
  const changeProject = useCallback((index: number) => {
    if (projects.length === 0) return;

    setIsChanging(true);

    window.setTimeout(() => {
      setCurrentIndex(index);
      setIsChanging(false);
    }, 150);
  }, []);

  /*
   * Next project.
   */
  const nextProject = useCallback(() => {
    if (projects.length === 0) return;

    const nextIndex =
      currentIndex === projects.length - 1 ? 0 : currentIndex + 1;

    changeProject(nextIndex);
  }, [currentIndex, changeProject]);

  /*
   * Previous project.
   */
  const previousProject = useCallback(() => {
    if (projects.length === 0) return;

    const previousIndex =
      currentIndex === 0 ? projects.length - 1 : currentIndex - 1;

    changeProject(previousIndex);
  }, [currentIndex, changeProject]);

  /*
   * Automatically change project every 5 seconds.
   */
  useEffect(() => {
    if (isPaused || projects.length <= 1) return;

    const interval = window.setInterval(() => {
      setCurrentIndex((current) =>
        current === projects.length - 1 ? 0 : current + 1
      );
    }, 5000);

    return () => window.clearInterval(interval);
  }, [isPaused]);

  /*
   * Keyboard navigation.
   */
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "ArrowRight") {
        nextProject();
      }

      if (event.key === "ArrowLeft") {
        previousProject();
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [nextProject, previousProject]);

  if (!currentProject) return null;

  return (
    <section
      id="projects"
      className="relative z-10 bg-black py-20 md:py-28 px-6 md:px-16 border-t border-white/[0.05]"
    >
      <div
        ref={headerRef}
        className="reveal max-w-7xl mx-auto mb-12 md:mb-16"
      >
        <SectionLabel num="03" title="Projects" />

        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6">
          <div>
            <h2 className="font-display text-[clamp(2.4rem,4vw,3.8rem)] font-bold leading-[1.05] text-white">
              Selected{" "}
              <em className="italic text-white/60">Work</em>
            </h2>
          </div>

          <p className="text-[0.85rem] text-white/40 leading-[1.7] max-w-[360px]">
            A selection of systems I&apos;ve designed and built from idea to
            implementation.
          </p>
        </div>
      </div>

      {/* Main horizontal layout */}
      <div
        className="max-w-7xl mx-auto"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        <div className="grid grid-cols-1 lg:grid-cols-[1.05fr_0.95fr] gap-10 lg:gap-16 xl:gap-24 items-center">
          {/* =====================================================
              LEFT — PROJECT VISUAL / CARD
          ====================================================== */}
          <div className="relative">
            <div
              className={`transition-all duration-300 ease-out ${
                isChanging
                  ? "opacity-0 translate-y-2"
                  : "opacity-100 translate-y-0"
              }`}
            >
              <ProjectVisual
                project={currentProject}
                index={currentIndex}
              />
            </div>

            {/* Navigation */}
            <div className="flex items-center justify-between mt-6">
              {/* Counter */}
              <div className="flex items-center gap-3">
                <span className="font-display text-sm text-white">
                  {String(currentIndex + 1).padStart(2, "0")}
                </span>

                <span className="w-8 h-px bg-white/10" />

                <span className="font-display text-sm text-white/25">
                  {String(projects.length).padStart(2, "0")}
                </span>
              </div>

              {/* Previous / Next */}
              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={previousProject}
                  onFocus={() => setIsPaused(true)}
                  onBlur={() => setIsPaused(false)}
                  aria-label="Previous project"
                  className="w-11 h-11 rounded-full border border-white/10 bg-white/[0.02] flex items-center justify-center text-white/50 transition-all duration-300 hover:border-white/25 hover:bg-white/[0.06] hover:text-white active:scale-95"
                >
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M19 12H5" />
                    <path d="M12 19l-7-7 7-7" />
                  </svg>
                </button>

                <button
                  type="button"
                  onClick={nextProject}
                  onFocus={() => setIsPaused(true)}
                  onBlur={() => setIsPaused(false)}
                  aria-label="Next project"
                  className="w-11 h-11 rounded-full border border-white/10 bg-white/[0.02] flex items-center justify-center text-white/50 transition-all duration-300 hover:border-white/25 hover:bg-white/[0.06] hover:text-white active:scale-95"
                >
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M5 12h14" />
                    <path d="M12 5l7 7-7 7" />
                  </svg>
                </button>
              </div>
            </div>

            {/* Progress indicators */}
            <div className="flex items-center gap-1.5 mt-5">
              {projects.map((project, index) => (
                <button
                  key={project.id}
                  type="button"
                  onClick={() => changeProject(index)}
                  aria-label={`View ${project.title}`}
                  className="group relative h-1.5 flex-1 max-w-16 rounded-full overflow-hidden bg-white/[0.08]"
                >
                  <span
                    className={`absolute inset-y-0 left-0 rounded-full transition-all duration-500 ${
                      index === currentIndex
                        ? "w-full bg-white"
                        : "w-0 bg-white/50 group-hover:w-full"
                    }`}
                  />
                </button>
              ))}
            </div>
          </div>

          {/* =====================================================
              RIGHT — PROJECT CONTENT
          ====================================================== */}
          <div
            className={`transition-all duration-300 ease-out ${
              isChanging
                ? "opacity-0 translate-x-3"
                : "opacity-100 translate-x-0"
            }`}
          >
            {/* Number + status */}
            <div className="flex items-center justify-between mb-7">
              <span className="font-display text-xs tracking-[0.3em] text-white/20">
                PROJECT {String(currentIndex + 1).padStart(2, "0")}
              </span>

              {currentProject.status === "live" && (
                <span className="inline-flex items-center gap-2 text-[0.6rem] font-semibold tracking-[0.15em] uppercase text-white/30">
                  <span className="w-1.5 h-1.5 rounded-full bg-white/50 animate-pulse-dot" />
                  Live
                </span>
              )}
            </div>

            {/* Title */}
            <h3 className="font-display text-[clamp(2rem,4vw,3.5rem)] font-bold leading-[1.05] text-white">
              {currentProject.title}
            </h3>

            {/* Subtitle */}
            <p className="mt-3 text-[0.68rem] font-semibold tracking-[0.15em] uppercase text-white/30">
              {currentProject.subtitle}
            </p>

            {/* Divider */}
            <div className="w-12 h-px bg-white/15 my-7" />

            {/* Description */}
            <p className="text-[0.9rem] sm:text-[0.95rem] text-white/40 leading-[1.8] max-w-[520px]">
              {currentProject.description}
            </p>

            {/* Technologies */}
            <div className="mt-8">
              <span className="block text-[0.6rem] font-semibold tracking-[0.2em] uppercase text-white/20 mb-3">
                Built With
              </span>

              <div className="flex flex-wrap gap-1.5">
                {currentProject.tech.map((tech) => (
                  <TechBadge key={tech.label} {...tech} />
                ))}
              </div>
            </div>

            {/* Action */}
            <div className="mt-9">
              <Link
                href={currentProject.href}
                className="group inline-flex items-center gap-3 h-12 px-6 rounded-full bg-white text-black text-[0.72rem] font-semibold transition-all duration-300 hover:bg-white/90 hover:scale-[1.02] hover:shadow-[0_12px_35px_rgba(255,255,255,0.1)] active:scale-[0.98]"
              >
                View Project

                <svg
                  width="15"
                  height="15"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="transition-transform duration-300 group-hover:translate-x-1"
                >
                  <path d="M5 12h14" />
                  <path d="M12 5l7 7-7 7" />
                </svg>
              </Link>
            </div>

            {/* Small project navigation text */}
            <div className="flex items-center gap-5 mt-10 text-[0.65rem] text-white/20">
              <span>Use</span>

              <span className="inline-flex items-center gap-1">
                <kbd className="px-2 py-1 rounded border border-white/10 text-white/30">
                  ←
                </kbd>
                <kbd className="px-2 py-1 rounded border border-white/10 text-white/30">
                  →
                </kbd>
              </span>

              <span>to explore projects</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}