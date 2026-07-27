import Image from "next/image";
import Reveal from "./Reveal";

export default function VulkaneifelStatement() {
  return (
    <section className="relative overflow-hidden border-t border-white/10 text-white">
      <Image
        src="/images/vulkaneifel-weinfelder-maar.jpg"
        alt="Panorama des Weinfelder Maares in der Vulkaneifel"
        fill
        className="object-cover animate-[slow-zoom_20s_ease-in-out_infinite_alternate] motion-reduce:animate-none"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-accent-dark/35 via-transparent to-accent-dark/50" />

      <div className="relative z-10 mx-auto max-w-3xl px-4 py-40 text-center sm:px-6 lg:px-10 lg:py-52">
        <Reveal>
          <span className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/10 px-4 py-1.5 font-body text-[10px] uppercase tracking-[0.25em] text-white backdrop-blur-2xl">
            Weinfelder Maar · Vulkaneifel
          </span>
        </Reveal>
        <Reveal delay={100}>
          <h2 className="text-balance font-heading text-4xl font-bold text-white [text-shadow:0_4px_28px_rgba(0,0,0,0.5)] sm:text-6xl">
            Mitten in der <span className="font-serif italic font-medium">Vulkaneifel.</span>
          </h2>
        </Reveal>
        <Reveal delay={220}>
          <p className="mt-8 font-body text-lg text-white/90 [text-shadow:0_2px_18px_rgba(0,0,0,0.45)]">
            Wo Maare in den Basalt eingeschnitten sind und Nächte noch wirklich
            still sind. Hier entwickeln wir seit 2004 Matratzen — für Menschen
            die morgens aufstehen und den Unterschied spüren.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
