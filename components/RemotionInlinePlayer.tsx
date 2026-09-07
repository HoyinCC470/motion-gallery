"use client";

import type { ComponentType } from "react";
import { Player } from "@remotion/player";
import { BlurOutUp } from "@/components/remocn/blur-out-up";
import { BottomUpLetters } from "@/components/remocn/bottom-up-letters";
import { FadeThrough } from "@/components/remocn/fade-through";

type Demo = {
  // Remotion Player accepts a component; props vary per demo.
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  component: ComponentType<any>;
  durationInFrames: number;
  inputProps: Record<string, unknown>;
};

const DEMOS: Record<string, Demo> = {
  "rm-fade-through": {
    component: FadeThrough,
    durationInFrames: 60,
    inputProps: {
      fromText: "Before",
      toText: "After",
      color: "#f4f4f5",
      fontSize: 64,
    },
  },
  "rm-blur-out-up": {
    component: BlurOutUp,
    durationInFrames: 90,
    inputProps: { text: "Motion Gallery", color: "#f4f4f5", fontSize: 56 },
  },
  "rm-bottom-up-letters": {
    component: BottomUpLetters,
    durationInFrames: 75,
    inputProps: { text: "Remocn", color: "#f4f4f5", fontSize: 64 },
  },
};

export function hasRemotionDemo(id: string) {
  return id in DEMOS;
}

export function RemotionInlinePlayer({
  id,
  autoPlay = true,
  loop = true,
  className = "",
}: {
  id: string;
  autoPlay?: boolean;
  loop?: boolean;
  className?: string;
}) {
  const demo = DEMOS[id];
  if (!demo) return null;
  return (
    <div className={`h-full w-full bg-[#0a0a10] ${className}`}>
      <Player
        component={demo.component}
        inputProps={demo.inputProps}
        durationInFrames={demo.durationInFrames}
        compositionWidth={1280}
        compositionHeight={720}
        fps={30}
        style={{ width: "100%", height: "100%" }}
        controls
        autoPlay={autoPlay}
        loop={loop}
        acknowledgeRemotionLicense
      />
    </div>
  );
}
