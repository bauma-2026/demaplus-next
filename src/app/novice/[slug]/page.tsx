import { notFound, redirect } from "next/navigation";
import { news } from "@/content/news";

export const runtime = "nodejs";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export default async function NewsSlugRedirectPage({ params }: PageProps) {
  const { slug } = await params;

  const item = news.find((n) => n.slug === slug);
  if (!item) return notFound();

  redirect(`/${item.slug}`);
}