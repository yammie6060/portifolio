import Link from "next/link";

const LINKS = [
  { label: "About",    href: "#about"    },
  { label: "Projects", href: "#projects" },
  { label: "Contact",  href: "#contact"  },
];

export default function Footer() {
  return (
    <footer className="relative z-10 bg-bg border-t border-white/[0.07] px-6 md:px-16 py-8">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-5 sm:gap-4">

        {/* Logo */}
        <Link href="#hero" className="font-display text-xl font-bold text-ink shrink-0">
          Y<span className="text-gold">.</span>Suwedi
        </Link>

        {/* Copyright — centre on desktop, stacked on mobile */}
        <p className="text-[0.75rem] text-ink-3 tracking-wide text-center order-last sm:order-none">
          &copy; {new Date().getFullYear()} Yamikani Suwedi · Lilongwe, Malawi
        </p>

        {/* Nav links */}
        <div className="flex items-center gap-5 sm:gap-6 shrink-0">
          {LINKS.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-[0.72rem] text-ink-3 tracking-[0.06em] uppercase transition-colors hover:text-gold"
            >
              {l.label}
            </a>
          ))}
        </div>

      </div>
    </footer>
  );
}