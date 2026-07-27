import Image from "next/image";
import ParallaxLayer from "./ParallaxLayer";
import HeroCta from "./HeroCta";
import HeroScrollIndicator from "./HeroScrollIndicator";

export default function Hero() {
  return (
    <section className="relative h-[100dvh] w-full overflow-hidden">
      <ParallaxLayer
        className="absolute inset-x-0"
        style={{ top: -200, height: "calc(100% + 400px)" }}
        strength={0.2}
      >
        <Image
          src="/images/schlafzimmer-morgenlicht.jpg"
          alt="Schlafzimmer im Morgenlicht mit Arensberger Matratze im Kontext"
          fill
          priority
          className="h-full object-cover"
        />
      </ParallaxLayer>

      <div className="absolute inset-0 bg-[linear-gradient(to_top,rgba(31,35,80,0.75)_0%,rgba(0,0,0,0.25)_45%,transparent_100%)]" />

      <div className="relative z-10 flex h-full flex-col items-center justify-center px-4 text-center sm:px-6">
        <HeroCta />
      </div>

      <HeroScrollIndicator />
    </section>
  );
}
