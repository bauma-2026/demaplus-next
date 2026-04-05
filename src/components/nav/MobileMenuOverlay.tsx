"use client";

import DemaPlusLogo from "@/components/brand/DemaPlusLogo";
import Link from "next/link";
import { useEffect, useMemo, useState } from "react";
import { createPortal } from "react-dom";
import MobileMenuToggle from "@/components/nav/MobileMenuToggle";

type NavItem = { href: string; label: string };

export default function MobileMenuOverlay({
  open,
  onClose,
  nav,
}: {
  open: boolean;
  onClose: () => void;
  nav: NavItem[];
}) {
  const [mounted, setMounted] = useState(false);
  const [rendered, setRendered] = useState(false);
  const [closing, setClosing] = useState(false);
  const [navEntered, setNavEntered] = useState(false);

  useEffect(() => setMounted(true), []);

  useEffect(() => {
    if (open) {
      setRendered(true);
      setClosing(false);
      setNavEntered(false);

      const raf = window.requestAnimationFrame(() => {
        const raf2 = window.requestAnimationFrame(() => {
          setNavEntered(true);
        });
        return () => window.cancelAnimationFrame(raf2);
      });

      return () => window.cancelAnimationFrame(raf);
    }

    if (!rendered) return;

    setClosing(true);
    setNavEntered(false);

    const t = window.setTimeout(() => {
      setRendered(false);
      setClosing(false);
    }, 320);

    return () => window.clearTimeout(t);
  }, [open, rendered]);

  const portalTarget = useMemo(() => {
    if (typeof document === "undefined") return null;
    return document.body;
  }, []);

  const isOpenVisual = open && !closing;

  if (!mounted || !portalTarget || !rendered) return null;

  return createPortal(
    <div className="fixed inset-0 z-[9999] md:hidden">
      {/* Backdrop */}
    

      {/* Panel */}
      <div
        role="dialog"
        aria-modal="true"
        className={[
          "fixed inset-0 z-10 pointer-events-auto",
          "pt-[env(safe-area-inset-top)]",
          "transition-[transform,opacity] duration-[320ms] ease-[cubic-bezier(.16,1,.3,1)]",
          isOpenVisual ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-3",
        ].join(" ")}
      >
        <div className="flex min-h-screen flex-col bg-white">
          {/* Header row */}
         <div className="flex h-[64px] items-center justify-between border-b border-neutral-200 4.5">
  <DemaPlusLogo className="h-[24px] w-auto" />
  <MobileMenuToggle open={open} onToggle={onClose} />
</div>

        {/* Links */}
<div className="px-5 py-7">
  {Array.isArray(nav) && nav.length > 0 ? (
    <>
      {/* PRIMARY */}
      <div className="flex flex-col gap-4">
        {nav
          .filter((item) => item.href !== "/o-nas" && item.href !== "/kontakt")
          .map((item, index) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={onClose}
              className={[
                "block py-2 text-[16px] leading-none tracking-[-0.01em] font-normal",
                "text-neutral-500 transition-[opacity,transform,color] duration-500 ease-[cubic-bezier(.16,1,.3,1)]",
                "active:text-neutral-900",
                navEntered
                  ? "translate-y-0 opacity-100"
                  : "translate-y-2 opacity-0",
              ].join(" ")}
              style={{
                transitionDelay: navEntered ? `${80 + index * 45}ms` : "0ms",
              }}
            >
              {item.label}
            </Link>
          ))}
      </div>

      {/* SECONDARY */}
      <div className="mt-8 border-t border-neutral-200/60 pt-8">
        {nav
          .filter((item) => item.href === "/o-nas")
          .map((item, index) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={onClose}
              className={[
                "block py-2.5 text-[16px] font-medium leading-none tracking-[-0.01em] text-neutral-700",
                "text-neutral-700 transition-[opacity,transform,color] duration-500 ease-[cubic-bezier(.16,1,.3,1)]",
                "active:text-neutral-900",
                navEntered
                  ? "translate-y-0 opacity-100"
                  : "translate-y-2 opacity-0",
              ].join(" ")}
              style={{
                transitionDelay: navEntered ? `${190 + index * 45}ms` : "0ms",
              }}
            >
              {item.label}
            </Link>
          ))}

        {nav
          .filter((item) => item.href === "/kontakt")
          .map((item, index) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={onClose}
            className={[
  "mt-8 flex w-full items-center justify-center rounded-[999px]",
  "border border-neutral-900 bg-neutral-900 text-white",
  "px-5 py-3 text-sm font-medium",
  "transition-[opacity,transform,background-color] duration-500 ease-[cubic-bezier(.16,1,.3,1)]",
  "active:bg-neutral-800",
  navEntered
    ? "translate-y-0 opacity-100"
    : "translate-y-2 opacity-0",
].join(" ")}
style={{
  transitionDelay: navEntered ? `${240 + index * 45}ms` : "0ms",
}}
            >
              Kontakt
            </Link>
          ))}
      </div>
    </>
  ) : (
    <div className="rounded-xl bg-neutral-50 px-4 py-4 text-sm text-neutral-700">
      Ni linkov v nav (nav je prazen).
    </div>
  )}
</div>        </div>
      </div>
    </div>,
    portalTarget
  );
}