import fs from "node:fs";
import path from "node:path";

/**
 * Local-first thumbnail resolver.
 * Tries common local paths, otherwise returns original input.
 */
export function getProjectThumb({
  slug,
  thumb,
}: {
  slug: string;
  thumb?: string | null;
}) {
  if (!thumb) return undefined;

  // 1) Če je že lokalna pot, jo samo preveri
  if (thumb.startsWith("/")) {
    const abs = path.join(process.cwd(), "public", thumb);
    if (fs.existsSync(abs)) return thumb;
  }

  // 2) Iz thumb-a izlušči filename (npr. ".../foo-bar.jpg" -> "foo-bar")
  //    in probaj lokalno v /public/reference/<slug>/
  const clean = thumb.split("?")[0];
  const base = clean.split("/").pop() || "";
  const stem = base.replace(/\.(jpe?g|png|webp)$/i, "");

  const candidates = [
    `/reference/${slug}/${stem}.webp`,
    `/reference/${slug}/${stem}.jpg`,
    `/reference/${slug}/${stem}.jpeg`,
    `/reference/${slug}/${stem}.png`,
    `/reference/${slug}/thumb.webp`,
    `/reference/${slug}/thumb.jpg`,
    `/reference/${slug}/thumb.png`,
  ];

  for (const rel of candidates) {
    const abs = path.join(process.cwd(), "public", rel);
    if (fs.existsSync(abs)) return rel;
  }

  // 3) Fallback: vrni original (lahko je remote ali wp path)
  return thumb;
}