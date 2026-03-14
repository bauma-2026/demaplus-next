"use client";

export default function CookieSettingsButton() {
  const handleOpen = () => {
    if (typeof window === "undefined") return;
    window.dispatchEvent(new CustomEvent("open-cookie-settings"));
  };

  return (
    <button
      type="button"
      onClick={handleOpen}
      className="inline-block cursor-pointer appearance-none border-0 bg-transparent p-0 m-0 text-left text-sm text-neutral-700 underline underline-offset-4 decoration-neutral-400 transition hover:text-neutral-900 hover:decoration-neutral-700"
      style={{ WebkitAppearance: "none" }}
    >
      Nastavitve piškotkov
    </button>
  );
}