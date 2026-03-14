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

export default function NewsListItem({
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
      className="group grid gap-4 px-6 py-5 sm:px-7 sm:py-6 transition
           focus:outline-none focus-visible:ring-2 focus-visible:ring-neutral-900/10
           sm:grid-cols-[180px_1fr]"
    >
      <div className="relative aspect-[16/10] w-full overflow-hidden rounded-xl bg-neutral-100 sm:aspect-[4/3]">
        {image ? (
          <Image
            src={image}
           alt={title}
            fill
            sizes="(max-width: 768px) 100vw, 200px"
            className="object-cover transition duration-300 group-hover:scale-[1.02]"
          />
        ) : (
          <div className="absolute inset-0 bg-gradient-to-br from-neutral-100 to-neutral-200" />
        )}
      </div>

      <div className="min-w-0">
        {(category || dateLabel) ? (
          <div className="flex flex-wrap items-center gap-x-2 gap-y-1 text-[11px] font-medium tracking-wide text-neutral-500">
            {category ? (
              <span className="uppercase text-neutral-400">{category}</span>
            ) : null}
            {category && dateLabel ? <span className="opacity-40">•</span> : null}
            {dateLabel ? <span>{dateLabel}</span> : null}
          </div>
        ) : null}

        <h3 className="mt-1 text-sm sm:text-base font-semibold text-neutral-900 leading-snug line-clamp-2">
          {title}
        </h3>

        {excerpt ? (
          <p className="mt-2 text-sm leading-relaxed text-neutral-600 line-clamp-2">
            {excerpt}
          </p>
        ) : null}

        <div className="mt-3 text-xs font-medium text-neutral-500 transition group-hover:text-neutral-900">
          Preberi →
        </div>
      </div>
    </Link>
  );
}