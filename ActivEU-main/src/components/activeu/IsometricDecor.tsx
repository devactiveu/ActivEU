import { motion, useReducedMotion } from "framer-motion";

type Accent = "amber" | "blue" | "coral";

type IsometricDecorProps = {
  className?: string;
  accent?: Accent;
  density?: "sparse" | "normal" | "dense";
};

type CubeDef = {
  cx: number;
  cy: number;
  s: number;
  depth: number;
  accent: Accent;
  delay: number;
  floatAmp?: number;
};

const accentPalettes: Record<Accent, { top: string; left: string; right: string; stroke: string }> = {
  amber: {
    top:    "hsl(40 100% 56% / 0.22)",
    left:   "hsl(40 100% 44% / 0.14)",
    right:  "hsl(40 100% 50% / 0.18)",
    stroke: "hsl(40 100% 44% / 0.35)",
  },
  blue: {
    top:    "hsl(217 90% 60% / 0.22)",
    left:   "hsl(217 90% 48% / 0.14)",
    right:  "hsl(217 90% 54% / 0.18)",
    stroke: "hsl(217 90% 48% / 0.30)",
  },
  coral: {
    top:    "hsl(17 97% 67% / 0.22)",
    left:   "hsl(17 97% 55% / 0.14)",
    right:  "hsl(17 97% 60% / 0.18)",
    stroke: "hsl(17 97% 55% / 0.30)",
  },
};

/** Build the 6 SVG points for one isometric cube face. */
function cubeFacePoints(
  cx: number,
  cy: number,
  s: number,   // half-width (x-span from center to right tip)
  d: number,   // visible cube height (side faces)
  face: "top" | "left" | "right"
): string {
  // In an isometric diamond: the four corners of the top diamond are:
  //  Top:    (cx,     cy)
  //  Right:  (cx + s, cy + s*0.5)
  //  Bottom: (cx,     cy + s)
  //  Left:   (cx - s, cy + s*0.5)
  const tx = cx,     ty = cy;
  const rx = cx + s, ry = cy + s * 0.5;
  const bx = cx,     by = cy + s;
  const lx = cx - s, ly = cy + s * 0.5;

  if (face === "top") {
    return `${tx},${ty} ${rx},${ry} ${bx},${by} ${lx},${ly}`;
  }
  if (face === "left") {
    // From bottom of diamond, extend down by d
    return `${lx},${ly} ${bx},${by} ${bx},${by + d} ${lx},${ly + d}`;
  }
  // right
  return `${bx},${by} ${rx},${ry} ${rx},${ry + d} ${bx},${by + d}`;
}

function IsoCube({
  cx, cy, s, depth, accent, delay, floatAmp = 6, reduce,
}: CubeDef & { reduce: boolean }) {
  const pal = accentPalettes[accent];

  return (
    <motion.g
      initial={reduce ? false : { opacity: 0, y: 12, scale: 0.88 }}
      whileInView={reduce ? {} : { opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.9, delay, ease: [0.16, 1, 0.3, 1] }}
      animate={reduce ? undefined : {
        y: [0, -floatAmp, 0],
      }}
      style={{ transformOrigin: `${cx}px ${cy}px` }}
    >
      {/* Top face */}
      <motion.polygon
        points={cubeFacePoints(cx, cy, s, depth, "top")}
        fill={pal.top}
        stroke={pal.stroke}
        strokeWidth="0.8"
        animate={reduce ? undefined : {
          opacity: [0.8, 1, 0.8],
        }}
        transition={{ duration: 3.5 + delay, repeat: Infinity, ease: "easeInOut", delay }}
      />
      {/* Left face */}
      <polygon
        points={cubeFacePoints(cx, cy, s, depth, "left")}
        fill={pal.left}
        stroke={pal.stroke}
        strokeWidth="0.8"
      />
      {/* Right face */}
      <polygon
        points={cubeFacePoints(cx, cy, s, depth, "right")}
        fill={pal.right}
        stroke={pal.stroke}
        strokeWidth="0.8"
      />
    </motion.g>
  );
}

const CUBE_SETS: Record<"sparse" | "normal" | "dense", CubeDef[]> = {
  sparse: [
    { cx: 80, cy: 30, s: 28, depth: 18, accent: "amber", delay: 0, floatAmp: 5 },
    { cx: 250, cy: 60, s: 20, depth: 14, accent: "blue", delay: 0.2, floatAmp: 7 },
    { cx: 400, cy: 20, s: 24, depth: 16, accent: "coral", delay: 0.1, floatAmp: 6 },
    { cx: 560, cy: 55, s: 18, depth: 12, accent: "amber", delay: 0.3, floatAmp: 4 },
  ],
  normal: [
    { cx: 60,  cy: 28, s: 26, depth: 17, accent: "amber", delay: 0,    floatAmp: 6 },
    { cx: 170, cy: 58, s: 18, depth: 12, accent: "blue",  delay: 0.15, floatAmp: 5 },
    { cx: 280, cy: 18, s: 22, depth: 15, accent: "coral", delay: 0.08, floatAmp: 7 },
    { cx: 390, cy: 50, s: 20, depth: 13, accent: "amber", delay: 0.22, floatAmp: 4 },
    { cx: 490, cy: 25, s: 16, depth: 10, accent: "blue",  delay: 0.12, floatAmp: 6 },
    { cx: 600, cy: 52, s: 24, depth: 16, accent: "coral", delay: 0.28, floatAmp: 5 },
    { cx: 680, cy: 22, s: 14, depth: 9,  accent: "amber", delay: 0.18, floatAmp: 8 },
  ],
  dense: [
    { cx: 42,  cy: 22, s: 22, depth: 14, accent: "amber", delay: 0,    floatAmp: 5 },
    { cx: 115, cy: 55, s: 16, depth: 10, accent: "blue",  delay: 0.1,  floatAmp: 7 },
    { cx: 190, cy: 18, s: 20, depth: 13, accent: "coral", delay: 0.06, floatAmp: 6 },
    { cx: 270, cy: 50, s: 18, depth: 12, accent: "amber", delay: 0.18, floatAmp: 4 },
    { cx: 345, cy: 20, s: 14, depth: 9,  accent: "blue",  delay: 0.08, floatAmp: 8 },
    { cx: 415, cy: 55, s: 22, depth: 14, accent: "coral", delay: 0.24, floatAmp: 5 },
    { cx: 490, cy: 18, s: 16, depth: 10, accent: "amber", delay: 0.14, floatAmp: 7 },
    { cx: 560, cy: 52, s: 20, depth: 13, accent: "blue",  delay: 0.3,  floatAmp: 6 },
    { cx: 635, cy: 22, s: 18, depth: 11, accent: "coral", delay: 0.2,  floatAmp: 5 },
    { cx: 700, cy: 54, s: 14, depth: 9,  accent: "amber", delay: 0.36, floatAmp: 7 },
  ],
};

export function IsometricDecor({
  className = "",
  density = "normal",
}: IsometricDecorProps) {
  const reduce = useReducedMotion();
  const cubes = CUBE_SETS[density];
  const viewH = 90;

  return (
    <div className={`isometric-decor-wrap ${className}`} aria-hidden="true">
      <svg viewBox={`0 0 720 ${viewH}`} className="isometric-decor-svg" preserveAspectRatio="xMidYMid meet">
        {cubes.map((c, i) => (
          <IsoCube key={i} {...c} reduce={!!reduce} />
        ))}
      </svg>
    </div>
  );
}

/** Full-section isometric grid background — subtle repeating cubes */
export function IsometricBackground({
  className = "",
  accent = "amber",
}: {
  className?: string;
  accent?: Accent;
}) {
  const reduce = useReducedMotion();
  const pal = accentPalettes[accent];

  // A tight 5×3 grid of small isometric cubes
  const gridCubes: { cx: number; cy: number; s: number; d: number; delay: number }[] = [];
  const cols = 8;
  const rows = 3;
  const s = 36;
  const depth = 20;
  const spacingX = 80;
  const spacingY = 56;
  const startX = 40;
  const startY = 24;

  for (let row = 0; row < rows; row++) {
    for (let col = 0; col < cols; col++) {
      const cx = startX + col * spacingX + (row % 2) * (spacingX / 2);
      const cy = startY + row * spacingY;
      gridCubes.push({ cx, cy, s, d: depth, delay: (col + row * cols) * 0.04 });
    }
  }

  return (
    <div className={`isometric-bg-wrap ${className}`} aria-hidden="true">
      <svg viewBox="0 0 680 220" className="isometric-bg-svg" preserveAspectRatio="xMidYMid meet">
        {gridCubes.map((c, i) => (
          <motion.g
            key={i}
            initial={reduce ? false : { opacity: 0 }}
            whileInView={reduce ? {} : { opacity: 1 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.6, delay: c.delay }}
          >
            <polygon
              points={cubeFacePoints(c.cx, c.cy, c.s, c.d, "top")}
              fill={pal.top}
              stroke={pal.stroke}
              strokeWidth="0.6"
            />
            <polygon
              points={cubeFacePoints(c.cx, c.cy, c.s, c.d, "left")}
              fill={pal.left}
              stroke={pal.stroke}
              strokeWidth="0.6"
            />
            <polygon
              points={cubeFacePoints(c.cx, c.cy, c.s, c.d, "right")}
              fill={pal.right}
              stroke={pal.stroke}
              strokeWidth="0.6"
            />
          </motion.g>
        ))}
      </svg>
    </div>
  );
}
