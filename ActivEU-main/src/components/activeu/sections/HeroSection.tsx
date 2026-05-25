import { ArrowRight, ChevronRight, Building2, HeartHandshake, Users2 } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";
import { useEffect, useState } from "react";
import { useLanguage } from "@/contexts/useLanguage";
import { CharReveal } from "@/components/activeu/motion-primitives";
import { ValueMarquee } from "@/components/activeu/ValueMarquee";
import { GlassCard } from "@/components/premium/GlassCard";
import { MagneticButton } from "@/components/premium/MagneticButton";

const heroCards = [
  {
    icon: Users2,
    labelPt: "Juventude",
    labelEn: "Youth",
    descPt: "voz e presença",
    descEn: "voice & presence",
    color: "#ffb020",
    bg: "from-[#ffb020] to-[#ff8a00]",
  },
  {
    icon: Building2,
    labelPt: "Empresas",
    labelEn: "Companies",
    descPt: "espaço e recursos",
    descEn: "space & resources",
    color: "#5876ff",
    bg: "from-[#5876ff] to-[#1e40ff]",
  },
  {
    icon: HeartHandshake,
    labelPt: "Causas",
    labelEn: "Causes",
    descPt: "impacto real",
    descEn: "real impact",
    color: "#e94e77",
    bg: "from-[#e94e77] to-[#ff5e5b]",
  },
];

function HeroOrbs({ reduceMotion }: { reduceMotion: boolean | null }) {
  return (
    <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden" aria-hidden="true">
      <motion.div
        className="absolute h-[480px] w-[480px] rounded-full blur-[80px]"
        style={{ background: "rgba(88,118,255,0.28)", top: "-10%", left: "-8%" }}
        animate={reduceMotion ? undefined : { x: [0, 30, 0], y: [0, 20, 0] }}
        transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute h-[380px] w-[380px] rounded-full blur-[70px]"
        style={{ background: "rgba(233,78,119,0.22)", top: "10%", right: "-5%" }}
        animate={reduceMotion ? undefined : { x: [0, -28, 0], y: [0, 32, 0] }}
        transition={{ duration: 11, repeat: Infinity, ease: "easeInOut", delay: 1.2 }}
      />
      <motion.div
        className="absolute h-[320px] w-[320px] rounded-full blur-[60px]"
        style={{ background: "rgba(255,176,32,0.18)", bottom: "8%", left: "28%" }}
        animate={reduceMotion ? undefined : { x: [0, 18, 0], scale: [1, 1.12, 1] }}
        transition={{ duration: 16, repeat: Infinity, ease: "easeInOut", delay: 2.5 }}
      />
      <motion.div
        className="absolute h-[240px] w-[240px] rounded-full blur-[50px]"
        style={{ background: "rgba(183,233,52,0.14)", bottom: "20%", right: "15%" }}
        animate={reduceMotion ? undefined : { y: [0, -20, 0], scale: [1, 1.08, 1] }}
        transition={{ duration: 9, repeat: Infinity, ease: "easeInOut", delay: 3 }}
      />
    </div>
  );
}

export function HeroSection({ scrollToId }: { scrollToId: (id: string) => void }) {
  const { t } = useLanguage();
  const reduceMotion = useReducedMotion();
  const [showCue, setShowCue] = useState(true);

  useEffect(() => {
    const onScroll = () => { if (window.scrollY > 80) setShowCue(false); };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <section
        id="hero"
        className="relative overflow-hidden px-4 pb-20 pt-32 md:px-6 md:pb-28 md:pt-40"
        style={{ background: "linear-gradient(160deg, #050919 0%, #0c1228 60%, #0d1035 100%)" }}
      >
        <HeroOrbs reduceMotion={reduceMotion} />

        <div className="relative z-10 mx-auto grid max-w-6xl items-center gap-16 lg:grid-cols-[1fr_auto]">
          {/* Text column */}
          <div className="max-w-2xl">
            <motion.p
              className="eyebrow mb-6"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              style={{ color: "rgba(240,244,255,0.6)" }}
            >
              {t("plataforma de impacto social", "social impact platform")}
            </motion.p>

            <h1 className="text-5xl font-semibold leading-[0.9] tracking-[-0.04em] text-white sm:text-6xl lg:text-7xl">
              <span className="block"><CharReveal text={t("Ligamos", "We connect")} delay={0.35} /></span>
              <span className="block"><CharReveal text={t("juventude,", "youth,")} delay={0.5} /></span>
              <span className="block text-gradient-premium-flow">
                <CharReveal text={t("empresas e causas.", "companies and causes.")} delay={0.72} />
              </span>
            </h1>

            <motion.p
              className="mt-8 max-w-md text-lg leading-8"
              style={{ color: "rgba(240,244,255,0.65)" }}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.0 }}
            >
              {t(
                "A ActivEU desenha experiências sociais claras, humanas e memoráveis para jovens, empresas e parceiros.",
                "ActivEU designs social experiences that feel clear, human and memorable for young people, companies and partners.",
              )}
            </motion.p>

            <motion.div
              className="mt-8 flex flex-wrap gap-3"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.15 }}
            >
              <MagneticButton className="pop-cta" onClick={() => scrollToId("contact")}>
                {t("Agendar conversa", "Schedule a conversation")}
                <ArrowRight className="h-4 w-4" />
              </MagneticButton>
              <MagneticButton className="pop-cta-ghost" onClick={() => scrollToId("model")}>
                {t("Ver como funciona", "See how it works")}
                <ChevronRight className="h-4 w-4" />
              </MagneticButton>
            </motion.div>
          </div>

          {/* Cards column — desktop only */}
          <motion.div
            className="hidden lg:flex lg:flex-col lg:gap-3"
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.6 }}
          >
            {heroCards.map((card, index) => {
              const Icon = card.icon;
              return (
                <motion.div
                  key={card.labelEn}
                  style={{ translateX: index * -18 }}
                  animate={reduceMotion ? undefined : { y: [0, -5 + index * 2, 0] }}
                  transition={{ duration: 5 + index * 0.6, repeat: Infinity, ease: "easeInOut", delay: index * 0.5 }}
                >
                  <GlassCard variant="elevated" className="w-64 p-4">
                    <div className="flex items-center gap-3">
                      <div className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br ${card.bg} text-white shadow-md`}>
                        <Icon className="h-5 w-5" />
                      </div>
                      <div>
                        <p className="text-sm font-semibold text-white">
                          {t(card.labelPt, card.labelEn)}
                        </p>
                        <p className="mt-0.5 text-xs" style={{ color: "rgba(240,244,255,0.5)" }}>
                          {t(card.descPt, card.descEn)}
                        </p>
                      </div>
                      <div className="ml-auto h-2 w-2 shrink-0 rounded-full" style={{ background: card.color }} />
                    </div>
                  </GlassCard>
                </motion.div>
              );
            })}
          </motion.div>
        </div>

        {showCue && !reduceMotion && (
          <motion.div
            className="absolute bottom-8 left-1/2 flex -translate-x-1/2 flex-col items-center gap-1"
            animate={{ opacity: [0.3, 0.9, 0.3], y: [0, 4, 0] }}
            transition={{ duration: 2, repeat: Infinity, delay: 1.5 }}
          >
            <ChevronRight className="h-5 w-5 rotate-90 text-white/40" />
          </motion.div>
        )}
      </section>

      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <ValueMarquee
          className="mt-2"
          labels={[
            t("juventude com voz", "youth with voice"),
            t("empresas com propósito", "companies with purpose"),
            t("causas verificadas", "verified causes"),
            t("impacto real", "real impact"),
            t("coordenação séria", "serious coordination"),
            t("presença humana", "human presence"),
          ]}
        />
      </div>
    </>
  );
}
