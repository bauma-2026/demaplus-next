import "./globals.css";
import type { Metadata } from "next";

import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import CookieConsent from "../components/CookieConsent";

export const metadata: Metadata = {
  metadataBase: new URL("https://demaplus-next.vercel.app"), // ⚠️ zamenjaj na live

  title: {
    default: "DEMA PLUS, inženiring d.o.o.",
    template: "%s | Dema Plus",
  },

  description:
    "Dema Plus izvaja celovito vodenje investicijskih projektov, gradbeni nadzor, rekonstrukcije in novogradnje objektov.",

  openGraph: {
    title: "DEMA PLUS, inženiring d.o.o.",
    description:
      "Dema Plus izvaja celovito vodenje investicijskih projektov, gradbeni nadzor, rekonstrukcije in novogradnje objektov.",
    url: "https://demaplus-next.vercel.app",
    siteName: "Dema Plus",
    locale: "sl_SI",
    type: "website",
    images: [
      {
        url: "/og-default.jpg",
        width: 1200,
        height: 630,
        alt: "Dema Plus",
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

  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/icon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/icon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180" }],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
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