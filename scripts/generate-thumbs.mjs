import fs from "fs";
import path from "path";
import sharp from "sharp";

const PROJECTS_FILE = "src/content/projects.generated.ts";
const UPLOADS_PUBLIC_DIR = "public/wp-content/uploads";
const OUT_DIR = "public/reference/thumbs";

// thumb size (4:3)
const W = 600;
const H = 450;
const QUALITY = 78;

function normalizeUploadsUrl(input) {
  return input.replace(
    /https?:\/\/(?:www\.)?[^/]+\/wp-content\/uploads/gi,
    "/wp-content/uploads"
  );
}

function stripWpVariants(input) {
  return input
    .replace(/-\d+x\d+(?=[^/]*\.(jpg|jpeg|png|webp)\b)/gi, "")
    .replace(/-scaled(?=[^/]*\.(jpg|jpeg|png|webp)\b)/gi, "");
}

function toLocalUploadsPath(featuredImageUrl) {
  const rel = stripWpVariants(normalizeUploadsUrl(featuredImageUrl)); // /wp-content/uploads/...
  // map to public/wp-content/uploads/...
  const local = path.join("public", rel);
  return local;
}

// Reads projects.generated.ts as text and extracts { slug, featuredImage }
function readProjectsFromTs() {
  const code = fs.readFileSync(PROJECTS_FILE, "utf8");

  // Assumes objects contain "slug": "...", and "featuredImage": "..."
  const blocks = code.split(/\{\s*"/g).map((x) => `{"${x}`); // rough block split
  const items = [];

  for (const b of blocks) {
    const slug = (b.match(/"slug"\s*:\s*"([^"]+)"/) || [])[1];
    const featuredImage = (b.match(/"featuredImage"\s*:\s*"([^"]+)"/) || [])[1];

    if (slug) {
      items.push({ slug, featuredImage: featuredImage || "" });
    }
  }

  // de-dupe by slug (in case split is noisy)
  const map = new Map();
  for (const it of items) map.set(it.slug, it);
  return [...map.values()];
}

function ensureDir(p) {
  fs.mkdirSync(p, { recursive: true });
}

async function main() {
  ensureDir(OUT_DIR);

  const projects = readProjectsFromTs();
  const missingSources = [];
  const noFeatured = [];

  console.log(`Projects found: ${projects.length}`);

  for (const p of projects) {
    if (!p.featuredImage) {
      noFeatured.push(p.slug);
      continue;
    }

    const srcPath = toLocalUploadsPath(p.featuredImage);
    const outPath = path.join(OUT_DIR, `${p.slug}.webp`);

    if (!fs.existsSync(srcPath)) {
      missingSources.push({ slug: p.slug, srcPath });
      continue;
    }

    try {
      await sharp(srcPath)
        .resize(W, H, { fit: "cover", position: "centre" })
        .webp({ quality: QUALITY })
        .toFile(outPath);

      process.stdout.write(".");
    } catch (e) {
      missingSources.push({ slug: p.slug, srcPath, error: String(e) });
    }
  }

  console.log("\nDone.");
  console.log(`Thumbs output: ${OUT_DIR}`);

  if (noFeatured.length) {
    console.log("\nNo featuredImage (manual):");
    console.log(noFeatured.join("\n"));
  }
  

  if (missingSources.length) {
    console.log("\nMissing source images (manual fix):");
    for (const m of missingSources) {
      console.log(`- ${m.slug}: ${m.srcPath}${m.error ? ` (${m.error})` : ""}`);
    }
    console.log(
      "\nTip: te manjkajoče boš najbrž uredil tako, da najdeš pravi original v uploads in ga preimenuješ/zgeneriraš."
    );
  }
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});