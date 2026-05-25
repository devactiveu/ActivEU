import { BadgeCheck, Building2, HeartHandshake, Sparkles, Users2 } from "lucide-react";
import { useLanguage } from "@/contexts/useLanguage";
import { RevealItem, SectionReveal, SparkCounter } from "@/components/activeu/motion-primitives";
import { Tilt3DCard } from "@/components/activeu/Tilt3DCard";
import { CollaborativeSignalField } from "@/components/activeu/CollaborativeSignalField";
import { JourneyCanvas } from "@/components/activeu/JourneyCanvas";
import { SectionTransition } from "@/components/activeu/DoodleSystem";
import { SectionIntro } from "@/components/activeu/SectionIntro";

export function ModelSection() {
  const { t } = useLanguage();

  const pillars = [
    {
      icon: Users2,
      title: t("Juventude com papel real", "Young people with real agency"),
      body: t(
        "Os jovens entram para participar, ganhar contexto e deixar marca concreta nos projetos.",
        "Young people step in to participate, gain context and leave a concrete mark on projects.",
      ),
      iconBg: "bg-gradient-to-br from-[#fff3d4] to-[#ffd36b] text-[#a75105]",
      glow: "sunbeam" as const,
    },
    {
      icon: Building2,
      title: t("Empresas com propósito visível", "Companies with visible purpose"),
      body: t(
        "As empresas colaboram com clareza, presença e um gesto social que se percebe no terreno.",
        "Companies collaborate with clarity, presence and a social gesture that can be seen on the ground.",
      ),
      iconBg: "bg-gradient-to-br from-[#e7edff] to-[#b6c6ff] text-[#1e40ff]",
      glow: "electric" as const,
    },
    {
      icon: HeartHandshake,
      title: t("Causas com retorno humano", "Causes with human return"),
      body: t(
        "As causas recebem impacto útil, memória positiva e continuidade para além do momento inicial.",
        "Causes receive useful impact, positive memory and continuity beyond the initial moment.",
      ),
      iconBg: "bg-gradient-to-br from-[#fff0f3] to-[#ffd9e2] text-[#c8335d]",
      glow: "coral" as const,
    },
  ];

  const process = [
    {
      icon: Sparkles,
      title: t("1. Definir a experiência", "1. Define the experience"),
      body: t(
        "Objetivo, participantes, formato e resultado esperado ficam claros desde o início.",
        "Goal, participants, format and expected outcome are clear from the start.",
      ),
      accent: "from-[#ffb020] to-[#ff8a00]",
      bg: "from-[#fff7e6]",
    },
    {
      icon: Building2,
      title: t("2. Ativar a colaboração", "2. Activate collaboration"),
      body: t(
        "A ActivEU coordena parceiros, equipas e contexto para que a execução seja fluida.",
        "ActivEU coordinates partners, teams and context so execution feels smooth.",
      ),
      accent: "from-[#1e40ff] to-[#5876ff]",
      bg: "from-[#eff3ff]",
    },
    {
      icon: BadgeCheck,
      title: t("3. Mostrar o impacto", "3. Show the impact"),
      body: t(
        "O resultado fica documentado em histórias, imagem, participação e confiança gerada.",
        "The result becomes documented in stories, imagery, participation and trust generated.",
      ),
      accent: "from-[#e94e77] to-[#ff5e5b]",
      bg: "from-[#ffeef3]",
    },
  ];

  return (
    <>
      <section id="model" className="px-4 py-20 md:px-6 md:py-28">
        <div className="mx-auto max-w-6xl">
          <SectionIntro
            eyebrow={t("modelo ActivEU", "the ActivEU model")}
            title={t("Uma estrutura simples para criar colaboração real.", "A simple structure for building real collaboration.")}
            body={t(
              "A força da ActivEU está em tornar legível a relação entre juventude, empresas, causas e comunidade.",
              "ActivEU is strongest when it makes the relationship between youth, companies, causes and community easy to understand.",
            )}
          />

          {/* Metric counters */}
          <SectionReveal className="mt-10 grid gap-4 sm:grid-cols-3">
            {[
              { end: 3, suffix: "", label: t("frentes ligadas", "connected fronts"), body: t("juventude, empresas e causas", "youth, companies and causes"), accent: "text-gradient-sunbeam" },
              { end: 1, suffix: "", label: t("experiência integrada", "integrated experience"), body: t("do desenho à ativação", "from design to activation"), accent: "text-gradient-electric" },
              { end: 100, suffix: "%", label: t("foco na clareza", "clarity-first"), body: t("mensagem simples e acionável", "simple and actionable message"), accent: "text-gradient-premium-flow" },
            ].map((metric) => (
              <RevealItem key={metric.label} variant="pop">
                <div className="group rounded-[26px] border border-slate-100 bg-white/80 p-6 shadow-sm transition-shadow duration-300 hover:shadow-md">
                  <p className={`text-5xl font-extrabold tracking-[-0.05em] ${metric.accent}`}>
                    <SparkCounter end={metric.end} suffix={metric.suffix} />
                  </p>
                  <p className="mt-3 text-xs font-semibold uppercase tracking-[0.18em] text-slate-400">{metric.label}</p>
                  <p className="mt-1 text-sm leading-6 text-slate-500">{metric.body}</p>
                </div>
              </RevealItem>
            ))}
          </SectionReveal>

          {/* Relational diagram */}
          <div className="mt-14">
            <CollaborativeSignalField t={t} section="model" />
          </div>

          {/* Pillar cards */}
          <SectionReveal className="mt-14 grid gap-5 lg:grid-cols-3">
            {pillars.map((pillar, index) => (
              <RevealItem key={pillar.title} className="h-full" variant="pop">
                <Tilt3DCard className="h-full rounded-[28px]" hoverScale={1.02} glow={pillar.glow}>
                  <article className="h-full rounded-[28px] border border-slate-100 bg-white p-7 shadow-sm">
                    <div className={`inline-flex h-12 w-12 items-center justify-center rounded-xl ${pillar.iconBg}`}>
                      <pillar.icon className="h-5 w-5" />
                    </div>
                    <h3 className="mt-5 text-xl font-semibold tracking-tight text-slate-900">{pillar.title}</h3>
                    <p className="mt-3 text-sm leading-7 text-slate-500">{pillar.body}</p>
                  </article>
                </Tilt3DCard>
              </RevealItem>
            ))}
          </SectionReveal>

          {/* Process steps */}
          <SectionReveal className="mt-6 grid gap-4 lg:grid-cols-3">
            {process.map((item) => (
              <RevealItem key={item.title} variant="rotate">
                <article className={`group rounded-[28px] border border-slate-100 bg-gradient-to-br ${item.bg} to-white p-6 transition-transform duration-300 hover:-translate-y-1`}>
                  <div className={`inline-flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br ${item.accent} text-white shadow-sm transition-transform duration-500 group-hover:scale-110`}>
                    <item.icon className="h-4 w-4" />
                  </div>
                  <h3 className="mt-4 text-base font-semibold text-slate-900">{item.title}</h3>
                  <p className="mt-2 text-sm leading-6 text-slate-500">{item.body}</p>
                </article>
              </RevealItem>
            ))}
          </SectionReveal>
        </div>
      </section>

      <JourneyCanvas />
      <SectionTransition />
    </>
  );
}
