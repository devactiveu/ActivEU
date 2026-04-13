import { ArrowUpRight, BadgeCheck, Layers3, MousePointer2, Orbit, Sparkles, WandSparkles, Waves } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";
import { DoodleArrow, DoodleBadge, DoodleCluster, DoodleSpark, DoodleStamp, MorphBlob, RibbonTrace, StickerNote } from "@/components/activeu/DoodleSystem";
import { FadeIn, Reveal3D, RevealItem, SectionReveal } from "@/components/activeu/motion-primitives";
import { GlassPanel } from "@/components/activeu/GlassPanel";

type Translator = (pt: string, en: string) => string;

type SignatureMotionMosaicProps = {
  t: Translator;
};

const coverageLabels = [
  { pt: "scrollytelling", en: "scrollytelling" },
  { pt: "animated icons", en: "animated icons" },
  { pt: "microinteractions", en: "microinteractions" },
  { pt: "page transitions", en: "page transitions" },
  { pt: "loading skeletons", en: "loading skeletons" },
  { pt: "faux 3D", en: "faux 3D" },
  { pt: "animated gradients", en: "animated gradients" },
  { pt: "doodle motion", en: "doodle motion" },
];

const systemCards = [
  {
    icon: WandSparkles,
    accent: "amber" as const,
    ptTitle: "Traço desenhado com mais presença.",
    enTitle: "Drawn strokes with more presence.",
    ptBody: "Notas, setas e rabiscos passam a guiar a leitura em vez de apenas decorar.",
    enBody: "Notes, arrows and scribbles start guiding the reading instead of just decorating it.",
  },
  {
    icon: MousePointer2,
    accent: "blue" as const,
    ptTitle: "Hover e resposta em cada gesto.",
    enTitle: "Hover and response in every gesture.",
    ptBody: "Os detalhes reagem com profundidade para o site parecer mais premium e menos estático.",
    enBody: "Details react with depth so the site feels more premium and less static.",
  },
  {
    icon: Waves,
    accent: "coral" as const,
    ptTitle: "Transições fluidas entre capítulos.",
    enTitle: "Fluid transitions between chapters.",
    ptBody: "Gradientes, waves e morphing ligam cenas sem sensação de bloco colado.",
    enBody: "Gradients, waves and morphing connect scenes without a pasted-block feeling.",
  },
];

export function SignatureMotionMosaic({ t }: SignatureMotionMosaicProps) {
  const reduceMotion = useReducedMotion();

  return (
    <section className="signature-motion-mosaic section-shell relative py-16 md:py-22">
      <MorphBlob className="signature-motion-blob signature-motion-blob-a" />
      <MorphBlob className="signature-motion-blob signature-motion-blob-b" />
      <DoodleCluster className="signature-motion-doodle signature-motion-doodle-a" accent="amber" />
      <DoodleCluster className="signature-motion-doodle signature-motion-doodle-b" accent="blue" />
      <RibbonTrace className="signature-motion-ribbon" accent="coral" />
      <DoodleArrow className="signature-motion-arrow" accent="blue" />
      <DoodleSpark className="signature-motion-spark" accent="amber" />

      <div className="signature-motion-shell">
        <div className="signature-motion-copy">
          <FadeIn>
            <div className="eyebrow">
              <Sparkles size={14} />
              {t("Assinatura motion", "Motion signature")}
            </div>
          </FadeIn>
          <FadeIn delay={0.08}>
            <h2 className="signature-motion-heading">
              <span>{t("Uma só secção", "One single section")}</span>
              <span className="text-gradient-premium-flow">{t("para dizer o que antes estava disperso.", "to say what used to be scattered.")}</span>
            </h2>
          </FadeIn>
          <FadeIn delay={0.14}>
            <p className="signature-motion-body">
              {t(
                "Aqui a homepage concentra as referências mais fortes do artigo da SVGator numa cena única: narrativa com scroll, doodles auto-desenhados, microinterações, gradientes vivos, loading com identidade e transições mais cinematográficas.",
                "Here the homepage concentrates the strongest SVGator references into one single scene: scroll-led narrative, self-drawing doodles, microinteractions, living gradients, branded loading and more cinematic transitions.",
              )}
            </p>
          </FadeIn>

          <SectionReveal className="signature-motion-card-grid" stagger={0.08}>
            {systemCards.map((card) => {
              const Icon = card.icon;
              return (
                <RevealItem key={card.enTitle}>
                  <GlassPanel tint={card.accent} variant="colored" className="signature-motion-card">
                    <span className="signature-motion-card-icon">
                      <Icon size={17} />
                    </span>
                    <h3>{t(card.ptTitle, card.enTitle)}</h3>
                    <p>{t(card.ptBody, card.enBody)}</p>
                  </GlassPanel>
                </RevealItem>
              );
            })}
          </SectionReveal>
        </div>

        <div className="signature-motion-stage">
          <Reveal3D className="signature-motion-hero-card">
            <StickerNote className="signature-motion-note" text={t("SVGator aligned", "SVGator aligned")} />
            <DoodleBadge className="signature-motion-badge" text={t("chapter scene", "chapter scene")} />
            <DoodleStamp className="signature-motion-stamp" accent="amber" text={t("scroll pulse", "scroll pulse")} />

            <div className="signature-motion-hero-grid">
              <div>
                <span className="signature-motion-kicker">{t("Scrollytelling principal", "Primary scrollytelling")}</span>
                <h3>{t("O scroll entra como coreografia, não como lista de secções.", "Scroll enters as choreography, not as a list of sections.")}</h3>
                <p>
                  {t(
                    "A cena combina fotografia real, faux 3D, rota animada e chips de cobertura para resumir o universo visual sem voltar a espalhá-lo por vários blocos.",
                    "The scene combines real photography, faux 3D, animated routing and coverage chips to summarize the visual universe without scattering it again.",
                  )}
                </p>
              </div>
              <div className="signature-motion-proof">
                <Orbit size={16} />
                <span>{t("tecnologia com calor humano", "technology with human warmth")}</span>
              </div>
            </div>

            <div className="signature-motion-route-wrap" aria-hidden="true">
              <svg viewBox="0 0 760 240" className="signature-motion-route">
                <path
                  d="M42 182C108 112 180 82 270 86C342 90 380 156 454 162C548 170 612 112 718 62"
                  fill="none"
                  stroke="rgba(255,255,255,0.16)"
                  strokeWidth="18"
                  strokeLinecap="round"
                />
                <motion.path
                  d="M42 182C108 112 180 82 270 86C342 90 380 156 454 162C548 170 612 112 718 62"
                  fill="none"
                  stroke="url(#signature-motion-route)"
                  strokeWidth="7"
                  strokeLinecap="round"
                  initial={reduceMotion ? false : { pathLength: 0.12 }}
                  whileInView={reduceMotion ? {} : { pathLength: 1 }}
                  viewport={{ once: true, amount: 0.45 }}
                  transition={{ duration: 1.35, ease: [0.16, 1, 0.3, 1] }}
                />
                <defs>
                  <linearGradient id="signature-motion-route" x1="0" y1="0" x2="1" y2="1">
                    <stop offset="0%" stopColor="#ffb007" />
                    <stop offset="52%" stopColor="#3b82f6" />
                    <stop offset="100%" stopColor="#f97316" />
                  </linearGradient>
                </defs>
                {[
                  { cx: 68, cy: 168, fill: "#ffb007" },
                  { cx: 284, cy: 88, fill: "#3b82f6" },
                  { cx: 458, cy: 162, fill: "#f97316" },
                  { cx: 698, cy: 72, fill: "#ffffff" },
                ].map((node, index) => (
                  <motion.g
                    key={`${node.cx}-${node.cy}`}
                    animate={reduceMotion ? undefined : { scale: [1, 1.08, 1] }}
                    transition={{ duration: 3.2 + index * 0.3, repeat: Infinity, ease: "easeInOut" }}
                    style={{ transformOrigin: `${node.cx}px ${node.cy}px` }}
                  >
                    <circle cx={node.cx} cy={node.cy} r="16" fill="rgba(255,255,255,0.9)" />
                    <circle cx={node.cx} cy={node.cy} r="6.5" fill={node.fill} />
                  </motion.g>
                ))}
              </svg>
            </div>

            <div className="signature-motion-image-band">
              <div className="signature-motion-image-card signature-motion-image-card-large">
                <img src="/Imagens/solidarityactionday.jpg" alt={t("Cena ActivEU com energia coletiva", "ActivEU scene with collective energy")} loading="lazy" />
              </div>
              <div className="signature-motion-image-stack">
                <div className="signature-motion-image-card signature-motion-image-card-small">
                  <img src="/Imagens/plataformadigital.jpg" alt={t("Camada digital da ActivEU", "ActivEU digital layer")} loading="lazy" />
                </div>
                <div className="signature-motion-faux-card">
                  <Layers3 size={18} />
                  <strong>{t("faux 3D + mixed media", "faux 3D + mixed media")}</strong>
                  <p>{t("Camadas, colagem visual e profundidade sem pesar o scroll.", "Layers, collage and depth without making the scroll heavy.")}</p>
                </div>
              </div>
            </div>

            <div className="signature-motion-coverage">
              {coverageLabels.map((label, index) => (
                <motion.span
                  key={label.en}
                  className="signature-motion-chip"
                  initial={reduceMotion ? false : { opacity: 0, y: 14 }}
                  whileInView={reduceMotion ? {} : { opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.4, delay: index * 0.03, ease: [0.16, 1, 0.3, 1] }}
                >
                  {t(label.pt, label.en)}
                </motion.span>
              ))}
            </div>
          </Reveal3D>

          <div className="signature-motion-bottom-grid">
            <Reveal3D delay={0.08} className="signature-motion-mini-card signature-motion-mini-card-blue">
              <span className="signature-motion-kicker">{t("Animated icons", "Animated icons")}</span>
              <h3>{t("Os detalhes passam a sugerir resposta imediata.", "Details now suggest immediate response.")}</h3>
              <div className="signature-motion-icon-row" aria-hidden="true">
                {[BadgeCheck, MousePointer2, Sparkles].map((Icon, index) => (
                  <motion.span
                    key={index}
                    className="signature-motion-icon-bubble"
                    animate={reduceMotion ? undefined : { y: [0, -6, 0], rotate: [0, index % 2 === 0 ? 8 : -8, 0] }}
                    transition={{ duration: 3 + index * 0.35, repeat: Infinity, ease: "easeInOut" }}
                  >
                    <Icon size={16} />
                  </motion.span>
                ))}
              </div>
              <p>{t("Menus, CTAs e estados ficam mais vivos sem cair em gimmicks.", "Menus, CTAs and states feel more alive without falling into gimmicks.")}</p>
            </Reveal3D>

            <Reveal3D delay={0.14} className="signature-motion-mini-card signature-motion-mini-card-coral">
              <span className="signature-motion-kicker">{t("Loading + transitions", "Loading + transitions")}</span>
              <h3>{t("Até a espera passa a ter assinatura visual.", "Even waiting now carries a visual signature.")}</h3>
              <div className="signature-motion-loading-lines" aria-hidden="true">
                <span className="signature-motion-loading-line signature-motion-loading-line-a" />
                <span className="signature-motion-loading-line signature-motion-loading-line-b" />
                <span className="signature-motion-loading-line signature-motion-loading-line-c" />
              </div>
              <a href="#join" className="signature-motion-link">
                {t("avançar para o convite final", "move into the final invitation")}
                <ArrowUpRight size={14} />
              </a>
            </Reveal3D>
          </div>
        </div>
      </div>
    </section>
  );
}
