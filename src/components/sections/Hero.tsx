"use client";

import { useRef } from "react";
import Link from "next/link";
import Container from "@/components/layout/Container";
import usePrefersReducedMotion from "@/hooks/usePrefersReducedMotion";

import gsap from "gsap";
import { useGSAP } from "@gsap/react";

export default function Hero() {
  const scope = useRef<HTMLElement | null>(null);
  const prefersReducedMotion = usePrefersReducedMotion();

  useGSAP(
    () => {
      if (prefersReducedMotion) return;
      if (!scope.current) return;

      const q = gsap.utils.selector(scope);

      gsap.set(q(".hero-title, .hero-subtitle, .hero-button"), {
        willChange: "transform,opacity",
      });

      const tl = gsap.timeline({ defaults: { ease: "power2.out" } });

      tl.from(q(".hero-title"), { y: 36, autoAlpha: 0, duration: 0.8 })
        .from(
          q(".hero-subtitle"),
          { y: 20, autoAlpha: 0, duration: 0.6 },
          "-=0.45"
        )
        .from(
          q(".hero-button"),
          { y: 14, autoAlpha: 0, duration: 0.5, stagger: 0.08 },
          "-=0.35"
        )
        .add(() => {
          gsap.set(q(".hero-title, .hero-subtitle, .hero-button"), {
            willChange: "auto",
          });
        });
    },
    { scope, dependencies: [prefersReducedMotion] }
  );

  return (
    <section
      id="hero"
      ref={scope}
      className="relative overflow-hidden pt-20 pb-10 sm:pb-12"
    >
      <Container className="relative">
        <div className="max-w-2xl">
          {/* Headline */}
          <h1 className="hero-title text-4xl sm:text-5xl font-semibold tracking-tight leading-[1.05]">
            <span className="block">Gradimo.</span>
            <span className="block">V skladu z načrti.</span>
            <span className="hidden sm:block">V skladu z naročnikom.</span>
          </h1>

          {/* Subheadline */}
          <p className="hero-subtitle mt-6 text-base leading-relaxed text-neutral-600 sm:text-lg">
            Izvedemo vse gradbene faze – od ideje do tehničnega prevzema.
          </p>

          {/* CTA */}
          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              href="/reference"
              className="hero-button rounded-full bg-neutral-900 px-5 py-2.5 text-sm font-medium text-white transition hover:bg-neutral-800"
            >
              Reference
            </Link>

            <Link
              href="/kontakt"
              className="hero-button rounded-full border border-neutral-300 px-5 py-2.5 text-sm transition hover:bg-neutral-50"
            >
              Kontakt
            </Link>
          </div>
        </div>
      </Container>

      {/* bottom fade to page */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-b from-transparent via-white/70 to-white sm:h-32"
      />
    </section>
  );
}