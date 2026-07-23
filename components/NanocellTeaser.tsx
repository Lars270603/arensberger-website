import Image from "next/image";
import NestedCta from "./NestedCta";
import Reveal from "./Reveal";

export default function NanocellTeaser() {
  return (
    <section className="bg-accent-dark py-24 text-background sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-10">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-20">
          <Reveal className="relative order-2 lg:order-1">
            <div className="rounded-[2rem] bg-white/5 p-2 ring-1 ring-white/10 transition-transform duration-700 sm:rotate-2 sm:hover:rotate-0">
              <div className="relative aspect-[4/5] w-full overflow-hidden rounded-[calc(2rem-0.5rem)] sm:aspect-video">
                <Image
                  src="/images/nanocell-zellstruktur.jpg"
                  alt="Nahaufnahme Nanocell-Zellstruktur im Matratzenquerschnitt"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </Reveal>

          <div className="order-1 lg:order-2">
            <Reveal>
              <p className="inline-flex rounded-full bg-accent/20 px-3 py-1 font-body text-[10px] uppercase tracking-[0.25em] text-accent">
                Technologie
              </p>
            </Reveal>
            <Reveal delay={100}>
              <h2 className="mt-6 text-balance font-heading text-4xl font-bold sm:text-6xl">
                Nanocell.
                <br />
                <span className="font-serif italic font-medium text-background/85">
                  Gegen schwitzige Nächte entwickelt.
                </span>
              </h2>
            </Reveal>
            <Reveal delay={200}>
              <p className="mt-8 max-w-md font-body text-lg text-background/75">
                Unsere eigens entwickelte Zellstruktur reguliert Feuchtigkeit und
                Temperatur im Kern der Matratze — für ein Schlafklima, das sich
                anpasst, bevor du es überhaupt bemerkst.
              </p>
            </Reveal>
            <Reveal delay={300} className="mt-10">
              <NestedCta href="/nanocell">Nanocell entdecken</NestedCta>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
