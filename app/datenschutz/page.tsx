import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Datenschutz | Arensberger",
  description: "Datenschutzerklärung von Arensberger.",
};

export default function DatenschutzPage() {
  return (
    <article className="mx-auto max-w-3xl px-6 pb-24 pt-40 lg:px-10">
      <h1 className="font-heading font-bold text-3xl sm:text-4xl">Datenschutzerklärung</h1>

      <div className="mt-10 space-y-10 font-body text-secondary">
        <section>
          <h2 className="font-heading font-bold text-lg text-foreground">Verantwortlicher</h2>
          <p className="mt-3 leading-relaxed">
            Verantwortlich für die Datenverarbeitung auf dieser Website ist die Albatros
            International GmbH. Die vollständigen Kontaktdaten findest du im{" "}
            <a href="/impressum" className="text-accent hover:underline">
              Impressum
            </a>
            .
          </p>
        </section>

        <section>
          <h2 className="font-heading font-bold text-lg text-foreground">Server-Log-Dateien</h2>
          <p className="mt-3 leading-relaxed">
            Beim Aufruf dieser Website werden automatisch Informationen in Server-Log-Dateien
            erfasst, die dein Browser übermittelt. Dazu gehören Browsertyp und -version, das
            verwendete Betriebssystem, die Referrer-URL, die IP-Adresse sowie Datum und Uhrzeit
            der Anfrage. Diese Daten sind nicht bestimmten Personen zuordenbar und werden nicht
            mit anderen Datenquellen zusammengeführt. Die Erfassung erfolgt auf Grundlage von
            Art. 6 Abs. 1 lit. f DSGVO, um den technisch fehlerfreien Betrieb der Website
            sicherzustellen.
          </p>
        </section>

        <section>
          <h2 className="font-heading font-bold text-lg text-foreground">Hosting</h2>
          <p className="mt-3 leading-relaxed">
            Diese Website wird bei Netlify, Inc. gehostet. Dabei können personenbezogene Daten
            (insbesondere die in den Server-Log-Dateien erfassten Daten) auch außerhalb der
            EU/des EWR verarbeitet werden. Soweit eine Datenübermittlung in die USA erfolgt,
            stützt sich Netlify auf die EU-Standardvertragsklauseln als geeignete Garantien im
            Sinne von Art. 46 DSGVO.
          </p>
        </section>

        <section>
          <h2 className="font-heading font-bold text-lg text-foreground">Cookies und Tracking</h2>
          <p className="mt-3 leading-relaxed">
            Diese Website verwendet derzeit keine Cookies zu Analyse-, Marketing- oder
            Tracking-Zwecken. Es werden keine Nutzerprofile erstellt und keine Daten an
            Drittanbieter wie Google Analytics oder vergleichbare Dienste übermittelt.
          </p>
        </section>

        <section>
          <h2 className="font-heading font-bold text-lg text-foreground">Kontaktaufnahme</h2>
          <p className="mt-3 leading-relaxed">
            Wenn du per E-Mail oder Telefon Kontakt zu uns aufnimmst (Kontaktdaten siehe
            Impressum), verarbeiten wir die dabei mitgeteilten Daten — etwa Name, Kontaktdaten
            und Nachrichteninhalt — ausschließlich zur Bearbeitung deiner Anfrage auf Grundlage
            von Art. 6 Abs. 1 lit. f DSGVO. Ein Kontaktformular wird auf dieser Website nicht
            angeboten.
          </p>
        </section>

        <section>
          <h2 className="font-heading font-bold text-lg text-foreground">Externe Links</h2>
          <p className="mt-3 leading-relaxed">
            Diese Website verlinkt auf externe Angebote, etwa unseren Online-Shop unter
            albatros-shop.de. Für Inhalt und Datenschutz auf diesen verlinkten Seiten sind
            ausschließlich deren jeweilige Betreiber verantwortlich; die dortigen
            Datenschutzerklärungen gelten unabhängig von dieser Erklärung.
          </p>
        </section>

        <section>
          <h2 className="font-heading font-bold text-lg text-foreground">
            Deine Rechte als betroffene Person
          </h2>
          <p className="mt-3 leading-relaxed">
            Du hast im Rahmen der geltenden gesetzlichen Bestimmungen jederzeit das Recht auf
            unentgeltliche Auskunft über deine gespeicherten personenbezogenen Daten, deren
            Herkunft und Empfänger sowie den Zweck der Datenverarbeitung, außerdem ein Recht auf
            Berichtigung, Löschung oder Einschränkung der Verarbeitung dieser Daten, ein
            Widerspruchsrecht gegen die Verarbeitung sowie ein Recht auf Datenübertragbarkeit.
            Hierzu sowie zu weiteren Fragen zum Thema personenbezogene Daten kannst du dich
            jederzeit über die im Impressum angegebenen Kontaktmöglichkeiten an uns wenden.
          </p>
          <p className="mt-4 leading-relaxed">
            Dir steht außerdem ein Beschwerderecht bei der zuständigen Aufsichtsbehörde zu, z. B.
            beim Landesbeauftragten für den Datenschutz und die Informationsfreiheit
            Rheinland-Pfalz.
          </p>
        </section>

        <section>
          <h2 className="font-heading font-bold text-lg text-foreground">
            SSL-/TLS-Verschlüsselung
          </h2>
          <p className="mt-3 leading-relaxed">
            Diese Seite nutzt aus Sicherheitsgründen und zum Schutz der Übertragung
            vertraulicher Inhalte eine SSL- bzw. TLS-Verschlüsselung. Eine verschlüsselte
            Verbindung erkennst du daran, dass die Adresszeile deines Browsers von „http://“ auf
            „https://“ wechselt.
          </p>
        </section>

        <p className="text-sm">Stand: 24. Juli 2026</p>
      </div>
    </article>
  );
}
