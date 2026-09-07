"use client";

import { AbsoluteFill } from "remotion";
import { linearTiming, TransitionSeries } from "@remotion/transitions";
import { ditherDissolve } from "@/components/remocn/dither-dissolve";
import { grainDissolve } from "@/components/remocn/grain-dissolve";
import { perlinDissolve } from "@/components/remocn/perlin-dissolve";
import { rippleZoom } from "@/components/remocn/ripple-zoom";
import { smokeDissolve } from "@/components/remocn/smoke-dissolve";
import { swirlDissolve } from "@/components/remocn/swirl-dissolve";
import { waveWipe } from "@/components/remocn/wave-wipe";
import {
  LENS_ZOOM_DURATION_IN_FRAMES,
  lensZoom,
} from "@/components/remocn/lens-zoom";

const FONT =
  "var(--font-geist-sans), -apple-system, BlinkMacSystemFont, sans-serif";

function Scene({
  label,
  background,
}: {
  label: string;
  background: string;
}) {
  return (
    <AbsoluteFill
      style={{
        background,
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <span
        style={{
          fontFamily: FONT,
          fontSize: 84,
          fontWeight: 600,
          letterSpacing: "-0.03em",
          color: "#f2f2f2",
        }}
      >
        {label}
      </span>
    </AbsoluteFill>
  );
}

function makeTransitionDemo(
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  presentation: any,
  transitionFrames: number,
) {
  return function TransitionDemo() {
    return (
      <TransitionSeries>
        <TransitionSeries.Sequence durationInFrames={70}>
          <Scene label="Scene A" background="#141318" />
        </TransitionSeries.Sequence>
        <TransitionSeries.Transition
          timing={linearTiming({ durationInFrames: transitionFrames })}
          presentation={presentation}
        />
        <TransitionSeries.Sequence durationInFrames={70}>
          <Scene label="Scene B" background="#1a1922" />
        </TransitionSeries.Sequence>
      </TransitionSeries>
    );
  };
}

export const DitherDissolveDemo = makeTransitionDemo(
  ditherDissolve({ shape: "simplex", colorBack: "#141318", colorFront: "#8f88ae", speed: 1.5 }),
  40,
);
export const GrainDissolveDemo = makeTransitionDemo(
  grainDissolve({ shape: "blob", noise: 0.3, zoom: 2, colorBack: "#141318" }),
  40,
);
export const PerlinDissolveDemo = makeTransitionDemo(
  perlinDissolve({ colorFront: "#8f88ae", colorBack: "#141318", softness: 0.1 }),
  40,
);
export const RippleZoomDemo = makeTransitionDemo(
  rippleZoom({ zoom: 4, intensity: 0.5, softness: 0.5, colorBack: "#141318" }),
  40,
);
export const SmokeDissolveDemo = makeTransitionDemo(
  smokeDissolve({ colors: ["#8f88ae"], colorBack: "#141318" }),
  40,
);
export const SwirlDissolveDemo = makeTransitionDemo(
  swirlDissolve({ bandCount: 10, softness: 0.35, colorBack: "#141318" }),
  40,
);
export const WaveWipeDemo = makeTransitionDemo(
  waveWipe({ intensity: 0.2, softness: 0.7, noise: 0.4, colorBack: "#141318" }),
  40,
);
export const LensZoomDemo = makeTransitionDemo(
  lensZoom({ lensSteps: 9, blurSamples: 7, shakeAmount: 50, shakeTranslatePx: 73 }),
  LENS_ZOOM_DURATION_IN_FRAMES,
);
