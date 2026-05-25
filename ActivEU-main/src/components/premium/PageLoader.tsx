import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useReducedMotion } from "framer-motion";

const CHARS = "ACTIVEU".split("");

export function PageLoader() {
  const reduceMotion = useReducedMotion();
  const [visible, setVisible] = useState(() => {
    if (typeof window === "undefined") return false;
    if (reduceMotion) return false;
    return !sessionStorage.getItem("loader-shown");
  });

  useEffect(() => {
    if (!visible) return;
    const timer = setTimeout(() => {
      setVisible(false);
      sessionStorage.setItem("loader-shown", "1");
    }, 1600);
    return () => clearTimeout(timer);
  }, [visible]);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          className="fixed inset-0 z-[200] flex flex-col items-center justify-center bg-[#050919]"
          exit={{
            clipPath: ["inset(0%)", "inset(50% 0%)"],
            transition: { duration: 0.4, ease: [0.76, 0, 0.24, 1], delay: 0.05 },
          }}
        >
          <div className="flex flex-col items-center gap-6">
            <motion.img
              src="/Imagens/icon.png"
              alt="ActivEU"
              className="h-16 w-16 rounded-2xl"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            />

            <div className="flex items-center gap-[2px]" aria-label="ACTIVEU">
              {CHARS.map((char, i) => (
                <motion.span
                  key={i}
                  className="font-display text-3xl font-bold tracking-[0.18em] text-white"
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.4,
                    delay: 0.35 + i * 0.05,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                >
                  {char}
                </motion.span>
              ))}
            </div>

            <motion.p
              className="text-sm tracking-[0.22em] text-white/40"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.4, delay: 0.75 }}
            >
              {`juventude · empresas · causas`}
            </motion.p>

            <motion.div
              className="h-px w-40"
              initial={{ scaleX: 0, opacity: 0 }}
              animate={{ scaleX: 1, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.9, ease: [0.22, 1, 0.36, 1] }}
              style={{
                background: "linear-gradient(90deg, transparent, #5876ff, #e94e77, transparent)",
                transformOrigin: "left",
              }}
            />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
