import { useRef } from "react";
import { motion, useInView, useReducedMotion } from "framer-motion";
import { ClipboardCheck, Cpu, CalendarHeart, Award, BarChart3 } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { FadeIn } from "./motion-primitives";

type Step = {
  icon: LucideIcon;
  ptTitle: string;
  enTitle: string;
  ptBody: string;
  enBody: string;
  accent: string;
};

const steps: Step[] = [
  {
    icon: ClipboardCheck,
    accent: "#ffb007",
    ptTitle: "Candidatura e validação",
    enTitle: "Application and validation",
    ptBody: "Jovens, empresas e causas registam-se na plataforma. Cada perfil é validado para garantir transparência e seriedade desde o primeiro momento.",
    enBody: "Young people, companies and causes register on the platform. Each profile is validated to ensure transparency and trust from the first moment.",
  },
  {
    icon: Cpu,
    accent: "#60a5fa",
    ptTitle: "Matching meritocrático",
    enTitle: "Merit-based matching",
    ptBody: "O algoritmo liga jovens a empresas com base em competências e interesses, sem enviesamentos visuais. Sem foto, sem nome, sem idade.",
    enBody: "The algorithm connects young people to companies based on skills and interests, without visual bias. No photo, no name, no age.",
  },
  {
    icon: CalendarHeart,
    accent: "#f97316",
    ptTitle: "Dia de Experiência",
    enTitle: "Experience Day",
    ptBody: "Um dia real num contexto profissional. Juventude, empresas e causas encontram-se num momento de valor partilhado e impacto concreto.",
    enBody: "A real day in a professional setting. Youth, companies and causes meet in a moment of shared value and concrete impact.",
  },
  {
    icon: Award,
    accent: "#a78bfa",
    ptTitle: "Certificação e feedback",
    enTitle: "Certification and feedback",
    ptBody: "Cada participação gera certificação, avaliação mútua e uma história concreta de evolução pessoal e profissional.",
    enBody: "Each participation generates certification, mutual evaluation and a concrete story of personal and professional growth.",
  },
  {
    icon: BarChart3,
    accent: "#34d399",
    ptTitle: "Relatório de impacto",
    enTitle: "Impact report",
    ptBody: "Dados reais de impacto social, económico e humano são partilhados com todos os envolvidos, garantindo total transparência.",
    enBody: "Real social, economic and human impact data is shared with all stakeholders, ensuring full transparency.",
  },
];

function StepCard({ step, index }: { step: Step; index: number }) {
  const { t } = useLanguage();
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.3 });
  const reduce = useReducedMotion();
  const Icon = step.icon;
  const isLeft = index % 2 === 0;

  return (
    <div className="relative lg:grid lg:grid-cols-[1fr_80px_1fr] lg:items-center">
      {/* Timeline dot — centered */}
      <div className="hidden lg:col-start-2 lg:row-start-1 lg:flex lg:justify-center">
        <motion.div
          className="timeline-dot-premium"
          style={{ "--dot-accent": step.accent } as React.CSSProperties}
          initial={reduce ? false : { scale: 0, opacity: 0 }}
          animate={inView ? { scale: 1, opacity: 1 } : {}}
          transition={{ duration: 0.5, delay: index * 0.1 + 0.2, ease: [0.16, 1, 0.3, 1] }}
        >
          <span className="font-display text-sm font-bold" style={{ color: step.accent }}>{index + 1}</span>
          <motion.div
            className="timeline-dot-ring"
            style={{ "--dot-accent": step.accent } as React.CSSProperties}
            initial={reduce ? false : { scale: 0.6, opacity: 0 }}
            animate={inView ? { scale: 1, opacity: 1 } : {}}
            transition={{ duration: 0.8, delay: index * 0.1 + 0.35, ease: "easeOut" }}
          />
        </motion.div>
      </div>

      {/* Card */}
      <motion.div
        ref={ref}
        className={`timeline-step-card group ${isLeft ? "lg:col-start-1 lg:row-start-1" : "lg:col-start-3 lg:row-start-1"}`}
        initial={reduce ? false : { opacity: 0, x: isLeft ? -50 : 50, y: 20 }}
        animate={inView ? { opacity: 1, x: 0, y: 0 } : {}}
        transition={{ duration: 0.7, delay: index * 0.08, ease: [0.16, 1, 0.3, 1] }}
      >
        <div
          className="timeline-step-card-accent"
          style={{ background: `linear-gradient(90deg, ${step.accent}28, transparent)` }}
        />
        <div className={`flex items-start gap-4 ${isLeft ? "lg:flex-row-reverse lg:text-right" : ""}`}>
          <div
            className="timeline-step-icon shrink-0"
            style={{
              background: `linear-gradient(145deg, ${step.accent}18, ${step.accent}08)`,
              boxShadow: `0 0 0 2px ${step.accent}22, 0 4px 12px ${step.accent}14`,
            }}
          >
            <Icon size={18} style={{ color: step.accent }} />
          </div>
          <div>
            <span className="text-[10px] font-bold uppercase tracking-[0.26em] text-primary/40">
              {t("passo", "step")} {index + 1}
            </span>
            <h3 className="mt-1.5 font-display text-[1.45rem] leading-[0.97] tracking-[-0.04em] text-primary">
              {t(step.ptTitle, step.enTitle)}
            </h3>
            <p className="mt-3 text-sm leading-[1.75] text-foreground/65">
              {t(step.ptBody, step.enBody)}
            </p>
          </div>
        </div>
      </motion.div>

      {/* Empty grid cell */}
      {isLeft
        ? <div className="hidden lg:col-start-3 lg:row-start-1 lg:block" />
        : <div className="hidden lg:col-start-1 lg:row-start-1 lg:block" />
      }
    </div>
  );
}

export function ProcessTimeline() {
  const { t } = useLanguage();

  return (
    <section className="section-shell py-28">
      <FadeIn className="mx-auto max-w-3xl text-center">
        <div className="eyebrow mx-auto w-fit">
          <Cpu size={13} />
          {t("Como funciona", "How it works")}
        </div>
        <h2 className="mt-5 font-display text-[clamp(2.6rem,5vw,5rem)] leading-[0.93] tracking-[-0.055em] text-primary">
          {t("Do registo ao relatório de impacto.", "From registration to impact report.")}
        </h2>
        <p className="mt-5 text-lg leading-8 text-foreground/62">
          {t(
            "Cinco passos claros que transformam um dia de trabalho num gesto de solidariedade com mérito e prova real.",
            "Five clear steps that turn a working day into an act of solidarity with merit and real proof.",
          )}
        </p>
      </FadeIn>

      <div className="relative mt-20">
        {/* Animated vertical line */}
        <AnimatedTimelineLine count={steps.length} />

        <div className="space-y-6 lg:space-y-0">
          {steps.map((step, i) => (
            <StepCard key={step.enTitle} step={step} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

function AnimatedTimelineLine({ count }: { count: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.1 });
  const reduce = useReducedMotion();

  return (
    <div
      ref={ref}
      className="absolute left-1/2 top-0 hidden -translate-x-1/2 lg:block"
      style={{ bottom: 0, width: "1px" }}
      aria-hidden="true"
    >
      {/* Static faint line */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/10 to-transparent" />
      {/* Animated fill line */}
      <motion.div
        className="absolute left-0 right-0 top-0 origin-top"
        style={{
          background: "linear-gradient(180deg, hsl(40 100% 56% / 0.6), hsl(217 90% 60% / 0.5), hsl(223 71% 23% / 0.3))",
          height: `${count * 20}%`,
        }}
        initial={reduce ? false : { scaleY: 0 }}
        animate={inView ? { scaleY: 1 } : {}}
        transition={{ duration: 2.5, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
      />
    </div>
  );
}
