// src/lib/rewriteReferenceImages.ts
import map from "../../reference-image-map.json";

const entries = Object.entries(map as Record<string, string>);

const ABS_PREFIXES = [
  "https://demaplus.si",
  "http://demaplus.si",
];

export function rewriteReferenceImages(html: string) {
  let out = html ?? "";

  for (const [oldPath, newPath] of entries) {
    // 1) relativne WP poti
    out = out.replaceAll(oldPath, newPath);

    // 2) absolutne (obe domeni)
    for (const prefix of ABS_PREFIXES) {
      out = out.replaceAll(`${prefix}${oldPath}`, newPath);
    }
  }

  return out;
}