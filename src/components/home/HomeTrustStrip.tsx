import Container from "@/components/layout/Container";

export default function HomeTrustStrip() {
  return (
    <section className="section-shell-tight border-b border-neutral-200 bg-white">
      <Container>
        <p className="section-eyebrow mb-6">Zaupajo nam</p>

        <div className="flex flex-wrap items-center gap-x-10 gap-y-4 text-sm text-neutral-600">
          <span>Mestna občina Ljubljana</span>
          <span>Občina Bohinj</span>
          <span>ASSETCO d.o.o.</span>
          <span>MB Investicije Plus</span>
        </div>
      </Container>
    </section>
  );
}