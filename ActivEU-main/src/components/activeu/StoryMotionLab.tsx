import { useRef } from "react";
import { ArrowUpRight, Brush, Sparkles, Waves, type LucideIcon } from "lucide-react";
import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { DoodleCluster, DoodleSpark, DoodleStamp, MorphBlob, RibbonTrace } from "@/components/activeu/DoodleSystem";
import { FadeIn, Reveal3D, RevealItem, SectionReveal } from "@/components/activeu/motion-primitives";

type Translator = (pt: string, en: string) => string;

type StoryMotionLabProps = {
  t: Translator;
};

type MotionStep = {
  icon: LucideIcon;
  accent: "amber" | "blue" | "coral";
  image: string;
  ptKicker: string;
  enKicker: string;
  ptTitle: string;
  enTitle: string;
  ptBody: string;
  enBody: string;
};

const motionSteps: MotionStep[] = [
  {
    icon: Brush,
    accent: "amber",
    image: "/Imagens/solidarityactionday.jpg",
    ptKicker: "traco vivo",
    enKicker: "living stroke",
    ptTitle: "O gesto desenhado entra primeiro e abre o palco.",
    enTitle: "The drawn gesture enters first and opens the stage.",
    ptBody: "Linhas auto-desenhadas, notas e setas criam a sensacao de algo a acontecer em tempo real em vez de uma homepage estatica.",
    enBody: "Self-drawing lines, notes and arrows make the page feel like something is happening in real time instead of a static homepage.",
  },
  {
    icon: Waves,
    accent: "blue",
    image: "/Imagens/plataformadigital.jpg",
    ptKicker: "morph + fluxo",
    enKicker: "morph + flow",
    ptTitle: "O scroll liga conteudo, tecnologia e emocao.",
    enTitle: "Scroll ties content, technology and emotion together.",
    ptBody: "Blobs, gradientes e ribbons ajudam a mudar de cena sem cortes bruscos, aproximando o site de uma narrativa continua.",
    enBody: "Blobs, gradients and ribbons shift scenes without hard cuts, pulling the site closer to continuous storytelling.",
  },
  {
    icon: Sparkles,
    accent: "coral",
    image: "/Imagens/encontrosintergeracionais.jpg",
    ptKicker: "surpresa controlada",
    enKicker: "controlled surprise",
    ptTitle: "Cada pausa visual deixa uma memoria curta, mas forte.",
    enTitle: "Every visual pause leaves a short but strong memory.",
    ptBody: "Cards inclinados, selos, doodles e tipografia expressiva dao variedade sem fragmentar a mensagem principal.",
    enBody: "Tilted cards, stamps, doodles and expressive type add variety without fragmenting the core message.",
  },
];

export function StoryMotionLab({ t }: StoryMotionLabProps) {
  const ref = useRef<HTMLElement | null>(null);
  const reduceMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start 85%", "end 20%"] });
  const routeGlowY = useTransform(scrollYProgress, [0, 1], [reduceMotion ? 0 : 40, reduceMotion ? 0 : -36]);
  const routeGlowScale = useTransform(scrollYProgress, [0, 1], [0.92, 1.06]);
  const stageRotate = useTransform(scrollYProgress, [0, 1], [0.8, -0.8]);
  const routeProgress = useTransform(scrollYProgress, [0, 0.2, 1], [0, 0.3, 1]);
  const cardOneY = useTransform(scrollYProgress, [0, 1], [reduceMotion ? 0 : 0, reduceMotion ? 0 : -18]);
  const cardTwoY = useTransform(scrollYProgress, [0, 1], [reduceMotion ? 0 : 20, reduceMotion ? 0 : -26]);
  const cardThreeY = useTransform(scrollYProgress, [0, 1], [reduceMotion ? 0 : 40, reduceMotion ? 0 : -34]);
  const cardOneRotate = useTransform(scrollYProgress, [0, 1], [-1.2, 1.2]);
  const cardTwoRotate = useTransform(scrollYProgress, [0, 1], [1.6, -1.4]);
  const cardThreeRotate = useTransform(scrollYProgress, [0, 1], [-1.8, 1.1]);
  const cardTransforms = [
    { y: cardOneY, rotate: cardOneRotate },
    { y: cardTwoY, rotate: cardTwoRotate },
    { y: cardThreeY, rotate: cardThreeRotate },
  ];

  return (
    <section ref={ref} className="story-motion-lab section-shell relative py-24">
      <div className="story-motion-lab-noise" aria-hidden="true" />
      <MorphBlob className="story-motion-lab-blob story-motion-lab-blob-a" />
      <MorphBlob className="story-motion-lab-blob story-motion-lab-blob-b" />
      <DoodleCluster className="story-motion-lab-doodle story-motion-lab-doodle-a" accent="amber" />
      <DoodleCluster className="story-motion-lab-doodle story-motion-lab-doodle-b" accent="blue" />
      <RibbonTrace className="story-motion-lab-ribbon" accent="coral" />
      <DoodleSpark className="story-motion-lab-spark" accent="amber" />

      <div className="story-motion-lab-grid">
        <div className="story-motion-lab-copy">
          <FadeIn>
            <div className="eyebrow">
              <Sparkles size={14} />
              {t("Laboratorio de motion", "Motion lab")}
            </div>
          </FadeIn>
          <FadeIn delay={0.08}>
            <h2 className="story-motion-lab-heading">
              <span>{t("Mais scrollytelling,", "More scrollytelling,")}</span>
              <span className="text-gradient-premium-flow">{t("mais traco desenhado,", "more drawn line,")}</span>
              <span>{t("mais presenca em cada seccao.", "more presence in every section.")}</span>
            </h2>
          </FadeIn>
          <FadeIn delay={0.14}>
            <p className="story-motion-lab-body">
              {t(
                "Esta nova zona aproxima o site dos exemplos mais fortes do artigo: linha auto-desenhada, transicoes fluidas, ambient motion colorido e cards que parecem cenas em vez de blocos utilitarios.",
                "This new zone pushes the site closer to the strongest references from the article: self-drawing lines, fluid transitions, colorful ambient motion and cards that feel like scenes rather than utility blocks.",
              )}
            </p>
          </FadeIn>
          <SectionReveal className="story-motion-lab-keywords" stagger={0.06}>
            {[
              t("self-drawing doodles", "self-drawing doodles"),
              t("morphing atmosferico", "atmospheric morphing"),
              t("tipografia com energia", "energetic typography"),
              t("hover com profundidade", "depth-driven hover"),
            ].map((keyword) => (
              <RevealItem key={keyword}>
                <span className="story-motion-lab-keyword">{keyword}</span>
              </RevealItem>
            ))}
          </SectionReveal>
        </div>

        <motion.div className="story-motion-lab-stage" style={{ rotate: stageRotate }}>
          <motion.div
            className="story-motion-lab-route-glow"
            style={{ y: routeGlowY, scale: routeGlowScale }}
            aria-hidden="true"
          />
          <div className="story-motion-lab-route-shell">
            <svg viewBox="0 0 760 280" className="story-motion-lab-route" aria-hidden="true">
              <motion.path
                d="M36 224C96 132 188 83 291 95C375 106 408 190 497 190C576 190 622 118 724 58"
                fill="none"
                stroke="rgba(11, 31, 92, 0.12)"
                strokeWidth="20"
                strokeLinecap="round"
              />
              <motion.path
                d="M36 224C96 132 188 83 291 95C375 106 408 190 497 190C576 190 622 118 724 58"
                fill="none"
                stroke="url(#story-motion-route)"
                strokeWidth="8"
                strokeLinecap="round"
                style={{ pathLength: routeProgress }}
              />
              <defs>
                <linearGradient id="story-motion-route" x1="0" y1="0" x2="1" y2="1">
                  <stop offset="0%" stopColor="#ffb007" />
                  <stop offset="55%" stopColor="#3b82f6" />
                  <stop offset="100%" stopColor="#f97316" />
                </linearGradient>
              </defs>
              {[
                { cx: 56, cy: 208, tone: "#ffb007" },
                { cx: 310, cy: 100, tone: "#3b82f6" },
                { cx: 506, cy: 190, tone: "#f97316" },
                { cx: 714, cy: 64, tone: "#0b1f5c" },
              ].map((node, index) => (
                <motion.g
                  key={`${node.cx}-${node.cy}`}
                  animate={reduceMotion ? undefined : { scale: [1, 1.08, 1] }}
                  transition={{ duration: 3.2 + index * 0.35, repeat: Infinity, ease: "easeInOut" }}
                  style={{ transformOrigin: `${node.cx}px ${node.cy}px` }}
                >
                  <circle cx={node.cx} cy={node.cy} r="16" fill="white" stroke={node.tone} strokeWidth="4" />
                  <circle cx={node.cx} cy={node.cy} r="5.5" fill={node.tone} />
                </motion.g>
              ))}
            </svg>
            <DoodleStamp className="story-motion-lab-stamp" accent="blue" text={t("animated route", "animated route")} />
          </div>

          <div className="story-motion-lab-cards">
            {motionSteps.map((step, index) => {
              const Icon = step.icon;
              return (
                <motion.div
                  key={step.enTitle}
                  className={`story-motion-lab-card-wrap story-motion-lab-card-wrap-${step.accent}`}
                  style={cardTransforms[index]}
                >
                  <Reveal3D delay={index * 0.08}>
                    <article className={`story-motion-lab-card story-motion-lab-card-${step.accent}`}>
                      <img src={step.image} alt={t(step.ptTitle, step.enTitle)} className="story-motion-lab-card-image" loading="lazy" />
                      <div className="story-motion-lab-card-overlay" />
                      <div className="story-motion-lab-card-top">
                        <span className="story-motion-lab-card-kicker">{t(step.ptKicker, step.enKicker)}</span>
                        <span className="story-motion-lab-card-icon"><Icon size={16} /></span>
                      </div>
                      <div className="story-motion-lab-card-copy">
                        <h3>{t(step.ptTitle, step.enTitle)}</h3>
                        <p>{t(step.ptBody, step.enBody)}</p>
                        <span className="story-motion-lab-card-link">
                          {t("seguir narrativa", "follow the narrative")}
                          <ArrowUpRight size={14} />
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
    </section>
  );
}
