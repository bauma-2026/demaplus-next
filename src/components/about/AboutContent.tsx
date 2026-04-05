import Link from "next/link";
import Container from "@/components/layout/Container";
import HeroButton from "@/components/ui/HeroButton";

export default function AboutContent() {
  return (
    <div className="pb-16 pt-8 sm:pb-20 sm:pt-10">
      <Container className="max-w-5xl">
        {/* Lead */}
      <section className="rounded-2xl border border-neutral-200/70 bg-neutral-50 p-7 text-neutral-700 shadow-sm sm:p-9">
          <p className="section-eyebrow text-neutral-500">Dema Plus</p>

          <h2 className="mt-4 max-w-3xl text-2xl font-semibold leading-tight tracking-tight text-neutral-900 sm:text-3xl">
            Celovito vodimo investicijo — od ideje do primopredaje.
          </h2>

          <div className="mt-5 max-w-4xl space-y-4 text-[15px] leading-[1.8] sm:text-[16px]">
            <p>
              Dema Plus je podjetje za{" "}
              <strong className="font-semibold text-neutral-900">
                celovito vodenje investicijskih projektov
              </strong>
              . Investitorjem zagotavljamo strokovno podporo od idejne zasnove do
              tehničnega prevzema objekta.
            </p>

            <p>
              Projekt vodimo sistematično — z jasno strukturo dela, doslednim
              nadzorom kakovosti ter natančno koordinacijo vseh vključenih
              izvajalcev.
            </p>

            <p>
              Naš cilj je zagotoviti kakovostno, varno in pravočasno izvedbo
              projektov ob popolni preglednosti nad stroški, roki in tehničnimi
              zahtevami.
            </p>
          </div>

          <div className="mt-7 sm:mt-8">
            <Link
              href="/reference"
              className="group inline-flex items-center gap-2 text-sm font-medium text-neutral-900 transition hover:text-neutral-700"
            >
              Oglejte si izbrane projekte
              <span className="transition-transform group-hover:translate-x-0.5">
                →
              </span>
            </Link>
          </div>
        </section>

        {/* Statement */}
        <section className="relative mt-16 overflow-hidden rounded-2xl sm:mt-18">
          <div className="absolute inset-0">
            <img
              src="/images/about/pristop.jpg"
              alt=""
              className="h-full w-full object-cover"
              loading="lazy"
              decoding="async"
            />
            <div className="absolute inset-0 bg-black/55" />
          </div>

          <div className="relative z-10 px-7 py-14 text-white sm:px-10 sm:py-16">
            <p className="text-sm uppercase tracking-wider text-white/70">
              Naš pristop
            </p>

            <h2 className="mt-4 max-w-2xl text-2xl font-semibold tracking-tight sm:text-3xl">
              Vodimo investicijo. Prevzamemo odgovornost za izvedbo.
            </h2>

            <p className="mt-4 max-w-2xl text-[15px] leading-[1.8] text-white/82 sm:text-[16px]">
              Jasna struktura dela, odgovorno vodenje in transparentna
              komunikacija so temelj, da projekt teče predvidljivo — tudi pri
              zahtevnih izvedbah.
            </p>
          </div>
        </section>

      {/* PODROČJA */}
<section className="mt-12 sm:mt-14">
  <p className="mb-3 text-[12px] font-medium uppercase tracking-[0.12em] leading-none text-neutral-500">
    Področja
  </p>

  <h2 className="text-2xl font-semibold tracking-tight text-neutral-900 sm:text-3xl">
    Celosten pristop skozi vse faze projekta.
  </h2>

  <p className="mt-4 max-w-2xl text-[15px] leading-[1.8] text-neutral-700 sm:text-[16px]">
    Vsak projekt obravnavamo strukturirano — z jasno delitvijo
    odgovornosti, nadzorom kakovosti in preglednostjo skozi celoten potek
    izvedbe.
  </p>

  {/* MOBILE SUMMARY */}
  <div className="mt-6 md:hidden">
    <p className="text-[15px] leading-[1.8] text-neutral-700">
      Od začetnega načrtovanja do zaključka projekta zagotavljamo celosten
      pristop, jasno strukturo procesa ter preglednost nad ključnimi fazami
      izvedbe. Izvajamo novogradnje in rekonstrukcije javnih, poslovnih in
      stanovanjskih objektov, ob tem pa skrbimo za koordinacijo izvajalcev,
      tehnični nadzor in usklajevanje vseh faz gradnje. Naše sodelovanje
      temelji na strokovnosti, zanesljivosti in transparentni komunikaciji
      skozi celoten potek investicije.
    </p>
  </div>

  {/* DESKTOP CARDS */}
  <div className="mt-8 hidden gap-5 sm:gap-6 md:grid md:grid-cols-2">
    <div className="rounded-2xl border border-neutral-200 bg-white p-6 sm:p-7">
      <h3 className="text-base font-semibold tracking-tight text-neutral-900 sm:text-lg">
        Celosten pristop k investicijskim projektom
      </h3>
      <p className="mt-3 text-[15px] leading-[1.8] text-neutral-700">
        Vsak projekt obravnavamo kot celoto — od začetnega načrtovanja do
        zaključka in tehničnega prevzema. Investitorju zagotavljamo jasno
        strukturo procesa in preglednost nad ključnimi fazami izvedbe.
      </p>
    </div>

    <div className="rounded-2xl border border-neutral-200 bg-white p-6 sm:p-7">
      <h3 className="text-base font-semibold tracking-tight text-neutral-900 sm:text-lg">
        Gradnja in rekonstrukcije objektov
      </h3>
      <p className="mt-3 text-[15px] leading-[1.8] text-neutral-700">
        Izvajamo novogradnje ter rekonstrukcije javnih, poslovnih in
        stanovanjskih objektov z visoko tehnično natančnostjo in doslednim
        spoštovanjem projektne dokumentacije.
      </p>
    </div>

    <div className="rounded-2xl border border-neutral-200 bg-white p-6 sm:p-7">
      <h3 className="text-base font-semibold tracking-tight text-neutral-900 sm:text-lg">
        Inženiring in tehnični nadzor
      </h3>
      <p className="mt-3 text-[15px] leading-[1.8] text-neutral-700">
        Zagotavljamo koordinacijo izvajalcev, nadzor kakovosti ter
        usklajevanje vseh faz gradnje, kar omogoča učinkovito upravljanje
        investicije.
      </p>
    </div>

    <div className="rounded-2xl border border-neutral-200 bg-white p-6 sm:p-7">
      <h3 className="text-base font-semibold tracking-tight text-neutral-900 sm:text-lg">
        Partnerstvo, zgrajeno na zaupanju
      </h3>
      <p className="mt-3 text-[15px] leading-[1.8] text-neutral-700">
        Dolgoročno sodelovanje temelji na strokovnosti, zanesljivosti in
        transparentni komunikaciji — od prvih uskladitev do zaključka
        projekta.
      </p>
    </div>
  </div>
</section>
        {/* Closing CTA */}
      <section className="relative mt-16 overflow-hidden rounded-2xl sm:mt-20">
          <div className="absolute inset-0">
            <img
              src="/images/about/sodelovanje.jpg"
              alt=""
              className="h-full w-full object-cover"
              loading="lazy"
              decoding="async"
            />
            <div className="absolute inset-0 bg-black/55" />
          </div>

          <div className="relative z-10 px-7 py-14 text-white sm:px-10 sm:py-16">
            <p className="section-eyebrow text-white/70">Sodelovanje</p>

            <h2 className="mt-3 text-2xl font-semibold tracking-tight sm:text-3xl">
              Načrtujete projekt?
            </h2>

            <p className="mt-4 max-w-2xl text-[15px] leading-[1.8] text-white/82 sm:text-[16px]">
              Stopite v stik z nami. Skupaj preverimo okvir projekta, pristop
              izvedbe in način sodelovanja.
            </p>

            <div className="mt-7 flex flex-wrap gap-3">
              <HeroButton href="/kontakt" variant="primary">
                Stopite v stik
              </HeroButton>

              <Link
                href="/reference"
                className="inline-flex items-center justify-center rounded-full border border-white/30 px-6 py-3 text-sm font-medium text-white transition hover:bg-white/10"
              >
                Poglej reference
              </Link>
            </div>
          </div>
        </section>
      </Container>
    </div>
  );
}