import { useRef, useState } from "react";
import { motion, useMotionTemplate, useMotionValue, useReducedMotion, useSpring, useTransform } from "framer-motion";

type GlowColor = "sunbeam" | "electric" | "coral" | "lime" | "magenta" | "rainbow";

const glowPalette: Record<GlowColor, string> = {
  sunbeam: "rgba(255, 176, 32, 0.45)",
  electric: "rgba(30, 64, 255, 0.45)",
  coral: "rgba(255, 94, 91, 0.45)",
  lime: "rgba(183, 233, 52, 0.45)",
  magenta: "rgba(233, 78, 119, 0.45)",
  rainbow:
    "conic-gradient(from 0deg, rgba(255,176,32,0.55), rgba(30,64,255,0.55), rgba(233,78,119,0.55), rgba(183,233,52,0.55), rgba(255,176,32,0.55))",
};

export function Tilt3DCard({
  children,
  className = "",
  maxTilt = 10,
  hoverScale = 1.02,
  glare = true,
  glow = "sunbeam",
}: {
  children: React.ReactNode;
  className?: string;
  maxTilt?: number;
  hoverScale?: number;
  glare?: boolean;
  glow?: GlowColor;
}) {
  const reduceMotion = useReducedMotion();
  const ref = useRef<HTMLDivElement>(null);
  const frameRef = useRef<number | null>(null);
  const [hovering, setHovering] = useState(false);
  const rawX = useMotionValue(0);
  const rawY = useMotionValue(0);
  const glowX = useMotionValue(50);
  const glowY = useMotionValue(50);
  const rotateX = useSpring(useTransform(rawY, [-0.5, 0.5], [maxTilt, -maxTilt]), { stiffness: 180, damping: 20 });
  const rotateY = useSpring(useTransform(rawX, [-0.5, 0.5], [-maxTilt, maxTilt]), { stiffness: 180, damping: 20 });
  const scale = useSpring(1, { stiffness: 220, damping: 22 });
  const background = useMotionTemplate`radial-gradient(circle at ${glowX}% ${glowY}%, rgba(255,255,255,0.35), transparent 55%)`;

  if (reduceMotion) {
    return <div className={className}>{children}</div>;
  }

  const onMouseMove = (event: React.MouseEvent<HTMLDivElement>) => {
    if (frameRef.current !== null) return;
    const clientX = event.clientX;
    const clientY = event.clientY;
    frameRef.current = requestAnimationFrame(() => {
      const rect = ref.current?.getBoundingClientRect();
      if (rect) {
        const x = (clientX - rect.left) / rect.width - 0.5;
        const y = (clientY - rect.top) / rect.height - 0.5;
        rawX.set(x);
        rawY.set(y);
        glowX.set(((clientX - rect.left) / rect.width) * 100);
        glowY.set(((clientY - rect.top) / rect.height) * 100);
      }
      frameRef.current = null;
    });
  };

  const onMouseEnter = () => {
    setHovering(true);
    scale.set(hoverScale);
  };

  const onMouseLeave = () => {
    setHovering(false);
    rawX.set(0);
    rawY.set(0);
    glowX.set(50);
    glowY.set(50);
    scale.set(1);
  };

  return (
    <div className={`relative ${className}`} style={{ perspective: "1200px" }}>
      <motion.div
        aria-hidden="true"
        className="pointer-events-none absolute -inset-2 rounded-[inherit]"
        style={{
          background: glow === "rainbow" ? glowPalette.rainbow : undefined,
          backgroundColor: glow !== "rainbow" ? glowPalette[glow] : undefined,
          filter: "blur(22px)",
          zIndex: 0,
        }}
        animate={{ opacity: hovering ? 0.95 : 0 }}
        transition={{ duration: 0.45 }}
      />
      <motion.div
        ref={ref}
        className="relative h-full"
        style={{
          rotateX,
          rotateY,
          scale,
          transformStyle: "preserve-3d",
          background: glare ? background : undefined,
          borderRadius: "inherit",
          zIndex: 1,
        }}
        onMouseMove={onMouseMove}
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
      >
        {children}
      </motion.div>
    </div>
  );
}
