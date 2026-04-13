import { motion, useReducedMotion } from "framer-motion";

type LiquidWaveProps = {
  className?: string;
  accent?: "amber" | "blue" | "coral" | "multi";
  flip?: boolean;
  height?: number;
  intensity?: "subtle" | "medium" | "strong";
};

const accentColors = {
  amber: ["hsl(40 100% 56% / 0.22)", "hsl(40 100% 60% / 0.11)"],
  blue:  ["hsl(217 90% 60% / 0.20)", "hsl(217 90% 65% / 0.10)"],
  coral: ["hsl(17 97% 67% / 0.22)", "hsl(17 97% 70% / 0.11)"],
  multi: ["hsl(40 100% 56% / 0.18)", "hsl(217 90% 60% / 0.14)"],
} as const;

type Segment = {
  wave1: string[];
  wave2: string[];
  wave3: string[];
};

const waveSegments: Record<"subtle" | "medium" | "strong", Segment> = {
  subtle: {
    wave1: [
      "M0,55 C120,35 240,75 360,55 C480,35 600,70 720,55 L720,80 L0,80 Z",
      "M0,62 C120,42 240,72 360,58 C480,44 600,68 720,58 L720,80 L0,80 Z",
      "M0,55 C120,35 240,75 360,55 C480,35 600,70 720,55 L720,80 L0,80 Z",
    ],
    wave2: [
      "M0,65 C90,48 200,72 300,58 C400,44 510,70 620,54 C660,48 690,52 720,55 L720,80 L0,80 Z",
      "M0,60 C90,43 200,68 300,53 C400,38 510,66 620,50 C660,44 690,47 720,50 L720,80 L0,80 Z",
      "M0,65 C90,48 200,72 300,58 C400,44 510,70 620,54 C660,48 690,52 720,55 L720,80 L0,80 Z",
    ],
    wave3: [
      "M0,70 C150,55 300,70 450,60 C540,54 640,65 720,62 L720,80 L0,80 Z",
      "M0,68 C150,52 300,68 450,57 C540,51 640,62 720,59 L720,80 L0,80 Z",
      "M0,70 C150,55 300,70 450,60 C540,54 640,65 720,62 L720,80 L0,80 Z",
    ],
  },
  medium: {
    wave1: [
      "M0,45 C120,15 240,75 360,45 C480,15 600,70 720,45 L720,80 L0,80 Z",
      "M0,58 C120,28 240,68 360,52 C480,36 600,66 720,52 L720,80 L0,80 Z",
      "M0,45 C120,15 240,75 360,45 C480,15 600,70 720,45 L720,80 L0,80 Z",
    ],
    wave2: [
      "M0,60 C100,32 200,78 300,50 C400,22 500,74 600,46 C650,34 690,44 720,48 L720,80 L0,80 Z",
      "M0,50 C100,22 200,68 300,40 C400,12 500,64 600,36 C650,24 690,34 720,38 L720,80 L0,80 Z",
      "M0,60 C100,32 200,78 300,50 C400,22 500,74 600,46 C650,34 690,44 720,48 L720,80 L0,80 Z",
    ],
    wave3: [
      "M0,65 C180,40 320,72 480,52 C560,42 650,60 720,58 L720,80 L0,80 Z",
      "M0,62 C180,37 320,69 480,48 C560,38 650,57 720,54 L720,80 L0,80 Z",
      "M0,65 C180,40 320,72 480,52 C560,42 650,60 720,58 L720,80 L0,80 Z",
    ],
  },
  strong: {
    wave1: [
      "M0,38 C100,5 240,78 360,38 C480,5 600,75 720,38 L720,80 L0,80 Z",
      "M0,55 C100,20 240,68 360,50 C480,32 600,72 720,50 L720,80 L0,80 Z",
      "M0,38 C100,5 240,78 360,38 C480,5 600,75 720,38 L720,80 L0,80 Z",
    ],
    wave2: [
      "M0,55 C80,22 200,82 300,45 C400,12 500,78 600,40 C650,26 690,38 720,42 L720,80 L0,80 Z",
      "M0,42 C80,8 200,68 300,32 C400,-2 500,64 600,26 C650,12 690,24 720,28 L720,80 L0,80 Z",
      "M0,55 C80,22 200,82 300,45 C400,12 500,78 600,40 C650,26 690,38 720,42 L720,80 L0,80 Z",
    ],
    wave3: [
      "M0,62 C200,35 360,75 520,48 C600,35 660,58 720,55 L720,80 L0,80 Z",
      "M0,58 C200,30 360,70 520,43 C600,30 660,53 720,50 L720,80 L0,80 Z",
      "M0,62 C200,35 360,75 520,48 C600,35 660,58 720,55 L720,80 L0,80 Z",
    ],
  },
};

export function LiquidWave({
  className = "",
  accent = "amber",
  flip = false,
  height = 80,
  intensity = "medium",
}: LiquidWaveProps) {
  const reduce = useReducedMotion();
  const colors = accentColors[accent];
  const segs = waveSegments[intensity];

  return (
    <div
      className={`liquid-wave-wrap ${flip ? "liquid-wave-flip" : ""} ${className}`}
      style={{ height }}
      aria-hidden="true"
    >
      <svg
        viewBox={`0 0 720 80`}
        preserveAspectRatio="none"
        className="liquid-wave-svg"
      >
        {/* Back layer - slowest */}
        <motion.path
          fill={colors[1]}
          d={segs.wave3[0]}
          animate={reduce ? undefined : { d: segs.wave3 }}
          transition={{ duration: 11, repeat: Infinity, ease: "easeInOut", repeatType: "mirror" }}
        />
        {/* Mid layer */}
        <motion.path
          fill={colors[1]}
          d={segs.wave2[0]}
          animate={reduce ? undefined : { d: segs.wave2 }}
          transition={{ duration: 9, repeat: Infinity, ease: "easeInOut", repeatType: "mirror", delay: 0.6 }}
        />
        {/* Front layer - fastest */}
        <motion.path
          fill={colors[0]}
          d={segs.wave1[0]}
          animate={reduce ? undefined : { d: segs.wave1 }}
          transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", repeatType: "mirror", delay: 1.2 }}
        />
      </svg>
    </div>
  );
}

/** A double liquid wave — one going up, one going down — for use as a section "pond" divider */
export function LiquidPond({
  className = "",
  accent = "multi",
}: {
  className?: string;
  accent?: "amber" | "blue" | "coral" | "multi";
}) {
  const reduce = useReducedMotion();
  const colors = accentColors[accent];

  const topWave = [
    "M0,20 C120,8 240,32 360,20 C480,8 600,28 720,20 L720,0 L0,0 Z",
    "M0,24 C120,12 240,28 360,22 C480,16 600,26 720,24 L720,0 L0,0 Z",
    "M0,20 C120,8 240,32 360,20 C480,8 600,28 720,20 L720,0 L0,0 Z",
  ];
  const botWave = [
    "M0,36 C120,48 240,24 360,36 C480,48 600,28 720,36 L720,56 L0,56 Z",
    "M0,32 C120,44 240,22 360,32 C480,44 600,25 720,32 L720,56 L0,56 Z",
    "M0,36 C120,48 240,24 360,36 C480,48 600,28 720,36 L720,56 L0,56 Z",
  ];

  return (
    <div className={`liquid-pond-wrap ${className}`} aria-hidden="true">
      <svg viewBox="0 0 720 56" preserveAspectRatio="none" className="liquid-wave-svg">
        {/* Top wave */}
        <motion.path
          fill={colors[1]}
          d={topWave[0]}
          animate={reduce ? undefined : { d: topWave }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", repeatType: "mirror" }}
        />
        {/* Bottom wave */}
        <motion.path
          fill={colors[0]}
          d={botWave[0]}
          animate={reduce ? undefined : { d: botWave }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", repeatType: "mirror", delay: 0.8 }}
        />
      </svg>
    </div>
  );
}
