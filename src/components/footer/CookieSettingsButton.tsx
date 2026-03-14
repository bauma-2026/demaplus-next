"use client";

export default function CookieSettingsButton() {
  return (
    <button
      type="button"
      onClick={() => {
        if (typeof window !== "undefined" && (window as any).Cookiebot) {
          (window as any).Cookiebot.renew();
        }
      }}
      className="inline-block appearance-none border-0 bg-transparent p-0 m-0 text-left text-neutral-700 underline underline-offset-4 decoration-neutral-400 transition hover:text-neutral-900 hover:decoration-neutral-700"
    >
      Nastavitve piškotkov
    </button>
  );
}