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
      aria-controls={ariaControls}
      aria-expanded={open}
      onClick={(e) => {
        e.preventDefault();
        e.stopPropagation();
        onToggle();
      }}
      className="relative inline-flex h-10 w-10 items-center justify-center appearance-none border-0 bg-transparent p-0 outline-none select-none transition-transform duration-150 active:scale-95 [-webkit-tap-highlight-color:transparent]"
    >
      <MenuToggle open={open} />
    </button>
  );
}