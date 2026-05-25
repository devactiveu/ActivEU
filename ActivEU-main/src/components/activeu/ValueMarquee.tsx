import { useReducedMotion } from "framer-motion";

export function ValueMarquee({ labels, className = "" }: { labels: string[]; className?: string }) {
  const reduceMotion = useReducedMotion();

  if (!labels.length) return null;

  if (reduceMotion) {
    return (
      <div className={`value-marquee-shell ${className}`}>
        <div className="flex flex-wrap items-center justify-center gap-3 px-4 py-3">
          {labels.map((label) => (
            <span key={label} className="value-marquee-pill">
              {label}
            </span>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className={`value-marquee-shell ${className}`} aria-hidden="true">
      <div className="value-marquee-fade value-marquee-fade-left" />
      <div className="value-marquee-fade value-marquee-fade-right" />
      <div className="value-marquee-viewport">
        <div className="value-marquee-track">
          {[...labels, ...labels].map((label, index) => (
            <span key={`${label}-${index}`} className="value-marquee-pill">
              {label}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
