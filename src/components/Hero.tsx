import { useLanguage } from '@/contexts/LanguageContext';
import { motion } from 'framer-motion';

const stickers = [
  { pt: 'Jovem', en: 'Young', className: 'sticker sticker-burgundy', style: { top: '15%', left: '5%' }, anim: 'animate-float' },
  { pt: 'Solidária', en: 'Solidarity', className: 'sticker sticker-mint', style: { top: '8%', right: '32%' }, anim: 'animate-float-delayed' },
  { pt: 'Europeia', en: 'European', className: 'sticker sticker-blue', style: { top: '28%', left: '2%' }, anim: 'animate-float-delayed' },
  { pt: 'Criativa', en: 'Creative', className: 'sticker sticker-lilac', style: { bottom: '30%', left: '8%' }, anim: 'animate-float' },
  { pt: 'Meritocrática', en: 'Merit-based', className: 'sticker sticker-yellow', style: { bottom: '22%', right: '35%' }, anim: 'animate-float-delayed' },
  { pt: 'Transparente', en: 'Transparent', className: 'sticker sticker-burgundy', style: { top: '42%', left: '12%' }, anim: 'animate-float' },
];

const Hero = () => {
  const { t } = useLanguage();

  return (
    <section id="hero" className="relative min-h-screen flex items-center overflow-hidden section-padding pt-24">
      {/* Decorative gradient */}
      <div className="absolute inset-0 gradient-section-warm opacity-60" />
      <div className="absolute top-0 right-0 w-1/2 h-full gradient-arc opacity-30" />

      {/* Floating stickers - hidden on mobile */}
      <div className="hidden lg:block">
        {stickers.map((s, i) => (
          <div
            key={i}
            className={`absolute ${s.className} ${s.anim} z-10 select-none`}
            style={s.style}
          >
            {t(s.pt, s.en)}
          </div>
        ))}
      </div>

      <div className="relative z-20 w-full max-w-7xl mx-auto grid lg:grid-cols-5 gap-12 lg:gap-8 items-center">
        {/* Left - Main content */}
        <div className="lg:col-span-3">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="font-display text-[clamp(4rem,12vw,10rem)] leading-[0.85] text-gradient-burgundy mb-6">
              ACTIVEU
            </h1>
            <p className="font-display text-2xl md:text-4xl text-foreground/80 mb-4">
              {t(
                'O teu dia. A tua ação. O teu impacto.',
                'Your day. Your action. Your impact.'
              )}
            </p>
            <p className="font-body text-base md:text-lg text-muted-foreground max-w-xl mb-10 leading-relaxed">
              {t(
                'Um dia de experiência profissional real que substitui um dia de escola. O valor gerado é doado integralmente a causas sociais verificadas. Jovens, empresas e solidariedade — juntos.',
                'A day of real professional experience replacing a school day. The value generated is fully donated to verified social causes. Youth, businesses and solidarity — together.'
              )}
            </p>
            <div className="flex flex-wrap gap-4">
              <a href="#join" className="pill-button-primary">
                {t('Junta-te ao Movimento', 'Join the Movement')}
              </a>
              <a href="#process" className="pill-button-outline">
                {t('Percebe como funciona', 'See how it works')}
              </a>
            </div>
          </motion.div>
        </div>

        {/* Right - ActivEU Connect card */}
        <motion.div
          className="lg:col-span-2"
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <div className="card-editorial relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 rounded-full bg-accent/40 -translate-y-1/2 translate-x-1/2" />
            <div className="relative">
              <span className="sticker sticker-burgundy mb-4 text-xs">ActivEU Connect</span>
              <h3 className="font-display text-3xl text-foreground mt-4 mb-3">
                {t('Solidarity Action Day', 'Solidarity Action Day')}
              </h3>
              <p className="font-body text-sm text-muted-foreground mb-6 leading-relaxed">
                {t(
                  'Plataforma que liga jovens a empresas num dia de experiência profissional solidária. Meritocrática, transparente e certificada.',
                  'Platform connecting youth to companies in a day of solidarity professional experience. Meritocratic, transparent, and certified.'
                )}
              </p>
              <div className="flex flex-wrap gap-2">
                {[
                  t('Voluntariado', 'Volunteering'),
                  t('Certificação', 'Certification'),
                  t('Impacto', 'Impact'),
                ].map((label) => (
                  <span key={label} className="sticker sticker-mint text-xs">{label}</span>
                ))}
              </div>
              {/* Lynx placeholder */}
              <div className="mt-6 flex items-center gap-2 text-muted-foreground">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center font-display text-primary text-lg">
                  🐾
                </div>
                <span className="font-body text-xs">{t('Lince — símbolo ActivEU', 'Lynx — ActivEU symbol')}</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
