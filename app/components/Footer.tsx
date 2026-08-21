// app/components/Footer.tsx
import Link from "next/link";

const SOCIAL_LINKS = [
  {
    label: "GitHub",
    href: "https://github.com/yammie6060",
    icon: (
      <svg viewBox="0 0 24 24" className="w-4 h-4 fill-none stroke-current" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
      </svg>
    ),
  },
  {
    label: "LinkedIn",
    href: "https://linkedin.com/",
    icon: (
      <svg viewBox="0 0 24 24" className="w-4 h-4 fill-none stroke-current" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
        <rect x="2" y="9" width="4" height="12" />
        <circle cx="4" cy="4" r="2" />
      </svg>
    ),
  },
  {
    label: "Instagram",
    href: "https://instagram.com/",
    icon: (
      <svg viewBox="0 0 24 24" className="w-4 h-4 fill-none stroke-current" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="2" width="20" height="20" rx="5" />
        <circle cx="12" cy="12" r="4" />
        <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
      </svg>
    ),
  },
  {
    label: "X / Twitter",
    href: "https://x.com/",
    icon: (
      <svg viewBox="0 0 24 24" className="w-4 h-4 fill-none stroke-current" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M4 4l16 16M20 4L4 20" />
      </svg>
    ),
  },
  {
    label: "Email",
    href: "mailto:yamikanisuwedi6@gmail.com",
    icon: (
      <svg viewBox="0 0 24 24" className="w-4 h-4 fill-none stroke-current" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="4" width="20" height="16" rx="2" />
        <path d="M2 7l10 7 10-7" />
      </svg>
    ),
  },
];

const NAV_LINKS = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

export default function Footer() {
  return (
    <footer className="relative z-10 bg-black border-t border-white/[0.07] px-6 md:px-16 pt-16 pb-8">
      <div className="max-w-7xl mx-auto">
        {/* Elsewhere */}
        <div className="flex items-center gap-3 mb-6">
          <span className="text-[0.65rem] font-bold tracking-[0.2em] uppercase text-white/30">
            Elsewhere
          </span>
          <div className="flex-1 h-px bg-white/[0.06]" />
        </div>

        <div className="flex flex-wrap gap-3 mb-16">
          {SOCIAL_LINKS.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target={link.href.startsWith("http") ? "_blank" : undefined}
              rel="noreferrer"
              className="group flex items-center gap-2 pl-2 pr-3.5 py-2 rounded-full border border-white/10 bg-white/[0.02] text-white/60 transition-all hover:border-white/25 hover:text-white hover:bg-white/[0.05]"
            >
              <span className="w-7 h-7 rounded-full bg-white/5 flex items-center justify-center shrink-0 group-hover:bg-white/10 transition-colors">
                {link.icon}
              </span>
              <span className="text-[0.75rem] font-semibold">{link.label}</span>
              <span className="text-[0.65rem] opacity-40 group-hover:opacity-80 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all">
                ↗
              </span>
            </a>
          ))}
        </div>

        {/* Have an idea */}
        <div className="flex items-center gap-4 mb-10">
          <span className="text-[0.65rem] font-bold tracking-[0.15em] uppercase text-white/30 shrink-0">
            Have an idea?
          </span>
          <div className="flex-1 h-px bg-white/[0.06]" />
          <span className="text-[0.65rem] font-bold tracking-[0.15em] uppercase text-white shrink-0">
            Let&apos;s make it real.
          </span>
        </div>

        {/* Bottom row */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6 pt-8 border-t border-white/[0.06]">
          <Link href="#hero" className="flex items-center gap-3 shrink-0">
            <span className="flex items-center justify-center w-10 h-10 rounded-full bg-white/10 text-white text-[0.7rem] font-bold tracking-wide">
              YS
            </span>
            <span className="text-left">
              <span className="block text-[0.85rem] font-bold text-white leading-tight">
                Yamikani Suwedi
              </span>
            </span>
          </Link>

          {/* Navigation Links - Smaller font */}
          <div className="flex items-center gap-4 md:gap-6 order-last sm:order-none">
            {NAV_LINKS.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="text-[0.6rem] font-medium text-white/30 tracking-[0.08em] uppercase transition-colors hover:text-white"
              >
                {l.label}
              </a>
            ))}
          </div>

          <p className="text-[0.7rem] text-white/30 tracking-wide text-center sm:text-right leading-relaxed">
            &copy; {new Date().getFullYear()} Yamikani Suwedi.
            <br className="sm:hidden" />
           
          </p>
        </div>
      </div>
    </footer>
  );
}