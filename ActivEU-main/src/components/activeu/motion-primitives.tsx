import { useEffect, useRef, useState, type ReactNode } from "react";
import { motion, useReducedMotion, useScroll, useSpring, useTransform } from "framer-motion";

const viewport = { once: true, amount: 0.2, margin: "-48px" } as const;

export function FadeIn({
  children,
  className,
  delay = 0,
  y = 32,
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
  y?: number;
}) {
  const reduceMotion = useReducedMotion();

  if (reduceMotion) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={viewport}
      transition={{ duration: 0.55, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}

export function PopIn({
  children,
  className,
  delay = 0,
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
}) {
  const reduceMotion = useReducedMotion();

  if (reduceMotion) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, scale: 0.72, y: 20 }}
      whileInView={{ opacity: 1, scale: 1, y: 0 }}
      viewport={viewport}
      transition={{ type: "spring", stiffness: 220, damping: 16, delay }}
    >
      {children}
    </motion.div>
  );
}

export function RotateIn({
  children,
  className,
  delay = 0,
  direction = "left",
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
  direction?: "left" | "right";
}) {
  const reduceMotion = useReducedMotion();
  const rotate = direction === "left" ? -8 : 8;

  if (reduceMotion) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, rotate, scale: 0.9, y: 24 }}
      whileInView={{ opacity: 1, rotate: 0, scale: 1, y: 0 }}
      viewport={viewport}
      transition={{ duration: 0.65, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}

export function SectionReveal({
  children,
  className,
  stagger = 0.08,
}: {
  children: ReactNode;
  className?: string;
  stagger?: number;
}) {
  const reduceMotion = useReducedMotion();

  if (reduceMotion) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="show"
      viewport={viewport}
      variants={{
        hidden: {},
        show: {
          transition: { staggerChildren: stagger, delayChildren: 0.06 },
        },
      }}
    >
      {children}
    </motion.div>
  );
}

export function RevealItem({
  children,
  className,
  variant = "slide",
}: {
  children: ReactNode;
  className?: string;
  variant?: "slide" | "pop" | "rotate";
}) {
  const reduceMotion = useReducedMotion();

  if (reduceMotion) {
    return <div className={className}>{children}</div>;
  }

  const variants =
    variant === "pop"
      ? {
          hidden: { opacity: 0, scale: 0.78, y: 18 },
          show: { opacity: 1, scale: 1, y: 0, transition: { type: "spring" as const, stiffness: 220, damping: 18 } },
        }
      : variant === "rotate"
        ? {
            hidden: { opacity: 0, rotate: -6, scale: 0.94, y: 18 },
            show: { opacity: 1, rotate: 0, scale: 1, y: 0, transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] } },
          }
        : {
            hidden: { opacity: 0, y: 28 },
            show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] } },
          };

  return (
    <motion.div className={className} variants={variants}>
      {children}
    </motion.div>
  );
}

export function TextRevealLine({
  children,
  className,
  delay = 0,
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
}) {
  const reduceMotion = useReducedMotion();

  if (reduceMotion) {
    return <span className={className}>{children}</span>;
  }

  return (
    <motion.span
      className={className}
      initial={{ opacity: 0, y: "0.5em", filter: "blur(8px)" }}
      animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
      transition={{ duration: 0.72, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.span>
  );
}

export function SlideIn({
  children,
  className,
  direction = "left",
  delay = 0,
}: {
  children: ReactNode;
  className?: string;
  direction?: "left" | "right";
  delay?: number;
}) {
  const reduceMotion = useReducedMotion();
  const fromX = direction === "left" ? -42 : 42;

  if (reduceMotion) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, x: fromX }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={viewport}
      transition={{ duration: 0.55, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}

export function ParallaxLayer({
  children,
  className,
  offset = 32,
}: {
  children: ReactNode;
  className?: string;
  offset?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const reduceMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], [offset, -offset]);

  if (reduceMotion) {
    return (
      <div ref={ref} className={className}>
        {children}
      </div>
    );
  }

  return (
    <motion.div ref={ref} className={className} style={{ y }}>
      {children}
    </motion.div>
  );
}

export function ScrollProgress() {
  const reduceMotion = useReducedMotion();
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 180, damping: 30, mass: 0.3 });

  if (reduceMotion) return null;

  return (
    <motion.div
      aria-hidden="true"
      className="fixed inset-x-0 top-0 z-[70] h-1 origin-left"
      style={{
        scaleX,
        background: "linear-gradient(90deg, #1e40ff 0%, #e94e77 40%, #ffb020 75%, #b7e934 100%)",
      }}
    />
  );
}

export function SparkCounter({
  end,
  suffix = "",
}: {
  end: number;
  suffix?: string;
}) {
  const reduceMotion = useReducedMotion();
  const ref = useRef<HTMLSpanElement>(null);
  const [value, setValue] = useState(reduceMotion ? end : 0);

  useEffect(() => {
    if (reduceMotion) {
      setValue(end);
      return;
    }

    const element = ref.current;
    if (!element) return;

    let frame = 0;
    let started = false;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting || started) return;
        started = true;

        const totalFrames = 42;
        const tick = () => {
          frame += 1;
          const progress = frame / totalFrames;
          const eased = 1 - Math.pow(1 - progress, 3);
          setValue(Math.round(end * eased));
          if (frame < totalFrames) {
            requestAnimationFrame(tick);
          }
        };

        requestAnimationFrame(tick);
      },
      { threshold: 0.4 },
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, [end, reduceMotion]);

  return (
    <span ref={ref} className="tabular-nums">
      {value}
      {suffix}
    </span>
  );
}

export function FloatIcon({
  children,
  className = "",
  delay = 0,
  amplitude = 4,
  wiggleOnHover = true,
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
  amplitude?: number;
  wiggleOnHover?: boolean;
}) {
  const reduceMotion = useReducedMotion();

  if (reduceMotion) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      className={className}
      animate={{ y: [0, -amplitude, 0], rotate: [0, -3, 3, 0] }}
      transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay }}
      whileHover={wiggleOnHover ? { scale: 1.15, rotate: 8 } : undefined}
    >
      {children}
    </motion.div>
  );
}

export function CharReveal({
  text,
  delay = 0,
  className,
}: {
  text: string;
  delay?: number;
  className?: string;
}) {
  const reduceMotion = useReducedMotion();
  const chars = text.split("");

  if (reduceMotion) {
    return <span className={className}>{text}</span>;
  }

  return (
    <span className={className} aria-label={text} style={{ perspective: "600px", display: "inline-block", whiteSpace: "nowrap" }}>
      {chars.map((char, i) => (
        <motion.span
          key={i}
          style={{ display: "inline-block", transformOrigin: "bottom center" }}
          initial={{ opacity: 0, y: "0.6em", rotateX: -60 }}
          animate={{ opacity: 1, y: 0, rotateX: 0 }}
          transition={{ duration: 0.55, delay: delay + i * 0.028, ease: [0.22, 1, 0.36, 1] }}
        >
          {char === " " ? " " : char}
        </motion.span>
      ))}
    </span>
  );
}

export function GradientOrbitRing({ className = "" }: { className?: string }) {
  const reduceMotion = useReducedMotion();

  return (
    <motion.div
      aria-hidden="true"
      className={`pointer-events-none rounded-full ${className}`}
      style={{
        background:
          "conic-gradient(from 0deg, rgba(255,176,32,0), rgba(255,176,32,0.6), rgba(30,64,255,0.55), rgba(233,78,119,0.6), rgba(183,233,52,0.55), rgba(255,176,32,0))",
      }}
      animate={reduceMotion ? undefined : { rotate: 360 }}
      transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
    />
  );
}
