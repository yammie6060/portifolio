import type { TechTag } from "../types";

const variantClasses: Record<TechTag["variant"], string> = {
  blue:  "bg-[rgba(79,142,247,0.10)]  text-[#4f8ef7] border border-[rgba(79,142,247,0.2)]",
  green: "bg-[rgba(78,203,141,0.10)]  text-[#4ecb8d] border border-[rgba(78,203,141,0.2)]",
  gold:  "bg-[rgba(200,169,110,0.12)] text-green-400       border border-[rgba(200,169,110,0.2)]",
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