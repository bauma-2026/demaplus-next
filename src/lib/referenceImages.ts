import fs from "node:fs";
import path from "node:path";

const ROOT = process.cwd();
const REF_ROOT = path.join(ROOT, "public", "reference");

export function getReferenceImages(slug: string) {
  const dir = path.join(REF_ROOT, slug);
  if (!fs.existsSync(dir)) return { hero: null as string | null, gallery: [] as string[] };

  const files = fs.readdirSync(dir);

  const hero = files.includes("hero.webp") ? `/reference/${slug}/hero.webp` : null;

  const gallery = files
    .filter((f) => /^\d{2}\.webp$/.test(f))
    .sort()
    .map((f) => `/reference/${slug}/${f}`);

  return { hero, gallery };
}