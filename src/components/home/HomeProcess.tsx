import Container from "@/components/layout/Container";

const steps = [
  {
    no: "01",
    title: "Analiza",
    desc: "Pregled projekta, tehnična presoja in ocena izvedljivosti.",
  },
  {
    no: "02",
    title: "Načrtovanje",
    desc: "Usklajevanje z investitorjem, projektanti in priprava izvedbenih faz.",
  },
  {
    no: "03",
    title: "Izvedba",
    desc: "Koordinacija izvajalcev, nadzor kakovosti ter spoštovanje rokov.",
  },
  {
    no: "04",
    title: "Zaključek",
    desc: "Tehnični pregled, dokumentacija in predaja objekta investitorju.",
  },
];

export default function HomeProcess() {
  return (
  <section id="koraki" className="bg-white section-y">
  <Container>
    <div className="relative">
      {/* Subtle vertical grid */}
      <div
        className="pointer-events-none absolute inset-0 hidden sm:block"
        aria-hidden="true"
      >
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(15,23,42,0.028)_1px,transparent_1px)] bg-[size:140px_100%]" />
        <div className="absolute inset-0 bg-gradient-to-b from-white via-white/70 to-white" />
      </div>

      {/* Header */}
      <div className="relative max-w-3xl">
        <p className="section-eyebrow">Sistem izvedbe projekta</p>

        <h2 className="section-title-lg">
          Koraki od analize do
          <br className="sm:hidden" />
          primopredaje.
        </h2>

        <p className="section-lead">
          Vsaka faza je jasno definirana, terminsko usklajena in dokumentirana.
        </p>
      </div>

      {/* Mobile – text only */}
    <div className="relative mt-8 space-y-5 sm:hidden">
  {steps.map((s, i) => (
    <div
      key={s.no}
      className={i !== steps.length - 1 ? "border-b border-footer pb-5" : ""}
    >
      <p className="text-[11px] font-medium uppercase tracking-[0.08em] text-neutral-400">
        {s.no}
      </p>

      <h3 className="mt-1 text-base font-semibold tracking-tight text-neutral-900">
        {s.title}
      </h3>

      <p className="mt-1.5 text-sm leading-relaxed text-neutral-600">
        {s.desc}
      </p>
    </div>
  ))}
</div>

      {/* Tablet / desktop – cards */}
      <div className="relative mt-12 hidden gap-6 sm:grid sm:grid-cols-2 lg:grid-cols-4">
        {steps.map((s) => (
          <div
            key={s.no}
            className="group rounded-2xl border border-neutral-200/70 bg-white/60 p-6 transition hover:bg-white hover:shadow-sm"
          >
            <div className="flex items-start justify-between">
              <div className="h-[1px] w-12 bg-neutral-200" />
              <div
                className="text-5xl font-semibold tracking-[-0.02em] transition-colors
                           text-[color:rgba(var(--brand-rgb),0.28)]
                           group-hover:text-[color:rgba(var(--brand-rgb),0.44)]"
              >
                {s.no}
              </div>
            </div>

            <h3 className="mt-5 text-sm font-semibold tracking-tight text-neutral-900">
              {s.title}
            </h3>

            <p className="mt-2 text-sm leading-relaxed text-neutral-600">
              {s.desc}
            </p>
          </div>
        ))}
      </div>
    </div>
  </Container>
</section>
  );
}