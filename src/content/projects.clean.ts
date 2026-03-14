import { projects } from "@/content/projects.generated";

export type CleanProject = {
  slug: string;
  title: string;
  excerpt?: string;
};

export const cleanProjects: CleanProject[] = projects.map((p) => ({
  slug: p.slug,
  title: p.title,
  excerpt: p.excerpt,
}));