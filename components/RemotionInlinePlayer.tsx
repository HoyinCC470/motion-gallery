"use client";

import {
  useEffect,
  useState,
  type ComponentType,
} from "react";
import { AbsoluteFill } from "remotion";
import { Player } from "@remotion/player";
import { REMOCN_DEMOS, hasRemotionDemo } from "@/components/remocn-registry";

export { hasRemotionDemo };

function withBackdrop(
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  Comp: ComponentType<any>,
  backdrop: string,
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
): ComponentType<any> {
  function Wrapped(props: Record<string, unknown>) {
    return (
      <AbsoluteFill style={{ background: backdrop }}>
        <Comp {...props} />
      </AbsoluteFill>
    );
  }
  Wrapped.displayName = `Backdrop(${Comp.displayName || Comp.name || "Comp"})`;
  return Wrapped;
}

export function RemotionInlinePlayer({
  id,
  autoPlay = true,
  loop = true,
  controls = true,
  className = "",
}: {
  id: string;
  autoPlay?: boolean;
  loop?: boolean;
  controls?: boolean;
  className?: string;
}) {
  const meta = REMOCN_DEMOS[id];
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [Comp, setComp] = useState<ComponentType<any> | null>(null);
  const [durationInFrames, setDurationInFrames] = useState<number | null>(
    null,
  );
  const [failed, setFailed] = useState(false);

  useEffect(() => {
    if (!meta) return;
    let cancelled = false;
    setComp(null);
    setDurationInFrames(null);
    setFailed(false);

    (async () => {
      try {
        const [loaded, duration] = await Promise.all([
          meta.load(),
          typeof meta.durationInFrames === "function"
            ? meta.durationInFrames()
            : Promise.resolve(meta.durationInFrames),
        ]);
        if (cancelled) return;
        const resolved = meta.backdrop
          ? withBackdrop(loaded, meta.backdrop)
          : loaded;
        // Functional update so React does not treat the component as a reducer.
        setComp(() => resolved);
        setDurationInFrames(duration);
      } catch {
        if (!cancelled) setFailed(true);
      }
    })();

    return () => {
      cancelled = true;
    };
  }, [id, meta]);

  if (!meta || failed) return null;

  if (!Comp || durationInFrames == null) {
    return (
      <div
        className={`flex h-full w-full items-center justify-center bg-[#0a0a10] ${className}`}
      >
        <span className="text-[10px] text-zinc-500">加载预览…</span>
      </div>
    );
  }

  return (
    <div className={`h-full w-full bg-[#0a0a10] ${className}`}>
      <Player
        component={Comp}
        inputProps={meta.inputProps}
        durationInFrames={durationInFrames}
        compositionWidth={1280}
        compositionHeight={720}
        fps={30}
        style={{ width: "100%", height: "100%" }}
        controls={controls}
        autoPlay={autoPlay}
        loop={loop}
        acknowledgeRemotionLicense
      />
    </div>
  );
}
