"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

export default function CookieConsent() {
  const [visible, setVisible] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [closing, setClosing] = useState(false);

  useEffect(() => {
    const accepted = localStorage.getItem("cookiesAccepted");
    if (!accepted) {
      setVisible(true);
    }

    const t = window.setTimeout(() => setMounted(true), 50);

    const openSettings = () => {
      setClosing(false);
      setVisible(true);
      window.setTimeout(() => setMounted(true), 20);
    };

    window.addEventListener("open-cookie-settings", openSettings);

    return () => {
      window.clearTimeout(t);
      window.removeEventListener("open-cookie-settings", openSettings);
    };
  }, []);

  const acceptCookies = () => {
    localStorage.setItem("cookiesAccepted", "true");
    setClosing(true);

    window.setTimeout(() => {
      setVisible(false);
    }, 300);
  };

  if (!visible) return null;

  return (
    <div
      className={`fixed bottom-4 left-4 right-4 z-50 transition-all duration-300 ease-out sm:left-auto sm:right-6 sm:max-w-md ${
        closing
          ? "translate-y-6 opacity-0"
          : mounted
          ? "translate-y-0 opacity-100"
          : "translate-y-6 opacity-0"
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
            politiki piškotkov
          </Link>.
        </p>

        <div className="mt-4 flex justify-end">
          <button
            type="button"
            onClick={acceptCookies}
            className="rounded-full bg-white px-4 py-2 text-sm font-medium text-neutral-900 transition hover:bg-neutral-100"
          >
            V redu
          </button>
        </div>
      </div>
    </div>
  );
}