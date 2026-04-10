import { useRef } from "react";
import { motion, useInView, animate, useMotionValue, useTransform } from "framer-motion";
import { useLanguage } from "@/contexts/LanguageContext";
import { FadeIn, Reveal3D } from "./motion-primitives";
import { TrendingUp } from "lucide-react";

function AnimatedCounter({ end, suffix = "", duration = 2 }: { end: number; suffix?: string; duration?: number }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.5 });
  const motionVal = useMotionValue(0);
  const rounded = useTransform(motionVal, (v) => Math.round(v));

  if (inView) {
    animate(motionVal, end, { duration, ease: [0.16, 1, 0.3, 1] });
  }

  return (
    <span ref={ref}>
      <motion.span>{rounded}</motion.span>
      {suffix}
    </span>
  );
}

function RadialProgress({ value, label, color }: { value: number; label: string; color: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.5 });
  const circumference = 2 * Math.PI * 40;
  const offset = circumference - (value / 100) * circumference;

  return (
    <div ref={ref} className="flex flex-col items-center gap-3">
      <div className="relative h-24 w-24">
        <svg className="h-full w-full -rotate-90" viewBox="0 0 96 96">
          <circle cx="48" cy="48" r="40" fill="none" stroke="hsl(var(--primary) / 0.08)" strokeWidth="5" />
          <motion.circle
            cx="48" cy="48" r="40" fill="none"
            stroke={color}
            strokeWidth="5"
            strokeLinecap="round"
            strokeDasharray={circumference}
            initial={{ strokeDashoffset: circumference }}
            animate={inView ? { strokeDashoffset: offset } : {}}
            transition={{ duration: 1.5, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          />
        </svg>
        <span className="absolute inset-0 flex items-center justify-center font-display text-lg text-primary">
          {value}%
        </span>
      </div>
      <span className="text-center text-xs font-semibold uppercase tracking-[0.18em] text-foreground/55">{label}</span>
    </div>
  );
}

const EU_COUNTRIES = [
  { id: "PT", cx: 90, cy: 285, active: true },
  { id: "ES", cx: 115, cy: 270, active: true },
  { id: "FR", cx: 165, cy: 225, active: true },
  { id: "DE", cx: 210, cy: 190, active: true },
  { id: "IT", cx: 215, cy: 255, active: true },
  { id: "UK", cx: 150, cy: 175, active: false },
  { id: "NL", cx: 185, cy: 175, active: true },
  { id: "BE", cx: 175, cy: 190, active: true },
  { id: "AT", cx: 230, cy: 210, active: true },
  { id: "PL", cx: 260, cy: 185, active: true },
  { id: "SE", cx: 235, cy: 120, active: true },
  { id: "DK", cx: 210, cy: 155, active: false },
  { id: "FI", cx: 280, cy: 105, active: false },
  { id: "IE", cx: 125, cy: 175, active: false },
  { id: "CZ", cx: 240, cy: 200, active: true },
  { id: "GR", cx: 275, cy: 275, active: false },
  { id: "RO", cx: 290, cy: 230, active: false },
  { id: "HU", cx: 260, cy: 215, active: true },
];

function EuropeMap() {
  return (
    <div className="relative mx-auto w-full max-w-[320px]">
      <svg viewBox="60 80 280 230" className="w-full">
        {/* Background shape hint */}
        <ellipse cx="200" cy="200" rx="130" ry="100" fill="hsl(217 90% 60% / 0.04)" stroke="none" />
        {EU_COUNTRIES.map((c) => (
          <g key={c.id}>
            {c.active && (
              <circle cx={c.cx} cy={c.cy} r="12" fill="hsl(217 90% 60% / 0.08)" className="animate-pulse" />
            )}
            <circle
              cx={c.cx}
              cy={c.cy}
              r={c.active ? 5 : 3}
              fill={c.active ? "hsl(217 90% 60%)" : "hsl(223 16% 70%)"}
              className={c.active ? "drop-shadow-[0_0_6px_hsl(217_90%_60%/0.5)]" : ""}
            />
            {c.active && (
              <text x={c.cx} y={c.cy - 10} textAnchor="middle" fill="hsl(223 71% 23%)" fontSize="7" fontWeight="700" fontFamily="Syne">
                {c.id}
              </text>
            )}
          </g>
        ))}
      </svg>
    </div>
  );
}

export function ImpactDashboard() {
  const { t } = useLanguage();

  return (
    <section className="section-shell py-24">
      <FadeIn className="mx-auto max-w-3xl text-center">
        <div className="eyebrow mx-auto w-fit">
          <TrendingUp size={14} />
          {t("Impacto real", "Real impact")}
        </div>
        <h2 className="mt-5 font-display text-[clamp(2.6rem,5vw,5rem)] leading-[0.95] tracking-[-0.05em] text-primary">
          {t("Números que contam a história.", "Numbers that tell the story.")}
        </h2>
      </FadeIn>

      <div className="mt-14 grid gap-6 lg:grid-cols-[1fr_1.2fr]">
        {/* Left: Map + stats */}
        <Reveal3D className="dashboard-panel">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-primary/45">{t("Presença europeia", "European presence")}</p>
          <EuropeMap />
          <div className="mt-6 grid grid-cols-3 gap-4">
            <div className="text-center">
              <p className="font-display text-[2rem] leading-none text-primary">
                <AnimatedCounter end={10} suffix="+" />
              </p>
              <p className="mt-1 text-[0.7rem] font-semibold uppercase tracking-[0.18em] text-foreground/50">
                {t("Países", "Countries")}
              </p>
            </div>
            <div className="text-center">
              <p className="font-display text-[2rem] leading-none text-primary">
                <AnimatedCounter end={60} suffix="+" />
              </p>
              <p className="mt-1 text-[0.7rem] font-semibold uppercase tracking-[0.18em] text-foreground/50">
                {t("Projetos", "Projects")}
              </p>
            </div>
            <div className="text-center">
              <p className="font-display text-[2rem] leading-none text-primary">
                <AnimatedCounter end={300} suffix="K+" />
              </p>
              <p className="mt-1 text-[0.7rem] font-semibold uppercase tracking-[0.18em] text-foreground/50">
                {t("Jovens/ano", "Youth/year")}
              </p>
            </div>
          </div>
        </Reveal3D>

        {/* Right: Radial charts + big number */}
        <div className="grid gap-6">
          <Reveal3D delay={0.1} className="dashboard-panel">
            <div className="flex items-center gap-3">
              <p className="font-display text-[clamp(3rem,6vw,5.5rem)] leading-none tracking-[-0.04em] text-gradient-premium">
                <AnimatedCounter end={4} suffix="M€+" />
              </p>
              <p className="max-w-[180px] text-sm leading-6 text-foreground/65">
                {t("Canalizados para causas sociais verificadas", "Directed to verified social causes")}
              </p>
            </div>
          </Reveal3D>
          <Reveal3D delay={0.18} className="dashboard-panel">
            <p className="mb-5 text-xs font-semibold uppercase tracking-[0.22em] text-primary/45">{t("Indicadores de progresso", "Progress indicators")}</p>
            <div className="flex justify-around">
              <RadialProgress value={92} label={t("Satisfação", "Satisfaction")} color="hsl(217 90% 60%)" />
              <RadialProgress value={87} label={t("Retenção", "Retention")} color="hsl(40 100% 56%)" />
              <RadialProgress value={78} label={t("Recomendação", "Recommendation")} color="hsl(17 97% 67%)" />
            </div>
          </Reveal3D>
        </div>
      </div>
    </section>
  );
}
