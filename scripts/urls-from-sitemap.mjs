import fs from "node:fs/promises";

const BASE = "https://demaplus.si";

const CANDIDATES = [
  `${BASE}/sitemap.xml`,
  `${BASE}/sitemap_index.xml`,
  `${BASE}/wp-sitemap.xml`,
  `${BASE}/wp-sitemap-index.xml`,
];

async function fetchText(url) {
  const res = await fetch(url, { redirect: "follow" });
  if (!res.ok) return null;
  return res.text();
}

function extractLocs(xml) {
  return Array.from(xml.matchAll(/<loc>(.*?)<\/loc>/g)).map((m) => m[1].trim());
}

function normalizePath(u) {
  const p = new URL(u).pathname;
  if (p === "/") return "/";
  return p.replace(/\/$/, "");
}
async function classifyRootSlug(slug) {
  const url = `${BASE}/${slug}/`;
  const html = await fetchText(url);
  if (!html) return "unknown";

  const bodyClass =
    (html.match(/<body[^>]*class="([^"]+)"/i)?.[1] ?? "").toLowerCase();

  if (bodyClass.includes("single-post")) return "post";
  if (bodyClass.includes("single-reference")) return "project";
  if (bodyClass.includes("page")) return "page";

  const h = html.toLowerCase();
  const projectHints = ["reference", "projekt", "naročnik", "lokacija", "leto"];
  const postHints = ["novice", "objavljeno", "komentar", "kategorija"];

  const projectScore = projectHints.reduce(
    (s, k) => s + (h.includes(k) ? 1 : 0),
    0
  );
  const postScore = postHints.reduce(
    (s, k) => s + (h.includes(k) ? 1 : 0),
    0
  );

  if (projectScore > postScore) return "project";
  if (postScore > projectScore) return "post";

  return "unknown";
}

async function main() {
  let firstUrl = null;
  let firstXml = null;

  for (const u of CANDIDATES) {
    const xml = await fetchText(u);
    if (xml && xml.includes("<loc>")) {
      firstUrl = u;
      firstXml = xml;
      break;
    }
  }

  if (!firstXml) {
    console.log("Tried these sitemap URLs:");
    for (const u of CANDIDATES) console.log(" -", u);
    throw new Error("No sitemap found (all candidates failed).");
  }

  // If it's an index, fetch children; otherwise treat as urlset
  let urls = [];
  const locs = extractLocs(firstXml);

  if (firstXml.includes("<sitemapindex")) {
    for (const sm of locs) {
      const child = await fetchText(sm);
      if (child) urls.push(...extractLocs(child));
    }
  } else {
    urls = locs;
  }

  const paths = [...new Set(urls.map(normalizePath))].sort((a, b) =>
    a.localeCompare(b)
  );

  await fs.mkdir("tmp", { recursive: true });
  await fs.writeFile("tmp/paths.json", JSON.stringify(paths, null, 2));

  const fixed = new Set([
    "/",
    "/novice",
    "/project",
    "/o-nas",
    "/kontakt",
    "/splosni-pogoji-poslovanja",
  ]);

const rootSlugs = paths
  .filter((p) => !p.startsWith("/reference/"))
  .filter((p) => !fixed.has(p))
  .filter((p) => p !== "/")
  .map((p) => p.replace(/^\//, ""));

const rootProjects = [];
const rootPosts = [];
const rootUnknown = [];

for (const slug of rootSlugs) {
  const type = await classifyRootSlug(slug);
  if (type === "project") rootProjects.push(slug);
  else if (type === "post") rootPosts.push(slug);
  else rootUnknown.push(slug);
}


  await fs.writeFile("tmp/projects.json", JSON.stringify(projectSlugs, null, 2));
  await fs.writeFile("tmp/posts.json", JSON.stringify(postSlugs, null, 2));

  console.log("✅ Sitemap used:", firstUrl);
  console.log("All paths:", paths.length);
  console.log("Project slugs:", projectSlugs.length);
  const rootSlugsQuick = paths
  .filter((p) => !p.startsWith("/reference/"))
  .filter((p) => !fixed.has(p))
  .filter((p) => p !== "/");

console.log("Root-level paths (not /reference and not fixed):", rootSlugsQuick.length);
console.log(rootSlugsQuick);

  console.log("Post slugs:", postSlugs.length);
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
