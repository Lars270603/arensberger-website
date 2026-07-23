import type { Metadata } from "next";
import SubHero from "@/components/SubHero";
import FaqList from "@/components/FaqList";
import Testimonials from "@/components/Testimonials";
import ProductCard from "@/components/ProductCard";
import NestedCta from "@/components/NestedCta";

export const metadata: Metadata = {
  title: "Kindermatratzen | Arensberger",
  description:
    "Arensberger Kindermatratzen verbinden sanfte Druckentlastung, punktelastische Unterstützung und hohe Hygienestandards.",
};

const geeignetFuer = [
  "Babys und Kinder, die eine sanfte und gleichmäßige Unterstützung benötigen",
  "Eltern, die Wert auf geprüfte, schadstofffreie Materialien legen",
  "Kinder mit sensibler Haut oder erhöhtem Hygienebedarf",
  "Babys und Kleinkinder in Gitterbetten, Kinderbetten oder Reisebetten",
  "Familien, die eine kindgerechte Matratze mit langlebiger Qualität suchen",
];

const faqs = [
  {
    question: "Worauf sollte man bei einer Kindermatratze besonders achten?",
    answer:
      "Eine gute Kindermatratze sollte den Körper gleichmäßig unterstützen, ohne zu weich zu sein. Wichtig sind zudem atmungsaktive Materialien, eine stabile Form und ein waschbarer Bezug. Gerade bei Babys und Kleinkindern spielen Hygiene und geprüfte Materialien eine entscheidende Rolle.",
  },
  {
    question: "Sind Arensberger Kindermatratzen für Babys geeignet?",
    answer:
      "Ja. Arensberger Kindermatratzen sind so aufgebaut, dass sie eine sanfte, aber stabile Unterstützung bieten. Der punktelastische Gelschaum passt sich dem Körper an, ohne tiefes Einsinken zuzulassen, und unterstützt eine natürliche Schlafposition von Anfang an.",
  },
  {
    question: "Warum ist ein waschbarer Bezug bei Kindermatratzen wichtig?",
    answer:
      "Im Alltag von Babys und Kindern lassen sich kleine Missgeschicke kaum vermeiden. Ein abnehmbarer und bis 60 °C waschbarer Bezug sorgt für ein hygienisches Schlafumfeld und erleichtert Eltern die regelmäßige Reinigung erheblich.",
  },
  {
    question: "Sind die Materialien der Kindermatratzen schadstoffgeprüft?",
    answer:
      "Ja. Arensberger Kindermatratzen sind als gesamte Matratze Öko-Tex zertifiziert und damit auf Schadstoffe geprüft. Das gibt Eltern Sicherheit und sorgt für ein gesundes Schlafumfeld für ihr Kind.",
  },
  {
    question:
      "Was ist der Unterschied zwischen einer normalen Kindermatratze und einer Reisebettmatratze?",
    answer:
      "Eine klassische Kindermatratze ist für den dauerhaften Einsatz im Kinder- oder Babybett gedacht. Eine Reisebettmatratze ist leichter, faltbar und für unterwegs konzipiert. Sie bietet ebenfalls komfortablen Schlaf, lässt sich aber zusätzlich platzsparend transportieren und teilweise auch als Spielunterlage nutzen.",
  },
];

const testimonials = [
  {
    quote:
      "Sehr angenehme Matratze für unser Baby. Sie wirkt hochwertig, nicht zu weich und nicht zu hart. Der Bezug ist leicht waschbar.",
    name: "Aleksandra K.",
  },
  {
    quote: "Passt perfekt ins Kinderbett und macht einen sicheren Eindruck. Unser Sohn schläft ruhig und entspannt.",
    name: "Luca B.",
  },
  { quote: "Kein unangenehmer Geruch und ein gutes Liegegefühl. Würde ich wieder kaufen.", name: "Nadia P." },
];

export default function KinderPage() {
  return (
    <>
      <SubHero
        eyebrow="Matratzen"
        title="Kindermatratzen"
        subtitle="Arensberger Kindermatratzen sind speziell auf die Bedürfnisse von Babys und Kindern abgestimmt — sanfte Druckentlastung, punktelastische Unterstützung und hohe Hygienestandards."
        imageLabel="Kinderzimmer mit Arensberger Kindermatratze"
        image="/images/kindermatratze-detail.jpg"
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
        <h2 className="font-heading font-bold text-2xl sm:text-3xl">Unsere Kindermatratzen</h2>
        <div className="mt-12 space-y-20">
          <ProductCard
            name="Arensberger Stadtmatratze"
            description="Verbindet komfortablen Schlaf mit spielerischer Interaktion. Der punktelastische Gelschaum sorgt für angenehme Unterstützung, während das kindgerechte Stadtmotiv die Matratze tagsüber zu einer vielseitigen Spielunterlage macht."
            imageLabel="Arensberger Stadtmatratze Kinderreisebett"
            image="/images/kinderreisebett.jpg"
            specs={[
              { label: "Größe", value: "60 × 120 cm" },
              { label: "Höhe", value: "ca. 6 cm" },
              { label: "Kern", value: "punktelastischer Gelschaum" },
              { label: "Besonderheit", value: "faltbar, inkl. Tragetasche" },
            ]}
          />

          <ProductCard
            reverse
            name="Arensberger NORA"
            description="Speziell für Babys und Kleinkinder entwickelt — steht für sicheren, sanften Schlaf von Anfang an. Der punktelastische Gelschaum unterstützt den kleinen Körper gleichmäßig."
            imageLabel="Arensberger NORA Kindermatratze im Kinderzimmer"
            image="/images/nora-kindermatratze.jpg"
            specs={[
              { label: "Größen", value: "60 × 120 cm, 70 × 140 cm" },
              { label: "Höhe", value: "ca. 12 cm" },
              { label: "Kern", value: "punktelastischer Gelschaum" },
              { label: "Zertifizierung", value: "Öko-Tex zertifiziert" },
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
