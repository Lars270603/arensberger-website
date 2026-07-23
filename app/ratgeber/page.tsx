import type { Metadata } from "next";
import Link from "next/link";
import SubHero from "@/components/SubHero";
import BezelFrame from "@/components/BezelFrame";
import ArrowBadge from "@/components/ArrowBadge";
import Reveal from "@/components/Reveal";
import CoverArt from "@/components/ratgeber/CoverArt";

export const metadata: Metadata = {
  title: "Ratgeber | Arensberger",
  description:
    "Alles, was du über Matratzenmaterialien wissen musst — verständlich erklärt von Arensberger.",
};

const articles = [
  {
    title: "Federkernmatratzen",
    teaser:
      "Die drei Federkern-Typen, ihre Eigenschaften und welcher Schlaftyp zu welchem System passt.",
    href: "/ratgeber/federkern",
    readingTime: "6 Min.",
    tag: "Material",
    variant: "a" as const,
  },
  {
    title: "Schaumstoffmatratzen",
    teaser:
      "Kaltschaum, Komfortschaum, Memory- und Gelschaum im Vergleich — verständlich erklärt.",
    href: "/ratgeber/schaumstoff",
    readingTime: "7 Min.",
    tag: "Material",
    variant: "b" as const,
  },
];

export default function RatgeberPage() {
  return (
    <>
      <SubHero
        eyebrow="Ratgeber"
        title="Wissen rund um deinen Schlaf."
        subtitle="Materialien, Aufbauten und Eigenschaften verständlich erklärt — damit du die Matratze findest, die wirklich zu dir passt."
        imageLabel="Aufgeschlagenes Bett im Morgenlicht"
      />

      <section className="mx-auto max-w-7xl px-6 py-24 lg:px-10">
        <div className="grid grid-cols-1 gap-x-8 gap-y-16 sm:grid-cols-2">
          {articles.map((article, index) => (
            <Reveal key={article.href} delay={index * 100}>
              <Link href={article.href} className="group block">
                <BezelFrame
                  dark
                  className="transition-shadow duration-500 group-hover:shadow-[0_30px_60px_-20px_rgba(28,28,30,0.35)]"
                >
                  <CoverArt variant={article.variant} />
                </BezelFrame>
                <div className="mt-5 flex items-center gap-3 font-body text-xs uppercase tracking-[0.2em] text-secondary">
                  <span className="rounded-full bg-accent/10 px-3 py-1 text-accent">{article.tag}</span>
                  <span>{article.readingTime} Lesezeit</span>
                </div>
                <h2 className="mt-3 font-heading font-bold text-xl">{article.title}</h2>
                <p className="mt-2 font-body text-secondary">{article.teaser}</p>
                <span className="mt-3 inline-flex items-center gap-2 font-body text-sm text-accent">
                  Artikel lesen
                  <ArrowBadge size="sm" />
                </span>
              </Link>
            </Reveal>
          ))}
        </div>
      </section>
    </>
  );
}
