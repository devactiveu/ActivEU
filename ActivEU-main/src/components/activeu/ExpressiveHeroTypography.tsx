import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

type ExpressiveHeroTypographyProps = {
  t: (pt: string, en: string) => string;
  lang: string;
  reduceMotion: boolean;
};

const lineBlueprints = [
  {
    subjectPt: "juventude.",
    subjectEn: "youth.",
    tone: "solid" as const,
  },
  {
    subjectPt: "empresas.",
    subjectEn: "companies.",
    tone: "outline" as const,
  },
  {
    subjectPt: "causas.",
    subjectEn: "causes.",
    tone: "glow" as const,
  },
  {
    subjectPt: "a Europa para mais perto.",
    subjectEn: "Europe closer.",
    tone: "soft" as const,
  },
];

const missionNotes = [
  {
    labelPt: "juventude",
    labelEn: "youth",
    bodyPt: "ganha palco real, contexto profissional e uma experiencia que fica.",
    bodyEn: "gains a real stage, professional context and an experience that lasts.",
  },
  {
    labelPt: "empresas",
    labelEn: "companies",
    bodyPt: "transformam responsabilidade social num gesto visivel, humano e partilhavel.",
    bodyEn: "turn social responsibility into a visible, human and shareable gesture.",
  },
  {
    labelPt: "causas",
    labelEn: "causes",
    bodyPt: "recebem impacto documentado, claro e emocionalmente memoravel.",
    bodyEn: "receive documented impact that feels clear and emotionally memorable.",
  },
];

export function ExpressiveHeroTypography({
  t,
  lang,
  reduceMotion,
}: ExpressiveHeroTypographyProps) {
  const [noteIndex, setNoteIndex] = useState(0);

  useEffect(() => {
    if (reduceMotion) return;

    const interval = window.setInterval(() => {
      setNoteIndex((current) => (current + 1) % missionNotes.length);
    }, 2800);

    return () => window.clearInterval(interval);
  }, [reduceMotion]);

  const activeNote = missionNotes[noteIndex];

  return (
    <div className="expressive-hero-copy">
      <div className="expressive-hero-stage" aria-hidden="true">
        <span className="expressive-hero-ghost expressive-hero-ghost-a">
          {t("mover", "move")}
        </span>
        <span className="expressive-hero-ghost expressive-hero-ghost-b">
          {t("ligar", "connect")}
        </span>
        <span className="expressive-hero-ghost expressive-hero-ghost-c">
          ActivEU
        </span>
      </div>

      <div className="expressive-hero-stack">
        {lineBlueprints.map((line, index) => (
          <motion.div
            key={`${lang}-${index}`}
            className={`expressive-hero-line expressive-hero-line-${line.tone}`}
            initial={
              reduceMotion
                ? false
                : {
                    opacity: 0,
                    x: index % 2 === 0 ? -38 : 38,
                    y: 22,
                    filter: "blur(12px)",
                  }
            }
            animate={
              reduceMotion
                ? undefined
                : {
                    opacity: 1,
                    x: 0,
                    y: 0,
                    filter: "blur(0px)",
                  }
            }
            transition={{
              duration: 0.88,
              delay: 0.06 + index * 0.08,
              ease: [0.16, 1, 0.3, 1],
            }}
          >
            <span className="expressive-hero-verb">{t("Mover", "Move")}</span>
            <span className="expressive-hero-subject">
              {t(line.subjectPt, line.subjectEn)}
            </span>
          </motion.div>
        ))}
      </div>

      <div className="expressive-hero-meta">
        <div className="expressive-hero-meta-rail">
          {[
            t("solidarity action day", "solidarity action day"),
            t("juventude", "youth"),
            t("empresas", "companies"),
            t("causas", "causes"),
            t("impacto verificavel", "verifiable impact"),
          ].map((item) => (
            <span key={item} className="expressive-hero-meta-chip">
              {item}
            </span>
          ))}
        </div>

        <div className="expressive-hero-note" role="status" aria-live="polite">
          <span className="expressive-hero-note-label">
            {t("porque isto importa", "why this matters")}
          </span>
          <AnimatePresence mode="wait">
            <motion.p
              key={`${lang}-${noteIndex}`}
              className="expressive-hero-note-body"
              initial={reduceMotion ? false : { opacity: 0, y: 12, filter: "blur(8px)" }}
              animate={reduceMotion ? undefined : { opacity: 1, y: 0, filter: "blur(0px)" }}
              exit={reduceMotion ? undefined : { opacity: 0, y: -10, filter: "blur(8px)" }}
              transition={{ duration: 0.36, ease: [0.16, 1, 0.3, 1] }}
            >
              <strong>{t(activeNote.labelPt, activeNote.labelEn)}</strong>{" "}
              {t(activeNote.bodyPt, activeNote.bodyEn)}
            </motion.p>
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}
