"use client";

import Image from "next/image";

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center px-4 sm:px-8 md:px-16 pt-20 pb-16 overflow-hidden bg-black"
    >
      {/* Subtle grid */}
      <div
        className="absolute inset-0 z-0 pointer-events-none opacity-[0.03]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)
          `,
          backgroundSize: "60px 60px",
        }}
      />

      {/* Glow */}
      <div
        className="absolute top-1/4 right-[5%] w-[500px] h-[500px] rounded-full pointer-events-none z-0 opacity-20"
        style={{
          background: "radial-gradient(circle, rgba(255,255,255,0.06) 0%, transparent 70%)",
        }}
      />

      <div className="relative z-10 max-w-7xl w-full mx-auto flex flex-col-reverse lg:grid lg:grid-cols-[1fr_auto] gap-10 lg:gap-16 items-center">
        {/* Left */}
        <div className="text-center lg:text-left">
          {/* Heading */}
          <h1 className="font-display leading-[1.08] tracking-tight text-[clamp(1.8rem,4vw,3.4rem)] font-bold text-white animate-[fadeUp_0.8s_cubic-bezier(0.22,1,0.36,1)_0.2s_both]">
            Software Developer building{" "} <br />
            <span className="text-white/50">reliable systems</span>
          </h1>

          {/* Subtitle */}
          <p className="mt-4 font-display text-[1rem] sm:text-[1.15rem] text-white/60 italic animate-[fadeUp_0.8s_cubic-bezier(0.22,1,0.36,1)_0.25s_both]">
            I build things that work — reliably, cleanly, and scale.
          </p>

          {/* Capability titles */}
          <div className="mt-5 flex flex-wrap items-center justify-center lg:justify-start gap-2 animate-[fadeUp_0.8s_cubic-bezier(0.22,1,0.36,1)_0.35s_both]">
            {["System Architecture", "API Design", "Next.js & Tailwind", "Database Design"].map(
              (title) => (
                <span
                  key={title}
                  className="text-[0.65rem] font-semibold tracking-wider text-white/50 bg-white/[0.04] border border-white/10 px-3.5 py-1.5 rounded-full"
                >
                  {title}
                </span>
              )
            )}
          </div>

          {/* Description */}
          <p className="mt-5 text-[0.9rem] sm:text-[0.95rem] text-white/40 leading-[1.7] max-w-[500px] mx-auto lg:mx-0 animate-[fadeUp_0.8s_cubic-bezier(0.22,1,0.36,1)_0.4s_both]">
            From academic systems to business platforms and APIs, I build solutions designed for real-world use.
          </p>

          {/* Buttons - Cleaner & More Compact */}
          <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3 mt-7 animate-[fadeUp_0.8s_cubic-bezier(0.22,1,0.36,1)_0.5s_both]">
            <a
              href="#projects"
              className="group inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-white text-black text-[0.8rem] font-semibold transition-all duration-300 ease-out hover:bg-white/90 hover:scale-[1.02] hover:shadow-[0_8px_25px_rgba(255,255,255,0.1)] active:scale-[0.98]"
            >
              Explore My Work
              <svg
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="transition-transform duration-300 group-hover:translate-x-0.5"
              >
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </a>

            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full border border-white/15 bg-white/[0.02] text-white/60 text-[0.8rem] font-medium transition-all duration-300 ease-out hover:border-white/30 hover:bg-white/[0.06] hover:text-white active:scale-[0.98]"
            >
              Let's Connect
            </a>
          </div>
        </div>

        {/* Right: Image */}
        <div className="animate-[fadeUp_0.8s_cubic-bezier(0.22,1,0.36,1)_0.3s_both]">
          <div className="relative group">
            <div className="absolute -inset-6 rounded-full bg-gradient-to-br from-white/5 via-white/0 to-transparent opacity-0 group-hover:opacity-100 blur-2xl transition-opacity duration-700" />

            <div className="relative w-52 h-52 sm:w-64 sm:h-64 md:w-72 md:h-72 rounded-full overflow-hidden border border-white/10 shadow-2xl transition-all duration-500 group-hover:border-white/20 group-hover:scale-[1.02]">
              <div className="absolute inset-0 bg-gradient-to-br from-white/5 via-transparent to-black/20 z-10 rounded-full" />

              <Image
                src="/_d.jpg"
                alt="Yamikani Suwedi"
                fill
                className="object-cover object-center transition-all duration-700 group-hover:scale-105"
                sizes="(max-width: 640px) 208px, (max-width: 768px) 256px, 288px"
                priority
                quality={95}
              />

              <div className="absolute inset-0 rounded-full ring-1 ring-white/0 group-hover:ring-white/20 transition-all duration-700 pointer-events-none" />
            </div>

            <div className="absolute -top-1 -right-1 w-2 h-2 rounded-full bg-white/40" />
            <div className="absolute -bottom-1 -left-1 w-1.5 h-1.5 rounded-full bg-white/20" />
          </div>
        </div>
      </div>

      {/* Scroll hint */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-[fadeUp_1s_cubic-bezier(0.22,1,0.36,1)_1s_both]">
        <span className="text-[0.55rem] tracking-[0.2em] uppercase text-white/20">
          Scroll
        </span>
        <div className="w-px h-8 bg-gradient-to-b from-white/30 to-transparent animate-scroll-drop" />
      </div>
    </section>
  );
}