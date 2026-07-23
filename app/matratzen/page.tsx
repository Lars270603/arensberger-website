import type { Metadata } from "next";
import SubHero from "@/components/SubHero";
import MattressGrid from "@/components/MattressGrid";

export const metadata: Metadata = {
  title: "Matratzen | Arensberger",
  description:
    "Fünf Matratzensysteme von Arensberger — von klassischem Federkern bis zum Topper für die vorhandene Matratze.",
};

export default function MatratzenPage() {
  return (
    <>
      <SubHero
        eyebrow="Matratzen"
        title="Fünf Systeme. Ein Ziel: guter Schlaf."
        subtitle="Seit 2004 entwickeln wir Matratzen, die zu unterschiedlichen Körpern, Gewohnheiten und Schlafpositionen passen — nicht umgekehrt."
        imageLabel="Schlafzimmer mit Arensberger Matratze im Morgenlicht"
      />

      <section className="mx-auto max-w-7xl px-6 py-24 lg:px-10">
        <div className="max-w-2xl">
          <h2 className="font-heading font-bold text-3xl sm:text-4xl">
            Welches System passt zu dir?
          </h2>
          <p className="mt-4 font-body text-secondary text-lg">
            Jedes unserer fünf Systeme löst ein anderes Schlafbedürfnis — wähle nach
            Liegegefühl, Schlafposition oder Material.
          </p>
        </div>

        <div className="mt-14">
          <MattressGrid />
        </div>
      </section>
    </>
  );
}
