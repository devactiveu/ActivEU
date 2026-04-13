import { useEffect, useRef, useState } from "react";
import { animate, useInView, useMotionValue, useReducedMotion } from "framer-motion";

type AnimatedMetricProps = {
  end: number;
  suffix?: string;
  prefix?: string;
  label: string;
  decimals?: number;
  duration?: number;
};

export function AnimatedMetric({
  end,
  suffix = "",
  prefix = "",
  label,
  decimals = 0,
  duration = 1.65,
}: AnimatedMetricProps) {
  const ref = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();
  const inView = useInView(ref, { once: true, margin: "-24px", amount: 0.4 });
  const mv = useMotionValue(0);
  const [text, setText] = useState("0");

  useEffect(() => {
    if (reduce) {
      setText(formatValue(end, decimals));
      return;
    }
    if (!inView) return;
    const ctrl = animate(mv, end, {
      duration,
      ease: [0.22, 1, 0.36, 1],
      onUpdate: (v) => setText(formatValue(v, decimals)),
    });
    return () => ctrl.stop();
  }, [inView, end, decimals, duration, reduce, mv]);

  return (
    <div
      ref={ref}
      className="rounded-[22px] px-5 py-4"
      style={{
        border: "1px solid rgba(255,255,255,0.1)",
        background: "linear-gradient(145deg, rgba(255,255,255,0.09), rgba(255,255,255,0.04))",
        boxShadow: "inset 0 1px 0 rgba(255,255,255,0.1), 0 4px 16px rgba(0,0,0,0.12)",
        backdropFilter: "blur(12px)",
      }}
    >
      <p
        className="font-display text-[2rem] leading-none tabular-nums"
        style={{ color: "white", textShadow: "0 0 40px rgba(255,168,7,0.3)" }}
      >
        {prefix}{text}{suffix}
      </p>
      <p className="mt-2 text-[0.7rem] font-semibold uppercase tracking-[0.2em] text-white/52">{label}</p>
    </div>
  );
}

function formatValue(v: number, decimals: number) {
  if (decimals <= 0) return String(Math.round(v));
  return v.toFixed(decimals).replace(/\.?0+$/, "");
}
