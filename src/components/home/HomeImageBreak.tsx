import Container from "@/components/layout/Container";
import Link from "next/link";

export default function HomeImageBreak() {
  return (
   <section className="relative overflow-hidden">
  {/* Background image – construction structure */}
  <div
    className="absolute inset-0 bg-cover bg-center"
    style={{
      backgroundImage: `url(/images/banners/construction.webp)`,
    }}
    aria-hidden="true"
  />

  {/* Cleaner cinematic overlay */}
  <div className="absolute inset-0 bg-neutral-900/50" aria-hidden="true" />
  <div
    className="absolute inset-0 bg-gradient-to-r from-neutral-900/80 via-neutral-900/60 to-transparent"
    aria-hidden="true"
  />

  {/* Content */}
  <Container className="relative py-16 sm:py-20">
    <div className="max-w-xl">
      <p className="text-xs font-medium tracking-wide text-white/70">
        Način dela
      </p>

      <h2 className="mt-3 max-w-[22ch] text-2xl font-semibold tracking-tight leading-tight text-white sm:max-w-[28ch] sm:text-3xl">
        Jasna struktura. Nadzor kakovosti. Predvidljiv potek.
      </h2>

      <p className="mt-4 max-w-[42ch] text-sm leading-relaxed text-white/75">
        Projekte vodimo sistematično – z dokumentiranimi fazami,
        terminsko usklajenostjo in jasno odgovornostjo skozi celoten proces.
      </p>

      <div className="mt-6">
        <Link
          href="#koraki"
          className="group inline-flex items-center gap-2 rounded-full border border-white/40 px-6 py-3 text-sm font-medium text-white backdrop-blur-sm transition-all duration-300 hover:border-white hover:bg-white/10"
        >
          Naš pristop
          <span className="transition-transform duration-300 group-hover:translate-x-1">
            →
          </span>
        </Link>
      </div>
    </div>
  </Container>
</section>
  );
}