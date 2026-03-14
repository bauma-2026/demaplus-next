import Link from "next/link";
import type { Post } from "@/content/posts";

export default function PostCard({ post }: { post: Post }) {
  return (
    <Link
      href={`/${post.slug}`}
      className="block rounded-2xl border p-5 hover:bg-neutral-50 transition"
    >
      <div className="text-lg font-semibold tracking-tight">{post.title}</div>
      <div className="mt-2 text-sm text-neutral-600">
        {new Date(post.date).toLocaleDateString("sl-SI")}
      </div>
      {post.excerpt ? (
        <p className="mt-3 text-sm text-neutral-600">{post.excerpt}</p>
      ) : null}
    </Link>
  );
}
