"use client";

import { useMemo, useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import type { Template } from "@/lib/types";
import { CATEGORIES, SOURCES } from "@/lib/types";
import { TemplateCard } from "./TemplateCard";

export function GalleryFilters({ templates }: { templates: Template[] }) {
  const searchParams = useSearchParams();
  const [q, setQ] = useState("");
  const [source, setSource] = useState("");
  const [category, setCategory] = useState("");

  useEffect(() => {
    setSource(searchParams.get("source") || "");
    setCategory(searchParams.get("category") || "");
    setQ(searchParams.get("q") || "");
  }, [searchParams]);

  const filtered = useMemo(() => {
    const query = q.trim().toLowerCase();
    return templates.filter((t) => {
      if (source && t.source !== source) return false;
      if (category && !t.categories.includes(category)) return false;
      if (!query) return true;
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
      return hay.includes(query);
    });
  }, [templates, q, source, category]);

  return (
    <div className="space-y-6">
      <div className="flex flex-col gap-3 rounded-2xl border border-white/10 bg-[#12121a]/80 p-4 sm:flex-row sm:items-center">
        <input
          type="search"
          value={q}
          onChange={(e) => setQ(e.target.value)}
          placeholder="搜索标题、标签、描述…"
          className="w-full flex-1 rounded-xl border border-white/10 bg-black/40 px-3 py-2 text-sm text-zinc-100 outline-none ring-violet-500/40 placeholder:text-zinc-600 focus:ring-2"
        />
        <select
          value={source}
          onChange={(e) => setSource(e.target.value)}
          className="rounded-xl border border-white/10 bg-black/40 px-3 py-2 text-sm text-zinc-200 outline-none focus:ring-2 focus:ring-violet-500/40"
        >
          <option value="">全部来源</option>
          {SOURCES.map((s) => (
            <option key={s.id} value={s.id}>
              {s.label}
            </option>
          ))}
        </select>
        <select
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          className="rounded-xl border border-white/10 bg-black/40 px-3 py-2 text-sm text-zinc-200 outline-none focus:ring-2 focus:ring-violet-500/40"
        >
          <option value="">全部分类</option>
          {CATEGORIES.map((c) => (
            <option key={c} value={c}>
              {c}
            </option>
          ))}
        </select>
      </div>

      <div className="flex flex-wrap gap-2">
        {CATEGORIES.map((c) => (
          <button
            key={c}
            type="button"
            onClick={() => setCategory(category === c ? "" : c)}
            className={`rounded-full border px-3 py-1 text-xs transition ${
              category === c
                ? "border-violet-400/60 bg-violet-500/20 text-violet-200"
                : "border-white/10 bg-white/5 text-zinc-400 hover:border-white/20 hover:text-zinc-200"
            }`}
          >
            {c}
          </button>
        ))}
      </div>

      <p className="text-sm text-zinc-500">
        共 <span className="text-zinc-200">{filtered.length}</span> 条
        {q || source || category ? "（已筛选）" : ""}
      </p>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {filtered.map((t) => (
          <TemplateCard key={t.id} template={t} />
        ))}
      </div>

      {filtered.length === 0 && (
        <p className="rounded-xl border border-dashed border-white/10 p-10 text-center text-sm text-zinc-500">
          没有匹配的模板，试试清空筛选条件。
        </p>
      )}
    </div>
  );
}
