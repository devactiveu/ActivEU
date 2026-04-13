import { useEffect, useState } from "react";
import { Aperture, BadgeCheck, Layers3, Orbit, Sparkles, type LucideIcon } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";
import { DoodleArrow, DoodleBadge, DoodleCluster, DoodleSpark, DoodleStamp, MorphBlob, RibbonTrace, StickerNote } from "@/components/activeu/DoodleSystem";
import { FadeIn, Reveal3D, RevealItem, SectionReveal } from "@/components/activeu/motion-primitives";

type Translator = (pt: string, en: string) => string;

type MotionMode = {
  accent: "amber" | "blue" | "coral";
  icon: LucideIcon;
  ptLabel: string;
  enLabel: string;
  ptTitle: string;
  enTitle: string;
  ptBody: string;
  enBody: string;
  ptCue: string;
  enCue: string;
  ptSurface: string;
  enSurface: string;
};

const modes: MotionMode[] = [
  {
    accent: "amber",
    icon: Orbit,
    ptLabel: "logo pulse",
    enLabel: "logo pulse",
    ptTitle: "A identidade ganha uma entrada com logo vivo e orbitas em camadas.",
    enTitle: "The identity gains an entry sequence with a living logo and layered orbits.",
    ptBody: "A homepage passa a sugerir animated logos, faux 3D depth e ambient glow logo no centro da cena, sem ficar pesada nem demasiado tech.",
    enBody: "The homepage starts hinting at animated logos, faux-3D depth and ambient glow right at the center of the scene without feeling heavy or overly techy.",
    ptCue: "abertura de identidade",
    enCue: "identity opening",
    ptSurface: "glass signal",
    enSurface: "glass signal",
  },
  {
    accent: "blue",
    icon: Aperture,
    ptLabel: "icon bloom",
    enLabel: "icon bloom",
    ptTitle: "Icones e estados tornam-se pequenos acontecimentos, nao apenas utilidade.",
    enTitle: "Icons and states become small events, not just utility.",
    ptBody: "A secao trabalha animated icons, microinteracoes, loading cues e um desenho circular que abre e fecha como sistema editorial vivo.",
    enBody: "The section leans on animated icons, microinteractions, loading cues and a circular drawing that opens and closes like a living editorial system.",
    ptCue: "microinteracoes premium",
    enCue: "premium microinteractions",
    ptSurface: "neumorphic cue",
    enSurface: "neumorphic cue",
  },
  {
    accent: "coral",
    icon: Layers3,
    ptLabel: "scene morph",
    enLabel: "scene morph",
    ptTitle: "A mudanca entre capitulos parece morphing de cena em vez de corte seco.",
    enTitle: "Chapter changes feel like scene morphing instead of a hard cut.",
    ptBody: "Aqui entram page transition effects, liquid motion e superficies clay/glass para a narrativa parecer desenhada, polida e memoravel.",
    enBody: "This is where page transition effects, liquid motion and clay/glass surfaces come in so the narrative feels drawn, polished and memorable.",
    ptCue: "transicao encenada",
    enCue: "staged transition",
    ptSurface: "clay transition",
    enSurface: "clay transition",
  },
];

export function BrandMotionShowcase({ t }: { t: Translator }) {
  const reduceMotion = useReducedMotion();
  const [activeMode, setActiveMode] = useState(0);

  useEffect(() => {
    if (reduceMotion) return;
    const interval = window.setInterval(() => {
      setActiveMode((current) => (current + 1) % modes.length);
    }, 4200);

    return () => window.clearInterval(interval);
  }, [reduceMotion]);

  const active = modes[activeMode];
  const ActiveIcon = active.icon;

  return (
    <section className="section-shell py-10 md:py-16">
      <div className="brand-motion-showcase">
        <MorphBlob className="brand-motion-blob brand-motion-blob-a" />
        <MorphBlob className="brand-motion-blob brand-motion-blob-b" />
        <DoodleCluster className="brand-motion-doodle brand-motion-doodle-a" accent="amber" />
        <DoodleCluster className="brand-motion-doodle brand-motion-doodle-b" accent="blue" />
        <RibbonTrace className="brand-motion-ribbon" accent="coral" />
        <DoodleArrow className="brand-motion-arrow" accent="amber" />
        <DoodleSpark className="brand-motion-spark" accent="coral" />
        <DoodleStamp className="brand-motion-stamp" accent="blue" text={t("brand motion", "brand motion")} />

        <div className="brand-motion-grid">
          <div className="brand-motion-copy">
            <FadeIn>
              <div className="eyebrow">
                <Sparkles size={14} />
                {t("Identity lab", "Identity lab")}
              </div>
            </FadeIn>
            <FadeIn delay={0.08}>
              <h2 className="brand-motion-heading">
                <span>{t("Mais logo vivo,", "More living logo,")}</span>
                <span className="text-gradient-premium-flow">{t("mais icones animados,", "more animated icons,")}</span>
                <span>{t("mais transicao com assinatura.", "more signature transitions.")}</span>
              </h2>
            </FadeIn>
            <FadeIn delay={0.14}>
              <p className="brand-motion-body">
                {t(
                  "Esta ronda fecha mais categorias do artigo da SVGator num unico bloco: animated logo, animated icons, glassmorphism, claymorphism, loading skeletons, morphing e page transition effects, mas com direcao editorial e nao infantil.",
                  "This round closes more SVGator categories in a single block: animated logos, animated icons, glassmorphism, claymorphism, loading skeletons, morphing and page transition effects, while keeping the direction editorial rather than childish.",
                )}
              </p>
            </FadeIn>

            <SectionReveal className="brand-motion-tag-row" stagger={0.06}>
              {[
                t("animated logos", "animated logos"),
                t("animated icons", "animated icons"),
                t("glass + clay surfaces", "glass + clay surfaces"),
                t("morphing transitions", "morphing transitions"),
              ].map((label) => (
                <RevealItem key={label}>
                  <span className="brand-motion-tag">{label}</span>
                </RevealItem>
              ))}
            </SectionReveal>
          </div>

          <div className="brand-motion-stage">
            <Reveal3D className={`brand-motion-preview brand-motion-preview-${active.accent}`}>
              <div className="brand-motion-preview-noise" />
              <DoodleBadge className="brand-motion-preview-badge" text={t(active.ptLabel, active.enLabel)} />
              <StickerNote className="brand-motion-preview-note" text={t(active.ptCue, active.enCue)} />

              <div className="brand-motion-centerpiece">
                <motion.div
                  className="brand-motion-ring brand-motion-ring-a"
                  animate={reduceMotion ? undefined : { rotate: 360 }}
                  transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
                >
                  <svg viewBox="0 0 220 220" aria-hidden="true">
                    <circle cx="110" cy="110" r="84" />
                    <circle cx="110" cy="110" r="60" className="brand-motion-ring-secondary" />
                  </svg>
                </motion.div>
                <motion.div
                  className="brand-motion-ring brand-motion-ring-b"
                  animate={reduceMotion ? undefined : { rotate: -360 }}
                  transition={{ duration: 24, repeat: Infinity, ease: "linear" }}
                >
                  <svg viewBox="0 0 220 220" aria-hidden="true">
                    <path d="M38 116C50 72 92 42 134 42C170 42 200 60 182 88C166 111 122 90 103 117C84 144 112 178 154 170" />
                  </svg>
                </motion.div>
                <motion.div
                  className={`brand-motion-mark brand-motion-mark-${active.accent}`}
                  animate={
                    reduceMotion
                      ? undefined
                      : {
                          rotate: active.accent === "amber" ? [0, 4, 0] : active.accent === "blue" ? [0, -6, 0] : [0, 3, -3, 0],
                          scale: [1, 1.04, 0.98, 1],
                          borderRadius: [
                            "34% 66% 58% 42% / 42% 42% 58% 58%",
                            "50% 50% 38% 62% / 56% 40% 60% 44%",
                            "34% 66% 58% 42% / 42% 42% 58% 58%",
                          ],
                        }
                  }
                  transition={{ duration: 7.5, repeat: Infinity, ease: "easeInOut" }}
                >
                  <motion.div
                    className="brand-motion-mark-core"
                    animate={reduceMotion ? undefined : { rotate: [0, 8, -8, 0] }}
                    transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                  >
                    <span />
                    <span />
                    <span />
                  </motion.div>
                </motion.div>
                <motion.div
                  className="brand-motion-orbit-chip brand-motion-orbit-chip-a"
                  animate={reduceMotion ? undefined : { y: [0, -10, 0], x: [0, 6, 0] }}
                  transition={{ duration: 4.8, repeat: Infinity, ease: "easeInOut" }}
                >
                  <BadgeCheck size={15} />
                  <span>{t("verified signal", "verified signal")}</span>
                </motion.div>
                <motion.div
                  className="brand-motion-orbit-chip brand-motion-orbit-chip-b"
                  animate={reduceMotion ? undefined : { y: [0, 10, 0], x: [0, -8, 0] }}
                  transition={{ duration: 5.4, repeat: Infinity, ease: "easeInOut" }}
                >
                  <ActiveIcon size={15} />
                  <span>{t(active.ptSurface, active.enSurface)}</span>
                </motion.div>
              </div>

              <div className="brand-motion-preview-copy">
                <span>{t(active.ptLabel, active.enLabel)}</span>
                <h3>{t(active.ptTitle, active.enTitle)}</h3>
                <p>{t(active.ptBody, active.enBody)}</p>
              </div>

              <div className="brand-motion-surface-strip" aria-hidden="true">
                {[
                  { key: "glass", label: t("glass", "glass") },
                  { key: "neo", label: t("neo", "neo") },
                  { key: "clay", label: t("clay", "clay") },
                ].map((surface, index) => (
                  <motion.div
                    key={surface.key}
                    className={`brand-motion-surface-tile brand-motion-surface-tile-${surface.key}`}
                    animate={reduceMotion ? undefined : { y: [0, index === 1 ? -6 : -4, 0] }}
                    transition={{ duration: 3.8 + index * 0.4, repeat: Infinity, ease: "easeInOut" }}
                  >
                    <span className="brand-motion-surface-icon">
                      <span />
                      <span />
                      <span />
                    </span>
                    <strong>{surface.label}</strong>
                  </motion.div>
                ))}
              </div>

              <div className="brand-motion-loading-panel" aria-hidden="true">
                <div className="brand-motion-loading-head">
                  <span>{t("transition status", "transition status")}</span>
                  <span>{t("skeleton alive", "skeleton alive")}</span>
                </div>
                <div className="brand-motion-loading-lines">
                  {[0, 1, 2].map((line) => (
                    <motion.span
                      key={line}
                      className={`brand-motion-loading-line brand-motion-loading-line-${line + 1}`}
                      animate={reduceMotion ? undefined : { scaleX: [0.28, 1, 0.46] }}
                      transition={{ duration: 2.2 + line * 0.22, repeat: Infinity, ease: "easeInOut", delay: line * 0.14 }}
                    />
                  ))}
                </div>
              </div>
            </Reveal3D>

            <SectionReveal className="brand-motion-selector" stagger={0.08}>
              {modes.map((mode, index) => {
                const Icon = mode.icon;
                const isActive = index === activeMode;
                return (
                  <RevealItem key={mode.enTitle}>
                    <motion.button
                      type="button"
                      className={`brand-motion-card brand-motion-card-${mode.accent} ${isActive ? "brand-motion-card-active" : ""}`}
                      onMouseEnter={() => setActiveMode(index)}
                      onFocus={() => setActiveMode(index)}
                      whileHover={reduceMotion ? undefined : { y: -6, scale: 1.01 }}
                      transition={{ type: "spring", stiffness: 260, damping: 18 }}
                    >
                      <div className="brand-motion-card-topline">
                        <span className="brand-motion-card-icon"><Icon size={16} /></span>
                        <span>{t(mode.ptLabel, mode.enLabel)}</span>
                      </div>
                      <strong>{t(mode.ptTitle, mode.enTitle)}</strong>
                      <p>{t(mode.ptBody, mode.enBody)}</p>
                    </motion.button>
                  </RevealItem>
                );
              })}
            </SectionReveal>
          </div>
        </div>
      </div>
    </section>
  );
}
