"use client";

import Image from "next/image";
import SectionLabel from "@/app/components/SectionLabel";
import { useScrollReveal } from "../hooks/useScrollReveal";

const INFO_ROW = [
  { key: "Role", val: "Software Developer" },
  { key: "Focus", val: "Backend Systems · Web Apps" },
  { key: "Based In", val: "Lilongwe, Malawi" },
];

export default function About() {
  const photoRef = useScrollReveal<HTMLDivElement>();
  const contentRef = useScrollReveal<HTMLDivElement>();

  return (
    <section
      id="about"
      className="relative z-10 bg-black py-20 md:py-28 px-6 md:px-16 border-t border-white/[0.05]"
    >
      <div className="max-w-7xl mx-auto">
        <SectionLabel num="01" title="About" tag="The person behind the code" />

        <h2 className="font-display text-[clamp(2.2rem,3.6vw,3.4rem)] font-bold leading-[1.05] text-white mb-10 md:mb-14">
         Who Am I?
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-[minmax(0,340px)_1fr] gap-10 md:gap-16 items-start">
          {/* Photo card */}
          <div ref={photoRef} className="reveal">
            <div className="relative rounded-2xl overflow-hidden border border-white/10 bg-white/[0.02] aspect-[4/5]">
              <Image
                src="/hinid.jpg"
                alt="Yamikani Suwedi"
                fill
                className="object-cover object-center grayscale"
                sizes="(max-width: 768px) 100vw, 340px"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/0 to-black/10" />

              <span className="absolute top-4 right-4 w-2 h-2 rounded-full bg-white/50" />

              <div className="absolute bottom-4 left-4 inline-flex items-center px-3 py-1.5 rounded-full bg-black/60 backdrop-blur-sm border border-white/10 text-[0.65rem] font-bold tracking-widest uppercase text-white/70">
                Software Developer
              </div>
              <span className="absolute bottom-4 right-4 text-[0.65rem] font-semibold tracking-widest text-white/40">
                01 / 01
              </span>
            </div>
          </div>

          {/* Content */}
          <div ref={contentRef} className="reveal reveal-d2">
            <span className="block text-[0.7rem] font-bold tracking-[0.2em] uppercase text-white/30 mb-3">
           
            </span>
            <h3 className="font-display text-[clamp(1.6rem,2.6vw,2.4rem)] font-bold leading-[1.15] text-white mb-6">
             Building reliable systems
              <br />
              <span className="text-white/50">for real-world problems.</span>
            </h3>

            <div className="space-y-4 text-[0.95rem] text-white/40 leading-[1.9] max-w-xl">
              <p>
                I&apos;m a Software developer based in{" "}
                <strong className="text-white font-semibold">Malawi</strong>,
                focused on building backend systems that power real-world
                institutions — from healthcare inventory platforms to
                transport ticketing and local services marketplaces.
              </p>
              <p>
                My approach is methodical: understand the domain deeply,
                model data with care, and build outward toward interfaces
                people actually enjoy using. I care about{" "}
                <strong className="text-white font-semibold">
                  clean APIs, sound architecture, and maintainability
                </strong>{" "}
                at every layer.
              </p>
            </div>

            <div className="mt-10 pt-8 border-t border-white/[0.06] grid grid-cols-3 gap-6">
              {INFO_ROW.map(({ key, val }) => (
                <div key={key}>
                  <p className="text-[0.65rem] font-bold tracking-[0.15em] uppercase text-white/25 mb-1.5">
                    {key}
                  </p>
                  <p className="text-[0.85rem] sm:text-[0.9rem] font-semibold text-white/80 leading-snug">
                    {val}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}