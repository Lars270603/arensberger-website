import type { Metadata } from "next";
import SubHero from "@/components/SubHero";
import ProductCard from "@/components/ProductCard";
import FaqList from "@/components/FaqList";
import Testimonials from "@/components/Testimonials";
import NestedCta from "@/components/NestedCta";

export const metadata: Metadata = {
  title: "Kaltschaummatratzen | Arensberger",
  description:
    "Arensberger Kaltschaummatratzen stehen für ausgewogenen Schlafkomfort, hohe Formstabilität und verlässliche Unterstützung.",
};

const geeignetFuer = [
  "Menschen, die ausgewogenen Halt und spürbare Druckentlastung suchen",
  "Schläfer, die ein ruhiges, stabiles Liegegefühl bevorzugen",
  "Personen, die Wert auf Formbeständigkeit und Langlebigkeit legen",
  "Rücken-, Seiten- und Wechselschläfer",
  "Alle, die eine bewährte, vielseitige Matratzenlösung möchten",
];

const faqs = [
  {
    question: "Was zeichnet eine Kaltschaummatratze grundsätzlich aus?",
    answer:
      "Kaltschaummatratzen bieten eine sehr gute Kombination aus Punktelastizität, Rückstellkraft und Formstabilität. Der Schaum reagiert direkt auf Körpergewicht, gibt gezielt nach und kehrt schnell in seine ursprüngliche Form zurück.",
  },
  {
    question: "Für wen eignet sich eine Kaltschaummatratze besonders gut?",
    answer:
      "Kaltschaummatratzen eignen sich für Rücken-, Seiten- und Wechselschläfer, die Wert auf ausgewogene Unterstützung legen. Durch die gute Anpassungsfähigkeit ist diese Matratzenart für viele Körpergewichte und Schlafgewohnheiten geeignet.",
  },
  {
    question: "Was bedeutet wendbarer Härtegrad H2/H3 in der Praxis?",
    answer:
      "Ein wendbarer Härtegrad bietet maximale Flexibilität. Durch einfaches Wenden der Matratze kann zwischen zwei Liegehärten gewählt werden — praktisch, wenn zwei Personen mit unterschiedlichem Komfortempfinden dieselbe Matratze nutzen.",
  },
  {
    question: "Warum ist die Kombination aus Kaltschaum und Memory-Schaum sinnvoll?",
    answer:
      "Kaltschaum sorgt für Stabilität und Rückstellkraft, während Memory- bzw. Visco-Schaum gezielt Druckpunkte entlastet. In Kombination entsteht ein ausgewogenes Liegegefühl ohne tiefes Einsinken.",
  },
  {
    question: "Ist eine Kaltschaummatratze für Allergiker geeignet?",
    answer:
      "Ja, Kaltschaummatratzen sind grundsätzlich sehr hygienisch. Abnehmbare und waschbare Bezüge reduzieren Milben und Allergene deutlich. Modelle mit antiallergischen Bezügen bieten zusätzlichen Schutz.",
  },
];

const testimonials = [
  {
    quote: "Sehr angenehmes Liegegefühl und gute Unterstützung. Schlafqualität hat sich spürbar verbessert.",
    name: "Marco L.",
  },
  { quote: "Kein Einsinken, kein Druckgefühl. Verarbeitung wirkt hochwertig.", name: "Elena V." },
  {
    quote: "Ruhiges Liegegefühl und guter Halt im Rückenbereich, auch nach mehreren Nächten.",
    name: "Andre M.",
  },
];

export default function KaltschaumPage() {
  return (
    <>
      <SubHero
        eyebrow="Matratzen"
        title="Kaltschaummatratzen"
        subtitle="Arensberger Kaltschaummatratzen stehen für ausgewogenen Schlafkomfort, hohe Formstabilität und verlässliche Unterstützung — punktgenau angepasst an dein Körpergewicht."
        imageLabel="Kaltschaummatratze im Schlafzimmer, Detailaufnahme"
        image="/images/kaltschaummatratze-detail.jpg"
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
        <h2 className="font-heading font-bold text-2xl sm:text-3xl">Unsere Kaltschaummatratzen</h2>
        <div className="mt-12 space-y-20">
          <ProductCard
            name="Arensberger RELAXX"
            description="Steht für ausgewogenen Kaltschaumkomfort mit ergonomischer Anpassung. Der mehrschichtige Aufbau aus Kaltschaum, Memory- und Gel-Schaum sorgt für gezielte Druckentlastung."
            imageLabel="Arensberger Relaxx Kaltschaummatratze im Schlafzimmer"
            image="/images/relaxx-kaltschaummatratze.jpg"
            specs={[
              { label: "Größen", value: "90–180 × 200 cm" },
              { label: "Höhe", value: "ca. 25 cm" },
              { label: "Härtegrad", value: "wendbar H2/H3" },
              { label: "Aufbau", value: "Kaltschaumkern mit Visco- & Gel-Schaum, 7-Zonen" },
            ]}
          />
          <ProductCard
            name="Arensberger FLEXX"
            description="Bietet ein direktes, reaktionsschnelles Liegegefühl mit klarer Unterstützung. Die Kombination aus Kaltschaum und Visco Smart Schaum ermöglicht eine präzise Anpassung an den Körper."
            imageLabel="Arensberger Flexx Kaltschaummatratze im Schlafzimmer"
            image="/images/flexx-kaltschaummatratze.jpg"
            specs={[
              { label: "Größen", value: "90–180 × 200 cm" },
              { label: "Höhe", value: "ca. 25 cm" },
              { label: "Härtegrad", value: "wendbar H2/H3" },
              { label: "Aufbau", value: "Kaltschaum mit Visco Smart Schaum, 7-Zonen" },
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
          Mehr über Kaltschaum, Komfortschaum und die passende Materialwahl erfährst du in
          unserem Ratgeber.
        </p>
        <div className="mt-6 flex justify-center">
          <NestedCta href="/ratgeber/schaumstoff">Mehr im Ratgeber erfahren</NestedCta>
        </div>
      </section>
    </>
  );
}
