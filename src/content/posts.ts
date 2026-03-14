export type Post = {
  slug: string;     // root-level: /<slug>/
  title: string;
  date: string;     // ISO: "2026-02-19"
  excerpt?: string;
};

export const posts: Post[] = [
  {
    slug: "celovita-obnova-osnovne-sole-savsko-naselje-pri-kateri-se-upostevajo-okoljski-vidiki",
    title: "Celovita obnova OŠ Savsko naselje",
    date: "2024-10-10",
    excerpt: "Pri obnovi se upoštevajo tudi okoljski vidiki in optimizacije izvedbe.",
  },
  {
    slug: "primer-novice",
    title: "Primer novice (placeholder)",
    date: "2024-06-01",
    excerpt: "To je samo test, kasneje pride real content iz WP.",
  },
];
