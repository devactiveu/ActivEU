import { useLanguage } from '@/contexts/LanguageContext';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

const blocks = [
  {
    titlePt: 'Jovens que transformam o seu futuro (e o dos outros)',
    titleEn: 'Youth transforming their future (and others\')',
    descPt: 'Vives um dia em contexto profissional, descobres o que gostas, ganhas experiência e tomas decisões mais conscientes sobre o teu percurso. Tudo isto enquanto fazes a diferença.',
    descEn: 'You live a day in a professional context, discover what you like, gain experience and make more conscious decisions about your path. All while making a difference.',
  },
  {
    titlePt: 'Empresas que descobrem talento com propósito',
    titleEn: 'Companies discovering purpose-driven talent',
    descPt: 'As empresas acolhem jovens motivados, testam compatibilidade, fortalecem a sua reputação social e descobrem futuros colaboradores. Numa iniciativa com impacto humano e comunitário.',
    descEn: 'Companies welcome motivated youth, test compatibility, strengthen their social reputation and discover future employees. In an initiative with human and community impact.',
  },
  {
    titlePt: 'Causas que continuam o seu trabalho essencial',
    titleEn: 'Causes that continue their essential work',
    descPt: 'O valor angariado é integralmente doado a causas solidárias verificadas, ajudando instituições a manter e a fazer crescer projetos que mudam vidas todos os dias.',
    descEn: 'The raised value is fully donated to verified social causes, helping institutions maintain and grow projects that change lives every day.',
  },
  {
    titlePt: 'Um dia que transforma percursos',
    titleEn: 'A day that transforms paths',
    descPt: 'Para uns é o primeiro contacto com o mundo do trabalho. Para outros, o momento em que descobrem a sua vocação. Para todos, uma experiência que marca.',
    descEn: 'For some it\'s the first contact with the world of work. For others, the moment they discover their vocation. For everyone, a life-changing experience.',
  },
  {
    titlePt: 'Impacto mensurável, transparente e partilhado',
    titleEn: 'Measurable, transparent and shared impact',
    descPt: 'Cada ação é acompanhada de dados tangíveis: quanto se angariou, quem se ajudou, o que se aprendeu. Solidariedade com métricas, responsabilidade e verdade.',
    descEn: 'Each action is accompanied by tangible data: how much was raised, who was helped, what was learned. Solidarity with metrics, accountability and truth.',
  },
  {
    titlePt: 'O Solidarity Action Day chega a Portugal (E ainda melhor!)',
    titleEn: 'Solidarity Action Day arrives in Portugal (Even better!)',
    descPt: 'A versão portuguesa nasceu aqui: mais ambiciosa, inovadora e impactante do que nunca! Um modelo que une tecnologia, solidariedade e juventude para criar impacto real em todo o país.',
    descEn: 'The Portuguese version was born here: more ambitious, innovative and impactful than ever! A model that unites technology, solidarity and youth to create real impact across the country.',
  },
  {
    titlePt: 'Quando todos ganham, o mundo muda.',
    titleEn: 'When everyone wins, the world changes.',
    descPt: 'Jovens, empresas e causas unem-se num círculo virtuoso de impacto. É isto que torna o Solidarity Action Day mais do que uma iniciativa. É um novo modelo de cooperação social.',
    descEn: 'Youth, companies and causes unite in a virtuous circle of impact. This is what makes Solidarity Action Day more than an initiative. It\'s a new model of social cooperation.',
  },
];

const stickerColors = ['sticker-burgundy', 'sticker-mint', 'sticker-lilac', 'sticker-yellow', 'sticker-blue', 'sticker-burgundy', 'sticker-mint'];

const WhyBest = () => {
  const { t } = useLanguage();
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-50px' });

  return (
    <section id="why-best" className="section-y gradient-section-warm overflow-hidden">
      <div className="section-padding max-w-7xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <span className="sticker sticker-burgundy mb-4">Why we are the best</span>
          <h2 className="font-display text-5xl md:text-7xl lg:text-8xl text-foreground mt-4">
            {t('Uma ideia simples.', 'A simple idea.')}
            <br />
            <span className="text-gradient-burgundy">
              {t('Um impacto gigantesco.', 'A gigantic impact.')}
            </span>
          </h2>
        </motion.div>

        {/* Horizontal scroll on desktop, vertical on mobile */}
        <div className="flex overflow-x-auto gap-6 pb-6 snap-x snap-mandatory scrollbar-hide lg:grid lg:grid-cols-3 xl:grid-cols-4 lg:overflow-visible lg:gap-6">
          {blocks.map((block, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="card-editorial min-w-[300px] lg:min-w-0 snap-start flex flex-col"
            >
              <span className={`sticker ${stickerColors[i]} text-xs self-start mb-3`}>
                {String(i + 1).padStart(2, '0')}
              </span>
              <h3 className="font-display text-xl md:text-2xl text-foreground mb-3 leading-tight">
                {t(block.titlePt, block.titleEn)}
              </h3>
              <p className="font-body text-sm text-muted-foreground leading-relaxed">
                {t(block.descPt, block.descEn)}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyBest;
