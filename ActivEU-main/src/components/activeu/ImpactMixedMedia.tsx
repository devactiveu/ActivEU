import { ArrowUpRight, Camera, Sparkles } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";
import { FadeIn, FloatIcon, RevealItem, SectionReveal } from "./motion-primitives";
import { DoodleBadge, DoodleBolt, DoodleHeart, DoodleSquiggle, DoodleStar } from "./DoodleSystem";
import { Tilt3DCard } from "./Tilt3DCard";

type Translator = (pt: string, en: string) => string;

const cards = [
  {
    image: "/Imagens/solidarityactionday.jpg",
    kickerPt: "impacto direto",
    kickerEn: "direct impact",
    titlePt: "Ação em contexto real",
    titleEn: "Action in real context",
    bodyPt: "Projetos que se percebem pela presença humana, pela energia e pelo resultado.",
    bodyEn: "Projects understood through human presence, energy and visible result.",
    accent: "from-[#ffb020] to-[#ff8a00]",
    glow: "sunbeam" as const,
    badgeColor: "#ffb020",
    overlayFrom: "from-[#1e40ff]/0",
    overlayTo: "to-[#1e40ff]/40",
  },
  {
    image: "/Imagens/parceira.jpg",
    kickerPt: "colaboração visível",
    kickerEn: "visible collaboration",
    titlePt: "Juventude e empresas no mesmo quadro",
    titleEn: "Youth and companies in the same frame",
    bodyPt: "A narrativa fica mais forte quando todos aparecem como parte da mesma ação.",
    bodyEn: "The story gets stronger when everyone appears as part of the same action.",
    accent: "from-[#e94e77] to-[#ff5e5b]",
    glow: "coral" as const,
    badgeColor: "#e94e77",
    overlayFrom: "from-[#e94e77]/0",
    overlayTo: "to-[#e94e77]/40",
  },
];

export function ImpactMixedMedia({ t }: { t: Translator }) {
  const reduceMotion = useReducedMotion();

  return (
    <section className="relative mx-auto max-w-6xl px-4 py-18 md:px-6 md:py-24">
      <FloatIcon className="pointer-events-none absolute -left-2 top-12 hidden lg:block" amplitude={6}>
        <DoodleStar size={36} color="#ffb020" />
      </FloatIcon>
      <FloatIcon className="pointer-events-none absolute right-4 top-24 hidden lg:block" amplitude={8} delay={0.6}>
        <DoodleBolt size={30} color="#1e40ff" />
      </FloatIcon>

      <div className="grid gap-10 lg:grid-cols-[0.92fr_1.08fr] lg:items-center">
        <FadeIn className="max-w-xl">
          <p className="eyebrow-coral">
            <Camera className="h-3.5 w-3.5" />
            {t("cenas com memória", "scenes with memory")}
          </p>
          <h2 className="mt-5 text-4xl font-semibold tracking-[-0.04em] text-slate-950 md:text-5xl">
            {t("Imagem real, gesto editorial e ", "Real imagery, editorial gesture and ")}
            <span className="relative inline-block">
              <span className="relative z-10 text-gradient-premium-flow">
                {t("presença humana.", "human presence.")}
              </span>
              <DoodleSquiggle className="absolute -bottom-3 left-0 h-3 w-full" color="#b7e934" />
            </span>
          </h2>
          <p className="mt-6 text-base leading-8 text-slate-600 md:text-lg">
            {t(
              "A ActivEU não precisa de parecer exuberante. Precisa de parecer viva, organizada e próxima das pessoas que mobiliza.",
              "ActivEU does not need to feel extravagant. It needs to feel alive, organized and close to the people it mobilizes.",
            )}
          </p>
          <p className="mt-4 text-base leading-8 text-slate-600">
            {t(
              "Esta secção usa mixed media de forma controlada para deixar memória emocional sem perder credibilidade institucional.",
              "This section uses mixed media in a controlled way to leave emotional memory without losing institutional credibility.",
            )}
          </p>
          <a
            href="#contact"
            className="pop-cta-ghost mt-8 inline-flex items-center gap-2"
          >
            <Sparkles className="h-4 w-4" />
            {t("Falar sobre um projeto", "Talk about a project")}
            <ArrowUpRight className="h-4 w-4" />
          </a>
        </FadeIn>

        <SectionReveal className="grid gap-5 md:grid-cols-2">
          {cards.map((card, index) => (
            <RevealItem key={card.titleEn} variant={index === 0 ? "rotate" : "pop"}>
              <Tilt3DCard glow={card.glow} maxTilt={6}>
                <motion.article
                  className={`relative overflow-hidden rounded-[30px] border-2 border-white bg-white shadow-[0_24px_70px_rgba(30,64,255,0.14)] ${
                    index === 1 ? "md:translate-y-10" : ""
                  }`}
                  whileHover={reduceMotion ? undefined : { y: -8, rotate: index === 0 ? -1 : 1 }}
                  transition={{ type: "spring", stiffness: 220, damping: 24 }}
                >
                  <div className="relative h-[300px] w-full overflow-hidden">
                    <img src={card.image} alt={t(card.titlePt, card.titleEn)} className="h-full w-full object-cover" />
                    <div className={`absolute inset-0 bg-gradient-to-b ${card.overlayFrom} ${card.overlayTo}`} />
                    <FloatIcon
                      className="absolute right-4 top-4"
                      amplitude={5}
                      delay={index * 0.3}
                    >
                      {index === 0 ? (
                        <DoodleHeart size={26} color="#ffffff" />
                      ) : (
                        <DoodleStar size={26} color="#ffffff" />
                      )}
                    </FloatIcon>
                    <div className={`absolute bottom-0 left-0 right-0 h-1.5 bg-gradient-to-r ${card.accent}`} />
                  </div>
                  <div className="p-6">
                    <p
                      className="text-[11px] font-semibold uppercase tracking-[0.22em]"
                      style={{ color: card.badgeColor }}
                    >
                      {t(card.kickerPt, card.kickerEn)}
                    </p>
                    <h3 className="mt-3 text-2xl font-semibold tracking-[-0.03em] text-slate-950">
                      {t(card.titlePt, card.titleEn)}
                    </h3>
                    <p className="mt-3 text-sm leading-7 text-slate-600">
                      {t(card.bodyPt, card.bodyEn)}
                    </p>
                  </div>
                  <DoodleBadge
                    text={index === 0 ? t("energia real", "real energy") : t("ação partilhada", "shared action")}
                    className={index === 0 ? "left-5 top-5" : "bottom-5 right-5"}
                  />
                </motion.article>
              </Tilt3DCard>
            </RevealItem>
          ))}
        </SectionReveal>
      </div>
    </section>
  );
}
