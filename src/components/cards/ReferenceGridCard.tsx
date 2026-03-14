import Link from "next/link";
import Image from "next/image";

type Props = {
  href: string;
  title: string;
  image?: string | null;
  year?: string | null;
  location?: string | null;
  workType?: string | null;
  excerpt?: string | null;
  kicker?: string | null;
};

function clean(v?: string | null) {
  const s = (v ?? "").trim();
  return s.length ? s : "";
}

function normalizeWorkType(v?: string | null) {
  const s = clean(v).toLowerCase();

  if (!s) return "";

  if (s.includes("novograd")) return "Novogradnja";
  if (s.includes("rekonstruk")) return "Rekonstrukcija";
  if (s.includes("prenov")) return "Prenova";
  if (s.includes("sanacij")) return "Sanacija";
  if (s.includes("izgrad")) return "Novogradnja";
  if (s.includes("goi")) return "GOI dela";

  return "";
}

export default function ReferenceGridCard({
  href,
  title,
  image,
  workType,
  kicker,
}: Props) {
  const displayKicker = clean(kicker) || normalizeWorkType(workType) || "Referenca";

  return (
    <Link href={href} className="group block">
      <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl bg-neutral-100 ring-1 ring-neutral-200/60">
        {image ? (
          <>
            <Image
              src={image}
              alt={title}
              fill
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              className="object-cover transition-transform duration-500 ease-out group-hover:scale-[1.05]"
            />
            <div className="pointer-events-none absolute inset-0 bg-black/0 transition-colors duration-300 group-hover:bg-black/[0.04]" />
          </>
        ) : (
          <div className="absolute inset-0 bg-gradient-to-br from-neutral-100 to-neutral-200" />
        )}
      </div>

      <div className="mt-3 text-[10px] uppercase tracking-[0.08em] text-neutral-400 leading-none">
        {displayKicker}
      </div>

      <h3 className="mt-1.5 text-[15px] sm:text-base font-semibold tracking-tight text-neutral-900 leading-snug line-clamp-2">
        {title}
      </h3>

      <div className="mt-1.5 text-xs text-neutral-500 transition-colors duration-200 group-hover:text-neutral-900">
        <span className="inline-flex items-center gap-1">
          Poglej projekt
          <span className="transition-transform duration-200 group-hover:translate-x-0.5">
            →
          </span>
        </span>
      </div>
    </Link>
  );
}