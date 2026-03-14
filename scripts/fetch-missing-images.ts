import fs from "node:fs";
import path from "node:path";

const ROOT = process.cwd();

const IN_MISSING = path.join(ROOT, "missing-reference-images.json");

// ✅ zamenjaj domeno, če je druga 
const WP_BASE = "https://demaplus.si";

// kam naj shranjuje downloade (da ne mešaš z obstoječimi thumbs)
const OUT_DIR = path.join(ROOT, "public", "reference", "thumbs-dump");

type Missing = { slug: string; wpPath: string; filename: string };

function safeName(name: string) {
  // če imaš v filename čudne znake, jih pustimo — to mora matchat WP basename
  return name;
}

async function download(url: string, outPath: string) {
  const res = await fetch(url, {
    redirect: "follow",
    headers: {
      // pomaga pri nekaterih hostih
      "User-Agent": "demaplus-next-migrate/1.0",
      Accept: "image/avif,image/webp,image/*,*/*;q=0.8",
      Referer: WP_BASE + "/",
    },
  });

  if (!res.ok) {
    throw new Error(`${res.status} ${res.statusText}`);
  }

  const buf = Buffer.from(await res.arrayBuffer());
  fs.writeFileSync(outPath, buf);
}

async function main() {
  if (!fs.existsSync(IN_MISSING)) {
    console.error("❌ missing-reference-images.json not found. Run migrate:refimg first.");
    process.exit(1);
  }

  const missing: Missing[] = JSON.parse(fs.readFileSync(IN_MISSING, "utf8"));

  fs.mkdirSync(OUT_DIR, { recursive: true });

  let ok = 0;
  let fail = 0;

  for (const m of missing) {
    const url = `${WP_BASE}${m.wpPath}`;

    // shranimo pod original filename, da matching ostane trivialen
    const outPath = path.join(OUT_DIR, safeName(m.filename));

    if (fs.existsSync(outPath)) {
      continue;
    }

    try {
      await download(url, outPath);
      ok++;
      console.log("✅", m.slug, m.filename);
    } catch (e: any) {
      fail++;
      console.warn("❌", m.slug, url, String(e?.message ?? e));
    }
  }

  console.log("✅ fetch done");
  console.log(`Downloaded: ${ok}`);
  console.log(`Failed: ${fail}`);
  console.log(`Out dir: ${OUT_DIR}`);
}

main().catch((e) => {
  console.error("❌ fetch failed:", e);
  process.exit(1);
});