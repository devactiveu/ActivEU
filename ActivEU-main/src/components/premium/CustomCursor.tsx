import { useEffect, useRef, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

const sectionColors: Record<string, string> = {
  hero: "#1e40ff",
  model: "#ffb020",
  proof: "#e94e77",
  stories: "#b7e934",
  contact: "#ff5e5b",
};

type TrailDot = { id: number; x: number; y: number };

let dotId = 0;

export function CustomCursor({ activeSection }: { activeSection: string }) {
  const [visible, setVisible] = useState(false);
  const [trail, setTrail] = useState<TrailDot[]>([]);
  const [magnetic, setMagnetic] = useState<{ x: number; y: number } | null>(null);
  const trailTimerRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const lastMouseRef = useRef({ x: 0, y: 0 });

  const outerX = useMotionValue(0);
  const outerY = useMotionValue(0);
  const innerX = useMotionValue(0);
  const innerY = useMotionValue(0);

  const springX = useSpring(outerX, { stiffness: 120, damping: 14 });
  const springY = useSpring(outerY, { stiffness: 120, damping: 14 });

  const color = sectionColors[activeSection] ?? "#1e40ff";

  useEffect(() => {
    if (typeof window === "undefined") return;
    if (window.matchMedia("(pointer: coarse)").matches) return;

    document.body.style.cursor = "none";

    const onMove = (e: MouseEvent) => {
      lastMouseRef.current = { x: e.clientX, y: e.clientY };
      innerX.set(e.clientX);
      innerY.set(e.clientY);

      const magneticEl = (e.target as Element)?.closest("[data-magnetic]");
      if (magneticEl) {
        const rect = magneticEl.getBoundingClientRect();
        const cx = rect.left + rect.width / 2;
        const cy = rect.top + rect.height / 2;
        const dx = e.clientX - cx;
        const dy = e.clientY - cy;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < 80) {
          outerX.set(cx + dx * 0.35);
          outerY.set(cy + dy * 0.35);
          setMagnetic({ x: cx, y: cy });
          return;
        }
      }

      outerX.set(e.clientX);
      outerY.set(e.clientY);
      setMagnetic(null);
      setVisible(true);
    };

    const onLeave = () => setVisible(false);
    const onEnter = () => setVisible(true);

    window.addEventListener("mousemove", onMove, { passive: true });
    document.addEventListener("mouseleave", onLeave);
    document.addEventListener("mouseenter", onEnter);

    trailTimerRef.current = setInterval(() => {
      const { x, y } = lastMouseRef.current;
      const id = ++dotId;
      setTrail((prev) => [...prev.slice(-11), { id, x, y }]);
      setTimeout(() => {
        setTrail((prev) => prev.filter((d) => d.id !== id));
      }, 600);
    }, 80);

    return () => {
      document.body.style.cursor = "";
      window.removeEventListener("mousemove", onMove);
      document.removeEventListener("mouseleave", onLeave);
      document.removeEventListener("mouseenter", onEnter);
      if (trailTimerRef.current) clearInterval(trailTimerRef.current);
    };
  }, [outerX, outerY, innerX, innerY]);

  if (typeof window !== "undefined" && window.matchMedia("(pointer: coarse)").matches) {
    return null;
  }

  return (
    <>
      {trail.map((dot, i) => (
        <motion.div
          key={dot.id}
          className="pointer-events-none fixed z-[190] rounded-full"
          style={{
            left: dot.x - 4,
            top: dot.y - 4,
            width: 8,
            height: 8,
            background: color,
          }}
          initial={{ scale: 1, opacity: 0.7 }}
          animate={{ scale: 0, opacity: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        />
      ))}

      <motion.div
        className="pointer-events-none fixed z-[199] rounded-full border-2"
        style={{
          x: springX,
          y: springY,
          width: magnetic ? 60 : 40,
          height: magnetic ? 60 : 40,
          translateX: magnetic ? -30 : -20,
          translateY: magnetic ? -30 : -20,
          borderColor: color,
          opacity: visible ? 0.8 : 0,
          transition: "width 0.3s, height 0.3s, opacity 0.2s",
        }}
      />

      <motion.div
        className="pointer-events-none fixed z-[199] rounded-full"
        style={{
          x: innerX,
          y: innerY,
          width: 8,
          height: 8,
          translateX: -4,
          translateY: -4,
          background: color,
          opacity: visible ? 1 : 0,
          transition: "opacity 0.2s",
        }}
      />
    </>
  );
}
