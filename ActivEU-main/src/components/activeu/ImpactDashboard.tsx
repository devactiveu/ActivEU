import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { useLanguage } from "@/contexts/LanguageContext";
import { FadeIn, Reveal3D, SparkCounter, SpotlightCard } from "./motion-primitives";
import { TrendingUp } from "lucide-react";

function RadialProgress({ value, label, color }: { value: number; label: string; color: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.5 });
  const circumference = 2 * Math.PI * 38;
  const offset = circumference - (value / 100) * circumference;

  return (
    <div ref={ref} className="flex flex-col items-center gap-3">
      <div className="relative h-[5.5rem] w-[5.5rem]">
        <svg className="h-full w-full -rotate-90" viewBox="0 0 96 96">
          {/* Track */}
          <circle cx="48" cy="48" r="38" fill="none" stroke="hsl(var(--primary) / 0.06)" strokeWidth="6" />
          {/* Glow track */}
          <circle cx="48" cy="48" r="38" fill="none" stroke={color} strokeWidth="8" strokeOpacity="0.06"
            strokeLinecap="round" strokeDasharray={circumference} strokeDashoffset="0" />
          {/* Progress */}
          <motion.circle
            cx="48" cy="48" r="38" fill="none"
            stroke={color}
            strokeWidth="6"
            strokeLinecap="round"
            strokeDasharray={circumference}
            initial={{ strokeDashoffset: circumference }}
            animate={inView ? { strokeDashoffset: offset } : {}}
            transition={{ duration: 1.6, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
          />
        </svg>
        <span className="absolute inset-0 flex items-center justify-center font-display text-[1.1rem] font-bold" style={{ color }}>
          {value}%
        </span>
      </div>
      <span className="text-center text-[0.68rem] font-bold uppercase tracking-[0.2em] text-foreground/50">{label}</span>
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

const MAP_CONNECTIONS: [number, number][] = [
  [0, 1], [1, 2], [2, 3], [3, 4], [2, 6], [6, 7], [7, 3], [3, 8], [8, 9], [9, 10], [3, 14], [4, 8],
];

function EuropeMap() {
  const activeCountries = EU_COUNTRIES.filter((c) => c.active);

  return (
    <div className="relative mx-auto w-full max-w-[320px]">
      <svg viewBox="60 80 280 230" className="w-full">
        {/* Soft background glow */}
        <ellipse cx="195" cy="205" rx="115" ry="90" fill="hsl(217 90% 60% / 0.03)" />

        {/* Connection lines between active cities */}
        {MAP_CONNECTIONS.map(([a, b], i) => {
          const ca = EU_COUNTRIES[a];
          const cb = EU_COUNTRIES[b];
          if (!ca?.active || !cb?.active) return null;
          return (
            <line
              key={i}
              x1={ca.cx} y1={ca.cy}
              x2={cb.cx} y2={cb.cy}
              stroke="hsl(217 90% 60%)"
              strokeOpacity="0.14"
              strokeWidth="1"
              strokeDasharray="3 4"
            />
          );
        })}

        {/* Pulse rings for active */}
        {activeCountries.map((c) => (
          <circle
            key={`pulse-${c.id}`}
            cx={c.cx} cy={c.cy} r="11"
            fill="hsl(217 90% 60% / 0.07)"
            className="animate-pulse"
          />
        ))}

        {/* Country dots */}
        {EU_COUNTRIES.map((c) => (
          <g key={c.id}>
            {c.active && (
              <circle cx={c.cx} cy={c.cy} r="7" fill="hsl(217 90% 60% / 0.12)" />
            )}
            <circle
              cx={c.cx}
              cy={c.cy}
              r={c.active ? 4.5 : 2.5}
              fill={c.id === "PT" ? "hsl(40 100% 56%)" : c.active ? "hsl(217 90% 60%)" : "hsl(223 16% 75%)"}
              opacity={c.active ? 1 : 0.5}
            />
            {c.active && c.id === "PT" && (
              <circle cx={c.cx} cy={c.cy} r="8" fill="none" stroke="hsl(40 100% 56%)" strokeWidth="1.5" strokeOpacity="0.4" />
            )}
            {c.active && (
              <text
                x={c.cx}
                y={c.cy - 9}
                textAnchor="middle"
                fill={c.id === "PT" ? "hsl(40 100% 46%)" : "hsl(223 71% 28%)"}
                fontSize="6.5"
                fontWeight="800"
                fontFamily="Syne, sans-serif"
                letterSpacing="0.06em"
              >
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
        <Reveal3D>
          <SpotlightCard className="dashboard-panel">
          <div className="relative z-[2]">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-primary/45">{t("Presença europeia", "European presence")}</p>
          <EuropeMap />
          <div className="mt-6 grid grid-cols-3 gap-4">
            <div className="text-center">
              <p className="font-display text-[2rem] leading-none text-primary">
                <SparkCounter end={10} suffix="+" />
              </p>
              <p className="mt-1 text-[0.7rem] font-semibold uppercase tracking-[0.18em] text-foreground/50">
                {t("Países", "Countries")}
              </p>
            </div>
            <div className="text-center">
              <p className="font-display text-[2rem] leading-none text-primary">
                <SparkCounter end={60} suffix="+" />
              </p>
              <p className="mt-1 text-[0.7rem] font-semibold uppercase tracking-[0.18em] text-foreground/50">
                {t("Projetos", "Projects")}
              </p>
            </div>
            <div className="text-center">
              <p className="font-display text-[2rem] leading-none text-primary">
                <SparkCounter end={300} suffix="K+" />
              </p>
              <p className="mt-1 text-[0.7rem] font-semibold uppercase tracking-[0.18em] text-foreground/50">
                {t("Jovens/ano", "Youth/year")}
              </p>
            </div>
          </div>
          </div>
          </SpotlightCard>
        </Reveal3D>

        {/* Right: Radial charts + big number */}
        <div className="grid gap-6">
          <Reveal3D delay={0.1}>
            <SpotlightCard className="dashboard-panel">
              <div className="relative z-[2]">
                <div className="flex items-end gap-4">
                  <div>
                    <p className="text-[0.65rem] font-bold uppercase tracking-[0.24em] text-primary/40 mb-1">
                      {t("Impacto total", "Total impact")}
                    </p>
                    <p className="font-display text-[clamp(3.2rem,6.5vw,5.8rem)] leading-none tracking-[-0.05em] text-gradient-premium">
                      <SparkCounter end={4} suffix="M€+" />
                    </p>
                  </div>
                  <p className="mb-1 max-w-[160px] text-sm leading-6 text-foreground/60 pb-1">
                    {t("Canalizados para causas sociais verificadas", "Directed to verified social causes")}
                  </p>
                </div>
              </div>
            </SpotlightCard>
          </Reveal3D>
          <Reveal3D delay={0.18}>
            <SpotlightCard className="dashboard-panel">
              <div className="relative z-[2]">
                <p className="mb-5 text-xs font-semibold uppercase tracking-[0.22em] text-primary/45">{t("Indicadores de progresso", "Progress indicators")}</p>
                <div className="flex justify-around">
                  <RadialProgress value={92} label={t("Satisfação", "Satisfaction")} color="hsl(217 90% 60%)" />
                  <RadialProgress value={87} label={t("Retenção", "Retention")} color="hsl(40 100% 56%)" />
                  <RadialProgress value={78} label={t("Recomendação", "Recommendation")} color="hsl(17 97% 67%)" />
                </div>
              </div>
            </SpotlightCard>
          </Reveal3D>
        </div>
      </div>
    </section>
  );
}
