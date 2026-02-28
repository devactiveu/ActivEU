import { useLanguage } from '@/contexts/LanguageContext';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Quote } from 'lucide-react';

const testimonials = [
  {
    quotePt: 'A experiência foi transformadora. Descobri o que quero fazer e ainda ajudei uma causa incrível.',
    quoteEn: 'The experience was transformative. I discovered what I want to do and helped an amazing cause.',
    namePt: 'Participante Anónimo/a',
    nameEn: 'Anonymous Participant',
    rolePt: 'Estudante, 17 anos',
    roleEn: 'Student, 17 years old',
  },
  {
    quotePt: 'Recebemos jovens com imensa motivação. A ActivEU trouxe-nos uma visão nova sobre responsabilidade social.',
    quoteEn: 'We received highly motivated young people. ActivEU brought us a new vision on social responsibility.',
    namePt: 'Empresa Parceira',
    nameEn: 'Partner Company',
    rolePt: 'Responsável de RH',
    roleEn: 'HR Manager',
  },
  {
    quotePt: 'Os fundos que recebemos permitiram manter o nosso programa de apoio alimentar durante mais três meses.',
    quoteEn: 'The funds we received allowed us to maintain our food support program for three more months.',
    namePt: 'Instituição Solidária',
    nameEn: 'Social Institution',
    rolePt: 'Direção',
    roleEn: 'Board',
  },
];

const Testimonials = () => {
  const { t } = useLanguage();
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-50px' });

  return (
    <section className="section-y">
      <div className="section-padding max-w-7xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <span className="sticker sticker-lilac mb-4">
            {t('Testemunhos', 'Testimonials')}
          </span>
          <h2 className="font-display text-5xl md:text-7xl text-foreground mt-4">
            {t('Falam de nós', 'They talk about us')}
            <br />
            <span className="text-gradient-burgundy">
              {t('(e nós coramos)', '(and we blush)')}
            </span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="card-editorial flex flex-col"
            >
              <Quote size={28} className="text-primary/20 mb-4" />
              <p className="font-body text-foreground/80 leading-relaxed flex-1 mb-6 italic">
                "{t(item.quotePt, item.quoteEn)}"
              </p>
              <div className="border-t border-border pt-4">
                <p className="font-body font-semibold text-sm text-foreground">
                  {t(item.namePt, item.nameEn)}
                </p>
                <p className="font-body text-xs text-muted-foreground">
                  {t(item.rolePt, item.roleEn)}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        <p className="text-center text-xs text-muted-foreground mt-8 font-body">
          {t('Testemunhos ilustrativos — a serem atualizados com feedback real', 'Illustrative testimonials — to be updated with real feedback')}
        </p>
      </div>
    </section>
  );
};

export default Testimonials;
