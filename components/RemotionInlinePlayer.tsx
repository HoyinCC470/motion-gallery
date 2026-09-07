"use client";

import type { ComponentType } from "react";
import { AbsoluteFill } from "remotion";
import { Player } from "@remotion/player";
import { rushTypeLength } from "@/components/remocn/rush-type";
import {
  DitherDissolveDemo,
  GrainDissolveDemo,
  PerlinDissolveDemo,
  RippleZoomDemo,
  SmokeDissolveDemo,
  SwirlDissolveDemo,
  WaveWipeDemo,
  LensZoomDemo,
} from "@/components/remocn/transition-demos";
import { BlurOutUp } from "@/components/remocn/blur-out-up";
import { BottomUpLetters } from "@/components/remocn/bottom-up-letters";
import { CaretSwap } from "@/components/remocn/caret-swap";
import { CenteredWordBuild } from "@/components/remocn/centered-word-build";
import { ExtrudePop } from "@/components/remocn/extrude-pop";
import { FadeThrough } from "@/components/remocn/fade-through";
import { FocusBlurResolve } from "@/components/remocn/focus-blur-resolve";
import { FogRise } from "@/components/remocn/fog-rise";
import { GooeyMorph } from "@/components/remocn/gooey-morph";
import { GradientScaleCutText } from "@/components/remocn/gradient-scale-cut-text";
import { InfiniteMarquee } from "@/components/remocn/infinite-marquee";
import { InlineHighlight } from "@/components/remocn/inline-highlight";
import { InlinePillTakeover } from "@/components/remocn/inline-pill-takeover";
import { KineticCenterBuild } from "@/components/remocn/kinetic-center-build";
import { KineticWarp } from "@/components/remocn/kinetic-warp";
import { LineByLineSlide } from "@/components/remocn/line-by-line-slide";
import { MarkerHighlight } from "@/components/remocn/marker-highlight";
import { MaskRevealUp } from "@/components/remocn/mask-reveal-up";
import { MatrixDecode } from "@/components/remocn/matrix-decode";
import { MicroScaleFade } from "@/components/remocn/micro-scale-fade";
import { OutlineFillTrackText } from "@/components/remocn/outline-fill-track-text";
import { PerCharacterRise } from "@/components/remocn/per-character-rise";
import { PerWordCrossfade } from "@/components/remocn/per-word-crossfade";
import { RGBGlitchText } from "@/components/remocn/rgb-glitch-text";
import { RushType } from "@/components/remocn/rush-type";
import { ScaleDownFade } from "@/components/remocn/scale-down-fade";
import { ShaderGrainGradient } from "@/components/remocn/shader-grain-gradient";
import { ShaderMeshGradient } from "@/components/remocn/shader-mesh-gradient";
import { ShaderSwirl } from "@/components/remocn/shader-swirl";
import { ShaderWarp } from "@/components/remocn/shader-warp";
import { ShadowSweepText } from "@/components/remocn/shadow-sweep-text";
import { SharedAxisY } from "@/components/remocn/shared-axis-y";
import { SharedAxisZ } from "@/components/remocn/shared-axis-z";
import { SheenSlideIn } from "@/components/remocn/sheen-slide-in";
import { ShimmerSweep } from "@/components/remocn/shimmer-sweep";
import { ShortSlideDown } from "@/components/remocn/short-slide-down";
import { ShortSlideRight } from "@/components/remocn/short-slide-right";
import { SimulatedCursor } from "@/components/remocn/simulated-cursor";
import { SlotMachineRoll } from "@/components/remocn/slot-machine-roll";
import { SoftBlurIn } from "@/components/remocn/soft-blur-in";
import { SpringScaleIn } from "@/components/remocn/spring-scale-in";
import { SqueezeIn } from "@/components/remocn/squeeze-in";
import { StaggeredFadeUp } from "@/components/remocn/staggered-fade-up";
import { StretchIn } from "@/components/remocn/stretch-in";
import { StrikethroughReplace } from "@/components/remocn/strikethrough-replace";
import { TopDownLetters } from "@/components/remocn/top-down-letters";
import { TrackingIn } from "@/components/remocn/tracking-in";
import { TypedSplitWipe } from "@/components/remocn/typed-split-wipe";
import { Typewriter } from "@/components/remocn/typewriter";
import { WordPush } from "@/components/remocn/word-push";
import { WordStream } from "@/components/remocn/word-stream";
import { ZoomWords } from "@/components/remocn/zoom-words";

type Demo = {
  // Remotion Player accepts a component; props vary per demo.
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  component: ComponentType<any>;
  durationInFrames: number;
  inputProps: Record<string, unknown>;
};

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

const DEMOS: Record<string, Demo> = {
  "rm-blur-out-up": {
    component: withBackdrop(BlurOutUp, "#ffffff"),
    durationInFrames: 90,
    inputProps: {
      "text": "Clear in, airy out.",
      "staggerDelay": 1,
      "fontSize": 72,
      "color": "#171717",
      "fontWeight": 600
},
  },
  "rm-bottom-up-letters": {
    component: withBackdrop(BottomUpLetters, "#ffffff"),
    durationInFrames: 60,
    inputProps: {
      "text": "Shift",
      "staggerDelay": 3,
      "distance": 46,
      "fontSize": 72,
      "color": "#171717",
      "fontWeight": 600
},
  },
  "rm-caret-swap": {
    component: withBackdrop(CaretSwap, "#fdf6f0"),
    durationInFrames: 100,
    inputProps: {
      "fromText": "Executing it?",
      "toText": "That's where everyone quits",
      "fontSize": 72,
      "swapAt": 20,
      "typeSpeed": 1,
      "color": "#171717",
      "caretColor": "#FF4DAA",
      "caretColorEnd": "#8A5CF6",
      "fontWeight": 400
},
  },
  "rm-centered-word-build": {
    component: withBackdrop(CenteredWordBuild, "#0a0a10"),
    durationInFrames: 75,
    inputProps: {
      "text": "everything we learn from",
      "fontSize": 52,
      "wordGap": 11,
      "accel": 0.75,
      "rise": 0.18,
      "zoomStep": 0.035,
      "settleFrames": 9,
      "exitAt": 51,
      "exitFrames": 12,
      "color": "#fff3df",
      "fontWeight": 400
},
  },
  "rm-dither-dissolve": {
    component: DitherDissolveDemo,
    durationInFrames: 100,
    inputProps: {},
  },
  "rm-extrude-pop": {
    component: withBackdrop(ExtrudePop, "#141318"),
    durationInFrames: 90,
    inputProps: {
      "letter": "WIN",
      "bodyColor": "#e8192b",
      "faceColor": "#ffffff",
      "minimaxRadius": 80,
      "extrudeAngleDeg": -58.6,
      "extrudeEndFrame": 48
},
  },
  "rm-fade-through": {
    component: withBackdrop(FadeThrough, "#ffffff"),
    durationInFrames: 90,
    inputProps: {
      "fromText": "Calm transitions.",
      "toText": "Fade through content.",
      "fontSize": 72,
      "color": "#171717",
      "fontWeight": 600
},
  },
  "rm-focus-blur-resolve": {
    component: withBackdrop(FocusBlurResolve, "#ffffff"),
    durationInFrames: 90,
    inputProps: {
      "text": "Focus resolves clearly.",
      "blur": 14,
      "fontSize": 72,
      "color": "#171717",
      "fontWeight": 600
},
  },
  "rm-fog-rise": {
    component: withBackdrop(FogRise, "#ffffff"),
    durationInFrames: 90,
    inputProps: {
      "text": "Remocn",
      "fontSize": 304,
      "stagger": 5,
      "blur": 0.17,
      "tilt": 55,
      "depth": 5,
      "lift": 0.85,
      "drift": 0.005,
      "exitAt": 60,
      "exitAccel": 0.04,
      "mass": 1.3,
      "stiffness": 60,
      "damping": 13,
      "spreadGap": 0.07,
      "tracking": -0.07,
      "resolveFrames": 22,
      "fadeFrames": 18,
      "color": "#004CFF",
      "fontWeight": 400
},
  },
  "rm-gooey-morph": {
    component: withBackdrop(GooeyMorph, "#141318"),
    durationInFrames: 120,
    inputProps: {
      "word": "HELLO",
      "fill": "#f2f2f2",
      "fontFamily": "'Bodoni Moda', Georgia, serif",
      "blurRadius": 6,
      "displaceAmount": 20,
      "barTravelFrames": 30
},
  },
  "rm-gradient-scale-cut-text": {
    component: withBackdrop(GradientScaleCutText, "#000000"),
    durationInFrames: 36,
    inputProps: {
      "text": "Introducing",
      "giantFontSize": 520,
      "compactFontSize": 132,
      "anchorOffsetX": -16,
      "giantTravel": 400,
      "settleTravel": 160,
      "cutFrame": 13,
      "revealSoftness": 14,
      "compactBlur": 12,
      "gradientStart": "#f04a14",
      "gradientEnd": "#f3f1f1",
      "ghostColor": "#170b0a",
      "backgroundColor": "#000000",
      "fontWeight": 700
},
  },
  "rm-grain-dissolve": {
    component: GrainDissolveDemo,
    durationInFrames: 116,
    inputProps: {},
  },
  "rm-infinite-marquee": {
    component: withBackdrop(InfiniteMarquee, "#fafafa"),
    durationInFrames: 180,
    inputProps: {
      "text": "ship · build · animate · ",
      "fontSize": 120,
      "color": "#171717",
      "fontWeight": 700,
      "pixelsPerFrame": 4,
      "stroke": false,
      "strokeColor": "#171717"
},
  },
  "rm-inline-highlight": {
    component: withBackdrop(InlineHighlight, "#f4f4f5"),
    durationInFrames: 90,
    inputProps: {
      "before": "Ship faster with ",
      "highlight": "remocn",
      "after": ".",
      "baseColor": "#171717",
      "highlightColor": "#ff5e3a",
      "fontSize": 72,
      "fontWeight": 600
},
  },
  "rm-inline-pill-takeover": {
    component: withBackdrop(InlinePillTakeover, "#0a0a10"),
    durationInFrames: 45,
    inputProps: {
      "before": "powering 20%",
      "insert": "Start building",
      "after": "of the Internet.",
      "fontSize": 52,
      "pillWidth": 260,
      "expandFrames": 12,
      "pillRevealHeightScale": 0.35,
      "pillGrowAt": 12,
      "pillGrowFrames": 24,
      "pillGrowWidthScale": 1.08,
      "pillGrowHeightScale": 1.16,
      "outerExitFrames": 18,
      "takeoverAt": 12,
      "takeoverScale": 2.15,
      "blur": 12,
      "color": "#fff3df",
      "pillColor": "#fffaf0",
      "pillTextColor": "#1c1210",
      "fontWeight": 400
},
  },
  "rm-kinetic-center-build": {
    component: withBackdrop(KineticCenterBuild, "#ffffff"),
    durationInFrames: 60,
    inputProps: {
      "text": "Words push left.",
      "entryOffset": 88,
      "fontSize": 72,
      "color": "#171717",
      "fontWeight": 600
},
  },
  "rm-kinetic-warp": {
    component: withBackdrop(KineticWarp, "#0a0a10"),
    durationInFrames: 120,
    inputProps: {
      "text": "REM\nOCN",
      "textColor": "#FFFFFF",
      "fontFamily": "Passion One",
      "fontUrl": "https://fonts.googleapis.com/css2?family=Passion+One:wght@400;700;900&display=block",
      "fontWeight": 700,
      "fontSize": 107.1,
      "layerScale": 480,
      "keyframeStride": 20
},
  },
  "rm-lens-zoom": {
    component: LensZoomDemo,
    durationInFrames: 112,
    inputProps: {},
  },
  "rm-line-by-line-slide": {
    component: withBackdrop(LineByLineSlide, "#ffffff"),
    durationInFrames: 90,
    inputProps: {
      "text": "Think different.\nDo more.",
      "distance": 48,
      "fontSize": 72,
      "color": "#171717",
      "fontWeight": 600
},
  },
  "rm-marker-highlight": {
    component: withBackdrop(MarkerHighlight, "#f4f4f5"),
    durationInFrames: 90,
    inputProps: {
      "before": "Made for ",
      "highlight": "builders",
      "after": ".",
      "markerColor": "#facc15",
      "baseColor": "#171717",
      "highlightedTextColor": "#171717",
      "fontSize": 72,
      "fontWeight": 600
},
  },
  "rm-mask-reveal-up": {
    component: withBackdrop(MaskRevealUp, "#ffffff"),
    durationInFrames: 90,
    inputProps: {
      "text": "Designed to move.\nBuilt to focus.",
      "distance": 30,
      "fontSize": 72,
      "color": "#171717",
      "fontWeight": 600
},
  },
  "rm-matrix-decode": {
    component: withBackdrop(MatrixDecode, "#f4f4f5"),
    durationInFrames: 90,
    inputProps: {
      "text": "DECRYPTED",
      "charset": "!@#$%^&*()_+-=<>?/\\|",
      "fontSize": 72,
      "color": "#22c55e",
      "fontWeight": 600,
      "revealDuration": 60
},
  },
  "rm-micro-scale-fade": {
    component: withBackdrop(MicroScaleFade, "#ffffff"),
    durationInFrames: 60,
    inputProps: {
      "text": "Welcome to motion.",
      "scaleFrom": 0.96,
      "fontSize": 72,
      "color": "#171717",
      "fontWeight": 600
},
  },
  "rm-outline-fill-track-text": {
    component: withBackdrop(OutlineFillTrackText, "#030012"),
    durationInFrames: 80,
    inputProps: {
      "leadText": "Keep",
      "valueText": "1000000000%",
      "fontSize": 368,
      "enterOffset": 240,
      "anchorOffsetX": -84,
      "trackDistance": 0,
      "wordGap": 220,
      "endPadding": 96,
      "fillDuration": 38,
      "outlineWidth": 3,
      "color": "#f4f3f6",
      "outlineColor": "#e6e2ed",
      "backgroundColor": "#030012",
      "glowColor": "#64109a",
      "fontWeight": 700
},
  },
  "rm-per-character-rise": {
    component: withBackdrop(PerCharacterRise, "#ffffff"),
    durationInFrames: 60,
    inputProps: {
      "text": "One more thing.",
      "distance": 32,
      "fontSize": 72,
      "color": "#171717",
      "fontWeight": 600
},
  },
  "rm-per-word-crossfade": {
    component: withBackdrop(PerWordCrossfade, "#ffffff"),
    durationInFrames: 90,
    inputProps: {
      "fromText": "Beautifully simple.",
      "toText": "Designed for focus.",
      "fontSize": 72,
      "color": "#171717",
      "fontWeight": 600
},
  },
  "rm-perlin-dissolve": {
    component: PerlinDissolveDemo,
    durationInFrames: 116,
    inputProps: {},
  },
  "rm-rgb-glitch-text": {
    component: withBackdrop(RGBGlitchText, "#f4f4f5"),
    durationInFrames: 90,
    inputProps: {
      "text": "GLITCH",
      "fontSize": 96,
      "color": "#171717",
      "fontWeight": 700,
      "glitchAt": 20,
      "glitchDuration": 8,
      "intensity": 6,
      "seed": "glitch"
},
  },
  "rm-ripple-zoom": {
    component: RippleZoomDemo,
    durationInFrames: 116,
    inputProps: {},
  },
  "rm-rush-type": {
    component: withBackdrop(RushType, "#000000"),
    durationInFrames: rushTypeLength,
    inputProps: {
      "phrase": "gone before you look",
      "fontSize": 68,
      "fontWeight": 400,
      "color": "#ffffff",
      "backgroundColor": "#000000",
      "verticalStretch": 7,
      "chromaticSpread": 1,
      "restDuration": 12,
      "peakHoldDuration": 3
},
  },
  "rm-scale-down-fade": {
    component: withBackdrop(ScaleDownFade, "#ffffff"),
    durationInFrames: 90,
    inputProps: {
      "text": "Quietly refined.",
      "fontSize": 72,
      "color": "#171717",
      "fontWeight": 600
},
  },
  "rm-shader-grain-gradient": {
    component: withBackdrop(ShaderGrainGradient, "#0a0a10"),
    durationInFrames: 150,
    inputProps: {
      "speed": 1,
      "softness": 0.6,
      "intensity": 0.2,
      "noise": 0.15,
      "colorBack": "#12121a"
},
  },
  "rm-shader-mesh-gradient": {
    component: withBackdrop(ShaderMeshGradient, "#0a0a10"),
    durationInFrames: 150,
    inputProps: {
      "speed": 1,
      "distortion": 0.6,
      "swirl": 0.1
},
  },
  "rm-shader-swirl": {
    component: withBackdrop(ShaderSwirl, "#0a0a10"),
    durationInFrames: 150,
    inputProps: {
      "speed": 1,
      "bandCount": 4,
      "twist": 0.1,
      "softness": 0.2,
      "colorBack": "#12121a"
},
  },
  "rm-shader-warp": {
    component: withBackdrop(ShaderWarp, "#0a0a10"),
    durationInFrames: 150,
    inputProps: {
      "speed": 1,
      "distortion": 0.2,
      "swirl": 0.4,
      "softness": 1,
      "proportion": 0.5
},
  },
  "rm-shadow-sweep-text": {
    component: withBackdrop(ShadowSweepText, "#030012"),
    durationInFrames: 37,
    inputProps: {
      "text": "are abandoned",
      "fontSize": 96,
      "rise": 96,
      "driftLeft": 16,
      "shadowSoftness": 130,
      "color": "#aaa6b5",
      "backgroundColor": "#030012",
      "shadowColor": "#030012",
      "fontWeight": 700
},
  },
  "rm-shared-axis-y": {
    component: withBackdrop(SharedAxisY, "#ffffff"),
    durationInFrames: 90,
    inputProps: {
      "fromText": "Layered navigation.",
      "toText": "Hierarchy made clear.",
      "fontSize": 72,
      "color": "#171717",
      "fontWeight": 600
},
  },
  "rm-shared-axis-z": {
    component: withBackdrop(SharedAxisZ, "#ffffff"),
    durationInFrames: 90,
    inputProps: {
      "fromText": "Zooming between states.",
      "toText": "Elevate and settle.",
      "fontSize": 72,
      "color": "#171717",
      "fontWeight": 600
},
  },
  "rm-sheen-slide-in": {
    component: withBackdrop(SheenSlideIn, "#ffffff"),
    durationInFrames: 70,
    inputProps: {
      "text": "Introducing",
      "exitAt": 60,
      "fontSize": 72,
      "baseColor": "#18181b",
      "sheenColor": "#4f8ef7",
      "fontWeight": 400
},
  },
  "rm-shimmer-sweep": {
    component: withBackdrop(ShimmerSweep, "#f4f4f5"),
    durationInFrames: 120,
    inputProps: {
      "text": "Generating",
      "baseColor": "#3f3f46",
      "shineColor": "#fafafa",
      "fontSize": 96,
      "fontWeight": 700
},
  },
  "rm-short-slide-down": {
    component: withBackdrop(ShortSlideDown, "#ffffff"),
    durationInFrames: 60,
    inputProps: {
      "text": "Build from above.",
      "entryOffset": 28,
      "fontSize": 72,
      "color": "#171717",
      "fontWeight": 600
},
  },
  "rm-short-slide-right": {
    component: withBackdrop(ShortSlideRight, "#ffffff"),
    durationInFrames: 60,
    inputProps: {
      "text": "Move with intent.",
      "distance": 24,
      "staggerDelay": 3,
      "fontSize": 72,
      "color": "#171717",
      "fontWeight": 600
},
  },
  "rm-simulated-cursor": {
    component: withBackdrop(SimulatedCursor, "#0a0a0a"),
    durationInFrames: 150,
    inputProps: {
      "color": "#ffffff",
      "size": 32
},
  },
  "rm-slot-machine-roll": {
    component: withBackdrop(SlotMachineRoll, "#f4f4f5"),
    durationInFrames: 90,
    inputProps: {
      "from": "$99",
      "to": "$199",
      "fontSize": 120,
      "color": "#171717",
      "fontWeight": 700
},
  },
  "rm-smoke-dissolve": {
    component: SmokeDissolveDemo,
    durationInFrames: 116,
    inputProps: {},
  },
  "rm-soft-blur-in": {
    component: withBackdrop(SoftBlurIn, "#ffffff"),
    durationInFrames: 60,
    inputProps: {
      "text": "Think different.",
      "blur": 12,
      "fontSize": 72,
      "color": "#171717",
      "fontWeight": 600
},
  },
  "rm-spring-scale-in": {
    component: withBackdrop(SpringScaleIn, "#ffffff"),
    durationInFrames: 60,
    inputProps: {
      "text": "Fast. Crisp. Fluid.",
      "staggerDelay": 3,
      "scaleFrom": 0.7,
      "fontSize": 72,
      "color": "#171717",
      "fontWeight": 600
},
  },
  "rm-squeeze-in": {
    component: withBackdrop(SqueezeIn, "#ffffff"),
    durationInFrames: 60,
    inputProps: {
      "text": "Remocn",
      "fontSize": 72,
      "stagger": 3,
      "squeeze": 0.03,
      "color": "#171717",
      "fontWeight": 400
},
  },
  "rm-staggered-fade-up": {
    component: withBackdrop(StaggeredFadeUp, "#f4f4f5"),
    durationInFrames: 90,
    inputProps: {
      "text": "Ship faster with remocn",
      "staggerDelay": 4,
      "distance": 20,
      "fontSize": 72,
      "color": "#171717",
      "fontWeight": 600
},
  },
  "rm-stretch-in": {
    component: withBackdrop(StretchIn, "#141318"),
    durationInFrames: 60,
    inputProps: {
      "text": "REMOCN",
      "fill": "#ffffff",
      "fontSize": 510,
      "entryStagger": 3,
      "travelFrames": 33,
      "vertexLagFrames": 3.5
},
  },
  "rm-strikethrough-replace": {
    component: withBackdrop(StrikethroughReplace, "#f4f4f5"),
    durationInFrames: 120,
    inputProps: {
      "from": "$49/mo",
      "to": "Free",
      "lineColor": "#ff5e3a",
      "fontSize": 96,
      "color": "#171717",
      "fontWeight": 700
},
  },
  "rm-swirl-dissolve": {
    component: SwirlDissolveDemo,
    durationInFrames: 116,
    inputProps: {},
  },
  "rm-top-down-letters": {
    component: withBackdrop(TopDownLetters, "#ffffff"),
    durationInFrames: 60,
    inputProps: {
      "text": "Signal",
      "staggerDelay": 3,
      "distance": 46,
      "fontSize": 72,
      "color": "#171717",
      "fontWeight": 600
},
  },
  "rm-tracking-in": {
    component: withBackdrop(TrackingIn, "#f4f4f5"),
    durationInFrames: 90,
    inputProps: {
      "text": "tracking in",
      "startTracking": 0.5,
      "startBlur": 12,
      "fontSize": 96,
      "color": "#171717",
      "fontWeight": 700
},
  },
  "rm-typed-split-wipe": {
    component: withBackdrop(TypedSplitWipe, "#101010"),
    durationInFrames: 75,
    inputProps: {
      "prefix": "Introducing",
      "anchor": "X",
      "suffix": "Ads MCP",
      "typeFrames": 30,
      "exitAt": 50,
      "exitFrames": 20,
      "wordStagger": 4,
      "anchorShift": -72,
      "fontSize": 42,
      "color": "#e8e8e8",
      "fontWeight": 400
},
  },
  "rm-typewriter": {
    component: withBackdrop(Typewriter, "#f4f4f5"),
    durationInFrames: 120,
    inputProps: {
      "text": "console.log('hello, world')",
      "cursor": true,
      "charsPerSecond": 22,
      "fontSize": 72,
      "color": "#171717",
      "cursorColor": "#171717",
      "fontWeight": 600
},
  },
  "rm-wave-wipe": {
    component: WaveWipeDemo,
    durationInFrames: 116,
    inputProps: {},
  },
  "rm-word-push": {
    component: withBackdrop(WordPush, "#ffffff"),
    durationInFrames: 90,
    inputProps: {
      "text": "move at your own pace",
      "fontSize": 72,
      "wordGap": 10,
      "accel": 0.8,
      "color": "#171717",
      "fontWeight": 400
},
  },
  "rm-word-stream": {
    component: withBackdrop(WordStream, "#ffffff"),
    durationInFrames: 100,
    inputProps: {
      "text": "introducing | one-tap checkout | for your store",
      "fontSize": 72,
      "wordGap": 6,
      "hold": 18,
      "drift": 2,
      "color": "#171717",
      "fontWeight": 400
},
  },
  "rm-zoom-words": {
    component: withBackdrop(ZoomWords, "#0a0a10"),
    durationInFrames: 75,
    inputProps: {
      "text": "Still piecing together tools",
      "fontSize": 64,
      "wordGap": 12,
      "zoom": 2.2,
      "anchor": 0.5,
      "blur": 0.04,
      "blurFrames": 60,
      "color": "#cfc2ff",
      "fontWeight": 400
},
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
