import Link from "next/link";
import Image from "next/image";

type Props = {
  href: string;
  title: string;
  image?: string | null;
  dateLabel?: string | null;
  category?: string | null;
  excerpt?: string | null;
};

export default function NewsFeaturedCard({
  href,
  title,
  image,
  dateLabel,
  category,
  excerpt,
}: Props) {
  return (
    <Link
      href={href}
className="group block overflow-hidden rounded-2xl border border-neutral-200 bg-white
           transition-all duration-200
           hover:-translate-y-[2px] hover:border-neutral-300
           hover:shadow-[0_6px_20px_-15px_rgba(0,0,0,0.18)]
           focus:outline-none focus-visible:ring-2 focus-visible:ring-neutral-900/10"
    >
   <div className="grid gap-0 lg:grid-cols-[520px_minmax(0,1fr)]">
        {/* Media */}
        <div className="relative h-[220px] overflow-hidden bg-neutral-100 sm:h-[280px] lg:h-[340px]">
          {image ? (
            <Image
              src={image}
              alt={title}
              fill
              sizes="(max-width: 1024px) 100vw, 60vw"
              className="object-cover object-center transition-transform duration-300 group-hover:scale-[1.01]"
            />
          ) : (
            <div className="absolute inset-0 bg-gradient-to-br from-neutral-100 to-neutral-200" />
          )}
        </div>

        {/* Content */}
        <div className="p-5 sm:p-6 lg:p-7">
          {(category || dateLabel) ? (
            <div className="flex flex-wrap items-center gap-x-2 gap-y-1 text-[11px] font-medium tracking-wide text-neutral-500">
              {category ? (
                <span className="uppercase tracking-[0.08em] text-neutral-400">
                  {category}
                </span>
              ) : null}

              {category && dateLabel ? (
                <span className="opacity-40">•</span>
              ) : null}

              {dateLabel ? (
                <span className="text-neutral-400">{dateLabel}</span>
              ) : null}
            </div>
          ) : null}

          <h3 className="mt-2 text-lg font-semibold leading-snug tracking-tight text-neutral-900 sm:text-xl lg:text-2xl">
            {title}
          </h3>

          {excerpt ? (
            <p className="mt-3 line-clamp-4 text-sm leading-relaxed text-neutral-600">
              {excerpt}
            </p>
          ) : null}

          <div className="mt-5 inline-flex items-center gap-2 text-sm font-medium text-neutral-900">
            <span>Preberi</span>
            <span
              aria-hidden
              className="transition-transform group-hover:translate-x-0.5"
            >
              →
            </span>
          </div>
        </div>
      </div>
    </Link>
  );
}