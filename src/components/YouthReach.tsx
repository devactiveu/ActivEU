import { useLanguage } from '@/contexts/LanguageContext';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { CheckCircle } from 'lucide-react';

const servicesPt = [
  'Diagnóstico Jovem local e organizacional',
  'Metodologias participativas que convocam jovens para cocriar políticas e soluções',
  'Workshops e sessões de co-criação que aproximam entidades da juventude',
  'Formação para equipas internas: como trabalhar com jovens, comunicar para novas gerações, implementar práticas participativas',
  'Orientação em narrativas e comunicação institucional jovem',
  'Apoio técnico em produção audiovisual estratégica',
  'Recomendações práticas e aplicáveis para reforçar programas, serviços e decisões',
];

const servicesEn = [
  'Local and organizational Youth Diagnosis',
  'Participatory methodologies that engage youth in co-creating policies and solutions',
  'Workshops and co-creation sessions that bring organizations closer to youth',
  'Internal team training: working with youth, communicating to new generations, implementing participatory practices',
  'Guidance on narratives and youth institutional communication',
  'Technical support in strategic audiovisual production',
  'Practical and applicable recommendations to strengthen programs, services and decisions',
];

const YouthReach = () => {
  const { t } = useLanguage();
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-50px' });

  return (
    <section id="youthreach" className="section-y gradient-section-mint">
      <div className="section-padding max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <span className="sticker sticker-mint mb-4">
              ActivEU YouthReach & Creative Support
            </span>
            <h2 className="font-display text-4xl md:text-6xl lg:text-7xl text-foreground mt-4 mb-6">
              {t('Ajudamos Entidades', 'We help organizations')}
              <br />
              <span className="text-gradient-burgundy">
                {t('a Chegar aos Jovens', 'reach Youth')}
              </span>
            </h2>
            <p className="font-body text-muted-foreground leading-relaxed mb-8">
              {t(
                'Apoiamos municípios, escolas, empresas e organizações a compreender, envolver e integrar jovens nas suas políticas, iniciativas e decisões. Fazemo-lo através de diagnóstico rigoroso, processos participativos estruturados, formação interna especializada e comunicação institucional adaptada às novas gerações.',
                'We support municipalities, schools, companies and organizations in understanding, engaging and integrating young people in their policies, initiatives and decisions. We do this through rigorous diagnosis, structured participatory processes, specialized internal training and institutional communication adapted to new generations.'
              )}
            </p>
            <p className="font-body text-sm text-foreground/70 italic mb-8">
              {t(
                'Criamos modelos personalizados que aproximam instituições da juventude, com legitimidade, profissionalismo e impacto real.',
                'We create personalized models that bring institutions closer to youth, with legitimacy, professionalism and real impact.'
              )}
            </p>
            <a href="#join" className="pill-button-primary">
              {t('Marcar Reunião', 'Book a Meeting')}
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="card-editorial">
              <h3 className="font-display text-2xl text-foreground mb-6">
                {t('O que oferecemos', 'What we offer')}
              </h3>
              <ul className="space-y-4">
                {(t(servicesPt.join('|||'), servicesEn.join('|||'))).split('|||').map((service, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircle size={18} className="text-primary mt-0.5 flex-shrink-0" />
                    <span className="font-body text-sm text-foreground/80 leading-relaxed">
                      {service}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default YouthReach;
