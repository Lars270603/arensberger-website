import Image from "next/image";
import Link from "next/link";
import PlaceholderImage from "./PlaceholderImage";
import Reveal from "./Reveal";
import { mattressCategories } from "./MattressGrid";

export default function MattressBentoGrid() {
  return (
    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-6">
      {mattressCategories.map((category, index) => {
        const large = index === 0;
        return (
          <Reveal
            key={category.href}
            delay={index * 90}
            className={large ? "sm:col-span-2 lg:col-span-4" : "lg:col-span-2"}
          >
            <Link href={category.href} className="group block h-full">
              <div className="h-full rounded-[2rem] bg-black/5 p-2 ring-1 ring-black/5 transition-shadow duration-500 hover:shadow-[0_30px_60px_-20px_rgba(28,28,30,0.25)]">
                <div
                  className={`relative w-full overflow-hidden rounded-[calc(2rem-0.5rem)] ${
                    large ? "aspect-[16/10]" : "aspect-square sm:aspect-[4/5]"
                  }`}
                >
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
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/0 to-black/0" />

                  <div className="absolute inset-x-0 bottom-0 flex items-end justify-between p-6">
                    <div>
                      <span className="font-heading text-xs font-bold text-white/70">
                        {String(index + 1).padStart(2, "0")}
                      </span>
                      <h3 className="mt-1 font-heading text-xl font-bold text-white sm:text-2xl">
                        {category.title}
                      </h3>
                      <p className={`mt-2 font-body text-sm text-white/80 ${large ? "max-w-sm" : "max-w-[16rem]"}`}>
                        {category.teaser}
                      </p>
                    </div>
                    <span
                      className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-white/15 text-white backdrop-blur-xl transition-transform duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] group-hover:translate-x-1 group-hover:-translate-y-1"
                      aria-hidden="true"
                    >
                      ↗
                    </span>
                  </div>
                </div>
              </div>
            </Link>
          </Reveal>
        );
      })}
    </div>
  );
}
