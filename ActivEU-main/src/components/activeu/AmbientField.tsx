import { motion, useReducedMotion } from "framer-motion";
import { MorphingBlob, SparkleStar } from "./MorphingBlob";

export function AmbientField({ className = "" }: { className?: string }) {
  const reduceMotion = useReducedMotion();

  return (
    <div className={`ambient-field ${className}`.trim()} aria-hidden="true">
      {/* Organic morphing background blobs (CSS-based) */}
      {["a", "b", "c", "d"].map((blob, index) => (
        <motion.span
          key={blob}
          className={`ambient-blob ambient-blob-${blob}`}
          animate={
            reduceMotion
              ? undefined
              : {
                  x: [0, index % 2 === 0 ? 28 : -28, 0],
                  y: [0, index % 2 === 0 ? -22 : 24, 0],
                  scale: [1, 1.08, 0.95, 1.04, 1],
                }
          }
          transition={{ duration: 16 + index * 3, repeat: Infinity, ease: "easeInOut" }}
        />
      ))}

      {/* SVG morphing blobs for texture */}
      <MorphingBlob
        variant="sunbeam"
        size={320}
        duration={14}
        className="absolute left-[4%] top-[8%] opacity-50 mix-blend-multiply"
      />
      <MorphingBlob
        variant="electric"
        size={260}
        duration={18}
        delay={1.5}
        className="absolute right-[2%] top-[14%] opacity-45 mix-blend-multiply"
      />
      <MorphingBlob
        variant="magenta"
        size={220}
        duration={16}
        delay={0.8}
        className="absolute left-[46%] bottom-[-10%] opacity-35 mix-blend-multiply"
      />

      {/* Colored dots */}
      {Array.from({ length: 8 }).map((_, index) => (
        <motion.span
          key={index}
          className={`ambient-particle ambient-particle-${index + 1}`}
          animate={
            reduceMotion
              ? undefined
              : {
                  y: [0, -14 - index * 1.5, 0],
                  scale: [1, 1.3, 1],
                  opacity: [0.25, 0.7, 0.25],
                }
          }
          transition={{ duration: 5 + index * 0.4, repeat: Infinity, ease: "easeInOut", delay: index * 0.2 }}
        />
      ))}

      {/* Floating sparkle stars */}
      <div className="absolute left-[18%] top-[18%]">
        <SparkleStar size={18} color="#ffb020" />
      </div>
      <div className="absolute right-[22%] top-[28%]">
        <SparkleStar size={22} color="#e94e77" />
      </div>
      <div className="absolute left-[62%] bottom-[22%]">
        <SparkleStar size={16} color="#1e40ff" />
      </div>
      <div className="absolute right-[10%] bottom-[34%]">
        <SparkleStar size={20} color="#b7e934" />
      </div>
    </div>
  );
}
