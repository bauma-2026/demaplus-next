// src/lib/rewriteWpImages.ts
type MapType = Record<string, string>;

function toPathname(urlOrPath: string): string | null {
  const s = String(urlOrPath || "").trim();
  if (!s) return null;

  // absolute URL → pathname
  if (/^https?:\/\//i.test(s)) {
    try {
      return new URL(s).pathname;
    } catch {
      return null;
    }
  }

  // already pathname (e.g. "/wp-content/uploads/...")
  if (s.startsWith("/")) return s;

  return null;
}

function normalizeWpPathname(p: string) {
  // Remove weird unicode spaces (nbsp, thin space, hair space, etc.)
  // This fixes cases like "1200 × 800" where there are hidden chars around ×.
  const stripped = p.replace(/[\u00A0\u2000-\u200B\u202F\u205F\u3000]/g, "");

  // Some WP filenames contain "×" instead of "x"
  return stripped.replace(/×/g, "x");
}

function rewriteOne(url: string, map: MapType) {
  const p = toPathname(url);
  if (!p) return url;

  // try normalized key first, then original
  const key = normalizeWpPathname(p);
  return map[key] ?? map[p] ?? url;
}

export function rewriteWpImages(html: string | undefined, map: MapType) {
  if (!html) return html;

  // src="..."
  html = html.replace(/\bsrc\s*=\s*["']([^"']+)["']/gi, (full, url) => {
    const replaced = rewriteOne(url, map);
    return full.replace(url, replaced);
  });

  // srcset="a 300w, b 1024w"
  html = html.replace(/\bsrcset\s*=\s*["']([^"']+)["']/gi, (_full, value) => {
    const parts = String(value)
      .split(",")
      .map((x) => x.trim())
      .filter(Boolean)
      .map((entry) => {
        const [u, ...rest] = entry.split(/\s+/);
        const replaced = rewriteOne(u, map);
        return [replaced, ...rest].join(" ");
      });

    return `srcset="${parts.join(", ")}"`;
  });

  return html;
}