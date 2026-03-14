import React from "react";
import Image from "next/image";

type Props = {
  kicker?: string;
  title: string;
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
  return (
    <header className={`relative overflow-hidden ${className ?? ""}`}>
   {image && (
  <div className="absolute inset-0 bg-neutral-200">
    <Image
      src={image}
      alt=""
      fill
      priority
      className="object-cover"
      sizes="100vw"
    />
  </div>
)}

      {image ? (
        <div className="relative z-10">
          <div className="mx-auto max-w-7xl px-5 py-12 sm:py-20">
            <div
              className={
                rightSlot
                  ? "flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between"
                  : ""
              }
            >
              <div className="max-w-3xl">
                {kicker && (
                  <p className="text-xs font-medium uppercase tracking-[0.08em] text-white/70">
                    {kicker}
                  </p>
                )}

                <h1 className="mt-2 text-3xl font-semibold leading-[1.15] tracking-tight text-white sm:text-[38px]">
                  {title}
                </h1>

                {desc && (
                  <p className="mt-2 max-w-[420px] text-sm leading-6 text-white/80">
                    {desc}
                  </p>
                )}
              </div>

              {rightSlot && (
                <div className="shrink-0 pt-4 sm:pt-0">{rightSlot}</div>
              )}
            </div>
          </div>
        </div>
      ) : (
        <div className="relative z-10">
          <div
            className={
              rightSlot
                ? "flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between"
                : ""
            }
          >
            <div className="max-w-3xl">
              {kicker && (
                <p className="text-xs font-medium uppercase tracking-[0.08em] text-neutral-400">
                  {kicker}
                </p>
              )}

              <h1 className="mt-2 text-3xl font-semibold leading-[1.15] tracking-tight text-neutral-900 sm:text-[38px]">
                {title}
              </h1>

              {desc && (
                <p className="mt-2 max-w-[420px] text-sm leading-6 text-neutral-500">
                  {desc}
                </p>
              )}
            </div>

            {rightSlot && (
              <div className="shrink-0 pt-4 sm:pt-0">{rightSlot}</div>
            )}
          </div>
        </div>
      )}
    </header>
  );
}