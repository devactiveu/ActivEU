import { useLanguage } from '@/contexts/LanguageContext';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { ArrowRight } from 'lucide-react';

const JoinUs = () => {
  const { t } = useLanguage();
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-50px' });

  return (
    <section id="join" className="section-y gradient-section-lilac">
      <div className="section-padding max-w-5xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="card-editorial text-center py-16 md:py-20 px-8 md:px-16 relative overflow-hidden"
        >
          {/* Decorative elements */}
          <div className="absolute top-0 left-0 w-40 h-40 rounded-full bg-accent/20 -translate-x-1/2 -translate-y-1/2" />
          <div className="absolute bottom-0 right-0 w-56 h-56 rounded-full bg-secondary -translate-x-1/4 translate-y-1/3" />

          <div className="relative z-10">
            <span className="sticker sticker-burgundy mb-6">
              {t('Tu', 'You')}
            </span>
            <h2 className="font-display text-5xl md:text-7xl lg:text-8xl text-foreground mt-4 mb-4">
              {t('Temos lugar para ti!', "There's a place for you!")}
            </h2>
            <p className="font-body text-lg text-muted-foreground mb-10 max-w-2xl mx-auto leading-relaxed">
              {t(
                'Se acreditas que os jovens podem mudar o mundo — e queres fazer parte dessa mudança — estamos à tua espera. Há espaço para todas as ideias, todas as competências e toda a vontade.',
                "If you believe young people can change the world — and you want to be part of that change — we're waiting for you. There's room for all ideas, all skills and all willingness."
              )}
            </p>
            <a href="mailto:geral@activeu.pt" className="pill-button-primary inline-flex items-center gap-2">
              {t('Junta-te a nós!', 'Join us!')}
              <ArrowRight size={18} />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default JoinUs;
