import { useLanguage } from '@/contexts/LanguageContext';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

const stats = [
  { value: '4M€+', pt: 'angariados para causas solidárias', en: 'raised for social causes' },
  { value: '300 000+', pt: 'Jovens por ano', en: 'Youth per year' },
  { value: '10+', pt: 'Países Europeus', en: 'European Countries' },
  { value: '60+', pt: 'Projetos apoiados', en: 'Supported Projects' },
];

const Stats = () => {
  const { t } = useLanguage();
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section className="section-padding py-12">
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 30 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.7 }}
        className="max-w-6xl mx-auto"
      >
        <div className="stat-band">
          {stats.map((s, i) => (
            <div key={i} className="text-center px-4">
              <div className="font-display text-3xl md:text-4xl">{s.value}</div>
              <div className="font-body text-xs md:text-sm opacity-80">{t(s.pt, s.en)}</div>
            </div>
          ))}
        </div>
        <p className="text-center text-xs text-muted-foreground mt-3 font-body">
          {t('Dados globais da iniciativa', 'Global initiative data')}
        </p>
      </motion.div>
    </section>
  );
};

export default Stats;
