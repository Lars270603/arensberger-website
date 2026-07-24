import Link from "next/link";
import Image from "next/image";

const links = [
  { label: "Start", href: "/" },
  { label: "Matratzen", href: "/matratzen" },
  { label: "Ratgeber", href: "/ratgeber" },
  { label: "Nanocell", href: "/nanocell" },
  { label: "Über uns", href: "/ueber-uns" },
];

export default function Footer() {
  return (
    <footer className="border-t-2 border-accent bg-background">
      <div className="mx-auto max-w-7xl px-6 py-14 lg:px-10">
        <div className="flex flex-col gap-8 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <Image
              src="/images/logo-arensberger-blau.png"
              alt="Arensberger"
              width={140}
              height={39}
              className="h-8 w-auto"
            />
            <p className="mt-2 font-body text-xs uppercase tracking-[0.15em] text-accent">
              Seit 2004
            </p>
            <p className="mt-1 font-body text-xs text-secondary">
              Entwickelt in der Vulkaneifel
            </p>
          </div>

          <nav className="flex flex-wrap gap-x-8 gap-y-3 font-body text-sm text-secondary">
            {links.map((link) => (
              <Link key={link.href} href={link.href} className="hover:text-accent transition-colors">
                {link.label}
              </Link>
            ))}
          </nav>
        </div>

        <div className="mt-10 flex flex-col gap-4 border-t border-surface pt-8 text-sm text-secondary sm:flex-row sm:items-center sm:justify-between">
          <p>© 2026 Arensberger.</p>
          <div className="flex gap-6">
            <Link href="/impressum" className="hover:text-accent transition-colors">
              Impressum
            </Link>
            <Link href="/datenschutz" className="hover:text-accent transition-colors">
              Datenschutz
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
