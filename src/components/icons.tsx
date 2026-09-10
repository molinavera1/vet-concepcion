type IconName =
  | "stethoscope"
  | "syringe"
  | "shield"
  | "flask"
  | "chip"
  | "school"
  | "instagram"
  | "whatsapp"
  | "linkedin";

const paths: Record<
  Exclude<IconName, "instagram" | "whatsapp" | "linkedin">,
  string
> = {
  stethoscope:
    "M8.5 4v6.5a3.5 3.5 0 1 0 7 0V4M8.5 4H7m1.5 0H10m5.5 0H17m-1.5 0H14M4 14a3 3 0 0 0 3 3h.5a4.5 4.5 0 0 0 8.9-1",
  syringe:
    "M14.5 3.5 17 6m-8 8-4 4m1.5-12.5 8 8M9 7.5l1.5-1.5 6 6-1.5 1.5-6-6Z",
  shield:
    "M12 3 5 6.5v5.2c0 4 3.1 6.8 7 8.3 3.9-1.5 7-4.3 7-8.3V6.5L12 3Zm0 5.5v8",
  flask:
    "M9 3h6M10 3v5.2L6.2 16a3 3 0 0 0 2.6 4.5h6.4A3 3 0 0 0 17.8 16L13 8.2V3",
  chip: "M12 8.5a3.5 3.5 0 1 1 0 7 3.5 3.5 0 0 1 0-7Zm0-4v2m0 11v2m8.5-6.5h-2m-11 0h-2m13.2-4.7-1.4 1.4M7.7 16.8 6.3 18.2m11 0-1.4-1.4M7.7 7.2 6.3 5.8",
  school:
    "M3 10.5 12 5l9 5.5M5 11.5V18h14v-6.5M12 19v-5",
};

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
  name: IconName;
  className?: string;
}) {
  const size = className ?? "h-5 w-5";

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
        <rect x="1" y="1" width="22" height="22" rx="6" />
        <circle cx="12" cy="12" r="5.2" />
        <circle cx="17.6" cy="6.4" r="1.15" fill="currentColor" stroke="none" />
      </svg>
    );
  }

  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={size}
      aria-hidden
    >
      <path d={paths[name]} />
    </svg>
  );
}
