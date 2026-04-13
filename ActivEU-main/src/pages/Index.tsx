import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  ArrowRight,
  BadgeCheck,
  Building2,
  ChevronRight,
  Globe2,
  HeartHandshake,
  Menu,
  Sparkles,
  Users2,
  X,
  type LucideIcon,
} from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import {
  ScrollProgress,
  FadeIn,
  SectionReveal,
  RevealItem,
  SparkCounter,
  CursorGlow,
  TextRevealLine,
  SlideIn,
} from "@/components/activeu/motion-primitives";
import { PageLoader } from "@/components/activeu/PageLoader";
import { AmbientField } from "@/components/activeu/AmbientField";
import { Tilt3DCard } from "@/components/activeu/Tilt3DCard";
import { LiquidDivider } from "@/components/activeu/LiquidDivider";
import { ValueMarquee } from "@/components/activeu/ValueMarquee";
import {
  DoodleUnderline,
  DoodleBadge,
  SectionTransition,
} from "@/components/activeu/DoodleSystem";

// ── Types ──────────────────────────────────────────────────────────────────

type NavItem = { id: string; label: string };

type FeatureCard = {
  icon: LucideIcon;
  title: string;
  body: string;
};

type StoryCard = {
  title: string;
  body: string;
  image: string;
  tag: string;
};

type MetricCard = {
  end: number;
  suffix: string;
  label: string;
  body: string;
};

type SectionIntroProps = {
  eyebrow: string;
  title: string;
  body: string;
};

// ── SectionIntro — fades in on scroll ─────────────────────────────────────

const SectionIntro = ({ eyebrow, title, body }: SectionIntroProps) => (
  <FadeIn>
    <div className="mx-auto mb-10 max-w-3xl text-center md:mb-14">
      <p className="eyebrow mb-4 justify-center">{eyebrow}</p>
      <h2 className="text-balance text-3xl font-semibold tracking-tight text-slate-950 md:text-5xl">
        {title}
      </h2>
      <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-slate-600 md:text-lg">
        {body}
      </p>
    </div>
  </FadeIn>
);

// ── Page ───────────────────────────────────────────────────────────────────

const Index = () => {
  const { lang, setLang, t } = useLanguage();
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  const scrollToId = (id: string) => {
    setMenuOpen(false);
    const el = document.getElementById(id);
    if (!el) return;
    el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const navItems: NavItem[] = [
    { id: "hero", label: t("Início", "Home") },
    { id: "model", label: t("Modelo", "Model") },
    { id: "proof", label: t("Prova", "Proof") },
    { id: "stories", label: t("Histórias", "Stories") },
    { id: "contact", label: t("Contacto", "Contact") },
  ];

  const pillars: FeatureCard[] = [
    {
      icon: Users2,
      title: t("Jovens com papel real", "Young people with real agency"),
      body: t(
        "A ActivEU cria experiências onde os jovens contribuem, lideram e aprendem com impacto visível.",
        "ActivEU creates experiences where young people contribute, lead and learn with visible impact."
      ),
    },
    {
      icon: Building2,
      title: t("Empresas com propósito claro", "Companies with clear purpose"),
      body: t(
        "Ligamos equipas empresariais a ações concretas de voluntariado e colaboração intergeracional.",
        "We connect company teams to concrete volunteering actions and intergenerational collaboration."
      ),
    },
    {
      icon: HeartHandshake,
      title: t("Causas com escala humana", "Causes with human-scale impact"),
      body: t(
        "Cada programa foi pensado para ser simples de ativar, fácil de explicar e memorável para quem participa.",
        "Each program is designed to be easy to launch, easy to explain and memorable for the people involved."
      ),
    },
  ];

  const steps: FeatureCard[] = [
    {
      icon: Sparkles,
      title: t("1. Desenhar a experiência", "1. Shape the experience"),
      body: t(
        "Definimos objetivo, público, formato e resultado esperado sem burocracia desnecessária.",
        "We define the goal, audience, format and expected outcome without unnecessary bureaucracy."
      ),
    },
    {
      icon: Globe2,
      title: t("2. Ativar parceiros e terreno", "2. Activate partners and fieldwork"),
      body: t(
        "Coordenamos parceiros, logística e comunicação para que a execução seja fluida e credível.",
        "We coordinate partners, logistics and communication so execution feels smooth and credible."
      ),
    },
    {
      icon: BadgeCheck,
      title: t("3. Mostrar impacto concreto", "3. Show concrete impact"),
      body: t(
        "Transformamos a experiência em prova: participação, histórias, conteúdo e valor reputacional.",
        "We turn the experience into proof: participation, stories, content and reputational value."
      ),
    },
  ];

  const metrics: MetricCard[] = [
    {
      end: 3,
      suffix: "",
      label: t("frentes ligadas", "connected fronts"),
      body: t("jovens, empresas e causas", "young people, companies and causes"),
    },
    {
      end: 1,
      suffix: "",
      label: t("experiência integrada", "integrated experience"),
      body: t("do conceito à ativação no terreno", "from concept to activation on the ground"),
    },
    {
      end: 100,
      suffix: "%",
      label: t("foco na clareza", "clarity-first"),
      body: t("mensagem simples, legível e acionável", "simple, legible and actionable messaging"),
    },
  ];

  const stories: StoryCard[] = [
    {
      title: t("Solidarity Action Day", "Solidarity Action Day"),
      body: t(
        "Uma ação com energia coletiva, narrativa clara e imagem forte para envolver comunidade e parceiros.",
        "A collective action with clear narrative and strong imagery to engage community and partners."
      ),
      image: "/Imagens/solidarityactionday.jpg",
      tag: t("Ativação comunitária", "Community activation"),
    },
    {
      title: t("Encontros intergeracionais", "Intergenerational encounters"),
      body: t(
        "Momentos desenhados para aproximar gerações, criar empatia e transformar participação em memória positiva.",
        "Moments designed to connect generations, build empathy and turn participation into positive memory."
      ),
      image: "/Imagens/encontrosintergeracionais.jpg",
      tag: t("Ligação humana", "Human connection"),
    },
  ];

  const audiences: FeatureCard[] = [
    {
      icon: Users2,
      title: t("Para jovens", "For young people"),
      body: t(
        "Experiências com voz, pertença e oportunidade real de participação.",
        "Experiences with voice, belonging and a real opportunity to participate."
      ),
    },
    {
      icon: Building2,
      title: t("Para empresas", "For companies"),
      body: t(
        "Projetos claros, bem apresentados e alinhados com cultura e impacto.",
        "Clear, well-framed projects aligned with culture and impact."
      ),
    },
    {
      icon: HeartHandshake,
      title: t("Para parceiros sociais", "For social partners"),
      body: t(
        "Colaboração mais simples, mais visível e mais fácil de sustentar.",
        "Collaboration that is simpler, more visible and easier to sustain."
      ),
    },
  ];

  const marqueeLabels = [
    t("Juventude com voz", "Youth with voice"),
    t("Empresas com propósito", "Companies with purpose"),
    t("Causas verificadas", "Verified causes"),
    t("Impacto real", "Real impact"),
    t("Europa solidária", "Solidarity Europe"),
    t("Coordenação séria", "Serious coordination"),
    t("Presença humana", "Human presence"),
    t("Narrativa clara", "Clear narrative"),
  ];

  return (
    <>
      {/* ── Global UI layer ── */}
      <PageLoader />
      <ScrollProgress />
      <CursorGlow />

      <div className="min-h-screen overflow-x-hidden bg-[linear-gradient(180deg,#fffdf8_0%,#fff8ef_32%,#ffffff_100%)] text-slate-950">

        {/* ── HEADER ─────────────────────────────────────────────────────── */}
        <header className="fixed inset-x-0 top-0 z-50 px-4 py-4">
          <div className="mx-auto flex max-w-6xl items-center justify-between rounded-full border border-white/70 bg-white/85 px-4 py-3 shadow-[0_20px_60px_rgba(15,23,42,0.08)] backdrop-blur md:px-6">
            <button
              className="flex items-center gap-3 text-left"
              onClick={() => scrollToId("hero")}
              type="button"
            >
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
                  className="rounded-full px-4 py-2 text-sm font-medium text-slate-600 transition hover:bg-slate-100 hover:text-slate-950"
                  onClick={() => scrollToId(item.id)}
                  type="button"
                >
                  {item.label}
                </button>
              ))}
            </nav>

            <div className="hidden items-center gap-2 md:flex">
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
              <motion.button
                className="inline-flex items-center gap-2 rounded-full bg-slate-950 px-5 py-3 text-sm font-semibold text-white"
                onClick={() => scrollToId("contact")}
                type="button"
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.96 }}
                transition={{ type: "spring", stiffness: 400, damping: 25 }}
              >
                {t("Falar com a ActivEU", "Talk to ActivEU")}
                <ArrowRight className="h-4 w-4" />
              </motion.button>
            </div>

            <button
              aria-label={t("Abrir menu", "Open menu")}
              className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-950 md:hidden"
              onClick={() => setMenuOpen((value) => !value)}
              type="button"
            >
              {menuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </header>

        {/* ── MOBILE MENU ────────────────────────────────────────────────── */}
        <AnimatePresence>
          {menuOpen ? (
            <motion.div
              animate={{ opacity: 1 }}
              className="fixed inset-0 z-40 bg-slate-950/45 px-4 pb-6 pt-24 md:hidden"
              exit={{ opacity: 0 }}
              initial={{ opacity: 0 }}
            >
              <motion.div
                animate={{ y: 0, opacity: 1 }}
                className="mx-auto max-w-md rounded-[32px] bg-white p-6 shadow-[0_40px_100px_rgba(15,23,42,0.2)]"
                exit={{ y: 20, opacity: 0 }}
                initial={{ y: 24, opacity: 0 }}
                transition={{ duration: 0.24, ease: [0.22, 1, 0.36, 1] }}
              >
                <div className="space-y-2">
                  {navItems.map((item) => (
                    <button
                      key={item.id}
                      className="flex w-full items-center justify-between rounded-2xl bg-slate-50 px-4 py-3 text-left text-base font-medium text-slate-800"
                      onClick={() => scrollToId(item.id)}
                      type="button"
                    >
                      {item.label}
                      <ChevronRight className="h-4 w-4 text-slate-400" />
                    </button>
                  ))}
                </div>
                <div className="mt-6 flex items-center justify-between gap-3">
                  <div className="rounded-full border border-slate-200 bg-slate-50 p-1">
                    {(["pt", "en"] as const).map((code) => (
                      <button
                        key={code}
                        className={`rounded-full px-3 py-1.5 text-sm font-medium transition ${
                          lang === code ? "bg-slate-950 text-white" : "text-slate-500"
                        }`}
                        onClick={() => setLang(code)}
                        type="button"
                      >
                        {code.toUpperCase()}
                      </button>
                    ))}
                  </div>
                  <button
                    className="inline-flex items-center gap-2 rounded-full bg-slate-950 px-4 py-3 text-sm font-semibold text-white"
                    onClick={() => scrollToId("contact")}
                    type="button"
                  >
                    {t("Contactar", "Contact")}
                    <ArrowRight className="h-4 w-4" />
                  </button>
                </div>
              </motion.div>
            </motion.div>
          ) : null}
        </AnimatePresence>

        <main className="overflow-hidden">

          {/* ═══════════════════════════════════════════════════════════════
              HERO — ambient background + expressive typography + animated metrics
          ════════════════════════════════════════════════════════════════ */}
          <section id="hero" className="relative overflow-hidden px-4 pb-16 pt-32 md:px-6 md:pb-24 md:pt-40">

            {/* Ambient motion background */}
            <AmbientField variant="hero" className="pointer-events-none absolute inset-0 z-0" />

            <div className="relative z-10 mx-auto grid max-w-6xl gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">

              {/* ── Left column ── */}
              <div className="max-w-2xl">

                {/* Eyebrow — fades in immediately */}
                <FadeIn>
                  <p className="eyebrow mb-6">
                    {t("Plataforma de impacto social com clareza", "A social impact platform with clarity")}
                  </p>
                </FadeIn>

                {/* Headline — line-by-line reveal with blur (Expressive Typography) */}
                <h1 className="max-w-[8.5ch] text-4xl font-semibold leading-[0.94] tracking-[-0.04em] text-slate-950 sm:max-w-[9ch] sm:text-5xl md:max-w-xl md:text-6xl lg:text-[5.5rem]">
                  <TextRevealLine className="block">
                    {t("Ligamos juventude,", "We connect youth,")}
                  </TextRevealLine>
                  <TextRevealLine className="block" delay={0.1}>
                    {t("empresas e causas.", "companies and causes.")}
                  </TextRevealLine>
                </h1>

                {/* Subtitle */}
                <FadeIn delay={0.38}>
                  <p className="mt-6 max-w-xl text-lg leading-8 text-slate-600 md:text-xl">
                    {t(
                      "Desenhamos experiências sociais mais humanas, legíveis e memoráveis para jovens, empresas e parceiros que querem gerar impacto real.",
                      "We design social experiences that feel more human, legible and memorable for young people, companies and partners seeking real impact."
                    )}
                  </p>
                </FadeIn>

                {/* CTAs — microinteraction hover/tap */}
                <FadeIn delay={0.52}>
                  <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                    <motion.button
                      className="inline-flex items-center justify-center gap-2 rounded-full bg-[#f97316] px-6 py-4 text-base font-semibold text-white shadow-[0_20px_50px_rgba(249,115,22,0.28)]"
                      onClick={() => scrollToId("contact")}
                      type="button"
                      whileHover={{ scale: 1.04 }}
                      whileTap={{ scale: 0.96 }}
                      transition={{ type: "spring", stiffness: 420, damping: 26 }}
                    >
                      {t("Agendar conversa", "Schedule a conversation")}
                      <ArrowRight className="h-4 w-4" />
                    </motion.button>
                    <motion.button
                      className="inline-flex items-center justify-center gap-2 rounded-full border border-slate-200 bg-white px-6 py-4 text-base font-semibold text-slate-800"
                      onClick={() => scrollToId("model")}
                      type="button"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      transition={{ type: "spring", stiffness: 420, damping: 26 }}
                    >
                      {t("Ver como funciona", "See how it works")}
                      <ChevronRight className="h-4 w-4" />
                    </motion.button>
                  </div>
                </FadeIn>

                {/* Metrics — staggered reveal with SparkCounter (animated numbers) */}
                <SectionReveal className="mt-10 grid gap-4 sm:grid-cols-3">
                  {metrics.map((metric) => (
                    <RevealItem key={metric.label}>
                      <div className="landing-chip-card h-full">
                        <p className="text-3xl font-semibold tracking-[-0.05em] text-slate-950">
                          <SparkCounter end={metric.end} suffix={metric.suffix} />
                        </p>
                        <p className="mt-3 text-sm font-semibold uppercase tracking-[0.18em] text-slate-500">
                          {metric.label}
                        </p>
                        <p className="mt-2 text-sm leading-6 text-slate-600">{metric.body}</p>
                      </div>
                    </RevealItem>
                  ))}
                </SectionReveal>
              </div>

              {/* ── Right column — hero image frame ── */}
              <FadeIn delay={0.22}>
                <div className="landing-hero-frame relative overflow-hidden">
                  <img
                    alt={t("Equipa ActivEU em colaboração", "ActivEU team in collaboration")}
                    className="absolute inset-0 h-full w-full object-cover"
                    src="/Imagens/team.jpg"
                  />

                  {/* Glass overlay bottom caption */}
                  <div className="absolute inset-x-6 bottom-6 rounded-[28px] bg-slate-950/82 p-6 text-white shadow-[0_30px_70px_rgba(15,23,42,0.32)] backdrop-blur">
                    <p className="text-xs font-semibold uppercase tracking-[0.24em] text-white/65">
                      {t("O que entregamos", "What we deliver")}
                    </p>
                    <p className="mt-3 max-w-md text-xl font-semibold leading-tight md:text-2xl">
                      {t(
                        "Programas sociais com direção clara, coordenação séria e presença humana.",
                        "Social programs with clear direction, serious coordination and human presence."
                      )}
                    </p>
                  </div>

                  {/* Info panel top-right */}
                  <div className="landing-panel absolute right-5 top-5 hidden max-w-[220px] sm:block">
                    <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#f97316]">
                      {t("Leitura imediata", "Immediate read")}
                    </p>
                    <p className="mt-2 text-sm leading-6 text-slate-600">
                      {t(
                        "Uma proposta visual mais limpa, mais sólida e mais fácil de compreender em poucos segundos.",
                        "A cleaner, stronger visual proposition that is easier to understand within seconds."
                      )}
                    </p>
                  </div>

                  {/* Floating doodle badge — subtle human touch */}
                  <DoodleBadge
                    text={t("Impacto real", "Real impact")}
                    className="absolute bottom-[8.5rem] left-5 z-10 hidden sm:block"
                  />
                </div>
              </FadeIn>
            </div>
          </section>

          {/* ── VALUE MARQUEE — horizontal scrolling brand values ── */}
          <ValueMarquee labels={marqueeLabels} className="mt-6" />

          {/* ── LIQUID DIVIDER ── */}
          <LiquidDivider color="hsl(42 100% 97%)" height={64} />

          {/* ═══════════════════════════════════════════════════════════════
              MODEL — faux 3D tilt cards + staggered step reveal
          ════════════════════════════════════════════════════════════════ */}
          <section id="model" className="px-4 py-16 md:px-6 md:py-24">
            <div className="mx-auto max-w-6xl">
              <SectionIntro
                eyebrow={t("Modelo ActivEU", "The ActivEU model")}
                title={t(
                  "Uma estrutura simples para criar colaboração real.",
                  "A simple structure for building real collaboration."
                )}
                body={t(
                  "Em vez de excesso visual e promessas vagas, a homepage passa a explicar com clareza o que a ActivEU faz e para quem cria valor.",
                  "Instead of visual overload and vague promises, the homepage now explains clearly what ActivEU does and who it creates value for."
                )}
              />

              {/* Pillar cards — staggered reveal + faux 3D tilt on hover */}
              <SectionReveal className="grid gap-6 lg:grid-cols-3">
                {pillars.map((pillar) => (
                  <RevealItem key={pillar.title} className="h-full">
                    <Tilt3DCard className="h-full" maxTilt={8} hoverScale={1.02}>
                      <article className="landing-panel h-full p-7">
                        <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#fff1e8] text-[#f97316]">
                          <pillar.icon className="h-6 w-6" />
                        </div>
                        <h3 className="mt-6 text-2xl font-semibold tracking-tight text-slate-950">
                          {pillar.title}
                        </h3>
                        <p className="mt-3 text-base leading-7 text-slate-600">{pillar.body}</p>
                      </article>
                    </Tilt3DCard>
                  </RevealItem>
                ))}
              </SectionReveal>

              {/* Step cards — staggered reveal + lift on hover */}
              <SectionReveal className="mt-8 grid gap-6 lg:grid-cols-3">
                {steps.map((step) => (
                  <RevealItem key={step.title}>
                    <motion.article
                      className="rounded-[30px] border border-slate-200 bg-white p-7 shadow-[0_25px_70px_rgba(15,23,42,0.05)]"
                      whileHover={{ y: -4, boxShadow: "0 36px 80px rgba(15,23,42,0.10)" }}
                      transition={{ type: "spring", stiffness: 300, damping: 24 }}
                    >
                      <div className="flex items-center gap-3">
                        <div className="flex h-12 w-12 items-center justify-center rounded-full bg-slate-950 text-white">
                          <step.icon className="h-5 w-5" />
                        </div>
                        <h3 className="text-lg font-semibold text-slate-950">{step.title}</h3>
                      </div>
                      <p className="mt-5 text-base leading-7 text-slate-600">{step.body}</p>
                    </motion.article>
                  </RevealItem>
                ))}
              </SectionReveal>
            </div>
          </section>

          {/* ── WAVE TRANSITION → PROOF ── */}
          <SectionTransition variant="wave" />

          {/* ═══════════════════════════════════════════════════════════════
              PROOF — slide-in image (left) + staggered cards (right)
          ════════════════════════════════════════════════════════════════ */}
          <section id="proof" className="bg-white px-4 py-16 md:px-6 md:py-24">
            <div className="mx-auto max-w-6xl">
              <SectionIntro
                eyebrow={t("Prova e confiança", "Proof and trust")}
                title={t(
                  "Impacto comunicável sem perder humanidade.",
                  "Impact that stays communicable without losing humanity."
                )}
                body={t(
                  "A ActivEU precisa de parecer credível e viva ao mesmo tempo. Por isso a prova surge como conteúdo claro, não como ruído decorativo.",
                  "ActivEU needs to feel credible and alive at the same time. That is why proof shows up as clear content, not decorative noise."
                )}
              />

              <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">

                {/* Photo — slides in from left */}
                <SlideIn direction="left">
                  <div className="landing-proof-photo overflow-hidden">
                    <img
                      alt={t("Parceria ActivEU em ação", "ActivEU partnership in action")}
                      className="h-full min-h-[520px] w-full object-cover"
                      src="/Imagens/parceira.jpg"
                    />
                  </div>
                </SlideIn>

                {/* Proof cards — staggered + lift on hover */}
                <SectionReveal className="grid gap-4">
                  {[
                    {
                      title: t("Narrativa clara", "Clear narrative"),
                      body: t(
                        "Cada projeto deve ser explicado em segundos: quem participa, porque existe e que valor cria.",
                        "Each project should be explainable in seconds: who takes part, why it exists and what value it creates."
                      ),
                    },
                    {
                      title: t("Execução coordenada", "Coordinated execution"),
                      body: t(
                        "A estética só interessa se for acompanhada por organização, logística e confiança operacional.",
                        "Aesthetics only matter when matched by organisation, logistics and operational trust."
                      ),
                    },
                    {
                      title: t("Conteúdo com utilidade", "Content with utility"),
                      body: t(
                        "Fotografia, relato e prova social devem reforçar reputação e não apenas preencher espaço.",
                        "Photography, narrative and social proof should strengthen reputation instead of just filling space."
                      ),
                    },
                  ].map((item) => (
                    <RevealItem key={item.title}>
                      <motion.article
                        className="landing-panel h-full p-7"
                        whileHover={{ y: -3, scale: 1.01 }}
                        transition={{ type: "spring", stiffness: 300, damping: 24 }}
                      >
                        <h3 className="text-2xl font-semibold tracking-tight text-slate-950">
                          {item.title}
                        </h3>
                        <p className="mt-3 text-base leading-7 text-slate-600">{item.body}</p>
                      </motion.article>
                    </RevealItem>
                  ))}
                </SectionReveal>
              </div>
            </div>
          </section>

          {/* ── RIBBON TRANSITION → STORIES ── */}
          <SectionTransition variant="ribbon" flip />

          {/* ═══════════════════════════════════════════════════════════════
              STORIES — editorial cards with hover lift + doodle underline
          ════════════════════════════════════════════════════════════════ */}
          <section id="stories" className="px-4 py-16 md:px-6 md:py-24">
            <div className="mx-auto max-w-6xl">
              <SectionIntro
                eyebrow={t("Histórias", "Stories")}
                title={t(
                  "Experiências que deixam imagem e memória.",
                  "Experiences that leave both image and memory behind."
                )}
                body={t(
                  "Aqui a linguagem é mais editorial: menos blocos pequenos, mais cenas fortes, mais contexto e melhor leitura.",
                  "The language becomes more editorial here: fewer small blocks, stronger scenes, more context and better readability."
                )}
              />

              <SectionReveal className="grid gap-6 lg:grid-cols-2">
                {stories.map((story) => (
                  <RevealItem key={story.title}>
                    <motion.article
                      className="landing-story-card overflow-hidden"
                      whileHover={{ y: -8, boxShadow: "0 44px 90px rgba(15,23,42,0.18)" }}
                      transition={{ type: "spring", stiffness: 280, damping: 22 }}
                    >
                      <img
                        alt={story.title}
                        className="h-[320px] w-full object-cover md:h-[380px]"
                        src={story.image}
                      />
                      <div className="p-7 md:p-8">
                        <p className="eyebrow">{story.tag}</p>
                        <div className="relative mt-4">
                          <h3 className="text-3xl font-semibold tracking-tight text-slate-950">
                            {story.title}
                          </h3>
                          {/* Self-drawing doodle underline — hand-made feel */}
                          <DoodleUnderline className="mt-1 w-full max-w-[220px]" />
                        </div>
                        <p className="mt-4 text-base leading-7 text-slate-600">{story.body}</p>
                      </div>
                    </motion.article>
                  </RevealItem>
                ))}
              </SectionReveal>
            </div>
          </section>

          {/* ═══════════════════════════════════════════════════════════════
              CONTACT — CTA panel with staggered audience cards
          ════════════════════════════════════════════════════════════════ */}
          <section id="contact" className="px-4 pb-14 pt-4 md:px-6 md:pb-24">
            <div className="mx-auto max-w-6xl">
              <FadeIn>
                <div className="landing-cta-panel grid gap-10 p-8 md:p-12 lg:grid-cols-[1fr_0.95fr]">

                  {/* Left — CTA copy */}
                  <div>
                    <p className="eyebrow">{t("Próximo passo", "Next step")}</p>
                    <h2 className="mt-4 max-w-xl text-balance text-4xl font-semibold tracking-tight text-white md:text-5xl">
                      {t(
                        "Se a ActivEU quer impressionar, primeiro tem de ser fácil de perceber.",
                        "If ActivEU wants to impress, it first needs to be easy to understand."
                      )}
                    </h2>
                    <p className="mt-5 max-w-2xl text-lg leading-8 text-white/72">
                      {t(
                        "Esta base devolve clareza e ordem ao site. A partir daqui, qualquer evolução visual pode ser feita com intenção e sem regressar ao caos.",
                        "This foundation brings clarity and order back to the site. From here, any visual upgrade can be made intentionally and without slipping back into chaos."
                      )}
                    </p>
                    <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                      <motion.button
                        className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-6 py-4 text-base font-semibold text-slate-950"
                        onClick={() => window.location.assign("mailto:geral@activeu.pt")}
                        type="button"
                        whileHover={{ scale: 1.04 }}
                        whileTap={{ scale: 0.97 }}
                        transition={{ type: "spring", stiffness: 420, damping: 26 }}
                      >
                        geral@activeu.pt
                        <ArrowRight className="h-4 w-4" />
                      </motion.button>
                      <motion.button
                        className="inline-flex items-center justify-center gap-2 rounded-full border border-white/18 bg-white/8 px-6 py-4 text-base font-semibold text-white"
                        onClick={() => scrollToId("hero")}
                        type="button"
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        transition={{ type: "spring", stiffness: 420, damping: 26 }}
                      >
                        {t("Rever homepage", "Review homepage")}
                        <ChevronRight className="h-4 w-4" />
                      </motion.button>
                    </div>
                    <div className="mt-8 flex flex-wrap gap-3 text-sm text-white/70">
                      <span className="rounded-full border border-white/12 px-4 py-2">
                        {t("Lisboa", "Lisbon")}
                      </span>
                      <span className="rounded-full border border-white/12 px-4 py-2">
                        {t("Parcerias e voluntariado", "Partnerships and volunteering")}
                      </span>
                      <span className="rounded-full border border-white/12 px-4 py-2">
                        {t("Programas intergeracionais", "Intergenerational programs")}
                      </span>
                    </div>
                  </div>

                  {/* Right — audience cards (staggered reveal) */}
                  <SectionReveal className="grid gap-4">
                    {audiences.map((audience) => (
                      <RevealItem key={audience.title}>
                        <motion.article
                          className="landing-audience-card"
                          whileHover={{ scale: 1.02, y: -2 }}
                          transition={{ type: "spring", stiffness: 300, damping: 24 }}
                        >
                          <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white/10 text-[#f8b65f]">
                            <audience.icon className="h-5 w-5" />
                          </div>
                          <div className="mt-5">
                            <h3 className="text-xl font-semibold text-white">{audience.title}</h3>
                            <p className="mt-2 text-base leading-7 text-white/68">{audience.body}</p>
                          </div>
                        </motion.article>
                      </RevealItem>
                    ))}
                  </SectionReveal>
                </div>
              </FadeIn>
            </div>
          </section>
        </main>

        {/* ── FOOTER ─────────────────────────────────────────────────────── */}
        <footer className="border-t border-slate-200 px-4 py-8 md:px-6">
          <div className="mx-auto flex max-w-6xl flex-col gap-3 text-sm text-slate-500 md:flex-row md:items-center md:justify-between">
            <p>ActivEU</p>
            <p>
              {t(
                "Uma presença digital mais clara, mais calma e mais credível.",
                "A digital presence that feels clearer, calmer and more credible."
              )}
            </p>
          </div>
        </footer>
      </div>
    </>
  );
};

export default Index;
