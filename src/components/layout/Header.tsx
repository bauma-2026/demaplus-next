// src/components/layout/Header.tsx
"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

import Container from "./Container";
import DemaPlusLogo from "@/components/brand/DemaPlusLogo";
import MobileMenuOverlay from "@/components/nav/MobileMenuOverlay";
import MobileMenuToggle from "@/components/nav/MobileMenuToggle";
import { news } from "@/content/news";

const mobileNav = [
  { href: "/novice", label: "Novice" },
  { href: "/reference", label: "Reference" },
  { href: "/o-nas", label: "O nas" },
  { href: "/kontakt", label: "Kontakt" },
];

function isNewsDetail(pathname: string) {
  const slug = pathname.replace(/^\/+|\/+$/g, "");
  if (!slug) return false;
  return news.some((n) => n.slug === slug);
}

function isActive(pathname: string, href: string) {
  if (href === "/") return pathname === "/";
  if (href === "/novice" && isNewsDetail(pathname)) return true;
  return pathname === href || pathname.startsWith(href + "/");
}

export default function Header() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (!menuOpen) return;

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setMenuOpen(false);
    };

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [menuOpen]);

  useEffect(() => {
    if (menuOpen) return;

    document.documentElement.style.overflow = "";
    document.body.style.overflow = "";
    document.body.style.position = "";
    document.body.style.top = "";
    document.body.style.left = "";
    document.body.style.right = "";
    document.body.style.width = "";
  }, [menuOpen]);

  return (
<header className="sticky top-0 z-[10000] isolate border-b border-header bg-[var(--header-bg)]">
  <Container className="relative flex h-[64px] items-center justify-between">
    {/* DESKTOP */}
    <div className="hidden w-full items-center justify-between md:flex">
      <div className="flex items-center gap-8 lg:gap-10">
        <Link
          href="/"
          className="inline-flex items-center leading-none text-neutral-900 transition-colors duration-200 ease-out hover:text-[#758e9b]"
        >
          <DemaPlusLogo className="h-[24px] w-auto lg:h-[26px]" />
        </Link>

        <nav className="flex items-center gap-7 text-sm">
          {mobileNav
            .filter((i) => i.href !== "/kontakt" && i.href !== "/o-nas")
            .map((item) => {
              const active = isActive(pathname, item.href);
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={[
                    "border-b pb-1 transition-colors duration-200",
                    active
                      ? "border-b-[#758e9b] text-neutral-900"
                      : "border-b-transparent text-neutral-700 hover:border-b-[#758e9b]/40 hover:text-[#758e9b]",
                  ].join(" ")}
                >
                  {item.label}
                </Link>
              );
            })}
        </nav>
      </div>

      <div className="flex items-center gap-6">
       <Link
  href="/o-nas"
  className={[
    "text-sm font-medium border-b pb-1 transition-colors duration-200",
    isActive(pathname, "/o-nas")
      ? "border-b-[#758e9b] text-neutral-900"
      : "border-b-transparent text-neutral-700 hover:border-b-[#758e9b]/40 hover:text-[#758e9b]",
  ].join(" ")}
>
  O nas
</Link>

        <Link
          href="/kontakt"
          className={[
            "rounded-full border px-5 py-[7px] text-sm transition-all duration-200",
            "border-neutral-900 bg-neutral-900 text-white hover:border-neutral-800 hover:bg-neutral-800",
            "hover:shadow-[0_0_0_3px_rgba(117,142,155,0.25)]",
          ].join(" ")}
        >
          Kontakt
        </Link>
      </div>
    </div>

    {/* MOBILE */}
    <div className="flex h-full w-full items-center justify-between md:hidden">
      <Link
        href="/"
        className="inline-flex items-center leading-none text-neutral-900"
        aria-label="Domov"
      >
        <DemaPlusLogo className="h-[24px] w-auto" />
      </Link>

      <div className="relative z-[10001] flex h-full items-center">
        <MobileMenuToggle
          open={menuOpen}
          onToggle={() => setMenuOpen((v) => !v)}
        />
      </div>
    </div>
  </Container>

  <MobileMenuOverlay
    open={menuOpen}
    onClose={() => setMenuOpen(false)}
    nav={mobileNav}
  />
</header>
  );
}