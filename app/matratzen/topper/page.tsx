import type { Metadata } from "next";
import SubHero from "@/components/SubHero";
import ProductCard from "@/components/ProductCard";
import FaqList from "@/components/FaqList";
import Testimonials from "@/components/Testimonials";
import NestedCta from "@/components/NestedCta";

export const metadata: Metadata = {
  title: "Topper | Arensberger",
  description:
    "Arensberger Topper werten bestehende Matratzen gezielt auf — mehr Druckentlastung ohne Matratzenwechsel.",
};

const geeignetFuer = [
  "Menschen, die ihre Matratze gezielt anpassen und aufwerten möchten",
  "Schläfer mit Belastungen im Schulter-, Rücken- oder Hüftbereich",
  "Personen, die ein gleichmäßiges und temperaturausgeglichenes Liegegefühl bevorzugen",
  "Paare, die Härteunterschiede oder Unebenheiten ausgleichen möchten",
  "Alle, die eine flexible Lösung zur Verbesserung ihres Schlafsystems suchen",
];

const faqs = [
  {
    question: "Was bringt ein Topper wirklich?",
    answer:
      "Ein Topper verbessert das Liegegefühl deiner bestehenden Matratze spürbar. Er kann eine zu feste Liegefläche ausgleichen, Druckpunkte reduzieren und für eine gleichmäßigere Lagerung des Körpers sorgen — ohne dass die Matratze ausgetauscht werden muss.",
  },
  {
    question: "Für welche Matratzen sind Arensberger Topper geeignet?",
    answer:
      "Arensberger Topper eignen sich für nahezu alle Matratzentypen, darunter Federkern-, Taschenfederkern- und Schaumstoffmatratzen. Der flexible Aufbau passt sich der vorhandenen Matratze an.",
  },
  {
    question: "Welche Höhe ist die richtige — 5, 8 oder 10 cm?",
    answer:
      "5 cm sorgen für eine dezente Anpassung, 8 cm bieten eine ausgewogene Druckentlastung, und 10 cm ermöglichen eine besonders intensive Entlastung und gleichen Unebenheiten deutlich aus.",
  },
  {
    question: "Verrutscht der Topper im Alltag?",
    answer:
      "Nein. Arensberger Topper sind mit rutschhemmenden Befestigungsbändern ausgestattet, die den Topper sicher auf der Matratze fixieren — auch bei Bewegung in der Nacht.",
  },
  {
    question: "Ist der Topper hygienisch und pflegeleicht?",
    answer:
      "Ja. Der hochwertige Bezug ist abnehmbar und waschbar. Dadurch lässt sich der Topper einfach reinigen und bleibt dauerhaft frisch.",
  },
];

const testimonials = [
  {
    quote: "Wertet unsere Matratze deutlich auf. Liegegefühl gleichmäßiger und entspannter, besonders im Schulterbereich.",
    name: "Renato S.",
  },
  { quote: "Sehr angenehme Anpassung ohne zu weich zu sein. Verarbeitung und Bezug machen einen hochwertigen Eindruck.", name: "Ivana K." },
  { quote: "Hatte vorher Probleme mit einer zu festen Matratze. Mit dem Topper schlafe ich spürbar besser.", name: "Thomas N." },
];

export default function TopperPage() {
  return (
    <>
      <SubHero
        eyebrow="Matratzen"
        title="Topper"
        subtitle="Arensberger Topper wurden entwickelt, um bestehende Matratzen gezielt zu optimieren — ohne sie austauschen zu müssen."
        imageLabel="Topper auf Bett im Schlafzimmer, Detailaufnahme"
        image="/images/topper-detail.jpg"
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
        <h2 className="font-heading font-bold text-2xl sm:text-3xl">Unser Topper</h2>
        <div className="mt-12">
          <ProductCard
            name="Arensberger Topper-Serie"
            description="Steht für gezielte Druckentlastung und spürbare Verbesserung bestehender Matratzen. Der hochwertige Gel- und Memory-Schaum passt sich dem Körper an — wählbar in drei Höhen, je nach persönlichem Komfortbedarf."
            imageLabel="Arensberger Topper auf Matratze im Schlafzimmer"
            image="/images/topper-produkt.jpg"
            specs={[
              { label: "Größen", value: "90–180 × 200 cm" },
              { label: "Höhen", value: "ca. 5 cm · 8 cm · 10 cm" },
              { label: "Härtegrad", value: "H2–H3" },
              { label: "Kern", value: "Gel-Foam & Memory-Gel-Schaum" },
              { label: "Bezug", value: "Premium-Strickstoff, abnehmbar & waschbar" },
              { label: "Geeignet für", value: "Federkern- & Schaumstoffmatratzen" },
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
        <div className="flex justify-center">
          <NestedCta href="/matratzen">Alle Matratzen entdecken</NestedCta>
        </div>
      </section>
    </>
  );
}
