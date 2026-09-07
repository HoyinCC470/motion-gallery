import Link from "next/link";
import { notFound } from "next/navigation";
import { DetailPreview } from "@/components/DetailPreview";
import { SourceBadge } from "@/components/SourceBadge";
import { getAllIds, getTemplateById } from "@/lib/templates";

export function generateStaticParams() {
  return getAllIds().map((id) => ({ id }));
}

export default async function DetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const t = getTemplateById(id);
  if (!t) notFound();

  const hasMedia = t.preview.type === "video" || t.preview.type === "image" || t.preview.type === "remotion";

  return (
    <div className="space-y-8">
      <Link href="/gallery/" className="text-sm text-violet-300 hover:underline">
        ← 返回图库
      </Link>

      <div className="grid gap-8 lg:grid-cols-5">
        <div className="space-y-4 lg:col-span-3">
          <div className="overflow-hidden rounded-2xl border border-white/10 bg-black">
            <DetailPreview template={t} />
          </div>
          <p className="text-xs leading-relaxed text-zinc-500">{t.attribution}</p>
        </div>

        <div className="space-y-5 lg:col-span-2">
          <div className="space-y-2">
            <SourceBadge source={t.source} />
            <h1 className="text-2xl font-bold text-white">{t.title}</h1>
            {t.titleEn !== t.title && (
              <p className="text-sm text-zinc-400">{t.titleEn}</p>
            )}
          </div>

          <p className="text-sm leading-relaxed text-zinc-300">{t.description}</p>

          <div>
            <h2 className="text-xs font-medium uppercase tracking-wider text-zinc-500">
              分类
            </h2>
            <div className="mt-2 flex flex-wrap gap-1.5">
              {t.categories.map((c) => (
                <span
                  key={c}
                  className="rounded-md bg-white/5 px-2 py-1 text-xs text-zinc-300"
                >
                  {c}
                </span>
              ))}
            </div>
          </div>

          <div>
            <h2 className="text-xs font-medium uppercase tracking-wider text-zinc-500">
              标签
            </h2>
            <div className="mt-2 flex flex-wrap gap-1.5">
              {t.tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-md border border-white/10 px-2 py-0.5 text-[11px] text-zinc-400"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          <div className="rounded-xl border border-white/10 bg-[#12121a] p-4">
            <h2 className="text-xs font-medium uppercase tracking-wider text-zinc-500">
              用法
            </h2>
            <pre className="mt-2 overflow-x-auto whitespace-pre-wrap break-all rounded-lg bg-black/50 p-3 font-mono text-xs text-violet-200">
              {t.usage}
            </pre>
          </div>

          <div className="flex flex-col gap-2 text-sm">
            <a
              href={t.sourceUrl}
              target="_blank"
              rel="noreferrer"
              className="text-violet-300 hover:underline"
            >
              源码 / 文档 →
            </a>
            <a
              href={t.sourceRepo}
              target="_blank"
              rel="noreferrer"
              className="text-zinc-400 hover:underline"
            >
              源仓库 →
            </a>
            {!hasMedia && (t.preview.type === "external" || t.preview.type === "link") && (
              <a
                href={t.preview.url}
                target="_blank"
                rel="noreferrer"
                className="text-zinc-400 hover:underline"
              >
                外部预览 →
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
