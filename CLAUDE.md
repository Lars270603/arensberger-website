# CLAUDE.md — Arensberger Markenseite

Diese Datei ist die verbindliche Arbeitsgrundlage für die Entwicklung der Website **arensberger.de**.
Für visuelle Gestaltungsregeln siehe [DESIGN.md](./DESIGN.md).

## Projektart

Reine **Markenseite** für Arensberger. Kein Onlineshop.

**Ausdrücklich NICHT Teil dieses Projekts:**
- Kein Warenkorb
- Kein Checkout / keine Kaufabwicklung
- Keine Preisanzeige mit "Jetzt kaufen"-Logik
- Kein Produktfilter/Sortier-UI wie in Shopsystemen

Ziel ist Markenerlebnis, Vertrauen und Information — nicht Conversion im E-Commerce-Sinn. Ein dezenter Verweis auf Handelspartner/Wo-kaufen ist denkbar, aber kein eigener Bestellprozess.

## Tech-Stack (final bestätigt)

- **Framework:** Next.js (App Router), TypeScript
- **Styling:** Tailwind CSS
- **Bilder:** `next/image` für automatische Optimierung/Lazy-Loading
- **Rendering:** Statisch generiert (SSG) — keine Datenbank, keine Nutzerkonten nötig
- **Hosting:** Netlify
- **Domain:** `arensberger.de` bleibt bei **IONOS** registriert. DNS wird bei IONOS so umgestellt, dass die Domain auf Netlify zeigt (kein Domain-Umzug, nur DNS-Änderung). Konkrete DNS-Einträge (Netlify-Nameserver oder A/CNAME-Records) werden beim Deployment-Setup festgelegt.

## Seitenstruktur

```
/                          Startseite
/matratzen                 Matratzen — Übersicht
  /matratzen/federkern
  /matratzen/gelschaum
  /matratzen/kinder
  /matratzen/kaltschaum
  /matratzen/topper
/ratgeber                  Ratgeber — Übersicht
  /ratgeber/federkern
  /ratgeber/schaumstoff
/nanocell                  Eigenständige Technologie-/Markenseite
/ueber-uns                 Über uns
```

- Jede Unterseite unter `/matratzen` und `/ratgeber` ist eine eigene Route, keine reinen Anker-Sprünge auf einer Sammelseite.
- Navigation zeigt die Hauptebene (Matratzen, Ratgeber, Nanocell, Über uns); die Unterseiten erscheinen als Subnavigation/Dropdown oder auf der jeweiligen Übersichtsseite als Kacheln.

## Bilder-Konventionen

- Ablageort: `/public/images/`
- Benennung: eindeutig nach Produkt/Thema, kleingeschrieben, z. B. `sara.jpg`, `kupfer.jpg`
- Format: Lifestyle-Fotografie, **1920×1080px**, Produkt immer im Kontext (nie freigestellt vor weißem Hintergrund)
- **Platzhalter-Regel:** Existiert für eine Sektion/Seite noch kein passendes Bild, wird ein klar erkennbarer Platzhalter im selben Seitenverhältnis (1920×1080) eingesetzt — kein Blindtext-Bild, das mit einem echten Foto verwechselt werden könnte. Platzhalter sind visuell eindeutig als "TODO: Foto folgt" markiert.
- **Dateiformat: einheitlich JPG** (final entschieden, siehe DESIGN.md). Das aktuell vorhandene `kinderreisebett.png` wird bei Umsetzung zu `kinderreisebett.jpg` konvertiert.

## Konventionen für die Umsetzung

- Keine Abstraktionen oder Komponenten "auf Vorrat" bauen — jede Seite/Sektion so einfach wie möglich, aber wiederkehrende Muster (Hero, Bildergalerie, Produktkachel) als gemeinsame Komponenten.
- Deutsche Texte, deutsche URL-Slugs (siehe Seitenstruktur oben).
- Keine Kommentare im Code, außer zur Erklärung nicht offensichtlicher Entscheidungen.
- Vor jeder größeren Umsetzung: Rücksprache bei strukturellen oder gestalterischen Zweifelsfällen statt eigenmächtiger Annahmen.

## Status

CLAUDE.md und DESIGN.md sind freigegeben, Tech-Stack final bestätigt. Alle Seiten der Seitenstruktur sind umgesetzt: Startseite, Matratzen-Übersicht + 5 Unterseiten (Federkern, Gelschaum, Kinder, Kaltschaum, Topper), Ratgeber-Übersicht + 2 Artikel (Federkern, Schaumstoff), Nanocell, Über uns. Texte sind, wo inhaltlich passend, von der bestehenden arensberger.de übernommen und redaktionell an den neuen Ton angepasst. Bilder sind größtenteils noch Platzhalter (`kinderreisebett.jpg` und der Hero-Hintergrund `schlafzimmer-morgenlicht.jpg` sind bereits echte Fotos).

**2026-07-23, Logo:** Echtes Markenlogo eingebaut statt Text-Wortmark — `logo-arensberger-weiss.png` (für transparenten Header über Bildern/dunklen Flächen) und `logo-arensberger-blau.png` (für helle Flächen: solider Header beim Scrollen, Footer). Beide liegen in `/public/images/`, Quelle: `Markenunterlagen Markenlogos/Arensberger/Logo/Standard/` aus der geteilten Ablage.

**2026-07-23:** Gesamte Seite bewusst auf einen kräftigeren, "agentur-artigen" Gestaltungsstil umgestellt (siehe DESIGN.md-Update vom selben Tag) — mehr Markenfarbe als Fläche, Double-Bezel-Karten (`BezelFrame`), Bento-Grid auf der Startseite, Scroll-Reveal-Animationen (`Reveal`), Nested-CTA-Buttons (`NestedCta`/`ArrowBadge`), Serifen-Kontrast in Headlines. Zuerst nur auf der Startseite umgesetzt, dann über die geteilten Komponenten (`SubHero`, `ProductCard`, `Testimonials`, `FaqList`, `PullQuote`, `MattressGrid`) und gezielte Einzelanpassungen auf Matratzen-Unterseiten, Ratgeber, Nanocell und Über uns übertragen. Die Kinder-Seite nutzt jetzt durchgängig `ProductCard` (vorher duplizierte Inline-Markup für Stadtmatratze/NORA).

Kein Shop/Checkout eingebaut, wie gefordert. Interne Verlinkung zwischen Matratzen-, Ratgeber- und Nanocell-Seiten steht (z. B. Gelschaum ↔ Nanocell, Federkern/Kaltschaum ↔ passender Ratgeber-Artikel).

**2026-07-23, echte Bilder:** Startseite (Hero, alle 5 Bento-Kacheln, Nanocell), komplette Matratzen-Unterseiten Federkern (SubHero + VIKTORIA/Kupfer/JANA), Gelschaum (SubHero + LINA/ANNA/SARA), Kaltschaum (SubHero + RELAXX/FLEXX), Kinder (SubHero + NORA; Stadtmatratze war schon echt) laufen jetzt auf echten Fotos statt Platzhaltern. Nur Topper-Unterseite ist noch Platzhalter.

**2026-07-23, Nav-Ergänzung:** Externer "Shop"-Link in der Hauptnavigation (Desktop + Mobile) zu `https://www.albatros-shop.de`, öffnet in neuem Tab — wie in der "dezenter Verweis auf Handelspartner"-Klausel oben vorgesehen.

**2026-07-23, Impressum:** `/impressum` angelegt mit den realen Firmendaten von der alten arensberger.de (Albatros International GmbH, Nerdlen, HRB 12718 Amtsgericht Wittlich, USt-ID DE814163248). **`/datenschutz` fehlt noch** — der Footer verlinkt weiterhin ins Leere (404), das ist als Datenschutzerklärung ein größeres, rechtlich sensibleres Dokument und sollte nicht einfach automatisiert von der alten Seite übernommen werden, ohne den Text nochmal gegenzulesen.
