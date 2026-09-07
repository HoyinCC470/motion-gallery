"use client";

import Link from "next/link";
import type { Template } from "@/lib/types";
import { SourceBadge } from "./SourceBadge";

export function TemplateCard({ template }: { template: Template }) {
  const isVideo = template.preview.type === "video";
  return (
    <Link
      href={`/gallery/${template.id}/`}
      className="card-glow group flex flex-col overflow-hidden rounded-2xl border border-white/10 bg-[#12121a]/90 transition hover:border-violet-400/40"
    >
      <div className="relative aspect-video overflow-hidden bg-zinc-900">
        {isVideo ? (
          <video
            src={template.preview.url}
            muted
            loop
            playsInline
            preload="metadata"
            className="h-full w-full object-cover opacity-90 transition group-hover:opacity-100"
            onMouseEnter={(e) => {
              void e.currentTarget.play().catch(() => {});
            }}
            onMouseLeave={(e) => {
              e.currentTarget.pause();
              e.currentTarget.currentTime = 0;
            }}
          />
        ) : (
          <div className="flex h-full w-full flex-col items-center justify-center gap-2 bg-gradient-to-br from-zinc-900 via-[#1a1030] to-zinc-950 p-4 text-center">
            <span className="text-3xl opacity-40">▸</span>
            <span className="line-clamp-2 text-xs text-zinc-400">
              {template.preview.type === "link" || template.preview.type === "external"
                ? "外部预览 / 源码"
                : template.titleEn}
            </span>
          </div>
        )}
        <div className="absolute left-2 top-2">
          <SourceBadge source={template.source} />
        </div>
      </div>
      <div className="flex flex-1 flex-col gap-2 p-4">
        <h3 className="line-clamp-1 text-sm font-semibold text-zinc-100 group-hover:text-violet-200">
          {template.title}
        </h3>
        {template.titleEn !== template.title && (
          <p className="line-clamp-1 text-xs text-zinc-500">{template.titleEn}</p>
        )}
        <p className="line-clamp-2 flex-1 text-xs leading-relaxed text-zinc-400">
          {template.description}
        </p>
        <div className="flex flex-wrap gap-1 pt-1">
          {template.categories.slice(0, 2).map((c) => (
            <span
              key={c}
              className="rounded-md bg-white/5 px-1.5 py-0.5 text-[10px] text-zinc-400"
            >
              {c}
            </span>
          ))}
        </div>
        <p className="truncate text-[10px] text-zinc-600" title={template.attribution}>
          {template.attribution}
        </p>
      </div>
    </Link>
  );
}
