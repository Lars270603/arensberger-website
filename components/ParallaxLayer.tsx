"use client";

import { useEffect, useRef } from "react";

export default function ParallaxLayer({
  children,
  className = "",
  strength = 0.15,
  style,
}: {
  children: React.ReactNode;
  className?: string;
  strength?: number;
  style?: React.CSSProperties;
}) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    let ticking = false;
    const update = () => {
      const rect = el.getBoundingClientRect();
      const scrolled = Math.min(Math.max(-rect.top, 0), 800);
      el.style.transform = `translate3d(0, ${scrolled * strength}px, 0) scale(${1 + scrolled / 4000})`;
      ticking = false;
    };
    const onScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(update);
        ticking = true;
      }
    };

    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [strength]);

  return (
    <div ref={ref} className={`will-change-transform ${className}`} style={style}>
      {children}
    </div>
  );
}
