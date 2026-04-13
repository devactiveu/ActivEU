import { motion, useReducedMotion } from "framer-motion";

type DoodleClusterProps = {
  className?: string;
  accent?: "amber" | "blue" | "coral";
};

const accentMap = {
  amber: {
    stroke: "#ffb007",
    glow: "rgba(255, 176, 7, 0.18)",
    fill: "rgba(255, 176, 7, 0.14)",
  },
  blue: {
    stroke: "#3b82f6",
    glow: "rgba(59, 130, 246, 0.18)",
    fill: "rgba(59, 130, 246, 0.14)",
  },
  coral: {
    stroke: "#f97316",
    glow: "rgba(249, 115, 22, 0.18)",
    fill: "rgba(249, 115, 22, 0.14)",
  },
} as const;

export function DoodleCluster({ className = "", accent = "amber" }: DoodleClusterProps) {
  const reduceMotion = useReducedMotion();
  const colors = accentMap[accent];

  return (
    <motion.svg
      className={className}
      viewBox="0 0 220 220"
      fill="none"
      aria-hidden="true"
      initial={reduceMotion ? false : { opacity: 0, scale: 0.92, rotate: -6 }}
      whileInView={reduceMotion ? {} : { opacity: 1, scale: 1, rotate: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
    >
      <motion.path
        d="M34 110C50 48 114 28 158 56C205 87 194 162 136 180C83 197 28 168 34 110Z"
        stroke={colors.stroke}
        strokeWidth="5"
        strokeLinecap="round"
        strokeLinejoin="round"
        style={{ filter: `drop-shadow(0 0 28px ${colors.glow})` }}
        initial={reduceMotion ? false : { pathLength: 0, opacity: 0.5 }}
        whileInView={reduceMotion ? {} : { pathLength: 1, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.3, ease: "easeInOut" }}
      />
      <motion.path
        d="M58 73C84 52 136 50 166 84"
        stroke={colors.stroke}
        strokeWidth="5"
        strokeLinecap="round"
        initial={reduceMotion ? false : { pathLength: 0, opacity: 0.6 }}
        whileInView={reduceMotion ? {} : { pathLength: 1, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.1, delay: 0.15, ease: "easeInOut" }}
      />
      <motion.circle
        cx="165"
        cy="62"
        r="13"
        fill={colors.fill}
        stroke={colors.stroke}
        strokeWidth="3.5"
        animate={reduceMotion ? {} : { scale: [1, 1.08, 1], rotate: [0, 8, 0] }}
        transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut" }}
        style={{ transformOrigin: "165px 62px" }}
      />
      <motion.path
        d="M168 31V11M178 20H158M58 188L67 170M72 196L55 182M190 126L205 119M194 142L208 147"
        stroke={colors.stroke}
        strokeWidth="4.5"
        strokeLinecap="round"
        initial={reduceMotion ? false : { opacity: 0, scale: 0.8 }}
        whileInView={reduceMotion ? {} : { opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.35 }}
      />
    </motion.svg>
  );
}

export function DoodleUnderline({ className = "" }: { className?: string }) {
  const reduceMotion = useReducedMotion();
  return (
    <motion.svg
      className={className}
      viewBox="0 0 180 32"
      fill="none"
      aria-hidden="true"
    >
      <motion.path
        d="M8 20C40 28 78 28 112 18C136 11 157 9 172 14"
        stroke="#ffb007"
        strokeWidth="6"
        strokeLinecap="round"
        initial={reduceMotion ? false : { pathLength: 0 }}
        whileInView={reduceMotion ? {} : { pathLength: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1, ease: "easeOut" }}
      />
    </motion.svg>
  );
}

export function MorphBlob({ className = "" }: { className?: string }) {
  const reduceMotion = useReducedMotion();
  return (
    <motion.div
      className={className}
      aria-hidden="true"
      animate={
        reduceMotion
          ? {}
          : {
              borderRadius: [
                "53% 47% 60% 40% / 47% 44% 56% 53%",
                "60% 40% 47% 53% / 50% 60% 40% 50%",
                "49% 51% 58% 42% / 61% 39% 61% 39%",
                "53% 47% 60% 40% / 47% 44% 56% 53%",
              ],
              rotate: [0, 6, -4, 0],
              scale: [1, 1.04, 0.98, 1],
            }
      }
      transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
    />
  );
}

export function DoodleBadge({
  text,
  className = "",
}: {
  text: string;
  className?: string;
}) {
  const reduceMotion = useReducedMotion();
  return (
    <motion.div
      className={`doodle-badge ${className}`}
      animate={reduceMotion ? {} : { y: [0, -6, 0], rotate: [0, -2, 0, 2, 0] }}
      transition={{ duration: 5.5, repeat: Infinity, ease: "easeInOut" }}
    >
      {text}
    </motion.div>
  );
}

export function DoodleArrow({
  className = "",
  accent = "amber",
  flip = false,
}: {
  className?: string;
  accent?: "amber" | "blue" | "coral";
  flip?: boolean;
}) {
  const reduceMotion = useReducedMotion();
  const colors = accentMap[accent];

  return (
    <motion.svg
      className={className}
      viewBox="0 0 190 90"
      fill="none"
      aria-hidden="true"
      style={flip ? { transform: "scaleX(-1)" } : undefined}
    >
      <motion.path
        d="M12 54C42 34 77 26 112 34C135 40 151 50 169 66"
        stroke={colors.stroke}
        strokeWidth="5"
        strokeLinecap="round"
        initial={reduceMotion ? false : { pathLength: 0, opacity: 0.4 }}
        whileInView={reduceMotion ? {} : { pathLength: 1, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1, ease: "easeOut" }}
      />
      <motion.path
        d="M151 49L171 66L146 72"
        stroke={colors.stroke}
        strokeWidth="5"
        strokeLinecap="round"
        strokeLinejoin="round"
        initial={reduceMotion ? false : { pathLength: 0, opacity: 0.4 }}
        whileInView={reduceMotion ? {} : { pathLength: 1, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.55, delay: 0.45, ease: "easeOut" }}
      />
    </motion.svg>
  );
}

export function DoodleSpark({
  className = "",
  accent = "amber",
}: {
  className?: string;
  accent?: "amber" | "blue" | "coral";
}) {
  const reduceMotion = useReducedMotion();
  const colors = accentMap[accent];

  return (
    <motion.svg
      className={className}
      viewBox="0 0 84 84"
      fill="none"
      aria-hidden="true"
      animate={reduceMotion ? {} : { rotate: [0, 6, -4, 0], scale: [1, 1.05, 1] }}
      transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
    >
      <path d="M42 5V27M42 57V79M5 42H27M57 42H79M15 15L28 28M56 56L69 69M69 15L56 28M28 56L15 69" stroke={colors.stroke} strokeWidth="5" strokeLinecap="round" />
    </motion.svg>
  );
}

export function DoodleStamp({
  className = "",
  accent = "amber",
  text,
}: {
  className?: string;
  accent?: "amber" | "blue" | "coral";
  text: string;
}) {
  const reduceMotion = useReducedMotion();
  const colors = accentMap[accent];

  return (
    <motion.div
      className={`doodle-stamp ${className}`}
      initial={reduceMotion ? false : { opacity: 0, scale: 0.86, rotate: -12 }}
      whileInView={reduceMotion ? {} : { opacity: 1, scale: 1, rotate: -6 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      style={{
        borderColor: colors.stroke,
        color: colors.stroke,
        boxShadow: `0 0 0 1px ${colors.glow} inset, 0 18px 36px ${colors.glow}`,
      }}
    >
      <motion.svg
        viewBox="0 0 120 120"
        fill="none"
        aria-hidden="true"
        animate={reduceMotion ? {} : { rotate: [0, 4, -3, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      >
        <motion.path
          d="M60 8C69 16 83 13 91 21C99 29 96 43 102 54C108 65 120 72 120 84C120 96 108 103 102 114C96 125 99 139 91 147C83 155 69 152 60 160C51 152 37 155 29 147C21 139 24 125 18 114C12 103 0 96 0 84C0 72 12 65 18 54C24 43 21 29 29 21C37 13 51 16 60 8Z"
          stroke={colors.stroke}
          strokeWidth="4"
          strokeLinecap="round"
          strokeLinejoin="round"
          initial={reduceMotion ? false : { pathLength: 0, opacity: 0.5 }}
          whileInView={reduceMotion ? {} : { pathLength: 1, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.1, ease: "easeOut" }}
        />
      </motion.svg>
      <span>{text}</span>
    </motion.div>
  );
}

export function RibbonTrace({
  className = "",
  accent = "amber",
}: {
  className?: string;
  accent?: "amber" | "blue" | "coral";
}) {
  const reduceMotion = useReducedMotion();
  const colors = accentMap[accent];

  return (
    <motion.svg className={className} viewBox="0 0 360 96" fill="none" aria-hidden="true">
      <motion.path
        d="M12 48C48 20 88 12 130 19C168 25 193 55 231 62C270 69 316 56 348 26"
        stroke={colors.stroke}
        strokeWidth="5"
        strokeLinecap="round"
        initial={reduceMotion ? false : { pathLength: 0, opacity: 0.35 }}
        whileInView={reduceMotion ? {} : { pathLength: 1, opacity: 1 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 1.15, ease: "easeOut" }}
      />
      <motion.path
        d="M152 34C169 49 186 58 209 61"
        stroke={colors.stroke}
        strokeWidth="5"
        strokeLinecap="round"
        initial={reduceMotion ? false : { pathLength: 0, opacity: 0.2 }}
        whileInView={reduceMotion ? {} : { pathLength: 1, opacity: 0.7 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.8, delay: 0.18, ease: "easeOut" }}
      />
      <motion.path
        d="M328 14L348 26L324 35"
        stroke={colors.stroke}
        strokeWidth="5"
        strokeLinecap="round"
        strokeLinejoin="round"
        initial={reduceMotion ? false : { pathLength: 0, opacity: 0.3 }}
        whileInView={reduceMotion ? {} : { pathLength: 1, opacity: 1 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.55, delay: 0.55, ease: "easeOut" }}
      />
    </motion.svg>
  );
}

export function StickerNote({
  className = "",
  text,
}: {
  className?: string;
  text: string;
}) {
  const reduceMotion = useReducedMotion();
  return (
    <motion.div
      className={`sticker-note ${className}`}
      initial={reduceMotion ? false : { opacity: 0, rotate: -6, y: 12 }}
      whileInView={reduceMotion ? {} : { opacity: 1, rotate: -2, y: 0 }}
      viewport={{ once: true, amount: 0.4 }}
      transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
    >
      {text}
    </motion.div>
  );
}

export function SectionTransition({
  className = "",
  flip = false,
  variant = "wave",
}: {
  className?: string;
  flip?: boolean;
  variant?: "wave" | "ribbon" | "tear" | "glow";
}) {
  const pathMap = {
    ribbon: "M0 64C121 114 246 136 396 118C579 96 734 8 906 18C1091 29 1249 108 1440 92V160H0Z",
    wave: "M0 98C124 58 254 29 408 46C584 66 716 148 905 142C1098 136 1251 48 1440 24V160H0Z",
    tear: "M0 66C88 86 170 112 252 108C346 103 409 42 506 39C624 35 734 117 848 122C970 127 1078 48 1197 44C1288 40 1360 62 1440 92V160H0Z",
    glow: "M0 82C119 60 264 46 395 59C551 75 676 124 842 122C1012 119 1169 58 1440 26V160H0Z",
  } as const;

  const gradientMap = {
    ribbon: (
      <defs>
        <linearGradient id="st-ribbon" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="rgba(255,249,235,0.9)" />
          <stop offset="38%" stopColor="rgba(255,176,7,0.15)" />
          <stop offset="62%" stopColor="rgba(255,255,255,0.7)" />
          <stop offset="100%" stopColor="rgba(255,249,235,0.9)" />
        </linearGradient>
      </defs>
    ),
    wave: (
      <defs>
        <linearGradient id="st-wave" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="rgba(240,246,255,0.85)" />
          <stop offset="50%" stopColor="rgba(255,255,255,0.65)" />
          <stop offset="100%" stopColor="rgba(240,246,255,0.85)" />
        </linearGradient>
      </defs>
    ),
    tear: (
      <defs>
        <linearGradient id="st-tear" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="rgba(240,246,255,0.7)" />
          <stop offset="40%" stopColor="rgba(59,130,246,0.2)" />
          <stop offset="100%" stopColor="rgba(240,246,255,0.7)" />
        </linearGradient>
      </defs>
    ),
    glow: (
      <defs>
        <linearGradient id="st-glow" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="rgba(255,249,235,0.85)" />
          <stop offset="30%" stopColor="rgba(255,176,7,0.22)" />
          <stop offset="70%" stopColor="rgba(255,176,7,0.18)" />
          <stop offset="100%" stopColor="rgba(255,249,235,0.85)" />
        </linearGradient>
      </defs>
    ),
  } as const;

  const fillMap = {
    ribbon: "url(#st-ribbon)",
    wave: "url(#st-wave)",
    tear: "url(#st-tear)",
    glow: "url(#st-glow)",
  } as const;

  return (
    <div className={`section-transition section-transition-${variant} ${flip ? "section-transition-flip" : ""} ${className}`} aria-hidden="true">
      <svg viewBox="0 0 1440 160" preserveAspectRatio="none">
        {gradientMap[variant]}
        <path d={pathMap[variant]} fill={fillMap[variant]} />
      </svg>
    </div>
  );
}

/**
 * HandwrittenCursive — reveals a cursive handwriting SVG stroke by stroke.
 * Simulates the feel of a marker or pen drawing text in real time.
 */
export function HandwrittenCursive({
  className = "",
  accent = "amber",
  label,
}: {
  className?: string;
  accent?: "amber" | "blue" | "coral";
  /** Short label displayed below the cursive lines */
  label?: string;
}) {
  const reduceMotion = useReducedMotion();
  const colors = accentMap[accent];

  // Each path simulates one cursive letter-group or ligature stroke
  const strokes = [
    // "S" - curling stroke
    { d: "M22 14C18 8 10 6 8 12C6 18 12 22 16 20C22 17 24 10 20 6", delay: 0 },
    // "o" - circle with entry
    { d: "M32 18C30 14 26 13 24 16C22 19 24 23 28 22C32 21 34 16 30 13C28 11 26 13 28 18", delay: 0.35 },
    // "l" tall ascender
    { d: "M40 6C40 8 40 11 40 14C40 17 40 20 40 23", delay: 0.62 },
    // "i" + dot
    { d: "M46 14C46 16 46 18 46 22M46 10C46 11 47 11 47 10", delay: 0.80 },
    // "d" - d stroke
    { d: "M54 6C54 8 54 12 54 16C54 20 54 23 54 23C56 19 60 17 62 20C64 23 62 26 58 25C54 24 52 20 54 17", delay: 1.00 },
    // "ar" ligature
    { d: "M68 16C66 13 63 14 63 17C63 20 65 22 68 21C70 20 71 17 70 14C68 11 66 13 66 18C66 21 68 23 70 23C73 23 75 20 76 17", delay: 1.28 },
    // "i" + dot
    { d: "M80 14C80 17 80 20 80 23M80 10C80 11 81 11 81 10", delay: 1.52 },
    // "e"
    { d: "M86 18C84 14 86 11 89 13C91 15 91 19 89 21C87 23 84 21 84 18C84 15 87 13 90 14", delay: 1.72 },
    // "d" - repeated
    { d: "M96 6C96 10 96 15 96 20C96 22 96 23 96 23C98 19 102 17 104 20C106 23 104 26 100 25C96 24 94 20 96 17", delay: 1.95 },
    // "a" closing swash
    { d: "M112 20C112 16 116 13 119 16C121 19 119 23 115 23C112 23 110 20 112 17C114 14 118 13 120 16C122 19 122 23 120 24C118 26 112 25 112 22", delay: 2.18 },
    // "d" finishing swash down
    { d: "M128 6C128 12 128 18 128 23", delay: 2.45 },
    // Underline swash beneath the word
    { d: "M4 30C14 27 40 26 70 27C100 28 118 29 136 28", delay: 2.65 },
  ];

  return (
    <div className={`handwritten-cursive-wrap ${className}`} aria-hidden={!label}>
      <svg
        viewBox="0 0 144 36"
        fill="none"
        className="handwritten-cursive-svg"
      >
        {strokes.map((stroke, i) => (
          <motion.path
            key={i}
            d={stroke.d}
            stroke={colors.stroke}
            strokeWidth={i === strokes.length - 1 ? "1.5" : "2.2"}
            strokeLinecap="round"
            strokeLinejoin="round"
            style={{
              filter: i < strokes.length - 1 ? `drop-shadow(0 0 6px ${colors.glow})` : undefined,
              opacity: i === strokes.length - 1 ? 0.55 : 1,
            }}
            initial={reduceMotion ? false : { pathLength: 0, opacity: 0 }}
            whileInView={reduceMotion ? {} : { pathLength: 1, opacity: i === strokes.length - 1 ? 0.55 : 1 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.55, delay: stroke.delay * 0.65, ease: "easeOut" }}
          />
        ))}
      </svg>
      {label ? (
        <span className="handwritten-cursive-label">{label}</span>
      ) : null}
    </div>
  );
}

/**
 * HandwrittenWord — a quick looping pen-draw of a short word SVG path.
 * Used as a decorative accent in sections.
 */
export function HandwrittenWord({
  className = "",
  accent = "coral",
  word = "impacto",
}: {
  className?: string;
  accent?: "amber" | "blue" | "coral";
  word?: string;
}) {
  const reduceMotion = useReducedMotion();
  const colors = accentMap[accent];

  // A decorative cursive stroke that represents a "word" visually
  const basePath = "M6 18C10 10 18 8 22 14C26 20 22 28 16 26C10 24 8 16 12 10C16 4 26 4 32 10C38 16 36 26 30 28C24 30 16 26 18 20C20 14 28 12 34 16C40 20 40 28 36 30C30 33 20 30 14 24";
  const loopPath = "M42 12C48 8 56 10 58 16C60 22 56 28 50 26C46 24 44 18 48 14C52 10 60 12 64 18";

  return (
    <div className={`handwritten-word-wrap ${className}`} aria-hidden="true">
      <svg viewBox="0 0 72 36" fill="none" className="handwritten-word-svg">
        <motion.path
          d={basePath}
          stroke={colors.stroke}
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
          style={{ filter: `drop-shadow(0 0 8px ${colors.glow})` }}
          initial={reduceMotion ? false : { pathLength: 0, opacity: 0 }}
          animate={reduceMotion ? {} : { pathLength: [0, 1, 1, 0], opacity: [0, 1, 1, 0] }}
          transition={{ duration: 3.6, repeat: Infinity, ease: "easeInOut", times: [0, 0.45, 0.8, 1] }}
        />
        <motion.path
          d={loopPath}
          stroke={colors.stroke}
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
          style={{ filter: `drop-shadow(0 0 8px ${colors.glow})` }}
          initial={reduceMotion ? false : { pathLength: 0, opacity: 0 }}
          animate={reduceMotion ? {} : { pathLength: [0, 1, 1, 0], opacity: [0, 1, 1, 0] }}
          transition={{ duration: 2.2, delay: 1.2, repeat: Infinity, ease: "easeInOut", times: [0, 0.45, 0.8, 1] }}
        />
        {/* Tiny dot accent */}
        <motion.circle
          cx="66" cy="10" r="2"
          fill={colors.stroke}
          animate={reduceMotion ? {} : { opacity: [0, 1, 0], scale: [0.5, 1.2, 0.5] }}
          transition={{ duration: 1.4, delay: 2.8, repeat: Infinity, ease: "easeInOut" }}
          style={{ transformOrigin: "66px 10px" }}
        />
      </svg>
    </div>
  );
}
