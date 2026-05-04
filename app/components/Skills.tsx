"use client";

import { useEffect, useRef } from "react";
import SectionLabel from "@/app/components/SectionLabel";

// ─── Brand SVG Icons ────────────────────────────────────────────────────────

const BrandIcons: Record<string, JSX.Element> = {
  // Programming Languages
  Python: (
    <svg viewBox="0 0 128 128" className="w-10 h-10">
      <linearGradient id="py1" x1="70.252" y1="1237.476" x2="170.659" y2="1151.089" gradientTransform="matrix(.563 0 0 -.568 -29.215 707.817)" gradientUnits="userSpaceOnUse">
        <stop offset="0" stopColor="#5A9FD4"/><stop offset="1" stopColor="#306998"/>
      </linearGradient>
      <linearGradient id="py2" x1="209.474" y1="1098.811" x2="173.62" y2="1149.537" gradientTransform="matrix(.563 0 0 -.568 -29.215 707.817)" gradientUnits="userSpaceOnUse">
        <stop offset="0" stopColor="#FFD43B"/><stop offset="1" stopColor="#FFE873"/>
      </linearGradient>
      <path fill="url(#py1)" d="M63.391 1.988c-4.222.02-8.252.379-11.8 1.007-10.45 1.846-12.346 5.71-12.346 12.837v9.411h24.693v3.137H29.977c-7.176 0-13.46 4.313-15.426 12.521-2.268 9.405-2.368 15.275 0 25.096 1.755 7.311 5.947 12.519 13.124 12.519h8.491V67.234c0-8.151 7.051-15.34 15.426-15.34h24.665c6.866 0 12.346-5.654 12.346-12.548V15.833c0-6.693-5.646-11.72-12.346-12.837-4.244-.706-8.645-1.027-12.866-1.008zM50.037 9.557c2.55 0 4.634 2.117 4.634 4.721 0 2.593-2.083 4.69-4.634 4.69-2.56 0-4.633-2.097-4.633-4.69-.001-2.604 2.073-4.721 4.633-4.721z"/>
      <path fill="url(#py2)" d="M91.682 28.38v10.966c0 8.5-7.208 15.655-15.426 15.655H51.591c-6.756 0-12.346 5.783-12.346 12.549v23.515c0 6.691 5.818 10.628 12.346 12.547 7.816 2.297 15.312 2.713 24.665 0 6.216-1.801 12.346-5.423 12.346-12.547v-9.412H63.938v-3.138h37.012c7.176 0 9.852-5.005 12.348-12.519 2.578-7.735 2.467-15.174 0-25.096-1.774-7.145-5.161-12.521-12.348-12.521h-9.268zM77.809 87.927c2.561 0 4.634 2.097 4.634 4.692 0 2.602-2.074 4.719-4.634 4.719-2.55 0-4.633-2.117-4.633-4.719 0-2.595 2.083-4.692 4.633-4.692z"/>
    </svg>
  ),
  TypeScript: (
    <svg viewBox="0 0 400 400" className="w-10 h-10">
      <rect width="400" height="400" rx="50" fill="#3178C6"/>
      <path fill="#fff" d="M87.7 242.8v-28.5h80.7v28.5h-26v74.8H87.7v-74.8zm105.8-25.8h38.4l23.9 38.6 23.9-38.6h38.4v100.6h-33V263l-27.2 42.3h-3.7l-27.2-42.3v54.6h-33.5V217z"/>
    </svg>
  ),
  FastAPI: (
    <svg viewBox="0 0 200 200" className="w-10 h-10">
      <circle cx="100" cy="100" r="100" fill="#009688"/>
      <path fill="#fff" d="M108 40l-40 70h36l-4 50 44-70h-38z"/>
    </svg>
  ),
  "Next.js": (
    <svg viewBox="0 0 180 180" className="w-10 h-10">
      <mask id="nxt" style={{maskType:"alpha"}} maskUnits="userSpaceOnUse" x="0" y="0" width="180" height="180">
        <circle cx="90" cy="90" r="90" fill="black"/>
      </mask>
      <g mask="url(#nxt)">
        <circle cx="90" cy="90" r="90" fill="black"/>
        <path d="M149.508 157.52L69.142 54H54v71.97h12.114V68.246l75.404 95.788z" fill="white"/>
        <path d="M115.5 54h12v67.5h-12zM126 54h12v67.5h-12z" fill="white"/>
      </g>
    </svg>
  ),
  React: (
    <svg viewBox="-11.5 -10.23 23 20.46" className="w-10 h-10">
      <circle cx="0" cy="0" r="2.05" fill="#61DAFB"/>
      <g stroke="#61DAFB" strokeWidth="1" fill="none">
        <ellipse rx="11" ry="4.2"/>
        <ellipse rx="11" ry="4.2" transform="rotate(60)"/>
        <ellipse rx="11" ry="4.2" transform="rotate(120)"/>
      </g>
    </svg>
  ),
  "Tailwind CSS": (
    <svg viewBox="0 0 54 33" className="w-10 h-10">
      <path fillRule="evenodd" clipRule="evenodd" d="M27 0C19.8 0 15.3 3.6 13.5 10.8c2.7-3.6 5.85-4.95 9.45-4.05 2.054.513 3.522 2.004 5.147 3.653C30.744 13.09 33.808 16.2 40.5 16.2c7.2 0 11.7-3.6 13.5-10.8-2.7 3.6-5.85 4.95-9.45 4.05-2.054-.513-3.522-2.004-5.147-3.653C36.756 3.11 33.692 0 27 0zM13.5 16.2C6.3 16.2 1.8 19.8 0 27c2.7-3.6 5.85-4.95 9.45-4.05 2.054.513 3.522 2.004 5.147 3.653C17.244 29.29 20.308 32.4 27 32.4c7.2 0 11.7-3.6 13.5-10.8-2.7 3.6-5.85 4.95-9.45 4.05-2.054-.513-3.522-2.004-5.147-3.653C23.256 19.31 20.192 16.2 13.5 16.2z" fill="#06B6D4"/>
    </svg>
  ),
  PostgreSQL: (
    <svg viewBox="0 0 432 432" className="w-10 h-10">
      <path fill="#336791" d="M322.7 308.1c2.4-20.1 1.7-23.1 16.8-19.9l3.8.3c11.5.5 26.6-1.8 35.4-6.3 19-9.5 30.3-25.4 11.5-21.2-43 9.5-46.1-5.7-46.1-5.7 45.5-67.5 64.5-153.1 48.1-174.1-44.9-57.4-122.5-30.2-123.8-29.5l-.4.1c-8.5-1.8-18-2.8-28.7-3-19.4-.3-34.1 5.1-45.3 13.6 0 0-137.7-56.8-131.2 71.4 1.4 27.2 39 205.7 83.9 151.7 16.4-19.7 32.3-36.4 32.3-36.4 7.9 5.4 17.3 8.1 27.2 7.1l.8-.6c-.2 2.6-.1 5.1.4 8.1-12.2 13.6-8.6 16-33 21.1-24.7 5.2-10.2 14.4-.7 16.8 11.5 2.9 38.1 7 56.1-18.3l-.7 2.9c4.8 3.8 4.4 27.5 5.1 44.4.7 16.9 1.9 32.8 5.5 42.1 3.6 9.3 7.7 33.4 40.7 26.5 27.5-5.8 48.2-14.2 50.3-92.1"/>
      <path fill="#fff" d="M351.9 261c-43 9.5-46.1-5.7-46.1-5.7 45.5-67.5 64.5-153.1 48.1-174.1-44.9-57.4-122.5-30.2-123.8-29.5l-.4.1c-8.5-1.8-18-2.8-28.7-3-19.4-.3-34.1 5.1-45.3 13.6 0 0-137.7-56.8-131.2 71.4 1.4 27.2 39 205.7 83.9 151.7 16.4-19.7 32.3-36.4 32.3-36.4 7.9 5.4 17.3 8.1 27.2 7.1l.8-.6c-.2 2.6-.1 5.1.4 8.1-12.2 13.6-8.6 16-33 21.1-24.7 5.2-10.2 14.4-.7 16.8 11.5 2.9 38.1 7 56.1-18.3l-.7 2.9c4.8 3.8 8.1 24.7 7.5 43.6-.6 18.9-1 31.8 3 41.9 4 10.2 7.7 33.4 40.7 26.5 27.5-5.8 41.8-20.8 43.8-45.8 1.4-17.7 4.6-15.1 4.8-30.9l2.6-7.8c3-25 .5-33.1 17.8-29.4l3.8.3c11.5.5 26.6-1.8 35.4-6.3 19.1-9.5 30.4-25.3 11.6-21.2z"/>
    </svg>
  ),
  Docker: (
    <svg viewBox="0 0 100 72" className="w-10 h-10">
      <path fill="#099CEC" d="M97.3 30.3c-1.8-1.2-5.9-1.7-9.1-1.1-.4-3.1-2.1-5.8-5.1-8.2l-1.7-1.1-1.2 1.7c-1.5 2.3-2.3 5.4-2.1 8.4.1 1.1.5 3.1 1.6 4.9-1.1.6-3.3 1.5-6.2 1.4H1.5l-.2 1c-.6 3.6-.6 14.9 7 23.6 5.8 6.7 14.4 10.1 25.7 10.1 24.5 0 42.6-11.3 51.1-31.8 3.3.1 10.5 0 14.2-7 .2-.2.6-1.1.7-1.4l.3-.9-3-1.6zm-56.4-6.8H30.1V34h10.8V23.5zm0-13.2H30.1v10.5h10.8V10.3zm13.2 13.2H43.3V34h10.8V23.5zm-26.4 0H16.9V34h10.8V23.5zm-13.3 0H3.7V34h10.8V23.5zm26.5-13.2H30.1V10.5h10.8V10.3zm13.2 0H43.3v10.5h10.8V10.3zM56.5 23.5H45.7V34h10.8V23.5zm13.3 0H59V34h10.8V23.5z"/>
    </svg>
  ),
  "Git": (
    <svg viewBox="0 0 92 92" className="w-10 h-10">
      <path fill="#F05032" d="M90.156 41.965L50.036 1.848a5.918 5.918 0 00-8.372 0l-8.328 8.332 10.566 10.566a7.03 7.03 0 017.23 1.684 7.043 7.043 0 011.673 7.277l10.183 10.184a7.026 7.026 0 017.278 1.672 7.04 7.04 0 010 9.957 7.045 7.045 0 01-9.961 0 7.038 7.038 0 01-1.532-7.661l-9.5-9.499v24.997a7.04 7.04 0 011.86 11.29 7.04 7.04 0 01-9.957 0 7.04 7.04 0 010-9.958 7.034 7.034 0 012.308-1.539V33.926a7.001 7.001 0 01-2.308-1.535 7.049 7.049 0 01-1.516-7.7L31.888 14.43 1.734 44.586a5.918 5.918 0 000 8.37L41.852 90.97a5.92 5.92 0 008.37 0l39.934-39.934a5.925 5.925 0 000-8.071"/>
    </svg>
  ),
  "Linux": (
    <svg viewBox="0 0 24 24" className="w-10 h-10" fill="#FCC624">
      <path d="M12.504 0c-.155 0-.315.008-.48.021-4.226.333-3.105 4.807-3.17 6.298-.076 1.092-.3 1.953-1.05 3.02-.885 1.051-2.127 2.75-2.716 4.521-.278.832-.41 1.684-.287 2.489a.424.424 0 00-.11.135c-.26.268-.45.6-.663.839-.199.199-.485.267-.797.4-.313.136-.658.269-.864.68-.09.189-.136.394-.132.602 0 .199.027.4.055.53-.052.5.037.947.187 1.35.149.403.323.71.475.9a.765.765 0 00.08.085h2.52c.03.117.114.377.26.652a3.14 3.14 0 001.053 1.218 2.748 2.748 0 001.544.425 2.775 2.775 0 001.545-.425 3.1 3.1 0 001.054-1.218 3.026 3.026 0 00.26-.652h2.52a.765.765 0 00.08-.085 3.3 3.3 0 00.475-.9c.15-.403.24-.85.187-1.35.028-.13.055-.33.055-.53a1.27 1.27 0 00-.132-.602c-.206-.411-.551-.544-.864-.68-.312-.133-.598-.201-.797-.4-.213-.239-.404-.571-.663-.839a.424.424 0 00-.11-.135c.122-.805-.01-1.657-.287-2.489-.589-1.771-1.831-3.47-2.716-4.521-.75-1.067-.974-1.928-1.05-3.02-.066-1.49 1.056-5.964-3.17-6.298z"/>
    </svg>
  ),
  "REST APIs": (
    <svg viewBox="0 0 24 24" className="w-10 h-10">
      <rect width="24" height="24" rx="4" fill="#FF6B35"/>
      <text x="12" y="16" textAnchor="middle" fill="white" fontSize="7" fontWeight="bold" fontFamily="monospace">REST</text>
    </svg>
  ),
  "System Design": (
    <svg viewBox="0 0 24 24" className="w-10 h-10" fill="none" stroke="#A78BFA" strokeWidth="1.5">
      <rect x="2" y="3" width="6" height="6" rx="1"/><rect x="16" y="3" width="6" height="6" rx="1"/><rect x="9" y="15" width="6" height="6" rx="1"/>
      <path d="M5 9v3h14V9M12 12v3"/>
    </svg>
  ),
  // Nontechnical
  "Problem Solving": (
    <svg viewBox="0 0 24 24" className="w-10 h-10" fill="none">
      <circle cx="12" cy="12" r="10" fill="#F59E0B" opacity=".2"/>
      <path stroke="#F59E0B" strokeWidth="1.5" strokeLinecap="round" d="M9.09 9a3 3 0 015.83 1c0 2-3 3-3 3M12 17h.01"/>
    </svg>
  ),
  "Technical Writing": (
    <svg viewBox="0 0 24 24" className="w-10 h-10" fill="none" stroke="#60A5FA" strokeWidth="1.5" strokeLinecap="round">
      <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/><polyline points="10 9 9 9 8 9"/>
    </svg>
  ),
  "Collaboration": (
    <svg viewBox="0 0 24 24" className="w-10 h-10" fill="none" stroke="#34D399" strokeWidth="1.5" strokeLinecap="round">
      <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 00-3-3.87"/><path d="M16 3.13a4 4 0 010 7.75"/>
    </svg>
  ),
  "Adaptability": (
    <svg viewBox="0 0 24 24" className="w-10 h-10" fill="none" stroke="#F472B6" strokeWidth="1.5" strokeLinecap="round">
      <polyline points="23 4 23 10 17 10"/><polyline points="1 20 1 14 7 14"/>
      <path d="M3.51 9a9 9 0 0114.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0020.49 15"/>
    </svg>
  ),
  "Critical Thinking": (
    <svg viewBox="0 0 24 24" className="w-10 h-10" fill="none" stroke="#A78BFA" strokeWidth="1.5" strokeLinecap="round">
      <path d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"/>
    </svg>
  ),
  "Self-Management": (
    <svg viewBox="0 0 24 24" className="w-10 h-10" fill="none" stroke="#FB923C" strokeWidth="1.5" strokeLinecap="round">
      <circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/>
    </svg>
  ),
  "Mentorship": (
    <svg viewBox="0 0 24 24" className="w-10 h-10" fill="none" stroke="#38BDF8" strokeWidth="1.5" strokeLinecap="round">
      <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"/><circle cx="9" cy="7" r="4"/>
      <line x1="19" y1="8" x2="19" y2="14"/><line x1="22" y1="11" x2="16" y2="11"/>
    </svg>
  ),
  "Attention to Detail": (
    <svg viewBox="0 0 24 24" className="w-10 h-10" fill="none" stroke="#FBBF24" strokeWidth="1.5" strokeLinecap="round">
      <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/>
    </svg>
  ),
};

// ─── Skill Groups ─────────────────────────────────────────────────────────────

const skillGroups = [
  {
    title: "Backend Development",
    color: "#009688",
    items: ["Python", "FastAPI", "REST APIs", "PostgreSQL"],
  },
  {
    title: "Frontend Development",
    color: "#61DAFB",
    items: ["Next.js", "React", "TypeScript", "Tailwind CSS"],
  },
  {
    title: "DevOps & Systems",
    color: "#F05032",
    items: ["Docker", "Git", "Linux", "System Design"],
  },
  {
    title: "Soft Skills",
    color: "#F59E0B",
    items: [
      "Problem Solving",
      "Collaboration",
      "Adaptability",
      "Critical Thinking",
      "Technical Writing",
      "Self-Management",
      "Mentorship",
      "Attention to Detail",
    ],
  },
];

// ─── Components ──────────────────────────────────────────────────────────────

function useReveal<T extends HTMLElement>() {
  const ref = useRef<T>(null);
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
  return ref;
}

function SkillChip({ name, index }: { name: string; index: number }) {
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

  const icon = BrandIcons[name];

  return (
    <div
      ref={ref}
      className="skill-card reveal group flex flex-col items-center gap-3 p-4 rounded-xl bg-bg-3 border border-white/[0.07] hover:border-white/[0.18] transition-all cursor-default hover:-translate-y-1"
      style={{ transitionDelay: `${index * 60}ms` }}
    >
      <div className="w-14 h-14 rounded-xl bg-surface flex items-center justify-center group-hover:scale-110 transition-transform">
        {icon ?? (
          <span className="text-[0.65rem] font-bold text-green-400 text-center leading-tight px-1">{name}</span>
        )}
      </div>
      <span className="text-[0.72rem] font-semibold text-ink-2 text-center leading-tight group-hover:text-ink transition-colors">
        {name}
      </span>
    </div>
  );
}

function GroupCard({
  title,
  color,
  items,
  delay,
}: {
  title: string;
  color: string;
  items: string[];
  delay: number;
}) {
  const ref = useReveal<HTMLDivElement>();

  return (
    <div
      ref={ref}
      className="reveal group relative rounded-2xl bg-bg-2 border border-white/[0.07] p-6 hover:border-white/[0.14] transition-colors overflow-hidden"
      style={{ transitionDelay: `${delay}ms` }}
    >
      {/* Top accent bar */}
      <div
        className="absolute top-0 left-0 right-0 h-[3px] opacity-70 group-hover:opacity-100 transition-opacity"
        style={{ background: `linear-gradient(to right, ${color}, transparent)` }}
      />

      {/* Background glow */}
      <div
        className="absolute top-0 left-0 w-48 h-48 rounded-full pointer-events-none -translate-x-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity"
        style={{ background: `radial-gradient(circle, ${color}14, transparent 70%)` }}
      />

      <h3
        className="relative z-10 text-[0.8rem] font-bold tracking-[0.15em] uppercase mb-5"
        style={{ color }}
      >
        {title}
      </h3>

      <div className="relative z-10 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
        {items.map((name, i) => (
          <SkillChip key={name} name={name} index={i} />
        ))}
      </div>
    </div>
  );
}


export default function Skills() {
  const headerRef = useReveal<HTMLDivElement>();

  return (
    <section id="skills" className="relative z-10 bg-bg py-20 md:py-28 px-6 md:px-16">
      {/* Gold hairline at top */}

      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[480px] h-px pointer-events-none"
        style={{ background: "linear-gradient(to right, transparent, rgba(200,169,110,0.18), transparent)" }}
      />

      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div
          ref={headerRef}
          className="reveal mb-12 md:mb-16 flex flex-col sm:flex-row sm:items-end justify-between gap-6"
        >
          <div>
            <SectionLabel num="02" title="Skills" />
            <h2 className="font-display text-[clamp(2.4rem,4vw,3.8rem)] font-bold leading-[1.05] text-ink">
              Skills &amp;<br />
              <em className="italic text-green-400">Technologies</em>
            </h2>
          </div>
          <p className="text-[0.95rem] text-ink-2 max-w-xs sm:text-right leading-[1.8]">
            Tools and disciplines I use to design, build, and ship production-grade systems.
          </p>
        </div>

        {/* Group cards */}
        <div className="flex flex-col gap-5">
          {skillGroups.map((group, i) => (
            <GroupCard
              key={group.title}
              title={group.title}
              color={group.color}
              items={group.items}
              delay={i * 100}
            />
          ))}
        </div>
      </div>
    </section>
  );
}