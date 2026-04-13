import { useEffect } from "react";
import { ArrowLeft, Compass, Sparkles } from "lucide-react";
import { useLocation } from "react-router-dom";
import { AnimatedHeading } from "@/components/activeu/AnimatedHeading";
import { DoodleArrow, DoodleBadge, DoodleCluster, DoodleSpark, DoodleStamp, MorphBlob, RibbonTrace, SectionTransition, StickerNote } from "@/components/activeu/DoodleSystem";
import { CursorGlow, FadeIn, Magnetic, Reveal3D, ScrollProgress } from "@/components/activeu/motion-primitives";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="site-root min-h-screen bg-background text-foreground">
      <div className="site-grain" aria-hidden="true" />
      <CursorGlow />
      <ScrollProgress />

      <main className="section-shell relative flex min-h-screen items-center py-24">
        <MorphBlob className="notfound-blob notfound-blob-a" />
        <MorphBlob className="notfound-blob notfound-blob-b" />
        <DoodleCluster className="notfound-doodle notfound-doodle-a" accent="amber" />
        <DoodleCluster className="notfound-doodle notfound-doodle-b" accent="blue" />
        <DoodleArrow className="notfound-arrow" accent="coral" />
        <DoodleSpark className="notfound-spark" accent="amber" />
        <DoodleBadge text="404" className="notfound-badge" />
        <StickerNote className="notfound-sticker" text="rota perdida" />

        <div className="grid w-full gap-10 xl:grid-cols-[1.05fr_0.95fr] xl:items-center">
          <div className="relative z-[2]">
            <FadeIn>
              <AnimatedHeading
                mode="hero"
                eyebrow={<><Sparkles size={14} />Pagina nao encontrada</>}
                lines={["A rota perdeu-se,", "mas a energia", "continua aqui."]}
                body={`Tentaste abrir "${location.pathname}", mas essa pagina nao existe. Em vez de um 404 generico, transformamos esta falha num pequeno momento de marca.`}
                underline
              />
            </FadeIn>

            <FadeIn delay={0.16} className="mt-10 flex flex-wrap gap-4">
              <Magnetic>
                <a href="/" className="site-button site-button-primary site-button-shimmer">
                  Voltar para a homepage
                  <ArrowLeft size={16} />
                </a>
              </Magnetic>
              <a href="/#stories" className="site-button site-button-secondary">
                Explorar historias
              </a>
            </FadeIn>

            <div className="mt-10 notfound-quick-links">
              {[
                { label: "Hero", href: "/#hero" },
                { label: "Experiencia", href: "/#experience" },
                { label: "Prova", href: "/#proof" },
                { label: "Contacto", href: "/#join" },
              ].map((item) => (
                <a key={item.label} href={item.href} className="floating-chip">
                  {item.label}
                </a>
              ))}
            </div>
          </div>

          <Reveal3D className="notfound-scene">
            <div className="notfound-scene-card">
              <DoodleStamp className="notfound-scene-stamp" accent="coral" text="reset route" />
              <RibbonTrace className="notfound-scene-ribbon" accent="blue" />
              <div className="notfound-scene-grid" />
              <div className="notfound-scene-orb notfound-scene-orb-a" />
              <div className="notfound-scene-orb notfound-scene-orb-b" />
              <div className="notfound-scene-ring" />
              <div className="notfound-scene-center">
                <Compass size={28} />
                <span>404</span>
              </div>
              <div className="notfound-scene-copy">
                <strong>ActivEU navigation reset</strong>
                <p>O site continua coeso mesmo fora da rota esperada.</p>
              </div>
            </div>
          </Reveal3D>
        </div>
      </main>
      <SectionTransition variant="glow" />
    </div>
  );
};

export default NotFound;
