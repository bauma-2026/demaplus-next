import type { Project as GeneratedProject } from "./projects.generated";
import { projects as generated } from "./projects.generated";

export type Project = GeneratedProject & {
  year?: number;
  location?: string;
  category?: string;
};

function yearFromDate(date?: string) {
  if (!date) return undefined;
  const d = new Date(date);
  return Number.isNaN(d.getTime()) ? undefined : d.getFullYear();
}

// Enoten vir za UI
export const projects: Project[] = generated.map((p) => ({
  ...p,
  year: yearFromDate(p.date),
  // TODO: če imaš te podatke iz WP custom fields, jih kasneje mapiramo sem
  location: undefined,
  category: undefined,
}));
