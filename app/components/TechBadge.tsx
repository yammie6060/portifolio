// app/components/TechBadge.tsx
import type { TechTag } from "../types";

const variantClasses: Record<TechTag["variant"], string> = {
  blue:  "bg-white/5 text-white/60 border border-white/10",
  green: "bg-white/5 text-white/60 border border-white/10",
  gold:  "bg-white/5 text-white/60 border border-white/10",
};

export default function TechBadge({ label, variant }: TechTag) {
  return (
    <span
      className={[
        "inline-block px-3 py-1 rounded-full text-[0.68rem] font-semibold tracking-wide",
        variantClasses[variant],
      ].join(" ")}
    >
      {label}
    </span>
  );
}