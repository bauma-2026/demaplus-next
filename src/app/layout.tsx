import "./globals.css";
import type { Metadata } from "next";

import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import CookieConsent from "../components/CookieConsent";

const BASE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ||
  "https://demaplus-next.vercel.app";

// 🔥 detect production
const isProd = BASE_URL === "https://demaplus.si";

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),

  title: {
    default: "DEMA PLUS, inženiring d.o.o.",
    template: "%s | Dema Plus",
  },

  description:
    "Dema Plus izvaja celovito vodenje investicijskih projektov, gradbeni nadzor, rekonstrukcije in novogradnje objektov.",

  // ✅ ROBOTS (ključ)
  robots: isProd
    ? {
        index: true,
        follow: true,
      }
    : {
        index: false,
        follow: false,
      },

  openGraph: {
    title: "DEMA PLUS, inženiring d.o.o.",
    description:
      "Dema Plus izvaja celovito vodenje investicijskih projektov, gradbeni nadzor, rekonstrukcije in novogradnje objektov.",
    url: BASE_URL,
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

  // ✅ canonical vedno na live
  alternates: {
    canonical: "https://demaplus.si",
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