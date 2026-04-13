import { motion, useReducedMotion } from "framer-motion";

type DoodleCharacterProps = {
  className?: string;
  size?: number;
  /** amber | blue | coral | mixed */
  accent?: "amber" | "blue" | "coral" | "mixed";
  /** Mood affects expression */
  mood?: "happy" | "excited" | "waving";
};

const accentPalette = {
  amber: { skin: "#FDECC5", stroke: "#ffb007", shirt: "#FFF3CC", accent: "#ffb007" },
  blue:  { skin: "#D6E8FF", stroke: "#3b82f6", shirt: "#E0EDFF", accent: "#3b82f6" },
  coral: { skin: "#FDDDD6", stroke: "#f97316", shirt: "#FFE8E0", accent: "#f97316" },
  mixed: { skin: "#FDECC5", stroke: "#3b82f6", shirt: "#E0EDFF", accent: "#ffb007" },
};

export function DoodleCharacter({
  className = "",
  size = 140,
  accent = "mixed",
  mood = "waving",
}: DoodleCharacterProps) {
  const reduce = useReducedMotion();
  const pal = accentPalette[accent];

  return (
    <motion.div
      className={`inline-block select-none ${className}`}
      animate={reduce ? undefined : { y: [0, -10, 0] }}
      transition={{ duration: 3.6, repeat: Infinity, ease: "easeInOut" }}
    >
      <svg
        width={size}
        height={size * 1.25}
        viewBox="0 0 112 140"
        fill="none"
        aria-label="ActivEU doodle character"
      >
        {/* Body / shirt */}
        <motion.ellipse
          cx="56" cy="100" rx="26" ry="22"
          fill={pal.shirt}
          stroke={pal.stroke}
          strokeWidth="3.5"
          strokeLinejoin="round"
          animate={reduce ? undefined : { scaleX: [1, 1.03, 1] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        />

        {/* Left leg */}
        <motion.path
          d="M42 118 C40 128 38 132 36 136"
          stroke={pal.stroke} strokeWidth="4" strokeLinecap="round"
          animate={reduce ? undefined : { rotate: [0, 4, 0] }}
          style={{ transformOrigin: "42px 118px" }}
          transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut", delay: 0.2 }}
        />
        {/* Right leg */}
        <motion.path
          d="M70 118 C72 128 74 132 76 136"
          stroke={pal.stroke} strokeWidth="4" strokeLinecap="round"
          animate={reduce ? undefined : { rotate: [0, -4, 0] }}
          style={{ transformOrigin: "70px 118px" }}
          transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
        />

        {/* Left arm — waving up */}
        <motion.path
          d="M32 96 C22 82 16 70 12 62"
          stroke={pal.stroke} strokeWidth="4.5" strokeLinecap="round"
          animate={reduce ? undefined : { rotate: [0, 18, 0, 18, 0] }}
          style={{ transformOrigin: "32px 96px" }}
          transition={{ duration: 1.4, repeat: Infinity, ease: "easeInOut" }}
        />
        {/* Left hand */}
        <motion.circle
          cx="12" cy="60" r="7"
          fill={pal.skin} stroke={pal.stroke} strokeWidth="3"
          animate={reduce ? undefined : { x: [0, 4, 0, 4, 0], y: [0, -6, 0, -6, 0] }}
          transition={{ duration: 1.4, repeat: Infinity, ease: "easeInOut" }}
        />
        {/* Little sparkle from waving hand */}
        <motion.path
          d="M5 48 L8 44 M2 52 L6 52 M5 48 L3 44"
          stroke={pal.accent} strokeWidth="2" strokeLinecap="round"
          animate={reduce ? undefined : { opacity: [0, 1, 0] }}
          transition={{ duration: 1.4, repeat: Infinity, ease: "easeInOut", delay: 0.3 }}
        />

        {/* Right arm — down at side */}
        <motion.path
          d="M80 96 C90 104 96 110 98 118"
          stroke={pal.stroke} strokeWidth="4.5" strokeLinecap="round"
          animate={reduce ? undefined : { rotate: [0, -5, 0] }}
          style={{ transformOrigin: "80px 96px" }}
          transition={{ duration: 3.6, repeat: Infinity, ease: "easeInOut" }}
        />
        {/* Right hand */}
        <circle cx="99" cy="120" r="6" fill={pal.skin} stroke={pal.stroke} strokeWidth="3" />

        {/* Neck */}
        <path d="M50 78 C52 82 60 82 62 78" stroke={pal.stroke} strokeWidth="3" strokeLinecap="round" />

        {/* Head */}
        <motion.ellipse
          cx="56" cy="56" rx="28" ry="26"
          fill={pal.skin}
          stroke={pal.stroke}
          strokeWidth="3.5"
          animate={reduce ? undefined : { scaleX: [1, 1.02, 1], scaleY: [1, 0.99, 1] }}
          style={{ transformOrigin: "56px 56px" }}
          transition={{ duration: 3.6, repeat: Infinity, ease: "easeInOut" }}
        />

        {/* Hair tuft */}
        <motion.path
          d="M42 32 C44 24 56 20 66 28"
          stroke={pal.stroke} strokeWidth="5" strokeLinecap="round" fill="none"
          animate={reduce ? undefined : { d: [
            "M42 32 C44 24 56 20 66 28",
            "M42 30 C44 22 56 18 66 26",
            "M42 32 C44 24 56 20 66 28",
          ]}}
          transition={{ duration: 3.6, repeat: Infinity, ease: "easeInOut" }}
        />

        {/* Eyes */}
        {mood === "excited" ? (
          <>
            <path d="M45 52 C46 48 50 48 51 52" stroke={pal.stroke} strokeWidth="2.5" strokeLinecap="round" fill="none" />
            <path d="M61 52 C62 48 66 48 67 52" stroke={pal.stroke} strokeWidth="2.5" strokeLinecap="round" fill="none" />
          </>
        ) : (
          <>
            <motion.ellipse cx="47" cy="53" rx="4" ry="4.5"
              fill={pal.stroke}
              animate={reduce ? undefined : { scaleY: [1, 0.1, 1] }}
              style={{ transformOrigin: "47px 53px" }}
              transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut", delay: 2 }}
            />
            <motion.ellipse cx="65" cy="53" rx="4" ry="4.5"
              fill={pal.stroke}
              animate={reduce ? undefined : { scaleY: [1, 0.1, 1] }}
              style={{ transformOrigin: "65px 53px" }}
              transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut", delay: 2 }}
            />
            {/* Shine dots */}
            <circle cx="49" cy="51" r="1.5" fill="white" />
            <circle cx="67" cy="51" r="1.5" fill="white" />
          </>
        )}

        {/* Rosy cheeks */}
        <ellipse cx="38" cy="62" rx="6" ry="4" fill={pal.accent} opacity="0.28" />
        <ellipse cx="74" cy="62" rx="6" ry="4" fill={pal.accent} opacity="0.28" />

        {/* Smile */}
        {mood === "waving" || mood === "happy" ? (
          <motion.path
            d="M44 66 C48 74 64 74 68 66"
            stroke={pal.stroke} strokeWidth="3" strokeLinecap="round" fill="none"
            animate={reduce ? undefined : { d: [
              "M44 66 C48 74 64 74 68 66",
              "M44 65 C48 76 64 76 68 65",
              "M44 66 C48 74 64 74 68 66",
            ]}}
            transition={{ duration: 3.6, repeat: Infinity, ease: "easeInOut" }}
          />
        ) : (
          <path d="M44 68 C50 72 62 72 68 68" stroke={pal.stroke} strokeWidth="3" strokeLinecap="round" fill="none" />
        )}

        {/* Small star accent near head */}
        <motion.path
          d="M88 28 L89.4 32 L93 33 L89.4 34 L88 38 L86.6 34 L83 33 L86.6 32 Z"
          fill={pal.accent}
          animate={reduce ? undefined : { rotate: [0, 20, 0], scale: [1, 1.2, 1] }}
          style={{ transformOrigin: "88px 33px" }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
        />
        <motion.path
          d="M18 30 L19 33 L22 33 L19 35 L20 38 L18 36 L16 38 L17 35 L14 33 L17 33 Z"
          fill={pal.accent} opacity="0.7"
          animate={reduce ? undefined : { rotate: [0, -15, 0], scale: [1, 1.15, 1] }}
          style={{ transformOrigin: "18px 34px" }}
          transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        />
      </svg>
    </motion.div>
  );
}
