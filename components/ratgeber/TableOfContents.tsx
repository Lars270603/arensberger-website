"use client";

import { useEffect, useState } from "react";

type Item = { id: string; label: string };

export default function TableOfContents({ items }: { items: Item[] }) {
  const [active, setActive] = useState(items[0]?.id);

  useEffect(() => {
    const headings = items
      .map((item) => document.getElementById(item.id))
      .filter((el): el is HTMLElement => el !== null);

    const updateActive = () => {
      const line = window.innerHeight * 0.3;
      let current = headings[0]?.id;
      for (const heading of headings) {
        if (heading.getBoundingClientRect().top <= line) {
          current = heading.id;
        }
      }
      if (current) setActive(current);
    };

    updateActive();
    window.addEventListener("scroll", updateActive, { passive: true });
    window.addEventListener("resize", updateActive);
    return () => {
      window.removeEventListener("scroll", updateActive);
      window.removeEventListener("resize", updateActive);
    };
  }, [items]);

  return (
    <nav className="sticky top-32 hidden w-52 shrink-0 lg:block">
      <p className="font-body text-xs uppercase tracking-[0.25em] text-secondary">Inhalt</p>
      <ul className="mt-4 space-y-1 border-l border-surface">
        {items.map((item) => (
          <li key={item.id}>
            <a
              href={`#${item.id}`}
              className={`-ml-px block border-l-2 py-1.5 pl-4 font-body text-sm transition-colors duration-200 ${
                active === item.id
                  ? "border-accent text-accent"
                  : "border-transparent text-secondary hover:text-foreground"
              }`}
            >
              {item.label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
