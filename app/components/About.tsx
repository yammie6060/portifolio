"use client";

import SectionLabel from "@/app/components/SectionLabel";
import { useScrollReveal } from "../hooks/useScrollReveal";

export default function About() {
  const leftRef  = useScrollReveal<HTMLDivElement>();
  const rightRef = useScrollReveal<HTMLDivElement>();

  return (
    <section id="about" className="relative z-10 bg-bg py-20 md:py-28 px-6 md:px-16">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-24 items-start">

        {/* Left */}
        <div ref={leftRef} className="reveal">
          <SectionLabel num="01" title="About" />
          <h2 className="font-display text-[clamp(2.4rem,4vw,3.8rem)] font-bold leading-[1.05] text-ink">
            Crafting systems<br />that{" "}
            <em className="text-gold not-italic">endure</em>
          </h2>
          <div className="mt-8 space-y-4 text-[0.97rem] text-ink-2 leading-[1.9]">
            <p>
              I&apos;m a full-stack developer based in{" "}
              <strong className="text-ink font-semibold">Malawi</strong>, with a
              focus on building backend systems that power real-world operations
              — from inventory and logistics platforms to transport route
              management and ride-booking engines.
            </p>
            <p>
              My approach is methodical: understand the domain deeply, model
              data with care, and build outward toward interfaces people actually
              enjoy using. I care about{" "}
              <strong className="text-ink font-semibold">
                software architecture, clean APIs, and maintainability
              </strong>{" "}
              at every layer.
            </p>
            <p>
              I thrive on challenging problems — concurrency, approval
              workflows, real-time state, complex data pipelines — and find deep
              satisfaction in shipping production systems that hold up under
              pressure.
            </p>
          </div>
        </div>

        {/* Right: info table */}
        <div ref={rightRef} className="reveal reveal-d2 md:pt-16">
          <table className="w-full border-collapse">
            <tbody>
              {[
                { key: "Name",      val: "Yamikani Suwedi" },
                { key: "Location",  val: "Lilongwe, Malawi 🇲🇼" },
                { key: "Focus",     val: "Backend Systems & Web Apps" },
                { key: "Stack",     val: "FastAPI · PostgreSQL · Next.js" },
                { key: "Education", val: "BSc Information & Communication Technology" },
                { key: "Languages", val: "English · Chichewa" },
              ].map(({ key, val }) => (
                <tr key={key} className="border-b border-white/[0.07] first:border-t first:border-white/[0.07]">
                  <td className="py-3.5 pr-6 text-[0.7rem] font-bold tracking-[0.08em] uppercase text-ink-3 align-top pt-4 w-24 md:w-28">
                    {key}
                  </td>
                  <td className="py-3.5 text-[0.88rem] md:text-[0.9rem] text-ink">{val}</td>
                </tr>
              ))}
              <tr className="border-b border-white/[0.07]">
                <td className="py-3.5 pr-6 text-[0.7rem] font-bold tracking-[0.08em] uppercase text-ink-3 align-top pt-4 w-24 md:w-28">
                  Status
                </td>
                <td className="py-3.5">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[rgba(78,203,141,0.1)] border border-[rgba(78,203,141,0.2)] text-[#4ecb8d] text-[0.7rem] font-bold tracking-wide">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#4ecb8d] animate-pulse-dot" />
                    Open to Work
                  </span>
                </td>
              </tr>
            </tbody>
          </table>
        </div>

      </div>
    </section>
  );
}