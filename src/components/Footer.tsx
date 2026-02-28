import { useLanguage } from '@/contexts/LanguageContext';

const footerLinks = [
  {
    titlePt: 'Navegação',
    titleEn: 'Navigation',
    links: [
      { pt: 'Início', en: 'Home', href: '#hero' },
      { pt: 'O Que Fazemos', en: 'What We Do', href: '#what-we-do' },
      { pt: 'Processo', en: 'Process', href: '#process' },
      { pt: 'Projetos', en: 'Projects', href: '#projects' },
    ],
  },
  {
    titlePt: 'Sobre',
    titleEn: 'About',
    links: [
      { pt: 'Sobre Nós', en: 'About Us', href: '#about' },
      { pt: 'YouthReach', en: 'YouthReach', href: '#youthreach' },
      { pt: 'Junta-te', en: 'Join Us', href: '#join' },
    ],
  },
  {
    titlePt: 'Contacto',
    titleEn: 'Contact',
    links: [
      { pt: 'geral@activeu.pt', en: 'geral@activeu.pt', href: 'mailto:geral@activeu.pt' },
      { pt: 'activeu.pt', en: 'activeu.pt', href: 'https://activeu.pt' },
    ],
  },
];

const Footer = () => {
  const { t } = useLanguage();

  return (
    <footer className="bg-primary text-primary-foreground section-padding py-16">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-4 gap-12 mb-16">
          {/* Brand */}
          <div>
            <span className="font-display text-3xl tracking-wider">ACTIVEU</span>
            <p className="font-body text-sm opacity-70 mt-3 leading-relaxed">
              {t(
                'Solidarity Action Day em Portugal. Jovens, empresas e causas — juntos por um futuro melhor.',
                'Solidarity Action Day in Portugal. Youth, businesses and causes — together for a better future.'
              )}
            </p>
          </div>

          {/* Link columns */}
          {footerLinks.map((col, i) => (
            <div key={i}>
              <h4 className="font-display text-lg mb-4 opacity-80">
                {t(col.titlePt, col.titleEn)}
              </h4>
              <ul className="space-y-2">
                {col.links.map((link, j) => (
                  <li key={j}>
                    <a
                      href={link.href}
                      className="font-body text-sm opacity-60 hover:opacity-100 transition-opacity"
                    >
                      {t(link.pt, link.en)}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-t border-primary-foreground/20 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="font-body text-xs opacity-50">
            © {new Date().getFullYear()} ActivEU. {t('Todos os direitos reservados.', 'All rights reserved.')}
          </p>
          <div className="flex items-center gap-4">
            <span className="font-body text-xs opacity-50">
              {t('Associação Jovem Europeia', 'Young European Association')}
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
