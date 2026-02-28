import { useLanguage } from '@/contexts/LanguageContext';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { ArrowUpRight } from 'lucide-react';

const projects = [
  {
    titlePt: 'Solidarity Action Day — Piloto Portugal',
    titleEn: 'Solidarity Action Day — Portugal Pilot',
    descPt: 'Primeira edição do modelo europeu adaptado ao contexto português. Jovens de várias escolas participaram em experiências profissionais solidárias.',
    descEn: 'First edition of the European model adapted to the Portuguese context. Students from various schools participated in solidarity professional experiences.',
    tags: ['SAME Network', 'Piloto', '2024'],
    color: 'bg-secondary',
  },
  {
    titlePt: 'Formação em Cidadania Europeia',
    titleEn: 'European Citizenship Training',
    descPt: 'Ciclo de workshops sobre direitos, democracia e participação juvenil na Europa. Em parceria com escolas e municípios.',
    descEn: 'Workshop cycle on rights, democracy and youth participation in Europe. In partnership with schools and municipalities.',
    tags: ['Educação', 'Europa', 'Workshops'],
    color: 'bg-accent',
  },
  {
    titlePt: 'Encontros Intergeracionais',
    titleEn: 'Intergenerational Encounters',
    descPt: 'Programa de atividades que aproximou jovens e seniores através de cultura, tradição e partilha de histórias.',
    descEn: 'Activity program that brought youth and seniors together through culture, tradition and story sharing.',
    tags: ['Comunidade', 'Inclusão', 'Cultura'],
    color: 'bg-secondary',
  },
  {
    titlePt: 'ActivEU Connect — Plataforma Digital',
    titleEn: 'ActivEU Connect — Digital Platform',
    descPt: 'Desenvolvimento da plataforma tecnológica que garante o processo meritocrático, transparente e certificado do Solidarity Action Day.',
    descEn: 'Development of the technology platform ensuring the meritocratic, transparent and certified Solidarity Action Day process.',
    tags: ['Tecnologia', 'Inovação', 'Digital'],
    color: 'bg-accent',
  },
  {
    titlePt: 'Bem-Estar Juvenil & Natureza',
    titleEn: 'Youth Well-being & Nature',
    descPt: 'Programa piloto de apoio psicológico e atividades na natureza, criando espaços seguros para jovens investirem no seu bem-estar.',
    descEn: 'Pilot program of psychological support and nature activities, creating safe spaces for young people to invest in their well-being.',
    tags: ['Saúde Mental', 'Natureza', 'Piloto'],
    color: 'bg-secondary',
  },
  {
    titlePt: 'Parceria CMV & FAJDP',
    titleEn: 'CMV & FAJDP Partnership',
    descPt: 'Colaboração institucional para expandir o modelo ActivEU a nível municipal e nacional, fortalecendo a rede de parceiros.',
    descEn: 'Institutional collaboration to expand the ActivEU model at municipal and national level, strengthening the partner network.',
    tags: ['Parcerias', 'Institucional', 'Rede'],
    color: 'bg-accent',
  },
];

const Projects = () => {
  const { t } = useLanguage();
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-50px' });

  return (
    <section id="projects" className="section-y gradient-section-warm">
      <div className="section-padding max-w-7xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <span className="sticker sticker-yellow mb-4">
            {t('Portefólio', 'Portfolio')}
          </span>
          <h2 className="font-display text-5xl md:text-7xl lg:text-8xl text-foreground mt-4">
            {t('Os nossos projetos!', 'Our projects!')}
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="card-editorial group relative"
            >
              {/* Placeholder image area */}
              <div className={`${project.color} rounded-xl h-48 mb-5 flex items-center justify-center overflow-hidden`}>
                <span className="font-display text-6xl text-primary/10 select-none group-hover:scale-110 transition-transform duration-500">
                  {String(i + 1).padStart(2, '0')}
                </span>
              </div>

              <div className="flex flex-wrap gap-1.5 mb-3">
                {project.tags.map((tag) => (
                  <span key={tag} className="text-xs font-body text-muted-foreground bg-muted px-2 py-0.5 rounded-full">
                    {tag}
                  </span>
                ))}
              </div>

              <h3 className="font-display text-xl md:text-2xl text-foreground mb-2 flex items-center gap-2 group-hover:text-primary transition-colors">
                {t(project.titlePt, project.titleEn)}
                <ArrowUpRight size={18} className="opacity-0 group-hover:opacity-100 transition-opacity" />
              </h3>
              <p className="font-body text-sm text-muted-foreground leading-relaxed">
                {t(project.descPt, project.descEn)}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
