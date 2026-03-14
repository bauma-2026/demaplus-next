import "./globals.css";
import type { Metadata } from "next";

import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import CookieConsent from "../components/CookieConsent";

export const metadata: Metadata = {
  metadataBase: new URL("https://demaplus.si"),

  title: "DEMA PLUS, inženiring d.o.o.",
  description:
    "Dema Plus izvaja celovito vodenje investicijskih projektov, gradbeni nadzor, rekonstrukcije in novogradnje objektov.",

  openGraph: {
    title: "DEMA PLUS, inženiring d.o.o.",
    description:
      "Dema Plus izvaja celovito vodenje investicijskih projektov, gradbeni nadzor, rekonstrukcije in novogradnje objektov.",
    url: "https://demaplus.si",
    siteName: "Dema Plus",
    locale: "sl_SI",
    type: "website",
    images: [
      {
        url: "/og-default.jpg",
        width: 1200,
        height: 630,
        alt: "Dema Plus projekti",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "DEMA PLUS, inženiring d.o.o.",
    description:
      "Dema Plus izvaja celovito vodenje investicijskih projektov, gradbeni nadzor, rekonstrukcije in novogradnje objektov.",
    images: ["/og-default.jpg"],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="sl">
      <body className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />

        <CookieConsent />
      </body>
    </html>
  );
}