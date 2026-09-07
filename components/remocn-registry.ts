"use client";

import type { ComponentType } from "react";

export type RemocnDemoMeta = {
  /** Dynamic import of the Remotion composition component */
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  load: () => Promise<ComponentType<any>>;
  backdrop: string | null;
  durationInFrames: number | (() => Promise<number>);
  inputProps: Record<string, unknown>;
};

/** Lightweight registry: importing this file does NOT pull remocn demos. */
export const REMOCN_DEMOS: Record<string, RemocnDemoMeta> = {
  "rm-blur-out-up": {
    load: () => import("@/components/remocn/blur-out-up").then((m) => m.BlurOutUp),
    backdrop: "#ffffff",
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
    load: () => import("@/components/remocn/bottom-up-letters").then((m) => m.BottomUpLetters),
    backdrop: "#ffffff",
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
    load: () => import("@/components/remocn/caret-swap").then((m) => m.CaretSwap),
    backdrop: "#fdf6f0",
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
    load: () => import("@/components/remocn/centered-word-build").then((m) => m.CenteredWordBuild),
    backdrop: "#0a0a10",
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
    load: () => import("@/components/remocn/transition-demos").then((m) => m.DitherDissolveDemo),
    backdrop: null,
    durationInFrames: 100,
    inputProps: {},
  },
  "rm-extrude-pop": {
    load: () => import("@/components/remocn/extrude-pop").then((m) => m.ExtrudePop),
    backdrop: "#141318",
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
    load: () => import("@/components/remocn/fade-through").then((m) => m.FadeThrough),
    backdrop: "#ffffff",
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
    load: () => import("@/components/remocn/focus-blur-resolve").then((m) => m.FocusBlurResolve),
    backdrop: "#ffffff",
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
    load: () => import("@/components/remocn/fog-rise").then((m) => m.FogRise),
    backdrop: "#ffffff",
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
    load: () => import("@/components/remocn/gooey-morph").then((m) => m.GooeyMorph),
    backdrop: "#141318",
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
    load: () => import("@/components/remocn/gradient-scale-cut-text").then((m) => m.GradientScaleCutText),
    backdrop: "#000000",
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
    load: () => import("@/components/remocn/transition-demos").then((m) => m.GrainDissolveDemo),
    backdrop: null,
    durationInFrames: 116,
    inputProps: {},
  },
  "rm-infinite-marquee": {
    load: () => import("@/components/remocn/infinite-marquee").then((m) => m.InfiniteMarquee),
    backdrop: "#fafafa",
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
    load: () => import("@/components/remocn/inline-highlight").then((m) => m.InlineHighlight),
    backdrop: "#f4f4f5",
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
    load: () => import("@/components/remocn/inline-pill-takeover").then((m) => m.InlinePillTakeover),
    backdrop: "#0a0a10",
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
    load: () => import("@/components/remocn/kinetic-center-build").then((m) => m.KineticCenterBuild),
    backdrop: "#ffffff",
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
    load: () => import("@/components/remocn/kinetic-warp").then((m) => m.KineticWarp),
    backdrop: "#0a0a10",
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
    load: () => import("@/components/remocn/transition-demos").then((m) => m.LensZoomDemo),
    backdrop: null,
    durationInFrames: 112,
    inputProps: {},
  },
  "rm-line-by-line-slide": {
    load: () => import("@/components/remocn/line-by-line-slide").then((m) => m.LineByLineSlide),
    backdrop: "#ffffff",
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
    load: () => import("@/components/remocn/marker-highlight").then((m) => m.MarkerHighlight),
    backdrop: "#f4f4f5",
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
    load: () => import("@/components/remocn/mask-reveal-up").then((m) => m.MaskRevealUp),
    backdrop: "#ffffff",
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
    load: () => import("@/components/remocn/matrix-decode").then((m) => m.MatrixDecode),
    backdrop: "#f4f4f5",
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
    load: () => import("@/components/remocn/micro-scale-fade").then((m) => m.MicroScaleFade),
    backdrop: "#ffffff",
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
    load: () => import("@/components/remocn/outline-fill-track-text").then((m) => m.OutlineFillTrackText),
    backdrop: "#030012",
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
    load: () => import("@/components/remocn/per-character-rise").then((m) => m.PerCharacterRise),
    backdrop: "#ffffff",
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
    load: () => import("@/components/remocn/per-word-crossfade").then((m) => m.PerWordCrossfade),
    backdrop: "#ffffff",
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
    load: () => import("@/components/remocn/transition-demos").then((m) => m.PerlinDissolveDemo),
    backdrop: null,
    durationInFrames: 116,
    inputProps: {},
  },
  "rm-rgb-glitch-text": {
    load: () => import("@/components/remocn/rgb-glitch-text").then((m) => m.RGBGlitchText),
    backdrop: "#f4f4f5",
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
    load: () => import("@/components/remocn/transition-demos").then((m) => m.RippleZoomDemo),
    backdrop: null,
    durationInFrames: 116,
    inputProps: {},
  },
  "rm-rush-type": {
    load: () => import("@/components/remocn/rush-type").then((m) => m.RushType),
    backdrop: "#000000",
    durationInFrames: async () => (await import("@/components/remocn/rush-type")).rushTypeLength,
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
    load: () => import("@/components/remocn/scale-down-fade").then((m) => m.ScaleDownFade),
    backdrop: "#ffffff",
    durationInFrames: 90,
    inputProps: {
      "text": "Quietly refined.",
      "fontSize": 72,
      "color": "#171717",
      "fontWeight": 600
},
  },
  "rm-shader-grain-gradient": {
    load: () => import("@/components/remocn/shader-grain-gradient").then((m) => m.ShaderGrainGradient),
    backdrop: "#0a0a10",
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
    load: () => import("@/components/remocn/shader-mesh-gradient").then((m) => m.ShaderMeshGradient),
    backdrop: "#0a0a10",
    durationInFrames: 150,
    inputProps: {
      "speed": 1,
      "distortion": 0.6,
      "swirl": 0.1
},
  },
  "rm-shader-swirl": {
    load: () => import("@/components/remocn/shader-swirl").then((m) => m.ShaderSwirl),
    backdrop: "#0a0a10",
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
    load: () => import("@/components/remocn/shader-warp").then((m) => m.ShaderWarp),
    backdrop: "#0a0a10",
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
    load: () => import("@/components/remocn/shadow-sweep-text").then((m) => m.ShadowSweepText),
    backdrop: "#030012",
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
    load: () => import("@/components/remocn/shared-axis-y").then((m) => m.SharedAxisY),
    backdrop: "#ffffff",
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
    load: () => import("@/components/remocn/shared-axis-z").then((m) => m.SharedAxisZ),
    backdrop: "#ffffff",
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
    load: () => import("@/components/remocn/sheen-slide-in").then((m) => m.SheenSlideIn),
    backdrop: "#ffffff",
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
    load: () => import("@/components/remocn/shimmer-sweep").then((m) => m.ShimmerSweep),
    backdrop: "#f4f4f5",
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
    load: () => import("@/components/remocn/short-slide-down").then((m) => m.ShortSlideDown),
    backdrop: "#ffffff",
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
    load: () => import("@/components/remocn/short-slide-right").then((m) => m.ShortSlideRight),
    backdrop: "#ffffff",
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
    load: () => import("@/components/remocn/simulated-cursor").then((m) => m.SimulatedCursor),
    backdrop: "#0a0a0a",
    durationInFrames: 150,
    inputProps: {
      "color": "#ffffff",
      "size": 32
},
  },
  "rm-slot-machine-roll": {
    load: () => import("@/components/remocn/slot-machine-roll").then((m) => m.SlotMachineRoll),
    backdrop: "#f4f4f5",
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
    load: () => import("@/components/remocn/transition-demos").then((m) => m.SmokeDissolveDemo),
    backdrop: null,
    durationInFrames: 116,
    inputProps: {},
  },
  "rm-soft-blur-in": {
    load: () => import("@/components/remocn/soft-blur-in").then((m) => m.SoftBlurIn),
    backdrop: "#ffffff",
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
    load: () => import("@/components/remocn/spring-scale-in").then((m) => m.SpringScaleIn),
    backdrop: "#ffffff",
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
    load: () => import("@/components/remocn/squeeze-in").then((m) => m.SqueezeIn),
    backdrop: "#ffffff",
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
    load: () => import("@/components/remocn/staggered-fade-up").then((m) => m.StaggeredFadeUp),
    backdrop: "#f4f4f5",
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
    load: () => import("@/components/remocn/stretch-in").then((m) => m.StretchIn),
    backdrop: "#141318",
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
    load: () => import("@/components/remocn/strikethrough-replace").then((m) => m.StrikethroughReplace),
    backdrop: "#f4f4f5",
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
    load: () => import("@/components/remocn/transition-demos").then((m) => m.SwirlDissolveDemo),
    backdrop: null,
    durationInFrames: 116,
    inputProps: {},
  },
  "rm-top-down-letters": {
    load: () => import("@/components/remocn/top-down-letters").then((m) => m.TopDownLetters),
    backdrop: "#ffffff",
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
    load: () => import("@/components/remocn/tracking-in").then((m) => m.TrackingIn),
    backdrop: "#f4f4f5",
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
    load: () => import("@/components/remocn/typed-split-wipe").then((m) => m.TypedSplitWipe),
    backdrop: "#101010",
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
    load: () => import("@/components/remocn/typewriter").then((m) => m.Typewriter),
    backdrop: "#f4f4f5",
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
    load: () => import("@/components/remocn/transition-demos").then((m) => m.WaveWipeDemo),
    backdrop: null,
    durationInFrames: 116,
    inputProps: {},
  },
  "rm-word-push": {
    load: () => import("@/components/remocn/word-push").then((m) => m.WordPush),
    backdrop: "#ffffff",
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
    load: () => import("@/components/remocn/word-stream").then((m) => m.WordStream),
    backdrop: "#ffffff",
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
    load: () => import("@/components/remocn/zoom-words").then((m) => m.ZoomWords),
    backdrop: "#0a0a10",
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
  return id in REMOCN_DEMOS;
}
