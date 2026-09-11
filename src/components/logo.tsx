export function Logo({
  className,
  onDark = false,
}: {
  className?: string;
  onDark?: boolean;
}) {
  return (
    <img
      src="/logo.png?v=2"
      alt=""
      className={`${className ?? "h-10 w-10"} object-contain ${onDark ? "brightness-0 invert" : ""}`.trim()}
    />
  );
}
