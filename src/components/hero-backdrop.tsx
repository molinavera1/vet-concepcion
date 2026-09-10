"use client";

import { useEffect, useState } from "react";

export function HeroBackdrop() {
  const [show, setShow] = useState(true);

  useEffect(() => {
    const motion = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (motion.matches) setShow(false);
  }, []);

  if (!show) return null;

  return (
    <div className="pointer-events-none absolute inset-0">
      <video
        autoPlay
        muted
        loop
        playsInline
        onError={() => setShow(false)}
        className="h-full w-full object-cover object-center brightness-[0.82] contrast-[0.95] saturate-[0.4] sepia-[0.18]"
      >
        <source src="/hero.mp4" type="video/mp4" />
      </video>
      <div className="absolute inset-0 bg-[#3a3a36]/28" />
    </div>
  );
}
