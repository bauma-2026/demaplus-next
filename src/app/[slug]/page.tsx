import type { Metadata } from "next";
import Container from "@/components/layout/Container";
import PageHero from "@/components/layout/PageHero";
import Reveal from "@/components/motion/Reveal";
import Link from "next/link";
import { notFound } from "next/navigation";
import { newsSorted } from "@/content/news";
import Script from "next/script";

export const runtime = "nodejs";

const SITE_URL = "https://demaplus.si";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return newsSorted.map((item) => ({
    slug: item.slug,
  }));
}

function valueOrDash(value?: string) {
  return value && value.trim() !== "" ? value : "—";
}

function coverWebpFromJpg(src: string) {
  if (src.endsWith(".webp")) return src;
  return src.replace(/\.(jpe?g|png)$/i, ".webp");
}

function formatDateSI(iso?: string) {
  if (!iso) return "";
  const m = iso.match(/^(\d{4})-(\d{2})-(\d{2})$/);
  if (!m) return iso;
  const [, y, mm, dd] = m;
  return `${parseInt(dd, 10)}. ${parseInt(mm, 10)}. ${y}`;
}

function indexBySlug(slug: string) {
  return newsSorted.findIndex((n) => n.slug === slug);
}

function getPrevNext(slug: string) {
  const i = indexBySlug(slug);
  if (i === -1) return { prev: undefined, next: undefined };

  return {
    prev: i > 0 ? newsSorted[i - 1] : undefined,
    next: i < newsSorted.length - 1 ? newsSorted[i + 1] : undefined,
  };
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;

  const item = newsSorted.find((n) => n.slug === slug);
  if (!item) return {};

  const title = item.title;
  const description =
    (item.excerpt && item.excerpt.trim()) ||
    "Novice in obvestila – DEMA PLUS, inženiring d.o.o.";

  const canonical = `/${item.slug}`;
  const ogImage = item.cover ? coverWebpFromJpg(item.cover) : "/og-default.jpg";

  return {
    title,
    description,
    alternates: { canonical },
    openGraph: {
      title,
      description,
      type: "article",
      url: canonical,
      images: [{ url: ogImage, width: 1200, height: 630, alt: title }],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [ogImage],
    },
  };
}

export default async function Page({ params }: PageProps) {
  const { slug } = await params;

  const item = newsSorted.find((n) => n.slug === slug);
  if (!item) return notFound();

  const { prev, next } = getPrevNext(slug);

  const description =
    (item.excerpt && item.excerpt.trim()) ||
    "Novice in obvestila – DEMA PLUS, inženiring d.o.o.";

  const articleUrl = `${SITE_URL}/${item.slug}`;
  const articleImage = item.cover
    ? `${SITE_URL}${coverWebpFromJpg(item.cover)}`
    : `${SITE_URL}/og-default.jpg`;

  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: item.title,
    description,
    datePublished: item.date || undefined,
    dateModified: item.date || undefined,
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": articleUrl,
    },
    author: {
      "@type": "Organization",
      name: "DEMA PLUS, inženiring d.o.o.",
    },
    publisher: {
      "@type": "Organization",
      name: "DEMA PLUS, inženiring d.o.o.",
      logo: {
        "@type": "ImageObject",
        url: `${SITE_URL}/og-default.jpg`,
      },
    },
    image: [articleImage],
  };

  return (
<Container>
  <header className="pt-8 sm:pt-8 lg:pt-9">
    <div className="flex items-center justify-between gap-4 text-sm leading-none">
      <Link
        href="/novice"
        className="inline-flex items-center gap-2 text-sm text-neutral-600 transition-colors duration-300 hover:text-neutral-900"
      >
        <span className="text-sm leading-none transition-transform duration-300 hover:-translate-x-0.5">
          ←
        </span>
        <span>Nazaj na novice</span>
      </Link>

      <div className="flex items-center gap-3 whitespace-nowrap text-neutral-500">
        {prev ? (
          <Link
            href={`/${prev.slug}`}
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

        {next ? (
          <Link
            href={`/${next.slug}`}
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
      <div className="max-w-4xl pt-4 sm:pt-5">
        <PageHero className="max-w-4xl" kicker="Novica" title={item.title} />

        {item.date ? (
          <time
            dateTime={item.date}
            className="mt-2 block text-sm text-neutral-500"
          >
            {formatDateSI(item.date)}
          </time>
        ) : null}
      </div>
    </Reveal>
  </header>

  <Reveal variant="grid">
    <section className="mt-7 grid gap-8 lg:grid-cols-[minmax(0,1fr)_360px] lg:gap-10">
      <div className="min-w-0">
        <div className="overflow-hidden rounded-2xl border border-neutral-200/70 bg-white">
          {item.cover ? (
            <picture className="block">
              <source srcSet={coverWebpFromJpg(item.cover)} type="image/webp" />
              <img
                src={item.cover}
                alt={item.title}
                loading="eager"
                decoding="async"
                fetchPriority="high"
                draggable={false}
                className="block aspect-[4/3] w-full select-none object-cover lg:aspect-[16/9]"
              />
            </picture>
          ) : (
            <div className="aspect-[4/3] w-full bg-neutral-100 lg:aspect-[16/9]" />
          )}
        </div>

        <section
          id="o-projektu"
          className="scroll-mt-[calc(var(--header-h)+16px)] mt-8"
        >
          <div className="max-w-[72ch]">
            <div className="text-xs font-medium uppercase tracking-[0.12em] text-neutral-500">
              O projektu
            </div>

            <div
              className="article-content mt-6 text-neutral-700 leading-relaxed"
              dangerouslySetInnerHTML={{
                __html: item.contentHtml || `<p>${item.excerpt ?? ""}</p>`,
              }}
            />
          </div>
        </section>
      </div>

      <aside className="self-start rounded-2xl border border-neutral-200 bg-white p-6 lg:sticky lg:top-24">
        <div className="flex items-center justify-between gap-3">
          <div className="text-[11px] font-medium uppercase tracking-[0.08em] text-neutral-500">
            Podrobnosti
          </div>

          <span className="rounded-full border border-neutral-200 bg-white px-3 py-1 text-xs text-neutral-600">
            Novice
          </span>
        </div>

        <div className="mt-5 space-y-0">
          <div className="py-4">
            <div className="text-sm font-semibold text-neutral-900">
              Kategorija
            </div>
            <div className="mt-1 text-sm text-neutral-700">
              {valueOrDash(item.category)}
            </div>
          </div>

          <div className="border-t border-neutral-200" />

          <div className="py-4">
            <div className="text-sm font-semibold text-neutral-900">
              Naročnik
            </div>
            <div className="mt-1 text-sm text-neutral-700">
              {valueOrDash(item.client)}
            </div>
          </div>

          <div className="border-t border-neutral-200" />

          <div className="py-4">
            <div className="text-sm font-semibold text-neutral-900">
              Leto izvedbe
            </div>
            <div className="mt-1 text-sm text-neutral-700">
              {valueOrDash(item.period)}
            </div>
          </div>

          <div className="border-t border-neutral-200" />

          <div className="py-4">
            <div className="text-sm font-semibold text-neutral-900">
              Lokacija izvedbe
            </div>
            <div className="mt-1 text-sm text-neutral-700">
              {valueOrDash(item.location)}
            </div>
          </div>

          <div className="border-t border-neutral-200" />

          <div className="py-4">
            <div className="text-sm font-semibold text-neutral-900">
              Vrsta del
            </div>
            <div className="mt-1 text-sm text-neutral-700">
              {valueOrDash(item.workType)}
            </div>
          </div>
        </div>
      </aside>
    </section>
  </Reveal>

  <div className="mt-16 border-t border-neutral-200 pb-16 pt-8">
    <Link
      href="/novice"
      className="text-sm text-neutral-600 transition hover:text-neutral-900"
    >
      ← Vse novice
    </Link>
  </div>

  <Script
    id={`article-jsonld-${item.slug}`}
    type="application/ld+json"
    strategy="afterInteractive"
    dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
  />
</Container>
  );
}