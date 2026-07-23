# DESIGN.md — Gestaltungsrichtlinien Arensberger

Ergänzt [CLAUDE.md](./CLAUDE.md) um die visuelle und gestalterische Ebene.

## Design-Philosophie

Hell, warm, reduziert — aber nicht steril. Die Seite soll sich hochwertig und ruhig anfühlen, mit Raum zum Atmen zwischen den Elementen. Kein Katalog-Charakter, kein Shop-Grid.

**Update 2026-07-23:** Auf ausdrücklichen Wunsch bewusst weiter Richtung "hochwertige Agentur-Arbeit" verschoben — mehr Markenfarbe als Fläche, mehr haptische Tiefe (verschachtelte Karten, Bento-Grid), redaktioneller Kontrast durch Serifen-Kursive in Headlines, weiche Scroll-Reveal-Animationen. Der Grundton (Farben, Fonts, Fotostil) bleibt, aber Layout, Bewegung und Tiefe sind jetzt bewusst kräftiger als ursprünglich hier festgelegt. Zunächst nur auf der Startseite umgesetzt, mittlerweile über die geteilten Komponenten (SubHero, ProductCard, Testimonials, FaqList, PullQuote, MattressGrid) und gezielte Einzelanpassungen auf die gesamte Seite übertragen — Start- und Unterseiten sind wieder aus einem Guss.

**Referenzen (per Screenshot-Crawl geprüft, Stand 2026-07-17):**

- **Porsche** (porsche.com/germany) → Struktur & Ruhe: Vollbild-Hero (Video/Bild) mit dunklem Verlauf, Navigation auf drei minimale Elemente reduziert (Menü-Icon, zentriertes Wortmarken-Logo, Account-Icon), eine große Headline in klarer geometrischer Sans-Serif links unten, ein einzelner dezenter CTA-Button (halbtransparente dunkle Pille), Rechtstext/Kleingedrucktes ganz unten kaum wahrnehmbar. Darunter: ruhiges Modell-Raster, ein Bild pro Fahrzeug, viel Weißraum. Kein visuelles Rauschen.
- **Royfort** (royfort.de) → Bildsprache **und** Farbwelt: Hero zeigt eine Frau in warmer Strickkleidung, die aus einem mediterranen Zimmer auf eine Hügellandschaft blickt, Bett im Vordergrund leicht unscharf — Produkt immer im gelebten, warmen Moment, nie freigestellt. Überraschender Fund: **Royforts Logo-/Markenfarbe ist ein Indigo-Blau, das eurem `#454D9F` sehr nahekommt** — das bestätigt die Akzentfarbe als stimmige Wahl für dieses Segment (Sleep/Home, premium, ruhig). Headline "The Luxury of Sleep." läuft in einer eleganten Serifenschrift, nicht in einer fetten Grotesk — bewusster Kontrast zu Porsches technischer Sans. CTA: schlichte weiße Pille mit dünnem Rand, kein Farbblock.
- **Sommertal Home** (sommertal-home.de) → Strukturell interessant, da aus demselben Konzernumfeld: Hero folgt exakt dem gleichen Muster (Vollbild-Lifestyle-Foto, Familie in warmer Wohnküche, fette weiße Headline, dunkler Verlauf unten, der in einen indigoblauen Ton übergeht). **Aber:** Alles unterhalb des Heros ist ein Gegenbeispiel zu dem, was wir wollen — dichte Produktraster mit freigestellten PNG-Icons vor Transparenz, Rabatt-/Trust-Badges, Bewertungs-Karussells, Presse-Kacheln. Das ist reine Shop-/Katalog-Ästhetik. **Für Arensberger explizit vermeiden:** keine freigestellten Produktbilder, keine dichten Icon-Raster, keine Kunden-Bewertungs-Karussells nach diesem Muster.

**Kombination für Arensberger:** Porsches Zurückhaltung in Navigation und Layout, Royforts warme, freigestellt-freie Bildsprache und Farbwelt — und bewusst *nicht* die Produktkatalog-Struktur, wie sie unterhalb des Heros bei Sommertal auftaucht.

## Farbwelt

| Rolle | Farbe | Verwendung |
|---|---|---|
| Marke/Akzent | `#454D9F` | **Nur gezielt**: Links, aktive Zustände, ein einzelnes CTA-Element pro Sektion, kleine Details (Icon, Unterstreichung). Nicht als Flächenfarbe für große Blöcke. |
| Hintergrund | Warmes Off-White, z. B. `#FAF8F5` | Seitenhintergrund, ersetzt reines Weiß für den warmen Grundton |
| Text | Anthrazit/Fast-Schwarz, z. B. `#1C1C1E` | Fließtext, Überschriften |
| Sekundärtext | Warmes Grau, z. B. `#8A8578` | Captions, Meta-Informationen |
| Trennlinien/Flächen | Sehr helles Beige, z. B. `#F0ECE5` | Karten-Hintergründe, dezente Trenner |

Vorschlag zur Freigabe — Grundfarben sind Ableitungen aus dem Akzent-Ton, exakte Hex-Werte gerne gemeinsam feinjustieren, sobald erste Bilder als Referenz vorliegen.

**Regel (überholt seit 2026-07-23):** Ursprünglich galt, dass `#454D9F` auf keiner Seite mehr als 1–2 Mal in voller Sättigung auftaucht. Die Akzentfarbe ist jetzt site-weit bewusst strukturgebend: volle Flächen (Startseite-Statement, Nanocell-Dunkelsektion), ein heller Akzent-Ton (`--accent-tint`) als Sektionshintergrund (Über-uns-Werte, Nanocell-Abschluss, Startseite-Zitat), Akzentfarbe in Badges, Zahlen, Nested-CTA-Buttons auf allen Seiten.

**Bestätigung aus der Recherche:** Royfort nutzt im selben Marktsegment (Sleep/Home, premium) eine nahezu identische Indigo-Markenfarbe — ein gutes Signal, dass `#454D9F` als Akzent hier stimmig und nicht beliebig gewählt ist.

## Typografie

Drei Ebenen, final festgelegt:

- **Headlines (H1/H2, große Aussagen):** Poppins Bold — geometrisch, klar, technisch-präzise. Trägt die Apple/Porsche-clean-Richtung der Seite.
- **Fließtext (Absätze, Ratgeber-Inhalte, Captions):** Montserrat Regular — ruhige, gut lesbare Grotesk als Gegengewicht zu Poppins Bold, ohne stilistisch zu brechen (beide sind geometrische Sans-Serifen, wirken als Familie zusammen).
- **Emotionale Momente/Zitate (z. B. hervorgehobene Aussagen in Ratgeber-Artikeln, ein Zitat auf der Über-uns-Seite, ggf. ein Kernsatz im Hero):** eine elegante Serifenschrift als bewusster Kontrastakzent — angelehnt an Royforts "The Luxury of Sleep."-Moment. Sparsam einsetzen, maximal ein solches Element pro Seite, sonst verwässert der Kontrast.
- Großzügiger Zeilenabstand, viel Weißraum um Headlines, keine Effekte (Schatten, Verläufe) auf Text.

**Hinweis zur Serifenschrift:** Konkrete Schriftwahl (z. B. ein passendes Google-Font-Pendant) wird bei der Umsetzung vorgeschlagen — Kriterium ist "elegant, ruhig, nicht dekorativ-verspielt", passend zum warmen Grundton der Seite.

## Bildsprache

- Ausschließlich **Lifestyle-Fotografie** — Produkt immer im echten, warmen Wohnkontext (Schlafzimmer, Morgenlicht, Textilien, Menschen optional aber willkommen)
- Kein freigestelltes Produktfoto, keine Studio-Fotografie vor neutralem Hintergrund
- Format durchgängig **1920×1080px** (16:9), damit Bilder ohne Bruch als Vollbild-Hero oder in Bildergalerien funktionieren
- **Dateiformat: einheitlich JPG** für alle Bilder in `/public/images/`. Das vorhandene `kinderreisebett.png` wird bei Umsetzung nach `kinderreisebett.jpg` konvertiert.
- Bildbearbeitung: natürliches, warmes Licht, keine harten Kontraste oder Filter — Bilder sollen wie aus einem durchgängigen Shooting wirken

## Layout-Prinzipien

- Vollbild- oder nahezu-vollbild Hero-Bilder auf Startseite und Kategorieseiten
- Ein Layout-Rhythmus pro Seite: Bild → kurzer Text → Bild → Text, statt dichter Rasterkacheln
- Große Abstände (Section-Padding), keine gequetschten Layouts
- **Navigation: ausgeschriebene Menüpunkte sichtbar** (Start, Matratzen, Ratgeber, Nanocell, Über uns) — kein auf Icons reduziertes Menü nach Porsche-Vorbild, sondern eine textbasierte Hauptnavigation, wie sie auf der aktuellen arensberger.de-Seite genutzt wird. Navigation bleibt fixiert oder blendet dezent aus/ein beim Scrollen, tritt aber inhaltlich nicht zurück wie bei Porsche.
- Dezente Scroll-/Fade-Übergänge erlaubt, keine verspielten Animationen
- Hero-Bild bekommt einen dezenten dunklen Verlauf am unteren Rand, damit Headline/Text unabhängig vom Bildinhalt lesbar bleiben (so bei Porsche, Royfort und Sommertal gleichermaßen umgesetzt) — optional den Verlauf leicht in Richtung Akzentfarbe einfärben, statt neutral schwarz

## Komponenten (grobe Patterns, keine finale Spezifikation)

- **Hero:** Vollbild-Lifestyle-Bild, Headline in Poppins Bold, minimaler Subtext in Montserrat Regular, ein CTA in Akzentfarbe
- **Produkt-/Themenkachel:** Bild (1920×1080, im Kachel-Format beschnitten), Titel in Poppins Bold, kurzer Teaser-Text in Montserrat Regular, dezenter Link
- **Ratgeber-Artikel:** Lesefreundliche Textspalte in Montserrat Regular, Bilder als Vollbreite-Unterbrechungen zwischen Textabschnitten, vereinzelt hervorgehobene Zitate/Kernaussagen in der Serifenschrift
- **Footer:** Ruhig, reduziert, keine überladene Sitemap

**Zusätzliche Patterns seit 2026-07-23 (bisher nur Startseite):**

- **Double-Bezel-Karte:** Äußere Hülle (abgedunkelter/Akzent-Ton, großer Radius, dünner Ring) umschließt einen inneren Kern (eigener Hintergrund, kleinerer Radius) — wirkt wie eine Glasplatte in einer Fassung. Für Fakten-Karten, Produktkacheln, Bildrahmen.
- **Nested-CTA:** Button als Pille, Pfeil-Icon in eigenem, abgesetztem Kreis am rechten Rand, der beim Hover leicht nach oben-rechts wandert ("magnetischer" Effekt).
- **Scroll-Reveal:** Inhalte faden beim ersten Sichtbarwerden weich von unten/unscharf ein (`IntersectionObserver`, `translate-y` + `blur` + `opacity`, gestaffelte Verzögerung). Kein `window.scroll`-Listener, nur Transform/Opacity fürs Performance-Budget.
- **Bento-Grid:** Asymmetrisches Karten-Raster (eine große Kachel + mehrere kleine) statt gleichförmigem 3er-Raster, für Themen-/Produktübersichten.
- **Grain-Overlay:** Feines, fixiertes SVG-Rauschen (`pointer-events-none`, sehr geringe Deckkraft) für haptisches Papiergefühl auf großflächigen Off-White-Bereichen.
- **Serifen-Kontrast in Headlines:** Ein Teil einer H1/H2 in Poppins Bold, der Rest in Cormorant Garamond Italic — ersetzt die frühere Regel "max. 1 Serifen-Moment pro Seite" durch mehrfachen, aber gezielten Einsatz im selben Fließtext-Block (nur auf der Startseite; Ratgeber/Über-uns-Zitate nutzen weiter die reine Serifen-Kursive ohne Bold-Mix, um bei Fließtext nicht zu unruhig zu wirken).
- **BezelFrame:** leichte, nicht-dunkle Variante des Double-Bezel-Patterns für einzelne Editorial-Bilder (Ratgeber-Querschnitte, Über-uns-Teamfoto, Produktbilder) — ein Bild, kein Kartenkontext.
- **ArrowBadge:** rein visuelles Pendant zu Nested-CTA für Links, die bereits selbst in einem `<Link>` verschachtelt sind (Kacheln in Grids) — kein eigenes `<a>`, reagiert nur auf `group-hover` des umgebenden Links.

## Ton & Sprache

Sachlich-warm, vertrauensbildend, ohne Verkaufsdruck. Kompetenz durch Ruhe statt durch Ausrufezeichen und Rabatt-Sprache.

## Barrierefreiheit & Responsive

- Ausreichender Kontrast von Fließtext zu Hintergrund auch bei warmem Off-White
- Bilder mit aussagekräftigem Alt-Text (Produktname + Kontext)
- Mobile: Hero-Bilder croppen auf zentralen Bildausschnitt, Layout bleibt einspaltig und ruhig

## Entscheidungen (finalisiert 2026-07-17)

1. Fließtext-Schrift: **Montserrat Regular**
2. Serifen-Kontrastschrift für emotionale Momente/Zitate: **ja**, sparsam eingesetzt
3. Navigation: **ausgeschriebene Menüpunkte sichtbar**, kein reduziertes Icon-Menü
4. Bildformat: **einheitlich JPG**

## Noch offen (wird mit CLAUDE.md separat zur Freigabe vorgelegt)

1. Exakte Hex-Werte der Sekundärfarben
2. Tech-Stack-Vorschlag
