import type { Metadata } from "next";
import SubHero from "@/components/SubHero";
import ProductCard from "@/components/ProductCard";
import Testimonials from "@/components/Testimonials";
import NestedCta from "@/components/NestedCta";

export const metadata: Metadata = {
  title: "Federkernmatratzen | Arensberger",
  description:
    "Arensberger Federkernmatratzen verbinden bewährte Schlafsysteme mit modernen Materialien für zuverlässigen Liegekomfort.",
};

const geeignetFuer = [
  "Menschen, die stabilen und verlässlichen Liegekomfort bevorzugen",
  "Schläfer mit hohem Anspruch an Belüftung",
  "Paare mit unterschiedlichen Schlafgewohnheiten",
  "Personen, die geprüfte Materialien schätzen",
  "Alle, die eine Alternative zu reinen Schaummatratzen suchen",
];

const testimonials = [
  { quote: "Sehr angenehmes Liegegefühl, genau wie beschrieben.", name: "Thomas K." },
  { quote: "Gute Qualität und bequem von der ersten Nacht an.", name: "Sabine M." },
  {
    quote:
      "Bietet genau die richtige Mischung aus Stabilität und Komfort, ohne dass man einsinkt. Auch nach mehreren Stunden fühlt sich alles frisch an.",
    name: "Alejandro M.",
  },
];

export default function FederkernPage() {
  return (
    <>
      <SubHero
        eyebrow="Matratzen"
        title="Federkernmatratzen"
        subtitle="Arensberger Federkernmatratzen verbinden bewährte Schlafsysteme mit modernen Materialien und einem klaren Anspruch an Qualität — für zuverlässige Unterstützung und ein frisches Schlafklima."
        imageLabel="Federkernmatratze im Schlafzimmer, Detailaufnahme"
        image="/images/federkernmatratze-detail.jpg"
      />

      <section className="mx-auto max-w-7xl px-6 py-20 lg:px-10">
        <h2 className="font-heading font-bold text-2xl sm:text-3xl">Geeignet für</h2>
        <ul className="mt-8 grid grid-cols-1 gap-x-8 gap-y-4 sm:grid-cols-2">
          {geeignetFuer.map((item) => (
            <li key={item} className="flex gap-3 font-body text-secondary">
              <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
              {item}
            </li>
          ))}
        </ul>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-20 lg:px-10">
        <h2 className="font-heading font-bold text-2xl sm:text-3xl">Unsere Federkernmatratzen</h2>
        <div className="mt-12 space-y-20">
          <ProductCard
            name="Arensberger VIKTORIA"
            description="Unser Bestseller für anpassungsfähigen Schlafkomfort. Der integrierte Topper und der dynamische Federkern sorgen für ergonomische Unterstützung und spürbare Entlastung."
            imageLabel="Arensberger Viktoria Federkernmatratze im Schlafzimmer"
            image="/images/viktoria-federkernmatratze.jpg"
            specs={[
              { label: "Größen", value: "80–180 × 200 cm" },
              { label: "Höhe", value: "ca. 25 cm" },
              { label: "Härtegrad", value: "dynamisch H2–H4" },
              { label: "Aufbau", value: "7-Zonen-Taschenfederkern mit integriertem Topper" },
            ]}
          />
          <ProductCard
            name="Arensberger Kupfer"
            description="Kombiniert festen Federkernkomfort mit modernem Kupferschaum. Stabile Unterstützung für Schläfer mit Fokus auf Hygiene und Halt."
            imageLabel="Arensberger Kupfer Federkernmatratze im Schlafzimmer"
            image="/images/kupfer-federkernmatratze.jpg"
            specs={[
              { label: "Größen", value: "90–180 × 200 cm" },
              { label: "Höhe", value: "ca. 25 cm" },
              { label: "Härtegrad", value: "H3/H4" },
              { label: "Material", value: "Kupferschaum mit antimikrobiellen Eigenschaften" },
            ]}
          />
          <ProductCard
            name="Arensberger JANA"
            description="Eine aktive Federkernmatratze im schlanken Aufbau — ausgewogener Komfort, hohe Punktelastizität und ein frisches Schlafgefühl."
            imageLabel="Arensberger Jana Federkernmatratze im Schlafzimmer"
            image="/images/jana-federkernmatratze.jpg"
            specs={[
              { label: "Größen", value: "90–180 × 200 cm" },
              { label: "Höhe", value: "ca. 19 cm" },
              { label: "Härtegrad", value: "H2/H3" },
              { label: "Aufbau", value: "7-Zonen-Taschenfederkern mit Kaltschaum" },
            ]}
          />
        </div>
      </section>

      <section className="bg-surface">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-10">
          <h2 className="font-heading font-bold text-2xl sm:text-3xl">Das sagen unsere Kunden</h2>
          <div className="mt-10">
            <Testimonials items={testimonials} />
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-6 py-20 text-center lg:px-10">
        <p className="font-body text-secondary text-lg">
          Mehr über Federkern-Typen, Eigenschaften und passende Schlaftypen erfährst du in
          unserem Ratgeber.
        </p>
        <div className="mt-6 flex justify-center">
          <NestedCta href="/ratgeber/federkern">Mehr im Ratgeber erfahren</NestedCta>
        </div>
      </section>
    </>
  );
}
