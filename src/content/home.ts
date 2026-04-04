// src/content/home.ts

export type FeaturedProject = {
  title: string;
  slug: string;
  image: string;
  location?: string;
  year?: string;
  workType?: string;
  excerpt?: string;
};

export type ProcessStep = {
  title: string;
  text: string;
};

export type HeroChip = {
  label: string;
  value: string;
};

export type HomeHero = {
  headline: string[];
  subheadline: string;
  primaryCta: { label: string; href: string };
  secondaryCta?: { label: string; href: string };
  featured: FeaturedProject;
  chips: HeroChip[];
};

export const homeHero: HomeHero = {
  headline: [
    "Gradimo.",
    "V skladu z načrti.",
    "V skladu z naročnikom.",
  ],

  subheadline:
    "Projekt vodimo strukturirano — z jasnim nadzorom, roki in odgovornostjo.",

  primaryCta: {
    label: "Izbrani projekti",
    href: "#reference",
  },

  secondaryCta: {
    label: "Kontakt",
    href: "/kontakt",
  },

  featured: {
    title: "Švicarija",
    slug: "svicarija",
    image: "/images/hero/svicarija.jpg",
    workType: "Inženiring",
    location: "Izvedba",
    year: "",
    excerpt:
      "Rekonstrukcije, novogradnje in inženiring z nadzorom kakovosti ter jasno odgovornostjo.",
  },

  chips: [],
};

export const homePositioning = {
  title: "Gradimo objekte, ki zahtevajo več kot zgolj izvedbo.",
  text: `
Projekti z več deležniki, arhitekturno zahtevni objekti in rekonstrukcije
pod posebnimi pogoji zahtevajo strukturiran in odgovoren pristop.

Dema Plus zagotavlja tehnično natančnost, dosleden nadzor kakovosti ter jasno
komunikacijo skozi celoten potek projekta — od začetne analize do končne predaje.
`,
};

export const homeProcess: ProcessStep[] = [
  {
    title: "Analiza",
    text: "Pregled projekta, tehnična presoja in ocena izvedljivosti.",
  },
  {
    title: "Načrtovanje",
    text: "Usklajevanje z investitorjem, projektanti in priprava izvedbenih faz.",
  },
  {
    title: "Izvedba",
    text: "Koordinacija izvajalcev, nadzor kakovosti ter spoštovanje rokov.",
  },
  {
    title: "Zaključek",
    text: "Tehnični pregled, dokumentacija in predaja objekta investitorju.",
  },
];

export const homeFinalCta = {
  title: "Načrtujete projekt?",
  text:
    "Stopite v stik z nami za strokovni posvet ali pripravo ponudbe. Projekt obravnavamo sistematično, z jasno strukturo in odgovornostjo.",
  button: {
    label: "Kontakt",
    href: "/kontakt",
  },
};