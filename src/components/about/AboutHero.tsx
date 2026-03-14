import Image from "next/image";
import Container from "@/components/layout/Container";
import HeroButton from "@/components/ui/HeroButton";

const HERO_IMAGE = "/images/hero/o-nas-hero.webp";

export default function AboutHero() {
  return (
    <section id="hero" className="relative">
      <div className="relative h-[56svh] min-h-[360px] w-full overflow-hidden bg-neutral-100 sm:min-h-[460px]">
        {/* Image layer */}
        <div className="absolute inset-0 z-0 overflow-hidden">
          <Image
            src={HERO_IMAGE}
            alt="Dema Plus – O nas"
            fill
            priority
            sizes="100vw"
            className="object-cover"
            style={{ objectPosition: "50% 35%" }}
          />
        </div>

     <div className="absolute inset-0 bg-black/15" />
<div className="absolute inset-0 bg-gradient-to-r from-black/20 via-black/8 to-transparent" />

        <Container className="relative z-20 h-full">
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