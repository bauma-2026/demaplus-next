import Link from "next/link";
import Container from "@/components/layout/Container";

const services = [
  {
    title: "Rekonstrukcije",
    desc: "Celovite obnove objektov, prilagoditve namembnosti, sanacije in rekonstrukcije z nadzorom kakovosti.",
    href: "/kontakt",
  },
  {
    title: "Novogradnje",
    desc: "Izvedba novogradenj in razširitev — od priprave gradbišča do zaključka in primopredaje.",
    href: "/kontakt",
  },
  {
    title: "Inženiring",
    desc: "Koordinacija izvajalcev, tehnični nadzor ter usklajevanje skozi celoten potek projekta.",
    href: "/kontakt",
  },
];

export default function HomeServices() {
  return (
   <section
  id="podrocja"
  className="section-shell border-b border-header bg-white"
>
  <Container>
    {/* Head */}
    <div className="flex items-start justify-between gap-6">
      <div className="max-w-2xl">
        <p className="section-eyebrow">Področja delovanja</p>

       <h2 className="section-title leading-[1.08] tracking-tight sm:leading-[1.05]">
  Rekonstrukcije, novogradnje
  <br />
  in inženiring.
</h2>

        {/* Mobile summary only */}
        <p className="section-lead mt-3 leading-[1.5] sm:hidden">
          Celovito pokrivamo rekonstrukcije objektov, novogradnje in
          inženiring — od začetne presoje in priprave do izvedbe,
          tehničnega nadzora in primopredaje.
        </p>

        {/* Desktop intro */}
        <p className="section-lead mt-3 hidden max-w-[56ch] leading-[1.55] sm:block">
          Tri ključna področja, kjer projekt vodimo od začetne presoje do
          izvedbe in predaje — z jasno strukturo, nadzorom in odgovornostjo.
        </p>
      </div>
    </div>

    {/* Desktop / tablet services */}
    <div className="mt-8 hidden sm:grid sm:grid-cols-3 sm:gap-10 lg:gap-12">
      {services.map((s, i) => (
        <div
  key={s.title}
  className={[
    "flex flex-col",
    i !== services.length - 1
      ? "sm:border-r sm:border-neutral-200/70 sm:pr-8 lg:pr-10"
      : "",
  ].join(" ")}
>
  <div
  className={[
    "mb-4 h-px w-10",
    i === 0 ? "bg-[#F6C24A]/70" : "bg-neutral-200",
  ].join(" ")}
/>

  <h3 className="text-[16px] font-semibold tracking-tight text-neutral-900">
    {s.title}
  </h3>

  <p className="mt-3 max-w-[34ch] text-sm leading-[1.55] text-neutral-600">
    {s.desc}
  </p>
</div>
      ))}
    </div>

    <div className="mt-6 sm:mt-8">
  <Link
    href="/kontakt"
    className="group inline-flex items-center gap-2 rounded-full border border-neutral-300 px-5 py-2.5 text-sm font-medium text-neutral-900 transition-all hover:bg-neutral-100 hover:border-neutral-400"
  >
    Povpraševanje
    <span className="transition-transform group-hover:translate-x-[2px]">
      →
    </span>
  </Link>
</div>
  </Container>
</section>
  );
}