"use client";

import { useEffect, useMemo, useState } from "react";

type Props = {
  images: string[];
  title?: string;
};

export default function ProjectGallery({ images, title }: Props) {
  const list = useMemo(() => (images ?? []).filter(Boolean), [images]);
  const [open, setOpen] = useState(false);
  const [index, setIndex] = useState(0);

  const canShow = list.length > 0;

  function openAt(i: number) {
    setIndex(i);
    setOpen(true);
  }

  function close() {
    setOpen(false);
  }

  function prev() {
    setIndex((i) => (i - 1 + list.length) % list.length);
  }

  function next() {
    setIndex((i) => (i + 1) % list.length);
  }

  useEffect(() => {
    if (!open) return;

    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") close();
      if (e.key === "ArrowLeft") prev();
      if (e.key === "ArrowRight") next();
    }

    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";

    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [open, list.length]);

  if (!canShow) return null;

  return (
    <div className="mt-10">
      <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
        {list.map((src, i) => (
          <button
            key={`${src}-${i}`}
            type="button"
            onClick={() => openAt(i)}
            className="group relative overflow-hidden rounded-2xl border border-neutral-200 bg-neutral-50 text-left transition focus:outline-none focus-visible:ring-2 focus-visible:ring-neutral-400"
            aria-label={`Open image ${i + 1}`}
          >
            <img
              src={src}
              alt={title ? `${title} – ${i + 1}` : `Project image ${i + 1}`}
              className="h-48 w-full object-cover transition duration-300 group-hover:scale-[1.02]"
              loading="lazy"
              decoding="async"
              draggable={false}
            />
          </button>
        ))}
      </div>

      {open ? (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4 backdrop-blur-sm"
          role="dialog"
          aria-modal="true"
          onMouseDown={(e) => {
            if (e.target === e.currentTarget) close();
          }}
        >
          <div className="relative w-full max-w-5xl">
            <div className="relative overflow-hidden rounded-2xl bg-black">
              <img
                src={list[index]}
                alt={
                  title ? `${title} – ${index + 1}` : `Project image ${index + 1}`
                }
                className="max-h-[80vh] w-full object-contain"
                loading="eager"
                decoding="async"
                draggable={false}
              />
            </div>

            <div className="mt-3 flex items-center justify-between text-white">
              <button
                type="button"
                onClick={prev}
                className="rounded-full border border-white/20 px-3 py-1.5 text-sm transition hover:bg-white/10"
                aria-label="Previous image"
              >
                ←
              </button>

              <div className="text-sm text-white/75">
                {index + 1} / {list.length}
              </div>

              <button
                type="button"
                onClick={next}
                className="rounded-full border border-white/20 px-3 py-1.5 text-sm transition hover:bg-white/10"
                aria-label="Next image"
              >
                →
              </button>
            </div>

            <button
              type="button"
              onClick={close}
              className="absolute right-0 top-0 -translate-y-1/2 rounded-full border border-neutral-200 bg-white px-3 py-1.5 text-sm text-neutral-900 transition hover:bg-neutral-100"
              aria-label="Close"
            >
              ✕
            </button>
          </div>
        </div>
      ) : null}
    </div>
  );
}