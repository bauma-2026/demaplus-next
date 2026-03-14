// src/lib/decodeHtmlEntities.ts
export function decodeHtmlEntities(input?: string) {
  if (!input) return "";

  let s = input;

  // 1) unwrap multiple layers of &amp;
  for (let i = 0; i < 10; i++) {
    if (!s.includes("&amp;")) break;
    s = s.replace(/&amp;/g, "&");
  }

  // 2) numeric decimal entities: &#8211; OR &#8211 (no ;)
  s = s.replace(/&#(\d+);?/g, (_, dec) =>
    String.fromCharCode(parseInt(dec, 10))
  );

  // 3) numeric hex entities: &#x2013; OR &#x2013 (no ;)
  s = s.replace(/&#x([0-9a-fA-F]+);?/g, (_, hex) =>
    String.fromCharCode(parseInt(hex, 16))
  );

  // 4) common named leftovers
  s = s
    .replace(/&nbsp;|&#160;/g, " ")
    .replace(/&quot;/g, '"')
    .replace(/&apos;|&#039;/g, "'")
    .replace(/\s+/g, " ")
    .trim();

  return s;
}