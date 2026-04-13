import { motion, useReducedMotion } from "framer-motion";

type ChapterItem = {
  id: string;
  label: string;
  index: string;
};

type ChapterRailProps = {
  activeSection: string;
  items: ChapterItem[];
};

export function ChapterRail({ activeSection, items }: ChapterRailProps) {
  const reduceMotion = useReducedMotion();

  return (
    <aside className="chapter-rail" aria-label="Chapter navigation">
      <div className="chapter-rail-track" />
      {items.map((item, index) => {
        const active = activeSection === item.id;
        return (
          <a key={item.id} href={`#${item.id}`} className={`chapter-rail-item ${active ? "chapter-rail-item-active" : ""}`}>
            <motion.span
              className="chapter-rail-dot"
              animate={
                reduceMotion
                  ? undefined
                  : active
                    ? { scale: [1, 1.18, 1], boxShadow: ["0 0 0 rgba(255,176,7,0)", "0 0 0 12px rgba(255,176,7,0.08)", "0 0 0 rgba(255,176,7,0)"] }
                    : undefined
              }
              transition={{ duration: 1.9, repeat: active && !reduceMotion ? Infinity : 0, ease: "easeInOut" }}
            />
            <span className="chapter-rail-index">{item.index || `0${index + 1}`}</span>
            <span className="chapter-rail-label">{item.label}</span>
          </a>
        );
      })}
    </aside>
  );
}
