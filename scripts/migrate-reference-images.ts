import fs from "node:fs";
import path from "node:path";

const ROOT = process.cwd();

// outputs
const OUT_MAP_PATH = path.join(ROOT, "reference-image-map.json");
const OUT_MISSING_JSON = path.join(ROOT, "missing-reference-images.json");
const OUT_MISSING_TXT = path.join(ROOT, "missing-reference-images.txt");

// ✅ prilagodi, če imaš drug path
const PROJECTS_MODULE = "./src/content/projects.generated";
const PUBLIC_THUMBS_ROOT = path.join(ROOT, "public", "reference", "thumbs");
const PUBLIC_REFERENCE_ROOT = path.join(ROOT, "public", "reference");

// --- types ---
type AnyProject = {
  slug?: string;
  contentHtml?: string;
  html?: string;
  content?: string;
  featuredImage?: { src?: string } | string;
  featuredImageUrl?: string;
  image?: { src?: string } | string;
};

// --- helpers ---
function ensureDir(p: string) {
  fs.mkdirSync(p, { recursive: true });
}

function fileExists(p: string) {
  try {
    fs.accessSync(p, fs.constants.F_OK);
    return true;
  } catch {
    return false;
  }
}

function buildFileIndex(rootDir: string) {
  const map = new Map<string, string>(); // key: lowercase basename -> abs path

  function walk(dir: string) {
    const entries = fs.readdirSync(dir, { withFileTypes: true });
    for (const e of entries) {
      const abs = path.join(dir, e.name);
      if (e.isDirectory()) walk(abs);
      else if (e.isFile()) {
        map.set(e.name.toLowerCase(), abs);
      }
    }
  }

  if (fs.existsSync(rootDir)) walk(rootDir);
  return map;
}

function toPathname(urlOrPath: unknown): string | null {
  if (!urlOrPath) return null;

  const s = String(urlOrPath).trim();
  if (!s) return null;

  if (/^https?:\/\//i.test(s)) {
    try {
      const u = new URL(s);
      return u.pathname;
    } catch {
      return null;
    }
  }

  if (s.startsWith("/")) return s;

  return null;
}

/**
 * Find local file in thumbs (indexed), by matching WP filename + variants.
 */
function resolveLocalThumbFile(wpPathname: string, index: Map<string, string>): string | null {
  const raw = wpPathname.split("/").pop();
  if (!raw) return null;

  let filename = raw;
  try {
    filename = decodeURIComponent(raw);
  } catch {}

  const variants = new Set<string>();

  variants.add(filename);
  variants.add(filename.replace(/-\d+x\d+(?=\.[^.]+$)/, "")); // remove -768x702
  variants.add(filename.replace(/-\d+(?=\.[^.]+$)/, "")); // remove -1/-2

  variants.add(
    filename
      .replace(/-\d+x\d+(?=\.[^.]+$)/, "")
      .replace(/-\d+(?=\.[^.]+$)/, "")
  );

  // en dash → hyphen
  for (const v of Array.from(variants)) variants.add(v.replace(/–/g, "-"));

  for (const name of variants) {
    const key = name.toLowerCase();

    const direct = index.get(key);
    if (direct) return direct;

    // try name + ".webp"
    if (!key.endsWith(".webp")) {
      const a = index.get((name + ".webp").toLowerCase());
      if (a) return a;
    }

    // try replace extension with .webp (foo.jpg -> foo.webp)
    const ext = path.extname(name);
    if (ext) {
      const b = index.get((name.slice(0, -ext.length) + ".webp").toLowerCase());
      if (b) return b;
    }
  }

  return null;
}

function extractWpImageSrcs(html: string): string[] {
  if (!html) return [];
  const out = new Set<string>();

  const srcRe = /\bsrc\s*=\s*["']([^"']+)["']/gi;
  let m: RegExpExecArray | null;

  while ((m = srcRe.exec(html))) {
    const p = toPathname(m[1]);
    if (p && p.includes("/wp-content/uploads/")) out.add(p);
  }

  const srcsetRe = /\bsrcset\s*=\s*["']([^"']+)["']/gi;
  while ((m = srcsetRe.exec(html))) {
    const parts = m[1]
      .split(",")
      .map((x) => x.trim().split(/\s+/)[0]);

    for (const part of parts) {
      const p = toPathname(part);
      if (p && p.includes("/wp-content/uploads/")) out.add(p);
    }
  }

  return [...out];
}

function pad2(n: number) {
  return String(n).padStart(2, "0");
}

// --- main ---
async function main() {
  const mod: any = await import(path.join(ROOT, PROJECTS_MODULE));
  const projectsRaw: unknown = mod.projects ?? mod.default ?? mod;

  if (!Array.isArray(projectsRaw)) {
    console.error("❌ projects not found / not an array. Fix PROJECTS_MODULE import.");
    process.exit(1);
  }

  const projects = projectsRaw as AnyProject[];

  ensureDir(PUBLIC_REFERENCE_ROOT);

  const thumbsIndex = buildFileIndex(PUBLIC_THUMBS_ROOT);
  if (!thumbsIndex.size) {
    console.warn(`⚠️ thumbs index is empty: ${PUBLIC_THUMBS_ROOT}`);
  }

  const mapping: Record<string, string> = {};
  const missing: Array<{ slug: string; wpPath: string; filename: string }> = [];

  let copiedCount = 0;
  let missingCount = 0;

  for (const p of projects) {
    const slug = p.slug;
    if (!slug) continue;

    const destDir = path.join(PUBLIC_REFERENCE_ROOT, slug);
    ensureDir(destDir);

    const featured =
      toPathname((p.featuredImage as any)?.src) ||
      toPathname(p.featuredImage) ||
      toPathname(p.featuredImageUrl) ||
      toPathname((p.image as any)?.src) ||
      toPathname(p.image);

    const html = p.contentHtml || p.html || p.content || "";
    const inlineSrcs = extractWpImageSrcs(html);

    const ordered: string[] = [];
    if (featured && featured.includes("/wp-content/uploads/")) ordered.push(featured);
    for (const s of inlineSrcs) {
      if (!ordered.includes(s)) ordered.push(s);
    }

    let galleryIndex = 1;

    for (const wpPath of ordered) {
      const localFile = resolveLocalThumbFile(wpPath, thumbsIndex);

      if (!localFile || !fileExists(localFile)) {
        missingCount++;

        const raw = wpPath.split("/").pop() ?? wpPath;
        let filename = raw;
        try {
          filename = decodeURIComponent(raw);
        } catch {}

        missing.push({ slug, wpPath, filename });
        console.warn(`⚠️ missing local for ${slug}: ${wpPath}`);
        continue;
      }

      const isFeatured = Boolean(featured && wpPath === featured);
      const destName = isFeatured ? "hero.webp" : `${pad2(galleryIndex++)}.webp`;
      const destAbs = path.join(destDir, destName);
      const destPublic = `/reference/${slug}/${destName}`;

      fs.copyFileSync(localFile, destAbs);
      copiedCount++;

      mapping[wpPath] = destPublic;
    }
  }

  fs.writeFileSync(OUT_MAP_PATH, JSON.stringify(mapping, null, 2), "utf8");
  fs.writeFileSync(OUT_MISSING_JSON, JSON.stringify(missing, null, 2), "utf8");
  fs.writeFileSync(
    OUT_MISSING_TXT,
    missing.map((m) => `${m.slug}\t${m.filename}\t${m.wpPath}`).join("\n") + "\n",
    "utf8"
  );

  console.log("✅ done");
  console.log(`Copied: ${copiedCount}`);
  console.log(`Missing: ${missingCount}`);
  console.log(`Mapping file: ${OUT_MAP_PATH}`);
  console.log(`Missing json: ${OUT_MISSING_JSON}`);
  console.log(`Missing txt: ${OUT_MISSING_TXT}`);
}

main().catch((err) => {
  console.error("❌ migrate failed:", err);
  process.exit(1);
});