import { useLanguage } from "@/contexts/LanguageContext";
import { FadeIn } from "./motion-primitives";

const partners = [
  "SAME Network",
  "Comissão Europeia",
  "Erasmus+",
  "IPDJ",
  "Fundação Calouste Gulbenkian",
  "Câmara de Lisboa",
  "Universidade Nova",
  "ISCTE",
  "Deloitte Portugal",
  "EDP Solidária",
  "Fundação La Caixa",
  "Youth Forum",
];

export function PartnerLogos() {
  const { t } = useLanguage();

  return (
    <section className="section-shell py-16">
      <FadeIn className="text-center">
        <p className="text-xs font-semibold uppercase tracking-[0.24em] text-primary/42">
          {t("Parceiros e apoios institucionais", "Institutional partners and supporters")}
        </p>
      </FadeIn>
      <div className="partner-marquee-shell mt-8">
        <div className="partner-marquee-fade partner-marquee-fade-left" />
        <div className="partner-marquee-fade partner-marquee-fade-right" />
        <div className="partner-marquee-viewport">
          <div className="partner-marquee-inner">
            {[...partners, ...partners].map((name, i) => (
              <div key={`${name}-${i}`} className="partner-logo-pill">
                <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary/8">
                  <span className="font-display text-xs font-bold text-primary/60">{name.charAt(0)}</span>
                </div>
                <span className="text-sm font-medium text-foreground/55">{name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
