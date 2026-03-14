import Image from "next/image";
import Link from "next/link";

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

          {/* Base dark overlay */}
          <div className="absolute inset-0 bg-[#1c2430]/72" />

          {/* Subtle brand tint from left */}
          <div className="absolute inset-0 bg-gradient-to-r from-[rgba(var(--brand-rgb),0.14)] via-transparent to-transparent" />
        </div>

        {/* Content */}
        <div className="relative mx-auto max-w-6xl px-6 py-24 text-center text-white sm:py-28">
          <h2 className="text-3xl font-semibold tracking-tight leading-tight sm:text-4xl">
            Načrtujete projekt?
          </h2>

          <p className="mx-auto mt-5 max-w-xl leading-relaxed text-white/80">
            Stopite v stik z nami za strokovni posvet ali pripravo ponudbe.
            Projekt obravnavamo sistematično, z jasno strukturo in odgovornostjo.
          </p>

          <div className="mt-10">
            <Link
              href="/kontakt"
className="group inline-flex items-center gap-2 rounded-full bg-white px-7 py-3 text-sm font-medium text-neutral-900 transition-all duration-300 hover:bg-white/92 hover:shadow-[0_0_0_4px_rgba(255,255,255,0.15)]"            >
              Stopite v stik
              <span className="transition-transform duration-300 group-hover:translate-x-1">
                →
              </span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}