"use client";

import { useScrollReveal } from "@/app/hooks/useScrollReveal";
import SectionLabel from "@/app/components/SectionLabel";

const SOCIAL_LINKS = [
  {
    label: "yamikanisuwedi6@gmail.com",
    href: "mailto:yamikanisuwedi6@gmail.com",
    icon: (
      <svg
        viewBox="0 0 24 24"
        className="w-4 h-4 fill-none stroke-current stroke-width-[1.8] stroke-linecap-round stroke-linejoin-round"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <rect x="2" y="4" width="20" height="16" rx="2" />
        <path d="M2 7l10 7 10-7" />
      </svg>
    ),
  },
  {
    label: "github.com/",
    href: "https://github.com/yammie6060",
    icon: (
      <svg
        viewBox="0 0 24 24"
        className="w-4 h-4 fill-none stroke-current"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
      </svg>
    ),
  },
  {
    label: "linkedin.com/in",
    href: "https://linkedin.com/yamikani-suwedi",
    icon: (
      <svg
        viewBox="0 0 24 24"
        className="w-4 h-4 fill-none stroke-current"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
        <rect x="2" y="9" width="4" height="12" />
        <circle cx="4" cy="4" r="2" />
      </svg>
    ),
  },
  {
    label: "whatsapp.com",
    href: "https://wa.me/+265881052965",
    icon: (
      <svg
        viewBox="0 0 24 24"
        className="w-4 h-4 fill-current"
      >
        <path d="M20.52 3.48A11.9 11.9 0 0 0 12.04 0C5.47 0 .13 5.34.13 11.91c0 2.1.55 4.15 1.6 5.96L.03 24l6.27-1.64a11.88 11.88 0 0 0 5.73 1.46h.01c6.57 0 11.91-5.34 11.91-11.91 0-3.18-1.24-6.17-3.43-8.43ZM12.04 21.8h-.01a9.86 9.86 0 0 1-5.03-1.38l-.36-.21-3.72.98.99-3.63-.23-.37a9.86 9.86 0 0 1-1.51-5.28C2.17 6.46 6.6 2.03 12.05 2.03c2.64 0 5.12 1.03 6.99 2.9a9.83 9.83 0 0 1 2.89 7c0 5.45-4.43 9.87-9.89 9.87Zm5.42-7.39c-.3-.15-1.76-.87-2.03-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.94 1.17-.17.2-.35.22-.65.07-.3-.15-1.25-.46-2.38-1.47-.88-.79-1.47-1.76-1.64-2.06-.17-.3-.02-.46.13-.61.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.07-.15-.67-1.61-.92-2.21-.24-.58-.49-.5-.67-.51h-.57c-.2 0-.52.07-.8.37-.27.3-1.05 1.02-1.05 2.49s1.07 2.89 1.22 3.09c.15.2 2.1 3.21 5.09 4.5.71.31 1.27.5 1.7.64.72.23 1.37.2 1.89.12.58-.09 1.76-.72 2.01-1.42.25-.7.25-1.3.17-1.42-.07-.12-.27-.2-.57-.35Z" />
      </svg>
    ),
  }
];

export default function Contact() {
  const leftRef = useScrollReveal<HTMLDivElement>();
  const rightRef = useScrollReveal<HTMLDivElement>();

  return (
    <section
      id="contact"
      className="relative z-10 bg-black py-20 md:py-28 px-4 sm:px-8 md:px-16 overflow-hidden border-t border-white/[0.05]"
    >
      <div
        className="absolute bottom-[-200px] left-1/2 -translate-x-1/2 w-[700px] h-[350px] rounded-full pointer-events-none"
        style={{
          background: "radial-gradient(circle, rgba(255,255,255,0.03) 0%, transparent 70%)",
        }}
      />

      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-14 md:gap-20 items-start">
        {/* Left Column - Text Content */}
        <div ref={leftRef} className="reveal">
          <SectionLabel num="06" title="Contact" />
          
          <h2 className="font-display text-[clamp(2.4rem,4vw,3.8rem)] font-bold leading-[1.05] text-white mb-6">
            Let's build
            <br />
            <em className="italic text-white/60">something</em>
          </h2>
          
          <p className="text-[0.97rem] text-white/40 leading-[1.9] max-w-md">
            Open to new projects, collaborations, and full-time opportunities.
            Whether you have a system to build, a team to join, or just want to
            talk architecture — reach out.
          </p>

          <div className="mt-8 text-sm font-bold tracking-wide text-white/60">
            <p>Available for New Opportunities.</p>
          </div>
        </div>

        {/* Right Column - Social Links */}
        <div ref={rightRef} className="reveal reveal-d2">
          <div className="flex flex-col">
            {SOCIAL_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                target={link.href.startsWith("http") ? "_blank" : undefined}
                rel="noreferrer"
                className="group flex items-center gap-4 py-4 border-b border-white/[0.05] first:border-t first:border-white/[0.05] text-white/40 transition-colors hover:text-white"
              >
                <div className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center shrink-0 text-white/40 transition-colors group-hover:bg-white/10 group-hover:text-white">
                  {link.icon}
                </div>
                <span className="text-[0.85rem] sm:text-[0.9rem] font-medium truncate">
                  {link.label}
                </span>
                <span className="ml-auto text-sm opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all shrink-0">
                  ↗
                </span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}