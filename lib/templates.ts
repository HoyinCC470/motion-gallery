import raw from "@/data/templates.json";
import type { SourceId, Template } from "./types";
import { CATEGORIES, SOURCES } from "./types";

export const templates = raw as Template[];

export function getTemplateById(id: string): Template | undefined {
  return templates.find((t) => t.id === id);
}

export function getAllIds(): string[] {
  return templates.map((t) => t.id);
}

export function countBySource(): Record<SourceId, number> {
  const counts = { hyperframes: 0, shotcraft: 0, remocn: 0 } as Record<
    SourceId,
    number
  >;
  for (const t of templates) counts[t.source] += 1;
  return counts;
}

export function filterTemplates(opts: {
  q?: string;
  source?: string;
  category?: string;
}): Template[] {
  const q = (opts.q || "").trim().toLowerCase();
  const source = opts.source || "";
  const category = opts.category || "";
  return templates.filter((t) => {
    if (source && t.source !== source) return false;
    if (category && !t.categories.includes(category)) return false;
    if (!q) return true;
    const hay = [
      t.title,
      t.titleEn,
      t.description,
      t.id,
      ...t.tags,
      ...t.categories,
      t.source,
    ]
      .join(" ")
      .toLowerCase();
    return hay.includes(q);
  });
}

export { CATEGORIES, SOURCES };
