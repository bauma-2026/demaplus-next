"use client";

import { useLayoutEffect, useMemo, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

type Variant = "hero" | "grid" | "text" | "custom";

type RevealProps = {
  children: React.ReactNode;
  className?: string;

  /** Preset motion profile */
  variant?: Variant;

  /** Initial offset in px */
  y?: number;

  /** Duration in seconds */
  duration?: number;

  /** Delay in seconds */
  delay?: number;

  /** ScrollTrigger start position */
  start?: string;

  /** Animate only once */
  once?: boolean;

  /** Add subtle blur on start */
  blur?: boolean;

  /** GSAP easing */
  ease?: string;

  /** Blur amount in px (only if blur=true) */
  blurAmount?: number;
};

let _gsapRegistered = false;

const PRESETS: Record<Exclude<Variant, "custom">, Required<Pick<
  RevealProps,
  "y" | "duration" | "start" | "once" | "blur" | "ease" | "blurAmount"
>>> = {
  // Hero: počasneje, bolj “glide”
  hero: {
    y: 12,
    duration: 1.05,
    ease: "expo.out",
    start: "top 92%",
    once: true,
    blur: false,
    blurAmount: 4,
  },

  // Grid cards/thumbs: hitrejše, brez blura
  grid: {
    y: 10,
    duration: 0.8,
    ease: "power3.out",
    start: "top 90%",
    once: true,
    blur: false,
    blurAmount: 0,
  },

  // Text sections: nevpadljivo
  text: {
    y: 10,
    duration: 0.9,
    ease: "power2.out",
    start: "top 90%",
    once: true,
    blur: false,
    blurAmount: 0,
  },
};

export default function Reveal({
  children,
  className,
  variant = "custom",

  // custom defaults (če variant ni podan)
  y = 10,
  duration = 0.95,
  delay = 0,
  start = "top 85%",
  once = true,
  blur = false,
  ease = "expo.out",
  blurAmount = 6,
}: RevealProps) {
  const ref = useRef<HTMLDivElement>(null);

  const resolved = useMemo(() => {
    if (variant === "custom") {
      return { y, duration, start, once, blur, ease, blurAmount };
    }
    const p = PRESETS[variant];
    // allow overriding even with preset, if user passes props explicitly
    return {
      y: y ?? p.y,
      duration: duration ?? p.duration,
      start: start ?? p.start,
      once: once ?? p.once,
      blur: blur ?? p.blur,
      ease: ease ?? p.ease,
      blurAmount: blurAmount ?? p.blurAmount,
    };
  }, [variant, y, duration, start, once, blur, ease, blurAmount]);

  useLayoutEffect(() => {
    if (typeof window === "undefined") return;

    if (!_gsapRegistered) {
      gsap.registerPlugin(ScrollTrigger);
      _gsapRegistered = true;
    }

    const el = ref.current;
    if (!el) return;

    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) {
      gsap.set(el, { opacity: 1, y: 0, clearProps: "filter,transform" });
      return;
    }

    const ctx = gsap.context(() => {
      const mm = gsap.matchMedia();

      mm.add({ all: "(prefers-reduced-motion: no-preference)" }, () => {
        gsap.set(el, {
          opacity: 0,
          y: resolved.y,
          ...(resolved.blur ? { filter: `blur(${resolved.blurAmount}px)` } : {}),
        });

        gsap.to(el, {
          opacity: 1,
          y: 0,
          ...(resolved.blur ? { filter: "blur(0px)" } : {}),
          duration: resolved.duration,
          delay,
          ease: resolved.ease,
          scrollTrigger: {
            trigger: el,
            start: resolved.start,
            once: resolved.once,
            invalidateOnRefresh: true,
          },
        });

        ScrollTrigger.refresh();
      });

      return () => mm.revert();
    }, el);

    return () => ctx.revert();
  }, [resolved, delay]);

  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  );
}