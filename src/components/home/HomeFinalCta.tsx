import Image from "next/image";
import Link from "next/link";
import Container from "@/components/layout/Container";

export default function HomeFinalCta() {
  return (
   <section className="relative mt-0">
  <div className="relative overflow-hidden">
    {/* Background image */}
    <div className="absolute inset-0">
      <Image
        src="/images/banners/process-banner.webp"
        alt=""
        fill
        className="object-cover"
      />

      {/* Overlays */}
      <div className="absolute inset-0 bg-neutral-900/60" />
      <div className="absolute inset-0 bg-gradient-to-r from-neutral-900/80 via-neutral-900/50 to-transparent" />
    </div>

    {/* Content */}
    <Container>
      <div className="relative py-16 text-center text-white sm:py-20">
        <div className="mx-auto max-w-3xl">
          <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">
            Načrtujete projekt?
          </h2>

          <p className="mt-3 text-sm leading-relaxed text-white/75 sm:text-base">
            Stopite v stik za strokovni posvet ali pripravo ponudbe.
            Projekt vodimo sistematično — z jasno strukturo,
            nadzorom in odgovornostjo.
          </p>

          <div className="mt-6">
            <Link
              href="/kontakt"
              className="group inline-flex items-center gap-2 rounded-full 
                         border border-white/40 text-white
                         px-5 py-2.5 text-sm font-medium
                         backdrop-blur-sm
                         transition-all duration-300
                         hover:border-white hover:bg-white/10"
            >
              Stopite v stik
              <span className="transition-transform duration-300 group-hover:translate-x-1">
                →
              </span>
            </Link>
          </div>
        </div>
      </div>
    </Container>
  </div>
</section>
  );
}