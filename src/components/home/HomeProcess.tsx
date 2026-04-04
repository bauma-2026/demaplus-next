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

        <h2 className="section-title-lg leading-[1.08] tracking-tight sm:leading-[1.05]">
          Koraki od analize do
          <br className="sm:hidden" />
          primopredaje.
        </h2>

        <p className="section-lead mt-3 leading-[1.5] sm:leading-[1.55]">
          Vsaka faza je jasno definirana, terminsko usklajena in dokumentirana.
        </p>
      </div>

     {/* Mobile – structured steps */}
<div className="relative mt-8 sm:hidden">
  <div className="space-y-6">
    {steps.map((s) => (
      <div key={s.no} className="relative pb-1">
        {/* TOP ROW (line + number) */}
        <div className="flex items-center justify-between">
          <div
            className={[
              "h-px w-10",
              s.no === "01" ? "bg-[#F6C24A]/70" : "bg-neutral-200",
            ].join(" ")}
          />

          <div
            className={[
              "text-[14px] font-semibold tracking-[0.02em]",
              s.no === "01" ? "text-[#F6C24A]" : "text-neutral-400",
            ].join(" ")}
          >
            {s.no}
          </div>
        </div>

        {/* CONTENT */}
        <h3 className="mt-3 text-[15px] font-semibold tracking-tight text-neutral-900">
          {s.title}
        </h3>

        <p className="mt-2 text-sm leading-[1.55] text-neutral-600">
          {s.desc}
        </p>
      </div>
    ))}
  </div>
</div>

     
{/* Tablet / desktop – open process layout */}
<div className="relative mt-12 hidden sm:grid sm:grid-cols-2 sm:gap-x-10 sm:gap-y-10 lg:grid-cols-4 lg:gap-x-8">
  {steps.map((s, i) => (
    <div
      key={s.no}
      className={[
        "flex flex-col",
        i !== steps.length - 1
          ? "lg:border-r lg:border-neutral-200/70 lg:pr-8"
          : "",
      ].join(" ")}
    >
      <div className="flex items-center justify-between">
        <div
          className={[
            "h-px w-10",
            s.no === "01" ? "bg-[#F6C24A]/50" : "bg-neutral-200",
          ].join(" ")}
        />

       <div
  className={[
    "text-[16px] font-semibold tracking-[0.02em]",
    s.no === "01"
      ? "text-[#F6C24A]"
      : "text-neutral-400",
  ].join(" ")}
>
  {s.no}
</div>
      </div>

      <h3 className="mt-5 text-[15px] font-semibold tracking-tight text-neutral-900">
        {s.title}
      </h3>

      <p className="mt-2 max-w-[24ch] text-sm leading-[1.55] text-neutral-600">
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