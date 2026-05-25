import { motion } from "framer-motion";
import { useLanguage } from "@/contexts/useLanguage";
import { DoodleUnderline } from "@/components/activeu/DoodleSystem";
import { SparkCounter } from "@/components/activeu/motion-primitives";

const footerLinks = {
  platform: [
    { labelPt: "Modelo", labelEn: "Model", id: "model" },
    { labelPt: "Prova", labelEn: "Proof", id: "proof" },
    { labelPt: "Histórias", labelEn: "Stories", id: "stories" },
  ],
  contact: [
    { labelPt: "Falar connosco", labelEn: "Talk to us", href: "mailto:geral@activeu.pt" },
    { labelPt: "Lisboa, Portugal", labelEn: "Lisbon, Portugal", href: null },
  ],
  impact: [
    { labelPt: "Juventude", labelEn: "Youth", id: "hero" },
    { labelPt: "Empresas", labelEn: "Companies", id: "model" },
    { labelPt: "Causas", labelEn: "Causes", id: "model" },
  ],
};

function scrollTo(id: string) {
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
}

export function StatementFooter() {
  const { t } = useLanguage();

  return (
    <footer className="relative overflow-hidden border-t border-[rgba(88,118,255,0.12)] bg-[#050919] px-4 pb-8 pt-16 md:px-6">
      <motion.div
        className="pointer-events-none absolute inset-x-0 top-0 h-px"
        style={{ background: "linear-gradient(90deg, transparent, rgba(88,118,255,0.5), rgba(233,78,119,0.4), transparent)" }}
        animate={{ backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"] }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="mx-auto max-w-6xl">
        <div className="mb-12">
          <h2
            className="max-w-3xl font-display font-semibold leading-[0.95] tracking-[-0.04em] text-white"
            style={{ fontSize: "clamp(2rem, 4vw, 3.5rem)" }}
          >
            {t("Ligamos ", "We connect ")}<span className="relative inline-block text-[#5876ff]">
              {t("juventude", "youth")}
              <DoodleUnderline className="absolute -bottom-1 left-0 w-full" color="#5876ff" />
            </span>
            {t(", empresas e ", ", companies and ")}<span className="relative inline-block text-[#e94e77]">
              {t("causas", "causes")}
              <DoodleUnderline className="absolute -bottom-1 left-0 w-full" color="#e94e77" />
            </span>
            {t(" que importam.", " that matter.")}
          </h2>
        </div>

        <div className="mb-12 grid gap-8 border-t border-[rgba(88,118,255,0.12)] pt-10 sm:grid-cols-3">
          <div>
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-[rgba(240,244,255,0.4)]">
              {t("Plataforma", "Platform")}
            </p>
            <ul className="space-y-3">
              {footerLinks.platform.map((link) => (
                <li key={link.labelPt}>
                  <button
                    type="button"
                    onClick={() => scrollTo(link.id)}
                    className="text-sm text-[rgba(240,244,255,0.65)] transition hover:text-white"
                  >
                    {t(link.labelPt, link.labelEn)}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-[rgba(240,244,255,0.4)]">
              {t("Contacto", "Contact")}
            </p>
            <ul className="space-y-3">
              {footerLinks.contact.map((link) => (
                <li key={link.labelPt}>
                  {link.href ? (
                    <a href={link.href} className="text-sm text-[rgba(240,244,255,0.65)] transition hover:text-white">
                      {t(link.labelPt, link.labelEn)}
                    </a>
                  ) : (
                    <span className="text-sm text-[rgba(240,244,255,0.4)]">
                      {t(link.labelPt, link.labelEn)}
                    </span>
                  )}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-[rgba(240,244,255,0.4)]">
              {t("Impacto", "Impact")}
            </p>
            <div className="flex items-center gap-3">
              <div className="flex -space-x-2">
                {[0, 1, 2].map((i) => (
                  <div
                    key={i}
                    className="h-8 w-8 rounded-full border-2 border-[#050919] bg-gradient-to-br from-[#5876ff] to-[#e94e77]"
                    style={{ opacity: 1 - i * 0.15 }}
                  />
                ))}
              </div>
              <p className="text-sm text-[rgba(240,244,255,0.65)]">
                <span className="font-bold text-white">
                  <SparkCounter end={50} suffix="+" />
                </span>{" "}
                {t("jovens", "young people")}
              </p>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-2 border-t border-[rgba(88,118,255,0.12)] pt-6 text-xs text-[rgba(240,244,255,0.3)] sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} ActivEU</p>
          <p>{t("Todos os direitos reservados.", "All rights reserved.")}</p>
        </div>
      </div>
    </footer>
  );
}
