import Reveal from "./Reveal";

type Testimonial = {
  quote: string;
  name: string;
};

export default function Testimonials({ items }: { items: Testimonial[] }) {
  return (
    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {items.map((item, index) => (
        <Reveal key={item.name} delay={index * 100} className="h-full">
          <div className="h-full rounded-[1.5rem] bg-white/70 p-2 ring-1 ring-black/5">
            <div className="h-full rounded-[calc(1.5rem-0.5rem)] bg-background px-6 py-7">
              <p className="font-body text-lg leading-relaxed">„{item.quote}“</p>
              <p className="mt-4 font-body text-sm text-secondary">{item.name}</p>
            </div>
          </div>
        </Reveal>
      ))}
    </div>
  );
}
