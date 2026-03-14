import Image from "next/image";
import Container from "@/components/layout/Container";
import TermsAccordion from "@/components/terms/TermsAccordion";

export const metadata = {
  title: "Splošni pogoji poslovanja | Dema Plus",
  description: "Splošni pogoji poslovanja družbe DEMA PLUS d.o.o.",
};

const HERO_IMAGE = "/images/banners/legal-framework.webp";

export default function TermsPage() {
  return (
    <>
      <TermsHero />

      <section className="section mt-4 sm:mt-6 pb-24 sm:pb-28">
        <Container className="max-w-3xl">
          <div className="space-y-8 sm:space-y-10">
            <TermsAccordion />

            {/* Signature block */}
            <div className="mt-14 border-t border-neutral-200 pt-10 text-sm leading-relaxed text-neutral-700 sm:mt-16 sm:pt-12">
              <p>V Ljubljani, dne 11.3.2019</p>

              <p className="mt-6">
                <strong className="text-neutral-900">DEMA PLUS d.o.o.</strong>
                <br />
                Direktor Denis Pere
              </p>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}

function TermsHero() {
  return (
    <section className="relative overflow-hidden border-b border-neutral-200">
      <div className="absolute inset-0">
        <Image
          src={HERO_IMAGE}
          alt="Pravni okvir"
          fill
          priority
          sizes="100vw"
          className="object-cover object-[50%_35%]"
        />

        <div className="absolute inset-0 bg-black/45" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/40 to-transparent" />
      </div>

      <Container className="relative max-w-3xl py-20 sm:py-24">
        <p className="text-xs tracking-wide text-white/70">Pravni okvir</p>

        <h1 className="mt-3 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
          Splošni pogoji poslovanja
        </h1>

        <p className="mt-4 text-base leading-relaxed text-white/80">
          Splošni pogoji poslovanja družbe DEMA PLUS d.o.o. veljajo z dnem
          sprejetja in neprekinjeno veljajo za vsa pogodbena razmerja družbe,
          razen v primeru izrecne pisne izključitve splošnih pogojev.
        </p>
      </Container>
    </section>
  );
}