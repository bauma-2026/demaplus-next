import Container from "@/components/layout/Container";
import Image from "next/image";

export const metadata = {
  title: "Kontakt | Dema Plus",
  description:
    "Kontaktirajte Dema Plus za gradnjo, rekonstrukcije in inženiring. Naslov, telefon, e-pošta in lokacija na zemljevidu.",
};

const CONTACT = {
  company: "DEMA PLUS, inženiring d.o.o.",
  address: {
    street: "Tbilisijska ulica 59",
    city: "1000 Ljubljana",
    full: "Tbilisijska ulica 59, 1000 Ljubljana",
  },
  phone: {
    display: "01 244 2600",
    href: "+38612442600",
  },
  email: "info@demaplus.si",
};

const MAP_EMBED =
  "https://www.google.com/maps?hl=sl&z=15&output=embed&q=Tbilisijska+ulica+59,+1000+Ljubljana";

const MAP_DIRECTIONS =
  "https://www.google.com/maps/dir/?api=1&destination=Tbilisijska%20ulica%2059%2C%201000%20Ljubljana";

const HERO_IMAGE = "/images/banners/architectural-detail.webp";

export default function ContactPage() {
  return (
    <>
      <section className="relative overflow-hidden border-b border-neutral-200">
        <div className="absolute inset-0">
          <Image
            src={HERO_IMAGE}
            alt="Arhitekturni detajl"
            fill
            priority
            sizes="100vw"
            className="object-cover object-[60%_65%]"
          />
          <div className="absolute inset-0 bg-black/45" />
          <div className="absolute inset-0 bg-gradient-to-r from-black/55 via-black/35 to-transparent" />
        </div>

        <Container className="relative py-20 sm:py-24">
          <div className="max-w-2xl">
            <p className="text-xs tracking-wide text-white/70">Kontakt</p>

            <h1 className="mt-3 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
              Stopite v stik
            </h1>

            <p className="mt-4 text-base leading-relaxed text-white/80">
              Za ponudbe, vprašanja ali uskladitev termina nas kontaktirajte po
              e-pošti ali telefonu.
            </p>
          </div>
        </Container>
      </section>

      <section className="py-14 sm:py-16">
        <Container className="max-w-4xl">
          <div className="space-y-10">
            <div>
              <p className="section-eyebrow">Podatki podjetja</p>

              <h2 className="mt-4 text-2xl font-semibold tracking-tight text-neutral-900 sm:text-3xl">
                {CONTACT.company}
              </h2>

              <p className="mt-3 text-neutral-600">
                Dosegljivi smo v delovnem času.
              </p>
            </div>

            <div className="grid gap-10 sm:grid-cols-3">
              <div>
                <p className="text-xs uppercase tracking-wide text-neutral-400">
                  Naslov
                </p>
                <p className="mt-3 text-[15px] leading-relaxed text-neutral-900">
                  {CONTACT.address.street}
                  <br />
                  {CONTACT.address.city}
                </p>
              </div>

              <div>
                <p className="text-xs uppercase tracking-wide text-neutral-400">
                  Telefon
                </p>
                <a
                  href={`tel:${CONTACT.phone.href}`}
                  className="group mt-3 inline-flex items-center gap-2 text-[15px] font-medium text-neutral-900 transition hover:text-neutral-700"
                >
                  {CONTACT.phone.display}
                  <span className="text-neutral-400 transition-transform duration-150 ease-out group-hover:translate-x-[3px]">
                    →
                  </span>
                </a>
              </div>

              <div>
                <p className="text-xs uppercase tracking-wide text-neutral-400">
                  E-pošta
                </p>
                <a
                  href={`mailto:${CONTACT.email}`}
                  className="group mt-3 inline-flex items-center gap-2 text-[15px] font-medium text-neutral-900 transition hover:text-neutral-700"
                >
                  {CONTACT.email}
                  <span className="text-neutral-400 transition-transform duration-150 ease-out group-hover:translate-x-[3px]">
                    →
                  </span>
                </a>
              </div>
            </div>

            <div className="ml-1 flex flex-wrap gap-3 pt-4">
              <a
                href={MAP_DIRECTIONS}
                target="_blank"
                rel="noreferrer"
                className="group inline-flex items-center justify-center rounded-full bg-neutral-900 px-6 py-3 text-sm font-medium text-white transition hover:bg-neutral-800"
              >
                Navodila za pot
                <span className="ml-2 transition-transform duration-150 ease-out group-hover:translate-x-[3px]">
                  →
                </span>
              </a>

              <a
                href={`mailto:${CONTACT.email}`}
                className="group inline-flex items-center justify-center rounded-full border border-neutral-200 bg-white px-6 py-3 text-sm font-medium text-neutral-900 transition hover:bg-neutral-50"
              >
                Pošlji e-pošto
                <span className="ml-2 transition-transform duration-150 ease-out group-hover:translate-x-[3px]">
                  →
                </span>
              </a>
            </div>

            <div className="border-t border-neutral-200/70 pt-6">
              <div className="overflow-hidden border border-neutral-200">
                <iframe
                  src={MAP_EMBED}
                  title={`Zemljevid lokacije ${CONTACT.address.full}`}
                  className="h-[420px] w-full"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}