import { ArrowRight, BadgeCheck, Box, Glasses, LoaderCircle, MousePointer2, Orbit, Sparkles, Waves, Workflow, Zap } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";
import { DoodleArrow, DoodleBadge, DoodleCluster, DoodleSpark, DoodleStamp, MorphBlob, RibbonTrace, StickerNote } from "@/components/activeu/DoodleSystem";
import { FadeIn, Reveal3D, RevealItem, SectionReveal } from "@/components/activeu/motion-primitives";

type Translator = (pt: string, en: string) => string;

type SVGatorMotionSpectrumProps = {
  t: Translator;
};

const motionFamilies = [
  { pt: "scrollytelling", en: "scrollytelling" },
  { pt: "ambient background motion", en: "ambient background motion" },
  { pt: "line animation", en: "line animation" },
  { pt: "self-drawing effects", en: "self-drawing effects" },
  { pt: "morphing + liquid motion", en: "morphing + liquid motion" },
  { pt: "animated logos + icons", en: "animated logos + icons" },
  { pt: "microinteractions", en: "microinteractions" },
  { pt: "faux 3D + isometric", en: "faux 3D + isometric" },
  { pt: "animated gradients", en: "animated gradients" },
  { pt: "doodle animation", en: "doodle animation" },
  { pt: "page transitions", en: "page transitions" },
  { pt: "loading skeletons", en: "loading skeletons" },
  { pt: "hover effects", en: "hover effects" },
  { pt: "glass + clay surfaces", en: "glass + clay surfaces" },
  { pt: "flipbooks + stop-motion", en: "flipbooks + stop-motion" },
];

const sceneCards = [
  {
    icon: Workflow,
    ptKicker: "narrativa com scroll",
    enKicker: "scroll-led narrative",
    ptTitle: "A homepage deixa de parecer uma lista de blocos.",
    enTitle: "The homepage stops feeling like a stack of blocks.",
    ptBody: "Cada momento prepara o seguinte com continuidade visual, transicoes suaves e um fio de leitura claro.",
    enBody: "Each moment prepares the next with visual continuity, soft transitions and a clear reading thread.",
    accent: "amber",
  },
  {
    icon: MousePointer2,
    ptKicker: "hover + resposta",
    enKicker: "hover + response",
    ptTitle: "Os detalhes reagem como objectos vivos.",
    enTitle: "Details react like living objects.",
    ptBody: "Hover, brilho, tilt e mudancas de estado tornam a experiencia mais premium sem ficar gimmicky.",
    enBody: "Hover, glow, tilt and state changes make the experience more premium without turning gimmicky.",
    accent: "blue",
  },
  {
    icon: LoaderCircle,
    ptKicker: "loading com assinatura",
    enKicker: "signature loading",
    ptTitle: "Mesmo os momentos utilitarios passam a ter direcao artistica.",
    enTitle: "Even utilitarian moments gain artistic direction.",
    ptBody: "Skeletons, pulses, progress e page transitions mantem identidade em vez de parecerem placeholders genericos.",
    enBody: "Skeletons, pulses, progress and page transitions keep identity instead of feeling generic placeholders.",
    accent: "coral",
  },
];

export function SVGatorMotionSpectrum({ t }: SVGatorMotionSpectrumProps) {
  const reduceMotion = useReducedMotion();

  return (
    <section id="stories" className="svgator-spectrum section-shell relative py-20 md:py-24">
      <MorphBlob className="svgator-spectrum-blob svgator-spectrum-blob-a" />
      <MorphBlob className="svgator-spectrum-blob svgator-spectrum-blob-b" />
      <DoodleCluster className="svgator-spectrum-doodle svgator-spectrum-doodle-a" accent="amber" />
      <DoodleCluster className="svgator-spectrum-doodle svgator-spectrum-doodle-b" accent="blue" />
      <RibbonTrace className="svgator-spectrum-ribbon" accent="coral" />
      <DoodleArrow className="svgator-spectrum-arrow" accent="blue" />
      <DoodleSpark className="svgator-spectrum-spark" accent="amber" />

      <div className="svgator-spectrum-shell">
        <div className="svgator-spectrum-copy">
          <FadeIn>
            <div className="eyebrow">
              <Sparkles size={14} />
              {t("Capitulo SVGator", "SVGator chapter")}
            </div>
          </FadeIn>
          <FadeIn delay={0.08}>
            <h2 className="svgator-spectrum-heading">
              <span>{t("Tudo o que a referencia pede,", "Everything the reference asks for,")}</span>
              <span className="text-gradient-premium-flow">{t("mas em linguagem ActivEU.", "but in ActivEU language.")}</span>
            </h2>
          </FadeIn>
          <FadeIn delay={0.14}>
            <p className="svgator-spectrum-body">
              {t(
                "Em vez de espalhar dezenas de efeitos por varias secções, este capitulo junta as familias de animação mais fortes do artigo da SVGator numa composicao unica, mais polida, mais editorial e mais memoravel.",
                "Instead of scattering dozens of effects across many sections, this chapter gathers the strongest animation families from the SVGator article into one composition that is more polished, more editorial and more memorable.",
              )}
            </p>
          </FadeIn>

          <SectionReveal className="svgator-spectrum-tags" stagger={0.03}>
            {motionFamilies.map((item) => (
              <RevealItem key={item.en}>
                <span className="svgator-spectrum-tag">{t(item.pt, item.en)}</span>
              </RevealItem>
            ))}
          </SectionReveal>

          <SectionReveal className="svgator-spectrum-card-grid" stagger={0.08}>
            {sceneCards.map((card) => {
              const Icon = card.icon;
              return (
                <RevealItem key={card.enTitle}>
                  <article className={`svgator-spectrum-card svgator-spectrum-card-${card.accent}`}>
                    <div className="svgator-spectrum-card-top">
                      <span className="svgator-spectrum-card-icon">
                        <Icon size={17} />
                      </span>
                      <span className="svgator-spectrum-card-kicker">{t(card.ptKicker, card.enKicker)}</span>
                    </div>
                    <h3>{t(card.ptTitle, card.enTitle)}</h3>
                    <p>{t(card.ptBody, card.enBody)}</p>
                  </article>
                </RevealItem>
              );
            })}
          </SectionReveal>
        </div>

        <div className="svgator-spectrum-stage">
          <Reveal3D className="svgator-spectrum-panorama">
            <StickerNote className="svgator-spectrum-note" text={t("31 effects, one direction", "31 effects, one direction")} />
            <DoodleBadge className="svgator-spectrum-badge" text={t("motion atlas", "motion atlas")} />
            <DoodleStamp className="svgator-spectrum-stamp" accent="amber" text={t("new visual core", "new visual core")} />

            <div className="svgator-spectrum-panorama-grid">
              <div className="svgator-spectrum-panorama-copy">
                <span className="svgator-spectrum-kicker">{t("hero + transitions + atmosphere", "hero + transitions + atmosphere")}</span>
                <h3>{t("O site ganha um centro visual mais cinematografico e menos disperso.", "The site gains a more cinematic, less scattered visual core.")}</h3>
                <p>
                  {t(
                    "O palco mistura fotografia real, gradientes vivos, traços desenhados, uma rota auto-desenhada, profundidade faux 3D e um sistema de surfaces glass/clay para sugerir inovação com calor humano.",
                    "The stage mixes real photography, living gradients, drawn strokes, a self-drawing route, faux-3D depth and a glass/clay surface system to suggest innovation with human warmth.",
                  )}
                </p>
              </div>
              <div className="svgator-spectrum-panorama-proof">
                <Orbit size={16} />
                <span>{t("motion graphic sem cara de template", "motion graphics without a template feel")}</span>
              </div>
            </div>

            <div className="svgator-spectrum-visual-band">
              <div className="svgator-spectrum-photo-card">
                <img src="/Imagens/solidarityactionday.jpg" alt={t("Participantes num momento ActivEU", "Participants in an ActivEU moment")} loading="lazy" />
                <div className="svgator-spectrum-photo-overlay" />
                <div className="svgator-spectrum-photo-copy">
                  <span>{t("real-time emotion", "real-time emotion")}</span>
                  <strong>{t("A componente humana continua a ser o centro.", "The human component remains the center.")}</strong>
                </div>
              </div>

              <div className="svgator-spectrum-route-card" aria-hidden="true">
                <svg viewBox="0 0 640 200" className="svgator-spectrum-route">
                  <path
                    d="M32 152C98 120 150 56 238 58C327 60 343 152 420 154C507 156 548 102 612 46"
                    fill="none"
                    stroke="rgba(255,255,255,0.16)"
                    strokeWidth="16"
                    strokeLinecap="round"
                  />
                  <motion.path
                    d="M32 152C98 120 150 56 238 58C327 60 343 152 420 154C507 156 548 102 612 46"
                    fill="none"
                    stroke="url(#svgator-spectrum-route-gradient)"
                    strokeWidth="6.5"
                    strokeLinecap="round"
                    initial={reduceMotion ? false : { pathLength: 0.08 }}
                    whileInView={reduceMotion ? {} : { pathLength: 1 }}
                    viewport={{ once: true, amount: 0.45 }}
                    transition={{ duration: 1.45, ease: [0.16, 1, 0.3, 1] }}
                  />
                  <defs>
                    <linearGradient id="svgator-spectrum-route-gradient" x1="0" y1="0" x2="1" y2="1">
                      <stop offset="0%" stopColor="#ffb007" />
                      <stop offset="50%" stopColor="#3b82f6" />
                      <stop offset="100%" stopColor="#f97316" />
                    </linearGradient>
                  </defs>
                  {[
                    { cx: 54, cy: 144, fill: "#ffb007" },
                    { cx: 240, cy: 58, fill: "#3b82f6" },
                    { cx: 424, cy: 154, fill: "#f97316" },
                    { cx: 596, cy: 60, fill: "#ffffff" },
                  ].map((node, index) => (
                    <motion.g
                      key={`${node.cx}-${node.cy}`}
                      animate={reduceMotion ? undefined : { scale: [1, 1.1, 1] }}
                      transition={{ duration: 3.1 + index * 0.25, repeat: Infinity, ease: "easeInOut" }}
                      style={{ transformOrigin: `${node.cx}px ${node.cy}px` }}
                    >
                      <circle cx={node.cx} cy={node.cy} r="14" fill="rgba(255,255,255,0.9)" />
                      <circle cx={node.cx} cy={node.cy} r="5.5" fill={node.fill} />
                    </motion.g>
                  ))}
                </svg>
                <div className="svgator-spectrum-route-chip-row">
                  <span>{t("self-drawing", "self-drawing")}</span>
                  <span>{t("morphing", "morphing")}</span>
                  <span>{t("page flow", "page flow")}</span>
                </div>
              </div>
            </div>
          </Reveal3D>

          <div className="svgator-spectrum-mini-grid">
            <Reveal3D delay={0.08} className="svgator-spectrum-mini svgator-spectrum-mini-line">
              <span className="svgator-spectrum-kicker">{t("line + doodle animation", "line + doodle animation")}</span>
              <h3>{t("Traços que aparecem como se fossem desenhados ao vivo.", "Strokes that appear as if they were drawn live.")}</h3>
              <div className="svgator-spectrum-line-demo" aria-hidden="true">
                <motion.span
                  className="svgator-spectrum-line-demo-path"
                  initial={reduceMotion ? false : { scaleX: 0.1 }}
                  whileInView={reduceMotion ? {} : { scaleX: 1 }}
                  viewport={{ once: true, amount: 0.4 }}
                  transition={{ duration: 1.1, ease: [0.16, 1, 0.3, 1] }}
                />
                <DoodleSpark className="svgator-spectrum-line-spark" accent="amber" />
              </div>
              <p>{t("Ideal para linhas de ligação, setas narrativas e apontamentos ilustrados com mais maturidade.", "Ideal for connective lines, narrative arrows and illustrated annotations with more maturity.")}</p>
            </Reveal3D>

            <Reveal3D delay={0.12} className="svgator-spectrum-mini svgator-spectrum-mini-liquid">
              <span className="svgator-spectrum-kicker">{t("liquid + morphing", "liquid + morphing")}</span>
              <h3>{t("As transições deixam de cortar e passam a fluir.", "Transitions stop cutting and start flowing.")}</h3>
              <div className="svgator-spectrum-liquid-row" aria-hidden="true">
                <MorphBlob className="svgator-spectrum-liquid-blob svgator-spectrum-liquid-blob-a" />
                <MorphBlob className="svgator-spectrum-liquid-blob svgator-spectrum-liquid-blob-b" />
              </div>
              <p>{t("Waves, blobs e gradientes animados dão continuidade sem parecer decoração solta.", "Waves, blobs and animated gradients create continuity without feeling like loose decoration.")}</p>
            </Reveal3D>

            <Reveal3D delay={0.16} className="svgator-spectrum-mini svgator-spectrum-mini-icons">
              <span className="svgator-spectrum-kicker">{t("icons + microinteractions", "icons + microinteractions")}</span>
              <h3>{t("Cada gesto comunica resposta, precisão e energia.", "Each gesture communicates response, precision and energy.")}</h3>
              <div className="svgator-spectrum-icon-row" aria-hidden="true">
                {[BadgeCheck, Box, Zap, MousePointer2].map((Icon, index) => (
                  <motion.span
                    key={index}
                    className="svgator-spectrum-icon-bubble"
                    animate={reduceMotion ? undefined : { y: [0, -5, 0], rotate: [0, index % 2 === 0 ? 8 : -8, 0] }}
                    transition={{ duration: 2.8 + index * 0.25, repeat: Infinity, ease: "easeInOut" }}
                  >
                    <Icon size={16} />
                  </motion.span>
                ))}
              </div>
              <p>{t("Botões, menus e hotspots devem parecer cuidadosamente animados, não genéricos.", "Buttons, menus and hotspots should feel carefully animated, not generic.")}</p>
            </Reveal3D>

            <Reveal3D delay={0.2} className="svgator-spectrum-mini svgator-spectrum-mini-loading">
              <span className="svgator-spectrum-kicker">{t("loading + page transition", "loading + page transition")}</span>
              <h3>{t("Até a espera deve prolongar a narrativa visual.", "Even waiting should extend the visual narrative.")}</h3>
              <div className="svgator-spectrum-loading-stack" aria-hidden="true">
                <span className="svgator-spectrum-loading-line svgator-spectrum-loading-line-a" />
                <span className="svgator-spectrum-loading-line svgator-spectrum-loading-line-b" />
                <span className="svgator-spectrum-loading-line svgator-spectrum-loading-line-c" />
                <span className="svgator-spectrum-loading-progress" />
              </div>
              <a href="#join" className="svgator-spectrum-link">
                {t("continuar para o convite final", "continue into the final invitation")}
                <ArrowRight size={14} />
              </a>
            </Reveal3D>
          </div>

          <SectionReveal className="svgator-spectrum-finish-strip" stagger={0.05}>
            {[
              { icon: Glasses, pt: "glassmorphic depth", en: "glassmorphic depth" },
              { icon: Waves, pt: "animated gradients", en: "animated gradients" },
              { icon: Sparkles, pt: "flipbook energy", en: "flipbook energy" },
              { icon: Orbit, pt: "faux 3D atmosphere", en: "faux 3D atmosphere" },
            ].map((item) => {
              const Icon = item.icon;
              return (
                <RevealItem key={item.en}>
                  <div className="svgator-spectrum-finish-pill">
                    <Icon size={15} />
                    <span>{t(item.pt, item.en)}</span>
                  </div>
                </RevealItem>
              );
            })}
          </SectionReveal>
        </div>
      </div>
    </section>
  );
}
