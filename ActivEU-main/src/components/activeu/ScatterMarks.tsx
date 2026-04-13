import { motion, useReducedMotion } from "framer-motion";

type MarkType = "star4" | "star6" | "cross" | "circle" | "diamond" | "triangle" | "dot" | "squiggle" | "asterisk" | "heart";
type AnimType = "float" | "spin" | "pulse" | "drift";

type MarkDef = {
  type: MarkType;
  x: number;
  y: number;
  size: number;
  color: string;
  delay: number;
  duration: number;
  animType: AnimType;
  opacity: number;
  rotate: number;
};

// Pre-defined positions — deterministic, no randomness
const MARKS: MarkDef[] = [
  { type: "star4",    x: 3,  y: 12, size: 32, color: "#ffb007", delay: 0,    duration: 5.2, animType: "float",  opacity: 0.92, rotate: 0 },
  { type: "cross",    x: 8,  y: 68, size: 22, color: "#3b82f6", delay: 0.4,  duration: 6.1, animType: "spin",   opacity: 0.82, rotate: 20 },
  { type: "circle",  x: 14, y: 38, size: 36, color: "#f97316", delay: 0.7,  duration: 7.0, animType: "pulse",  opacity: 0.75, rotate: 0 },
  { type: "dot",     x: 19, y: 82, size: 14, color: "#ffb007", delay: 0.2,  duration: 4.8, animType: "float",  opacity: 0.95, rotate: 0 },
  { type: "star6",   x: 25, y: 18, size: 28, color: "#3b82f6", delay: 1.1,  duration: 5.8, animType: "spin",   opacity: 0.85, rotate: 10 },
  { type: "diamond", x: 30, y: 55, size: 26, color: "#f97316", delay: 0.6,  duration: 6.4, animType: "drift",  opacity: 0.78, rotate: 45 },
  { type: "triangle",x: 36, y: 28, size: 24, color: "#ffb007", delay: 1.5,  duration: 5.5, animType: "float",  opacity: 0.82, rotate: 0 },
  { type: "squiggle",x: 42, y: 74, size: 42, color: "#3b82f6", delay: 0.9,  duration: 7.2, animType: "pulse",  opacity: 0.72, rotate: -10 },
  { type: "asterisk",x: 48, y: 14, size: 28, color: "#f97316", delay: 0.3,  duration: 4.6, animType: "spin",   opacity: 0.88, rotate: 0 },
  { type: "star4",   x: 54, y: 88, size: 26, color: "#ffb007", delay: 1.2,  duration: 5.9, animType: "float",  opacity: 0.85, rotate: 15 },
  { type: "dot",     x: 60, y: 42, size: 16, color: "#3b82f6", delay: 0.8,  duration: 6.3, animType: "pulse",  opacity: 0.90, rotate: 0 },
  { type: "cross",   x: 67, y: 22, size: 28, color: "#f97316", delay: 1.4,  duration: 5.1, animType: "drift",  opacity: 0.80, rotate: -20 },
  { type: "circle",  x: 72, y: 66, size: 34, color: "#ffb007", delay: 0.5,  duration: 7.5, animType: "float",  opacity: 0.70, rotate: 0 },
  { type: "star6",   x: 78, y: 35, size: 30, color: "#3b82f6", delay: 1.0,  duration: 5.7, animType: "spin",   opacity: 0.87, rotate: 5 },
  { type: "triangle",x: 84, y: 78, size: 22, color: "#f97316", delay: 0.15, duration: 6.8, animType: "float",  opacity: 0.75, rotate: 180 },
  { type: "diamond", x: 90, y: 20, size: 24, color: "#ffb007", delay: 1.6,  duration: 5.3, animType: "pulse",  opacity: 0.88, rotate: 45 },
  { type: "squiggle",x: 95, y: 55, size: 38, color: "#3b82f6", delay: 0.7,  duration: 6.6, animType: "drift",  opacity: 0.74, rotate: 15 },
  { type: "heart",   x: 6,  y: 50, size: 28, color: "#f97316", delay: 1.8,  duration: 8.0, animType: "pulse",  opacity: 0.80, rotate: 0 },
  { type: "asterisk",x: 45, y: 48, size: 24, color: "#ffb007", delay: 0.6,  duration: 5.4, animType: "spin",   opacity: 0.84, rotate: 0 },
  { type: "dot",     x: 88, y: 90, size: 12, color: "#3b82f6", delay: 2.0,  duration: 4.9, animType: "float",  opacity: 0.92, rotate: 0 },
];

function MarkShape({ type, size, color }: { type: MarkType; size: number; color: string }) {
  const s = size;
  const h = s / 2;
  const sw = Math.max(1.5, s * 0.1);

  switch (type) {
    case "star4":
      return (
        <svg width={s} height={s} viewBox="0 0 20 20" fill="none">
          <path d="M10 1L11.5 8.5L19 10L11.5 11.5L10 19L8.5 11.5L1 10L8.5 8.5Z"
            fill={color} opacity="0.9" />
        </svg>
      );
    case "star6":
      return (
        <svg width={s} height={s} viewBox="0 0 24 24" fill="none">
          <path d="M12 2L13.8 9.2L21 10L13.8 12.8L14 20L12 13.6L10 20L10.2 12.8L3 10L10.2 9.2Z"
            fill={color} opacity="0.85" />
        </svg>
      );
    case "cross":
      return (
        <svg width={s} height={s} viewBox="0 0 20 20" fill="none">
          <path d="M9 1V19M1 10H19" stroke={color} strokeWidth={sw * 1.8} strokeLinecap="round" />
        </svg>
      );
    case "circle":
      return (
        <svg width={s} height={s} viewBox="0 0 24 24" fill="none">
          <circle cx="12" cy="12" r="9" stroke={color} strokeWidth={sw * 1.6} />
        </svg>
      );
    case "diamond":
      return (
        <svg width={s} height={s} viewBox="0 0 20 20" fill="none">
          <path d="M10 2L18 10L10 18L2 10Z" fill={color} opacity="0.8" />
        </svg>
      );
    case "triangle":
      return (
        <svg width={s} height={s} viewBox="0 0 20 20" fill="none">
          <path d="M10 2L19 18H1Z" stroke={color} strokeWidth={sw * 1.4} strokeLinejoin="round" fill="none" />
        </svg>
      );
    case "dot":
      return (
        <svg width={s} height={s} viewBox="0 0 12 12" fill="none">
          <circle cx="6" cy="6" r="5" fill={color} />
        </svg>
      );
    case "squiggle":
      return (
        <svg width={s} height={s * 0.5} viewBox="0 0 40 20" fill="none">
          <path d="M2 10C6 4 10 16 14 10C18 4 22 16 26 10C30 4 34 16 38 10"
            stroke={color} strokeWidth={sw * 1.5} strokeLinecap="round" fill="none" />
        </svg>
      );
    case "asterisk":
      return (
        <svg width={s} height={s} viewBox="0 0 20 20" fill="none">
          <path d="M10 2V18M2 10H18M4 4L16 16M16 4L4 16"
            stroke={color} strokeWidth={sw * 1.4} strokeLinecap="round" />
        </svg>
      );
    case "heart":
      return (
        <svg width={s} height={s} viewBox="0 0 24 24" fill="none">
          <path d="M12 21C12 21 3 14 3 8.5C3 5.4 5.4 3 8.5 3C10.2 3 11.7 3.8 12 5C12.3 3.8 13.8 3 15.5 3C18.6 3 21 5.4 21 8.5C21 14 12 21 12 21Z"
            stroke={color} strokeWidth={sw * 1.3} fill="none" />
        </svg>
      );
    default:
      return null;
  }
}

function Mark({ mark, index }: { mark: MarkDef; index: number }) {
  const reduce = useReducedMotion();

  const floatAnim = { y: [0, -12, 0], rotate: [mark.rotate, mark.rotate + 4, mark.rotate] };
  const spinAnim = { rotate: [mark.rotate, mark.rotate + 360] };
  const pulseAnim = { scale: [1, 1.18, 1], opacity: [mark.opacity, mark.opacity * 0.55, mark.opacity] };
  const driftAnim = { x: [0, 8, -4, 0], y: [0, -8, 4, 0], rotate: [mark.rotate, mark.rotate + 6, mark.rotate] };

  const animMap: Record<AnimType, object> = {
    float: floatAnim,
    spin: spinAnim,
    pulse: pulseAnim,
    drift: driftAnim,
  };

  return (
    <motion.div
      key={index}
      className="pointer-events-none absolute select-none"
      style={{ left: `${mark.x}%`, top: `${mark.y}%`, opacity: mark.opacity }}
      animate={reduce ? undefined : animMap[mark.animType]}
      transition={{
        duration: mark.duration,
        delay: mark.delay,
        repeat: Infinity,
        ease: "easeInOut",
        repeatType: mark.animType === "spin" ? "loop" : "mirror",
      }}
    >
      <MarkShape type={mark.type} size={mark.size} color={mark.color} />
    </motion.div>
  );
}

type ScatterMarksProps = {
  className?: string;
  density?: "low" | "medium" | "high";
  /** Limit to specific color accents */
  palette?: ("amber" | "blue" | "coral")[];
};

export function ScatterMarks({ className = "", density = "medium", palette }: ScatterMarksProps) {
  const reduce = useReducedMotion();
  if (reduce) return null;

  const colorMap = { amber: "#ffb007", blue: "#3b82f6", coral: "#f97316" };
  const allowed = palette
    ? new Set(palette.map((p) => colorMap[p]))
    : null;

  let marks = MARKS;
  if (allowed) marks = marks.filter((m) => allowed.has(m.color));
  if (density === "low") marks = marks.filter((_, i) => i % 3 === 0);
  if (density === "high") {
    // duplicate with offset
    marks = [
      ...marks,
      ...marks.slice(0, 8).map((m) => ({
        ...m,
        x: (m.x + 7) % 94,
        y: (m.y + 15) % 90,
        delay: m.delay + 1.2,
      })),
    ];
  }

  return (
    <div className={`pointer-events-none absolute inset-0 overflow-hidden ${className}`} aria-hidden="true">
      {marks.map((mark, i) => (
        <Mark key={i} mark={mark} index={i} />
      ))}
    </div>
  );
}
