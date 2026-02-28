import { useLanguage } from '@/contexts/LanguageContext';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

const AboutUs = () => {
  const { t } = useLanguage();
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-50px' });

  return (
      <section id="about" className="section-y">
        <div className="section-padding max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            {/* Image */}
            <motion.div
                ref={ref}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.7 }}
            >
              <div className="rounded-3xl overflow-hidden aspect-[4/3]">
                <img
                    src="/Imagens/team.jpg"
                    alt="Equipa ActivEU"
                    className="w-full h-full object-cover"
                />
              </div>
            </motion.div>

            {/* Text */}
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.2 }}
            >
            <span className="sticker sticker-burgundy mb-4">
              {t('Sobre Nós', 'About Us')}
            </span>

              <h2 className="font-display text-4xl md:text-6xl lg:text-7xl text-foreground mt-4 mb-6">
                {t('Quem somos', 'Who we are')}
              </h2>

              <blockquote className="font-display text-2xl md:text-3xl text-foreground/80 leading-snug mb-8 border-l-4 border-primary pl-6">
                {t(
                    'Acreditamos numa coisa simples: os jovens merecem mais oportunidades, mais voz e mais futuro em Portugal.',
                    'We believe in something simple: young people deserve more opportunities, more voice and more future in Portugal.'
                )}
              </blockquote>

              <p className="font-body text-muted-foreground leading-relaxed mb-6">
                {t(
                    'A ActivEU é uma associação jovem europeia que traz o modelo Solidarity Action Day a Portugal. Somos movidos pela solidariedade, transparência, meritocracia e pelo acreditar de que os jovens podem — e devem — estar no centro da mudança social.',
                    'ActivEU is a young European association bringing the Solidarity Action Day model to Portugal. We are driven by solidarity, transparency, meritocracy and the belief that young people can — and should — be at the center of social change.'
                )}
              </p>

              <p className="font-body text-muted-foreground leading-relaxed">
                {t(
                    'Com energia, criatividade e ambição social, construímos pontes entre juventude, empresas e causas — para que cada gesto conte e cada dia faça a diferença.',
                    'With energy, creativity and social ambition, we build bridges between youth, businesses and causes — so that every gesture counts and every day makes a difference.'
                )}
              </p>
            </motion.div>
          </div>
        </div>
      </section>
  );
};

export default AboutUs;