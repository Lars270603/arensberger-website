import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Impressum | Arensberger",
  description: "Impressum und Anbieterkennzeichnung gemäß § 5 TMG.",
};

export default function ImpressumPage() {
  return (
    <article className="mx-auto max-w-3xl px-6 pb-24 pt-40 lg:px-10">
      <h1 className="font-heading font-bold text-3xl sm:text-4xl">Impressum</h1>

      <div className="mt-10 space-y-10 font-body text-secondary">
        <section>
          <h2 className="font-heading font-bold text-lg text-foreground">Angaben gemäß § 5 TMG</h2>
          <p className="mt-3 leading-relaxed">
            Albatros International GmbH
            <br />
            Konrad-Zuse-Str. 3
            <br />
            54552 Nerdlen
            <br />
            Deutschland
          </p>
        </section>

        <section>
          <h2 className="font-heading font-bold text-lg text-foreground">Vertreten durch</h2>
          <p className="mt-3 leading-relaxed">Waldemar Derksen (Geschäftsführer)</p>
        </section>

        <section>
          <h2 className="font-heading font-bold text-lg text-foreground">Kontakt</h2>
          <p className="mt-3 leading-relaxed">
            Telefon: +49 (0)6592-1730200
            <br />
            Telefax: +49 (0)6592-1730209
            <br />
            E-Mail: info@albatros-international.eu
          </p>
        </section>

        <section>
          <h2 className="font-heading font-bold text-lg text-foreground">Registereintrag</h2>
          <p className="mt-3 leading-relaxed">
            Eintragung im Handelsregister.
            <br />
            Registergericht: Amtsgericht Wittlich
            <br />
            Registernummer: HRB 12718
          </p>
        </section>

        <section>
          <h2 className="font-heading font-bold text-lg text-foreground">Umsatzsteuer-ID</h2>
          <p className="mt-3 leading-relaxed">
            Umsatzsteuer-Identifikationsnummer gemäß § 27 a Umsatzsteuergesetz: DE814163248
          </p>
        </section>

        <section>
          <h2 className="font-heading font-bold text-lg text-foreground">Steuernummer</h2>
          <p className="mt-3 leading-relaxed">43/666/0174/5</p>
        </section>
      </div>
    </article>
  );
}
