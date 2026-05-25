import { BadgeCheck, Building2, Globe2, HeartHandshake, Sparkles, Users2, type LucideIcon } from "lucide-react";
import { motion, useMotionValue, useReducedMotion, useSpring } from "framer-motion";
import { useRef } from "react";
import { FloatIcon } from "./motion-primitives";
import { DoodleStar } from "./DoodleSystem";

type SectionKey = "model" | "cta";

type Translator = (pt: string, en: string) => string;

type Actor = {
  icon: LucideIcon;
  labelPt: string;
  labelEn: string;
  metaPt: string;
  metaEn: string;
  iconBg: string;
  ring: string;
  position: string;
};

const actors: Actor[] = [
  {
    icon: Users2,
    labelPt: "Juventude",
    labelEn: "Youth",
    metaPt: "entra com voz e presença",
    metaEn: "joins with voice and presence",
    iconBg: "bg-gradient-to-br from-[#ffb020] to-[#ff8a00] text-white",
    ring: "border-[#ffb020]/45",
    position: "left-3 top-3 md:left-6 md:top-5",
  },
  {
    icon: Building2,
    labelPt: "Empresas",
    labelEn: "Companies",
    metaPt: "abrem espaço e recursos",
    metaEn: "open space and resources",
    iconBg: "bg-gradient-to-br from-[#1e40ff] to-[#5876ff] text-white",
    ring: "border-[#1e40ff]/45",
    position: "right-3 top-3 md:right-6 md:top-5",
  },
  {
    icon: HeartHandshake,
    labelPt: "Causas",
    labelEn: "Causes",
    metaPt: "recebem impacto útil",
    metaEn: "receive useful impact",
    iconBg: "bg-gradient-to-br from-[#e94e77] to-[#ff5e5b] text-white",
    ring: "border-[#e94e77]/45",
    position: "left-3 bottom-3 md:left-6 md:bottom-5",
  },
  {
    icon: Globe2,
    labelPt: "Comunidade",
    labelEn: "Community",
    metaPt: "ganha continuidade",
    metaEn: "gains continuity",
    iconBg: "bg-gradient-to-br from-[#b7e934] to-[#9bd41d] text-white",
    ring: "border-[#b7e934]/55",
    position: "right-3 bottom-3 md:right-6 md:bottom-5",
  },
];

const copy = {
  model: {
    eyebrowPt: "modelo relacional",
    eyebrowEn: "relational model",
    titlePt: "A ActivEU funciona quando todos os lados se encontram no mesmo gesto.",
    titleEn: "ActivEU works when every side meets inside the same gesture.",
    bodyPt:
      "A proposta não é um bloco institucional. É uma circulação clara entre jovens, empresas, causas e comunidade, com papéis visíveis e impacto verificável.",
    bodyEn:
      "The proposition is not an institutional block. It is a clear circulation between youth, companies, causes and community, with visible roles and verifiable impact.",
    centerPt: "circuito ActivEU",
    centerEn: "ActivEU circuit",
    statusPt: "colaboração ativa",
    statusEn: "active collaboration",
  },
  cta: {
    eyebrowPt: "parceria em curso",
    eyebrowEn: "partnership in motion",
    titlePt: "Entrar na ActivEU é juntar-se a uma corrente já em movimento.",
    titleEn: "Joining ActivEU means stepping into a current that is already moving.",
    bodyPt:
      "O convite final deve parecer real: pessoas, instituições e causas com espaço para colaborar de forma concreta, organizada e humana.",
    bodyEn:
      "The final invitation should feel real: people, institutions and causes with room to collaborate in a concrete, organized and human way.",
    centerPt: "entrada aberta",
    centerEn: "open entry",
    statusPt: "pronto para ativar",
    statusEn: "ready to activate",
  },
} as const;

export function CollaborativeSignalField({
  t,
  section,
}: {
  t: Translator;
  section: SectionKey;
}) {
  const reduceMotion = useReducedMotion();
  const ref = useRef<HTMLDivElement>(null);
  const frameRef = useRef<number | null>(null);
  const rotateX = useMotionValue(0);
  const rotateY = useMotionValue(0);
  const springX = useSpring(rotateX, { stiffness: 150, damping: 18 });
  const springY = useSpring(rotateY, { stiffness: 150, damping: 18 });
  const content = copy[section];

  const handleMove = (event: React.MouseEvent<HTMLDivElement>) => {
    if (reduceMotion) return;
    if (frameRef.current !== null) return;
    const clientX = event.clientX;
    const clientY = event.clientY;
    frameRef.current = requestAnimationFrame(() => {
      const rect = ref.current?.getBoundingClientRect();
      if (rect) {
        const px = (clientX - rect.left) / rect.width - 0.5;
        const py = (clientY - rect.top) / rect.height - 0.5;
        rotateX.set(py * -8);
        rotateY.set(px * 8);
      }
      frameRef.current = null;
    });
  };

  const reset = () => {
    rotateX.set(0);
    rotateY.set(0);
  };

  return (
    <section className="grid gap-6 lg:grid-cols-[0.92fr_1.08fr] lg:items-center text-slate-950">
      <div>
        <p className="eyebrow">
          <Sparkles className="h-3.5 w-3.5" />
          {t(content.eyebrowPt, content.eyebrowEn)}
        </p>
        <h3 className="mt-5 max-w-[14ch] text-3xl font-semibold tracking-[-0.04em] md:text-5xl text-slate-950">
          {t(content.titlePt, content.titleEn)}
        </h3>
        <p className="mt-4 max-w-xl text-base leading-8 text-slate-600">
          {t(content.bodyPt, content.bodyEn)}
        </p>
      </div>

      <motion.div
        ref={ref}
        className="relative min-h-[340px] overflow-hidden rounded-[32px] border-2 border-white bg-gradient-to-br from-white via-[#fffaf0] to-[#f0f5ff] shadow-[0_24px_70px_rgba(30,64,255,0.12)]"
        style={reduceMotion ? undefined : { rotateX: springX, rotateY: springY, transformStyle: "preserve-3d" }}
        onMouseMove={handleMove}
        onMouseLeave={reset}
      >
        <div className="absolute inset-0 opacity-70" aria-hidden="true">
          <motion.div
            className="absolute -left-12 -top-12 h-44 w-44 rounded-full bg-[radial-gradient(circle,rgba(255,176,32,0.45),transparent_65%)] blur-2xl"
            animate={reduceMotion ? undefined : { scale: [1, 1.18, 1], rotate: [0, 12, 0] }}
            transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.div
            className="absolute -right-10 -bottom-10 h-44 w-44 rounded-full bg-[radial-gradient(circle,rgba(30,64,255,0.35),transparent_65%)] blur-2xl"
            animate={reduceMotion ? undefined : { scale: [1, 1.2, 1], rotate: [0, -10, 0] }}
            transition={{ duration: 11, repeat: Infinity, ease: "easeInOut", delay: 0.6 }}
          />
          <div className="absolute left-1/2 top-1/2 h-52 w-52 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle,rgba(233,78,119,0.18),transparent_70%)]" />
          <div className="absolute inset-0 bg-[linear-gradient(rgba(30,64,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(30,64,255,0.05)_1px,transparent_1px)] bg-[size:26px_26px] opacity-60" />
        </div>

        <svg className="absolute inset-0 h-full w-full" viewBox="0 0 360 240" fill="none" aria-hidden="true">
          <defs>
            <linearGradient id={`signal-line-${section}`} x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#ffb020" stopOpacity="0.5" />
              <stop offset="50%" stopColor="#e94e77" stopOpacity="0.5" />
              <stop offset="100%" stopColor="#1e40ff" stopOpacity="0.5" />
            </linearGradient>
          </defs>
          <motion.path
            d="M88 74C126 60 160 74 180 118"
            stroke={`url(#signal-line-${section})`}
            strokeWidth="2.5"
            strokeLinecap="round"
            initial={reduceMotion ? false : { pathLength: 0 }}
            whileInView={reduceMotion ? {} : { pathLength: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, ease: "easeOut" }}
          />
          <motion.path
            d="M270 76C238 60 206 72 180 118"
            stroke={`url(#signal-line-${section})`}
            strokeWidth="2.5"
            strokeLinecap="round"
            initial={reduceMotion ? false : { pathLength: 0 }}
            whileInView={reduceMotion ? {} : { pathLength: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, ease: "easeOut", delay: 0.15 }}
          />
          <motion.path
            d="M86 178C122 184 158 164 180 118"
            stroke={`url(#signal-line-${section})`}
            strokeWidth="2.5"
            strokeLinecap="round"
            initial={reduceMotion ? false : { pathLength: 0 }}
            whileInView={reduceMotion ? {} : { pathLength: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, ease: "easeOut", delay: 0.3 }}
          />
          <motion.path
            d="M276 174C238 180 204 164 180 118"
            stroke={`url(#signal-line-${section})`}
            strokeWidth="2.5"
            strokeLinecap="round"
            initial={reduceMotion ? false : { pathLength: 0 }}
            whileInView={reduceMotion ? {} : { pathLength: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, ease: "easeOut", delay: 0.45 }}
          />
        </svg>

        <motion.div
          className="absolute left-1/2 top-1/2 z-10 flex h-36 w-36 -translate-x-1/2 -translate-y-1/2 flex-col items-center justify-center rounded-full border-2 border-white bg-white/95 text-center shadow-[0_18px_40px_rgba(30,64,255,0.18)] backdrop-blur"
          animate={reduceMotion ? undefined : { y: [0, -4, 0] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        >
          <span className="text-[10px] font-semibold uppercase tracking-[0.22em] text-slate-500">
            {t(content.statusPt, content.statusEn)}
          </span>
          <strong className="mt-2 max-w-[9ch] text-lg font-semibold leading-tight text-slate-950">
            {t(content.centerPt, content.centerEn)}
          </strong>
          <span className="mt-2 inline-flex items-center gap-1 text-[9px] font-semibold uppercase tracking-[0.22em] text-[#1e40ff]">
            <BadgeCheck className="h-3 w-3" />
            ativo
          </span>
        </motion.div>

        {actors.map((actor, index) => {
          const Icon = actor.icon;
          return (
            <motion.div
              key={actor.labelEn}
              className={`absolute z-10 flex max-w-[152px] items-center gap-3 rounded-[22px] border-2 ${actor.ring} bg-white/95 px-3 py-3 text-slate-900 shadow-[0_14px_30px_rgba(30,64,255,0.10)] ${actor.position}`}
              animate={reduceMotion ? undefined : { y: [0, -5, 0], x: [0, index % 2 === 0 ? 2 : -2, 0] }}
              transition={{ duration: 4 + index * 0.4, repeat: Infinity, ease: "easeInOut" }}
              whileHover={reduceMotion ? undefined : { scale: 1.05, y: -8 }}
            >
              <span className={`inline-flex h-10 w-10 items-center justify-center rounded-full shadow-md ${actor.iconBg}`}>
                <Icon className="h-4 w-4" />
              </span>
              <div>
                <span className="block text-sm font-semibold">{t(actor.labelPt, actor.labelEn)}</span>
                <span className="block text-xs text-slate-500">
                  {t(actor.metaPt, actor.metaEn)}
                </span>
              </div>
            </motion.div>
          );
        })}

        {!reduceMotion && (
          <>
            <motion.div
              className="absolute inset-x-10 bottom-1/2 h-px bg-[linear-gradient(90deg,transparent,rgba(255,176,32,0.85),rgba(233,78,119,0.6),transparent)]"
              animate={{ opacity: [0.2, 0.95, 0.2], x: [-10, 12, -10] }}
              transition={{ duration: 3.6, repeat: Infinity, ease: "easeInOut" }}
            />
            <FloatIcon className="absolute right-6 top-1/2 -translate-y-1/2" amplitude={6} delay={0.4}>
              <DoodleStar size={28} color="#ffb020" />
            </FloatIcon>
          </>
        )}
      </motion.div>
    </section>
  );
}
