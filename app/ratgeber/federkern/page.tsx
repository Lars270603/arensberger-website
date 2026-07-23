import type { Metadata } from "next";
import SubHero from "@/components/SubHero";
import NestedCta from "@/components/NestedCta";
import ReadingProgress from "@/components/ratgeber/ReadingProgress";
import TableOfContents from "@/components/ratgeber/TableOfContents";
import ChapterDivider from "@/components/ratgeber/ChapterDivider";
import ChapterQuote from "@/components/ratgeber/ChapterQuote";
import DropCapParagraph from "@/components/ratgeber/DropCapParagraph";

export const metadata: Metadata = {
  title: "Ratgeber: Federkernmatratzen | Arensberger",
  description:
    "Federkernmatratzen – Was sind ihre Eigenschaften und für wen sind sie geeignet? Die drei Typen im Überblick.",
};

const toc = [
  { id: "typen", label: "Die drei Typen" },
  { id: "eigenschaften", label: "Eigenschaften" },
  { id: "schlaftypen", label: "Passende Schlaftypen" },
  { id: "vergleich", label: "Federkern oder Kaltschaum?" },
];

export default function RatgeberFederkernPage() {
  return (
    <>
      <ReadingProgress targetId="ratgeber-article" />
      <SubHero
        eyebrow="Ratgeber"
        title="Federkernmatratzen"
        subtitle="Was sind ihre Eigenschaften und für wen sind sie geeignet?"
        imageLabel="Querschnitt einer Federkernmatratze"
        image="/images/federkernmatratze-detail.jpg"
      />

      <div className="mx-auto max-w-6xl px-6 lg:px-10">
        <div className="flex gap-16 py-16 lg:py-20">
          <TableOfContents items={toc} />

          <article id="ratgeber-article" className="min-w-0 max-w-3xl flex-1">
            <p className="font-body text-xs uppercase tracking-[0.25em] text-accent">
              6 Min. Lesezeit
            </p>

            <h2 id="typen" className="mt-4 scroll-mt-32 font-heading font-bold text-2xl sm:text-3xl">
              Die drei verschiedenen Typen
            </h2>
            <DropCapParagraph>
              Der Kern von Federkernmatratzen besteht — wie der Name schon vermuten lässt — aus
              einer Vielzahl engmaschiger Stahlfedern. Diese verleihen der Matratze ihre
              elastische Eigenschaft. Man unterscheidet zwischen drei Arten von
              Federkernmatratzen:
            </DropCapParagraph>
            <ol className="mt-6 list-decimal space-y-2 pl-5 font-body text-lg text-secondary">
              <li>Bonellfederkernmatratzen</li>
              <li>Taschenfederkernmatratzen</li>
              <li>Tonnentaschenfederkernmatratzen</li>
            </ol>
            <p className="mt-6 font-body text-lg leading-relaxed text-secondary">
              <strong className="text-foreground">Bonellfederkernmatratzen</strong> besitzen
              taillierte Spiralfedern und haben eine eher geringe Anzahl an Federn. Sie eignen
              sich für Menschen mit geringerem Gewicht.
            </p>
            <p className="mt-4 font-body text-lg leading-relaxed text-secondary">
              Bei <strong className="text-foreground">Taschenfederkernmatratzen</strong> sind
              die zylindrischen Federn einzeln von einer Stofftasche umgeben. So können sich die
              Federn unabhängig voneinander bewegen — das sorgt für eine optimale
              Punktelastizität.
            </p>
            <p className="mt-4 font-body text-lg leading-relaxed text-secondary">
              <strong className="text-foreground">Tonnentaschenfederkernmatratzen</strong>{" "}
              besitzen „tonnenförmige“ Federn. Dabei haben die Federn in der Mitte einen größeren
              Durchmesser als an den Enden. Dies sorgt für ein etwas weicheres Liegegefühl als
              bei Taschenfederkernmatratzen.
            </p>

            <ChapterDivider
              eyebrow="Kapitel 02"
              title="Luft, die zirkuliert. Ruhe, die bleibt."
              variant="a"
            />

            <h2
              id="eigenschaften"
              className="scroll-mt-32 font-heading font-bold text-2xl sm:text-3xl"
            >
              Welche Eigenschaften haben Federkernmatratzen?
            </h2>
            <p className="mt-6 font-body text-lg leading-relaxed text-secondary">
              Federkernmatratzen passen sich im Vergleich zu Kaltschaummatratzen eher
              großflächiger dem Körper an und besitzen einen etwas härteren Härtegrad. Sie sorgen
              für eine hohe Stabilität. Dadurch eignen sie sich sehr gut für Personen mit einem
              mittleren bis hohen Gewicht. Bei leichten Personen empfehlen wir den Griff zu einer
              unserer Schaummatratzen.
            </p>
            <p className="mt-4 font-body text-lg leading-relaxed text-secondary">
              Matratzen mit Federkern zeichnen sich außerdem durch sehr gute Atmungsaktivität und
              Belüftungseigenschaft aus. Durch den Federkern kann die Luft optimal zirkulieren.
              Es findet ein konstanter Wärme- und Feuchtigkeitsaustausch statt, was für ein
              optimales Schlafklima sorgt.
            </p>

            <ChapterQuote>
              Einmal für eine hochwertige Federkernmatratze entschieden, hält diese für viele
              Jahre.
            </ChapterQuote>

            <h2
              id="schlaftypen"
              className="scroll-mt-32 font-heading font-bold text-2xl sm:text-3xl"
            >
              Zu welchen Schlaftypen passt eine Federkernmatratze?
            </h2>
            <p className="mt-6 font-body text-lg leading-relaxed text-secondary">
              Federkernmatratzen eignen sich aufgrund der guten Punktelastizität optimal für
              Bauch- und Rückenschläfer.
            </p>
            <p className="mt-4 font-body text-lg leading-relaxed text-secondary">
              Durch die hohe Atmungsaktivität sind Matratzen mit Federkern außerdem passend für
              Menschen, die im Schlaf schwitzen oder ein eher warmes Schlafumfeld haben. Sie
              sorgen für ein optimales Schlafklima und Feuchtigkeitsregulierung.
            </p>
            <p className="mt-4 font-body text-lg leading-relaxed text-secondary">
              Personen mit einem höheren Körpergewicht empfehlen wir Federkernmatratzen aufgrund
              der höheren Stabilität und des festeren Liegegefühls.
            </p>

            <h2
              id="vergleich"
              className="mt-10 scroll-mt-32 font-heading font-bold text-2xl sm:text-3xl"
            >
              Kurz gesagt: Federkern oder Kaltschaum?
            </h2>
            <p className="mt-6 font-body text-lg leading-relaxed text-secondary">
              Federkernmatratzen wirken fester und luftiger und bieten mehr Stabilität bei
              höherem Körpergewicht. Kaltschaummatratzen bieten ein körpernäheres, ruhigeres
              Liegegefühl mit hoher Punktelastizität — welche Variante besser passt, hängt vom
              persönlichen Schlafempfinden ab.
            </p>

            <div className="mt-16 flex justify-center">
              <NestedCta href="/matratzen/federkern">Unsere Federkernmatratzen entdecken</NestedCta>
            </div>
          </article>
        </div>
      </div>
    </>
  );
}
