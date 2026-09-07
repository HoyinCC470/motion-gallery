import type { Metadata } from "next";
import Link from "next/link";
import "./globals.css";

export const metadata: Metadata = {
  title: "动效模板 Gallery | Motion Gallery",
  description:
    "中文优先的动效模板库：聚合 HyperFrames 发布片、video-shotcraft 镜头配方卡与 Remocn Remotion 组件。",
};

const nav = [
  { href: "/", label: "首页" },
  { href: "/gallery/", label: "图库" },
  { href: "/about/", label: "致谢" },
];

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="zh-CN">
      <body className="antialiased">
        <header className="sticky top-0 z-40 border-b border-white/10 bg-[#07070c]/80 backdrop-blur-md">
          <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-3">
            <Link href="/" className="group flex items-center gap-2 font-semibold tracking-tight">
              <span className="inline-flex h-8 w-8 items-center justify-center rounded-lg bg-violet-500/20 text-sm text-violet-300 ring-1 ring-violet-400/40">
                动
              </span>
              <span>
                动效 Gallery
                <span className="ml-2 hidden text-xs font-normal text-zinc-500 sm:inline">
                  Motion Templates
                </span>
              </span>
            </Link>
            <nav className="flex items-center gap-1 text-sm">
              {nav.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="rounded-md px-3 py-1.5 text-zinc-300 transition hover:bg-white/5 hover:text-white"
                >
                  {item.label}
                </Link>
              ))}
            </nav>
          </div>
        </header>
        <main className="mx-auto max-w-6xl px-4 py-8">{children}</main>
        <footer className="mx-auto max-w-6xl border-t border-white/10 px-4 py-8 text-sm text-zinc-500">
          <p>
            本站为聚合目录与预览索引，不重新实现 Remotion / HyperFrames 运行时。
            所有条目保留原作者署名与许可。详见{" "}
            <Link href="/about/" className="text-violet-300 hover:underline">
              致谢
            </Link>
            。
          </p>
        </footer>
      </body>
    </html>
  );
}
