"use client";

import type { Template } from "@/lib/types";
import { RemotionInlinePlayer } from "@/components/RemotionInlinePlayer";

export function DetailPreview({ template }: { template: Template }) {
  const { type, url } = template.preview;

  if (type === "remotion") {
    return (
      <div className="aspect-video w-full overflow-hidden bg-black">
        <RemotionInlinePlayer id={template.id} />
      </div>
    );
  }

  if (type === "video") {
    return (
      <video
        src={url}
        controls
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
        className="aspect-video w-full bg-black"
      />
    );
  }

  if (type === "image") {
    return (
      // eslint-disable-next-line @next/next/no-img-element
      <img
        src={url}
        alt={template.title}
        className="aspect-video w-full object-contain bg-black"
      />
    );
  }

  return (
    <div className="flex aspect-video flex-col items-center justify-center gap-4 bg-gradient-to-br from-zinc-900 to-[#1a1030] p-8 text-center">
      <p className="text-sm text-zinc-400">
        暂无内嵌样片（上游未提供可直接播放的预览文件）
      </p>
      <a
        href={url}
        target="_blank"
        rel="noreferrer"
        className="rounded-xl border border-white/15 bg-white/5 px-4 py-2 text-sm text-zinc-200 hover:bg-white/10"
      >
        打开外部预览 / 文档
      </a>
    </div>
  );
}
