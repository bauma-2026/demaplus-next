import Link from "next/link";
import Container from "@/components/layout/Container";

const latestPost = {
  title: "Osnovna šola Savsko naselje",
  excerpt:
    "Celovita obnova objekta v Ljubljani z upoštevanjem okoljskih vidikov in izboljšanjem pogojev za uporabo javnega izobraževalnega prostora.",
  slug: "celovita-obnova-osnovne-sole-savsko-naselje-pri-kateri-se-upostevajo-okoljski-vidiki",
};

export default function HomeNewsPreview() {
  const href = `/${latestPost.slug}`;

  return (
<section className="section-shell-tight border-b border-footer bg-[var(--footer-bg)]">
          <Container>
        <div className="flex items-end justify-between gap-6">
          <p className="section-eyebrow">Aktualno</p>

          <Link
            href="/novice"
            className="group text-sm text-neutral-700 transition-colors hover:text-[color:var(--brand-strong)]"
          >
            Vse novice
            <span className="ml-2 text-neutral-400 transition-transform group-hover:translate-x-[2px]">
              →
            </span>
          </Link>
        </div>

        <Link href={href} className="group mt-4 block max-w-2xl">
          <h2 className="section-title mt-1">{latestPost.title}</h2>

          <p className="section-lead mt-3 max-w-[56ch] text-neutral-700">
            {latestPost.excerpt}
          </p>

          <div className="mt-3 inline-flex items-center gap-2 text-sm text-neutral-500 hover:text-neutral-900 transition-colors">
            Preberi novico
            <span className="text-neutral-400 transition-transform group-hover:translate-x-[2px]">
              →
            </span>
          </div>
        </Link>
      </Container>
    </section>
  );
}