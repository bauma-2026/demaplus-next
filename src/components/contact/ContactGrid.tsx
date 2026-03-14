import Container from "@/components/layout/Container";

const CONTACT = {
  company: "DEMA PLUS, inženiring d.o.o.",
  addressLines: ["s 59", "1000 Ljubljana"],
  phoneDisplay: "01 244 26 00",
  phoneHref: "+38612442600",
  email: "info@demaplus.si",

  // Logično za gradbeni/inženiring biznis:
  hours: [
    { label: "Ponedeljek – petek", value: "08:00 – 16:00" },
    { label: "Sobota, nedelja", value: "Zaprto" },
  ],
  area: "Ljubljana z okolico (po dogovoru po Sloveniji)",
  mapsQuery: "Tbilisijska ulica 59, 1000 Ljubljana",
};

function buildGoogleMapsUrl(query: string) {
  return `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
    query
  )}`;
}

function Card({
  label,
  value,
  sub,
  href,
}: {
  label: string;
  value: string;
  sub?: string;
  href?: string;
}) {
  const inner = (
    <>
      <p className="text-xs tracking-wide text-neutral-500">{label}</p>
      <p className="mt-2 text-base font-medium text-neutral-900">{value}</p>
      {sub ? <p className="mt-1 text-sm text-neutral-600">{sub}</p> : null}
    </>
  );

  return href ? (
    <a
      href={href}
      className="block rounded-2xl border border-neutral-200 bg-white p-5 hover:border-neutral-300 hover:bg-neutral-50 transition"
    >
      {inner}
    </a>
  ) : (
    <div className="rounded-2xl border border-neutral-200 bg-white p-5">
      {inner}
    </div>
  );
}

function Pill({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  return (
    <a
      href={href}
      className="inline-flex items-center justify-center rounded-full border border-neutral-200 px-4 py-2 text-sm font-medium text-neutral-900 hover:bg-neutral-50 transition"
    >
      {children}
    </a>
  );
}

function ContactInfo() {
  const mapsUrl = buildGoogleMapsUrl(CONTACT.mapsQuery);

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-xl font-semibold tracking-tight text-neutral-900">
          {CONTACT.company}
        </h2>
        <p className="mt-2 text-sm leading-relaxed text-neutral-600">
          Za povpraševanja je najhitreje prek sporočila. Če pošljete osnovne
          podatke (lokacija, rok, obseg), lahko odgovorimo konkretneje.
        </p>
      </div>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-1">
        <Card
          label="Naslov"
          value={CONTACT.addressLines[0]}
          sub={CONTACT.addressLines[1]}
          href={mapsUrl}
        />
        <Card
          label="Telefon"
          value={CONTACT.phoneDisplay}
          href={`tel:${CONTACT.phoneHref}`}
        />
        <Card
          label="E-pošta"
          value={CONTACT.email}
          href={`mailto:${CONTACT.email}`}
        />
      </div>

      <div className="rounded-2xl border border-neutral-200 bg-white p-5">
        <p className="text-xs tracking-wide text-neutral-500">Delovni čas</p>
        <div className="mt-3 space-y-2 text-sm text-neutral-700">
          {CONTACT.hours.map((h) => (
            <div key={h.label} className="flex items-baseline justify-between">
              <span className="text-neutral-600">{h.label}</span>
              <span className="font-medium text-neutral-900">{h.value}</span>
            </div>
          ))}
        </div>

        <p className="mt-4 text-xs text-neutral-500">
          Področje delovanja:{" "}
          <span className="font-medium text-neutral-700">{CONTACT.area}</span>
        </p>

        <div className="mt-5 flex flex-wrap gap-2">
          <Pill href={`tel:${CONTACT.phoneHref}`}>Pokliči</Pill>
          <Pill href={`mailto:${CONTACT.email}`}>Pošlji e-pošto</Pill>
          <Pill href={mapsUrl}>Odpri zemljevid</Pill>
        </div>
      </div>

      <p className="text-xs text-neutral-500">
        <span className="font-medium text-neutral-700">Namig:</span> Dodajte
        lokacijo, vrsto objekta, fazo (ideja/PGD/PZI/izvedba), okvirni rok in
        morebitno dokumentacijo (PDF, popis del).
      </p>
    </div>
  );
}

function ContactForm() {
  // mailto “template” optimiziran za gradnjo/inženiring
  const to = CONTACT.email;
  const subject = encodeURIComponent("Povpraševanje – Dema Plus");
  const body = encodeURIComponent(
    [
      "IME IN PRIIMEK:",
      "E-POŠTA:",
      "TELEFON:",
      "",
      "LOKACIJA OBJEKTA (kraj/naslov):",
      "VRSTA OBJEKTA (stanovanjski/javni/poslovni):",
      "OBSEG (novogradnja/rekonstrukcija/nadzor/inženiring):",
      "FAZA (ideja/PGD/PZI/izvedba):",
      "OKVIRNI ROK (začetek/zaključek):",
      "OKVIRNI PRORAČUN (opcijsko):",
      "",
      "OPIS:",
    ].join("\n")
  );

  const href = `mailto:${to}?subject=${subject}&body=${body}`;

  return (
    <div className="rounded-2xl border border-neutral-200 bg-white p-6 sm:p-8">
      <h2 className="text-xl font-semibold tracking-tight text-neutral-900">
        Pošljite povpraševanje
      </h2>
      <p className="mt-2 text-sm text-neutral-600">
        Odpre e-pošto z že pripravljeno predlogo (brez backenda). Če imate
        dokumentacijo, jo lahko priložite v e-pošti.
      </p>

      <div className="mt-6 flex flex-wrap gap-3">
        <a
          href={href}
          className="inline-flex items-center justify-center rounded-full border border-neutral-200 px-5 py-2.5 text-sm font-medium text-neutral-900 hover:bg-neutral-50 transition"
        >
          Odpri e-pošto →
        </a>

        <a
          href={`tel:${CONTACT.phoneHref}`}
          className="inline-flex items-center justify-center rounded-full border border-neutral-200 px-5 py-2.5 text-sm font-medium text-neutral-900 hover:bg-neutral-50 transition"
        >
          Pokliči
        </a>
      </div>

      <p className="mt-4 text-xs text-neutral-500">
        (Kasneje lahko dodamo pravi obrazec + validacijo + pošiljanje.)
      </p>
    </div>
  );
}

export default function ContactGrid() {
  return (
  <section className="section">
      <Container>
        <div className="grid gap-10 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <ContactInfo />
          </div>

          <div className="lg:col-span-7">
            <ContactForm />
          </div>
        </div>
      </Container>
    </section>
  );
}