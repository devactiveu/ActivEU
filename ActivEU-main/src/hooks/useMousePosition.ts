import { useEffect, useRef } from "react";

export interface MousePosition {
  x: number;
  y: number;
}

export function useMousePosition() {
  const pos = useRef<MousePosition>({ x: 0, y: 0 });
  const frameRef = useRef<number | null>(null);

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (frameRef.current !== null) return;
      frameRef.current = requestAnimationFrame(() => {
        pos.current = { x: e.clientX, y: e.clientY };
        frameRef.current = null;
      });
    };
    window.addEventListener("mousemove", handler, { passive: true });
    return () => {
      window.removeEventListener("mousemove", handler);
      if (frameRef.current !== null) cancelAnimationFrame(frameRef.current);
    };
  }, []);

  return pos;
}
