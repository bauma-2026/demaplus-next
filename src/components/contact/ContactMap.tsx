import Container from "@/components/layout/Container";

const MAP_EMBED =
  "https://www.google.com/maps?q=Tbilisijska%20ulica%2059%2C%201000%20Ljubljana&output=embed";

export default function ContactMap() {
  return (
    <section className="border-t border-neutral-200 py-12 sm:py-14">
      <Container>
        <div className="overflow-hidden rounded-2xl border border-neutral-200 bg-neutral-100">
          <div className="relative aspect-[16/7] w-full">
            <iframe
              src={MAP_EMBED}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="absolute inset-0 h-full w-full"
              title="Zemljevid – Dema Plus"
            />
          </div>
        </div>

        <p className="mt-3 text-xs text-neutral-500">
          Namig: klik na zemljevid odpre navodila za pot.
        </p>
      </Container>
    </section>
  );
}