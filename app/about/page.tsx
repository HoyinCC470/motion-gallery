import Link from "next/link";
import { countBySource } from "@/lib/templates";

export default function AboutPage() {
  const counts = countBySource();

  return (
    <div className="prose prose-invert max-w-3xl space-y-8 prose-a:text-violet-300">
      <div>
        <h1 className="text-3xl font-bold text-white">致谢与许可</h1>
        <p className="mt-3 text-zinc-400">
          本 Gallery 是元数据聚合与浏览站点。条目数量：HyperFrames {counts.hyperframes} ·
          shotcraft {counts.shotcraft} · remocn {counts.remocn}。
        </p>
      </div>

      <section className="space-y-3 rounded-2xl border border-white/10 bg-[#12121a] p-6">
        <h2 className="text-lg font-semibold text-white">1. HyperFrames Launches</h2>
        <p className="text-sm text-zinc-400">
          来源：{" "}
          <a href="https://github.com/heygen-com/hyperframes-launches" target="_blank" rel="noreferrer">
            heygen-com/hyperframes-launches
          </a>
          ；示例页{" "}
          <a href="https://hyperframes.heygen.com/examples" target="_blank" rel="noreferrer">
            hyperframes.heygen.com/examples
          </a>
          。
        </p>
        <p className="text-sm text-zinc-400">
          原始构图源码、配置与文档由 HeyGen 创作，请遵循仓库 LICENSE / NOTICE。捆绑的视频、音频、图片、字体等素材可能有额外限制，再分发前务必阅读原仓库说明。
        </p>
      </section>

      <section className="space-y-3 rounded-2xl border border-white/10 bg-[#12121a] p-6">
        <h2 className="text-lg font-semibold text-white">2. video-shotcraft</h2>
        <p className="text-sm text-zinc-400">
          来源：{" "}
          <a href="https://github.com/Vincentwei1021/video-shotcraft" target="_blank" rel="noreferrer">
            Vincentwei1021/video-shotcraft
          </a>
          ；在线 Gallery{" "}
          <a href="https://vincentwei1021.github.io/video-shotcraft/" target="_blank" rel="noreferrer">
            vincentwei1021.github.io/video-shotcraft
          </a>
          。
        </p>
        <p className="text-sm text-zinc-400">
          镜头配方卡与样片归属原作者，请遵循其 LICENSE。本站通过公开 gallery API /
          raw 元数据导入卡片信息，样片预览链回其公开媒体或 Gallery。
        </p>
      </section>

      <section className="space-y-3 rounded-2xl border border-white/10 bg-[#12121a] p-6">
        <h2 className="text-lg font-semibold text-white">3. Remocn</h2>
        <p className="text-sm text-zinc-400">
          来源：{" "}
          <a href="https://github.com/Remocn/remocn" target="_blank" rel="noreferrer">
            Remocn/remocn
          </a>
          ；站点{" "}
          <a href="https://remocn.dev" target="_blank" rel="noreferrer">
            remocn.dev
          </a>
          。组件为 MIT。本站已将目录中的 Remocn 组件源码 vendored 到{" "}
          <code className="rounded bg-black/50 px-1 text-violet-200">components/remocn/</code>
          ，并在卡片/详情页用 @remotion/player 内嵌预览；文档与{" "}
          <code className="rounded bg-black/50 px-1 text-violet-200">
            npx shadcn@latest add @remocn/&lt;name&gt;
          </code>{" "}
          仍可作为二级入口。详见{" "}
          <code className="rounded bg-black/50 px-1 text-violet-200">NOTICE-REMOCN.md</code>。
        </p>
        <p className="text-sm text-amber-200/90">
          <strong>Remotion 许可提示：</strong> Remocn 组件基于{" "}
          <a href="https://www.remotion.dev" target="_blank" rel="noreferrer">
            Remotion
          </a>
          。Remotion 本身有独立许可（个人/小团队免费，达到规模后需公司许可）。商用前请阅读{" "}
          <a href="https://www.remotion.dev/docs/license" target="_blank" rel="noreferrer">
            Remotion License
          </a>
          。
        </p>
      </section>

      <section className="space-y-3 text-sm text-zinc-400">
        <h2 className="text-lg font-semibold text-white">本站说明</h2>
        <ul className="list-disc space-y-1 pl-5">
          <li>未 git-clone 上游完整仓库；元数据来自 GitHub API / raw / 公开 Gallery。</li>
          <li>不是 HyperFrames 或 Remotion 运行时的再实现，仅目录 + 预览链接。</li>
          <li>
            每张卡片均展示 <code className="text-violet-200">attribution</code> 字段。
          </li>
        </ul>
        <p>
          <Link href="/gallery/">返回图库 →</Link>
        </p>
      </section>
    </div>
  );
}
