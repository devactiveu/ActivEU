import type { ReactNode } from "react";
import { TextRevealLine } from "./motion-primitives";
import { DoodleUnderline } from "./DoodleSystem";

type AnimatedHeadingProps = {
  lines: string[];
  body?: string;
  eyebrow?: ReactNode;
  className?: string;
  invert?: boolean;
  underline?: boolean;
  mode?: "hero" | "chapter" | "evidence" | "cta";
};

export function AnimatedHeading({
  lines,
  body,
  eyebrow,
  className = "",
  invert = false,
  underline = false,
  mode = "chapter",
}: AnimatedHeadingProps) {
  const modeClass = {
    hero: "animated-heading-hero",
    chapter: "animated-heading-chapter",
    evidence: "animated-heading-evidence",
    cta: "animated-heading-cta",
  }[mode];

  return (
    <div className={`animated-heading ${modeClass} ${className}`.trim()}>
      {eyebrow ? <div className={`eyebrow ${invert ? "border-white/20 bg-white/10 text-white/84" : ""}`}>{eyebrow}</div> : null}
      <div className="relative">
        <h2 className={`mt-6 font-display text-[clamp(2.8rem,5vw,5.2rem)] leading-[0.9] tracking-[-0.055em] ${invert ? "text-white" : "text-primary"}`}>
          {lines.map((line, index) => (
            <TextRevealLine
              key={`${line}-${index}`}
              className={`block ${index === 1 ? "text-gradient-premium-flow" : index === lines.length - 1 && lines.length > 1 ? invert ? "text-white/72" : "text-primary/74" : ""}`}
              delay={index * 0.06}
            >
              {line}
            </TextRevealLine>
          ))}
        </h2>
        {underline ? <DoodleUnderline className="hero-headline-underline" /> : null}
      </div>
      {body ? <p className={`mt-5 max-w-2xl text-lg leading-8 ${invert ? "text-white/74" : "text-foreground/68"}`}>{body}</p> : null}
    </div>
  );
}
