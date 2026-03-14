"use client";

export default function CookieSettingsButton() {
  function handleOpen() {
    if (typeof window === "undefined") return;

    const w = window as typeof window & {
      Cookiebot?: { renew?: () => void; show?: () => void };
      UC_UI?: { showSecondLayer?: () => void; showSettings?: () => void };
    };

    if (w.Cookiebot?.renew) {
      w.Cookiebot.renew();
      return;
    }

    if (w.Cookiebot?.show) {
      w.Cookiebot.show();
      return;
    }

    if (w.UC_UI?.showSecondLayer) {
      w.UC_UI.showSecondLayer();
      return;
    }

    if (w.UC_UI?.showSettings) {
      w.UC_UI.showSettings();
      return;
    }

    console.warn("Cookie settings API not found on window.");
  }

  return (
    <button
      type="button"
      onClick={handleOpen}
      className="inline-block appearance-none border-0 bg-transparent p-0 m-0 text-left text-sm text-neutral-700 underline underline-offset-4 decoration-neutral-400 transition hover:text-neutral-900 hover:decoration-neutral-700"
      style={{ WebkitAppearance: "none" }}
    >
      Nastavitve piškotkov
    </button>
  );
}