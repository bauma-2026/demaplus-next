import Link from "next/link";
import Image from "next/image";
import Container from "@/components/layout/Container";

type RelatedItem = {
  slug: string;
  title: string;
  year?: string;
  location?: string;
  workType?: string;
  thumb?: string | null;
};

function resolveThumb(p: RelatedItem) {
  return p.thumb || `/reference/${p.slug}/hero.webp`;
}

export default function RelatedProjectsEditorial({
  items,
  title = "Sorodne reference",
  subtitle = "Izbor projektov s podobnim programom ali tipom izvedbe.",
}: {
  items: RelatedItem[];
  title?: string;
  subtitle?: string;
}) {
  if (!items?.length) return null;

  const listItems = items.slice(0, 6);

  return (
    <section className="border-t border-neutral-200 bg-neutral-50">
      <Container className="py-14 sm:py-16">
        <header className="flex items-end justify-between gap-6">
          <div className="max-w-3xl">
            <h2 className="text-2xl font-semibold tracking-tight text-neutral-900 sm:text-3xl">
              {title}
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-neutral-600">
              {subtitle}
            </p>
          </div>

          <Link
            href="/reference"
            className="group hidden items-center gap-2 text-sm text-neutral-500 transition-colors duration-300 hover:text-neutral-900 sm:inline-flex"
          >
            <span>Vse reference</span>
            <span
              aria-hidden
              className="transition-transform duration-300 group-hover:translate-x-0.5"
            >
              →
            </span>
          </Link>
        </header>

        {/* MOBILE / TABLET */}
        <div className="mt-8 divide-y divide-neutral-200 lg:hidden">
          {listItems.map((p) => (
            <Link
              key={p.slug}
              href={`/reference/${p.slug}`}
              className="group grid gap-5 py-6 sm:grid-cols-[180px_1fr] sm:items-center"
            >
              <div className="relative aspect-[4/3] overflow-hidden rounded-xl bg-neutral-100">
                <Image
                  src={resolveThumb(p)}
                  alt={p.title}
                  fill
                  sizes="(max-width: 640px) 100vw, 180px"
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]"
                />
                <div className="absolute inset-0 bg-black/0 transition-colors duration-500 group-hover:bg-black/[0.03]" />
              </div>

              <div className="min-w-0">
                <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-xs text-neutral-500">
                  {p.workType ? (
                    <span className="truncate">{p.workType}</span>
                  ) : p.year ? (
                    <span>{p.year}</span>
                  ) : (
                    <span className="text-neutral-400">Referenca</span>
                  )}

                  {p.workType && p.year ? (
                    <>
                      <span className="text-neutral-300">•</span>
                      <span>{p.year}</span>
                    </>
                  ) : null}

                  {p.location ? (
                    <>
                      <span className="text-neutral-300">•</span>
                      <span className="truncate">{p.location}</span>
                    </>
                  ) : null}
                </div>

                <h3 className="mt-2 text-base font-semibold tracking-tight text-neutral-900 transition-colors duration-300 group-hover:text-neutral-700 sm:text-lg">
                  {p.title}
                </h3>

                <p className="mt-2 text-sm text-neutral-600 transition-colors duration-300 group-hover:text-neutral-900">
                  <span className="inline-flex items-center gap-2">
                    Poglej projekt
                    <span
                      aria-hidden
                      className="transition-transform duration-300 group-hover:translate-x-1"
                    >
                      →
                    </span>
                  </span>
                </p>
              </div>
            </Link>
          ))}
        </div>

        {/* DESKTOP */}
        <div className="mt-10 hidden lg:grid lg:grid-cols-3 lg:gap-6">
          {listItems.map((p, idx) => (
            <Link key={p.slug} href={`/reference/${p.slug}`} className="group block">
              <div className="relative aspect-[4/3] overflow-hidden rounded-2xl bg-neutral-100">
                <Image
                  src={resolveThumb(p)}
                  alt={p.title}
                  fill
                  sizes="(max-width: 1024px) 33vw, 360px"
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]"
                  priority={idx < 3}
                />
                <div className="pointer-events-none absolute inset-0 bg-black/0 ring-1 ring-inset ring-black/5 transition-all duration-500 group-hover:bg-black/[0.03] group-hover:ring-black/10" />
              </div>

              <div className="mt-3">
                <div className="flex flex-wrap items-center gap-x-2 gap-y-1 text-[11px] uppercase tracking-[0.08em] text-neutral-400">
                  {p.workType ? (
                    <span className="truncate">{p.workType}</span>
                  ) : p.year ? (
                    <span>{p.year}</span>
                  ) : (
                    <span>Referenca</span>
                  )}

                  {p.workType && p.year ? (
                    <>
                      <span className="text-neutral-300">•</span>
                      <span>{p.year}</span>
                    </>
                  ) : null}
                </div>

                <h3 className="mt-1 text-base font-semibold tracking-tight text-neutral-900 transition-colors duration-300 group-hover:text-neutral-700">
                  {p.title}
                </h3>

                <p className="mt-1 text-sm text-neutral-600 transition-colors duration-300 group-hover:text-neutral-900">
                  <span className="inline-flex items-center gap-2">
                    Poglej projekt
                    <span
                      aria-hidden
                      className="transition-transform duration-300 group-hover:translate-x-1"
                    >
                      →
                    </span>
                  </span>
                </p>
              </div>
            </Link>
          ))}
        </div>
      </Container>
    </section>
  );
}