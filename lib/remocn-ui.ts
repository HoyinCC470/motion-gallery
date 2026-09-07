"use client";

import { useCurrentFrame, useVideoConfig } from "remotion";

export function revealCount(
  localFrame: number,
  fps: number,
  len: number,
  cps: number,
): number {
  const over = (len / cps) * fps;
  if (over <= 0) return len;
  return Math.max(0, Math.min(len, Math.floor((localFrame / over) * len)));
}

export function revealedText(full: string, count: number): string {
  const c = Math.max(0, Math.min(full.length, Math.floor(count)));
  return full.slice(0, c);
}

export interface TypewriterOptions {
  cps?: number;
  speed?: number;
  startFrame?: number;
}

export interface TypewriterState {
  text: string;
  count: number;
  done: boolean;
  typing: boolean;
}

/** Deterministic typewriter helper from Remocn/remocn (MIT). */
export function useTypewriter(
  full: string,
  options: TypewriterOptions = {},
): TypewriterState {
  const { cps = 20, speed = 1, startFrame = 0 } = options;
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();
  const local = frame * speed - startFrame;
  const count = local <= 0 ? 0 : revealCount(local, fps, full.length, cps);
  return {
    text: revealedText(full, count),
    count,
    done: count >= full.length,
    typing: count > 0 && count < full.length,
  };
}
