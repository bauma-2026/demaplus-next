import Image from "next/image";
import Container from "@/components/layout/Container";
import HeroButton from "@/components/ui/HeroButton";

const HERO_IMAGE = "/images/hero/o-nas-hero.webp";

export default function AboutHero() {
  return (
    <section className="relative">
      <div className="relative h-[30vh] min-h-[280px] w-full overflow-hidden bg-neutral-200 sm:h-[34vh] sm:min-h-[320px] lg:h-[36vh] lg:min-h-[360px]">
        <Image
          src={HERO_IMAGE}
          alt="Dema Plus – O nas"
          fill
          priority
          sizes="100vw"
          className="object-cover"
          style={{ objectPosition: "50% 35%" }}
        />

        <div className="absolute inset-0 z-10 bg-gradient-to-b from-black/68 via-black/52 to-black/36" />
        <div className="absolute inset-0 z-10 bg-gradient-to-l from-black/40 via-black/18 to-transparent" />

        <Container className="relative z-10 h-full">
          <div className="flex h-full items-end pb-7 sm:pb-9 lg:pb-10">
            <div className="max-w-3xl text-white">
              <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl">
                O nas
              </h1>

              <p className="mt-3 text-base leading-relaxed text-white/82 sm:text-lg">
                Gradimo z jasno strukturo dela in odgovornim vodenjem investicij.
              </p>

              <div className="mt-4 flex flex-wrap gap-3 sm:mt-5">
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