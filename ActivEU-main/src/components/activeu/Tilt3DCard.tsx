import { useRef } from "react";
import { motion, useMotionValue, useMotionTemplate, useSpring, useTransform, useReducedMotion } from "framer-motion";

type Tilt3DCardProps = {
  children: React.ReactNode;
  className?: string;
  /** Max tilt angle in degrees */
  maxTilt?: number;
  /** Scale on hover */
  hoverScale?: number;
  /** Perspective depth in px */
  perspective?: number;
  /** Show glare overlay */
  glare?: boolean;
};

export function Tilt3DCard({
  children,
  className = "",
  maxTilt = 12,
  hoverScale = 1.03,
  perspective = 900,
  glare = true,
}: Tilt3DCardProps) {
  const reduce = useReducedMotion();
  const ref = useRef<HTMLDivElement>(null);

  const rawX = useMotionValue(0);
  const rawY = useMotionValue(0);
  const glareX = useMotionValue(50);
  const glareY = useMotionValue(50);

  const springConfig = { stiffness: 260, damping: 22 };
  const rotateX = useSpring(useTransform(rawY, [-0.5, 0.5], [maxTilt, -maxTilt]), springConfig);
  const rotateY = useSpring(useTransform(rawX, [-0.5, 0.5], [-maxTilt, maxTilt]), springConfig);

  const glareBackground = useMotionTemplate`radial-gradient(circle at ${glareX}% ${glareY}%, rgba(255,255,255,0.28) 0%, rgba(255,255,255,0) 65%)`;

  function onMouseMove(e: React.MouseEvent<HTMLDivElement>) {
    if (reduce || !ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    rawX.set(x);
    rawY.set(y);
    glareX.set(((e.clientX - rect.left) / rect.width) * 100);
    glareY.set(((e.clientY - rect.top) / rect.height) * 100);
  }

  function onMouseLeave() {
    rawX.set(0);
    rawY.set(0);
    glareX.set(50);
    glareY.set(50);
  }

  if (reduce) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      ref={ref}
      className={`tilt-3d-card ${className}`}
      style={{
        perspective,
        rotateX,
        rotateY,
        transformStyle: "preserve-3d",
      }}
      whileHover={{ scale: hoverScale }}
      transition={{ type: "spring", stiffness: 260, damping: 22 }}
      onMouseMove={onMouseMove}
      onMouseLeave={onMouseLeave}
    >
      {children}
      {glare && (
        <motion.div
          className="tilt-3d-glare"
          style={{ background: glareBackground }}
          aria-hidden="true"
        />
      )}
    </motion.div>
  );
}
