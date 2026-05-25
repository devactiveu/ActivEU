import { useLanguage } from "@/contexts/useLanguage";
import { RevealItem, SectionReveal, SlideIn } from "@/components/activeu/motion-primitives";
import { SectionTransition } from "@/components/activeu/DoodleSystem";
import { SectionIntro } from "@/components/activeu/SectionIntro";

export function ProofSection() {
  const { t } = useLanguage();

  const cards = [
    {
      title: t("Narrativa clara", "Clear narrative"),
      body: t(
        "Cada projeto deve ser explicável em segundos: quem participa, porque existe e que valor cria.",
        "Each project should be explainable in seconds: who takes part, why it exists and what value it creates.",
      ),
      accent: "#ffb020",
      border: "border-[#ffb020]/30",
      bg: "from-[#fff8ed]",
    },
    {
      title: t("Execução coordenada", "Coordinated execution"),
      body: t(
        "A estética só interessa quando vem acompanhada por organização, contexto e confiança operacional.",
        "Aesthetics only matter when matched by organization, context and operational trust.",
      ),
      accent: "#1e40ff",
      border: "border-[#1e40ff]/20",
      bg: "from-[#f0f3ff]",
    },
    {
      title: t("Conteúdo com utilidade", "Content with utility"),
      body: t(
        "Imagem, relato e prova social devem reforçar reputação e não apenas ocupar espaço.",
        "Imagery, storytelling and social proof should strengthen reputation instead of just taking space.",
      ),
      accent: "#9bd41d",
      border: "border-[#b7e934]/40",
      bg: "from-[#f5fbdf]",
    },
  ];

  return (
    <>
      <section id="proof" className="bg-white px-4 py-20 md:px-6 md:py-28">
        <div className="mx-auto max-w-6xl">
          <SectionIntro
            eyebrow={t("prova e confiança", "proof and trust")}
            title={t("Impacto comunicável sem perder humanidade.", "Impact that stays communicable without losing humanity.")}
            body={t(
              "A credibilidade da ActivEU cresce quando a prova aparece como conteúdo útil, claro e emocionalmente próximo.",
              "ActivEU becomes more credible when proof appears as useful, clear and emotionally close content.",
            )}
          />

          <div className="mt-12 grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
            <SlideIn direction="left">
              <div className="group relative overflow-hidden rounded-[32px] shadow-[0_20px_60px_rgba(30,64,255,0.12)] transition duration-500 hover:scale-[1.01]">
                <img
                  alt={t("Parceria ActivEU em ação", "ActivEU partnership in action")}
                  className="min-h-[500px] w-full object-cover transition duration-700 group-hover:scale-105"
                  src="/Imagens/parceira.jpg"
                />
                <div className="absolute inset-x-5 bottom-5 rounded-[24px] bg-gradient-to-br from-[#e94e77]/95 to-[#ff5e5b]/95 p-5 text-white shadow-lg backdrop-blur-sm">
                  <p className="text-xs font-semibold uppercase tracking-[0.22em] text-white/75">
                    {t("prova no terreno", "proof on the ground")}
                  </p>
                  <p className="mt-2 text-base leading-7 text-white/95">
                    {t(
                      "A proposta ganha força quando se percebe em contexto real, com pessoas e equipas realmente envolvidas.",
                      "The proposition gets stronger when it can be seen in real context, with people and teams genuinely involved.",
                    )}
                  </p>
                </div>
              </div>
            </SlideIn>

            <SectionReveal className="flex flex-col gap-4">
              {cards.map((card) => (
                <RevealItem key={card.title} variant="pop">
                  <article className={`group relative rounded-[24px] border bg-gradient-to-br to-white p-6 transition hover:-translate-y-0.5 hover:shadow-md ${card.border} ${card.bg}`}>
                    <div className="mb-3 h-1 w-8 rounded-full transition-all duration-500 group-hover:w-14" style={{ background: card.accent }} />
                    <h3 className="text-lg font-semibold tracking-tight text-slate-900">{card.title}</h3>
                    <p className="mt-2 text-sm leading-6 text-slate-500">{card.body}</p>
                  </article>
                </RevealItem>
              ))}
            </SectionReveal>
          </div>
        </div>
      </section>

      <SectionTransition />
    </>
  );
}
