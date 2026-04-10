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
    <div ref={ref} className="rounded-[22px] border border-white/10 bg-white/5 px-4 py-4">
      <p className="font-display text-3xl text-white tabular-nums">
        {prefix}
        {text}
        {suffix}
      </p>
      <p className="mt-2 text-xs uppercase tracking-[0.18em] text-white/58">{label}</p>
    </div>
  );
}

function formatValue(v: number, decimals: number) {
  if (decimals <= 0) return String(Math.round(v));
  return v.toFixed(decimals).replace(/\.?0+$/, "");
}
