import Link from "next/link";

export default function NestedCta({
  href,
  children,
  light = false,
}: {
  href: string;
  children: React.ReactNode;
  light?: boolean;
}) {
  return (
    <Link
      href={href}
      className={`group inline-flex w-fit items-center gap-3 rounded-full py-2 pl-6 pr-2 font-body text-sm transition-all duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] active:scale-[0.98] ${
        light
          ? "bg-white text-accent-dark hover:bg-white/90"
          : "bg-accent text-white hover:bg-accent-dark"
      }`}
    >
      {children}
      <span
        className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full transition-transform duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] group-hover:translate-x-1 group-hover:-translate-y-[1px] group-hover:scale-105 ${
          light ? "bg-accent/10" : "bg-white/15"
        }`}
      >
        ↗
      </span>
    </Link>
  );
}
