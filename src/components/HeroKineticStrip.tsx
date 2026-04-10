import { useReducedMotion } from "framer-motion";

type HeroKineticStripProps = {
  rowA: string[];
  rowB: string[];
};

export function HeroKineticStrip({ rowA, rowB }: HeroKineticStripProps) {
  const reduce = useReducedMotion();

  if (reduce) {
    return (
      <div className="hero-kinetic-static mt-8 flex flex-wrap gap-2">
        {[...rowA, ...rowB].map((w, i) => (
          <span key={`${w}-${i}`} className="hero-kinetic-word-static">
            {w}
          </span>
        ))}
      </div>
    );
  }

  const dup = (arr: string[]) => [...arr, ...arr, ...arr];

  return (
    <div className="hero-kinetic mt-10 space-y-3 overflow-hidden rounded-2xl border border-primary/[0.08] bg-white/40 py-4 backdrop-blur-md" aria-hidden="true">
      <div className="hero-kinetic-mask">
        <div className="hero-kinetic-track hero-kinetic-track-ltr">
          {dup(rowA).map((w, i) => (
            <span key={`a-${i}`} className="hero-kinetic-word">
              {w}
            </span>
          ))}
        </div>
      </div>
      <div className="hero-kinetic-mask">
        <div className="hero-kinetic-track hero-kinetic-track-rtl">
          {dup(rowB).map((w, i) => (
            <span key={`b-${i}`} className="hero-kinetic-word hero-kinetic-word-alt">
              {w}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
