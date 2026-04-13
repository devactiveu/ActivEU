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
} from "@/components/activeu/motion-primitives";

type NavItem = {
  id: string;
  label: string;
};

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

type SectionIntroProps = {
  eyebrow: string;
  title: string;
  body: string;
};

const SectionIntro = ({ eyebrow, title, body }: SectionIntroProps) => (
  <div className="mx-auto mb-10 max-w-3xl text-center md:mb-14">
    <p className="eyebrow mb-4 justify-center">{eyebrow}</p>
    <h2 className="text-balance text-3xl font-semibold tracking-tight text-slate-950 md:text-5xl">
      {title}
    </h2>
    <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-slate-600 md:text-lg">
      {body}
    </p>
  </div>
);

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

  const metrics = [
    {
      value: "3",
      label: t("frentes ligadas", "connected fronts"),
      body: t("jovens, empresas e causas", "young people, companies and causes"),
    },
    {
      value: "1",
      label: t("experiência integrada", "integrated experience"),
      body: t("do conceito à ativação no terreno", "from concept to activation on the ground"),
    },
    {
      value: "100%",
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

  return (
    <>
      <ScrollProgress />
      <div className="min-h-screen overflow-x-hidden bg-[linear-gradient(180deg,#fffdf8_0%,#fff8ef_32%,#ffffff_100%)] text-slate-950">
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
              <button
                className="inline-flex items-center gap-2 rounded-full bg-slate-950 px-5 py-3 text-sm font-semibold text-white transition hover:bg-slate-800"
                onClick={() => scrollToId("contact")}
                type="button"
              >
                {t("Falar com a ActivEU", "Talk to ActivEU")}
                <ArrowRight className="h-4 w-4" />
              </button>
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
          <section id="hero" className="px-4 pb-16 pt-32 md:px-6 md:pb-24 md:pt-40">
            <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
                <div className="max-w-2xl">
                  <p className="eyebrow mb-6">
                    {t("Plataforma de impacto social com clareza", "A social impact platform with clarity")}
                  </p>
                  <h1 className="max-w-[8.5ch] text-4xl font-semibold leading-[0.94] tracking-[-0.04em] text-slate-950 sm:max-w-[9ch] sm:text-5xl md:max-w-xl md:text-6xl lg:text-[5.5rem]">
                    {t(
                      "Ligamos juventude, empresas e causas.",
                      "We connect youth, companies and causes."
                    )}
                  </h1>
                  <p className="mt-6 max-w-xl text-lg leading-8 text-slate-600 md:text-xl">
                    {t(
                      "Desenhamos experiências sociais mais humanas, legíveis e memoráveis para jovens, empresas e parceiros que querem gerar impacto real.",
                      "We design social experiences that feel more human, legible and memorable for young people, companies and partners seeking real impact."
                    )}
                  </p>
                  <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                    <button
                      className="inline-flex items-center justify-center gap-2 rounded-full bg-[#f97316] px-6 py-4 text-base font-semibold text-white shadow-[0_20px_50px_rgba(249,115,22,0.28)] transition hover:bg-[#ea580c]"
                      onClick={() => scrollToId("contact")}
                      type="button"
                    >
                      {t("Agendar conversa", "Schedule a conversation")}
                      <ArrowRight className="h-4 w-4" />
                    </button>
                    <button
                      className="inline-flex items-center justify-center gap-2 rounded-full border border-slate-200 bg-white px-6 py-4 text-base font-semibold text-slate-800 transition hover:border-slate-300 hover:bg-slate-50"
                      onClick={() => scrollToId("model")}
                      type="button"
                    >
                      {t("Ver como funciona", "See how it works")}
                      <ChevronRight className="h-4 w-4" />
                    </button>
                  </div>
                  <div className="mt-10 grid gap-4 sm:grid-cols-3">
                    {metrics.map((metric) => (
                      <div key={metric.label}>
                        <div className="landing-chip-card h-full">
                          <p className="text-3xl font-semibold tracking-[-0.05em] text-slate-950">{metric.value}</p>
                          <p className="mt-3 text-sm font-semibold uppercase tracking-[0.18em] text-slate-500">{metric.label}</p>
                          <p className="mt-2 text-sm leading-6 text-slate-600">{metric.body}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="landing-hero-frame relative overflow-hidden">
                  <img
                    alt={t("Equipa ActivEU em colaboração", "ActivEU team in collaboration")}
                    className="absolute inset-0 h-full w-full object-cover"
                    src="/Imagens/team.jpg"
                  />
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
                </div>
            </div>
          </section>

          <section id="model" className="px-4 py-16 md:px-6 md:py-24">
            <div className="mx-auto max-w-6xl">
              <SectionIntro
                eyebrow={t("Modelo ActivEU", "The ActivEU model")}
                title={t("Uma estrutura simples para criar colaboração real.", "A simple structure for building real collaboration.")}
                body={t(
                  "Em vez de excesso visual e promessas vagas, a homepage passa a explicar com clareza o que a ActivEU faz e para quem cria valor.",
                  "Instead of visual overload and vague promises, the homepage now explains clearly what ActivEU does and who it creates value for."
                )}
              />

              <div className="grid gap-6 lg:grid-cols-3">
                {pillars.map((pillar) => (
                  <div key={pillar.title}>
                    <article className="landing-panel h-full p-7">
                      <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#fff1e8] text-[#f97316]">
                        <pillar.icon className="h-6 w-6" />
                      </div>
                      <h3 className="mt-6 text-2xl font-semibold tracking-tight text-slate-950">{pillar.title}</h3>
                      <p className="mt-3 text-base leading-7 text-slate-600">{pillar.body}</p>
                    </article>
                  </div>
                ))}
              </div>

              <div className="mt-8 grid gap-6 lg:grid-cols-3">
                {steps.map((step) => (
                  <div key={step.title}>
                    <article className="rounded-[30px] border border-slate-200 bg-white p-7 shadow-[0_25px_70px_rgba(15,23,42,0.05)]">
                      <div className="flex items-center gap-3">
                        <div className="flex h-12 w-12 items-center justify-center rounded-full bg-slate-950 text-white">
                          <step.icon className="h-5 w-5" />
                        </div>
                        <h3 className="text-lg font-semibold text-slate-950">{step.title}</h3>
                      </div>
                      <p className="mt-5 text-base leading-7 text-slate-600">{step.body}</p>
                    </article>
                  </div>
                ))}
              </div>
            </div>
          </section>

          <section id="proof" className="bg-white px-4 py-16 md:px-6 md:py-24">
            <div className="mx-auto max-w-6xl">
              <SectionIntro
                eyebrow={t("Prova e confiança", "Proof and trust")}
                title={t("Impacto comunicável sem perder humanidade.", "Impact that stays communicable without losing humanity.")}
                body={t(
                  "A ActivEU precisa de parecer credível e viva ao mesmo tempo. Por isso a prova surge como conteúdo claro, não como ruído decorativo.",
                  "ActivEU needs to feel credible and alive at the same time. That is why proof shows up as clear content, not decorative noise."
                )}
              />

              <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
                  <div className="landing-proof-photo overflow-hidden">
                    <img
                      alt={t("Parceria ActivEU em ação", "ActivEU partnership in action")}
                      className="h-full min-h-[520px] w-full object-cover"
                      src="/Imagens/parceira.jpg"
                    />
                  </div>

                <div className="grid gap-4">
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
                    <div key={item.title}>
                      <article className="landing-panel h-full p-7">
                        <h3 className="text-2xl font-semibold tracking-tight text-slate-950">{item.title}</h3>
                        <p className="mt-3 text-base leading-7 text-slate-600">{item.body}</p>
                      </article>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>

          <section id="stories" className="px-4 py-16 md:px-6 md:py-24">
            <div className="mx-auto max-w-6xl">
              <SectionIntro
                eyebrow={t("Histórias", "Stories")}
                title={t("Experiências que deixam imagem e memória.", "Experiences that leave both image and memory behind.")}
                body={t(
                  "Aqui a linguagem é mais editorial: menos blocos pequenos, mais cenas fortes, mais contexto e melhor leitura.",
                  "The language becomes more editorial here: fewer small blocks, stronger scenes, more context and better readability."
                )}
              />

              <div className="grid gap-6 lg:grid-cols-2">
                {stories.map((story) => (
                  <div key={story.title}>
                    <article className="landing-story-card overflow-hidden">
                      <img alt={story.title} className="h-[320px] w-full object-cover md:h-[380px]" src={story.image} />
                      <div className="p-7 md:p-8">
                        <p className="eyebrow">{story.tag}</p>
                        <h3 className="mt-4 text-3xl font-semibold tracking-tight text-slate-950">{story.title}</h3>
                        <p className="mt-4 text-base leading-7 text-slate-600">{story.body}</p>
                      </div>
                    </article>
                  </div>
                ))}
              </div>
            </div>
          </section>

          <section id="contact" className="px-4 pb-14 pt-4 md:px-6 md:pb-24">
            <div className="mx-auto max-w-6xl">
                <div className="landing-cta-panel grid gap-10 p-8 md:p-12 lg:grid-cols-[1fr_0.95fr]">
                  <div>
                    <p className="eyebrow">{t("Próximo passo", "Next step")}</p>
                    <h2 className="mt-4 max-w-xl text-balance text-4xl font-semibold tracking-tight text-white md:text-5xl">
                      {t("Se a ActivEU quer impressionar, primeiro tem de ser fácil de perceber.", "If ActivEU wants to impress, it first needs to be easy to understand.")}
                    </h2>
                    <p className="mt-5 max-w-2xl text-lg leading-8 text-white/72">
                      {t(
                        "Esta base devolve clareza e ordem ao site. A partir daqui, qualquer evolução visual pode ser feita com intenção e sem regressar ao caos.",
                        "This foundation brings clarity and order back to the site. From here, any visual upgrade can be made intentionally and without slipping back into chaos."
                      )}
                    </p>
                    <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                      <button
                        className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-6 py-4 text-base font-semibold text-slate-950 transition hover:bg-white/90"
                        onClick={() => window.location.assign("mailto:geral@activeu.pt")}
                        type="button"
                      >
                        geral@activeu.pt
                        <ArrowRight className="h-4 w-4" />
                      </button>
                      <button
                        className="inline-flex items-center justify-center gap-2 rounded-full border border-white/18 bg-white/8 px-6 py-4 text-base font-semibold text-white transition hover:bg-white/12"
                        onClick={() => scrollToId("hero")}
                        type="button"
                      >
                        {t("Rever homepage", "Review homepage")}
                        <ChevronRight className="h-4 w-4" />
                      </button>
                    </div>
                    <div className="mt-8 flex flex-wrap gap-3 text-sm text-white/70">
                      <span className="rounded-full border border-white/12 px-4 py-2">{t("Lisboa", "Lisbon")}</span>
                      <span className="rounded-full border border-white/12 px-4 py-2">{t("Parcerias e voluntariado", "Partnerships and volunteering")}</span>
                      <span className="rounded-full border border-white/12 px-4 py-2">{t("Programas intergeracionais", "Intergenerational programs")}</span>
                    </div>
                  </div>

                  <div className="grid gap-4">
                    {audiences.map((audience) => (
                      <article key={audience.title} className="landing-audience-card">
                        <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white/10 text-[#f8b65f]">
                          <audience.icon className="h-5 w-5" />
                        </div>
                        <div className="mt-5">
                          <h3 className="text-xl font-semibold text-white">{audience.title}</h3>
                          <p className="mt-2 text-base leading-7 text-white/68">{audience.body}</p>
                        </div>
                      </article>
                    ))}
                  </div>
                </div>
            </div>
          </section>
        </main>

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
