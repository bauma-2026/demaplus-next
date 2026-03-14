import Container from "./Container";
import Link from "next/link";
import Image from "next/image";
import CookieSettingsButton from "@/components/footer/CookieSettingsButton";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-footer bg-footer py-14 sm:py-16">
      <Container>
        <div className="flex flex-col gap-10 py-14 sm:flex-row sm:items-end sm:justify-between">
          {/* Left */}
          <div>
            <Image
              src="/logo/demaplus-logo-footer.svg"
              alt="Dema Plus"
              width={140}
              height={28}
              className="h-6 w-auto"
            />

            <p className="mt-2 max-w-sm text-[13px] leading-tight text-neutral-500/65">
              Celovito vodenje investicijskih projektov
              <br />
              od analize do primopredaje.
            </p>
          </div>

          {/* Right */}
          <div className="flex flex-col items-start gap-3 text-sm sm:items-end">
            {/* Legal */}
            <div className="flex flex-col items-start gap-2 sm:items-end">
              <Link
                href="/splosni-pogoji-poslovanja"
                className="inline-block text-left text-neutral-700 underline underline-offset-4 decoration-neutral-400 transition hover:text-neutral-900 hover:decoration-neutral-700"
              >
                Splošni pogoji poslovanja
              </Link>

              <Link
                href="/piskotki"
                className="inline-block text-left text-neutral-700 underline underline-offset-4 decoration-neutral-400 transition hover:text-neutral-900 hover:decoration-neutral-700"
              >
                Politika piškotkov
              </Link>

              <div className="w-fit">
                <CookieSettingsButton />
              </div>
            </div>

            {/* Divider */}
            <div className="mt-3 w-12 border-t border-neutral-200" />

            {/* Meta */}
            <div className="text-xs text-neutral-500">
              © {year} DEMA PLUS, d.o.o.
            </div>

            {/* TODO: studio credit (bauma.si) – enable after launch */}
            {/*
            <div className="text-[11px] text-neutral-400">
              Digitalna zasnova:{" "}
              <a
                href="https://bauma.si"
                target="_blank"
                rel="noopener noreferrer"
                className="transition hover:text-neutral-600"
              >
                bauma.si
              </a>
            </div>
            */}
          </div>
        </div>
      </Container>
    </footer>
  );
}