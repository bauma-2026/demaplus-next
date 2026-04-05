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

      <section className="py-10 sm:py-12">
        <Container className="max-w-5xl">
          <div className="space-y-8 sm:space-y-10">
            <TermsAccordion />

            <div className="border-t border-neutral-200 pt-8 text-sm leading-relaxed text-neutral-700 sm:pt-10">
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

      <Container className="relative py-14 sm:py-16 lg:py-18">
        <div className="max-w-xl sm:max-w-3xl">
          <p className="text-[12px] font-medium tracking-[0.08em] text-white/70">
            Pravni okvir
          </p>

          <h1 className="mt-2 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
            Splošni pogoji poslovanja
          </h1>

          <p className="mt-3 text-base leading-[1.55] text-white/80 sm:text-lg">
            Splošni pogoji poslovanja družbe DEMA PLUS d.o.o. veljajo z dnem
            sprejetja in neprekinjeno veljajo za vsa pogodbena razmerja družbe,
            razen v primeru izrecne pisne izključitve splošnih pogojev.
          </p>
        </div>
      </Container>
    </section>
  );
}