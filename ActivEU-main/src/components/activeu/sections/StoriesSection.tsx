import { motion, useReducedMotion } from "framer-motion";
import { useLanguage } from "@/contexts/useLanguage";
import { RevealItem, SectionReveal } from "@/components/activeu/motion-primitives";
import { DoodleUnderline } from "@/components/activeu/DoodleSystem";
import { ImpactMixedMedia } from "@/components/activeu/ImpactMixedMedia";
import { SectionIntro } from "@/components/activeu/SectionIntro";

export function StoriesSection() {
  const { t } = useLanguage();
  const reduceMotion = useReducedMotion();

  const stories = [
    {
      title: t("Solidarity Action Day", "Solidarity Action Day"),
      body: t(
        "Uma ativação coletiva com energia, direção e visibilidade suficiente para envolver parceiros e comunidade.",
        "A collective activation with enough energy, direction and visibility to engage partners and community.",
      ),
      image: "/Imagens/solidarityactionday.jpg",
      tag: t("ação comunitária", "community action"),
      tagClass: "eyebrow-coral",
      underlineColor: "#e94e77",
    },
    {
      title: t("Encontros intergeracionais", "Intergenerational encounters"),
      body: t(
        "Momentos desenhados para aproximar pessoas, criar empatia e deixar memória positiva nas relações.",
        "Moments designed to bring people closer, create empathy and leave positive memory in relationships.",
      ),
      image: "/Imagens/encontrosintergeracionais.jpg",
      tag: t("ligação humana", "human connection"),
      tagClass: "eyebrow-lime",
      underlineColor: "#ffb020",
    },
  ];

  return (
    <>
      <section id="stories" className="px-4 py-20 md:px-6 md:py-28">
        <div className="mx-auto max-w-6xl">
          <SectionIntro
            eyebrow={t("histórias", "stories")}
            title={t("Experiências que deixam imagem e memória.", "Experiences that leave image and memory behind.")}
            body={t(
              "Aqui a linguagem torna-se mais editorial para mostrar não apenas o que a ActivEU faz, mas como as pessoas vivem essa experiência.",
              "Here the language becomes more editorial to show not only what ActivEU does, but how people live that experience.",
            )}
          />

          <SectionReveal className="mt-12 grid gap-6 lg:grid-cols-2">
            {stories.map((story, index) => (
              <RevealItem key={story.title} variant="pop">
                <motion.article
                  className="group overflow-hidden rounded-[28px] border border-slate-100 bg-white shadow-[0_4px_24px_rgba(30,64,255,0.07)]"
                  whileHover={reduceMotion ? undefined : { y: -6 }}
                  transition={{ type: "spring", stiffness: 260, damping: 26 }}
                >
                  <div className="overflow-hidden">
                    <img
                      alt={story.title}
                      className="h-[300px] w-full object-cover transition duration-700 group-hover:scale-103"
                      src={story.image}
                    />
                  </div>
                  <div className="p-7">
                    <p className={`eyebrow ${story.tagClass}`}>{story.tag}</p>
                    <div className="mt-4">
                      <h3 className="text-2xl font-semibold tracking-tight text-slate-900">{story.title}</h3>
                      <DoodleUnderline className="mt-1.5 w-full max-w-[180px]" color={story.underlineColor} />
                    </div>
                    <p className="mt-3 text-sm leading-7 text-slate-500">{story.body}</p>
                  </div>
                </motion.article>
              </RevealItem>
            ))}
          </SectionReveal>
        </div>
      </section>

      <ImpactMixedMedia t={t} />
    </>
  );
}
