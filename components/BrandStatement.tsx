import SinceBadge from "./SinceBadge";
import Reveal from "./Reveal";

const facts = [
  { value: "1.000.000+", label: "Menschen schlafen bereits auf einer Arensberger", rotate: "sm:-rotate-2" },
  { value: "Öko-Tex®", label: "Zertifizierte Qualität in jeder einzelnen Matratze", rotate: "" },
  { value: "0", label: "Zwischenhändler zwischen unserer Produktion und deinem Schlafzimmer", rotate: "sm:rotate-2" },
];

export default function BrandStatement() {
  return (
    <section className="bg-accent text-white">
      <div className="mx-auto max-w-7xl px-4 py-32 sm:px-6 lg:px-10 lg:py-40">
        <div className="flex flex-col gap-16 lg:flex-row lg:items-start lg:gap-24">
          <Reveal>
            <SinceBadge variant="light" className="lg:mt-2" />
          </Reveal>

          <div className="max-w-2xl">
            <Reveal>
              <p className="inline-flex rounded-full bg-white/10 px-3 py-1 font-body text-[10px] uppercase tracking-[0.25em] text-white/70">
                Der Grund, warum es uns gibt
              </p>
            </Reveal>
            <Reveal delay={120}>
              <p className="mt-6 font-serif italic text-3xl leading-snug sm:text-5xl">
                Wir wollten keine neue Matratzenmarke gründen. Wir wollten nur
                endlich eine finden, die hält, was sie verspricht.
              </p>
            </Reveal>
          </div>
        </div>

        <div className="mt-20 grid grid-cols-1 gap-8 sm:grid-cols-3">
          {facts.map((fact, index) => (
            <Reveal key={fact.value} delay={index * 120}>
              <div className={`rounded-[2rem] bg-white/10 p-2 ring-1 ring-white/15 ${fact.rotate} transition-transform duration-500 hover:rotate-0`}>
                <div className="rounded-[calc(2rem-0.5rem)] bg-accent-dark/40 px-8 py-10 shadow-[inset_0_1px_1px_rgba(255,255,255,0.15)]">
                  <p className="font-heading text-4xl font-bold sm:text-5xl">{fact.value}</p>
                  <p className="mt-4 font-body text-white/75">{fact.label}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
