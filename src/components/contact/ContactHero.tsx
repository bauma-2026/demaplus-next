import Container from "@/components/layout/Container";

export default function ContactHero() {
  return (
    <section className="border-b border-neutral-200 bg-neutral-50">
      <Container className="py-16 sm:py-20 max-w-3xl">
        <p className="text-sm text-neutral-500">Kontakt</p>

        <h1 className="mt-3 text-3xl sm:text-4xl font-semibold tracking-tight text-neutral-900">
          Stopite v stik
        </h1>

        <p className="mt-4 text-sm text-neutral-600 leading-relaxed">
          Za ponudbo, vprašanja ali uskladitev sestanka nam pišite ali nas
          pokličite. Odgovorimo v najkrajšem možnem času.
        </p>
      </Container>
    </section>
  );
}