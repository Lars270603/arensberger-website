import PlaceholderImage from "./PlaceholderImage";
import BezelFrame from "./BezelFrame";
import Reveal from "./Reveal";

export default function VulkaneifelStatement() {
  return (
    <section className="border-t border-white/10 bg-accent text-white">
      <div className="mx-auto max-w-4xl px-4 py-32 text-center sm:px-6 lg:px-10 lg:py-40">
        <Reveal>
          <h2 className="text-balance font-heading text-4xl font-bold sm:text-6xl">
            Mitten in der <span className="font-serif italic font-medium">Vulkaneifel.</span>
          </h2>
        </Reveal>
        <Reveal delay={120}>
          <p className="mt-8 font-body text-lg text-white/80">
            Wo Maare in den Basalt eingeschnitten sind und Nächte noch wirklich
            still sind. Hier entwickeln wir seit 2004 Matratzen — für Menschen
            die morgens aufstehen und den Unterschied spüren.
          </p>
        </Reveal>
        <Reveal delay={240} className="mt-14">
          <BezelFrame dark>
            <div className="relative aspect-[21/9] w-full">
              <PlaceholderImage label="Landschaft Vulkaneifel — Maare und Basalt" fill />
            </div>
          </BezelFrame>
        </Reveal>
      </div>
    </section>
  );
}
