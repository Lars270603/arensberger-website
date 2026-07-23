"use client";

import { useEffect, useState } from "react";

export default function ReadingProgress({ targetId }: { targetId: string }) {
  const [progress, setProgress] = useState(0);
  const [top, setTop] = useState(112);

  useEffect(() => {
    const measure = () => {
      const header = document.querySelector("header");
      if (header) setTop(header.getBoundingClientRect().bottom);
    };
    measure();
    window.addEventListener("resize", measure);

    const onScroll = () => {
      const article = document.getElementById(targetId);
      if (!article) return;
      const rect = article.getBoundingClientRect();
      const total = rect.height - window.innerHeight;
      const scrolled = Math.min(Math.max(-rect.top, 0), Math.max(total, 1));
      setProgress(total > 0 ? (scrolled / total) * 100 : 0);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("resize", measure);
      window.removeEventListener("scroll", onScroll);
    };
  }, [targetId]);

  return (
    <div className="fixed inset-x-0 z-30 h-[3px] bg-surface/60" style={{ top }}>
      <div
        className="h-full bg-accent transition-[width] duration-150 ease-out"
        style={{ width: `${progress}%` }}
      />
    </div>
  );
}
