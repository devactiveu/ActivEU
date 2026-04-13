import { useEffect, useState } from "react"
import { ArrowUpRight, BadgeCheck, Mail, PenTool, Sparkles, type LucideIcon } from "lucide-react"
import { motion, useReducedMotion } from "framer-motion"
import { DoodleArrow, DoodleBadge, DoodleCluster, DoodleSpark, DoodleStamp, MorphBlob, RibbonTrace } from "@/components/activeu/DoodleSystem"
import { FadeIn, RevealItem, SectionReveal } from "@/components/activeu/motion-primitives"

type Translator = (pt: string, en: string) => string

type ContactMotionStudioProps = {
  t: Translator
}

type OrbitItem = {
  icon: LucideIcon
  accent: "amber" | "blue" | "coral"
  ptLabel: string
  enLabel: string
  ptBody: string
  enBody: string
  position: string
}

const orbitItems: OrbitItem[] = [
  {
    icon: PenTool,
    accent: "amber",
    ptLabel: "brief com traco humano",
    enLabel: "brief with human trace",
    ptBody: "A conversa entra com energia editorial e direcao visual clara.",
    enBody: "The conversation enters with editorial energy and clear visual direction.",
    position: "contact-orbit-a",
  },
  {
    icon: Sparkles,
    accent: "blue",
    ptLabel: "resposta com ritmo",
    enLabel: "reply with rhythm",
    ptBody: "Microanimacoes e estados vivos fazem o contacto parecer ativo.",
    enBody: "Microanimations and living states make contact feel active.",
    position: "contact-orbit-b",
  },
  {
    icon: BadgeCheck,
    accent: "coral",
    ptLabel: "fecho com confianca",
    enLabel: "confidence at the finish",
    ptBody: "O convite final deixa memoria em vez de desaparecer no rodape.",
    enBody: "The final invitation leaves a memory instead of fading into the footer.",
    position: "contact-orbit-c",
  },
]

const replySteps = [
  {
    ptTitle: "01. Partilhar objetivo",
    enTitle: "01. Share the goal",
    ptBody: "O primeiro gesto explica a causa, o publico e a ambicao.",
    enBody: "The first gesture explains the cause, the audience and the ambition.",
  },
  {
    ptTitle: "02. Afinar a experiencia",
    enTitle: "02. Shape the experience",
    ptBody: "A proposta ganha forma visual, narrativa e institucional.",
    enBody: "The proposal gains visual, narrative and institutional shape.",
  },
  {
    ptTitle: "03. Entrar em movimento",
    enTitle: "03. Move into action",
    ptBody: "A pagina deixa de ser promessa e passa a parecer real.",
    enBody: "The page stops being a promise and starts feeling real.",
  },
]

export function ContactMotionStudio({ t }: ContactMotionStudioProps) {
  const reduceMotion = useReducedMotion()
  const [activeStep, setActiveStep] = useState(0)

  useEffect(() => {
    if (reduceMotion) return
    const interval = window.setInterval(() => {
      setActiveStep((current) => (current + 1) % replySteps.length)
    }, 2400)

    return () => window.clearInterval(interval)
  }, [reduceMotion])

  return (
    <section className="contact-motion-studio">
      <div className="contact-motion-copy">
        <FadeIn>
          <div className="eyebrow text-white/88">
            <Sparkles size={14} />
            {t("CTA microexperience", "CTA microexperience")}
          </div>
        </FadeIn>
        <FadeIn delay={0.08}>
          <h3 className="contact-motion-heading">
            <span>{t("O fecho da pagina tambem", "The end of the page should also")}</span>
            <span className="text-gradient-premium-flow">{t("precisa de parecer vivo.", "feel alive.")}</span>
          </h3>
        </FadeIn>
        <FadeIn delay={0.14}>
          <p className="contact-motion-body">
            {t(
              "Esta nova camada empurra o CTA para os exemplos mais ricos do artigo: animated icons, morphing atmosferico, hover com profundidade e loading cues que sugerem resposta imediata.",
              "This new layer pushes the CTA closer to the article's richer references: animated icons, atmospheric morphing, depth-driven hover and loading cues that suggest immediate response.",
            )}
          </p>
        </FadeIn>
        <SectionReveal className="contact-motion-tags" stagger={0.06}>
          {[
            t("animated icons", "animated icons"),
            t("liquid motion", "liquid motion"),
            t("loading cues", "loading cues"),
            t("hand-drawn energy", "hand-drawn energy"),
          ].map((label) => (
            <RevealItem key={label}>
              <span className="contact-motion-tag">{label}</span>
            </RevealItem>
          ))}
        </SectionReveal>
      </div>

      <div className="contact-motion-stage">
        <div className="contact-motion-noise" aria-hidden="true" />
        <MorphBlob className="contact-motion-blob contact-motion-blob-a" />
        <MorphBlob className="contact-motion-blob contact-motion-blob-b" />
        <DoodleCluster className="contact-motion-doodle contact-motion-doodle-a" accent="amber" />
        <DoodleCluster className="contact-motion-doodle contact-motion-doodle-b" accent="blue" />
        <DoodleArrow className="contact-motion-arrow" accent="coral" />
        <RibbonTrace className="contact-motion-ribbon" accent="blue" />
        <DoodleSpark className="contact-motion-spark" accent="amber" />
        <DoodleBadge className="contact-motion-badge" text={t("reply path active", "reply path active")} />
        <DoodleStamp className="contact-motion-stamp" accent="amber" text={t("motion CTA", "motion CTA")} />

        {orbitItems.map((item, index) => {
          const Icon = item.icon
          return (
            <motion.article
              key={item.enLabel}
              className={`contact-orbit-card ${item.position} contact-orbit-card-${item.accent}`}
              initial={reduceMotion ? false : { opacity: 0, scale: 0.84, y: 18 }}
              whileInView={reduceMotion ? undefined : { opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true, amount: 0.35 }}
              whileHover={reduceMotion ? undefined : { y: -8, scale: 1.02, rotate: index % 2 === 0 ? -1.5 : 1.5 }}
              transition={{ duration: 0.7, delay: index * 0.08, ease: [0.16, 1, 0.3, 1] }}
            >
              <motion.span
                className="contact-orbit-icon"
                animate={reduceMotion ? undefined : { rotate: [0, index % 2 === 0 ? 10 : -10, 0], scale: [1, 1.05, 1] }}
                transition={{ duration: 5 + index * 0.5, repeat: Infinity, ease: "easeInOut" }}
              >
                <Icon size={16} />
              </motion.span>
              <div>
                <strong>{t(item.ptLabel, item.enLabel)}</strong>
                <p>{t(item.ptBody, item.enBody)}</p>
              </div>
            </motion.article>
          )
        })}

        <motion.div
          className="contact-core-panel"
          initial={reduceMotion ? false : { opacity: 0, scale: 0.92 }}
          whileInView={reduceMotion ? undefined : { opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="contact-core-topline">
            <span>{t("contact channel", "contact channel")}</span>
            <Mail size={15} />
          </div>
          <h4>{t("Transformar uma boa missao numa experiencia memoravel.", "Turn a strong mission into a memorable experience.")}</h4>
          <p>
            {t(
              "A chamada final deixa de ser um bloco estatico e passa a parecer uma janela de resposta, direcao e entusiasmo.",
              "The final call stops being a static block and starts feeling like a window into response, direction and enthusiasm.",
            )}
          </p>
          <a href="mailto:geral@activeu.pt" className="contact-core-link">
            geral@activeu.pt
            <ArrowUpRight size={15} />
          </a>
        </motion.div>

        <motion.div
          className="contact-reply-panel"
          initial={reduceMotion ? false : { opacity: 0, y: 18 }}
          whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 0.72, delay: 0.12, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="contact-reply-panel-header">
            <div>
              <span>{t("signal preview", "signal preview")}</span>
              <strong>{t("Uma resposta que parece em curso", "A reply that feels underway")}</strong>
            </div>
            <motion.div
              className="contact-reply-ping"
              animate={reduceMotion ? undefined : { scale: [1, 1.12, 1], opacity: [0.68, 1, 0.68] }}
              transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
            />
          </div>

          <div className="contact-reply-steps">
            {replySteps.map((step, index) => (
              <div
                key={step.enTitle}
                className={`contact-reply-step ${index === activeStep ? "contact-reply-step-active" : ""}`}
              >
                <strong>{t(step.ptTitle, step.enTitle)}</strong>
                <p>{t(step.ptBody, step.enBody)}</p>
              </div>
            ))}
          </div>

          <div className="contact-loading-card" aria-hidden="true">
            <div className="contact-loading-topline">
              <span>{t("loading cue", "loading cue")}</span>
              <span>{t("energia editorial", "editorial energy")}</span>
            </div>
            <div className="contact-loading-lines">
              <motion.span
                className="contact-loading-line contact-loading-line-a"
                animate={reduceMotion ? undefined : { scaleX: [0.45, 1, 0.62] }}
                transition={{ duration: 2.4, repeat: Infinity, ease: "easeInOut" }}
              />
              <motion.span
                className="contact-loading-line contact-loading-line-b"
                animate={reduceMotion ? undefined : { scaleX: [0.8, 0.42, 0.94] }}
                transition={{ duration: 2.2, repeat: Infinity, ease: "easeInOut", delay: 0.15 }}
              />
              <motion.span
                className="contact-loading-line contact-loading-line-c"
                animate={reduceMotion ? undefined : { scaleX: [0.55, 0.96, 0.4] }}
                transition={{ duration: 2.6, repeat: Infinity, ease: "easeInOut", delay: 0.3 }}
              />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
