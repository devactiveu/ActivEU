import { motion, useReducedMotion } from "framer-motion";

type LiquidDividerProps = {
  className?: string;
  color?: string;
  flip?: boolean;
  height?: number;
};

const PATHS = [
  "M0,60 C80,100 160,20 240,60 C320,100 400,20 480,60 L480,120 L0,120 Z",
  "M0,70 C60,30 140,100 220,50 C300,10 380,90 480,55 L480,120 L0,120 Z",
  "M0,50 C100,90 180,15 280,70 C360,110 440,30 480,65 L480,120 L0,120 Z",
];

export function LiquidDivider({ className = "", color = "hsl(40 100% 96%)", flip = false, height = 70 }: LiquidDividerProps) {
  const reduce = useReducedMotion();

  return (
    <div
      className={`liquid-divider-wrap ${className}`}
      style={{ height, transform: flip ? "scaleY(-1)" : undefined }}
      aria-hidden="true"
    >
      <svg
        viewBox="0 0 480 120"
        preserveAspectRatio="none"
        width="100%"
        height="100%"
        xmlns="http://www.w3.org/2000/svg"
      >
        <motion.path
          d={PATHS[0]}
          fill={color}
          animate={reduce ? undefined : { d: [PATHS[0], PATHS[1], PATHS[2], PATHS[0]] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        />
      </svg>
    </div>
  );
}
