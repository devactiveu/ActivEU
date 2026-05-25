import { useRef } from "react";
import { useReducedMotion } from "framer-motion";
import { useMousePosition } from "@/hooks/useMousePosition";
import { useCanvasParticles } from "@/hooks/useCanvasParticles";

export function HeroParticleField({ className }: { className?: string }) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const mouseRef = useMousePosition();
  const reduceMotion = useReducedMotion() ?? false;

  useCanvasParticles(canvasRef, mouseRef, reduceMotion);

  return (
    <canvas
      ref={canvasRef}
      className={className}
      style={{ width: "100%", height: "100%" }}
      aria-hidden="true"
    />
  );
}
