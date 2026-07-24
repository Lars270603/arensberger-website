"use client";

import { useEffect, useRef, useState } from "react";

export default function CountUp({
  to,
  duration = 1800,
  suffix = "",
  className = "",
}: {
  to: number;
  duration?: number;
  suffix?: string;
  className?: string;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const prefersReducedMotion =
    typeof window !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const [value, setValue] = useState(prefersReducedMotion ? to : 0);

  useEffect(() => {
    const el = ref.current;
    if (!el || prefersReducedMotion) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        observer.disconnect();

        const start = performance.now();
        const tick = (now: number) => {
          const progress = Math.min((now - start) / duration, 1);
          const eased = 1 - Math.pow(1 - progress, 3);
          setValue(Math.round(to * eased));
          if (progress < 1) requestAnimationFrame(tick);
        };
        requestAnimationFrame(tick);
      },
      { threshold: 0.4 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [to, duration, prefersReducedMotion]);

  return (
    <span ref={ref} className={className}>
      {value.toLocaleString("de-DE")}
      {suffix}
    </span>
  );
}
