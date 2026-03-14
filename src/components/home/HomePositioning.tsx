import Link from "next/link";
import Container from "@/components/layout/Container";

export default function HomePositioning() {
  return (
    <section className="relative overflow-hidden border-b border-neutral-200">
      {/* BG image (test) */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            'url("src="/images/banners/construction.webp")',
        }}
        aria-hidden="true"
      />

      {/* Overlay for readability */}
      <div
        className="absolute inset-0 bg-white/88"
        aria-hidden="true"
      />
      <div
        className="absolute inset-0 bg-gradient-to-b from-white/70 via-white/88 to-white"
        aria-hidden="true"
      />

      {/* Content */}
      <Container className="relative py-20 sm:py-24">
        <div className="grid gap-10 lg:grid-cols-3 lg:items-end">
          {/* LEFT 2/3 */}
          <div className="lg:col-span-2 max-w-3xl">
            <p className="text-xs font-medium tracking-wide text-neutral-400">
              Sistem izvedbe
            </p>

            <h2 className="mt-3 text-3xl sm:text-4xl font-semibold tracking-tight text-neutral-900">
              Odgovornost in nadzor skozi celoten projekt.
            </h2>

            <p className="mt-5 text-sm leading-relaxed text-neutral-600">
              Projekti potekajo skladno z veljavno zakonodajo, projektno
              dokumentacijo in zahtevami nadzora.
              <br />
              <br />
              Vsaka faza je tehnično preverjena, terminsko usklajena in
              dokumentirana.
            </p>
          </div>

          {/* RIGHT 1/3 CTA */}
          <div className="lg:col-span-1">
            <div className="pl-10 border-l border-neutral-300">
              <p className="text-sm text-neutral-600 leading-relaxed">
                Izvedeni projekti javnih in poslovnih investitorjev.
              </p>

              <Link
                href="/reference"
                className="group mt-6 inline-flex items-center gap-2 text-sm font-medium text-neutral-900"
              >
                Reference
                <span className="transition-transform group-hover:translate-x-1">
                  →
                </span>
              </Link>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}