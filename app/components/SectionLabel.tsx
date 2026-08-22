
export default function SectionLabel({
  num,
  title,
  tag,
}: {
  num: string;
  title: string;
  tag?: string;
}) {
  return (
    <div className="flex items-center justify-between gap-4 mb-4 flex-wrap">
      <div className="flex items-center gap-3">
        <span className="text-[0.7rem] font-bold tracking-[0.15em] text-white/30">
          {num}
        </span>
        <div className="w-8 h-px bg-white/20" />
        <span className="text-[0.7rem] font-semibold tracking-[0.2em] uppercase text-white/40">
          {title}
        </span>
      </div>

      {tag && (
        <span className="text-[0.65rem] font-semibold tracking-[0.18em] uppercase text-white/25">
          {tag}
        </span>
      )}
    </div>
  );
}