import { useLanguage } from '@/contexts/LanguageContext';
import { motion, useInView, animate } from 'framer-motion';
import { useRef, useEffect } from 'react';

const stats = [
  { number: 4_000_000, suffix: ' M€+', pt: 'angariados para causas solidárias', en: 'raised for social causes' },
  { number: 300_000, suffix: '+', pt: 'Jovens por ano', en: 'Youth per year' },
  { number: 10, suffix: '+', pt: 'Países Europeus', en: 'European Countries' },
  { number: 60, suffix: '+', pt: 'Projetos apoiados', en: 'Supported Projects' },
];

function CountUp({
                   to,
                   suffix = '',
                   inView,
                 }: {
  to: number;
  suffix?: string;
  inView: boolean;
}) {
  const ref = useRef<HTMLSpanElement | null>(null);

  useEffect(() => {
    if (!ref.current || !inView) return;

    const controls = animate(0, to, {
      duration: 1.8,
      ease: 'easeOut',
      onUpdate(value) {
        const rounded = Math.round(value);
        ref.current!.textContent = rounded.toLocaleString('pt-PT');
      },
    });

    return () => controls.stop();
  }, [to, inView]);

  return (
      <>
        <span ref={ref}>0</span>
        {suffix}
      </>
  );
}

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
                  <div className="font-display text-3xl md:text-4xl">
                    <CountUp to={s.number} suffix={s.suffix} inView={inView} />
                  </div>
                  <div className="font-body text-xs md:text-sm opacity-80">
                    {t(s.pt, s.en)}
                  </div>
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