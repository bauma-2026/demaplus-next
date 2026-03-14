export function decodeHtmlEntities(s?: string) {
  if (!s) return s;
  return s
    .replace(/&#8220;|&ldquo;/g, "“")
    .replace(/&#8221;|&rdquo;/g, "”")
    .replace(/&#8216;|&lsquo;/g, "‘")
    .replace(/&#8217;|&rsquo;/g, "’")
    .replace(/&#8211;|&ndash;/g, "–")
    .replace(/&#8212;|&mdash;/g, "—")
    .replace(/&#8230;|&hellip;/g, "…")
    .replace(/&nbsp;|&#160;/g, " ")
    .replace(/&amp;/g, "&")
    .replace(/&quot;/g, '"')
    .replace(/&#039;|&apos;/g, "'")
    .replace(/<br\s*\/?>/gi, "\n");
}

function stripHtml(html: string) {
  return html.replace(/<[^>]*>/g, " ");
}

export function cleanNewsExcerpt(input?: string) {
  if (!input) return "";

  let x = decodeHtmlEntities(input) ?? "";
  x = stripHtml(x);

  x = x.replace(/Continue reading.*$/i, "");

  // odstrani WP meta vrstice
  x = x.replace(
    /\b(Kategorija|Naročnik|Lokacija izvedbe|Leto izvedbe|Vrsta del)\s*:\s*.*$/gim,
    ""
  );

  x = x.replace(/^\s*\d+\s+Opis\s*/i, "");
  x = x.replace(/\u00A0/g, " ").replace(/\s+/g, " ").trim();

  if (x.length > 220) x = x.slice(0, 217).trim() + "…";
  return x;
}