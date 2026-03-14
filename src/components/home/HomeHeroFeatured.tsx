"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import Link from "next/link";
import Image from "next/image";
import Container from "@/components/layout/Container";
import { homeHero } from "@/content/home";
import HeroButton from "@/components/ui/HeroButton";


export default function HomeHeroFeatured() {
  
  const mediaRef = useRef<HTMLDivElement>(null);

  const { headline, subheadline, primaryCta, secondaryCta, featured, chips } = homeHero;

  useEffect(() => {
    if (!mediaRef.current) return;

    const img = mediaRef.current.querySelector("img");
    if (!img) return;

    gsap.set(img, {
      scale: 1,
      transformOrigin: "50% 50%",
    });

    const tween = gsap.to(img, {
      scale: 1.05,
      duration: 20,
      ease: "power1.out",
    });

    return () => {
      tween.kill();
    };
  }, [featured.image]);

  // ✅ supports both string[] and string (in case you ever change it back)
  const headlineLines = Array.isArray(headline) ? headline : [headline];

  return (
 <section id="hero" className="relative">
<div className="relative h-[56svh] min-h-[360px] sm:min-h-[460px] w-full overflow-hidden">
    
    {/* Image layer */}
    <div ref={mediaRef} className="absolute inset-0 z-0 overflow-hidden">
 <Image
  src={featured.image}
  alt={featured.title}
  fill
  priority
  sizes="100vw"
  className="object-cover"
/>

  {/* Cinematic left gradient */}
<div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(0,0,0,0.42) 0%,rgba(0,0,0,0.22) 35%,rgba(0,0,0,0.04) 55%,transparent 70%)]" />

{/* Bottom depth */}
<div className="absolute inset-0 bg-[linear-gradient(to_top,rgba(0,0,0,0.22),transparent,transparent)]" />

{/* Subtle brand tint */}
<div className="absolute inset-0 bg-gradient-to-r from-[rgba(var(--brand-rgb),0.14)] via-transparent to-transparent" />

</div>

        {/* ✅ Overlay (clean + readable, less heavy than before) */}
    <div className="absolute inset-0 z-10 bg-black/25 pointer-events-none" />
<div className="absolute inset-0 z-10 bg-gradient-to-r from-black/60 via-black/35 to-transparent pointer-events-none" />
       {/* Content */}
        <Container className="relative z-20 h-full">
          <div className="flex h-full items-end pb-10 sm:pb-14">
            <div className="max-w-2xl text-white">
              <p className="text-xs tracking-wide text-white/75">
                {featured.workType}
                {featured.location ? ` • ${featured.location}` : ""}
                {featured.year ? ` • ${featured.year}` : ""}
              </p>

              {/* ✅ Headline (white + multi-line) */}
             <h1 className="mt-3 text-4xl sm:text-5xl font-semibold tracking-tight leading-[1.05] text-white">
  {headlineLines.map((line, i) => (
    <span
      key={i}
      className={i === 2 ? "hidden sm:block" : "block"}
    >
      {line}
    </span>
  ))}
</h1>

              <p className="mt-5 max-w-2xl text-base leading-relaxed text-white/80 sm:text-lg">
                {subheadline}
              </p>

             <div className="mt-7">
  <div className="flex flex-wrap items-center gap-4">
    <HeroButton href={primaryCta.href} variant="primary">
      {primaryCta.label}
    </HeroButton>

    
  </div>
</div>
            </div>
          </div>
        </Container>
      </div>

      {/* Compliance strip */}
     <div>
        <Container className="py-4">
          <div className="grid sm:grid-cols-3">
            {chips.map((c, i) => (
              <div
                key={i}
                className={[
                  "px-6 py-3",
                  i !== 0 ? "sm:border-l sm:border-neutral-200/70" : "",
                  i === 0
                    ? "border-l-4 border-[color:var(--brand)] bg-[color:var(--brand)]/10"
                    : "",
                ].join(" ")}
              >
                <div className="text-[11px] font-medium tracking-wide text-neutral-500">
                  {c.label}
                </div>
                <div className="mt-1 text-sm font-medium text-neutral-900">
                  {c.value}
                </div>
              </div>
            ))}
          </div>
        </Container>
      </div>
    </section>
  );
}