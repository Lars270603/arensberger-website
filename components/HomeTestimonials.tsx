import Reveal from "./Reveal";
import Testimonials from "./Testimonials";

const items = [
  { quote: "Sehr angenehmes Liegegefühl, genau wie beschrieben.", name: "Thomas K., Federkern" },
  {
    quote: "Angenehmer Liegekomfort mit guter Druckentlastung. Schlafe spürbar ruhiger.",
    name: "Katharina H., Gelschaum",
  },
  {
    quote: "Hatte vorher Probleme mit einer zu festen Matratze. Mit dem Topper schlafe ich spürbar besser.",
    name: "Thomas N., Topper",
  },
];

export default function HomeTestimonials() {
  return (
    <section className="bg-surface">
      <div className="mx-auto max-w-7xl px-4 py-32 sm:px-6 lg:px-10 lg:py-40">
        <div className="max-w-2xl">
          <Reveal>
            <p className="inline-flex rounded-full bg-accent/10 px-3 py-1 font-body text-[10px] uppercase tracking-[0.25em] text-accent">
              Über 1.000.000 mal bestätigt
            </p>
          </Reveal>
          <Reveal delay={100}>
            <h2 className="mt-6 text-balance font-heading text-4xl font-bold sm:text-6xl">
              Das sagen <span className="font-serif italic font-medium">unsere Kunden.</span>
            </h2>
          </Reveal>
        </div>

        <div className="mt-16">
          <Testimonials items={items} />
        </div>
      </div>
    </section>
  );
}
