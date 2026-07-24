import Reveal from "./Reveal";
import NestedCta from "./NestedCta";

export default function AboutQuote() {
  return (
    <section className="bg-accent-tint">
      <div className="mx-auto max-w-4xl px-4 py-32 text-center sm:px-6 lg:px-10 lg:py-40">
        <Reveal className="mx-auto flex justify-center">
          <span className="h-1.5 w-1.5 rotate-45 bg-accent" />
        </Reveal>
        <Reveal delay={100}>
          <p className="mt-10 font-serif italic text-3xl leading-snug sm:text-5xl">
            Guter Schlaf beginnt nicht mit einem Produkt — er beginnt mit der
            Frage, was ein Mensch wirklich braucht.
          </p>
        </Reveal>
        <Reveal delay={200}>
          <p className="mt-8 font-body text-sm uppercase tracking-[0.25em] text-accent">
            Waldemar Derksen, Gründer
          </p>
          <p className="mt-2 font-body text-sm text-secondary">
            Gegründet 2004 in der Vulkaneifel
          </p>
        </Reveal>
        <Reveal delay={300} className="mt-10 flex justify-center">
          <NestedCta href="/ueber-uns">Mehr über uns</NestedCta>
        </Reveal>
      </div>
    </section>
  );
}
