import { motion, useReducedMotion } from "framer-motion";

type GlassPanelProps = {
  children: React.ReactNode;
  className?: string;
  variant?: "light" | "dark" | "colored";
  tint?: "amber" | "blue" | "coral" | "none";
};

export function GlassPanel({ children, className = "", variant = "light", tint = "none" }: GlassPanelProps) {
  const reduce = useReducedMotion();

  const tintMap = {
    amber: "hsl(40 100% 56% / 0.12)",
    blue: "hsl(217 90% 60% / 0.10)",
    coral: "hsl(17 97% 67% / 0.12)",
    none: "rgba(255,255,255,0.62)",
  };

  const bgMap = {
    light: `linear-gradient(135deg, rgba(255,255,255,0.72), rgba(255,255,255,0.42))`,
    dark: `linear-gradient(135deg, rgba(11,31,92,0.72), rgba(11,31,92,0.42))`,
    colored: `linear-gradient(135deg, ${tintMap[tint]}, rgba(255,255,255,0.18))`,
  };

  return (
    <motion.div
      className={`glass-panel glass-panel-${variant} ${tint !== "none" ? `glass-panel-tint-${tint}` : ""} ${className}`}
      style={{ background: bgMap[variant] }}
      whileHover={reduce ? undefined : { scale: 1.01, y: -2 }}
      transition={{ type: "spring", stiffness: 280, damping: 20 }}
    >
      {children}
    </motion.div>
  );
}
