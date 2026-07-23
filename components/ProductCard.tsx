import Image from "next/image";
import PlaceholderImage from "./PlaceholderImage";
import BezelFrame from "./BezelFrame";
import Reveal from "./Reveal";

type Spec = {
  label: string;
  value: string;
};

type ProductCardProps = {
  name: string;
  description: string;
  specs: Spec[];
  imageLabel: string;
  image?: string;
  reverse?: boolean;
};

export default function ProductCard({ name, description, specs, imageLabel, image, reverse = false }: ProductCardProps) {
  return (
    <Reveal>
      <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:items-center">
        <BezelFrame className={reverse ? "lg:order-2" : ""}>
          {image ? (
            <div className="relative aspect-video w-full">
              <Image src={image} alt={imageLabel} fill className="object-cover" />
            </div>
          ) : (
            <PlaceholderImage label={imageLabel} />
          )}
        </BezelFrame>

        <div className={reverse ? "lg:order-1" : ""}>
          <h3 className="font-heading font-bold text-2xl">{name}</h3>
          <p className="mt-3 font-body text-secondary text-lg">{description}</p>

          <dl className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-2">
            {specs.map((spec) => (
              <div key={spec.label} className="rounded-2xl bg-surface/70 px-4 py-3">
                <dt className="font-body text-xs uppercase tracking-[0.15em] text-secondary">
                  {spec.label}
                </dt>
                <dd className="mt-1 font-body text-sm">{spec.value}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </Reveal>
  );
}
