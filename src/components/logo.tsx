export function Logo({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 40 40"
      className={className}
      aria-hidden
    >
      <rect width="40" height="40" rx="12" className="fill-forest" />
      <path
        fill="var(--card)"
        d="M20 7.2 33 18.4h-3.2V30.2A1.8 1.8 0 0 1 28 32H12a1.8 1.8 0 0 1-1.8-1.8V18.4H7L20 7.2Z"
      />
      <ellipse cx="20" cy="24.6" rx="4.1" ry="3.4" className="fill-forest" />
      <ellipse cx="15.6" cy="20.4" rx="1.7" ry="2.2" className="fill-forest" />
      <ellipse cx="18.4" cy="18.6" rx="1.7" ry="2.2" className="fill-forest" />
      <ellipse cx="21.8" cy="18.6" rx="1.7" ry="2.2" className="fill-forest" />
      <ellipse cx="24.4" cy="20.4" rx="1.7" ry="2.2" className="fill-forest" />
    </svg>
  );
}
