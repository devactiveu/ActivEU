import { useRef } from "react";
import { ArrowRight, BookOpenText, Brush, Captions, Film, Sparkles, type LucideIcon } from "lucide-react";
import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { DoodleArrow, DoodleCluster, DoodleSpark, DoodleStamp, MorphBlob, RibbonTrace, StickerNote } from "@/components/activeu/DoodleSystem";
import { FadeIn, Reveal3D, RevealItem, SectionReveal } from "@/components/activeu/motion-primitives";

type Translator = (pt: string, en: string) => string;

type ChapterCard = {
  icon: LucideIcon;
  accent: "amber" | "blue" | "coral";
  image: string;
  ptLabel: string;
  enLabel: string;
  ptTitle: string;
  enTitle: string;
  ptBody: string;
  enBody: string;
  ptCue: string;
  enCue: string;
};

const chapterCards: ChapterCard[] = [
  {
    icon: Brush,
    accent: "amber",
    image: "/Imagens/solidarityactionday.jpg",
    ptLabel: "doodle chapter",
    enLabel: "doodle chapter",
    ptTitle: "O percurso abre com tracos vivos, setas e notas que parecem desenhadas no momento.",
    enTitle: "The journey opens with living strokes, arrows and notes that feel drawn in the moment.",
    ptBody: "Esta camada aproxima a homepage dos exemplos de self-drawing animation, doodle web animation e hero section motion sem perder elegancia editorial.",
    enBody: "This layer brings the homepage closer to self-drawing animation, doodle web animation and hero motion references without losing editorial elegance.",
    ptCue: "stroke-led opening",
    enCue: "stroke-led opening",
  },
  {
    icon: Captions,
    accent: "blue",
    image: "/Imagens/plataformadigital.jpg",
    ptLabel: "type in motion",
    enLabel: "type in motion",
    ptTitle: "A tipografia deixa de ser estatica e passa a parecer uma legenda em movimento.",
    enTitle: "Typography stops being static and starts to feel like moving caption work.",
    ptBody: "A combinacao de copy forte, overlays e ritmo visual responde aos exemplos de expressive typography animations e chapter-like page transitions.",
    enBody: "The combination of strong copy, overlays and visual rhythm responds to expressive typography animations and chapter-like page transitions.",
    ptCue: "kinetic copy scene",
    enCue: "kinetic copy scene",
  },
  {
    icon: Film,
    accent: "coral",
    image: "/Imagens/encontrosintergeracionais.jpg",
    ptLabel: "flipbook rhythm",
    enLabel: "flipbook rhythm",
    ptTitle: "O final entra num modo storyboard com frames curtos, hover de profundidade e energia cinematografica.",
    enTitle: "The ending shifts into a storyboard mode with short frames, depth hover and cinematic energy.",
    ptBody: "Aqui entram referencias a stop-motion, flipbook animation, hover web effects e mixed-media motion num bloco mais colecionavel e memoravel.",
    enBody: "This brings in stop-motion, flipbook animation, hover effects and mixed-media motion in a more collectible and memorable block.",
    ptCue: "editorial finale",
    enCue: "editorial finale",
  },
];

const filmFrames = [
  { pt: "cena 01", en: "scene 01" },
  { pt: "cena 02", en: "scene 02" },
  { pt: "cena 03", en: "scene 03" },
  { pt: "cena 04", en: "scene 04" },
];

export function IllustratedChapterDeck({ t }: { t: Translator }) {
  const ref = useRef<HTMLElement | null>(null);
  const reduceMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start 82%", "end 18%"] });

  const glowY = useTransform(scrollYProgress, [0, 1], [reduceMotion ? 0 : 48, reduceMotion ? 0 : -34]);
  const glowScale = useTransform(scrollYProgress, [0, 1], [0.9, 1.08]);
  const routeProgress = useTransform(scrollYProgress, [0, 0.18, 1], [0, 0.28, 1]);
  const stageRotate = useTransform(scrollYProgress, [0, 1], [0.6, -0.8]);

  const cardOffsets = [
    { y: useTransform(scrollYProgress, [0, 1], [reduceMotion ? 0 : 0, reduceMotion ? 0 : -20]), rotate: useTransform(scrollYProgress, [0, 1], [-1, 1.1]) },
    { y: useTransform(scrollYProgress, [0, 1], [reduceMotion ? 0 : 18, reduceMotion ? 0 : -24]), rotate: useTransform(scrollYProgress, [0, 1], [1.4, -1.1]) },
    { y: useTransform(scrollYProgress, [0, 1], [reduceMotion ? 0 : 32, reduceMotion ? 0 : -28]), rotate: useTransform(scrollYProgress, [0, 1], [-1.6, 0.9]) },
  ];

  return (
    <section ref={ref} className="section-shell py-10 md:py-16">
      <div className="illustrated-chapter-deck">
        <MorphBlob className="illustrated-chapter-blob illustrated-chapter-blob-a" />
        <MorphBlob className="illustrated-chapter-blob illustrated-chapter-blob-b" />
        <DoodleCluster className="illustrated-chapter-doodle illustrated-chapter-doodle-a" accent="amber" />
        <DoodleCluster className="illustrated-chapter-doodle illustrated-chapter-doodle-b" accent="blue" />
        <RibbonTrace className="illustrated-chapter-ribbon" accent="coral" />
        <DoodleArrow className="illustrated-chapter-arrow" accent="amber" />
        <DoodleSpark className="illustrated-chapter-spark" accent="coral" />

        <div className="illustrated-chapter-grid">
          <div className="illustrated-chapter-copy">
            <FadeIn>
              <div className="eyebrow">
                <BookOpenText size={14} />
                {t("Illustrated chapter", "Illustrated chapter")}
              </div>
            </FadeIn>
            <FadeIn delay={0.08}>
              <h2 className="illustrated-chapter-heading">
                <span>{t("Mais storyboard,", "More storyboard,")}</span>
                <span className="text-gradient-premium-flow">{t("mais traco hand-drawn,", "more hand-drawn trace,")}</span>
                <span>{t("mais sensacao de filme editorial.", "more editorial-film feeling.")}</span>
              </h2>
            </FadeIn>
            <FadeIn delay={0.14}>
              <p className="illustrated-chapter-body">
                {t(
                  "Esta nova faixa empurra o site para mais categorias do artigo da SVGator de forma coerente: doodles desenhados em tempo real, tipografia expressiva, linguagem de flipbook, hover com profundidade e transicoes de capitulo que parecem encenadas.",
                  "This new strip pushes the site into more SVGator article categories in a coherent way: real-time drawn doodles, expressive typography, flipbook language, depth-based hover and chapter transitions that feel staged.",
                )}
              </p>
            </FadeIn>
            <SectionReveal className="illustrated-chapter-tags" stagger={0.06}>
              {[
                t("doodle web animations", "doodle web animations"),
                t("expressive typography", "expressive typography"),
                t("flipbook cues", "flipbook cues"),
                t("chapter transitions", "chapter transitions"),
              ].map((label) => (
                <RevealItem key={label}>
                  <span className="illustrated-chapter-tag">{label}</span>
                </RevealItem>
              ))}
            </SectionReveal>
          </div>

          <motion.div className="illustrated-chapter-stage" style={{ rotate: stageRotate }}>
            <motion.div className="illustrated-chapter-route-glow" style={{ y: glowY, scale: glowScale }} aria-hidden="true" />
            <div className="illustrated-chapter-route-shell">
              <svg viewBox="0 0 820 284" className="illustrated-chapter-route" aria-hidden="true">
                <motion.path
                  d="M38 222C98 164 140 112 214 96C297 78 342 146 420 150C515 155 550 79 645 81C712 82 744 116 780 140"
                  fill="none"
                  stroke="rgba(11, 31, 92, 0.12)"
                  strokeWidth="22"
                  strokeLinecap="round"
                />
                <motion.path
                  d="M38 222C98 164 140 112 214 96C297 78 342 146 420 150C515 155 550 79 645 81C712 82 744 116 780 140"
                  fill="none"
                  stroke="url(#illustrated-chapter-route)"
                  strokeWidth="8"
                  strokeLinecap="round"
                  style={{ pathLength: routeProgress }}
                />
                <defs>
                  <linearGradient id="illustrated-chapter-route" x1="0" y1="1" x2="1" y2="0">
                    <stop offset="0%" stopColor="#ffb007" />
                    <stop offset="52%" stopColor="#3b82f6" />
                    <stop offset="100%" stopColor="#f97316" />
                  </linearGradient>
                </defs>
                {[
                  { cx: 58, cy: 206, tone: "#ffb007" },
                  { cx: 232, cy: 92, tone: "#3b82f6" },
                  { cx: 424, cy: 150, tone: "#f97316" },
                  { cx: 650, cy: 82, tone: "#0b1f5c" },
                  { cx: 778, cy: 140, tone: "#ffb007" },
                ].map((node, index) => (
                  <motion.g
                    key={`${node.cx}-${node.cy}`}
                    animate={reduceMotion ? undefined : { scale: [1, 1.08, 1] }}
                    transition={{ duration: 3 + index * 0.3, repeat: Infinity, ease: "easeInOut" }}
                    style={{ transformOrigin: `${node.cx}px ${node.cy}px` }}
                  >
                    <circle cx={node.cx} cy={node.cy} r="15" fill="white" stroke={node.tone} strokeWidth="4" />
                    <circle cx={node.cx} cy={node.cy} r="5" fill={node.tone} />
                  </motion.g>
                ))}
              </svg>
              <DoodleStamp className="illustrated-chapter-stamp" accent="blue" text={t("drawn route", "drawn route")} />
              <StickerNote className="illustrated-chapter-note" text={t("scroll como storyboard", "scroll as storyboard")} />
            </div>

            <div className="illustrated-chapter-frames" aria-hidden="true">
              {filmFrames.map((frame, index) => (
                <motion.div
                  key={frame.en}
                  className="illustrated-chapter-frame"
                  animate={reduceMotion ? undefined : { y: [0, index % 2 === 0 ? -6 : 6, 0], opacity: [0.55, 1, 0.7] }}
                  transition={{ duration: 2.8 + index * 0.24, repeat: Infinity, ease: "easeInOut" }}
                >
                  <span>{t(frame.pt, frame.en)}</span>
                </motion.div>
              ))}
            </div>

            <div className="illustrated-chapter-cards">
              {chapterCards.map((card, index) => {
                const Icon = card.icon;
                return (
                  <motion.div
                    key={card.enTitle}
                    className={`illustrated-chapter-card-wrap illustrated-chapter-card-wrap-${card.accent}`}
                    style={cardOffsets[index]}
                  >
                    <Reveal3D delay={index * 0.08}>
                      <article className={`illustrated-chapter-card illustrated-chapter-card-${card.accent}`}>
                        <img src={card.image} alt={t(card.ptTitle, card.enTitle)} className="illustrated-chapter-card-image" loading="lazy" />
                        <div className="illustrated-chapter-card-overlay" />
                        <div className="illustrated-chapter-card-top">
                          <span className="illustrated-chapter-card-kicker">{t(card.ptLabel, card.enLabel)}</span>
                          <span className="illustrated-chapter-card-icon"><Icon size={16} /></span>
                        </div>
                        <div className="illustrated-chapter-card-copy">
                          <span className="illustrated-chapter-card-cue">{t(card.ptCue, card.enCue)}</span>
                          <h3>{t(card.ptTitle, card.enTitle)}</h3>
                          <p>{t(card.ptBody, card.enBody)}</p>
                          <span className="illustrated-chapter-card-link">
                            {t("continuar o capitulo", "continue the chapter")}
                            <ArrowRight size={14} />
                          </span>
                        </div>
                      </article>
                    </Reveal3D>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
