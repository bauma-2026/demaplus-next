import Container from "@/components/layout/Container";
import Reveal from "@/components/motion/Reveal";
import PageHero from "@/components/layout/PageHero";
import { newsSorted } from "@/content/news";
import type { CSSProperties } from "react";
import NewsFeaturedCard from "@/components/cards/NewsFeaturedCard";
import NewsListItem from "@/components/cards/NewsListItem";

function formatDateSI(iso?: string) {
  if (!iso) return "";
  const m = iso.match(/^(\d{4})-(\d{2})-(\d{2})$/);
  if (!m) return iso;

  const [, y, mm, dd] = m;
  return `${parseInt(dd, 10)}. ${parseInt(mm, 10)}. ${parseInt(y, 10)}`;
}

function yearFromIso(iso?: string) {
  if (!iso) return null;
  const m = iso.match(/^(\d{4})-/);
  return m ? parseInt(m[1], 10) : null;
}

function hideIfYear2023(label?: string | null) {
  if (!label) return null;
  if (/\b2023\b/.test(label)) return null;
  return label;
}

function dateLabelFor(item: { period?: string; date?: string }) {
  if (item.period) return hideIfYear2023(item.period);

  const y = yearFromIso(item.date);
  if (y === 2023) return null;

  return item.date ? formatDateSI(item.date) : null;
}

export default function NewsIndexPage() {
  const [featured, ...rest] = newsSorted;

  return (
<section className="pb-10 pt-8 sm:pb-14 sm:pt-8 lg:pt-9">
  <Container>
    {/* Hero */}
    <Reveal variant="hero">
      <PageHero
        className="max-w-4xl"
        kicker="Aktualno"
        title="Novice"
        desc="Aktualno iz podjetja."
      />
    </Reveal>

    {/* Featured */}
    {featured ? (
   <div className="mt-6 sm:mt-7 lg:mt-6">
        <Reveal variant="grid" blur={false}>
          <div className="rounded-2xl border border-neutral-200 bg-white shadow-[0_8px_30px_rgba(0,0,0,0.06)]">
            <NewsFeaturedCard
              href={`/${featured.slug}`}
              title={featured.title}
              image={featured.cover}
              category={featured.workType ?? null}
              dateLabel={dateLabelFor(featured)}
              excerpt={featured.excerpt ?? null}
            />
          </div>
        </Reveal>
      </div>
    ) : null}

    {/* List */}
    {rest.length ? (
    <div className="mt-10 sm:mt-12 lg:mt-11">
        {/* Label */}
        <p className="mb-4 text-[12px] font-medium uppercase tracking-[0.16em] text-neutral-300">
          Ostale novice
        </p>

        <div className="overflow-hidden rounded-2xl border border-neutral-200 divide-y divide-neutral-200/70 bg-white">
          {rest.map((item) => (
            <div
              key={item.slug}
              className="
                group relative transition-all duration-200
                hover:bg-[var(--hover-tint)]
              "
              style={
                {
                  ["--hover-tint" as any]:
                    "color-mix(in srgb, var(--brand) 6%, white)",
                } as CSSProperties
              }
            >
  
              <NewsListItem
                href={`/${item.slug}`}
                title={item.title}
                image={item.cover}
                category={item.workType ?? null}
                dateLabel={dateLabelFor(item)}
                excerpt={item.excerpt ?? null}
              />
            </div>
          ))}
        </div>
      </div>
    ) : null}
  </Container>
</section>
  );
}