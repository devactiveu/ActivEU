import { BadgeCheck, Building2, HeartHandshake, Sparkles, Users2 } from "lucide-react";
import { motion, useMotionValueEvent, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { useRef, useState } from "react";
import { useLanguage } from "@/contexts/useLanguage";
import { FadeIn, SectionReveal, RevealItem } from "./motion-primitives";
import { ValueMarquee } from "./ValueMarquee";

const steps = [
  {
    icon: Users2,
    titlePt: "A juventude entra para participar com voz real.",
    titleEn: "Young people step in with real voice and space.",
    bodyPt: "A ActivEU abre contexto, responsabilidade e pertença desde o primeiro contacto.",
    bodyEn: "ActivEU opens context, responsibility and belonging from the first contact.",
  },
  {
    icon: Building2,
    titlePt: "As empresas entram para agir, não apenas para aparecer.",
    titleEn: "Companies step in to act, not just to appear.",
    bodyPt: "A participação ganha forma concreta no terreno, com equipas e recursos realmente envolvidos.",
    bodyEn: "Participation becomes concrete on the ground, with teams and resources genuinely involved.",
  },
  {
    icon: HeartHandshake,
    titlePt: "As causas recebem retorno visível e continuidade.",
    titleEn: "Causes receive visible return and continuity.",
    bodyPt: "O valor fica documentado, partilhável e mais fácil de sustentar depois do momento inicial.",
    bodyEn: "The value becomes documented, shareable and easier to sustain after the initial moment.",
  },
];

export function JourneyCanvas() {
  const { t } = useLanguage();
  const reduceMotion = useReducedMotion();
  const ref = useRef<HTMLElement | null>(null);
  const [active, setActive] = useState(0);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const lineProgress = useTransform(scrollYProgress, [0.15, 0.85], [0, 1]);

  useMotionValueEvent(scrollYProgress, "change", (value) => {
    if (value < 0.38) setActive(0);
    else if (value < 0.68) setActive(1);
    else setActive(2);
  });

  return (
    <section ref={ref} className="mx-auto max-w-6xl px-4 py-20 md:px-6 md:py-24">
      <FadeIn className="mx-auto max-w-3xl text-center">
        <p className="eyebrow justify-center">
          <Sparkles className="h-3.5 w-3.5" />
          {t("trajetória da missão", "mission journey")}
        </p>
        <h2 className="mt-5 text-4xl font-semibold tracking-[-0.04em] text-slate-950 md:text-5xl">
          {t("Da primeira participação ao impacto que fica.", "From first participation to the impact that stays.")}
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-base leading-8 text-slate-600 md:text-lg">
          {t(
            "Esta secção mostra o que a ActivEU faz de melhor: transformar encontro em ação e ação em valor social perceptível.",
            "This section shows what ActivEU does best: turn encounters into action and action into social value people can perceive.",
          )}
        </p>
      </FadeIn>

      <ValueMarquee
        className="mt-8"
        labels={[
          t("juventude com espaço", "youth with space"),
          t("empresas com gesto real", "companies with real action"),
          t("causas com retorno", "causes with return"),
          t("impacto verificável", "verifiable impact"),
          t("comunidade com continuidade", "community with continuity"),
        ]}
      />

      <div className="relative mt-12 overflow-hidden rounded-[36px] border-2 border-white bg-gradient-to-br from-white via-[#fffaf0] to-[#f3f6ff] p-6 shadow-[0_24px_70px_rgba(30,64,255,0.10)] md:p-8">
        <div className="absolute left-1/2 top-[7.75rem] hidden h-[calc(100%-15rem)] w-px -translate-x-1/2 bg-slate-200 lg:block" />
        {!reduceMotion && (
          <motion.div
            className="absolute left-1/2 top-[7.75rem] hidden h-[calc(100%-15rem)] w-1.5 -translate-x-1/2 rounded-full bg-[linear-gradient(180deg,#ffb020_0%,#e94e77_40%,#1e40ff_75%,#b7e934_100%)] shadow-[0_0_16px_rgba(255,176,32,0.55)] lg:block"
            style={{ scaleY: lineProgress, originY: 0 }}
          />
        )}

        <div className="grid gap-6 lg:grid-cols-3">
          {steps.map((step, index) => {
            const Icon = step.icon;
            const isActive = active === index;
            const activeGradients = [
              "from-[#ffb020] to-[#ff8a00]",
              "from-[#1e40ff] to-[#5876ff]",
              "from-[#e94e77] to-[#ff5e5b]",
            ];
            return (
              <RevealItem key={step.titleEn} variant="pop">
                <motion.article
                  className={`relative overflow-hidden rounded-[28px] border-2 p-6 transition ${
                    isActive
                      ? `border-transparent bg-gradient-to-br ${activeGradients[index]} text-white shadow-[0_24px_60px_rgba(30,64,255,0.28)]`
                      : "border-white bg-white/80 text-slate-950 shadow-[0_10px_30px_rgba(30,64,255,0.06)]"
                  }`}
                  animate={reduceMotion ? undefined : { y: isActive ? -8 : 0, scale: isActive ? 1.02 : 1 }}
                  transition={{ type: "spring", stiffness: 220, damping: 22 }}
                >
                  {isActive && !reduceMotion && (
                    <motion.div
                      className="pointer-events-none absolute -right-10 -top-10 h-40 w-40 rounded-full bg-white/20 blur-2xl"
                      animate={{ scale: [1, 1.2, 1] }}
                      transition={{ duration: 3, repeat: Infinity }}
                    />
                  )}
                  <div className={`inline-flex h-12 w-12 items-center justify-center rounded-2xl ${isActive ? "bg-white/20 text-white" : "bg-white text-slate-950 shadow-md"}`}>
                    <Icon className="h-5 w-5" />
                  </div>
                  <span className={`mt-4 block text-[11px] font-semibold uppercase tracking-[0.22em] ${isActive ? "text-white/80" : "text-slate-500"}`}>
                    0{index + 1}
                  </span>
                  <h3 className="mt-3 text-2xl font-semibold tracking-[-0.03em]">
                    {t(step.titlePt, step.titleEn)}
                  </h3>
                  <p className={`mt-3 text-sm leading-7 ${isActive ? "text-white/90" : "text-slate-600"}`}>
                    {t(step.bodyPt, step.bodyEn)}
                  </p>
                </motion.article>
              </RevealItem>
            );
          })}
        </div>

        <div className="mt-6 rounded-[28px] border-2 border-[#b7e934]/50 bg-gradient-to-br from-[#f2fbd7] to-white p-5 text-slate-900 shadow-[0_10px_30px_rgba(183,233,52,0.18)]">
          <div className="flex items-start gap-3">
            <span className="inline-flex h-10 w-10 items-center justify-center rounded-2xl bg-gradient-to-br from-[#b7e934] to-[#9bd41d] text-white shadow-md">
              <BadgeCheck className="h-4 w-4" />
            </span>
            <div>
              <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-[#4a7a00]">
                {t("porque funciona", "why it works")}
              </p>
              <p className="mt-2 text-sm leading-7 text-slate-700">
                {t(
                  "A missão deixa de soar abstrata porque cada etapa mostra um papel concreto, uma troca real e um resultado que se consegue contar.",
                  "The mission stops sounding abstract because each stage shows a concrete role, a real exchange and a result that can be told clearly.",
                )}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
