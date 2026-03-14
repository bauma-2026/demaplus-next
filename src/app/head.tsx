import Script from "next/script";

export default function Head() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": "https://demaplus.si/#business",
    name: "DEMA PLUS, inženiring d.o.o.",
    url: "https://demaplus.si",
    logo: "https://demaplus.si/favicon.svg",
    image: "https://demaplus.si/images/banners/construction.webp",
    description:
      "Celovito vodenje investicijskih projektov od analize do primopredaje.",
    telephone: "+38612442600",
    email: "info@demaplus.si",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Tbilisijska ulica 59",
      addressLocality: "Ljubljana",
      postalCode: "1000",
      addressCountry: "SI",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 46.0419,
      longitude: 14.469,
    },
    areaServed: {
      "@type": "Country",
      name: "Slovenia",
    },
    contactPoint: {
      "@type": "ContactPoint",
      telephone: "+38612442600",
      contactType: "customer service",
      areaServed: "SI",
      availableLanguage: "Slovenian",
    },
  };

  return (
    <>
      <Script
        id="business-jsonld"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(jsonLd),
        }}
      />
    </>
  );
}