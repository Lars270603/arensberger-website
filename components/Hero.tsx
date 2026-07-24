import Image from "next/image";
import SinceBadge from "./SinceBadge";
import NestedCta from "./NestedCta";
import Reveal from "./Reveal";
import ParallaxLayer from "./ParallaxLayer";

export default function Hero() {
  return (
    <section className="relative min-h-[100dvh] w-full overflow-hidden">
      <ParallaxLayer
        className="absolute inset-x-0"
        style={{ top: -200, height: "calc(100% + 400px)" }}
        strength={0.2}
      >
        <Image
          src="/images/schlafzimmer-morgenlicht.jpg"
          alt="Schlafzimmer im Morgenlicht mit Arensberger Matratze im Kontext"
          fill
          priority
          className="h-full object-cover"
        />
      </ParallaxLayer>
      <div className="absolute inset-0 bg-gradient-to-t from-accent-dark/90 via-black/25 to-black/10" />

      <div className="relative mx-auto flex min-h-[100dvh] max-w-7xl flex-col justify-end px-4 pb-24 pt-32 sm:px-6 lg:px-10">
        <Reveal>
          <span className="mb-8 inline-flex w-fit items-center gap-2 rounded-full border border-white/30 bg-white/10 px-4 py-1.5 font-body text-[10px] uppercase tracking-[0.25em] text-white backdrop-blur-2xl">
            Seit 2004 · Aus der Vulkaneifel
          </span>
        </Reveal>

        <Reveal delay={120}>
          <h1 className="max-w-3xl text-balance font-heading text-4xl font-bold leading-[1.05] text-white sm:text-6xl lg:text-8xl">
            Hunderte Matratzen zerlegt.
            <br />
            <span className="font-serif italic font-medium text-white/90">
              Damit du nur eine brauchst.
            </span>
          </h1>
        </Reveal>

        <Reveal delay={240}>
          <p className="mt-8 max-w-md font-body text-lg text-white/80">
            Wir entwickeln unsere Matratzen in der Vulkaneifel — mit dem
            Anspruch, dass du sie nie wieder ersetzen musst. Über 1.000.000
            Kunden schlafen bereits darauf.
          </p>
        </Reveal>

        <Reveal delay={360} className="mt-12 flex flex-wrap items-center gap-8">
          <NestedCta href="/matratzen">Matratzen entdecken</NestedCta>
          <SinceBadge variant="light" className="hidden sm:flex" />
        </Reveal>
      </div>
    </section>
  );
}
