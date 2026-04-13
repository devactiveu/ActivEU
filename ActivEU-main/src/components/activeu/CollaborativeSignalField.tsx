import type { LucideIcon } from "lucide-react";
import {
  ArrowRightLeft,
  BadgeCheck,
  Building2,
  Globe2,
  HeartHandshake,
  Sparkles,
  Users2,
} from "lucide-react";
import { motion, useMotionValue, useReducedMotion, useSpring } from "framer-motion";
import { useCallback, useRef } from "react";
import { cn } from "@/lib/utils";

type SectionKey = "hero" | "experience" | "proof" | "stories" | "join";

type CollaborativeSignalFieldProps = {
  t: (pt: string, en: string) => string;
  section: SectionKey;
  className?: string;
  compact?: boolean;
  dark?: boolean;
};

type Tone = "amber" | "blue" | "coral" | "navy";

type ActorNode = {
  slot: "a" | "b" | "c" | "d";
  icon: LucideIcon;
  tone: Tone;
  ptLabel: string;
  enLabel: string;
  ptMeta: string;
  enMeta: string;
};

const actorNodes: ActorNode[] = [
  {
    slot: "a",
    icon: Users2,
    tone: "amber",
    ptLabel: "Juventude",
    enLabel: "Youth",
    ptMeta: "entra e participa",
    enMeta: "joins and participates",
  },
  {
    slot: "b",
    icon: Building2,
    tone: "blue",
    ptLabel: "Empresas",
    enLabel: "Companies",
    ptMeta: "abrem espaco real",
    enMeta: "open real space",
  },
  {
    slot: "c",
    icon: HeartHandshake,
    tone: "coral",
    ptLabel: "Causas",
    enLabel: "Causes",
    ptMeta: "recebem retorno",
    enMeta: "receive return",
  },
  {
    slot: "d",
    icon: Globe2,
    tone: "navy",
    ptLabel: "Comunidade",
    enLabel: "Community",
    ptMeta: "ganha continuidade",
    enMeta: "gains continuity",
  },
];

const sectionContent = {
  hero: {
    kickerIcon: Sparkles,
    ptKicker: "colaboracao em tempo real",
    enKicker: "real-time collaboration",
    ptTitle: "A missao da ActivEU deve parecer um circuito vivo.",
    enTitle: "ActivEU's mission should feel like a living circuit.",
    ptBody:
      "Em vez de animacoes isoladas, o site passa a sugerir presenca simultanea: juventude, empresas, causas e comunidade a enviarem sinais uns aos outros em tempo real.",
    enBody:
      "Instead of isolated animations, the site now suggests simultaneous presence: youth, companies, causes and community sending signals to one another in real time.",
    ptCenter: "Missao partilhada",
    enCenter: "Shared mission",
    ptStatus: "atividade sincronizada",
    enStatus: "synchronized activity",
  },
  experience: {
    kickerIcon: ArrowRightLeft,
    ptKicker: "um sistema que se responde",
    enKicker: "a system that responds",
    ptTitle: "Os tres atores deixam de parecer blocos separados.",
    enTitle: "The three actors no longer feel like separate blocks.",
    ptBody:
      "Cada nodo recebe foco, mas o valor aparece nas ligacoes. A linguagem motion prova que a ActivEU funciona como troca, nao como monologo institucional.",
    enBody:
      "Each node gets focus, but the value appears in the links. The motion language proves ActivEU works as exchange, not as an institutional monologue.",
    ptCenter: "Circuito ActivEU",
    enCenter: "ActivEU circuit",
    ptStatus: "troca continua",
    enStatus: "continuous exchange",
  },
  proof: {
    kickerIcon: BadgeCheck,
    ptKicker: "credibilidade em movimento",
    enKicker: "credibility in motion",
    ptTitle: "A prova tambem pode parecer viva.",
    enTitle: "Proof can feel alive too.",
    ptBody:
      "Os sinais percorrem o ecossistema para mostrar que o impacto e verificavel, distribuido e acompanhado. A animacao reforca estrutura em vez de competir com ela.",
    enBody:
      "Signals travel across the ecosystem to show that impact is verifiable, distributed and tracked. Motion reinforces structure instead of competing with it.",
    ptCenter: "Impacto verificado",
    enCenter: "Verified impact",
    ptStatus: "sinais confirmados",
    enStatus: "signals confirmed",
  },
  stories: {
    kickerIcon: Globe2,
    ptKicker: "historia partilhada",
    enKicker: "shared story",
    ptTitle: "Cada cena herda energia da anterior.",
    enTitle: "Each scene inherits energy from the previous one.",
    ptBody:
      "A colaboracao em tempo real aqui vira atmosfera narrativa: os mesmos atores reaparecem em novos contextos, como se o site inteiro respirasse a mesma causa comum.",
    enBody:
      "Real-time collaboration becomes narrative atmosphere here: the same actors reappear in new contexts, as if the whole site were breathing the same shared cause.",
    ptCenter: "Memoria coletiva",
    enCenter: "Collective memory",
    ptStatus: "presenca distribuida",
    enStatus: "distributed presence",
  },
  join: {
    kickerIcon: Sparkles,
    ptKicker: "convite ao circuito",
    enKicker: "invitation into the circuit",
    ptTitle: "O fecho deve parecer uma porta aberta, nao um ponto final.",
    enTitle: "The ending should feel like an open door, not a full stop.",
    ptBody:
      "No CTA, a motion colaborativa mostra que entrar na ActivEU e juntar-se a uma corrente de pessoas e instituicoes ja em movimento.",
    enBody:
      "In the CTA, collaborative motion shows that joining ActivEU means stepping into a current of people and institutions already in motion.",
    ptCenter: "Entrada aberta",
    enCenter: "Open entry",
    ptStatus: "junta-te ao fluxo",
    enStatus: "join the flow",
  },
} satisfies Record<
  SectionKey,
  {
    kickerIcon: LucideIcon;
    ptKicker: string;
    enKicker: string;
    ptTitle: string;
    enTitle: string;
    ptBody: string;
    enBody: string;
    ptCenter: string;
    enCenter: string;
    ptStatus: string;
    enStatus: string;
  }
>;

const liveStrips = [
  {
    tone: "amber" as const,
    ptLabel: "participacao ativa",
    enLabel: "active participation",
  },
  {
    tone: "blue" as const,
    ptLabel: "gesto institucional",
    enLabel: "institutional action",
  },
  {
    tone: "coral" as const,
    ptLabel: "impacto devolvido",
    enLabel: "returned impact",
  },
];

export function CollaborativeSignalField({
  t,
  section,
  className,
  compact = false,
  dark = false,
}: CollaborativeSignalFieldProps) {
  const config = sectionContent[section];
  const KickerIcon = config.kickerIcon;
  const reduceMotion = useReducedMotion();
  const stageRef = useRef<HTMLDivElement | null>(null);
  const rotateX = useMotionValue(0);
  const rotateY = useMotionValue(0);
  const springRotateX = useSpring(rotateX, { stiffness: 160, damping: 18, mass: 0.45 });
  const springRotateY = useSpring(rotateY, { stiffness: 160, damping: 18, mass: 0.45 });

  const handleMove = useCallback(
    (event: React.MouseEvent<HTMLDivElement>) => {
      if (reduceMotion) return;
      const rect = stageRef.current?.getBoundingClientRect();
      if (!rect) return;
      const px = (event.clientX - rect.left) / rect.width - 0.5;
      const py = (event.clientY - rect.top) / rect.height - 0.5;
      rotateX.set(py * -8);
      rotateY.set(px * 10);
    },
    [reduceMotion, rotateX, rotateY],
  );

  const handleLeave = useCallback(() => {
    rotateX.set(0);
    rotateY.set(0);
  }, [rotateX, rotateY]);

  return (
    <section
      className={cn(
        "collaborative-signal-field",
        compact && "collaborative-signal-field-compact",
        dark && "collaborative-signal-field-dark",
        className,
      )}
    >
      <div className="collaborative-signal-grid">
        <div className="collaborative-signal-copy">
          <div className="collaborative-signal-kicker">
            <KickerIcon size={14} />
            {t(config.ptKicker, config.enKicker)}
          </div>
          <h3 className="collaborative-signal-title">{t(config.ptTitle, config.enTitle)}</h3>
          <p className="collaborative-signal-body">{t(config.ptBody, config.enBody)}</p>

          <div className="collaborative-live-strip" aria-label={t("estado da colaboracao", "collaboration status")}>
            {liveStrips.map((item, index) => (
              <motion.div
                key={item.enLabel}
                className={cn("collaborative-live-pill", `collaborative-live-pill-${item.tone}`)}
                animate={
                  reduceMotion
                    ? undefined
                    : {
                        y: [0, -3, 0],
                        opacity: [0.84, 1, 0.84],
                      }
                }
                transition={{
                  duration: 3.8,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: index * 0.32,
                }}
              >
                <span className="collaborative-live-dot" />
                {t(item.ptLabel, item.enLabel)}
              </motion.div>
            ))}
          </div>
        </div>

        <motion.div
          ref={stageRef}
          className="collaborative-stage"
          style={reduceMotion ? undefined : { rotateX: springRotateX, rotateY: springRotateY }}
          onMouseMove={handleMove}
          onMouseLeave={handleLeave}
        >
          <div className="collaborative-stage-bg" aria-hidden="true" />
          <div className="collaborative-stage-noise" aria-hidden="true" />

          <svg className="collaborative-stage-lines" viewBox="0 0 360 240" fill="none" aria-hidden="true">
            <path d="M88 74C126 60 160 74 180 118" />
            <path d="M270 76C238 60 206 72 180 118" />
            <path d="M86 178C122 184 158 164 180 118" />
            <path d="M276 174C238 180 204 164 180 118" />
            <path d="M88 74C132 126 210 122 270 76" className="collaborative-stage-lines-subtle" />
            <path d="M86 178C138 136 222 142 276 174" className="collaborative-stage-lines-subtle" />

            {!reduceMotion && (
              <>
                {[
                  { d: "M88 74C126 60 160 74 180 118", delay: 0, tone: "amber" },
                  { d: "M270 76C238 60 206 72 180 118", delay: 0.7, tone: "blue" },
                  { d: "M86 178C122 184 158 164 180 118", delay: 1.2, tone: "coral" },
                  { d: "M276 174C238 180 204 164 180 118", delay: 1.8, tone: "navy" },
                ].map((path) => (
                  <motion.path
                    key={path.d}
                    d={path.d}
                    className={cn("collaborative-stage-lines-active", `collaborative-stage-lines-active-${path.tone}`)}
                    strokeDasharray="8 16"
                    animate={{ strokeDashoffset: [0, -96], opacity: [0.2, 0.94, 0.2] }}
                    transition={{ duration: 4.8, repeat: Infinity, ease: "linear", delay: path.delay }}
                  />
                ))}
              </>
            )}
          </svg>

          <motion.div
            className="collaborative-core"
            animate={
              reduceMotion
                ? undefined
                : {
                    scale: [1, 1.035, 1],
                  }
            }
            transition={{ duration: 4.4, repeat: Infinity, ease: "easeInOut" }}
          >
            <motion.span
              className="collaborative-core-ring collaborative-core-ring-a"
              animate={reduceMotion ? undefined : { scale: [1, 1.3], opacity: [0.36, 0] }}
              transition={{ duration: 2.6, repeat: Infinity, ease: "easeOut" }}
            />
            <motion.span
              className="collaborative-core-ring collaborative-core-ring-b"
              animate={reduceMotion ? undefined : { scale: [1, 1.42], opacity: [0.22, 0] }}
              transition={{ duration: 2.6, repeat: Infinity, ease: "easeOut", delay: 1.15 }}
            />
            <span className="collaborative-core-kicker">{t(config.ptStatus, config.enStatus)}</span>
            <strong>{t(config.ptCenter, config.enCenter)}</strong>
          </motion.div>

          {actorNodes.map((node, index) => {
            const Icon = node.icon;
            return (
              <motion.div
                key={node.enLabel}
                className={cn(
                  "collaborative-node",
                  `collaborative-node-${node.slot}`,
                  `collaborative-node-${node.tone}`,
                )}
                animate={
                  reduceMotion
                    ? undefined
                    : {
                        y: [0, -6, 0],
                        x: [0, index % 2 === 0 ? 3 : -3, 0],
                      }
                }
                transition={{
                  duration: 4.5 + index * 0.4,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: index * 0.28,
                }}
              >
                <span className="collaborative-node-icon">
                  <Icon size={17} />
                </span>
                <div>
                  <span className="collaborative-node-label">{t(node.ptLabel, node.enLabel)}</span>
                  <p className="collaborative-node-meta">{t(node.ptMeta, node.enMeta)}</p>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
