import { lazy, Suspense, useRef, useState, useEffect, type ReactNode } from "react";
import {
  ArrowRight,
  BadgeCheck,
  Building2,
  ChevronRight,
  Globe2,
  HeartHandshake,
  Landmark,
  Menu,
  ShieldCheck,
  Sparkles,
  Users2,
  X,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { motion, useReducedMotion, useScroll, useTransform, useMotionValueEvent } from "framer-motion";
import { useLanguage } from "@/contexts/LanguageContext";
import { AnimatedMetric } from "@/components/activeu/AnimatedMetric";
import { HeroKineticStrip } from "@/components/activeu/HeroKineticStrip";
import { FadeIn, RevealItem, SectionReveal, TextRevealLine, Magnetic, Reveal3D } from "@/components/activeu/motion-primitives";
import { ValueMarquee } from "@/components/activeu/ValueMarquee";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { ProcessTimeline } from "@/components/activeu/ProcessTimeline";
import { ImpactDashboard } from "@/components/activeu/ImpactDashboard";
import { TestimonialCarousel } from "@/components/activeu/TestimonialCarousel";
import { PartnerLogos } from "@/components/activeu/PartnerLogos";

const Hero3DCanvas = lazy(() => import("@/components/activeu/Hero3DCanvas"));

const navItems = [
  { id: "hero", pt: "Início", en: "Home" },
  { id: "model", pt: "Modelo", en: "Model" },
  { id: "process", pt: "Processo", en: "Process" },
  { id: "impact", pt: "Impacto", en: "Impact" },
  { id: "projects", pt: "Projetos", en: "Projects" },
  { id: "join", pt: "Participar", en: "Join" },
];

const heroHighlights: { icon: LucideIcon; ptTitle: string; enTitle: string; ptBody: string; enBody: string }[] = [
  { icon: Users2, ptTitle: "Experiência que conta", enTitle: "Experience that counts", ptBody: "Um dia real em contexto profissional, novas competências e uma relação mais confiante com o futuro.", enBody: "A real day in a professional setting, new skills and a more confident relationship with the future." },
  { icon: Building2, ptTitle: "Empresas com propósito", enTitle: "Purpose-driven companies", ptBody: "As organizações acolhem talento jovem e transformam responsabilidade social em ação concreta e visível.", enBody: "Organizations welcome young talent and turn social responsibility into visible, concrete action." },
  { icon: HeartHandshake, ptTitle: "Causas com prova real", enTitle: "Causes with real proof", ptBody: "O valor gerado chega a causas verificadas com transparência, confiança e continuidade.", enBody: "The value created reaches verified causes with transparency, trust and continuity." },
];

const proofPillars = [
  { icon: Globe2, ptLabel: "escala", enLabel: "scale", ptTitle: "Portugal com visão europeia desde o primeiro dia.", enTitle: "Portugal with European vision from day one.", ptBody: "A ActivEU deve parecer parte de um movimento maior, com ambição internacional e capacidade local de execução.", enBody: "ActivEU should feel part of something larger, with international ambition and local delivery capacity." },
  { icon: BadgeCheck, ptLabel: "prova", enLabel: "proof", ptTitle: "A confiança cresce quando o impacto parece concreto.", enTitle: "Trust grows when impact feels concrete.", ptBody: "Fotografia real, linguagem clara e sinais visíveis de credibilidade tornam o projeto mais convincente para jovens e parceiros.", enBody: "Real photography, clear language and visible credibility signals make the project more convincing for young people and partners." },
  { icon: ShieldCheck, ptLabel: "credibilidade", enLabel: "credibility", ptTitle: "Bonito, sim. Mas também sério e institucional.", enTitle: "Beautiful, yes. But also serious and institutional.", ptBody: "O objetivo é parecer pronto para escolas, municípios, marcas e organizações com padrões altos.", enBody: "The goal is to feel ready for schools, municipalities, brands and organizations with high standards." },
];

const architectureCards = [
  { icon: ShieldCheck, ptKicker: "justiça", enKicker: "fairness", ptTitle: "Sem enviesamentos visuais", enTitle: "No visual bias", ptBody: "Sem foto, sem nome e sem idade. A compatibilidade é construída a partir do que realmente importa.", enBody: "No photo, no name and no age. Compatibility is built around what actually matters.", dark: false },
  { icon: BadgeCheck, ptKicker: "prova", enKicker: "proof", ptTitle: "Certificação e evidência real", enTitle: "Certification and real evidence", ptBody: "Cada participação gera certificação, avaliação mútua e uma história concreta de evolução.", enBody: "Each participation generates certification, mutual evaluation and a concrete story of growth.", dark: false },
  { icon: Globe2, ptKicker: "escala", enKicker: "scale", ptTitle: "Portugal com ambição europeia", enTitle: "Portugal with European ambition", ptBody: "O modelo nasce da rede SAME e adapta-se ao contexto português com mais clareza e ambição social.", enBody: "The model comes from the SAME network and adapts to Portugal with more clarity and social ambition.", dark: true },
];

const projects = [
  { image: "/Imagens/solidarityactionday.jpg", ptLabel: "piloto", enLabel: "pilot", ptTitle: "Solidarity Action Day — Piloto Portugal", enTitle: "Solidarity Action Day — Portugal Pilot", ptBody: "A primeira edição portuguesa provou que juventude, empresas e causas podem mover-se juntas com significado.", enBody: "The first Portuguese edition proved youth, companies and causes can move together with meaning." },
  { image: "/Imagens/plataformadigital.jpg", ptLabel: "produto", enLabel: "product", ptTitle: "ActivEU Connect — Plataforma Digital", enTitle: "ActivEU Connect — Digital Platform", ptBody: "Matching, certificação, dados e transparência numa experiência mais contemporânea para todos.", enBody: "Matching, certification, data and transparency in a more contemporary experience for everyone." },
  { image: "/Imagens/encontrosintergeracionais.jpg", ptLabel: "comunidade", enLabel: "community", ptTitle: "Projetos que ligam gerações", enTitle: "Projects that connect generations", ptBody: "Iniciativas comunitárias que criam empatia, pertença e valor humano duradouro.", enBody: "Community initiatives that create empathy, belonging and durable human value." },
];

function SectionIntro({ eyebrow, title, body, invert = false }: { eyebrow: ReactNode; title: string; body?: string; invert?: boolean }) {
  return (
    <div>
      <div className={`eyebrow ${invert ? "border-white/15 bg-white/8 text-white/80" : ""}`}>{eyebrow}</div>
      <h2 className={`mt-5 font-display text-[clamp(2.6rem,5vw,5rem)] leading-[0.95] tracking-[-0.05em] ${invert ? "text-white" : "text-primary"}`}>{title}</h2>
      {body ? <p className={`mt-5 max-w-2xl text-lg leading-8 ${invert ? "text-white/74" : "text-foreground/72"}`}>{body}</p> : null}
    </div>
  );
}

function HeroVisual({ t, reduceMotion }: { t: (pt: string, en: string) => string; reduceMotion: boolean }) {
  return (
    <div className="hero-visual-shell hero-visual-shell-split">
      <div className="hero-3d-panel">
        <Suspense
          fallback={
            <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-amber-400/15 via-white/30 to-blue-500/15">
              <div className="h-28 w-28 animate-pulse rounded-full bg-gradient-to-tr from-primary/20 to-blue-500/25 blur-2xl" />
            </div>
          }
        >
          <Hero3DCanvas reduceMotion={reduceMotion} eager className="absolute inset-0 h-full min-h-[200px] w-full lg:min-h-[340px]" />
        </Suspense>
        <span className="hero-3d-panel-badge">{t("Rede europeia · WebGL", "European network · WebGL")}</span>
      </div>

      <div className="hero-photo-stage">
        <div className="hero-orbit" aria-hidden="true" />
        <div className="hero-visual-card">
          <img src="/Imagens/solidarityactionday.jpg" alt={t("Participantes ActivEU", "ActivEU participants")} className="hero-main-image" />
          <div className="hero-image-overlay" />
        </div>
        <div className="hero-ticket hero-ticket-left">
          <p className="hero-ticket-label">{t("Impacto social", "Social impact")}</p>
          <p className="hero-ticket-value">4M€+</p>
          <p className="hero-ticket-copy">{t("Canalizados para causas sociais verificadas.", "Directed to verified social causes.")}</p>
        </div>
        <div className="hero-ticket hero-ticket-right">
          <img src="/Imagens/plataformadigital.jpg" alt="" className="hero-ticket-thumb" />
          <div>
            <p className="hero-ticket-label">ActivEU Connect</p>
            <p className="hero-ticket-copy">{t("Matching, certificação e dados de impacto.", "Matching, certification and impact data.")}</p>
          </div>
        </div>
        <div className="hero-node hero-node-top">
          <span className="hero-node-dot" />
          <span>{t("Juventude", "Youth")}</span>
        </div>
        <div className="hero-node hero-node-middle">
          <span className="hero-node-dot" />
          <span>{t("Empresas", "Companies")}</span>
        </div>
        <div className="hero-node hero-node-bottom">
          <span className="hero-node-dot" />
          <span>{t("Causas", "Causes")}</span>
        </div>
      </div>
    </div>
  );
}

const Index = () => {
  const { lang, setLang, t } = useLanguage();
  const [menuOpen, setMenuOpen] = useState(false);
  const [headerSolid, setHeaderSolid] = useState(false);
  const heroRef = useRef<HTMLElement | null>(null);
  const reduceMotion = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });

  const parallaxVisual = useTransform(scrollYProgress, [0, 1], [0, reduceMotion ? 0 : 110]);
  const parallaxGlow = useTransform(scrollYProgress, [0, 1], [0, reduceMotion ? 0 : -80]);

  // Header scroll effect
  useMotionValueEvent(scrollYProgress, "change", (v) => {
    setHeaderSolid(v > 0.05);
  });

  // Fallback: also listen to window scroll for when hero ref isn't covering
  useEffect(() => {
    const handleScroll = () => setHeaderSolid(window.scrollY > 60);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const marqueeLabels = [
    t("Juventude", "Youth"),
    t("Empresas", "Companies"),
    t("Causas", "Causes"),
    t("Meritocracia", "Meritocracy"),
    t("Transparência", "Transparency"),
    t("Impacto verificável", "Verified impact"),
    t("Rede europeia", "European network"),
    t("Certificação", "Certification"),
  ];

  return (
    <div className="site-root min-h-screen bg-background text-foreground">
      <div className="site-grain" aria-hidden="true" />

      {/* ── Header ── */}
      <header className="fixed inset-x-0 top-0 z-50">
        <div className="section-shell pt-4">
          <motion.div
            className="flex items-center justify-between gap-4 rounded-[28px] px-4 py-3 sm:px-6 transition-colors duration-500"
            style={{
              background: headerSolid
                ? "linear-gradient(180deg, hsla(0,0%,100%,0.92), hsla(0,0%,100%,0.78))"
                : "linear-gradient(180deg, hsla(0,0%,100%,0.6), hsla(0,0%,100%,0.3))",
              backdropFilter: headerSolid ? "blur(22px)" : "blur(12px)",
              border: "1px solid hsla(223,71%,23%,0.08)",
              boxShadow: headerSolid
                ? "0 1px 2px rgba(11,31,92,0.04), 0 8px 20px rgba(11,31,92,0.06), 0 24px 56px rgba(11,31,92,0.08), 0 1px 0 rgba(255,255,255,0.55) inset"
                : "0 8px 24px rgba(11,31,92,0.04)",
            }}
          >
            <a href="#hero" className="flex items-center gap-3 text-left">
              <img src="/Imagens/icon.png" alt="ActivEU" className="h-11 w-11 rounded-2xl border border-white/60 object-cover" />
              <div>
                <p className="font-display text-xl text-primary">ActivEU</p>
                <p className="text-xs text-muted-foreground">{t("Solidarity Action Day em Portugal", "Solidarity Action Day in Portugal")}</p>
              </div>
            </a>
            <nav className="hidden items-center gap-1 lg:flex">
              {navItems.map((item) => (
                <a key={item.id} href={`#${item.id}`} className="nav-pill">
                  {t(item.pt, item.en)}
                </a>
              ))}
            </nav>
            <div className="flex items-center gap-3">
              <div className="flex items-center rounded-full border border-border/70 bg-white/70 p-1">
                <button type="button" onClick={() => setLang("pt")} className={`rounded-full px-3 py-1.5 text-sm transition-all duration-300 ${lang === "pt" ? "bg-primary text-primary-foreground shadow-md" : "text-muted-foreground"}`}>
                  PT
                </button>
                <button type="button" onClick={() => setLang("en")} className={`rounded-full px-3 py-1.5 text-sm transition-all duration-300 ${lang === "en" ? "bg-primary text-primary-foreground shadow-md" : "text-muted-foreground"}`}>
                  EN
                </button>
              </div>
              <Magnetic>
                <a href="#join" className="site-button site-button-primary site-button-shimmer hidden sm:inline-flex">
                  {t("Contactar", "Contact")}
                  <ArrowRight size={16} />
                </a>
              </Magnetic>
              <button type="button" onClick={() => setMenuOpen(true)} className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-border/70 bg-white/70 text-primary lg:hidden">
                <Menu size={20} />
              </button>
            </div>
          </motion.div>
        </div>
      </header>

      {/* ── Mobile menu ── */}
      {menuOpen ? (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="fixed inset-0 z-[60] bg-[radial-gradient(circle_at_top,hsl(var(--amber-500)/0.24),transparent_28%),linear-gradient(145deg,hsl(var(--navy-900)),hsl(var(--navy-700)))] px-6 py-8 text-white lg:hidden"
        >
          <div className="mx-auto flex h-full max-w-2xl flex-col">
            <div className="mb-14 flex items-center justify-between">
              <p className="font-display text-3xl">ActivEU</p>
              <button type="button" onClick={() => setMenuOpen(false)} className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/20 bg-white/10">
                <X size={20} />
              </button>
            </div>
            <div className="flex flex-1 flex-col justify-center gap-4">
              {navItems.map((item, i) => (
                <motion.a
                  key={item.id}
                  href={`#${item.id}`}
                  onClick={() => setMenuOpen(false)}
                  className="flex items-center justify-between border-b border-white/10 py-4 text-left font-display text-4xl"
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.06, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                >
                  {t(item.pt, item.en)}
                  <ChevronRight size={22} />
                </motion.a>
              ))}
            </div>
          </div>
        </motion.div>
      ) : null}

      <main>
        {/* ── Hero ── */}
        <motion.section ref={heroRef} id="hero" className="relative overflow-hidden pt-32">
          <div className="hero-aurora-wrap" aria-hidden="true">
            <div className="hero-aurora-blob hero-aurora-blob--a" />
            <div className="hero-aurora-blob hero-aurora-blob--b" />
            <div className="hero-aurora-blob hero-aurora-blob--c" />
          </div>
          <motion.div className="hero-glow" style={{ y: parallaxGlow }} aria-hidden="true" />
          <div className="section-shell relative pb-24 pt-10">
            <div className="grid gap-16 xl:grid-cols-[1.02fr_0.98fr] xl:items-center">
              <div>
                <FadeIn y={16}>
                  <div className="eyebrow">
                    <Sparkles size={14} />
                    {t("Plataforma solidária com ambição europeia", "A solidarity platform with European ambition")}
                  </div>
                </FadeIn>
                <h1 className="mt-6 max-w-5xl font-display text-[clamp(3.6rem,8vw,8.2rem)] leading-[0.86] tracking-[-0.06em] text-primary">
                  <TextRevealLine className="block">{t("Transformamos um dia de trabalho", "We turn one working day")}</TextRevealLine>
                  <TextRevealLine className="block text-gradient-premium-flow" delay={0.08}>
                    {t("num gesto de solidariedade", "into an act of solidarity")}
                  </TextRevealLine>
                  <TextRevealLine className="block text-primary/72" delay={0.16}>
                    {t("com mérito, clareza e impacto real", "with merit, clarity and real impact")}
                  </TextRevealLine>
                </h1>
                <HeroKineticStrip
                  rowA={[t("Solidariedade", "Solidarity"), t("Impacto", "Impact"), t("Meritocracia", "Meritocracy"), t("Europa", "Europe")]}
                  rowB={[t("Juventude", "Youth"), t("Empresas", "Companies"), t("Causas", "Causes"), t("Futuro", "Future")]}
                />
                <FadeIn delay={0.12} className="mt-6 max-w-2xl text-lg leading-8 text-foreground/72 md:text-xl">
                  <p>
                    {t(
                      "A ActivEU une juventude, empresas e causas verificadas num sistema pensado para parecer credível, desejável e pronto para crescer. Experiência profissional, cidadania ativa e impacto mensurável no mesmo movimento.",
                      "ActivEU brings youth, companies and verified causes together in a system designed to feel credible, desirable and ready to scale. Professional experience, active citizenship and measurable impact in the same movement.",
                    )}
                  </p>
                </FadeIn>
                <FadeIn delay={0.18} className="mt-10 flex flex-wrap gap-4">
                  <Magnetic>
                    <a href="#join" className="site-button site-button-primary site-button-shimmer">
                      {t("Quero participar", "I want to join")}
                      <ArrowRight size={16} />
                    </a>
                  </Magnetic>
                  <a href="#process" className="site-button site-button-secondary">
                    {t("Ver como funciona", "See how it works")}
                  </a>
                  <a href="#impact" className="site-button site-button-secondary">
                    {t("Ver impacto", "See impact")}
                  </a>
                </FadeIn>
                <SectionReveal className="mt-10 flex flex-wrap gap-3" stagger={0.05}>
                  {[{ pt: "Juventude primeiro", en: "Youth-first" }, { pt: "Impacto verificável", en: "Verified impact" }, { pt: "Matching meritocrático", en: "Merit-based matching" }, { pt: "Rede europeia", en: "European network" }].map((item, i) => (
                    <RevealItem key={item.en}>
                      <span className={`floating-chip ${i < 2 ? "animate-float" : "animate-float-delayed"}`}>{t(item.pt, item.en)}</span>
                    </RevealItem>
                  ))}
                </SectionReveal>
                <SectionReveal className="mt-10 grid gap-4 md:grid-cols-3" stagger={0.07}>
                  {heroHighlights.map((highlight) => {
                    const Icon = highlight.icon;
                    return (
                      <RevealItem key={highlight.enTitle}>
                        <div className="impact-card impact-card-tilt animated-border h-full">
                          <div className="icon-badge">
                            <Icon size={18} />
                          </div>
                          <h2 className="mt-5 font-display text-[1.55rem] leading-[0.96] tracking-[-0.04em] text-primary">{t(highlight.ptTitle, highlight.enTitle)}</h2>
                          <p className="mt-3 text-sm leading-7 text-foreground/72">{t(highlight.ptBody, highlight.enBody)}</p>
                        </div>
                      </RevealItem>
                    );
                  })}
                </SectionReveal>
              </div>
              <motion.div className="min-w-0 will-change-transform" style={{ y: parallaxVisual }}>
                <HeroVisual t={t} reduceMotion={!!reduceMotion} />
              </motion.div>
            </div>

            <ValueMarquee labels={marqueeLabels} className="mt-12 rounded-[24px]" />

            <div className="mt-10 grid gap-4 lg:grid-cols-[1.2fr_0.8fr_0.8fr]">
              <FadeIn className="feature-panel manifest-panel">
                <p className="text-sm uppercase tracking-[0.24em] text-primary/48">{t("Motor do sistema", "System engine")}</p>
                <h2 className="mt-4 font-display text-[clamp(2.2rem,4vw,4.4rem)] leading-[0.95] tracking-[-0.05em] text-primary">
                  {t("Não é só solidariedade. É uma plataforma social muito bem desenhada.", "This is not just solidarity. It is a carefully designed social platform.")}
                </h2>
                <p className="mt-5 max-w-2xl text-base leading-8 text-foreground/72">
                  {t(
                    "A experiência foi pensada para parecer justa, clara e desejável em cada contacto com a marca: do matching à certificação, da empresa à causa.",
                    "The experience is designed to feel fair, clear and desirable at every touchpoint with the brand: from matching to certification, from company to cause.",
                  )}
                </p>
                <div className="mt-6 flex flex-wrap gap-3">
                  {[{ pt: "Meritocracia", en: "Meritocracy" }, { pt: "Transparência", en: "Transparency" }, { pt: "Certificação", en: "Certification" }].map((item) => (
                    <span key={item.en} className="manifest-chip">
                      {t(item.pt, item.en)}
                    </span>
                  ))}
                </div>
              </FadeIn>
              <Reveal3D delay={0.08} className="impact-card impact-card-tilt animated-border h-full">
                <div className="icon-badge">
                  <ShieldCheck size={18} />
                </div>
                <h3 className="mt-5 font-display text-[1.85rem] leading-[0.95] tracking-[-0.04em] text-primary">{t("Sem fricção desnecessária", "Without unnecessary friction")}</h3>
                <p className="mt-4 text-sm leading-7 text-foreground/72">{t("A homepage deve orientar rapidamente, gerar confiança e deixar a proposta de valor imediatamente clara.", "The homepage should orient quickly, build trust and make the value proposition immediately clear.")}</p>
              </Reveal3D>
              <Reveal3D delay={0.14} className="impact-card impact-card-tilt animated-border h-full">
                <div className="icon-badge">
                  <Landmark size={18} />
                </div>
                <h3 className="mt-5 font-display text-[1.85rem] leading-[0.95] tracking-[-0.04em] text-primary">{t("Institucional, sem perder alma", "Institutional without losing soul")}</h3>
                <p className="mt-4 text-sm leading-7 text-foreground/72">{t("A linguagem visual aproxima o projeto de parceiros, municípios, escolas e marcas com outra exigência.", "The visual language brings the project closer to partners, municipalities, schools and brands with higher expectations.")}</p>
              </Reveal3D>
            </div>
          </div>
        </motion.section>

        {/* ── Model / Proof ── */}
        <section id="model" className="section-shell py-24">
          <div className="grid gap-8 xl:grid-cols-[0.92fr_1.08fr]">
            <div className="feature-panel">
              <FadeIn>
                <SectionIntro
                  eyebrow={
                    <>
                      <BadgeCheck size={14} />
                      {t("Prova e credibilidade", "Proof and credibility")}
                    </>
                  }
                  title={t("A homepage tem de inspirar confiança antes de pedir atenção.", "The homepage has to inspire trust before asking for attention.")}
                  body={t(
                    "Mais do que parecer moderna, a ActivEU tem de parecer sólida, humana e pronta para ser levada a sério por jovens, empresas e parceiros institucionais.",
                    "More than looking modern, ActivEU needs to feel solid, human and ready to be taken seriously by young people, companies and institutional partners.",
                  )}
                />
              </FadeIn>
              <SectionReveal className="mt-8 space-y-4" stagger={0.06}>
                {proofPillars.map((pillar) => {
                  const Icon = pillar.icon;
                  return (
                    <RevealItem key={pillar.enTitle}>
                      <div className="soft-card soft-card-hover flex gap-4">
                        <div className="icon-badge shrink-0">
                          <Icon size={18} />
                        </div>
                        <div>
                          <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-primary/46">{t(pillar.ptLabel, pillar.enLabel)}</p>
                          <h3 className="mt-2 font-display text-[1.6rem] leading-[0.96] tracking-[-0.04em] text-primary">{t(pillar.ptTitle, pillar.enTitle)}</h3>
                          <p className="mt-3 text-sm leading-7 text-foreground/72">{t(pillar.ptBody, pillar.enBody)}</p>
                        </div>
                      </div>
                    </RevealItem>
                  );
                })}
              </SectionReveal>
            </div>
            <div className="grid gap-4 lg:grid-cols-[1.08fr_0.92fr]">
              <FadeIn className="spotlight-card spotlight-card-large lg:row-span-2">
                <article className="contents">
                  <div className="spotlight-media">
                    <img src="/Imagens/team.jpg" alt={t("Equipa ActivEU", "ActivEU team")} className="spotlight-image" loading="lazy" />
                  </div>
                  <div className="spotlight-overlay" />
                  <div className="spotlight-body">
                    <span className="spotlight-tag">{t("comunidade", "community")}</span>
                    <h3 className="mt-5 max-w-[14ch] font-display text-[clamp(2.2rem,4vw,4.2rem)] leading-[0.92] tracking-[-0.05em]">{t("Uma iniciativa jovem com presença real.", "A youth initiative with real presence.")}</h3>
                    <p className="mt-4 max-w-xl text-base leading-7 text-white/78">
                      {t(
                        "A fotografia certa faz a ActivEU parecer viva, próxima e verdadeira. Isso aumenta imediatamente o valor percebido do projeto.",
                        "The right photography makes ActivEU feel alive, close and real. That immediately increases the project's perceived value.",
                      )}
                    </p>
                  </div>
                </article>
              </FadeIn>
              <FadeIn delay={0.06} className="spotlight-card">
                <article className="contents">
                  <div className="spotlight-media">
                    <img src="/Imagens/parceira.jpg" alt={t("Parcerias ActivEU", "ActivEU partnerships")} className="spotlight-image" loading="lazy" />
                  </div>
                  <div className="spotlight-overlay" />
                  <div className="spotlight-body">
                    <span className="spotlight-tag">{t("parcerias", "partnerships")}</span>
                    <h3 className="mt-5 max-w-[15ch] font-display text-[clamp(1.8rem,3vw,3rem)] leading-[0.94] tracking-[-0.05em]">{t("A ambição cresce quando a confiança institucional é visível.", "Ambition grows when institutional trust is visible.")}</h3>
                  </div>
                </article>
              </FadeIn>
              <FadeIn delay={0.12} className="quote-card">
                <article className="contents">
                  <p className="text-xs uppercase tracking-[0.24em] text-white/44">{t("Escala e prova social", "Scale and social proof")}</p>
                  <p className="mt-5 font-display text-[clamp(2rem,3vw,3rem)] leading-[0.94] tracking-[-0.05em]">{t("Uma linguagem mais forte para uma missão maior.", "A stronger language for a bigger mission.")}</p>
                  <div className="relative z-[1] mt-6 grid gap-3 sm:grid-cols-3 lg:grid-cols-1">
                    <AnimatedMetric end={4} suffix="M€+" label={t("impacto canalizado", "impact delivered")} />
                    <AnimatedMetric end={10} suffix="+" label={t("países ligados", "connected countries")} />
                    <AnimatedMetric end={60} suffix="+" label={t("projetos apoiados", "supported projects")} />
                  </div>
                </article>
              </FadeIn>
            </div>
          </div>
          <div className="mt-8 grid gap-6 md:grid-cols-3">
            {architectureCards.map((card, i) => {
              const Icon = card.icon;
              return (
                <Reveal3D key={card.enTitle} delay={i * 0.06}>
                  <article className={`architecture-card architecture-card-tilt animated-border ${card.dark ? "architecture-card-dark" : ""}`}>
                    <div className={`icon-badge ${card.dark ? "bg-white/10 text-white" : ""}`}>
                      <Icon size={18} />
                    </div>
                    <p className="architecture-kicker mt-6">{t(card.ptKicker, card.enKicker)}</p>
                    <h3 className={`mt-3 font-display text-[1.9rem] leading-[0.95] tracking-[-0.04em] ${card.dark ? "text-white" : "text-primary"}`}>{t(card.ptTitle, card.enTitle)}</h3>
                    <p className={`mt-4 text-sm leading-7 ${card.dark ? "text-white/72" : "text-foreground/72"}`}>{t(card.ptBody, card.enBody)}</p>
                  </article>
                </Reveal3D>
              );
            })}
          </div>
        </section>

        {/* ── Process Timeline (NEW) ── */}
        <div id="process">
          <ProcessTimeline />
        </div>

        {/* ── Impact Dashboard (NEW) ── */}
        <div id="impact">
          <ImpactDashboard />
        </div>

        {/* ── Projects ── */}
        <section id="projects" className="section-shell py-24">
          <FadeIn className="max-w-3xl">
            <SectionIntro
              eyebrow={
                <>
                  <Globe2 size={14} />
                  {t("Projetos e prova no terreno", "Projects and proof on the ground")}
                </>
              }
              title={t("A ambição fica melhor quando ganha presença real.", "Ambition looks better when it gains real presence.")}
              body={t(
                "Cada iniciativa ajuda a mostrar que a ActivEU não é só uma ideia forte. É uma plataforma com matéria, histórias e execução.",
                "Each initiative helps show that ActivEU is not just a strong idea. It is a platform with substance, stories and execution.",
              )}
            />
          </FadeIn>
          <div className="relative mt-14">
            <Carousel opts={{ align: "start", loop: true }} className="w-full">
              <CarouselContent className="-ml-3 md:-ml-5">
                {projects.map((project) => (
                  <CarouselItem key={project.enTitle} className="basis-[min(100%,340px)] pl-3 sm:basis-[82%] md:pl-5 lg:basis-[56%]">
                    <article className="spotlight-card spotlight-card-large min-h-[460px] h-full">
                      <div className="spotlight-media">
                        <img src={project.image} alt={t(project.ptTitle, project.enTitle)} className="spotlight-image" loading="lazy" />
                      </div>
                      <div className="spotlight-overlay" />
                      <div className="spotlight-body">
                        <span className="spotlight-tag">{t(project.ptLabel, project.enLabel)}</span>
                        <h3 className="mt-5 max-w-[18ch] font-display text-[clamp(2.1rem,4vw,4rem)] leading-[0.92] tracking-[-0.05em]">{t(project.ptTitle, project.enTitle)}</h3>
                        <p className="mt-4 max-w-xl text-base leading-7 text-white/78">{t(project.ptBody, project.enBody)}</p>
                      </div>
                    </article>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious className="left-1 top-[42%] z-20 h-11 w-11 -translate-y-1/2 border-primary/12 bg-white/95 text-primary shadow-[0_12px_40px_rgba(11,31,92,0.15)] backdrop-blur-md md:left-0" />
              <CarouselNext className="right-1 top-[42%] z-20 h-11 w-11 -translate-y-1/2 border-primary/12 bg-white/95 text-primary shadow-[0_12px_40px_rgba(11,31,92,0.15)] backdrop-blur-md md:right-0" />
            </Carousel>
            <p className="mt-4 text-center text-xs uppercase tracking-[0.2em] text-muted-foreground">{t("Desliza ou usa as setas", "Swipe or use arrows")}</p>
          </div>
        </section>

        {/* ── Testimonials (NEW) ── */}
        <TestimonialCarousel />

        {/* ── Partner Logos (NEW) ── */}
        <PartnerLogos />

        {/* ── Join / CTA ── */}
        <section id="join" className="section-shell pb-20 pt-6">
          <div className="cta-panel">
            <div className="grid gap-10 xl:grid-cols-[1.02fr_0.98fr]">
              <FadeIn className="max-w-3xl">
                <SectionIntro
                  invert
                  eyebrow={
                    <>
                      <Sparkles size={14} />
                      {t("Próximo passo", "Next step")}
                    </>
                  }
                  title={t("Se esta visão faz sentido para ti, vamos construir juntos.", "If this vision feels right to you, let's build it together.")}
                  body={t(
                    "Quer sejas jovem, empresa, escola, município ou organização social, há espaço para colaborar com a ActivEU de forma concreta.",
                    "Whether you are a young person, company, school, municipality or social organization, there is room to collaborate with ActivEU in a concrete way.",
                  )}
                />
                <div className="mt-10 flex flex-wrap gap-4">
                  <Magnetic>
                    <a href="mailto:geral@activeu.pt" className="site-button site-button-inverse site-button-shimmer">
                      {t("Falar com a ActivEU", "Talk to ActivEU")}
                      <ArrowRight size={16} />
                    </a>
                  </Magnetic>
                  <a href="https://activeu.pt" className="site-button site-button-outline-light">
                    {t("Ver domínio atual", "Visit current domain")}
                  </a>
                </div>
              </FadeIn>
              <SectionReveal className="grid gap-4" stagger={0.08}>
                {[
                  { icon: Users2, ptTitle: "Jovens", enTitle: "Young people", ptBody: "Experimentar um contexto profissional real, ganhar certificação e deixar uma marca positiva.", enBody: "Experience a real professional context, earn certification and leave a positive mark." },
                  { icon: Building2, ptTitle: "Empresas", enTitle: "Companies", ptBody: "Ativar responsabilidade social com uma experiência concreta, clara e memorável.", enBody: "Activate social responsibility through a concrete, clear and memorable experience." },
                  { icon: Landmark, ptTitle: "Municípios e instituições", enTitle: "Municipalities and institutions", ptBody: "Criar projetos mais próximos da juventude com apoio estratégico, criativo e operacional.", enBody: "Create projects closer to youth with strategic, creative and operational support." },
                ].map((item) => {
                  const Icon = item.icon;
                  return (
                    <RevealItem key={item.enTitle}>
                      <div className="pathway-card pathway-card-tilt">
                        <div className="icon-badge bg-white/10 text-white">
                          <Icon size={18} />
                        </div>
                        <h3 className="mt-5 font-display text-[1.9rem] leading-[0.95] tracking-[-0.04em] text-white">{t(item.ptTitle, item.enTitle)}</h3>
                        <p className="mt-3 text-sm leading-7 text-white/74">{t(item.ptBody, item.enBody)}</p>
                      </div>
                    </RevealItem>
                  );
                })}
              </SectionReveal>
            </div>
          </div>
        </section>
      </main>

      {/* ── Footer ── */}
      <footer className="section-shell pb-12">
        <FadeIn>
          <div className="glass-panel flex flex-col gap-8 rounded-[32px] px-6 py-8 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <div className="flex items-center gap-3">
                <img src="/Imagens/icon.png" alt="ActivEU" className="h-12 w-12 rounded-2xl border border-white/60 object-cover" />
                <div>
                  <p className="font-display text-2xl text-primary">ActivEU</p>
                  <p className="text-sm text-muted-foreground">{t("Solidarity Action Day em Portugal", "Solidarity Action Day in Portugal")}</p>
                </div>
              </div>
              <p className="mt-4 max-w-xl text-sm leading-7 text-foreground/68">{t("Juventude, empresas e causas ligadas por um sistema mais humano, meritocrático e transparente.", "Youth, companies and causes connected by a more human, merit-based and transparent system.")}</p>
            </div>
            <a href="mailto:geral@activeu.pt" className="text-foreground/76 transition-colors hover:text-primary">
              geral@activeu.pt
            </a>
          </div>
        </FadeIn>
      </footer>
    </div>
  );
};

export default Index;
