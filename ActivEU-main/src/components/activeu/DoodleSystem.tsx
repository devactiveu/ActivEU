import { motion, useReducedMotion } from "framer-motion";

export function DoodleUnderline({
  className = "",
  color = "#e94e77",
}: {
  className?: string;
  color?: string;
}) {
  const reduceMotion = useReducedMotion();

  return (
    <motion.svg className={className} viewBox="0 0 180 28" fill="none" aria-hidden="true">
      <motion.path
        d="M8 18C38 25 76 24 109 16C131 11 151 10 172 14"
        stroke={color}
        strokeWidth="5"
        strokeLinecap="round"
        initial={reduceMotion ? false : { pathLength: 0 }}
        whileInView={reduceMotion ? {} : { pathLength: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      />
    </motion.svg>
  );
}

export function DoodleBadge({ text, className = "" }: { text: string; className?: string }) {
  const reduceMotion = useReducedMotion();

  return (
    <motion.div
      className={`doodle-badge ${className}`}
      animate={reduceMotion ? undefined : { y: [0, -4, 0], rotate: [0, -2, 1, 0] }}
      transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
      whileHover={reduceMotion ? undefined : { scale: 1.08, rotate: -3 }}
    >
      {text}
    </motion.div>
  );
}

export function SectionTransition({ className = "" }: { className?: string }) {
  return (
    <div className={`section-transition ${className}`} aria-hidden="true">
      <svg viewBox="0 0 1440 120" preserveAspectRatio="none">
        <defs>
          <linearGradient id="wave-grad" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="rgba(255, 176, 32, 0.18)" />
            <stop offset="50%" stopColor="rgba(30, 64, 255, 0.12)" />
            <stop offset="100%" stopColor="rgba(233, 78, 119, 0.14)" />
          </linearGradient>
        </defs>
        <path
          d="M0 72C154 36 286 28 433 42C592 57 719 103 878 104C1075 106 1242 58 1440 22V120H0Z"
          fill="url(#wave-grad)"
        />
      </svg>
    </div>
  );
}

export function DoodleStar({
  className = "",
  color = "#ffb020",
  size = 40,
}: {
  className?: string;
  color?: string;
  size?: number;
}) {
  const reduceMotion = useReducedMotion();

  return (
    <motion.svg
      className={className}
      width={size}
      height={size}
      viewBox="0 0 40 40"
      fill="none"
      aria-hidden="true"
      animate={reduceMotion ? undefined : { rotate: [0, 15, -10, 0], scale: [1, 1.1, 0.95, 1] }}
      transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
    >
      <path
        d="M20 4L23 16L35 19L23 22L20 34L17 22L5 19L17 16L20 4Z"
        fill={color}
        stroke={color}
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
    </motion.svg>
  );
}

export function DoodleBolt({
  className = "",
  color = "#1e40ff",
  size = 36,
}: {
  className?: string;
  color?: string;
  size?: number;
}) {
  const reduceMotion = useReducedMotion();

  return (
    <motion.svg
      className={className}
      width={size}
      height={size}
      viewBox="0 0 36 36"
      fill="none"
      aria-hidden="true"
      animate={reduceMotion ? undefined : { rotate: [0, -8, 6, 0], y: [0, -6, 0] }}
      transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
    >
      <path
        d="M20 3L7 19H17L14 33L29 15H19L20 3Z"
        fill={color}
        stroke={color}
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
    </motion.svg>
  );
}

export function DoodleHeart({
  className = "",
  color = "#e94e77",
  size = 32,
}: {
  className?: string;
  color?: string;
  size?: number;
}) {
  const reduceMotion = useReducedMotion();

  return (
    <motion.svg
      className={className}
      width={size}
      height={size}
      viewBox="0 0 32 32"
      fill="none"
      aria-hidden="true"
      animate={reduceMotion ? undefined : { scale: [1, 1.2, 0.95, 1.08, 1] }}
      transition={{ duration: 2.2, repeat: Infinity, ease: "easeInOut" }}
    >
      <path
        d="M16 27s-9-5.5-9-13a5.5 5.5 0 0 1 9-4.2A5.5 5.5 0 0 1 25 14c0 7.5-9 13-9 13Z"
        fill={color}
        stroke={color}
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
    </motion.svg>
  );
}

export function DoodleSquiggle({
  className = "",
  color = "#b7e934",
}: {
  className?: string;
  color?: string;
}) {
  const reduceMotion = useReducedMotion();

  return (
    <motion.svg
      className={className}
      viewBox="0 0 140 30"
      fill="none"
      aria-hidden="true"
      initial={reduceMotion ? false : { pathLength: 0 }}
      whileInView={reduceMotion ? {} : { pathLength: 1 }}
      viewport={{ once: true }}
    >
      <motion.path
        d="M4 15C12 5 20 25 30 15C40 5 48 25 58 15C68 5 76 25 86 15C96 5 104 25 114 15C124 5 132 22 136 15"
        stroke={color}
        strokeWidth="4"
        strokeLinecap="round"
        strokeLinejoin="round"
        initial={reduceMotion ? false : { pathLength: 0 }}
        whileInView={reduceMotion ? {} : { pathLength: 1 }}
        transition={{ duration: 1.4, ease: "easeOut" }}
        viewport={{ once: true }}
      />
    </motion.svg>
  );
}

export function DoodleCircleHighlight({
  className = "",
  color = "#1e40ff",
}: {
  className?: string;
  color?: string;
}) {
  const reduceMotion = useReducedMotion();

  return (
    <motion.svg
      className={className}
      viewBox="0 0 220 90"
      fill="none"
      aria-hidden="true"
      preserveAspectRatio="none"
    >
      <motion.path
        d="M18 46c20-30 70-40 115-32 28 5 55 20 68 40 8 13-8 24-48 27-60 5-135-6-145-21-4-6 3-11 10-14"
        stroke={color}
        strokeWidth="3.5"
        strokeLinecap="round"
        fill="none"
        initial={reduceMotion ? false : { pathLength: 0 }}
        whileInView={reduceMotion ? {} : { pathLength: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.6, ease: "easeOut" }}
      />
    </motion.svg>
  );
}
