import { projects as generatedProjects } from "./projects.generated";
import type { Project as GeneratedProject } from "./projects.generated";

export type Project = GeneratedProject & {
  year?: number;
  location?: string;
  category?: string;
};

function yearFromDate(date?: string): number | undefined {
  if (!date) return undefined;
  const d = new Date(date);
  return Number.isNaN(d.getTime()) ? undefined : d.getFullYear();
}

export const projects: Project[] = generatedProjects.map((p) => ({
  ...p,
  // OPTIONAL: če imaš date, dobiš year
  year: yearFromDate(p.date),
  // location/category trenutno nimaš v generated → ostaneta undefined (ampak page ne bo več “crashal”)
  location: undefined,
  category: undefined,
}));
