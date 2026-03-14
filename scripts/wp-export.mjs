import fs from "node:fs/promises";

const BASE = "https://demaplus.si";

// ---------- helpers
async function wpListAll(endpoint, perPage = 100) {
  const all = [];
  let page = 1;

  while (true) {
    const url = `${BASE}/wp-json/wp/v2/${endpoint}?per_page=${perPage}&page=${page}&_embed=1`;
    const res = await fetch(url, { redirect: "follow" });

    // WP returns 400 when page is out of range
    if (res.status === 400) break;
    if (!res.ok) throw new Error(`${res.status} ${res.statusText} for ${url}`);

    const data = await res.json();
    if (!Array.isArray(data) || data.length === 0) break;

    all.push(...data);
    if (data.length < perPage) break;

    page++;
  }

  return all;
}

function stripHtml(html = "") {
  return html
    .replace(/<style[\s\S]*?<\/style>/gi, "")
    .replace(/<script[\s\S]*?<\/script>/gi, "")
    .replace(/<[^>]*>/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

function getFeaturedImageUrl(item) {
  const fm = item?._embedded?.["wp:featuredmedia"]?.[0];
  return fm?.source_url || null;
}

async function endpointExists(endpoint) {
  const url = `${BASE}/wp-json/wp/v2/${endpoint}?per_page=1`;
  const res = await fetch(url, { redirect: "follow" });
  return res.ok;
}

async function main() {
  // ✅ ALL POSTS (this should become 4)
  const postsRaw = await wpListAll("posts", 100);
  const posts = postsRaw.map((item) => ({
    slug: item.slug,
    title: stripHtml(item.title?.rendered),
    date: (item.date || "").slice(0, 10),
    excerpt: stripHtml(item.excerpt?.rendered),
    featuredImage: getFeaturedImageUrl(item),
    contentHtml: item.content?.rendered || "",
  }));

  // ✅ ALL PROJECTS (CPT endpoint)
  const projectEndpoint = "project";
  const hasProject = await endpointExists(projectEndpoint);
  if (!hasProject) {
    throw new Error(
      "CPT endpoint 'project' not available in REST (needs show_in_rest=true)."
    );
  }

  const projectsRaw = await wpListAll(projectEndpoint, 100);
  const projects = projectsRaw.map((item) => ({
    slug: item.slug,
    title: stripHtml(item.title?.rendered),
    date: (item.date || "").slice(0, 10),
    excerpt: stripHtml(item.excerpt?.rendered),
    featuredImage: getFeaturedImageUrl(item),
    contentHtml: item.content?.rendered || "",
  }));

  await fs.mkdir("src/content", { recursive: true });

  await fs.writeFile(
    "src/content/posts.generated.ts",
    `export type Post = {
  slug: string;
  title: string;
  date: string;
  excerpt?: string;
  featuredImage?: string | null;
  contentHtml?: string;
};

export const posts: Post[] = ${JSON.stringify(posts, null, 2)};
`
  );

  await fs.writeFile(
    "src/content/projects.generated.ts",
    `export type Project = {
  slug: string;
  title: string;
  date?: string;
  excerpt?: string;
  featuredImage?: string | null;
  contentHtml?: string;
};

export const projects: Project[] = ${JSON.stringify(projects, null, 2)};
`
  );

  console.log("✅ Export done");
  console.log("Posts:", posts.length);
  console.log("Projects:", projects.length, "(endpoint: project)");
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
