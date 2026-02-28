import { useState } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';

const navItems = [
  { id: 'hero', pt: 'Início', en: 'Home' },
  { id: 'why-best', pt: 'Porquê Nós', en: 'Why Us' },
  { id: 'what-we-do', pt: 'O Que Fazemos', en: 'What We Do' },
  { id: 'process', pt: 'Processo', en: 'Process' },
  { id: 'projects', pt: 'Projetos', en: 'Projects' },
  { id: 'youthreach', pt: 'YouthReach', en: 'YouthReach' },
  { id: 'about', pt: 'Sobre Nós', en: 'About Us' },
  { id: 'join', pt: 'Junta-te', en: 'Join Us' },
];

const Header = () => {
  const { lang, setLang, t } = useLanguage();
  const [menuOpen, setMenuOpen] = useState(false);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    setMenuOpen(false);
  };

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 section-padding pt-4">
        <div className="flex items-center justify-between py-3 px-4 md:px-6 rounded-2xl border border-border/70 bg-white/90 backdrop-blur-lg shadow-md shadow-primary/10">
          <div className="flex items-center gap-3">
            <button onClick={() => scrollTo('hero')} className="font-display text-2xl md:text-3xl text-gradient-burgundy tracking-wider">
              ACTIVEU
            </button>
            <span className="hidden md:block text-xs text-muted-foreground font-body max-w-[180px] leading-tight">
              {t('Solidarity Action Day em Portugal', 'Solidarity Action Day in Portugal')}
            </span>
          </div>

          <div className="flex items-center gap-3">
            <div className="flex items-center rounded-full border border-border bg-card/95 overflow-hidden text-sm font-body">
              <button
                onClick={() => setLang('pt')}
                className={`px-3 py-1.5 transition-colors ${lang === 'pt' ? 'bg-primary text-primary-foreground' : 'text-muted-foreground hover:text-foreground'}`}
              >
                PT
              </button>
              <button
                onClick={() => setLang('en')}
                className={`px-3 py-1.5 transition-colors ${lang === 'en' ? 'bg-primary text-primary-foreground' : 'text-muted-foreground hover:text-foreground'}`}
              >
                EN
              </button>
            </div>

            <button onClick={() => setMenuOpen(true)} className="pill-button-small">
              MENU
            </button>
          </div>
        </div>
      </header>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-[100] bg-[radial-gradient(circle_at_15%_10%,hsl(var(--eu-gold)/0.25),transparent_35%),linear-gradient(135deg,hsl(var(--eu-blue)),hsl(var(--eu-blue-light)))] flex flex-col items-center justify-center"
          >
            <button
              onClick={() => setMenuOpen(false)}
              className="absolute top-6 right-6 text-primary-foreground hover:opacity-70 transition-opacity"
            >
              <X size={32} />
            </button>

            <nav className="flex flex-col items-center gap-6">
              {navItems.map((item, i) => (
                <motion.button
                  key={item.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.05 + 0.1 }}
                  onClick={() => scrollTo(item.id)}
                  className="font-display text-4xl md:text-6xl text-primary-foreground hover:opacity-80 transition-opacity tracking-wide"
                >
                  {lang === 'pt' ? item.pt : item.en}
                </motion.button>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Header;
