import Link from "next/link";
import Image from "next/image";
import Container from "@/components/layout/Container";

const latestPost = {
  title: "Osnovna šola Savsko naselje",
  excerpt:
    "Obnova javnega objekta v Ljubljani z natančno tehnično izvedbo, upoštevanjem okoljskih vidikov in izboljšanjem pogojev za izobraževalni prostor.",
  slug: "celovita-obnova-osnovne-sole-savsko-naselje-pri-kateri-se-upostevajo-okoljski-vidiki",
};

export default function HomeNewsPreview() {
  const href = `/${latestPost.slug}`;

  return (
<section className="relative overflow-hidden section-shell-tight border-b border-footer bg-[var(--footer-bg)]">
  
  {/* BG IMAGE */}
  <div className="pointer-events-none absolute inset-0 z-0">
    <Image
      src="/images/news/os-sav-savsko-naselje.webp" // ← daj pravo pot
      alt=""
      fill
      sizes="100vw"
      className="object-cover opacity-[0.18]"
    />

    {/* fade layer */}
   <div className="absolute inset-0 bg-gradient-to-r from-white/78 via-white/70 to-white/76" />
  </div>

  <Container className="relative z-10">
    
    <div className="flex items-end justify-between gap-6">
      <p className="section-eyebrow">Aktualno</p>
    </div>

    <Link href={href} className="group mt-4 block max-w-2xl">
      <h2 className="section-title mt-1 leading-[1.08] sm:leading-[1.05] tracking-tight">
        {latestPost.title}
      </h2>

      <p className="section-lead mt-3 max-w-[56ch] leading-[1.5] sm:leading-[1.55] text-neutral-700">
        {latestPost.excerpt}
      </p>

      <div className="mt-3 inline-flex items-center gap-2 text-sm text-neutral-500 transition-colors hover:text-neutral-900">
        Preberi novico
        <span className="text-neutral-400 transition-transform group-hover:translate-x-[2px]">
          →
        </span>
      </div>
    </Link>

   
    <div className="mt-6 sm:mt-8">
  <Link
    href="/novice"
    className="group inline-flex items-center gap-2 rounded-full border border-neutral-300 px-5 py-2.5 text-sm font-medium text-neutral-900 transition-all hover:bg-neutral-100 hover:border-neutral-400"
  >
    Vse novice
    <span className="transition-transform group-hover:translate-x-[2px]">
      →
    </span>
  </Link>
</div>

  </Container>
</section>

  );
}