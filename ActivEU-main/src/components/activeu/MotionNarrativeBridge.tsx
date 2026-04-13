import { ArrowRight, BadgeCheck, Layers3, LoaderCircle, MousePointer2, Sparkles, Waves } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";
import { DoodleArrow, DoodleBadge, DoodleCluster, DoodleSpark, DoodleStamp, MorphBlob, RibbonTrace, StickerNote } from "@/components/activeu/DoodleSystem";
import { FadeIn, Reveal3D, RevealItem, SectionReveal } from "@/components/activeu/motion-primitives";

type Translator = (pt: string, en: string) => string;

type MotionNarrativeBridgeProps = {
  t: Translator;
};

const bridgeSignals = [
  { icon: Layers3, pt: "scrollytelling", en: "scrollytelling" },
  { icon: MousePointer2, pt: "microinteracoes", en: "microinteractions" },
  { icon: Waves, pt: "liquid motion", en: "liquid motion" },
  { icon: LoaderCircle, pt: "loading states", en: "loading states" },
];

export function MotionNarrativeBridge({ t }: MotionNarrativeBridgeProps) {
  const reduceMotion = useReducedMotion();

  return (
    <section className="motion-narrative-bridge section-shell relative pb-14 pt-4 md:pb-18">
      <MorphBlob className="motion-narrative-blob motion-narrative-blob-a" />
      <MorphBlob className="motion-narrative-blob motion-narrative-blob-b" />
      <DoodleCluster className="motion-narrative-doodle motion-narrative-doodle-a" accent="amber" />
      <DoodleCluster className="motion-narrative-doodle motion-narrative-doodle-b" accent="blue" />
      <RibbonTrace className="motion-narrative-ribbon" accent="coral" />
      <DoodleArrow className="motion-narrative-arrow" accent="blue" />
      <DoodleSpark className="motion-narrative-spark" accent="amber" />

      <div className="motion-narrative-shell">
        <div className="motion-narrative-copy">
          <FadeIn>
            <div className="eyebrow">
              <Sparkles size={14} />
              {t("Atlas de entrada", "Entry atlas")}
            </div>
          </FadeIn>
          <FadeIn delay={0.08}>
            <h2 className="motion-narrative-heading">
              <span>{t("Menos blocos soltos.", "Fewer loose blocks.")}</span>
              <span>{t("Mais ritmo, gesto e", "More rhythm, gesture and")}</span>
              <span className="text-gradient-premium-flow">{t("animacao com assinatura.", "signature animation.")}</span>
            </h2>
          </FadeIn>
          <FadeIn delay={0.14}>
            <p className="motion-narrative-body">
              {t(
                "Esta passagem condensa o que a referencia da SVGator pede para a entrada do site: tipografia expressiva, transicao cinematografica, detalhes responsivos, linhas auto-desenhadas, mixed media e estados de loading com identidade.",
                "This passage condenses what the SVGator reference asks for at the site's entry point: expressive typography, cinematic transition, responsive details, self-drawing lines, mixed media and loading states with identity.",
              )}
            </p>
          </FadeIn>

          <SectionReveal className="motion-narrative-pill-row" stagger={0.04}>
            {bridgeSignals.map((item) => {
              const Icon = item.icon;
              return (
                <RevealItem key={item.en}>
                  <span className="motion-narrative-pill">
                    <Icon size={14} />
                    {t(item.pt, item.en)}
                  </span>
                </RevealItem>
              );
            })}
          </SectionReveal>

          <SectionReveal className="motion-narrative-proof-grid" stagger={0.08}>
            {[
              {
                kicker: t("transicao", "transition"),
                title: t("O scroll deixa de quebrar a narrativa.", "Scroll stops breaking the narrative."),
                body: t("O utilizador percebe logo que cada secao puxa a seguinte com continuidade visual.", "Users immediately feel that each section pulls the next one forward with visual continuity."),
              },
              {
                kicker: t("linguagem", "language"),
                title: t("O site parece mais curado e menos acumulado.", "The site feels more curated and less accumulated."),
                body: t("A direcao artistica passa a concentrar-se em poucos momentos fortes em vez de muitos exemplos dispersos.", "Art direction now concentrates on a few strong moments instead of many scattered examples."),
              },
            ].map((item) => (
              <RevealItem key={item.title}>
                <article className="motion-narrative-proof-card">
                  <span>{item.kicker}</span>
                  <h3>{item.title}</h3>
                  <p>{item.body}</p>
                </article>
              </RevealItem>
            ))}
          </SectionReveal>
        </div>

        <Reveal3D className="motion-narrative-stage">
          <StickerNote className="motion-narrative-note" text={t("entrada mais cinematografica", "more cinematic entry")} />
          <DoodleBadge className="motion-narrative-badge" text={t("motion bridge", "motion bridge")} />
          <DoodleStamp className="motion-narrative-stamp" accent="coral" text={t("fewer, better scenes", "fewer, better scenes")} />

          <div className="motion-narrative-stage-top">
            <div className="motion-narrative-stage-copy">
              <span>{t("mixed media + route drawing + hover cues", "mixed media + route drawing + hover cues")}</span>
              <h3>{t("Uma ponte que ja mostra o sistema de animacao inteiro.", "A bridge that already shows the entire animation system.")}</h3>
            </div>
            <a href="#proof" className="motion-narrative-link">
              {t("seguir para a prova", "continue into proof")}
              <ArrowRight size={14} />
            </a>
          </div>

          <div className="motion-narrative-stage-grid">
            <div className="motion-narrative-photo-card">
              <img src="/Imagens/team.jpg" alt={t("Participantes ActivEU", "ActivEU participants")} loading="lazy" />
              <div className="motion-narrative-photo-overlay" />
              <div className="motion-narrative-photo-copy">
                <span>{t("presenca humana", "human presence")}</span>
                <strong>{t("A ilustracao acompanha pessoas reais, nao as substitui.", "Illustration supports real people, it does not replace them.")}</strong>
              </div>
            </div>

            <div className="motion-narrative-utility-card">
              <div className="motion-narrative-route-wrap" aria-hidden="true">
                <svg viewBox="0 0 520 180" className="motion-narrative-route">
                  <path
                    d="M24 128C78 146 118 64 184 60C251 56 262 130 322 132C383 134 418 101 492 42"
                    fill="none"
                    stroke="rgba(255,255,255,0.14)"
                    strokeWidth="14"
                    strokeLinecap="round"
                  />
                  <motion.path
                    d="M24 128C78 146 118 64 184 60C251 56 262 130 322 132C383 134 418 101 492 42"
                    fill="none"
                    stroke="url(#motion-narrative-route-gradient)"
                    strokeWidth="5.5"
                    strokeLinecap="round"
                    initial={reduceMotion ? false : { pathLength: 0.08 }}
                    whileInView={reduceMotion ? {} : { pathLength: 1 }}
                    viewport={{ once: true, amount: 0.4 }}
                    transition={{ duration: 1.35, ease: [0.16, 1, 0.3, 1] }}
                  />
                  <defs>
                    <linearGradient id="motion-narrative-route-gradient" x1="0" y1="0" x2="1" y2="1">
                      <stop offset="0%" stopColor="#ffb007" />
                      <stop offset="48%" stopColor="#3b82f6" />
                      <stop offset="100%" stopColor="#f97316" />
                    </linearGradient>
                  </defs>
                  {[
                    { cx: 32, cy: 128, fill: "#ffb007" },
                    { cx: 184, cy: 60, fill: "#3b82f6" },
                    { cx: 322, cy: 132, fill: "#f97316" },
                    { cx: 474, cy: 52, fill: "#ffffff" },
                  ].map((node, index) => (
                    <motion.g
                      key={`${node.cx}-${node.cy}`}
                      animate={reduceMotion ? undefined : { scale: [1, 1.12, 1] }}
                      transition={{ duration: 2.8 + index * 0.3, repeat: Infinity, ease: "easeInOut" }}
                      style={{ transformOrigin: `${node.cx}px ${node.cy}px` }}
                    >
                      <circle cx={node.cx} cy={node.cy} r="12" fill="rgba(255,255,255,0.9)" />
                      <circle cx={node.cx} cy={node.cy} r="4.6" fill={node.fill} />
                    </motion.g>
                  ))}
                </svg>
              </div>

              <div className="motion-narrative-icon-row" aria-hidden="true">
                {[BadgeCheck, MousePointer2, Sparkles, LoaderCircle].map((Icon, index) => (
                  <motion.span
                    key={index}
                    className="motion-narrative-icon-bubble"
                    animate={reduceMotion ? undefined : { y: [0, -5, 0], rotate: [0, index % 2 === 0 ? 8 : -8, 0] }}
                    transition={{ duration: 2.6 + index * 0.2, repeat: Infinity, ease: "easeInOut" }}
                  >
                    <Icon size={15} />
                  </motion.span>
                ))}
              </div>

              <div className="motion-narrative-loading" aria-hidden="true">
                <span className="motion-narrative-loading-line motion-narrative-loading-line-a" />
                <span className="motion-narrative-loading-line motion-narrative-loading-line-b" />
                <span className="motion-narrative-loading-line motion-narrative-loading-line-c" />
                <span className="motion-narrative-loading-progress" />
              </div>
            </div>
          </div>
        </Reveal3D>
      </div>
    </section>
  );
}
