import PageHero from "@/components/layout/PageHero";
import Container from "@/components/layout/Container";

export default function CookiesPage() {
  return (
    <>
     <PageHero
  kicker="Pravni okvir"
  title="Politika piškotkov"
  desc="Informacije o uporabi piškotkov na spletni strani Dema Plus."
  image="/images/legal/piskotki-hero.webp"
/>
<div className="border-t border-neutral-200/70" />
      <Container className="max-w-3xl py-12">
        <p className="text-sm text-neutral-500">
          Zadnja posodobitev: {new Date().getFullYear()}
        </p>

        <div className="mt-10 space-y-10 text-neutral-700 leading-relaxed">

          <section>
            <h2 className="text-lg font-semibold text-neutral-900">
              Kaj so piškotki
            </h2>

            <p className="mt-3">
              Piškotki so majhne tekstovne datoteke, ki jih spletna stran shrani
              na vašo napravo ob obisku. Omogočajo osnovno delovanje strani ter
              pomagajo zagotoviti boljšo uporabniško izkušnjo.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-neutral-900">
              Katere piškotke uporabljamo
            </h2>

            <p className="mt-3">
              Ta spletna stran uporablja samo nujne piškotke, ki so potrebni za
              pravilno delovanje spletne strani.
            </p>

            <p className="mt-3">
              Ti piškotki ne zbirajo osebnih podatkov in se uporabljajo izključno
              za zagotavljanje osnovnih funkcionalnosti strani.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-neutral-900">
              Upravljanje piškotkov
            </h2>

            <p className="mt-3">
              Nastavitve piškotkov lahko kadar koli spremenite preko možnosti
              <strong> »Nastavitve piškotkov« </strong>
              v nogi spletne strani.
            </p>

            <p className="mt-3">
              Piškotke lahko upravljate tudi v nastavitvah svojega spletnega
              brskalnika.
            </p>
          </section>

        </div>
      </Container>
    </>
  );
}