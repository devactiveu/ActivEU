import { ArrowUpRight, Layers3, Sparkles, SwatchBook, WandSparkles } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";
import { DoodleArrow, DoodleBadge, DoodleCluster, DoodleSpark, DoodleStamp, MorphBlob, RibbonTrace, StickerNote } from "@/components/activeu/DoodleSystem";
import { FadeIn, Reveal3D, SectionReveal, SpotlightCard } from "@/components/activeu/motion-primitives";

type Translator = (pt: string, en: string) => string;

const collageCards = [
  {
    image: "/Imagens/plataformadigital.jpg",
    accent: "blue" as const,
    kickerPt: "mixed media",
    kickerEn: "mixed media",
    titlePt: "Fotografia, glass layers e doodles a conversar na mesma cena.",
    titleEn: "Photography, glass layers and doodles speaking in the same scene.",
    bodyPt: "A ActivEU ganha densidade quando a imagem real e atravessada por setas, notas e brilho editorial em vez de ficar isolada.",
    bodyEn: "ActivEU gains density when real imagery is crossed with arrows, notes and editorial glow instead of sitting alone.",
  },
  {
    image: "/Imagens/encontrosintergeracionais.jpg",
    accent: "coral" as const,
    kickerPt: "scroll cinema",
    kickerEn: "scroll cinema",
    titlePt: "Cada bloco deve entrar como capitulo, nao como card generico.",
    titleEn: "Each block should enter like a chapter, not a generic card.",
    bodyPt: "O ritmo vem da alternancia entre texto grande, camadas translucidas e detalhes ilustrados que parecem desenhados no momento.",
    bodyEn: "Rhythm comes from alternating oversized type, translucent layers and illustrated details that feel drawn in the moment.",
  },
];

const motionModes = [
  {
    icon: Layers3,
    accent: "amber" as const,
    pt: "Page reveals com profundidade",
    en: "Page reveals with depth",
  },
  {
    icon: WandSparkles,
    accent: "blue" as const,
    pt: "Gradientes vivos e liquidos",
    en: "Living, liquid gradients",
  },
  {
    icon: Sparkles,
    accent: "coral" as const,
    pt: "Microinteracoes com gesto",
    en: "Gesture-led microinteractions",
  },
  {
    icon: SwatchBook,
    accent: "amber" as const,
    pt: "Tipografia expressiva editorial",
    en: "Expressive editorial typography",
  },
];

export function MixedMediaMotionWall({ t }: { t: Translator }) {
  const reduceMotion = useReducedMotion();

  return (
    <section className="section-shell py-10 md:py-16">
      <div className="mixed-media-motion-wall">
        <MorphBlob className="mixed-media-blob mixed-media-blob-a" />
        <MorphBlob className="mixed-media-blob mixed-media-blob-b" />
        <DoodleCluster className="mixed-media-doodle mixed-media-doodle-a" accent="amber" />
        <DoodleCluster className="mixed-media-doodle mixed-media-doodle-b" accent="blue" />
        <RibbonTrace className="mixed-media-ribbon mixed-media-ribbon-a" accent="coral" />
        <DoodleArrow className="mixed-media-arrow mixed-media-arrow-a" accent="amber" />
        <DoodleSpark className="mixed-media-spark mixed-media-spark-a" accent="blue" />
        <DoodleStamp className="mixed-media-stamp" accent="coral" text={t("motion atlas", "motion atlas")} />

        <div className="mixed-media-grid">
          <FadeIn className="mixed-media-copy">
            <div className="eyebrow">
              <WandSparkles size={14} />
              {t("Atlas de animacao", "Animation atlas")}
            </div>
            <h2 className="mixed-media-heading">
              <span>{t("Mais collage,", "More collage,")}</span>
              <span>{t("mais gesto,", "more gesture,")}</span>
              <span>{t("mais memoravel.", "more memorable.")}</span>
            </h2>
            <p className="mixed-media-body">
              {t(
                "O artigo da SVGator aponta para sites que parecem vivos em varias camadas ao mesmo tempo. Aqui a resposta e editorial: composicoes mistas, tipografia a pulsar, gradientes liquidos e doodles desenhados sem perder elegancia.",
                "The SVGator article points toward sites that feel alive across several layers at once. The response here is editorial: mixed compositions, pulsing typography, liquid gradients and hand-drawn doodles without losing elegance.",
              )}
            </p>
            <div className="mixed-media-chip-row">
              {motionModes.map((mode, index) => {
                const Icon = mode.icon;
                return (
                  <motion.div
                    key={mode.en}
                    className={`mixed-media-chip mixed-media-chip-${mode.accent}`}
                    initial={reduceMotion ? false : { opacity: 0, y: 18 }}
                    whileInView={reduceMotion ? {} : { opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.45 }}
                    transition={{ duration: 0.55, delay: index * 0.06, ease: [0.16, 1, 0.3, 1] }}
                  >
                    <span className="mixed-media-chip-icon"><Icon size={16} /></span>
                    <span>{t(mode.pt, mode.en)}</span>
                  </motion.div>
                );
              })}
            </div>
            <SpotlightCard className="mixed-media-manifesto">
              <div className="mixed-media-manifesto-topline">
                <span>{t("sequencia ideal", "ideal sequence")}</span>
                <span>{t("entrada / prova / cena / convite", "entry / proof / scene / invite")}</span>
              </div>
              <div className="mixed-media-expressive-lockup">
                <span>{t("Color", "Color")}</span>
                <span>{t("Motion", "Motion")}</span>
                <span>{t("Impact", "Impact")}</span>
              </div>
              <p>
                {t(
                  "A homepage deixa de depender apenas de secções bonitas. Passa a ter uma coreografia: abrir forte, sustentar interesse com detalhes novos e fechar com um convite mais emocional.",
                  "The homepage stops depending only on beautiful sections. It gains choreography: open strong, sustain interest with fresh details and close with a more emotional invitation.",
                )}
              </p>
            </SpotlightCard>
          </FadeIn>

          <SectionReveal className="mixed-media-stage" stagger={0.08}>
            <Reveal3D className="mixed-media-hero-card">
              <div className="mixed-media-hero-surface" />
              <div className="mixed-media-hero-noise" />
              <DoodleBadge text={t("drawn + cinematic", "drawn + cinematic")} className="mixed-media-badge mixed-media-badge-a" />
              <StickerNote className="mixed-media-note mixed-media-note-a" text={t("hand-drawn layers", "hand-drawn layers")} />
              <div className="mixed-media-hero-copy">
                <span>{t("visual direction", "visual direction")}</span>
                <h3>{t("Um mural editorial que mistura prova real com fantasia controlada.", "An editorial mural that mixes real proof with controlled fantasy.")}</h3>
              </div>
              <div className="mixed-media-card-stack">
                {collageCards.map((card, index) => (
                  <motion.article
                    key={card.titleEn}
                    className={`mixed-media-collage-card mixed-media-collage-card-${card.accent}`}
                    initial={reduceMotion ? false : { opacity: 0, y: 30, rotate: index === 0 ? -2 : 2, scale: 0.96 }}
                    whileInView={reduceMotion ? {} : { opacity: 1, y: 0, rotate: index === 0 ? -1.4 : 1.5, scale: 1 }}
                    viewport={{ once: true, amount: 0.35 }}
                    transition={{ duration: 0.7, delay: 0.15 + index * 0.08, ease: [0.16, 1, 0.3, 1] }}
                  >
                    <img src={card.image} alt={t(card.titlePt, card.titleEn)} className="mixed-media-collage-image" loading="lazy" />
                    <div className="mixed-media-collage-overlay" />
                    <div className="mixed-media-collage-frame" />
                    <div className="mixed-media-collage-copy">
                      <span>{t(card.kickerPt, card.kickerEn)}</span>
                      <h4>{t(card.titlePt, card.titleEn)}</h4>
                      <p>{t(card.bodyPt, card.bodyEn)}</p>
                    </div>
                  </motion.article>
                ))}
              </div>
            </Reveal3D>

            <div className="mixed-media-mini-grid">
              <Reveal3D delay={0.06} className="mixed-media-mini-card mixed-media-mini-card-amber">
                <p className="mixed-media-mini-kicker">{t("expressive type", "expressive type")}</p>
                <div className="mixed-media-mini-lockup">
                  <span>ACT</span>
                  <span>WITH</span>
                  <span>EUROPE</span>
                </div>
                <p className="mixed-media-mini-body">
                  {t(
                    "Tipografia grande, viva e imperfeita o suficiente para parecer criada para esta causa.",
                    "Large, lively typography that feels imperfect enough to belong to this cause.",
                  )}
                </p>
              </Reveal3D>

              <Reveal3D delay={0.12} className="mixed-media-mini-card mixed-media-mini-card-blue">
                <div className="mixed-media-mini-topline">
                  <span>{t("flipbook hover", "flipbook hover")}</span>
                  <ArrowUpRight size={16} />
                </div>
                <div className="mixed-media-flipbook">
                  {[1, 2, 3, 4].map((frame) => (
                    <motion.span
                      key={frame}
                      className="mixed-media-flipbook-frame"
                      animate={reduceMotion ? {} : { y: [0, -6, 0], opacity: [0.5, 1, 0.58] }}
                      transition={{ duration: 1.8, repeat: Infinity, delay: frame * 0.12, ease: "easeInOut" }}
                    >
                      0{frame}
                    </motion.span>
                  ))}
                </div>
                <p className="mixed-media-mini-body">
                  {t(
                    "Pequenos sinais de stop-motion e sequencing ajudam o site a parecer artesanal sem ficar retro.",
                    "Small stop-motion and sequencing cues help the site feel crafted without feeling retro.",
                  )}
                </p>
              </Reveal3D>
            </div>
          </SectionReveal>
        </div>
      </div>
    </section>
  );
}
