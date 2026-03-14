import Link from "next/link";
import Image from "next/image";

type Props = {
  href: string;
  title: string;
  image?: string | null;
  dateLabel?: string | null;     // npr: "2023" ali "12. 2. 2026"
  category?: string | null;      // npr: "Aktualno"
  excerpt?: string | null;
};

export default function NewsCard({
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
      className="group block h-full rounded-2xl bg-white p-4 transition
           hover:bg-neutral-50/60 hover:shadow-[0_14px_40px_-28px_rgba(0,0,0,0.35)]
           focus:outline-none focus-visible:ring-2 focus-visible:ring-neutral-900/10"
    >
      {/* Image: “editorial / tok” (bolj široko, manj masivno) */}
     <div className="relative mb-6 aspect-[16/9] w-full overflow-hidden rounded-xl bg-neutral-100">
     {image ? (
  <Image
  src={image}
  alt={title}
  fill
  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
  placeholder="blur"
  blurDataURL="/images/blur-placeholder.png"
  className="object-cover transition duration-300 group-hover:scale-[1.02]"
/>
) : null}
      </div>

      {/* Small editorial meta */}
      <div className="flex items-center gap-2 text-[11px] font-medium tracking-wide text-neutral-500">
        {category ? <span>{category}</span> : null}
        {category && dateLabel ? <span className="opacity-50">•</span> : null}
        {dateLabel ? <span>{dateLabel}</span> : null}
      </div>

      <h3 className="mt-2 text-sm font-semibold leading-snug text-neutral-900">
        {title}
      </h3>

      {excerpt ? (
        <p className="mt-2 line-clamp-3 text-sm leading-relaxed text-neutral-600">
          {excerpt}
        </p>
      ) : null}

      <div className="mt-3 text-xs font-medium text-neutral-500 transition group-hover:text-neutral-900">
        Preberi →
      </div>
    </Link>
  );
}