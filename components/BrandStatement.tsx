"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SinceBadge from "./SinceBadge";
import Reveal from "./Reveal";
import CountUp from "./CountUp";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const facts = [
  {
    value: "1.000.000+",
    countTo: 1_000_000,
    suffix: "+",
    label: "Menschen schlafen bereits auf einer Arensberger",
    restRotate: -2,
  },
  {
    value: "Öko-Tex®",
    label: "Zertifizierte Qualität in jeder einzelnen Matratze",
    restRotate: 0,
  },
  {
    value: "0",
    label: "Zwischen unserer Entwicklung und deinem Schlafzimmer",
    restRotate: 2,
  },
];

export default function BrandStatement() {
  const factsRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const cards = gsap.utils.toArray<HTMLElement>(".brand-fact-card");
      const isSmUp = window.matchMedia("(min-width: 640px)").matches;
      const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

      cards.forEach((card, index) => {
        const restRotate = isSmUp ? facts[index].restRotate : 0;

        if (prefersReducedMotion) {
          gsap.set(card, { opacity: 1, y: 0, scale: 1, rotate: restRotate });
          return;
        }

        gsap.fromTo(
          card,
          { opacity: 0, y: 70, scale: 0.92, rotate: restRotate },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            rotate: restRotate,
            ease: "none",
            scrollTrigger: {
              trigger: card,
              start: "top 92%",
              end: "top 55%",
              scrub: 0.6,
            },
          }
        );
      });
    },
    { scope: factsRef }
  );

  const handleEnter = (event: React.MouseEvent<HTMLDivElement>) => {
    gsap.to(event.currentTarget, { rotate: 0, duration: 0.5, ease: "power2.out" });
  };

  const handleLeave = (event: React.MouseEvent<HTMLDivElement>, index: number) => {
    const isSmUp = window.matchMedia("(min-width: 640px)").matches;
    gsap.to(event.currentTarget, {
      rotate: isSmUp ? facts[index].restRotate : 0,
      duration: 0.5,
      ease: "power2.out",
    });
  };

  return (
    <section className="bg-accent text-white">
      <div className="mx-auto max-w-7xl px-4 py-32 sm:px-6 lg:px-10 lg:py-40">
        <div className="flex flex-col gap-16 lg:flex-row lg:items-start lg:gap-24">
          <Reveal>
            <SinceBadge variant="light" className="lg:mt-2" />
          </Reveal>

          <div className="max-w-2xl">
            <Reveal>
              <p className="inline-flex rounded-full bg-white/10 px-3 py-1 font-body text-[10px] uppercase tracking-[0.25em] text-white/70">
                Der Grund, warum es uns gibt
              </p>
            </Reveal>
            <Reveal delay={120}>
              <p className="mt-6 text-balance font-serif italic text-3xl leading-snug sm:text-5xl">
                Wir wollten keine neue Matratzenmarke gründen. Wir wollten nur
                endlich eine finden, die hält, was sie verspricht. Also haben
                wir sie selbst entwickelt.
              </p>
            </Reveal>
          </div>
        </div>

        <div ref={factsRef} className="mt-20 grid grid-cols-1 gap-8 sm:grid-cols-3">
          {facts.map((fact, index) => (
            <div
              key={fact.value}
              className="brand-fact-card rounded-[2rem] bg-white/10 p-2 ring-1 ring-white/15"
              onMouseEnter={handleEnter}
              onMouseLeave={(event) => handleLeave(event, index)}
            >
              <div className="rounded-[calc(2rem-0.5rem)] bg-accent-dark/40 px-8 py-10 shadow-[inset_0_1px_1px_rgba(255,255,255,0.15)]">
                <p className="font-heading text-4xl font-bold tabular-nums sm:text-5xl">
                  {fact.countTo ? <CountUp to={fact.countTo} suffix={fact.suffix} /> : fact.value}
                </p>
                <p className="mt-4 font-body text-white/75">{fact.label}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
