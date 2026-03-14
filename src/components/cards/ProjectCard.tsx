import Link from "next/link";
import type { Project } from "@/content/projects";
import { decodeHtmlEntities } from "@/lib/decodeHtmlEntities";

export default function ProjectCard({ project }: { project: Project }) {
  const title = decodeHtmlEntities(project.title);
  const excerpt = decodeHtmlEntities(project.excerpt);
  const category = decodeHtmlEntities(project.category);

  return (
    <Link
      href={`/reference/${project.slug}`}
      className="group block rounded-2xl border border-neutral-200 bg-white p-5 transition-all duration-300 hover:border-neutral-300 hover:bg-neutral-50"
    >
      <div className="text-lg font-semibold tracking-tight text-neutral-900 transition-colors duration-300 group-hover:text-neutral-700">
        {title}
      </div>

      <div className="mt-2 flex flex-wrap gap-x-4 gap-y-1 text-sm text-neutral-600">
        {project.year ? <span>{project.year}</span> : null}
        {project.location ? <span>{project.location}</span> : null}
        {category ? <span>{category}</span> : null}
      </div>

      {excerpt ? (
        <p className="mt-3 leading-relaxed text-neutral-600 transition-colors duration-300 group-hover:text-neutral-700 text-sm">
          {excerpt}
        </p>
      ) : null}

      <div className="mt-4 text-sm text-neutral-500 transition-colors duration-300 group-hover:text-neutral-900">
        <span className="inline-flex items-center gap-1">
          Poglej projekt
          <span
            aria-hidden
            className="transition-transform duration-300 ease-out group-hover:translate-x-1"
          >
            →
          </span>
        </span>
      </div>
    </Link>
  );
}