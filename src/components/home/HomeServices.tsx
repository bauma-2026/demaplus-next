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

            <h2 className="section-title">
              Rekonstrukcije, novogradnje
              <br className="sm:hidden" />
              in inženiring.
            </h2>

            {/* Mobile summary only */}
            <p className="section-lead mt-3 sm:hidden">
              Celovito pokrivamo rekonstrukcije objektov, novogradnje in
              inženiring — od začetne presoje in priprave do izvedbe,
              tehničnega nadzora in primopredaje.
            </p>

            {/* Desktop intro */}
            <p className="section-lead mt-3 hidden sm:block">
              Tri ključna področja, kjer projekt vodimo od začetne presoje do
              izvedbe in predaje — z jasno strukturo, nadzorom in odgovornostjo.
            </p>
          </div>

          <Link
            href="/kontakt"
            className="hidden sm:inline-flex items-center gap-2 text-sm text-neutral-500 transition-colors hover:text-neutral-900"
          >
            Povpraševanje
            <span className="translate-y-[0.5px] text-neutral-400">→</span>
          </Link>
        </div>

        {/* Desktop / tablet services */}
        <div className="mt-12 hidden sm:grid sm:grid-cols-3 sm:gap-8 lg:gap-12">
          {services.map((s, i) => (
            <div
              key={s.title}
              className={[
                i !== services.length - 1
                  ? "sm:border-r sm:border-footer sm:pr-8 lg:pr-12"
                  : "",
              ].join(" ")}
            >
              <h3 className="text-base font-semibold text-neutral-900">
                {s.title}
              </h3>

              <p className="mt-3 text-sm leading-relaxed text-neutral-600">
                {s.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Mobile CTA */}
        <div className="mt-3 sm:hidden">
          <Link
            href="/kontakt"
            className="inline-flex items-center gap-2 text-sm text-neutral-500 transition-colors hover:text-neutral-900"
          >
            Povpraševanje
            <span className="translate-y-[0.5px] text-neutral-400">→</span>
          </Link>
        </div>
      </Container>
    </section>
  );
}