import { useReducedMotion } from "framer-motion";

type ValueMarqueeProps = {
  labels: string[];
  className?: string;
};

function MarqueeRow({ labels, keyPrefix }: { labels: string[]; keyPrefix: string }) {
  return (
    <div className="value-marquee-row">
      {labels.map((label, i) => (
        <span key={`${keyPrefix}-${i}-${label}`} className="value-marquee-pill">
          {label}
        </span>
      ))}
    </div>
  );
}

export function ValueMarquee({ labels, className = "" }: ValueMarqueeProps) {
  const reduce = useReducedMotion();

  if (!labels.length) {
    return null;
  }

  if (reduce) {
    return (
      <div className={`value-marquee-shell value-marquee-static ${className}`}>
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
        <div className="value-marquee-inner">
          <MarqueeRow labels={labels} keyPrefix="a" />
          <MarqueeRow labels={labels} keyPrefix="b" />
        </div>
      </div>
    </div>
  );
}
