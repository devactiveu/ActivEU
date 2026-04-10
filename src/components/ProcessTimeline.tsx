import { ClipboardCheck, Cpu, CalendarHeart, Award, BarChart3 } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { SlideIn, FadeIn } from "./motion-primitives";

type Step = {
  icon: LucideIcon;
  ptTitle: string;
  enTitle: string;
  ptBody: string;
  enBody: string;
};

const steps: Step[] = [
  { icon: ClipboardCheck, ptTitle: "Candidatura e validação", enTitle: "Application and validation", ptBody: "Jovens, empresas e causas registam-se na plataforma. Cada perfil é validado para garantir transparência e seriedade desde o primeiro momento.", enBody: "Young people, companies and causes register on the platform. Each profile is validated to ensure transparency and trust from the first moment." },
  { icon: Cpu, ptTitle: "Matching meritocrático", enTitle: "Merit-based matching", ptBody: "O algoritmo liga jovens a empresas com base em competências e interesses, sem enviesamentos visuais. Sem foto, sem nome, sem idade.", enBody: "The algorithm connects young people to companies based on skills and interests, without visual bias. No photo, no name, no age." },
  { icon: CalendarHeart, ptTitle: "Dia de Experiência", enTitle: "Experience Day", ptBody: "Um dia real num contexto profissional. Juventude, empresas e causas encontram-se num momento de valor partilhado e impacto concreto.", enBody: "A real day in a professional setting. Youth, companies and causes meet in a moment of shared value and concrete impact." },
  { icon: Award, ptTitle: "Certificação e feedback", enTitle: "Certification and feedback", ptBody: "Cada participação gera certificação, avaliação mútua e uma história concreta de evolução pessoal e profissional.", enBody: "Each participation generates certification, mutual evaluation and a concrete story of personal and professional growth." },
  { icon: BarChart3, ptTitle: "Relatório de impacto", enTitle: "Impact report", ptBody: "Dados reais de impacto social, económico e humano são partilhados com todos os envolvidos, garantindo total transparência.", enBody: "Real social, economic and human impact data is shared with all stakeholders, ensuring full transparency." },
];

export function ProcessTimeline() {
  const { t } = useLanguage();

  return (
    <section className="section-shell py-24">
      <FadeIn className="mx-auto max-w-3xl text-center">
        <div className="eyebrow mx-auto w-fit">
          <Cpu size={14} />
          {t("Como funciona", "How it works")}
        </div>
        <h2 className="mt-5 font-display text-[clamp(2.6rem,5vw,5rem)] leading-[0.95] tracking-[-0.05em] text-primary">
          {t("Do registo ao relatório de impacto.", "From registration to impact report.")}
        </h2>
        <p className="mt-5 text-lg leading-8 text-foreground/72">
          {t("Cinco passos claros que transformam um dia de trabalho num gesto de solidariedade com mérito e prova real.", "Five clear steps that turn a working day into an act of solidarity with merit and real proof.")}
        </p>
      </FadeIn>

      <div className="relative mt-16">
        {/* Vertical line */}
        <div className="absolute left-1/2 top-0 bottom-0 hidden w-px -translate-x-1/2 bg-gradient-to-b from-transparent via-primary/15 to-transparent lg:block" aria-hidden="true" />

        <div className="space-y-8 lg:space-y-0">
          {steps.map((step, i) => {
            const Icon = step.icon;
            const isLeft = i % 2 === 0;
            return (
              <div key={step.enTitle} className="relative lg:grid lg:grid-cols-[1fr_80px_1fr] lg:items-center lg:gap-0">
                {/* Timeline dot */}
                <div className="absolute left-1/2 hidden -translate-x-1/2 lg:col-start-2 lg:row-start-1 lg:static lg:flex lg:translate-x-0 lg:justify-center" aria-hidden="true">
                  <div className="timeline-step-dot">
                    <span className="font-display text-lg">{i + 1}</span>
                  </div>
                </div>

                {/* Card - alternating sides */}
                <SlideIn
                  direction={isLeft ? "left" : "right"}
                  delay={i * 0.08}
                  className={`timeline-step-card ${isLeft ? "lg:col-start-1 lg:row-start-1" : "lg:col-start-3 lg:row-start-1"}`}
                >
                  <div className={`flex items-start gap-4 ${isLeft ? "lg:flex-row-reverse lg:text-right" : ""}`}>
                    <div className="icon-badge shrink-0">
                      <Icon size={18} />
                    </div>
                    <div>
                      <span className="text-[11px] font-semibold uppercase tracking-[0.22em] text-primary/45">
                        {t("passo", "step")} {i + 1}
                      </span>
                      <h3 className="mt-2 font-display text-[1.5rem] leading-[0.96] tracking-[-0.04em] text-primary">
                        {t(step.ptTitle, step.enTitle)}
                      </h3>
                      <p className="mt-3 text-sm leading-7 text-foreground/72">
                        {t(step.ptBody, step.enBody)}
                      </p>
                    </div>
                  </div>
                </SlideIn>

                {/* Empty cell for grid alignment */}
                {isLeft ? <div className="hidden lg:col-start-3 lg:row-start-1 lg:block" /> : <div className="hidden lg:col-start-1 lg:row-start-1 lg:block" />}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
