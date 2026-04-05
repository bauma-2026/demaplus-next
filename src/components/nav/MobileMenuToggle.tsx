"use client";

import MenuToggle from "@/components/nav/MenuToggle";

type MobileMenuToggleProps = {
  open: boolean;
  onToggle: () => void;
  ariaControls?: string;
};

export default function MobileMenuToggle({
  open,
  onToggle,
  ariaControls = "mobile-menu",
}: MobileMenuToggleProps) {
  return (
   <button
  type="button"
  aria-label={open ? "Zapri meni" : "Odpri meni"}
  aria-expanded={open}
  onClick={onToggle}
className="group relative inline-flex h-8 w-8 items-center justify-center rounded-full border border-neutral-200 bg-white transition hover:bg-neutral-50 focus:outline-none">
  {/* TOP */}
  <span
    className={[
      "absolute block h-[1.5px] w-[13px] rounded-full bg-neutral-900 transition-all duration-300 ease-[cubic-bezier(.16,1,.3,1)]",
      open ? "translate-y-0 rotate-45" : "-translate-y-[3px]",
    ].join(" ")}
  />

  {/* BOTTOM */}
  <span
    className={[
      "absolute block h-[1.5px] w-[13px] rounded-full bg-neutral-900 transition-all duration-300 ease-[cubic-bezier(.16,1,.3,1)]",
      open ? "translate-y-0 -rotate-45" : "translate-y-[3px]",
    ].join(" ")}
  />
</button>
  );
}