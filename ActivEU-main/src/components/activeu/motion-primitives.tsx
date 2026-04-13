import { type ReactNode, useRef, useCallback, useEffect, useState } from "react";
import { motion, useReducedMotion, useMotionValue, useSpring, useScroll, useTransform, AnimatePresence, useMotionTemplate } from "framer-motion";

const defaultView = {
  once: true,
  margin: "-60px",
  amount: 0.2,
} as const;

type FadeInProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
  duration?: number;
  y?: number;
};

export function FadeIn({ children, className, delay = 0, duration = 0.72, y = 52 }: FadeInProps) {
  const reduce = useReducedMotion();
  if (reduce) {
    return <div className={className}>{children}</div>;
  }
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y, scale: 0.97 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={defaultView}
      transition={{ duration, delay, ease: [0.16, 1, 0.3, 1] }}
    >
      {children}
    </motion.div>
  );
}

type SectionRevealProps = {
  children: ReactNode;
  className?: string;
  stagger?: number;
  delayChildren?: number;
};

export function SectionReveal({ children, className, stagger = 0.08, delayChildren = 0.06 }: SectionRevealProps) {
  const reduce = useReducedMotion();
  if (reduce) {
    return <div className={className}>{children}</div>;
  }
  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="show"
      viewport={defaultView}
      variants={{
        hidden: {},
        show: {
          transition: { staggerChildren: stagger, delayChildren },
        },
      }}
    >
      {children}
    </motion.div>
  );
}

type ChildProps = {
  children: ReactNode;
  className?: string;
};

export function RevealItem({ children, className }: ChildProps) {
  const reduce = useReducedMotion();
  if (reduce) {
    return <div className={className}>{children}</div>;
  }
  return (
    <motion.div
      className={className}
      variants={{
        hidden: { opacity: 0, y: 40, scale: 0.96 },
        show: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.62, ease: [0.16, 1, 0.3, 1] } },
      }}
    >
      {children}
    </motion.div>
  );
}

type TextRevealLineProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
};

export function TextRevealLine({ children, className, delay = 0 }: TextRevealLineProps) {
  const reduce = useReducedMotion();
  if (reduce) {
    return <span className={className}>{children}</span>;
  }
  return (
    <motion.span
      className={`inline-block ${className ?? ""}`}
      initial={{ opacity: 0, y: "0.5em", filter: "blur(14px)" }}
      animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
      transition={{ duration: 0.9, delay, ease: [0.16, 1, 0.3, 1] }}
    >
      {children}
    </motion.span>
  );
}

/* ── New primitives ── */

type ParallaxLayerProps = {
  children: ReactNode;
  className?: string;
  offset?: number;
};

export function ParallaxLayer({ children, className, offset = 80 }: ParallaxLayerProps) {
  const ref = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], [offset, -offset]);

  if (reduce) {
    return <div className={className}>{children}</div>;
  }
  return (
    <motion.div ref={ref} className={className} style={{ y }}>
      {children}
    </motion.div>
  );
}

type MorphingTextProps = {
  text: string;
  langKey: string;
  className?: string;
};

export function MorphingText({ text, langKey, className }: MorphingTextProps) {
  const reduce = useReducedMotion();
  if (reduce) {
    return <span className={className}>{text}</span>;
  }
  return (
    <AnimatePresence mode="wait">
      <motion.span
        key={langKey + text}
        className={className}
        initial={{ opacity: 0, filter: "blur(8px)", scale: 0.98 }}
        animate={{ opacity: 1, filter: "blur(0px)", scale: 1 }}
        exit={{ opacity: 0, filter: "blur(8px)", scale: 0.98 }}
        transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
      >
        {text}
      </motion.span>
    </AnimatePresence>
  );
}

type MagneticProps = {
  children: ReactNode;
  className?: string;
  strength?: number;
};

export function Magnetic({ children, className, strength = 0.3 }: MagneticProps) {
  const ref = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springX = useSpring(x, { stiffness: 300, damping: 20 });
  const springY = useSpring(y, { stiffness: 300, damping: 20 });

  if (reduce) {
    return <div className={className}>{children}</div>;
  }

  const handleMove = (e: React.MouseEvent) => {
    const rect = ref.current?.getBoundingClientRect();
    if (!rect) return;
    const cx = rect.left + rect.width / 2;
    const cy = rect.top + rect.height / 2;
    x.set((e.clientX - cx) * strength);
    y.set((e.clientY - cy) * strength);
  };

  const handleLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      ref={ref}
      className={className}
      style={{ x: springX, y: springY }}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
    >
      {children}
    </motion.div>
  );
}

type Reveal3DProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
};

export function Reveal3D({ children, className, delay = 0 }: Reveal3DProps) {
  const reduce = useReducedMotion();
  if (reduce) {
    return <div className={className}>{children}</div>;
  }
  return (
    <motion.div
      className={className}
      style={{ perspective: 1000 }}
      initial={{ opacity: 0, rotateX: 12, y: 60 }}
      whileInView={{ opacity: 1, rotateX: 0, y: 0 }}
      viewport={defaultView}
      transition={{ duration: 0.8, delay, ease: [0.16, 1, 0.3, 1] }}
    >
      {children}
    </motion.div>
  );
}

type SlideInProps = {
  children: ReactNode;
  className?: string;
  direction?: "left" | "right";
  delay?: number;
};

export function SlideIn({ children, className, direction = "left", delay = 0 }: SlideInProps) {
  const reduce = useReducedMotion();
  if (reduce) {
    return <div className={className}>{children}</div>;
  }
  const x = direction === "left" ? -80 : 80;
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, x }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={defaultView}
      transition={{ duration: 0.7, delay, ease: [0.16, 1, 0.3, 1] }}
    >
      {children}
    </motion.div>
  );
}

/* ── Premium primitives ── */

/** Cursor glow that follows mouse across the entire page */
export function CursorGlow() {
  const reduce = useReducedMotion();
  const x = useMotionValue(-200);
  const y = useMotionValue(-200);
  const springX = useSpring(x, { stiffness: 120, damping: 25, mass: 0.4 });
  const springY = useSpring(y, { stiffness: 120, damping: 25, mass: 0.4 });
  const bg = useMotionTemplate`radial-gradient(420px circle at ${springX}px ${springY}px, hsl(40 100% 56% / 0.06), hsl(217 90% 60% / 0.04) 40%, transparent 70%)`;

  useEffect(() => {
    if (reduce) return;
    const move = (e: MouseEvent) => {
      x.set(e.clientX);
      y.set(e.clientY);
    };
    window.addEventListener("mousemove", move, { passive: true });
    return () => window.removeEventListener("mousemove", move);
  }, [reduce, x, y]);

  if (reduce) return null;

  return (
    <motion.div
      className="pointer-events-none fixed inset-0 z-[2] transition-opacity duration-700"
      style={{ background: bg }}
      aria-hidden="true"
    />
  );
}

/** Card with spotlight glare tracking mouse position */
type SpotlightCardProps = {
  children: ReactNode;
  className?: string;
  glareColor?: string;
  glareSize?: number;
  style?: React.CSSProperties;
};

export function SpotlightCard({ children, className, glareColor = "hsl(40 100% 56% / 0.12)", glareSize = 320, style }: SpotlightCardProps) {
  const ref = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const [hovering, setHovering] = useState(false);

  const handleMove = useCallback((e: React.MouseEvent) => {
    const rect = ref.current?.getBoundingClientRect();
    if (!rect) return;
    mouseX.set(e.clientX - rect.left);
    mouseY.set(e.clientY - rect.top);
  }, [mouseX, mouseY]);

  const glare = useMotionTemplate`radial-gradient(${glareSize}px circle at ${mouseX}px ${mouseY}px, ${glareColor}, transparent 65%)`;

  if (reduce) {
    return <div className={className} style={style}>{children}</div>;
  }

  return (
    <div
      ref={ref}
      className={`relative overflow-hidden ${className ?? ""}`}
      style={style}
      onMouseMove={handleMove}
      onMouseEnter={() => setHovering(true)}
      onMouseLeave={() => setHovering(false)}
    >
      <motion.div
        className="pointer-events-none absolute inset-0 z-[1] rounded-[inherit]"
        style={{ background: glare, opacity: hovering ? 1 : 0 }}
        transition={{ opacity: { duration: 0.3 } }}
        aria-hidden="true"
      />
      {children}
    </div>
  );
}

/** Scroll progress bar at top of viewport */
export function ScrollProgress() {
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 200, damping: 40, mass: 0.3 });

  if (reduce) return null;

  return (
    <motion.div
      className="fixed inset-x-0 top-0 z-[60] h-[3px] origin-left"
      style={{
        scaleX,
        background: "linear-gradient(90deg, hsl(40 100% 56%), hsl(217 90% 60%), hsl(223 71% 23%))",
      }}
      aria-hidden="true"
    />
  );
}

/** Text that scrambles/decodes on language change */
type TextScrambleProps = {
  text: string;
  langKey: string;
  className?: string;
  chars?: string;
};

export function TextScramble({ text, langKey, className, chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz" }: TextScrambleProps) {
  const reduce = useReducedMotion();
  const [display, setDisplay] = useState(text);
  const prevKey = useRef(langKey + text);

  useEffect(() => {
    const key = langKey + text;
    if (key === prevKey.current) {
      setDisplay(text);
      return;
    }
    prevKey.current = key;
    if (reduce) {
      setDisplay(text);
      return;
    }
    let frame = 0;
    const totalFrames = 12;
    const id = setInterval(() => {
      frame++;
      const progress = frame / totalFrames;
      const result = text
        .split("")
        .map((char, i) => {
          if (char === " ") return " ";
          if (i / text.length < progress) return char;
          return chars[Math.floor(Math.random() * chars.length)];
        })
        .join("");
      setDisplay(result);
      if (frame >= totalFrames) clearInterval(id);
    }, 30);
    return () => clearInterval(id);
  }, [text, langKey, reduce, chars]);

  return <span className={className}>{display}</span>;
}

/**
 * TypewriterText — reveals text character by character with a blinking cursor.
 * Triggers on scroll into view. References "Expressive Typography" from SVGator article.
 */
type TypewriterTextProps = {
  text: string;
  className?: string;
  speed?: number; // ms per character
  delay?: number; // s before starting
  cursorColor?: string;
  loop?: boolean;
};

export function TypewriterText({
  text,
  className,
  speed = 48,
  delay = 0,
  cursorColor = "hsl(40 100% 56%)",
  loop = false,
}: TypewriterTextProps) {
  const reduce = useReducedMotion();
  const [displayed, setDisplayed] = useState(reduce ? text : "");
  const [cursorVisible, setCursorVisible] = useState(true);
  const [inView, setInView] = useState(false);
  const ref = useRef<HTMLSpanElement>(null);
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  // Blinking cursor
  useEffect(() => {
    if (reduce) return;
    const id = setInterval(() => setCursorVisible((v) => !v), 530);
    return () => clearInterval(id);
  }, [reduce]);

  // IntersectionObserver to start typing
  useEffect(() => {
    if (reduce) {
      setDisplayed(text);
      return;
    }
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setInView(true); },
      { threshold: 0.4 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [reduce, text]);

  useEffect(() => {
    if (!inView || reduce) return;
    let i = 0;
    const startTyping = () => {
      setDisplayed("");
      const tick = () => {
        i++;
        setDisplayed(text.slice(0, i));
        if (i < text.length) {
          timerRef.current = setTimeout(tick, speed);
        } else if (loop) {
          timerRef.current = setTimeout(() => { i = 0; startTyping(); }, 2200);
        }
      };
      timerRef.current = setTimeout(tick, speed);
    };
    timerRef.current = setTimeout(startTyping, delay * 1000);
    return () => { if (timerRef.current) clearTimeout(timerRef.current); };
  }, [inView, text, speed, delay, loop, reduce]);

  return (
    <span ref={ref} className={`typewriter-text ${className ?? ""}`}>
      {displayed}
      {!reduce && (
        <span
          className="typewriter-cursor"
          style={{
            background: cursorColor,
            opacity: cursorVisible ? 1 : 0,
          }}
          aria-hidden="true"
        />
      )}
    </span>
  );
}

/** Number counter with visual "spark" burst on completion */
type SparkCounterProps = {
  end: number;
  suffix?: string;
  prefix?: string;
  className?: string;
  duration?: number;
};

export function SparkCounter({ end, suffix = "", prefix = "", className, duration = 1.8 }: SparkCounterProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const reduce = useReducedMotion();
  const [value, setValue] = useState(0);
  const [done, setDone] = useState(false);
  const inView = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting && !inView.current) {
        inView.current = true;
        if (reduce) {
          setValue(end);
          setDone(true);
          return;
        }
        const start = performance.now();
        const step = (now: number) => {
          const t = Math.min((now - start) / (duration * 1000), 1);
          const eased = 1 - Math.pow(1 - t, 3);
          setValue(Math.round(eased * end));
          if (t < 1) requestAnimationFrame(step);
          else setDone(true);
        };
        requestAnimationFrame(step);
      }
    }, { threshold: 0.4 });
    observer.observe(el);
    return () => observer.disconnect();
  }, [end, duration, reduce]);

  return (
    <span ref={ref} className={`relative inline-block ${className ?? ""}`}>
      <span className="tabular-nums">{prefix}{value}{suffix}</span>
      {done && !reduce && (
        <motion.span
          className="pointer-events-none absolute inset-0 flex items-center justify-center"
          initial={{ opacity: 0.8, scale: 0.8 }}
          animate={{ opacity: 0, scale: 2.2 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          aria-hidden="true"
        >
          <span className="h-3 w-3 rounded-full bg-gradient-to-r from-amber-400 to-blue-400 blur-sm" />
        </motion.span>
      )}
    </span>
  );
}
