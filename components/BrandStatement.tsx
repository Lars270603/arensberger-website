"use client";

import { useRef } from "react";
import Image from "next/image";
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
    value: "3 Millionen",
    countTo: 3,
    suffix: " Millionen",
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
    label: "Zwischenhändler zwischen uns und deiner Matratze",
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
      <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-10 lg:py-12">
        <div className="flex flex-col items-center gap-4 text-center lg:flex-row lg:items-end lg:gap-16 lg:text-left">
          <Reveal className="shrink-0">
            <div className="relative h-32 w-32 sm:h-40 sm:w-40 lg:h-56 lg:w-56">
              <Image
                src="/images/geschaeftsfuehrer.png"
                alt="Geschäftsführer von Arensberger"
                fill
                sizes="(min-width: 1024px) 224px, (min-width: 640px) 160px, 128px"
                className="object-contain object-bottom"
              />
            </div>
          </Reveal>

          <div className="max-w-xl">
            <Reveal>
              <SinceBadge variant="light" className="mx-auto lg:mx-0" />
            </Reveal>
            <Reveal delay={100}>
              <p className="mt-4 inline-flex rounded-full bg-white/10 px-3 py-1 font-body text-[10px] uppercase tracking-[0.25em] text-white/70">
                Der Grund, warum es uns gibt
              </p>
            </Reveal>
            <Reveal delay={200}>
              <p className="mt-4 text-balance font-serif italic text-3xl leading-snug sm:text-4xl">
                Wir wollten keine neue Matratzenmarke gründen. Wir wollten nur
                endlich eine finden, die hält, was sie verspricht. Also haben
                wir sie selbst entwickelt.
              </p>
            </Reveal>
          </div>
        </div>

        <div ref={factsRef} className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-3">
          {facts.map((fact, index) => (
            <div
              key={fact.value}
              className="brand-fact-card rounded-[2rem] bg-white/10 p-2 ring-1 ring-white/15"
              onMouseEnter={handleEnter}
              onMouseLeave={(event) => handleLeave(event, index)}
            >
              <div className="rounded-[calc(2rem-0.5rem)] bg-accent-dark/40 px-6 py-6 shadow-[inset_0_1px_1px_rgba(255,255,255,0.15)]">
                <p className="font-heading text-4xl font-bold tabular-nums sm:text-5xl">
                  {fact.countTo ? <CountUp to={fact.countTo} suffix={fact.suffix} /> : fact.value}
                </p>
                <p className="mt-3 font-body text-white/75">{fact.label}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
