"use client";

import Link from "next/link";
import dynamic from "next/dynamic";
import { useCallback, useEffect, useRef, useState } from "react";
import type { Template } from "@/lib/types";
import { SourceBadge } from "./SourceBadge";

const RemotionInlinePlayer = dynamic(
  () =>
    import("./RemotionInlinePlayer").then((m) => m.RemotionInlinePlayer),
  { ssr: false },
);

function RemotionPlaceholder({
  title,
  hint = "悬停预览",
}: {
  title?: string;
  hint?: string;
}) {
  return (
    <div className="flex h-full w-full flex-col items-center justify-center gap-2 bg-gradient-to-br from-zinc-900 via-[#1a1030] to-cyan-950/40 p-4 text-center">
      <span className="text-3xl opacity-40">▸</span>
      {title ? (
        <span className="line-clamp-2 text-xs text-zinc-400">{title}</span>
      ) : null}
      <span className="rounded-md bg-white/5 px-2 py-0.5 text-[10px] text-zinc-400">
        {hint}
      </span>
    </div>
  );
}

/** Gallery-only: placeholder by default; mount at most one playing player on hover/focus. */
function RemotionCardPreview({ id, title }: { id: string; title: string }) {
  const rootRef = useRef<HTMLDivElement>(null);
  const [playing, setPlaying] = useState(false);

  // Warm JS chunks when the card nears the viewport — still only play on hover.
  useEffect(() => {
    const el = rootRef.current;
    if (!el) return;
    const io = new IntersectionObserver(
      (entries) => {
        if (!entries.some((e) => e.isIntersecting)) return;
        void import("./RemotionInlinePlayer");
        void import("./remocn-registry").then((m) => {
          const meta = m.REMOCN_DEMOS[id];
          if (meta) void meta.load();
        });
        io.disconnect();
      },
      { rootMargin: "120px" },
    );
    io.observe(el);
    return () => io.disconnect();
  }, [id]);

  const activate = useCallback(() => setPlaying(true), []);
  const deactivate = useCallback(() => setPlaying(false), []);

  return (
    <div
      ref={rootRef}
      className="relative h-full w-full"
      onMouseEnter={activate}
      onMouseLeave={deactivate}
      onFocus={activate}
      onBlur={deactivate}
    >
      {playing ? (
        <div className="pointer-events-none h-full w-full [&_button]:hidden">
          <RemotionInlinePlayer
            id={id}
            autoPlay
            loop
            controls={false}
          />
        </div>
      ) : (
        <RemotionPlaceholder title={title} />
      )}
    </div>
  );
}

export function TemplateCard({ template }: { template: Template }) {
  const isVideo = template.preview.type === "video";
  const isImage = template.preview.type === "image";
  const isRemotion = template.preview.type === "remotion";
  const hasMedia = isVideo || isImage || isRemotion;

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
            preload="none"
            className="h-full w-full object-cover opacity-90 transition group-hover:opacity-100"
            onMouseEnter={(e) => {
              void e.currentTarget.play().catch(() => {});
            }}
            onMouseLeave={(e) => {
              e.currentTarget.pause();
              e.currentTarget.currentTime = 0;
            }}
          />
        ) : isImage ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={template.preview.url}
            alt={template.title}
            className="h-full w-full object-cover opacity-90 transition group-hover:opacity-100 group-hover:scale-[1.02]"
            loading="lazy"
          />
        ) : isRemotion ? (
          <RemotionCardPreview id={template.id} title={template.title} />
        ) : (
          <div className="flex h-full w-full flex-col items-center justify-center gap-2 bg-gradient-to-br from-zinc-900 via-[#1a1030] to-zinc-950 p-4 text-center">
            <span className="text-3xl opacity-40">▸</span>
            <span className="line-clamp-2 text-xs text-zinc-400">
              {template.preview.type === "link" ||
              template.preview.type === "external"
                ? "暂无内嵌样片 · 见源码/文档"
                : template.titleEn}
            </span>
          </div>
        )}
        <div className="absolute left-2 top-2">
          <SourceBadge source={template.source} />
        </div>
        {!hasMedia && (
          <div className="absolute bottom-2 right-2 rounded-md bg-black/60 px-1.5 py-0.5 text-[10px] text-zinc-300">
            外部
          </div>
        )}
        {isRemotion && (
          <div className="absolute bottom-2 right-2 rounded-md bg-cyan-500/20 px-1.5 py-0.5 text-[10px] text-cyan-200">
            Remotion
          </div>
        )}
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
