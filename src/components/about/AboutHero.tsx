import Image from "next/image";
import Container from "@/components/layout/Container";
import HeroButton from "@/components/ui/HeroButton";

const HERO_IMAGE = "/images/hero/o-nas-hero.webp";

export default function AboutHero() {
  return (
    <section className="relative">
      <div className="relative h-[34vh] min-h-[300px] sm:h-[36vh] sm:min-h-[340px] lg:h-[38vh] lg:min-h-[380px] w-full overflow-hidden bg-neutral-100">
       <Image
  src={HERO_IMAGE}
  alt="Dema Plus – O nas"
  fill
  priority
  sizes="100vw"
  className="object-cover"
  style={{ objectPosition: "50% 35%" }}
/>

<div className="absolute inset-0 z-10 bg-gradient-to-b from-black/42 via-black/26 to-black/14" />
<div className="absolute inset-0 z-10 bg-gradient-to-l from-black/18 via-black/8 to-transparent" />

Če želiš, ti lahko dam še 3 natančne variante: subtle, balanced, dramatic.

        <Container className="relative z-10 h-full">
          <div className="flex h-full items-end pb-8 sm:pb-10 lg:pb-12">
            <div className="max-w-3xl text-white">
              <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl">
                O nas
              </h1>

              <p className="mt-3 text-base leading-relaxed text-white/82 sm:mt-4 sm:text-lg">
                Gradimo z jasno strukturo dela in odgovornim vodenjem investicij.
              </p>

              <div className="mt-5 flex flex-wrap gap-3 sm:mt-6">
                <HeroButton href="/reference" variant="primary">
                  Poglej reference
                </HeroButton>
              </div>
            </div>
          </div>
        </Container>
      </div>
    </section>
  );
}