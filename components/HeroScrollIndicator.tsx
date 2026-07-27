"use client";

import { useEffect, useState } from "react";

export default function HeroScrollIndicator() {
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 10) {
        setHidden(true);
        window.removeEventListener("scroll", onScroll);
      }
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div
      aria-hidden="true"
      className={`absolute inset-x-0 bottom-8 flex justify-center transition-opacity duration-500 ${
        hidden ? "opacity-0" : "opacity-100"
      }`}
    >
      <span className="animate-[soft-bounce_2s_ease-in-out_infinite] text-2xl text-white/80 motion-reduce:animate-none">
        ↓
      </span>
    </div>
  );
}
