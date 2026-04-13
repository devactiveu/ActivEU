import { useEffect, useState } from "react";
import { ArrowUpRight, LoaderCircle, MousePointer2, Sparkles, type LucideIcon } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";
import { DoodleArrow, DoodleBadge, DoodleCluster, DoodleSpark, DoodleStamp, MorphBlob, RibbonTrace, StickerNote } from "@/components/activeu/DoodleSystem";
import { FadeIn, Reveal3D, RevealItem, SectionReveal } from "@/components/activeu/motion-primitives";

type Translator = (pt: string, en: string) => string;

type Poster = {
  image: string;
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
  ptMode: string;
  enMode: string;
};

const posters: Poster[] = [
  {
    image: "/Imagens/solidarityactionday.jpg",
    accent: "amber",
    icon: MousePointer2,
    ptLabel: "hover scene",
    enLabel: "hover scene",
    ptTitle: "Hover com profundidade e resposta editorial.",
    enTitle: "Hover with depth and editorial response.",
    ptBody: "Ao aproximar o cursor, a composicao reage como cartaz vivo: glow, traco, sombra e um detalhe de pagina a entrar.",
    enBody: "As the cursor approaches, the composition reacts like a living poster: glow, line work, shadow and a page-turn detail entering the scene.",
    ptCue: "Efeito de hover cinemático",
    enCue: "Cinematic hover effect",
    ptMode: "hover motion",
    enMode: "hover motion",
  },
  {
    image: "/Imagens/plataformadigital.jpg",
    accent: "blue",
    icon: LoaderCircle,
    ptLabel: "loading ritual",
    enLabel: "loading ritual",
    ptTitle: "Loading cues que parecem sinal de atividade real.",
    enTitle: "Loading cues that feel like real activity signals.",
    ptBody: "Em vez de placeholders frios, o site usa pequenas barras, pulsos e orbitas para sugerir que algo esta vivo por baixo da interface.",
    enBody: "Instead of cold placeholders, the site uses bars, pulses and orbits to suggest something is alive beneath the interface.",
    ptCue: "Skeletons mais elegantes",
    enCue: "More elegant skeletons",
    ptMode: "loading cues",
    enMode: "loading cues",
  },
  {
    image: "/Imagens/encontrosintergeracionais.jpg",
    accent: "coral",
    icon: Sparkles,
    ptLabel: "transition frame",
    enLabel: "transition frame",
    ptTitle: "Transicoes com cara de capitulo, nao de bloco.",
    enTitle: "Transitions that feel like chapters, not blocks.",
    ptBody: "Linhas desenhadas, selos e um reveal lateral ajudam cada mudanca de cena a parecer intencional e memoravel.",
    enBody: "Drawn lines, stamps and a side reveal help every scene change feel intentional and memorable.",
    ptCue: "Entrada de cena com gesto",
    enCue: "Scene entry with gesture",
    ptMode: "chapter transition",
    enMode: "chapter transition",
  },
];

export function MotionPosterGallery({ t }: { t: Translator }) {
  const reduceMotion = useReducedMotion();
  const [activePoster, setActivePoster] = useState(0);

  useEffect(() => {
    if (reduceMotion) return;
    const interval = window.setInterval(() => {
      setActivePoster((current) => (current + 1) % posters.length);
    }, 3600);

    return () => window.clearInterval(interval);
  }, [reduceMotion]);

  const active = posters[activePoster];
  const ActiveIcon = active.icon;

  return (
    <section className="section-shell py-10 md:py-16">
      <div className="motion-poster-gallery">
        <MorphBlob className="motion-poster-blob motion-poster-blob-a" />
        <MorphBlob className="motion-poster-blob motion-poster-blob-b" />
        <DoodleCluster className="motion-poster-doodle motion-poster-doodle-a" accent="amber" />
        <DoodleCluster className="motion-poster-doodle motion-poster-doodle-b" accent="blue" />
        <RibbonTrace className="motion-poster-ribbon" accent="coral" />
        <DoodleArrow className="motion-poster-arrow" accent="amber" />
        <DoodleSpark className="motion-poster-spark" accent="blue" />
        <DoodleStamp className="motion-poster-stamp" accent="coral" text={t("motion posters", "motion posters")} />

        <div className="motion-poster-grid">
          <div className="motion-poster-copy">
            <FadeIn>
              <div className="eyebrow">
                <Sparkles size={14} />
                {t("Poster lab", "Poster lab")}
              </div>
            </FadeIn>
            <FadeIn delay={0.08}>
              <h2 className="motion-poster-heading">
                <span>{t("Mais hover,", "More hover,")}</span>
                <span className="text-gradient-premium-flow">{t("mais transicao,", "more transition,")}</span>
                <span>{t("mais magia util.", "more useful magic.")}</span>
              </h2>
            </FadeIn>
            <FadeIn delay={0.14}>
              <p className="motion-poster-body">
                {t(
                  "Esta nova galeria pega noutras familias do artigo da SVGator e transforma-as numa secao mais colecionavel: posters vivos, line animation, cues de loading, icones animados e mudancas de cena com mais assinatura visual.",
                  "This new gallery pulls in more SVGator-inspired families and turns them into a more collectible section: living posters, line animation, loading cues, animated icons and scene changes with a stronger visual signature.",
                )}
              </p>
            </FadeIn>

            <SectionReveal className="motion-poster-tag-row" stagger={0.06}>
              {[
                t("hover depth", "hover depth"),
                t("line animation", "line animation"),
                t("page transition feel", "page transition feel"),
                t("animated icons", "animated icons"),
              ].map((label) => (
                <RevealItem key={label}>
                  <span className="motion-poster-tag">{label}</span>
                </RevealItem>
              ))}
            </SectionReveal>
          </div>

          <div className="motion-poster-stage">
            <Reveal3D className={`motion-poster-preview motion-poster-preview-${active.accent}`}>
              <img src={active.image} alt={t(active.ptTitle, active.enTitle)} className="motion-poster-preview-image" loading="lazy" />
              <div className="motion-poster-preview-overlay" />
              <div className="motion-poster-preview-grid" />
              <DoodleBadge className="motion-poster-preview-badge" text={t(active.ptMode, active.enMode)} />
              <StickerNote className="motion-poster-preview-note" text={t(active.ptCue, active.enCue)} />
              <div className="motion-poster-preview-copy">
                <span>{t(active.ptLabel, active.enLabel)}</span>
                <h3>{t(active.ptTitle, active.enTitle)}</h3>
                <p>{t(active.ptBody, active.enBody)}</p>
              </div>
              <motion.div
                className="motion-poster-preview-icon"
                animate={reduceMotion ? undefined : { rotate: [0, 8, -5, 0], y: [0, -4, 0] }}
                transition={{ duration: 5.6, repeat: Infinity, ease: "easeInOut" }}
              >
                <ActiveIcon size={18} />
              </motion.div>
              <svg viewBox="0 0 520 280" className="motion-poster-route" aria-hidden="true">
                <motion.path
                  d="M36 222C106 136 168 96 254 105C330 113 366 194 432 192C470 191 492 165 506 138"
                  fill="none"
                  stroke="rgba(255,255,255,0.22)"
                  strokeWidth="16"
                  strokeLinecap="round"
                />
                <motion.path
                  d="M36 222C106 136 168 96 254 105C330 113 366 194 432 192C470 191 492 165 506 138"
                  fill="none"
                  stroke="url(#poster-route-gradient)"
                  strokeWidth="6"
                  strokeLinecap="round"
                  initial={reduceMotion ? false : { pathLength: 0.12, opacity: 0.55 }}
                  animate={reduceMotion ? undefined : { pathLength: [0.12, 1, 1], opacity: [0.55, 1, 0.82] }}
                  transition={{ duration: 1.3, ease: "easeInOut" }}
                  key={activePoster}
                />
                <defs>
                  <linearGradient id="poster-route-gradient" x1="0" y1="1" x2="1" y2="0">
                    <stop offset="0%" stopColor="#ffb007" />
                    <stop offset="55%" stopColor="#3b82f6" />
                    <stop offset="100%" stopColor="#f97316" />
                  </linearGradient>
                </defs>
              </svg>
              <div className="motion-poster-loading-card" aria-hidden="true">
                <div className="motion-poster-loading-head">
                  <span>{t("live signal", "live signal")}</span>
                  <span>{t("editorial loading", "editorial loading")}</span>
                </div>
                <div className="motion-poster-loading-lines">
                  {[0, 1, 2].map((line) => (
                    <motion.span
                      key={line}
                      className={`motion-poster-loading-line motion-poster-loading-line-${line + 1}`}
                      animate={reduceMotion ? undefined : { scaleX: [0.35, 1, 0.5] }}
                      transition={{ duration: 2 + line * 0.25, repeat: Infinity, ease: "easeInOut", delay: line * 0.18 }}
                    />
                  ))}
                </div>
              </div>
            </Reveal3D>

            <SectionReveal className="motion-poster-selector" stagger={0.08}>
              {posters.map((poster, index) => {
                const Icon = poster.icon;
                const isActive = index === activePoster;
                return (
                  <RevealItem key={poster.enTitle}>
                    <motion.button
                      type="button"
                      className={`motion-poster-card motion-poster-card-${poster.accent} ${isActive ? "motion-poster-card-active" : ""}`}
                      onMouseEnter={() => setActivePoster(index)}
                      onFocus={() => setActivePoster(index)}
                      whileHover={reduceMotion ? undefined : { y: -6, scale: 1.01 }}
                      transition={{ type: "spring", stiffness: 260, damping: 18 }}
                    >
                      <div className="motion-poster-card-topline">
                        <span className="motion-poster-card-icon"><Icon size={16} /></span>
                        <span>{t(poster.ptMode, poster.enMode)}</span>
                        <ArrowUpRight size={15} />
                      </div>
                      <strong>{t(poster.ptTitle, poster.enTitle)}</strong>
                      <p>{t(poster.ptBody, poster.enBody)}</p>
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
