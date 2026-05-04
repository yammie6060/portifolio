"use client";

import { useScrollReveal } from "@/app/hooks/useScrollReveal";
import SectionLabel from "@/app/components/SectionLabel";

const SOCIAL_LINKS = [
  {
    label: "yamikanisuwedi6@gmail.com",
    href:  "mailto:yamikanisuwedi6@gmail.com",
    icon:  (
      <svg viewBox="0 0 24 24" className="w-4 h-4 stroke-gold fill-none" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="4" width="20" height="16" rx="2" />
        <path d="M2 7l10 7 10-7" />
      </svg>
    ),
  },
  {
    label: "github.com/yamikani",
    href:  "https://github.com/yammie6060",
    icon:  (
      <svg viewBox="0 0 24 24" className="w-4 h-4 stroke-gold fill-none" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
      </svg>
    ),
  },
  {
    label: "linkedin.com/in/yamikani",
    href:  "https://linkedin.com/",
    icon:  (
      <svg viewBox="0 0 24 24" className="w-4 h-4 stroke-gold fill-none" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
        <rect x="2" y="9" width="4" height="12" />
        <circle cx="4" cy="4" r="2" />
      </svg>
    ),
  },
];

export default function Contact() {
  const leftRef  = useScrollReveal<HTMLDivElement>();
  const rightRef = useScrollReveal<HTMLDivElement>();

  return (
    <section id="contact" className="relative z-10 bg-bg-2 py-20 md:py-28 px-6 md:px-16 overflow-hidden">

      {/* Glow */}
      <div
        className="absolute bottom-[-200px] left-1/2 -translate-x-1/2 w-[700px] h-[350px] rounded-full pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(200,169,110,0.05) 0%, transparent 70%)" }}
      />

      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-14 md:gap-20">

        {/* Left */}
        <div ref={leftRef} className="reveal">
          <SectionLabel num="06" title="Contact" />
          <h2 className="font-display text-[clamp(2.4rem,4vw,3.8rem)] font-bold leading-[1.05] text-ink mb-6">
            Let&apos;s build<br />
            <em className="italic text-gold">something</em>
          </h2>
          <p className="text-[0.97rem] text-ink-2 leading-[1.9] mb-8 max-w-md">
            Open to new projects, collaborations, and full-time opportunities.
            Whether you have a system to build, a team to join, or just want to
            talk architecture — reach out.
          </p>

          <div className="flex flex-col">
            {SOCIAL_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                target={link.href.startsWith("http") ? "_blank" : undefined}
                rel="noreferrer"
                className="group flex items-center gap-4 py-4 border-b border-white/[0.07] first:border-t first:border-white/[0.07] text-ink-2 transition-colors hover:text-ink"
              >
                <div className="w-10 h-10 rounded-sm bg-surface flex items-center justify-center shrink-0 transition-colors group-hover:bg-[rgba(200,169,110,0.1)]">
                  {link.icon}
                </div>
                <span className="text-[0.85rem] sm:text-[0.9rem] font-medium truncate">{link.label}</span>
                <span className="ml-auto text-sm opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all shrink-0">
                  ↗
                </span>
              </a>
            ))}
          </div>
        </div>

        {/* Right: form */}
        <div ref={rightRef} className="reveal reveal-d2">
          <form className="flex flex-col gap-5" onSubmit={(e) => e.preventDefault()}>
            <div className="flex flex-col gap-2">
              <label className="text-[0.68rem] font-bold tracking-[0.12em] uppercase text-ink-3">
                Your Name
              </label>
              <input
                type="text"
                placeholder="Yamikani Suwedi"
                className="bg-bg-3 border border-white/[0.07] text-ink placeholder:text-ink-3 px-4 py-3.5 rounded-sm text-[0.88rem] outline-none transition-colors focus:border-gold focus:bg-bg"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label className="text-[0.68rem] font-bold tracking-[0.12em] uppercase text-ink-3">
                Email
              </label>
              <input
                type="email"
                placeholder="yamikanisuwedi6@gmail.com"
                className="bg-bg-3 border border-white/[0.07] text-ink placeholder:text-ink-3 px-4 py-3.5 rounded-sm text-[0.88rem] outline-none transition-colors focus:border-gold focus:bg-bg"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label className="text-[0.68rem] font-bold tracking-[0.12em] uppercase text-ink-3">
                Message
              </label>
              <textarea
                rows={5}
                placeholder="Tell me about your project or opportunity..."
                className="bg-bg-3 border border-white/[0.07] text-ink placeholder:text-ink-3 px-4 py-3.5 rounded-sm text-[0.88rem] outline-none resize-none transition-colors focus:border-gold focus:bg-bg"
              />
            </div>
            <button
              type="submit"
              className="self-start px-8 py-3.5 bg-gold text-bg text-[0.8rem] font-bold tracking-[0.1em] uppercase rounded-sm transition-all hover:-translate-y-0.5 hover:shadow-[0_10px_28px_rgba(200,169,110,0.25)]"
            >
              Send Message →
            </button>
          </form>
        </div>

      </div>
    </section>
  );
}