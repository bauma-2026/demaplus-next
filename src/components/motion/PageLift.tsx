"use client";

import type { ReactNode } from "react";
import { useEffect, useRef } from "react";
import { usePathname } from "next/navigation";
import gsap from "gsap";

export default function PageLift({
  children,
  // ✅ bolj "novice" občutek
  y = 8,
  duration = 0.45,
  ease = "power2.out",
  scrollTop = true,
}: {
  children: ReactNode;
  y?: number;
  duration?: number;
  ease?: gsap.EaseString;
  scrollTop?: boolean;
}) {
  const pathname = usePathname();
  const root = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (scrollTop) {
      window.scrollTo({ top: 0, left: 0, behavior: "auto" });
    }

    if (!root.current) return;

    gsap.killTweensOf(root.current);

    // ✅ manj "fade", bolj clean (novice vibe)
    gsap.fromTo(
      root.current,
      { autoAlpha: 0, y },
      { autoAlpha: 1, y: 0, duration, ease, clearProps: "transform" }
    );
  }, [pathname, y, duration, ease, scrollTop]);

  return <div ref={root}>{children}</div>;
}