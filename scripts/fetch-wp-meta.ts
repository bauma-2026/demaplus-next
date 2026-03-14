import * as cheerio from "cheerio";

type Meta = {
  categories?: string[];
  client?: string;
  location?: string;
  workType?: string;
  year?: string;
};

function clean(s: string) {
  return s.replace(/\u00A0/g, " ").replace(/\s+/g, " ").trim();
}

function normLabel(s: string) {
  return clean(s)
    .toLowerCase()
    .replace(/:$/, "")
    .replace(/\s+/g, " ");
}

function splitCategories(value: string) {
  const items = value
    .split(/,|\n/g)
    .map((x) => clean(x))
    .filter(Boolean);

  // dedupe, ohrani vrstni red
  const seen = new Set<string>();
  const out: string[] = [];
  for (const it of items) {
    const k = it.toLowerCase();
    if (!seen.has(k)) {
      seen.add(k);
      out.push(it);
    }
  }
  return out;
}

function stripLeadingLabel(value: string, labelRaw: string) {
  // odstrani "Label: value" ali "Label value" iz začetka, če je noter
  const label = clean(labelRaw).replace(/:$/, "");
  if (!label) return value;

  const v = clean(value);

  // primeri:
  // "Leto izvedbe: 2021" -> "2021"
  // "Leto izvedbe 2021"  -> "2021"
  const re = new RegExp(`^${escapeRegExp(label)}\\s*:??\\s*`, "i");
  return clean(v.replace(re, ""));
}

function escapeRegExp(s: string) {
  return s.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}

function setMeta(meta: Meta, label: string, value: string) {
  if (!value || value === "—" || value === "-") return;

  if (label.includes("kategorija")) meta.categories = splitCategories(value);
  else if (label.includes("naročnik")) meta.client = value;
  else if (label.includes("lokacija")) meta.location = value;
  else if (label.includes("vrsta del")) meta.workType = value;
  else if (label.includes("leto izvedbe") || label === "leto") meta.year = value;
}

export function parseWpMeta(html: string): Meta {
  const $ = cheerio.load(html);
  const meta: Meta = {};

  const rows =
    $(".project-detail-container .project-detail-item").length
      ? $(".project-detail-container .project-detail-item")
      : $(".project-detail-item");

  if (rows.length) {
    rows.each((_, el) => {
      const $el = $(el);

      const labelRaw =
        $el.find(".project-detail-title").first().text() ||
        $el.find("h4").first().text() ||
        $el.find("strong").first().text();

      const label = normLabel(labelRaw);
      if (!label) return;

      // 1) value iz desc, če obstaja
      let valueRaw =
        $el.find(".project-detail-desc").first().text() ||
        "";

      // 2) če ni desc, vzemi tekst elementa brez “title”
      if (!valueRaw) {
        const clone = $el.clone();
        clone.find(".project-detail-title, h4, strong").first().remove();
        valueRaw = clone.text();
      }

      // 3) zadnji fallback: celoten tekst, ampak odstrani label iz začetka
      if (!valueRaw) valueRaw = $el.text();

      let value = clean(valueRaw);
      value = stripLeadingLabel(value, labelRaw);

      // še en “sanitize”: če value še vedno vsebuje label (rare), odstrani še enkrat
      if (value && labelRaw) value = stripLeadingLabel(value, labelRaw);

      setMeta(meta, label, value);
    });

    return meta;
  }

  // fallback: dl dt dd
  $("dl").each((_, dl) => {
    const dts = $(dl).find("dt");
    const dds = $(dl).find("dd");
    if (!dts.length || dts.length !== dds.length) return;

    dts.each((i, dt) => {
      const labelRaw = $(dt).text();
      const label = normLabel(labelRaw);
      const value = clean($(dds[i]).text());
      setMeta(meta, label, stripLeadingLabel(value, labelRaw));
    });
  });

  return meta;
}