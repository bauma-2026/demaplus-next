"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { useRouter } from "next/navigation";
import gsap from "gsap";
import ReferenceGridCard from "@/components/cards/ReferenceGridCard";

type Item = {
  slug: string;
  title: string;
  image: string | null;
  year?: string | null;
  workType?: string | null;
  location?: string | null;
  categories?: string[] | null;
};

type FilterKey =
  | "all"
  | "novogradnje"
  | "rekonstrukcije"
  | "javni-objekti"
  | "stanovanjski-objekti";

type FilterOption = {
  key: FilterKey;
  label: string;
};

type Props = {
  items: Item[];
  initial?: number;
  step?: number;
  syncUrl?: boolean;
  basePath?: string;
  filters?: FilterOption[];
};

function normalize(value?: string | null) {
  return (value ?? "")
    .toLowerCase()
    .normalize("NFD")
    .replace(/\p{Diacritic}/gu, "")
    .trim();
}

function matchesFilter(item: Item, filter: FilterKey) {
  if (filter === "all") return true;

  const workType = normalize(item.workType);
  const categories = (item.categories ?? []).map((c) => normalize(c));

  if (filter === "novogradnje") {
    return workType.includes("novogradnja") || workType.includes("izgradnja");
  }

  if (filter === "rekonstrukcije") {
    return (
      workType.includes("rekonstrukcija") ||
      workType.includes("prenova") ||
      workType.includes("sanacija") ||
      workType.includes("obnova")
    );
  }

  if (filter === "javni-objekti") {
    return categories.includes("javni objekti");
  }

  if (filter === "stanovanjski-objekti") {
    return categories.includes("stanovanjski objekti");
  }

  return true;
}

export default function ReferenceGrid({
  items,
  initial = 9,
  step = 9,
  syncUrl = false,
  basePath = "/reference",
  filters = [
    { key: "all", label: "Vse" },
    { key: "novogradnje", label: "Novogradnje" },
    { key: "rekonstrukcije", label: "Rekonstrukcije" },
    { key: "javni-objekti", label: "Javni objekti" },
    { key: "stanovanjski-objekti", label: "Stanovanjski objekti" },
  ],
}: Props) {
  const [activeFilter, setActiveFilter] = useState<FilterKey>("all");
  const [visible, setVisible] = useState(initial);

  const router = useRouter();
  const gridRef = useRef<HTMLDivElement | null>(null);
  const prevVisibleRef = useRef<number>(initial);
  const prevFilterRef = useRef<FilterKey>("all");
  const pendingFilterAnimRef = useRef(false);
  const hasMountedRef = useRef(false);

  const filteredItems = useMemo(() => {
    return items.filter((item) => matchesFilter(item, activeFilter));
  }, [items, activeFilter]);

  useEffect(() => {
    setVisible(initial);
    prevVisibleRef.current = initial;
  }, [initial]);

  useEffect(() => {
    if (prevFilterRef.current === activeFilter) return;

    const nextVisible =
      activeFilter === "all"
        ? Math.min(initial, filteredItems.length)
        : Math.min(step, filteredItems.length);

    pendingFilterAnimRef.current = true;
    setVisible(nextVisible);
    prevVisibleRef.current = nextVisible;
    prevFilterRef.current = activeFilter;

    if (syncUrl) {
      router.replace(basePath, { scroll: false });
    }
  }, [
    activeFilter,
    filteredItems.length,
    initial,
    step,
    syncUrl,
    basePath,
    router,
  ]);

  useEffect(() => {
    if (!syncUrl) return;
    if (step <= 0) return;
    if (activeFilter !== "all") return;

    const page = Math.max(1, Math.ceil(visible / step));
    const href = page === 1 ? basePath : `${basePath}?page=${page}`;

    router.replace(href, { scroll: false });
  }, [visible, step, syncUrl, basePath, router, activeFilter]);

  const shown = useMemo(() => {
    return filteredItems.slice(0, visible);
  }, [filteredItems, visible]);

  const canLoadMore = step > 0 && shown.length < filteredItems.length;

  useEffect(() => {
    const reduce =
      typeof window !== "undefined" &&
      window.matchMedia &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    const prev = prevVisibleRef.current;

    if (reduce) {
      prevVisibleRef.current = visible;
      return;
    }

    if (!gridRef.current) {
      prevVisibleRef.current = visible;
      return;
    }

    if (visible <= prev) {
      prevVisibleRef.current = visible;
      return;
    }

    const nodes = Array.from(
      gridRef.current.querySelectorAll<HTMLElement>("[data-ref-card]")
    );

    const newOnes = nodes.slice(prev, visible);

    if (newOnes.length) {
      gsap.fromTo(
        newOnes,
        { opacity: 0, y: 18, scale: 0.985 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.7,
          ease: "power3.out",
          stagger: 0.06,
          clearProps: "transform,opacity",
        }
      );
    }

    prevVisibleRef.current = visible;
  }, [visible]);

  useEffect(() => {
    const reduce =
      typeof window !== "undefined" &&
      window.matchMedia &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (!hasMountedRef.current) {
      hasMountedRef.current = true;
      return;
    }

    if (!pendingFilterAnimRef.current) return;
    pendingFilterAnimRef.current = false;

    if (reduce || !gridRef.current) return;

    const nodes = Array.from(
      gridRef.current.querySelectorAll<HTMLElement>("[data-ref-card]")
    );

    if (!nodes.length) return;

    gsap.killTweensOf(nodes);

    gsap.fromTo(
      nodes,
      { opacity: 0, y: 10, scale: 0.992 },
      {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 0.36,
        ease: "power2.out",
        stagger: 0.03,
        clearProps: "transform,opacity",
      }
    );
  }, [activeFilter, shown.length]);

  return (
  <div className="mt-4 sm:mt-5">
    {/* FILTERS */}
    <div className="mb-6 sm:mb-7 flex flex-wrap gap-2.5">
      {filters.map((filter) => {
        const isActive = activeFilter === filter.key;

        return (
          <button
            key={filter.key}
            type="button"
            onClick={() => setActiveFilter(filter.key)}
            className={[
              "inline-flex items-center rounded-full px-4 py-[8px] text-sm transition-all duration-200",
              isActive ? "btn-pill-active" : "btn-pill-idle",
            ].join(" ")}
            aria-pressed={isActive}
          >
            {filter.label}
          </button>
        );
      })}
    </div>

    {/* GRID */}
    <div
      ref={gridRef}
      className="grid gap-x-6 gap-y-6 sm:grid-cols-2 sm:gap-x-7 sm:gap-y-7 xl:grid-cols-3 xl:gap-x-8 xl:gap-y-8"
    >
      {shown.map((p) => (
        <div key={p.slug} data-ref-card>
          <ReferenceGridCard
            href={`/reference/${p.slug}`}
            title={p.title}
            image={p.image}
            workType={p.workType ?? null}
          />
        </div>
      ))}
    </div>

    {/* EMPTY / LOAD MORE */}
    {!shown.length ? (
      <div className="mt-12 text-center text-sm text-neutral-500">
        Za izbrani filter trenutno ni projektov.
      </div>
    ) : canLoadMore ? (
      <div className="mt-14 flex justify-center">
       <button
  type="button"
onClick={() => {
  if (syncUrl && activeFilter === "all" && step > 0) {
    const nextPage = Math.max(1, Math.ceil(visible / step) + 1);
    const href = `${basePath}?page=${nextPage}`;
    router.push(href, { scroll: false });
    return;
  }

  setVisible((v) => Math.min(v + step, filteredItems.length));
}}
  className="group inline-flex min-w-[154px] items-center justify-center gap-2.5 rounded-full border border-neutral-300 bg-white px-6 py-3 text-sm font-medium text-neutral-900 transition-all duration-300 hover:border-neutral-900 hover:bg-neutral-900 hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-neutral-900/10 active:scale-[0.98]"
>
  <span>Naloži več</span>
  <span
    aria-hidden
    className="transition-transform duration-300 group-hover:translate-x-0.5"
  >
    →
  </span>
</button>
      </div>
    ) : (
      <div className="mt-12 text-center text-sm text-neutral-400">
        To je vse.
      </div>
    )}

    {/* SEO BLOCK */}
    <div className="mt-16 border-t border-neutral-200 pt-10 sm:mt-20 sm:pt-12">
      <div className="max-w-3xl">
        <h2 className="text-xl font-semibold tracking-tight text-neutral-900 sm:text-2xl">
          Gradbeni nadzor, rekonstrukcije in novogradnje
        </h2>

        <div className="mt-5 space-y-4 text-sm leading-relaxed text-neutral-700 sm:text-[15px]">
          <p>
            Dema Plus izvaja celovito vodenje investicijskih projektov,
            vključno z gradbenim nadzorom, rekonstrukcijami objektov,
            novogradnjami in strokovnim inženiringom.
          </p>

          <p>
            Reference vključujejo javne in stanovanjske objekte ter zahtevnejše
            rekonstrukcije, kjer je ključna usklajena izvedba, nadzor kakovosti
            in pregledno vodenje vseh faz projekta.
          </p>

          <p>
            Investitorjem zagotavljamo strokovno podporo od začetne presoje do
            izvedbe in primopredaje, predvsem na področju Ljubljane in širše
            Slovenije.
          </p>
        </div>
      </div>
    </div>
  </div>
);
}