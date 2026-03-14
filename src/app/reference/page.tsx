import fs from "fs";
import path from "path";

import Container from "@/components/layout/Container";
import PageHero from "@/components/layout/PageHero";
import Reveal from "@/components/motion/Reveal";
import ReferenceGrid from "@/components/reference/ReferenceGrid";

import { projects } from "@/content/projects.generated";
import { projectMeta } from "@/content/projects.meta.generated";
import { decodeHtmlEntities } from "@/lib/decodeHtmlEntities";

export const revalidate = 86400;

type PageProps = {
  searchParams?: Promise<{ page?: string }>;
};

function pickLocalHero(slug: string): string | null {
  const candidates = [
    `/reference/${slug}/hero.webp`,
    `/reference/${slug}/hero.jpg`,
    `/reference/${slug}/hero.jpeg`,
    `/reference/${slug}/hero.png`,
  ];

  for (const rel of candidates) {
    const abs = path.join(process.cwd(), "public", rel);
    if (fs.existsSync(abs)) return rel;
  }

  return null;
}

type GridItem = {
  slug: string;
  title: string;
  image: string | null;
  year?: string | null;
  workType?: string | null;
  location?: string | null;
  categories?: string[] | null;
};

export default async function ReferenceIndexPage({ searchParams }: PageProps) {
  const sp = (await searchParams) ?? {};

  const items: GridItem[] = projects.map((p) => {
    const image = pickLocalHero(p.slug);
    const key = p.slug as keyof typeof projectMeta;
    const meta = projectMeta[key];

    return {
      slug: p.slug,
      title: decodeHtmlEntities(p.title) ?? p.title,
      image,
      year: meta?.year ?? null,
      workType: meta?.workType ?? null,
      location: meta?.location ?? null,
      categories: meta?.categories ? [...meta.categories] : [],
    };
  });

  const step = 9;

  const pageRaw = Number(sp.page ?? "1");
  const page = Number.isFinite(pageRaw) && pageRaw > 0 ? pageRaw : 1;
  const initial = Math.min(page * step, items.length);

  return (
    <section className="pb-12 pt-12 sm:pb-14 sm:pt-14">
      <Container>
        <div className="border-b border-neutral-200/70 pb-6 sm:pb-8">
          <Reveal variant="hero">
            <PageHero
              className="max-w-4xl"
              kicker="Reference"
              title="Reference"
              desc="Izbor projektov – novogradnje, rekonstrukcije in zahtevne sanacije z doslednim nadzorom kakovosti."
            />
      </Reveal>
</div>

<div className="pt-0">
  <ReferenceGrid
    items={items}
    initial={initial}
    step={step}
    filters={[
      { key: "all", label: "Vse" },
      { key: "novogradnje", label: "Novogradnje" },
      { key: "rekonstrukcije", label: "Rekonstrukcije" },
      { key: "javni-objekti", label: "Javni objekti" },
      { key: "stanovanjski-objekti", label: "Stanovanjski objekti" },
    ]}
  />
</div>
      </Container>
    </section>
  );
}