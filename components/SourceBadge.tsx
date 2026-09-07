import { SOURCE_COLORS, SOURCES, type SourceId } from "@/lib/types";

export function SourceBadge({ source }: { source: SourceId }) {
  const meta = SOURCES.find((s) => s.id === source);
  return (
    <span
      className={`inline-flex items-center rounded-full border px-2 py-0.5 text-[11px] font-medium ${SOURCE_COLORS[source]}`}
    >
      {meta?.label ?? source}
    </span>
  );
}
