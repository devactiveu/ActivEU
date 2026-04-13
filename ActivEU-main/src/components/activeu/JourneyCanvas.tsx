import { BadgeCheck, Building2, HeartHandshake, Sparkles, Users2 } from "lucide-react";
import { motion, useMotionValueEvent, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { useLanguage } from "@/contexts/LanguageContext";
import { FadeIn, Reveal3D } from "./motion-primitives";
import { useRef, useState } from "react";
import { AnimatedHeading } from "./AnimatedHeading";
import { ValueMarquee } from "./ValueMarquee";

const steps = [
  {
    icon: Users2,
    ptTitle: "A juventude entra para ser vista, ouvida e levada a serio",
    enTitle: "Young people enter to be seen, heard and taken seriously",
    ptBody: "A ActivEU transforma curiosidade em presenca: abre portas reais, aproxima talento de contextos profissionais e faz a participacao sentir-se consequente desde o primeiro momento.",
    enBody: "ActivEU turns curiosity into presence: it opens real doors, brings talent closer to professional contexts and makes participation feel meaningful from the very first moment.",
    angle: "journey-step-a",
  },
  {
    icon: Building2,
    ptTitle: "As empresas mostram que responsabilidade social tambem se vive",
    enTitle: "Companies show that social responsibility can be lived",
    ptBody: "O encontro deixa de ser simbolico. Equipas, espacos e historias tornam-se parte de uma experiencia concreta onde a solidariedade ganha rosto, escala e credibilidade.",
    enBody: "The encounter stops being symbolic. Teams, spaces and stories become part of a concrete experience where solidarity gains a face, scale and credibility.",
    angle: "journey-step-b",
  },
  {
    icon: HeartHandshake,
    ptTitle: "As causas recebem impacto verificavel e a comunidade ganha continuidade",
    enTitle: "Causes receive verifiable impact and the community gains continuity",
    ptBody: "O valor nao termina no evento. Cada participacao gera retorno documentado, reforca causas concretas e prova que um dia bem desenhado pode deixar lastro social duradouro.",
    enBody: "Value does not end with the event. Each participation generates documented return, strengthens concrete causes and proves that a well-designed day can leave lasting social impact.",
    angle: "journey-step-c",
  },
];

export function JourneyCanvas() {
  const { t } = useLanguage();
  const reduceMotion = useReducedMotion();
  const sectionRef = useRef<HTMLElement | null>(null);
  const [activeStep, setActiveStep] = useState(0);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });
  const coreY = useTransform(scrollYProgress, [0, 0.5, 1], [50, 0, -40]);
  const noteY = useTransform(scrollYProgress, [0, 0.5, 1], [20, 0, -20]);
  const progressScaleX = useTransform(scrollYProgress, [0.08, 0.9], [0, 1]);
  const pathOneLength = useTransform(scrollYProgress, [0.12, 0.36], [0, 1]);
  const pathTwoLength = useTransform(scrollYProgress, [0.33, 0.58], [0, 1]);
  const pathThreeLength = useTransform(scrollYProgress, [0.56, 0.82], [0, 1]);
  const pathFourLength = useTransform(scrollYProgress, [0.7, 0.94], [0, 1]);

  useMotionValueEvent(scrollYProgress, "change", (value) => {
    if (value < 0.38) setActiveStep(0);
    else if (value < 0.68) setActiveStep(1);
    else setActiveStep(2);
  });

  return (
    <section ref={sectionRef} className="section-shell relative py-24 md:py-28">
      <FadeIn className="mx-auto max-w-3xl text-center">
        <AnimatedHeading
          mode="chapter"
          className="mx-auto max-w-4xl"
          eyebrow={<><Sparkles size={14} />{t("Scrollytelling da missao", "Mission scrollytelling")}</>}
          lines={[
            t("A missao da ActivEU", "ActivEU's mission"),
            t("precisa de se revelar", "should unfold"),
            t("como uma historia em movimento.", "like a story in motion."),
          ]}
          body={t(
            "Em vez de explicar o modelo com blocos estaticos, esta seccao usa o scroll para mostrar uma progressao emocional e funcional: entrada, encontro e impacto. O objetivo e fazer a proposta sentir-se humana antes de ser racionalizada.",
            "Instead of explaining the model with static blocks, this section uses scroll to show an emotional and functional progression: entry, encounter and impact. The goal is to make the proposition feel human before it is rationalized.",
          )}
        />
      </FadeIn>

      <ValueMarquee
        className="journey-value-marquee mt-8"
        labels={[
          t("portas que se abrem", "doors that open"),
          t("juventude com espaco real", "youth with real space"),
          t("empresas com gesto visivel", "companies with visible action"),
          t("causas com retorno documentado", "causes with documented return"),
          t("solidariedade com presenca", "solidarity with presence"),
          t("um dia que deixa lastro", "a day that leaves a trace"),
        ]}
      />

      <div className="journey-canvas-shell mt-16">
        <div className="journey-progress-rail" aria-hidden="true">
          <motion.div className="journey-progress-fill" style={{ scaleX: progressScaleX }} />
        </div>
        <div className="journey-state-pill" aria-hidden="true">
          {activeStep === 0 ? t("fase 1: despertar", "phase 1: awakening") : activeStep === 1 ? t("fase 2: encontro", "phase 2: encounter") : t("fase 3: retorno", "phase 3: return")}
        </div>
        <svg className="journey-connectors" viewBox="0 0 1200 720" fill="none" aria-hidden="true">
          <motion.path
            d="M276 256C376 158 519 134 603 250"
            stroke="#ffb007"
            strokeWidth="8"
            strokeLinecap="round"
            strokeDasharray="10 18"
            animate={
              reduceMotion
                ? undefined
                : {
                    opacity: activeStep === 0 ? 1 : 0.34,
                    strokeWidth: activeStep === 0 ? 10 : 7,
                  }
            }
            style={reduceMotion ? undefined : { pathLength: pathOneLength }}
            transition={{ duration: 0.62, ease: [0.22, 1, 0.36, 1] }}
          />
          <motion.path
            d="M615 287C746 284 862 312 936 421"
            stroke="#3b82f6"
            strokeWidth="8"
            strokeLinecap="round"
            strokeDasharray="10 18"
            animate={
              reduceMotion
                ? undefined
                : {
                    opacity: activeStep === 1 ? 1 : 0.34,
                    strokeWidth: activeStep === 1 ? 10 : 7,
                  }
            }
            style={reduceMotion ? undefined : { pathLength: pathTwoLength }}
            transition={{ duration: 0.62, ease: [0.22, 1, 0.36, 1] }}
          />
          <motion.path
            d="M952 430C818 566 571 602 391 522"
            stroke="#f97316"
            strokeWidth="8"
            strokeLinecap="round"
            strokeDasharray="12 18"
            animate={
              reduceMotion
                ? undefined
                : {
                    opacity: activeStep === 2 ? 1 : 0.34,
                    strokeWidth: activeStep === 2 ? 10 : 7,
                  }
            }
            style={reduceMotion ? undefined : { pathLength: pathThreeLength }}
            transition={{ duration: 0.62, ease: [0.22, 1, 0.36, 1] }}
          />
          <motion.path
            d="M387 510C335 488 297 452 263 387"
            stroke="#ffb007"
            strokeWidth="6"
            strokeLinecap="round"
            animate={reduceMotion ? undefined : { opacity: activeStep === 2 ? 0.92 : 0.38 }}
            style={reduceMotion ? undefined : { pathLength: pathFourLength }}
            transition={{ duration: 0.62, ease: [0.22, 1, 0.36, 1] }}
          />
        </svg>

        <motion.div className="journey-core" style={{ y: reduceMotion ? 0 : coreY }}>
          <div className="journey-core-ring" />
          <div className="journey-core-ring journey-core-ring-alt" />
          <div className="journey-core-card">
            <span className="journey-core-kicker">{t("nucleo da historia", "story core")}</span>
            <h3 className="font-display text-[clamp(2.4rem,4vw,4rem)] leading-[0.92] tracking-[-0.05em] text-primary">
              {t("Um dia liga pessoas, instituicoes e causas num mesmo gesto europeu.", "One day connects people, institutions and causes through a shared European gesture.")}
            </h3>
            <p className="mt-4 text-base leading-8 text-foreground/70">
              {t(
                "Aqui, o scroll nao serve apenas para avancar. Serve para provar que a ActivEU consegue transformar potencial jovem em encontro concreto e esse encontro em impacto social verificavel.",
                "Here, scroll does more than move the page forward. It proves that ActivEU can turn youth potential into a concrete encounter and that encounter into verifiable social impact.",
              )}
            </p>
            <div className="journey-core-badges">
              <span>{t("mais contexto", "more context")}</span>
              <span>{t("mais ligacao", "more connection")}</span>
              <span>{t("mais consequencia", "more consequence")}</span>
            </div>
          </div>
        </motion.div>

        {steps.map((step, index) => {
          const Icon = step.icon;
          const isActive = index === activeStep;
          return (
            <Reveal3D key={step.enTitle} delay={index * 0.08} className={`journey-step ${step.angle}`}>
              <motion.article
                className={`journey-step-card ${isActive ? "journey-step-card-active" : ""}`}
                animate={
                  reduceMotion
                    ? undefined
                    : isActive
                      ? { scale: 1.04, y: -8, rotate: index === 1 ? -1 : 1 }
                      : { scale: 1, y: 0, rotate: 0 }
                }
                transition={{ type: "spring", stiffness: 230, damping: 20 }}
              >
                <div className="journey-step-icon">
                  <Icon size={18} />
                </div>
                <span className="journey-step-index">0{index + 1}</span>
                <h3 className="mt-5 font-display text-[1.55rem] leading-[0.96] tracking-[-0.04em] text-primary">
                  {t(step.ptTitle, step.enTitle)}
                </h3>
                <p className="mt-3 text-sm leading-7 text-foreground/68">
                  {t(step.ptBody, step.enBody)}
                </p>
              </motion.article>
            </Reveal3D>
          );
        })}

        <motion.div className="journey-proof" style={{ y: reduceMotion ? 0 : noteY }}>
          <div className="journey-proof-card">
            <BadgeCheck size={18} />
            <div>
              <p className="journey-proof-label">{t("por que funciona", "why it works")}</p>
              <p className="journey-proof-copy">
                {t(
                  "A proposta deixa de parecer um esquema abstrato. Passa a comportar-se como uma narrativa coerente onde cada scroll aprofunda a razao de existir da ActivEU.",
                  "The proposition stops feeling like an abstract scheme. It starts behaving like a coherent narrative where each scroll deepens ActivEU's reason for existing.",
                )}
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
