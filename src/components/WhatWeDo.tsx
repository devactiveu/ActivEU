import { useLanguage } from '@/contexts/LanguageContext';
import { motion, useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { ChevronDown } from 'lucide-react';

const pillars = [
  {
    letter: 'A',
    titlePt: 'ActivEU Connect: Solidarity Action Day em Portugal',
    titleEn: 'ActivEU Connect: Solidarity Action Day in Portugal',
    shortPt: 'O Solidarity Action Day em versão portuguesa. Tecnologia, Inovação, Solidariedade e Educação a trabalhar em conjunto.',
    shortEn: 'The Portuguese version of Solidarity Action Day. Technology, Innovation, Solidarity and Education working together.',
    labelsPt: ['Voluntariado Estruturado', 'Certificação e Impacto', 'Doações Transparentes', 'Parcerias Educativas'],
    labelsEn: ['Structured Volunteering', 'Certification & Impact', 'Transparent Donations', 'Educational Partnerships'],
    textPt: 'A ActivEU Connect é a plataforma que implementa o modelo europeu Solidarity Action Day em Portugal. Através desta plataforma digital, os jovens conseguem ter uma experiência de voluntariado estruturado em ambiente profissional. As empresas acolhem participantes e fazem uma contribuição simbólica, doada integralmente a causas sociais verificadas. Cada jovem recebe certificados e relatórios de impacto, refletindo o desenvolvimento de competências e o impacto criado. A ActivEU Connect garante justiça, segurança e transparência em todo o processo: unindo juventude, setores público e privado e causas num só gesto de solidariedade ativa.',
    textEn: 'ActivEU Connect is the platform that implements the European Solidarity Action Day model in Portugal. Through this digital platform, young people can have a structured volunteering experience in a professional environment. Companies welcome participants and make a symbolic contribution, fully donated to verified social causes. Each young person receives certificates and impact reports, reflecting skill development and impact created. ActivEU Connect ensures fairness, security and transparency throughout the process: uniting youth, public and private sectors and causes in a single gesture of active solidarity.',
    color: 'sticker-burgundy',
  },
  {
    letter: 'B',
    titlePt: 'Educação e Formação Juvenil',
    titleEn: 'Youth Education & Training',
    shortPt: 'Capacitar jovens para agir com consciência, competência e liderança.',
    shortEn: 'Empowering youth to act with awareness, competence and leadership.',
    labelsPt: ['Cidadania Europeia', 'Educação', 'Competências Transversais', 'Empregabilidade Juvenil'],
    labelsEn: ['European Citizenship', 'Education', 'Transversal Skills', 'Youth Employability'],
    textPt: 'A ActivEU promove momentos de aprendizagem e reflexão que vão além da experiência prática do Solidarity Action Day. Realizamos formações, palestras, workshops e debates sobre cidadania, ética profissional, direitos humanos, democracia europeia e sustentabilidade. Integramos também apoio psicológico e programas de bem-estar juvenil, que proporcionam acompanhamento profissional e promovem o equilíbrio emocional. Recorremos a abordagens terapêuticas expressivas, artísticas e de contacto com a natureza, criando espaços seguros onde os jovens podem investir em si e no seu bem-estar. Cada atividade procura despertar uma nova geração de jovens capazes de conjugar ambição pessoal com compromisso social.',
    textEn: 'ActivEU promotes learning and reflection moments that go beyond the practical experience of Solidarity Action Day. We conduct training, lectures, workshops and debates on citizenship, professional ethics, human rights, European democracy and sustainability. We also integrate psychological support and youth well-being programs, providing professional guidance and promoting emotional balance. We use expressive, artistic and nature-based therapeutic approaches, creating safe spaces where young people can invest in themselves and their well-being. Each activity seeks to awaken a new generation of young people capable of combining personal ambition with social commitment.',
    color: 'sticker-mint',
  },
  {
    letter: 'C',
    titlePt: 'Ação Comunitária e Encontro Intergeracional',
    titleEn: 'Community Action & Intergenerational Encounters',
    shortPt: 'Iniciativas que aproximam gerações, celebram tradições e fortalecem o sentido de pertença.',
    shortEn: 'Initiatives that bring generations together, celebrate traditions and strengthen belonging.',
    labelsPt: ['Voluntariado Local', 'Cultura e Tradições', 'Inclusão e Acessibilidade', 'Solidariedade Intergeracional'],
    labelsEn: ['Local Volunteering', 'Culture & Traditions', 'Inclusion & Accessibility', 'Intergenerational Solidarity'],
    textPt: 'A ActivEU atua no terreno com projetos que valorizam o contacto humano e a identidade cultural. Organizamos encontros intergeracionais, atividades culturais inclusivas e eventos comunitários que promovem empatia, cooperação e solidariedade local. Estas iniciativas reforçam a coesão social e mostram que a solidariedade também se aprende ao ouvir, cuidar e partilhar.',
    textEn: 'ActivEU operates on the ground with projects that value human contact and cultural identity. We organize intergenerational encounters, inclusive cultural activities and community events that promote empathy, cooperation and local solidarity. These initiatives strengthen social cohesion and show that solidarity is also learned through listening, caring and sharing.',
    color: 'sticker-lilac',
  },
  {
    letter: 'D',
    titlePt: 'Sustentabilidade e Impacto Social',
    titleEn: 'Sustainability & Social Impact',
    shortPt: 'Transparência, responsabilidade e compromisso com resultados mensuráveis.',
    shortEn: 'Transparency, accountability and commitment to measurable results.',
    labelsPt: ['Avaliação de Impacto', 'Relatórios e Auditoria', 'Responsabilidade Ambiental'],
    labelsEn: ['Impact Assessment', 'Reports & Auditing', 'Environmental Responsibility'],
    textPt: 'A ActivEU pauta-se por uma gestão rigorosa, transparente e orientada para o impacto positivo. Todas as atividades são acompanhadas por indicadores sociais, educativos e ambientais, com auditorias externas periódicas e independentes. Promovemos práticas de sustentabilidade ecológica em todas as dimensões da associação, desde a organização de eventos ao funcionamento interno, reduzindo desperdício e incentivando escolhas responsáveis. As empresas participantes, parceiros e jovens podem consultar relatórios detalhados, garantindo confiança e credibilidade. A sustentabilidade, para nós, é agir hoje com responsabilidade pelo futuro: humano, animal e ambiental.',
    textEn: 'ActivEU is guided by rigorous, transparent management oriented towards positive impact. All activities are accompanied by social, educational and environmental indicators, with periodic independent external audits. We promote ecological sustainability practices across all dimensions of the association, from event organization to internal operations, reducing waste and encouraging responsible choices. Participating companies, partners and young people can consult detailed reports, ensuring trust and credibility. Sustainability, for us, means acting today with responsibility for the future: human, animal and environmental.',
    color: 'sticker-yellow',
  },
  {
    letter: 'E',
    titlePt: 'Parcerias e Cooperação Europeia',
    titleEn: 'Partnerships & European Cooperation',
    shortPt: 'Trabalhamos em rede para multiplicar impacto, em Portugal e na Europa.',
    shortEn: 'We work in networks to multiply impact, in Portugal and across Europe.',
    labelsPt: ['SAME Network', 'Municípios, Universidades e Escolas', 'IPDJ e Fundações', 'Cooperação Internacional'],
    labelsEn: ['SAME Network', 'Municipalities, Universities & Schools', 'IPDJ & Foundations', 'International Cooperation'],
    textPt: 'A ActivEU integra o movimento europeu Solidarity Action Day, coordenado pela SAME Network, que liga milhares de jovens e organizações por toda a Europa. Em Portugal, colaboramos com municípios, escolas, universidades, empresas e fundações para adaptar continuamente o modelo ao contexto nacional. Participamos também em fóruns e estruturas de decisão juvenil, porque acreditamos que a juventude deve estar no centro das decisões e da ação. A nossa presença nesses espaços tem um propósito claro: afirmar o impacto presente dos jovens e contribuir ativamente para políticas públicas mais justas, solidárias e visionárias. Acreditamos que a mudança nasce da colaboração e que a cooperação europeia é a base de um futuro construído em conjunto, não apenas sonhado para gerações futuras.',
    textEn: 'ActivEU is part of the European Solidarity Action Day movement, coordinated by the SAME Network, which connects thousands of young people and organizations across Europe. In Portugal, we collaborate with municipalities, schools, universities, companies and foundations to continuously adapt the model to the national context. We also participate in youth forums and decision-making structures, because we believe youth should be at the center of decisions and action. Our presence in these spaces has a clear purpose: to affirm the present impact of young people and actively contribute to fairer, more solidarity-driven and visionary public policies. We believe change is born from collaboration and that European cooperation is the foundation of a future built together, not just dreamed for future generations.',
    color: 'sticker-blue',
  },
];

const WhatWeDo = () => {
  const { t } = useLanguage();
  const [expanded, setExpanded] = useState<number | null>(null);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-50px' });

  return (
    <section id="what-we-do" className="section-y gradient-section-mint">
      <div className="section-padding max-w-7xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <span className="sticker sticker-mint mb-4">
            {t('O que fazemos', 'What we do')}
          </span>
          <h2 className="font-display text-5xl md:text-7xl lg:text-8xl text-foreground mt-4">
            {t('O que fazemos', 'What we do')}
            <br />
            <span className="text-gradient-burgundy">
              {t('(e fazemos com impacto)', '(and do with impact)')}
            </span>
          </h2>
        </motion.div>

        <div className="space-y-4">
          {pillars.map((pillar, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="card-editorial cursor-pointer group"
              onClick={() => setExpanded(expanded === i ? null : i)}
            >
              <div className="flex items-start justify-between gap-4">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-3">
                    <span className={`sticker ${pillar.color} text-xs`}>{pillar.letter}</span>
                    <h3 className="font-display text-2xl md:text-3xl text-foreground">
                      {t(pillar.titlePt, pillar.titleEn)}
                    </h3>
                  </div>
                  <p className="font-body text-sm text-muted-foreground leading-relaxed">
                    {t(pillar.shortPt, pillar.shortEn)}
                  </p>
                </div>
                <ChevronDown
                  className={`mt-2 text-muted-foreground transition-transform duration-300 flex-shrink-0 ${
                    expanded === i ? 'rotate-180' : ''
                  }`}
                  size={24}
                />
              </div>

              {expanded === i && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.3 }}
                  className="mt-6 pt-6 border-t border-border"
                >
                  <div className="flex flex-wrap gap-2 mb-4">
                    {(t(pillar.labelsPt.join('|||'), pillar.labelsEn.join('|||'))).split('|||').map((label, j) => (
                      <span key={j} className={`sticker ${pillar.color} text-xs`}>{label}</span>
                    ))}
                  </div>
                  <p className="font-body text-sm text-foreground/80 leading-relaxed max-w-3xl">
                    {t(pillar.textPt, pillar.textEn)}
                  </p>
                </motion.div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhatWeDo;
