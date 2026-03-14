import Link from "next/link";

const CONTACT = {
  company: "DEMA PLUS, inženiring d.o.o.",

  address: {
    street: "Tbilisijska ulica 59",
    city: "1000 Ljubljana",
  },

  phone: {
    display: "01 244 2600",
    href: "+38612442600",
  },

  email: "info@demaplus.si",
};

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

      <p className="mt-2 text-base font-medium text-neutral-900">
        {value}
      </p>

      {sub ? (
        <p className="mt-1 text-sm text-neutral-600">{sub}</p>
      ) : null}
    </>
  );

  if (!href) {
    return (
      <div className="rounded-2xl border border-neutral-200 bg-white p-5">
        {inner}
      </div>
    );
  }

  return (
    <Link
      href={href}
      className="group block rounded-2xl border border-neutral-200 bg-white p-5 transition hover:border-neutral-300 hover:bg-neutral-50"
    >
      {inner}

      <span className="mt-3 inline-flex items-center text-sm text-neutral-500 transition-transform group-hover:translate-x-0.5">
        →
      </span>
    </Link>
  );
}

export default function ContactInfo() {
  return (
    <div className="space-y-6">
      {/* Company */}
      <div>
        <h2 className="text-xl font-semibold tracking-tight text-neutral-900">
          {CONTACT.company}
        </h2>

        <p className="mt-2 text-sm leading-relaxed text-neutral-600">
          Dosegljivi smo v delovnem času. Za nujne zadeve nas pokličite – za
          povpraševanja pa je najhitreje prek e-pošte.
        </p>
      </div>

      {/* Cards */}
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-1">
        <Card
          label="Naslov"
          value={CONTACT.address.street}
          sub={CONTACT.address.city}
        />

        <Card
          label="Telefon"
          value={CONTACT.phone.display}
          href={`tel:${CONTACT.phone.href}`}
        />

        <Card
          label="E-pošta"
          value={CONTACT.email}
          href={`mailto:${CONTACT.email}`}
        />
      </div>

      {/* Hint */}
      <div className="text-xs text-neutral-500">
        <p>
          <span className="font-medium text-neutral-700">Namig:</span>{" "}
          Če pošiljate povpraševanje, dodajte lokacijo, okvirni rok in osnovni
          opis obsega projekta.
        </p>
      </div>
    </div>
  );
}