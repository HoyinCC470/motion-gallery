import Link from "next/link";
import { TemplateCard } from "@/components/TemplateCard";
import { countBySource, templates } from "@/lib/templates";
import { CATEGORIES, SOURCES } from "@/lib/types";

export default function HomePage() {
  const counts = countBySource();
  const featured = [
    ...templates.filter((t) => t.source === "hyperframes").slice(0, 3),
    ...templates.filter((t) => t.source === "shotcraft").slice(0, 3),
    ...templates.filter((t) => t.source === "remocn").slice(0, 3),
  ];

  return (
    <div className="space-y-14">
      <section className="space-y-6 pt-4">
        <p className="text-sm font-medium text-violet-300">中文优先 · 动效模板目录</p>
        <h1 className="max-w-3xl text-4xl font-bold tracking-tight text-white sm:text-5xl">
          浏览、筛选、引用三家开源动效库
        </h1>
        <p className="max-w-2xl text-base leading-relaxed text-zinc-400">
          聚合{" "}
          <a className="text-violet-300 hover:underline" href="https://github.com/heygen-com/hyperframes-launches" target="_blank" rel="noreferrer">
            HyperFrames 发布片
          </a>
          、{" "}
          <a className="text-amber-300 hover:underline" href="https://vincentwei1021.github.io/video-shotcraft/" target="_blank" rel="noreferrer">
            video-shotcraft 镜头配方
          </a>
          、{" "}
          <a className="text-cyan-300 hover:underline" href="https://remocn.dev" target="_blank" rel="noreferrer">
            Remocn Remotion 组件
          </a>
          。本站提供分类浏览与署名索引，不内嵌完整运行时。
        </p>
        <div className="flex flex-wrap gap-3">
          <Link
            href="/gallery/"
            className="rounded-xl bg-violet-500 px-5 py-2.5 text-sm font-medium text-white shadow-lg shadow-violet-500/25 transition hover:bg-violet-400"
          >
            进入图库
          </Link>
          <Link
            href="/about/"
            className="rounded-xl border border-white/15 bg-white/5 px-5 py-2.5 text-sm text-zinc-200 transition hover:bg-white/10"
          >
            许可与致谢
          </Link>
        </div>
      </section>

      <section className="grid gap-4 sm:grid-cols-3">
        {SOURCES.map((s) => (
          <Link
            key={s.id}
            href={`/gallery/?source=${s.id}`}
            className="rounded-2xl border border-white/10 bg-[#12121a]/80 p-5 transition hover:border-violet-400/40"
          >
            <p className="text-xs uppercase tracking-wider text-zinc-500">{s.label}</p>
            <p className="mt-2 text-3xl font-bold text-white">{counts[s.id]}</p>
            <p className="mt-1 text-sm text-zinc-400">条模板 / 组件</p>
          </Link>
        ))}
      </section>

      <section className="space-y-4">
        <div className="flex items-end justify-between gap-4">
          <h2 className="text-xl font-semibold">分类</h2>
          <Link href="/gallery/" className="text-sm text-violet-300 hover:underline">
            全部 →
          </Link>
        </div>
        <div className="flex flex-wrap gap-2">
          {CATEGORIES.map((c) => (
            <Link
              key={c}
              href={`/gallery/?category=${encodeURIComponent(c)}`}
              className="rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-sm text-zinc-300 transition hover:border-violet-400/40 hover:text-white"
            >
              {c}
            </Link>
          ))}
        </div>
      </section>

      <section className="space-y-4">
        <h2 className="text-xl font-semibold">精选预览</h2>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {featured.map((t) => (
            <TemplateCard key={t.id} template={t} />
          ))}
        </div>
      </section>
    </div>
  );
}
