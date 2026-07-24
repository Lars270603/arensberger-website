"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";

const matratzenLinks = [
  { label: "Federkern", href: "/matratzen/federkern" },
  { label: "Gelschaum", href: "/matratzen/gelschaum" },
  { label: "Kinder", href: "/matratzen/kinder" },
  { label: "Kaltschaum", href: "/matratzen/kaltschaum" },
  { label: "Topper", href: "/matratzen/topper" },
];

const ratgeberLinks = [
  { label: "Federkern", href: "/ratgeber/federkern" },
  { label: "Schaumstoff", href: "/ratgeber/schaumstoff" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  const solid = scrolled || menuOpen;

  return (
    <header
      className={`fixed inset-x-0 top-9 z-40 transition-colors duration-300 ${
        solid
          ? "bg-background/95 backdrop-blur shadow-sm text-foreground"
          : "bg-transparent text-white"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5 lg:px-10">
        <Link href="/" className="flex items-center" onClick={() => setMenuOpen(false)}>
          <Image
            src={solid ? "/images/logo-arensberger-blau.png" : "/images/logo-arensberger-weiss.png"}
            alt="Arensberger"
            width={140}
            height={39}
            priority
            className="h-8 w-auto"
          />
        </Link>

        <nav className="hidden items-center gap-9 font-body text-sm md:flex">
          <Link href="/" className="hover:text-accent transition-colors">
            Start
          </Link>

          <div className="group relative">
            <button className="hover:text-accent transition-colors" aria-haspopup="true">Matratzen</button>
            <div className="invisible absolute left-1/2 top-full -translate-x-1/2 pt-4 opacity-0 transition-opacity duration-200 group-hover:visible group-hover:opacity-100 group-focus-within:visible group-focus-within:opacity-100">
              <ul className="min-w-[180px] rounded-md bg-background text-foreground shadow-lg ring-1 ring-black/5">
                {matratzenLinks.map((item) => (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className="block px-5 py-3 text-sm hover:text-accent hover:bg-surface"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="group relative">
            <button className="hover:text-accent transition-colors" aria-haspopup="true">Ratgeber</button>
            <div className="invisible absolute left-1/2 top-full -translate-x-1/2 pt-4 opacity-0 transition-opacity duration-200 group-hover:visible group-hover:opacity-100 group-focus-within:visible group-focus-within:opacity-100">
              <ul className="min-w-[180px] rounded-md bg-background text-foreground shadow-lg ring-1 ring-black/5">
                {ratgeberLinks.map((item) => (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className="block px-5 py-3 text-sm hover:text-accent hover:bg-surface"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <Link href="/nanocell" className="hover:text-accent transition-colors">
            Nanocell
          </Link>
          <Link href="/ueber-uns" className="hover:text-accent transition-colors">
            Über uns
          </Link>
          <a
            href="https://www.albatros-shop.de"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 hover:text-accent transition-colors"
          >
            Shop
            <span aria-hidden className="text-xs">
              ↗
            </span>
          </a>
        </nav>

        <button
          type="button"
          aria-label={menuOpen ? "Menü schließen" : "Menü öffnen"}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((open) => !open)}
          className="relative z-50 flex h-8 w-8 flex-col items-center justify-center gap-[5px] md:hidden"
        >
          <span
            className={`block h-px w-6 bg-current transition-transform duration-200 ${
              menuOpen ? "translate-y-[3px] rotate-45" : ""
            }`}
          />
          <span
            className={`block h-px w-6 bg-current transition-transform duration-200 ${
              menuOpen ? "-translate-y-[3px] -rotate-45" : ""
            }`}
          />
        </button>
      </div>

      <div
        className={`grid overflow-hidden bg-background text-foreground transition-[grid-template-rows] duration-300 md:hidden ${
          menuOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
        }`}
      >
        <div className="min-h-0">
          <nav className="flex flex-col gap-1 px-6 pb-8 pt-2 font-body text-base">
            <Link href="/" className="py-3" onClick={() => setMenuOpen(false)}>
              Start
            </Link>

            <details className="group">
              <summary className="cursor-pointer list-none py-3 marker:content-none">
                Matratzen
              </summary>
              <div className="flex flex-col gap-1 pl-4">
                {matratzenLinks.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="py-2 text-secondary"
                    onClick={() => setMenuOpen(false)}
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            </details>

            <details className="group">
              <summary className="cursor-pointer list-none py-3 marker:content-none">
                Ratgeber
              </summary>
              <div className="flex flex-col gap-1 pl-4">
                {ratgeberLinks.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="py-2 text-secondary"
                    onClick={() => setMenuOpen(false)}
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            </details>

            <Link href="/nanocell" className="py-3" onClick={() => setMenuOpen(false)}>
              Nanocell
            </Link>
            <Link href="/ueber-uns" className="py-3" onClick={() => setMenuOpen(false)}>
              Über uns
            </Link>
            <a
              href="https://www.albatros-shop.de"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 py-3"
              onClick={() => setMenuOpen(false)}
            >
              Shop
              <span aria-hidden className="text-xs">
                ↗
              </span>
            </a>
          </nav>
        </div>
      </div>
    </header>
  );
}
