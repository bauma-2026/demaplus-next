import * as cheerio from "cheerio";

export type Meta = {
  categories?: string[];
  client?: string;
  location?: string;
  workType?: string;
  year?: string;
  title?: string;
};
function decodeHtml(str: string) {
  return str
    .replace(/&#8211;|&ndash;/g, "–")
    .replace(/&#8212;|&mdash;/g, "—")
    .replace(/&#8217;|&rsquo;/g, "’")
    .replace(/&#8216;|&lsquo;/g, "‘")
    .replace(/&amp;/g, "&")
    .replace(/&quot;/g, '"')
    .replace(/&#039;|&apos;/g, "'")
    .replace(/&nbsp;/g, " ");
}
function clean(s: string) {
  return s.replace(/\u00A0/g, " ").replace(/\s+/g, " ").trim();
}

function normLabel(s: string) {
  return clean(s).toLowerCase().replace(/:$/, "").replace(/\s+/g, " ");
}

function uniq(arr: string[]) {
  const seen = new Set<string>();
  const out: string[] = [];
  for (const x of arr) {
    const k = x.toLowerCase();
    if (!seen.has(k)) {
      seen.add(k);
      out.push(x);
    }
  }
  return out;
}

export function parseWpMeta(html: string): Meta {
  const $ = cheerio.load(html);
  const meta: Meta = {};

  // ✅ title iz body (tvoj markup)
 meta.title = decodeHtml(
  clean($(".project-detail h1.title").first().text())
);

  const rows = $(".project-detail-container .project-detail-item");

  rows.each((_, el) => {
    const $el = $(el);

    const labelRaw = $el.find(".project-detail-title").first().text();
    const label = normLabel(labelRaw);

    // ✅ categories: poberi tekste linkov
    if (label.includes("kategorija")) {
      const cats = $el
        .find(".project-detail-desc a")
        .map((_, a) => clean($(a).text()))
        .get()
        .filter(Boolean);

      // fallback če ni linkov
      const fallback = clean($el.find(".project-detail-desc").text());
      meta.categories = cats.length ? uniq(cats) : uniq(fallback.split(/,|\n/g).map(clean).filter(Boolean));
      return;
    }

    // ostalo kot plain text
    const value = clean($el.find(".project-detail-desc").first().text());

    if (!value || value === "—" || value === "-") return;

    if (label.includes("naročnik")) meta.client = value;
    else if (label.includes("lokacija")) meta.location = value;
    else if (label.includes("vrsta del")) meta.workType = value;
    else if (label.includes("leto izvedbe") || label === "leto") meta.year = value;
  });

  return meta;
}