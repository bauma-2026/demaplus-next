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
<aside className="rounded-2xl border border-panel bg-panel p-6 sm:p-7">

      {/* TITLE */}
      <div className="text-sm font-medium text-neutral-900">
        Podrobnosti
      </div>

      {/* ITEMS */}
      <dl className="mt-5 space-y-5">
        {items.map((item, i) => (
          <div key={i} className="space-y-1">
            <dt className="text-[11px] uppercase tracking-[0.08em] text-neutral-400">
              {item.label}
            </dt>

            <dd className="text-sm text-neutral-800 leading-relaxed">
              {item.value}
            </dd>

            {i < items.length - 1 && (
              <div className="pt-4 border-t border-neutral-200/70" />
            )}
          </div>
        ))}
      </dl>
    </aside>
  );
}