import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

type Section = { id: string; label: string };

const sectionColors: Record<string, string> = {
  hero: "#1e40ff",
  model: "#ffb020",
  proof: "#e94e77",
  stories: "#b7e934",
  contact: "#ff5e5b",
};

export function SectionNarrator({
  sections,
  activeSection,
}: {
  sections: Section[];
  activeSection: string;
}) {
  const [hoveredId, setHoveredId] = useState<string | null>(null);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <div className="fixed right-6 top-1/2 z-40 hidden -translate-y-1/2 flex-col items-end gap-5 lg:flex">
      <div className="relative flex flex-col items-center gap-5">
        <div className="absolute inset-x-[calc(50%-1px)] top-0 h-full w-px bg-[rgba(30,64,255,0.15)]" />

        {sections.map((section) => {
          const isActive = activeSection === section.id;
          const isHovered = hoveredId === section.id;
          const color = sectionColors[section.id] ?? "#1e40ff";

          return (
            <div
              key={section.id}
              className="relative flex items-center gap-3"
              onMouseEnter={() => setHoveredId(section.id)}
              onMouseLeave={() => setHoveredId(null)}
            >
              <AnimatePresence>
                {isHovered && (
                  <motion.span
                    initial={{ opacity: 0, x: 8 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 8 }}
                    transition={{ duration: 0.18 }}
                    className="rounded-full border border-white/60 bg-white/80 px-3 py-1 text-xs font-semibold text-slate-700 shadow-md backdrop-blur-sm"
                  >
                    {section.label}
                  </motion.span>
                )}
              </AnimatePresence>

              <button
                type="button"
                aria-label={`Go to ${section.label}`}
                onClick={() => scrollTo(section.id)}
                className="relative z-10 flex items-center justify-center transition-transform duration-200 hover:scale-125"
              >
                <motion.div
                  animate={{
                    width: isActive ? 10 : 6,
                    height: isActive ? 10 : 6,
                    backgroundColor: isActive ? color : "rgba(30,64,255,0.3)",
                  }}
                  transition={{ type: "spring", stiffness: 300, damping: 24 }}
                  className="rounded-full"
                />
                {isActive && (
                  <motion.div
                    layoutId="narrator-ring"
                    className="absolute rounded-full"
                    style={{ border: `2px solid ${color}`, inset: -4 }}
                    transition={{ type: "spring", stiffness: 300, damping: 28 }}
                  />
                )}
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
}
