"use client";

import { useRef, useState } from "react";
import gsap from "gsap";

const SHEEP_COUNT = 5;
const SHEEP_STAGGER = 0.18;
const HOP_DURATION = 1.3;

const LINE_1 = "Guter Schlaf ist kein Zufall.".split(" ");
const LINE_2 = "Wir arbeiten seit 2004 daran, dass er es auch nicht bleibt.".split(" ");
const WORD_STAGGER_MS = 70;

function easeInOutCubic(t: number) {
  return t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;
}

function smoothScrollTo(targetY: number, duration: number) {
  const startY = window.scrollY;
  const diff = targetY - startY;
  const startTime = performance.now();

  function step(now: number) {
    const elapsed = now - startTime;
    const progress = Math.min(elapsed / duration, 1);
    window.scrollTo(0, startY + diff * easeInOutCubic(progress));
    if (progress < 1) requestAnimationFrame(step);
  }

  requestAnimationFrame(step);
}

export default function HeroCta() {
  const sheepRefs = useRef<(HTMLSpanElement | null)[]>([]);
  const [running, setRunning] = useState(false);

  const handleClick = () => {
    if (running) return;

    const target = document.getElementById("matratzen");
    const headerOffset = 96;
    const targetY = target
      ? target.getBoundingClientRect().top + window.scrollY - headerOffset
      : 0;

    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (prefersReducedMotion) {
      window.scrollTo(0, targetY);
      return;
    }

    setRunning(true);
    smoothScrollTo(targetY, 900);

    const travelDistance = window.innerWidth + 160;
    const tl = gsap.timeline({ onComplete: () => setRunning(false) });

    sheepRefs.current.forEach((sheep, i) => {
      if (!sheep) return;
      const delay = i * SHEEP_STAGGER;

      gsap.set(sheep, { opacity: 1, x: -80, y: 0 });
      tl.to(sheep, { x: travelDistance, duration: HOP_DURATION, ease: "power1.inOut" }, delay);
      tl.to(sheep, { y: -16, duration: 0.18, repeat: 5, yoyo: true, ease: "sine.inOut" }, delay);
      tl.to(sheep, { opacity: 0, duration: 0.2 }, delay + HOP_DURATION - 0.2);
    });
  };

  return (
    <div className="flex flex-col items-center">
      <h1 className="max-w-4xl text-balance">
        <span className="block font-heading font-bold leading-[1.1] text-[clamp(2.25rem,6vw,5rem)] text-white">
          {LINE_1.map((word, i) => (
            <span
              key={i}
              className="hero-word mr-[0.28em] inline-block last:mr-0"
              style={{ animationDelay: `${i * WORD_STAGGER_MS}ms` }}
            >
              {word}
            </span>
          ))}
        </span>
        <span className="mt-4 block font-serif italic leading-relaxed text-[clamp(1.25rem,3vw,2rem)] text-white/80">
          {LINE_2.map((word, i) => (
            <span
              key={i}
              className="hero-word mr-[0.28em] inline-block last:mr-0"
              style={{ animationDelay: `${(LINE_1.length + i) * WORD_STAGGER_MS}ms` }}
            >
              {word}
            </span>
          ))}
        </span>
      </h1>

      <button
        type="button"
        onClick={handleClick}
        aria-label="Einschlafen — zu unseren Matratzen scrollen"
        className="mt-10 inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/10 px-8 py-3 font-body text-sm uppercase tracking-[0.25em] text-white backdrop-blur-2xl transition-transform duration-300 ease-out hover:scale-[1.02] hover:bg-white/20 active:scale-[0.98]"
      >
        Einschlafen
      </button>

      <div className="pointer-events-none fixed inset-0 z-50 overflow-hidden">
        <div className="absolute inset-x-0 top-1/2 -translate-y-1/2">
          {Array.from({ length: SHEEP_COUNT }).map((_, i) => (
            <span
              key={i}
              ref={(el) => {
                sheepRefs.current[i] = el;
              }}
              aria-hidden="true"
              className="absolute left-0 text-4xl leading-none opacity-0"
            >
              🐑
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
