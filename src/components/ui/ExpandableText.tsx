"use client";

import { useState } from "react";

export default function ExpandableText({
  value,
  fallback = "—",
  clamp = 4,
  threshold = 180,
}: {
  value?: string;
  fallback?: string;
  clamp?: number;
  threshold?: number;
}) {
  const v = value?.trim();
  const [open, setOpen] = useState(false);

  if (!v) {
    return <div className="mt-1 text-sm leading-relaxed text-neutral-900">{fallback}</div>;
  }

  const isLong = v.length > threshold;

  return (
    <div>
      <div
        className={`mt-1 text-sm leading-relaxed text-neutral-900 ${
          !open && isLong ? `line-clamp-${clamp}` : ""
        }`}
      >
        {v}
      </div>

      {isLong && (
        <button
          onClick={() => setOpen(!open)}
          className="mt-2 text-xs text-neutral-500 hover:text-neutral-900 transition"
        >
          {open ? "Skrij" : "Prikaži več"}
        </button>
      )}
    </div>
  );
}