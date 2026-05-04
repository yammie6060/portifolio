interface Props {
  num:   string;
  title: string;
}

export default function SectionLabel({ num, title }: Props) {
  return (
    <div className="inline-flex items-center gap-3 mb-5">
      <span className="block w-7 h-px bg-gold" />
      <span className="text-[0.68rem] font-bold tracking-[0.2em] uppercase text-gold">
        {num} — {title}
      </span>
    </div>
  );
}