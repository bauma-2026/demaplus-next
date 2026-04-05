import fs from "fs";
import path from "path";
import Image from "next/image";
import Link from "next/link";
import Script from "next/script";
import { notFound } from "next/navigation";
import type { Metadata } from "next";

import Container from "@/components/layout/Container";
import PageHero from "@/components/layout/PageHero";
import Reveal from "@/components/motion/Reveal";
import ProjectBody from "@/components/reference/ProjectBody";
import ProjectMeta from "@/components/reference/ProjectMeta";
import RelatedProjectsEditorial from "@/components/reference/RelatedProjectsEditorial";

import { projects } from "@/content/projects.generated";
import { projectMeta } from "@/content/projects.meta.generated";
import { rewriteReferenceImages } from "@/lib/rewriteReferenceImages";

export const runtime = "nodejs";

const SITE_URL = "https://demaplus.si";

type PageProps = {
  params: Promise<{ slug: string }>;
};

function decodeHtmlEntities(s?: string) {
  if (!s) return s;

  return s
    .replace(/&#8220;|&ldquo;/g, "“")
    .replace(/&#8221;|&rdquo;/g, "”")
    .replace(/&#8216;|&lsquo;/g, "‘")
    .replace(/&#8217;|&rsquo;/g, "’")
    .replace(/&#8211;|&ndash;/g, "–")
    .replace(/&#8212;|&mdash;/g, "—")
    .replace(/&#8230;|&hellip;/g, "…")
    .replace(/&quot;/g, '"')
    .replace(/&#039;|&apos;/g, "'")
    .replace(/&amp;/g, "&")
    .replace(/&nbsp;|&#160;/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

function cleanExcerpt(input?: string, title?: string) {
  if (!input) return undefined;

  let x = input
    .replace(/Continue reading.*$/i, "")
    .replace(/<[^>]*>/g, "")
    .replace(/&hellip;|&#8230;/g, "…")
    .replace(/&nbsp;|&#160;/g, " ")
    .replace(/&amp;/g, "&")
    .replace(/&quot;/g, '"')
    .replace(/&#039;|&apos;/g, "'")
    .replace(/&ndash;|&#8211;/g, "–")
    .replace(/&mdash;|&#8212;/g, "—")
    .replace(/\s+/g, " ")
    .trim();

  const t = (title ?? "").trim();
  if (t && x.toLowerCase().endsWith(t.toLowerCase())) {
    x = x.slice(0, x.length - t.length).trim();
  }

  return x || undefined;
}

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

  console.log("[missing hero]", slug, candidates);
  return null;
}

function shuffleArray<T>(array: T[]): T[] {
  const arr = [...array];
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

function jsonLdForProject(args: {
  title: string;
  url: string;
  image?: string | null;
  meta: {
    location?: string;
    year?: string;
    client?: string;
    workType?: string;
    categories?: readonly string[];
  };
}) {
  const { title, url, image, meta } = args;

  const loc = (meta.location ?? "").trim();
  const year = (meta.year ?? "").trim();
  const client = (meta.client ?? "").trim();
  const workType = (meta.workType ?? "").trim();

  const data: Record<string, unknown> = {
    "@context": "https://schema.org",
    "@type": "CreativeWork",
    name: title,
    url,
  };

  if (image) data.image = [image];
  if (year) data.dateCreated = year;
  if (loc) data.locationCreated = { "@type": "Place", name: loc };
  if (client) data.sponsor = { "@type": "Organization", name: client };
  if (workType) data.about = workType;
  if (meta.categories?.length) data.keywords = meta.categories.join(", ");

  return data;
}

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;

  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    return {
      title: "Referenca ni najdena – Dema Plus",
      description: "Projekt ne obstaja ali je bil odstranjen.",
    };
  }

  const titleBase = decodeHtmlEntities(project.title) ?? project.title;
  const title = `${titleBase} – Dema Plus`;

  const description =
    cleanExcerpt(project.excerpt, titleBase) ??
    "Podrobnosti o referenčnem projektu podjetja Dema Plus.";

  const featuredImage = pickLocalHero(slug) ?? "/og-default.jpg";
  const imageUrl = `${SITE_URL}${featuredImage}`;
  const url = `${SITE_URL}/reference/${slug}`;

  return {
    title,
    description,
    alternates: {
      canonical: url,
    },
    openGraph: {
      title,
      description,
      url,
      siteName: "Dema Plus",
      locale: "sl_SI",
      type: "article",
      images: [
        {
          url: imageUrl,
          width: 1600,
          height: 1000,
          alt: titleBase,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [imageUrl],
    },
  };
}

export default async function ProjectDetail({ params }: PageProps) {
  const { slug } = await params;

  const index = projects.findIndex((p) => p.slug === slug);
  const project = index >= 0 ? projects[index] : null;

  if (!project) return notFound();

  const prevProject = index > 0 ? projects[index - 1] : null;
  const nextProject = index < projects.length - 1 ? projects[index + 1] : null;

  const prevSlug = prevProject?.slug ?? null;
  const nextSlug = nextProject?.slug ?? null;

  const metaKey = project.slug as keyof typeof projectMeta;
  const meta = projectMeta[metaKey] ?? {
    categories: [],
    client: "",
    location: "",
    workType: "",
    year: "",
  };

  const title = decodeHtmlEntities(project.title) ?? project.title;
  const subtitle = project.subtitle
    ? project.subtitle.charAt(0).toUpperCase() + project.subtitle.slice(1)
    : undefined;

  const featuredImage = pickLocalHero(slug) ?? `/reference/${slug}/hero.webp`;
  const featuredImageAbs = `${SITE_URL}${featuredImage}`;
  const html = rewriteReferenceImages((project.contentHtml ?? "").trim());

const RELATED_FALLBACK_THUMB = "/og-default.jpg";

const relatedItems = shuffleArray(
  projects
    .filter((p) => p.slug !== slug)
    .map((p) => {
      const m = projectMeta[p.slug as keyof typeof projectMeta];
      const thumb = pickLocalHero(p.slug) ?? RELATED_FALLBACK_THUMB;

      return {
        slug: p.slug,
        title: decodeHtmlEntities(p.title) ?? p.title,
        year: (m?.year as string | undefined) ?? undefined,
        location: (m?.location as string | undefined) ?? undefined,
        workType: (m?.workType as string | undefined) ?? undefined,
        thumb,
      };
    })
    .slice(0, 6) as {
    slug: string;
    title: string;
    year?: string;
    location?: string;
    workType?: string;
    thumb: string;
  }[]
);

  const url = `${SITE_URL}/reference/${project.slug}`;
  const jsonLd = jsonLdForProject({
    title,
    url,
    image: featuredImageAbs,
    meta,
  });

  return (
    <>
      <Script
        id={`project-jsonld-${slug}`}
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

    <Container>
  <header className="pt-8 sm:pt-8 lg:pt-9">
    <div className="flex items-center justify-between gap-4 text-sm leading-none">
      <Link
        href="/reference"
        className="inline-flex items-center gap-2 text-sm text-neutral-600 transition-colors duration-300 hover:text-neutral-900"
      >
        <span className="text-sm leading-none transition-transform duration-300 hover:-translate-x-0.5">
          ←
        </span>
        <span>Nazaj na reference</span>
      </Link>

      <div className="hidden items-center gap-3 whitespace-nowrap text-neutral-500 lg:flex">
        {prevSlug ? (
          <Link
            href={`/reference/${prevSlug}`}
            className="transition hover:text-neutral-900"
          >
            ← Prejšnji
          </Link>
        ) : (
          <span className="text-neutral-300">← Prejšnji</span>
        )}

        <span className="text-neutral-200" aria-hidden>
          |
        </span>

        {nextSlug ? (
          <Link
            href={`/reference/${nextSlug}`}
            className="transition hover:text-neutral-900"
          >
            Naslednji →
          </Link>
        ) : (
          <span className="text-neutral-300">Naslednji →</span>
        )}
      </div>
    </div>

    <Reveal variant="hero">
      <PageHero
        className="max-w-4xl mt-4 sm:mt-5"
        title={title}
        desc={subtitle}
      />
    </Reveal>
  </header>

  <Reveal variant="grid">
    <section className="mt-6 grid gap-6 sm:mt-7 sm:gap-8 lg:grid-cols-[minmax(0,1fr)_360px] lg:grid-rows-[auto_auto] lg:gap-10">
      <div className="order-1 overflow-hidden rounded-2xl border border-neutral-200 bg-neutral-50 lg:row-start-1">
        <Image
          src={featuredImage}
          alt={meta.location ? `${title} ${meta.location}` : title}
          width={1600}
          height={1000}
          priority
          sizes="(max-width: 1024px) 100vw, 66vw"
          className="aspect-[4/3] w-full bg-neutral-100 object-cover lg:aspect-[16/10]"
        />
      </div>

      <div className="order-3 self-start lg:order-2 lg:row-start-1 lg:sticky lg:top-24">
        <ProjectMeta
          categories={meta.categories ? [...meta.categories] : undefined}
          client={meta.client}
          location={meta.location}
          workType={meta.workType}
        />
      </div>

      <div className="order-2 lg:hidden">
        <section className="scroll-mt-[calc(var(--header-h)+16px)] border-t border-neutral-200 pt-6 sm:pt-8">
          <h2 className="text-xs font-medium uppercase tracking-[0.08em] text-neutral-400">
            Opis projekta
          </h2>

          {html ? (
            <div className="mt-6 max-w-[72ch]">
              <ProjectBody html={html} />
            </div>
          ) : (
            <div className="mt-4 text-sm text-neutral-600">
              Opis bo dodan kmalu.
            </div>
          )}
        </section>
      </div>

      <div className="hidden border-t border-neutral-200 pt-8 lg:block lg:row-start-2">
        <div className="max-w-[72ch]">
          <h2 className="text-xs font-medium uppercase tracking-[0.08em] text-neutral-400">
            Opis projekta
          </h2>

          {html ? (
            <div className="mt-5">
              <ProjectBody html={html} />
            </div>
          ) : (
            <div className="mt-4 text-sm text-neutral-600">
              Opis bo dodan kmalu.
            </div>
          )}
        </div>
      </div>
    </section>
  </Reveal>

  <Reveal variant="grid">
    <nav className="mt-10 border-t border-neutral-200/70 py-6 sm:mt-12 sm:py-7">
      <div className="flex items-center justify-between">
        {prevSlug ? (
          <Link
            href={`/reference/${prevSlug}`}
            aria-label="Prejšnji projekt"
            className="group inline-flex items-center gap-2 text-sm text-neutral-500 transition-colors duration-300 hover:text-neutral-900"
          >
            <span className="text-base leading-none transition-transform duration-300 group-hover:-translate-x-0.5">
              ←
            </span>
            <span>Prejšnji</span>
          </Link>
        ) : (
          <span className="inline-flex items-center gap-2 text-sm text-neutral-300">
            <span className="text-base leading-none">←</span>
            <span>Prejšnji</span>
          </span>
        )}

        {nextSlug ? (
          <Link
            href={`/reference/${nextSlug}`}
            aria-label="Naslednji projekt"
            className="group inline-flex items-center gap-2 text-sm text-neutral-500 transition-colors duration-300 hover:text-neutral-900"
          >
            <span>Naslednji</span>
            <span className="text-base leading-none transition-transform duration-300 group-hover:translate-x-0.5">
              →
            </span>
          </Link>
        ) : (
          <span className="inline-flex items-center gap-2 text-sm text-neutral-300">
            <span>Naslednji</span>
            <span className="text-base leading-none">→</span>
          </span>
        )}
      </div>
    </nav>
  </Reveal>
</Container>

<div className="mt-10 sm:mt-12">
  <RelatedProjectsEditorial
    items={relatedItems}
    title="Sorodne reference"
    subtitle="Izbor projektov s podobnim programom ali tipom izvedbe."
  />
</div>
    </>
  );
}