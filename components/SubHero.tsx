import Image from "next/image";
import PlaceholderImage from "./PlaceholderImage";
import ParallaxLayer from "./ParallaxLayer";
import Reveal from "./Reveal";

type SubHeroProps = {
  eyebrow: string;
  title: string;
  subtitle?: string;
  imageLabel: string;
  image?: string;
  imagePosition?: string;
};

export default function SubHero({
  eyebrow,
  title,
  subtitle,
  imageLabel,
  image,
  imagePosition = "object-center",
}: SubHeroProps) {
  return (
    <section className="relative flex h-[70vh] min-h-[480px] w-full items-end overflow-hidden">
      {image ? (
        <ParallaxLayer
          className="absolute inset-x-0"
          style={{ top: -80, height: "calc(100% + 160px)" }}
          strength={0.15}
        >
          <Image
            src={image}
            alt={imageLabel}
            fill
            priority
            className={`h-full object-cover ${imagePosition}`}
          />
        </ParallaxLayer>
      ) : (
        <PlaceholderImage label={imageLabel} fill className="absolute inset-0" />
      )}

      <div className="absolute inset-0 bg-gradient-to-t from-accent-dark/90 via-black/30 to-black/10" />

      <div className="relative mx-auto w-full max-w-7xl px-4 pb-8 sm:px-6 lg:px-10">
        <Reveal>
          <span className="mb-4 inline-flex w-fit items-center gap-2 rounded-full border border-white/30 bg-white/10 px-4 py-1.5 font-body text-[10px] uppercase tracking-[0.25em] text-white backdrop-blur-2xl">
            {eyebrow}
          </span>
        </Reveal>
        <Reveal delay={100}>
          <h1 className="text-balance font-heading font-bold text-2xl text-white sm:text-3xl lg:text-4xl max-w-2xl">
            {title}
          </h1>
        </Reveal>
        {subtitle && (
          <Reveal delay={200}>
            <p className="mt-5 max-w-xl font-body text-white/90 text-lg">{subtitle}</p>
          </Reveal>
        )}
      </div>
    </section>
  );
}
