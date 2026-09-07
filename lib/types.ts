export type SourceId = "hyperframes" | "shotcraft" | "remocn";

export type PreviewType = "video" | "image" | "external" | "link" | "remotion";

export interface Template {
  id: string;
  title: string;
  titleEn: string;
  source: SourceId;
  categories: string[];
  tags: string[];
  description: string;
  preview: { type: PreviewType; url: string };
  sourceRepo: string;
  sourceUrl: string;
  usage: string;
  attribution: string;
}

export const CATEGORIES = [
  "产品发布",
  "镜头运镜",
  "文字动效",
  "转场",
  "UI场景",
  "数据可视化",
  "音画卡点",
  "工作流集成",
  "背景与纹理",
] as const;

export const SOURCES: { id: SourceId; label: string; short: string }[] = [
  { id: "hyperframes", label: "HyperFrames", short: "HF" },
  { id: "shotcraft", label: "video-shotcraft", short: "SC" },
  { id: "remocn", label: "Remocn", short: "RM" },
];

export const SOURCE_COLORS: Record<SourceId, string> = {
  hyperframes: "bg-violet-500/20 text-violet-300 border-violet-500/40",
  shotcraft: "bg-amber-500/20 text-amber-300 border-amber-500/40",
  remocn: "bg-cyan-500/20 text-cyan-300 border-cyan-500/40",
};
