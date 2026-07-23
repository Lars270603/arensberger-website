import type { Metadata } from "next";
import SubHero from "@/components/SubHero";
import NestedCta from "@/components/NestedCta";
import ReadingProgress from "@/components/ratgeber/ReadingProgress";
import TableOfContents from "@/components/ratgeber/TableOfContents";
import ChapterDivider from "@/components/ratgeber/ChapterDivider";
import ChapterQuote from "@/components/ratgeber/ChapterQuote";
import DropCapParagraph from "@/components/ratgeber/DropCapParagraph";

export const metadata: Metadata = {
  title: "Ratgeber: Schaumstoffmatratzen | Arensberger",
  description:
    "Welche Eigenschaften haben Kaltschaummatratzen und für wen sind sie geeignet? Kaltschaum, Komfortschaum, Visco und Gel im Vergleich.",
};

const toc = [
  { id: "unterschied", label: "Kaltschaum vs. Komfortschaum" },
  { id: "eigenschaften", label: "Eigenschaften" },
  { id: "schlaftypen", label: "Passende Schlaftypen" },
  { id: "visco-gel", label: "Visco & Gel" },
];

export default function RatgeberSchaumstoffPage() {
  return (
    <>
      <ReadingProgress targetId="ratgeber-article" />
      <SubHero
        eyebrow="Ratgeber"
        title="Schaumstoffmatratzen"
        subtitle="Welche Eigenschaften haben Kaltschaummatratzen und für wen sind sie geeignet?"
        imageLabel="Querschnitt einer Schaumstoffmatratze"
        image="/images/gelschaummatratze-detail.jpg"
      />

      <div className="mx-auto max-w-6xl px-6 lg:px-10">
        <div className="flex gap-16 py-16 lg:py-20">
          <TableOfContents items={toc} />

          <article id="ratgeber-article" className="min-w-0 max-w-3xl flex-1">
            <p className="font-body text-xs uppercase tracking-[0.25em] text-accent">
              7 Min. Lesezeit
            </p>

            <h2
              id="unterschied"
              className="mt-4 scroll-mt-32 font-heading font-bold text-2xl sm:text-3xl"
            >
              Kaltschaum und Komfortschaum — was ist der Unterschied?
            </h2>
            <DropCapParagraph>
              Als Kern von Schaumstoffmatratzen wird entweder Kaltschaum oder Komfortschaum
              verwendet. Kaltschaum härtet bei Temperaturen unter 100 °C aus, Komfortschaum wird
              hingegen bei sehr hohen Temperaturen hergestellt. Neben dem Herstellungsprozess
              unterscheiden sich auch die Eigenschaften der beiden Schaumstoffe: Komfortschaum
              ist atmungsaktiver als Kaltschaum. Kaltschaum ist allgemein hochwertiger und
              langlebiger als Komfortschaum.
            </DropCapParagraph>
            <p className="mt-4 font-body text-lg leading-relaxed text-secondary">
              Ein wesentliches Qualitätsmerkmal liegt außerdem im Raumgewicht des Kalt- oder
              Komfortschaums. Allgemein gilt: Je höher das Raumgewicht, desto besser die
              Rückstellkraft, Formstabilität und Lebensdauer der Matratze. Wir empfehlen ein
              Raumgewicht von mindestens 30 kg pro Kubikmeter.
            </p>

            <ChapterDivider
              eyebrow="Kapitel 02"
              title="Sieben Zonen. Ein Körper."
              variant="b"
            />

            <h2
              id="eigenschaften"
              className="scroll-mt-32 font-heading font-bold text-2xl sm:text-3xl"
            >
              Welche Eigenschaften haben Kaltschaummatratzen?
            </h2>
            <p className="mt-6 font-body text-lg leading-relaxed text-secondary">
              Kaltschaummatratzen werden häufig in verschiedene Liegezonen aufgeteilt. Hierbei
              ist die Einteilung in 7 Zonen zum Klassiker geworden, teilweise werden Matratzen
              sogar in 9 Schlafzonen eingeteilt. Diese Schlafzonen stützen die jeweiligen
              Körperregionen optimal.
            </p>
            <p className="mt-4 font-body text-lg leading-relaxed text-secondary">
              Schaumstoffmatratzen weisen eine hervorragende Punktelastizität vor. Sie passen
              sich sehr gut dem menschlichen Körper an und sorgen für eine bestmögliche
              Druckentlastung. Dadurch sind sie auch für Menschen mit Rückenschmerzen oder
              anderen körperlichen Beeinträchtigungen bestens geeignet.
            </p>
            <p className="mt-4 font-body text-lg leading-relaxed text-secondary">
              Allgemein ist das Liegegefühl von Kaltschaummatratzen eher weich, insbesondere im
              Vergleich zu Federkernmatratzen. Der Härtegrad unterscheidet sich je nach
              gewähltem Material jedoch stark, sodass auch härtere Härtegrade erreicht werden
              können.
            </p>

            <ChapterQuote>
              Schaumstoff speichert Wärme — deshalb eignen sich Kaltschaum-Matratzen sehr gut für
              Fröstler.
            </ChapterQuote>

            <p className="font-body text-lg leading-relaxed text-secondary">
              Menschen, die im Schlaf eher zum Schwitzen neigen, sollten sich hingegen für eine
              Federkernmatratze entscheiden. Kaltschaummatratzen sind außerdem geräuschlos: Durch
              die hohe Federungs- und Rückstellkraft kehren sie nach Belastung schnell und leise
              wieder in ihre Ausgangsform zurück.
            </p>
            <p className="mt-4 font-body text-lg leading-relaxed text-secondary">
              Auch wenn Kaltschaummatratzen eine hohe Lebensdauer von bis zu 10 Jahren haben,
              empfehlen wir die Matratze unabhängig von der Qualität nach 5 Jahren zu wechseln.
            </p>

            <h2
              id="schlaftypen"
              className="mt-10 scroll-mt-32 font-heading font-bold text-2xl sm:text-3xl"
            >
              Für welche Schlaftypen eignen sich Kaltschaummatratzen?
            </h2>
            <p className="mt-6 font-body text-lg leading-relaxed text-secondary">
              Kaltschaummatratzen eignen sich für alle Schlaftypen: Bauchschläfer, Seitenschläfer
              und Rückenschläfer. Durch die Einteilung in verschiedene Zonen und die gute
              Punktelastizität wird jeder Körperteil optimal unterstützt und vom Druck entlastet.
              Bei Menschen mit einem höheren Gewicht raten wir jedoch zur Federkernmatratze, da
              diese mehr Stabilität bietet.
            </p>
            <p className="mt-4 font-body text-lg leading-relaxed text-secondary">
              Aufgrund dieser Eigenschaften eignen sich Schaumstoffmatratzen auch bestens für
              Menschen mit Rückenproblemen sowie für leichte Seitenschläfer. Für Fröstler und
              Allergiker sind Kaltschaummatratzen ebenfalls sehr gut geeignet. Durch das
              geräuschlose und schnelle Rückfedern eignen sie sich außerdem optimal für unruhige
              Schläfer.
            </p>

            <h2
              id="visco-gel"
              className="mt-10 scroll-mt-32 font-heading font-bold text-2xl sm:text-3xl"
            >
              Visco-Schaum (Memory-Schaum) und Gel — was bringt das?
            </h2>
            <p className="mt-6 font-body text-lg leading-relaxed text-secondary">
              Besonders hochwertige Matratzen besitzen neben dem Kern aus Kalt- oder
              Komfortschaum eine weitere Schicht aus Memory-Schaum (auch Visco Smart Schaum) oder
              Gel. Bei der Herstellung von Visco-Schaum kommen besonders viele
              Formgedächtnispolymere zum Einsatz. Diese sorgen dafür, dass Visco-Matratzen
              besonders weich und anpassungsfähig werden — allerdings nur, wenn die Matratze
              durch die Körpertemperatur aufgewärmt wird.
            </p>
            <p className="mt-4 font-body text-lg leading-relaxed text-secondary">
              Einige Schaumstoffmatratzen besitzen eine zusätzliche Schicht aus Gel, welche
              ähnlich wie ein Wasserbett funktioniert. Gelschaum ist eine Weiterentwicklung von
              Viscoschaum. Der Unterschied liegt in der Wärmeabhängigkeit: Gelmatratzen besitzen
              ihre Eigenschaften wärmeunabhängig, während Viscomatratzen die spezifischen
              Eigenschaften erst ab einer gewissen Temperatur erhalten.
            </p>

            <div className="mt-16 flex justify-center">
              <NestedCta href="/matratzen/kaltschaum">Unsere Kaltschaummatratzen entdecken</NestedCta>
            </div>
          </article>
        </div>
      </div>
    </>
  );
}
