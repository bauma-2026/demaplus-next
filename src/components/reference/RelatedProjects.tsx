"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Reveal from "@/components/motion/Reveal";

type RelatedProject = {
  slug: string;
  title: string;
  thumb?: string;
  excerpt?: string;
};

type Props = {
  currentSlug: string;
  projects: RelatedProject[];
  limit?: number;
};

function shuffle<T>(arr: T[]) {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

export default function RelatedProjects({
  currentSlug,
  projects,
  limit = 3,
}: Props) {
  const [related, setRelated] = useState<RelatedProject[] | null>(null);

  useEffect(() => {
    const pool = projects.filter((p) => p.slug !== currentSlug);
    setRelated(shuffle(pool).slice(0, limit));
  }, [projects, currentSlug, limit]);

  if (!related?.length) return null;

  return (
    <section>
      <div className="mb-10 flex items-end justify-between gap-6">
        <div>
          <p className="text-xs font-medium tracking-wide text-neutral-400">
            Nadaljuj z ogledom
          </p>
          <h2 className="mt-2 text-xl sm:text-2xl font-semibold tracking-tight text-neutral-900">
            Sorodni projekti
          </h2>
        </div>

        <Link
          href="/reference"
          className="group inline-flex items-center gap-2 text-xs text-neutral-400 hover:text-neutral-600 transition"
        >
          <span>Vsi projekti</span>
          <span
            aria-hidden
            className="transition-transform group-hover:translate-x-0.5"
          >
            →
          </span>
        </Link>
      </div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {related.map((p, idx) => {
          const thumb = p.thumb ?? `/reference/${p.slug}/hero.webp`;

          return (
            <Reveal
              key={p.slug}
              variant="grid"
              className="h-full"
              delay={Math.min(idx, 8) * 0.02}
              blur={false}
            >
              <Link
                href={`/reference/${p.slug}`}
                className="group block"
              >
                <div className="relative mb-4 aspect-[4/3] w-full overflow-hidden rounded-xl">
                  <img
                    src={thumb}
                    alt={p.title}
                    className="w-full h-full object-cover transition duration-300 group-hover:scale-[1.015]"
                    loading="lazy"
                  />
                </div>

                <div className="text-[15px] font-semibold tracking-tight leading-snug text-neutral-900 transition-colors group-hover:text-neutral-700">
                  {p.title}
                </div>

                {p.excerpt ? (
                  <p className="mt-2 text-sm leading-relaxed text-neutral-600 line-clamp-2">
                    {p.excerpt}
                  </p>
                ) : null}

                <div className="mt-4 inline-flex items-center gap-2 text-xs text-neutral-400 transition-colors group-hover:text-neutral-500">
                  <span>Odpri projekt</span>
                  <span
                    aria-hidden
                    className="transition-transform group-hover:translate-x-0.5"
                  >
                    →
                  </span>
                </div>
              </Link>
            </Reveal>
          );
        })}
      </div>
    </section>
  );
}