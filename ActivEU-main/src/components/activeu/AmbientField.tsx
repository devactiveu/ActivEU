import { motion, useReducedMotion } from "framer-motion";

type AmbientFieldProps = {
  className?: string;
  variant?: "hero" | "journey" | "proof" | "stories" | "cta" | "footer";
};

const variantClasses = {
  hero: "ambient-field-hero",
  journey: "ambient-field-journey",
  proof: "ambient-field-proof",
  stories: "ambient-field-stories",
  cta: "ambient-field-cta",
  footer: "ambient-field-footer",
} as const;

export function AmbientField({ className = "", variant = "hero" }: AmbientFieldProps) {
  const reduceMotion = useReducedMotion();

  return (
    <div className={`ambient-field ${variantClasses[variant]} ${className}`.trim()} aria-hidden="true">
      <motion.span
        className="ambient-field-texture ambient-field-texture-a"
        animate={
          reduceMotion
            ? undefined
            : { x: [0, 18, -12, 0], y: [0, -14, 10, 0], rotate: [0, 4, -3, 0], scale: [1, 1.04, 0.98, 1] }
        }
        transition={{ duration: 24, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.span
        className="ambient-field-texture ambient-field-texture-b"
        animate={
          reduceMotion
            ? undefined
            : { x: [0, -22, 14, 0], y: [0, 12, -10, 0], rotate: [0, -5, 3, 0], scale: [1, 0.98, 1.05, 1] }
        }
        transition={{ duration: 27, repeat: Infinity, ease: "easeInOut", delay: 1.4 }}
      />
      <motion.span
        className="ambient-field-wash ambient-field-wash-a"
        animate={reduceMotion ? undefined : { opacity: [0.3, 0.55, 0.36], scale: [1, 1.05, 0.98] }}
        transition={{ duration: 16, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.span
        className="ambient-field-wash ambient-field-wash-b"
        animate={reduceMotion ? undefined : { opacity: [0.22, 0.46, 0.24], scale: [1, 0.97, 1.04] }}
        transition={{ duration: 18, repeat: Infinity, ease: "easeInOut", delay: 1.2 }}
      />
      <motion.span
        className="ambient-field-orb ambient-field-orb-a"
        animate={reduceMotion ? undefined : { x: [0, 24, -12, 0], y: [0, -18, 10, 0], scale: [1, 1.06, 0.98, 1] }}
        transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.span
        className="ambient-field-orb ambient-field-orb-b"
        animate={reduceMotion ? undefined : { x: [0, -20, 12, 0], y: [0, 16, -12, 0], scale: [1, 0.96, 1.04, 1] }}
        transition={{ duration: 20, repeat: Infinity, ease: "easeInOut", delay: 1.2 }}
      />
      <motion.span
        className="ambient-field-orb ambient-field-orb-c"
        animate={reduceMotion ? undefined : { x: [0, 16, -8, 0], y: [0, -12, 16, 0], scale: [1, 1.03, 0.97, 1] }}
        transition={{ duration: 17, repeat: Infinity, ease: "easeInOut", delay: 0.6 }}
      />
      <motion.span
        className="ambient-field-ring ambient-field-ring-a"
        animate={reduceMotion ? undefined : { rotate: [0, 10, 0], scale: [1, 1.04, 1] }}
        transition={{ duration: 22, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.span
        className="ambient-field-ring ambient-field-ring-b"
        animate={reduceMotion ? undefined : { rotate: [0, -12, 0], scale: [1, 0.96, 1] }}
        transition={{ duration: 26, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.span
        className="ambient-field-beam ambient-field-beam-a"
        animate={reduceMotion ? undefined : { x: [0, 16, -8, 0], opacity: [0.2, 0.38, 0.22] }}
        transition={{ duration: 19, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.span
        className="ambient-field-beam ambient-field-beam-b"
        animate={reduceMotion ? undefined : { x: [0, -12, 10, 0], opacity: [0.16, 0.32, 0.18] }}
        transition={{ duration: 22, repeat: Infinity, ease: "easeInOut", delay: 1.1 }}
      />
      {[...Array(12)].map((_, index) => (
        <motion.span
          key={index}
          className={`ambient-field-particle ambient-field-particle-${index + 1}`}
          animate={
            reduceMotion
              ? undefined
              : {
                  x: [0, index % 2 === 0 ? 10 : -10, 0],
                  y: [0, -14 - index, 0],
                  opacity: [0.18, 0.62, 0.2],
                  scale: [0.92, 1.08, 0.96],
                }
          }
          transition={{ duration: 6 + index * 0.55, repeat: Infinity, ease: "easeInOut", delay: index * 0.24 }}
        />
      ))}
    </div>
  );
}
