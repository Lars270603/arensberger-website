import type { Metadata } from "next";
import Image from "next/image";
import SubHero from "@/components/SubHero";
import BezelFrame from "@/components/BezelFrame";
import NestedCta from "@/components/NestedCta";
import Reveal from "@/components/Reveal";

export const metadata: Metadata = {
  title: "Nanocell® | Arensberger",
  description:
    "Nanocell® Gelschaum von Arensberger — feine, offenporige Zellstruktur für elastischen, punktelastischen und luftdurchlässigen Schlafkomfort.",
};

const geeignetFuer = ["Seitenschläfer", "Bauchschläfer", "Rückenschläfer", "Paare & unruhige Schläfer"];

export default function NanocellPage() {
  return (
    <>
      <SubHero
        eyebrow="Technologie"
        title="Nanocell®"
        subtitle="Mach dein Bett zur Wolke. Erlebe Nanocell®-Technologie in unseren Toppern und Gelmatratzen."
        imageLabel="Nahaufnahme Nanocell-Zellstruktur im Matratzenquerschnitt"
        image="/images/nanocell-produktion.jpg"
      />

      <section className="bg-accent-dark text-background">
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-8 px-4 py-16 sm:px-6 lg:grid-cols-2 lg:gap-16 lg:px-10 lg:py-24">
          <Reveal>
            <BezelFrame dark>
              <div className="relative aspect-video w-full">
                <Image
                  src="/images/nanocell-zellstruktur-detail.jpg"
                  alt="Nanocell Gelschaum, offenporige Zellstruktur im Detail"
                  fill
                  className="object-cover"
                />
              </div>
            </BezelFrame>
          </Reveal>
          <div className="flex flex-col justify-center">
            <Reveal>
              <p className="font-body text-lg leading-relaxed text-background/85">
                Nanocell® Gelschaum ist ein hochwertiger Schaumstoff der deutschen Marke
                Arensberger. Seit 2015 wird das Material gemeinsam mit Schlafexperten
                kontinuierlich weiterentwickelt und getestet.
              </p>
            </Reveal>
            <Reveal delay={100}>
              <p className="mt-6 font-body text-lg leading-relaxed text-background/85">
                Typisch für Nanocell® ist eine sehr feine, offenporige Zellstruktur sowie ein
                Anteil an eingearbeiteten Gel-Komponenten. Das sorgt für ein Liegegefühl, das
                gleichzeitig elastisch und punktelastisch ist — und durch die offene Struktur
                zudem sehr luftdurchlässig bleibt.
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-6 py-20 lg:px-10">
        <h2 className="font-heading font-bold text-2xl sm:text-3xl">Wie fühlt sich Nanocell an?</h2>
        <p className="mt-6 font-body text-lg leading-relaxed text-secondary">
          Nanocell® ist auf ein Liegegefühl ausgelegt, das Komfort und Stabilität verbindet.
          Viele empfinden die Oberfläche als anschmiegsam, während der Körper gleichzeitig
          gut getragen wird. Bewegungen werden nicht „gebremst“, sondern das Material
          reagiert direkt und gleichmäßig.
        </p>
        <p className="mt-4 font-body text-lg leading-relaxed text-secondary">
          Nanocell® kann helfen, Druckpunkte gleichmäßiger zu verteilen, was viele besonders
          im Schulter- und Beckenbereich als angenehm empfinden. Gleichzeitig reagiert das
          Material dynamisch auf Bewegungen und unterstützt so ein ruhiges, stabiles
          Liegegefühl.
        </p>

        <h2 className="mt-12 font-heading font-bold text-2xl sm:text-3xl">
          Für wen ist Nanocell besonders geeignet?
        </h2>
        <ul className="mt-6 grid grid-cols-1 gap-x-8 gap-y-4 sm:grid-cols-2">
          {geeignetFuer.map((item) => (
            <li key={item} className="flex gap-3 font-body text-secondary">
              <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
              {item}
            </li>
          ))}
        </ul>
        <p className="mt-6 font-body text-lg leading-relaxed text-secondary">
          Nanocell® eignet sich je nach persönlichem Liegegefühl für unterschiedliche
          Schlafpositionen — von anpassungsfähig und druckentlastend bis hin zu angenehm
          stabil und ruhig, auch zu zweit.
        </p>
      </section>

      <section className="bg-accent-tint">
        <div className="mx-auto max-w-3xl px-6 py-20 text-center lg:px-10">
          <p className="font-body text-secondary text-lg">
            Nanocell® steckt in unseren Gelschaummatratzen und Toppern.
          </p>
          <div className="mt-6 flex justify-center">
            <NestedCta href="/matratzen/gelschaum">Gelschaummatratzen mit Nanocell entdecken</NestedCta>
          </div>
        </div>
      </section>
    </>
  );
}
