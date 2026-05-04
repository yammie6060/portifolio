import Image from "next/image";

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center px-4 sm:px-8 md:px-16 pt-36 pb-20 overflow-hidden bg-bg"
    >
      {/* Grid background */}
      <div className="absolute inset-0 z-0 pointer-events-none" />

      {/* Glow orb */}
      <div
        className="absolute top-1/4 right-[8%] w-[560px] h-[560px] rounded-full pointer-events-none z-0"
        style={{
          background:
            "radial-gradient(circle, rgba(200,169,110,0.07) 0%, transparent 70%)",
        }}
      />

      {/* Content */}
      <div className="relative z-10 max-w-7xl w-full mx-auto flex flex-col-reverse lg:grid lg:grid-cols-[1fr_auto] gap-8 lg:gap-16 items-center">
        {/* Left: text */}
        <div className="text-center lg:text-left">
          {/* Eyebrow */}
          <div className="inline-flex items-center gap-2 mb-6 animate-[fadeUp_0.8s_cubic-bezier(0.22,1,0.36,1)_0.1s_both]">
            <span className="w-1.5 h-1.5 rounded-full bg-green-400/10 animate-pulse-dot" />
            <span className="text-[1.7rem] font-bold tracking-[0.18em] text-green-400">
              Hi there, I&apos;m
            </span>
          </div>

          {/* Headline */}
          <h1 className="font-display leading-[0.95] tracking-tight animate-[fadeUp_0.8s_cubic-bezier(0.22,1,0.36,1)_0.2s_both]">
            <span className="block text-[clamp(1.5rem,5vw,5.5rem)] font-bold text-ink">
              Yamikani
            </span>
            <span className="block text-[clamp(1.5rem,5vw,5.5rem)] font-bold italic text-green-400">
              Suwedi
            </span>
            <span
              className="block text-[clamp(2.5rem,7vw,7.5rem)] font-bold text-transparent"
              style={{ WebkitTextStroke: "1px rgba(240,238,232,0.2)" }}
            >
              Dev.
            </span>
          </h1>

          {/* Description */}
          <p className="mt-7 text-[0.95rem] sm:text-[1.05rem] text-ink-2 leading-[1.85] max-w-[500px] mx-auto lg:mx-0 animate-[fadeUp_0.8s_cubic-bezier(0.22,1,0.36,1)_0.35s_both]">
            Full-stack developer specialising in scalable backend systems and
            polished web interfaces. I build things that work — reliably,
            cleanly, and at scale.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 mt-9 animate-[fadeUp_0.8s_cubic-bezier(0.22,1,0.36,1)_0.45s_both]">
            <a
              href="#projects"
              className="inline-flex items-center gap-2 px-7 py-3.5 bg-green-500 text-bg rounded-sm text-[0.8rem] font-bold tracking-[0.08em] uppercase transition-all hover:-translate-y-0.5 hover:shadow-[0_12px_30px_rgba(200,169,110,0.25)]"
            >
              View Work
              <svg
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
              >
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-7 py-3.5 bg-transparent text-ink-2 border border-white/20 rounded-sm text-[0.8rem] font-semibold tracking-[0.08em] uppercase transition-all hover:border-white hover:text-ink hover:bg-white/[0.04]"
            >
              Contact Me
            </a>
          </div>
        </div>

        {/* Right: Image */}
        <div className="animate-[fadeUp_0.8s_cubic-bezier(0.22,1,0.36,1)_0.3s_both]">
          <div className="relative group">
            {/* Outer glow ring */}
            <div className="absolute -inset-4 rounded-full bg-gradient-to-r from-green-400/20 via-green-400/10 to-transparent opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-500" />
            
            {/* Image container */}
            <div className="relative w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96 rounded-full overflow-hidden border-2 border-white/10 shadow-2xl transition-all duration-500 group-hover:border-green-400/30 group-hover:scale-105">
              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-green via-transparent to-green z-10 rounded-full" />
              
              <Image
                src="/_d.jpg" 
                alt="Yamikani Suwedi"
                fill
                className="object-cover object-center transition-all duration-700 group-hover:scale-110"
                sizes="(max-width: 640px) 256px, (max-width: 768px) 320px, 384px"
                priority
                quality={95}
              />
              
              {/* Decorative ring */}
              <div className="absolute inset-0 rounded-full ring-1 ring-green-400/0 group-hover:ring-green-400/40 transition-all duration-500 pointer-events-none" />
            </div>
            
            {/* Accent dots */}
            <div className="absolute -top-2 -right-2 w-3 h-3 rounded-full bg-green-400/60 animate-pulse" />
            <div className="absolute -bottom-1 -left-1 w-2 h-2 rounded-full bg-green-400/40" />
          </div>
        </div>
      </div>

      {/* Scroll hint */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-[fadeUp_1s_cubic-bezier(0.22,1,0.36,1)_1s_both]">
        <span className="text-[0.65rem] tracking-[0.15em] uppercase text-ink-3">
          Scroll
        </span>
        <div className="w-px h-12 bg-gradient-to-b from-green-400 to-transparent animate-scroll-drop" />
      </div>
    </section>
  );
}