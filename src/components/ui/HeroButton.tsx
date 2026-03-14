import Link from "next/link";
import clsx from "clsx";

type HeroButtonVariant = "primary" | "secondary";

type Props = {
  href: string;
  children: React.ReactNode;
  variant?: HeroButtonVariant;
  className?: string;
};

export default function HeroButton({
  href,
  children,
  variant = "primary",
  className = "",
}: Props) {
  const base =
    "inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-sm transition " +
    "focus:outline-none focus-visible:ring-2 focus-visible:ring-white/40";

  const styles =
    variant === "primary"
      ? // Primary = brand yellow
        "bg-[#F6C24A] text-neutral-900 font-semibold hover:brightness-[0.96]"
      : // Secondary = stronger, cleaner white outline (for dark hero)
        "border border-white/80 text-white font-medium " +
        "hover:bg-white/10 hover:border-white";

return (
  <Link
    href={href}
    className={clsx("group", base, styles, className)}
  >
    <span>{children}</span>
    <span
      aria-hidden
      className="transition-transform duration-200 group-hover:translate-x-0.5"
    >
      →
    </span>
  </Link>
);
}