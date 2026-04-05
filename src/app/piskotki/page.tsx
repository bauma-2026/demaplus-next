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

      <section className="py-10 sm:py-12">
        <Container className="max-w-5xl">
          <p className="text-sm text-neutral-500">
            Zadnja posodobitev: {new Date().getFullYear()}
          </p>

          <div className="mt-8 space-y-8 text-neutral-700 sm:mt-10 sm:space-y-10">
            <section>
              <h2 className="text-xl font-semibold tracking-tight text-neutral-900 sm:text-2xl">
                Kaj so piškotki
              </h2>

              <div className="mt-4 max-w-[72ch] space-y-4 text-[15px] leading-[1.8] sm:text-[16px]">
                <p>
                  Piškotki so majhne tekstovne datoteke, ki jih spletna stran
                  shrani na vašo napravo ob obisku. Omogočajo osnovno delovanje
                  strani ter pomagajo zagotoviti boljšo uporabniško izkušnjo.
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-xl font-semibold tracking-tight text-neutral-900 sm:text-2xl">
                Katere piškotke uporabljamo
              </h2>

              <div className="mt-4 max-w-[72ch] space-y-4 text-[15px] leading-[1.8] sm:text-[16px]">
                <p>
                  Ta spletna stran uporablja samo nujne piškotke, ki so potrebni
                  za pravilno delovanje spletne strani.
                </p>

                <p>
                  Ti piškotki ne zbirajo osebnih podatkov in se uporabljajo
                  izključno za zagotavljanje osnovnih funkcionalnosti strani.
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-xl font-semibold tracking-tight text-neutral-900 sm:text-2xl">
                Upravljanje piškotkov
              </h2>

              <div className="mt-4 max-w-[72ch] space-y-4 text-[15px] leading-[1.8] sm:text-[16px]">
                <p>
                  Nastavitve piškotkov lahko kadar koli spremenite preko možnosti
                  <strong className="font-semibold text-neutral-900">
                    {" "}
                    »Nastavitve piškotkov«{" "}
                  </strong>
                  v nogi spletne strani.
                </p>

                <p>
                  Piškotke lahko upravljate tudi v nastavitvah svojega spletnega
                  brskalnika.
                </p>
              </div>
            </section>
          </div>
        </Container>
      </section>
    </>
  );
}