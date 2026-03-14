"use client";

export default function CookieSettingsButton() {
  const openSettings = () => {
    localStorage.removeItem("cookie-consent");
    window.location.reload();
  };

  return (
    <button
      onClick={openSettings}
      className="cursor-pointer text-neutral-700 underline underline-offset-4 decoration-neutral-400 transition hover:text-neutral-900 hover:decoration-neutral-700"
    >
      Nastavitve piškotkov
    </button>
  );
}