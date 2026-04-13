import { useEffect, useState } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";

export function PageLoader() {
  const [visible, setVisible] = useState(true);
  const reduce = useReducedMotion();

  useEffect(() => {
    const timer = setTimeout(() => setVisible(false), reduce ? 100 : 2000);
    return () => clearTimeout(timer);
  }, [reduce]);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          className="page-loader"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, scale: 1.04 }}
          transition={{ duration: 0.7, ease: [0.4, 0, 0.2, 1] }}
        >
          {/* Background gradient */}
          <div className="page-loader-bg" />

          {/* Animated EU star ring — self-drawing SVG */}
          <motion.svg
            className="page-loader-star-ring"
            viewBox="0 0 200 200"
            fill="none"
            width="200" height="200"
          >
            {/* 12 EU stars in a circle, drawn one by one */}
            {Array.from({ length: 12 }).map((_, i) => {
              const angle = (i / 12) * Math.PI * 2 - Math.PI / 2;
              const r = 72;
              const cx = 100 + r * Math.cos(angle);
              const cy = 100 + r * Math.sin(angle);
              return (
                <motion.path
                  key={i}
                  d={`M${cx} ${cy - 7} L${cx + 1.8} ${cy - 2.4} L${cx + 6.5} ${cy - 2.4} L${cx + 2.9} ${cy + 0.9} L${cx + 4} ${cy + 5.6} L${cx} ${cy + 2.6} L${cx - 4} ${cy + 5.6} L${cx - 2.9} ${cy + 0.9} L${cx - 6.5} ${cy - 2.4} L${cx - 1.8} ${cy - 2.4} Z`}
                  fill="#ffb007"
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.1 + i * 0.06, duration: 0.3, ease: "backOut" }}
                  style={{ transformOrigin: `${cx}px ${cy}px` }}
                />
              );
            })}
            {/* Center circle — self-drawing */}
            <motion.circle
              cx="100" cy="100" r="38"
              stroke="#1a3a8f"
              strokeWidth="3"
              fill="none"
              pathLength={1}
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: 1 }}
              transition={{ duration: 0.9, ease: "easeInOut" }}
            />
            {/* ActivEU text hint */}
            <motion.text
              x="100" y="107"
              textAnchor="middle"
              fontFamily="Manrope, sans-serif"
              fontSize="16"
              fontWeight="700"
              fill="#1a3a8f"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7, duration: 0.5 }}
            >
              ActivEU
            </motion.text>
          </motion.svg>

          {/* Progress bar */}
          <div className="page-loader-bar-track">
            <motion.div
              className="page-loader-bar-fill"
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 1.7, ease: [0.4, 0, 0.2, 1] }}
              style={{ transformOrigin: "left" }}
            />
          </div>

          {/* Tagline */}
          <motion.p
            className="page-loader-tagline"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.6 }}
          >
            Solidariedade que se sente viva
          </motion.p>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
