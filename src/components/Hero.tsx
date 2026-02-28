import { useLanguage } from '@/contexts/LanguageContext';
import { motion } from 'framer-motion';

const stickers = [
  { pt: 'Jovem', en: 'Young', className: 'sticker sticker-burgundy', style: { top: '16%', left: '4%' }, anim: 'animate-float' },
  { pt: 'Solidária', en: 'Solidarity', className: 'sticker sticker-mint', style: { top: '10%', right: '30%' }, anim: 'animate-float-delayed' },
  { pt: 'Europeia', en: 'European', className: 'sticker sticker-blue', style: { top: '30%', left: '2%' }, anim: 'animate-float-delayed' },
  { pt: 'Criativa', en: 'Creative', className: 'sticker sticker-lilac', style: { bottom: '28%', left: '8%' }, anim: 'animate-float' },
  { pt: 'Meritocrática', en: 'Merit-based', className: 'sticker sticker-yellow', style: { bottom: '22%', right: '36%' }, anim: 'animate-float-delayed' },
  { pt: 'Inovadora', en: 'Innovative', className: 'sticker sticker-burgundy', style: { top: '44%', left: '10%' }, anim: 'animate-float' },
];

const Hero = () => {
  const { t } = useLanguage();

  return (
    <section id="hero" className="relative min-h-screen flex items-center overflow-hidden section-padding pt-28 pb-16">
      <div className="absolute inset-0 gradient-section-warm opacity-90" />
      <div className="absolute top-0 right-0 w-1/2 h-full gradient-arc opacity-45" />
      <div className="absolute -top-16 left-1/3 h-64 w-64 rounded-full bg-fuchsia-400/20 blur-3xl" />
      <div className="absolute bottom-0 right-16 h-80 w-80 rounded-full bg-cyan-400/20 blur-3xl" />

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
        <div className="lg:col-span-3">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="sticker sticker-lilac mb-6 text-xs uppercase tracking-[0.16em]">
              {t('Plataforma Oficial em Portugal', 'Official Platform in Portugal')}
            </span>
            <h1 className="font-display text-[clamp(3.8rem,11vw,9.6rem)] leading-[0.85] text-gradient-burgundy mb-6">
              ACTIVEU
            </h1>
            <p className="font-display text-2xl md:text-4xl text-foreground/80 mb-4">
              {t(
                'O teu dia. A tua ação. O teu impacto.',
                'Your day. Your action. Your impact.'
              )}
            </p>
            <p className="font-body text-base md:text-lg text-muted-foreground max-w-2xl mb-10 leading-relaxed">
              {t(
                'Uma homepage muito mais vibrante, com energia visual inspirada em templates editoriais modernos: gradientes vivos, cartões glassmorphism e foco em conversão para jovens e empresas.',
                'A far more vibrant homepage with visual energy inspired by modern editorial templates: vivid gradients, glassmorphism cards, and conversion-focused messaging for youth and companies.'
              )}
            </p>
            <div className="flex flex-wrap gap-4">
              <a href="#join" className="pill-button-primary">
                {t('Junta-te ao Movimento', 'Join the Movement')}
              </a>
              <a href="#process" className="pill-button-outline aurora-outline bg-white/60 backdrop-blur-md">
                {t('Percebe como funciona', 'See how it works')}
              </a>
            </div>
          </motion.div>
        </div>

        <motion.div
          className="lg:col-span-2"
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <div className="card-editorial relative overflow-hidden aurora-outline">
            <div className="absolute top-0 right-0 w-32 h-32 rounded-full bg-accent/40 -translate-y-1/2 translate-x-1/2" />
            <div className="absolute -bottom-10 -left-10 w-32 h-32 rounded-full bg-fuchsia-300/35 blur-2xl" />
            <div className="relative">
              <span className="sticker sticker-burgundy mb-4 text-xs">ActivEU Connect</span>
              <h3 className="font-display text-3xl text-foreground mt-4 mb-3">
                {t('Solidarity Action Day', 'Solidarity Action Day')}
              </h3>
              <p className="font-body text-sm text-muted-foreground mb-6 leading-relaxed">
                {t(
                  'Visual premium, mais colorido e moderno para elevar credibilidade e atenção em poucos segundos.',
                  'Premium visual style with richer color and modern motion to boost credibility and attention in seconds.'
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
              <div className="mt-6 flex items-center gap-2 text-muted-foreground">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center font-display text-primary text-lg">
                  ✨
                </div>
                <span className="font-body text-xs">{t('Nova direção visual ActivEU', 'New ActivEU visual direction')}</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
