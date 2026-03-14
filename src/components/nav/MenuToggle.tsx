"use client";

export default function MenuToggle({
  open,
  className = "",
}: {
  open: boolean;
  className?: string;
}) {
  const moveClass =
    "absolute left-1/2 top-1/2 transition-transform duration-[320ms] ease-[cubic-bezier(.16,1,.3,1)]";
  const rotateClass =
    "block h-[2px] w-6 rounded-full bg-neutral-900 transition-transform duration-[320ms] ease-[cubic-bezier(.16,1,.3,1)]";

  return (
    <span
      aria-hidden="true"
      className={["relative block h-[18px] w-6", className].join(" ")}
    >
      <span
        className={moveClass}
        style={{
          transform: open
            ? "translate(-50%, -50%)"
            : "translate(-50%, calc(-50% - 5px))",
          transitionDelay: open ? "0ms" : "120ms",
        }}
      >
        <span
          className={rotateClass}
          style={{
            transform: open ? "rotate(45deg)" : "rotate(0deg)",
            transitionDelay: open ? "120ms" : "0ms",
          }}
        />
      </span>

      <span
        className={moveClass}
        style={{
          transform: open
            ? "translate(-50%, -50%)"
            : "translate(-50%, calc(-50% + 5px))",
          transitionDelay: open ? "0ms" : "120ms",
        }}
      >
        <span
          className={rotateClass}
          style={{
            transform: open ? "rotate(-45deg)" : "rotate(0deg)",
            transitionDelay: open ? "120ms" : "0ms",
          }}
        />
      </span>
    </span>
  );
}