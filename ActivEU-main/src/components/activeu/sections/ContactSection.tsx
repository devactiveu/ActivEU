import { ArrowRight, ChevronRight, HeartHandshake, Building2, Users2 } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";
import { useLanguage } from "@/contexts/useLanguage";
import { RevealItem, SectionReveal } from "@/components/activeu/motion-primitives";
import { CollaborativeSignalField } from "@/components/activeu/CollaborativeSignalField";
import { DoodleHeart } from "@/components/activeu/DoodleSystem";

export function ContactSection({ scrollToId }: { scrollToId: (id: string) => void }) {
  const { t } = useLanguage();
  const reduceMotion = useReducedMotion();

  const audiences = [
    {
      icon: Users2,
      title: t("Para jovens", "For young people"),
      body: t("Experiências com voz, responsabilidade e proximidade a contextos reais.", "Experiences with voice, responsibility and proximity to real contexts."),
      tint: "border-[#ffb020]/25 bg-gradient-to-br from-[#fff8ed] to-white",
    },
    {
      icon: Building2,
      title: t("Para empresas", "For companies"),
      body: t("Projetos claros, organizados e alinhados com impacto social visível.", "Clear, organized projects aligned with visible social impact."),
      tint: "border-[#1e40ff]/20 bg-gradient-to-br from-[#f0f3ff] to-white",
    },
    {
      icon: HeartHandshake,
      title: t("Para parceiros sociais", "For social partners"),
      body: t("Colaboração mais simples, mais documentada e mais fácil de sustentar.", "Collaboration that is simpler, more documented and easier to sustain."),
      tint: "border-[#e94e77]/20 bg-gradient-to-br from-[#fff0f5] to-white",
    },
  ];

  const chips = [
    { label: t("Lisboa", "Lisbon"), chip: "chip-electric" },
    { label: t("parcerias e voluntariado", "partnerships and volunteering"), chip: "chip-sun" },
    { label: t("programas intergeracionais", "intergenerational programs"), chip: "chip-coral" },
  ];

  return (
    <section id="contact" className="px-4 pb-16 pt-8 md:px-6 md:pb-24">
      <div className="relative mx-auto max-w-6xl overflow-hidden rounded-[36px] border border-[#ffb020]/20 bg-gradient-to-br from-[#fff8ed] via-white to-[#fff0f5] p-8 shadow-[0_20px_70px_rgba(255,176,32,0.12)] md:p-12">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full bg-gradient-to-br from-[#ffb020]/30 to-[#ff5e5b]/20 blur-3xl"
          style={{ animation: "blob-morph 16s ease-in-out infinite" }}
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -bottom-24 -left-16 h-72 w-72 rounded-full bg-gradient-to-br from-[#1e40ff]/15 to-[#b7e934]/20 blur-3xl"
          style={{ animation: "blob-morph-b 20s ease-in-out infinite" }}
        />

        <div className="relative grid gap-10 lg:grid-cols-[1fr_0.95fr]">
          <div>
            <p className="eyebrow eyebrow-coral">
              <DoodleHeart size={14} color="#c8335d" />
              {t("próximo passo", "next step")}
            </p>
            <h2 className="mt-5 max-w-xl text-balance text-3xl font-semibold tracking-tight text-slate-900 md:text-4xl">
              {t(
                "Vamos desenhar a próxima experiência que aproxima juventude, empresas e causas.",
                "Let's shape the next experience that brings youth, companies and causes closer together.",
              )}
            </h2>
            <p className="mt-4 max-w-lg text-base leading-7 text-slate-600">
              {t(
                "Se estás a preparar um programa, uma parceria ou uma ativação comunitária, a ActivEU pode transformá-la numa experiência clara, humana e documentável.",
                "If you are preparing a program, partnership or community activation, ActivEU can turn it into an experience that feels clear, human and documentable.",
              )}
            </p>

            <div className="mt-7 flex flex-wrap gap-3">
              <a href="mailto:geral@activeu.pt" className="pop-cta">
                geral@activeu.pt
                <ArrowRight className="h-4 w-4" />
              </a>
              <a
                href="#stories"
                onClick={(e) => { e.preventDefault(); scrollToId("stories"); }}
                className="pop-cta-ghost"
              >
                {t("Ver experiências", "See experiences")}
                <ChevronRight className="h-4 w-4" />
              </a>
            </div>

            <div className="mt-6 flex flex-wrap gap-2">
              {chips.map((item) => (
                <motion.span
                  key={item.label}
                  className={`rounded-full px-4 py-2 text-sm font-semibold ${item.chip}`}
                  whileHover={reduceMotion ? undefined : { y: -2, scale: 1.04 }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                >
                  {item.label}
                </motion.span>
              ))}
            </div>
          </div>

          <div className="flex flex-col gap-4">
            <CollaborativeSignalField t={t} section="cta" />
            <SectionReveal className="grid gap-3">
              {audiences.map((audience) => (
                <RevealItem key={audience.title} variant="pop">
                  <article className={`rounded-[22px] border p-5 transition hover:-translate-y-0.5 hover:shadow-sm ${audience.tint}`}>
                    <div className="flex items-start gap-4">
                      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-slate-100 bg-white shadow-sm">
                        <audience.icon className="h-4 w-4 text-slate-600" />
                      </div>
                      <div>
                        <h3 className="text-base font-semibold text-slate-900">{audience.title}</h3>
                        <p className="mt-1 text-sm leading-6 text-slate-500">{audience.body}</p>
                      </div>
                    </div>
                  </article>
                </RevealItem>
              ))}
            </SectionReveal>
          </div>
        </div>
      </div>
    </section>
  );
}
