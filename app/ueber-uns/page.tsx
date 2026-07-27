import type { Metadata } from "next";
import SubHero from "@/components/SubHero";
import PullQuote from "@/components/PullQuote";
import HeadquartersMap from "@/components/HeadquartersMap";
import Reveal from "@/components/Reveal";

export const metadata: Metadata = {
  title: "Über uns | Arensberger",
  description:
    "Arensberger — wir denken den ganzen Tag ans Schlafen. Die Geschichte hinter der Marke.",
};

const werte = [
  {
    title: "Qualität",
    text: "Jede Matratze durchläuft strenge Qualitätskontrollen, bevor sie unser Haus verlässt.",
  },
  {
    title: "Tradition",
    text: "Seit 2004 entwickeln wir kontinuierlich weiter, ohne unseren Grundanspruch zu verlieren.",
  },
  {
    title: "Service",
    text: "Kurze Vertriebswege und ein direkter Draht zu unseren Kundinnen und Kunden.",
  },
];

export default function UeberUnsPage() {
  return (
    <>
      <SubHero
        eyebrow="Über uns"
        title="Wir denken den ganzen Tag ans Schlafen."
        subtitle="Da bist du ja! Wir haben dich schon erwartet und möchten uns gerne vorstellen."
        imageLabel="Arensberger Firmensitz in Nerdlen"
        image="/images/firmensitz-nerdlen.jpg"
      />

      <article className="mx-auto max-w-3xl px-6 py-20 lg:px-10">
        <p className="font-heading font-bold text-2xl sm:text-3xl">
          Wir schlafen für unser Leben gerne.
        </p>
        <p className="mt-6 font-body text-lg leading-relaxed text-secondary">
          Denn eine erholsame Nachtruhe macht uns glücklicher, hilfsbereiter und
          produktiver. Außerdem fühlen wir uns unter ausgeschlafenen Menschen am
          wohlsten. Für unseren Geschmack gab es diese idealen Bedingungen allerdings viel
          zu selten. Und das wollten wir ändern.
        </p>
      </article>

      <div className="mx-auto max-w-3xl px-6 lg:px-10">
        <Reveal>
          <HeadquartersMap />
        </Reveal>
      </div>

      <article className="mx-auto max-w-3xl px-6 py-20 lg:px-10">
        <p className="font-body text-lg leading-relaxed text-secondary">
          Alles begann in der Vulkaneifel, mitten im Herzen von Rheinland-Pfalz — dort, wo
          bis heute unser Firmensitz in Nerdlen steht. Vor über 20 Jahren ließ der Komfort
          und die Qualität der meisten Matratzen noch sehr zu wünschen übrig. Ganz
          abgesehen vom Preis. Und das hat uns einfach nicht ruhig schlafen lassen.
        </p>
        <p className="mt-4 font-body text-lg leading-relaxed text-secondary">
          Wir haben hunderte von Matratzen ausgiebig getestet und im wahrsten Sinne des
          Wortes auseinandergenommen. Aus den am besten geeigneten Materialien und
          Komponenten haben wir zunächst drei neue Modelle entwickelt.
        </p>

        <PullQuote>
          Das war in der Arensberger Straße beim Arensberg. Falls mal jemand fragt, wie wir
          auf den Namen gekommen sind.
        </PullQuote>

        <p className="mt-4 font-body text-lg leading-relaxed text-secondary">
          Seitdem entwickeln wir fortlaufend weiter und schlafen immer besser — genau wie
          unsere mehr als 3 Millionen ausgeschlafenen und glücklichen Kunden.
        </p>
      </article>

      <section className="bg-accent-tint">
        <div className="mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-10 lg:py-32">
          <Reveal>
            <h2 className="font-heading font-bold text-2xl sm:text-3xl">Unsere Werte</h2>
          </Reveal>
          <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-3">
            {werte.map((wert, index) => (
              <Reveal key={wert.title} delay={index * 100} className="h-full">
                <div className="h-full rounded-[2rem] bg-white/70 p-2 ring-1 ring-black/5">
                  <div className="h-full rounded-[calc(2rem-0.5rem)] bg-background px-7 py-8">
                    <h3 className="font-heading font-bold text-xl text-accent">{wert.title}</h3>
                    <p className="mt-3 font-body text-secondary">{wert.text}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
