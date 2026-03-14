import { news } from "./news";

export type Post = {
  slug: string;
  title: string;
  date: string;
  excerpt?: string;
  featuredImage?: string | null;
  contentHtml?: string;
};

export const posts: Post[] = news.map((item) => ({
  slug: item.slug,
  title: item.title,
  date: item.date ?? "",
  excerpt: item.excerpt,
  featuredImage: item.cover ?? null,
  contentHtml: item.contentHtml,
}));