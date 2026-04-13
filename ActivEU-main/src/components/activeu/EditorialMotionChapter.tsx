import { motion, useReducedMotion } from "framer-motion";
import { ArrowUpRight, Building2, CheckCircle2, LoaderCircle, MousePointer2, Sparkles, WandSparkles } from "lucide-react";
import { DoodleArrow, DoodleBadge, DoodleCluster, DoodleSpark, DoodleStamp, MorphBlob, RibbonTrace, StickerNote } from "@/components/activeu/DoodleSystem";
import { FadeIn, Reveal3D, RevealItem, SectionReveal } from "@/components/activeu/motion-primitives";

type Translator = (pt: string, en: string) => string;

type EditorialMotionChapterProps = {
  t: Translator;
};

const processSteps = [
  { pt: "Candidatura", en: "Application" },
  { pt: "Matching", en: "Matching" },
  { pt: "Experiencia", en: "Experience" },
  { pt: "Certificacao", en: "Certification" },
  { pt: "Impacto", en: "Impact" },
];

const chapterCards = [
  {
    icon: WandSparkles,
    accent: "amber",
    ptKicker: "tipografia expressiva",
    enKicker: "expressive typography",
    ptTitle: "Titulos com voz propria, nao apenas texto grande.",
    enTitle: "Headlines with their own voice, not just large text.",
    ptBody: "O lado editorial entra na marca com ritmo, contraste e pequenas quebras cineticas que tornam a homepage memoravel.",
    enBody: "The editorial side enters the brand with rhythm, contrast and small kinetic breaks that make the homepage memorable.",
  },
  {
    icon: MousePointer2,
    accent: "blue",
    ptKicker: "hover + microinteracoes",
    enKicker: "hover + microinteractions",
    ptTitle: "Cada interacao responde com profundidade e gesto.",
    enTitle: "Every interaction answers with depth and gesture.",
    ptBody: "Hovers, inclinações, brilho e pequenas mudancas de estado transformam o site num objeto mais premium e vivo.",
    enBody: "Hover, tilt, glow and subtle state changes turn the site into something more premium and alive.",
  },
  {
    icon: LoaderCircle,
    accent: "coral",
    ptKicker: "loading + stop-motion",
    enKicker: "loading + stop-motion",
    ptTitle: "A espera tambem faz parte da narrativa visual.",
    enTitle: "Waiting is also part of the visual narrative.",
    ptBody: "Skeletons, flipbooks e ritmos curtos ajudam o universo ActivEU a manter identidade mesmo nos momentos utilitarios.",
    enBody: "Skeletons, flipbooks and short rhythms help the ActivEU universe keep its identity even in utilitarian moments.",
  },
] as const;

const partnerLabels = [
  { pt: "Empresas parceiras", en: "Partner companies" },
  { pt: "Municipios", en: "Municipalities" },
  { pt: "Escolas", en: "Schools" },
  { pt: "Universidades", en: "Universities" },
];

export function EditorialMotionChapter({ t }: EditorialMotionChapterProps) {
  const reduceMotion = useReducedMotion();

  return (
    <section className="editorial-motion-chapter section-shell relative py-20 md:py-24">
      <MorphBlob className="editorial-motion-blob editorial-motion-blob-a" />
      <MorphBlob className="editorial-motion-blob editorial-motion-blob-b" />
      <RibbonTrace className="editorial-motion-ribbon" accent="blue" />
      <DoodleCluster className="editorial-motion-doodle editorial-motion-doodle-a" accent="amber" />
      <DoodleCluster className="editorial-motion-doodle editorial-motion-doodle-b" accent="blue" />
      <DoodleArrow className="editorial-motion-arrow" accent="coral" />
      <DoodleSpark className="editorial-motion-spark" accent="amber" />

      <div className="editorial-motion-shell">
        <div className="editorial-motion-copy">
          <FadeIn>
            <div className="eyebrow">
              <Sparkles size={14} />
              {t("Capitulo editorial", "Editorial chapter")}
            </div>
          </FadeIn>
          <FadeIn delay={0.08}>
            <h2 className="editorial-motion-heading">
              <span>{t("Menos conteudo disperso.", "Less scattered content.")}</span>
              <span
                className="kinetic-glitch kinetic-glitch-auto text-gradient-premium-flow"
                data-text={t("Mais direcao artistica.", "More artistic direction.")}
              >
                {t("Mais direcao artistica.", "More artistic direction.")}
              </span>
              <span>{t("Mais motion com assinatura.", "More signature motion.")}</span>
            </h2>
          </FadeIn>
          <FadeIn delay={0.14}>
            <p className="editorial-motion-body">
              {t(
                "Este bloco condensa varias referencias do artigo da SVGator num unico momento: tipografia animada, hover effects, loading visual, stop-motion, mixed media, page transition e prova social com composicao mais forte.",
                "This block condenses several references from the SVGator article into one moment: animated typography, hover effects, visual loading, stop-motion, mixed media, page transition and social proof with stronger composition.",
              )}
            </p>
          </FadeIn>

          <SectionReveal className="editorial-motion-tags" stagger={0.06}>
            {processSteps.map((step) => (
              <RevealItem key={step.en}>
                <span className="editorial-motion-tag">{t(step.pt, step.en)}</span>
              </RevealItem>
            ))}
          </SectionReveal>

          <SectionReveal className="editorial-motion-card-grid" stagger={0.08}>
            {chapterCards.map((card) => {
              const Icon = card.icon;
              return (
                <RevealItem key={card.enTitle}>
                  <article className={`editorial-motion-card editorial-motion-card-${card.accent}`}>
                    <div className="editorial-motion-card-top">
                      <span className="editorial-motion-card-icon">
                        <Icon size={16} />
                      </span>
                      <span className="editorial-motion-card-kicker">{t(card.ptKicker, card.enKicker)}</span>
                    </div>
                    <h3>{t(card.ptTitle, card.enTitle)}</h3>
                    <p>{t(card.ptBody, card.enBody)}</p>
                  </article>
                </RevealItem>
              );
            })}
          </SectionReveal>
        </div>

        <Reveal3D className="editorial-motion-stage">
          <StickerNote className="editorial-motion-note" text={t("hover, flipbook, loading", "hover, flipbook, loading")} />
          <DoodleBadge text={t("motion studio", "motion studio")} className="editorial-motion-badge" />
          <DoodleStamp className="editorial-motion-stamp" accent="amber" text={t("new rhythm", "new rhythm")} />

          <div className="editorial-motion-stage-grid">
            <motion.article
              className="editorial-hover-card"
              whileHover={reduceMotion ? undefined : { y: -8, rotate: -1.8, scale: 1.01 }}
              transition={{ type: "spring", stiffness: 240, damping: 18 }}
            >
              <span className="editorial-panel-kicker">{t("hover scene", "hover scene")}</span>
              <h3>{t("Um card que responde como poster vivo.", "A card that responds like a live poster.")}</h3>
              <p>{t("Quando o utilizador passa, a superficie inclina, o brilho move-se e o detalhe parece desenhado no momento.", "When the user hovers, the surface tilts, the glow moves and the detail feels freshly drawn.")}</p>
              <span className="editorial-panel-link">
                {t("seguir o gesto", "follow the gesture")}
                <ArrowUpRight size={14} />
              </span>
            </motion.article>

            <div className="editorial-utility-column">
              <article className="editorial-skeleton-card">
                <span className="editorial-panel-kicker">{t("loading language", "loading language")}</span>
                <div className="editorial-skeleton-lines" aria-hidden="true">
                  <span className="editorial-skeleton-line editorial-skeleton-line-wide" />
                  <span className="editorial-skeleton-line" />
                  <span className="editorial-skeleton-line editorial-skeleton-line-short" />
                </div>
                <p>{t("Mesmo o estado de espera deve parecer parte da marca, nao um fallback sem identidade.", "Even the waiting state should feel like part of the brand, not a fallback without identity.")}</p>
              </article>

              <article className="editorial-flipbook-card">
                <span className="editorial-panel-kicker">{t("stop-motion pulse", "stop-motion pulse")}</span>
                <div className="editorial-flipbook" aria-hidden="true">
                  <span className="liquid-flipbook-frame editorial-flipbook-frame editorial-flipbook-frame-a" />
                  <span className="liquid-flipbook-frame editorial-flipbook-frame editorial-flipbook-frame-b" />
                  <span className="liquid-flipbook-frame editorial-flipbook-frame editorial-flipbook-frame-c" />
                  <span className="liquid-flipbook-frame editorial-flipbook-frame editorial-flipbook-frame-d" />
                </div>
                <p>{t("Pequenas sequencias em loop ajudam a dar ao site um lado mais experimental sem o tornar caotico.", "Small looping sequences give the site a more experimental side without making it chaotic.")}</p>
              </article>
            </div>
          </div>

          <div className="editorial-proof-strip">
            <div className="editorial-proof-quote">
              <span className="editorial-proof-kicker">{t("voz real", "real voice")}</span>
              <p>
                {t(
                  '"A ActivEU precisa de um site que pareca tao especial quanto a experiencia que entrega."',
                  '"ActivEU needs a website that feels as special as the experience it delivers."',
                )}
              </p>
            </div>
            <div className="editorial-proof-badges">
              {partnerLabels.map((item, index) => (
                <span key={item.en} className={`editorial-proof-badge editorial-proof-badge-${index + 1}`}>
                  {index === 0 ? <Building2 size={14} /> : <CheckCircle2 size={14} />}
                  {t(item.pt, item.en)}
                </span>
              ))}
            </div>
          </div>
        </Reveal3D>
      </div>
    </section>
  );
}
