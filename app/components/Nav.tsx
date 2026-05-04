"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { NavLink } from "../types";

const NAV_LINKS: NavLink[] = [
  { label: "About",      href: "#about"      },
  { label: "Skills",     href: "#skills"     },
  { label: "Projects",   href: "#projects"   },
  { label: "Education",  href: "#education"  },
  { label: "Experience", href: "#experience" },
  { label: "Hire Me",    href: "#contact", cta: true },
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
    const handler = () => { if (window.innerWidth >= 768) setOpen(false); };
    window.addEventListener("resize", handler);
    return () => window.removeEventListener("resize", handler);
  }, []);

  // Prevent body scroll when drawer is open
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  return (
    <>
      <nav
        className={[
          "fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 md:px-16 py-5 transition-all duration-300",
          scrolled || open
            ? "border-b border-white/[0.07] bg-bg/90 backdrop-blur-xl"
            : "border-b border-transparent",
        ].join(" ")}
      >
        {/* Logo */}
        <Link
          href="#hero"
          className="font-display text-2xl font-bold tracking-wide text-ink z-50"
        >
          Y<span className="text-green-400">.</span>Suwedi
        </Link>

        {/* Desktop links */}
        <ul className="hidden md:flex items-center gap-10 list-none m-0 p-0">
          {NAV_LINKS.map((link) =>
            link.cta ? (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="border border-green-400 rounded-sm px-5 py-2 text-green-400 text-[0.75rem] font-bold tracking-widest uppercase transition-colors hover:bg-green-400 hover:text-bg"
                >
                  {link.label}
                </a>
              </li>
            ) : (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="nav-link relative text-[0.75rem] font-semibold tracking-[0.12em] uppercase text-ink-2 transition-colors hover:text-ink"
                >
                  {link.label}
                </a>
              </li>
            )
          )}
        </ul>

        {/* Hamburger button — mobile only */}
        <button
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          className="relative z-50 md:hidden flex flex-col justify-center items-center w-10 h-10 gap-[5px]"
        >
          <span
            className={[
              "block h-px w-6 bg-ink transition-all duration-300 origin-center",
              open ? "rotate-45 translate-y-[6px]" : "",
            ].join(" ")}
          />
          <span
            className={[
              "block h-px bg-ink transition-all duration-300",
              open ? "w-0 opacity-0" : "w-6 opacity-100",
            ].join(" ")}
          />
          <span
            className={[
              "block h-px w-6 bg-ink transition-all duration-300 origin-center",
              open ? "-rotate-45 -translate-y-[6px]" : "",
            ].join(" ")}
          />
        </button>
      </nav>

      {/* Mobile full-screen drawer */}
      <div
        aria-hidden={!open}
        className={[
          "fixed inset-0 z-40 flex flex-col items-center justify-center bg-bg/[0.97] backdrop-blur-2xl transition-all duration-300 md:hidden",
          open ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none",
        ].join(" ")}
      >
        <ul className="flex flex-col items-center gap-8 list-none m-0 p-0">
          {NAV_LINKS.map((link, i) =>
            link.cta ? (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="inline-block border border-green-400 rounded-sm px-10 py-3.5 text-green-400 text-[0.85rem] font-bold tracking-widest uppercase transition-colors hover:bg-green-400 hover:text-bg"
                  style={{ transitionDelay: open ? `${i * 40}ms` : "0ms" }}
                >
                  {link.label}
                </a>
              </li>
            ) : (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="block text-[1.25rem] font-semibold tracking-[0.12em] uppercase text-ink-2 hover:text-ink transition-colors"
                  style={{ transitionDelay: open ? `${i * 40}ms` : "0ms" }}
                >
                  {link.label}
                </a>
              </li>
            )
          )}
        </ul>
      </div>
    </>
  );
}