import type { CSSProperties } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowUpRight, Sparkles } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { FadeIn } from "./motion-primitives";

const partners = [
  { name: "SAME Network", color: "#3b82f6", orbit: { x: "-32%", y: "-28%" } },
  { name: "Comissao Europeia", color: "#1d4ed8", orbit: { x: "38%", y: "-30%" } },
  { name: "Erasmus+", color: "#2563eb", orbit: { x: "2%", y: "-44%" } },
  { name: "IPDJ", color: "#0f766e", orbit: { x: "-42%", y: "10%" } },
  { name: "Fund. Gulbenkian", color: "#7c3aed", orbit: { x: "42%", y: "8%" } },
  { name: "Camara Lisboa", color: "#b91c1c", orbit: { x: "-12%", y: "38%" } },
  { name: "Universidade Nova", color: "#1e40af", orbit: { x: "26%", y: "34%" } },
  { name: "ISCTE", color: "#0369a1", orbit: { x: "-2%", y: "50%" } },
  { name: "Deloitte", color: "#86c117", orbit: { x: "0%", y: "0%" } },
  { name: "EDP Solidaria", color: "#e27404", orbit: { x: "0%", y: "0%" } },
  { name: "Fund. La Caixa", color: "#0ea5e9", orbit: { x: "0%", y: "0%" } },
  { name: "Youth Forum", color: "#7c3aed", orbit: { x: "0%", y: "0%" } },
];

export function PartnerLogos() {
  const { t } = useLanguage();
  const reduceMotion = useReducedMotion();
  const featuredPartners = partners.slice(0, 8);
  const marqueePartners = [...partners, ...partners];

  return (
    <section className="section-shell py-16 md:py-20">
      <div className="partner-constellation-shell">
        <div className="partner-constellation-noise" aria-hidden="true" />
        <div className="partner-constellation-grid">
          <FadeIn className="partner-constellation-copy">
            <div className="eyebrow">
              <Sparkles size={14} />
              {t("Presenca institucional em movimento", "Institutional presence in motion")}
            </div>
            <h2 className="partner-constellation-heading">
              <span>{t("Os parceiros nao devem", "Partners should not")}</span>
              <span className="text-gradient-premium">{t("parecer uma lista morta.", "feel like a dead list.")}</span>
            </h2>
            <p className="partner-constellation-body">
              {t(
                "Esta camada aproxima reputacao, rede e energia visual. Em vez de logos passivos, o site mostra uma constelacao viva de apoios, afinidades e escala europeia.",
                "This layer brings reputation, network and visual energy closer together. Instead of passive logos, the site shows a living constellation of supporters, affinities and European scale."
              )}
            </p>
            <div className="partner-constellation-note">
              <span>{t("efeito escolhido", "selected effect")}</span>
              <strong>{t("animated logos + orbit motion + institutional marquee", "animated logos + orbit motion + institutional marquee")}</strong>
            </div>
          </FadeIn>

          <div className="partner-constellation-stage">
            <div className="partner-constellation-glow" aria-hidden="true" />
            <div className="partner-constellation-core">
              <div className="partner-constellation-core-ring" aria-hidden="true" />
              <div className="partner-constellation-core-badge">
                <img src="/Imagens/icon.png" alt="ActivEU" className="partner-constellation-core-logo" loading="lazy" />
              </div>
              <div className="partner-constellation-core-copy">
                <span>{t("rede ativada", "network activated")}</span>
                <strong>ActivEU</strong>
              </div>
            </div>

            {featuredPartners.map((partner, index) => (
              <div
                key={partner.name}
                className="partner-orbit-slot"
                style={
                  {
                    "--orbit-x": partner.orbit.x,
                    "--orbit-y": partner.orbit.y,
                  } as CSSProperties
                }
              >
                <motion.article
                  className="partner-orbit-card"
                  style={{ "--partner-color": partner.color } as CSSProperties}
                  initial={reduceMotion ? false : { opacity: 0, scale: 0.8 }}
                  whileInView={reduceMotion ? undefined : { opacity: 1, scale: 1 }}
                  viewport={{ once: true, amount: 0.4 }}
                  animate={
                    reduceMotion
                      ? undefined
                      : {
                          y: [0, index % 2 === 0 ? -10 : 8, 0],
                          rotate: [0, index % 2 === 0 ? -2.5 : 2.5, 0],
                        }
                  }
                  whileHover={reduceMotion ? undefined : { scale: 1.04, y: -8 }}
                  transition={{
                    duration: reduceMotion ? 0.55 : 5.4 + index * 0.35,
                    repeat: reduceMotion ? 0 : Infinity,
                    ease: "easeInOut",
                    delay: reduceMotion ? 0 : index * 0.12,
                  }}
                >
                  <div className="partner-orbit-card-mark">{partner.name.charAt(0)}</div>
                  <div className="partner-orbit-card-copy">
                    <span>{t("parceiro", "partner")}</span>
                    <strong>{partner.name}</strong>
                  </div>
                </motion.article>
              </div>
            ))}
          </div>
        </div>

        <div className="partner-marquee-shell mt-8 md:mt-10">
          <div className="partner-marquee-fade partner-marquee-fade-left" />
          <div className="partner-marquee-fade partner-marquee-fade-right" />
          <div className="partner-marquee-viewport">
            <div className="partner-marquee-inner">
              {marqueePartners.map((partner, index) => (
                <div key={`${partner.name}-${index}`} className="partner-logo-pill">
                  <div
                    className="partner-logo-pill-mark"
                    style={{
                      background: `${partner.color}14`,
                      border: `1px solid ${partner.color}28`,
                      color: partner.color,
                    }}
                  >
                    {partner.name.charAt(0)}
                  </div>
                  <span className="partner-logo-pill-name">{partner.name}</span>
                  <ArrowUpRight size={14} className="partner-logo-pill-arrow" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
