import type { Metadata } from "next";
import SubHero from "@/components/SubHero";
import ProductCard from "@/components/ProductCard";
import FaqList from "@/components/FaqList";
import Testimonials from "@/components/Testimonials";
import NestedCta from "@/components/NestedCta";

export const metadata: Metadata = {
  title: "Gelschaummatratzen | Arensberger",
  description:
    "Arensberger Gelschaummatratzen mit Nanocell — druckentlastender Komfort und ausgeglichenes Schlafklima.",
};

const geeignetFuer = [
  "Menschen, die druckentlastenden und körpernahen Liegekomfort bevorzugen",
  "Schläfer, denen ein ausgeglichenes Temperaturgefühl wichtig ist",
  "Seiten- und Rückenschläfer mit sensiblen Schulter- und Hüftbereichen",
  "Personen, die moderne Gelschaum-Technologie mit Nanocell schätzen",
  "Alle, die eine komfortbetonte Alternative zu klassischen Federkernmatratzen suchen",
];

const faqs = [
  {
    question: "Was ist der Vorteil einer Gelschaummatratze gegenüber normalem Schaum?",
    answer:
      "Gelschaum reagiert feinfühliger auf Körpergewicht und passt sich gleichmäßiger an als klassischer Kaltschaum. Dadurch entsteht eine spürbare Druckentlastung, ohne dass man tief einsinkt oder das Liegegefühl instabil wird.",
  },
  {
    question: "Für wen ist eine Gelschaummatratze besonders geeignet?",
    answer:
      "Gelschaummatratzen eignen sich besonders für Seiten- und Rückenschläfer sowie für Menschen mit empfindlichen Schulter- oder Hüftbereichen. Auch unruhige Schläfer profitieren vom ruhigen, punktelastischen Liegegefühl.",
  },
  {
    question: "Wird eine Gelschaummatratze nachts zu warm?",
    answer:
      "Moderne Gelschaummatratzen sind so aufgebaut, dass Wärme gleichmäßig verteilt wird. Offene Materialstrukturen unterstützen ein ausgeglichenes Schlafklima und reduzieren Wärmestau deutlich im Vergleich zu herkömmlichem Schaum.",
  },
  {
    question: "Wie unterscheidet sich Gelschaum von Federkernmatratzen?",
    answer:
      "Gelschaum bietet ein körpernahes, ruhiges Liegegefühl mit hoher Druckentlastung. Federkernmatratzen hingegen wirken fester und luftiger. Welche Variante besser passt, hängt vom persönlichen Schlafempfinden ab.",
  },
  {
    question: "Wie lange hält eine hochwertige Gelschaummatratze?",
    answer:
      "Bei guter Materialqualität behält eine Gelschaummatratze über viele Jahre ihre Form und ihren Komfort. Hochwertige Kerne und waschbare Bezüge tragen zusätzlich zu Langlebigkeit und Hygiene bei.",
  },
];

const testimonials = [
  { quote: "Angenehmer Liegekomfort mit guter Druckentlastung. Schlafe spürbar ruhiger.", name: "Katharina H." },
  { quote: "Sehr gleichmäßiges Liegegefühl und gutes Schlafklima. Für den Preis top.", name: "Milan P." },
  { quote: "Bequem ab der ersten Nacht und sauber verarbeitet. Bin sehr zufrieden.", name: "Sophie D." },
];

export default function GelschaumPage() {
  return (
    <>
      <SubHero
        eyebrow="Matratzen"
        title="Gelschaummatratzen"
        subtitle="Arensberger Gelschaummatratzen mit Nanocell verbinden moderne Materialtechnologie mit spürbarer Druckentlastung und einem besonders anschmiegsamen Liegegefühl."
        imageLabel="Gelschaummatratze im Schlafzimmer, Detailaufnahme"
        image="/images/gelschaummatratze-detail.jpg"
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
        <h2 className="font-heading font-bold text-2xl sm:text-3xl">Unsere Gelschaummatratzen</h2>
        <div className="mt-12 space-y-20">
          <ProductCard
            name="Arensberger LINA"
            description="Steht für unkomplizierten, komfortablen Schlaf mit ehrlicher Qualität. Der durchgehende Gelschaumkern sorgt für angenehme Druckentlastung und ein ausgewogenes Liegegefühl."
            imageLabel="Arensberger Lina Gelschaummatratze im Schlafzimmer"
            image="/images/lina-gelschaummatratze.jpg"
            specs={[
              { label: "Größen", value: "80–180 × 200 cm" },
              { label: "Höhe", value: "ca. 11 cm" },
              { label: "Härtegrad", value: "mittelfest H3" },
              { label: "Kern", value: "durchgehender Nanocell Gelschaum-Vollkern" },
            ]}
          />
          <ProductCard
            name="Arensberger ANNA"
            description="Bietet spürbaren Gelschaumkomfort in ausgewogener Höhe — gleichmäßige Unterstützung und ein stabiles Liegegefühl."
            imageLabel="Arensberger Anna Gelschaummatratze im Schlafzimmer"
            image="/images/anna-gelschaummatratze.jpg"
            specs={[
              { label: "Größen", value: "80–180 × 200 cm" },
              { label: "Höhe", value: "ca. 13 cm" },
              { label: "Härtegrad", value: "mittelfest H3" },
              { label: "Kern", value: "durchgehender Nanocell Gelschaum-Vollkern" },
            ]}
          />
          <ProductCard
            name="Arensberger SARA"
            description="Komfortabler Gelschaumkomfort mit spürbar mehr Substanz — gleichmäßige Druckentlastung mit mehr Tiefe und Komfort."
            imageLabel="Arensberger Sara Gelschaummatratze im Schlafzimmer"
            image="/images/sara-gelschaummatratze.jpg"
            specs={[
              { label: "Größen", value: "80–180 × 200 cm" },
              { label: "Höhe", value: "ca. 16 cm" },
              { label: "Härtegrad", value: "mittelfest H3" },
              { label: "Kern", value: "durchgehender Nanocell Gelschaum-Vollkern" },
            ]}
          />
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-6 pb-20 lg:px-10">
        <h2 className="font-heading font-bold text-2xl sm:text-3xl">Häufig gestellte Fragen</h2>
        <div className="mt-8">
          <FaqList items={faqs} />
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
          Alle unsere Gelschaummatratzen basieren auf unserer eigenen Nanocell-Technologie.
        </p>
        <div className="mt-6 flex justify-center">
          <NestedCta href="/nanocell">Mehr über Nanocell erfahren</NestedCta>
        </div>
      </section>
    </>
  );
}
