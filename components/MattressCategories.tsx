import MattressBentoGrid from "./MattressBentoGrid";
import Reveal from "./Reveal";

export default function MattressCategories() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-32 sm:px-6 lg:px-10 lg:py-40">
      <div className="max-w-2xl">
        <Reveal>
          <p className="inline-flex rounded-full bg-accent/10 px-3 py-1 font-body text-[10px] uppercase tracking-[0.25em] text-accent">
            Fünf Systeme, ein Anspruch
          </p>
        </Reveal>
        <Reveal delay={100}>
          <h2 className="mt-6 text-balance font-heading text-4xl font-bold sm:text-6xl">
            Keine Matratze <span className="font-serif italic font-medium">von der Stange.</span>
          </h2>
        </Reveal>
        <Reveal delay={200}>
          <p className="mt-6 font-body text-lg text-secondary">
            Fünf Kernsysteme, jedes für ein anderes Schlafbedürfnis entwickelt — von
            klassischem Federkern bis zum Topper für die vorhandene Matratze.
          </p>
        </Reveal>
      </div>

      <div className="mt-16">
        <MattressBentoGrid />
      </div>
    </section>
  );
}
