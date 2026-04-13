import { useLanguage } from "@/contexts/LanguageContext";
import { FadeIn, SpotlightCard } from "./motion-primitives";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { MessageSquareQuote } from "lucide-react";

type Testimonial = {
  ptQuote: string;
  enQuote: string;
  name: string;
  ptRole: string;
  enRole: string;
  ptOrg: string;
  enOrg: string;
  initials: string;
  color: string;
};

const testimonials: Testimonial[] = [
  {
    ptQuote: "O Solidarity Action Day mudou completamente a minha perspetiva sobre o mercado de trabalho. Senti-me valorizado, aprendi coisas reais e percebi que a solidariedade pode ser também profissional.",
    enQuote: "The Solidarity Action Day completely changed my perspective on the job market. I felt valued, learned real things and realized that solidarity can also be professional.",
    name: "Mariana Santos",
    ptRole: "Participante",
    enRole: "Participant",
    ptOrg: "Universidade de Lisboa",
    enOrg: "University of Lisbon",
    initials: "MS",
    color: "#60a5fa",
  },
  {
    ptQuote: "Acolher jovens na nossa empresa através da ActivEU foi uma das melhores decisões que tomámos. A energia, a motivação e o impacto social fizeram de nós uma equipa mais consciente.",
    enQuote: "Welcoming young people to our company through ActivEU was one of the best decisions we made. The energy, motivation and social impact made us a more conscious team.",
    name: "Pedro Ferreira",
    ptRole: "Diretor de RSE",
    enRole: "CSR Director",
    ptOrg: "TechVision Portugal",
    enOrg: "TechVision Portugal",
    initials: "PF",
    color: "#ffb007",
  },
  {
    ptQuote: "A transparência e o rigor do modelo ActivEU fazem toda a diferença. Pela primeira vez, sabemos exatamente para onde vai o valor gerado e podemos mostrá-lo com orgulho.",
    enQuote: "The transparency and rigor of the ActivEU model make all the difference. For the first time, we know exactly where the generated value goes and can show it with pride.",
    name: "Ana Lopes",
    ptRole: "Coordenadora",
    enRole: "Coordinator",
    ptOrg: "Fundação Esperança",
    enOrg: "Hope Foundation",
    initials: "AL",
    color: "#f97316",
  },
  {
    ptQuote: "Como município, precisávamos de um parceiro que levasse a sério a relação com os jovens. A ActivEU superou todas as expectativas com um modelo claro e replicável.",
    enQuote: "As a municipality, we needed a partner who took the relationship with young people seriously. ActivEU exceeded all expectations with a clear and replicable model.",
    name: "Dr. João Mendes",
    ptRole: "Vereador da Juventude",
    enRole: "Youth Councillor",
    ptOrg: "Câmara Municipal de Cascais",
    enOrg: "Cascais City Council",
    initials: "JM",
    color: "#34d399",
  },
  {
    ptQuote: "A minha experiência no programa deu-me a confiança que faltava. Hoje trabalho na área que descobri nesse dia e nunca mais olhei para trás.",
    enQuote: "My experience in the program gave me the confidence I was missing. Today I work in the field I discovered that day and never looked back.",
    name: "Tiago Costa",
    ptRole: "Participante 2023",
    enRole: "2023 Participant",
    ptOrg: "Alumni ActivEU",
    enOrg: "ActivEU Alumni",
    initials: "TC",
    color: "#a78bfa",
  },
];

function StarRating({ color }: { color: string }) {
  const gradId = `star-grad-${color.replace("#", "")}`;
  return (
    <div className="flex gap-1">
      <svg width="0" height="0" style={{ position: "absolute" }}>
        <defs>
          <linearGradient id={gradId} x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor={color} />
            <stop offset="100%" stopColor={color} stopOpacity="0.6" />
          </linearGradient>
        </defs>
      </svg>
      {[...Array(5)].map((_, i) => (
        <svg key={i} className="h-3.5 w-3.5" viewBox="0 0 20 20" fill={`url(#${gradId})`}>
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );
}

export function TestimonialCarousel() {
  const { t } = useLanguage();

  return (
    <section className="section-shell py-24">
      <FadeIn className="mx-auto max-w-3xl text-center">
        <div className="eyebrow mx-auto w-fit">
          <MessageSquareQuote size={14} />
          {t("Vozes reais", "Real voices")}
        </div>
        <h2 className="mt-5 font-display text-[clamp(2.6rem,5vw,5rem)] leading-[0.95] tracking-[-0.05em] text-primary">
          {t("Quem viveu, recomenda.", "Those who lived it, recommend it.")}
        </h2>
      </FadeIn>

      <div className="relative mt-14">
        <Carousel opts={{ align: "start", loop: true }} className="w-full">
          <CarouselContent className="-ml-4 md:-ml-6">
            {testimonials.map((item) => (
              <CarouselItem key={item.name} className="basis-[min(100%,380px)] pl-4 sm:basis-[85%] md:basis-[48%] md:pl-6 lg:basis-[36%]">
                <SpotlightCard
                  className="testimonial-card h-full"
                  glareColor={`${item.color}14`}
                  style={{ "--card-accent": item.color } as React.CSSProperties}
                >
                  <div className="relative z-[2] flex h-full flex-col">
                    {/* Decorative quote mark */}
                    <div
                      className="mb-3 font-display text-[5rem] leading-none select-none"
                      style={{ color: item.color, opacity: 0.18, lineHeight: 1 }}
                      aria-hidden="true"
                    >
                      "
                    </div>

                    {/* Quote */}
                    <blockquote className="flex-1 text-[0.94rem] leading-[1.8] text-foreground/72">
                      {t(item.ptQuote, item.enQuote)}
                    </blockquote>

                    {/* Stars */}
                    <div className="mt-5">
                      <StarRating color={item.color} />
                    </div>

                    {/* Divider */}
                    <div
                      className="my-4 h-px w-full"
                      style={{ background: `linear-gradient(90deg, ${item.color}30, transparent)` }}
                    />

                    {/* Author */}
                    <div className="flex items-center gap-3">
                      <div
                        className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full font-display text-sm font-bold"
                        style={{
                          background: `${item.color}18`,
                          border: `1.5px solid ${item.color}35`,
                          color: item.color,
                          boxShadow: `0 0 0 3px ${item.color}0d`,
                        }}
                      >
                        {item.initials}
                      </div>
                      <div>
                        <p className="font-display text-[0.95rem] font-semibold text-primary">{item.name}</p>
                        <p className="text-[0.72rem] text-foreground/50">
                          {t(item.ptRole, item.enRole)} · {t(item.ptOrg, item.enOrg)}
                        </p>
                      </div>
                    </div>
                  </div>
                </SpotlightCard>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="left-1 top-[42%] z-20 h-11 w-11 -translate-y-1/2 border-primary/12 bg-white/95 text-primary shadow-[0_12px_40px_rgba(11,31,92,0.15)] backdrop-blur-md md:left-0" />
          <CarouselNext className="right-1 top-[42%] z-20 h-11 w-11 -translate-y-1/2 border-primary/12 bg-white/95 text-primary shadow-[0_12px_40px_rgba(11,31,92,0.15)] backdrop-blur-md md:right-0" />
        </Carousel>
      </div>
    </section>
  );
}
