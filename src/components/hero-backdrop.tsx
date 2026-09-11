"use client";

import { useEffect, useRef, useState } from "react";

export function HeroBackdrop() {
  const wrapRef = useRef<HTMLDivElement>(null);
  const [show, setShow] = useState(true);

  useEffect(() => {
    const motion = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (motion.matches) {
      setShow(false);
      return;
    }

    const el = wrapRef.current;
    if (!el) return;

    let frame = 0;
    const onScroll = () => {
      if (frame) return;
      frame = window.requestAnimationFrame(() => {
        frame = 0;
        el.style.transform = `translate3d(0, ${window.scrollY * 0.28}px, 0)`;
      });
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      if (frame) window.cancelAnimationFrame(frame);
    };
  }, []);

  if (!show) return null;

  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      <div ref={wrapRef} className="absolute inset-0 will-change-transform">
        <video
          autoPlay
          muted
          loop
          playsInline
          onError={() => setShow(false)}
          className="animate-kenburns h-full w-full object-cover object-center brightness-[0.68] saturate-[0.95]"
        >
          <source src="/hero.mp4" type="video/mp4" />
        </video>
      </div>
      <div className="absolute inset-0 bg-gradient-to-t from-[#0c2423] via-[#134847]/35 to-transparent" />
    </div>
  );
}
