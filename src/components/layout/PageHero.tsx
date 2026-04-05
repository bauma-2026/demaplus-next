import React from "react";
import Image from "next/image";

type Props = {
  kicker?: string;
  title: React.ReactNode;
  desc?: string;
  className?: string;
  rightSlot?: React.ReactNode;
  image?: string;
};

export default function PageHero({
  kicker,
  title,
  desc,
  className,
  rightSlot,
  image,
}: Props) {
  const layoutClass = rightSlot
    ? "flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between"
    : "";

  return (
    <header className={["relative overflow-hidden", className ?? ""].join(" ")}>
      {image && (
        <div className="absolute inset-0">
          <Image
            src={image}
            alt=""
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-black/35" />
          <div className="absolute inset-0 bg-gradient-to-r from-black/55 via-black/25 to-transparent" />
        </div>
      )}

      <div className="relative z-10">
        {image ? (
          <div className="mx-auto max-w-7xl px-5 py-10 sm:py-14">
            <div className={layoutClass}>
              <div className="max-w-4xl">
                {kicker && (
                  <p className="text-[12px] font-medium uppercase tracking-[0.08em] text-white/70">
                    {kicker}
                  </p>
                )}

                <h1 className="mt-1.5 text-3xl font-semibold leading-[1.08] tracking-tight text-white sm:text-[38px]">
                  {title}
                </h1>

              {desc && (
  <p className="mt-3 hidden max-w-[60ch] text-sm leading-6 text-white/80 sm:block sm:text-base">
    {desc}
  </p>
)}
              </div>

              {rightSlot && (
                <div className="shrink-0 pt-3 sm:pt-0">{rightSlot}</div>
              )}
            </div>
          </div>
        ) : (
          <div className={layoutClass}>
            <div className="max-w-4xl">
              {kicker && (
                <p className="text-[12px] font-medium uppercase tracking-[0.08em] text-neutral-400">
                  {kicker}
                </p>
              )}

              <h1 className="mt-1.5 text-3xl font-semibold leading-[1.08] tracking-tight text-neutral-900 sm:text-[38px]">
                {title}
              </h1>

             {desc && (
  <p className="mt-3 hidden max-w-[60ch] text-sm leading-6 text-neutral-500 sm:block sm:text-base">
    {desc}
  </p>
)}
            </div>

            {rightSlot && (
              <div className="shrink-0 pt-3 sm:pt-0">{rightSlot}</div>
            )}
          </div>
        )}
      </div>
    </header>
  );
}