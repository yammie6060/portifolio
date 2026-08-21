// app/components/Nav.tsx
"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

const NAV_LINKS = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  useEffect(() => {
    const handler = () => {
      if (window.innerWidth >= 768) setOpen(false);
    };
    window.addEventListener("resize", handler);
    return () => window.removeEventListener("resize", handler);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <nav
        className={[
          "fixed top-0 left-0 right-0 z-50 px-4 sm:px-8 md:px-12 py-3 sm:py-4 transition-all duration-300",
          scrolled || open
            ? "bg-black/80 backdrop-blur-xl border-b border-white/5"
            : "bg-transparent",
        ].join(" ")}
      >
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          {/* Logo */}
          <Link 
            href="#hero" 
            className="flex items-center gap-2 z-50 shrink-0"
          >
            <span className="font-display text-xl font-bold tracking-wide text-white">
              Y<span className="text-white/30">.</span>Suwedi
            </span>
          </Link>

          {/* Desktop Navigation - Centered */}
          <ul className="hidden md:flex items-center gap-8 list-none m-0 p-0">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="text-[0.85rem] font-medium tracking-wide text-white/50 transition-colors hover:text-white"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          {/* CTA Button - Visible on desktop */}
          <a
            href="#contact"
            className="hidden md:inline-flex items-center rounded-full bg-white text-black px-6 py-2 text-[0.8rem] font-semibold tracking-wide transition-all hover:bg-white/90 hover:scale-[1.02]"
          >
            Get in touch
          </a>

          {/* Mobile Menu Button - Only shows on small screens */}
          <button
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            className="md:hidden flex flex-col gap-1.5 z-50 p-1"
          >
            <span
              className={[
                "block h-0.5 bg-white transition-all duration-300 origin-center",
                open ? "w-6 rotate-45 translate-y-[6px]" : "w-6",
              ].join(" ")}
            />
            <span
              className={[
                "block h-0.5 bg-white transition-all duration-300",
                open ? "w-0 opacity-0" : "w-6",
              ].join(" ")}
            />
            <span
              className={[
                "block h-0.5 bg-white transition-all duration-300 origin-center",
                open ? "w-6 -rotate-45 -translate-y-[6px]" : "w-6",
              ].join(" ")}
            />
          </button>
        </div>
      </nav>

      {/* Mobile Navigation - Full screen overlay */}
      <div
        aria-hidden={!open}
        className={[
          "fixed inset-0 z-40 flex flex-col items-center justify-center bg-black/98 backdrop-blur-2xl transition-all duration-300 md:hidden",
          open ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none",
        ].join(" ")}
      >
        <ul className="flex flex-col items-center gap-8 list-none m-0 p-0">
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                onClick={() => setOpen(false)}
                className="block text-[1.8rem] font-medium tracking-wide text-white/50 hover:text-white transition-colors"
              >
                {link.label}
              </a>
            </li>
          ))}
          <li className="mt-4">
            <a
              href="#contact"
              onClick={() => setOpen(false)}
              className="inline-block rounded-full bg-white text-black px-10 py-3 text-[0.9rem] font-semibold tracking-wide transition-colors hover:bg-white/90"
            >
              Get in touch
            </a>
          </li>
        </ul>
      </div>
    </>
  );
}