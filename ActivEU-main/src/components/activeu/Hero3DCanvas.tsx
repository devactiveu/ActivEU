import { Suspense, useEffect, useRef, useCallback, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { useInView, useMotionValue } from "framer-motion";
import { Hero3DScene } from "./Hero3DScene";

type Hero3DCanvasProps = {
  reduceMotion: boolean;
  eager?: boolean;
  className?: string;
};

export default function Hero3DCanvas({ reduceMotion, eager = false, className = "" }: Hero3DCanvasProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const inView = useInView(containerRef, { amount: 0.05, margin: "0px 0px -10% 0px" });
  const showCanvas = eager || inView;
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const [allow3D, setAllow3D] = useState(true);

  useEffect(() => {
    const smallViewport = window.matchMedia("(max-width: 767px)").matches;
    const coarsePointer = window.matchMedia("(pointer: coarse)").matches;
    const lowMemory = typeof navigator !== "undefined" && "deviceMemory" in navigator
      ? ((navigator as Navigator & { deviceMemory?: number }).deviceMemory ?? 8) <= 4
      : false;
    setAllow3D(!(smallViewport && coarsePointer) && !lowMemory);
  }, []);

  const handleMouseMove = useCallback(
    (e: React.MouseEvent) => {
      const rect = containerRef.current?.getBoundingClientRect();
      if (!rect) return;
      mouseX.set((e.clientX - rect.left) / rect.width - 0.5);
      mouseY.set((e.clientY - rect.top) / rect.height - 0.5);
    },
    [mouseX, mouseY],
  );

  if (reduceMotion) {
    return null;
  }

  return (
    <div
      ref={containerRef}
      className={`pointer-events-auto ${className}`}
      aria-hidden="true"
      onMouseMove={handleMouseMove}
      onMouseLeave={() => {
        mouseX.set(0);
        mouseY.set(0);
      }}
    >
      {showCanvas && allow3D ? (
        <Suspense
          fallback={
            <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-primary/[0.07] to-blue-500/[0.08]">
              <div className="h-24 w-24 animate-pulse rounded-full bg-gradient-to-tr from-amber-400/30 to-blue-400/20 blur-xl" />
            </div>
          }
        >
          <Canvas
            className="!h-full !w-full touch-none"
            camera={{ position: [0, 0.2, 4.8], fov: 42 }}
            dpr={[1, 1.5]}
            gl={{
              alpha: true,
              antialias: true,
              powerPreference: "high-performance",
            }}
          >
            <Hero3DScene mouseX={mouseX} mouseY={mouseY} />
          </Canvas>
        </Suspense>
      ) : showCanvas ? (
        <div className="hero-3d-poster" aria-hidden="true">
          <div className="hero-3d-poster-orb hero-3d-poster-orb-a" />
          <div className="hero-3d-poster-orb hero-3d-poster-orb-b" />
          <div className="hero-3d-poster-ring" />
          <div className="hero-3d-poster-ring hero-3d-poster-ring-alt" />
        </div>
      ) : null}
    </div>
  );
}
