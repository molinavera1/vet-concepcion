import type { ReactNode } from "react";

type DoodleName =
  | "stethoscope"
  | "syringe"
  | "shield"
  | "flask"
  | "chip"
  | "school"
  | "home"
  | "plus"
  | "instagram"
  | "whatsapp"
  | "linkedin";

export function Paw({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 32 32" className={className} fill="currentColor" aria-hidden>
      <ellipse cx="8" cy="10" rx="3.1" ry="4" transform="rotate(-22 8 10)" />
      <ellipse cx="14.5" cy="6.8" rx="3.1" ry="4" />
      <ellipse cx="21.5" cy="8.2" rx="3" ry="3.9" transform="rotate(18 21.5 8.2)" />
      <ellipse cx="26.2" cy="13.4" rx="2.6" ry="3.4" transform="rotate(36 26.2 13.4)" />
      <ellipse cx="16.4" cy="21.4" rx="7.2" ry="6.4" />
    </svg>
  );
}

function DoodleSvg({
  className,
  children,
}: {
  className?: string;
  children: ReactNode;
}) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className ?? "h-8 w-8"}
      aria-hidden
    >
      {children}
    </svg>
  );
}

const doodles: Record<
  Exclude<DoodleName, "instagram" | "whatsapp" | "linkedin">,
  ReactNode
> = {
  stethoscope: (
    <>
      <path d="M4.8 2.3A.3.3 0 1 0 5 2H4a2 2 0 0 0-2 2v5a6 6 0 0 0 6 6 6 6 0 0 0 6-6V4a2 2 0 0 0-2-2h-1a.2.2 0 0 0-.2.3" />
      <path d="M8 15a6 6 0 0 0 6 6 6 6 0 0 0 6-6v-3" />
      <circle cx="20" cy="10" r="2" />
    </>
  ),
  syringe: (
    <>
      <path d="m18 3 3 3" />
      <path d="m16.5 6.5 3.2-3.2" />
      <path d="M19 8.5 9 18.5 5.5 15 15.5 5" />
      <path d="M8.2 13.2h4.2" />
      <path d="m5.2 18.8-2.4 2.4" />
    </>
  ),
  shield: (
    <>
      <path d="M12 3.2 5 6.2v6.4c0 4.2 3.1 7.2 7 8.8 3.9-1.6 7-4.6 7-8.8V6.2L12 3.2Z" />
      <path d="m8.8 13 2.4 2.4 4.2-4.4" />
    </>
  ),
  flask: (
    <>
      <path d="M9.2 3.2h5.6" />
      <path d="M10.4 3.2v5L5.8 16.4A3.1 3.1 0 0 0 8.5 21h7a3.1 3.1 0 0 0 2.7-4.6L13.6 8.2v-5" />
      <path d="M7.2 16.2h9.6" />
    </>
  ),
  chip: (
    <>
      <rect x="7.2" y="8.2" width="9.6" height="7.6" rx="1.8" />
      <path d="M12 5.4v2.2M12 16.4v2.2M4.8 12h2.2M17 12h2.2" />
      <circle cx="12" cy="12" r="1.5" />
    </>
  ),
  school: (
    <>
      <path d="M3.2 11 12 5.6 20.8 11 12 16.4 3.2 11Z" />
      <path d="M7.2 13.2v4.6c2.2 1.5 7.4 1.5 9.6 0v-4.6" />
      <path d="M20.6 11.4v6.2" />
    </>
  ),
  home: (
    <>
      <path d="M4 11.6 12 4.4l8 7.2" />
      <path d="M6.4 10.8V20h11.2v-9.2" />
      <path d="M10 20v-5.2h4V20" />
    </>
  ),
  plus: (
    <>
      <circle cx="12" cy="12" r="8.4" />
      <path d="M12 8.2v7.6M8.2 12h7.6" />
    </>
  ),
};

export function StethoscopeGlyph({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.15"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className ?? "h-8 w-8"}
      aria-hidden
    >
      <circle cx="6.2" cy="3.4" r="1.35" fill="currentColor" stroke="none" />
      <circle cx="12.2" cy="3.4" r="1.35" fill="currentColor" stroke="none" />
      <path d="M6.2 3.4v8.1a3 3 0 0 1 6 0V3.4" />
      <path d="M9.2 14.5c0 3.7 2.6 6.6 6.3 6.6A6.3 6.3 0 0 0 21.8 14.8v-2.2" />
      <circle cx="19.6" cy="10.4" r="2.35" />
    </svg>
  );
}

export function WhatsappGlyph({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      className={className ?? "h-5 w-5"}
      fill="currentColor"
      aria-hidden
    >
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.435 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z" />
    </svg>
  );
}

export function Icon({
  name,
  className,
}: {
  name: DoodleName;
  className?: string;
}) {
  const size = className ?? "h-8 w-8";

  if (name === "stethoscope") {
    return <StethoscopeGlyph className={`${size} block`} />;
  }

  if (name === "whatsapp") {
    return <WhatsappGlyph className={`${size} block`} />;
  }

  if (name === "linkedin") {
    return (
      <svg
        viewBox="0 0 24 24"
        className={`${size} block`}
        fill="currentColor"
        aria-hidden
      >
        <path d="M20.45 20.45h-3.55v-5.57c0-1.33 0-3.04-1.85-3.04s-2.14 1.45-2.14 2.94v5.67H9.35V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.29ZM5.34 7.43A2.06 2.06 0 1 1 5.34 3.3a2.06 2.06 0 0 1 0 4.13ZM7.12 20.45H3.55V9h3.57v11.45ZM22.23 0H1.77C.79 0 0 .77 0 1.73v20.54C0 23.23.79 24 1.77 24h20.45C23.2 24 24 23.23 24 22.27V1.73C24 .77 23.2 0 22.23 0Z" />
      </svg>
    );
  }

  if (name === "instagram") {
    return (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
        strokeLinejoin="round"
        className={`${size} block`}
        aria-hidden
      >
        <rect x="2.2" y="2.2" width="19.6" height="19.6" rx="6" />
        <circle cx="12" cy="12" r="4.6" />
        <circle cx="17.3" cy="6.7" r="1" fill="currentColor" stroke="none" />
      </svg>
    );
  }

  return <DoodleSvg className={size}>{doodles[name]}</DoodleSvg>;
}
