import { useLanguage } from '@/contexts/LanguageContext';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

const steps = [
  {
    num: '01',
    titlePt: 'Regista-te',
    titleEn: 'Sign Up',
    descPt: 'Registas-te em menos de dois minutos. Carregas uma prova académica simples (Declaração ou certificado). É fácil e rápido! A plataforma valida e ativa o teu perfil com segurança.',
    descEn: 'Sign up in less than two minutes. Upload a simple academic proof (Declaration or certificate). It\'s easy and fast! The platform validates and activates your profile securely.',
    color: 'sticker-burgundy',
  },
  {
    num: '02',
    titlePt: 'Candidata-te e destaca-te',
    titleEn: 'Apply and stand out',
    descPt: 'Exploras oportunidades e candidatas-te às que te interessam. A partir daí, o nosso algoritmo analisa a compatibilidade de forma meritocrática (sem foto, sem nome, sem idade) — só aquilo que realmente importa.',
    descEn: 'Explore opportunities and apply to the ones that interest you. From there, our algorithm analyzes compatibility meritocratically (no photo, no name, no age) — only what truly matters.',
    color: 'sticker-mint',
  },
  {
    num: '03',
    titlePt: 'Participa e cria valor real',
    titleEn: 'Participate and create real value',
    descPt: 'Nesta fase, ganhas experiência prática e contribuis diretamente para uma causa que escolheste. Mostras aquilo que sabes fazer, entras em contacto com o mercado de trabalho e ficas com uma experiência autêntica para acrescentar ao teu CV: validada e certificada.',
    descEn: 'At this stage, you gain practical experience and contribute directly to a cause you chose. You show what you can do, get in touch with the job market and get an authentic experience to add to your CV: validated and certified.',
    color: 'sticker-lilac',
  },
  {
    num: '04',
    titlePt: 'Vê o impacto e avança',
    titleEn: 'See the impact and move forward',
    descPt: 'No final, tu e a entidade deixam uma avaliação mútua: um processo simples, transparente e justo, que reforça qualidade e confiança para futuras oportunidades. Recebes um resumo claro do que fizeste e do que ajudaste a criar. O teu perfil evolui e surgem novas oportunidades à tua medida.',
    descEn: 'In the end, you and the organization leave a mutual evaluation: a simple, transparent and fair process that strengthens quality and trust for future opportunities. You receive a clear summary of what you did and what you helped create. Your profile evolves and new opportunities tailored to you emerge.',
    color: 'sticker-yellow',
  },
];

const Process = () => {
  const { t } = useLanguage();
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-50px' });

  return (
    <section id="process" className="section-y relative overflow-hidden">
      <div className="absolute inset-0 gradient-section-lilac opacity-50" />
      <div className="section-padding max-w-7xl mx-auto relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <span className="sticker sticker-burgundy mb-4">ActivEU Connect</span>
          <h2 className="font-display text-5xl md:text-7xl lg:text-8xl text-foreground mt-4">
            {t('O processo que torna', 'The process that makes')}
            <br />
            <span className="text-gradient-burgundy">
              {t('tudo isto possível', 'all of this possible')}
            </span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
          {steps.map((step, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.12 }}
              className="card-editorial relative"
            >
              <div className="flex items-start gap-4">
                <span className="font-display text-5xl md:text-6xl text-primary/15 leading-none select-none">
                  {step.num}
                </span>
                <div>
                  <span className={`sticker ${step.color} text-xs mb-2`}>
                    {t('Passo', 'Step')} {step.num}
                  </span>
                  <h3 className="font-display text-2xl md:text-3xl text-foreground mt-2 mb-3">
                    {t(step.titlePt, step.titleEn)}
                  </h3>
                  <p className="font-body text-sm text-muted-foreground leading-relaxed">
                    {t(step.descPt, step.descEn)}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Process;
