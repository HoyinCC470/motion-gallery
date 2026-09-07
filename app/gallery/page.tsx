import { Suspense } from "react";
import { GalleryFilters } from "@/components/GalleryFilters";
import { templates } from "@/lib/templates";

export default function GalleryPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">图库</h1>
        <p className="mt-2 text-sm text-zinc-400">
          按来源（hyperframes / shotcraft / remocn）与九大分类筛选。每张卡片含署名与原文链接。
        </p>
      </div>
      <Suspense fallback={<p className="text-sm text-zinc-500">加载筛选器…</p>}>
        <GalleryFilters templates={templates} />
      </Suspense>
    </div>
  );
}
