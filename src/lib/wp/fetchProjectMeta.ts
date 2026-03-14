import { parseWpMeta, type Meta } from "./parseWpMeta";

export async function fetchProjectMeta(url: string): Promise<Meta> {
  const res = await fetch(url, {
    headers: { "user-agent": "Mozilla/5.0" },
    cache: "no-store", // za debug, da ni cache zmede
    redirect: "follow",
  });

  if (!res.ok) {
    const text = await res.text().catch(() => "");
    throw new Error(
      `Fetch failed ${res.status} ${res.statusText} for ${url}\n` +
        `Body start: ${text.slice(0, 200)}`
    );
  }

  const html = await res.text();

  // če WP vrne neko "anti-bot" ali prazno
  if (!html || html.length < 200) {
    throw new Error(`Fetched HTML too short (${html.length}) for ${url}`);
  }

  const meta = parseWpMeta(html);
  return meta;
}