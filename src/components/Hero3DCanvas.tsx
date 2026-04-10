import { Suspense, useRef } from "react";
import { Canvas } from "@react-three/fiber";
import { useInView } from "framer-motion";
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

  if (reduceMotion) {
    return null;
  }

  return (
    <div ref={containerRef} className={`pointer-events-none ${className}`} aria-hidden="true">
      {showCanvas ? (
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
            dpr={[1, 2]}
            gl={{
              alpha: true,
              antialias: true,
              powerPreference: "high-performance",
            }}
          >
            <Hero3DScene />
          </Canvas>
        </Suspense>
      ) : null}
    </div>
  );
}
