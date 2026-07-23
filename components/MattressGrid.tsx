import Image from "next/image";
import Link from "next/link";
import PlaceholderImage from "./PlaceholderImage";
import BezelFrame from "./BezelFrame";
import ArrowBadge from "./ArrowBadge";
import Reveal from "./Reveal";

export type MattressCategory = {
  title: string;
  teaser: string;
  href: string;
  image?: string;
};

export const mattressCategories: MattressCategory[] = [
  {
    title: "Federkern",
    teaser: "Klassische Stützkraft mit natürlicher Luftzirkulation.",
    href: "/matratzen/federkern",
    image: "/images/federkernmatratze.jpg",
  },
  {
    title: "Gelschaum",
    teaser: "Kühlender Komfort, der sich exakt an deinen Körper anpasst.",
    href: "/matratzen/gelschaum",
    image: "/images/gelschaummatratze.jpg",
  },
  {
    title: "Kinder",
    teaser: "Sicherer, gesunder Schlaf fürs Kinderzimmer.",
    href: "/matratzen/kinder",
    image: "/images/kinderreisebett.jpg",
  },
  {
    title: "Kaltschaum",
    teaser: "Punktelastisch und druckentlastend für ruhige Nächte.",
    href: "/matratzen/kaltschaum",
    image: "/images/kaltschaummatratze.jpg",
  },
  {
    title: "Topper",
    teaser: "Der letzte Feinschliff für die Matratze, die du schon hast.",
    href: "/matratzen/topper",
    image: "/images/toppermatratze.jpg",
  },
];

export default function MattressGrid({ categories = mattressCategories }: { categories?: MattressCategory[] }) {
  return (
    <div className="grid grid-cols-1 gap-x-8 gap-y-14 sm:grid-cols-2 lg:grid-cols-3">
      {categories.map((category, index) => (
        <Reveal key={category.href} delay={index * 80}>
          <Link href={category.href} className="group block">
            <BezelFrame className="transition-shadow duration-500 group-hover:shadow-[0_30px_60px_-20px_rgba(28,28,30,0.25)]">
              <div className="relative aspect-video w-full overflow-hidden">
                {category.image ? (
                  <Image
                    src={category.image}
                    alt={`${category.title} Matratze im Wohnkontext`}
                    fill
                    className="object-cover transition-transform duration-700 ease-[cubic-bezier(0.32,0.72,0,1)] group-hover:scale-105"
                  />
                ) : (
                  <PlaceholderImage label={`${category.title} Matratze im Wohnkontext`} fill />
                )}
              </div>
            </BezelFrame>
            <div className="mt-5 flex items-baseline gap-3">
              <span className="font-heading font-bold text-accent text-sm">
                {String(index + 1).padStart(2, "0")}
              </span>
              <h3 className="font-heading font-bold text-xl">{category.title}</h3>
            </div>
            <p className="mt-2 font-body text-secondary">{category.teaser}</p>
            <span className="mt-3 inline-flex items-center gap-2 font-body text-sm text-accent">
              Mehr erfahren
              <ArrowBadge size="sm" />
            </span>
          </Link>
        </Reveal>
      ))}
    </div>
  );
}
