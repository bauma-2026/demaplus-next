export type Project = {
  slug: string;
  title: string;
  year?: number;
  location?: string;
  category?: string;
  excerpt?: string;
};

export const projects: Project[] = [
  {
    slug: "pokopalisce-vic",
    title: "Pokopališče Vič",
    year: 2024,
    location: "Ljubljana",
    category: "Objekti",
    excerpt: "Rekonstrukcija in izvedba gradbenih del.",
  },
];
