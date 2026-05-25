import { lazy, Suspense, useEffect, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { ArrowRight, ChevronRight, Menu, Moon, Sun, X } from "lucide-react";
import { useLanguage } from "@/contexts/useLanguage";
import { ScrollProgress } from "@/components/activeu/motion-primitives";
import { useTheme } from "@/contexts/ThemeContext";
import { useActiveSection } from "@/contexts/ActiveSectionContext";
import { HeroSection } from "@/components/activeu/sections/HeroSection";
import { ModelSection } from "@/components/activeu/sections/ModelSection";
import { SectionNarrator } from "@/components/premium/SectionNarrator";
import { StatementFooter } from "@/components/premium/StatementFooter";

const ProofSection = lazy(() => import("@/components/activeu/sections/ProofSection").then((m) => ({ default: m.ProofSection })));
const StoriesSection = lazy(() => import("@/components/activeu/sections/StoriesSection").then((m) => ({ default: m.StoriesSection })));
const ContactSection = lazy(() => import("@/components/activeu/sections/ContactSection").then((m) => ({ default: m.ContactSection })));

export default function Index() {
  const { lang, setLang, t } = useLanguage();
  const { theme, toggle: toggleTheme } = useTheme();
  const { activeSection, setActiveSection } = useActiveSection();
  const [menuOpen, setMenuOpen] = useState(false);
  const reduceMotion = useReducedMotion();

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  useEffect(() => {
    const ids = ["hero", "model", "proof", "stories", "contact"];
    const sections = ids
      .map((id) => document.getElementById(id))
      .filter((s): s is HTMLElement => Boolean(s));

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);
        if (visible[0]?.target.id) setActiveSection(visible[0].target.id);
      },
      { rootMargin: "-28% 0px -45% 0px", threshold: [0.2, 0.4, 0.6] },
    );

    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  const scrollToId = (id: string) => {
    setMenuOpen(false);
    const element = document.getElementById(id);
    if (!element) return;
    element.scrollIntoView({ behavior: reduceMotion ? "auto" : "smooth", block: "start" });
  };

  const navItems = [
    { id: "hero", label: t("Início", "Home") },
    { id: "model", label: t("Modelo", "Model") },
    { id: "proof", label: t("Prova", "Proof") },
    { id: "stories", label: t("Histórias", "Stories") },
    { id: "contact", label: t("Contacto", "Contact") },
  ];

  return (
    <>
      <ScrollProgress />

      <div className="min-h-screen overflow-x-hidden bg-[var(--bg-base)] text-[var(--text-primary)]">
        <header className="fixed inset-x-0 top-0 z-50 px-4 py-4">
          <div className="mx-auto flex max-w-6xl items-center justify-between rounded-full border border-white/70 bg-white/85 px-4 py-3 shadow-[0_20px_60px_rgba(15,23,42,0.08)] backdrop-blur md:px-6 [data-theme=dark]_&:border-[rgba(88,118,255,0.22)] [data-theme=dark]_&:bg-[rgba(12,18,40,0.85)]">
            <button className="flex items-center gap-3 text-left" onClick={() => scrollToId("hero")} type="button">
              <img alt="ActivEU" className="h-10 w-10 rounded-2xl object-cover" src="/Imagens/icon.png" />
              <div>
                <p className="text-sm font-semibold tracking-[0.24em] text-slate-500">ACTIVEU</p>
                <p className="text-sm text-slate-600">{t("Juventude, empresas e causas", "Youth, companies and causes")}</p>
              </div>
            </button>

            <nav className="hidden items-center gap-2 lg:flex">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  className={`nav-pill ${activeSection === item.id ? "nav-pill-active" : ""}`}
                  onClick={() => scrollToId(item.id)}
                  type="button"
                >
                  {item.label}
                </button>
              ))}
            </nav>

            <div className="hidden items-center gap-2 md:flex">
              <button
                aria-label={t("Alternar tema", "Toggle theme")}
                className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-slate-200 bg-slate-50 text-slate-600 transition hover:bg-slate-100"
                onClick={toggleTheme}
                type="button"
              >
                {theme === "dark" ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
              </button>
              <div className="rounded-full border border-slate-200 bg-slate-50 p-1">
                {(["pt", "en"] as const).map((code) => (
                  <button
                    key={code}
                    className={`rounded-full px-3 py-1.5 text-sm font-medium transition ${
                      lang === code ? "bg-slate-950 text-white" : "text-slate-500 hover:text-slate-950"
                    }`}
                    onClick={() => setLang(code)}
                    type="button"
                  >
                    {code.toUpperCase()}
                  </button>
                ))}
              </div>
              <a
                href="#contact"
                onClick={(e) => { e.preventDefault(); scrollToId("contact"); }}
                className="pop-cta px-5 py-3 text-sm"
              >
                {t("Falar com a ActivEU", "Talk to ActivEU")}
                <ArrowRight className="h-4 w-4" />
              </a>
            </div>

            <button
              aria-label={t("Abrir menu", "Open menu")}
              className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-950 md:hidden"
              onClick={() => setMenuOpen((v) => !v)}
              type="button"
            >
              {menuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </header>

        <AnimatePresence>
          {menuOpen && (
            <motion.div
              className="fixed inset-0 z-40 bg-slate-950/40 px-4 pb-6 pt-24 md:hidden"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <motion.div
                className="mx-auto max-w-md rounded-[32px] bg-white p-6 shadow-[0_40px_100px_rgba(15,23,42,0.2)]"
                initial={{ y: 16, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: 16, opacity: 0 }}
                transition={{ duration: 0.24 }}
              >
                <div className="space-y-2">
                  {navItems.map((item) => (
                    <button
                      key={item.id}
                      className={`flex w-full items-center justify-between rounded-2xl px-4 py-3 text-left text-base font-medium ${
                        activeSection === item.id ? "bg-slate-950 text-white" : "bg-slate-50 text-slate-800"
                      }`}
                      onClick={() => scrollToId(item.id)}
                      type="button"
                    >
                      {item.label}
                      <ChevronRight className={`h-4 w-4 ${activeSection === item.id ? "text-white/70" : "text-slate-400"}`} />
                    </button>
                  ))}
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

        <SectionNarrator sections={navItems} activeSection={activeSection} />

        <main className="overflow-hidden">
          <HeroSection scrollToId={scrollToId} />
          <ModelSection />
          <Suspense fallback={null}>
            <ProofSection />
            <StoriesSection />
            <ContactSection scrollToId={scrollToId} />
          </Suspense>
        </main>

        <StatementFooter />
      </div>
    </>
  );
}
