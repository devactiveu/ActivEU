import { motion, useReducedMotion } from "framer-motion";

type IsometricSceneProps = {
  className?: string;
};

// Isometric projection helpers
function isoX(x: number, y: number) { return (x - y) * 28; }
function isoY(x: number, y: number, z: number) { return (x + y) * 14 - z * 28; }

type BlockDef = { gx: number; gy: number; gz: number; height: number; topColor: string; leftColor: string; rightColor: string; label: string; delay: number };

const BLOCKS: BlockDef[] = [
  { gx: 0, gy: 0, gz: 0, height: 2, topColor: "#FFF3CC", leftColor: "#ffb007", rightColor: "#e09800", label: "Jovens", delay: 0 },
  { gx: 2, gy: 0, gz: 0, height: 3, topColor: "#DBEAFE", leftColor: "#3b82f6", rightColor: "#1d6de5", label: "Empresas", delay: 0.15 },
  { gx: 1, gy: 2, gz: 0, height: 2, topColor: "#FFE4DC", leftColor: "#f97316", rightColor: "#d9610e", label: "Causas", delay: 0.30 },
];

function IsoBlock({ block }: { block: BlockDef }) {
  const reduce = useReducedMotion();
  const { gx, gy, gz, height, topColor, leftColor, rightColor, delay } = block;

  const bx = isoX(gx, gy);
  const by = isoY(gx, gy, gz);
  const w = 28; // half-width
  const h = height * 28;

  // Top face diamond
  const top = [
    `${bx},${by - h}`,
    `${bx + w},${by - h + 14}`,
    `${bx},${by - h + 28}`,
    `${bx - w},${by - h + 14}`,
  ].join(" ");

  // Left face
  const left = [
    `${bx - w},${by - h + 14}`,
    `${bx},${by - h + 28}`,
    `${bx},${by + 28}`,
    `${bx - w},${by + 14}`,
  ].join(" ");

  // Right face
  const right = [
    `${bx + w},${by - h + 14}`,
    `${bx},${by - h + 28}`,
    `${bx},${by + 28}`,
    `${bx + w},${by + 14}`,
  ].join(" ");

  return (
    <motion.g
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay, duration: 0.6, ease: "backOut" }}
    >
      <motion.g
        animate={reduce ? undefined : { y: [0, -6, 0] }}
        transition={{ duration: 3 + delay * 2, repeat: Infinity, ease: "easeInOut", delay }}
      >
        <polygon points={left} fill={leftColor} opacity="0.9" />
        <polygon points={right} fill={rightColor} opacity="0.9" />
        <polygon points={top} fill={topColor} stroke="rgba(0,0,0,0.12)" strokeWidth="0.5" />
        <text x={bx} y={by - h - 8} textAnchor="middle" fontSize="9" fontFamily="Manrope, sans-serif" fontWeight="700" fill="#1a3a8f" opacity="0.8">
          {block.label}
        </text>
      </motion.g>
    </motion.g>
  );
}

export function IsometricScene({ className = "" }: IsometricSceneProps) {
  const reduce = useReducedMotion();

  return (
    <div className={`isometric-scene ${className}`}>
      <svg viewBox="-80 -120 280 220" width="100%" height="100%" overflow="visible">
        {/* Grid lines hint */}
        {[0, 1, 2, 3].map((i) => (
          <line
            key={`h${i}`}
            x1={isoX(i, 0)} y1={isoY(i, 0, 0)}
            x2={isoX(i, 4)} y2={isoY(i, 4, 0)}
            stroke="rgba(26,58,143,0.08)" strokeWidth="1"
          />
        ))}
        {[0, 1, 2, 3, 4].map((j) => (
          <line
            key={`v${j}`}
            x1={isoX(0, j)} y1={isoY(0, j, 0)}
            x2={isoX(3, j)} y2={isoY(3, j, 0)}
            stroke="rgba(26,58,143,0.08)" strokeWidth="1"
          />
        ))}

        {BLOCKS.map((block) => (
          <IsoBlock key={block.label} block={block} />
        ))}

        {/* EU stars floating */}
        {[
          { x: 80, y: -80, delay: 0.8 },
          { x: -30, y: -60, delay: 1.2 },
          { x: 120, y: -30, delay: 1.6 },
        ].map((star, i) => (
          <motion.path
            key={i}
            d={`M${star.x} ${star.y - 6} L${star.x + 1.5} ${star.y - 2} L${star.x + 5.5} ${star.y - 2} L${star.x + 2.5} ${star.y + 1} L${star.x + 3.5} ${star.y + 5} L${star.x} ${star.y + 2.5} L${star.x - 3.5} ${star.y + 5} L${star.x - 2.5} ${star.y + 1} L${star.x - 5.5} ${star.y - 2} L${star.x - 1.5} ${star.y - 2} Z`}
            fill="#ffb007"
            initial={{ opacity: 0, scale: 0 }}
            animate={reduce ? { opacity: 0.7 } : { opacity: [0.7, 1, 0.7], scale: [1, 1.2, 1], y: [0, -8, 0] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: star.delay }}
            style={{ transformOrigin: `${star.x}px ${star.y}px` }}
          />
        ))}

        {/* Connector doodle lines */}
        <motion.path
          d="M28 28 C40 10 70 10 84 28"
          stroke="#3b82f6" strokeWidth="1.5" strokeDasharray="4 3" fill="none" strokeLinecap="round"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 1.2, delay: 0.8, ease: "easeInOut" }}
        />
        <motion.path
          d="M0 14 C10 0 50 -10 56 14"
          stroke="#ffb007" strokeWidth="1.5" strokeDasharray="4 3" fill="none" strokeLinecap="round"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 1.2, delay: 1.0, ease: "easeInOut" }}
        />
      </svg>
    </div>
  );
}
