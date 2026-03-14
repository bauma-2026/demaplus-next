import Link from "next/link";
import Image from "next/image";

type Props = {
  href: string;
  title: string;
  image?: string | null;
  year?: string | null;
  kicker?: string | null;
  location?: string | null;
  workType?: string | null;
};

export default function ReferenceGridCard({
  href,
  title,
  image,
  year,
  kicker,
  location,
  workType,
}: Props) {
  const meta = kicker || workType || location || null;

  return (
    <Link href={href} className="group block">
      {/* Media */}
      <div className="card-media relative aspect-[4/3] rounded-[28px]">
        {image ? (
          <Image
            src={image}
            alt={title}
            fill
            sizes="(max-width: 768px) 100vw, 33vw"
            className="object-cover transition-transform duration-700 ease-out will-change-transform group-hover:scale-[1.03]"
          />
        ) : (
          <div className="absolute inset-0 bg-gradient-to-br from-neutral-100 to-neutral-200" />
        )}

        {/* subtle overlay for depth */}
        <div className="absolute inset-0 bg-black/0 transition-colors duration-500 group-hover:bg-black/[0.03]" />
      </div>

      {/* Meta */}
      <div className="mt-3 flex items-center justify-between gap-3">
        <div className="min-w-0 text-[11px] uppercase tracking-[0.08em] text-neutral-400">
          {meta ? <span className="block truncate">{meta}</span> : <span>&nbsp;</span>}
        </div>

        {year ? (
          <div className="shrink-0 text-[11px] text-neutral-400">{year}</div>
        ) : null}
      </div>

      {/* Title */}
      <h3 className="mt-1 text-[15px] font-semibold leading-snug tracking-tight text-neutral-900 transition-colors duration-300 sm:text-base md:group-hover:text-neutral-700">
        {title}
      </h3>

      {/* CTA */}
      <div className="mt-1 text-xs text-neutral-500 transition-colors duration-300 group-hover:text-neutral-900">
        <span className="inline-flex items-center gap-1">
          Poglej projekt
          <span
            aria-hidden
            className="transition-transform duration-300 ease-out group-hover:translate-x-1"
          >
            →
          </span>
        </span>
      </div>
    </Link>
  );
}