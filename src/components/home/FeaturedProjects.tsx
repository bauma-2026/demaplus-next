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

function seededRandom(seed: number) {
  let t = seed % 2147483647;
  if (t <= 0) t += 2147483646;
  return () => (t = (t * 16807) % 2147483647) / 2147483647;
}

function shuffleArraySeeded<T>(array: T[], seed: number): T[] {
  const rand = seededRandom(seed);
  const arr = [...array];
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(rand() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

gsap.registerPlugin(ScrollTrigger);

export default function FeaturedProjects() {
const featured = useMemo(() => {
  const hourSeed = Math.floor(Date.now() / (1000 * 60 * 60 * 6));

  return shuffleArraySeeded(projects, hourSeed).slice(0, 6);
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
      className="-mt-6 pt-10 pb-16 sm:-mt-10 sm:pt-12 sm:pb-20 scroll-mt-28"
    >
      <Container>
        <div ref={root}>
          {/* Header */}
          <div className="flex items-start justify-between gap-6">
            <div className="max-w-2xl">
              <p className="section-eyebrow">Reference</p>

              <h2 className="section-title-lg">
                Projekti, ki govorijo namesto nas.
              </h2>

              <p className="section-lead">
                Izbrani projekti, kjer je kakovost izvedbe ključnega pomena.
              </p>
            </div>

            <Link
              href="/reference"
              className="group hidden sm:inline-flex items-center gap-2 translate-y-[2px] text-sm font-medium text-neutral-700 transition-colors hover:text-[color:var(--brand-strong)]"
            >
              Vse reference
              <span className="translate-y-[0.5px] text-neutral-400 transition-transform group-hover:translate-x-[2px]">
                →
              </span>
            </Link>
          </div>

          {/* Grid */}
          <div
            data-fp-grid
            className="mt-8 grid gap-y-12 gap-x-10 sm:grid-cols-2 lg:grid-cols-3"
          >
          {featured.map((p) => {
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
                  {/* Image */}
                  <div className="relative aspect-[4/3] overflow-hidden rounded-xl bg-neutral-100">
                    <div
                      data-fp-img
                      className="absolute inset-0 will-change-transform"
                    >
                      <Image
                        src={thumb}
                        alt={title}
                        fill
                        sizes="(max-width: 768px) 100vw, 33vw"
                        className="object-cover saturate-[0.9] contrast-[1.02]"
                      />
                    </div>

                    <div
                      data-fp-overlay
                      className="pointer-events-none absolute inset-0 opacity-[0.18]"
                    >
                      <div className="absolute inset-0 bg-black" />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/35 via-transparent to-white/10" />
                    </div>
                  </div>

                  {/* Meta */}
                  <div data-fp-meta className="mt-4">
                    <h3 className="card-title transition-colors group-hover:text-neutral-700">
                      {title}
                    </h3>

                    {excerpt ? (
                      <p className="card-meta line-clamp-2">{excerpt}</p>
                    ) : null}

                    <div className="card-link group-hover:text-neutral-700">
                      Poglej projekt
                      <span className="translate-y-[0.5px] text-neutral-400 transition-transform group-hover:translate-x-[2px]">
                        →
                      </span>
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>

          {/* Mobile CTA */}
          <div className="mt-10 sm:hidden">
            <Link
              href="/reference"
              className="group inline-flex items-center gap-2 text-sm font-medium text-neutral-700 transition-colors hover:text-[color:var(--brand-strong)]"
            >
              Vse reference
              <span className="translate-y-[0.5px] text-neutral-400 transition-transform group-hover:translate-x-[2px]">
                →
              </span>
            </Link>
          </div>
        </div>
      </Container>
    </section>
  );
}