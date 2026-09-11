"use client";

export function Marquee({ items }: { items: readonly string[] }) {
  const row = [...items, ...items];

  return (
    <div className="relative overflow-hidden py-1" aria-hidden>
      <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-10 bg-gradient-to-r from-background to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-10 bg-gradient-to-l from-background to-transparent" />
      <div className="animate-marquee flex w-max gap-3 hover:[animation-play-state:paused]">
        {row.map((item, i) => (
          <span
            key={`${item}-${i}`}
            className="rounded-full border border-line bg-card px-4 py-2 text-sm text-forest shadow-sm"
          >
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}
