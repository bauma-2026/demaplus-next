"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

export default function CookieConsent() {
  const [visible, setVisible] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [closing, setClosing] = useState(false);

  useEffect(() => {
    const accepted = localStorage.getItem("cookiesAccepted");
    if (!accepted) setVisible(true);

    setTimeout(() => setMounted(true), 50);
  }, []);

  const acceptCookies = () => {
    localStorage.setItem("cookiesAccepted", "true");
    setClosing(true);

    setTimeout(() => {
      setVisible(false);
    }, 300); // wait for fade-out animation
  };

  if (!visible) return null;

  return (
    <div
      className={`fixed bottom-4 left-4 right-4 z-50 sm:left-auto sm:right-6 sm:max-w-md
      transition-all duration-300 ease-out
      ${
        closing
          ? "opacity-0 translate-y-6"
          : mounted
          ? "opacity-100 translate-y-0"
          : "opacity-0 translate-y-6"
      }`}
    >
      <div className="rounded-xl bg-neutral-900 p-5 text-white shadow-lg">
        <p className="text-sm leading-relaxed text-white/80">
          Ta spletna stran uporablja piškotke za zagotavljanje osnovnega
          delovanja in boljšo uporabniško izkušnjo. Več informacij najdete v{" "}
          <Link
            href="/piskotki"
            className="underline underline-offset-2 hover:text-white"
          >
            splošnih pogojih poslovanja
          </Link>.
        </p>

        <div className="mt-4 flex justify-end">
          <button
            onClick={acceptCookies}
            className="rounded-full bg-white px-4 py-2 text-sm font-medium text-neutral-900 transition hover:bg-neutral-200"
          >
            V redu
          </button>
        </div>
      </div>
    </div>
  );
}