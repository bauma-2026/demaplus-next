import ExpandableText from "@/components/ui/ExpandableText";

type Props = {
  categories?: string[];
  client?: string | null;
  location?: string | null;
  workType?: string | null;
};

function clean(v?: string | null) {
  const s = (v ?? "").trim();
  return s.length ? s : "";
}

export default function ProjectMeta({
  categories,
  client,
  location,
  workType,
}: Props) {
  const cats = (categories ?? []).filter(Boolean).join(", ");
  const c = clean(client);
  const l = clean(location);
  const w = clean(workType);

  const items = [
    { label: "Kategorije", value: cats },
    { label: "Naročnik", value: c },
    { label: "Lokacija izvedbe", value: l },
    { label: "Vrsta del", value: w },
  ].filter((x) => x.value);

  if (!items.length) return null;

  return (
    <aside className="rounded-2xl border border-panel bg-panel p-5 sm:p-6">
      {/* TITLE */}
      <div className="text-sm font-medium text-neutral-900">
        Podrobnosti
      </div>

      {/* ITEMS */}
      <dl className="mt-4">
        {items.map((item, i) => (
          <div
            key={i}
            className={[
              "py-4",
              i < items.length - 1 ? "border-b border-neutral-200/70" : "",
            ].join(" ")}
          >
            <dt className="text-[11px] uppercase tracking-[0.08em] text-neutral-400">
              {item.label}
            </dt>

            <dd className="mt-1.5 text-sm leading-relaxed text-neutral-800">
              {item.value}
            </dd>
          </div>
        ))}
      </dl>
    </aside>
  );
}