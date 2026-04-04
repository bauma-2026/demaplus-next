"use client";

import Container from "@/components/layout/Container";
import Link from "next/link";
import Image from "next/image";
import { projects } from "@/content/projects.generated";
import { decodeHtmlEntities } from "@/lib/decodeHtmlEntities";

import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useMemo, useRef } from "react";

gsap.registerPlugin(ScrollTrigger);

export default function FeaturedProjects() {
  const featured = useMemo(() => {
    return projects.filter((p) =>
      [
        "svicarija",
        "novogradnja-objekta-vila-rozna-dolina-condominium",
        "salon-pohistva-in-hotel-nox",
        "hotel-cubo",
        "vila-madeleine",
        "izvedba-obnove-stavbe-vila-zlatica-v-ljubljani",
      ].includes(p.slug)
    );
  }, []);

  const root = useRef<HTMLDivElement | null>(null);

  useGSAP(
    () => {
      const ctx = gsap.context(() => {
        const isMobile = window.innerWidth < 640;

        if (isMobile) {
          gsap.set("[data-fp-item]", { opacity: 1, y: 0 });
          return;
        }

        gsap.fromTo(
          "[data-fp-item]",
          { opacity: 0, y: 16 },
          {
            opacity: 1,
            y: 0,
            duration: 0.7,
            ease: "power2.out",
            stagger: 0.08,
            scrollTrigger: {
              trigger: "[data-fp-grid]",
              start: "top 85%",
            },
          }
        );
      }, root);

      return () => ctx.revert();
    },
    { scope: root }
  );

  function onEnter(e: React.MouseEvent<HTMLAnchorElement>) {
    const a = e.currentTarget;
    const img = a.querySelector("[data-fp-img]");
    const overlay = a.querySelector("[data-fp-overlay]");
    const meta = a.querySelector("[data-fp-meta]");
    if (!img || !overlay || !meta) return;

    gsap.to(img, { scale: 1.06, duration: 0.9, ease: "power2.out" });
    gsap.to(overlay, { opacity: 0.06, duration: 0.6, ease: "power2.out" });
    gsap.to(meta, { y: -2, duration: 0.6, ease: "power2.out" });
  }

  function onLeave(e: React.MouseEvent<HTMLAnchorElement>) {
    const a = e.currentTarget;
    const img = a.querySelector("[data-fp-img]");
    const overlay = a.querySelector("[data-fp-overlay]");
    const meta = a.querySelector("[data-fp-meta]");
    if (!img || !overlay || !meta) return;

    gsap.to(img, { scale: 1, duration: 0.9, ease: "power2.out" });
    gsap.to(overlay, { opacity: 0.18, duration: 0.7, ease: "power2.out" });
    gsap.to(meta, { y: 0, duration: 0.7, ease: "power2.out" });
  }

  return (
<section
  id="reference"
  className="bg-white section-y scroll-mt-28"
>
      <Container>
        <div ref={root}>
          {/* Header */}
          <div className="flex flex-col gap-5 sm:flex-row sm:items-start sm:justify-between sm:gap-6">
          <div className="max-w-2xl">
  <p className="section-eyebrow">Reference</p>

  <h2 className="section-title-lg mt-2 leading-[1.08] sm:leading-[1.05] tracking-tight">
    Projekti, ki govorijo
    <br className="sm:hidden" /> namesto nas.
  </h2>

  <p className="section-lead mt-3 leading-[1.5] sm:leading-[1.55] text-neutral-600">
    Izbrani projekti, kjer so ključni
    <br className="sm:hidden" /> natančnost izvedbe, usklajenost in odgovornost.
  </p>
</div>

           
          </div>

        {/* Mobile slider */}
<div className="mt-8 sm:hidden">
  <div
    className="
      -mx-5 overflow-x-auto overflow-y-hidden px-5
      scroll-pl-5
      overscroll-x-contain touch-pan-x
      snap-x snap-mandatory
      [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden
    "
    style={{ WebkitOverflowScrolling: "touch" }}
  >
    <div className="flex gap-4 pr-5">
      {featured.slice(0, 6).map((p) => {
        const title = decodeHtmlEntities(p.title);
        const thumb = p.images?.[0] ?? `/reference/${p.slug}/hero.webp`;

        return (
          <div
            key={p.slug}
            className="w-[86%] min-w-[86%] shrink-0 snap-start"
          >
            <Link
              href={`/reference/${p.slug}`}
              className="group block"
            >
              <div className="relative aspect-[4/3] overflow-hidden rounded-xl bg-neutral-100">
                <Image
                  src={thumb}
                  alt={title}
                  fill
                  sizes="86vw"
                  className="object-cover saturate-[0.9] contrast-[1.02]"
                />

                <div className="pointer-events-none absolute inset-0 opacity-[0.18]">
                  <div className="absolute inset-0 bg-black" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/35 via-transparent to-white/10" />
                </div>
              </div>
            </Link>

            <div className="mt-2 pr-2">
              <p className="text-[13px] text-neutral-600">{title}</p>
            </div>
          </div>
        );
      })}
{/* End spacer */}
<div className="w-[0.5px] min-w-[0.5px] shrink-0 snap-start" />
     {/*
  End CTA rail (removed – replaced with bottom CTA + spacer)

  <Link
    href="/reference"
    className="group flex w-[112px] min-w-[112px] shrink-0 snap-start flex-col items-center justify-center text-center -ml-5"
  >
    <div
      className="
        flex h-[48px] w-[48px] items-center justify-center rounded-full
        bg-neutral-100/70 ring-1 ring-black/5
        transition-all duration-200
        group-hover:scale-[1.04] group-hover:bg-neutral-100
      "
    >
      <span className="text-[24px] leading-none text-neutral-800 transition-transform duration-200 group-hover:translate-x-[2px]">
        →
      </span>
    </div>

    <span className="mt-4 text-[13px] leading-[1.15] text-neutral-800 transition-colors group-hover:text-neutral-950">
      Vse
      <br />
      reference
    </span>
  </Link>
*/}
    </div>
  </div>
</div>
        {/* Desktop grid */}
<div
  data-fp-grid
  className="mt-10 hidden gap-x-8 gap-y-10 sm:grid sm:grid-cols-2 lg:gap-x-10 lg:grid-cols-3"
>
  {featured.slice(0, 6).map((p) => {
    const title = decodeHtmlEntities(p.title);
    const excerpt = decodeHtmlEntities(p.excerpt);
    const thumb = p.images?.[0] ?? `/reference/${p.slug}/hero.webp`;

    return (
      <Link
        key={p.slug}
        href={`/reference/${p.slug}`}
        data-fp-item
        onMouseEnter={onEnter}
        onMouseLeave={onLeave}
        className="group block"
      >
        <div className="relative aspect-[4/3] overflow-hidden rounded-[14px] bg-neutral-100">
          <div
            data-fp-img
            className="absolute inset-0 will-change-transform"
          >
            <Image
              src={thumb}
              alt={title}
              fill
              sizes="(max-width: 1024px) 50vw, 33vw"
              className="object-cover saturate-[0.9] contrast-[1.02] transition-transform duration-700 group-hover:scale-[1.03]"
            />
          </div>

          <div
            data-fp-overlay
            className="pointer-events-none absolute inset-0 opacity-[0.18] transition-opacity duration-300 group-hover:opacity-[0.22]"
          >
            <div className="absolute inset-0 bg-black" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/35 via-transparent to-white/10" />
          </div>
        </div>

        <div data-fp-meta className="mt-4 space-y-2">
          <h3 className="card-title transition-colors duration-200 group-hover:text-neutral-800">
            {title}
          </h3>

          {excerpt ? (
            <p className="card-meta line-clamp-2">{excerpt}</p>
          ) : null}

          <div className="card-link flex items-center gap-1.5 text-neutral-600 transition-colors duration-200 group-hover:text-neutral-800">
            <span>Poglej projekt</span>
            <span className="translate-y-[0.5px] text-neutral-400 transition-transform duration-200 group-hover:translate-x-[2px]">
              →
            </span>
          </div>
        </div>
      </Link>
    );
  })}
</div>


<div className="mt-6 sm:mt-8">
  <Link
    href="/reference"
    className="group inline-flex items-center gap-2 rounded-full border border-neutral-300 px-5 py-2.5 text-sm font-medium text-neutral-900 transition-all hover:bg-neutral-100 hover:border-neutral-400"
  >
    Vse reference
    <span className="transition-transform group-hover:translate-x-[2px]">
      →
    </span>
  </Link>
</div>
        </div>
      </Container>
    </section>
  );
}