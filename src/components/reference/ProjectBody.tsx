import fs from "node:fs";
import path from "node:path";
import { rewriteWpImages } from "@/lib/rewriteWpImages";

type Props = {
  html: string;
};

// --- load image map once (server side) ---
const MAP_PATH = path.join(process.cwd(), "reference-image-map.json");

let imageMap: Record<string, string> = {};

try {
  if (fs.existsSync(MAP_PATH)) {
    imageMap = JSON.parse(fs.readFileSync(MAP_PATH, "utf8"));
  }
} catch {
  imageMap = {};
}

// --- normalize WP <br> mess ---
function normalizeWpBreaks(html: string) {
  let x = html.trim();

  // unify <br> variants
  x = x.replace(/<br\s*\/?>/gi, "<br>");

  // if there are no paragraphs at all, wrap once
  const hasP = /<p[\s>]/i.test(x);
  if (!hasP) {
    x = `<p>${x}</p>`;
  }

  // treat EVERY <br> as paragraph break
  x = x.replace(/<br>\s*/gi, "</p><p>");

  // remove empty paragraphs
  x = x.replace(/<p>\s*<\/p>/gi, "");

  // remove duplicated boundaries
  x = x.replace(/<\/p>\s*<p>\s*<\/p>\s*<p>/gi, "</p><p>");

  return x;
}

export default function ProjectBody({ html }: Props) {
  const hasHtml = (html ?? "").trim().length > 0;
  if (!hasHtml) return null;

  // 1️⃣ rewrite WP image URLs → local /reference/...
  const rewritten = rewriteWpImages(html, imageMap);

  // 2️⃣ normalize WP line breaks
  const safeHtml = normalizeWpBreaks(rewritten ?? "");

  return (
 <article
  className="
    prose prose-neutral
    max-w-none
    prose-p:leading-relaxed
    prose-headings:tracking-tight
    prose-headings:scroll-mt-24
    [&_p]:mt-6
    [&_p]:mb-0
    [&_ul]:list-disc
    [&_ul]:pl-5
    [&_ul]:mt-4
    [&_ul]:mb-4
    [&_li]:mt-1
  "
  dangerouslySetInnerHTML={{ __html: safeHtml }}
/>
  );
}